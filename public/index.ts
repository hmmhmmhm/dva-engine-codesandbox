
import * as Script from '../src/script'

console.log(`Script`)
console.log(Script)

let collectedCode = ``
try{
    // Collect Transpiled Codes
    // @ts-ignore
    collectedCode = Script.default.collectedCodes.join(`\n`)

    // Clear After Collected Data
    // @ts-ignore
    Script.default.collectedCodes = []
}catch(e){}

let appElement = document.getElementById("app")
if(appElement){
    appElement.innerHTML = `
    <h1>Result</h1>
    <div>
    <textarea id="text" style="
        display: inline-block;
        vertical-align: top;
        width: 500px;
        height: 300px;
        margin-right: 10px;
    "></textarea>
    </div>
    `
}
let textElement = document.getElementById("text")
if(textElement) textElement.textContent = collectedCode