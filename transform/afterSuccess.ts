import { getLogger } from './logger'
import cp, { exec, spawn } from 'child_process'
import { mkdirSync, writeFileSync, readFileSync } from 'fs'
import { resolve } from 'path'


let parcelHandler: cp.ChildProcess | undefined = undefined

const Logger = getLogger()
export const resultParse = (result) => {

    // Check Rule Data
    let Rule = result.default
    if(!Rule
        || typeof Rule['collectedCodes'] == 'undefined'
        || !Array.isArray(Rule['collectedCodes'])){

        Logger.debug(`No rule declaration detected.`)
        return
    }

    let collectedCodes: string = Rule.collectedCodes.join(`\n\n`)
    let afterTemplate = String(readFileSync(`${process.cwd()}/transform/afterTemplate.ts`))
    let indexCode = afterTemplate.replace(`%collectedCode%`, collectedCodes)

    try{ mkdirSync(`${process.cwd()}/release`) } catch(e) {}
    writeFileSync(`${process.cwd()}/release/index.js`, indexCode)

    console.log(``)
    Logger.debug(`Finished initialization sequence.`)

    if(parcelHandler){
        // close
        parcelHandler.kill()
        parcelHandler = undefined
    }
    // parcel public/index.html --open
    Logger.debug(`Parcel Server Running...`)
    parcelHandler = exec(`parcel release/index.html`)

    console.log(``)
    if(parcelHandler.stdout)
        parcelHandler.stdout.on('data', (data) => {
            console.log(data)
        })
    if(parcelHandler.stderr)
        parcelHandler.stderr.on('data', (data) => {
            console.log(data)
        })
    parcelHandler.on('close', (code) => {
        Logger.debug(`Parcel Server Closed.`)
    })
}

export const clearRequireCache = () => {
    Object.keys(require.cache).forEach((key) => {
        delete require.cache[key]
    })
}

/**
 * Trying Load Script
 */
export const loadUserScript = () => {
    console.log(``)
    Logger.debug(`Load User Script... \t[/src/script.ts]`)

    import(resolve(`${process.cwd()}/dist/src/script.js`))
    .then((result) => {
        Logger.debug(`Loaded User Script. \t[/src/script.ts]`)
        resultParse(result)
    })
    .catch((e) => {
        // If failed, Load Example Script
        Logger.debug(`Can't find User Script \t[/src/script.ts]`)
        console.log(``)

        Logger.debug(`Load Test Script... \t[/test/script.ts]`)

        import(`${process.cwd()}/dist/test/script.js`)
            .then((result)=>{
                Logger.debug(`Loaded Test Script. \t[/test/script.ts]`)
                resultParse(result)
            })
            .catch((e)=>{
                Logger.debug(`Can't find Test Script \t[/test/script.ts]`)
            })
            .finally(clearRequireCache)
    })
    .finally(clearRequireCache)
}

try{
    if(`${process.argv[1]}` == __filename){

        Logger.debug(`Pre Built All User Scripts...`)
        exec('ttsc', (error, body)=>{
            if(error){
                Logger.debug(`An error occurred while building.`)
                console.log(error)
                console.log(body)
                return
            }
            loadUserScript()
        })
    }else {
        loadUserScript()
    }
}catch(e){}