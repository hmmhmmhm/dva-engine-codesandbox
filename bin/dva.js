(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.dva = {}));
}(this, function (exports) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	var __assign = function() {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};

	function __rest(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}

	function __decorate(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}

	function __param(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	}

	function __metadata(metadataKey, metadataValue) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	}

	function __awaiter(thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}

	function __generator(thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	}

	function __exportStar(m, exports) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}

	function __values(o) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
	    if (m) return m.call(o);
	    return {
	        next: function () {
	            if (o && i >= o.length) o = void 0;
	            return { value: o && o[i++], done: !o };
	        }
	    };
	}

	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m) return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	    }
	    catch (error) { e = { error: error }; }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"])) m.call(i);
	        }
	        finally { if (e) throw e.error; }
	    }
	    return ar;
	}

	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}

	function __spreadArrays() {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	}
	function __await(v) {
	    return this instanceof __await ? (this.v = v, this) : new __await(v);
	}

	function __asyncGenerator(thisArg, _arguments, generator) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var g = generator.apply(thisArg, _arguments || []), i, q = [];
	    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
	    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
	    function fulfill(value) { resume("next", value); }
	    function reject(value) { resume("throw", value); }
	    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
	}

	function __asyncDelegator(o) {
	    var i, p;
	    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
	}

	function __asyncValues(o) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var m = o[Symbol.asyncIterator], i;
	    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
	    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
	    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
	}

	function __makeTemplateObject(cooked, raw) {
	    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
	    return cooked;
	}
	function __importStar(mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	    result.default = mod;
	    return result;
	}

	function __importDefault(mod) {
	    return (mod && mod.__esModule) ? mod : { default: mod };
	}

	var tslib_es6 = /*#__PURE__*/Object.freeze({
		__extends: __extends,
		get __assign () { return __assign; },
		__rest: __rest,
		__decorate: __decorate,
		__param: __param,
		__metadata: __metadata,
		__awaiter: __awaiter,
		__generator: __generator,
		__exportStar: __exportStar,
		__values: __values,
		__read: __read,
		__spread: __spread,
		__spreadArrays: __spreadArrays,
		__await: __await,
		__asyncGenerator: __asyncGenerator,
		__asyncDelegator: __asyncDelegator,
		__asyncValues: __asyncValues,
		__makeTemplateObject: __makeTemplateObject,
		__importStar: __importStar,
		__importDefault: __importDefault
	});

	var heroConstant = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(heroConstant);
	var heroConstant_1 = heroConstant.Default;

	var slotRange = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param num Type Any Number.
	 * Then can see list of available number lists. */
	exports.Default = function (num) { return num; };
	});

	unwrapExports(slotRange);
	var slotRange_1 = slotRange.Default;

	var teamConstant = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(teamConstant);
	var teamConstant_1 = teamConstant.Default;

	var variable = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(variable);
	var variable_1 = variable.Default;

	var eventPlayer = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(eventPlayer);
	var eventPlayer_1 = eventPlayer.Default;

	var number = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 실수 형식의 상수입니다.
	 */
	exports.number = function (
	/**
	 * 실수 형식의 상수입니다.
	 */
	number) {
	    // @ts-ignore
	    return "Number(" + number + ")";
	};
	});

	unwrapExports(number);
	var number_1 = number.number;

	var add = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 두 숫자 또는 벡터의 합입니다.
	 */
	exports.add = function (
	/**
	 * 좌측 피연산자입니다.
	 * 결과값이 숫자 또는 벡터로
	 * 나올 수 있는 아무 값이나
	 * 사용할 수 있습니다.
	 * - `Type.Add.`
	 */
	value1, 
	/**
	 * 우측 피연산자입니다.
	 * 결과값이 숫자 또는 벡터로
	 * 나올 수 있는 아무 값이나
	 * 사용할 수 있습니다.
	 * - `Type.Add.`
	 */
	value2) {
	    // @ts-ignore
	    return "Add(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(add);
	var add_1 = add.add;

	var angleDifference = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 두 각을 비교한 각도 차이(단위: 도) 입니다. 두 각을 서로 +/- 180
	 * 이내에서 펼쳐서 두 번째 각이 첫 번째 각보다 크다면 결과각은 양수입니다.
	 * 이외의 경우 0이나 음수가 될 수 있습니다.
	 */
	exports.angleDifference = function (
	/**
	 * 결과각을 도출하기 위한 두 각 중 하나입니다.
	 * - `Type.Number.`
	 */
	angle1, 
	/**
	 * 결과각을 도출하기 위한 두 각 중 하나입니다.
	 * - `Type.Number.`
	 */
	angle2) {
	    // @ts-ignore
	    return "Angle Difference(" + angle1 + ", " + angle2 + ")";
	};
	});

	unwrapExports(angleDifference);
	var angleDifference_1 = angleDifference.angleDifference;

	var angleBetweenVectors = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 두 방향 벡터 (정규화 불필요) 사이의 각입니다. (단위: 도)
	 */
	exports.angleBetweenVectors = function (
	/**
	 * 사이의 각(단위: 도)을 측정하기 위한 두 방향 벡터 중 하나입니다.
	 * 이 벡터를 미리 정규화할 필요는 없습니다.
	 * - `Type.Vector.`
	 */
	vector1, 
	/**
	 * 사이의 각(단위: 도)을 측정하기 위한 두 방향 벡터 중 하나입니다.
	 * 이 벡터를 미리 정규화할 필요는 없습니다.
	 * - `Type.Vector.`
	 */
	vector2) {
	    // @ts-ignore
	    return "Angle Between Vectors(" + vector1 + ", " + vector2 + ")";
	};
	});

	unwrapExports(angleBetweenVectors);
	var angleBetweenVectors_1 = angleBetweenVectors.angleBetweenVectors;

	var altitudeOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 표면으로부터 측정한 플레이어의 높이(미터)입니다.
	 * 플레이어가 표면에 있으면 0입니다.
	 */
	exports.altitudeOf = function (
	/**
	 * 고도 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Altitude Of(" + player + ")";
	};
	});

	unwrapExports(altitudeOf);
	var altitudeOf_1 = altitudeOf.altitudeOf;

	var countOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 배열 내 요소의 수입니다.
	 */
	exports.countOf = function (
	/**
	 * - `Type.Array.`
	 */
	array) {
	    // @ts-ignore
	    return "Count Of(" + array + ")";
	};
	});

	unwrapExports(countOf);
	var countOf_1 = countOf.countOf;

	var arccosineInDegrees = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 각(단위: 도)의 아크코사인 값입니다.
	 */
	exports.arccosineInDegrees = function (
	/**
	 * 함수의 입력값입니다.
	 * - `Type.Number.`
	 */
	value) {
	    // @ts-ignore
	    return "Arccosine In Degrees(" + value + ")";
	};
	});

	unwrapExports(arccosineInDegrees);
	var arccosineInDegrees_1 = arccosineInDegrees.arccosineInDegrees;

	var arccosineInRadians = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 각(단위: RAD)의 아크코사인 값입니다.
	 */
	exports.arccosineInRadians = function (
	/**
	 * 함수의 입력값입니다.
	 * - `Type.Number.`
	 */
	value) {
	    // @ts-ignore
	    return "Arccosine In Radians(" + value + ")";
	};
	});

	unwrapExports(arccosineInRadians);
	var arccosineInRadians_1 = arccosineInRadians.arccosineInRadians;

	var arcsineInDegrees = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 각(단위: 도)의 아크사인 값입니다.
	 */
	exports.arcsineInDegrees = function (
	/**
	 * 함수의 입력값입니다.
	 * - `Type.Number.`
	 */
	value) {
	    // @ts-ignore
	    return "Arcsine In Degrees(" + value + ")";
	};
	});

	unwrapExports(arcsineInDegrees);
	var arcsineInDegrees_1 = arcsineInDegrees.arcsineInDegrees;

	var arcsineInRadians = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 각(단위: RAD)의 아크사인 값입니다.
	 */
	exports.arcsineInRadians = function (
	/**
	 * 함수의 입력값입니다.
	 * - `Type.Number.`
	 */
	value) {
	    // @ts-ignore
	    return "Arcsine In Radians(" + value + ")";
	};
	});

	unwrapExports(arcsineInRadians);
	var arcsineInRadians_1 = arcsineInRadians.arcsineInRadians;

	var arctangentInDegrees = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 분자와 분모(단위: 도)의 아크탄젠트 값입니다.
	 * (흔히 ATAN2 로 불림)
	 */
	exports.arctangentInDegrees = function (
	/**
	 * 함수의 분자 입력 정보입니다.
	 * - `Type.Number.`
	 */
	numerator, 
	/**
	 * 함수의 분모 입력 정보입니다.
	 * - `Type.Number.`
	 */
	denominator) {
	    // @ts-ignore
	    return "Arctangent In Degrees(" + numerator + ", " + denominator + ")";
	};
	});

	unwrapExports(arctangentInDegrees);
	var arctangentInDegrees_1 = arctangentInDegrees.arctangentInDegrees;

	var arctangentInRadians = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 분자와 분모(단위: RAD)의 아크탄젠트 값입니다.
	 * (흔히 ATAN2 로 불림)
	 */
	exports.arctangentInRadians = function (
	/**
	 * 함수의 분자 입력 정보입니다.
	 * - `Type.Number.`
	 */
	numerator, 
	/**
	 * 함수의 분모 입력 정보입니다.
	 * - `Type.Number.`
	 */
	denominator) {
	    // @ts-ignore
	    return "Arctangent In Radians(" + numerator + ", " + denominator + ")";
	};
	});

	unwrapExports(arctangentInRadians);
	var arctangentInRadians_1 = arctangentInRadians.arctangentInRadians;

	var cosineFromDegrees = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 각(단위: 도)의 코사인 값입니다.
	 */
	exports.cosineFromDegrees = function (
	/**
	 * 각(단위: 도)입니다.
	 * - `Type.Number.`
	 */
	angle) {
	    // @ts-ignore
	    return "Cosine From Degrees(" + angle + ")";
	};
	});

	unwrapExports(cosineFromDegrees);
	var cosineFromDegrees_1 = cosineFromDegrees.cosineFromDegrees;

	var cosineFromRadians = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 각(단위: RAD)의 코사인 값입니다.
	 */
	exports.cosineFromRadians = function (
	/**
	 * 각(단위: RAD)입니다.
	 * - `Type.Number.`
	 */
	angle) {
	    // @ts-ignore
	    return "Cosine From Radians(" + angle + ")";
	};
	});

	unwrapExports(cosineFromRadians);
	var cosineFromRadians_1 = cosineFromRadians.cosineFromRadians;

	var controlModeScoringPercentage = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 쟁탈 전장에서 지정된 팀의 점수 비율입니다.
	 */
	exports.controlModeScoringPercentage = function (
	/**
	 * 점수 비율 정보를 가져올 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Control Mode Scoring Percentage(" + team + ")";
	};
	});

	unwrapExports(controlModeScoringPercentage);
	var controlModeScoringPercentage_1 = controlModeScoringPercentage.controlModeScoringPercentage;

	var globalVariable = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.globalVariable = function () {
	    // @ts-ignore
	    return "Global Variable";
	};
	});

	unwrapExports(globalVariable);
	var globalVariable_1 = globalVariable.globalVariable;

	var playerVariable = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어가 가진 플레이어 변수의 현재 값입니다.
	 */
	exports.playerVariable = function (
	/**
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * - `Type.Variable.`
	 */
	variable) {
	    // @ts-ignore
	    return "Player Variable(" + player + ", " + variable + ")";
	};
	});

	unwrapExports(playerVariable);
	var playerVariable_1 = playerVariable.playerVariable;

	var distanceBetween = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 두 위치 사이의 거리(미터)입니다.
	 */
	exports.distanceBetween = function (
	/**
	 * 거리 측정에 사용되는 두 위치 중 하나입니다.
	 * - `Type.Vector.`
	 */
	startPos, 
	/**
	 * 거리 측정에 사용되는 두 위치 중 하나입니다.
	 * - `Type.Vector.`
	 */
	endPos) {
	    // @ts-ignore
	    return "Distance Between(" + startPos + ", " + endPos + ")";
	};
	});

	unwrapExports(distanceBetween);
	var distanceBetween_1 = distanceBetween.distanceBetween;

	var divide = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 두 숫자 또는 벡터의 비율입니다. 벡터를 숫자로 나누면
	 * 비율이 증감된 벡터가 도출됩니다. 0으로 나누면 0이 됩니다.
	 */
	exports.divide = function (
	/**
	 * 좌측 피연산자입니다. 결과값이 숫자 또는
	 * 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.
	 * - `Type.Divide.`
	 */
	value1, 
	/**
	 * 좌측 피연산자입니다. 결과값이 숫자 또는
	 * 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.
	 * - `Type.Divide.`
	 */
	value2) {
	    // @ts-ignore
	    return "Divide(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(divide);
	var divide_1 = divide.divide;

	var eventDamage = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 이 규칙에 의해 현재 처리되고 있는
	 * 이벤트의 VICTIM이 받는 피해량입니다.
	 */
	exports.eventDamage = function () {
	    // @ts-ignore
	    return "Event Damage";
	};
	});

	unwrapExports(eventDamage);
	var eventDamage_1 = eventDamage.eventDamage;

	var eyePosition = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * (조준에 쓰인) 플레이어의 1인칭 시점 위치입니다.
	 */
	exports.eyePosition = function (
	/**
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Eye Position(" + player + ")";
	};
	});

	unwrapExports(eyePosition);
	var eyePosition_1 = eyePosition.eyePosition;

	var health = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 한 플레이어의 현재 생명력(방어력 및 보호막 포함)입니다.
	 */
	exports.health = function (
	/**
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Health(" + player + ")";
	};
	});

	unwrapExports(health);
	var health_1 = health.health;

	var horizontalAngleFromDirection = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 방향 벡터에 대응하는 횡축각(단위: 도)입니다.
	 */
	exports.horizontalAngleFromDirection = function (
	/**
	 * 황축각(단위: 도)정보를 가져올 방향 벡터입니다.
	 * 이 벡터는 연산 전에 단위 벡터로 정규화됩니다.
	 * - `Type.Vector.`
	 */
	direction) {
	    // @ts-ignore
	    return "Horizontal Angle From Direction(" + direction + ")";
	};
	});

	unwrapExports(horizontalAngleFromDirection);
	var horizontalAngleFromDirection_1 = horizontalAngleFromDirection.horizontalAngleFromDirection;

	var horizontalAngleTowards = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 전방에서 지정된 위치까지의 횡축각(단위: 도)입니다.
	 * 이 값은 해당 위치가 플레이엉 좌측에 있는 경우 양수이며,
	 * 그 외의 경우 0이거나 음수입니다.
	 */
	exports.horizontalAngleTowards = function (
	/**
	 * 이 플레이어가 현재 바라보는 방향으로부터 각이 시작됩니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 각 각이 종료되는 월드 내 위치입니다.
	 * - `Type.Vector.`
	 */
	position) {
	    // @ts-ignore
	    return "Horizontal Angle Towards(" + player + ", " + position + ")";
	};
	});

	unwrapExports(horizontalAngleTowards);
	var horizontalAngleTowards_1 = horizontalAngleTowards.horizontalAngleTowards;

	var horizontalFacingAngleOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 월드에 대해 상대적으로 플레이어가 바라보고 있는
	 * 방향의 상대적인 횡축각(단위: 도)입니다.
	 * 이 값은 플레이어가 좌측으로 회전 시 증가합니다.
	 * (+/- 180도 범위)
	 */
	exports.horizontalFacingAngleOf = function (
	/**
	 * 바라보고 있는 방향의 황축각 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Horizontal Facing Angle Of(" + player + ")";
	};
	});

	unwrapExports(horizontalFacingAngleOf);
	var horizontalFacingAngleOf_1 = horizontalFacingAngleOf.horizontalFacingAngleOf;

	var horizontalSpeedOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 현재 횡축 속도(초당 미터)입니다.
	 * 여기에는 모든 종축 움직임이 배제됩니다.
	 */
	exports.horizontalSpeedOf = function (
	/**
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Horizontal Speed Of(" + player + ")";
	};
	});

	unwrapExports(horizontalSpeedOf);
	var horizontalSpeedOf_1 = horizontalSpeedOf.horizontalSpeedOf;

	var indexOfArrayValue = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 배열 내에 있는 값의 인덱스입니다.
	 * 해당 값을 찾을 수 없는 경우 -1입니다.
	 */
	exports.indexOfArrayValue = function (
	/**
	 * 지정된 값을 검색할 배열입니다.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * 검색할 값입니다.
	 * - `Type.Value.`
	 */
	value) {
	    // @ts-ignore
	    return "Index Of Array Value(" + array + ", " + value + ")";
	};
	});

	unwrapExports(indexOfArrayValue);
	var indexOfArrayValue_1 = indexOfArrayValue.indexOfArrayValue;

	var lastDamageModificationId = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * EVENT PLAYER 또는 전역 레벨에서 실행된 최근의
	 * START DAMGE MODIFICATION 액션의 ID입니다.
	 */
	exports.lastDamageModificationId = function () {
	    // @ts-ignore
	    return "Last Damage Modification Id";
	};
	});

	unwrapExports(lastDamageModificationId);
	var lastDamageModificationId_1 = lastDamageModificationId.lastDamageModificationId;

	var lastDamageOverTimeId = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * EVENT PLAYER 또는 전역 레벨에서 가장 최근에 실행된
	 * DAMAGE OVER TIME 액션의 ID입니다.
	 */
	exports.lastDamageOverTimeId = function () {
	    // @ts-ignore
	    return "Last Damage Over Time Id";
	};
	});

	unwrapExports(lastDamageOverTimeId);
	var lastDamageOverTimeId_1 = lastDamageOverTimeId.lastDamageOverTimeId;

	var lastHealOverTimeId = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * EVENT PLAYER 또는 전역 레벨에서 가장 최근에 실행된
	 * HEAL OVER TIME 액션의 ID입니다.
	 */
	exports.lastHealOverTimeId = function () {
	    // @ts-ignore
	    return "Last Heal Over Time Id";
	};
	});

	unwrapExports(lastHealOverTimeId);
	var lastHealOverTimeId_1 = lastHealOverTimeId.lastHealOverTimeId;

	var lastTextId = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * EVENT PLAYER 또는 전역 레벨에서
	 * CREATE HUD TEXT 액션 또는
	 * CREATE IN-WORLD TEXT 액션으로
	 * 생성한 텍스트의 마지막 부분에 대한 참조입니다.
	 */
	exports.lastTextId = function () {
	    // @ts-ignore
	    return "Last Text Id";
	};
	});

	unwrapExports(lastTextId);
	var lastTextId_1 = lastTextId.lastTextId;

	var matchRound = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 경기의 현재 라운드입니다. 1부터 증가합니다.
	 */
	exports.matchRound = function () {
	    // @ts-ignore
	    return "Match Round";
	};
	});

	unwrapExports(matchRound);
	var matchRound_1 = matchRound.matchRound;

	var max = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 두 숫자 중 높은 수입니다.
	 */
	exports.max = function (
	/**
	 * - `Type.Number.`
	 */
	value1, 
	/**
	 * - `Type.Number.`
	 */
	value2) {
	    // @ts-ignore
	    return "Max(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(max);
	var max_1 = max.max;

	var maxHealth = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 최대 생명력(방어력 및 보호막 포함)입니다.
	 */
	exports.maxHealth = function (
	/**
	 * 최대 생명력 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Max Health(" + player + ")";
	};
	});

	unwrapExports(maxHealth);
	var maxHealth_1 = maxHealth.maxHealth;

	var min = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 두 숫자 중 낮은 수입니다.
	 */
	exports.min = function (
	/**
	 * 좌측 피연산자입니다.
	 * 결과값이 숫자로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Type.Number.`
	 */
	value1, 
	/**
	 * 우측 피연산자입니다.
	 * 결과값이 숫자로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Type.Number.`
	 */
	value2) {
	    // @ts-ignore
	    return "Min(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(min);
	var min_1 = min.min;

	var modulo = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 좌측 피연산자를 우측 피연산자로 나눈 나머지입니다.
	 * 어떤 숫자이든 MODULO 0의 결과는 0입니다.
	 */
	exports.modulo = function (
	/**
	 * - `Type.Number.`
	 */
	value1, 
	/**
	 * - `Type.Number.`
	 */
	value2) {
	    // @ts-ignore
	    return "Modulo(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(modulo);
	var modulo_1 = modulo.modulo;

	var normalizedHealth = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 방어력 및 보호막을 포함하여 0과 1사이로
	 * 정규화 된 플레이어의 현재 생명력입니다.
	 * (예를 들어, 0은 생명력 없음,
	 * 0.5는 생명력 절반, 1은 최대 생명력 등등)
	 */
	exports.normalizedHealth = function (
	/**
	 * 정규화된 생명력을 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Normalized Health(" + player + ")";
	};
	});

	unwrapExports(normalizedHealth);
	var normalizedHealth_1 = normalizedHealth.normalizedHealth;

	var numberOfDeadPlayers = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 팀 또는 경기 내 사망 플레이어 수입니다.
	 */
	exports.numberOfDeadPlayers = function (
	/**
	 * 플레이어 수를 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Number Of Dead Players(" + team + ")";
	};
	});

	unwrapExports(numberOfDeadPlayers);
	var numberOfDeadPlayers_1 = numberOfDeadPlayers.numberOfDeadPlayers;

	var numberOfDeaths = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어가 기록한 사망 수입니다.
	 * 이 값은 게임이 진행 중일때만 누적됩니다.
	 */
	exports.numberOfDeaths = function (
	/**
	 * 사망 횟수 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Number Of Deaths(" + player + ")";
	};
	});

	unwrapExports(numberOfDeaths);
	var numberOfDeaths_1 = numberOfDeaths.numberOfDeaths;

	var numberOfEliminations = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어가 기록한 처치 수입니다.
	 * 이 값은 게임이 진행 중일 때만 누적됩니다.
	 */
	exports.numberOfEliminations = function (
	/**
	 * 처치 횟수 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Number Of Eliminations(" + player + ")";
	};
	});

	unwrapExports(numberOfEliminations);
	var numberOfEliminations_1 = numberOfEliminations.numberOfEliminations;

	var numberOfFinalBlows = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어가 기록한 결정타 개수입니다.
	 * 이 값은 게임이 진행 중일 때만 쌓이게 됩니다.
	 */
	exports.numberOfFinalBlows = function (
	/**
	 * 결정타 개수 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Number Of Final Blows(" + player + ")";
	};
	});

	unwrapExports(numberOfFinalBlows);
	var numberOfFinalBlows_1 = numberOfFinalBlows.numberOfFinalBlows;

	var numberOfHeroes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 팀 또는 경기 내에서 지정된 영웅을
	 * 플레이하는 플레이어의 수입니다.
	 */
	exports.numberOfHeroes = function (
	/**
	 * 플레이 현황을 확인할 영웅입니다.
	 * - `Type.Hero.`
	 */
	hero, 
	/**
	 * 영웅 플레이 현황을 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Number Of Heroes(" + hero + ", " + team + ")";
	};
	});

	unwrapExports(numberOfHeroes);
	var numberOfHeroes_1 = numberOfHeroes.numberOfHeroes;

	var numberOfLivingPlayers = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 팀 또는 경기에서 생존한 플레이어의 수입니다.
	 */
	exports.numberOfLivingPlayers = function (
	/**
	 * 플레이어 수를 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Number Of Living Players(" + team + ")";
	};
	});

	unwrapExports(numberOfLivingPlayers);
	var numberOfLivingPlayers_1 = numberOfLivingPlayers.numberOfLivingPlayers;

	var numberOfPlayers = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 팀 또는 경기 내 존재하는 플레이어 수입니다.
	 */
	exports.numberOfPlayers = function (
	/**
	 * 플레이어 수를 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Number Of Players(" + team + ")";
	};
	});

	unwrapExports(numberOfPlayers);
	var numberOfPlayers_1 = numberOfPlayers.numberOfPlayers;

	var numberOfPlayersOnObjective = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 팀 또는 경기 내에서 화물 또는
	 * 거점을 확보하려는 플레이어 수입니다.
	 */
	exports.numberOfPlayersOnObjective = function (
	/**
	 * 플레이어 수를 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Number Of Players On Objective(" + team + ")";
	};
	});

	unwrapExports(numberOfPlayersOnObjective);
	var numberOfPlayersOnObjective_1 = numberOfPlayersOnObjective.numberOfPlayersOnObjective;

	var objectiveIndex = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 현재 활성화 중인 거점, 화물 경유지, 화물 목적지입니다.
	 * (0, 1, 2 중 하나) 점령, 점령/호위, 호위, 쟁탈 전장에서 유효합니다.
	 */
	exports.objectiveIndex = function () {
	    // @ts-ignore
	    return "Objective Index";
	};
	});

	unwrapExports(objectiveIndex);
	var objectiveIndex_1 = objectiveIndex.objectiveIndex;

	var payloadProgressPercentage = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 해당 활성화 화물의 목적지까지 진행률입니다.(비율로 표시됨)
	 */
	exports.payloadProgressPercentage = function () {
	    // @ts-ignore
	    return "Payload Progress Percentage";
	};
	});

	unwrapExports(payloadProgressPercentage);
	var payloadProgressPercentage_1 = payloadProgressPercentage.payloadProgressPercentage;

	var pointCapturePercentage = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 활성화된 거점에서, 점령 중인 거점의 점령 진척도입니다.(비율로 표시)
	 */
	exports.pointCapturePercentage = function () {
	    // @ts-ignore
	    return "Point Capture Percentage";
	};
	});

	unwrapExports(pointCapturePercentage);
	var pointCapturePercentage_1 = pointCapturePercentage.pointCapturePercentage;

	var raiseToPower = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 좌측 피연산자를 우측 피연산자만큼 제곱합니다.
	 * 좌측 피연산자가 음수이면 결과는 항상 0입니다.
	 */
	exports.raiseToPower = function (
	/**
	 * 좌측 피연산자입니다.
	 * 결과값이 숫자로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Type.Number.`
	 */
	value1, 
	/**
	 * 우측 피연산자입니다.
	 * 결과값이 숫자로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Type.Number.`
	 */
	value2) {
	    // @ts-ignore
	    return "Raise To Power(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(raiseToPower);
	var raiseToPower_1 = raiseToPower.raiseToPower;

	var randomInteger = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정한 최대값 이하, 최소값 이상
	 * 범위 내에서 무작위 정수값입니다.
	 */
	exports.randomInteger = function (
	/**
	 * 허용된 최소 정수입니다.
	 * 이 입력 정보에 실수가 주어진 경우,
	 * 가장 근접한 정수로 반올림됩니다.
	 * - `Type.Number.`
	 */
	min, 
	/**
	 * 허용된 최대 정수입니다.
	 * 이 입력 정보에 실수가 주어진 경우,
	 * 가장 근접한 정수로 반올림됩니다.
	 * - `Type.Number.`
	 */
	max) {
	    // @ts-ignore
	    return "Random Integer(" + min + ", " + max + ")";
	};
	});

	unwrapExports(randomInteger);
	var randomInteger_1 = randomInteger.randomInteger;

	var randomReal = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 최대 및 최소값 범위
	 * 내에서의 무작위 실수값 하나입니다.
	 */
	exports.randomReal = function (
	/**
	 * 허용된 최소 실수값입니다.
	 * - `Type.Number.`
	 */
	min, 
	/**
	 * 허용된 최소 실수값입니다.
	 * - `Type.Number.`
	 */
	max) {
	    // @ts-ignore
	    return "Random Real(" + min + ", " + max + ")";
	};
	});

	unwrapExports(randomReal);
	var randomReal_1 = randomReal.randomReal;

	var roundToInteger = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 값을 반올림할 대상 정수입니다.
	 */
	exports.roundToInteger = function (
	/**
	 * 반올림할 실수입니다.
	 * - `Type.Number.`
	 */
	value, 
	/**
	 * 값을 반올림하는 규칙을 결정합니다.
	 * - `Type.Rounding.`
	 */
	roundingType) {
	    // @ts-ignore
	    return "Round To Integer(" + value + ", " + roundingType + ")";
	};
	});

	unwrapExports(roundToInteger);
	var roundToInteger_1 = roundToInteger.roundToInteger;

	var scoreOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어의 현재 점수입니다.
	 * 게임 모드가 개별 전투가 아닌 경우
	 * 결과값은 0이 됩니다.
	 */
	exports.scoreOf = function (
	/**
	 * 점수 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Score Of(" + player + ")";
	};
	});

	unwrapExports(scoreOf);
	var scoreOf_1 = scoreOf.scoreOf;

	var sineFromDegrees = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 각(단위: 도)의 사인 값입니다.
	 */
	exports.sineFromDegrees = function (
	/**
	 * 각(단위: 도)입니다.
	 * - `Type.Number.`
	 */
	angle) {
	    // @ts-ignore
	    return "Sine From Degrees(" + angle + ")";
	};
	});

	unwrapExports(sineFromDegrees);
	var sineFromDegrees_1 = sineFromDegrees.sineFromDegrees;

	var sineFromRadians = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 각(단위: RAD)의 사인 값입니다.
	 */
	exports.sineFromRadians = function (
	/**
	 * 각(단위: RAD)입니다.
	 * - `Type.Number.`
	 */
	angle) {
	    // @ts-ignore
	    return "Sine From Radians(" + angle + ")";
	};
	});

	unwrapExports(sineFromRadians);
	var sineFromRadians_1 = sineFromRadians.sineFromRadians;

	var slotOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어의 슬롯 번호입니다.
	 * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
	 * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
	 */
	exports.slotOf = function (
	/**
	 * 슬롯 번호 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Slot Of(" + player + ")";
	};
	});

	unwrapExports(slotOf);
	var slotOf_1 = slotOf.slotOf;

	var speedOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 현재 속도(초당 미터)입니다.
	 */
	exports.speedOf = function (
	/**
	 * 속도 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Speed Of(" + player + ")";
	};
	});

	unwrapExports(speedOf);
	var speedOf_1 = speedOf.speedOf;

	var speedOfInDirection = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 방향에서 플레이어의
	 * 현재 속도(초당 미터)입니다.
	 */
	exports.speedOfInDirection = function (
	/**
	 * 속도 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 플레이어의 속도를 측정할 이동 방향입니다.
	 * - `Type.Vector.`
	 */
	direction) {
	    // @ts-ignore
	    return "Speed Of In Direction(" + player + ", " + direction + ")";
	};
	});

	unwrapExports(speedOfInDirection);
	var speedOfInDirection_1 = speedOfInDirection.speedOfInDirection;

	var squareRoot = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 값의 제곱근입니다.
	 */
	exports.squareRoot = function (
	/**
	 * 제곱근을 계산할 실수값입니다.
	 * 음수의 경우 0이 됩니다.
	 * - `Type.Number.`
	 */
	value) {
	    // @ts-ignore
	    return "Square Root(" + value + ")";
	};
	});

	unwrapExports(squareRoot);
	var squareRoot_1 = squareRoot.squareRoot;

	var subtract = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 두 숫자 또는 벡터의 차이입니다.
	 */
	exports.subtract = function (
	/**
	 * 좌측 피연산자입니다.
	 * 결과값이 숫자 또는 벡터로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Type.Subtract.`
	 */
	value1, 
	/**
	 * 우측 피연산자입니다.
	 * 결과값이 숫자 또는 벡터로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Type.Subtract.`
	 */
	value2) {
	    // @ts-ignore
	    return "Subtract(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(subtract);
	var subtract_1 = subtract.subtract;

	var tangentFromDegrees = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 각(단위: 도)의 탄젠트 값입니다.
	 */
	exports.tangentFromDegrees = function (
	/**
	 * 각(단위: 도)입니다.
	 * - `Type.Number.`
	 */
	angle) {
	    // @ts-ignore
	    return "Tangent From Degrees(" + angle + ")";
	};
	});

	unwrapExports(tangentFromDegrees);
	var tangentFromDegrees_1 = tangentFromDegrees.tangentFromDegrees;

	var tangentFromRadians = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 각(단위: RAD)의 탄젠트 값입니다.
	 */
	exports.tangentFromRadians = function (
	/**
	 * 각(단위: RAD)입니다.
	 * - `Type.Number.`
	 */
	angle) {
	    // @ts-ignore
	    return "Tangent From Radians(" + angle + ")";
	};
	});

	unwrapExports(tangentFromRadians);
	var tangentFromRadians_1 = tangentFromRadians.tangentFromRadians;

	var teamScore = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 팀의 현재 점수입니다.
	 * 개별 전투 모드에서는 결과값이 0입니다.
	 */
	exports.teamScore = function (
	/**
	 * 점수 정보를 가져올 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Team Score(" + team + ")";
	};
	});

	unwrapExports(teamScore);
	var teamScore_1 = teamScore.teamScore;

	var ultimateChargePercent = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 현재 궁극기 충전량 비율입니다.
	 */
	exports.ultimateChargePercent = function (
	/**
	 * 궁극기 충전량 비율 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Ultimate Charge Percent(" + player + ")";
	};
	});

	unwrapExports(ultimateChargePercent);
	var ultimateChargePercent_1 = ultimateChargePercent.ultimateChargePercent;

	var verticalAngleFromDirection = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 방향 벡터의 대응하는 종축각(단위: 도)입니다.
	 */
	exports.verticalAngleFromDirection = function (
	/**
	 * 종축각(단위: 도) 정보를
	 * 가져올 방향 벡터입니다.
	 * 벡터는 연산 전에 정규화됩니다.
	 * - `Type.Vector.`
	 */
	direction) {
	    // @ts-ignore
	    return "Vertical Angle From Direction(" + direction + ")";
	};
	});

	unwrapExports(verticalAngleFromDirection);
	var verticalAngleFromDirection_1 = verticalAngleFromDirection.verticalAngleFromDirection;

	var verticalAngleTowards = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 전방에서 지정된
	 * 위치까지의 종축각(단위: 도)입니다.
	 * 이 값은 해당 위치가
	 * 플레이어 아래에 있는 경우 양수이며,
	 * 그 외의 경우 0이거나 음수입니다.
	 */
	exports.verticalAngleTowards = function (
	/**
	 * 이 플레이어가 현재 바라보는
	 * 방향으로부터 각이 시작됩니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 각 각이 종료되는 월드 내 위치입니다.
	 * - `Type.Vector.`
	 */
	position) {
	    // @ts-ignore
	    return "Vertical Angle Towards(" + player + ", " + position + ")";
	};
	});

	unwrapExports(verticalAngleTowards);
	var verticalAngleTowards_1 = verticalAngleTowards.verticalAngleTowards;

	var verticalFacingAngleOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 월드에 대해 상대적으로 플레이어가
	 * 바라보고 있는 방향의 종축각(단위: 도)입니다.
	 * 이 값은 플레이어가 내려다보는 경우 증가합니다.
	 */
	exports.verticalFacingAngleOf = function (
	/**
	 * 바라보고 있는 방향의
	 * 종축각 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Vertical Facing Angle Of(" + player + ")";
	};
	});

	unwrapExports(verticalFacingAngleOf);
	var verticalFacingAngleOf_1 = verticalFacingAngleOf.verticalFacingAngleOf;

	var verticalSpeedOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 현재 종축 속도(초당 미터)입니다.
	 * 여기에는 경사로를 오르내리는 등의 움직임 등
	 * 모든 횡축 이동이 배제됩니다.
	 */
	exports.verticalSpeedOf = function (
	/**
	 * 종축 속도 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Vertical Speed Of(" + player + ")";
	};
	});

	unwrapExports(verticalSpeedOf);
	var verticalSpeedOf_1 = verticalSpeedOf.verticalSpeedOf;

	var serverLoad = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 현재 게임 인스턴스의 CPU 사용률(%)입니다.
	 * 이 수치가 100에 가까워지거나
	 * 100을 초과하면 과도한 리소스 사용으로
	 * 인스턴스가 종료될 가능성이 크게 증가합니다.
	 */
	exports.serverLoad = function () {
	    // @ts-ignore
	    return "Server Load";
	};
	});

	unwrapExports(serverLoad);
	var serverLoad_1 = serverLoad.serverLoad;

	var serverLoadAverage = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 최근 2초간 게임 인스턴스의 평균 CPU 사용률(%)입니다.
	 * 이 수치가 100에 가까워지거나 100을 초과하면
	 * 과도한 리소스 사용으로 인스턴스가
	 * 종료될 가능성이 크게 증가합니다.
	 */
	exports.serverLoadAverage = function () {
	    // @ts-ignore
	    return "Server Load Average";
	};
	});

	unwrapExports(serverLoadAverage);
	var serverLoadAverage_1 = serverLoadAverage.serverLoadAverage;

	var serverLoadPeak = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 최근 2초간 게임 인스턴스의 최대 CPU 사용률(%)입니다.
	 * 이 수치가 100에 가까워지거나 100을 초과하면
	 * 과도한 리소스 사용으로 인스턴스가
	 * 종료될 가능성이 크게 증가합니다.
	 */
	exports.serverLoadPeak = function () {
	    // @ts-ignore
	    return "Server Load Peak";
	};
	});

	unwrapExports(serverLoadPeak);
	var serverLoadPeak_1 = serverLoadPeak.serverLoadPeak;

	var number$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(number, exports);
	tslib_es6.__exportStar(add, exports);
	tslib_es6.__exportStar(angleDifference, exports);
	tslib_es6.__exportStar(angleBetweenVectors, exports);
	tslib_es6.__exportStar(altitudeOf, exports);
	tslib_es6.__exportStar(countOf, exports);
	tslib_es6.__exportStar(arccosineInDegrees, exports);
	tslib_es6.__exportStar(arccosineInRadians, exports);
	tslib_es6.__exportStar(arcsineInDegrees, exports);
	tslib_es6.__exportStar(arcsineInRadians, exports);
	tslib_es6.__exportStar(arctangentInDegrees, exports);
	tslib_es6.__exportStar(arctangentInRadians, exports);
	tslib_es6.__exportStar(cosineFromDegrees, exports);
	tslib_es6.__exportStar(cosineFromRadians, exports);
	tslib_es6.__exportStar(controlModeScoringPercentage, exports);
	tslib_es6.__exportStar(globalVariable, exports);
	tslib_es6.__exportStar(playerVariable, exports);
	tslib_es6.__exportStar(distanceBetween, exports);
	tslib_es6.__exportStar(divide, exports);
	tslib_es6.__exportStar(eventDamage, exports);
	tslib_es6.__exportStar(eyePosition, exports);
	tslib_es6.__exportStar(health, exports);
	tslib_es6.__exportStar(horizontalAngleFromDirection, exports);
	tslib_es6.__exportStar(horizontalAngleTowards, exports);
	tslib_es6.__exportStar(horizontalFacingAngleOf, exports);
	tslib_es6.__exportStar(horizontalSpeedOf, exports);
	tslib_es6.__exportStar(indexOfArrayValue, exports);
	tslib_es6.__exportStar(lastDamageModificationId, exports);
	tslib_es6.__exportStar(lastDamageOverTimeId, exports);
	tslib_es6.__exportStar(lastHealOverTimeId, exports);
	tslib_es6.__exportStar(lastTextId, exports);
	tslib_es6.__exportStar(matchRound, exports);
	tslib_es6.__exportStar(max, exports);
	tslib_es6.__exportStar(maxHealth, exports);
	tslib_es6.__exportStar(min, exports);
	tslib_es6.__exportStar(modulo, exports);
	tslib_es6.__exportStar(normalizedHealth, exports);
	tslib_es6.__exportStar(numberOfDeadPlayers, exports);
	tslib_es6.__exportStar(numberOfDeaths, exports);
	tslib_es6.__exportStar(numberOfEliminations, exports);
	tslib_es6.__exportStar(numberOfFinalBlows, exports);
	tslib_es6.__exportStar(numberOfHeroes, exports);
	tslib_es6.__exportStar(numberOfLivingPlayers, exports);
	tslib_es6.__exportStar(numberOfPlayers, exports);
	tslib_es6.__exportStar(numberOfPlayersOnObjective, exports);
	tslib_es6.__exportStar(objectiveIndex, exports);
	tslib_es6.__exportStar(payloadProgressPercentage, exports);
	tslib_es6.__exportStar(pointCapturePercentage, exports);
	tslib_es6.__exportStar(raiseToPower, exports);
	tslib_es6.__exportStar(randomInteger, exports);
	tslib_es6.__exportStar(randomReal, exports);
	tslib_es6.__exportStar(roundToInteger, exports);
	tslib_es6.__exportStar(scoreOf, exports);
	tslib_es6.__exportStar(sineFromDegrees, exports);
	tslib_es6.__exportStar(sineFromRadians, exports);
	tslib_es6.__exportStar(slotOf, exports);
	tslib_es6.__exportStar(speedOf, exports);
	tslib_es6.__exportStar(speedOfInDirection, exports);
	tslib_es6.__exportStar(squareRoot, exports);
	tslib_es6.__exportStar(subtract, exports);
	tslib_es6.__exportStar(tangentFromDegrees, exports);
	tslib_es6.__exportStar(tangentFromRadians, exports);
	tslib_es6.__exportStar(teamScore, exports);
	tslib_es6.__exportStar(ultimateChargePercent, exports);
	tslib_es6.__exportStar(verticalAngleFromDirection, exports);
	tslib_es6.__exportStar(verticalAngleTowards, exports);
	tslib_es6.__exportStar(verticalFacingAngleOf, exports);
	tslib_es6.__exportStar(verticalSpeedOf, exports);
	tslib_es6.__exportStar(serverLoad, exports);
	tslib_es6.__exportStar(serverLoadAverage, exports);
	tslib_es6.__exportStar(serverLoadPeak, exports);
	});

	unwrapExports(number$1);

	var vector = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 3개의 실수(X, Y, Z)로 이루어진 벡터입니다.
	 * X는 좌측, Y는 위, Z는 전방을 의미합니다.
	 * 벡터는 위치, 방향, 속도로 사용됩니다.
	 */
	exports.vector = function (
	/**
	 * 벡터의 X 값입니다.
	 * - `Type.Number.`
	 */
	x, 
	/**
	 * 벡터의 Y 값입니다.
	 * - `Type.Number.`
	 */
	y, 
	/**
	 * 벡터의 Z 값입니다.
	 * - `Type.Number.`
	 */
	z) {
	    // @ts-ignore
	    return "Vector(" + x + ", " + y + ", " + z + ")";
	};
	});

	unwrapExports(vector);
	var vector_1 = vector.vector;

	var localVectorOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 제공된 월드 좌표 벡터에 해당하는 로컬 좌표 벡터입니다.
	 */
	exports.localVectorOf = function (
	/**
	 * 로컬 좌표로 전환될 월드 좌표 벡터입니다.
	 * - `Type.Vector.`
	 */
	worldVector, 
	/**
	 * 결과 벡터와 연관될 플레이어입니다.
	 * - `Type.Player.`
	 */
	relativePlayer, 
	/**
	 * 벡터가 회전과 평행 이동을 받는지(일반적으로 위치에 적용),
	 * 아니면 회전만 받는지(일반적으로 방향 및 속도에 적용) 여부를 설정합니다.
	 * - `Type.Transformation.`
	 */
	transformation) {
	    // @ts-ignore
	    return "Local Vector Of(" + worldVector + ", " + relativePlayer + ", " + transformation + ")";
	};
	});

	unwrapExports(localVectorOf);
	var localVectorOf_1 = localVectorOf.localVectorOf;

	var worldVectorOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 제공된 로컬 좌표 벡터에 해당하는 월드 좌표 벡터입니다.
	 */
	exports.worldVectorOf = function (
	/**
	 * 월드 좌표로 전환될 로컬 좌표 벡터입니다.
	 * - `Type.Vector.`
	 */
	localVector, 
	/**
	 * 결과 벡터와 연관될 플레이어입니다.
	 * - `Type.Player.`
	 */
	relativePlayer, 
	/**
	 * 벡터가 회전과 평행 이동을 받는지(일반적으로 위치에 적용),
	 * 아니면 회전만 받는지(일반적으로 방향 및 속도에 적용) 여부를 설정합니다.
	 * - `Type.Transformation.`
	 */
	transformation) {
	    // @ts-ignore
	    return "World Vector Of(" + localVector + ", " + relativePlayer + ", " + transformation + ")";
	};
	});

	unwrapExports(worldVectorOf);
	var worldVectorOf_1 = worldVectorOf.worldVectorOf;

	var vectorTowards = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 한 위치에서 다른 위치까지의 변위 벡터입니다.
	 */
	exports.vectorTowards = function (
	/**
	 * 변위 벡터가 시작하는 위치입니다.
	 * - `Type.Vector.`
	 */
	startPos, 
	/**
	 * 변위 벡터가 종료되는 위치입니다.
	 * - `Type.Vector.`
	 */
	endPos) {
	    // @ts-ignore
	    return "Vector Towards(" + startPos + ", " + endPos + ")";
	};
	});

	unwrapExports(vectorTowards);
	var vectorTowards_1 = vectorTowards.vectorTowards;

	var backward = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 후방을 가리키는 방향 벡터(0, 0, -1)의 약칭입니다.
	 */
	exports.backward = function () {
	    // @ts-ignore
	    return "Backward";
	};
	});

	unwrapExports(backward);
	var backward_1 = backward.backward;

	var crossProduct = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 값의 가위곱입니다.(왼쪽과 위쪽의 벡터 곱은 전방 방향)
	 */
	exports.crossProduct = function (
	/**
	 * 가위곱의 왼쪽 벡터 피연산자입니다.
	 * - `Type.Vector.`
	 */
	value1, 
	/**
	 * 가위곱의 오른쪽 벡터 피연산자입니다.
	 * - `Type.Vector.`
	 */
	value2) {
	    // @ts-ignore
	    return "Cross Product(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(crossProduct);
	var crossProduct_1 = crossProduct.crossProduct;

	var directionFromAngles = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 각에 대응하는 단위 길이 방향 벡터입니다.
	 */
	exports.directionFromAngles = function (
	/**
	 * 결과 벡터를 도출하는 데 사용되는 황축각(단위: 도)입니다.
	 * - `Type.Number.`
	 */
	horizontalAngle, 
	/**
	 * 결과 벡터를 도출하는 데 사용되는 종축각(단위: 도)입니다.
	 * - `Type.Number.`
	 */
	verticalAngle) {
	    // @ts-ignore
	    return "Direction From Angles(" + horizontalAngle + ", " + verticalAngle + ")";
	};
	});

	unwrapExports(directionFromAngles);
	var directionFromAngles_1 = directionFromAngles.directionFromAngles;

	var directionTowards = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 한 위치에서 다른 위치까지의 단위 길이 방향 벡터입니다.
	 */
	exports.directionTowards = function (
	/**
	 * 결과로 도출되는 방향 벡터가 시작되는 위치입니다.
	 * - `Type.Vector.`
	 */
	startPos, 
	/**
	 * 결과로 도출되는 방향 벡터가 끝나는 위치입니다.
	 * - `Type.Vector.`
	 */
	endPos) {
	    // @ts-ignore
	    return "Direction Towards(" + startPos + ", " + endPos + ")";
	};
	});

	unwrapExports(directionTowards);
	var directionTowards_1 = directionTowards.directionTowards;

	var dotProduct = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 값의 점곱입니다.
	 */
	exports.dotProduct = function (
	/**
	 * 점곱의 백터 피연산자 두 개 중 하나입니다.
	 * - `Type.Vector.`
	 */
	value1, 
	/**
	 * 점곱의 백터 피연산자 두 개 중 하나입니다.
	 * - `Type.Vector.`
	 */
	value2) {
	    // @ts-ignore
	    return "Dot Product(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(dotProduct);
	var dotProduct_1 = dotProduct.dotProduct;

	var down = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 아래를 가리키는 방향 벡터(0, -1, 0)의 약칭입니다.
	 */
	exports.down = function () {
	    // @ts-ignore
	    return "Down";
	};
	});

	unwrapExports(down);
	var down_1 = down.down;

	var facingDirectionOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 월드에 대해 상대적으로 플레이어가 바라보고 있는
	 * 방향의 상대적인 단위 길이 방향 벡터입니다.
	 * 이 값에는 종 및 횡 방향이 있습니다.
	 */
	exports.facingDirectionOf = function (
	/**
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Facing Direction Of(" + player + ")";
	};
	});

	unwrapExports(facingDirectionOf);
	var facingDirectionOf_1 = facingDirectionOf.facingDirectionOf;

	var flagPosition = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 깃발 뺏기에서 지정된 팀의 깃발 위치입니다.
	 */
	exports.flagPosition = function (
	/**
	 * 깃발 위치 정보를 가져올 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Flag Position(" + team + ")";
	};
	});

	unwrapExports(flagPosition);
	var flagPosition_1 = flagPosition.flagPosition;

	var forward = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 전방을 가리키는 방향 벡터(0, 0, 1)의 약칭입니다.
	 */
	exports.forward = function () {
	    // @ts-ignore
	    return "Forward";
	};
	});

	unwrapExports(forward);
	var forward_1 = forward.forward;

	var left = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 좌측을 가리키는 방향 벡터(1, 0,0)의 약칭입니다.
	 */
	exports.left = function () {
	    // @ts-ignore
	    return "Left";
	};
	});

	unwrapExports(left);
	var left_1 = left.left;

	var nearestWalkablePosition = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 서 있을 수 있고 생성 지점에서 접근 가능하며
	 * 지정된 위치에서 가장 가까운 위치입니다.
	 */
	exports.nearestWalkablePosition = function (
	/**
	 * 가장 가까운 도보 가능 위치를 검색할 대상 위치입니다.
	 * - `Type.Vector.`
	 */
	position) {
	    // @ts-ignore
	    return "Nearest Walkable Position(" + position + ")";
	};
	});

	unwrapExports(nearestWalkablePosition);
	var nearestWalkablePosition_1 = nearestWalkablePosition.nearestWalkablePosition;

	var normalize = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 벡터의 단위 길이 정규화입니다.
	 */
	exports.normalize = function (
	/**
	 * 정규화할 벡터입니다.
	 * - `Type.Vector.`
	 */
	position) {
	    // @ts-ignore
	    return "Normalize(" + position + ")";
	};
	});

	unwrapExports(normalize);
	var normalize_1 = normalize.normalize;

	var objectivePosition = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 목표가 있는 월드 내의 위치(거점, 화물 경유지, 화물 목적지) 입니다.
	 * 점령, 점령/호위, 호위, 쟁탈 전장에서 유효합니다.
	 */
	exports.objectivePosition = function (
	/**
	 * 고려해야 하는 목표의 인덱스로서,
	 * 0에서 시작하여 증가합니다.
	 * 각 거점, 화물 경유지, 화물 목적지에는
	 * 각기 고유의 인덱스가 있습니다.
	 * - `Type.Number.`
	 */
	number) {
	    // @ts-ignore
	    return "Objective Position(" + number + ")";
	};
	});

	unwrapExports(objectivePosition);
	var objectivePosition_1 = objectivePosition.objectivePosition;

	var payloadPosition = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 월드 내의 활성화 된 화물 위치입니다.
	 */
	exports.payloadPosition = function () {
	    // @ts-ignore
	    return "Payload Position";
	};
	});

	unwrapExports(payloadPosition);
	var payloadPosition_1 = payloadPosition.payloadPosition;

	var positionOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 현재 위치(벡터)입니다.
	 */
	exports.positionOf = function (
	/**
	 * 위치 값 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Position Of(" + player + ")";
	};
	});

	unwrapExports(positionOf);
	var positionOf_1 = positionOf.positionOf;

	var rayCastHitNormal = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * RAY CAST HIT POSITION에서의 표면 법선
	 * (아무것도 맞지 않은 경우 END POS에서 START POS)입니다.
	 */
	exports.rayCastHitNormal = function (
	/**
	 * 레이케스트의 시작 위치입니다.
	 * 플레이어가 설정되어 있으면,
	 * 해당 플레이어의 발 위로
	 * 2미터 지점이 사용됩니다.
	 * - `Type.Vector.`
	 */
	startPos, 
	/**
	 * 레이케스트의 종료 위치입니다.
	 * 플레이어가 설정되어 있으면,
	 * 해당 플레이어의 발 위로
	 * 2미터 지점이 사용됩니다.
	 * - `Type.Vector.`
	 */
	endPos, 
	/**
	 * 이 레이캐스트로 맞힐 수 있는 플레이어입니다.
	 * - `Type.Array.`
	 */
	playersToInclude, 
	/**
	 * 이 레이캐스트로 맞힐 수 없는 플레이어입니다.
	 * PLAYERS TO INCLUDE보다 이 목록의 우선순위가 높습니다.
	 * - `Type.Array.`
	 */
	playersToExclude, 
	/**
	 * 플레이어가 소유한 오브젝트(방벽 또는 포탑 등)가
	 * 레이캐스트의 대상 범위에 포함되어야 하는지 여부입니다.
	 * - `Type.Bool.`
	 */
	IncludePlayerOwnedObjects) {
	    // @ts-ignore
	    return "Ray Cast Hit Normal(" + startPos + ", " + endPos + ", " + playersToInclude + ", " + playersToExclude + ", " + IncludePlayerOwnedObjects + ")";
	};
	});

	unwrapExports(rayCastHitNormal);
	var rayCastHitNormal_1 = rayCastHitNormal.rayCastHitNormal;

	var rayCastHitPlayer = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 레이캐스트로 맞힌 플레이어
	 * (맞은 플레이어가 없는 경우 NULL)입니다.
	 */
	exports.rayCastHitPlayer = function (
	/**
	 * 레이케스트의 시작 위치입니다.
	 * 플레이어가 설정되어 있으면,
	 * 해당 플레이어의 발 위로
	 * 2미터 지점이 사용됩니다.
	 * - `Type.Vector.`
	 */
	startPos, 
	/**
	 * 레이케스트의 종료 위치입니다.
	 * 플레이어가 설정되어 있으면,
	 * 해당 플레이어의 발 위로
	 * 2미터 지점이 사용됩니다.
	 * - `Type.Vector.`
	 */
	endPos, 
	/**
	 * 이 레이캐스트로 맞힐 수 있는 플레이어입니다.
	 * - `Type.Array.`
	 */
	playersToInclude, 
	/**
	 * 이 레이캐스트로 맞힐 수 없는 플레이어입니다.
	 * PLAYERS TO INCLUDE보다 이 목록의 우선순위가 높습니다.
	 * - `Type.Array.`
	 */
	playersToExclude, 
	/**
	 * 플레이어가 소유한 오브젝트(방벽 또는 포탑 등)가
	 * 레이캐스트의 대상 범위에 포함되어야 하는지 여부입니다.
	 * - `Type.Bool.`
	 */
	IncludePlayerOwnedObjects) {
	    // @ts-ignore
	    return "Ray Cast Hit Player(" + startPos + ", " + endPos + ", " + playersToInclude + ", " + playersToExclude + ", " + IncludePlayerOwnedObjects + ")";
	};
	});

	unwrapExports(rayCastHitPlayer);
	var rayCastHitPlayer_1 = rayCastHitPlayer.rayCastHitPlayer;

	var rayCastHitPosition = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 레이캐스트로 맞힌 표면,
	 * 오브젝트, 또는 플레이어의 위치
	 * (아무것도 맞지 않는 경우 END POS)입니다.
	 */
	exports.rayCastHitPosition = function (
	/**
	 * 레이케스트의 시작 위치입니다.
	 * 플레이어가 설정되어 있으면,
	 * 해당 플레이어의 발 위로
	 * 2미터 지점이 사용됩니다.
	 * - `Type.Vector.`
	 */
	startPos, 
	/**
	 * 레이케스트의 종료 위치입니다.
	 * 플레이어가 설정되어 있으면,
	 * 해당 플레이어의 발 위로
	 * 2미터 지점이 사용됩니다.
	 * - `Type.Vector.`
	 */
	endPos, 
	/**
	 * 이 레이캐스트로 맞힐 수 있는 플레이어입니다.
	 * - `Type.Array.`
	 */
	playersToInclude, 
	/**
	 * 이 레이캐스트로 맞힐 수 없는 플레이어입니다.
	 * PLAYERS TO INCLUDE보다 이 목록의 우선순위가 높습니다.
	 * - `Type.Array.`
	 */
	playersToExclude, 
	/**
	 * 플레이어가 소유한 오브젝트(방벽 또는 포탑 등)가
	 * 레이캐스트의 대상 범위에 포함되어야 하는지 여부입니다.
	 * - `Type.Bool.`
	 */
	IncludePlayerOwnedObjects) {
	    // @ts-ignore
	    return "Ray Cast Hit Position(" + startPos + ", " + endPos + ", " + playersToInclude + ", " + playersToExclude + ", " + IncludePlayerOwnedObjects + ")";
	};
	});

	unwrapExports(rayCastHitPosition);
	var rayCastHitPosition_1 = rayCastHitPosition.rayCastHitPosition;

	var right = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 우측을 가리키는 방향 벡터(-1, 0, 0)의 약칭입니다.
	 */
	exports.right = function () {
	    // @ts-ignore
	    return "Right";
	};
	});

	unwrapExports(right);
	var right_1 = right.right;

	var throttleOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 한 플레이어의 방향 입력 정보입니다.
	 * X 구성요소가 횡방향 입력 정보(왼쪽이 양),
	 * Z 구성 요소가 종방향 입력 정보(위쪽이 양)인 벡터로 표현됩니다.
	 */
	exports.throttleOf = function (
	/**
	 * 방향 입력 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Throttle Of(" + player + ")";
	};
	});

	unwrapExports(throttleOf);
	var throttleOf_1 = throttleOf.throttleOf;

	var totalTimeElapsed = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 게임 인스턴스 생성 후 경과 시간(단위: 초)입니다.
	 * (설정 및 전환 시간 포함)
	 */
	exports.totalTimeElapsed = function () {
	    // @ts-ignore
	    return "Total Time Elapsed";
	};
	});

	unwrapExports(totalTimeElapsed);
	var totalTimeElapsed_1 = totalTimeElapsed.totalTimeElapsed;

	var up = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 위를 가리키는 방향 벡터(0, 1, 0)의 약칭입니다.
	 */
	exports.up = function () {
	    // @ts-ignore
	    return "Up";
	};
	});

	unwrapExports(up);
	var up_1 = up.up;

	var velocityOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 현재 속도(벡터)입니다.
	 * 해당 플레이어가 표면 위에 있는 경우,
	 * 경사로를 오르 내린다고 해도 Y 구성요소 속도는 0입니다.
	 */
	exports.velocityOf = function (
	/**
	 * 속도 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Velocity Of(" + player + ")";
	};
	});

	unwrapExports(velocityOf);
	var velocityOf_1 = velocityOf.velocityOf;

	var xComponentOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 벡터의 X 구성요소입니다.
	 * 일반적으로 왼쪽 방향의 벡터량입니다.
	 */
	exports.xComponentOf = function (
	/**
	 * X 구성요소 정보를 가져올 벡터입니다.
	 * - `Type.Vector.`
	 */
	vector) {
	    // @ts-ignore
	    return "X Component Of(" + vector + ")";
	};
	});

	unwrapExports(xComponentOf);
	var xComponentOf_1 = xComponentOf.xComponentOf;

	var yComponentOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 벡터의 Y 구성요소입니다.
	 * 일반적으로 왼쪽 방향의 벡터량입니다.
	 */
	exports.yComponentOf = function (
	/**
	 * Y 구성요소 정보를 가져올 벡터입니다.
	 * - `Type.Vector.`
	 */
	vector) {
	    // @ts-ignore
	    return "Y Component Of(" + vector + ")";
	};
	});

	unwrapExports(yComponentOf);
	var yComponentOf_1 = yComponentOf.yComponentOf;

	var zComponentOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 벡터의 Z 구성요소입니다.
	 * 일반적으로 왼쪽 방향의 벡터량입니다.
	 */
	exports.zComponentOf = function (
	/**
	 * Z 구성요소 정보를 가져올 벡터입니다.
	 * - `Type.Vector.`
	 */
	vector) {
	    // @ts-ignore
	    return "Z Component Of(" + vector + ")";
	};
	});

	unwrapExports(zComponentOf);
	var zComponentOf_1 = zComponentOf.zComponentOf;

	var vector$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(vector, exports);
	tslib_es6.__exportStar(localVectorOf, exports);
	tslib_es6.__exportStar(worldVectorOf, exports);
	tslib_es6.__exportStar(vectorTowards, exports);
	tslib_es6.__exportStar(globalVariable, exports);
	tslib_es6.__exportStar(playerVariable, exports);
	tslib_es6.__exportStar(backward, exports);
	tslib_es6.__exportStar(crossProduct, exports);
	tslib_es6.__exportStar(directionFromAngles, exports);
	tslib_es6.__exportStar(directionTowards, exports);
	tslib_es6.__exportStar(divide, exports);
	tslib_es6.__exportStar(dotProduct, exports);
	tslib_es6.__exportStar(down, exports);
	tslib_es6.__exportStar(facingDirectionOf, exports);
	tslib_es6.__exportStar(flagPosition, exports);
	tslib_es6.__exportStar(forward, exports);
	tslib_es6.__exportStar(left, exports);
	tslib_es6.__exportStar(nearestWalkablePosition, exports);
	tslib_es6.__exportStar(normalize, exports);
	tslib_es6.__exportStar(objectivePosition, exports);
	tslib_es6.__exportStar(payloadPosition, exports);
	tslib_es6.__exportStar(positionOf, exports);
	tslib_es6.__exportStar(rayCastHitNormal, exports);
	tslib_es6.__exportStar(rayCastHitPlayer, exports);
	tslib_es6.__exportStar(rayCastHitPosition, exports);
	tslib_es6.__exportStar(right, exports);
	tslib_es6.__exportStar(subtract, exports);
	tslib_es6.__exportStar(throttleOf, exports);
	tslib_es6.__exportStar(totalTimeElapsed, exports);
	tslib_es6.__exportStar(up, exports);
	tslib_es6.__exportStar(velocityOf, exports);
	tslib_es6.__exportStar(xComponentOf, exports);
	tslib_es6.__exportStar(yComponentOf, exports);
	tslib_es6.__exportStar(zComponentOf, exports);
	});

	unwrapExports(vector$1);

	var add$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(number$1, exports);
	tslib_es6.__exportStar(vector$1, exports);
	});

	unwrapExports(add$1);

	var allDeadPlayers = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 팀 또는 경기 내에서 사망한 모든 플레이어가 있는 배열입니다.
	 */
	exports.allDeadPlayers = function (
	/**
	 * 플레이어가 속한 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "All Dead Players(" + team + ")";
	};
	});

	unwrapExports(allDeadPlayers);
	var allDeadPlayers_1 = allDeadPlayers.allDeadPlayers;

	var allHeroes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 오버워치의 모든 영웅 배열입니다.
	 */
	exports.allHeroes = function () {
	    // @ts-ignore
	    return "All Heroes";
	};
	});

	unwrapExports(allHeroes);
	var allHeroes_1 = allHeroes.allHeroes;

	var allLivingPlayers = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 팀 또는 경기 내에서 생존한 모든 플레이어가 있는 배열입니다.
	 */
	exports.allLivingPlayers = function (
	/**
	 * 플레이어가 속한 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "All Living Players(" + team + ")";
	};
	});

	unwrapExports(allLivingPlayers);
	var allLivingPlayers_1 = allLivingPlayers.allLivingPlayers;

	var allPlayers = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 팀 또는 경기 내 모든 플레이어가 있는 배열입니다.
	 */
	exports.allPlayers = function (
	/**
	 * 플레이어가 속한 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "All Players(" + team + ")";
	};
	});

	unwrapExports(allPlayers);
	var allPlayers_1 = allPlayers.allPlayers;

	var allPlayersNotOnObjective = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 팀 또는 경기 내에서 화물을 확보하지도,
	 * 점령 중이지도 않은 모든 플레이어가 있는 배열입니다.
	 */
	exports.allPlayersNotOnObjective = function (
	/**
	 * 플레이어가 속한 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "All Players Not On Objective(" + team + ")";
	};
	});

	unwrapExports(allPlayersNotOnObjective);
	var allPlayersNotOnObjective_1 = allPlayersNotOnObjective.allPlayersNotOnObjective;

	var allPlayersOnObjective = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 팀 또는 경기 내에서 화물 확보 또는
	 * 점령 중인 모든 플레이어가 있는 배열입니다.
	 */
	exports.allPlayersOnObjective = function (
	/**
	 * 플레이어가 속한 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "All Players On Objective(" + team + ")";
	};
	});

	unwrapExports(allPlayersOnObjective);
	var allPlayersOnObjective_1 = allPlayersOnObjective.allPlayersOnObjective;

	var allowedHeroes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어가 선택할 수 있는 영웅 배열입니다.
	 */
	exports.allowedHeroes = function (
	/**
	 * 이 플레이어가 선택할 수 있는 영웅 목록을 가져옵니다.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Allowed Heroes(" + player + ")";
	};
	});

	unwrapExports(allowedHeroes);
	var allowedHeroes_1 = allowedHeroes.allowedHeroes;

	var arraySlice = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 범위 인덱스의 값만을
	 * 포함하고 있는 지정된 배열의 복사본입니다.
	 */
	exports.arraySlice = function (
	/**
	 * 복사본을 만들 배열입니다.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * 첫번째 범위의 인덱스입니다.
	 * - `Type.Number.`
	 */
	index, 
	/**
	 * 결과 배열의 요소 개수입니다.
	 * 설정 영역이 배열 범위를 벗어나는 경우
	 * 결과 배열이 갖는 요소의 수가 상대적으로 적을 수 있습니다.
	 * - `Type.Number.`
	 */
	count) {
	    // @ts-ignore
	    return "Array Slice(" + array + ", " + index + ", " + count + ")";
	};
	});

	unwrapExports(arraySlice);
	var arraySlice_1 = arraySlice.arraySlice;

	var emptyArray = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 요소가 없는 배열입니다.
	 */
	exports.emptyArray = function () {
	    // @ts-ignore
	    return "Empty Array";
	};
	});

	unwrapExports(emptyArray);
	var emptyArray_1 = emptyArray.emptyArray;

	var filteredArray = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 제거된 지정 조건에 해당하지 않는 값을 가진
	 * 지정된 배열의 복사본입니다.
	 */
	exports.filteredArray = function (
	/**
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * - `Type.Bool.`
	 */
	condition) {
	    // @ts-ignore
	    return "Filtered Array(" + array + ", " + condition + ")";
	};
	});

	unwrapExports(filteredArray);
	var filteredArray_1 = filteredArray.filteredArray;

	var playersInSlot = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 게임 내 지정된 슬롯을 점유하는 플레이어의 배열입니다.
	 */
	exports.playersInSlot = function (
	/**
	 * 플레이어 정보를 가져올 슬롯 번호입니다.
	 * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
	 * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
	 * - `Type.Number.`
	 */
	slot, 
	/**
	 * 플레이어 정보를 가져올 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Players In Slot(" + slot + ", " + team + ")";
	};
	});

	unwrapExports(playersInSlot);
	var playersInSlot_1 = playersInSlot.playersInSlot;

	var playersInViewAngle = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어의 조준선을 기준으로
	 * 시야각 안에 있는 플레이어입니다.
	 * 팀 단위로 제한할 수 있습니다.
	 */
	exports.playersInViewAngle = function (
	/**
	 * 시야를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 플레이어를 고려할 팀입니다.
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
	 * - `Type.Number.`
	 */
	viewAngle) {
	    // @ts-ignore
	    return "Players In View Angle(" + player + ", " + team + ", " + viewAngle + ")";
	};
	});

	unwrapExports(playersInViewAngle);
	var playersInViewAngle_1 = playersInViewAngle.playersInViewAngle;

	var playersOnHero = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 팀 또는 경기 내에서 지정된 영웅을
	 * 플레이하는 플레이어가 있는 배열입니다.
	 */
	exports.playersOnHero = function (
	/**
	 * 플레이 현황을 확인할 영웅입니다.
	 * - `Type.Hero.`
	 */
	hero, 
	/**
	 * 영웅 플레이 현황을 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Players On Hero(" + hero + ", " + team + ")";
	};
	});

	unwrapExports(playersOnHero);
	var playersOnHero_1 = playersOnHero.playersOnHero;

	var playersWithinRadius = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 한 위치의 지정된 거리 내 모든 플레이어를 포함하고 있는 배열입니다.
	 * 팀 또는 시야 범위로 제한할 수 있습니다.
	 */
	exports.playersWithinRadius = function (
	/**
	 * 거리 측정이 시작되는 중간 위치입니다.
	 * - `Type.Vector.`
	 */
	center, 
	/**
	 * 결과 배열에 포함되기 위해
	 * 플레이어가 속해 있어야 하는
	 * 반경(미터)입니다.
	 * - `Type.Number.`
	 */
	radius, 
	/**
	 * 결과 배열에 포함되기 위해
	 * 플레이어가 속해 있어야 하는
	 * 팀입니다.
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * 결과 배열에 포함되기 위해
	 * 플레이어가 시야 확인을
	 * 통과해야 하는지 여부 및
	 * 방법을 지정합니다.
	 * - `Type.LosCheck.`
	 */
	losCheck) {
	    // @ts-ignore
	    return "Players Within Radius(" + center + ", " + radius + ", " + team + ", " + losCheck + ")";
	};
	});

	unwrapExports(playersWithinRadius);
	var playersWithinRadius_1 = playersWithinRadius.playersWithinRadius;

	var randomizedArray = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 배열의 값을
	 * 무작위 순서로 나열한 복사본입니다.
	 */
	exports.randomizedArray = function (
	/**
	 * 무작위 복사본을 만들 배열입니다.
	 * - `Type.Array.`
	 */
	array) {
	    // @ts-ignore
	    return "Randomized Array(" + array + ")";
	};
	});

	unwrapExports(randomizedArray);
	var randomizedArray_1 = randomizedArray.randomizedArray;

	var removeFromArray = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 하나 이상의 값(있는 경우)이
	 * 제거된 배열의 복사본입니다.
	 */
	exports.removeFromArray = function (
	/**
	 * 값을 제거할 배열입니다.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * 배열에서 제거할 값(있는 경우)입니다.
	 * 이 값 자체가 배열인 경우
	 * 일치하는 각 요소가 제거됩니다.
	 * - `Type.Value.`
	 */
	value) {
	    // @ts-ignore
	    return "Remove From Array(" + array + ", " + value + ")";
	};
	});

	unwrapExports(removeFromArray);
	var removeFromArray_1 = removeFromArray.removeFromArray;

	var sortedArray = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 배열의 각 요소를
	 * VALUE RANK에 따라 평가하고
	 * 정렬해서 만든 새 배열 복사본입니다.
	 */
	exports.sortedArray = function (
	/**
	 * 복사본을 정렬할 배열입니다.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * 복사할 배열의 각 요소마다 평가할 값입니다.
	 * 이 값의 순서에 따라 오름차순으로 복사본이 정렬됩니다.
	 * 현재 확인 대상인 배열의 요소를 참조할 때는
	 * CURRENT ARRAY ELEMENT 값을 사용하십시오.
	 * - `Type.Value.`
	 */
	valueRank) {
	    // @ts-ignore
	    return "Sorted Array(" + array + ", " + valueRank + ")";
	};
	});

	unwrapExports(sortedArray);
	var sortedArray_1 = sortedArray.sortedArray;

	var array = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(allDeadPlayers, exports);
	tslib_es6.__exportStar(allHeroes, exports);
	tslib_es6.__exportStar(allLivingPlayers, exports);
	tslib_es6.__exportStar(allPlayers, exports);
	tslib_es6.__exportStar(allPlayersNotOnObjective, exports);
	tslib_es6.__exportStar(allPlayersOnObjective, exports);
	tslib_es6.__exportStar(allowedHeroes, exports);
	tslib_es6.__exportStar(arraySlice, exports);
	tslib_es6.__exportStar(emptyArray, exports);
	tslib_es6.__exportStar(filteredArray, exports);
	tslib_es6.__exportStar(playersInSlot, exports);
	tslib_es6.__exportStar(playersInViewAngle, exports);
	tslib_es6.__exportStar(playersOnHero, exports);
	tslib_es6.__exportStar(playersWithinRadius, exports);
	tslib_es6.__exportStar(randomizedArray, exports);
	tslib_es6.__exportStar(removeFromArray, exports);
	tslib_es6.__exportStar(sortedArray, exports);
	tslib_es6.__exportStar(globalVariable, exports);
	tslib_es6.__exportStar(playerVariable, exports);
	});

	unwrapExports(array);

	var _null = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 없음을 나타냅니다. 지정된 입력 정보에
	 * 플레이어를 지정하고 싶지 않을 때 사용할 수 있습니다.
	 * 비교 또는 디버그용으로 실수 0을 사용하는 것과 동일합니다.
	 */
	exports.Null = function () {
	    return "Null";
	};
	});

	unwrapExports(_null);
	var _null_1 = _null.Null;

	var eventPlayer$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 이벤트로 지정된 이 규칙을 실행 중인 플레이어입니다.
	 * ATTACKER 또는 VICTIM과 동일할 수 있습니다.
	 */
	exports.eventPlayer = function () {
	    return "Event Player";
	};
	});

	unwrapExports(eventPlayer$1);
	var eventPlayer_1$1 = eventPlayer$1.eventPlayer;

	var victim = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 이 규칙으로 처리된 이벤트로 인해 피해를 받은 플레이어입니다.
	 * ATTACKER 또는 EVENT PLAYER와 동일할 수 있습니다.
	 */
	exports.victim = function () {
	    return "Victim";
	};
	});

	unwrapExports(victim);
	var victim_1 = victim.victim;

	var attacker = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 이 규칙으로 처리된 이벤트로 인해 피해를 준 플레이어입니다.
	 * VICTIM 또는 EVENT PLAYER와 동일할 수 있습니다.
	 */
	exports.attacker = function () {
	    return "Attacker";
	};
	});

	unwrapExports(attacker);
	var attacker_1 = attacker.attacker;

	var closestPlayerTo = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 한 위치에서 가장 가까운 플레이어입니다.
	 * 팀으로 제한할 수 있습니다.
	 */
	exports.closestPlayerTo = function (
	/**
	 * 거리를 측정할 위치입니다.
	 * - `Type.Vector.`
	 */
	center, 
	/**
	 * 가장 가까이 있는 플레이어가 소속된 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    return "Closest Player To(" + center + ", " + team + ")";
	};
	});

	unwrapExports(closestPlayerTo);
	var closestPlayerTo_1 = closestPlayerTo.closestPlayerTo;

	var farthestPlayerFrom = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 위치로부터 가장 멀리 떨어진 플레이어로,
	 * 팀의 제한을 받을 수 있습니다.
	 */
	exports.farthestPlayerFrom = function (
	/**
	 * 거리 측정을 위한 위치입니다.
	 * - `Type.Vector.`
	 */
	center, 
	/**
	 * 가장 멀리 떨어진 플레이어가 소속된 팀입니다.
	 * - `Type.Player.`
	 */
	team) {
	    return "Farthest Player From(" + center + ", " + team + ")";
	};
	});

	unwrapExports(farthestPlayerFrom);
	var farthestPlayerFrom_1 = farthestPlayerFrom.farthestPlayerFrom;

	var playerCarryingFlag = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 깃발 뺏기에서 지정된 팀의 깃발을 지닌 플레이어입니다.
	 * 아무도 깃발을 가지지 않은 경우 결과값은 NULL입니다.
	 */
	exports.playerCarryingFlag = function (
	/**
	 * 깃발을 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    return "Player Carrying Flag(" + team + ")";
	};
	});

	unwrapExports(playerCarryingFlag);
	var playerCarryingFlag_1 = playerCarryingFlag.playerCarryingFlag;

	var playerClosestToReticle = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어의 조준선에서
	 * 가장 가까운 플레이어입니다.
	 * 팀으로 제한할 수 있습니다.
	 */
	exports.playerClosestToReticle = function (
	/**
	 * 이 플레이어의 조준선으로부터
	 * 가장 가까운 플레이어를 검색합니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 가장 가까운 플레이어를 검색할 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    return "Player Closest To Reticle(" + player + ", " + team + ")";
	};
	});

	unwrapExports(playerClosestToReticle);
	var playerClosestToReticle_1 = playerClosestToReticle.playerClosestToReticle;

	var player = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(eventPlayer$1, exports);
	tslib_es6.__exportStar(victim, exports);
	tslib_es6.__exportStar(attacker, exports);
	tslib_es6.__exportStar(closestPlayerTo, exports);
	tslib_es6.__exportStar(globalVariable, exports);
	tslib_es6.__exportStar(playerVariable, exports);
	tslib_es6.__exportStar(farthestPlayerFrom, exports);
	tslib_es6.__exportStar(playerCarryingFlag, exports);
	tslib_es6.__exportStar(playerClosestToReticle, exports);
	});

	unwrapExports(player);

	var assisterParam = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(_null, exports);
	tslib_es6.__exportStar(player, exports);
	});

	unwrapExports(assisterParam);

	var barrier = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(barrier);
	var barrier_1 = barrier.Default;

	var beam = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(beam);
	var beam_1 = beam.Default;

	var beamReevaluation = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(beamReevaluation);
	var beamReevaluation_1 = beamReevaluation.Default;

	var _false = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * false 의 부울 값입니다.
	 */
	exports.False = function () {
	    return "False";
	};
	});

	unwrapExports(_false);
	var _false_1 = _false.False;

	var _true = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * TRUE의 부울 값입니다.
	 */
	exports.True = function () {
	    return "True";
	};
	});

	unwrapExports(_true);
	var _true_1 = _true.True;

	var not = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 입력 정보가 FALSE(또는 그에 상응하는 경우)인지 여부입니다.
	 */
	exports.not = function (
	/**
	 * 이 입력 정보가 FALSE
	 * (또는 그에 상응하는 경우)라면
	 * NOT 값은 TRUE입니다.
	 * 그 이외의 경우,
	 * NOT 값은 FALSE입니다.
	 * - `Type.Bool.`
	 */
	value) {
	    return "Not(" + value + ")";
	};
	});

	unwrapExports(not);
	var not_1 = not.not;

	var or = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 두 입력 정보 중 하나가 TRUE(또는 그에 상응하는 경우)인지 여부입니다.
	 */
	exports.or = function (
	/**
	 * 두 입력 정보를 확인하여
	 * 하나가 TRUE(또는 그에 상응하는 경우)
	 * 인 경우, OR 값은 TRUE입니다.
	 * - `Type.Value.`
	 */
	value1, 
	/**
	 * 두 입력 정보를 확인하여
	 * 하나가 TRUE(또는 그에 상응하는 경우)
	 * 인 경우, OR 값은 TRUE입니다.
	 * - `Type.Value.`
	 */
	value2) {
	    return "Or(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(or);
	var or_1 = or.or;

	var and = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 두 입력 정보 모두 TRUE(또는 그에 상응하는 경우)인지 여부입니다.
	 */
	exports.and = function (
	/**
	 * 두 입력 정보를 확인하여 둘 다 TRUE(또는 그에 상응하는 경우)인경우, AND 값은 TRUE입니다.
	 * - `Type.Value.`
	 */
	value1, 
	/**
	 * 두 입력 정보를 확인하여 둘 다 TRUE(또는 그에 상응하는 경우)인경우, AND 값은 TRUE입니다.
	 * - `Type.Value.`
	 */
	value2) {
	    return "And(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(and);
	var and_1 = and.and;

	var arrayContains = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 배열에 지정된 값이 있는지 여부입니다.
	 */
	exports.arrayContains = function (
	/**
	 * 지정된 값을 검색할 배열입니다.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * 검색할 값입니다.
	 * - `Type.Value.`
	 */
	value) {
	    return "Array Contains(" + array + ", " + value + ")";
	};
	});

	unwrapExports(arrayContains);
	var arrayContains_1 = arrayContains.arrayContains;

	var compare = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 두 입력 정보의 비교 결과가 TRUE인지 여부입니다.
	 */
	exports.compare = function (
	/**
	 * 비교 연산의 좌측단입니다.
	 * 연산이 == 또는 != 인 경우 어떤 값 유형이든 상관없지만,
	 * 그 이외에는 실수 형식이어야 합니다.
	 * - `Type.Value.`
	 */
	value1, 
	/**
	 * - `Type.Operator.`
	 */
	operator, 
	/**
	 * 비교 연산의 우측단입니다.
	 * 연산이 == 또는 != 인 경우 어떤 값 유형이든 상관없지만,
	 * 그 이외에는 실수 형식이어야 합니다.
	 * - `Type.Value.`
	 */
	value2) {
	    return "Compare(" + value1 + ", " + operator + ", " + value2 + ")";
	};
	});

	unwrapExports(compare);
	var compare_1 = compare.compare;

	var entityExists = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 특정 플레이어, 아이콘 개체, 효과 개체가 아직 존재하는지 여부입니다.
	 * 플레이어가 경기를 나갔는지, 개체가 소멸됐는지 등을 판별할 때 유용합니다.
	 */
	exports.entityExists = function (
	/**
	 * 존재를 확인할 플레이어, 아이콘 개체 또는 효과 개체입니다.
	 * - `Type.Entity.`
	 */
	entity) {
	    return "Entity Exists(" + entity + ")";
	};
	});

	unwrapExports(entityExists);
	var entityExists_1 = entityExists.entityExists;

	var eventWasCriticalHit = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 이 규칙에 의해 현재 처리되고 있는 이벤트에 대한
	 * 피해가 치명타(헤드샷 등)인지 여부입니다.
	 */
	exports.eventWasCriticalHit = function () {
	    return "Event Was Critical Hit";
	};
	});

	unwrapExports(eventWasCriticalHit);
	var eventWasCriticalHit_1 = eventWasCriticalHit.eventWasCriticalHit;

	var hasSpawned = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 월드에 개체가 생성되었는지 여부입니다.
	 * 플레이어가 영웅을 선택하지 않은 경우
	 * 결과값은 FALSE 입니다.
	 */
	exports.hasSpawned = function (
	/**
	 * - `Type.Entity.`
	 */
	entity) {
	    return "Has Spawned(" + entity + ")";
	};
	});

	unwrapExports(hasSpawned);
	var hasSpawned_1 = hasSpawned.hasSpawned;

	var hasStatus = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어가 SET STATUS 액션 또는 스크립트 이외의
	 * 게임 메카닉을 통해 지정된 상태를 갖게 되었는지 여부입니다.
	 */
	exports.hasStatus = function (
	/**
	 * 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 확인할 상태입니다.
	 * - `Type.Status.`
	 */
	status) {
	    return "Has Status(" + player + ", " + status + ")";
	};
	});

	unwrapExports(hasStatus);
	var hasStatus_1 = hasStatus.hasStatus;

	var isAlive = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 생존 여부 입니다.
	 */
	exports.isAlive = function (
	/**
	 * 생존 여부를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Alive(" + player + ")";
	};
	});

	unwrapExports(isAlive);
	var isAlive_1 = isAlive.isAlive;

	var isAssemblingHeroes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 경기가 현재 영웅 선택 단계인지 여부입니다.
	 */
	exports.isAssemblingHeroes = function () {
	    return "Is Assembling Heroes";
	};
	});

	unwrapExports(isAssemblingHeroes);
	var isAssemblingHeroes_1 = isAssemblingHeroes.isAssemblingHeroes;

	var isBetweenRounds = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 경기 중 라운드 전환 시기인지 여부입니다.
	 */
	exports.isBetweenRounds = function () {
	    return "Is Between Rounds";
	};
	});

	unwrapExports(isBetweenRounds);
	var isBetweenRounds_1 = isBetweenRounds.isBetweenRounds;

	var isButtonHeld = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 지정된 버튼을 누르고 있는지 여부입니다.
	 */
	exports.isButtonHeld = function (
	/**
	 * 버튼을 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 확인할 버튼입니다.
	 * - `Type.Button.`
	 */
	button) {
	    return "Is Button Held(" + player + ", " + button + ")";
	};
	});

	unwrapExports(isButtonHeld);
	var isButtonHeld_1 = isButtonHeld.isButtonHeld;

	var isCommunicating = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 지정된 의사소통 유형
	 * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
	 */
	exports.isCommunicating = function (
	/**
	 * 의사소통 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 고려할 의사소통 유형입니다.
	 *
	 * 감정 표현의 지속 시간은 정확하게 적용되며,
	 * 음성 대사의 지속 시간은 4초로 간주합니다.
	 *
	 * 그 이외의 지속 시간은 2초로 간주합니다.
	 * - `Type.Communication.`
	 */
	type) {
	    return "Is Communicating(" + player + ", " + type + ")";
	};
	});

	unwrapExports(isCommunicating);
	var isCommunicating_1 = isCommunicating.isCommunicating;

	var isCommunicatingAny = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 아무 것이든 의사소통 유형
	 * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
	 */
	exports.isCommunicatingAny = function (
	/**
	 * 의사소통 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Communicating Any(" + player + ")";
	};
	});

	unwrapExports(isCommunicatingAny);
	var isCommunicatingAny_1 = isCommunicatingAny.isCommunicatingAny;

	var isCommunicatingAnyEmote = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 감정 표현을 사용하는지 여부입니다.
	 */
	exports.isCommunicatingAnyEmote = function (
	/**
	 * 감정표현 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Communicating Any Emote(" + player + ")";
	};
	});

	unwrapExports(isCommunicatingAnyEmote);
	var isCommunicatingAnyEmote_1 = isCommunicatingAnyEmote.isCommunicatingAnyEmote;

	var isCommunicatingAnyVoiceLine = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 음성 대사를 사용하는지 여부입니다.
	 * (음성 대사의 지속 시간은 4초로 추정)
	 */
	exports.isCommunicatingAnyVoiceLine = function (
	/**
	 * 음성 대사 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Communicating Any Voice Line(" + player + ")";
	};
	});

	unwrapExports(isCommunicatingAnyVoiceLine);
	var isCommunicatingAnyVoiceLine_1 = isCommunicatingAnyVoiceLine.isCommunicatingAnyVoiceLine;

	var isControlModePointLocked = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 쟁탈 전장에서 해당 거점이 잠겨있는지 여부입니다.
	 */
	exports.isControlModePointLocked = function () {
	    return "Is Control Mode Point Locked";
	};
	});

	unwrapExports(isControlModePointLocked);
	var isControlModePointLocked_1 = isControlModePointLocked.isControlModePointLocked;

	var isCrouching = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 웅크리고 있는 상태인지 여부입니다.
	 */
	exports.isCrouching = function (
	/**
	 * 웅크린 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Crouching(" + player + ")";
	};
	});

	unwrapExports(isCrouching);
	var isCrouching_1 = isCrouching.isCrouching;

	var isCTFModeInSuddenDeath = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 현재 깃발 뺏기 게임이 승자 결정전인지 여부입니다.
	 */
	exports.isCTFModeInSuddenDeath = function () {
	    return "Is CTF Mode In Sudden Death";
	};
	});

	unwrapExports(isCTFModeInSuddenDeath);
	var isCTFModeInSuddenDeath_1 = isCTFModeInSuddenDeath.isCTFModeInSuddenDeath;

	var isDead = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 사망 여부입니다.
	 */
	exports.isDead = function (
	/**
	 * 사망 여부를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Dead(" + player + ")";
	};
	});

	unwrapExports(isDead);
	var isDead_1 = isDead.isDead;

	var isFiringPrimary = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어의 주무기가 사용 중인지 여부입니다.
	 */
	exports.isFiringPrimary = function (
	/**
	 * 주무기 공격 사용 여부를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Firing Primary(" + player + ")";
	};
	});

	unwrapExports(isFiringPrimary);
	var isFiringPrimary_1 = isFiringPrimary.isFiringPrimary;

	var isFiringSecondary = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어의 보조 무기 공격이 사용 중인지 여부입니다.
	 */
	exports.isFiringSecondary = function (
	/**
	 * 보조 무기 공격 사용 여부를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Firing Secondary(" + player + ")";
	};
	});

	unwrapExports(isFiringSecondary);
	var isFiringSecondary_1 = isFiringSecondary.isFiringSecondary;

	var isFlagAtBase = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 깃발 뺏기에서 지정된 팀의 깃발이 해당 팀의 기지에 있는지 여부입니다.
	 */
	exports.isFlagAtBase = function (
	/**
	 * 깃발을 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    return "Is Flag At Base(" + team + ")";
	};
	});

	unwrapExports(isFlagAtBase);
	var isFlagAtBase_1 = isFlagAtBase.isFlagAtBase;

	var isFlagBeingCarried = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 깃발 뺏기에서 상대 팀이 지정된 팀의 깃발을 점유하고 있는지 여부입니다.
	 */
	exports.isFlagBeingCarried = function (
	/**
	 * 깃발을 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    return "Is Flag Being Carried(" + team + ")";
	};
	});

	unwrapExports(isFlagBeingCarried);
	var isFlagBeingCarried_1 = isFlagBeingCarried.isFlagBeingCarried;

	var isGameInProgress = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 경기의 주요 단계(전투 및 점수 산정이 허용되는 시기)가 진행 중인지 여부입니다.
	 */
	exports.isGameInProgress = function () {
	    return "Is Game In Progress";
	};
	});

	unwrapExports(isGameInProgress);
	var isGameInProgress_1 = isGameInProgress.isGameInProgress;

	var isHeroBeingPlayed = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * (팀 또는 경기 내에서) 지정된 영웅이 사용되고 있는지 여부입니다.
	 */
	exports.isHeroBeingPlayed = function (
	/**
	 * 플레이 현황을 확인할 영웅입니다.
	 * - `Type.Hero.`
	 */
	hero, 
	/**
	 * 영웅 플레이 현황을 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    return "Is Hero Being Played(" + hero + ", " + team + ")";
	};
	});

	unwrapExports(isHeroBeingPlayed);
	var isHeroBeingPlayed_1 = isHeroBeingPlayed.isHeroBeingPlayed;

	var isInAir = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 공중에 있는 상태인지 여부입니다.
	 */
	exports.isInAir = function (
	/**
	 * 공중에 있는 상태인지를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is In Air(" + player + ")";
	};
	});

	unwrapExports(isInAir);
	var isInAir_1 = isInAir.isInAir;

	var isInLineOfSight = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 두 위치가 서로 보이는지 여부입니다.
	 */
	exports.isInLineOfSight = function (
	/**
	 * 시야 확인의 시작 위치입니다.
	 * 플레이어가 설정되어 있으면
	 * 해당 플레이어의 발 위로
	 * 2미터 위치가 사용됩니다.
	 * - `Type.Vector.`
	 */
	startPos, 
	/**
	 * 시야 확인의 종료 위치입니다.
	 * 플레이어가 설정되어 있으면
	 * 해당 플레이어의 발 위로
	 * 2미터 위치가 사용됩니다.
	 * - `Type.Vector.`
	 */
	endPos, 
	/**
	 * 방벽이 시야에 미치는 영향을 정의합니다.
	 * 방벽이 적 소유인지를 판정할 때는
	 * START POS에 제공된 플레이어의
	 * 소속(있는 경우)이 사용됩니다.
	 * - `Type.Barrier.`
	 */
	barriers) {
	    return "Is In Line Of Sight(" + startPos + ", " + endPos + ", " + barriers + ")";
	};
	});

	unwrapExports(isInLineOfSight);
	var isInLineOfSight_1 = isInLineOfSight.isInLineOfSight;

	var isInSetup = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 경기가 현재 준비 단계인지 여부입니다.
	 */
	exports.isInSetup = function () {
	    return "Is In Setup";
	};
	});

	unwrapExports(isInSetup);
	var isInSetup_1 = isInSetup.isInSetup;

	var isInSpawnRoom = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어가 전투준비실에 있는지
	 * (또한 치유되고 영웅을 변경할 수 있는지) 여부 입니다.
	 */
	exports.isInSpawnRoom = function (
	/**
	 * 전투준비실 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is In Spawn Room(" + player + ")";
	};
	});

	unwrapExports(isInSpawnRoom);
	var isInSpawnRoom_1 = isInSpawnRoom.isInSpawnRoom;

	var isInViewAngle = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * LOCATION이 플레이어의 시야에 있는지 여부입니다.
	 */
	exports.isInViewAngle = function (
	/**
	 * 시야를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 시야에 있는지 테스트할 LOCATION입니다.
	 * - `Type.Vector.`
	 */
	location, 
	/**
	 * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
	 * - `Type.Number.`
	 */
	viewAngle) {
	    return "Is In View Angle(" + player + ", " + location + ", " + viewAngle + ")";
	};
	});

	unwrapExports(isInViewAngle);
	var isInViewAngle_1 = isInViewAngle.isInViewAngle;

	var isMatchComplete = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 경기가 완료되었는지 여부입니다.
	 */
	exports.isMatchComplete = function () {
	    return "Is Match Complete";
	};
	});

	unwrapExports(isMatchComplete);
	var isMatchComplete_1 = isMatchComplete.isMatchComplete;

	var isMoving = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 이동하고 있는지
	 * 여부(현재 속도가 0인지 여부로 판단)입니다.
	 */
	exports.isMoving = function (
	/**
	 * 이동 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Moving(" + player + ")";
	};
	});

	unwrapExports(isMoving);
	var isMoving_1 = isMoving.isMoving;

	var isObjectiveComplete = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 목표가 완료되었는지 여부입니다.
	 * 게임 모드가 점령, 호위 또는
	 * 점령/호위가 아닌 경우
	 * 결과값은 FALSE입니다.
	 */
	exports.isObjectiveComplete = function (
	/**
	 * 고려해야 하는 목표의 인덱스로서,
	 * 0에서 시작하여 증가합니다.
	 * 각 거점, 화물 경유지,
	 * 화물 목적지에는
	 * 각기 고유의 인덱스가 있습니다.
	 * - `Type.Number.`
	 */
	number) {
	    return "Is Objective Complete(" + number + ")";
	};
	});

	unwrapExports(isObjectiveComplete);
	var isObjectiveComplete_1 = isObjectiveComplete.isObjectiveComplete;

	var isOnGround = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 착지(또는 걷기가 가능한 표면에 있는) 상태인지 여부입니다.
	 */
	exports.isOnGround = function (
	/**
	 * 착지 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is On Ground(" + player + ")";
	};
	});

	unwrapExports(isOnGround);
	var isOnGround_1 = isOnGround.isOnGround;

	var isOnObjective = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어가 현재 화물 또는 점령 지점을 점유하고 있는지 여부입니다.
	 */
	exports.isOnObjective = function (
	/**
	 * 목표 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is On Objective(" + player + ")";
	};
	});

	unwrapExports(isOnObjective);
	var isOnObjective_1 = isOnObjective.isOnObjective;

	var isOnWall = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 벽에 있는 상태(오르거나 타는 상태)인지 여부입니다.
	 */
	exports.isOnWall = function (
	/**
	 * 벽 상태를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is On Wall(" + player + ")";
	};
	});

	unwrapExports(isOnWall);
	var isOnWall_1 = isOnWall.isOnWall;

	var isPortraitOnFire = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어의 초상화가 폭주 상태인지 여부입니다.
	 */
	exports.isPortraitOnFire = function (
	/**
	 * 초상화를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Portrait On Fire(" + player + ")";
	};
	});

	unwrapExports(isPortraitOnFire);
	var isPortraitOnFire_1 = isPortraitOnFire.isPortraitOnFire;

	var isStanding = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 서 있는 상태인지 여부
	 * (이동하지 않고 공중에 있는
	 * 상태가 아닌 경우로 판단)입니다.
	 */
	exports.isStanding = function (
	/**
	 * 서 있는 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Standing(" + player + ")";
	};
	});

	unwrapExports(isStanding);
	var isStanding_1 = isStanding.isStanding;

	var isTeamOnDefense = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 팀이 현재 수비 중인지 여부입니다.
	 * 게임 모드가 점령, 호위,
	 * 또는 점령/호위가 아닌 경우
	 * 결과값은 FALSE입니다.
	 */
	exports.isTeamOnDefense = function (
	/**
	 * 역할을 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    return "Is Team On Defense(" + team + ")";
	};
	});

	unwrapExports(isTeamOnDefense);
	var isTeamOnDefense_1 = isTeamOnDefense.isTeamOnDefense;

	var isTeamOnOffense = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 팀이 현재 공격 중인지 여부입니다.
	 * 게임 모드가 점령, 호위,
	 * 또는 점령/호위가 아닌 경우
	 * 결과값은 FALSE입니다.
	 */
	exports.isTeamOnOffense = function (
	/**
	 * 역할을 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    return "Is Team On Offense(" + team + ")";
	};
	});

	unwrapExports(isTeamOnOffense);
	var isTeamOnOffense_1 = isTeamOnOffense.isTeamOnOffense;

	var isTrueForAll = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 배열의 모든 값이 지정된 조건에 대해 TRUE인지 여부입니다.
	 */
	exports.isTrueForAll = function (
	/**
	 * 값을 확인할 배열입니다.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * 지정된 배열의 각 요소에 대해 확인할 조건입니다.
	 * 현재 확인 대상인 배열의 요소를 참조할 때는
	 * CURRENT ARRAY ELEMENT 값을 사용하십시오.
	 * - `Type.Bool.`
	 */
	condition) {
	    return "Is True For All(" + array + ", " + condition + ")";
	};
	});

	unwrapExports(isTrueForAll);
	var isTrueForAll_1 = isTrueForAll.isTrueForAll;

	var isTrueForAny = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 배열의 값 중 하나가 지정된 조건에 대해 TRUE인지 여부입니다.
	 */
	exports.isTrueForAny = function (
	/**
	 * 값을 확인할 배열입니다.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * 지정된 배열의 각 요소에 대해 확인할 조건입니다.
	 * 현재 확인 대상인 배열의 요소를 참조할 때는
	 * CURRENT ARRAY ELEMENT 값을 사용하십시오.
	 * - `Type.Bool.`
	 */
	condition) {
	    return "Is True For Any(" + array + ", " + condition + ")";
	};
	});

	unwrapExports(isTrueForAny);
	var isTrueForAny_1 = isTrueForAny.isTrueForAny;

	var isUsingAbility1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어가 기술 1을 사용하는지 여부입니다.
	 */
	exports.isUsingAbility1 = function (
	/**
	 * 기술 1의 사용 여부를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Using Ability 1(" + player + ")";
	};
	});

	unwrapExports(isUsingAbility1);
	var isUsingAbility1_1 = isUsingAbility1.isUsingAbility1;

	var isUsingAbility2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어가 기술 2를 사용하는지 여부입니다.
	 */
	exports.isUsingAbility2 = function (
	/**
	 * 기술 2의 사용 여부를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Using Ability 2(" + player + ")";
	};
	});

	unwrapExports(isUsingAbility2);
	var isUsingAbility2_1 = isUsingAbility2.isUsingAbility2;

	var isUsingUltimate = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 궁극기를 사용하는지 여부입니다.
	 */
	exports.isUsingUltimate = function (
	/**
	 * 궁극기 사용 여부를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Using Ultimate(" + player + ")";
	};
	});

	unwrapExports(isUsingUltimate);
	var isUsingUltimate_1 = isUsingUltimate.isUsingUltimate;

	var isWaitingForPlayers = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 경기 시작에 앞서 플레이어가 참여하기를
	 * 기다리고 있는지 여부입니다.
	 */
	exports.isWaitingForPlayers = function () {
	    return "Is Waiting For Players";
	};
	});

	unwrapExports(isWaitingForPlayers);
	var isWaitingForPlayers_1 = isWaitingForPlayers.isWaitingForPlayers;

	var bool = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(_false, exports);
	tslib_es6.__exportStar(_true, exports);
	tslib_es6.__exportStar(not, exports);
	tslib_es6.__exportStar(or, exports);
	tslib_es6.__exportStar(and, exports);
	tslib_es6.__exportStar(arrayContains, exports);
	tslib_es6.__exportStar(compare, exports);
	tslib_es6.__exportStar(entityExists, exports);
	tslib_es6.__exportStar(eventWasCriticalHit, exports);
	tslib_es6.__exportStar(hasSpawned, exports);
	tslib_es6.__exportStar(hasStatus, exports);
	tslib_es6.__exportStar(isAlive, exports);
	tslib_es6.__exportStar(isAssemblingHeroes, exports);
	tslib_es6.__exportStar(isBetweenRounds, exports);
	tslib_es6.__exportStar(isButtonHeld, exports);
	tslib_es6.__exportStar(isCommunicating, exports);
	tslib_es6.__exportStar(isCommunicatingAny, exports);
	tslib_es6.__exportStar(isCommunicatingAnyEmote, exports);
	tslib_es6.__exportStar(isCommunicatingAnyVoiceLine, exports);
	tslib_es6.__exportStar(isControlModePointLocked, exports);
	tslib_es6.__exportStar(isCrouching, exports);
	tslib_es6.__exportStar(isCTFModeInSuddenDeath, exports);
	tslib_es6.__exportStar(isDead, exports);
	tslib_es6.__exportStar(isFiringPrimary, exports);
	tslib_es6.__exportStar(isFiringSecondary, exports);
	tslib_es6.__exportStar(isFlagAtBase, exports);
	tslib_es6.__exportStar(isFlagBeingCarried, exports);
	tslib_es6.__exportStar(isGameInProgress, exports);
	tslib_es6.__exportStar(isHeroBeingPlayed, exports);
	tslib_es6.__exportStar(isInAir, exports);
	tslib_es6.__exportStar(isInLineOfSight, exports);
	tslib_es6.__exportStar(isInSetup, exports);
	tslib_es6.__exportStar(isInSpawnRoom, exports);
	tslib_es6.__exportStar(isInViewAngle, exports);
	tslib_es6.__exportStar(isMatchComplete, exports);
	tslib_es6.__exportStar(isMoving, exports);
	tslib_es6.__exportStar(isObjectiveComplete, exports);
	tslib_es6.__exportStar(isOnGround, exports);
	tslib_es6.__exportStar(isOnObjective, exports);
	tslib_es6.__exportStar(isOnWall, exports);
	tslib_es6.__exportStar(isPortraitOnFire, exports);
	tslib_es6.__exportStar(isStanding, exports);
	tslib_es6.__exportStar(isFiringSecondary, exports);
	tslib_es6.__exportStar(isTeamOnDefense, exports);
	tslib_es6.__exportStar(isTeamOnOffense, exports);
	tslib_es6.__exportStar(isTrueForAll, exports);
	tslib_es6.__exportStar(isTrueForAny, exports);
	tslib_es6.__exportStar(isUsingAbility1, exports);
	tslib_es6.__exportStar(isUsingAbility2, exports);
	tslib_es6.__exportStar(isUsingUltimate, exports);
	tslib_es6.__exportStar(isWaitingForPlayers, exports);
	});

	unwrapExports(bool);

	var button = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(button);
	var button_1 = button.Default;

	var clipping = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(clipping);
	var clipping_1 = clipping.Default;

	var color = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(color);
	var color_1 = color.Default;

	var communication = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(communication);
	var communication_1 = communication.Default;

	var damageModificationId = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(lastDamageModificationId, exports);
	tslib_es6.__exportStar(globalVariable, exports);
	tslib_es6.__exportStar(playerVariable, exports);
	});

	unwrapExports(damageModificationId);

	var damageModificationReevaluation = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(damageModificationReevaluation);
	var damageModificationReevaluation_1 = damageModificationReevaluation.Default;

	var damageOverTimeId = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(lastDamageOverTimeId, exports);
	tslib_es6.__exportStar(globalVariable, exports);
	tslib_es6.__exportStar(playerVariable, exports);
	});

	unwrapExports(damageOverTimeId);

	var destinationParam = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(number$1, exports);
	tslib_es6.__exportStar(vector$1, exports);
	});

	unwrapExports(destinationParam);

	var divide$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(number$1, exports);
	tslib_es6.__exportStar(vector$1, exports);
	});

	unwrapExports(divide$1);

	var effect = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(effect);
	var effect_1 = effect.Default;

	var effectReevaluation = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(effectReevaluation);
	var effectReevaluation_1 = effectReevaluation.Default;

	var lastCreatedEntity = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * EVENT PLAYER 또는 전역 레벨에서 가장 마지막에
	 * 생성된 효과 또는 아이콘 개체에 대한 참조입니다.
	 */
	exports.lastCreatedEntity = function () {
	    return "Last Created Entity";
	};
	});

	unwrapExports(lastCreatedEntity);
	var lastCreatedEntity_1 = lastCreatedEntity.lastCreatedEntity;

	var entity = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(player, exports);
	tslib_es6.__exportStar(lastCreatedEntity, exports);
	tslib_es6.__exportStar(globalVariable, exports);
	tslib_es6.__exportStar(playerVariable, exports);
	});

	unwrapExports(entity);

	var facingReevaluation = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(facingReevaluation);
	var facingReevaluation_1 = facingReevaluation.Default;

	var healOverTimeId = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(lastHealOverTimeId, exports);
	tslib_es6.__exportStar(globalVariable, exports);
	tslib_es6.__exportStar(playerVariable, exports);
	});

	unwrapExports(healOverTimeId);

	var hero = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 영웅 상수입니다.
	 */
	exports.hero = function (
	/**
	 * - `Type.HeroConstant.`
	 */
	hero) {
	    return "Hero(" + hero + ")";
	};
	});

	unwrapExports(hero);
	var hero_1 = hero.hero;

	var heroOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 현재 사용하는 영웅입니다.
	 */
	exports.heroOf = function (
	/**
	 * 영웅 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Hero Of(" + player + ")";
	};
	});

	unwrapExports(heroOf);
	var heroOf_1 = heroOf.heroOf;

	var hero$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(hero, exports);
	tslib_es6.__exportStar(heroOf, exports);
	});

	unwrapExports(hero$1);

	var hudTextReevaluation = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(hudTextReevaluation);
	var hudTextReevaluation_1 = hudTextReevaluation.Default;

	var icon = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(icon);
	var icon_1 = icon.Default;

	var iconReevaluation = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(iconReevaluation);
	var iconReevaluation_1 = iconReevaluation.Default;

	var invisibleTo = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(invisibleTo);
	var invisibleTo_1 = invisibleTo.Default;

	var inWorldTextReevaluation = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(inWorldTextReevaluation);
	var inWorldTextReevaluation_1 = inWorldTextReevaluation.Default;

	var location_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(location_1);
	var location_2 = location_1.Default;

	var losCheck = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(losCheck);
	var losCheck_1 = losCheck.Default;

	var motion = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(motion);
	var motion_1 = motion.Default;

	var multiply = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(number$1, exports);
	tslib_es6.__exportStar(vector$1, exports);
	});

	unwrapExports(multiply);

	var objectiveDescriptionReevaluation = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(objectiveDescriptionReevaluation);
	var objectiveDescriptionReevaluation_1 = objectiveDescriptionReevaluation.Default;

	var operator = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(operator);
	var operator_1 = operator.Default;

	var playEffect = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(playEffect);
	var playEffect_1 = playEffect.Default;

	var playersParam = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(player, exports);
	tslib_es6.__exportStar(array, exports);
	});

	unwrapExports(playersParam);

	var reevaluation = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(reevaluation);
	var reevaluation_1 = reevaluation.Default;

	var relative = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(relative);
	var relative_1 = relative.Default;

	var roundingType = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(roundingType);
	var roundingType_1 = roundingType.Default;

	var spectators = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(spectators);
	var spectators_1 = spectators.Default;

	var startAcceleratingReevaluation = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(startAcceleratingReevaluation);
	var startAcceleratingReevaluation_1 = startAcceleratingReevaluation.Default;

	var startThrottleBehavior = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(startThrottleBehavior);
	var startThrottleBehavior_1 = startThrottleBehavior.Default;

	var startThrottleReevaluation = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(startThrottleReevaluation);
	var startThrottleReevaluation_1 = startThrottleReevaluation.Default;

	var status = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(status);
	var status_1 = status.Default;

	var heroIconString = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * HERO 매개변수를 아이콘으로 표시할 문자열로 변환합니다.
	 */
	exports.heroIconString = function (
	/**
	 * - `Type.Hero.`
	 */
	value) {
	    return "Hero Icon String(" + value + ")";
	};
	});

	unwrapExports(heroIconString);
	var heroIconString_1 = heroIconString.heroIconString;

	var string = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 선택한 텍스트와 지정된 값으로 구성된 텍스트입니다.
	 */
	exports.string = function (
	/**
	 * 결과로 표시되는 텍스트입니다.
	 * 중괄호 안의 숫자는 대응값으로 교체됩니다.
	 * - `Type.Text.`
	 */
	string, 
	/**
	 * 텍스트로 전환되어 {0}을 대체할 값입니다.
	 * - `Type.StringParam.`
	 */
	_0, 
	/**
	 * 텍스트로 전환되어 {1}을 대체할 값입니다.
	 * - `Type.StringParam.`
	 */
	_1, 
	/**
	 * 텍스트로 전환되어 {2}를 대체할 값입니다.
	 * - `Type.StringParam.`
	 */
	_2) {
	    return "String(" + string + ", " + _0 + ", " + _1 + ", " + _2 + ")";
	};
	});

	unwrapExports(string);
	var string_1 = string.string;

	var string$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(heroIconString, exports);
	tslib_es6.__exportStar(string, exports);
	});

	unwrapExports(string$1);

	var stringParam = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(string$1, exports);
	tslib_es6.__exportStar(_null, exports);
	});

	unwrapExports(stringParam);

	var subtract$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(number$1, exports);
	tslib_es6.__exportStar(vector$1, exports);
	});

	unwrapExports(subtract$1);

	var team = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 팀 상수입니다. ALL 옵션은 팀전의 양팀,
	 * 또는 개별 전투 게임의 모든 플레이어를 뜻합니다.
	 */
	exports.team = function (
	/**
	 * - `Type.TeamConstant.`
	 */
	team) {
	    return "Team(" + team + ")";
	};
	});

	unwrapExports(team);
	var team_1 = team.team;

	var controlModeScoringTeam = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 현재 쟁탈 전장에서 점수를 축적하고 있는 팀입니다.
	 * 아무 팀도 점수를 축적하지 못한 경우 결과값은 ALL입니다.
	 */
	exports.controlModeScoringTeam = function () {
	    return "Control Mode Scoring Team";
	};
	});

	unwrapExports(controlModeScoringTeam);
	var controlModeScoringTeam_1 = controlModeScoringTeam.controlModeScoringTeam;

	var oppositeTeamOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 팀의 상대 팀입니다.
	 */
	exports.oppositeTeamOf = function (
	/**
	 * 상대 팀 정보를 가져올 팀입니다.
	 * ALL인 경우, 결과는 ALL입니다.
	 * - `Type.Team.`
	 */
	team) {
	    return "Opposite Team Of(" + team + ")";
	};
	});

	unwrapExports(oppositeTeamOf);
	var oppositeTeamOf_1 = oppositeTeamOf.oppositeTeamOf;

	var teamOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 해당 플레이어의 소속 팀입니다.
	 * 게임 모드가 개별 전투인 경우 팀은 ALL로 간주됩니다.
	 */
	exports.teamOf = function (
	/**
	 * 팀 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Team Of(" + player + ")";
	};
	});

	unwrapExports(teamOf);
	var teamOf_1 = teamOf.teamOf;

	var team$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(team, exports);
	tslib_es6.__exportStar(controlModeScoringTeam, exports);
	tslib_es6.__exportStar(oppositeTeamOf, exports);
	tslib_es6.__exportStar(teamOf, exports);
	});

	unwrapExports(team$1);

	var text = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(text);
	var text_1 = text.Default;

	var textId = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(lastTextId, exports);
	tslib_es6.__exportStar(globalVariable, exports);
	tslib_es6.__exportStar(playerVariable, exports);
	});

	unwrapExports(textId);

	var transformation = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(transformation);
	var transformation_1 = transformation.Default;

	var absoluteValue = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 값의 절대값입니다.
	 */
	exports.absoluteValue = function (
	/**
	 * 절대값을 계산할 실수값입니다.
	 * - `Type.Number.`
	 */
	value) {
	    return "Absolute Value(" + value + ")";
	};
	});

	unwrapExports(absoluteValue);
	var absoluteValue_1 = absoluteValue.absoluteValue;

	var appendToArray = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 맨 뒤에 하나 이상의 값을 덧붙인 배열의 복사본입니다.
	 */
	exports.appendToArray = function (
	/**
	 * 덧붙일 대상 배열입니다.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * 배열 후미에 덧붙일 값입니다.
	 * 이 값 자체가 배열인 경우 각 요소를 덧붙입니다.
	 * - `Type.Value.`
	 */
	value) {
	    return "Append To Array(" + array + ", " + value + ")";
	};
	});

	unwrapExports(appendToArray);
	var appendToArray_1 = appendToArray.appendToArray;

	var currentArrayElement = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 현재 연산 대상인 배열 요소입니다.
	 * FILTERED ARRAY 나 SORTED ARRAY 등의
	 * 값을 확인할 때에만 의미가 있습니다.
	 */
	exports.currentArrayElement = function () {
	    return "Current Array Element";
	};
	});

	unwrapExports(currentArrayElement);
	var currentArrayElement_1 = currentArrayElement.currentArrayElement;

	var firstOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 배열의 맨 앞에 있는 값입니다.
	 * 해당 배열이 비어 있으면 결과 값은 0 입니다.
	 */
	exports.firstOf = function (
	/**
	 * 값을 가져올 배열입니다.
	 * - `Type.Array.`
	 */
	array) {
	    return "First Of(" + array + ")";
	};
	});

	unwrapExports(firstOf);
	var firstOf_1 = firstOf.firstOf;

	var lastOf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 배열의 끝에 있는 값입니다.
	 * 해당 배열이 비어있으면 결과값은 0입니다.
	 */
	exports.lastOf = function (
	/**
	 * 값을 가져올 배열입니다.
	 * - `Type.Array.`
	 */
	array) {
	    return "Last Of(" + array + ")";
	};
	});

	unwrapExports(lastOf);
	var lastOf_1 = lastOf.lastOf;

	var matchTime = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 현재 게임 모드 단계의 잔여 시간(초)입니다.
	 */
	exports.matchTime = function () {
	    return "Match Time";
	};
	});

	unwrapExports(matchTime);
	var matchTime_1 = matchTime.matchTime;

	var multiply$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 두 숫자 또는 벡터의 곱입니다. 벡터에 숫자를
	 * 곱하면 비율이 증감된 벡터가 도출됩니다.
	 */
	exports.multiply = function (
	/**
	 * 좌측 피연산자입니다.
	 * 결과값이 숫자로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Type.Multiply.`
	 */
	value1, 
	/**
	 * 우측 피연산자입니다.
	 * 결과값이 숫자로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Type.Multiply.`
	 */
	value2) {
	    return "Multiply(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(multiply$1);
	var multiply_1 = multiply$1.multiply;

	var randomValueInArray = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 배열의 무작위 값입니다.
	 */
	exports.randomValueInArray = function (
	/**
	 * 무작위 값을 취할 배열입니다.
	 * 배열이 아닌 값이 주어진 경우,
	 * 주어진 값이 그대로 결과값이 됩니다.
	 * - `Type.Value.`
	 */
	array) {
	    return "Random Value In Array(" + array + ")";
	};
	});

	unwrapExports(randomValueInArray);
	var randomValueInArray_1 = randomValueInArray.randomValueInArray;

	var valueInArray = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 한 배열의 지정된 요소에 있는 값입니다.
	 * 대상 요소가 없는 경우 결과값은 0입니다.
	 */
	exports.valueInArray = function (
	/**
	 * 요소 정보를 가져올 대상 배열입니다.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * 요소 정보를 가져올 인덱스입니다.
	 * - `Type.Number.`
	 */
	index) {
	    return "Value In Array(" + array + ", " + index + ")";
	};
	});

	unwrapExports(valueInArray);
	var valueInArray_1 = valueInArray.valueInArray;

	var value = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(absoluteValue, exports);
	tslib_es6.__exportStar(add, exports);
	tslib_es6.__exportStar(allDeadPlayers, exports);
	tslib_es6.__exportStar(allHeroes, exports);
	tslib_es6.__exportStar(allLivingPlayers, exports);
	tslib_es6.__exportStar(allPlayers, exports);
	tslib_es6.__exportStar(allPlayersNotOnObjective, exports);
	tslib_es6.__exportStar(allPlayersOnObjective, exports);
	tslib_es6.__exportStar(allowedHeroes, exports);
	tslib_es6.__exportStar(altitudeOf, exports);
	tslib_es6.__exportStar(and, exports);
	tslib_es6.__exportStar(angleBetweenVectors, exports);
	tslib_es6.__exportStar(angleDifference, exports);
	tslib_es6.__exportStar(appendToArray, exports);
	tslib_es6.__exportStar(arccosineInDegrees, exports);
	tslib_es6.__exportStar(arccosineInRadians, exports);
	tslib_es6.__exportStar(arcsineInDegrees, exports);
	tslib_es6.__exportStar(arcsineInRadians, exports);
	tslib_es6.__exportStar(arctangentInDegrees, exports);
	tslib_es6.__exportStar(arctangentInRadians, exports);
	tslib_es6.__exportStar(arrayContains, exports);
	tslib_es6.__exportStar(arraySlice, exports);
	tslib_es6.__exportStar(attacker, exports);
	tslib_es6.__exportStar(backward, exports);
	tslib_es6.__exportStar(closestPlayerTo, exports);
	tslib_es6.__exportStar(compare, exports);
	tslib_es6.__exportStar(controlModeScoringPercentage, exports);
	tslib_es6.__exportStar(controlModeScoringTeam, exports);
	tslib_es6.__exportStar(cosineFromDegrees, exports);
	tslib_es6.__exportStar(cosineFromRadians, exports);
	tslib_es6.__exportStar(countOf, exports);
	tslib_es6.__exportStar(crossProduct, exports);
	tslib_es6.__exportStar(currentArrayElement, exports);
	tslib_es6.__exportStar(directionFromAngles, exports);
	tslib_es6.__exportStar(directionTowards, exports);
	tslib_es6.__exportStar(distanceBetween, exports);
	tslib_es6.__exportStar(divide, exports);
	tslib_es6.__exportStar(dotProduct, exports);
	tslib_es6.__exportStar(down, exports);
	tslib_es6.__exportStar(emptyArray, exports);
	tslib_es6.__exportStar(entityExists, exports);
	tslib_es6.__exportStar(eventDamage, exports);
	tslib_es6.__exportStar(eventPlayer$1, exports);
	tslib_es6.__exportStar(eventWasCriticalHit, exports);
	tslib_es6.__exportStar(eyePosition, exports);
	tslib_es6.__exportStar(facingDirectionOf, exports);
	tslib_es6.__exportStar(_false, exports);
	tslib_es6.__exportStar(farthestPlayerFrom, exports);
	tslib_es6.__exportStar(filteredArray, exports);
	tslib_es6.__exportStar(firstOf, exports);
	tslib_es6.__exportStar(flagPosition, exports);
	tslib_es6.__exportStar(forward, exports);
	tslib_es6.__exportStar(globalVariable, exports);
	tslib_es6.__exportStar(hasSpawned, exports);
	tslib_es6.__exportStar(hasStatus, exports);
	tslib_es6.__exportStar(health, exports);
	tslib_es6.__exportStar(hero, exports);
	tslib_es6.__exportStar(heroIconString, exports);
	tslib_es6.__exportStar(heroOf, exports);
	tslib_es6.__exportStar(horizontalAngleFromDirection, exports);
	tslib_es6.__exportStar(horizontalAngleTowards, exports);
	tslib_es6.__exportStar(horizontalFacingAngleOf, exports);
	tslib_es6.__exportStar(horizontalSpeedOf, exports);
	tslib_es6.__exportStar(indexOfArrayValue, exports);
	tslib_es6.__exportStar(isAlive, exports);
	tslib_es6.__exportStar(isAssemblingHeroes, exports);
	tslib_es6.__exportStar(isBetweenRounds, exports);
	tslib_es6.__exportStar(isButtonHeld, exports);
	tslib_es6.__exportStar(isCommunicating, exports);
	tslib_es6.__exportStar(isCommunicatingAny, exports);
	tslib_es6.__exportStar(isCommunicatingAnyEmote, exports);
	tslib_es6.__exportStar(isCommunicatingAnyVoiceLine, exports);
	tslib_es6.__exportStar(isControlModePointLocked, exports);
	tslib_es6.__exportStar(isCrouching, exports);
	tslib_es6.__exportStar(isCTFModeInSuddenDeath, exports);
	tslib_es6.__exportStar(isDead, exports);
	tslib_es6.__exportStar(isFiringPrimary, exports);
	tslib_es6.__exportStar(isFiringSecondary, exports);
	tslib_es6.__exportStar(isFlagAtBase, exports);
	tslib_es6.__exportStar(isFlagBeingCarried, exports);
	tslib_es6.__exportStar(isGameInProgress, exports);
	tslib_es6.__exportStar(isHeroBeingPlayed, exports);
	tslib_es6.__exportStar(isInAir, exports);
	tslib_es6.__exportStar(isInLineOfSight, exports);
	tslib_es6.__exportStar(isInSetup, exports);
	tslib_es6.__exportStar(isInSpawnRoom, exports);
	tslib_es6.__exportStar(isInViewAngle, exports);
	tslib_es6.__exportStar(isMatchComplete, exports);
	tslib_es6.__exportStar(isMoving, exports);
	tslib_es6.__exportStar(isObjectiveComplete, exports);
	tslib_es6.__exportStar(isOnGround, exports);
	tslib_es6.__exportStar(isOnObjective, exports);
	tslib_es6.__exportStar(isOnWall, exports);
	tslib_es6.__exportStar(isPortraitOnFire, exports);
	tslib_es6.__exportStar(isStanding, exports);
	tslib_es6.__exportStar(isTeamOnDefense, exports);
	tslib_es6.__exportStar(isTeamOnOffense, exports);
	tslib_es6.__exportStar(isTrueForAll, exports);
	tslib_es6.__exportStar(isTrueForAny, exports);
	tslib_es6.__exportStar(isUsingAbility1, exports);
	tslib_es6.__exportStar(isUsingAbility2, exports);
	tslib_es6.__exportStar(isUsingUltimate, exports);
	tslib_es6.__exportStar(isWaitingForPlayers, exports);
	tslib_es6.__exportStar(lastCreatedEntity, exports);
	tslib_es6.__exportStar(lastDamageModificationId, exports);
	tslib_es6.__exportStar(lastDamageOverTimeId, exports);
	tslib_es6.__exportStar(lastHealOverTimeId, exports);
	tslib_es6.__exportStar(lastOf, exports);
	tslib_es6.__exportStar(lastTextId, exports);
	tslib_es6.__exportStar(left, exports);
	tslib_es6.__exportStar(localVectorOf, exports);
	tslib_es6.__exportStar(matchRound, exports);
	tslib_es6.__exportStar(matchTime, exports);
	tslib_es6.__exportStar(max, exports);
	tslib_es6.__exportStar(maxHealth, exports);
	tslib_es6.__exportStar(min, exports);
	tslib_es6.__exportStar(modulo, exports);
	tslib_es6.__exportStar(multiply$1, exports);
	tslib_es6.__exportStar(nearestWalkablePosition, exports);
	tslib_es6.__exportStar(normalize, exports);
	tslib_es6.__exportStar(normalizedHealth, exports);
	tslib_es6.__exportStar(not, exports);
	tslib_es6.__exportStar(_null, exports);
	tslib_es6.__exportStar(number, exports);
	tslib_es6.__exportStar(numberOfDeadPlayers, exports);
	tslib_es6.__exportStar(numberOfDeaths, exports);
	tslib_es6.__exportStar(numberOfEliminations, exports);
	tslib_es6.__exportStar(numberOfFinalBlows, exports);
	tslib_es6.__exportStar(numberOfHeroes, exports);
	tslib_es6.__exportStar(numberOfLivingPlayers, exports);
	tslib_es6.__exportStar(numberOfPlayers, exports);
	tslib_es6.__exportStar(numberOfPlayersOnObjective, exports);
	tslib_es6.__exportStar(objectiveIndex, exports);
	tslib_es6.__exportStar(objectivePosition, exports);
	tslib_es6.__exportStar(oppositeTeamOf, exports);
	tslib_es6.__exportStar(or, exports);
	tslib_es6.__exportStar(payloadPosition, exports);
	tslib_es6.__exportStar(payloadProgressPercentage, exports);
	tslib_es6.__exportStar(playerCarryingFlag, exports);
	tslib_es6.__exportStar(playerClosestToReticle, exports);
	tslib_es6.__exportStar(playerVariable, exports);
	tslib_es6.__exportStar(playersInSlot, exports);
	tslib_es6.__exportStar(playersInViewAngle, exports);
	tslib_es6.__exportStar(playersOnHero, exports);
	tslib_es6.__exportStar(playersWithinRadius, exports);
	tslib_es6.__exportStar(pointCapturePercentage, exports);
	tslib_es6.__exportStar(positionOf, exports);
	tslib_es6.__exportStar(raiseToPower, exports);
	tslib_es6.__exportStar(randomInteger, exports);
	tslib_es6.__exportStar(randomReal, exports);
	tslib_es6.__exportStar(randomValueInArray, exports);
	tslib_es6.__exportStar(randomizedArray, exports);
	tslib_es6.__exportStar(rayCastHitNormal, exports);
	tslib_es6.__exportStar(rayCastHitPlayer, exports);
	tslib_es6.__exportStar(rayCastHitPosition, exports);
	tslib_es6.__exportStar(removeFromArray, exports);
	tslib_es6.__exportStar(right, exports);
	tslib_es6.__exportStar(roundToInteger, exports);
	tslib_es6.__exportStar(scoreOf, exports);
	tslib_es6.__exportStar(sineFromDegrees, exports);
	tslib_es6.__exportStar(sineFromRadians, exports);
	tslib_es6.__exportStar(slotOf, exports);
	tslib_es6.__exportStar(sortedArray, exports);
	tslib_es6.__exportStar(speedOf, exports);
	tslib_es6.__exportStar(speedOfInDirection, exports);
	tslib_es6.__exportStar(squareRoot, exports);
	tslib_es6.__exportStar(string, exports);
	tslib_es6.__exportStar(subtract, exports);
	tslib_es6.__exportStar(tangentFromDegrees, exports);
	tslib_es6.__exportStar(tangentFromRadians, exports);
	tslib_es6.__exportStar(team, exports);
	tslib_es6.__exportStar(teamOf, exports);
	tslib_es6.__exportStar(teamScore, exports);
	tslib_es6.__exportStar(throttleOf, exports);
	tslib_es6.__exportStar(totalTimeElapsed, exports);
	tslib_es6.__exportStar(_true, exports);
	tslib_es6.__exportStar(ultimateChargePercent, exports);
	tslib_es6.__exportStar(up, exports);
	tslib_es6.__exportStar(valueInArray, exports);
	tslib_es6.__exportStar(vector, exports);
	tslib_es6.__exportStar(vectorTowards, exports);
	tslib_es6.__exportStar(velocityOf, exports);
	tslib_es6.__exportStar(verticalAngleFromDirection, exports);
	tslib_es6.__exportStar(verticalAngleTowards, exports);
	tslib_es6.__exportStar(verticalFacingAngleOf, exports);
	tslib_es6.__exportStar(verticalSpeedOf, exports);
	tslib_es6.__exportStar(victim, exports);
	tslib_es6.__exportStar(worldVectorOf, exports);
	tslib_es6.__exportStar(xComponentOf, exports);
	tslib_es6.__exportStar(yComponentOf, exports);
	tslib_es6.__exportStar(zComponentOf, exports);
	});

	unwrapExports(value);

	var variableOperation = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(variableOperation);
	var variableOperation_1 = variableOperation.Default;

	var waitBehavior = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(waitBehavior);
	var waitBehavior_1 = waitBehavior.Default;

	var type = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var HeroConstant = tslib_es6.__importStar(heroConstant);
	exports.HeroConstant = HeroConstant;
	var SlotRange = tslib_es6.__importStar(slotRange);
	exports.SlotRange = SlotRange;
	var TeamConstant = tslib_es6.__importStar(teamConstant);
	exports.TeamConstant = TeamConstant;
	var Variable = tslib_es6.__importStar(variable);
	exports.Variable = Variable;
	var EventPlayer = tslib_es6.__importStar(eventPlayer);
	exports.EventPlayer = EventPlayer;
	var Add = tslib_es6.__importStar(add$1);
	exports.Add = Add;
	var Array = tslib_es6.__importStar(array);
	exports.Array = Array;
	var AssisterParam = tslib_es6.__importStar(assisterParam);
	exports.AssisterParam = AssisterParam;
	var Barrier = tslib_es6.__importStar(barrier);
	exports.Barrier = Barrier;
	var Beam = tslib_es6.__importStar(beam);
	exports.Beam = Beam;
	var BeamReevaluation = tslib_es6.__importStar(beamReevaluation);
	exports.BeamReevaluation = BeamReevaluation;
	var Bool = tslib_es6.__importStar(bool);
	exports.Bool = Bool;
	var Button = tslib_es6.__importStar(button);
	exports.Button = Button;
	var Clipping = tslib_es6.__importStar(clipping);
	exports.Clipping = Clipping;
	var Color = tslib_es6.__importStar(color);
	exports.Color = Color;
	var Communication = tslib_es6.__importStar(communication);
	exports.Communication = Communication;
	var DamageModificationId = tslib_es6.__importStar(damageModificationId);
	exports.DamageModificationId = DamageModificationId;
	var DamageModificationReevaluation = tslib_es6.__importStar(damageModificationReevaluation);
	exports.DamageModificationReevaluation = DamageModificationReevaluation;
	var DamageOverTimeId = tslib_es6.__importStar(damageOverTimeId);
	exports.DamageOverTimeId = DamageOverTimeId;
	var DestinationParam = tslib_es6.__importStar(destinationParam);
	exports.DestinationParam = DestinationParam;
	var Divide = tslib_es6.__importStar(divide$1);
	exports.Divide = Divide;
	var Effect = tslib_es6.__importStar(effect);
	exports.Effect = Effect;
	var EffectReevaluation = tslib_es6.__importStar(effectReevaluation);
	exports.EffectReevaluation = EffectReevaluation;
	var Entity = tslib_es6.__importStar(entity);
	exports.Entity = Entity;
	var FacingReevaluation = tslib_es6.__importStar(facingReevaluation);
	exports.FacingReevaluation = FacingReevaluation;
	var HealOverTimeId = tslib_es6.__importStar(healOverTimeId);
	exports.HealOverTimeId = HealOverTimeId;
	var Hero = tslib_es6.__importStar(hero$1);
	exports.Hero = Hero;
	var HudTextReevaluation = tslib_es6.__importStar(hudTextReevaluation);
	exports.HudTextReevaluation = HudTextReevaluation;
	var Icon = tslib_es6.__importStar(icon);
	exports.Icon = Icon;
	var IconReevaluation = tslib_es6.__importStar(iconReevaluation);
	exports.IconReevaluation = IconReevaluation;
	var InvisibleTo = tslib_es6.__importStar(invisibleTo);
	exports.InvisibleTo = InvisibleTo;
	var InWorldTextReevaluation = tslib_es6.__importStar(inWorldTextReevaluation);
	exports.InWorldTextReevaluation = InWorldTextReevaluation;
	var Location = tslib_es6.__importStar(location_1);
	exports.Location = Location;
	var LosCheck = tslib_es6.__importStar(losCheck);
	exports.LosCheck = LosCheck;
	var Motion = tslib_es6.__importStar(motion);
	exports.Motion = Motion;
	var Multiply = tslib_es6.__importStar(multiply);
	exports.Multiply = Multiply;
	var Number = tslib_es6.__importStar(number$1);
	exports.Number = Number;
	var ObjectiveDescriptionReevaluation = tslib_es6.__importStar(objectiveDescriptionReevaluation);
	exports.ObjectiveDescriptionReevaluation = ObjectiveDescriptionReevaluation;
	var Operator = tslib_es6.__importStar(operator);
	exports.Operator = Operator;
	var PlayEffect = tslib_es6.__importStar(playEffect);
	exports.PlayEffect = PlayEffect;
	var Player = tslib_es6.__importStar(player);
	exports.Player = Player;
	var PlayersParam = tslib_es6.__importStar(playersParam);
	exports.PlayersParam = PlayersParam;
	var Reevaluation = tslib_es6.__importStar(reevaluation);
	exports.Reevaluation = Reevaluation;
	var Relative = tslib_es6.__importStar(relative);
	exports.Relative = Relative;
	var RoundingType = tslib_es6.__importStar(roundingType);
	exports.RoundingType = RoundingType;
	var Spectators = tslib_es6.__importStar(spectators);
	exports.Spectators = Spectators;
	var StartAcceleratingReevaluation = tslib_es6.__importStar(startAcceleratingReevaluation);
	exports.StartAcceleratingReevaluation = StartAcceleratingReevaluation;
	var StartThrottleBehavior = tslib_es6.__importStar(startThrottleBehavior);
	exports.StartThrottleBehavior = StartThrottleBehavior;
	var StartThrottleReevaluation = tslib_es6.__importStar(startThrottleReevaluation);
	exports.StartThrottleReevaluation = StartThrottleReevaluation;
	var Status = tslib_es6.__importStar(status);
	exports.Status = Status;
	var String = tslib_es6.__importStar(string$1);
	exports.String = String;
	var StringParam = tslib_es6.__importStar(stringParam);
	exports.StringParam = StringParam;
	var Subtract = tslib_es6.__importStar(subtract$1);
	exports.Subtract = Subtract;
	var Team = tslib_es6.__importStar(team$1);
	exports.Team = Team;
	var Text = tslib_es6.__importStar(text);
	exports.Text = Text;
	var TextId = tslib_es6.__importStar(textId);
	exports.TextId = TextId;
	var Transformation = tslib_es6.__importStar(transformation);
	exports.Transformation = Transformation;
	var Value = tslib_es6.__importStar(value);
	exports.Value = Value;
	var VariableOperation = tslib_es6.__importStar(variableOperation);
	exports.VariableOperation = VariableOperation;
	var Vector = tslib_es6.__importStar(vector$1);
	exports.Vector = Vector;
	var WaitBehavior = tslib_es6.__importStar(waitBehavior);
	exports.WaitBehavior = WaitBehavior;
	});

	unwrapExports(type);
	var type_1 = type.HeroConstant;
	var type_2 = type.SlotRange;
	var type_3 = type.TeamConstant;
	var type_4 = type.Variable;
	var type_5 = type.EventPlayer;
	var type_6 = type.Add;
	var type_7 = type.Array;
	var type_8 = type.AssisterParam;
	var type_9 = type.Barrier;
	var type_10 = type.Beam;
	var type_11 = type.BeamReevaluation;
	var type_12 = type.Bool;
	var type_13 = type.Button;
	var type_14 = type.Clipping;
	var type_15 = type.Color;
	var type_16 = type.Communication;
	var type_17 = type.DamageModificationId;
	var type_18 = type.DamageModificationReevaluation;
	var type_19 = type.DamageOverTimeId;
	var type_20 = type.DestinationParam;
	var type_21 = type.Divide;
	var type_22 = type.Effect;
	var type_23 = type.EffectReevaluation;
	var type_24 = type.Entity;
	var type_25 = type.FacingReevaluation;
	var type_26 = type.HealOverTimeId;
	var type_27 = type.Hero;
	var type_28 = type.HudTextReevaluation;
	var type_29 = type.Icon;
	var type_30 = type.IconReevaluation;
	var type_31 = type.InvisibleTo;
	var type_32 = type.InWorldTextReevaluation;
	var type_33 = type.Location;
	var type_34 = type.LosCheck;
	var type_35 = type.Motion;
	var type_36 = type.Multiply;
	var type_37 = type.Number;
	var type_38 = type.ObjectiveDescriptionReevaluation;
	var type_39 = type.Operator;
	var type_40 = type.PlayEffect;
	var type_41 = type.Player;
	var type_42 = type.PlayersParam;
	var type_43 = type.Reevaluation;
	var type_44 = type.Relative;
	var type_45 = type.RoundingType;
	var type_46 = type.Spectators;
	var type_47 = type.StartAcceleratingReevaluation;
	var type_48 = type.StartThrottleBehavior;
	var type_49 = type.StartThrottleReevaluation;
	var type_50 = type.Status;
	var type_51 = type.String;
	var type_52 = type.StringParam;
	var type_53 = type.Subtract;
	var type_54 = type.Team;
	var type_55 = type.Text;
	var type_56 = type.TextId;
	var type_57 = type.Transformation;
	var type_58 = type.Value;
	var type_59 = type.VariableOperation;
	var type_60 = type.Vector;
	var type_61 = type.WaitBehavior;

	var abort = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 액션 목록 실행을 중지합니다.
	 */
	exports.abort = function () {
	    return "Abort";
	};
	});

	unwrapExports(abort);
	var abort_1 = abort.abort;

	var abortIf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 이 액션 조건이 TRUE일 때 액션 목록 실행을 중지합니다.
	 * 그 외에 경우 다음 액션을 진행합니다.
	 */
	exports.abortIf = function (
	/**
	 * 실행 중지 여부를 지정합니다.
	 * - `Type.Bool.`
	 */
	condition) {
	    return "Abort If(" + condition + ")";
	};
	});

	unwrapExports(abortIf);
	var abortIf_1 = abortIf.abortIf;

	var abortIfConditionIsFalse = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 조건 목록에 있는 조건 중
	 * 하나 이상이 FALSE인 경우 액션 목록의 실행을 중지합니다.
	 * 모든 조건이 TRUE인 경우 다음 액션을 진행합니다.
	 */
	exports.abortIfConditionIsFalse = function () {
	    return "Abort If Condition Is False";
	};
	});

	unwrapExports(abortIfConditionIsFalse);
	var abortIfConditionIsFalse_1 = abortIfConditionIsFalse.abortIfConditionIsFalse;

	var abortIfConditionIsTrue = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 조건 목록에 있는 조건 중
	 * 하나 이상이 TRUE인 경우 액션 목록의 실행을 중지합니다.
	 * 모든 조건이 FALSE인 경우 다음 액션을 진행합니다.
	 */
	exports.abortIfConditionIsTrue = function () {
	    return "Abort If Condition Is True";
	};
	});

	unwrapExports(abortIfConditionIsTrue);
	var abortIfConditionIsTrue_1 = abortIfConditionIsTrue.abortIfConditionIsTrue;

	var allowButton = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어에 대해 DISALLOW BUTTON
	 * 액션의 효과를 취소합니다.
	 */
	exports.allowButton = function (
	/**
	 * 버튼을 다시 사용할 수 있게 될 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 다시 사용할 수 있게 될 논리적 버튼입니다.
	 * - `Type.Button.`
	 */
	button) {
	    return "Allow Button(" + player + ", " + button + ")";
	};
	});

	unwrapExports(allowButton);
	var allowButton_1 = allowButton.allowButton;

	var applyImpluse = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 움직임에 즉각적인 속도 변화를 줍니다.
	 */
	exports.applyImpluse = function (
	/**
	 * 속도를 변경할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 충격량을 적용할 단위 방항입니다.
	 * 이 값은 내부적으로 정규화됩니다.
	 * - `Type.Vector.`
	 */
	direction, 
	/**
	 * 플레이어에 대한 속도 변경의 크기입니다.
	 * - `Type.Number.`
	 */
	speed, 
	/**
	 * 방향이 플레이어의 월드 좌표 또는
	 * 로컬 좌표 중 어느 쪽에 대해
	 * 상대적인지 여부를 지정합니다.
	 * - `Type.Relative.`
	 */
	relative, 
	/**
	 * 충격량을 적용하기 전에 DIRECTION과
	 * 반대 방향인 기존의 속도를
	 * 상쇄할지 여부를 지정합니다.
	 * - `Type.Motion.`
	 */
	motion) {
	    return "Apply Impluse(" + player + ", " + direction + ", " + speed + ", " + relative + ", " + motion + ")";
	};
	});

	unwrapExports(applyImpluse);
	var applyImpluse_1 = applyImpluse.applyImpluse;

	var bigMessage = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이엉에게 보이도록
	 * 큰 메시지를 조준선 위쪽에 표시합니다.
	 */
	exports.bigMessage = function (
	/**
	 * 해당 메시지를 보게 될 플레이어입니다.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * 표시할 메시지입니다.
	 * - `Type.String.`
	 */
	header) {
	    return "Big Message(" + visibleTo + ", " + header + ")";
	};
	});

	unwrapExports(bigMessage);
	var bigMessage_1 = bigMessage.bigMessage;

	var chaseGlobalVariableAtRate = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 전역 변수 값을 지정된 비율로
	 * 점진적으로 수정합니다.
	 * (전역 변수(GLOBAL VARIABLE)는
	 * 게임 자체에 종속된 변수입니다.)
	 */
	exports.chaseGlobalVariableAtRate = function (
	/**
	 * 점진적으로 수정할 전역 변수를 지정합니다.
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * 전역 변수가 궁극적으로 도달할 값입니다.
	 * 이 값의 유형은 숫자 또는 벡터가 될 수 있지만,
	 * 추적 시작 전 기존 변수 값의 유형이 동일해야 합니다.
	 * - `Type.DestinationParam.`
	 */
	destination, 
	/**
	 * 변수값의 초당 변화량입니다.
	 * - `Type.Number.`
	 */
	rate, 
	/**
	 * 이 액션의 입력 정보 중 어떤 항목을
	 * 지속적으로 재확인할 것인지 지정합니다.
	 * 해당 액션은 입력 정보의 새로운 값을
	 * 계속 묻게 되며, 재확인한 값을 사용합니다.
	 * - `Type.Reevaluation.`
	 */
	reevaluation) {
	    return "Chase Global Variable At Rate(" + variable + ", " + destination + ", " + rate + ", " + reevaluation + ")";
	};
	});

	unwrapExports(chaseGlobalVariableAtRate);
	var chaseGlobalVariableAtRate_1 = chaseGlobalVariableAtRate.chaseGlobalVariableAtRate;

	var chaseGlobalVariableOverTime = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 전역 변수 값을 시간이 지남에
	 * 따라 점진적으로 수정합니다.
	 * (전역 변수(GLOBAL VARIABLE)는
	 * 게임 자체에 종속된 변수입니다.)
	 */
	exports.chaseGlobalVariableOverTime = function (
	/**
	 * 점진적으로 수정할 전역 변수를 지정합니다.
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * 전역 변수가 궁극적으로 도달할 값입니다.
	 * 이 값의 유형은 숫자 또는 벡터가 될 수 있지만,
	 * 추적 시작 전 기존 변수 값의 유형이 동일해야 합니다.
	 * - `Type.DestinationParam.`
	 */
	destination, 
	/**
	 * 해당 변수값이 목표치에
	 * 도달하기까지의 시간(초)입니다.
	 * - `Type.Number.`
	 */
	duration, 
	/**
	 * 이 액션의 입력 정보 중 어떤 항목을
	 * 지속적으로 재확인할 것인지 지정합니다.
	 * 해당 액션은 입력 정보의 새로운 값을
	 * 계속 묻게 되며, 재확인한 값을 사용합니다.
	 * - `Type.Reevaluation.`
	 */
	reevaluation) {
	    return "Chase Global Variable Over Time(" + variable + ", " + destination + ", " + duration + ", " + reevaluation + ")";
	};
	});

	unwrapExports(chaseGlobalVariableOverTime);
	var chaseGlobalVariableOverTime_1 = chaseGlobalVariableOverTime.chaseGlobalVariableOverTime;

	var chasePlayerVariableAtRate = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어 변수 값을 지정된
	 * 비율로 점진적으로 수정합니다.
	 * (플레이어 변수(PLAYER VARIABLE)는
	 * 게임 자체에 종속된 변수입니다.)
	 */
	exports.chasePlayerVariableAtRate = function (
	/**
	 * 점진적으로 변수를 변경할 플레이어입니다.
	 * 플레이어가 다수인 경우,
	 * 각각의 변수가 독립적으로 변경됩니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 점진적으로 수정할 플레이어 변수를 지정합니다.
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * 플레이어 변수가 궁극적으로 도달할 값입니다.
	 * 이 값의 유형은 숫자 또는 벡터가 될 수 있지만,
	 * 추적 시작 전 기존 변수 값의 유형이 동일해야 합니다.
	 * - `Type.DestinationParam.`
	 */
	destination, 
	/**
	 * 변수값의 초당 변화량입니다.
	 * - `Type.Number.`
	 */
	rate, 
	/**
	 * 이 액션의 입력 정보 중 어떤 항목을
	 * 지속적으로 재확인할 것인지 지정합니다.
	 * 해당 액션은 입력 정보의 새로운 값을
	 * 계속 묻게 되며, 재확인한 값을 사용합니다.
	 * - `Type.Reevaluation.`
	 */
	reevaluation) {
	    return "Chase Player Variable At Rate(" + player + ", " + variable + ", " + destination + ", " + rate + ", " + reevaluation + ")";
	};
	});

	unwrapExports(chasePlayerVariableAtRate);
	var chasePlayerVariableAtRate_1 = chasePlayerVariableAtRate.chasePlayerVariableAtRate;

	var chasePlayerVariableOverTime = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어 변수 값을 시간의
	 * 경과에 따라 점진적으로 수정합니다.
	 * (플레이어 변수(PLAYER VARIABLE)는
	 * 게임 자체에 종속된 변수입니다.)
	 */
	exports.chasePlayerVariableOverTime = function (
	/**
	 * 점진적으로 변수를 변경할 플레이어입니다.
	 * 플레이어가 다수인 경우,
	 * 각각의 변수가 독립적으로 변경됩니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 점진적으로 수정할 플레이어의 변수를 지정합니다.
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * 플레이어 변수가 궁극적으로 도달할 값입니다.
	 * 이 값의 유형은 숫자 또는 벡터가 될 수 있지만,
	 * 추적 시작 전 기존 변수 값의 유형이 동일해야 합니다.
	 * - `Type.DestinationParam.`
	 */
	destination, 
	/**
	 * 해당 변수값이 목표치에
	 * 도달하기까지의 시간(초)입니다.
	 * - `Type.Number.`
	 */
	duration, 
	/**
	 * 이 액션의 입력 정보 중 어떤 항목을
	 * 지속적으로 재확인할 것인지 지정합니다.
	 * 해당 액션은 입력 정보의 새로운 값을
	 * 계속 묻게 되며, 재확인한 값을 사용합니다.
	 * - `Type.Reevaluation.`
	 */
	reevaluation) {
	    return "Chase Player Variable Over Time(" + player + ", " + variable + ", " + destination + ", " + duration + ", " + reevaluation + ")";
	};
	});

	unwrapExports(chasePlayerVariableOverTime);
	var chasePlayerVariableOverTime_1 = chasePlayerVariableOverTime.chasePlayerVariableOverTime;

	var clearStatus = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * SET STATUS 액션을 통해
	 * 플레이어에게 적용된
	 * 상태 하나를 제거합니다.
	 */
	exports.clearStatus = function (
	/**
	 * 상태를 제거할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 플레이어에게서 제거할 상태입니다.
	 * - `Type.Status.`
	 */
	status) {
	    return "Clear Status(" + player + ", " + status + ")";
	};
	});

	unwrapExports(clearStatus);
	var clearStatus_1 = clearStatus.clearStatus;

	var communicate = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 감정 표현, 음성 대사,
	 * 또는 기타 장착한 의사소통
	 * 수단을 사용하도록 합니다.
	 */
	exports.communicate = function (
	/**
	 * 의사소통을 실행할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 의사소통 유형입니다.
	 * - `Type.Communication.`
	 */
	type) {
	    return "Communicate(" + player + ", " + type + ")";
	};
	});

	unwrapExports(communicate);
	var communicate_1 = communicate.communicate;

	var createBeamEffect = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 월드 내에 BEAM 효과 개체를 생성합니다.
	 * 이 효과 개체는 제거하기 전까지 지속됩니다.
	 * 이 효과를 참조하려면 LAST CREATED ENTITY 값을 사용하면 됩니다.
	 * 개체가 너무 많이 생성될 경우 이 액션이 실패할 수 있습니다.
	 */
	exports.createBeamEffect = function (
	/**
	 * 해당 효과를 보게 될 플레이어입니다.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * 생성할 효과의 형태입니다.
	 * - `Type.Beam.`
	 */
	beamType, 
	/**
	 * 효과의 시작 위치입니다. 이 값이 플레이어인 경우
	 * 해당 효과는 플레이어를 따라다니고, 그 이외의 경우
	 * 이 값은 월드 내의 위치로 해석됩니다.
	 * - `Type.Vector.`
	 */
	startPosition, 
	/**
	 * 효과의 종료 위치입니다. 이 값이 플레이어인 경우
	 * 해당 효과는 플레이어를 따라다니고, 그 이외의 경우
	 * 이 값은 월드 내의 위치로 해석됩니다.
	 * - `Type.Vector.`
	 */
	endPosition, 
	/**
	 * 생성될 BEAM 효과의 색상입니다. 특정 팀을 선택한 경우,
	 * 해당 팀이 보는 사람에게 적인지 여부에 따라 빨강
	 * 또는 파랑으로 효과 색상이 설정됩니다. 효과음에는
	 * 적용되지 않습니다. 오직 'GOOD', 그리고
	 * 'BAD' BEAM 효과에만 색상이 적용됩니다.
	 * - `Type.Color.`
	 */
	color, 
	/**
	 * 이 액션의 입력 정보 중 어떤 항목을 지속적으로
	 * 재확인 할 것인지 지정합니다. 해당 효과는 입력 정보의
	 * 새로운 값을 계속 묻게 되며, 재확인 한 값을 사용합니다.
	 * - `Type.BeamReevaluation.`
	 */
	reevaluation) {
	    return "Create Beam Effect(" + visibleTo + ", " + beamType + ", " + startPosition + ", " + endPosition + ", " + color + ", " + reevaluation + ")";
	};
	});

	unwrapExports(createBeamEffect);
	var createBeamEffect_1 = createBeamEffect.createBeamEffect;

	var createDummyBot = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 슬롯이 활성화 된 이상 새로운 봇을
	 * 특정 팀의 특정 슬롯에 추가합니다.
	 * 봇은 WORKSHOP ACTION을 실행한다면
	 * 이동하거나 발사하거나 기술 만을 사용합니다.
	 */
	exports.createDummyBot = function (
	/**
	 * 봇이 될 영웅입니다. 만약 하나 이상의
	 * 영웅에게 적용되면 무작위로 선택됩니다.
	 * - `Type.Hero.`
	 */
	hero, 
	/**
	 * 봇을 생성할 팀입니다. 'All' 설정은
	 * 섬멸전 게임 모드에서만 작동하며,
	 * 'Team' 설정은 팀 기반의 게임 모드에서만 작동합니다.
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * 봇을 받을 플레이어 슬롯(첫 번째 가능한 슬롯 -1)입니다.
	 * 대기실 설정에 따라 각 팀에는 최대 6개까지,
	 * 개별 전투 모드 팀에서는 최대 12개 까지 봇을 추가할 수 있습니다.
	 * - `Type.SlotRange.`
	 */
	slot, 
	/**
	 * 봇이 생성될 최초 위치입니다.
	 * - `Type.Vector.`
	 */
	position, 
	/**
	 * 봇이 바라보고 있을 최초 방향입니다.
	 * - `Type.Vector.`
	 */
	facing) {
	    return "Create Dummy Bot(" + hero + ", " + team + ", " + slot + ", " + position + ", " + facing + ")";
	};
	});

	unwrapExports(createDummyBot);
	var createDummyBot_1 = createDummyBot.createDummyBot;

	var createEffect = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 월드 내에 효과 개체를 생성합니다.
	 * 이 효과 개체는 제거하기 전까지 지속됩니다.
	 * 이 효과를 참조하려면
	 * LAST CREATED ENTITY 값을 사용하면 됩니다.
	 * 개체가 너무 많이 생성될 경우
	 * 이 액션이 실패할 수 있습니다.
	 */
	exports.createEffect = function (
	/**
	 * 해당 효과를 보게 될 플레이어입니다.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * 생성할 효과의 형태입니다.
	 * - `Type.Effect.`
	 */
	type, 
	/**
	 * 생성될 효과의 색상입니다.
	 * 특정 팀을 선택한 경우,
	 * 해당 팀이 보는 사람에게 적인지
	 * 여부에 따라 빨강 또는 파랑으로
	 * 효과 색상이 설정됩니다.
	 * 효과음에는 적용되지 않습니다.
	 * - `Type.Color.`
	 */
	color, 
	/**
	 * 효과의 위치입니다.
	 * 이 값이 플레이어인 경우
	 * 해당 효과는 플레이어를 따라다니고,
	 * 그 이외에 경우 이 값은
	 * 월드 내의 위치로 해석됩니다.
	 * - `Type.Vector.`
	 */
	position, 
	/**
	 * 효과 반경(미터)입니다.
	 * 효과음은 음량이 대신 영향을 받습니다.
	 * - `Type.Number.`
	 */
	radius, 
	/**
	 * 이 액션의 입력 정보 중 어떤 항목을
	 * 지속적으로 재확인할 것인지 지정합니다.
	 * 해당 액션은 입력 정보의 새로운 값을
	 * 계속 묻게 되며, 재확인한 값을 사용합니다.
	 * - `Type.EffectReevaluation.`
	 */
	reevaluation) {
	    return "Create Effect(" + visibleTo + ", " + type + ", " + color + ", " + position + ", " + radius + ", " + reevaluation + ")";
	};
	});

	unwrapExports(createEffect);
	var createEffect_1 = createEffect.createEffect;

	var createHudText = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어 화면의 지정된 위치에
	 * 표시할 HUD 텍스트를 생성합니다.
	 * 이 텍스트는 제거하기 전까지 지속됩니다.
	 * 이 텍스트를 참조하려면
	 * LAST TEXT ID 값을 사용하면 됩니다.
	 * 텍스트 요소가 너무 많이 생성될 경우
	 * 이 액션이 실패할 수 있습니다.
	 */
	exports.createHudText = function (
	/**
	 * 해당 HUD 텍스트를 보게 될 플레이어입니다.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * 표시할 텍스트입니다. (비워두기 가능)
	 * - `Type.String.`
	 */
	header, 
	/**
	 * 표시할 부제목입니다. (비워두기 가능)
	 * - `Type.StringParam.`
	 */
	subHeader, 
	/**
	 * 표시할 본문입니다. (비워두기 가능)
	 * - `Type.StringParam.`
	 */
	text, 
	/**
	 * 텍스트를 표시할 화면 상의 위치입니다.
	 * - `Type.Location.`
	 */
	location, 
	/**
	 * 동일한 위치에 있는 다른
	 * 텍스트와의 정렬 순서입니다.
	 * 정렬 순서 상 우선순위가 높은
	 * 텍스트는 낮은 우선순위의
	 * 텍스트 다음에 위치하게 됩니다.
	 * - `Type.Number.`
	 */
	sortOrder, 
	/**
	 * 생성될 HEADER 텍스트의 색상입니다.
	 * 특정 팀을 선택한 경우,
	 * 해당 팀이 보는 사람에게 적인지
	 * 여부에 따라 빨강 또는 파랑으로
	 * 효과 색상이 설정됩니다.
	 * - `Type.Color.`
	 */
	headerColor, 
	/**
	 * 생성될 SUBHEADER 텍스트의 색상입니다.
	 * 특정 팀을 선택한 경우,
	 * 해당 팀이 보는 사람에게 적인지
	 * 여부에 따라 빨강 또는 파랑으로
	 * 효과 색상이 설정됩니다.
	 * - `Type.Color.`
	 */
	subHeaderColor, 
	/**
	 * 생성될 텍스트의 색상입니다.
	 * 특정 팀을 선택한 경우,
	 * 해당 팀이 보는 사람에게 적인지
	 * 여부에 따라 빨강 또는 파랑으로
	 * 효과 색상이 설정됩니다.
	 * - `Type.Color.`
	 */
	textColor, 
	/**
	 * 이 액션의 입력 정보 중 어떤 항목을
	 * 지속적으로 재확인할 것인지 지정합니다.
	 * 해당 액션은 입력 정보의 새로운 값을
	 * 계속 묻게 되며, 재확인한 값을 사용합니다.
	 * - `Type.HudTextReevaluation.`
	 */
	reevaluation, 
	/**
	 * 관전자가 텍스트를 보거나 볼 수 없게 설정합니다.
	 * - `Type.Spectators.`
	 */
	spectators) {
	    return "Create Hud Text(" + visibleTo + ", " + header + ", " + subHeader + ", " + text + ", " + location + ", " + sortOrder + ", " + headerColor + ", " + subHeaderColor + ", " + textColor + ", " + reevaluation + ", " + spectators + ")";
	};
	});

	unwrapExports(createHudText);
	var createHudText_1 = createHudText.createHudText;

	var createIcon = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 월드 내에 아이콘 개체를 생성합니다.
	 * 이 아이콘 개체는 제거하기 전까지 지속됩니다.
	 * 이 개체를 참조하려면
	 * LAST CREATED ENTITY 값을 사용하면 됩니다.
	 * 개체가 너무 많이 생성될 경우
	 * 이 액션이 실패할 수 있습니다.
	 */
	exports.createIcon = function (
	/**
	 * 아이콘을 볼 수 있는 플레이어입니다.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * 아이콘의 위치입니다.
	 * 이 값이 플레이어인 경우
	 * 해당 효과는 지정된
	 * 플레이어 머리 위에 표시되고,
	 * 그 이외의 경우 이 값은
	 * 월드 내의 위치로 해석됩니다.
	 * - `Type.Vector.`
	 */
	position, 
	/**
	 * 생성할 아이콘입니다.
	 * - `Type.Icon.`
	 */
	icon, 
	/**
	 * 이 액션의 입력 정보 중 어떤 항목을
	 * 지속적으로 재확인할 것인지 지정합니다.
	 * 해당 액션은 입력 정보의 새로운 값을
	 * 계속 묻게 되며, 재확인한 값을 사용합니다.
	 * - `Type.IconReevaluation.`
	 */
	reevaluation, 
	/**
	 * 생성될 아이콘의 색상입니다.
	 * 특정 팀을 선택한 경우,
	 * 해당 팀이 보는 사람에게 적인지
	 * 여부에 따라 빨강 또는 파랑으로
	 * 효과 색상이 설정됩니다.
	 * - `Type.Color.`
	 */
	iconColor, 
	/**
	 * 이 아이콘이
	 * 플레이어 뒤에 있어도
	 * 표시되도록 하시겠습니까?
	 * - `Type.Bool.`
	 */
	showWhenOffscreen) {
	    return "Create Icon(" + visibleTo + ", " + position + ", " + icon + ", " + reevaluation + ", " + iconColor + ", " + showWhenOffscreen + ")";
	};
	});

	unwrapExports(createIcon);
	var createIcon_1 = createIcon.createIcon;

	var createInWorldText = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 월드의 지정된 위치에서 지정된 플레이어에게
	 * 표시할 월드 내 텍스트를 생성합니다.
	 * 이 텍스트는 제거하기 전까지 지속됩니다.
	 * 이 텍스트를 참조하려면
	 * LAST TEXT ID 값을 사용하면 됩니다.
	 * 텍스트 요소가 너무 많이 생성된 경우 이 액션은 실패할 수 있습니다.
	 */
	exports.createInWorldText = function (
	/**
	 * 월드 내 텍스트를 보게 될 플레이어입니다.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * 표시할 텍스트입니다.
	 * - `Type.String.`
	 */
	header, 
	/**
	 * 텍스트의 위치입니다.
	 * 이 값이 플레이어인 경우
	 * 해당 텍스트는 지정된
	 * 플레이어 머리 위에 표시되고,
	 * 그 이외의 경우 이 값은
	 * 월드 내의 위치로 해석됩니다.
	 * - `Type.Vector.`
	 */
	position, 
	/**
	 * 텍스트의 배율입니다.
	 * - `Type.Number.`
	 */
	scale, 
	/**
	 * 해당 텍스트가 벽을 뚫고 보일지, 아니면 가려질지 지정합니다.
	 * - `Type.Clipping.`
	 */
	clipping, 
	/**
	 * 이 액션의 입력 정보 중 어떤 항목을
	 * 지속적으로 재확인할 것인지 지정합니다.
	 * 해당 텍스트는 입력 정보의 새로운 값을
	 * 계속 묻게 되며, 재확인한 값을 사용합니다.
	 * - `Type.InWorldTextReevaluation.`
	 */
	reevaluation, 
	/**
	 * 사용할 IN-WORLD TEXT 의 색상을 명시합니다.
	 * - `Type.Color.`
	 */
	textColor, 
	/**
	 * 관전자가 텍스트를 보거나 볼 수 없게 설정합니다.
	 * - `Type.Spectators.`
	 */
	spectators) {
	    return "Create In World Text(" + visibleTo + ", " + header + ", " + position + ", " + scale + ", " + clipping + ", " + reevaluation + ", " + textColor + ", " + spectators + ")";
	};
	});

	unwrapExports(createInWorldText);
	var createInWorldText_1 = createInWorldText.createInWorldText;

	var damage = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어에게 즉시 피해를 적용하며,
	 * 피해를 받은 대상이 죽을 수 있습니다.
	 */
	exports.damage = function (
	/**
	 * 피해를 받게 될 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 피해를 주는 행동을 한 것으로
	 * 집계될 플레이어입니다.
	 * DAMAGER가 NULL이면
	 * 집계될 플레이어가 없음을 의미합니다.
	 * - `Type.Player.`
	 */
	damager, 
	/**
	 * 적용할 피해량입니다.
	 * 이 피해량은 강화 효과,
	 * 약화 효과, 방어력에
	 * 의해 달라질 수 있습니다.
	 * - `Type.Number.`
	 */
	amount) {
	    return "Damage(" + player + ", " + damager + ", " + amount + ")";
	};
	});

	unwrapExports(damage);
	var damage_1 = damage.damage;

	var declareMatchDraw = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 경기를 즉시 무승부로 종료합니다.
	 * 이 액션은 개별 전투 모드에서는 효과가 없습니다.
	 */
	exports.declareMatchDraw = function () {
	    return "Declare Match Draw";
	};
	});

	unwrapExports(declareMatchDraw);
	var declareMatchDraw_1 = declareMatchDraw.declareMatchDraw;

	var declarePlayerVictory = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어를 승자로 하여 경기를 즉시 종료합니다.
	 * 이 액션은 개별 전투 모드에서만 효과가 있습니다.
	 */
	exports.declarePlayerVictory = function (
	/**
	 * 이긴 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Declare Player Victory(" + player + ")";
	};
	});

	unwrapExports(declarePlayerVictory);
	var declarePlayerVictory_1 = declarePlayerVictory.declarePlayerVictory;

	var declareRoundVictory = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 팀 하나를 현재 라운드의 승자로 설정합니다.
	 * 쟁탈 및 섬멸전 게임 모드에서만 작동합니다.
	 */
	exports.declareRoundVictory = function (
	/**
	 * 라운드에서 승리한 팀입니다.
	 * - `Type.Team.`
	 */
	roundWinningTeam) {
	    return "Declare Round Victory(" + roundWinningTeam + ")";
	};
	});

	unwrapExports(declareRoundVictory);
	var declareRoundVictory_1 = declareRoundVictory.declareRoundVictory;

	var declareTeamVictory = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 팀을 승자로 하여 경기를 즉시 종료합니다.
	 * 이 액션은 개별 전투 모드에서는 효과가 없습니다.
	 */
	exports.declareTeamVictory = function (
	/**
	 * 이긴 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    return "Declare Team Victory(" + team + ")";
	};
	});

	unwrapExports(declareTeamVictory);
	var declareTeamVictory_1 = declareTeamVictory.declareTeamVictory;

	var destroyAllDummyBot = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 모든 더미 봇들을 경기에서 제외합니다.
	 */
	exports.destroyAllDummyBot = function () {
	    return "Destroy All Dummy Bot";
	};
	});

	unwrapExports(destroyAllDummyBot);
	var destroyAllDummyBot_1 = destroyAllDummyBot.destroyAllDummyBot;

	var destroyAllEffects = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * CREATE EFFECT에 의해 생성된
	 * 모든 효과 개체를 제거합니다.
	 */
	exports.destroyAllEffects = function () {
	    return "Destroy All Effects";
	};
	});

	unwrapExports(destroyAllEffects);
	var destroyAllEffects_1 = destroyAllEffects.destroyAllEffects;

	var destroyAllHudText = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * CREATE HUD TEXT 액션에 의해
	 * 생성된 모든 HUD 텍스트를 제거합니다.
	 */
	exports.destroyAllHudText = function () {
	    return "Destroy All Hud Text";
	};
	});

	unwrapExports(destroyAllHudText);
	var destroyAllHudText_1 = destroyAllHudText.destroyAllHudText;

	var destroyAllIcons = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * CREATE ICON에 의해 생성된
	 * 모든 아이콘 개체를 제거합니다.
	 */
	exports.destroyAllIcons = function () {
	    return "Destroy All Icons";
	};
	});

	unwrapExports(destroyAllIcons);
	var destroyAllIcons_1 = destroyAllIcons.destroyAllIcons;

	var destroyAllInWorldText = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * CREATE IN-WORLD TEXT에 의해
	 * 생성된 월드 내 텍스트를 모두 제거합니다.
	 */
	exports.destroyAllInWorldText = function () {
	    return "Destroy All In World Text";
	};
	});

	unwrapExports(destroyAllInWorldText);
	var destroyAllInWorldText_1 = destroyAllInWorldText.destroyAllInWorldText;

	var destroyDummyBot = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 특정 더미 봇을 경기에서 제외합니다.
	 */
	exports.destroyDummyBot = function (
	/**
	 * DUMMY 봇을 제거할 팀입니다. 'All' 설정은
	 * 개별 전투 게임 모드에서만, 'Team' 설정은
	 * 팀 기반 게임 모드에서만 작동합니다.
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * DUMMY 봇을 제거할 슬롯입니다.
	 * - `Type.SlotRange.`
	 */
	slot) {
	    return "Destroy Dummy Bot(" + team + ", " + slot + ")";
	};
	});

	unwrapExports(destroyDummyBot);
	var destroyDummyBot_1 = destroyDummyBot.destroyDummyBot;

	var destroyEffect = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * CREATE EFFECT에 의해 생성된
	 * 효과 개체 하나를 제거합니다.
	 */
	exports.destroyEffect = function (
	/**
	 * 제거할 효과 개체를 지정합니다.
	 * 여기에 사용되는 개체는
	 * LAST CREATED ENTITY 또는
	 * 예전에 LAST CREATED ENTITY
	 * 가 담긴 변수입니다.
	 * - `Type.Entity.`
	 */
	entity) {
	    return "Destroy Effect(" + entity + ")";
	};
	});

	unwrapExports(destroyEffect);
	var destroyEffect_1 = destroyEffect.destroyEffect;

	var destroyHudText = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * CREATE HUD TEXT 액션에 의해
	 * 생성된 HUD 텍스트를 제거합니다.
	 */
	exports.destroyHudText = function (
	/**
	 * 제거할 HUD 텍스트를 지정합니다.
	 * 여기에 사용되는 ID는
	 * LAST TEXT ID 또는 예전에
	 * LAST TEXT ID가 담긴 변수입니다.
	 * - `Type.Text.`
	 */
	textId) {
	    return "Destroy Hud Text(" + textId + ")";
	};
	});

	unwrapExports(destroyHudText);
	var destroyHudText_1 = destroyHudText.destroyHudText;

	var destroyIcon = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * CREATE ICON에 의해 생성된
	 * 아이콘 개체를 제거합니다.
	 */
	exports.destroyIcon = function (
	/**
	 * 제거할 아이콘 개체를 지정합니다.
	 * 여기에 사용되는 개체는
	 * LAST CREATED ENTITY 또는
	 * 예전에 LAST CREATED ENTITY
	 * 가 담긴 변수입니다.
	 * - `Type.Entity.`
	 */
	entity) {
	    return "Destroy Icon(" + entity + ")";
	};
	});

	unwrapExports(destroyIcon);
	var destroyIcon_1 = destroyIcon.destroyIcon;

	var destroyInWorldText = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * CREATE IN-WORD TEXT에 의해
	 * 생성된 월드 내 텍스트를 제거합니다.
	 */
	exports.destroyInWorldText = function (
	/**
	 * 제거할 월드 내 텍스트를 지정합니다.
	 * 여기에 사용되는 ID는
	 * LAST TEXT ID 또는 예전에
	 * LAST TEXT ID가 담긴 변수입니다.
	 * - `Type.Text.`
	 */
	textId) {
	    return "Destroy In World Text(" + textId + ")";
	};
	});

	unwrapExports(destroyInWorldText);
	var destroyInWorldText_1 = destroyInWorldText.destroyInWorldText;

	var disableBuiltInGameModeAnnouncer = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 다시 사용하거나 경기가
	 * 종료될 때까지 아나운서의
	 * 게임 모드 안내 음성을
	 * 사용하지 않도록 합니다.
	 */
	exports.disableBuiltInGameModeAnnouncer = function () {
	    return "Disable Built In Game Mode Announcer";
	};
	});

	unwrapExports(disableBuiltInGameModeAnnouncer);
	var disableBuiltInGameModeAnnouncer_1 = disableBuiltInGameModeAnnouncer.disableBuiltInGameModeAnnouncer;

	var disableBuiltInGameModeCompletion = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 게임 모드 자체에서 경기
	 * 종료가 되지 않도록 합니다.
	 * 스크립트 명령어로만 경기를
	 * 마칠 수 있도록 허용합니다.
	 */
	exports.disableBuiltInGameModeCompletion = function () {
	    return "Disable Built In Game Mode Completion";
	};
	});

	unwrapExports(disableBuiltInGameModeCompletion);
	var disableBuiltInGameModeCompletion_1 = disableBuiltInGameModeCompletion.disableBuiltInGameModeCompletion;

	var disableBuiltInGameModeMusic = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 다시 사용하거나
	 * 경기가 종료될 때까지
	 * 모든 게임 모드 음악을
	 * 사용하지 않도록 합니다.
	 */
	exports.disableBuiltInGameModeMusic = function () {
	    return "Disable Built In Game Mode Music";
	};
	});

	unwrapExports(disableBuiltInGameModeMusic);
	var disableBuiltInGameModeMusic_1 = disableBuiltInGameModeMusic.disableBuiltInGameModeMusic;

	var disableBuiltInGameModeRespawning = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어에 대해 자동
	 * 부활 기능을 비활성화하고,
	 * 스크립트 명령어를 통한
	 * 부활만 허용합니다.
	 */
	exports.disableBuiltInGameModeRespawning = function (
	/**
	 * 부활 설정의 영향을
	 * 받게 되는 플레이어입니다.
	 * - `Type.PlayersParam.`
	 */
	players) {
	    return "Disable Built In Game Mode Respawning(" + players + ")";
	};
	});

	unwrapExports(disableBuiltInGameModeRespawning);
	var disableBuiltInGameModeRespawning_1 = disableBuiltInGameModeRespawning.disableBuiltInGameModeRespawning;

	var disableBuiltInGameModeScoring = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 게임 모드 자체에서
	 * 플레이어 점수와 팀 점수를
	 * 변경하지 못하도록 하며,
	 * 스크립트 명령어로만
	 * 점수 변경이 가능하도록 합니다.
	 */
	exports.disableBuiltInGameModeScoring = function () {
	    return "Disable Built In Game Mode Scoring";
	};
	});

	unwrapExports(disableBuiltInGameModeScoring);
	var disableBuiltInGameModeScoring_1 = disableBuiltInGameModeScoring.disableBuiltInGameModeScoring;

	var disableDeathSpectateAllPlayers = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어에 대한
	 * ENABLE DEATH SPECTATE ALL PLAYERS
	 * 액션의 효과를 취소합니다.
	 */
	exports.disableDeathSpectateAllPlayers = function (
	/**
	 * 사망 후 관전 설정 기본값을
	 * 복원할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Disable Death Spectate All Players(" + player + ")";
	};
	});

	unwrapExports(disableDeathSpectateAllPlayers);
	var disableDeathSpectateAllPlayers_1 = disableDeathSpectateAllPlayers.disableDeathSpectateAllPlayers;

	var disableDeathSpectateTargetHud = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어를 대상으로
	 * ENABLE DEATH SPECTATE TARGET HUD
	 * 액션의 효과를 취소합니다.
	 */
	exports.disableDeathSpectateTargetHud = function (
	/**
	 * 사망 후 관전 시 자신의 HUD를
	 * 다시 보게 될 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Disable Death Spectate Target Hud(" + player + ")";
	};
	});

	unwrapExports(disableDeathSpectateTargetHud);
	var disableDeathSpectateTargetHud_1 = disableDeathSpectateTargetHud.disableDeathSpectateTargetHud;

	var disallowButton = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 논리적 버튼을
	 * 사용 못 하게 하여 눌러도
	 * 아무 효과 없도록 합니다.
	 */
	exports.disallowButton = function (
	/**
	 * 버튼을 사용 못 하게
	 * 할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 사용할 수 없게 된
	 * 논리적 버튼입니다.
	 * - `Type.Button.`
	 */
	button) {
	    return "Disallow Button(" + player + ", " + button + ")";
	};
	});

	unwrapExports(disallowButton);
	var disallowButton_1 = disallowButton.disallowButton;

	var enableBuiltInGameModeAnnouncer = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * DISABLE BUILT-IN GAME MODE ANNOUNCER
	 * 액션의 효과를 취소합니다.
	 */
	exports.enableBuiltInGameModeAnnouncer = function () {
	    return "Enable Built In Game Mode Announcer";
	};
	});

	unwrapExports(enableBuiltInGameModeAnnouncer);
	var enableBuiltInGameModeAnnouncer_1 = enableBuiltInGameModeAnnouncer.enableBuiltInGameModeAnnouncer;

	var enableBuiltInGameModeCompletion = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * DISABLE BUILT-IN GAME MODE COMPLETION
	 * 액션의 효과를 취소합니다.
	 */
	exports.enableBuiltInGameModeCompletion = function () {
	    return "Enable Built In Game Mode Completion";
	};
	});

	unwrapExports(enableBuiltInGameModeCompletion);
	var enableBuiltInGameModeCompletion_1 = enableBuiltInGameModeCompletion.enableBuiltInGameModeCompletion;

	var enableBuiltInGameModeMusic = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * DISABLE BUILT-IN GAME MODE MUSIC
	 * 액션의 효과를 취소합니다.
	 */
	exports.enableBuiltInGameModeMusic = function () {
	    return "Enable Built In Game Mode Music";
	};
	});

	unwrapExports(enableBuiltInGameModeMusic);
	var enableBuiltInGameModeMusic_1 = enableBuiltInGameModeMusic.enableBuiltInGameModeMusic;

	var enableBuiltInGameModeRespawning = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어에 대해
	 * DISABLE BUILT-IN GAME MODE RESPAWNING
	 * 액션의 효과를 취소합니다.
	 */
	exports.enableBuiltInGameModeRespawning = function (
	/**
	 * 부활 설정의 영향을
	 * 받게 되는 플레이어입니다.
	 * - `Type.PlayersParam.`
	 */
	players) {
	    return "Enable Built In Game Mode Respawning(" + players + ")";
	};
	});

	unwrapExports(enableBuiltInGameModeRespawning);
	var enableBuiltInGameModeRespawning_1 = enableBuiltInGameModeRespawning.enableBuiltInGameModeRespawning;

	var enableBuiltInGameModeScoring = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * DISABLE BUILT-IN GAME MODE SCORING
	 * 액션의 효과를 취소합니다.
	 */
	exports.enableBuiltInGameModeScoring = function () {
	    return "Enable Built In Game Mode Scoring";
	};
	});

	unwrapExports(enableBuiltInGameModeScoring);
	var enableBuiltInGameModeScoring_1 = enableBuiltInGameModeScoring.enableBuiltInGameModeScoring;

	var enableDeathSpectateAllPlayers = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어 사망 시,
	 * 아군뿐 아니라 모든 플레이어를
	 * 관전할 수 있도록 허용합니다.
	 */
	exports.enableDeathSpectateAllPlayers = function (
	/**
	 * 모든 플레이어를
	 * 관전할 수 있도록
	 * 허용된 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Enable Death Spectate All Players(" + player + ")";
	};
	});

	unwrapExports(enableDeathSpectateAllPlayers);
	var enableDeathSpectateAllPlayers_1 = enableDeathSpectateAllPlayers.enableDeathSpectateAllPlayers;

	var enableDeathSpectateTargetHud = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 사망 후 관전 시
	 * 플레이어 자신의 HUD 대신
	 * 관전 대상의 HUD를 볼 수 있습니다.
	 */
	exports.enableDeathSpectateTargetHud = function (
	/**
	 * 사망 후 관전 시
	 * 대상의 관전 대상의
	 * HUD를 보게 될
	 * 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Enable Death Spectate Target Hud(" + player + ")";
	};
	});

	unwrapExports(enableDeathSpectateTargetHud);
	var enableDeathSpectateTargetHud_1 = enableDeathSpectateTargetHud.enableDeathSpectateTargetHud;

	var goToAssembleHeroes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 경기를 해당 게임 모드의
	 * 영웅 선택 단계로 되돌립니다.
	 * 게임이 진행 중일 때만 작동합니다.
	 */
	exports.goToAssembleHeroes = function () {
	    return "Go To Assemble Heroes";
	};
	});

	unwrapExports(goToAssembleHeroes);
	var goToAssembleHeroes_1 = goToAssembleHeroes.goToAssembleHeroes;

	var heal = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어를 즉시 치유합니다.
	 * 이 기능으로 죽은 플레이어가
	 * 부활하지는 않습니다.
	 */
	exports.heal = function (
	/**
	 * 생명력을 회복할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 치유 행동을 한 것으로
	 * 집계될 플레이어입니다.
	 * HEALER가 NULL이면
	 * 집계될 플레이어가
	 * 없음을 의미합니다.
	 * - `Type.AssisterParam.`
	 */
	healer, 
	/**
	 * 적용할 치유량입니다.
	 * 이 치유량은 강화 효과,
	 * 약화 효과 등에 의해
	 * 달라질 수 있습니다.
	 * 치유량 최대치는
	 * 각 플레이어의
	 * 최대 생명력입니다.
	 * - `Type.Number.`
	 */
	amount) {
	    return "Heal(" + player + ", " + healer + ", " + amount + ")";
	};
	});

	unwrapExports(heal);
	var heal_1 = heal.heal;

	var kill = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어를 즉시 처치합니다.
	 */
	exports.kill = function (
	/**
	 * 처치될 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 처치를 기록한 것으로
	 * 집계될 플레이어입니다.
	 * KILLER가 NULL이면
	 * 집계될 플레이어가
	 * 없음을 의미합니다.
	 * - `Type.AssisterParam.`
	 */
	killer) {
	    return "Kill(" + player + ", " + killer + ")";
	};
	});

	unwrapExports(kill);
	var kill_1 = kill.kill;

	var loop = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 액션 목록을 처음부터 다시 시작합니다.
	 * 무한 반복을 방지하려면 액션 목록의 시작과
	 * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
	 */
	exports.loop = function () {
	    return "Loop";
	};
	});

	unwrapExports(loop);
	var loop_1 = loop.loop;

	var loopIf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 이 액션의 조건이 TRUE인 경우
	 * 액션 목록을 처음부터 다시 시작합니다.
	 * FALSE인 경우 다음 액션을 진행합니다.
	 * 무한 반복을 방지하려면 액션 목록의 시작과
	 * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
	 */
	exports.loopIf = function (
	/**
	 * 반복 여부를 지정합니다.
	 * - `Type.Bool.`
	 */
	condition) {
	    return "Loop If(" + condition + ")";
	};
	});

	unwrapExports(loopIf);
	var loopIf_1 = loopIf.loopIf;

	var loopIfConditionIsFalse = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 조건 목록의 조건이 하나라도 FALSE인 경우
	 * 액션 목록을 처음부터 다시 시작합니다.
	 * 모두 TRUE인 경우 다음 액션을 진행합니다.
	 * 무한 반복을 방지하려면 액션 목록의 시작과
	 * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
	 */
	exports.loopIfConditionIsFalse = function () {
	    return "Loop If Condition Is False";
	};
	});

	unwrapExports(loopIfConditionIsFalse);
	var loopIfConditionIsFalse_1 = loopIfConditionIsFalse.loopIfConditionIsFalse;

	var loopIfConditionIsTrue = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 조건 목록의 조건이 하나라도 TRUE인 경우
	 * 액션 목록을 처음부터 다시 시작합니다.
	 * 모두 FALSE인 경우 다음 액션을 진행합니다.
	 * 무한 반복을 방지하려면 액션 목록의 시작과
	 * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
	 */
	exports.loopIfConditionIsTrue = function () {
	    return "Loop If Condition Is True";
	};
	});

	unwrapExports(loopIfConditionIsTrue);
	var loopIfConditionIsTrue_1 = loopIfConditionIsTrue.loopIfConditionIsTrue;

	var modifyGlobalVariable = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 게임 자체에 종속된
	 * 전역 변수 값을 수정합니다.
	 */
	exports.modifyGlobalVariable = function (
	/**
	 * 수정할 전역 변수입니다.
	 * - `Type.IGlobal.`
	 */
	variable, 
	/**
	 * 변수값의 변경 방식입니다.
	 * 일반적인 사칙연산,
	 * 그리고 값의 추가 및 제거를 위한
	 * ARRAY 연산 등의 옵션이 있습니다.
	 * - `Type.Variable.`
	 */
	operation, 
	/**
	 * 수정에 사용되는 값입니다.
	 * 산술연산의 경우 이것은
	 * 두 피연산자 중 두 번째로,
	 * 나머지 하나는 변수의
	 * 현재 값으로 사용됩니다.
	 * 배열 연산에서는
	 * 이 값을 추가 또는 제거합니다.
	 * - `Type.Value.`
	 */
	value) {
	    return "Modify Global Variable(" + variable + ", " + operation + ", " + value + ")";
	};
	});

	unwrapExports(modifyGlobalVariable);
	var modifyGlobalVariable_1 = modifyGlobalVariable.modifyGlobalVariable;

	var modifyGlobalVariableAtIndex = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 인덱스에서 게임 자체에
	 * 종속된 전역 변수 값을 수정합니다.
	 */
	exports.modifyGlobalVariableAtIndex = function (
	/**
	 * 수정할 전역 변수입니다.
	 * - `Type.IGlobal.`
	 */
	variable, 
	/**
	 * 수정할 배열의 인덱스입니다.
	 * 인덱스가 배열의 끝을 벗어난 경우,
	 * 해당 배열이 확장되며
	 * 새 요소는 0의 값을 가집니다.
	 * - `Type.Number.`
	 */
	index, 
	/**
	 * 변수값의 변경 방식입니다.
	 * 일반적인 사칙연산,
	 * 그리고 값의 추가 및 제거를 위한
	 * ARRAY 연산 등의 옵션이 있습니다.
	 * - `Type.Variable.`
	 */
	operation, 
	/**
	 * 수정에 사용되는 값입니다.
	 * 산술연산의 경우 이것은
	 * 두 피연산자 중 두 번째로,
	 * 나머지 하나는 변수의
	 * 현재 값으로 사용됩니다.
	 * 배열 연산에서는
	 * 이 값을 추가 또는 제거합니다.
	 * - `Type.Value.`
	 */
	value) {
	    return "Modify Global Variable At Index(" + variable + ", " + index + ", " + operation + ", " + value + ")";
	};
	});

	unwrapExports(modifyGlobalVariableAtIndex);
	var modifyGlobalVariableAtIndex_1 = modifyGlobalVariableAtIndex.modifyGlobalVariableAtIndex;

	var modifyPlayerScore = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 점수(처치수)를 수정합니다.
	 * 이 액션은 개별 전투
	 * 모드에서만 효과가 있습니다.
	 */
	exports.modifyPlayerScore = function (
	/**
	 * 점수를 수정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 점수 증감량입니다.
	 * 양수인 경우 점수가 오르고
	 * 음수인 경우 감소합니다.
	 * - `Type.Number.`
	 */
	score) {
	    return "Modify Player Score(" + player + ", " + score + ")";
	};
	});

	unwrapExports(modifyPlayerScore);
	var modifyPlayerScore_1 = modifyPlayerScore.modifyPlayerScore;

	var modifyPlayerVariable = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어가 가진 플레이어 변수 값을 수정합니다.
	 */
	exports.modifyPlayerVariable = function (
	/**
	 * 변수를 수정할 플레이어입니다.
	 * 플레이어가 다수인 경우,
	 * 각각의 변수가 설정입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 수정할 플레이어의 변수입니다.
	 * - `Type.IPlayer.`
	 */
	variable, 
	/**
	 * 변수값의 변경 방식입니다.
	 * 일반적인 사칙연산,
	 * 그리고 값의 추가 및 제거를 위한
	 * ARRAY 연산 등의 옵션이 있습니다.
	 * - `Type.Variable.`
	 */
	operation, 
	/**
	 * 수정에 사용되는 값입니다.
	 * 사칙연산의 경우 이것은
	 * 두 피연산자 중 두 번째로,
	 * 나머지 하나는 변수의
	 * 현재 값으로 사용됩니다.
	 * 배열 연산에서는
	 * 이 값을 추가 또는 제거합니다.
	 * - `Type.Value.`
	 */
	value) {
	    return "Modify Player Variable(" + player + ", " + variable + ", " + operation + ", " + value + ")";
	};
	});

	unwrapExports(modifyPlayerVariable);
	var modifyPlayerVariable_1 = modifyPlayerVariable.modifyPlayerVariable;

	var modifyPlayerVariableAtIndex = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 인덱스에서 지정된 플레이어가
	 * 가진 플레이어 변수 값을 수정합니다.
	 */
	exports.modifyPlayerVariableAtIndex = function (
	/**
	 * 변수를 수정할 플레이어입니다.
	 * 플레이어가 다수인 경우,
	 * 각각의 변수가 설정됩니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 변수를 수정할 플레이어입니다.
	 * 플레이어가 다수인 경우,
	 * 각각의 변수가 설정됩니다.
	 * - `Type.IPlayer.`
	 */
	variable, 
	/**
	 * 수정할 배열의 인덱스입니다.
	 * 인덱스가 배열의 끝을 벗어난 경우,
	 * 해당 배열이 확장되며
	 * 새 요소는 0의 값을 가집니다.
	 * - `Type.Number.`
	 */
	index, 
	/**
	 * 변수값의 변경 방식입니다.
	 * 일반적인 사칙연산,
	 * 그리고 값의 추가 및 제거를 위한
	 * ARRAY 연산 등의 옵션이 있습니다.
	 * - `Type.Variable.`
	 */
	operation, 
	/**
	 * 수정에 사용되는 값입니다.
	 * 산술연산의 경우 이것은
	 * 두 피연산자 중 두 번째로,
	 * 나머지 하나는 변수의
	 * 현재 값으로 사용됩니다.
	 * 배열 연산에서는
	 * 이 값을 추가 또는 제거합니다.
	 * - `Type.Value.`
	 */
	value) {
	    return "Modify Player Variable At Index(" + player + ", " + variable + ", " + index + ", " + operation + ", " + value + ")";
	};
	});

	unwrapExports(modifyPlayerVariableAtIndex);
	var modifyPlayerVariableAtIndex_1 = modifyPlayerVariableAtIndex.modifyPlayerVariableAtIndex;

	var modifyTeamScore = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 한 팀 또는 두 팀 모두의 점수를 수정합니다.
	 * 이 액션은 개별 전투 모드나 팀 점수가
	 * 존재하지 않는 모드에서는 효과가 없습니다.
	 */
	exports.modifyTeamScore = function (
	/**
	 * 점수를 변경할 팀입니다.
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * 점수 증감량입니다.
	 * 양수인 경우 점수가 오르고
	 * 음수인 경우 감소합니다.
	 * - `Type.Number.`
	 */
	score) {
	    return "Modify Team Score(" + team + ", " + score + ")";
	};
	});

	unwrapExports(modifyTeamScore);
	var modifyTeamScore_1 = modifyTeamScore.modifyTeamScore;

	var pauseMatchTime = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 경기 시간을 일시정지합니다.
	 * 플레이어, 목표 로직, 게임 모드 진행 기준 등은
	 * 일시정지의 영향을 받지 않습니다.
	 */
	exports.pauseMatchTime = function () {
	    return "Pause Match Time";
	};
	});

	unwrapExports(pauseMatchTime);
	var pauseMatchTime_1 = pauseMatchTime.pauseMatchTime;

	var playEffect$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 월드의 한 위치에 효과를 발생시킵니다.
	 * 이 효과는 갱신되거나 제거할 필요 없도록
	 * 짧게 유지되었다가 사라집니다.
	 */
	exports.playEffect = function (
	/**
	 * 해당 효과를 보게 될 플레이어입니다.
	 * - `Type.PlayersParam.`
	 */
	visibleTo, 
	/**
	 * 생성할 효과의 유형입니다.
	 * - `Type.Play.`
	 */
	type, 
	/**
	 * 생성될 효과의 색상입니다.
	 * 특정 팀을 선택한 경우,
	 * 해당 팀이 보는 사람에게
	 * 적인지 여부에 따라
	 * 빨강 또는 파랑으로
	 * 효과 색상이 설정됩니다.
	 * - `Type.Color.`
	 */
	color, 
	/**
	 * 효과의 위치입니다.
	 * 이 값이 플레이어인 경우
	 * 해당 효과는 플레이어
	 * 위치에서 발생하고,
	 * 그 이외의 경우 이 값은
	 * 월드 좌표로서 해석됩니다.
	 * - `Type.Vector.`
	 */
	position, 
	/**
	 * 효과 반경(미터)입니다.
	 * - `Type.Number.`
	 */
	radius) {
	    return "Play Effect(" + visibleTo + ", " + type + ", " + color + ", " + position + ", " + radius + ")";
	};
	});

	unwrapExports(playEffect$1);
	var playEffect_1$1 = playEffect$1.playEffect;

	var preloadHero = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어의 스킨을 사용하여,
	 * 지정된 영웅을 메모리에서
	 * 허용하는 만큼 먼저 불러옵니다.
	 * 빠르게 영웅을 바꿀 수 있으며,
	 * 다음 영웅을 알고 있는 경우 유용합니다.
	 */
	exports.preloadHero = function (
	/**
	 * 영웅을 미리 불러올 플레이어입니다.
	 * 플레이어 당 한 번에 단 한 개의
	 * PRELOAD HERO 액션만 활성화할 수 있습니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 지정된 플레이어가 미리 불러올 영웅입니다.
	 * 배열에 여러 영웅을 지정한 경우,
	 * 배열 초반에 지정된 영웅일수록
	 * 우선순위가 가장 높습니다.
	 * - `Type.Hero.`
	 */
	hero) {
	    return "Preload Hero(" + player + ", " + hero + ")";
	};
	});

	unwrapExports(preloadHero);
	var preloadHero_1 = preloadHero.preloadHero;

	var pressButton = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어에 대해
	 * 한 프레임 동안
	 * 가상으로 버튼 하나를
	 * 누르도록 강제합니다.
	 */
	exports.pressButton = function (
	/**
	 * 가상 버튼 입력을
	 * 강제할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 누를 버튼입니다.
	 * - `Type.Button.`
	 */
	button) {
	    return "Press Button(" + player + ", " + button + ")";
	};
	});

	unwrapExports(pressButton);
	var pressButton_1 = pressButton.pressButton;

	var resetPlayerHeroAvailability = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 사용할 수 있는 영웅 목록을
	 * 게임 설정에 지정한 대로 복원합니다.
	 * 플레이어의 현재 영웅을 더 이상 사용할 수 없게 되면
	 * 플레이어는 강제로 다른 영웅을 선택하여
	 * 적절한 생성 지점에서 부활합니다.
	 */
	exports.resetPlayerHeroAvailability = function (
	/**
	 * 영웅 목록을 초기화할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Reset Player Hero Availability(" + player + ")";
	};
	});

	unwrapExports(resetPlayerHeroAvailability);
	var resetPlayerHeroAvailability_1 = resetPlayerHeroAvailability.resetPlayerHeroAvailability;

	var respawn = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 생존 여부와 관계 없이,
	 * 플레이어를 적절한 생성 지점에서
	 * 최대 생명력으로 부활시킵니다.
	 */
	exports.respawn = function (
	/**
	 * 부활시킬 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Respawn(" + player + ")";
	};
	});

	unwrapExports(respawn);
	var respawn_1 = respawn.respawn;

	var resurrect = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 전환 없이 플레이어를
	 * 사망한 자리에서 즉시 부활시킵니다.
	 */
	exports.resurrect = function (
	/**
	 * 부활하게 될 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Resurrect(" + player + ")";
	};
	});

	unwrapExports(resurrect);
	var resurrect_1 = resurrect.resurrect;

	var setAbility1Enabled = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 기술1 활성화 여부를 설정합니다.
	 */
	exports.setAbility1Enabled = function (
	/**
	 * 기술 1 사용 여부를 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 플레이어가 기술 1을
	 * 사용할 수 있는지 여부를 지정합니다.
	 * TRUE, FALSE 등의 부울 값
	 * 또는 COMPARE를 사용합니다.
	 * - `Type.Bool.`
	 */
	enabled) {
	    return "Set Ability 1 Enabled(" + player + ", " + enabled + ")";
	};
	});

	unwrapExports(setAbility1Enabled);
	var setAbility1Enabled_1 = setAbility1Enabled.setAbility1Enabled;

	var setAbility2Enabled = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 기술2 활성화 여부를 설정합니다.
	 */
	exports.setAbility2Enabled = function (
	/**
	 * 기술 2 사용 여부를 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 플레이어가 기술 2을
	 * 사용할 수 있는지 여부를 지정합니다.
	 * TRUE, FALSE 등의 부울 값
	 * 또는 COMPARE를 사용합니다.
	 * - `Type.Bool.`
	 */
	enabled) {
	    return "Set Ability 2 Enabled(" + player + ", " + enabled + ")";
	};
	});

	unwrapExports(setAbility2Enabled);
	var setAbility2Enabled_1 = setAbility2Enabled.setAbility2Enabled;

	var setAimSpeed = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 조준 속도를
	 * 일반 조준 속도 대비
	 * % 비율로 설정합니다.
	 */
	exports.setAimSpeed = function (
	/**
	 * 조준 속도를 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 일반 조준 속도에 비례하도록
	 * 설정할 플레이어의 조준 속도입니다.
	 * - `Type.Number.`
	 */
	turnSpeedPercent) {
	    return "Set Aim Speed(" + player + ", " + turnSpeedPercent + ")";
	};
	});

	unwrapExports(setAimSpeed);
	var setAimSpeed_1 = setAimSpeed.setAimSpeed;

	var setDamageDealt = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 주는 피해를
	 * 순수 피해량 대비
	 * % 비율로 설정합니다.
	 */
	exports.setDamageDealt = function (
	/**
	 * 주는 피해량을 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 순수 피해량에 비례하도록
	 * 설정할 플레이어의
	 * 주는 피해량 비율입니다.
	 * - `Type.Number.`
	 */
	damageDealtPercent) {
	    return "Set Damage Dealt(" + player + ", " + damageDealtPercent + ")";
	};
	});

	unwrapExports(setDamageDealt);
	var setDamageDealt_1 = setDamageDealt.setDamageDealt;

	var setDamageReceived = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 받는 피해를
	 * 순수 피해량 대비
	 * % 비율로 설정합니다.
	 */
	exports.setDamageReceived = function (
	/**
	 * 받는 피해량을 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 순수 피해량에 비례하도록
	 * 설정할 플레이어의
	 * 받는 피해량 비율입니다.
	 * - `Type.Number.`
	 */
	damageReceivedPercent) {
	    return "Set Damage Received(" + player + ", " + damageReceivedPercent + ")";
	};
	});

	unwrapExports(setDamageReceived);
	var setDamageReceived_1 = setDamageReceived.setDamageReceived;

	var setFacing = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 지정된 방향을
	 * 바라보도록 설정합니다.
	 */
	exports.setFacing = function (
	/**
	 * 바라보는 방향을
	 * 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 플레이어가 바라보게
	 * 되는 단위 방향입니다.
	 * 이 값은 내부적으로 정규화됩니다.
	 * - `Type.Vector.`
	 */
	direction) {
	    return "Set Facing(" + player + ", " + direction + ")";
	};
	});

	unwrapExports(setFacing);
	var setFacing_1 = setFacing.setFacing;

	var setGlobalVariable = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 게임 자체에 속한
	 * 전역 변수에 값을 저장합니다.
	 */
	exports.setGlobalVariable = function (
	/**
	 * 어느 전역 변수에
	 * 값을 저장할지 지정합니다.
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * 저장할 값입니다.
	 * - `Type.Value.`
	 */
	value) {
	    return "Set Global Variable(" + variable + ", " + value + ")";
	};
	});

	unwrapExports(setGlobalVariable);
	var setGlobalVariable_1 = setGlobalVariable.setGlobalVariable;

	var setGlobalVariableAtIndex = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 게임 자체에 종속된 전역 변수의
	 * 배열을 찾거나 생성한 후,
	 * 값 하나를 배열의
	 * 특정 인덱스에 저장합니다.
	 */
	exports.setGlobalVariableAtIndex = function (
	/**
	 * 어떤 전연 변수 값이
	 * 수정할 배열인지를 지정합니다.
	 * 변수값이 배열이 아닌 경우,
	 * 해당 값은 빈 배열이 됩니다.
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * 수정할 배열의 인덱스입니다.
	 * 인덱스가 배열의 끝을 벗어난 경우,
	 * 해당 배열이 확장되며
	 * 새 요소는 0의 값을 가집니다.
	 * - `Type.Number.`
	 */
	index, 
	/**
	 * ARRAY에 저장할 값입니다.
	 * - `Type.Value.`
	 */
	value) {
	    return "Set Global Variable At Index(" + variable + ", " + index + ", " + value + ")";
	};
	});

	unwrapExports(setGlobalVariableAtIndex);
	var setGlobalVariableAtIndex_1 = setGlobalVariableAtIndex.setGlobalVariableAtIndex;

	var setGravity = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 이동 중력을
	 * 일반 이동 중력 대비
	 * % 비율로 설정합니다.
	 */
	exports.setGravity = function (
	/**
	 * 이동 중력을 설정할
	 * 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 일반 이동 중력에 비례하도록
	 * 설정할 플레이어의
	 * 개인 이동 중력 비율입니다.
	 * - `Type.Number.`
	 */
	gravityPercent) {
	    return "Set Gravity(" + player + ", " + gravityPercent + ")";
	};
	});

	unwrapExports(setGravity);
	var setGravity_1 = setGravity.setGravity;

	var setHealingDealt = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 주는 치유량을
	 * 순수 치유량 대비
	 * % 비율로 설정합니다.
	 */
	exports.setHealingDealt = function (
	/**
	 * 이동 중력을 설정할
	 * 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 일반 이동 중력에 비례하도록
	 * 설정할 플레이어의
	 * 개인 이동 중력 비율입니다.
	 * - `Type.Number.`
	 */
	healingDealtPercent) {
	    return "Set Healing Dealt(" + player + ", " + healingDealtPercent + ")";
	};
	});

	unwrapExports(setHealingDealt);
	var setHealingDealt_1 = setHealingDealt.setHealingDealt;

	var setHealingReceived = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 받는 치유량을
	 * 순수 치유량 대비
	 * % 비율로 설정합니다.
	 */
	exports.setHealingReceived = function (
	/**
	 * 받는 치유량을 설정할
	 * 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 받는 순수 치유량에
	 * 비례하도록 설정할
	 * 플레이어의 받는
	 * 치유량 비율입니다.
	 * - `Type.Number.`
	 */
	healingReceivedPercent) {
	    return "Set Healing Received(" + player + ", " + healingReceivedPercent + ")";
	};
	});

	unwrapExports(setHealingReceived);
	var setHealingReceived_1 = setHealingReceived.setHealingReceived;

	var setInvisible = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어를 다른
	 * 모든 플레이어 또는
	 * 적에게만 보이지 않게 합니다.
	 */
	exports.setInvisible = function (
	/**
	 * 보이지 않게 될
	 * 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 플레이어가 보이지 않게 할
	 * 플레이어를 지정합니다.
	 * - `Type.InvisibleTo.`
	 */
	invisibleTo) {
	    return "Set Invisible(" + player + ", " + invisibleTo + ")";
	};
	});

	unwrapExports(setInvisible);
	var setInvisible_1 = setInvisible.setInvisible;

	var setMatchTime = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * (화면 상단에 표시되는)
	 * 현재 경기 시간을 설정합니다.
	 * 이를 통해 경기 지속시간을
	 * 조정하거나 영웅 선택 또는
	 * 준비 시간을 변경할 수 있습니다.
	 */
	exports.setMatchTime = function (
	/**
	 * 경기 시간(초)입니다.
	 * - `Type.Number.`
	 */
	time) {
	    return "Set Match Time(" + time + ")";
	};
	});

	unwrapExports(setMatchTime);
	var setMatchTime_1 = setMatchTime.setMatchTime;

	var setMaxHealth = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 최대
	 * 생명력을 순수 생명력 대비
	 * % 비율로 설정합니다.
	 * 이 액션을 수행하면
	 * 플레이어의 현재 생명력이
	 * 새로운 최대 생명력 수치를
	 * 넘지 않게 됩니다.
	 */
	exports.setMaxHealth = function (
	/**
	 * 최대 생명력을
	 * 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 순수 최대 생명력에
	 * 비례하도록 설정할
	 * 플레이어의 최대
	 * 생명력 비율입니다.
	 * - `Type.Number.`
	 */
	healthPercent) {
	    return "Set Max Health(" + player + ", " + healthPercent + ")";
	};
	});

	unwrapExports(setMaxHealth);
	var setMaxHealth_1 = setMaxHealth.setMaxHealth;

	var setMoveSpeed = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 이동 속도를
	 * 순수 이동 속도 대비
	 * % 비율로 설정합니다.
	 */
	exports.setMoveSpeed = function (
	/**
	 * 이동 속도를 설정할
	 * 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 순수 최대 생명력에
	 * 비례하도록 설정할
	 * 플레이어의 최대
	 * 생명력 비율입니다.
	 * - `Type.Number.`
	 */
	moveSpeedPercent) {
	    return "Set Move Speed(" + player + ", " + moveSpeedPercent + ")";
	};
	});

	unwrapExports(setMoveSpeed);
	var setMoveSpeed_1 = setMoveSpeed.setMoveSpeed;

	var setObjectiveDescription = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 일반적으로 지정된 플레이어에게
	 * 목표를 알려주기 위해,
	 * 화면 중앙 상단에 텍스트가
	 * 표시되도록 설정합니다.
	 */
	exports.setObjectiveDescription = function (
	/**
	 * 해당 메시지를
	 * 보게 될 플레이어입니다.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * 표시할 메시지입니다.
	 * - `Type.String.`
	 */
	header, 
	/**
	 * 이 액션의 입력 정보 중
	 * 어떤 항목을 지속적으로
	 * 재확인할 것인지 지정합니다.
	 * 해당 메시지는 입력 정보의
	 * 새로운 값을 계속 묻게 되며,
	 * 재확인한 값을 사용합니다.
	 * - `Type.ObjectiveDescriptionReevaluation.`
	 */
	reevaluation) {
	    return "Set Objective Description(" + visibleTo + ", " + header + ", " + reevaluation + ")";
	};
	});

	unwrapExports(setObjectiveDescription);
	var setObjectiveDescription_1 = setObjectiveDescription.setObjectiveDescription;

	var setPlayerAllowedHeroes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 사용할 수 있는
	 * 영웅 목록을 설정합니다.
	 * 플레이어의 현재 영웅을
	 * 더 이상 사용할 수 없게 되면
	 * 플레이어는 강제로
	 * 다른 영웅을 선택하여
	 * 적절한 생성 지점에서 부활합니다.
	 */
	exports.setPlayerAllowedHeroes = function (
	/**
	 * 영웅 목록을 설정할
	 * 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 사용할 수 있는 영웅입니다.
	 * 제공된 영웅이 없는 경우
	 * 이 액션은 아무 효과가 없습니다.
	 * - `Type.Hero.`
	 */
	hero) {
	    return "Set Player Allowed Heroes(" + player + ", " + hero + ")";
	};
	});

	unwrapExports(setPlayerAllowedHeroes);
	var setPlayerAllowedHeroes_1 = setPlayerAllowedHeroes.setPlayerAllowedHeroes;

	var setPlayerScore = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 점수
	 * (처치수)를 설정합니다.
	 * 이 액션은 개별 전투
	 * 모드에서만 효과가 있습니다.
	 */
	exports.setPlayerScore = function (
	/**
	 * 점수를 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 설정할 점수입니다.
	 * - `Type.Number.`
	 */
	score) {
	    return "Set Player Score(" + player + ", " + score + ")";
	};
	});

	unwrapExports(setPlayerScore);
	var setPlayerScore_1 = setPlayerScore.setPlayerScore;

	var setPlayerVariable = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어에
	 * 속한 플레이어 변수에
	 * 값 하나를 저장합니다.
	 */
	exports.setPlayerVariable = function (
	/**
	 * 변수를 설정할 플레이어입니다.
	 * 플레이어가 다수인 경우,
	 * 각각의 변수가 설정됩니다
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 값을 저장할 플레이어의
	 * 변수를 지정합니다.
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * 저장할 값입니다.
	 * - `Type.Value.`
	 */
	value) {
	    return "Set Player Variable(" + player + ", " + variable + ", " + value + ")";
	};
	});

	unwrapExports(setPlayerVariable);
	var setPlayerVariable_1 = setPlayerVariable.setPlayerVariable;

	var setPlayerVariableAtIndex = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 한 플레이어에 종속된
	 * 플레이어 변수의 배열을
	 * 찾거나 생성한 후,
	 * 값 하나를 배열의
	 * 특정 인덱스에 저장합니다.
	 */
	exports.setPlayerVariableAtIndex = function (
	/**
	 * 변수를 수정할 플레이어입니다.
	 * 플레이어가 다수인 경우,
	 * 각각의 변수가 수정됩니다
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 플레이어 변수 값을
	 * 수정할 배열에 지정합니다.
	 * 변수값이 배열이 아닌 경우,
	 * 해당 값은 빈 배열이 됩니다.
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * 수정할 배열의 인덱스입니다.
	 * 인덱스가 배열의 끝을 벗어난 경우,
	 * 해당 배열이 확장되며
	 * 새 요소는 0의 값을 가집니다.
	 * - `Type.Number.`
	 */
	index, 
	/**
	 * 배열에 저장할 값입니다.
	 * - `Type.Value.`
	 */
	value) {
	    return "Set Player Variable At Index(" + player + ", " + variable + ", " + index + ", " + value + ")";
	};
	});

	unwrapExports(setPlayerVariableAtIndex);
	var setPlayerVariableAtIndex_1 = setPlayerVariableAtIndex.setPlayerVariableAtIndex;

	var setPrimaryFireEnabled = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 기본 발사
	 * 활성화 여부를 설정합니다.
	 */
	exports.setPrimaryFireEnabled = function (
	/**
	 * 기본 발사 사용 여부를
	 * 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 플레이어의 기본 발사 사용여부입니다.
	 * TRUE, FALSE 등의 부울 값
	 * 또는 COMPARE를 사용합니다.
	 * - `Type.Bool.`
	 */
	enabled) {
	    return "Set Primary Fire Enabled(" + player + ", " + enabled + ")";
	};
	});

	unwrapExports(setPrimaryFireEnabled);
	var setPrimaryFireEnabled_1 = setPrimaryFireEnabled.setPrimaryFireEnabled;

	var setProjectileGravity = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 투사체 중력을
	 * 일반 투사체 중력의
	 * 지정된 비율로 설정합니다.
	 */
	exports.setProjectileGravity = function (
	/**
	 * 투사체 중력을
	 * 설정할 플레이어입니다
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 일반 투사체 중력에
	 * 비례하도록 설정할
	 * 플레이어의 개인
	 * 투사체 중력 비율입니다.
	 * - `Type.Number.`
	 */
	projectileGravityPercent) {
	    return "Set Projectile Gravity(" + player + ", " + projectileGravityPercent + ")";
	};
	});

	unwrapExports(setProjectileGravity);
	var setProjectileGravity_1 = setProjectileGravity.setProjectileGravity;

	var setProjectileSpeed = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 투사체 속도를
	 * 일반 투사체 속도의
	 * 지정된 비율로 설정합니다.
	 */
	exports.setProjectileSpeed = function (
	/**
	 * 투사체 속도를 설정할
	 * 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 일반 투사체 속도에
	 * 비례하도록 설정할
	 * 플레이어의 개인
	 * 투사체 속도 비율입니다.
	 * - `Type.Number.`
	 */
	projectileSpeedPercent) {
	    return "Set Projectile Speed(" + player + ", " + projectileSpeedPercent + ")";
	};
	});

	unwrapExports(setProjectileSpeed);
	var setProjectileSpeed_1 = setProjectileSpeed.setProjectileSpeed;

	var setRespawnMaxTime = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 사망에서
	 * 부활 사이의 시간을 설정합니다.
	 * 이 액션 실행 시점에서
	 * 이미 사망한 플레이어의 경우
	 * 변경사항이 다음
	 * 사망 시부터 적용됩니다.
	 */
	exports.setRespawnMaxTime = function (
	/**
	 * 최대 부활 시간을
	 * 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 사망과 부활 사이의 시간(초)입니다.
	 * - `Type.Number.`
	 */
	time) {
	    return "Set Respawn Max Time(" + player + ", " + time + ")";
	};
	});

	unwrapExports(setRespawnMaxTime);
	var setRespawnMaxTime_1 = setRespawnMaxTime.setRespawnMaxTime;

	var setSecondaryFireEnabled = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 보조 발사
	 * 활성화 여부를 설정합니다.
	 */
	exports.setSecondaryFireEnabled = function (
	/**
	 * 보조 발사 사용 여부를
	 * 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 플레이어의 보조 발사 사용여부입니다.
	 * TRUE, FALSE 등의 부울 값
	 * 또는 COMPARE를 사용합니다.
	 * - `Type.Bool.`
	 */
	enabled) {
	    return "Set Secondary Fire Enabled(" + player + ", " + enabled + ")";
	};
	});

	unwrapExports(setSecondaryFireEnabled);
	var setSecondaryFireEnabled_1 = setSecondaryFireEnabled.setSecondaryFireEnabled;

	var setSlowMotion = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 모든 플레이어, 투사체,
	 * 효과, 게임 모드 로직 등
	 * 게임 전체를 대상으로 하여
	 * 시뮬레이션 비율을 설정합니다.
	 */
	exports.setSlowMotion = function (
	/**
	 * 정상 속도 대비
	 * 시뮬레이션 비율입니다.
	 * 최대 100%까지 설정 가능합니다.
	 * - `Type.Number.`
	 */
	speedPercent) {
	    return "Set Slow Motion(" + speedPercent + ")";
	};
	});

	unwrapExports(setSlowMotion);
	var setSlowMotion_1 = setSlowMotion.setSlowMotion;

	var setStatus = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 상태를 플레이어에게 적용합니다.
	 * 이 상태는 지정된 지속 시간 동안,
	 * 또는 CLEAR STATUS 액션에 의해
	 * 제거될 때까지 유지됩니다.
	 */
	exports.setStatus = function (
	/**
	 * 상태를 적용할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 이 상태가 적용된 플레이어가
	 * 사망하는 경우 도움을 기록한 것으로
	 * 집계될 플레이어이를 지정합니다.
	 * ASSISTER가 NULL이면
	 * 집계될 플레이가 없음을 의미합니다.
	 * - `Type.AssisterParam.`
	 */
	assister, 
	/**
	 * 플레이어에게 적용할 상태입니다.
	 * 영웅 능력에 의해 적용되는
	 * 상태와 유사하게 동작합니다.
	 * - `Type.Status.`
	 */
	status, 
	/**
	 * 해당 상태의 지속 시간(초)입니다.
	 * 상태가 CLEAR STATUS 액션 실행에 의해
	 * 중지될 때 까지 지속되게 하려면
	 * 9999등 매우 긴 시간으로 설정하십시오.
	 * - `Type.Number.`
	 */
	duration) {
	    return "Set Status(" + player + ", " + assister + ", " + status + ", " + duration + ")";
	};
	});

	unwrapExports(setStatus);
	var setStatus_1 = setStatus.setStatus;

	var setTeamScore = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 한 팀 또는 두 팀
	 * 모두의 점수를 설정합니다.
	 * 이 액션은 개별
	 * 전투 모드나 팀 점수가
	 * 존재하지 않는
	 * 모드에서는 효과가 없습니다.
	 */
	exports.setTeamScore = function (
	/**
	 * 점수를 설정할 팀입니다.
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * 설정할 점수입니다.
	 * - `Type.Number.`
	 */
	score) {
	    return "Set Team Score(" + team + ", " + score + ")";
	};
	});

	unwrapExports(setTeamScore);
	var setTeamScore_1 = setTeamScore.setTeamScore;

	var setUltimateAbilityEnabled = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 궁극기
	 * 활성화 여부를 설정합니다.
	 */
	exports.setUltimateAbilityEnabled = function (
	/**
	 * 궁극기 사용에 있어
	 * 영향을 받는 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 플레이어가 궁극기를
	 * 사용할 수 있는지 여부를 지정합니다.
	 * TRUE, FALSE 등의 부울 값
	 * 또는 COMPARE를 사용합니다.
	 * - `Type.Bool.`
	 */
	enabled) {
	    return "Set Ultimate Ability Enabled(" + player + ", " + enabled + ")";
	};
	});

	unwrapExports(setUltimateAbilityEnabled);
	var setUltimateAbilityEnabled_1 = setUltimateAbilityEnabled.setUltimateAbilityEnabled;

	var setUltimateCharge = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 궁극기 충전량을
	 * 최대 충전량의 비율로 설정합니다.
	 */
	exports.setUltimateCharge = function (
	/**
	 * 궁극기 사용에 있어
	 * 영향을 받는 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 최대 충전량 비율입니다.
	 * - `Type.Number.`
	 */
	chargePercent) {
	    return "Set Ultimate Charge(" + player + ", " + chargePercent + ")";
	};
	});

	unwrapExports(setUltimateCharge);
	var setUltimateCharge_1 = setUltimateCharge.setUltimateCharge;

	var skip = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 액션 목록에 있는
	 * 지정된 수의 액션을 건너뜁니다.
	 */
	exports.skip = function (
	/**
	 * 건너뛸 액션의 수입니다.
	 * 이 액션은 제외한 개수입니다.
	 * - `Type.Number.`
	 */
	numberOfActions) {
	    return "Skip(" + numberOfActions + ")";
	};
	});

	unwrapExports(skip);
	var skip_1 = skip.skip;

	var skipIf = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 이 액션의 조건이 TRUE일 때,
	 * 액션 목록에 있는 지정된
	 * 수만큼의 액션을 건너뜁니다.
	 * 이 외의 경우 다음 액션으로 진행합니다.
	 */
	exports.skipIf = function (
	/**
	 * 건너뛰기가 일어나는지
	 * 여부를 지정합니다.
	 * - `Type.Bool.`
	 */
	condition, 
	/**
	 * 건너뛸 액션의 수입니다.
	 * 이 액션은 제외한 개수입니다.
	 * - `Type.Number.`
	 */
	numberOfActions) {
	    return "Skip If(" + condition + ", " + numberOfActions + ")";
	};
	});

	unwrapExports(skipIf);
	var skipIf_1 = skipIf.skipIf;

	var smallMessage = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 플레이어에게
	 * 보이도록 작은 메시지를
	 * 조준선 아래에 표시합니다.
	 */
	exports.smallMessage = function (
	/**
	 * 해당 메시지를
	 * 보게 될 플레이어입니다.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * 표시할 메시지입니다.
	 * - `Type.String.`
	 */
	header) {
	    return "Small Message(" + visibleTo + ", " + header + ")";
	};
	});

	unwrapExports(smallMessage);
	var smallMessage_1 = smallMessage.smallMessage;

	var startAccelerating = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어를 지정된 방향으로
	 * 가속하기 시작합니다.
	 */
	exports.startAccelerating = function (
	/**
	 * 가속하기 시작할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 가속을 적용할 단위 방향입니다.
	 * 이 값은 내부적으로 정규화됩니다.
	 * - `Type.Vector.`
	 */
	direction, 
	/**
	 * 가속 비율(제곱초당 미터)입니다.
	 * 중력이나 표면 마찰력을 이겨내려면
	 * 이 값이 매우 높아야 할 수 있습니다.
	 * - `Type.Number.`
	 */
	rate, 
	/**
	 * 플레이어의 가속이 중지되는 속력입니다.
	 * 중력 및 표면 마찰력 때문에
	 * 이 속도에 도달하기는 불가능할 수 있습니다.
	 * - `Type.Number.`
	 */
	maxSpeed, 
	/**
	 * 방향이 플레이어의 월드 좌표
	 * 또는 로컬 좌표 중 어느 쪽에 대해
	 * 상대적인지 여부를 지정합니다.
	 * - `Type.Relative.`
	 */
	relative, 
	/**
	 * 이 액션의 입력 정보 중
	 * 어떤 항목을 지속적으로
	 * 재확인할 것인지 지정합니다.
	 * 해당 액션은 입력 정보의
	 * 새로운 값을 계속 묻게 되며,
	 * 재확인한 값을 사용합니다.
	 * - `Type.StartAcceleratingReevaluation.`
	 */
	reevaluation) {
	    return "Start Accelerating(" + player + ", " + direction + ", " + rate + ", " + maxSpeed + ", " + relative + ", " + reevaluation + ")";
	};
	});

	unwrapExports(startAccelerating);
	var startAccelerating_1 = startAccelerating.startAccelerating;

	var startCamera = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 카메라가 지정된 방향을
	 * 바라보도록 하여 배치합니다.
	 */
	exports.startCamera = function (
	/**
	 * 카메라를 해당 위치에
	 * 배치할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 카메라 위치입니다.
	 * 지속적으로 확인됩니다.
	 * - `Type.Vector.`
	 */
	eyePosition, 
	/**
	 * 카메라가 바라보는 방향입니다.
	 * 지속적으로 확인됩니다.
	 * - `Type.Vector.`
	 */
	lookAtPosition, 
	/**
	 * 위치 변경 시 카메라 이동의
	 * 블렌딩 속도를 설정합니다.
	 * 0인 경우 블렌딩하지 않고
	 * 위치만 즉시 변경한다는 뜻입니다.
	 * - `Type.Number.`
	 */
	blendSpeed) {
	    return "Start Camera(" + player + ", " + eyePosition + ", " + lookAtPosition + ", " + blendSpeed + ")";
	};
	});

	unwrapExports(startCamera);
	var startCamera_1 = startCamera.startCamera;

	var startDamageModification = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * DAMAGER가 RECEIVER에게
	 * 주는 피해를 수정하기 시작합니다.
	 * 이 DAMAGE MODIFICATION을 참조하려면
	 * LAST DAMAGE MODIFICATION ID 값을 사용하십시오.
	 * DAMAGE MODIFICATION이 너무 많은 경우
	 * 이 액션은 실패할 수 있습니다.
	 */
	exports.startDamageModification = function (
	/**
	 * (DAMAGER의 공격을 받는 경우)
	 * 받는 피해를 수정할 플레이어입니다.
	 * - `Type.PlayersParam.`
	 */
	receivers, 
	/**
	 * (RECEIVER를 공격하는 경우)
	 * 주는 피해를 변경할 플레이어입니다.
	 * - `Type.PlayersParam.`
	 */
	damagers, 
	/**
	 * DAMAGER의 공격을 받는 경우
	 * RECEIVER에게 적용할 피해 비율입니다.
	 * - `Type.Number.`
	 */
	damagePercent, 
	/**
	 * 이 액션의 입력 정보 중
	 * 어떤 항목을 지속적으로
	 * 재확인할 것인지 지정합니다.
	 * 해당 액션은 입력 정보의
	 * 새로운 값을 계속 묻게 되며,
	 * 재확인한 값을 사용합니다.
	 * - `Type.DamageModificationReevaluation.`
	 */
	reevaluation) {
	    return "Start Damage Modification(" + receivers + ", " + damagers + ", " + damagePercent + ", " + reevaluation + ")";
	};
	});

	unwrapExports(startDamageModification);
	var startDamageModification_1 = startDamageModification.startDamageModification;

	var startDamageOverTime = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * DAMAGE OVER TIME (DOT)
	 * 인스턴스를 시작합니다.
	 * 이 DOT는 지정된 지속 시간 동안
	 * 또는 스크립트에 의해
	 * 중지될 때까지 유지됩니다.
	 * 이 DAMAGE OVER TIME에
	 * 대한 참조를 얻으려면
	 * LAST DAMAGE OVER TIME ID
	 * 값을 사용하십시오.
	 */
	exports.startDamageOverTime = function (
	/**
	 * DAMAGE OVER TIME을
	 * 적용할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 피해를 주는 행동을 한 것으로
	 * 집계될 플레이어입니다.
	 * DAMAGER가 NULL이면
	 * 집계될 플레이어가
	 * 없음을 의미합니다.
	 * - `Type.AssisterParam.`
	 */
	damager, 
	/**
	 * DAMAGE OVER TIME의
	 * 지속 시간(초)입니다.
	 * DAMAGE OVER TIME이
	 * 스크립트에 의해
	 * 중지될 때까지 지속되게 하려면
	 * 지속 시간을 매우 길게
	 * 설정하십시오. (9999 등)
	 * - `Type.Number.`
	 */
	duration, 
	/**
	 * DAMAGE OVER TIME의
	 * 초당 피해량입니다.
	 * - `Type.Number.`
	 */
	damagePerSecond) {
	    return "Start Damage Over Time(" + player + ", " + damager + ", " + duration + ", " + damagePerSecond + ")";
	};
	});

	unwrapExports(startDamageOverTime);
	var startDamageOverTime_1 = startDamageOverTime.startDamageOverTime;

	var startFacing = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어를 지정된
	 * 방향을 향해 회전시킵니다.
	 */
	exports.startFacing = function (
	/**
	 * 회전시킬 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 플레이어가 궁극적으로
	 * 바라보게 되는 단위 방향입니다.
	 * 이 값은 내부적으로 정규화됩니다.
	 * - `Type.Vector.`
	 */
	direction, 
	/**
	 * 초당 회전율(도)입니다.
	 * - `Type.Number.`
	 */
	turnRate, 
	/**
	 * 방향이 플레이어의
	 * 월드 좌표 또는 로컬 좌표 중
	 * 어느 쪽에 대해 상대적인지
	 * 여부를 지정합니다.
	 * - `Type.Relative.`
	 */
	relative, 
	/**
	 * 이 액션의 입력 정보 중
	 * 어떤 항목을 지속적으로
	 * 재확인할 것인지 지정합니다.
	 * 해당 액션은 입력 정보의
	 * 새로운 값을 계속 묻게 되며,
	 * 재확인한 값을 사용합니다.
	 * - `Type.FacingReevaluation.`
	 */
	reevaluation) {
	    return "Start Facing(" + player + ", " + direction + ", " + turnRate + ", " + relative + ", " + reevaluation + ")";
	};
	});

	unwrapExports(startFacing);
	var startFacing_1 = startFacing.startFacing;

	var startForcingPlayerToBeHero = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어를 대상으로 지정된 영웅을 강제 선택하도록 하며,
	 * 필요시 현재 위치에 즉시 부활시킵니다.
	 * 이 영웅은 STOP FORCING PLAYER TO BE HERO
	 * 액션이 실행되기 전까지 해당 플레이어가
	 * 유일하게 사용할 수 있는 영웅입니다.
	 */
	exports.startForcingPlayerToBeHero = function (
	/**
	 * 지정된 영웅이 강제
	 * 선택되는 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 플레이어에게 강제로
	 * 설정된 영웅입니다.
	 * - `Type.Hero.`
	 */
	hero) {
	    return "Start Forcing Player To Be Hero(" + player + ", " + hero + ")";
	};
	});

	unwrapExports(startForcingPlayerToBeHero);
	var startForcingPlayerToBeHero_1 = startForcingPlayerToBeHero.startForcingPlayerToBeHero;

	var startForcingSpawnRoom = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 게임 모드에서 원래 사용되는
	 * 전투준비실인지와는 관계없이,
	 * 팀을 지정된 전투준비실에 강제로 생성합니다.
	 * 이 액션은 점령, 점령/호위,
	 * 호위 전장에서만 효과가 있습니다.
	 */
	exports.startForcingSpawnRoom = function (
	/**
	 * 전투준비실을
	 * 강제할 팀입니다.
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * 강제된 전투준비실의 번호입니다.
	 * 0이 첫 번째 전투준비실이며,
	 * 1이 두 번째, 2가 세 번째입니다.
	 * 지정된 방이 존재하지 않는 경우,
	 * 모든 플레이어는 일반
	 * 전투준비실을 사용합니다.
	 * - `Type.Number.`
	 */
	room) {
	    return "Start Forcing Spawn Room(" + team + ", " + room + ")";
	};
	});

	unwrapExports(startForcingSpawnRoom);
	var startForcingSpawnRoom_1 = startForcingSpawnRoom.startForcingSpawnRoom;

	var startForcingThrottle = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 최대 및
	 * 최소 이동 수치를 정의합니다.
	 * 강제 이동되거나 이동이
	 * 제한될 수 있습니다.
	 */
	exports.startForcingThrottle = function (
	/**
	 * 강제 이동되거나 이동이
	 * 제한될 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 전방 달리기의 최소값을 설정합니다.
	 * 0이면 플레이어가 정지할 수 있지만,
	 * 1일 경우 최대 속도로 강제 전방 이동합니다.
	 * - `Type.Number.`
	 */
	minForward, 
	/**
	 * 전방 달리기의 최대값을 설정합니다.
	 * 0이면 플레이어가 움직일 수 없지만,
	 * 1일 경우 원하는 대로 전방 이동이 가능합니다.
	 * - `Type.Number.`
	 */
	maxForward, 
	/**
	 * 후방 달리기의 최소값을 설정합니다.
	 * 0이면 플레이어가 정지할 수 있지만,
	 * 1일 경우 최대 속도로 강제 후방 이동합니다.
	 * - `Type.Number.`
	 */
	minBackward, 
	/**
	 * 후방 달리기의 최대값을 설정합니다.
	 * 0이면 플레이어가 움직일 수 없지만,
	 * 1일 경우 원하는 대로 후방 이동이 가능합니다.
	 * - `Type.Number.`
	 */
	maxBackward, 
	/**
	 * 측방 달리기의 최소값을 설정합니다.
	 * 0이면 플레이어가 정지할 수 있지만,
	 * 1일 경우 최대 속도로 강제 좌우 측방 이동합니다.
	 * - `Type.Number.`
	 */
	minSideways, 
	/**
	 * 측방 달리기의 최대값을 설정합니다.
	 * 0이면 플레이어가 움직일 수 없지만,
	 * 1일 경우 원하는 대로 좌우 측방 이동이 가능합니다.
	 * - `Type.Number.`
	 */
	maxSideways) {
	    return "Start Forcing Throttle(" + player + ", " + minForward + ", " + maxForward + ", " + minBackward + ", " + maxBackward + ", " + minSideways + ", " + maxSideways + ")";
	};
	});

	unwrapExports(startForcingThrottle);
	var startForcingThrottle_1 = startForcingThrottle.startForcingThrottle;

	var startHealOverTime = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * HEAL OVER TIME 인스턴스를 시작합니다.
	 * 이 HEAL OVER TIME은 지정된 지속 시간이 경과하거나
	 * 스크립트에 의해 중지되기 전까지 유지됩니다.
	 * 이 HEAL OVER TIME을 참조하려면
	 * LAST HEAL OVER TIME ID 값을 사용하십시오.
	 */
	exports.startHealOverTime = function (
	/**
	 * HEAL OVER TIME을
	 * 적용할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 치유 행동을 한 것으로
	 * 집계될 플레이어입니다.
	 * HEALER가 NULL이면
	 * 집계될 플레이어가
	 * 없음을 의미합니다.
	 * - `Type.AssisterParam.`
	 */
	healer, 
	/**
	 * HEAL OVER TIME의 지속 시간(초)입니다.
	 * HEAL OVER TIME이 스크립트에 의해
	 * 중지될 때까지 지속되게 하려면
	 * 9999등 매우 긴 시간으로 설정하십시오.
	 * - `Type.Number.`
	 */
	duration, 
	/**
	 * HEAL OVER TIME의 초당 치유량입니다.
	 * - `Type.Number.`
	 */
	healingPerSecond) {
	    return "Start Heal Over Time(" + player + ", " + healer + ", " + duration + ", " + healingPerSecond + ")";
	};
	});

	unwrapExports(startHealOverTime);
	var startHealOverTime_1 = startHealOverTime.startHealOverTime;

	var startHoldingButton = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * STOP HOLDING BUTTON
	 * 액션에 의해 중지되기 전까지
	 * 가상으로 버튼하나를 누르도록
	 * 플레이어에게 강제합니다.
	 */
	exports.startHoldingButton = function (
	/**
	 * 가상으로 버튼을
	 * 누르게 될 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 가상으로 눌리게 되는
	 * 논리적 버튼입니다.
	 * - `Type.Button.`
	 */
	button) {
	    return "Start Holding Button(" + player + ", " + button + ")";
	};
	});

	unwrapExports(startHoldingButton);
	var startHoldingButton_1 = startHoldingButton.startHoldingButton;

	var startThrottleInDirection = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 특정 방향으로 움직이기 시작할 때
	 * 플레이어의 쓰로틀(방향 입력 값 조정)
	 * 을 설정하거나 추가합니다.
	 * 기존 방향의 쓰로틀은 취소합니다.
	 */
	exports.startThrottleInDirection = function (
	/**
	 * 스로틀이 설정되거나 추가될 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 스로틀이 설정되거나 추가될 단위 방향입니다.
	 * 이 값은 내부적으로 정규화 됩니다.
	 * - `Type.Vector.`
	 */
	direction, 
	/**
	 * 스로틀 정도(또는 스로틀에 변화할 정도)입니다.
	 * VALUE 1은 완전한 스로틀을 의미합니다.
	 * - `Type.Number.`
	 */
	magnitude, 
	/**
	 * 방향이 플레이어의 월드 좌표 또는 로컬 좌표 중
	 * 어느 쪽에 대해 상대적인지 여부를 지정합니다.
	 * - `Type.Relative.`
	 */
	relative, 
	/**
	 * 이미 존재하는 스로틀이 교체되거나 추가될 여부입니다.
	 * - `Type.StartThrottleBehavior.`
	 */
	behavior, 
	/**
	 * 이 액션의 입력 정보 중 어떤 항목을 지속적으로
	 * 재확인할 것인지 지정합니다. 해당 액션은 입력 정보의
	 * 새로운 값을 계속 묻게 되며, 재확인한 값을 사용합니다.
	 * - `Type.StartThrottleReevaluation.`
	 */
	reevaluation) {
	    return "Start Throttle In Direction(" + player + ", " + direction + ", " + magnitude + ", " + relative + ", " + behavior + ", " + reevaluation + ")";
	};
	});

	unwrapExports(startThrottleInDirection);
	var startThrottleInDirection_1 = startThrottleInDirection.startThrottleInDirection;

	var startTransformingThrottle = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 스로틀(방향 입력값 조정) 변환(비율 증감 및 회전)을 시작합니다.
	 * 기존의 START TRANSFORMING THROTTLE 행동을 취소합니다.
	 */
	exports.startTransformingThrottle = function (
	/**
	 * Player - 스로틀이 변환될 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * X Axis Scalar - 플레이어의 스로틀 X축(왼쪽에서 오른쪽)이 새로운
	 * RELATIVE DIRECTION으로 회전하기 전에 이 값으로 곱해집니다.
	 * 이 값은 지속적으로 평가됩니다. (프레임마다 업데이트)
	 * - `Type.Number.`
	 */
	xAxisScalar, 
	/**
	 * Y Axis Scalar - 플레이어의 스로틀 Y축(왼쪽에서 오른쪽)이 새로운
	 * RELATIVE DIRECTION으로 회전하기 전에 이 값으로 곱해집니다.
	 * 이 값은 지속적으로 평가됩니다. (프레임마다 업데이트)
	 * - `Type.Number.`
	 */
	yAxisScalar, 
	/**
	 * Relative Direction - 축의 스칼라 값이 적용된 이후, 플레이어는
	 * 스로틀을 변환시켜이 단위 방향 벡터에 상대적이게 합니다. 예를 들어,
	 * 스로틀 카메라를 상대적이게 하려면, 카메라가 바라보고 있는 방향을 제공하면 됩니다.
	 * 이 값은 지속적으로 평가되며(프레임마다 업데이트) 내부적으로 정규화됩니다.
	 * - `Type.Vector.`
	 */
	relativeDirection) {
	    return "Start Transforming Throttle(" + player + ", " + xAxisScalar + ", " + yAxisScalar + ", " + relativeDirection + ")";
	};
	});

	unwrapExports(startTransformingThrottle);
	var startTransformingThrottle_1 = startTransformingThrottle.startTransformingThrottle;

	var stopAccelerating = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어를 대상으로
	 * START ACCELERATING
	 * 액션에 의해 시작된
	 * 가속을 중지합니다.
	 */
	exports.stopAccelerating = function (
	/**
	 * 가속을 중지하게 되는
	 * 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop Accelerating(" + player + ")";
	};
	});

	unwrapExports(stopAccelerating);
	var stopAccelerating_1 = stopAccelerating.stopAccelerating;

	var stopAllDamageModifications = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * START DAMAGE MODIFICATION 액션으로
	 * 시작된 모든 DAMAGE MODIFCATION을 중지합니다.
	 */
	exports.stopAllDamageModifications = function () {
	    return "Stop All Damage Modifications";
	};
	});

	unwrapExports(stopAllDamageModifications);
	var stopAllDamageModifications_1 = stopAllDamageModifications.stopAllDamageModifications;

	var stopAllDamageOverTime = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어를 대상으로
	 * START DAMAGE OVER TIME
	 * 액션에 의해 시작된 모든
	 * DAMAGE OVER TIME을 중지합니다.
	 */
	exports.stopAllDamageOverTime = function (
	/**
	 * 스크립트에 의한
	 * DAMAGE OVER TIME이
	 * 중지되는 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop All Damage Over Time(" + player + ")";
	};
	});

	unwrapExports(stopAllDamageOverTime);
	var stopAllDamageOverTime_1 = stopAllDamageOverTime.stopAllDamageOverTime;

	var stopAllHealOverTime = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어를 대상으로
	 * START HEAL OVER TIME
	 * 액션에 의해 시작된 모든
	 * HEAL OVER TIME을 중지합니다.
	 */
	exports.stopAllHealOverTime = function (
	/**
	 * 스크립트에 의한
	 * HEAL OVER TIME이
	 * 중지되는 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop All Heal Over Time(" + player + ")";
	};
	});

	unwrapExports(stopAllHealOverTime);
	var stopAllHealOverTime_1 = stopAllHealOverTime.stopAllHealOverTime;

	var stopCamera = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * START CAMERA 또는 한명 이상의 플레이어들의
	 * 모든 이동 중인 카메라 위치를 정지시킵니다.
	 */
	exports.stopCamera = function (
	/**
	 * 카메라를 기본 뷰로
	 * 되돌릴 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop Camera(" + player + ")";
	};
	});

	unwrapExports(stopCamera);
	var stopCamera_1 = stopCamera.stopCamera;

	var stopChasingGlobalVariable = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 진행 중인 전역 변수 추적을 중지하고
	 * 해당 변수의 현재 값을 그대로 유지합니다.
	 */
	exports.stopChasingGlobalVariable = function (
	/**
	 * 수정을 중지할
	 * 전역 변수를 지정합니다.
	 * - `Type.Variable.`
	 */
	variable) {
	    return "Stop Chasing Global Variable(" + variable + ")";
	};
	});

	unwrapExports(stopChasingGlobalVariable);
	var stopChasingGlobalVariable_1 = stopChasingGlobalVariable.stopChasingGlobalVariable;

	var stopChasingPlayerVariable = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 진행 중인 플레이어 변수 추적을 중지하고
	 * 해당 변수의 현재 값을 그대로 유지합니다.
	 */
	exports.stopChasingPlayerVariable = function (
	/**
	 * 변수 반경을 중지할
	 * 플레이어입니다.
	 * 플레이어가 다수인 경우,
	 * 각각의 변수는
	 * 변경되지 않습니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 수정을 중지할
	 * 플레이어의 변수를
	 * 지정합니다.
	 * - `Type.Variable.`
	 */
	variable) {
	    return "Stop Chasing Player Variable(" + player + ", " + variable + ")";
	};
	});

	unwrapExports(stopChasingPlayerVariable);
	var stopChasingPlayerVariable_1 = stopChasingPlayerVariable.stopChasingPlayerVariable;

	var stopDamageModification = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * START DAMAGE MODIFICATION 액션으로
	 * 시작된 DAMAGE MODIFICATION 하나를 중지합니다.
	 */
	exports.stopDamageModification = function (
	/**
	 * 중지할 DAMAGE MODIFICATION 인스턴스를 지정합니다.
	 * 이 ID는 LAST DAMAGE MODIFICATION ID이거나,
	 * 이전에 LAST DAMAGE MODIFICATION ID가
	 * 저장되었던 변수일 수 있습니다.
	 * - `Type.DamageModification.`
	 */
	damageModificationId) {
	    return "Stop Damage Modification(" + damageModificationId + ")";
	};
	});

	unwrapExports(stopDamageModification);
	var stopDamageModification_1 = stopDamageModification.stopDamageModification;

	var stopDamageOverTime = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * START DAMAGE OVER TIME 액션에 의해 시작된
	 * DAMAGE OVER TIME 인스턴스를 중지합니다.
	 */
	exports.stopDamageOverTime = function (
	/**
	 * 중지할 DAMAGE OVER TIME 인스턴스를 지정합니다.
	 * 여기에 사용되는 ID는 LAST DAMAGE MODIFICATION ID이거나,
	 * 이전에 LAST DAMAGE MODIFICATION ID가
	 * 저장되었던 변수일 수 있습니다.
	 * - `Type.DamageOverTime.`
	 */
	damageOverTimeId) {
	    return "Stop Damage Over Time(" + damageOverTimeId + ")";
	};
	});

	unwrapExports(stopDamageOverTime);
	var stopDamageOverTime_1 = stopDamageOverTime.stopDamageOverTime;

	var stopFacing = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어에 대해 START FACING
	 * 액션에 의해 시작된 회전을 중지합니다.
	 */
	exports.stopFacing = function (
	/**
	 * 회전을 멈출 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop Facing(" + player + ")";
	};
	});

	unwrapExports(stopFacing);
	var stopFacing_1 = stopFacing.stopFacing;

	var stopForcingPlayerToBeHero = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어에 대해 지정된 영웅
	 * 강제 선택 지정을 중지합니다.
	 * 이를 통해 플레이어가 부활하지는 않지만,
	 * 이후부터 영웅 선택을 할 수 있게 됩니다.
	 */
	exports.stopForcingPlayerToBeHero = function (
	/**
	 * 지정된 영웅 강제 선택이
	 * 해제될 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop Forcing Player To Be Hero(" + player + ")";
	};
	});

	unwrapExports(stopForcingPlayerToBeHero);
	var stopForcingPlayerToBeHero_1 = stopForcingPlayerToBeHero.stopForcingPlayerToBeHero;

	var stopForcingSpawnRoom = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 지정된 팀에 대한
	 * START FORCING SPAWN ROOM
	 * 액션의 효과를 취소합니다.
	 */
	exports.stopForcingSpawnRoom = function (
	/**
	 * 일반 전투실을 사용해
	 * 플레이를 재개하게 될 팀입니다.
	 * - `Type.Team.`
	 */
	team) {
	    return "Stop Forcing Spawn Room(" + team + ")";
	};
	});

	unwrapExports(stopForcingSpawnRoom);
	var stopForcingSpawnRoom_1 = stopForcingSpawnRoom.stopForcingSpawnRoom;

	var stopForcingThrottle = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어에 대해
	 * START FORCING THROTTLE
	 * 액션의 효과를 취소합니다.
	 */
	exports.stopForcingThrottle = function (
	/**
	 * 이동 입력 정보가
	 * 복원될 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop Forcing Throttle(" + player + ")";
	};
	});

	unwrapExports(stopForcingThrottle);
	var stopForcingThrottle_1 = stopForcingThrottle.stopForcingThrottle;

	var stopHealOverTime = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * START HEAL OVER TIME
	 * 액션에 의해 시작된
	 * HEAL OVER TIME
	 * 인스턴스를 중지합니다.
	 */
	exports.stopHealOverTime = function (
	/**
	 * 중지할 HEAL OVER TIME 인스턴스를 지정합니다.
	 * 여기에 사용되는 ID는 LAST HEAL OVER TIME ID 또는
	 * 예전에 LAST HEAL OVER TIME ID가 담긴 변수입니다.
	 * - `Type.HealOverTimeId.`
	 */
	healOverTimeId) {
	    return "Stop Heal Over Time(" + healOverTimeId + ")";
	};
	});

	unwrapExports(stopHealOverTime);
	var stopHealOverTime_1 = stopHealOverTime.stopHealOverTime;

	var stopHoldingButton = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어를 대상으로 한
	 * START HOLDING BUTTON
	 * 액션의 효과를 취소합니다.
	 */
	exports.stopHoldingButton = function (
	/**
	 * 더 이상 가상으로 버튼을
	 * 누르지 않을 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 더 이상 가상으로
	 * 눌리지 않을
	 * 논리적 버튼입니다.
	 * - `Type.Button.`
	 */
	button) {
	    return "Stop Holding Button(" + player + ", " + button + ")";
	};
	});

	unwrapExports(stopHoldingButton);
	var stopHoldingButton_1 = stopHoldingButton.stopHoldingButton;

	var stopThrottleInDirection = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * START THROTTLE IN DIRECTION 으로
	 * 인해 발생된 행위를 취소합니다.
	 */
	exports.stopThrottleInDirection = function (
	/**
	 * 기본 스로틀 조작으로 복원될 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop Throttle In Direction(" + player + ")";
	};
	});

	unwrapExports(stopThrottleInDirection);
	var stopThrottleInDirection_1 = stopThrottleInDirection.stopThrottleInDirection;

	var stopTransformingThrottle = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어를 대상으로 START TRANSFORMING THROTTLE
	 * 액션에 의해 시작된 스로틀 변환을 중지합니다.
	 */
	exports.stopTransformingThrottle = function (
	/**
	 * Player - 스로틀 변환을 멈출 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop Transforming Throttle(" + player + ")";
	};
	});

	unwrapExports(stopTransformingThrottle);
	var stopTransformingThrottle_1 = stopTransformingThrottle.stopTransformingThrottle;

	var teleport = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어를 지정 위치로
	 * 순간이동시킵니다.
	 */
	exports.teleport = function (
	/**
	 * 순간이동할
	 * 플레이어입니다.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * 플레이어가 순간이동하게 될 위치입니다.
	 * 플레이어가 설정되어 있으면
	 * 해당 플레이어의 위치가 사용됩니다.
	 * - `Type.Vector.`
	 */
	position) {
	    return "Teleport(" + player + ", " + position + ")";
	};
	});

	unwrapExports(teleport);
	var teleport_1 = teleport.teleport;

	var unpauseMatchTime = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 일시정지된 경기시간을 재개합니다.
	 */
	exports.unpauseMatchTime = function () {
	    return "Unpause Match Time";
	};
	});

	unwrapExports(unpauseMatchTime);
	var unpauseMatchTime_1 = unpauseMatchTime.unpauseMatchTime;

	var wait = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 액션 목록 실행을 일시정지합니다.
	 * WAIT이 중지되지 않는 한,
	 * 나머지 액션은 일시정지 해제 후 실행됩니다.
	 */
	exports.wait = function (
	/**
	 * 일시정지의 지속시간입니다.
	 * - `Type.Number.`
	 */
	time, 
	/**
	 * WAIT이 중지되는 조건 및 방법을 설정합니다.
	 * 조건 목록이 무시되면 WAIT은 중지되지 않으며,
	 * 그 외의 경우에는 조건 목록에 의해
	 * 액션 목록의 중지 혹은 재시작 여부가 결정됩니다.
	 * - `Type.WaitBehavior.`
	 */
	waitBehavior) {
	    return "Wait(" + time + ", " + waitBehavior + ")";
	};
	});

	unwrapExports(wait);
	var wait_1 = wait.wait;

	var action = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(abort, exports);
	tslib_es6.__exportStar(abortIf, exports);
	tslib_es6.__exportStar(abortIfConditionIsFalse, exports);
	tslib_es6.__exportStar(abortIfConditionIsTrue, exports);
	tslib_es6.__exportStar(allowButton, exports);
	tslib_es6.__exportStar(applyImpluse, exports);
	tslib_es6.__exportStar(bigMessage, exports);
	tslib_es6.__exportStar(chaseGlobalVariableAtRate, exports);
	tslib_es6.__exportStar(chaseGlobalVariableOverTime, exports);
	tslib_es6.__exportStar(chasePlayerVariableAtRate, exports);
	tslib_es6.__exportStar(chasePlayerVariableOverTime, exports);
	tslib_es6.__exportStar(clearStatus, exports);
	tslib_es6.__exportStar(communicate, exports);
	tslib_es6.__exportStar(createBeamEffect, exports);
	tslib_es6.__exportStar(createDummyBot, exports);
	tslib_es6.__exportStar(createEffect, exports);
	tslib_es6.__exportStar(createHudText, exports);
	tslib_es6.__exportStar(createIcon, exports);
	tslib_es6.__exportStar(createInWorldText, exports);
	tslib_es6.__exportStar(damage, exports);
	tslib_es6.__exportStar(declareMatchDraw, exports);
	tslib_es6.__exportStar(declarePlayerVictory, exports);
	tslib_es6.__exportStar(declareRoundVictory, exports);
	tslib_es6.__exportStar(declareTeamVictory, exports);
	tslib_es6.__exportStar(destroyAllDummyBot, exports);
	tslib_es6.__exportStar(destroyAllEffects, exports);
	tslib_es6.__exportStar(destroyAllHudText, exports);
	tslib_es6.__exportStar(destroyAllIcons, exports);
	tslib_es6.__exportStar(destroyAllInWorldText, exports);
	tslib_es6.__exportStar(destroyDummyBot, exports);
	tslib_es6.__exportStar(destroyEffect, exports);
	tslib_es6.__exportStar(destroyHudText, exports);
	tslib_es6.__exportStar(destroyIcon, exports);
	tslib_es6.__exportStar(destroyInWorldText, exports);
	tslib_es6.__exportStar(disableBuiltInGameModeAnnouncer, exports);
	tslib_es6.__exportStar(disableBuiltInGameModeCompletion, exports);
	tslib_es6.__exportStar(disableBuiltInGameModeMusic, exports);
	tslib_es6.__exportStar(disableBuiltInGameModeRespawning, exports);
	tslib_es6.__exportStar(disableBuiltInGameModeScoring, exports);
	tslib_es6.__exportStar(disableDeathSpectateAllPlayers, exports);
	tslib_es6.__exportStar(disableDeathSpectateTargetHud, exports);
	tslib_es6.__exportStar(disallowButton, exports);
	tslib_es6.__exportStar(enableBuiltInGameModeAnnouncer, exports);
	tslib_es6.__exportStar(enableBuiltInGameModeCompletion, exports);
	tslib_es6.__exportStar(enableBuiltInGameModeMusic, exports);
	tslib_es6.__exportStar(enableBuiltInGameModeRespawning, exports);
	tslib_es6.__exportStar(enableBuiltInGameModeScoring, exports);
	tslib_es6.__exportStar(enableDeathSpectateAllPlayers, exports);
	tslib_es6.__exportStar(enableDeathSpectateTargetHud, exports);
	tslib_es6.__exportStar(goToAssembleHeroes, exports);
	tslib_es6.__exportStar(heal, exports);
	tslib_es6.__exportStar(kill, exports);
	tslib_es6.__exportStar(loop, exports);
	tslib_es6.__exportStar(loopIf, exports);
	tslib_es6.__exportStar(loopIfConditionIsFalse, exports);
	tslib_es6.__exportStar(loopIfConditionIsTrue, exports);
	tslib_es6.__exportStar(modifyGlobalVariable, exports);
	tslib_es6.__exportStar(modifyGlobalVariableAtIndex, exports);
	tslib_es6.__exportStar(modifyPlayerScore, exports);
	tslib_es6.__exportStar(modifyPlayerVariable, exports);
	tslib_es6.__exportStar(modifyPlayerVariableAtIndex, exports);
	tslib_es6.__exportStar(modifyTeamScore, exports);
	tslib_es6.__exportStar(pauseMatchTime, exports);
	tslib_es6.__exportStar(playEffect$1, exports);
	tslib_es6.__exportStar(preloadHero, exports);
	tslib_es6.__exportStar(pressButton, exports);
	tslib_es6.__exportStar(resetPlayerHeroAvailability, exports);
	tslib_es6.__exportStar(respawn, exports);
	tslib_es6.__exportStar(resurrect, exports);
	tslib_es6.__exportStar(setAbility1Enabled, exports);
	tslib_es6.__exportStar(setAbility2Enabled, exports);
	tslib_es6.__exportStar(setAimSpeed, exports);
	tslib_es6.__exportStar(setDamageDealt, exports);
	tslib_es6.__exportStar(setDamageReceived, exports);
	tslib_es6.__exportStar(setFacing, exports);
	tslib_es6.__exportStar(setGlobalVariable, exports);
	tslib_es6.__exportStar(setGlobalVariableAtIndex, exports);
	tslib_es6.__exportStar(setGravity, exports);
	tslib_es6.__exportStar(setHealingDealt, exports);
	tslib_es6.__exportStar(setHealingReceived, exports);
	tslib_es6.__exportStar(setInvisible, exports);
	tslib_es6.__exportStar(setMatchTime, exports);
	tslib_es6.__exportStar(setMaxHealth, exports);
	tslib_es6.__exportStar(setMoveSpeed, exports);
	tslib_es6.__exportStar(setObjectiveDescription, exports);
	tslib_es6.__exportStar(setPlayerAllowedHeroes, exports);
	tslib_es6.__exportStar(setPlayerScore, exports);
	tslib_es6.__exportStar(setPlayerVariable, exports);
	tslib_es6.__exportStar(setPlayerVariableAtIndex, exports);
	tslib_es6.__exportStar(setPrimaryFireEnabled, exports);
	tslib_es6.__exportStar(setProjectileGravity, exports);
	tslib_es6.__exportStar(setProjectileSpeed, exports);
	tslib_es6.__exportStar(setRespawnMaxTime, exports);
	tslib_es6.__exportStar(setSecondaryFireEnabled, exports);
	tslib_es6.__exportStar(setSlowMotion, exports);
	tslib_es6.__exportStar(setStatus, exports);
	tslib_es6.__exportStar(setTeamScore, exports);
	tslib_es6.__exportStar(setUltimateAbilityEnabled, exports);
	tslib_es6.__exportStar(setUltimateCharge, exports);
	tslib_es6.__exportStar(skip, exports);
	tslib_es6.__exportStar(skipIf, exports);
	tslib_es6.__exportStar(smallMessage, exports);
	tslib_es6.__exportStar(startAccelerating, exports);
	tslib_es6.__exportStar(startCamera, exports);
	tslib_es6.__exportStar(startDamageModification, exports);
	tslib_es6.__exportStar(startDamageOverTime, exports);
	tslib_es6.__exportStar(startFacing, exports);
	tslib_es6.__exportStar(startForcingPlayerToBeHero, exports);
	tslib_es6.__exportStar(startForcingSpawnRoom, exports);
	tslib_es6.__exportStar(startForcingThrottle, exports);
	tslib_es6.__exportStar(startHealOverTime, exports);
	tslib_es6.__exportStar(startHoldingButton, exports);
	tslib_es6.__exportStar(startThrottleInDirection, exports);
	tslib_es6.__exportStar(startTransformingThrottle, exports);
	tslib_es6.__exportStar(stopAccelerating, exports);
	tslib_es6.__exportStar(stopAllDamageModifications, exports);
	tslib_es6.__exportStar(stopAllDamageOverTime, exports);
	tslib_es6.__exportStar(stopAllHealOverTime, exports);
	tslib_es6.__exportStar(stopCamera, exports);
	tslib_es6.__exportStar(stopChasingGlobalVariable, exports);
	tslib_es6.__exportStar(stopChasingPlayerVariable, exports);
	tslib_es6.__exportStar(stopDamageModification, exports);
	tslib_es6.__exportStar(stopDamageOverTime, exports);
	tslib_es6.__exportStar(stopFacing, exports);
	tslib_es6.__exportStar(stopForcingPlayerToBeHero, exports);
	tslib_es6.__exportStar(stopForcingSpawnRoom, exports);
	tslib_es6.__exportStar(stopForcingThrottle, exports);
	tslib_es6.__exportStar(stopHealOverTime, exports);
	tslib_es6.__exportStar(stopHoldingButton, exports);
	tslib_es6.__exportStar(stopThrottleInDirection, exports);
	tslib_es6.__exportStar(stopTransformingThrottle, exports);
	tslib_es6.__exportStar(teleport, exports);
	tslib_es6.__exportStar(unpauseMatchTime, exports);
	tslib_es6.__exportStar(wait, exports);
	});

	unwrapExports(action);

	var onGoingEachPlayer = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어가 게임에 참여하면
	 * 각 플레이어마다 이 Rule의 인스턴스가 생성됩니다.
	 * 이 인스턴스는 해당 플레이어가 게임을 떠나거나,
	 * 게임이 끝날 때까지 활성화되어 있습니다.
	 * 각 인스턴스는 개별적으로 Condition과 Action을 추적하고 실행합니다.
	 *
	 * - 플레이어가 게임에 남아있는 한 인스턴스가 지속되므로
	 *    Condition을 만족할 수도, 그렇지 않을 수도 있습니다.
	 *    Condition을 처음 만족하면Action을 실행합니다.
	 *
	 * - Condition 목록을 만족하지 못했다가 만족한다면,
	 *    Action을 다시 실행하려 할 것입니다.
	 */
	exports.onGoingEachPlayer = function (
	/**
	 * - `Type.TeamConstant.`
	 */
	team, 
	/**
	 * - `Type.EventPlayer.`
	 */
	player) {
	    return "Ongoing - Each Player(" + team + ", " + player + ")";
	};
	});

	unwrapExports(onGoingEachPlayer);
	var onGoingEachPlayer_1 = onGoingEachPlayer.onGoingEachPlayer;

	var onGoingGlobal = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 게임 시작 시 이 Rule의 개별 인스턴스 하나를 생성합니다.
	 * 이 인스턴스는 게임이 지속되는 동안 활성화되어 있습니다.
	 *
	 * - 이 인스턴스는 게임이 지속되는 동안 활성화되어 있으므로
	 *    Condition 을 만족하거나 만족하지 않을 수 있습니다.
	 *    Condition을 처음 만족할 때 Action을 실행 합니다.
	 *
	 * - Condition 목록을 만족하지 못했다가 만족한다면,
	 *    Action을 다시 실행하려 할 것입니다.
	 */
	exports.onGoingGlobal = function () {
	    return "Ongoing - Global";
	};
	});

	unwrapExports(onGoingGlobal);
	var onGoingGlobal_1 = onGoingGlobal.onGoingGlobal;

	var playerDealtDamage = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어 한 명이 피해를 입힐 때마다 Rule을 실행합니다.
	 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
	 *
	 * - 플레이어가 적에게 피해를 주면 Condition을 확인합니다.
	 *    모든 Condition을 만족하면Action이 실행되지만,
	 *    하나라도 만족하지 않으면 실행되지 않습니다.
	 */
	exports.playerDealtDamage = function (
	/**
	 * - `Type.TeamConstant.`
	 */
	team, 
	/**
	 * - `Type.EventPlayer.`
	 */
	player) {
	    return "Player dealt damage(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerDealtDamage);
	var playerDealtDamage_1 = playerDealtDamage.playerDealtDamage;

	var playerDealtFinalBlow = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어 한 명이 결정타를 날릴 때마다 Rule을 실행합니다.
	 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
	 *
	 * - 플레이어가 결정타로 피해를 입히면 Condition을 확인합니다.
	 *    모든 Condition을 만족하면 Action이 실행되지만,
	 *    하나라도 만족하지 않으면 실행되지 않습니다.
	 */
	exports.playerDealtFinalBlow = function (
	/**
	 * - `Type.TeamConstant.`
	 */
	team, 
	/**
	 * - `Type.EventPlayer.`
	 */
	player) {
	    return "Player dealt final blow(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerDealtFinalBlow);
	var playerDealtFinalBlow_1 = playerDealtFinalBlow.playerDealtFinalBlow;

	var playerDealtHealing = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * TODO: playerDealtHealing(Player Dealt Healing)(OrderNum:0)
	 */
	exports.playerDealtHealing = function (
	/**
	 * TODO: playerDealtHealing(Player Dealt Healing)(OrderNum:1)
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * TODO: playerDealtHealing(Player Dealt Healing)(OrderNum:2)
	 * - `Type.Player.`
	 */
	player) {
	    return "Player Dealt Healing(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerDealtHealing);
	var playerDealtHealing_1 = playerDealtHealing.playerDealtHealing;

	var playerDied = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어 한 명이 사망할 때마다 Rule을 실행합니다.
	 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
	 *
	 * - 플레이어가 사망하면 Condition을 확인합니다.
	 *    모든 Condition을 만족할 때 Action이 실행되지만,
	 *    하나라도 만족하지 않으면 Action이 실행되지 않습니다.
	 */
	exports.playerDied = function (
	/**
	 * - `Type.TeamConstant.`
	 */
	team, 
	/**
	 * - `Type.EventPlayer.`
	 */
	player) {
	    return "Player Died(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerDied);
	var playerDied_1 = playerDied.playerDied;

	var playerEarnedElimination = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어 한 명이 처치를 달성할 때마다 Rule을 실행합니다.
	 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
	 *
	 * - 플레이어 한 명이 누군가를 처치하면 Condition을 확인합니다.
	 *    모든 Condition을 만족하면 Action이 실행되지만,
	 *    하나라도 만족하지 않으면 실행되지 않습니다.
	 */
	exports.playerEarnedElimination = function (
	/**
	 * - `Type.TeamConstant.`
	 */
	team, 
	/**
	 * - `Type.EventPlayer.`
	 */
	player) {
	    return "Player earned elimination(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerEarnedElimination);
	var playerEarnedElimination_1 = playerEarnedElimination.playerEarnedElimination;

	var playerJoinedMatch = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * TODO: playerJoinedMatch(Player Joined Match)(OrderNum:0)
	 */
	exports.playerJoinedMatch = function (
	/**
	 * TODO: playerJoinedMatch(Player Joined Match)(OrderNum:1)
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * TODO: playerJoinedMatch(Player Joined Match)(OrderNum:2)
	 * - `Type.Player.`
	 */
	player) {
	    return "Player Joined Match(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerJoinedMatch);
	var playerJoinedMatch_1 = playerJoinedMatch.playerJoinedMatch;

	var playerLeftMatch = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * TODO: playerLeftMatch(Player Left Match)(OrderNum:0)
	 */
	exports.playerLeftMatch = function (
	/**
	 * TODO: playerLeftMatch(Player Left Match)(OrderNum:1)
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * TODO: playerLeftMatch(Player Left Match)(OrderNum:2)
	 * - `Type.Player.`
	 */
	player) {
	    return "Player Left Match(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerLeftMatch);
	var playerLeftMatch_1 = playerLeftMatch.playerLeftMatch;

	var playerReceivedHealing = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * TODO: playerReceivedHealing(Player Received Healing)(OrderNum:0)
	 */
	exports.playerReceivedHealing = function (
	/**
	 * TODO: playerReceivedHealing(Player Received Healing)(OrderNum:1)
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * TODO: playerReceivedHealing(Player Received Healing)(OrderNum:2)
	 * - `Type.Player.`
	 */
	player) {
	    return "Player Received Healing(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerReceivedHealing);
	var playerReceivedHealing_1 = playerReceivedHealing.playerReceivedHealing;

	var playerTookDamage = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어 한 명이 피해를 받을 때마다 Rule을 실행합니다.
	 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
	 *
	 * - 플레이어가 적에게서 피해를 받으면 Condition을 확인합니다.
	 *    모든 Condition을 만족하면Action이 실행되지만,
	 *    하나라도 만족하지 않으면 실행되지 않습니다.
	 */
	exports.playerTookDamage = function (
	/**
	 * - `Type.TeamConstant.`
	 */
	team, 
	/**
	 * - `Type.EventPlayer.`
	 */
	player) {
	    return "Player took damage(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerTookDamage);
	var playerTookDamage_1 = playerTookDamage.playerTookDamage;

	var event = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(onGoingEachPlayer, exports);
	tslib_es6.__exportStar(onGoingGlobal, exports);
	tslib_es6.__exportStar(playerDealtDamage, exports);
	tslib_es6.__exportStar(playerDealtFinalBlow, exports);
	tslib_es6.__exportStar(playerDealtHealing, exports);
	tslib_es6.__exportStar(playerDied, exports);
	tslib_es6.__exportStar(playerEarnedElimination, exports);
	tslib_es6.__exportStar(playerJoinedMatch, exports);
	tslib_es6.__exportStar(playerLeftMatch, exports);
	tslib_es6.__exportStar(playerReceivedHealing, exports);
	tslib_es6.__exportStar(playerTookDamage, exports);
	});

	unwrapExports(event);

	var eventHealing = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 이 규칙에 의해 현재 처리되고 있는
	 * 이벤트의 HEALEE가 받는 치유량입니다.
	 */
	exports.eventHealing = function () {
	    return "Event Healing";
	};
	});

	unwrapExports(eventHealing);
	var eventHealing_1 = eventHealing.eventHealing;

	var healee = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 이 규칙으로 처리된 이벤트로 인해 치유를 받은 플레이어입니다.
	 * HEALER 또는 EVENT PLAYER와 동일할 수 있습니다.
	 */
	exports.healee = function () {
	    return "Healee";
	};
	});

	unwrapExports(healee);
	var healee_1 = healee.healee;

	var healer = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 이 규칙으로 처리된 이벤트로 인해 치유를 한 플레이어입니다.
	 * HEALEE 또는 EVENT PLAYER와 동일할 수 있습니다.
	 */
	exports.healer = function () {
	    return "Healer";
	};
	});

	unwrapExports(healer);
	var healer_1 = healer.healer;

	var hostPlayer = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 현재 사용자 지정 게임의 방장인 플레이어입니다.
	 * 이 값은 현재 방장이 경기를 떠나면 변경됩니다.
	 */
	exports.hostPlayer = function () {
	    return "Host Player";
	};
	});

	unwrapExports(hostPlayer);
	var hostPlayer_1 = hostPlayer.hostPlayer;

	var isDummyBot = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 플레이어의 DUMMY 봇 여부입니다.
	 */
	exports.isDummyBot = function (
	/**
	 * 고려할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Dummy Bot(" + player + ")";
	};
	});

	unwrapExports(isDummyBot);
	var isDummyBot_1 = isDummyBot.isDummyBot;

	var value$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(absoluteValue, exports);
	tslib_es6.__exportStar(add, exports);
	tslib_es6.__exportStar(allDeadPlayers, exports);
	tslib_es6.__exportStar(allHeroes, exports);
	tslib_es6.__exportStar(allLivingPlayers, exports);
	tslib_es6.__exportStar(allowedHeroes, exports);
	tslib_es6.__exportStar(allPlayers, exports);
	tslib_es6.__exportStar(allPlayersNotOnObjective, exports);
	tslib_es6.__exportStar(allPlayersOnObjective, exports);
	tslib_es6.__exportStar(altitudeOf, exports);
	tslib_es6.__exportStar(and, exports);
	tslib_es6.__exportStar(angleBetweenVectors, exports);
	tslib_es6.__exportStar(angleDifference, exports);
	tslib_es6.__exportStar(appendToArray, exports);
	tslib_es6.__exportStar(arccosineInDegrees, exports);
	tslib_es6.__exportStar(arccosineInRadians, exports);
	tslib_es6.__exportStar(arcsineInDegrees, exports);
	tslib_es6.__exportStar(arcsineInRadians, exports);
	tslib_es6.__exportStar(arctangentInDegrees, exports);
	tslib_es6.__exportStar(arctangentInRadians, exports);
	tslib_es6.__exportStar(arrayContains, exports);
	tslib_es6.__exportStar(arraySlice, exports);
	tslib_es6.__exportStar(attacker, exports);
	tslib_es6.__exportStar(backward, exports);
	tslib_es6.__exportStar(closestPlayerTo, exports);
	tslib_es6.__exportStar(compare, exports);
	tslib_es6.__exportStar(controlModeScoringPercentage, exports);
	tslib_es6.__exportStar(controlModeScoringTeam, exports);
	tslib_es6.__exportStar(cosineFromDegrees, exports);
	tslib_es6.__exportStar(cosineFromRadians, exports);
	tslib_es6.__exportStar(countOf, exports);
	tslib_es6.__exportStar(crossProduct, exports);
	tslib_es6.__exportStar(currentArrayElement, exports);
	tslib_es6.__exportStar(directionFromAngles, exports);
	tslib_es6.__exportStar(directionTowards, exports);
	tslib_es6.__exportStar(distanceBetween, exports);
	tslib_es6.__exportStar(divide, exports);
	tslib_es6.__exportStar(dotProduct, exports);
	tslib_es6.__exportStar(down, exports);
	tslib_es6.__exportStar(emptyArray, exports);
	tslib_es6.__exportStar(entityExists, exports);
	tslib_es6.__exportStar(eventDamage, exports);
	tslib_es6.__exportStar(eventHealing, exports);
	tslib_es6.__exportStar(eventPlayer$1, exports);
	tslib_es6.__exportStar(eventWasCriticalHit, exports);
	tslib_es6.__exportStar(eyePosition, exports);
	tslib_es6.__exportStar(facingDirectionOf, exports);
	tslib_es6.__exportStar(_false, exports);
	tslib_es6.__exportStar(farthestPlayerFrom, exports);
	tslib_es6.__exportStar(filteredArray, exports);
	tslib_es6.__exportStar(firstOf, exports);
	tslib_es6.__exportStar(flagPosition, exports);
	tslib_es6.__exportStar(forward, exports);
	tslib_es6.__exportStar(globalVariable, exports);
	tslib_es6.__exportStar(hasSpawned, exports);
	tslib_es6.__exportStar(hasStatus, exports);
	tslib_es6.__exportStar(healee, exports);
	tslib_es6.__exportStar(healer, exports);
	tslib_es6.__exportStar(health, exports);
	tslib_es6.__exportStar(hero, exports);
	tslib_es6.__exportStar(heroIconString, exports);
	tslib_es6.__exportStar(heroOf, exports);
	tslib_es6.__exportStar(horizontalAngleFromDirection, exports);
	tslib_es6.__exportStar(horizontalAngleTowards, exports);
	tslib_es6.__exportStar(horizontalFacingAngleOf, exports);
	tslib_es6.__exportStar(horizontalSpeedOf, exports);
	tslib_es6.__exportStar(hostPlayer, exports);
	tslib_es6.__exportStar(indexOfArrayValue, exports);
	tslib_es6.__exportStar(isAlive, exports);
	tslib_es6.__exportStar(isAssemblingHeroes, exports);
	tslib_es6.__exportStar(isBetweenRounds, exports);
	tslib_es6.__exportStar(isButtonHeld, exports);
	tslib_es6.__exportStar(isCommunicating, exports);
	tslib_es6.__exportStar(isCommunicatingAny, exports);
	tslib_es6.__exportStar(isCommunicatingAnyEmote, exports);
	tslib_es6.__exportStar(isCommunicatingAnyVoiceLine, exports);
	tslib_es6.__exportStar(isControlModePointLocked, exports);
	tslib_es6.__exportStar(isCrouching, exports);
	tslib_es6.__exportStar(isCTFModeInSuddenDeath, exports);
	tslib_es6.__exportStar(isDead, exports);
	tslib_es6.__exportStar(isDummyBot, exports);
	tslib_es6.__exportStar(isFiringPrimary, exports);
	tslib_es6.__exportStar(isFiringSecondary, exports);
	tslib_es6.__exportStar(isFlagAtBase, exports);
	tslib_es6.__exportStar(isFlagBeingCarried, exports);
	tslib_es6.__exportStar(isGameInProgress, exports);
	tslib_es6.__exportStar(isHeroBeingPlayed, exports);
	tslib_es6.__exportStar(isInAir, exports);
	tslib_es6.__exportStar(isInLineOfSight, exports);
	tslib_es6.__exportStar(isInSetup, exports);
	tslib_es6.__exportStar(isInSpawnRoom, exports);
	tslib_es6.__exportStar(isInViewAngle, exports);
	tslib_es6.__exportStar(isMatchComplete, exports);
	tslib_es6.__exportStar(isMoving, exports);
	tslib_es6.__exportStar(isObjectiveComplete, exports);
	tslib_es6.__exportStar(isOnGround, exports);
	tslib_es6.__exportStar(isOnObjective, exports);
	tslib_es6.__exportStar(isOnWall, exports);
	tslib_es6.__exportStar(isPortraitOnFire, exports);
	tslib_es6.__exportStar(isStanding, exports);
	tslib_es6.__exportStar(isTeamOnDefense, exports);
	tslib_es6.__exportStar(isTeamOnOffense, exports);
	tslib_es6.__exportStar(isTrueForAll, exports);
	tslib_es6.__exportStar(isTrueForAny, exports);
	tslib_es6.__exportStar(isUsingAbility1, exports);
	tslib_es6.__exportStar(isUsingAbility2, exports);
	tslib_es6.__exportStar(isUsingUltimate, exports);
	tslib_es6.__exportStar(isWaitingForPlayers, exports);
	tslib_es6.__exportStar(lastCreatedEntity, exports);
	tslib_es6.__exportStar(lastDamageModificationId, exports);
	tslib_es6.__exportStar(lastDamageOverTimeId, exports);
	tslib_es6.__exportStar(lastHealOverTimeId, exports);
	tslib_es6.__exportStar(lastOf, exports);
	tslib_es6.__exportStar(lastTextId, exports);
	tslib_es6.__exportStar(left, exports);
	tslib_es6.__exportStar(localVectorOf, exports);
	tslib_es6.__exportStar(matchRound, exports);
	tslib_es6.__exportStar(matchTime, exports);
	tslib_es6.__exportStar(max, exports);
	tslib_es6.__exportStar(maxHealth, exports);
	tslib_es6.__exportStar(min, exports);
	tslib_es6.__exportStar(modulo, exports);
	tslib_es6.__exportStar(multiply$1, exports);
	tslib_es6.__exportStar(nearestWalkablePosition, exports);
	tslib_es6.__exportStar(normalize, exports);
	tslib_es6.__exportStar(normalizedHealth, exports);
	tslib_es6.__exportStar(not, exports);
	tslib_es6.__exportStar(_null, exports);
	tslib_es6.__exportStar(number, exports);
	tslib_es6.__exportStar(numberOfDeadPlayers, exports);
	tslib_es6.__exportStar(numberOfDeaths, exports);
	tslib_es6.__exportStar(numberOfEliminations, exports);
	tslib_es6.__exportStar(numberOfFinalBlows, exports);
	tslib_es6.__exportStar(numberOfHeroes, exports);
	tslib_es6.__exportStar(numberOfLivingPlayers, exports);
	tslib_es6.__exportStar(numberOfPlayers, exports);
	tslib_es6.__exportStar(numberOfPlayersOnObjective, exports);
	tslib_es6.__exportStar(objectiveIndex, exports);
	tslib_es6.__exportStar(objectivePosition, exports);
	tslib_es6.__exportStar(oppositeTeamOf, exports);
	tslib_es6.__exportStar(or, exports);
	tslib_es6.__exportStar(payloadPosition, exports);
	tslib_es6.__exportStar(payloadProgressPercentage, exports);
	tslib_es6.__exportStar(playerCarryingFlag, exports);
	tslib_es6.__exportStar(playerClosestToReticle, exports);
	tslib_es6.__exportStar(playersInSlot, exports);
	tslib_es6.__exportStar(playersInViewAngle, exports);
	tslib_es6.__exportStar(playersOnHero, exports);
	tslib_es6.__exportStar(playersWithinRadius, exports);
	tslib_es6.__exportStar(playerVariable, exports);
	tslib_es6.__exportStar(pointCapturePercentage, exports);
	tslib_es6.__exportStar(positionOf, exports);
	tslib_es6.__exportStar(raiseToPower, exports);
	tslib_es6.__exportStar(randomInteger, exports);
	tslib_es6.__exportStar(randomizedArray, exports);
	tslib_es6.__exportStar(randomReal, exports);
	tslib_es6.__exportStar(randomValueInArray, exports);
	tslib_es6.__exportStar(rayCastHitNormal, exports);
	tslib_es6.__exportStar(rayCastHitPlayer, exports);
	tslib_es6.__exportStar(rayCastHitPosition, exports);
	tslib_es6.__exportStar(removeFromArray, exports);
	tslib_es6.__exportStar(right, exports);
	tslib_es6.__exportStar(roundToInteger, exports);
	tslib_es6.__exportStar(scoreOf, exports);
	tslib_es6.__exportStar(serverLoad, exports);
	tslib_es6.__exportStar(serverLoadAverage, exports);
	tslib_es6.__exportStar(serverLoadPeak, exports);
	tslib_es6.__exportStar(sineFromDegrees, exports);
	tslib_es6.__exportStar(sineFromRadians, exports);
	tslib_es6.__exportStar(slotOf, exports);
	tslib_es6.__exportStar(sortedArray, exports);
	tslib_es6.__exportStar(speedOf, exports);
	tslib_es6.__exportStar(speedOfInDirection, exports);
	tslib_es6.__exportStar(squareRoot, exports);
	tslib_es6.__exportStar(string, exports);
	tslib_es6.__exportStar(subtract, exports);
	tslib_es6.__exportStar(tangentFromDegrees, exports);
	tslib_es6.__exportStar(tangentFromRadians, exports);
	tslib_es6.__exportStar(team, exports);
	tslib_es6.__exportStar(teamOf, exports);
	tslib_es6.__exportStar(teamScore, exports);
	tslib_es6.__exportStar(throttleOf, exports);
	tslib_es6.__exportStar(totalTimeElapsed, exports);
	tslib_es6.__exportStar(_true, exports);
	tslib_es6.__exportStar(ultimateChargePercent, exports);
	tslib_es6.__exportStar(up, exports);
	tslib_es6.__exportStar(valueInArray, exports);
	tslib_es6.__exportStar(vector, exports);
	tslib_es6.__exportStar(vectorTowards, exports);
	tslib_es6.__exportStar(velocityOf, exports);
	tslib_es6.__exportStar(verticalAngleFromDirection, exports);
	tslib_es6.__exportStar(verticalAngleTowards, exports);
	tslib_es6.__exportStar(verticalFacingAngleOf, exports);
	tslib_es6.__exportStar(verticalSpeedOf, exports);
	tslib_es6.__exportStar(victim, exports);
	tslib_es6.__exportStar(worldVectorOf, exports);
	tslib_es6.__exportStar(xComponentOf, exports);
	tslib_es6.__exportStar(yComponentOf, exports);
	tslib_es6.__exportStar(zComponentOf, exports);
	});

	unwrapExports(value$1);

	var match = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	// @ts-ignore
	tslib_es6.__exportStar(flagPosition, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isAssemblingHeroes, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isBetweenRounds, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isControlModePointLocked, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isCTFModeInSuddenDeath, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isFlagAtBase, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isFlagBeingCarried, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isGameInProgress, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isInSetup, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isMatchComplete, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isObjectiveComplete, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isWaitingForPlayers, exports);
	// @ts-ignore
	tslib_es6.__exportStar(matchRound, exports);
	// @ts-ignore
	tslib_es6.__exportStar(matchTime, exports);
	// @ts-ignore
	tslib_es6.__exportStar(objectiveIndex, exports);
	// @ts-ignore
	tslib_es6.__exportStar(objectivePosition, exports);
	// @ts-ignore
	tslib_es6.__exportStar(payloadProgressPercentage, exports);
	// @ts-ignore
	tslib_es6.__exportStar(playerCarryingFlag, exports);
	// @ts-ignore
	tslib_es6.__exportStar(payloadPosition, exports);
	// @ts-ignore
	tslib_es6.__exportStar(pointCapturePercentage, exports);
	// @ts-ignore
	tslib_es6.__exportStar(totalTimeElapsed, exports);
	});

	unwrapExports(match);

	var level = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	// @ts-ignore
	tslib_es6.__exportStar(lastCreatedEntity, exports);
	// @ts-ignore
	tslib_es6.__exportStar(lastDamageModificationId, exports);
	// @ts-ignore
	tslib_es6.__exportStar(lastDamageOverTimeId, exports);
	// @ts-ignore
	tslib_es6.__exportStar(lastHealOverTimeId, exports);
	// @ts-ignore
	tslib_es6.__exportStar(lastTextId, exports);
	// @ts-ignore
	tslib_es6.__exportStar(rayCastHitNormal, exports);
	// @ts-ignore
	tslib_es6.__exportStar(rayCastHitPlayer, exports);
	// @ts-ignore
	tslib_es6.__exportStar(rayCastHitPosition, exports);
	});

	unwrapExports(level);

	var server = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	// @ts-ignore
	tslib_es6.__exportStar(serverLoad, exports);
	// @ts-ignore
	tslib_es6.__exportStar(serverLoadAverage, exports);
	// @ts-ignore
	tslib_es6.__exportStar(serverLoadPeak, exports);
	});

	unwrapExports(server);

	var util = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	// @ts-ignore
	tslib_es6.__exportStar(max, exports);
	// @ts-ignore
	tslib_es6.__exportStar(min, exports);
	// @ts-ignore
	tslib_es6.__exportStar(normalizedHealth, exports);
	// @ts-ignore
	tslib_es6.__exportStar(randomInteger, exports);
	// @ts-ignore
	tslib_es6.__exportStar(randomReal, exports);
	// @ts-ignore
	tslib_es6.__exportStar(randomValueInArray, exports);
	// @ts-ignore
	tslib_es6.__exportStar(randomizedArray, exports);
	// @ts-ignore
	tslib_es6.__exportStar(roundToInteger, exports);
	// @ts-ignore
	tslib_es6.__exportStar(squareRoot, exports);


	/**
	 * @param value Type `Type.Number.`
	 */
	exports.ceil = function (value) { return value$1.roundToInteger(value, resolver.Type.RoundingType.Default('Up')); };
	/**
	 * @param value Type `Type.Number.`
	 */
	exports.floor = function (value) { return value$1.roundToInteger(value, resolver.Type.RoundingType.Default('Down')); };
	/**
	 * @param value Type `Type.Number.`
	 */
	exports.round = function (value) { return value$1.roundToInteger(value, resolver.Type.RoundingType.Default('To Nearest')); };
	/**
	 * @param value Type `Type.Number.`
	 */
	exports.sqrt = value$1.squareRoot;
	});

	unwrapExports(util);
	var util_1 = util.ceil;
	var util_2 = util.floor;
	var util_3 = util.round;
	var util_4 = util.sqrt;

	var resolver = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	// @ts-ignore
	var Type = tslib_es6.__importStar(type);
	exports.Type = Type;
	// @ts-ignore
	var Action = tslib_es6.__importStar(action);
	exports.Action = Action;
	// @ts-ignore
	var RuleEvent = tslib_es6.__importStar(event);
	exports.RuleEvent = RuleEvent;
	// @ts-ignore
	var Value = tslib_es6.__importStar(value$1);
	exports.Value = Value;
	var Match = tslib_es6.__importStar(match);
	exports.Match = Match;
	var Level = tslib_es6.__importStar(level);
	exports.Level = Level;
	var Server = tslib_es6.__importStar(server);
	exports.Server = Server;
	var Util = tslib_es6.__importStar(util);
	exports.Util = Util;
	});

	unwrapExports(resolver);
	var resolver_1 = resolver.Type;
	var resolver_2 = resolver.Action;
	var resolver_3 = resolver.RuleEvent;
	var resolver_4 = resolver.Value;
	var resolver_5 = resolver.Match;
	var resolver_6 = resolver.Level;
	var resolver_7 = resolver.Server;
	var resolver_8 = resolver.Util;

	var player$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var Player = /** @class */ (function () {
	    /**
	     * @param player `Type.Player.`
	     */
	    function Player(player) {
	        if (player === void 0) { player = resolver.Type.Player.eventPlayer(); }
	        this.player = player;
	    }
	    /**
	     * 표면으로부터 측정한 플레이어의 높이(미터)입니다.
	     * 플레이어가 표면에 있으면 0입니다.
	     */
	    Player.prototype.altitudeOf = function () {
	        return resolver.Value.altitudeOf(this.player);
	    };
	    /**
	     * 한 위치에서 가장 가까운 플레이어입니다.
	     * 팀으로 제한할 수 있습니다.
	     */
	    Player.prototype.closestPlayerTo = function (
	    /**
	     * 거리를 측정할 위치입니다.
	     * - `Type.Vector.`
	     */
	    center, 
	    /**
	     * 가장 가까이 있는 플레이어가 소속된 팀입니다.
	     * - `Type.Team.`
	     */
	    team) {
	        return resolver.Value.closestPlayerTo(center, team);
	    };
	    /**
	     * (조준에 쓰인) 플레이어의 1인칭 시점 위치입니다.
	     */
	    Player.prototype.eyePosition = function () {
	        return resolver.Value.eyePosition(this.player);
	    };
	    /**
	     * 월드에 대해 상대적으로 플레이어가 바라보고 있는
	     * 방향의 상대적인 단위 길이 방향 벡터입니다.
	     * 이 값에는 종 및 횡 방향이 있습니다.
	     */
	    Player.prototype.facingDirectionOf = function () {
	        return resolver.Value.facingDirectionOf(this.player);
	    };
	    /**
	     * 지정된 위치로부터 가장 멀리 떨어진 플레이어로,
	     * 팀의 제한을 받을 수 있습니다.
	     */
	    Player.prototype.farthestPlayerFrom = function (
	    /**
	     * 거리 측정을 위한 위치입니다.
	     * - `Type.Vector.`
	     */
	    center, 
	    /**
	     * 가장 멀리 떨어진 플레이어가 소속된 팀입니다.
	     * - `Type.Player.`
	     */
	    team) {
	        return resolver.Value.farthestPlayerFrom(center, team);
	    };
	    /**
	     * 지정된 플레이어가 SET STATUS 액션 또는 스크립트 이외의
	     * 게임 메카닉을 통해 지정된 상태를 갖게 되었는지 여부입니다.
	     */
	    Player.prototype.hasStatus = function (
	    /**
	     * 확인할 상태입니다.
	     * - `Type.Status.`
	     */
	    status) {
	        return resolver.Value.hasStatus(this.player, status);
	    };
	    /**
	     * 한 플레이어의 현재 생명력(방어력 및 보호막 포함)입니다.
	     */
	    Player.prototype.health = function () {
	        return resolver.Value.health(this.player);
	    };
	    /**
	     * 플레이어가 현재 사용하는 영웅입니다.
	     */
	    Player.prototype.heroOf = function () {
	        return resolver.Value.heroOf(this.player);
	    };
	    /**
	     * 지정된 방향 벡터에 대응하는 횡축각(단위: 도)입니다.
	     */
	    Player.prototype.horizontalAngleFromDirection = function (
	    /**
	     * 황축각(단위: 도)정보를 가져올 방향 벡터입니다.
	     * 이 벡터는 연산 전에 단위 벡터로 정규화됩니다.
	     * - `Type.Vector.`
	     */
	    direction) {
	        return resolver.Value.horizontalAngleFromDirection(direction);
	    };
	    /**
	     * 월드에 대해 상대적으로 플레이어가 바라보고 있는
	     * 방향의 상대적인 횡축각(단위: 도)입니다.
	     * 이 값은 플레이어가 좌측으로 회전 시 증가합니다.
	     * (+/- 180도 범위)
	     */
	    Player.prototype.horizontalFacingAngleOf = function () {
	        return resolver.Value.horizontalFacingAngleOf(this.player);
	    };
	    /**
	     * 플레이어의 현재 횡축 속도(초당 미터)입니다.
	     * 여기에는 모든 종축 움직임이 배제됩니다.
	     */
	    Player.prototype.horizontalSpeedOf = function () {
	        return resolver.Value.horizontalSpeedOf(this.player);
	    };
	    /**
	     * 플레이어의 생존 여부 입니다.
	     */
	    Player.prototype.isAlive = function () {
	        return resolver.Value.isAlive(this.player);
	    };
	    /**
	     * 플레이어가 지정된 버튼을 누르고 있는지 여부입니다.
	     */
	    Player.prototype.isButtonHeld = function (
	    /**
	     * 확인할 버튼입니다.
	     * - `Type.Button.`
	     */
	    button) {
	        return resolver.Value.isButtonHeld(this.player, button);
	    };
	    /**
	     * 플레이어가 지정된 의사소통 유형
	     * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
	     */
	    Player.prototype.isCommunicating = function (
	    /**
	     * 고려할 의사소통 유형입니다.
	     *
	     * 감정 표현의 지속 시간은 정확하게 적용되며,
	     * 음성 대사의 지속 시간은 4초로 간주합니다.
	     *
	     * 그 이외의 지속 시간은 2초로 간주합니다.
	     * - `Type.Communication.`
	     */
	    type) {
	        return resolver.Value.isCommunicating(this.player, type);
	    };
	    /**
	     * 플레이어가 아무 것이든 의사소통 유형
	     * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
	     */
	    Player.prototype.isCommunicatingAny = function () {
	        return resolver.Value.isCommunicatingAny(this.player);
	    };
	    /**
	     * 플레이어가 감정 표현을 사용하는지 여부입니다.
	     */
	    Player.prototype.isCommunicatingAnyEmote = function () {
	        return resolver.Value.isCommunicatingAnyEmote(this.player);
	    };
	    /**
	     * 플레이어가 음성 대사를 사용하는지 여부입니다.
	     * (음성 대사의 지속 시간은 4초로 추정)
	     */
	    Player.prototype.isCommunicatingAnyVoiceLine = function () {
	        return resolver.Value.isCommunicatingAnyVoiceLine(this.player);
	    };
	    /**
	     * 플레이어가 웅크리고 있는 상태인지 여부입니다.
	     */
	    Player.prototype.isCrouching = function () {
	        return resolver.Value.isCrouching(this.player);
	    };
	    /**
	     * 플레이어의 사망 여부입니다.
	     */
	    Player.prototype.isDead = function () {
	        return resolver.Value.isDead(this.player);
	    };
	    /**
	     * 지정된 플레이어의 주무기가 사용 중인지 여부입니다.
	     */
	    Player.prototype.isFiringPrimary = function () {
	        return resolver.Value.isFiringPrimary(this.player);
	    };
	    /**
	     * 지정된 플레이어의 보조 무기 공격이 사용 중인지 여부입니다.
	     */
	    Player.prototype.isFiringSecondary = function () {
	        return resolver.Value.isFiringSecondary(this.player);
	    };
	    /**
	     * 플레이어가 공중에 있는 상태인지 여부입니다.
	     */
	    Player.prototype.isInAir = function () {
	        return resolver.Value.isInAir(this.player);
	    };
	    /**
	     * 지정된 플레이어가 전투준비실에 있는지
	     * (또한 치유되고 영웅을 변경할 수 있는지) 여부 입니다.
	     */
	    Player.prototype.isInSpawnRoom = function () {
	        return resolver.Value.isInSpawnRoom(this.player);
	    };
	    /**
	     * 플레이어가 이동하고 있는지
	     * 여부(현재 속도가 0인지 여부로 판단)입니다.
	     */
	    Player.prototype.isMoving = function () {
	        return resolver.Value.isMoving(this.player);
	    };
	    /**
	     * 플레이어가 착지(또는 걷기가 가능한 표면에 있는) 상태인지 여부입니다.
	     */
	    Player.prototype.isOnGround = function () {
	        return resolver.Value.isOnGround(this.player);
	    };
	    /**
	     * 지정된 플레이어가 현재 화물 또는 점령 지점을 점유하고 있는지 여부입니다.
	     */
	    Player.prototype.isOnObjective = function () {
	        return resolver.Value.isOnObjective(this.player);
	    };
	    /**
	     * 플레이어가 벽에 있는 상태(오르거나 타는 상태)인지 여부입니다.
	     */
	    Player.prototype.isOnWall = function () {
	        return resolver.Value.isOnWall(this.player);
	    };
	    /**
	     * 지정된 플레이어의 초상화가 폭주 상태인지 여부입니다.
	     */
	    Player.prototype.isPortraitOnFire = function () {
	        return resolver.Value.isPortraitOnFire(this.player);
	    };
	    /**
	     * 플레이어가 서 있는 상태인지 여부
	     * (이동하지 않고 공중에 있는
	     * 상태가 아닌 경우로 판단)입니다.
	     */
	    Player.prototype.isStanding = function () {
	        return resolver.Value.isStanding(this.player);
	    };
	    /**
	     * 지정된 플레이어가 기술 1을 사용하는지 여부입니다.
	     */
	    Player.prototype.isUsingAbility1 = function () {
	        return resolver.Value.isUsingAbility1(this.player);
	    };
	    /**
	     * 지정된 플레이어가 기술 2를 사용하는지 여부입니다.
	     */
	    Player.prototype.isUsingAbility2 = function () {
	        return resolver.Value.isUsingAbility2(this.player);
	    };
	    /**
	     * 플레이어가 궁극기를 사용하는지 여부입니다.
	     */
	    Player.prototype.isUsingUltimate = function () {
	        return resolver.Value.isUsingUltimate(this.player);
	    };
	    /**
	     * 플레이어의 최대 생명력(방어력 및 보호막 포함)입니다.
	     */
	    Player.prototype.maxHealth = function () {
	        return resolver.Value.maxHealth(this.player);
	    };
	    /**
	     * 지정된 플레이어가 기록한 사망 수입니다.
	     * 이 값은 게임이 진행 중일때만 누적됩니다.
	     */
	    Player.prototype.numberOfDeaths = function () {
	        return resolver.Value.numberOfDeaths(this.player);
	    };
	    /**
	     * 지정된 플레이어가 기록한 처치 수입니다.
	     * 이 값은 게임이 진행 중일 때만 누적됩니다.
	     */
	    Player.prototype.numberOfEliminations = function () {
	        return resolver.Value.numberOfEliminations(this.player);
	    };
	    /**
	     * 지정된 플레이어가 기록한 결정타 개수입니다.
	     * 이 값은 게임이 진행 중일 때만 쌓이게 됩니다.
	     */
	    Player.prototype.numberOfFinalBlows = function () {
	        return resolver.Value.numberOfFinalBlows(this.player);
	    };
	    /**
	     * 지정된 플레이어의 조준선에서
	     * 가장 가까운 플레이어입니다.
	     * 팀으로 제한할 수 있습니다.
	     */
	    Player.prototype.playerClosestToReticle = function (
	    /**
	     * 가장 가까운 플레이어를 검색할 팀입니다.
	     * - `Type.Team.`
	     */
	    team) {
	        return resolver.Value.playerClosestToReticle(this.player, team);
	    };
	    /**
	     * 지정된 플레이어의 조준선을 기준으로
	     * 시야각 안에 있는 플레이어입니다.
	     * 팀 단위로 제한할 수 있습니다.
	     */
	    Player.prototype.playersInViewAngle = function (
	    /**
	     * 플레이어를 고려할 팀입니다.
	     * - `Type.Team.`
	     */
	    team, 
	    /**
	     * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
	     * - `Type.Number.`
	     */
	    viewAngle) {
	        return resolver.Value.playersInViewAngle(this.player, team, viewAngle);
	    };
	    /**
	     * 플레이어의 현재 위치(벡터)입니다.
	     */
	    Player.prototype.positionOf = function () {
	        return resolver.Value.positionOf(this.player);
	    };
	    /**
	     * 지정된 플레이어의 현재 점수입니다.
	     * 게임 모드가 개별 전투가 아닌 경우
	     * 결과값은 0이 됩니다.
	     */
	    Player.prototype.scoreOf = function () {
	        return resolver.Value.scoreOf(this.player);
	    };
	    /**
	     * 플레이어의 현재 속도(초당 미터)입니다.
	     */
	    Player.prototype.speedOf = function () {
	        return resolver.Value.speedOf(this.player);
	    };
	    /**
	     * 지정된 방향에서 플레이어의
	     * 현재 속도(초당 미터)입니다.
	     */
	    Player.prototype.speedOfInDirection = function (
	    /**
	     * 플레이어의 속도를 측정할 이동 방향입니다.
	     * - `Type.Vector.`
	     */
	    direction) {
	        return resolver.Value.speedOfInDirection(this.player, direction);
	    };
	    /**
	     * 해당 플레이어의 소속 팀입니다.
	     * 게임 모드가 개별 전투인 경우 팀은 ALL로 간주됩니다.
	     */
	    Player.prototype.teamOf = function () {
	        return resolver.Value.teamOf(this.player);
	    };
	    /**
	     * 한 플레이어의 방향 입력 정보입니다.
	     * X 구성요소가 횡방향 입력 정보(왼쪽이 양),
	     * Z 구성 요소가 종방향 입력 정보(위쪽이 양)인 벡터로 표현됩니다.
	     */
	    Player.prototype.throttleOf = function () {
	        return resolver.Value.throttleOf(this.player);
	    };
	    /**
	     * 플레이어의 현재 궁극기 충전량 비율입니다.
	     */
	    Player.prototype.ultimateChargePercent = function () {
	        return resolver.Value.ultimateChargePercent(this.player);
	    };
	    /**
	     * 플레이어의 현재 속도(벡터)입니다.
	     * 해당 플레이어가 표면 위에 있는 경우,
	     * 경사로를 오르 내린다고 해도 Y 구성요소 속도는 0입니다.
	     */
	    Player.prototype.velocityOf = function () {
	        return resolver.Value.velocityOf(this.player);
	    };
	    /**
	     * 플레이어의 전방에서 지정된
	     * 위치까지의 종축각(단위: 도)입니다.
	     * 이 값은 해당 위치가
	     * 플레이어 아래에 있는 경우 양수이며,
	     * 그 외의 경우 0이거나 음수입니다.
	     */
	    Player.prototype.verticalAngleTowards = function (
	    /**
	     * 각 각이 종료되는 월드 내 위치입니다.
	     * - `Type.Vector.`
	     */
	    position) {
	        return resolver.Value.verticalAngleTowards(this.player, position);
	    };
	    /**
	     * 월드에 대해 상대적으로 플레이어가
	     * 바라보고 있는 방향의 종축각(단위: 도)입니다.
	     * 이 값은 플레이어가 내려다보는 경우 증가합니다.
	     */
	    Player.prototype.verticalFacingAngleOf = function () {
	        return resolver.Value.verticalFacingAngleOf(this.player);
	    };
	    /**
	     * 플레이어의 현재 종축 속도(초당 미터)입니다.
	     * 여기에는 경사로를 오르내리는 등의 움직임 등
	     * 모든 횡축 이동이 배제됩니다.
	     */
	    Player.prototype.verticalSpeedOf = function () {
	        return resolver.Value.verticalSpeedOf(this.player);
	    };
	    return Player;
	}());
	exports.default = Player;
	});

	unwrapExports(player$1);

	var vector$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var Vector = /** @class */ (function () {
	    /**
	     * @param vector `Type.Vector.`
	     */
	    function Vector(vector) {
	        this.vector = vector;
	    }
	    /**
	     * 두 방향 벡터 (정규화 불필요) 사이의 각입니다. (단위: 도)
	     */
	    Vector.prototype.angleBetweenVectors = function (
	    /**
	     * 사이의 각(단위: 도)을 측정하기 위한 두 방향 벡터 중 하나입니다.
	     * 이 벡터를 미리 정규화할 필요는 없습니다.
	     * - `Type.Vector.`
	     */
	    vector1, 
	    /**
	     * 사이의 각(단위: 도)을 측정하기 위한 두 방향 벡터 중 하나입니다.
	     * 이 벡터를 미리 정규화할 필요는 없습니다.
	     * - `Type.Vector.`
	     */
	    vector2) {
	        return resolver.Value.angleBetweenVectors(vector1, vector2);
	    };
	    /**
	     * 제공된 월드 좌표 벡터에 해당하는 로컬 좌표 벡터입니다.
	     */
	    Vector.prototype.localVectorOf = function (
	    /**
	     * 로컬 좌표로 전환될 월드 좌표 벡터입니다.
	     * - `Type.Vector.`
	     */
	    worldVector, 
	    /**
	     * 결과 벡터와 연관될 플레이어입니다.
	     * - `Type.Player.`
	     */
	    relativePlayer, 
	    /**
	     * 벡터가 회전과 평행 이동을 받는지(일반적으로 위치에 적용),
	     * 아니면 회전만 받는지(일반적으로 방향 및 속도에 적용) 여부를 설정합니다.
	     * - `Type.Transformation.`
	     */
	    transformation) {
	        return resolver.Value.localVectorOf(worldVector, relativePlayer, transformation);
	    };
	    /**
	     * 제공된 로컬 좌표 벡터에 해당하는 월드 좌표 벡터입니다.
	     */
	    Vector.prototype.worldVectorOf = function (
	    /**
	     * 월드 좌표로 전환될 로컬 좌표 벡터입니다.
	     * - `Type.Vector.`
	     */
	    localVector, 
	    /**
	     * 결과 벡터와 연관될 플레이어입니다.
	     * - `Type.Player.`
	     */
	    relativePlayer, 
	    /**
	     * 벡터가 회전과 평행 이동을 받는지(일반적으로 위치에 적용),
	     * 아니면 회전만 받는지(일반적으로 방향 및 속도에 적용) 여부를 설정합니다.
	     * - `Type.Transformation.`
	     */
	    transformation) {
	        return resolver.Value.worldVectorOf(localVector, relativePlayer, transformation);
	    };
	    /**
	     * 두 각을 비교한 각도 차이(단위: 도) 입니다. 두 각을 서로 +/- 180
	     * 이내에서 펼쳐서 두 번째 각이 첫 번째 각보다 크다면 결과각은 양수입니다.
	     * 이외의 경우 0이나 음수가 될 수 있습니다.
	     */
	    Vector.prototype.angleDifference = function (
	    /**
	     * 결과각을 도출하기 위한 두 각 중 하나입니다.
	     * - `Type.Number.`
	     */
	    angle1, 
	    /**
	     * 결과각을 도출하기 위한 두 각 중 하나입니다.
	     * - `Type.Number.`
	     */
	    angle2) {
	        return resolver.Value.angleDifference(angle1, angle2);
	    };
	    /**
	     * 지정된 각(단위: 도)의 아크코사인 값입니다.
	     */
	    Vector.prototype.arccosineInDegrees = function (
	    /**
	     * 함수의 입력값입니다.
	     * - `Type.Number.`
	     */
	    value) {
	        return resolver.Value.arccosineInDegrees(value);
	    };
	    /**
	     * 지정된 각(단위: RAD)의 아크코사인 값입니다.
	     */
	    Vector.prototype.arccosineInRadians = function (
	    /**
	     * 함수의 입력값입니다.
	     * - `Type.Number.`
	     */
	    value) {
	        return resolver.Value.arccosineInRadians(value);
	    };
	    /**
	     * 지정된 각(단위: 도)의 아크사인 값입니다.
	     */
	    Vector.prototype.arcsineInDegrees = function (
	    /**
	     * 함수의 입력값입니다.
	     * - `Type.Number.`
	     */
	    value) {
	        return resolver.Value.arcsineInDegrees(value);
	    };
	    /**
	     * 지정된 각(단위: RAD)의 아크사인 값입니다.
	     */
	    Vector.prototype.arcsineInRadians = function (
	    /**
	     * 함수의 입력값입니다.
	     * - `Type.Number.`
	     */
	    value) {
	        return resolver.Value.arcsineInRadians(value);
	    };
	    /**
	     * 지정된 분자와 분모(단위: 도)의 아크탄젠트 값입니다.
	     * (흔히 ATAN2 로 불림)
	     */
	    Vector.prototype.arctangentInDegrees = function (
	    /**
	     * 함수의 분자 입력 정보입니다.
	     * - `Type.Number.`
	     */
	    numerator, 
	    /**
	     * 함수의 분모 입력 정보입니다.
	     * - `Type.Number.`
	     */
	    denominator) {
	        return resolver.Value.arctangentInDegrees(numerator, denominator);
	    };
	    /**
	     * 지정된 분자와 분모(단위: RAD)의 아크탄젠트 값입니다.
	     * (흔히 ATAN2 로 불림)
	     */
	    Vector.prototype.arctangentInRadians = function (
	    /**
	     * 함수의 분자 입력 정보입니다.
	     * - `Type.Number.`
	     */
	    numerator, 
	    /**
	     * 함수의 분모 입력 정보입니다.
	     * - `Type.Number.`
	     */
	    denominator) {
	        return resolver.Value.arctangentInRadians(numerator, denominator);
	    };
	    /**
	     * 지정된 각(단위: 도)의 코사인 값입니다.
	     */
	    Vector.prototype.cosineFromDegrees = function (
	    /**
	     * 각(단위: 도)입니다.
	     * - `Type.Number.`
	     */
	    angle) {
	        return resolver.Value.cosineFromDegrees(angle);
	    };
	    /**
	     * 지정된 각(단위: RAD)의 코사인 값입니다.
	     */
	    Vector.prototype.cosineFromRadians = function (
	    /**
	     * 각(단위: RAD)입니다.
	     * - `Type.Number.`
	     */
	    angle) {
	        return resolver.Value.cosineFromRadians(angle);
	    };
	    /**
	     * 지정된 값의 가위곱입니다.(왼쪽과 위쪽의 벡터 곱은 전방 방향)
	     */
	    Vector.prototype.crossProduct = function (
	    /**
	     * 가위곱의 왼쪽 벡터 피연산자입니다.
	     * - `Type.Vector.`
	     */
	    value1, 
	    /**
	     * 가위곱의 오른쪽 벡터 피연산자입니다.
	     * - `Type.Vector.`
	     */
	    value2) {
	        return resolver.Value.crossProduct(value1, value2);
	    };
	    /**
	     * 지정된 각에 대응하는 단위 길이 방향 벡터입니다.
	     */
	    Vector.prototype.directionFromAngles = function (
	    /**
	     * 결과 벡터를 도출하는 데 사용되는 황축각(단위: 도)입니다.
	     * - `Type.Number.`
	     */
	    horizontalAngle, 
	    /**
	     * 결과 벡터를 도출하는 데 사용되는 종축각(단위: 도)입니다.
	     * - `Type.Number.`
	     */
	    verticalAngle) {
	        return resolver.Value.directionFromAngles(horizontalAngle, verticalAngle);
	    };
	    /**
	     * 한 위치에서 다른 위치까지의 단위 길이 방향 벡터입니다.
	     */
	    Vector.prototype.directionTowards = function (
	    /**
	     * 결과로 도출되는 방향 벡터가 시작되는 위치입니다.
	     * - `Type.Vector.`
	     */
	    startPos, 
	    /**
	     * 결과로 도출되는 방향 벡터가 끝나는 위치입니다.
	     * - `Type.Vector.`
	     */
	    endPos) {
	        return resolver.Value.directionTowards(startPos, endPos);
	    };
	    /**
	     * 두 위치 사이의 거리(미터)입니다.
	     */
	    Vector.prototype.distanceBetween = function (
	    /**
	     * 거리 측정에 사용되는 두 위치 중 하나입니다.
	     * - `Type.Vector.`
	     */
	    startPos, 
	    /**
	     * 거리 측정에 사용되는 두 위치 중 하나입니다.
	     * - `Type.Vector.`
	     */
	    endPos) {
	        return resolver.Value.distanceBetween(startPos, endPos);
	    };
	    /**
	     * 지정된 값의 점곱입니다.
	     */
	    Vector.prototype.dotProduct = function (
	    /**
	     * 점곱의 백터 피연산자 두 개 중 하나입니다.
	     * - `Type.Vector.`
	     */
	    value1, 
	    /**
	     * 점곱의 백터 피연산자 두 개 중 하나입니다.
	     * - `Type.Vector.`
	     */
	    value2) {
	        return resolver.Value.dotProduct(value1, value2);
	    };
	    /**
	     * 아래를 가리키는 방향 벡터(0, -1, 0)의 약칭입니다.
	     */
	    Vector.prototype.down = function () {
	        return resolver.Value.down();
	    };
	    /**
	     * 전방을 가리키는 방향 벡터(0, 0, 1)의 약칭입니다.
	     */
	    Vector.prototype.forward = function () {
	        return resolver.Value.forward();
	    };
	    /**
	     * 플레이어의 전방에서 지정된 위치까지의 횡축각(단위: 도)입니다.
	     * 이 값은 해당 위치가 플레이엉 좌측에 있는 경우 양수이며,
	     * 그 외의 경우 0이거나 음수입니다.
	     */
	    Vector.prototype.horizontalAngleTowards = function (
	    /**
	     * 이 플레이어가 현재 바라보는 방향으로부터 각이 시작됩니다.
	     * - `Type.Player.`
	     */
	    player, 
	    /**
	     * 각 각이 종료되는 월드 내 위치입니다.
	     * - `Type.Vector.`
	     */
	    position) {
	        return resolver.Value.horizontalAngleTowards(player, position);
	    };
	    /**
	     * 두 위치가 서로 보이는지 여부입니다.
	     */
	    Vector.prototype.isInLineOfSight = function (
	    /**
	     * 시야 확인의 시작 위치입니다.
	     * 플레이어가 설정되어 있으면
	     * 해당 플레이어의 발 위로
	     * 2미터 위치가 사용됩니다.
	     * - `Type.Vector.`
	     */
	    startPos, 
	    /**
	     * 시야 확인의 종료 위치입니다.
	     * 플레이어가 설정되어 있으면
	     * 해당 플레이어의 발 위로
	     * 2미터 위치가 사용됩니다.
	     * - `Type.Vector.`
	     */
	    endPos, 
	    /**
	     * 방벽이 시야에 미치는 영향을 정의합니다.
	     * 방벽이 적 소유인지를 판정할 때는
	     * START POS에 제공된 플레이어의
	     * 소속(있는 경우)이 사용됩니다.
	     * - `Type.Barrier.`
	     */
	    barriers) {
	        return resolver.Value.isInLineOfSight(startPos, endPos, barriers);
	    };
	    /**
	     * LOCATION이 플레이어의 시야에 있는지 여부입니다.
	     */
	    Vector.prototype.isInViewAngle = function (
	    /**
	     * 시야를 확인할 플레이어입니다.
	     * - `Type.Player.`
	     */
	    player, 
	    /**
	     * 시야에 있는지 테스트할 LOCATION입니다.
	     * - `Type.Vector.`
	     */
	    location, 
	    /**
	     * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
	     * - `Type.Number.`
	     */
	    viewAngle) {
	        return resolver.Value.isInViewAngle(player, location, viewAngle);
	    };
	    /**
	     * 좌측을 가리키는 방향 벡터(1, 0,0)의 약칭입니다.
	     */
	    Vector.prototype.left = function () {
	        return resolver.Value.left();
	    };
	    /**
	     * 서 있을 수 있고 생성 지점에서 접근 가능하며
	     * 지정된 위치에서 가장 가까운 위치입니다.
	     */
	    Vector.prototype.nearestWalkablePosition = function (
	    /**
	     * 가장 가까운 도보 가능 위치를 검색할 대상 위치입니다.
	     * - `Type.Vector.`
	     */
	    position) {
	        return resolver.Value.nearestWalkablePosition(position);
	    };
	    /**
	     * 벡터의 단위 길이 정규화입니다.
	     */
	    Vector.prototype.normalize = function (
	    /**
	     * 정규화할 벡터입니다.
	     * - `Type.Vector.`
	     */
	    position) {
	        return resolver.Value.normalize(position);
	    };
	    /**
	     * 한 위치의 지정된 거리 내 모든 플레이어를 포함하고 있는 배열입니다.
	     * 팀 또는 시야 범위로 제한할 수 있습니다.
	     */
	    Vector.prototype.playersWithinRadius = function (
	    /**
	     * 거리 측정이 시작되는 중간 위치입니다.
	     * - `Type.Vector.`
	     */
	    center, 
	    /**
	     * 결과 배열에 포함되기 위해
	     * 플레이어가 속해 있어야 하는
	     * 반경(미터)입니다.
	     * - `Type.Number.`
	     */
	    radius, 
	    /**
	     * 결과 배열에 포함되기 위해
	     * 플레이어가 속해 있어야 하는
	     * 팀입니다.
	     * - `Type.Team.`
	     */
	    team, 
	    /**
	     * 결과 배열에 포함되기 위해
	     * 플레이어가 시야 확인을
	     * 통과해야 하는지 여부 및
	     * 방법을 지정합니다.
	     * - `Type.LosCheck.`
	     */
	    losCheck) {
	        return resolver.Value.playersWithinRadius(center, radius, team, losCheck);
	    };
	    /**
	     * 우측을 가리키는 방향 벡터(-1, 0, 0)의 약칭입니다.
	     */
	    Vector.prototype.right = function () {
	        return resolver.Value.right();
	    };
	    /**
	     * 지정된 각(단위: 도)의 사인 값입니다.
	     */
	    Vector.prototype.sineFromDegrees = function (
	    /**
	     * 각(단위: 도)입니다.
	     * - `Type.Number.`
	     */
	    angle) {
	        return resolver.Value.sineFromDegrees(angle);
	    };
	    /**
	     * 지정된 각(단위: RAD)의 사인 값입니다.
	     */
	    Vector.prototype.sineFromRadians = function (
	    /**
	     * 각(단위: RAD)입니다.
	     * - `Type.Number.`
	     */
	    angle) {
	        return resolver.Value.sineFromRadians(angle);
	    };
	    /**
	     * 지정된 플레이어의 슬롯 번호입니다.
	     * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
	     * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
	     */
	    Vector.prototype.slotOf = function (
	    /**
	     * 슬롯 번호 정보를 가져올 플레이어입니다.
	     * - `Type.Player.`
	     */
	    player) {
	        return resolver.Value.slotOf(player);
	    };
	    /**
	     * 지정된 각(단위: 도)의 탄젠트 값입니다.
	     */
	    Vector.prototype.tangentFromDegrees = function (
	    /**
	     * 각(단위: 도)입니다.
	     * - `Type.Number.`
	     */
	    angle) {
	        return resolver.Value.tangentFromDegrees(angle);
	    };
	    /**
	     * 지정된 각(단위: RAD)의 탄젠트 값입니다.
	     */
	    Vector.prototype.tangentFromRadians = function (
	    /**
	     * 각(단위: RAD)입니다.
	     * - `Type.Number.`
	     */
	    angle) {
	        return resolver.Value.tangentFromRadians(angle);
	    };
	    /**
	     * 위를 가리키는 방향 벡터(0, 1, 0)의 약칭입니다.
	     */
	    Vector.prototype.up = function () {
	        return resolver.Value.up();
	    };
	    /**
	     * 지정된 방향 벡터의 대응하는 종축각(단위: 도)입니다.
	     */
	    Vector.prototype.verticalAngleFromDirection = function (
	    /**
	     * 종축각(단위: 도) 정보를
	     * 가져올 방향 벡터입니다.
	     * 벡터는 연산 전에 정규화됩니다.
	     * - `Type.Vector.`
	     */
	    direction) {
	        return resolver.Value.verticalAngleFromDirection(direction);
	    };
	    /**
	     * 지정된 벡터의 X 구성요소입니다.
	     * 일반적으로 왼쪽 방향의 벡터량입니다.
	     */
	    Vector.prototype.xComponentOf = function () {
	        return resolver.Value.xComponentOf(this.vector);
	    };
	    /**
	     * 지정된 벡터의 Y 구성요소입니다.
	     * 일반적으로 왼쪽 방향의 벡터량입니다.
	     */
	    Vector.prototype.yComponentOf = function () {
	        return resolver.Value.yComponentOf(this.vector);
	    };
	    /**
	     * 지정된 벡터의 Z 구성요소입니다.
	     * 일반적으로 왼쪽 방향의 벡터량입니다.
	     */
	    Vector.prototype.zComponentOf = function () {
	        return resolver.Value.zComponentOf(this.vector);
	    };
	    return Vector;
	}());
	exports.default = Vector;
	});

	unwrapExports(vector$2);

	var team$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var Team = /** @class */ (function () {
	    /**
	     * @param team `Type.Team.`
	     */
	    function Team(team) {
	        this.team = team;
	    }
	    /**
	     * 쟁탈 전장에서 지정된 팀의 점수 비율입니다.
	     */
	    Team.prototype.controlModeScoringPercentage = function () {
	        return resolver.Value.controlModeScoringPercentage(this.team);
	    };
	    /**
	     * (팀 또는 경기 내에서) 지정된 영웅이 사용되고 있는지 여부입니다.
	     */
	    Team.prototype.isHeroBeingPlayed = function (
	    /**
	     * 플레이 현황을 확인할 영웅입니다.
	     * - `Type.Hero.`
	     */
	    hero) {
	        return resolver.Value.isHeroBeingPlayed(hero, this.team);
	    };
	    /**
	     * 지정된 팀이 현재 수비 중인지 여부입니다.
	     * 게임 모드가 점령, 호위,
	     * 또는 점령/호위가 아닌 경우
	     * 결과값은 FALSE입니다.
	     */
	    Team.prototype.isTeamOnDefense = function () {
	        return resolver.Value.isTeamOnDefense(this.team);
	    };
	    /**
	     * 지정된 팀이 현재 공격 중인지 여부입니다.
	     * 게임 모드가 점령, 호위,
	     * 또는 점령/호위가 아닌 경우
	     * 결과값은 FALSE입니다.
	     */
	    Team.prototype.isTeamOnOffense = function () {
	        return resolver.Value.isTeamOnOffense(this.team);
	    };
	    /**
	     * 팀 또는 경기 내 사망 플레이어 수입니다.
	     */
	    Team.prototype.numberOfDeadPlayers = function () {
	        return resolver.Value.numberOfDeadPlayers(this.team);
	    };
	    /**
	     * 팀 또는 경기 내에서 지정된 영웅을
	     * 플레이하는 플레이어의 수입니다.
	     */
	    Team.prototype.numberOfHeroes = function (
	    /**
	     * 플레이 현황을 확인할 영웅입니다.
	     * - `Type.Hero.`
	     */
	    hero) {
	        return resolver.Value.numberOfHeroes(hero, this.team);
	    };
	    /**
	     * 팀 또는 경기에서 생존한 플레이어의 수입니다.
	     */
	    Team.prototype.numberOfLivingPlayers = function () {
	        return resolver.Value.numberOfLivingPlayers(this.team);
	    };
	    /**
	     * 팀 또는 경기 내 존재하는 플레이어 수입니다.
	     */
	    Team.prototype.numberOfPlayers = function () {
	        return resolver.Value.numberOfPlayers(this.team);
	    };
	    /**
	     * 팀 또는 경기 내에서 화물 또는
	     * 거점을 확보하려는 플레이어 수입니다.
	     */
	    Team.prototype.numberOfPlayersOnObjective = function () {
	        return resolver.Value.numberOfPlayersOnObjective(this.team);
	    };
	    /**
	     * 지정된 팀의 상대 팀입니다.
	     */
	    Team.prototype.oppositeTeamOf = function () {
	        return resolver.Value.oppositeTeamOf(this.team);
	    };
	    /**
	     * 게임 내 지정된 슬롯을 점유하는 플레이어의 배열입니다.
	     */
	    Team.prototype.playersInSlot = function (
	    /**
	     * 플레이어 정보를 가져올 슬롯 번호입니다.
	     * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
	     * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
	     * - `Type.Number.`
	     */
	    slot) {
	        return resolver.Value.playersInSlot(slot, this.team);
	    };
	    /**
	     * 팀 또는 경기 내에서 지정된 영웅을
	     * 플레이하는 플레이어가 있는 배열입니다.
	     */
	    Team.prototype.playersOnHero = function (
	    /**
	     * 플레이 현황을 확인할 영웅입니다.
	     * - `Type.Hero.`
	     */
	    hero) {
	        return resolver.Value.playersOnHero(hero, this.team);
	    };
	    /**
	     * 지정된 팀의 현재 점수입니다.
	     * 개별 전투 모드에서는 결과값이 0입니다.
	     */
	    Team.prototype.teamScore = function () {
	        return resolver.Value.teamScore(this.team);
	    };
	    /**
	     * 현재 쟁탈 전장에서 점수를 축적하고 있는 팀입니다.
	     * 아무 팀도 점수를 축적하지 못한 경우 결과값은 ALL입니다.
	     */
	    Team.ControlModeScoringTeam = function () {
	        return resolver.Value.controlModeScoringTeam();
	    };
	    /**
	     * 현재 쟁탈 전장에서 점수를 축적하고 있는 팀입니다.
	     * 아무 팀도 점수를 축적하지 못한 경우 결과값은 ALL입니다.
	     */
	    Team.prototype.controlModeScoringTeam = function () {
	        return resolver.Value.controlModeScoringTeam();
	    };
	    return Team;
	}());
	exports.default = Team;
	});

	unwrapExports(team$2);

	var event$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var Event = /** @class */ (function () {
	    /**
	     * @param event `Type.Event.`
	     */
	    function Event(event) {
	        this.event = event;
	    }
	    /**
	     * 이 규칙에 의해 현재 처리되고 있는
	     * 이벤트의 VICTIM이 받는 피해량입니다.
	     */
	    Event.EventDamage = function () {
	        return resolver.Value.eventDamage();
	    };
	    /**
	     * 이 규칙에 의해 현재 처리되고 있는
	     * 이벤트의 VICTIM이 받는 피해량입니다.
	     */
	    Event.prototype.eventDamage = function () {
	        return resolver.Value.eventDamage();
	    };
	    /**
	     * 이벤트로 지정된 이 규칙을 실행 중인 플레이어입니다.
	     * ATTACKER 또는 VICTIM과 동일할 수 있습니다.
	     */
	    Event.EventPlayer = function () {
	        return resolver.Value.eventPlayer();
	    };
	    /**
	     * 이벤트로 지정된 이 규칙을 실행 중인 플레이어입니다.
	     * ATTACKER 또는 VICTIM과 동일할 수 있습니다.
	     */
	    Event.prototype.eventPlayer = function () {
	        return resolver.Value.eventPlayer();
	    };
	    /**
	     * 이 규칙에 의해 현재 처리되고 있는 이벤트에 대한
	     * 피해가 치명타(헤드샷 등)인지 여부입니다.
	     */
	    Event.EventWasCriticalHit = function () {
	        return resolver.Value.eventWasCriticalHit();
	    };
	    /**
	     * 이 규칙에 의해 현재 처리되고 있는 이벤트에 대한
	     * 피해가 치명타(헤드샷 등)인지 여부입니다.
	     */
	    Event.prototype.eventWasCriticalHit = function () {
	        return resolver.Value.eventWasCriticalHit();
	    };
	    return Event;
	}());
	exports.default = Event;
	});

	unwrapExports(event$1);

	var entity$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var Entity = /** @class */ (function () {
	    /**
	     * @param entity `Type.Entity.`
	     */
	    function Entity(entity) {
	        this.entity = entity;
	    }
	    /**
	     * 특정 플레이어, 아이콘 개체, 효과 개체가 아직 존재하는지 여부입니다.
	     * 플레이어가 경기를 나갔는지, 개체가 소멸됐는지 등을 판별할 때 유용합니다.
	     */
	    Entity.prototype.entityExists = function () {
	        return resolver.Value.entityExists(this.entity);
	    };
	    /**
	     * 월드에 개체가 생성되었는지 여부입니다.
	     * 플레이어가 영웅을 선택하지 않은 경우
	     * 결과값은 FALSE 입니다.
	     */
	    Entity.prototype.hasSpawned = function () {
	        return resolver.Value.hasSpawned(this.entity);
	    };
	    return Entity;
	}());
	exports.default = Entity;
	});

	unwrapExports(entity$1);

	var rule = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var Rule = /** @class */ (function () {
	    function Rule(data) {
	        var innerCode = "";
	        innerCode += "rule(\"" + data.description + "\")\n";
	        innerCode += "{\n";
	        innerCode += "\tevent\n";
	        innerCode += "\t{\n";
	        innerCode += "\t\t" + data.event + ";\n";
	        innerCode += "\t}\n\n";
	        if (data.condition.length != 0) {
	            innerCode += "\tconditions\n";
	            innerCode += "\t{\n";
	            for (var _i = 0, _a = data.condition; _i < _a.length; _i++) {
	                var condition = _a[_i];
	                innerCode += "\t\t" + condition + ";\n";
	            }
	            innerCode += "\t}\n\n";
	        }
	        if (data.action.length != 0) {
	            innerCode += "\tactions\n";
	            innerCode += "\t{\n";
	            for (var _b = 0, _c = data.action; _b < _c.length; _b++) {
	                var action = _c[_b];
	                innerCode += "\t\t" + action + ";\n";
	            }
	            innerCode += "\t}\n";
	        }
	        innerCode += "}";
	        Rule.collectedCodes.push(innerCode);
	    }
	    Rule.collectedCodes = [];
	    return Rule;
	}());
	exports.default = Rule;
	});

	unwrapExports(rule);

	var compiler = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ruleCompare = function (left, operatorToken, right) {
	    return left + " " + operatorToken + " " + right;
	};
	});

	unwrapExports(compiler);
	var compiler_1 = compiler.ruleCompare;

	var reformer = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	// @ts-ignore
	var player_1 = tslib_es6.__importDefault(player$1);
	exports.Player = player_1.default;
	// @ts-ignore
	var vector_1 = tslib_es6.__importDefault(vector$2);
	exports.Vector = vector_1.default;
	// @ts-ignore
	var team_1 = tslib_es6.__importDefault(team$2);
	exports.Team = team_1.default;
	// @ts-ignore
	var event_1 = tslib_es6.__importDefault(event$1);
	exports.Event = event_1.default;
	// @ts-ignore
	var entity_1 = tslib_es6.__importDefault(entity$1);
	exports.Entity = entity_1.default;
	var rule_1 = tslib_es6.__importDefault(rule);
	exports.Rule = rule_1.default;
	var Compiler = tslib_es6.__importStar(compiler);
	exports.Compiler = Compiler;
	});

	unwrapExports(reformer);
	var reformer_1 = reformer.Player;
	var reformer_2 = reformer.Vector;
	var reformer_3 = reformer.Team;
	var reformer_4 = reformer.Event;
	var reformer_5 = reformer.Entity;
	var reformer_6 = reformer.Rule;
	var reformer_7 = reformer.Compiler;

	var kor = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var Classes = tslib_es6.__importStar(reformer);
	exports.Classes = Classes;
	tslib_es6.__exportStar(resolver, exports);
	});

	unwrapExports(kor);
	var kor_1 = kor.Classes;

	var heroConstant$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(heroConstant$1);
	var heroConstant_1$1 = heroConstant$1.Default;

	var slotRange$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param num Type Any Number.
	 * Then can see list of available number lists. */
	exports.Default = function (num) { return num; };
	});

	unwrapExports(slotRange$1);
	var slotRange_1$1 = slotRange$1.Default;

	var teamConstant$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(teamConstant$1);
	var teamConstant_1$1 = teamConstant$1.Default;

	var variable$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(variable$1);
	var variable_1$1 = variable$1.Default;

	var eventPlayer$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(eventPlayer$2);
	var eventPlayer_1$2 = eventPlayer$2.Default;

	var number$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Number - A real number constant. Can use
	 * most Number based Value Syntax to provide this value.
	 */
	exports.number = function (
	/**
	 * Number - A real number constant. Can use
	 * most Number based Value Syntax to provide this value.
	 */
	number) {
	    // @ts-ignore
	    return "Number(" + number + ")";
	};
	});

	unwrapExports(number$2);
	var number_1$1 = number$2.number;

	var add$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The sum of two numbers or vectors. This
	 * value will add the two specified values.
	 */
	exports.add = function (
	/**
	 * Value - You can specify any Value Syntax
	 * to define either addend.
	 * - `Type.Add.`
	 */
	value1, 
	/**
	 * Value - The right-hand operand. may be any
	 * value that results in a number or a vector.
	 * - `Type.Add.`
	 */
	value2) {
	    // @ts-ignore
	    return "Add(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(add$2);
	var add_1$1 = add$2.add;

	var angleDifference$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The difference between two angles, after
	 * the angles are wrapped within +/- 180 of
	 * each other, the result is positive if the
	 * second angle is greater than the first angle,
	 * otherwise the result is zero or negative.
	 */
	exports.angleDifference = function (
	/**
	 * Angle - You can specify any Angle Syntax
	 * to define both of the required values.
	 * - `Type.Number.`
	 */
	angle1, 
	/**
	 * Angle - One of the two angles between which
	 * to measure the resulting angle.
	 * - `Type.Number.`
	 */
	angle2) {
	    // @ts-ignore
	    return "Angle Difference(" + angle1 + ", " + angle2 + ")";
	};
	});

	unwrapExports(angleDifference$1);
	var angleDifference_1$1 = angleDifference$1.angleDifference;

	var angleBetweenVectors$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The angle in degrees between two directional
	 * vectors (no normalization required).
	 */
	exports.angleBetweenVectors = function (
	/**
	 * Vector - One of two directional vectors
	 * between which to measure the angle in degrees.
	 * this vector does not need to be pre-normalized.
	 * - `Type.Vector.`
	 */
	vector1, 
	/**
	 * Vector - One of two directional vectors
	 * between which to measure the angle in degrees.
	 * this vector does not need to be pre-normalized.
	 * - `Type.Vector.`
	 */
	vector2) {
	    // @ts-ignore
	    return "Angle Between Vectors(" + vector1 + ", " + vector2 + ")";
	};
	});

	unwrapExports(angleBetweenVectors$1);
	var angleBetweenVectors_1$1 = angleBetweenVectors$1.angleBetweenVectors;

	var altitudeOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The player’s current height in meters above
	 * a surface. Results in a 0 whenever the place
	 * is on a surface.
	 */
	exports.altitudeOf = function (
	/**
	 * Player - You can specify any Player Syntax
	 * to define the array.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Altitude Of(" + player + ")";
	};
	});

	unwrapExports(altitudeOf$1);
	var altitudeOf_1$1 = altitudeOf$1.altitudeOf;

	var countOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The number of elements in the specified array.
	 */
	exports.countOf = function (
	/**
	 * - `Type.Array.`
	 */
	array) {
	    // @ts-ignore
	    return "Count Of(" + array + ")";
	};
	});

	unwrapExports(countOf$1);
	var countOf_1$1 = countOf$1.countOf;

	var arccosineInDegrees$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Arccosine in degrees of the specified value.
	 */
	exports.arccosineInDegrees = function (
	/**
	 * Value - Input value for the function.
	 * - `Type.Number.`
	 */
	value) {
	    // @ts-ignore
	    return "Arccosine In Degrees(" + value + ")";
	};
	});

	unwrapExports(arccosineInDegrees$1);
	var arccosineInDegrees_1$1 = arccosineInDegrees$1.arccosineInDegrees;

	var arccosineInRadians$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Arccosine in radians of the specified value
	 */
	exports.arccosineInRadians = function (
	/**
	 * Value - Input value for the function.
	 * - `Type.Number.`
	 */
	value) {
	    // @ts-ignore
	    return "Arccosine In Radians(" + value + ")";
	};
	});

	unwrapExports(arccosineInRadians$1);
	var arccosineInRadians_1$1 = arccosineInRadians$1.arccosineInRadians;

	var arcsineInDegrees$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Arcsine in degrees of the specified value.
	 */
	exports.arcsineInDegrees = function (
	/**
	 * Value - Input value for the function.
	 * - `Type.Number.`
	 */
	value) {
	    // @ts-ignore
	    return "Arcsine In Degrees(" + value + ")";
	};
	});

	unwrapExports(arcsineInDegrees$1);
	var arcsineInDegrees_1$1 = arcsineInDegrees$1.arcsineInDegrees;

	var arcsineInRadians$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Arcsine in radians of the specified value.
	 */
	exports.arcsineInRadians = function (
	/**
	 * Value - Input value for the function.
	 * - `Type.Number.`
	 */
	value) {
	    // @ts-ignore
	    return "Arcsine In Radians(" + value + ")";
	};
	});

	unwrapExports(arcsineInRadians$1);
	var arcsineInRadians_1$1 = arcsineInRadians$1.arcsineInRadians;

	var arctangentInDegrees$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Arctangent in degrees of the specified numerator
	 * and denominator(often referred to as atan2).
	 */
	exports.arctangentInDegrees = function (
	/**
	 * Numerator - Numerator input for the function.
	 * - `Type.Number.`
	 */
	numerator, 
	/**
	 * Denominator - Denominator input for the function.
	 * - `Type.Number.`
	 */
	denominator) {
	    // @ts-ignore
	    return "Arctangent In Degrees(" + numerator + ", " + denominator + ")";
	};
	});

	unwrapExports(arctangentInDegrees$1);
	var arctangentInDegrees_1$1 = arctangentInDegrees$1.arctangentInDegrees;

	var arctangentInRadians$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Arctangent in radians of the specified numerator
	 * and denominator(often referred to as atan2).
	 */
	exports.arctangentInRadians = function (
	/**
	 * Numerator - Numerator input for the function.
	 * - `Type.Number.`
	 */
	numerator, 
	/**
	 * Denominator - Denominator input for the function.
	 * - `Type.Number.`
	 */
	denominator) {
	    // @ts-ignore
	    return "Arctangent In Radians(" + numerator + ", " + denominator + ")";
	};
	});

	unwrapExports(arctangentInRadians$1);
	var arctangentInRadians_1$1 = arctangentInRadians$1.arctangentInRadians;

	var cosineFromDegrees$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The cosine of a specified angle in degrees.
	 * The cosine of the angle is equal to the
	 * length of the adjacent side divided by the
	 * length of the hypotenuse.
	 */
	exports.cosineFromDegrees = function (
	/**
	 * Angle - Angle in degrees. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	angle) {
	    // @ts-ignore
	    return "Cosine From Degrees(" + angle + ")";
	};
	});

	unwrapExports(cosineFromDegrees$1);
	var cosineFromDegrees_1$1 = cosineFromDegrees$1.cosineFromDegrees;

	var cosineFromRadians$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The cosine of a specified angle in radians.
	 * The cosine of the angle is equal to the
	 * length of the adjacent side divided by the
	 * length of the hypotenuse. A radian is a
	 * unit of angle, equal to an angle at the
	 * center of a circle whose arc is equal in
	 * length to the radius.
	 */
	exports.cosineFromRadians = function (
	/**
	 * Angle - Angle in radians. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	angle) {
	    // @ts-ignore
	    return "Cosine From Radians(" + angle + ")";
	};
	});

	unwrapExports(cosineFromRadians$1);
	var cosineFromRadians_1$1 = cosineFromRadians$1.cosineFromRadians;

	var controlModeScoringPercentage$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The score percentage for the specified team
	 * in the control mode.
	 */
	exports.controlModeScoringPercentage = function (
	/**
	 * Team - You can specify any Team Syntax to
	 * define which team reported when defining this value.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Control Mode Scoring Percentage(" + team + ")";
	};
	});

	unwrapExports(controlModeScoringPercentage$1);
	var controlModeScoringPercentage_1$1 = controlModeScoringPercentage$1.controlModeScoringPercentage;

	var globalVariable$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.globalVariable = function () {
	    // @ts-ignore
	    return "Global Variable";
	};
	});

	unwrapExports(globalVariable$1);
	var globalVariable_1$1 = globalVariable$1.globalVariable;

	var playerVariable$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current value of a player variable,
	 * which is a variable that belongs to a specific player.
	 */
	exports.playerVariable = function (
	/**
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * - `Type.Variable.`
	 */
	variable) {
	    // @ts-ignore
	    return "Player Variable(" + player + ", " + variable + ")";
	};
	});

	unwrapExports(playerVariable$1);
	var playerVariable_1$1 = playerVariable$1.playerVariable;

	var distanceBetween$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The distance between two positions in meters.
	 */
	exports.distanceBetween = function (
	/**
	 * Start Pos - One of the two positions used
	 * in the distance measurement. Most positional
	 * based Value Syntax can be used here.
	 * - `Type.Vector.`
	 */
	startPos, 
	/**
	 * End Pos - One of the two positions used
	 * in the distance measurement. Most positional
	 * based Value Syntax can be used here.
	 * - `Type.Vector.`
	 */
	endPos) {
	    // @ts-ignore
	    return "Distance Between(" + startPos + ", " + endPos + ")";
	};
	});

	unwrapExports(distanceBetween$1);
	var distanceBetween_1$1 = distanceBetween$1.distanceBetween;

	var divide$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The ratio of two numbers or vectors. A vector
	 * divided by a number will yield a scaled
	 * vector. Division by zero results in zero.
	 */
	exports.divide = function (
	/**
	 * Value - The left-hand operand, may be any
	 * value that results in a number or a vector.
	 * Any Value Syntax may be used here.
	 * - `Type.Divide.`
	 */
	value1, 
	/**
	 * Value - The right-hand operand, may be any
	 * value that results in a number or a vector.
	 * Any Value Syntax may be used here.
	 * - `Type.Divide.`
	 */
	value2) {
	    // @ts-ignore
	    return "Divide(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(divide$2);
	var divide_1$1 = divide$2.divide;

	var eventDamage$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The amount of damage received by the victim
	 * for the event currently being processed by this rule.
	 */
	exports.eventDamage = function () {
	    // @ts-ignore
	    return "Event Damage";
	};
	});

	unwrapExports(eventDamage$1);
	var eventDamage_1$1 = eventDamage$1.eventDamage;

	var eyePosition$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The position of a player's first person
	 * view (used for aiming)
	 */
	exports.eyePosition = function (
	/**
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Eye Position(" + player + ")";
	};
	});

	unwrapExports(eyePosition$1);
	var eyePosition_1$1 = eyePosition$1.eyePosition;

	var health$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current health of a player including
	 * armor and shields.
	 */
	exports.health = function (
	/**
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Health(" + player + ")";
	};
	});

	unwrapExports(health$1);
	var health_1$1 = health$1.health;

	var horizontalAngleFromDirection$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The horizontal angle in degrees corresponding
	 * to the specified direction vector.
	 */
	exports.horizontalAngleFromDirection = function (
	/**
	 * Direction - The direction vector from which
	 * to acquire a horizontal angle in degrees.
	 * The vector is unitized before calculation
	 * begins. Can use most Vector based Value
	 * Syntax to retrieve this value.
	 * - `Type.Vector.`
	 */
	direction) {
	    // @ts-ignore
	    return "Horizontal Angle From Direction(" + direction + ")";
	};
	});

	unwrapExports(horizontalAngleFromDirection$1);
	var horizontalAngleFromDirection_1$1 = horizontalAngleFromDirection$1.horizontalAngleFromDirection;

	var horizontalAngleTowards$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The horizontal angle in degrees from a player’s
	 * current forward direction to the specified
	 * position. The result is positive if the
	 * position is on the player’s left, otherwise
	 * the result is zero or negative.
	 */
	exports.horizontalAngleTowards = function (
	/**
	 * Player - The player whose current facing
	 * angle begins. Can use most player based
	 * Value Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Position - The player whose current facing
	 * the angle begins. Can use most Player based
	 * Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	position) {
	    // @ts-ignore
	    return "Horizontal Angle Towards(" + player + ", " + position + ")";
	};
	});

	unwrapExports(horizontalAngleTowards$1);
	var horizontalAngleTowards_1$1 = horizontalAngleTowards$1.horizontalAngleTowards;

	var horizontalFacingAngleOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The directional angle in degrees of a player’s
	 * current facing relative to the world. This
	 * value increases as the player rotates to
	 * the left (wrapping around at +/- 180).
	 */
	exports.horizontalFacingAngleOf = function (
	/**
	 * Player - The player whose facing direction
	 * to acquire. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Horizontal Facing Angle Of(" + player + ")";
	};
	});

	unwrapExports(horizontalFacingAngleOf$1);
	var horizontalFacingAngleOf_1$1 = horizontalFacingAngleOf$1.horizontalFacingAngleOf;

	var horizontalSpeedOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current horizontal speed of a player
	 * in meters per second. This measurement excludes
	 * all vertical motion.
	 */
	exports.horizontalSpeedOf = function (
	/**
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Horizontal Speed Of(" + player + ")";
	};
	});

	unwrapExports(horizontalSpeedOf$1);
	var horizontalSpeedOf_1$1 = horizontalSpeedOf$1.horizontalSpeedOf;

	var indexOfArrayValue$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The index of a value within an array or
	 * -1 if no such value can be found.
	 */
	exports.indexOfArrayValue = function (
	/**
	 * Array - The array in which to search for
	 * the specified value. Can use most Array
	 * based Value Syntax to retrieve this value.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * Value - The value for which to search. Can
	 * use most Number based Value Syntax to retrive this value.
	 * - `Type.Value.`
	 */
	value) {
	    // @ts-ignore
	    return "Index Of Array Value(" + array + ", " + value + ")";
	};
	});

	unwrapExports(indexOfArrayValue$1);
	var indexOfArrayValue_1$1 = indexOfArrayValue$1.indexOfArrayValue;

	var lastDamageModificationId$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * An id representing the most recent start
	 * damage modification action that was executed
	 * by the event player (or executed at the global level).
	 */
	exports.lastDamageModificationId = function () {
	    // @ts-ignore
	    return "Last Damage Modification Id";
	};
	});

	unwrapExports(lastDamageModificationId$1);
	var lastDamageModificationId_1$1 = lastDamageModificationId$1.lastDamageModificationId;

	var lastDamageOverTimeId$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * An ID representing the most recent damage
	 * over time action that was executed by the
	 * event player (or executed at the global level).
	 */
	exports.lastDamageOverTimeId = function () {
	    // @ts-ignore
	    return "Last Damage Over Time Id";
	};
	});

	unwrapExports(lastDamageOverTimeId$1);
	var lastDamageOverTimeId_1$1 = lastDamageOverTimeId$1.lastDamageOverTimeId;

	var lastHealOverTimeId$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * An ID representing the most recent heal
	 * over time action that was executed by the
	 * event player (or executed at the global level).
	 */
	exports.lastHealOverTimeId = function () {
	    // @ts-ignore
	    return "Last Heal Over Time Id";
	};
	});

	unwrapExports(lastHealOverTimeId$1);
	var lastHealOverTimeId_1$1 = lastHealOverTimeId$1.lastHealOverTimeId;

	var lastTextId$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A reference to the last piece of text created
	 * by the event player (or created at the global
	 * level) via the create HUD text or create
	 * in-world text action.
	 */
	exports.lastTextId = function () {
	    // @ts-ignore
	    return "Last Text Id";
	};
	});

	unwrapExports(lastTextId$1);
	var lastTextId_1$1 = lastTextId$1.lastTextId;

	var matchRound$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current round of the match, counting
	 * up from 1. This will return a numerical value
	 */
	exports.matchRound = function () {
	    // @ts-ignore
	    return "Match Round";
	};
	});

	unwrapExports(matchRound$1);
	var matchRound_1$1 = matchRound$1.matchRound;

	var max$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The greater of the two numbers. This will
	 * return a numerical value of two number values compared.
	 */
	exports.max = function (
	/**
	 * - `Type.Number.`
	 */
	value1, 
	/**
	 * - `Type.Number.`
	 */
	value2) {
	    // @ts-ignore
	    return "Max(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(max$1);
	var max_1$1 = max$1.max;

	var maxHealth$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The max health of a player, including armor and shields.
	 */
	exports.maxHealth = function (
	/**
	 * Player - The player whose max health to
	 * compare. Can use any Player based Value
	 * syntax to provide with.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Max Health(" + player + ")";
	};
	});

	unwrapExports(maxHealth$1);
	var maxHealth_1$1 = maxHealth$1.maxHealth;

	var min$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The lesser of the two numbers. This will
	 * return a numerical value of two number values compared.
	 */
	exports.min = function (
	/**
	 * Value - The left-hand operand. May be any
	 * value that results in a number. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	value1, 
	/**
	 * Value - The right-hand operand. May be any
	 * value that results in a number. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	value2) {
	    // @ts-ignore
	    return "Min(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(min$1);
	var min_1$1 = min$1.min;

	var modulo$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The remainder of the left-hand operand divided
	 * by the right-hand operand. Any number modulo
	 * zero will result in zero. This will return
	 * a numerical value of two number values compared.
	 * For example 7 divided by 2 will result in
	 * 1 for the Modulo.
	 */
	exports.modulo = function (
	/**
	 * - `Type.Number.`
	 */
	value1, 
	/**
	 * - `Type.Number.`
	 */
	value2) {
	    // @ts-ignore
	    return "Modulo(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(modulo$1);
	var modulo_1$1 = modulo$1.modulo;

	var normalizedHealth$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current health of a player. including
	 * armor and shields, normalized between 0
	 * and 1. (for example, 0 is no health, 0.5
	 * is half health, 1 is full health, etc.)
	 */
	exports.normalizedHealth = function (
	/**
	 * Player - The player whose normalized health to acquire.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Normalized Health(" + player + ")";
	};
	});

	unwrapExports(normalizedHealth$1);
	var normalizedHealth_1$1 = normalizedHealth$1.normalizedHealth;

	var numberOfDeadPlayers$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The number of dead players on a team or in the match.
	 */
	exports.numberOfDeadPlayers = function (
	/**
	 * Team - The team or teams on which to count
	 * players. Can use most Team based Value Syntax
	 * to provide this value.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Number Of Dead Players(" + team + ")";
	};
	});

	unwrapExports(numberOfDeadPlayers$1);
	var numberOfDeadPlayers_1$1 = numberOfDeadPlayers$1.numberOfDeadPlayers;

	var numberOfDeaths$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The number of deaths a specific player has
	 * earned. This value only accumulates while
	 * a game is in progress.
	 */
	exports.numberOfDeaths = function (
	/**
	 * Player - The player whose death count to
	 * acquire. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Number Of Deaths(" + player + ")";
	};
	});

	unwrapExports(numberOfDeaths$1);
	var numberOfDeaths_1$1 = numberOfDeaths$1.numberOfDeaths;

	var numberOfEliminations$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The number of eliminations a specific player
	 * has earned. This value only accumulates
	 * while a game is in progress.
	 */
	exports.numberOfEliminations = function (
	/**
	 * Player - The player whose elimination count
	 * to acquire. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Number Of Eliminations(" + player + ")";
	};
	});

	unwrapExports(numberOfEliminations$1);
	var numberOfEliminations_1$1 = numberOfEliminations$1.numberOfEliminations;

	var numberOfFinalBlows$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The number of final blows a specific player
	 * has earned. This value only accumulates
	 * while a game is in progress.
	 */
	exports.numberOfFinalBlows = function (
	/**
	 * Player - The player whose final blow count
	 * to acquire. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Number Of Final Blows(" + player + ")";
	};
	});

	unwrapExports(numberOfFinalBlows$1);
	var numberOfFinalBlows_1$1 = numberOfFinalBlows$1.numberOfFinalBlows;

	var numberOfHeroes$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The number of players playing a specific
	 * hero on a team or in the match.
	 */
	exports.numberOfHeroes = function (
	/**
	 * Hero - The hero to check for play. Can use
	 * most Hero based Value Syntax to provide this value.
	 * - `Type.Hero.`
	 */
	hero, 
	/**
	 * Team - The team or teams on which to check
	 * for the hero being played. Can use most
	 * Team based Value Syntax to provide this value.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Number Of Heroes(" + hero + ", " + team + ")";
	};
	});

	unwrapExports(numberOfHeroes$1);
	var numberOfHeroes_1$1 = numberOfHeroes$1.numberOfHeroes;

	var numberOfLivingPlayers$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The number of living players on a team or in the match.
	 */
	exports.numberOfLivingPlayers = function (
	/**
	 * Team - The team or teams on which to count
	 * players. Can use most Team based Value Syntax
	 * to provide this value.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Number Of Living Players(" + team + ")";
	};
	});

	unwrapExports(numberOfLivingPlayers$1);
	var numberOfLivingPlayers_1$1 = numberOfLivingPlayers$1.numberOfLivingPlayers;

	var numberOfPlayers$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The number of players on a team or in the match.
	 */
	exports.numberOfPlayers = function (
	/**
	 * Team - The team or teams on which to count
	 * players. Can use most Team based Value Syntax
	 * to provide this value.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Number Of Players(" + team + ")";
	};
	});

	unwrapExports(numberOfPlayers$1);
	var numberOfPlayers_1$1 = numberOfPlayers$1.numberOfPlayers;

	var numberOfPlayersOnObjective$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The number of players occupying a payload
	 * or a control point (either on a team or in the match).
	 */
	exports.numberOfPlayersOnObjective = function (
	/**
	 * Team - The team or teams on which to count
	 * players. Can use most Team based Value Syntax
	 * to provide this value.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Number Of Players On Objective(" + team + ")";
	};
	});

	unwrapExports(numberOfPlayersOnObjective$1);
	var numberOfPlayersOnObjective_1$1 = numberOfPlayersOnObjective$1.numberOfPlayersOnObjective;

	var objectiveIndex$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The control point, payload checkpoint, or
	 * payload destination currently active (either
	 * 0, 1, or 2). Valid in Assault, Assault/Escort
	 * (Hybrid), Escort, and Control.
	 */
	exports.objectiveIndex = function () {
	    // @ts-ignore
	    return "Objective Index";
	};
	});

	unwrapExports(objectiveIndex$1);
	var objectiveIndex_1$1 = objectiveIndex$1.objectiveIndex;

	var payloadProgressPercentage$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current progress towards the destination
	 * for the active payload (expressed as a percentage).
	 */
	exports.payloadProgressPercentage = function () {
	    // @ts-ignore
	    return "Payload Progress Percentage";
	};
	});

	unwrapExports(payloadProgressPercentage$1);
	var payloadProgressPercentage_1$1 = payloadProgressPercentage$1.payloadProgressPercentage;

	var pointCapturePercentage$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current progress towards capture for
	 * the active control point (expressed as a percentage).
	 */
	exports.pointCapturePercentage = function () {
	    // @ts-ignore
	    return "Point Capture Percentage";
	};
	});

	unwrapExports(pointCapturePercentage$1);
	var pointCapturePercentage_1$1 = pointCapturePercentage$1.pointCapturePercentage;

	var raiseToPower$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The left-hand operand raised to the power
	 * of the right-hand operand. For example 2 ^ 3 = 8
	 */
	exports.raiseToPower = function (
	/**
	 * Value - The left-hand operand. May be any
	 * value that results in a number. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	value1, 
	/**
	 * Value - The right-hand operand. May be any
	 * value that results in a number. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	value2) {
	    // @ts-ignore
	    return "Raise To Power(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(raiseToPower$1);
	var raiseToPower_1$1 = raiseToPower$1.raiseToPower;

	var randomInteger$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A random integer between the specified min
	 * and max, inclusive.
	 */
	exports.randomInteger = function (
	/**
	 * MIN - The smallest integer allowed. If a
	 * real number is provided to this input, it
	 * is rounded to the nearest integer. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	min, 
	/**
	 * MAX - The largest integer allowed. If a
	 * real number is provided to this input, it
	 * is rounded to the nearest integer. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	max) {
	    // @ts-ignore
	    return "Random Integer(" + min + ", " + max + ")";
	};
	});

	unwrapExports(randomInteger$1);
	var randomInteger_1$1 = randomInteger$1.randomInteger;

	var randomReal$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A random real number between the specified min and max.
	 */
	exports.randomReal = function (
	/**
	 * MIN - The smallest real number allowed.
	 * Can use most Number based Value Syntax to
	 * provide this value.
	 * - `Type.Number.`
	 */
	min, 
	/**
	 * MAX - The largest real number allowed. Can
	 * use most Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	max) {
	    // @ts-ignore
	    return "Random Real(" + min + ", " + max + ")";
	};
	});

	unwrapExports(randomReal$1);
	var randomReal_1$1 = randomReal$1.randomReal;

	var roundToInteger$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The integer to which the specified value rounds.
	 */
	exports.roundToInteger = function (
	/**
	 * Value - The real number to round. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	value, 
	/**
	 * Rounding Type - Determines the direction
	 * in which the value will be rounded. You
	 * can round up, down, or to the nearest integer.
	 * - `Type.Rounding.`
	 */
	roundingType) {
	    // @ts-ignore
	    return "Round To Integer(" + value + ", " + roundingType + ")";
	};
	});

	unwrapExports(roundToInteger$1);
	var roundToInteger_1$1 = roundToInteger$1.roundToInteger;

	var scoreOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current score of a player. Results in
	 * 0 if the game mode is not free-for-all.
	 */
	exports.scoreOf = function (
	/**
	 * Player - The player whose score to acquire.
	 * Can use most Player based Value Syntax to
	 * provide this value.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Score Of(" + player + ")";
	};
	});

	unwrapExports(scoreOf$1);
	var scoreOf_1$1 = scoreOf$1.scoreOf;

	var sineFromDegrees$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sine of the specified angle in degrees.
	 * The sine is the ratio of the length of the
	 * side that is opposite  that angle to the
	 * length of the longest side of the triangle
	 * (the hypotenuse).
	 */
	exports.sineFromDegrees = function (
	/**
	 * Angle - Angle in degrees. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	angle) {
	    // @ts-ignore
	    return "Sine From Degrees(" + angle + ")";
	};
	});

	unwrapExports(sineFromDegrees$1);
	var sineFromDegrees_1$1 = sineFromDegrees$1.sineFromDegrees;

	var sineFromRadians$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sine of the specified angle in radians.
	 * The sine is the ratio of the length of the
	 * side that is opposite  that angle to the
	 * length of the longest side of the triangle
	 * (the hypotenuse). A radian is a unit of
	 * angle, equal to an angle at the center of
	 * a circle whose arc is equal in length to the radius.
	 */
	exports.sineFromRadians = function (
	/**
	 * Angle - Angle in radians. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	angle) {
	    // @ts-ignore
	    return "Sine From Radians(" + angle + ")";
	};
	});

	unwrapExports(sineFromRadians$1);
	var sineFromRadians_1$1 = sineFromRadians$1.sineFromRadians;

	var slotOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The slot number of the specified player.
	 * In team games, each team has slots 0 through
	 * 5. In free-for-all games, slots are numbers 0 through 11.
	 */
	exports.slotOf = function (
	/**
	 * Player - The player whose slot number to
	 * acquire. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Slot Of(" + player + ")";
	};
	});

	unwrapExports(slotOf$1);
	var slotOf_1$1 = slotOf$1.slotOf;

	var speedOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current speed of a player in meters per second.
	 */
	exports.speedOf = function (
	/**
	 * Player - The player whose velocity to acquire.
	 * Can use most Player based Value Syntax to
	 * provide this value.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Speed Of(" + player + ")";
	};
	});

	unwrapExports(speedOf$1);
	var speedOf_1$1 = speedOf$1.speedOf;

	var speedOfInDirection$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current speed of a player in a specific
	 * direction in meters per second.
	 */
	exports.speedOfInDirection = function (
	/**
	 * Player - The player whose velocity to acquire.
	 * Can use most Player based Value Syntax to
	 * provide this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Direction - The direction of travel in which
	 * to measure the player’s speed. Can use most
	 * Vector based Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	direction) {
	    // @ts-ignore
	    return "Speed Of In Direction(" + player + ", " + direction + ")";
	};
	});

	unwrapExports(speedOfInDirection$1);
	var speedOfInDirection_1$1 = speedOfInDirection$1.speedOfInDirection;

	var squareRoot$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The square root of the specified value.
	 * For example the square root of 9 is 3.
	 */
	exports.squareRoot = function (
	/**
	 * Value - The real number value whose square
	 * root will be computed. Negative values result
	 * in zero. Can use most Number based Value
	 * Syntax to provide this value.
	 * - `Type.Number.`
	 */
	value) {
	    // @ts-ignore
	    return "Square Root(" + value + ")";
	};
	});

	unwrapExports(squareRoot$1);
	var squareRoot_1$1 = squareRoot$1.squareRoot;

	var subtract$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The difference between two numbers or vectors.
	 */
	exports.subtract = function (
	/**
	 * Value - The left-hand operand. May be any
	 * value that results in a number or a vector.
	 * Can use most Number based Value Syntax to
	 * provide this value.
	 * - `Type.Subtract.`
	 */
	value1, 
	/**
	 * Value - The right-hand operand. May be any
	 * value that results in a number or a vector.
	 * Can use most Number based Value Syntax to
	 * provide this value.
	 * - `Type.Subtract.`
	 */
	value2) {
	    // @ts-ignore
	    return "Subtract(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(subtract$2);
	var subtract_1$1 = subtract$2.subtract;

	var tangentFromDegrees$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Tangent of the specified angle in degrees.
	 */
	exports.tangentFromDegrees = function (
	/**
	 * Angle - Angle in degrees. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	angle) {
	    // @ts-ignore
	    return "Tangent From Degrees(" + angle + ")";
	};
	});

	unwrapExports(tangentFromDegrees$1);
	var tangentFromDegrees_1$1 = tangentFromDegrees$1.tangentFromDegrees;

	var tangentFromRadians$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Tangent of the specified angle in radians.
	 */
	exports.tangentFromRadians = function (
	/**
	 * Angle - Angle in radians. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	angle) {
	    // @ts-ignore
	    return "Tangent From Radians(" + angle + ")";
	};
	});

	unwrapExports(tangentFromRadians$1);
	var tangentFromRadians_1$1 = tangentFromRadians$1.tangentFromRadians;

	var teamScore$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current score for the specified team.
	 * Results in a 0 in free-for-all game modes.
	 */
	exports.teamScore = function (
	/**
	 * Team - The team whose score to acquire.
	 * Can use most Team based Value Syntax to
	 * provide this value.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Team Score(" + team + ")";
	};
	});

	unwrapExports(teamScore$1);
	var teamScore_1$1 = teamScore$1.teamScore;

	var ultimateChargePercent$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current ultimate ability charge percentage of a player.
	 */
	exports.ultimateChargePercent = function (
	/**
	 * Player - The player whose ultimate charge
	 * percentage to acquire. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Ultimate Charge Percent(" + player + ")";
	};
	});

	unwrapExports(ultimateChargePercent$1);
	var ultimateChargePercent_1$1 = ultimateChargePercent$1.ultimateChargePercent;

	var verticalAngleFromDirection$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The vertical angle in degrees corresponding
	 * to the specified direction vector.
	 */
	exports.verticalAngleFromDirection = function (
	/**
	 * Direction - The direction vector from which
	 * to acquire a vertical angle in degrees.
	 * The vector is unitized before calculations
	 * begins. Can use most Vector based Value
	 * Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	direction) {
	    // @ts-ignore
	    return "Vertical Angle From Direction(" + direction + ")";
	};
	});

	unwrapExports(verticalAngleFromDirection$1);
	var verticalAngleFromDirection_1$1 = verticalAngleFromDirection$1.verticalAngleFromDirection;

	var verticalAngleTowards$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The vertical angle in degrees from a player’s
	 * current forward direction to the specified
	 * position. The result is positive if the
	 * position is below the player. Otherwise,
	 * the result is zero or negative.
	 */
	exports.verticalAngleTowards = function (
	/**
	 * Position - The direction vector from which
	 * to acquire a vertical angle in degrees.
	 * The vector is unitized before calculations
	 * begins. Can use most Vector based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Position - The player whose current facing
	 * the angle begins. Can use most Player based
	 * Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	position) {
	    // @ts-ignore
	    return "Vertical Angle Towards(" + player + ", " + position + ")";
	};
	});

	unwrapExports(verticalAngleTowards$1);
	var verticalAngleTowards_1$1 = verticalAngleTowards$1.verticalAngleTowards;

	var verticalFacingAngleOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The vertical angle in degrees, of a player’s
	 * current facing relative to the world. This
	 * value increases as the player looks down.
	 */
	exports.verticalFacingAngleOf = function (
	/**
	 * Player - The player whose vertical facing
	 * angle to acquire. Can use most Player based
	 * Value Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Vertical Facing Angle Of(" + player + ")";
	};
	});

	unwrapExports(verticalFacingAngleOf$1);
	var verticalFacingAngleOf_1$1 = verticalFacingAngleOf$1.verticalFacingAngleOf;

	var verticalSpeedOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current vertical speed of a player in
	 * meters per second. This measurement excludes
	 * all horizontal motion, including motion
	 * while traveling up and down slopes.
	 */
	exports.verticalSpeedOf = function (
	/**
	 * Player - The player whose vertical speed
	 * to acquire. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Vertical Speed Of(" + player + ")";
	};
	});

	unwrapExports(verticalSpeedOf$1);
	var verticalSpeedOf_1$1 = verticalSpeedOf$1.verticalSpeedOf;

	var serverLoad$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Provides a percentage representing the cpu
	 * load of the current game instance. as this
	 * number approaches or exceeds 100, It becomes
	 * increasingly likely that the instance will
	 * be shut down because it is consuming too many resources.
	 */
	exports.serverLoad = function () {
	    // @ts-ignore
	    return "Server Load";
	};
	});

	unwrapExports(serverLoad$1);
	var serverLoad_1$1 = serverLoad$1.serverLoad;

	var serverLoadAverage$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Provides a percentage representing the average
	 * cpu load of the current game instance over
	 * the last two seconds. as this number approaches
	 * or exceeds 100, It becomes increasingly
	 * likely that the instance will be shut down
	 * because it is consuming too many resources.
	 */
	exports.serverLoadAverage = function () {
	    // @ts-ignore
	    return "Server Load Average";
	};
	});

	unwrapExports(serverLoadAverage$1);
	var serverLoadAverage_1$1 = serverLoadAverage$1.serverLoadAverage;

	var serverLoadPeak$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Provides a percentage representing the highest
	 * cpu load of the current game instance over
	 * the last two seconds. as this number approaches
	 * or exceeds 100, It becomes increasingly
	 * likely that the instance will be shut down
	 * because it is consuming too many resources.
	 */
	exports.serverLoadPeak = function () {
	    // @ts-ignore
	    return "Server Load Peak";
	};
	});

	unwrapExports(serverLoadPeak$1);
	var serverLoadPeak_1$1 = serverLoadPeak$1.serverLoadPeak;

	var number$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(number$2, exports);
	tslib_es6.__exportStar(add$2, exports);
	tslib_es6.__exportStar(angleDifference$1, exports);
	tslib_es6.__exportStar(angleBetweenVectors$1, exports);
	tslib_es6.__exportStar(altitudeOf$1, exports);
	tslib_es6.__exportStar(countOf$1, exports);
	tslib_es6.__exportStar(arccosineInDegrees$1, exports);
	tslib_es6.__exportStar(arccosineInRadians$1, exports);
	tslib_es6.__exportStar(arcsineInDegrees$1, exports);
	tslib_es6.__exportStar(arcsineInRadians$1, exports);
	tslib_es6.__exportStar(arctangentInDegrees$1, exports);
	tslib_es6.__exportStar(arctangentInRadians$1, exports);
	tslib_es6.__exportStar(cosineFromDegrees$1, exports);
	tslib_es6.__exportStar(cosineFromRadians$1, exports);
	tslib_es6.__exportStar(controlModeScoringPercentage$1, exports);
	tslib_es6.__exportStar(globalVariable$1, exports);
	tslib_es6.__exportStar(playerVariable$1, exports);
	tslib_es6.__exportStar(distanceBetween$1, exports);
	tslib_es6.__exportStar(divide$2, exports);
	tslib_es6.__exportStar(eventDamage$1, exports);
	tslib_es6.__exportStar(eyePosition$1, exports);
	tslib_es6.__exportStar(health$1, exports);
	tslib_es6.__exportStar(horizontalAngleFromDirection$1, exports);
	tslib_es6.__exportStar(horizontalAngleTowards$1, exports);
	tslib_es6.__exportStar(horizontalFacingAngleOf$1, exports);
	tslib_es6.__exportStar(horizontalSpeedOf$1, exports);
	tslib_es6.__exportStar(indexOfArrayValue$1, exports);
	tslib_es6.__exportStar(lastDamageModificationId$1, exports);
	tslib_es6.__exportStar(lastDamageOverTimeId$1, exports);
	tslib_es6.__exportStar(lastHealOverTimeId$1, exports);
	tslib_es6.__exportStar(lastTextId$1, exports);
	tslib_es6.__exportStar(matchRound$1, exports);
	tslib_es6.__exportStar(max$1, exports);
	tslib_es6.__exportStar(maxHealth$1, exports);
	tslib_es6.__exportStar(min$1, exports);
	tslib_es6.__exportStar(modulo$1, exports);
	tslib_es6.__exportStar(normalizedHealth$1, exports);
	tslib_es6.__exportStar(numberOfDeadPlayers$1, exports);
	tslib_es6.__exportStar(numberOfDeaths$1, exports);
	tslib_es6.__exportStar(numberOfEliminations$1, exports);
	tslib_es6.__exportStar(numberOfFinalBlows$1, exports);
	tslib_es6.__exportStar(numberOfHeroes$1, exports);
	tslib_es6.__exportStar(numberOfLivingPlayers$1, exports);
	tslib_es6.__exportStar(numberOfPlayers$1, exports);
	tslib_es6.__exportStar(numberOfPlayersOnObjective$1, exports);
	tslib_es6.__exportStar(objectiveIndex$1, exports);
	tslib_es6.__exportStar(payloadProgressPercentage$1, exports);
	tslib_es6.__exportStar(pointCapturePercentage$1, exports);
	tslib_es6.__exportStar(raiseToPower$1, exports);
	tslib_es6.__exportStar(randomInteger$1, exports);
	tslib_es6.__exportStar(randomReal$1, exports);
	tslib_es6.__exportStar(roundToInteger$1, exports);
	tslib_es6.__exportStar(scoreOf$1, exports);
	tslib_es6.__exportStar(sineFromDegrees$1, exports);
	tslib_es6.__exportStar(sineFromRadians$1, exports);
	tslib_es6.__exportStar(slotOf$1, exports);
	tslib_es6.__exportStar(speedOf$1, exports);
	tslib_es6.__exportStar(speedOfInDirection$1, exports);
	tslib_es6.__exportStar(squareRoot$1, exports);
	tslib_es6.__exportStar(subtract$2, exports);
	tslib_es6.__exportStar(tangentFromDegrees$1, exports);
	tslib_es6.__exportStar(tangentFromRadians$1, exports);
	tslib_es6.__exportStar(teamScore$1, exports);
	tslib_es6.__exportStar(ultimateChargePercent$1, exports);
	tslib_es6.__exportStar(verticalAngleFromDirection$1, exports);
	tslib_es6.__exportStar(verticalAngleTowards$1, exports);
	tslib_es6.__exportStar(verticalFacingAngleOf$1, exports);
	tslib_es6.__exportStar(verticalSpeedOf$1, exports);
	tslib_es6.__exportStar(serverLoad$1, exports);
	tslib_es6.__exportStar(serverLoadAverage$1, exports);
	tslib_es6.__exportStar(serverLoadPeak$1, exports);
	});

	unwrapExports(number$3);

	var vector$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A vector composed of three real numbers
	 * (X, Y, Z) where X is left, Y is Up, and
	 * Z is forward. Vectors are used for position,
	 * direction, and velocity.
	 */
	exports.vector = function (
	/**
	 * X - The X value of the Vector. Can use most
	 * Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	x, 
	/**
	 * Y - The Y value of the vector. Can use most
	 * Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	y, 
	/**
	 * Z - The Z value of the Vector. Can use most
	 * Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	z) {
	    // @ts-ignore
	    return "Vector(" + x + ", " + y + ", " + z + ")";
	};
	});

	unwrapExports(vector$3);
	var vector_1$1 = vector$3.vector;

	var localVectorOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The vector in local coordinates corresponding
	 * to the provided vector in world coordinates.
	 */
	exports.localVectorOf = function (
	/**
	 * World Vector - The vector in world coordinates
	 * that will be converted to local coordinates.
	 * Can use most Vector based Value Syntax to
	 * provide this data.
	 * - `Type.Vector.`
	 */
	worldVector, 
	/**
	 * Local vector - The vector in local coordinates
	 * that will be converted to world coordinates.
	 * Can use most Vector based Value Syntax to
	 * provide this value.
	 * - `Type.Player.`
	 */
	relativePlayer, 
	/**
	 * Relative Player - The player to whom the
	 * local vector is relative. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Transformation.`
	 */
	transformation) {
	    // @ts-ignore
	    return "Local Vector Of(" + worldVector + ", " + relativePlayer + ", " + transformation + ")";
	};
	});

	unwrapExports(localVectorOf$1);
	var localVectorOf_1$1 = localVectorOf$1.localVectorOf;

	var worldVectorOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The vector in the world coordinates corresponding
	 * to the provided vector in local coordinates.
	 */
	exports.worldVectorOf = function (
	/**
	 * Local vector - Specifies whether the vector
	 * should receive a rotation and a translation
	 * (usually applied to positions) or only a
	 * rotation (usually applied to directions
	 * and velocities). Can select rotation or
	 * rotation and translation.
	 * - `Type.Vector.`
	 */
	localVector, 
	/**
	 * Local vector - The vector in local coordinates
	 * that will be converted to world coordinates.
	 * Can use most Vector based Value Syntax to
	 * provide this value.
	 * - `Type.Player.`
	 */
	relativePlayer, 
	/**
	 * Relative Player - The player to whom the
	 * local vector is relative. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Transformation.`
	 */
	transformation) {
	    // @ts-ignore
	    return "World Vector Of(" + localVector + ", " + relativePlayer + ", " + transformation + ")";
	};
	});

	unwrapExports(worldVectorOf$1);
	var worldVectorOf_1$1 = worldVectorOf$1.worldVectorOf;

	var vectorTowards$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The displacement vector from one position to another.
	 */
	exports.vectorTowards = function (
	/**
	 * Start Pos - The start position for the line
	 * of sight check. Most positional based Value
	 * Syntax can be used here.
	 * - `Type.Vector.`
	 */
	startPos, 
	/**
	 * End Pos - The end position for the line
	 * of sight check. Most positional based Value
	 * Syntax can be used here.
	 * - `Type.Vector.`
	 */
	endPos) {
	    // @ts-ignore
	    return "Vector Towards(" + startPos + ", " + endPos + ")";
	};
	});

	unwrapExports(vectorTowards$1);
	var vectorTowards_1$1 = vectorTowards$1.vectorTowards;

	var backward$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Shorthand for the direction vector(0, 0,
	 * -1) which points backwards.
	 */
	exports.backward = function () {
	    // @ts-ignore
	    return "Backward";
	};
	});

	unwrapExports(backward$1);
	var backward_1$1 = backward$1.backward;

	var crossProduct$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The cross product of the specified values.
	 */
	exports.crossProduct = function (
	/**
	 * Value - You must specify the first Value
	 * Syntax to compare to the second.
	 * - `Type.Vector.`
	 */
	value1, 
	/**
	 * Value - You must specify the first Value
	 * Syntax to compare to the second.
	 * - `Type.Vector.`
	 */
	value2) {
	    // @ts-ignore
	    return "Cross Product(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(crossProduct$1);
	var crossProduct_1$1 = crossProduct$1.crossProduct;

	var directionFromAngles$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The unit-length direction vector corresponding
	 * to the specified angles.
	 */
	exports.directionFromAngles = function (
	/**
	 * Horizontal Angle - The horizontal angle
	 * in degrees used to construct the resulting
	 * vector. Most angle based Value Syntax can be used here.
	 * - `Type.Number.`
	 */
	horizontalAngle, 
	/**
	 * Vertical Angle - The vertical angle in degrees
	 * used to construct the resulting vector.
	 * Most angle based Value Syntax can be used here.
	 * - `Type.Number.`
	 */
	verticalAngle) {
	    // @ts-ignore
	    return "Direction From Angles(" + horizontalAngle + ", " + verticalAngle + ")";
	};
	});

	unwrapExports(directionFromAngles$1);
	var directionFromAngles_1$1 = directionFromAngles$1.directionFromAngles;

	var directionTowards$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The unit-length direction vector from position to another.
	 */
	exports.directionTowards = function (
	/**
	 * Start Pos - The position from which the
	 * resulting direction vector will point. Most
	 * positional based Value Syntax can be used here.
	 * - `Type.Vector.`
	 */
	startPos, 
	/**
	 * End Pos - The position to which the resulting
	 * direction vector will point. Most positional
	 * based Value Syntax can be used here.
	 * - `Type.Vector.`
	 */
	endPos) {
	    // @ts-ignore
	    return "Direction Towards(" + startPos + ", " + endPos + ")";
	};
	});

	unwrapExports(directionTowards$1);
	var directionTowards_1$1 = directionTowards$1.directionTowards;

	var dotProduct$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The dot product of the specified values.
	 * The dot product tells you what amount of
	 * one vector goes in the direction of another.
	 */
	exports.dotProduct = function (
	/**
	 * Value - One of the two vector operands of
	 * the dot product. Any positional based Syntax
	 * may be used here.
	 * - `Type.Vector.`
	 */
	value1, 
	/**
	 * Value - One of the two vector operands of
	 * the dot product. Any positional based Syntax
	 * may be used here.
	 * - `Type.Vector.`
	 */
	value2) {
	    // @ts-ignore
	    return "Dot Product(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(dotProduct$1);
	var dotProduct_1$1 = dotProduct$1.dotProduct;

	var down$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Shorthand for the direction vector(0, -1,
	 * 0) which points down.
	 */
	exports.down = function () {
	    // @ts-ignore
	    return "Down";
	};
	});

	unwrapExports(down$1);
	var down_1$1 = down$1.down;

	var facingDirectionOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The unit-length directional vector of a
	 * player’s current facing relative to the
	 * world. This value includes both horizontal
	 * and vertical facing.
	 */
	exports.facingDirectionOf = function (
	/**
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Facing Direction Of(" + player + ")";
	};
	});

	unwrapExports(facingDirectionOf$1);
	var facingDirectionOf_1$1 = facingDirectionOf$1.facingDirectionOf;

	var flagPosition$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The position of a specific team’s flag in
	 * Capture the Flag.
	 */
	exports.flagPosition = function (
	/**
	 * Team - The team whose flag position to acquire.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Flag Position(" + team + ")";
	};
	});

	unwrapExports(flagPosition$1);
	var flagPosition_1$1 = flagPosition$1.flagPosition;

	var forward$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Shorthand for the direction vector(0, 0,
	 * 1) which points forward.
	 */
	exports.forward = function () {
	    // @ts-ignore
	    return "Forward";
	};
	});

	unwrapExports(forward$1);
	var forward_1$1 = forward$1.forward;

	var left$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Shorthand for the directional vector(1,
	 * 0, 0), which points to the left.
	 */
	exports.left = function () {
	    // @ts-ignore
	    return "Left";
	};
	});

	unwrapExports(left$1);
	var left_1$1 = left$1.left;

	var nearestWalkablePosition$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The position closest to the specified position
	 * that can be stood on and is accessible from a spawn point.
	 */
	exports.nearestWalkablePosition = function (
	/**
	 * Position - The position from which to search
	 * for the nearest walkable position. Can use
	 * any Vector based Value syntax to divide with.
	 * - `Type.Vector.`
	 */
	position) {
	    // @ts-ignore
	    return "Nearest Walkable Position(" + position + ")";
	};
	});

	unwrapExports(nearestWalkablePosition$1);
	var nearestWalkablePosition_1$1 = nearestWalkablePosition$1.nearestWalkablePosition;

	var normalize$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The unit-length normalization of a vector.
	 */
	exports.normalize = function (
	/**
	 * Vector - The vector to normalize. Can use
	 * any Vector based Value syntax to divide with.
	 * - `Type.Vector.`
	 */
	position) {
	    // @ts-ignore
	    return "Normalize(" + position + ")";
	};
	});

	unwrapExports(normalize$1);
	var normalize_1$1 = normalize$1.normalize;

	var objectivePosition$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The position in the world of the specified
	 * objective (either a control point, a payload
	 * checkpoint, or a payload destination) Valid
	 * in Assault, Assault/Escort (Hybrid), Escort, and Control.
	 */
	exports.objectivePosition = function (
	/**
	 * Number - The index of the objective to consider,
	 * starting at 0 and counting up. Each control
	 * point, payload checkpoint, and payload destination
	 * as its own index. Can use most Number based
	 * Value Syntax to provide this value, but
	 * must output in a integer of 0, 1, or 2.
	 * - `Type.Number.`
	 */
	number) {
	    // @ts-ignore
	    return "Objective Position(" + number + ")";
	};
	});

	unwrapExports(objectivePosition$1);
	var objectivePosition_1$1 = objectivePosition$1.objectivePosition;

	var payloadPosition$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The position in the world of the active payload.
	 */
	exports.payloadPosition = function () {
	    // @ts-ignore
	    return "Payload Position";
	};
	});

	unwrapExports(payloadPosition$1);
	var payloadPosition_1$1 = payloadPosition$1.payloadPosition;

	var positionOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current position of a player as a vector.
	 */
	exports.positionOf = function (
	/**
	 * Player - The player whose position to acquire.
	 * Can use most Player based Value Syntax to
	 * provide this value.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Position Of(" + player + ")";
	};
	});

	unwrapExports(positionOf$1);
	var positionOf_1$1 = positionOf$1.positionOf;

	var rayCastHitNormal$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The surface normal at the ray cast hit position
	 * (or from end pos to start pos if no hit occurs).
	 */
	exports.rayCastHitNormal = function (
	/**
	 * Start POS - The start position for the ray
	 * cast. If a player is provided. A position
	 * 2 meters above the player’s feet is used.
	 * Can use most Vector based Value Syntax to
	 * provide this value.
	 * - `Type.Vector.`
	 */
	startPos, 
	/**
	 * End POS - The end position for the ray cast.
	 * If a player is provided. A position 2 meters
	 * above the player’s feet is used. Can use
	 * most Vector based Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	endPos, 
	/**
	 * Players to include - Which players can be
	 * hit by this ray cast. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Array.`
	 */
	playersToInclude, 
	/**
	 * Players to exclude - Which players cannot
	 * be hit by this ray cast. This list takes
	 * precedence over players to include. Can
	 * use most Player based Value Syntax to provide this value.
	 * - `Type.Array.`
	 */
	playersToExclude, 
	/**
	 * Include player owned objects - Whether player
	 * owned objects (such as barriers or turrets)
	 * should be included in the ray cast. Can
	 * use most Boolean based Value Syntax to provide this value.
	 * - `Type.Bool.`
	 */
	IncludePlayerOwnedObjects) {
	    // @ts-ignore
	    return "Ray Cast Hit Normal(" + startPos + ", " + endPos + ", " + playersToInclude + ", " + playersToExclude + ", " + IncludePlayerOwnedObjects + ")";
	};
	});

	unwrapExports(rayCastHitNormal$1);
	var rayCastHitNormal_1$1 = rayCastHitNormal$1.rayCastHitNormal;

	var rayCastHitPlayer$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The player hit by the ray cast (or null
	 * if no player is hit).
	 */
	exports.rayCastHitPlayer = function (
	/**
	 * Start POS - The start position for the ray
	 * cast. If a player is provided. A position
	 * 2 meters above the player’s feet is used.
	 * Can use most Vector based Value Syntax to
	 * provide this value.
	 * - `Type.Vector.`
	 */
	startPos, 
	/**
	 * End POS - The end position for the ray cast.
	 * If a player is provided. A position 2 meters
	 * above the player’s feet is used. Can use
	 * most Vector based Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	endPos, 
	/**
	 * Players to include - Which players can be
	 * hit by this ray cast. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Array.`
	 */
	playersToInclude, 
	/**
	 * Players to exclude - Which players cannot
	 * be hit by this ray cast. This list takes
	 * precedence over players to include. Can
	 * use most Player based Value Syntax to provide this value.
	 * - `Type.Array.`
	 */
	playersToExclude, 
	/**
	 * Include player owned objects - Whether player
	 * owned objects (such as barriers or turrets)
	 * should be included in the ray cast. Can
	 * use most Boolean based Value Syntax to provide this value.
	 * - `Type.Bool.`
	 */
	IncludePlayerOwnedObjects) {
	    // @ts-ignore
	    return "Ray Cast Hit Player(" + startPos + ", " + endPos + ", " + playersToInclude + ", " + playersToExclude + ", " + IncludePlayerOwnedObjects + ")";
	};
	});

	unwrapExports(rayCastHitPlayer$1);
	var rayCastHitPlayer_1$1 = rayCastHitPlayer$1.rayCastHitPlayer;

	var rayCastHitPosition$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The position where the ray cast hits a surface,
	 * object, or player (or the end POS if no hit occurs).
	 */
	exports.rayCastHitPosition = function (
	/**
	 * Start POS - The start position for the ray
	 * cast. If a player is provided. A position
	 * 2 meters above the player’s feet is used.
	 * Can use most Vector based Value Syntax to
	 * provide this value.
	 * - `Type.Vector.`
	 */
	startPos, 
	/**
	 * End POS - The end position for the ray cast.
	 * If a player is provided. A position 2 meters
	 * above the player’s feet is used. Can use
	 * most Vector based Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	endPos, 
	/**
	 * Players to include - Which players can be
	 * hit by this ray cast. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Array.`
	 */
	playersToInclude, 
	/**
	 * Players to exclude - Which players cannot
	 * be hit by this ray cast. This list takes
	 * precedence over players to include. Can
	 * use most Player based Value Syntax to provide this value.
	 * - `Type.Array.`
	 */
	playersToExclude, 
	/**
	 * Include player owned objects - Whether player
	 * owned objects (such as barriers or turrets)
	 * should be included in the ray cast. Can
	 * use most Boolean based Value Syntax to provide this value.
	 * - `Type.Bool.`
	 */
	IncludePlayerOwnedObjects) {
	    // @ts-ignore
	    return "Ray Cast Hit Position(" + startPos + ", " + endPos + ", " + playersToInclude + ", " + playersToExclude + ", " + IncludePlayerOwnedObjects + ")";
	};
	});

	unwrapExports(rayCastHitPosition$1);
	var rayCastHitPosition_1$1 = rayCastHitPosition$1.rayCastHitPosition;

	var right$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Shorthand for the directional vector (-1,
	 * 0, 0), which points to the right.
	 */
	exports.right = function () {
	    // @ts-ignore
	    return "Right";
	};
	});

	unwrapExports(right$1);
	var right_1$1 = right$1.right;

	var throttleOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The directional input of a player, represented
	 * by a vector with a horizontal input on the
	 * X component (positive to the left) and vertical
	 * input on the Z component (positive upward).
	 */
	exports.throttleOf = function (
	/**
	 * Player - The player whose directional input
	 * to acquire. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Throttle Of(" + player + ")";
	};
	});

	unwrapExports(throttleOf$1);
	var throttleOf_1$1 = throttleOf$1.throttleOf;

	var totalTimeElapsed$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The total time seconds that have elapsed
	 * since the game instance was created (including
	 * setup time and transitions).
	 */
	exports.totalTimeElapsed = function () {
	    // @ts-ignore
	    return "Total Time Elapsed";
	};
	});

	unwrapExports(totalTimeElapsed$1);
	var totalTimeElapsed_1$1 = totalTimeElapsed$1.totalTimeElapsed;

	var up$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Shorthand for the directional vector(0,
	 * 1, 0). Which points upward.
	 */
	exports.up = function () {
	    // @ts-ignore
	    return "Up";
	};
	});

	unwrapExports(up$1);
	var up_1$1 = up$1.up;

	var velocityOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current velocity of a player as a vector.
	 * If the player is on a surface, the Y component
	 * of this velocity will be 0m even when traveling
	 * up or down a slope.
	 */
	exports.velocityOf = function (
	/**
	 * Player - The player whose velocity to acquire.
	 * Can use most Player based Value Syntax to
	 * provide this value.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Velocity Of(" + player + ")";
	};
	});

	unwrapExports(velocityOf$1);
	var velocityOf_1$1 = velocityOf$1.velocityOf;

	var xComponentOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The X Component of the specified Vector,
	 * usually representing a leftward amount.
	 */
	exports.xComponentOf = function (
	/**
	 * Value - The vector from which to acquire
	 * the X component. Can use most Vector based
	 * Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	vector) {
	    // @ts-ignore
	    return "X Component Of(" + vector + ")";
	};
	});

	unwrapExports(xComponentOf$1);
	var xComponentOf_1$1 = xComponentOf$1.xComponentOf;

	var yComponentOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The Y Component of the specified Vector,
	 * usually representing a upward amount.
	 */
	exports.yComponentOf = function (
	/**
	 * Value - The vector from which to acquire
	 * the Y component. Can use most Vector based
	 * Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	vector) {
	    // @ts-ignore
	    return "Y Component Of(" + vector + ")";
	};
	});

	unwrapExports(yComponentOf$1);
	var yComponentOf_1$1 = yComponentOf$1.yComponentOf;

	var zComponentOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The Z Component of the specified Vector,
	 * usually representing a forward amount.
	 */
	exports.zComponentOf = function (
	/**
	 * Value - The vector from which to acquire
	 * the Z component. Can use most Vector based
	 * Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	vector) {
	    // @ts-ignore
	    return "Z Component Of(" + vector + ")";
	};
	});

	unwrapExports(zComponentOf$1);
	var zComponentOf_1$1 = zComponentOf$1.zComponentOf;

	var vector$4 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(vector$3, exports);
	tslib_es6.__exportStar(localVectorOf$1, exports);
	tslib_es6.__exportStar(worldVectorOf$1, exports);
	tslib_es6.__exportStar(vectorTowards$1, exports);
	tslib_es6.__exportStar(globalVariable$1, exports);
	tslib_es6.__exportStar(playerVariable$1, exports);
	tslib_es6.__exportStar(backward$1, exports);
	tslib_es6.__exportStar(crossProduct$1, exports);
	tslib_es6.__exportStar(directionFromAngles$1, exports);
	tslib_es6.__exportStar(directionTowards$1, exports);
	tslib_es6.__exportStar(divide$2, exports);
	tslib_es6.__exportStar(dotProduct$1, exports);
	tslib_es6.__exportStar(down$1, exports);
	tslib_es6.__exportStar(facingDirectionOf$1, exports);
	tslib_es6.__exportStar(flagPosition$1, exports);
	tslib_es6.__exportStar(forward$1, exports);
	tslib_es6.__exportStar(left$1, exports);
	tslib_es6.__exportStar(nearestWalkablePosition$1, exports);
	tslib_es6.__exportStar(normalize$1, exports);
	tslib_es6.__exportStar(objectivePosition$1, exports);
	tslib_es6.__exportStar(payloadPosition$1, exports);
	tslib_es6.__exportStar(positionOf$1, exports);
	tslib_es6.__exportStar(rayCastHitNormal$1, exports);
	tslib_es6.__exportStar(rayCastHitPlayer$1, exports);
	tslib_es6.__exportStar(rayCastHitPosition$1, exports);
	tslib_es6.__exportStar(right$1, exports);
	tslib_es6.__exportStar(subtract$2, exports);
	tslib_es6.__exportStar(throttleOf$1, exports);
	tslib_es6.__exportStar(totalTimeElapsed$1, exports);
	tslib_es6.__exportStar(up$1, exports);
	tslib_es6.__exportStar(velocityOf$1, exports);
	tslib_es6.__exportStar(xComponentOf$1, exports);
	tslib_es6.__exportStar(yComponentOf$1, exports);
	tslib_es6.__exportStar(zComponentOf$1, exports);
	});

	unwrapExports(vector$4);

	var add$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(number$3, exports);
	tslib_es6.__exportStar(vector$4, exports);
	});

	unwrapExports(add$3);

	var allDeadPlayers$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * An array containing all dead players on
	 * a team in a match. A player is defined as
	 * being dead when they are eliminated but
	 * have not yet respawned back into the game.
	 */
	exports.allDeadPlayers = function (
	/**
	 * Team - You can specify any Team Syntax to
	 * define the array.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "All Dead Players(" + team + ")";
	};
	});

	unwrapExports(allDeadPlayers$1);
	var allDeadPlayers_1$1 = allDeadPlayers$1.allDeadPlayers;

	var allHeroes$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * An array of all heroes in Overwatch. Not
	 * to be confused with the All Players array
	 */
	exports.allHeroes = function () {
	    // @ts-ignore
	    return "All Heroes";
	};
	});

	unwrapExports(allHeroes$1);
	var allHeroes_1$1 = allHeroes$1.allHeroes;

	var allLivingPlayers$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * An array containing all living players on
	 * a team in a match. A player is defined as
	 * being alive when they are spawned into the
	 * game but have not yet been eliminated since spawning.
	 */
	exports.allLivingPlayers = function (
	/**
	 * Team - You can specify any Team Syntax to
	 * define the array.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "All Living Players(" + team + ")";
	};
	});

	unwrapExports(allLivingPlayers$1);
	var allLivingPlayers_1$1 = allLivingPlayers$1.allLivingPlayers;

	var allPlayers$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * An array containing all players on a team in a match.
	 */
	exports.allPlayers = function (
	/**
	 * Team - You can specify any Team Syntax to
	 * define the array.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "All Players(" + team + ")";
	};
	});

	unwrapExports(allPlayers$1);
	var allPlayers_1$1 = allPlayers$1.allPlayers;

	var allPlayersNotOnObjective$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * An array containing all players occupying
	 * neither a payload nor a control point (either
	 * on a team or in a match).
	 */
	exports.allPlayersNotOnObjective = function (
	/**
	 * Team - You can specify any Team Syntax to
	 * define the array.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "All Players Not On Objective(" + team + ")";
	};
	});

	unwrapExports(allPlayersNotOnObjective$1);
	var allPlayersNotOnObjective_1$1 = allPlayersNotOnObjective$1.allPlayersNotOnObjective;

	var allPlayersOnObjective$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * An array containing all players occupying
	 * either a payload or a control point (either
	 * on a team or in a match).
	 */
	exports.allPlayersOnObjective = function (
	/**
	 * Team - You can specify any Team Syntax to
	 * define the array.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "All Players On Objective(" + team + ")";
	};
	});

	unwrapExports(allPlayersOnObjective$1);
	var allPlayersOnObjective_1$1 = allPlayersOnObjective$1.allPlayersOnObjective;

	var allowedHeroes$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The array of heroes from which the specified
	 * player is currently allowed to select.
	 */
	exports.allowedHeroes = function (
	/**
	 * Player - You can specify any Player Syntax
	 * to define the array.
	 * - `Type.Player.`
	 */
	player) {
	    // @ts-ignore
	    return "Allowed Heroes(" + player + ")";
	};
	});

	unwrapExports(allowedHeroes$1);
	var allowedHeroes_1$1 = allowedHeroes$1.allowedHeroes;

	var arraySlice$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A copy of the specified array containing
	 * only values from a specified index range.
	 */
	exports.arraySlice = function (
	/**
	 * Array - You must specify the Array Syntax
	 * you are comparing the value to.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * Start Index - The first index of the range.
	 * Can use most Value Syntax to specify with.
	 * - `Type.Number.`
	 */
	index, 
	/**
	 * Count - The number of elements in the resulting
	 * array. The resulting array will contain
	 * fewer elements if the specified range exceeds
	 * the bounds of the array. Can use any Number-based
	 * Value Syntax to specify with.
	 * - `Type.Number.`
	 */
	count) {
	    // @ts-ignore
	    return "Array Slice(" + array + ", " + index + ", " + count + ")";
	};
	});

	unwrapExports(arraySlice$1);
	var arraySlice_1$1 = arraySlice$1.arraySlice;

	var emptyArray$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * An array with no elements.
	 */
	exports.emptyArray = function () {
	    // @ts-ignore
	    return "Empty Array";
	};
	});

	unwrapExports(emptyArray$1);
	var emptyArray_1$1 = emptyArray$1.emptyArray;

	var filteredArray$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A copy of the specified array with any values
	 * that do not match the specified condition removed.
	 */
	exports.filteredArray = function (
	/**
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * - `Type.Bool.`
	 */
	condition) {
	    // @ts-ignore
	    return "Filtered Array(" + array + ", " + condition + ")";
	};
	});

	unwrapExports(filteredArray$1);
	var filteredArray_1$1 = filteredArray$1.filteredArray;

	var playersInSlot$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The player or array of players who occupy
	 * a specific slot in the game.
	 */
	exports.playersInSlot = function (
	/**
	 * Slot - The slot number from each to acquire
	 * a player or players. In team games, each
	 * team has slots 0 through 5. In free-for-all
	 * games, slots are numbered 0 through 11.
	 * Can use most Number based Value Syntax to
	 * provide this value.
	 * - `Type.Number.`
	 */
	slot, 
	/**
	 * Team - The team or teams from which to acquire
	 * a player or players. Can use most Team based
	 * Value Syntax to provide this value.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Players In Slot(" + slot + ", " + team + ")";
	};
	});

	unwrapExports(playersInSlot$1);
	var playersInSlot_1$1 = playersInSlot$1.playersInSlot;

	var playersInViewAngle$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The players who are within a specific view
	 * angle of a specific player’s reticle, optionally
	 * restricted by team.
	 */
	exports.playersInViewAngle = function (
	/**
	 * Player - The player whose view to use for
	 * the check. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * View Angle - The view angle to compare against
	 * in degrees. Can use most Angle based Value
	 * Syntax to provide this value.
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * Team - The team or teams on which to consider
	 * players. Can use most Team based Value Syntax
	 * to provide this value.
	 * - `Type.Number.`
	 */
	viewAngle) {
	    // @ts-ignore
	    return "Players In View Angle(" + player + ", " + team + ", " + viewAngle + ")";
	};
	});

	unwrapExports(playersInViewAngle$1);
	var playersInViewAngle_1$1 = playersInViewAngle$1.playersInViewAngle;

	var playersOnHero$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The array of players playing a specific
	 * hero on a team or in the match.
	 */
	exports.playersOnHero = function (
	/**
	 * Hero - The hero to check for play. Can use
	 * most Hero based Value Syntax to provide this value.
	 * - `Type.Hero.`
	 */
	hero, 
	/**
	 * Team - The team or teams on which to check
	 * for the hero being played. Can use most
	 * Team based Value Syntax to provide this value.
	 * - `Type.Team.`
	 */
	team) {
	    // @ts-ignore
	    return "Players On Hero(" + hero + ", " + team + ")";
	};
	});

	unwrapExports(playersOnHero$1);
	var playersOnHero_1$1 = playersOnHero$1.playersOnHero;

	var playersWithinRadius$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * An array containing all players within a
	 * certain distance of a position, optionally
	 * restricted by team and line of sight.
	 */
	exports.playersWithinRadius = function (
	/**
	 * Center - The center position from which
	 * to measure distance. Can use most Vector
	 * based Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	center, 
	/**
	 * Radius - The radius in meters inside which
	 * players must be in order to be included
	 * in the resulting array. Can use most Number
	 * based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	radius, 
	/**
	 * Team - The team or teams to which a player
	 * must belong to be included in the resulting
	 * array. Can use most Team based Value Syntax
	 * to provide this value.
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * LOS Check - Specifies whether and how a
	 * player must pass a line-of-sight check to
	 * be included in the resulting array. You
	 * can choose from Off, Surfaces, Surfaces
	 * and Enemy Barriers, and Surfaces and All
	 * Barriers. Off will result in the line of
	 * sight is never blocked, allowing results
	 * through walls. Surfaces will result in line
	 * of sight is blocked by ceilings, walls,
	 * floors, platforms, and any fixed object
	 * that blocks projectiles. Surfaces and Enemy
	 * Barriers will result in line of sight is
	 * blocked by ceilings, walls, floors, platforms,
	 * any fixed object that blocks projectiles,
	 * and barriers created by the enemy team.
	 * Surfaces and All Barriers will result in
	 * line of sight is blocked by ceilings, walls,
	 * floors, platforms, any fixed object that
	 * blocks projectiles, and all barriers.
	 * - `Type.LosCheck.`
	 */
	losCheck) {
	    // @ts-ignore
	    return "Players Within Radius(" + center + ", " + radius + ", " + team + ", " + losCheck + ")";
	};
	});

	unwrapExports(playersWithinRadius$1);
	var playersWithinRadius_1$1 = playersWithinRadius$1.playersWithinRadius;

	var randomizedArray$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A copy of the specified array with the values
	 * in a random order
	 */
	exports.randomizedArray = function (
	/**
	 * Array - The array whose copy will be randomized.
	 * Can use most Array based Value Syntax to
	 * provide this value.
	 * - `Type.Array.`
	 */
	array) {
	    // @ts-ignore
	    return "Randomized Array(" + array + ")";
	};
	});

	unwrapExports(randomizedArray$1);
	var randomizedArray_1$1 = randomizedArray$1.randomizedArray;

	var removeFromArray$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A copy of an array with one or more values
	 * removed (if found).
	 */
	exports.removeFromArray = function (
	/**
	 * Array - The array from which to remove values.
	 * Can use most Array based Value Syntax to
	 * provide this value.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * Value - The value to remove from the array
	 * (if found), if this value itself an array,
	 * each matching element is removed. Can use
	 * most Array based or Number based Value Syntax
	 * to provide this value.
	 * - `Type.Value.`
	 */
	value) {
	    // @ts-ignore
	    return "Remove From Array(" + array + ", " + value + ")";
	};
	});

	unwrapExports(removeFromArray$1);
	var removeFromArray_1$1 = removeFromArray$1.removeFromArray;

	var sortedArray$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A copy of the specified array with the values
	 * sorted according to the value rank that
	 * is evaluated for each element.
	 */
	exports.sortedArray = function (
	/**
	 * Array - The array whose copy will be sorted.
	 * Can use most Array based Value Syntax to
	 * provide this value.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * Value Rank - The value that is evaluated
	 * for each element of the copied array. The
	 * array is sorted by this rank in ascending
	 * order. Use the current array element value
	 * to reference the element of the array currently
	 * being considered. Can use most Number based
	 * Value Syntax to provide this value.
	 * - `Type.Value.`
	 */
	valueRank) {
	    // @ts-ignore
	    return "Sorted Array(" + array + ", " + valueRank + ")";
	};
	});

	unwrapExports(sortedArray$1);
	var sortedArray_1$1 = sortedArray$1.sortedArray;

	var array$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(allDeadPlayers$1, exports);
	tslib_es6.__exportStar(allHeroes$1, exports);
	tslib_es6.__exportStar(allLivingPlayers$1, exports);
	tslib_es6.__exportStar(allPlayers$1, exports);
	tslib_es6.__exportStar(allPlayersNotOnObjective$1, exports);
	tslib_es6.__exportStar(allPlayersOnObjective$1, exports);
	tslib_es6.__exportStar(allowedHeroes$1, exports);
	tslib_es6.__exportStar(arraySlice$1, exports);
	tslib_es6.__exportStar(emptyArray$1, exports);
	tslib_es6.__exportStar(filteredArray$1, exports);
	tslib_es6.__exportStar(playersInSlot$1, exports);
	tslib_es6.__exportStar(playersInViewAngle$1, exports);
	tslib_es6.__exportStar(playersOnHero$1, exports);
	tslib_es6.__exportStar(playersWithinRadius$1, exports);
	tslib_es6.__exportStar(randomizedArray$1, exports);
	tslib_es6.__exportStar(removeFromArray$1, exports);
	tslib_es6.__exportStar(sortedArray$1, exports);
	tslib_es6.__exportStar(globalVariable$1, exports);
	tslib_es6.__exportStar(playerVariable$1, exports);
	});

	unwrapExports(array$1);

	var _null$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The absence of a player, used when no player
	 * is desired for a particular input, equivalent
	 * to the real number 0 for the purposes of
	 * comparison and debugging.
	 */
	exports.Null = function () {
	    return "Null";
	};
	});

	unwrapExports(_null$1);
	var _null_1$1 = _null$1.Null;

	var eventPlayer$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The player executing the rule, as specified
	 * by the event, may be the same as the attacker or victim.
	 */
	exports.eventPlayer = function () {
	    return "Event Player";
	};
	});

	unwrapExports(eventPlayer$3);
	var eventPlayer_1$3 = eventPlayer$3.eventPlayer;

	var victim$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The player that received damage for the
	 * event currently being processed by this
	 * rule. May be the same as the attacker or
	 * the event player.
	 */
	exports.victim = function () {
	    return "Victim";
	};
	});

	unwrapExports(victim$1);
	var victim_1$1 = victim$1.victim;

	var attacker$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The player that dealt damage for the event
	 * currently being processed by this rule.
	 * May be the same as the victim or the event player.
	 */
	exports.attacker = function () {
	    return "Attacker";
	};
	});

	unwrapExports(attacker$1);
	var attacker_1$1 = attacker$1.attacker;

	var closestPlayerTo$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The player closest to a position, optionally
	 * restricted by team.
	 */
	exports.closestPlayerTo = function (
	/**
	 * Center - The position to which to measure
	 * proximity. Can use most Value Syntax related
	 * to reporting a position in the map.
	 * - `Type.Vector.`
	 */
	center, 
	/**
	 * Team - You can specify any Team Syntax to
	 * restrict which players is reported when
	 * defining this value.
	 * - `Type.Team.`
	 */
	team) {
	    return "Closest Player To(" + center + ", " + team + ")";
	};
	});

	unwrapExports(closestPlayerTo$1);
	var closestPlayerTo_1$1 = closestPlayerTo$1.closestPlayerTo;

	var farthestPlayerFrom$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The player farthest to a position, optionally
	 * restricted by team.
	 */
	exports.farthestPlayerFrom = function (
	/**
	 * Center - The position to which to measure
	 * proximity. Can use most Value Syntax related
	 * to reporting a position in the map.
	 * - `Type.Vector.`
	 */
	center, 
	/**
	 * Team - You can specify any Team Syntax to
	 * restrict which players is reported when
	 * defining this value.
	 * - `Type.Player.`
	 */
	team) {
	    return "Farthest Player From(" + center + ", " + team + ")";
	};
	});

	unwrapExports(farthestPlayerFrom$1);
	var farthestPlayerFrom_1$1 = farthestPlayerFrom$1.farthestPlayerFrom;

	var playerCarryingFlag$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The player carrying a particular team’s
	 * flag in capture the flag. Results in null
	 * if no player is carrying the flag.
	 */
	exports.playerCarryingFlag = function (
	/**
	 * Team - The team whose whose flag to check.
	 * Can use most Team based Value Syntax to
	 * provide this value.
	 * - `Type.Team.`
	 */
	team) {
	    return "Player Carrying Flag(" + team + ")";
	};
	});

	unwrapExports(playerCarryingFlag$1);
	var playerCarryingFlag_1$1 = playerCarryingFlag$1.playerCarryingFlag;

	var playerClosestToReticle$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The player closest to the reticle of the
	 * specified player, optionally restricted by team.
	 */
	exports.playerClosestToReticle = function (
	/**
	 * Player - The player from whose reticle to
	 * search for the closest player. Can use most
	 * Player based Value Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Team - The team or teams on which to search
	 * for the closest player. Can use most Team
	 * based Value Syntax to provide this value.
	 * - `Type.Team.`
	 */
	team) {
	    return "Player Closest To Reticle(" + player + ", " + team + ")";
	};
	});

	unwrapExports(playerClosestToReticle$1);
	var playerClosestToReticle_1$1 = playerClosestToReticle$1.playerClosestToReticle;

	var player$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(eventPlayer$3, exports);
	tslib_es6.__exportStar(victim$1, exports);
	tslib_es6.__exportStar(attacker$1, exports);
	tslib_es6.__exportStar(closestPlayerTo$1, exports);
	tslib_es6.__exportStar(globalVariable$1, exports);
	tslib_es6.__exportStar(playerVariable$1, exports);
	tslib_es6.__exportStar(farthestPlayerFrom$1, exports);
	tslib_es6.__exportStar(playerCarryingFlag$1, exports);
	tslib_es6.__exportStar(playerClosestToReticle$1, exports);
	});

	unwrapExports(player$2);

	var assisterParam$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(_null$1, exports);
	tslib_es6.__exportStar(player$2, exports);
	});

	unwrapExports(assisterParam$1);

	var barrier$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(barrier$1);
	var barrier_1$1 = barrier$1.Default;

	var beam$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(beam$1);
	var beam_1$1 = beam$1.Default;

	var beamReevaluation$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(beamReevaluation$1);
	var beamReevaluation_1$1 = beamReevaluation$1.Default;

	var _false$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The Boolean value of false.
	 */
	exports.False = function () {
	    return "False";
	};
	});

	unwrapExports(_false$1);
	var _false_1$1 = _false$1.False;

	var _true$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The Boolean value of true.
	 */
	exports.True = function () {
	    return "True";
	};
	});

	unwrapExports(_true$1);
	var _true_1$1 = _true$1.True;

	var not$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the input is false (or the equivalent to false)
	 */
	exports.not = function (
	/**
	 * Value - When this input is false (or equivalent
	 * to false), then the not value is true. Otherwise,
	 * the not value is false. Can use most Boolean-based
	 * Value Syntax to provide this value.
	 * - `Type.Bool.`
	 */
	value) {
	    return "Not(" + value + ")";
	};
	});

	unwrapExports(not$1);
	var not_1$1 = not$1.not;

	var or$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether either of the two inputs are true
	 * (or equivalent to true).
	 */
	exports.or = function (
	/**
	 * Value - One of the two inputs considered.
	 * If either one is true (or equivalent to
	 * true), then the OR value is true. Can use
	 * most Boolean based Value Syntax to provide this value.
	 * - `Type.Value.`
	 */
	value1, 
	/**
	 * Value - One of the two inputs considered.
	 * If either one is true (or equivalent to
	 * true), then the OR value is true. Can use
	 * most Boolean based Value Syntax to provide this value.
	 * - `Type.Value.`
	 */
	value2) {
	    return "Or(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(or$1);
	var or_1$1 = or$1.or;

	var and$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether both of the two inputs are true
	 * or equivalent to true.
	 */
	exports.and = function (
	/**
	 * Value - You can specify any Value Syntax
	 * to define both of the required values.
	 * - `Type.Value.`
	 */
	value1, 
	/**
	 * Value - One of the two inputs considered.
	 * if both are true (or equivalent to true),
	 * then the and value is true.
	 * - `Type.Value.`
	 */
	value2) {
	    return "And(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(and$1);
	var and_1$1 = and$1.and;

	var arrayContains$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the specified array contains the
	 * specified value.
	 */
	exports.arrayContains = function (
	/**
	 * Array - The array in which to search for
	 * the specified value. Can use most Array
	 * based Value Syntax to retrieve this value.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * Value - The value for which to search. Can
	 * use most Number based Value Syntax to retrive this value.
	 * - `Type.Value.`
	 */
	value) {
	    return "Array Contains(" + array + ", " + value + ")";
	};
	});

	unwrapExports(arrayContains$1);
	var arrayContains_1$1 = arrayContains$1.arrayContains;

	var compare$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the comparison of the two inputs is true.
	 */
	exports.compare = function (
	/**
	 * Value - The left hand side of the comparison.
	 * This may be any value type if the operation
	 * is == or =!, otherwise real numbers are
	 * expected. Can use most Value Syntax for the comparison.
	 * - `Type.Value.`
	 */
	value1, 
	/**
	 * - `Type.Operator.`
	 */
	operator, 
	/**
	 * Condition - One of the standard conditions
	 * to use for comparison. See the Condition
	 * section for details.
	 * - `Type.Value.`
	 */
	value2) {
	    return "Compare(" + value1 + ", " + operator + ", " + value2 + ")";
	};
	});

	unwrapExports(compare$1);
	var compare_1$1 = compare$1.compare;

	var entityExists$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the specified player, icon entity,
	 * or effect entity still exists. Useful for
	 * determining if a player has left the match
	 * or an entity has been destroyed.
	 */
	exports.entityExists = function (
	/**
	 * Entity - The player, icon entity, or effect
	 * entity whose existance to check.
	 * - `Type.Entity.`
	 */
	entity) {
	    return "Entity Exists(" + entity + ")";
	};
	});

	unwrapExports(entityExists$1);
	var entityExists_1$1 = entityExists$1.entityExists;

	var eventWasCriticalHit$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the damage was a critical hit (such
	 * as a headshot) for the event currently being
	 * processed by this rule.
	 */
	exports.eventWasCriticalHit = function () {
	    return "Event Was Critical Hit";
	};
	});

	unwrapExports(eventWasCriticalHit$1);
	var eventWasCriticalHit_1$1 = eventWasCriticalHit$1.eventWasCriticalHit;

	var hasSpawned$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether an entity has spawned in the world.
	 * Results in false for players who have not
	 * chosen a hero yet.
	 */
	exports.hasSpawned = function (
	/**
	 * - `Type.Entity.`
	 */
	entity) {
	    return "Has Spawned(" + entity + ")";
	};
	});

	unwrapExports(hasSpawned$1);
	var hasSpawned_1$1 = hasSpawned$1.hasSpawned;

	var hasStatus$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the specified player has the specified
	 * status, either from the set status action
	 * or from a non-scripted game mechanic.
	 */
	exports.hasStatus = function (
	/**
	 * Player - The player whose status to check.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Status - The status to check for. Values
	 * include Hacked, Burning, Knocked Down, Asleep,
	 * Frozen, Unkillable, Invincible, Phased Out,
	 * Rooted, or Stunned.
	 * - `Type.Status.`
	 */
	status) {
	    return "Has Status(" + player + ", " + status + ")";
	};
	});

	unwrapExports(hasStatus$1);
	var hasStatus_1$1 = hasStatus$1.hasStatus;

	var isAlive$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Determines whether a player is alive. Returns
	 * a Boolean value.
	 */
	exports.isAlive = function (
	/**
	 * Player - The player whose life to check.
	 * Can use most player based Value Syntax to
	 * retrive this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Alive(" + player + ")";
	};
	});

	unwrapExports(isAlive$1);
	var isAlive_1$1 = isAlive$1.isAlive;

	var isAssemblingHeroes$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the match is currently in its assemble heroes phase.
	 */
	exports.isAssemblingHeroes = function () {
	    return "Is Assembling Heroes";
	};
	});

	unwrapExports(isAssemblingHeroes$1);
	var isAssemblingHeroes_1$1 = isAssemblingHeroes$1.isAssemblingHeroes;

	var isBetweenRounds$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the match is between rounds.
	 */
	exports.isBetweenRounds = function () {
	    return "Is Between Rounds";
	};
	});

	unwrapExports(isBetweenRounds$1);
	var isBetweenRounds_1$1 = isBetweenRounds$1.isBetweenRounds;

	var isButtonHeld$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a player is holding a specific button.
	 */
	exports.isButtonHeld = function (
	/**
	 * Player - The player whose button to check.
	 * Can use most player based Value Syntax to
	 * retrieve this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Button - The button to check. Designed by
	 * any action inputs by ability but not directional
	 * inputs. (i.e. Primary Fire, Secondary Fire,
	 * Ultimate Ability, Jump, Crouch, etc.)
	 * - `Type.Button.`
	 */
	button) {
	    return "Is Button Held(" + player + ", " + button + ")";
	};
	});

	unwrapExports(isButtonHeld$1);
	var isButtonHeld_1$1 = isButtonHeld$1.isButtonHeld;

	var isCommunicating$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a player is using a specific communication
	 * type (such as emote, using a voice line, etc.).
	 */
	exports.isCommunicating = function (
	/**
	 * Player - The player whose communication
	 * status to check. Can use most player based
	 * Value Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Type - The type of communication to consider.
	 * The duration of emotes is exact, the duration
	 * of voice lines is assumed to be 4 seconds,
	 * and all other durations are assumed to be
	 * 2 seconds. Any of the four emote slots,
	 * four voice lines slots, or any standard
	 * communication (Need healing, Ultimate Status,
	 * etc.) can be designated.
	 * - `Type.Communication.`
	 */
	type) {
	    return "Is Communicating(" + player + ", " + type + ")";
	};
	});

	unwrapExports(isCommunicating$1);
	var isCommunicating_1$1 = isCommunicating$1.isCommunicating;

	var isCommunicatingAny$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a player is using any communication
	 * type (such as emoting, using a voice line, etc.)
	 */
	exports.isCommunicatingAny = function (
	/**
	 * Player - The player whose communication
	 * status to check. Can use most player based
	 * Value Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Communicating Any(" + player + ")";
	};
	});

	unwrapExports(isCommunicatingAny$1);
	var isCommunicatingAny_1$1 = isCommunicatingAny$1.isCommunicatingAny;

	var isCommunicatingAnyEmote$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a player is using a emote.
	 */
	exports.isCommunicatingAnyEmote = function (
	/**
	 * Player - The player whose emoting status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Communicating Any Emote(" + player + ")";
	};
	});

	unwrapExports(isCommunicatingAnyEmote$1);
	var isCommunicatingAnyEmote_1$1 = isCommunicatingAnyEmote$1.isCommunicatingAnyEmote;

	var isCommunicatingAnyVoiceLine$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a player is using a voice line.
	 * (The duration of a voice line is assumed
	 * to be 4 seconds.)
	 */
	exports.isCommunicatingAnyVoiceLine = function (
	/**
	 * Player - The player whose voice line status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Communicating Any Voice Line(" + player + ")";
	};
	});

	unwrapExports(isCommunicatingAnyVoiceLine$1);
	var isCommunicatingAnyVoiceLine_1$1 = isCommunicatingAnyVoiceLine$1.isCommunicatingAnyVoiceLine;

	var isControlModePointLocked$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the point is locked in control mode.
	 */
	exports.isControlModePointLocked = function () {
	    return "Is Control Mode Point Locked";
	};
	});

	unwrapExports(isControlModePointLocked$1);
	var isControlModePointLocked_1$1 = isControlModePointLocked$1.isControlModePointLocked;

	var isCrouching$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a player is crouching.
	 */
	exports.isCrouching = function (
	/**
	 * Player - The player whose crouching status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Crouching(" + player + ")";
	};
	});

	unwrapExports(isCrouching$1);
	var isCrouching_1$1 = isCrouching$1.isCrouching;

	var isCTFModeInSuddenDeath$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the current game of capture the
	 * flag is in sudden death.
	 */
	exports.isCTFModeInSuddenDeath = function () {
	    return "Is CTF Mode In Sudden Death";
	};
	});

	unwrapExports(isCTFModeInSuddenDeath$1);
	var isCTFModeInSuddenDeath_1$1 = isCTFModeInSuddenDeath$1.isCTFModeInSuddenDeath;

	var isDead$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a player is dead.
	 */
	exports.isDead = function (
	/**
	 * Player - The player whose death to check.
	 * Can use most player based Value Syntax to
	 * retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Dead(" + player + ")";
	};
	});

	unwrapExports(isDead$1);
	var isDead_1$1 = isDead$1.isDead;

	var isFiringPrimary$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the specified player’s primary weapon
	 * attack is being used.
	 */
	exports.isFiringPrimary = function (
	/**
	 * Player - The player whose primary weapon
	 * attack to check. Can use most player based
	 * Value Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Firing Primary(" + player + ")";
	};
	});

	unwrapExports(isFiringPrimary$1);
	var isFiringPrimary_1$1 = isFiringPrimary$1.isFiringPrimary;

	var isFiringSecondary$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the specified player’s secondary
	 * weapon attack is being used.
	 */
	exports.isFiringSecondary = function (
	/**
	 * Player - The player whose secondary weapon
	 * attack to check. Can use most player based
	 * Value Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Firing Secondary(" + player + ")";
	};
	});

	unwrapExports(isFiringSecondary$1);
	var isFiringSecondary_1$1 = isFiringSecondary$1.isFiringSecondary;

	var isFlagAtBase$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a specific team’s flag is at its
	 * base in capture the flag.
	 */
	exports.isFlagAtBase = function (
	/**
	 * Team - The team whose whose flag to check.
	 * Can use most Team based Value Syntax to
	 * provide this value.
	 * - `Type.Team.`
	 */
	team) {
	    return "Is Flag At Base(" + team + ")";
	};
	});

	unwrapExports(isFlagAtBase$1);
	var isFlagAtBase_1$1 = isFlagAtBase$1.isFlagAtBase;

	var isFlagBeingCarried$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a specific team's flag is being
	 * is being carried by a member of the opposing
	 * team in capture the flag.
	 */
	exports.isFlagBeingCarried = function (
	/**
	 * Team - The team whose whose flag to check.
	 * Can use most Team based Value Syntax to
	 * provide this value.
	 * - `Type.Team.`
	 */
	team) {
	    return "Is Flag Being Carried(" + team + ")";
	};
	});

	unwrapExports(isFlagBeingCarried$1);
	var isFlagBeingCarried_1$1 = isFlagBeingCarried$1.isFlagBeingCarried;

	var isGameInProgress$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the main phase of the match is in
	 * progress (during which time combat and scoring are allowed).
	 */
	exports.isGameInProgress = function () {
	    return "Is Game In Progress";
	};
	});

	unwrapExports(isGameInProgress$1);
	var isGameInProgress_1$1 = isGameInProgress$1.isGameInProgress;

	var isHeroBeingPlayed$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a specific hero is being played
	 * (either on a team or in the match).
	 */
	exports.isHeroBeingPlayed = function (
	/**
	 * Hero - The hero to check for play. Can use
	 * most Hero based Value Syntax to provide this value.
	 * - `Type.Hero.`
	 */
	hero, 
	/**
	 * Team - The team or teams on which to check
	 * for the hero being played. Can use most
	 * Team based Value Syntax to provide this value.
	 * - `Type.Team.`
	 */
	team) {
	    return "Is Hero Being Played(" + hero + ", " + team + ")";
	};
	});

	unwrapExports(isHeroBeingPlayed$1);
	var isHeroBeingPlayed_1$1 = isHeroBeingPlayed$1.isHeroBeingPlayed;

	var isInAir$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a player is airborne.
	 */
	exports.isInAir = function (
	/**
	 * Player - The player whose airborne status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is In Air(" + player + ")";
	};
	});

	unwrapExports(isInAir$1);
	var isInAir_1$1 = isInAir$1.isInAir;

	var isInLineOfSight$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether two positions have line of sight
	 * with each other.
	 */
	exports.isInLineOfSight = function (
	/**
	 * Start Pos - The start position for the line
	 * of sight check. Most positional based Value
	 * Syntax can be used here.
	 * - `Type.Vector.`
	 */
	startPos, 
	/**
	 * End Pos - The end position for the line
	 * of sight check. Most positional based Value
	 * Syntax can be used here.
	 * - `Type.Vector.`
	 */
	endPos, 
	/**
	 * Barriers - Defines how barriers affect line
	 * of sight, when considering whether a barrier
	 * belongs to an enemy, the allegiance of the
	 * player provided to start pos (if any) is
	 * used. Can be set to “Barriers do not block
	 * LOS”, Enemy barriers block LOS", and “All
	 * barriers block LOS”.
	 * - `Type.Barrier.`
	 */
	barriers) {
	    return "Is In Line Of Sight(" + startPos + ", " + endPos + ", " + barriers + ")";
	};
	});

	unwrapExports(isInLineOfSight$1);
	var isInLineOfSight_1$1 = isInLineOfSight$1.isInLineOfSight;

	var isInSetup$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the match is currently in its setup phase.
	 */
	exports.isInSetup = function () {
	    return "Is In Setup";
	};
	});

	unwrapExports(isInSetup$1);
	var isInSetup_1$1 = isInSetup$1.isInSetup;

	var isInSpawnRoom$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a specific player is in the spawn
	 * room (and is thus being healed and able
	 * to change heroes).
	 */
	exports.isInSpawnRoom = function (
	/**
	 * Player - The player whose spawn room status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is In Spawn Room(" + player + ")";
	};
	});

	unwrapExports(isInSpawnRoom$1);
	var isInSpawnRoom_1$1 = isInSpawnRoom$1.isInSpawnRoom;

	var isInViewAngle$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a location is within view of a player.
	 */
	exports.isInViewAngle = function (
	/**
	 * Player - The player whose view to use for
	 * the check. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Location - The location to test if it’s
	 * within view. Most positional based Value
	 * Syntax can be used here.
	 * - `Type.Vector.`
	 */
	location, 
	/**
	 * Team - The team or teams on which to consider
	 * players. Can use most Team based Value Syntax
	 * to provide this value.
	 * - `Type.Number.`
	 */
	viewAngle) {
	    return "Is In View Angle(" + player + ", " + location + ", " + viewAngle + ")";
	};
	});

	unwrapExports(isInViewAngle$1);
	var isInViewAngle_1$1 = isInViewAngle$1.isInViewAngle;

	var isMatchComplete$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the match has finished.
	 */
	exports.isMatchComplete = function () {
	    return "Is Match Complete";
	};
	});

	unwrapExports(isMatchComplete$1);
	var isMatchComplete_1$1 = isMatchComplete$1.isMatchComplete;

	var isMoving$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a specific player is moving (as
	 * defined by having a non-zero constant speed).
	 */
	exports.isMoving = function (
	/**
	 * Player - The player whose moving status
	 * status to check. Can use most player based
	 * Value Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Moving(" + player + ")";
	};
	});

	unwrapExports(isMoving$1);
	var isMoving_1$1 = isMoving$1.isMoving;

	var isObjectiveComplete$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the specified objective has been
	 * completed Results in false if the game mode
	 * is not assault, escort, or assault/escort (hybrid).
	 */
	exports.isObjectiveComplete = function (
	/**
	 * Number - The index of the objective to consider,
	 * starting at 0 and counting up. Each control
	 * point, payload checkpoint, and payload destination
	 * has its own index. Can use most number based
	 * Value Syntax to retrieve this value. Value
	 * must be in the form of an integer (whole number).
	 * - `Type.Number.`
	 */
	number) {
	    return "Is Objective Complete(" + number + ")";
	};
	});

	unwrapExports(isObjectiveComplete$1);
	var isObjectiveComplete_1$1 = isObjectiveComplete$1.isObjectiveComplete;

	var isOnGround$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a player is on the ground (or other
	 * walkable surface).
	 */
	exports.isOnGround = function (
	/**
	 * Player - The player whose ground status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is On Ground(" + player + ")";
	};
	});

	unwrapExports(isOnGround$1);
	var isOnGround_1$1 = isOnGround$1.isOnGround;

	var isOnObjective$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a specific player is currently occupying
	 * a payload or capture point.
	 */
	exports.isOnObjective = function (
	/**
	 * Player - The player whose objective status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is On Objective(" + player + ")";
	};
	});

	unwrapExports(isOnObjective$1);
	var isOnObjective_1$1 = isOnObjective$1.isOnObjective;

	var isOnWall$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a player is on a wall (climbing or riding).
	 */
	exports.isOnWall = function (
	/**
	 * Player - The player whose wall status to
	 * check. Can use most player based Value Syntax
	 * to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is On Wall(" + player + ")";
	};
	});

	unwrapExports(isOnWall$1);
	var isOnWall_1$1 = isOnWall$1.isOnWall;

	var isPortraitOnFire$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a specific player’s portrait is on fire.
	 */
	exports.isPortraitOnFire = function (
	/**
	 * Player - The player whose portrait to check.
	 * Can use most player based Value Syntax to
	 * retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Portrait On Fire(" + player + ")";
	};
	});

	unwrapExports(isPortraitOnFire$1);
	var isPortraitOnFire_1$1 = isPortraitOnFire$1.isPortraitOnFire;

	var isStanding$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a player is standing (defined as
	 * both not moving and not in the air).
	 */
	exports.isStanding = function (
	/**
	 * Player - The player whose standing status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Standing(" + player + ")";
	};
	});

	unwrapExports(isStanding$1);
	var isStanding_1$1 = isStanding$1.isStanding;

	var isTeamOnDefense$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the specified team is currently
	 * on defense in a standard match.
	 */
	exports.isTeamOnDefense = function (
	/**
	 * Team - The team whose role to check. Can
	 * use most Team Based Value Syntax to retrieve this value.
	 * - `Type.Team.`
	 */
	team) {
	    return "Is Team On Defense(" + team + ")";
	};
	});

	unwrapExports(isTeamOnDefense$1);
	var isTeamOnDefense_1$1 = isTeamOnDefense$1.isTeamOnDefense;

	var isTeamOnOffense$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the specified team is currently
	 * on offense in a standard match.
	 */
	exports.isTeamOnOffense = function (
	/**
	 * Team - The team whose role to check. Can
	 * use most Team Based Value Syntax to retrieve this value.
	 * - `Type.Team.`
	 */
	team) {
	    return "Is Team On Offense(" + team + ")";
	};
	});

	unwrapExports(isTeamOnOffense$1);
	var isTeamOnOffense_1$1 = isTeamOnOffense$1.isTeamOnOffense;

	var isTrueForAll$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the specified condition evaluates
	 * to true for every value in the specified array.
	 */
	exports.isTrueForAll = function (
	/**
	 * Array - The array whose values will be considered.
	 * Can use most Array Based Value Syntax to
	 * retrieve this value.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * Condition - The condition that is evaluated
	 * for each element of the specified array,
	 * Use the current array element value to reference
	 * the element of the array currently being
	 * considered. Can use most Comparative based
	 * Value Syntax to retrieve this value.
	 * - `Type.Bool.`
	 */
	condition) {
	    return "Is True For All(" + array + ", " + condition + ")";
	};
	});

	unwrapExports(isTrueForAll$1);
	var isTrueForAll_1$1 = isTrueForAll$1.isTrueForAll;

	var isTrueForAny$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the specified condition evaluates
	 * to true for any value in the specified array.
	 */
	exports.isTrueForAny = function (
	/**
	 * Array - The array whose values will be considered.
	 * Can use most Array Based Value Syntax to
	 * retrieve this value.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * Condition - The condition that is evaluated
	 * for each element of the specified array,
	 * Use the current array element value to reference
	 * the element of the array currently being
	 * considered. Can use most Comparative based
	 * Value Syntax to retrieve this value.
	 * - `Type.Bool.`
	 */
	condition) {
	    return "Is True For Any(" + array + ", " + condition + ")";
	};
	});

	unwrapExports(isTrueForAny$1);
	var isTrueForAny_1$1 = isTrueForAny$1.isTrueForAny;

	var isUsingAbility1$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the specified player is using ability 1.
	 */
	exports.isUsingAbility1 = function (
	/**
	 * Player - The player whose ability 1 usage
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Using Ability 1(" + player + ")";
	};
	});

	unwrapExports(isUsingAbility1$1);
	var isUsingAbility1_1$1 = isUsingAbility1$1.isUsingAbility1;

	var isUsingAbility2$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the specified player is using ability 2.
	 */
	exports.isUsingAbility2 = function (
	/**
	 * Player - The player whose ability 2 usage
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Using Ability 2(" + player + ")";
	};
	});

	unwrapExports(isUsingAbility2$1);
	var isUsingAbility2_1$1 = isUsingAbility2$1.isUsingAbility2;

	var isUsingUltimate$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the specified player is using an
	 * ultimate ability.
	 */
	exports.isUsingUltimate = function (
	/**
	 * Player - The player whose ultimate ability
	 * usage to check. Can use most player based
	 * Value Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Using Ultimate(" + player + ")";
	};
	});

	unwrapExports(isUsingUltimate$1);
	var isUsingUltimate_1$1 = isUsingUltimate$1.isUsingUltimate;

	var isWaitingForPlayers$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether the match is waiting for players
	 * to join before starting.
	 */
	exports.isWaitingForPlayers = function () {
	    return "Is Waiting For Players";
	};
	});

	unwrapExports(isWaitingForPlayers$1);
	var isWaitingForPlayers_1$1 = isWaitingForPlayers$1.isWaitingForPlayers;

	var bool$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(_false$1, exports);
	tslib_es6.__exportStar(_true$1, exports);
	tslib_es6.__exportStar(not$1, exports);
	tslib_es6.__exportStar(or$1, exports);
	tslib_es6.__exportStar(and$1, exports);
	tslib_es6.__exportStar(arrayContains$1, exports);
	tslib_es6.__exportStar(compare$1, exports);
	tslib_es6.__exportStar(entityExists$1, exports);
	tslib_es6.__exportStar(eventWasCriticalHit$1, exports);
	tslib_es6.__exportStar(hasSpawned$1, exports);
	tslib_es6.__exportStar(hasStatus$1, exports);
	tslib_es6.__exportStar(isAlive$1, exports);
	tslib_es6.__exportStar(isAssemblingHeroes$1, exports);
	tslib_es6.__exportStar(isBetweenRounds$1, exports);
	tslib_es6.__exportStar(isButtonHeld$1, exports);
	tslib_es6.__exportStar(isCommunicating$1, exports);
	tslib_es6.__exportStar(isCommunicatingAny$1, exports);
	tslib_es6.__exportStar(isCommunicatingAnyEmote$1, exports);
	tslib_es6.__exportStar(isCommunicatingAnyVoiceLine$1, exports);
	tslib_es6.__exportStar(isControlModePointLocked$1, exports);
	tslib_es6.__exportStar(isCrouching$1, exports);
	tslib_es6.__exportStar(isCTFModeInSuddenDeath$1, exports);
	tslib_es6.__exportStar(isDead$1, exports);
	tslib_es6.__exportStar(isFiringPrimary$1, exports);
	tslib_es6.__exportStar(isFiringSecondary$1, exports);
	tslib_es6.__exportStar(isFlagAtBase$1, exports);
	tslib_es6.__exportStar(isFlagBeingCarried$1, exports);
	tslib_es6.__exportStar(isGameInProgress$1, exports);
	tslib_es6.__exportStar(isHeroBeingPlayed$1, exports);
	tslib_es6.__exportStar(isInAir$1, exports);
	tslib_es6.__exportStar(isInLineOfSight$1, exports);
	tslib_es6.__exportStar(isInSetup$1, exports);
	tslib_es6.__exportStar(isInSpawnRoom$1, exports);
	tslib_es6.__exportStar(isInViewAngle$1, exports);
	tslib_es6.__exportStar(isMatchComplete$1, exports);
	tslib_es6.__exportStar(isMoving$1, exports);
	tslib_es6.__exportStar(isObjectiveComplete$1, exports);
	tslib_es6.__exportStar(isOnGround$1, exports);
	tslib_es6.__exportStar(isOnObjective$1, exports);
	tslib_es6.__exportStar(isOnWall$1, exports);
	tslib_es6.__exportStar(isPortraitOnFire$1, exports);
	tslib_es6.__exportStar(isStanding$1, exports);
	tslib_es6.__exportStar(isFiringSecondary$1, exports);
	tslib_es6.__exportStar(isTeamOnDefense$1, exports);
	tslib_es6.__exportStar(isTeamOnOffense$1, exports);
	tslib_es6.__exportStar(isTrueForAll$1, exports);
	tslib_es6.__exportStar(isTrueForAny$1, exports);
	tslib_es6.__exportStar(isUsingAbility1$1, exports);
	tslib_es6.__exportStar(isUsingAbility2$1, exports);
	tslib_es6.__exportStar(isUsingUltimate$1, exports);
	tslib_es6.__exportStar(isWaitingForPlayers$1, exports);
	});

	unwrapExports(bool$1);

	var button$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(button$1);
	var button_1$1 = button$1.Default;

	var clipping$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(clipping$1);
	var clipping_1$1 = clipping$1.Default;

	var color$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(color$1);
	var color_1$1 = color$1.Default;

	var communication$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(communication$1);
	var communication_1$1 = communication$1.Default;

	var damageModificationId$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(lastDamageModificationId$1, exports);
	tslib_es6.__exportStar(globalVariable$1, exports);
	tslib_es6.__exportStar(playerVariable$1, exports);
	});

	unwrapExports(damageModificationId$1);

	var damageModificationReevaluation$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(damageModificationReevaluation$1);
	var damageModificationReevaluation_1$1 = damageModificationReevaluation$1.Default;

	var damageOverTimeId$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(lastDamageOverTimeId$1, exports);
	tslib_es6.__exportStar(globalVariable$1, exports);
	tslib_es6.__exportStar(playerVariable$1, exports);
	});

	unwrapExports(damageOverTimeId$1);

	var destinationParam$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(number$3, exports);
	tslib_es6.__exportStar(vector$4, exports);
	});

	unwrapExports(destinationParam$1);

	var divide$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(number$3, exports);
	tslib_es6.__exportStar(vector$4, exports);
	});

	unwrapExports(divide$3);

	var effect$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(effect$1);
	var effect_1$1 = effect$1.Default;

	var effectReevaluation$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(effectReevaluation$1);
	var effectReevaluation_1$1 = effectReevaluation$1.Default;

	var lastCreatedEntity$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A reference to the last effect or icon entity
	 * created by the event player (or created
	 * at the global level).
	 */
	exports.lastCreatedEntity = function () {
	    return "Last Created Entity";
	};
	});

	unwrapExports(lastCreatedEntity$1);
	var lastCreatedEntity_1$1 = lastCreatedEntity$1.lastCreatedEntity;

	var entity$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(player$2, exports);
	tslib_es6.__exportStar(lastCreatedEntity$1, exports);
	tslib_es6.__exportStar(globalVariable$1, exports);
	tslib_es6.__exportStar(playerVariable$1, exports);
	});

	unwrapExports(entity$2);

	var facingReevaluation$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(facingReevaluation$1);
	var facingReevaluation_1$1 = facingReevaluation$1.Default;

	var healOverTimeId$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(lastHealOverTimeId$1, exports);
	tslib_es6.__exportStar(globalVariable$1, exports);
	tslib_es6.__exportStar(playerVariable$1, exports);
	});

	unwrapExports(healOverTimeId$1);

	var hero$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A hero constant. Specifies one of the available
	 * heroes by name in the game.
	 */
	exports.hero = function (
	/**
	 * - `Type.HeroConstant.`
	 */
	hero) {
	    return "Hero(" + hero + ")";
	};
	});

	unwrapExports(hero$2);
	var hero_1$1 = hero$2.hero;

	var heroOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The Current Hero of a Player.
	 */
	exports.heroOf = function (
	/**
	 * Player - The player whose hero to acquire.
	 * Can use most player based Value Syntax to
	 * retrieve this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Hero Of(" + player + ")";
	};
	});

	unwrapExports(heroOf$1);
	var heroOf_1$1 = heroOf$1.heroOf;

	var hero$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(hero$2, exports);
	tslib_es6.__exportStar(heroOf$1, exports);
	});

	unwrapExports(hero$3);

	var hudTextReevaluation$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(hudTextReevaluation$1);
	var hudTextReevaluation_1$1 = hudTextReevaluation$1.Default;

	var icon$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(icon$1);
	var icon_1$1 = icon$1.Default;

	var iconReevaluation$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(iconReevaluation$1);
	var iconReevaluation_1$1 = iconReevaluation$1.Default;

	var invisibleTo$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(invisibleTo$1);
	var invisibleTo_1$1 = invisibleTo$1.Default;

	var inWorldTextReevaluation$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(inWorldTextReevaluation$1);
	var inWorldTextReevaluation_1$1 = inWorldTextReevaluation$1.Default;

	var location_1$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(location_1$1);
	var location_2$1 = location_1$1.Default;

	var losCheck$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(losCheck$1);
	var losCheck_1$1 = losCheck$1.Default;

	var motion$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(motion$1);
	var motion_1$1 = motion$1.Default;

	var multiply$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(number$3, exports);
	tslib_es6.__exportStar(vector$4, exports);
	});

	unwrapExports(multiply$2);

	var objectiveDescriptionReevaluation$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(objectiveDescriptionReevaluation$1);
	var objectiveDescriptionReevaluation_1$1 = objectiveDescriptionReevaluation$1.Default;

	var operator$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(operator$1);
	var operator_1$1 = operator$1.Default;

	var playEffect$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(playEffect$2);
	var playEffect_1$2 = playEffect$2.Default;

	var playersParam$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(player$2, exports);
	tslib_es6.__exportStar(array$1, exports);
	});

	unwrapExports(playersParam$1);

	var reevaluation$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(reevaluation$1);
	var reevaluation_1$1 = reevaluation$1.Default;

	var relative$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(relative$1);
	var relative_1$1 = relative$1.Default;

	var roundingType$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(roundingType$1);
	var roundingType_1$1 = roundingType$1.Default;

	var spectators$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(spectators$1);
	var spectators_1$1 = spectators$1.Default;

	var startAcceleratingReevaluation$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(startAcceleratingReevaluation$1);
	var startAcceleratingReevaluation_1$1 = startAcceleratingReevaluation$1.Default;

	var startThrottleBehavior$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(startThrottleBehavior$1);
	var startThrottleBehavior_1$1 = startThrottleBehavior$1.Default;

	var startThrottleReevaluation$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(startThrottleReevaluation$1);
	var startThrottleReevaluation_1$1 = startThrottleReevaluation$1.Default;

	var status$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(status$1);
	var status_1$1 = status$1.Default;

	var heroIconString$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Converts a hero parameter into a string
	 * that shows up as an icon.
	 */
	exports.heroIconString = function (
	/**
	 * - `Type.Hero.`
	 */
	value) {
	    return "Hero Icon String(" + value + ")";
	};
	});

	unwrapExports(heroIconString$1);
	var heroIconString_1$1 = heroIconString$1.heroIconString;

	var string$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Text formed from a selection of strings
	 * and specified values.
	 */
	exports.string = function (
	/**
	 * String - How the string will be structured
	 * using a series of text and phrases.
	 * - `Type.Text.`
	 */
	string, 
	/**
	 * {0} - The first value in the string.
	 * - `Type.StringParam.`
	 */
	_0, 
	/**
	 * {1} - The second value in the string.
	 * - `Type.StringParam.`
	 */
	_1, 
	/**
	 * {2} - The third value in the string.
	 * - `Type.StringParam.`
	 */
	_2) {
	    return "String(" + string + ", " + _0 + ", " + _1 + ", " + _2 + ")";
	};
	});

	unwrapExports(string$2);
	var string_1$1 = string$2.string;

	var string$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(heroIconString$1, exports);
	tslib_es6.__exportStar(string$2, exports);
	});

	unwrapExports(string$3);

	var stringParam$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(string$3, exports);
	tslib_es6.__exportStar(_null$1, exports);
	});

	unwrapExports(stringParam$1);

	var subtract$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(number$3, exports);
	tslib_es6.__exportStar(vector$4, exports);
	});

	unwrapExports(subtract$3);

	var team$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A team constant. The all option represents
	 * both teams in a team or all players in a
	 * free-for-all game.
	 */
	exports.team = function (
	/**
	 * - `Type.TeamConstant.`
	 */
	team) {
	    return "Team(" + team + ")";
	};
	});

	unwrapExports(team$3);
	var team_1$1 = team$3.team;

	var controlModeScoringTeam$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The team that is currently accumulating
	 * score percentage in control mode Results
	 * in all if neither team is accumulating score.
	 */
	exports.controlModeScoringTeam = function () {
	    return "Control Mode Scoring Team";
	};
	});

	unwrapExports(controlModeScoringTeam$1);
	var controlModeScoringTeam_1$1 = controlModeScoringTeam$1.controlModeScoringTeam;

	var oppositeTeamOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The team opposite the specified team.
	 */
	exports.oppositeTeamOf = function (
	/**
	 * Team - The team whose opposite to acquire.
	 * If all, the result will be all. Can use
	 * most Team based Value Syntax to provide this value.
	 * - `Type.Team.`
	 */
	team) {
	    return "Opposite Team Of(" + team + ")";
	};
	});

	unwrapExports(oppositeTeamOf$1);
	var oppositeTeamOf_1$1 = oppositeTeamOf$1.oppositeTeamOf;

	var teamOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The team of a player. If the game mode is
	 * free-for-all, the team is considered to be all.
	 */
	exports.teamOf = function (
	/**
	 * Player - The player whose team to acquire.
	 * Can use most Player based Value Syntax to
	 * provide this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Team Of(" + player + ")";
	};
	});

	unwrapExports(teamOf$1);
	var teamOf_1$1 = teamOf$1.teamOf;

	var team$4 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(team$3, exports);
	tslib_es6.__exportStar(controlModeScoringTeam$1, exports);
	tslib_es6.__exportStar(oppositeTeamOf$1, exports);
	tslib_es6.__exportStar(teamOf$1, exports);
	});

	unwrapExports(team$4);

	var text$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(text$1);
	var text_1$1 = text$1.Default;

	var textId$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(lastTextId$1, exports);
	tslib_es6.__exportStar(globalVariable$1, exports);
	tslib_es6.__exportStar(playerVariable$1, exports);
	});

	unwrapExports(textId$1);

	var transformation$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(transformation$1);
	var transformation_1$1 = transformation$1.Default;

	var absoluteValue$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The absolute value is a measure of how far
	 * the number is from zero. If you think of
	 * a number line, with zero in the center,
	 * all you’re really doing is asking how far
	 * away you are from this zero point. For example
	 * the Absolute Value of 4 is 4 and the absolute
	 * value of -6 is 6.
	 */
	exports.absoluteValue = function (
	/**
	 * Value - You can specify any Value Syntax
	 * to define the Absolute Value.
	 * - `Type.Number.`
	 */
	value) {
	    return "Absolute Value(" + value + ")";
	};
	});

	unwrapExports(absoluteValue$1);
	var absoluteValue_1$1 = absoluteValue$1.absoluteValue;

	var appendToArray$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A copy of an array with one or more values
	 * appended to the end.
	 */
	exports.appendToArray = function (
	/**
	 * Array - You must specify the Array Syntax
	 * you are adding the value to.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * Value - You must specify the Value Syntax
	 * that you are adding to the array.
	 * - `Type.Value.`
	 */
	value) {
	    return "Append To Array(" + array + ", " + value + ")";
	};
	});

	unwrapExports(appendToArray$1);
	var appendToArray_1$1 = appendToArray$1.appendToArray;

	var currentArrayElement$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The current array element being considered.
	 * Only meaningful during the evaluation of
	 * values such as filtered array and sorted array.
	 */
	exports.currentArrayElement = function () {
	    return "Current Array Element";
	};
	});

	unwrapExports(currentArrayElement$1);
	var currentArrayElement_1$1 = currentArrayElement$1.currentArrayElement;

	var firstOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The value at the started of the specified
	 * array. Results in a 0 if the specified array is empty.
	 */
	exports.firstOf = function (
	/**
	 * Array - The array from which the value is
	 * created. Can use most Array based Value
	 * Syntax to provide this data.
	 * - `Type.Array.`
	 */
	array) {
	    return "First Of(" + array + ")";
	};
	});

	unwrapExports(firstOf$1);
	var firstOf_1$1 = firstOf$1.firstOf;

	var lastOf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The value at the end of the specified array.
	 * Results in a 0 if the specified array is empty.
	 */
	exports.lastOf = function (
	/**
	 * Array - The array from which the value is
	 * created. Can use most Array based Value
	 * Syntax to provide this data.
	 * - `Type.Array.`
	 */
	array) {
	    return "Last Of(" + array + ")";
	};
	});

	unwrapExports(lastOf$1);
	var lastOf_1$1 = lastOf$1.lastOf;

	var matchTime$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The amount of time in seconds remaining
	 * in the current game mode phase. This will
	 * return a numerical value.
	 */
	exports.matchTime = function () {
	    return "Match Time";
	};
	});

	unwrapExports(matchTime$1);
	var matchTime_1$1 = matchTime$1.matchTime;

	var multiply$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The product of two numbers or vectors. A
	 * vector multiplied by a number will yield
	 * a scaled vector.
	 */
	exports.multiply = function (
	/**
	 * Value - The left-hand operand. May be any
	 * value that results in a number. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Multiply.`
	 */
	value1, 
	/**
	 * Value - The right-hand operand. May be any
	 * value that results in a number. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Multiply.`
	 */
	value2) {
	    return "Multiply(" + value1 + ", " + value2 + ")";
	};
	});

	unwrapExports(multiply$3);
	var multiply_1$1 = multiply$3.multiply;

	var randomValueInArray$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A random value from the specified array.
	 */
	exports.randomValueInArray = function (
	/**
	 * Array - The array from which to randomly
	 * take a value. If a non-array value is provided,
	 * the result is simply the provided value.
	 * Can use most Array based Value Syntax to
	 * provide this value.
	 * - `Type.Value.`
	 */
	array) {
	    return "Random Value In Array(" + array + ")";
	};
	});

	unwrapExports(randomValueInArray$1);
	var randomValueInArray_1$1 = randomValueInArray$1.randomValueInArray;

	var valueInArray$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The value found at a specific element of
	 * an array. Results in a 0 if the element does not exist.
	 */
	exports.valueInArray = function (
	/**
	 * Array - The array whose element to acquire.
	 * Can use most Array based Value Syntax to
	 * provide this value.
	 * - `Type.Array.`
	 */
	array, 
	/**
	 * Index - The index whose element to acquire.
	 * Can use most Number based Value Syntax to
	 * provide this value.
	 * - `Type.Number.`
	 */
	index) {
	    return "Value In Array(" + array + ", " + index + ")";
	};
	});

	unwrapExports(valueInArray$1);
	var valueInArray_1$1 = valueInArray$1.valueInArray;

	var value$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(absoluteValue$1, exports);
	tslib_es6.__exportStar(add$2, exports);
	tslib_es6.__exportStar(allDeadPlayers$1, exports);
	tslib_es6.__exportStar(allHeroes$1, exports);
	tslib_es6.__exportStar(allLivingPlayers$1, exports);
	tslib_es6.__exportStar(allPlayers$1, exports);
	tslib_es6.__exportStar(allPlayersNotOnObjective$1, exports);
	tslib_es6.__exportStar(allPlayersOnObjective$1, exports);
	tslib_es6.__exportStar(allowedHeroes$1, exports);
	tslib_es6.__exportStar(altitudeOf$1, exports);
	tslib_es6.__exportStar(and$1, exports);
	tslib_es6.__exportStar(angleBetweenVectors$1, exports);
	tslib_es6.__exportStar(angleDifference$1, exports);
	tslib_es6.__exportStar(appendToArray$1, exports);
	tslib_es6.__exportStar(arccosineInDegrees$1, exports);
	tslib_es6.__exportStar(arccosineInRadians$1, exports);
	tslib_es6.__exportStar(arcsineInDegrees$1, exports);
	tslib_es6.__exportStar(arcsineInRadians$1, exports);
	tslib_es6.__exportStar(arctangentInDegrees$1, exports);
	tslib_es6.__exportStar(arctangentInRadians$1, exports);
	tslib_es6.__exportStar(arrayContains$1, exports);
	tslib_es6.__exportStar(arraySlice$1, exports);
	tslib_es6.__exportStar(attacker$1, exports);
	tslib_es6.__exportStar(backward$1, exports);
	tslib_es6.__exportStar(closestPlayerTo$1, exports);
	tslib_es6.__exportStar(compare$1, exports);
	tslib_es6.__exportStar(controlModeScoringPercentage$1, exports);
	tslib_es6.__exportStar(controlModeScoringTeam$1, exports);
	tslib_es6.__exportStar(cosineFromDegrees$1, exports);
	tslib_es6.__exportStar(cosineFromRadians$1, exports);
	tslib_es6.__exportStar(countOf$1, exports);
	tslib_es6.__exportStar(crossProduct$1, exports);
	tslib_es6.__exportStar(currentArrayElement$1, exports);
	tslib_es6.__exportStar(directionFromAngles$1, exports);
	tslib_es6.__exportStar(directionTowards$1, exports);
	tslib_es6.__exportStar(distanceBetween$1, exports);
	tslib_es6.__exportStar(divide$2, exports);
	tslib_es6.__exportStar(dotProduct$1, exports);
	tslib_es6.__exportStar(down$1, exports);
	tslib_es6.__exportStar(emptyArray$1, exports);
	tslib_es6.__exportStar(entityExists$1, exports);
	tslib_es6.__exportStar(eventDamage$1, exports);
	tslib_es6.__exportStar(eventPlayer$3, exports);
	tslib_es6.__exportStar(eventWasCriticalHit$1, exports);
	tslib_es6.__exportStar(eyePosition$1, exports);
	tslib_es6.__exportStar(facingDirectionOf$1, exports);
	tslib_es6.__exportStar(_false$1, exports);
	tslib_es6.__exportStar(farthestPlayerFrom$1, exports);
	tslib_es6.__exportStar(filteredArray$1, exports);
	tslib_es6.__exportStar(firstOf$1, exports);
	tslib_es6.__exportStar(flagPosition$1, exports);
	tslib_es6.__exportStar(forward$1, exports);
	tslib_es6.__exportStar(globalVariable$1, exports);
	tslib_es6.__exportStar(hasSpawned$1, exports);
	tslib_es6.__exportStar(hasStatus$1, exports);
	tslib_es6.__exportStar(health$1, exports);
	tslib_es6.__exportStar(hero$2, exports);
	tslib_es6.__exportStar(heroIconString$1, exports);
	tslib_es6.__exportStar(heroOf$1, exports);
	tslib_es6.__exportStar(horizontalAngleFromDirection$1, exports);
	tslib_es6.__exportStar(horizontalAngleTowards$1, exports);
	tslib_es6.__exportStar(horizontalFacingAngleOf$1, exports);
	tslib_es6.__exportStar(horizontalSpeedOf$1, exports);
	tslib_es6.__exportStar(indexOfArrayValue$1, exports);
	tslib_es6.__exportStar(isAlive$1, exports);
	tslib_es6.__exportStar(isAssemblingHeroes$1, exports);
	tslib_es6.__exportStar(isBetweenRounds$1, exports);
	tslib_es6.__exportStar(isButtonHeld$1, exports);
	tslib_es6.__exportStar(isCommunicating$1, exports);
	tslib_es6.__exportStar(isCommunicatingAny$1, exports);
	tslib_es6.__exportStar(isCommunicatingAnyEmote$1, exports);
	tslib_es6.__exportStar(isCommunicatingAnyVoiceLine$1, exports);
	tslib_es6.__exportStar(isControlModePointLocked$1, exports);
	tslib_es6.__exportStar(isCrouching$1, exports);
	tslib_es6.__exportStar(isCTFModeInSuddenDeath$1, exports);
	tslib_es6.__exportStar(isDead$1, exports);
	tslib_es6.__exportStar(isFiringPrimary$1, exports);
	tslib_es6.__exportStar(isFiringSecondary$1, exports);
	tslib_es6.__exportStar(isFlagAtBase$1, exports);
	tslib_es6.__exportStar(isFlagBeingCarried$1, exports);
	tslib_es6.__exportStar(isGameInProgress$1, exports);
	tslib_es6.__exportStar(isHeroBeingPlayed$1, exports);
	tslib_es6.__exportStar(isInAir$1, exports);
	tslib_es6.__exportStar(isInLineOfSight$1, exports);
	tslib_es6.__exportStar(isInSetup$1, exports);
	tslib_es6.__exportStar(isInSpawnRoom$1, exports);
	tslib_es6.__exportStar(isInViewAngle$1, exports);
	tslib_es6.__exportStar(isMatchComplete$1, exports);
	tslib_es6.__exportStar(isMoving$1, exports);
	tslib_es6.__exportStar(isObjectiveComplete$1, exports);
	tslib_es6.__exportStar(isOnGround$1, exports);
	tslib_es6.__exportStar(isOnObjective$1, exports);
	tslib_es6.__exportStar(isOnWall$1, exports);
	tslib_es6.__exportStar(isPortraitOnFire$1, exports);
	tslib_es6.__exportStar(isStanding$1, exports);
	tslib_es6.__exportStar(isTeamOnDefense$1, exports);
	tslib_es6.__exportStar(isTeamOnOffense$1, exports);
	tslib_es6.__exportStar(isTrueForAll$1, exports);
	tslib_es6.__exportStar(isTrueForAny$1, exports);
	tslib_es6.__exportStar(isUsingAbility1$1, exports);
	tslib_es6.__exportStar(isUsingAbility2$1, exports);
	tslib_es6.__exportStar(isUsingUltimate$1, exports);
	tslib_es6.__exportStar(isWaitingForPlayers$1, exports);
	tslib_es6.__exportStar(lastCreatedEntity$1, exports);
	tslib_es6.__exportStar(lastDamageModificationId$1, exports);
	tslib_es6.__exportStar(lastDamageOverTimeId$1, exports);
	tslib_es6.__exportStar(lastHealOverTimeId$1, exports);
	tslib_es6.__exportStar(lastOf$1, exports);
	tslib_es6.__exportStar(lastTextId$1, exports);
	tslib_es6.__exportStar(left$1, exports);
	tslib_es6.__exportStar(localVectorOf$1, exports);
	tslib_es6.__exportStar(matchRound$1, exports);
	tslib_es6.__exportStar(matchTime$1, exports);
	tslib_es6.__exportStar(max$1, exports);
	tslib_es6.__exportStar(maxHealth$1, exports);
	tslib_es6.__exportStar(min$1, exports);
	tslib_es6.__exportStar(modulo$1, exports);
	tslib_es6.__exportStar(multiply$3, exports);
	tslib_es6.__exportStar(nearestWalkablePosition$1, exports);
	tslib_es6.__exportStar(normalize$1, exports);
	tslib_es6.__exportStar(normalizedHealth$1, exports);
	tslib_es6.__exportStar(not$1, exports);
	tslib_es6.__exportStar(_null$1, exports);
	tslib_es6.__exportStar(number$2, exports);
	tslib_es6.__exportStar(numberOfDeadPlayers$1, exports);
	tslib_es6.__exportStar(numberOfDeaths$1, exports);
	tslib_es6.__exportStar(numberOfEliminations$1, exports);
	tslib_es6.__exportStar(numberOfFinalBlows$1, exports);
	tslib_es6.__exportStar(numberOfHeroes$1, exports);
	tslib_es6.__exportStar(numberOfLivingPlayers$1, exports);
	tslib_es6.__exportStar(numberOfPlayers$1, exports);
	tslib_es6.__exportStar(numberOfPlayersOnObjective$1, exports);
	tslib_es6.__exportStar(objectiveIndex$1, exports);
	tslib_es6.__exportStar(objectivePosition$1, exports);
	tslib_es6.__exportStar(oppositeTeamOf$1, exports);
	tslib_es6.__exportStar(or$1, exports);
	tslib_es6.__exportStar(payloadPosition$1, exports);
	tslib_es6.__exportStar(payloadProgressPercentage$1, exports);
	tslib_es6.__exportStar(playerCarryingFlag$1, exports);
	tslib_es6.__exportStar(playerClosestToReticle$1, exports);
	tslib_es6.__exportStar(playerVariable$1, exports);
	tslib_es6.__exportStar(playersInSlot$1, exports);
	tslib_es6.__exportStar(playersInViewAngle$1, exports);
	tslib_es6.__exportStar(playersOnHero$1, exports);
	tslib_es6.__exportStar(playersWithinRadius$1, exports);
	tslib_es6.__exportStar(pointCapturePercentage$1, exports);
	tslib_es6.__exportStar(positionOf$1, exports);
	tslib_es6.__exportStar(raiseToPower$1, exports);
	tslib_es6.__exportStar(randomInteger$1, exports);
	tslib_es6.__exportStar(randomReal$1, exports);
	tslib_es6.__exportStar(randomValueInArray$1, exports);
	tslib_es6.__exportStar(randomizedArray$1, exports);
	tslib_es6.__exportStar(rayCastHitNormal$1, exports);
	tslib_es6.__exportStar(rayCastHitPlayer$1, exports);
	tslib_es6.__exportStar(rayCastHitPosition$1, exports);
	tslib_es6.__exportStar(removeFromArray$1, exports);
	tslib_es6.__exportStar(right$1, exports);
	tslib_es6.__exportStar(roundToInteger$1, exports);
	tslib_es6.__exportStar(scoreOf$1, exports);
	tslib_es6.__exportStar(sineFromDegrees$1, exports);
	tslib_es6.__exportStar(sineFromRadians$1, exports);
	tslib_es6.__exportStar(slotOf$1, exports);
	tslib_es6.__exportStar(sortedArray$1, exports);
	tslib_es6.__exportStar(speedOf$1, exports);
	tslib_es6.__exportStar(speedOfInDirection$1, exports);
	tslib_es6.__exportStar(squareRoot$1, exports);
	tslib_es6.__exportStar(string$2, exports);
	tslib_es6.__exportStar(subtract$2, exports);
	tslib_es6.__exportStar(tangentFromDegrees$1, exports);
	tslib_es6.__exportStar(tangentFromRadians$1, exports);
	tslib_es6.__exportStar(team$3, exports);
	tslib_es6.__exportStar(teamOf$1, exports);
	tslib_es6.__exportStar(teamScore$1, exports);
	tslib_es6.__exportStar(throttleOf$1, exports);
	tslib_es6.__exportStar(totalTimeElapsed$1, exports);
	tslib_es6.__exportStar(_true$1, exports);
	tslib_es6.__exportStar(ultimateChargePercent$1, exports);
	tslib_es6.__exportStar(up$1, exports);
	tslib_es6.__exportStar(valueInArray$1, exports);
	tslib_es6.__exportStar(vector$3, exports);
	tslib_es6.__exportStar(vectorTowards$1, exports);
	tslib_es6.__exportStar(velocityOf$1, exports);
	tslib_es6.__exportStar(verticalAngleFromDirection$1, exports);
	tslib_es6.__exportStar(verticalAngleTowards$1, exports);
	tslib_es6.__exportStar(verticalFacingAngleOf$1, exports);
	tslib_es6.__exportStar(verticalSpeedOf$1, exports);
	tslib_es6.__exportStar(victim$1, exports);
	tslib_es6.__exportStar(worldVectorOf$1, exports);
	tslib_es6.__exportStar(xComponentOf$1, exports);
	tslib_es6.__exportStar(yComponentOf$1, exports);
	tslib_es6.__exportStar(zComponentOf$1, exports);
	});

	unwrapExports(value$2);

	var variableOperation$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(variableOperation$1);
	var variableOperation_1$1 = variableOperation$1.Default;

	var waitBehavior$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * @param str Type '
	 * Then can see list of available string lists.
	 */
	exports.Default = function (str) { return str; };
	});

	unwrapExports(waitBehavior$1);
	var waitBehavior_1$1 = waitBehavior$1.Default;

	var type$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var HeroConstant = tslib_es6.__importStar(heroConstant$1);
	exports.HeroConstant = HeroConstant;
	var SlotRange = tslib_es6.__importStar(slotRange$1);
	exports.SlotRange = SlotRange;
	var TeamConstant = tslib_es6.__importStar(teamConstant$1);
	exports.TeamConstant = TeamConstant;
	var Variable = tslib_es6.__importStar(variable$1);
	exports.Variable = Variable;
	var EventPlayer = tslib_es6.__importStar(eventPlayer$2);
	exports.EventPlayer = EventPlayer;
	var Add = tslib_es6.__importStar(add$3);
	exports.Add = Add;
	var Array = tslib_es6.__importStar(array$1);
	exports.Array = Array;
	var AssisterParam = tslib_es6.__importStar(assisterParam$1);
	exports.AssisterParam = AssisterParam;
	var Barrier = tslib_es6.__importStar(barrier$1);
	exports.Barrier = Barrier;
	var Beam = tslib_es6.__importStar(beam$1);
	exports.Beam = Beam;
	var BeamReevaluation = tslib_es6.__importStar(beamReevaluation$1);
	exports.BeamReevaluation = BeamReevaluation;
	var Bool = tslib_es6.__importStar(bool$1);
	exports.Bool = Bool;
	var Button = tslib_es6.__importStar(button$1);
	exports.Button = Button;
	var Clipping = tslib_es6.__importStar(clipping$1);
	exports.Clipping = Clipping;
	var Color = tslib_es6.__importStar(color$1);
	exports.Color = Color;
	var Communication = tslib_es6.__importStar(communication$1);
	exports.Communication = Communication;
	var DamageModificationId = tslib_es6.__importStar(damageModificationId$1);
	exports.DamageModificationId = DamageModificationId;
	var DamageModificationReevaluation = tslib_es6.__importStar(damageModificationReevaluation$1);
	exports.DamageModificationReevaluation = DamageModificationReevaluation;
	var DamageOverTimeId = tslib_es6.__importStar(damageOverTimeId$1);
	exports.DamageOverTimeId = DamageOverTimeId;
	var DestinationParam = tslib_es6.__importStar(destinationParam$1);
	exports.DestinationParam = DestinationParam;
	var Divide = tslib_es6.__importStar(divide$3);
	exports.Divide = Divide;
	var Effect = tslib_es6.__importStar(effect$1);
	exports.Effect = Effect;
	var EffectReevaluation = tslib_es6.__importStar(effectReevaluation$1);
	exports.EffectReevaluation = EffectReevaluation;
	var Entity = tslib_es6.__importStar(entity$2);
	exports.Entity = Entity;
	var FacingReevaluation = tslib_es6.__importStar(facingReevaluation$1);
	exports.FacingReevaluation = FacingReevaluation;
	var HealOverTimeId = tslib_es6.__importStar(healOverTimeId$1);
	exports.HealOverTimeId = HealOverTimeId;
	var Hero = tslib_es6.__importStar(hero$3);
	exports.Hero = Hero;
	var HudTextReevaluation = tslib_es6.__importStar(hudTextReevaluation$1);
	exports.HudTextReevaluation = HudTextReevaluation;
	var Icon = tslib_es6.__importStar(icon$1);
	exports.Icon = Icon;
	var IconReevaluation = tslib_es6.__importStar(iconReevaluation$1);
	exports.IconReevaluation = IconReevaluation;
	var InvisibleTo = tslib_es6.__importStar(invisibleTo$1);
	exports.InvisibleTo = InvisibleTo;
	var InWorldTextReevaluation = tslib_es6.__importStar(inWorldTextReevaluation$1);
	exports.InWorldTextReevaluation = InWorldTextReevaluation;
	var Location = tslib_es6.__importStar(location_1$1);
	exports.Location = Location;
	var LosCheck = tslib_es6.__importStar(losCheck$1);
	exports.LosCheck = LosCheck;
	var Motion = tslib_es6.__importStar(motion$1);
	exports.Motion = Motion;
	var Multiply = tslib_es6.__importStar(multiply$2);
	exports.Multiply = Multiply;
	var Number = tslib_es6.__importStar(number$3);
	exports.Number = Number;
	var ObjectiveDescriptionReevaluation = tslib_es6.__importStar(objectiveDescriptionReevaluation$1);
	exports.ObjectiveDescriptionReevaluation = ObjectiveDescriptionReevaluation;
	var Operator = tslib_es6.__importStar(operator$1);
	exports.Operator = Operator;
	var PlayEffect = tslib_es6.__importStar(playEffect$2);
	exports.PlayEffect = PlayEffect;
	var Player = tslib_es6.__importStar(player$2);
	exports.Player = Player;
	var PlayersParam = tslib_es6.__importStar(playersParam$1);
	exports.PlayersParam = PlayersParam;
	var Reevaluation = tslib_es6.__importStar(reevaluation$1);
	exports.Reevaluation = Reevaluation;
	var Relative = tslib_es6.__importStar(relative$1);
	exports.Relative = Relative;
	var RoundingType = tslib_es6.__importStar(roundingType$1);
	exports.RoundingType = RoundingType;
	var Spectators = tslib_es6.__importStar(spectators$1);
	exports.Spectators = Spectators;
	var StartAcceleratingReevaluation = tslib_es6.__importStar(startAcceleratingReevaluation$1);
	exports.StartAcceleratingReevaluation = StartAcceleratingReevaluation;
	var StartThrottleBehavior = tslib_es6.__importStar(startThrottleBehavior$1);
	exports.StartThrottleBehavior = StartThrottleBehavior;
	var StartThrottleReevaluation = tslib_es6.__importStar(startThrottleReevaluation$1);
	exports.StartThrottleReevaluation = StartThrottleReevaluation;
	var Status = tslib_es6.__importStar(status$1);
	exports.Status = Status;
	var String = tslib_es6.__importStar(string$3);
	exports.String = String;
	var StringParam = tslib_es6.__importStar(stringParam$1);
	exports.StringParam = StringParam;
	var Subtract = tslib_es6.__importStar(subtract$3);
	exports.Subtract = Subtract;
	var Team = tslib_es6.__importStar(team$4);
	exports.Team = Team;
	var Text = tslib_es6.__importStar(text$1);
	exports.Text = Text;
	var TextId = tslib_es6.__importStar(textId$1);
	exports.TextId = TextId;
	var Transformation = tslib_es6.__importStar(transformation$1);
	exports.Transformation = Transformation;
	var Value = tslib_es6.__importStar(value$2);
	exports.Value = Value;
	var VariableOperation = tslib_es6.__importStar(variableOperation$1);
	exports.VariableOperation = VariableOperation;
	var Vector = tslib_es6.__importStar(vector$4);
	exports.Vector = Vector;
	var WaitBehavior = tslib_es6.__importStar(waitBehavior$1);
	exports.WaitBehavior = WaitBehavior;
	});

	unwrapExports(type$1);
	var type_1$1 = type$1.HeroConstant;
	var type_2$1 = type$1.SlotRange;
	var type_3$1 = type$1.TeamConstant;
	var type_4$1 = type$1.Variable;
	var type_5$1 = type$1.EventPlayer;
	var type_6$1 = type$1.Add;
	var type_7$1 = type$1.Array;
	var type_8$1 = type$1.AssisterParam;
	var type_9$1 = type$1.Barrier;
	var type_10$1 = type$1.Beam;
	var type_11$1 = type$1.BeamReevaluation;
	var type_12$1 = type$1.Bool;
	var type_13$1 = type$1.Button;
	var type_14$1 = type$1.Clipping;
	var type_15$1 = type$1.Color;
	var type_16$1 = type$1.Communication;
	var type_17$1 = type$1.DamageModificationId;
	var type_18$1 = type$1.DamageModificationReevaluation;
	var type_19$1 = type$1.DamageOverTimeId;
	var type_20$1 = type$1.DestinationParam;
	var type_21$1 = type$1.Divide;
	var type_22$1 = type$1.Effect;
	var type_23$1 = type$1.EffectReevaluation;
	var type_24$1 = type$1.Entity;
	var type_25$1 = type$1.FacingReevaluation;
	var type_26$1 = type$1.HealOverTimeId;
	var type_27$1 = type$1.Hero;
	var type_28$1 = type$1.HudTextReevaluation;
	var type_29$1 = type$1.Icon;
	var type_30$1 = type$1.IconReevaluation;
	var type_31$1 = type$1.InvisibleTo;
	var type_32$1 = type$1.InWorldTextReevaluation;
	var type_33$1 = type$1.Location;
	var type_34$1 = type$1.LosCheck;
	var type_35$1 = type$1.Motion;
	var type_36$1 = type$1.Multiply;
	var type_37$1 = type$1.Number;
	var type_38$1 = type$1.ObjectiveDescriptionReevaluation;
	var type_39$1 = type$1.Operator;
	var type_40$1 = type$1.PlayEffect;
	var type_41$1 = type$1.Player;
	var type_42$1 = type$1.PlayersParam;
	var type_43$1 = type$1.Reevaluation;
	var type_44$1 = type$1.Relative;
	var type_45$1 = type$1.RoundingType;
	var type_46$1 = type$1.Spectators;
	var type_47$1 = type$1.StartAcceleratingReevaluation;
	var type_48$1 = type$1.StartThrottleBehavior;
	var type_49$1 = type$1.StartThrottleReevaluation;
	var type_50$1 = type$1.Status;
	var type_51$1 = type$1.String;
	var type_52$1 = type$1.StringParam;
	var type_53$1 = type$1.Subtract;
	var type_54$1 = type$1.Team;
	var type_55$1 = type$1.Text;
	var type_56$1 = type$1.TextId;
	var type_57$1 = type$1.Transformation;
	var type_58$1 = type$1.Value;
	var type_59$1 = type$1.VariableOperation;
	var type_60$1 = type$1.Vector;
	var type_61$1 = type$1.WaitBehavior;

	var abort$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops execution of the action list.
	 */
	exports.abort = function () {
	    return "Abort";
	};
	});

	unwrapExports(abort$1);
	var abort_1$1 = abort$1.abort;

	var abortIf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops execution of the action list if the
	 * action’s condition evaluates to true, if
	 * it does not, the execution continues with
	 * the next action.
	 */
	exports.abortIf = function (
	/**
	 * Condition - Specifies whether the execution
	 * is stopped. Can use most Boolean based Value Syntax.
	 * - `Type.Bool.`
	 */
	condition) {
	    return "Abort If(" + condition + ")";
	};
	});

	unwrapExports(abortIf$1);
	var abortIf_1$1 = abortIf$1.abortIf;

	var abortIfConditionIsFalse$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops execution of the action list if at
	 * least one condition in the condition list
	 * is false. If all conditions are true, execution
	 * continues with the next action.
	 */
	exports.abortIfConditionIsFalse = function () {
	    return "Abort If Condition Is False";
	};
	});

	unwrapExports(abortIfConditionIsFalse$1);
	var abortIfConditionIsFalse_1$1 = abortIfConditionIsFalse$1.abortIfConditionIsFalse;

	var abortIfConditionIsTrue$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops execution of the action list if all
	 * conditions in the condition list is true.
	 * If any are false, execution continues with
	 * the next action.
	 */
	exports.abortIfConditionIsTrue = function () {
	    return "Abort If Condition Is True";
	};
	});

	unwrapExports(abortIfConditionIsTrue$1);
	var abortIfConditionIsTrue_1$1 = abortIfConditionIsTrue$1.abortIfConditionIsTrue;

	var allowButton$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Undoes the effect of the disallow button
	 * action for one or more players.
	 */
	exports.allowButton = function (
	/**
	 * Player - The player or players whose button
	 * is being reenabled. Can use most Player
	 * based Value Syntax.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Button - The logical button that is being reenabled.
	 * - `Type.Button.`
	 */
	button) {
	    return "Allow Button(" + player + ", " + button + ")";
	};
	});

	unwrapExports(allowButton$1);
	var allowButton_1$1 = allowButton$1.allowButton;

	var applyImpluse$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Applies an instantaneous change in velocity
	 * to the movement of one or more players.
	 */
	exports.applyImpluse = function (
	/**
	 * Player - The player or players whose velocity
	 * will be changed. Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Direction - The unit direction in which
	 * the impulse will be applied. This value
	 * is normalized internally. Can use most Vector
	 * based Value Syntax.
	 * - `Type.Vector.`
	 */
	direction, 
	/**
	 * Speed - The magnitude of the change to the
	 * velocities of the player or players. Can
	 * use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	speed, 
	/**
	 * Relative - Specifies whether the direction
	 * is relative to world coordinates or the
	 * local coordinates of the player or players.
	 * - `Type.Relative.`
	 */
	relative, 
	/**
	 * To World - Relative to the world’s coordinate system.
	 * - `Type.Motion.`
	 */
	motion) {
	    return "Apply Impluse(" + player + ", " + direction + ", " + speed + ", " + relative + ", " + motion + ")";
	};
	});

	unwrapExports(applyImpluse$1);
	var applyImpluse_1$1 = applyImpluse$1.applyImpluse;

	var bigMessage$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Displays a large message above the reticle
	 * that is visible to specific players.
	 */
	exports.bigMessage = function (
	/**
	 * Visible to - One or more players who will
	 * see the message. Can use most Value Syntax
	 * to select multiple players to specify.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * Header - The message to be displayed. Can
	 * use most String based Value Syntax to specify.
	 * - `Type.String.`
	 */
	header) {
	    return "Big Message(" + visibleTo + ", " + header + ")";
	};
	});

	unwrapExports(bigMessage$1);
	var bigMessage_1$1 = bigMessage$1.bigMessage;

	var chaseGlobalVariableAtRate$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Gradually modifies the value of a global
	 * variable at a specific rate. (A global variable
	 * is a variable that belongs to the game itself.)
	 */
	exports.chaseGlobalVariableAtRate = function (
	/**
	 * Variable - The variable the action will
	 * manipulate. Can use most Variable based Value Syntax.
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * Destination - The value that the global
	 * variable will eventually reach. The type
	 * of this value may be either a number or
	 * a vector, through the variable’s existing
	 * value must be of the same type before the
	 * chase begins. Can use most Number or Vector
	 * based Value Syntax to specify.
	 * - `Type.DestinationParam.`
	 */
	destination, 
	/**
	 * Player - The player whose variable will
	 * gradually change. If multiple players are
	 * provided, each of their variables will change independently.
	 * - `Type.Number.`
	 */
	rate, 
	/**
	 * Visible to - One or more players who will
	 * be able to see the icon. Can use most Value
	 * Syntax to select one or multiple players.
	 * - `Type.Reevaluation.`
	 */
	reevaluation) {
	    return "Chase Global Variable At Rate(" + variable + ", " + destination + ", " + rate + ", " + reevaluation + ")";
	};
	});

	unwrapExports(chaseGlobalVariableAtRate$1);
	var chaseGlobalVariableAtRate_1$1 = chaseGlobalVariableAtRate$1.chaseGlobalVariableAtRate;

	var chaseGlobalVariableOverTime$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Gradually modifies the value of a global
	 * variable over time. (A global variable is
	 * a variable that belongs to the game itself.)
	 */
	exports.chaseGlobalVariableOverTime = function (
	/**
	 * Variable - The variable the action will
	 * manipulate. Can use most Variable based Value Syntax.
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * Destination - The value that the global
	 * variable will eventually reach. The type
	 * of this value may be either a number or
	 * a vector, through the variable’s existing
	 * value must be of the same type before the
	 * chase begins. Can use most Number or Vector
	 * based Value Syntax to specify.
	 * - `Type.DestinationParam.`
	 */
	destination, 
	/**
	 * Destination - The value that the player
	 * variable will eventually reach. The type
	 * of this value may be either a number or
	 * a vector, through the variable’s existing
	 * value must be of the same type before the
	 * chase begins. Can use most Number or Vector
	 * based Value Syntax to specify.
	 * - `Type.Number.`
	 */
	duration, 
	/**
	 * Visible to - One or more players who will
	 * be able to see the icon. Can use most Value
	 * Syntax to select one or multiple players.
	 * - `Type.Reevaluation.`
	 */
	reevaluation) {
	    return "Chase Global Variable Over Time(" + variable + ", " + destination + ", " + duration + ", " + reevaluation + ")";
	};
	});

	unwrapExports(chaseGlobalVariableOverTime$1);
	var chaseGlobalVariableOverTime_1$1 = chaseGlobalVariableOverTime$1.chaseGlobalVariableOverTime;

	var chasePlayerVariableAtRate$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Gradually modifies the value of a player
	 * variable at a specific rate. (A player variable
	 * is a variable that belongs to a specific player.)
	 */
	exports.chasePlayerVariableAtRate = function (
	/**
	 * Player - The player whose variable will
	 * gradually change. If multiple players are
	 * provided, each of their variables will change independently.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Rate - The amount of change that will happen
	 * to the variable’s value each second. Can
	 * use most Number based Value Syntax to specify.
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * Variable - The variable the action will
	 * manipulate. Can use most Variable based Value Syntax.
	 * - `Type.DestinationParam.`
	 */
	destination, 
	/**
	 * Player - The player whose variable will
	 * gradually change. If multiple players are
	 * provided, each of their variables will change independently.
	 * - `Type.Number.`
	 */
	rate, 
	/**
	 * Visible to - One or more players who will
	 * be able to see the icon. Can use most Value
	 * Syntax to select one or multiple players.
	 * - `Type.Reevaluation.`
	 */
	reevaluation) {
	    return "Chase Player Variable At Rate(" + player + ", " + variable + ", " + destination + ", " + rate + ", " + reevaluation + ")";
	};
	});

	unwrapExports(chasePlayerVariableAtRate$1);
	var chasePlayerVariableAtRate_1$1 = chasePlayerVariableAtRate$1.chasePlayerVariableAtRate;

	var chasePlayerVariableOverTime$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Gradually modifies the value of a player
	 * variable over time. (A player variable is
	 * a variable that belongs to a specific player.)
	 */
	exports.chasePlayerVariableOverTime = function (
	/**
	 * Player - The player whose variable will
	 * gradually change. If multiple players are
	 * provided, each of their variables will change independently.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Reevaluation - Specifies which of this action’s
	 * inputs will be continuously reevaluated.
	 * This action will keep asking for and using
	 * new values from reevaluated inputs. You
	 * can specify a Destination and Duration or nothing.
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * Variable - The variable the action will
	 * manipulate. Can use most Variable based Value Syntax.
	 * - `Type.DestinationParam.`
	 */
	destination, 
	/**
	 * Destination - The value that the player
	 * variable will eventually reach. The type
	 * of this value may be either a number or
	 * a vector, through the variable’s existing
	 * value must be of the same type before the
	 * chase begins. Can use most Number or Vector
	 * based Value Syntax to specify.
	 * - `Type.Number.`
	 */
	duration, 
	/**
	 * Visible to - One or more players who will
	 * be able to see the icon. Can use most Value
	 * Syntax to select one or multiple players.
	 * - `Type.Reevaluation.`
	 */
	reevaluation) {
	    return "Chase Player Variable Over Time(" + player + ", " + variable + ", " + destination + ", " + duration + ", " + reevaluation + ")";
	};
	});

	unwrapExports(chasePlayerVariableOverTime$1);
	var chasePlayerVariableOverTime_1$1 = chasePlayerVariableOverTime$1.chasePlayerVariableOverTime;

	var clearStatus$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Clears a status that was applied from a
	 * set status action from one or more players.
	 */
	exports.clearStatus = function (
	/**
	 * Player - The player or players from whom
	 * the status will be removed. Can use most
	 * Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Status - The Status to be removed from the
	 * player or players. Values include Hacked,
	 * Burning, Knocked Down, Asleep, Frozen, Unkillable,
	 * Invincible, Phased Out, Rooted, or Stunned.
	 * - `Type.Status.`
	 */
	status) {
	    return "Clear Status(" + player + ", " + status + ")";
	};
	});

	unwrapExports(clearStatus$1);
	var clearStatus_1$1 = clearStatus$1.clearStatus;

	var communicate$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Causes one or more players to use an emote,
	 * voice line, or other equipped communication.
	 */
	exports.communicate = function (
	/**
	 * Player - The player or players to perform
	 * the communication. Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Type - The type of communication. Can use
	 * any equipped emote, equipped voice line,
	 * or any other communication effect.
	 * - `Type.Communication.`
	 */
	type) {
	    return "Communicate(" + player + ", " + type + ")";
	};
	});

	unwrapExports(communicate$1);
	var communicate_1$1 = communicate$1.communicate;

	var createBeamEffect$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Creates an in-world beam effect entity.
	 * This effect entity will persist until destroyed.
	 * To obtain a reference to this entity,
	 * use the last created entity value.
	 * This action will fail if too many entities have been created.
	 */
	exports.createBeamEffect = function (
	/**
	 * One or more players who will be able to see the effect.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * The type of effect to be created.
	 * - `Type.Beam.`
	 */
	beamType, 
	/**
	 * The effect's start position. If this value is a player,
	 * then the effect will move along with the player.
	 * therwise, the value is interpreted as a position in the world.
	 * - `Type.Vector.`
	 */
	startPosition, 
	/**
	 * The effect's end position. If this value is a player,
	 * then the effect will move along with the player.
	 * Otherwise, the value is interpreted as a position in the world.
	 * - `Type.Vector.`
	 */
	endPosition, 
	/**
	 * The color of the beam effect to be created.
	 * If a particular team is chosen, The effect will either
	 * be red or blue, depending on whether the team hostile to viewer.
	 * Does not apply to sound effects. Only the 'Good'
	 * and 'Bad' beam effects can have color applied.
	 * - `Type.Color.`
	 */
	color, 
	/**
	 * Specifies which of this action's inputs will be
	 * continuously reevaluated. The effect will keep asking
	 * for and using new values from reevaluated inputs.
	 * - `Type.BeamReevaluation.`
	 */
	reevaluation) {
	    return "Create Beam Effect(" + visibleTo + ", " + beamType + ", " + startPosition + ", " + endPosition + ", " + color + ", " + reevaluation + ")";
	};
	});

	unwrapExports(createBeamEffect$1);
	var createBeamEffect_1$1 = createBeamEffect$1.createBeamEffect;

	var createDummyBot$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Adds a new bot to the specified slot on the
	 * specified team so long as the slot is available.
	 * This bot will only move, fire or use
	 * abilities if executing workshop actions.
	 */
	exports.createDummyBot = function (
	/**
	 * The hero that the bot will be. If more than
	 * one hero is provided, One will be chosen at random.
	 * - `Type.Hero.`
	 */
	hero, 
	/**
	 * The team on which to create the bot, The 'All'
	 * option only works in free-for-all game modes, will the
	 * 'Team' options only work in team-based game modes.
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * The player slot which will receive the bot
	 * (-1 for first available slot).
	 * Up to 6 bots may be added to each team,
	 * or 12 bots to the free-for-all team,
	 * regardless of lobby settings.
	 * - `Type.SlotRange.`
	 */
	slot, 
	/**
	 * The initial position where the bot will appear.
	 * - `Type.Vector.`
	 */
	position, 
	/**
	 * The initial direction that the bot will face.
	 * - `Type.Vector.`
	 */
	facing) {
	    return "Create Dummy Bot(" + hero + ", " + team + ", " + slot + ", " + position + ", " + facing + ")";
	};
	});

	unwrapExports(createDummyBot$1);
	var createDummyBot_1$1 = createDummyBot$1.createDummyBot;

	var createEffect$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Creates an in-world effect entity. This
	 * effect entity will persist until destroyed,
	 * to obtain a reference to this entity, use
	 * the last created entity value. This action
	 * will fail if too many entities have been created.
	 */
	exports.createEffect = function (
	/**
	 * Visible to - One or more players who will
	 * be able to see the effect. Can use most
	 * Value Syntax to select one or multiple players.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * Color - The color of the effect to be created.
	 * IF a particular team is chosen, the effect
	 * will either be red or blue, depending on
	 * whether the team is hostile to the viewer.
	 * Does not apply to sound effects. (Sphere,
	 * Light Shaft, Orb, Ring, Cloud, Sparkles,
	 * Good Aura, Bad Aura, Energy Sound, Pick-Up
	 * Sound, Good Aura Sound, Bad Aura Sound,
	 * Sparkles Sound, Smoke Sound, Decal Sound, Beacon Sound)
	 * - `Type.Effect.`
	 */
	type, 
	/**
	 * Position - The effect’s position. If this
	 * value is a player, then the effect will
	 * move along with the player, otherwise, the
	 * value is interpreted as a position in the
	 * world. Can use most Player or Vector based
	 * Value Syntax. (Sphere, Light Shaft, Orb,
	 * Ring, Cloud, Sparkles, Good Aura, Bad Aura,
	 * Energy Sound, Pick-Up Sound, Good Aura Sound,
	 * Bad Aura Sound, Sparkles Sound, Smoke Sound,
	 * Decal Sound, Beacon Sound)
	 * - `Type.Color.`
	 */
	color, 
	/**
	 * Radius - The effect’s radius in meters.
	 * Sound effects have their volume affected
	 * instead. (Sphere, Light Shaft, Orb, Ring,
	 * Cloud, Sparkles, Good Aura, Bad Aura, Energy
	 * Sound, Pick-Up Sound, Good Aura Sound, Bad
	 * Aura Sound, Sparkles Sound, Smoke Sound,
	 * Decal Sound, Beacon Sound)
	 * - `Type.Vector.`
	 */
	position, 
	/**
	 * Reevaluation - Specifies which of this action’s
	 * inputs will be continuously reevaluated,
	 * the effect will keep asking for and using
	 * new values from reevaluated inputs.
	 * - `Type.Number.`
	 */
	radius, 
	/**
	 * Visible to - One or more players who will
	 * be able to see the icon. Can use most Value
	 * Syntax to select one or multiple players.
	 * - `Type.EffectReevaluation.`
	 */
	reevaluation) {
	    return "Create Effect(" + visibleTo + ", " + type + ", " + color + ", " + position + ", " + radius + ", " + reevaluation + ")";
	};
	});

	unwrapExports(createEffect$1);
	var createEffect_1$1 = createEffect$1.createEffect;

	var createHudText$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Creates HUD text visible to specific players
	 * at specific location on the screen. This
	 * text will persist until destroyed. To obtain
	 * a reference to this text, use the last text
	 * ID value. This action will fail if too many
	 * text elements have been created.
	 */
	exports.createHudText = function (
	/**
	 * Header - The header text to be displayed
	 * (can be blank). Can use most String based
	 * Value Syntax to populate.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * Subheader - The subheader text to be displayed
	 * (can be blank). Can use most String based
	 * Value Syntax to populate.
	 * - `Type.String.`
	 */
	header, 
	/**
	 * Text - The body text to be displayed (can
	 * be blank). Can use most String based Value
	 * Syntax to populate.
	 * - `Type.StringParam.`
	 */
	subHeader, 
	/**
	 * Location - The location on the screen where
	 * text will appear. You can choose left, top, or right.
	 * - `Type.StringParam.`
	 */
	text, 
	/**
	 * Sort Order - The Sort Order of the text
	 * relative to other text in the same location.
	 * Text with a higher sort order will come
	 * after text with a lower sort order. Can
	 * use most Number based Value Syntax.
	 * - `Type.Location.`
	 */
	location, 
	/**
	 * Header Color - The color of the Header text
	 * to be created. If a particular team is chosen,
	 * the effect will either be red or blue.
	 * - `Type.Number.`
	 */
	sortOrder, 
	/**
	 * Subheader Color - The color of the Subheader
	 * text to be created. If a particular team
	 * is chosen, the effect will either be red or blue.
	 * - `Type.Color.`
	 */
	headerColor, 
	/**
	 * Text Color - The color of the body text
	 * to be created. If a particular team is chosen,
	 * the effect will either be red or blue.
	 * - `Type.Color.`
	 */
	subHeaderColor, 
	/**
	 * Reevaluation - Specifies which of this action’s
	 * inputs will be continuously reevaluated,
	 * the text will keep asking for and using
	 * new values from reevaluated inputs.
	 * - `Type.Color.`
	 */
	textColor, 
	/**
	 * Visible to - One or more players who will
	 * be able to see the icon. Can use most Value
	 * Syntax to select one or multiple players.
	 * - `Type.HudTextReevaluation.`
	 */
	reevaluation, 
	/**
	 * Whether spectators can see the text or not.
	 * - `Type.Spectators.`
	 */
	spectators) {
	    return "Create Hud Text(" + visibleTo + ", " + header + ", " + subHeader + ", " + text + ", " + location + ", " + sortOrder + ", " + headerColor + ", " + subHeaderColor + ", " + textColor + ", " + reevaluation + ", " + spectators + ")";
	};
	});

	unwrapExports(createHudText$1);
	var createHudText_1$1 = createHudText$1.createHudText;

	var createIcon$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Creates an in-world entity. This icon entity
	 * will persist until destroyed. To obtain
	 * a reference to this entity, use the last
	 * created entity value. This action will fail
	 * if too many entities have been created.
	 */
	exports.createIcon = function (
	/**
	 * Position - The icon’s position. If this
	 * value is a player, then the icon will appear
	 * above the player’s head, otherwise, the
	 * value is interpreted as a position in the
	 * world. Can use most Player or Vector based Value Syntax.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * Icon - The icon to be created. (Arrow: Down,
	 * Arrow: Left, Arrow: Right, Arrow: Up, Asterisk,
	 * Bolt, Checkmark, Circle, Club, Diamond,
	 * Dizzy, Exclamation Mark, Eye, Fire, Flag,
	 * Halo, Happy, Heart, Moon, No, Plus, Poison,
	 * Poison 2, Question Mark, Radioactive, Recycle,
	 * Ring Thick, Ring Thin, Sad, Skull, Spade,
	 * Spiral, Stop, Trashcan, Warning, X)
	 * - `Type.Vector.`
	 */
	position, 
	/**
	 * Reevaluation - Specifies which of this action’s
	 * inputs will be continously reevaluated,
	 * the icon will keep asking for and using
	 * new values from reevaluated inputs. (Arrow:
	 * Down, Arrow: Left, Arrow: Right, Arrow:
	 * Up, Asterisk, Bolt, Checkmark, Circle, Club,
	 * Diamond, Dizzy, Exclamation Mark, Eye, Fire,
	 * Flag, Halo, Happy, Heart, Moon, No, Plus,
	 * Poison, Poison 2, Question Mark, Radioactive,
	 * Recycle, Ring Thick, Ring Thin, Sad, Skull,
	 * Spade, Spiral, Stop, Trashcan, Warning,
	 * X, Visible to and position, Position, Visible to, None)
	 * - `Type.Icon.`
	 */
	icon, 
	/**
	 * Visible to - One or more players who will
	 * be able to see the icon. Can use most Value
	 * Syntax to select one or multiple players.
	 * - `Type.IconReevaluation.`
	 */
	reevaluation, 
	/**
	 * Icon Color - The color of the icon to be
	 * created. IF a particular team is chosen,
	 * the icon will either be red or blue, depending
	 * on whether the team is hostile to the viewer.
	 * (Arrow: Down, Arrow: Left, Arrow: Right,
	 * Arrow: Up, Asterisk, Bolt, Checkmark, Circle,
	 * Club, Diamond, Dizzy, Exclamation Mark,
	 * Eye, Fire, Flag, Halo, Happy, Heart, Moon,
	 * No, Plus, Poison, Poison 2, Question Mark,
	 * Radioactive, Recycle, Ring Thick, Ring Thin,
	 * Sad, Skull, Spade, Spiral, Stop, Trashcan,
	 * Warning, X, Visible to and position, Position,
	 * Visible to, None)
	 * - `Type.Color.`
	 */
	iconColor, 
	/**
	 * Show when offscreen - Should this icon still
	 * appear even when it is behind you? Can use
	 * most Boolean based Value Syntax to specify.
	 * - `Type.Bool.`
	 */
	showWhenOffscreen) {
	    return "Create Icon(" + visibleTo + ", " + position + ", " + icon + ", " + reevaluation + ", " + iconColor + ", " + showWhenOffscreen + ")";
	};
	});

	unwrapExports(createIcon$1);
	var createIcon_1$1 = createIcon$1.createIcon;

	var createInWorldText$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Creates in-world text visible to specific
	 * players at specific position in the world.
	 * This text will persist until destroyed.
	 * To obtain a reference to this text, use
	 * the last text ID value. This action will
	 * fail if too many text elements have been created.
	 */
	exports.createInWorldText = function (
	/**
	 * Visible to - One or more players who will
	 * see the HUD text. Can use most Value Syntax
	 * to select one or multiple players.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * Header - The header text to be displayed
	 * (can be blank). Can use most String based
	 * Value Syntax to populate.
	 * - `Type.String.`
	 */
	header, 
	/**
	 * Position - The text’s position. If this
	 * value is a player, then the text will appear
	 * above the player’s head. Otherwise, the
	 * value is interpreted as a position in the
	 * world. Can use most Player or Vector based Value Syntax.
	 * - `Type.Vector.`
	 */
	position, 
	/**
	 * Scale - The text’s scale. Can use most Number
	 * based Value Syntax.
	 * - `Type.Number.`
	 */
	scale, 
	/**
	 * Clipping - Specifies whether the text can
	 * be seen through walls or is instead clipped.
	 * - `Type.Clipping.`
	 */
	clipping, 
	/**
	 * Clip Against Surfaces - The text may be
	 * partially or completely obscured by walls,
	 * floors, ceilings, players, or other solid objects.
	 * - `Type.InWorldTextReevaluation.`
	 */
	reevaluation, 
	/**
	 * Specifies the color of the in-world text to use.
	 * - `Type.Color.`
	 */
	textColor, 
	/**
	 * Whether spectators can see the text or not.
	 * - `Type.Spectators.`
	 */
	spectators) {
	    return "Create In World Text(" + visibleTo + ", " + header + ", " + position + ", " + scale + ", " + clipping + ", " + reevaluation + ", " + textColor + ", " + spectators + ")";
	};
	});

	unwrapExports(createInWorldText$1);
	var createInWorldText_1$1 = createInWorldText$1.createInWorldText;

	var damage$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Applies instantaneous damage to one or more
	 * players, possibly killing the players.
	 */
	exports.damage = function (
	/**
	 * Player - The player or players who will
	 * receive damage. Can use most Player based
	 * Value Syntax to select one or multiple players.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Damager - The player who will receive credit
	 * for the damage. A damager of null indicates
	 * no player will receive credit. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	damager, 
	/**
	 * Amount - The amount of damage to apply.
	 * This amount may be modified by buffs, debuffs,
	 * or armor. Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	amount) {
	    return "Damage(" + player + ", " + damager + ", " + amount + ")";
	};
	});

	unwrapExports(damage$1);
	var damage_1$1 = damage$1.damage;

	var declareMatchDraw$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Instantly ends the match in a draw. This
	 * action has no effect in free-for-all modes.
	 */
	exports.declareMatchDraw = function () {
	    return "Declare Match Draw";
	};
	});

	unwrapExports(declareMatchDraw$1);
	var declareMatchDraw_1$1 = declareMatchDraw$1.declareMatchDraw;

	var declarePlayerVictory$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Instantly ends the match with the specific
	 * player as the winner. This action only has
	 * an effect in free-for-all modes.
	 */
	exports.declarePlayerVictory = function (
	/**
	 * Player - The winning player. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Declare Player Victory(" + player + ")";
	};
	});

	unwrapExports(declarePlayerVictory$1);
	var declarePlayerVictory_1$1 = declarePlayerVictory$1.declarePlayerVictory;

	var declareRoundVictory$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Declare a team as the current round winner.
	 * This only works in the control and elimination game modes.
	 */
	exports.declareRoundVictory = function (
	/**
	 * Team - Round winning team. Can use most
	 * Team based Value Syntax for this value.
	 * - `Type.Team.`
	 */
	roundWinningTeam) {
	    return "Declare Round Victory(" + roundWinningTeam + ")";
	};
	});

	unwrapExports(declareRoundVictory$1);
	var declareRoundVictory_1$1 = declareRoundVictory$1.declareRoundVictory;

	var declareTeamVictory$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Instantly ends the match with the specified
	 * team as the winner. This action has no effect
	 * in free-for-all modes.
	 */
	exports.declareTeamVictory = function (
	/**
	 * Team - The winning team. Can use most Team
	 * based Value Syntax for this value.
	 * - `Type.Team.`
	 */
	team) {
	    return "Declare Team Victory(" + team + ")";
	};
	});

	unwrapExports(declareTeamVictory$1);
	var declareTeamVictory_1$1 = declareTeamVictory$1.declareTeamVictory;

	var destroyAllDummyBot$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Removes all dummy bots from the match.
	 */
	exports.destroyAllDummyBot = function () {
	    return "Destroy All Dummy Bot";
	};
	});

	unwrapExports(destroyAllDummyBot$1);
	var destroyAllDummyBot_1$1 = destroyAllDummyBot$1.destroyAllDummyBot;

	var destroyAllEffects$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Destroys all effect entities created by create effect.
	 */
	exports.destroyAllEffects = function () {
	    return "Destroy All Effects";
	};
	});

	unwrapExports(destroyAllEffects$1);
	var destroyAllEffects_1$1 = destroyAllEffects$1.destroyAllEffects;

	var destroyAllHudText$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Destroys all hud text that was created by
	 * the create hud text action.
	 */
	exports.destroyAllHudText = function () {
	    return "Destroy All Hud Text";
	};
	});

	unwrapExports(destroyAllHudText$1);
	var destroyAllHudText_1$1 = destroyAllHudText$1.destroyAllHudText;

	var destroyAllIcons$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Destroys all icon entities created by create icon.
	 */
	exports.destroyAllIcons = function () {
	    return "Destroy All Icons";
	};
	});

	unwrapExports(destroyAllIcons$1);
	var destroyAllIcons_1$1 = destroyAllIcons$1.destroyAllIcons;

	var destroyAllInWorldText$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Destroys all in-world text created by the
	 * create in-world effect.
	 */
	exports.destroyAllInWorldText = function () {
	    return "Destroy All In World Text";
	};
	});

	unwrapExports(destroyAllInWorldText$1);
	var destroyAllInWorldText_1$1 = destroyAllInWorldText$1.destroyAllInWorldText;

	var destroyDummyBot$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Removes the specified dummy bot from the match.
	 */
	exports.destroyDummyBot = function (
	/**
	 * The team to remove the dummy bot from. The 'All'
	 * option only works in free-for-all game modes,
	 * while the 'team' options only work in team-based game modes.
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * The slot to remove the dummy bot from.
	 * - `Type.SlotRange.`
	 */
	slot) {
	    return "Destroy Dummy Bot(" + team + ", " + slot + ")";
	};
	});

	unwrapExports(destroyDummyBot$1);
	var destroyDummyBot_1$1 = destroyDummyBot$1.destroyDummyBot;

	var destroyEffect$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Destroys an effect entity that was created
	 * by create effect.
	 */
	exports.destroyEffect = function (
	/**
	 * Entity - Specifies which effect entity to
	 * destroy. This entity may be the last created
	 * entity or a variable into which last created
	 * entity was earlier stored.
	 * - `Type.Entity.`
	 */
	entity) {
	    return "Destroy Effect(" + entity + ")";
	};
	});

	unwrapExports(destroyEffect$1);
	var destroyEffect_1$1 = destroyEffect$1.destroyEffect;

	var destroyHudText$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Destroys hud text that was created by create hud text.
	 */
	exports.destroyHudText = function (
	/**
	 * Text ID - Specifies which hud text to destroy.
	 * This ID may be last text ID or a variable
	 * into which last text ID was earlier stored.
	 * - `Type.Text.`
	 */
	textId) {
	    return "Destroy Hud Text(" + textId + ")";
	};
	});

	unwrapExports(destroyHudText$1);
	var destroyHudText_1$1 = destroyHudText$1.destroyHudText;

	var destroyIcon$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Destroys an icon entity that was created by create icon.
	 */
	exports.destroyIcon = function (
	/**
	 * Text ID - Specifies which icon to destroy.
	 * This ID may be last text ID or a variable
	 * into which last create entity was earlier stored.
	 * - `Type.Entity.`
	 */
	entity) {
	    return "Destroy Icon(" + entity + ")";
	};
	});

	unwrapExports(destroyIcon$1);
	var destroyIcon_1$1 = destroyIcon$1.destroyIcon;

	var destroyInWorldText$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Destroys in-world text that was created
	 * by create in-world text.
	 */
	exports.destroyInWorldText = function (
	/**
	 * Text Id - A Reference to the last piece
	 * of text created by the event player (or
	 * created at the global level) via the create
	 * hud text or create in-world text action.
	 * - `Type.Text.`
	 */
	textId) {
	    return "Destroy In World Text(" + textId + ")";
	};
	});

	unwrapExports(destroyInWorldText$1);
	var destroyInWorldText_1$1 = destroyInWorldText$1.destroyInWorldText;

	var disableBuiltInGameModeAnnouncer$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Disables game mode announcements from the
	 * announcer until reenabled or the match ends.
	 */
	exports.disableBuiltInGameModeAnnouncer = function () {
	    return "Disable Built In Game Mode Announcer";
	};
	});

	unwrapExports(disableBuiltInGameModeAnnouncer$1);
	var disableBuiltInGameModeAnnouncer_1$1 = disableBuiltInGameModeAnnouncer$1.disableBuiltInGameModeAnnouncer;

	var disableBuiltInGameModeCompletion$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Disables completion of the match from the
	 * game mode itself, only allowing the match
	 * to be completed by scripting commands.
	 */
	exports.disableBuiltInGameModeCompletion = function () {
	    return "Disable Built In Game Mode Completion";
	};
	});

	unwrapExports(disableBuiltInGameModeCompletion$1);
	var disableBuiltInGameModeCompletion_1$1 = disableBuiltInGameModeCompletion$1.disableBuiltInGameModeCompletion;

	var disableBuiltInGameModeMusic$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Disables all game-mode music until reenabled
	 * or the match ends.
	 */
	exports.disableBuiltInGameModeMusic = function () {
	    return "Disable Built In Game Mode Music";
	};
	});

	unwrapExports(disableBuiltInGameModeMusic$1);
	var disableBuiltInGameModeMusic_1$1 = disableBuiltInGameModeMusic$1.disableBuiltInGameModeMusic;

	var disableBuiltInGameModeRespawning$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Disables automatic respawning for one or
	 * more players, only allowing respawning by
	 * scripting commands.
	 */
	exports.disableBuiltInGameModeRespawning = function (
	/**
	 * Player - The player or players whose respawning
	 * is affected. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.PlayersParam.`
	 */
	players) {
	    return "Disable Built In Game Mode Respawning(" + players + ")";
	};
	});

	unwrapExports(disableBuiltInGameModeRespawning$1);
	var disableBuiltInGameModeRespawning_1$1 = disableBuiltInGameModeRespawning$1.disableBuiltInGameModeRespawning;

	var disableBuiltInGameModeScoring$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Disables changes to player and team scores
	 * from the game mode itself, only allowing
	 * scores to be changed by scripting commands.
	 */
	exports.disableBuiltInGameModeScoring = function () {
	    return "Disable Built In Game Mode Scoring";
	};
	});

	unwrapExports(disableBuiltInGameModeScoring$1);
	var disableBuiltInGameModeScoring_1$1 = disableBuiltInGameModeScoring$1.disableBuiltInGameModeScoring;

	var disableDeathSpectateAllPlayers$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Undoes the effect of the enable death spectate
	 * all players action for one or more players.
	 */
	exports.disableDeathSpectateAllPlayers = function (
	/**
	 * Player - The player or players whose default
	 * death spectate behavior is restored. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Disable Death Spectate All Players(" + player + ")";
	};
	});

	unwrapExports(disableDeathSpectateAllPlayers$1);
	var disableDeathSpectateAllPlayers_1$1 = disableDeathSpectateAllPlayers$1.disableDeathSpectateAllPlayers;

	var disableDeathSpectateTargetHud$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Undoes the effect of the enable death spectate
	 * target hud action for one or more players.
	 */
	exports.disableDeathSpectateTargetHud = function (
	/**
	 * Player - The player or players who will
	 * revert to seeing their own HUD while death
	 * spectating. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Disable Death Spectate Target Hud(" + player + ")";
	};
	});

	unwrapExports(disableDeathSpectateTargetHud$1);
	var disableDeathSpectateTargetHud_1$1 = disableDeathSpectateTargetHud$1.disableDeathSpectateTargetHud;

	var disallowButton$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Disables a logical button for one or more
	 * players such that pressing it has no effect.
	 */
	exports.disallowButton = function (
	/**
	 * Player - The player executing this rule,
	 * as specified by the event. May be the same
	 * as the attacker or victim. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Button - The logical button that is being disabled.
	 * - `Type.Button.`
	 */
	button) {
	    return "Disallow Button(" + player + ", " + button + ")";
	};
	});

	unwrapExports(disallowButton$1);
	var disallowButton_1$1 = disallowButton$1.disallowButton;

	var enableBuiltInGameModeAnnouncer$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Undoes the effect of the disable built-in
	 * game mode announcer action.
	 */
	exports.enableBuiltInGameModeAnnouncer = function () {
	    return "Enable Built In Game Mode Announcer";
	};
	});

	unwrapExports(enableBuiltInGameModeAnnouncer$1);
	var enableBuiltInGameModeAnnouncer_1$1 = enableBuiltInGameModeAnnouncer$1.enableBuiltInGameModeAnnouncer;

	var enableBuiltInGameModeCompletion$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Undoes the effect of the disable built-in
	 * game mode completion action.
	 */
	exports.enableBuiltInGameModeCompletion = function () {
	    return "Enable Built In Game Mode Completion";
	};
	});

	unwrapExports(enableBuiltInGameModeCompletion$1);
	var enableBuiltInGameModeCompletion_1$1 = enableBuiltInGameModeCompletion$1.enableBuiltInGameModeCompletion;

	var enableBuiltInGameModeMusic$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Undoes the effect of the disable built-in
	 * game mode music action.
	 */
	exports.enableBuiltInGameModeMusic = function () {
	    return "Enable Built In Game Mode Music";
	};
	});

	unwrapExports(enableBuiltInGameModeMusic$1);
	var enableBuiltInGameModeMusic_1$1 = enableBuiltInGameModeMusic$1.enableBuiltInGameModeMusic;

	var enableBuiltInGameModeRespawning$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Undoes the effect of the disable built-in
	 * game mode respawning for one or more players.
	 */
	exports.enableBuiltInGameModeRespawning = function (
	/**
	 * Player - The player or players whose respawning
	 * is affected. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.PlayersParam.`
	 */
	players) {
	    return "Enable Built In Game Mode Respawning(" + players + ")";
	};
	});

	unwrapExports(enableBuiltInGameModeRespawning$1);
	var enableBuiltInGameModeRespawning_1$1 = enableBuiltInGameModeRespawning$1.enableBuiltInGameModeRespawning;

	var enableBuiltInGameModeScoring$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Undoes the effect of the disable built-in
	 * game mode scoring action.
	 */
	exports.enableBuiltInGameModeScoring = function () {
	    return "Enable Built In Game Mode Scoring";
	};
	});

	unwrapExports(enableBuiltInGameModeScoring$1);
	var enableBuiltInGameModeScoring_1$1 = enableBuiltInGameModeScoring$1.enableBuiltInGameModeScoring;

	var enableDeathSpectateAllPlayers$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Allows one or more players to spectate all
	 * players when dead, as opposed to only allies.
	 */
	exports.enableDeathSpectateAllPlayers = function (
	/**
	 * Player - The player or players who will
	 * be allowed to spectate all players. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Enable Death Spectate All Players(" + player + ")";
	};
	});

	unwrapExports(enableDeathSpectateAllPlayers$1);
	var enableDeathSpectateAllPlayers_1$1 = enableDeathSpectateAllPlayers$1.enableDeathSpectateAllPlayers;

	var enableDeathSpectateTargetHud$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Allows one or more players to see their
	 * target’s HUD when dead instead of their
	 * own while death spectating.
	 */
	exports.enableDeathSpectateTargetHud = function (
	/**
	 * Player - The player or players who will
	 * begin seeing their spectate’s target’s hud
	 * while death spectating. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Enable Death Spectate Target Hud(" + player + ")";
	};
	});

	unwrapExports(enableDeathSpectateTargetHud$1);
	var enableDeathSpectateTargetHud_1$1 = enableDeathSpectateTargetHud$1.enableDeathSpectateTargetHud;

	var goToAssembleHeroes$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Go to the assemble heroes phase of the game
	 * mode. Only works if a game is in progress.
	 */
	exports.goToAssembleHeroes = function () {
	    return "Go To Assemble Heroes";
	};
	});

	unwrapExports(goToAssembleHeroes$1);
	var goToAssembleHeroes_1$1 = goToAssembleHeroes$1.goToAssembleHeroes;

	var heal$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Provides an instantaneous heal to one or
	 * more players. This heal will not resurrect dead players.
	 */
	exports.heal = function (
	/**
	 * Player - The player or players whose health
	 * will be restored. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Player - One or more players who will receive
	 * the heal over time. Can use most Player
	 * based Value Syntax.
	 * - `Type.AssisterParam.`
	 */
	healer, 
	/**
	 * Amount - The amount of healing to apply.
	 * This amount may be modified by buffs or
	 * debuffs, healing is capped by each player’s
	 * max health. Can use most Number based Value
	 * Syntax for this value.
	 * - `Type.Number.`
	 */
	amount) {
	    return "Heal(" + player + ", " + healer + ", " + amount + ")";
	};
	});

	unwrapExports(heal$1);
	var heal_1$1 = heal$1.heal;

	var kill$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Instantly kills one or more players.
	 */
	exports.kill = function (
	/**
	 * Player - The player or players who will
	 * be killed. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Killer - The player who will receive credit
	 * for the kill. A killer of null indicates
	 * no player will receive credit. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.AssisterParam.`
	 */
	killer) {
	    return "Kill(" + player + ", " + killer + ")";
	};
	});

	unwrapExports(kill$1);
	var kill_1$1 = kill$1.kill;

	var loop$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Restarts the action list from the beginning.
	 * To prevent an infinite loop, a wait action
	 * must execute between the start of the action
	 * list and this action.
	 */
	exports.loop = function () {
	    return "Loop";
	};
	});

	unwrapExports(loop$1);
	var loop_1$1 = loop$1.loop;

	var loopIf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Restarts the action list from the beginning
	 * if this action’s condition evaluates to
	 * true. If it does not, execution continues
	 * with the next action. To prevent an infinite
	 * loop, a wait action must execute between
	 * the start of the action list and this action.
	 */
	exports.loopIf = function (
	/**
	 * Condition - Specifies whether the loop will
	 * occur. Can use most Conditional based Value
	 * Syntax for this value.
	 * - `Type.Bool.`
	 */
	condition) {
	    return "Loop If(" + condition + ")";
	};
	});

	unwrapExports(loopIf$1);
	var loopIf_1$1 = loopIf$1.loopIf;

	var loopIfConditionIsFalse$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Restarts the action list from the beginning
	 * if at least one condition in the condition
	 * list is false. If all conditions are true,
	 * execution continues with the next action.
	 * To prevent an infinite loop, a wait action
	 * must execute between the start of the action
	 * list and this action.
	 */
	exports.loopIfConditionIsFalse = function () {
	    return "Loop If Condition Is False";
	};
	});

	unwrapExports(loopIfConditionIsFalse$1);
	var loopIfConditionIsFalse_1$1 = loopIfConditionIsFalse$1.loopIfConditionIsFalse;

	var loopIfConditionIsTrue$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Restarts the action list from the beginning
	 * if all conditions in the condition list
	 * is true. If any are false, execution continues
	 * with the next action. To prevent an infinite
	 * loop, a wait action must execute between
	 * the start of the action list and this action.
	 */
	exports.loopIfConditionIsTrue = function () {
	    return "Loop If Condition Is True";
	};
	});

	unwrapExports(loopIfConditionIsTrue$1);
	var loopIfConditionIsTrue_1$1 = loopIfConditionIsTrue$1.loopIfConditionIsTrue;

	var modifyGlobalVariable$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Modifies the value of a global variable,
	 * which is a variable that belongs to the game itself.
	 */
	exports.modifyGlobalVariable = function (
	/**
	 * Variable - Variable specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.IGlobal.`
	 */
	variable, 
	/**
	 * Variable - Variable specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Variable.`
	 */
	operation, 
	/**
	 * Index - The index of the array to modify.
	 * If the index is beyond the end of the array,
	 * the array is extended with new elements
	 * given a value of 0.
	 * - `Type.Value.`
	 */
	value) {
	    return "Modify Global Variable(" + variable + ", " + operation + ", " + value + ")";
	};
	});

	unwrapExports(modifyGlobalVariable$1);
	var modifyGlobalVariable_1$1 = modifyGlobalVariable$1.modifyGlobalVariable;

	var modifyGlobalVariableAtIndex$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Modifies the value of a global variable
	 * at an index, which is a variable that belongs
	 * to the game itself.
	 */
	exports.modifyGlobalVariableAtIndex = function (
	/**
	 * Variable - Variable specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.IGlobal.`
	 */
	variable, 
	/**
	 * Player - The player or players whose variable
	 * will be set. If multiple players are provided,
	 * each of their variables will be set. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	index, 
	/**
	 * Variable - Variable specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Variable.`
	 */
	operation, 
	/**
	 * Index - The index of the array to modify.
	 * If the index is beyond the end of the array,
	 * the array is extended with new elements
	 * given a value of 0.
	 * - `Type.Value.`
	 */
	value) {
	    return "Modify Global Variable At Index(" + variable + ", " + index + ", " + operation + ", " + value + ")";
	};
	});

	unwrapExports(modifyGlobalVariableAtIndex$1);
	var modifyGlobalVariableAtIndex_1$1 = modifyGlobalVariableAtIndex$1.modifyGlobalVariableAtIndex;

	var modifyPlayerScore$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Modifies the score (kill count) of one or
	 * more players. This action only has an effect
	 * in free-for-all modes.
	 */
	exports.modifyPlayerScore = function (
	/**
	 * Player - The player whose score will change.
	 * Can use most Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Team - The team whose score will be changed.
	 * Can use most Player based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	score) {
	    return "Modify Player Score(" + player + ", " + score + ")";
	};
	});

	unwrapExports(modifyPlayerScore$1);
	var modifyPlayerScore_1$1 = modifyPlayerScore$1.modifyPlayerScore;

	var modifyPlayerVariable$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Modifies the value of a player variable,
	 * which is a variable that belongs to a specific player.
	 */
	exports.modifyPlayerVariable = function (
	/**
	 * Variable - Variable specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Operation - The way in which the variable’s
	 * value will be changed. Options include standard
	 * arithmetic operations as well as array operations
	 * for appending and removing values.
	 * - `Type.IPlayer.`
	 */
	variable, 
	/**
	 * Variable - Variable specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Variable.`
	 */
	operation, 
	/**
	 * Value - The value used for the modification.
	 * For arithmetic operations, this is the second
	 * of two operands, with the other being the
	 * variable’s existing value. For array operations,
	 * this is the value to append or remove. Various
	 * Value Syntax can be used.
	 * - `Type.Value.`
	 */
	value) {
	    return "Modify Player Variable(" + player + ", " + variable + ", " + operation + ", " + value + ")";
	};
	});

	unwrapExports(modifyPlayerVariable$1);
	var modifyPlayerVariable_1$1 = modifyPlayerVariable$1.modifyPlayerVariable;

	var modifyPlayerVariableAtIndex$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Modifies the value of a player variable
	 * at an index, which is a variable that belongs
	 * to a specific player.
	 */
	exports.modifyPlayerVariableAtIndex = function (
	/**
	 * Operation - The way in which the variable’s
	 * value will be changed. Options include standard
	 * arithmetic operations as well as array operations
	 * for appending and removing values.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Value - The value used for the modification.
	 * For arithmetic operations, this is the second
	 * of two operands, with the other being the
	 * variable’s existing value. For array operations,
	 * this is the value to append or remove. Various
	 * Value Syntax can be used.
	 * - `Type.IPlayer.`
	 */
	variable, 
	/**
	 * Player - The player or players whose variable
	 * will be set. If multiple players are provided,
	 * each of their variables will be set. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	index, 
	/**
	 * Variable - Variable specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Variable.`
	 */
	operation, 
	/**
	 * Index - The index of the array to modify.
	 * If the index is beyond the end of the array,
	 * the array is extended with new elements
	 * given a value of 0.
	 * - `Type.Value.`
	 */
	value) {
	    return "Modify Player Variable At Index(" + player + ", " + variable + ", " + index + ", " + operation + ", " + value + ")";
	};
	});

	unwrapExports(modifyPlayerVariableAtIndex$1);
	var modifyPlayerVariableAtIndex_1$1 = modifyPlayerVariableAtIndex$1.modifyPlayerVariableAtIndex;

	var modifyTeamScore$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Modifies the score of one or both teams.
	 * This action has not effect in free-for-all
	 * modes or modes without a team score.
	 */
	exports.modifyTeamScore = function (
	/**
	 * Score - The amount the score will increase
	 * or decrease. If positive, the score will
	 * increase. If negative, the score will decrease.
	 * Can use most Number based Value Syntax for this value.
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * Team - The team whose score will be changed.
	 * Can use most Player based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	score) {
	    return "Modify Team Score(" + team + ", " + score + ")";
	};
	});

	unwrapExports(modifyTeamScore$1);
	var modifyTeamScore_1$1 = modifyTeamScore$1.modifyTeamScore;

	var pauseMatchTime$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Pauses the match time, players, objective
	 * logic, and game mode advancement criteria
	 * are unaffected by the pause.
	 */
	exports.pauseMatchTime = function () {
	    return "Pause Match Time";
	};
	});

	unwrapExports(pauseMatchTime$1);
	var pauseMatchTime_1$1 = pauseMatchTime$1.pauseMatchTime;

	var playEffect$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Plays an effect at a position in the world.
	 * The lifetime of this effect is short, so
	 * it does not need to be updated or destroyed.
	 */
	exports.playEffect = function (
	/**
	 * Visible to - One or more players who will
	 * be able to see the effect. Can use most
	 * Value Syntax to select one or multiple players.
	 * - `Type.PlayersParam.`
	 */
	visibleTo, 
	/**
	 * Type - The type of the effect to be created.
	 * (Good Explosion, Bad Explosion, Ring Explosion,
	 * Good Pickup Effect, Bad Pickup Effect, Debuff
	 * Impact Sound, Buff Impact Sound, Ring Explosion
	 * Sound, Buff Explosion Sound, Explosion Sound)
	 * - `Type.Play.`
	 */
	type, 
	/**
	 * Color - The color of the effect to be created.
	 * IF a particular team is chosen, the effect
	 * will either be red or blue, depending on
	 * whether the team is hostile to the viewer.
	 * (Good Explosion, Bad Explosion, Ring Explosion,
	 * Good Pickup Effect, Bad Pickup Effect, Debuff
	 * Impact Sound, Buff Impact Sound, Ring Explosion
	 * Sound, Buff Explosion Sound, Explosion Sound)
	 * - `Type.Color.`
	 */
	color, 
	/**
	 * Position - The effect’s position. If this
	 * value is a player, then the effect will
	 * move along with the player, otherwise, the
	 * value is interpreted as a position in the
	 * world. Can use most Player or Vector based
	 * Value Syntax. (Good Explosion, Bad Explosion,
	 * Ring Explosion, Good Pickup Effect, Bad
	 * Pickup Effect, Debuff Impact Sound, Buff
	 * Impact Sound, Ring Explosion Sound, Buff
	 * Explosion Sound, Explosion Sound)
	 * - `Type.Vector.`
	 */
	position, 
	/**
	 * Radius - The effect’s radius in meters.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	radius) {
	    return "Play Effect(" + visibleTo + ", " + type + ", " + color + ", " + position + ", " + radius + ")";
	};
	});

	unwrapExports(playEffect$3);
	var playEffect_1$3 = playEffect$3.playEffect;

	var preloadHero$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Preemptively loads the specified hero or
	 * heroes into memory using the skins of the
	 * specified player or players, available memory
	 * permitting. Useful whenever rapid hero changing
	 * is possible and the next hero is known.
	 */
	exports.preloadHero = function (
	/**
	 * Player - The player or players who will
	 * begin preloading a hero or heroes. Only
	 * one preload hero action will be active at
	 * a time for a given player. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Hero - The hero or heroes to begin preloading
	 * for the specified player or players. When
	 * multiple heroes are specified in an array,
	 * the Heroes towards the beginning of the
	 * array are prioritized. Can use most Hero
	 * based Value Syntax for this value.
	 * - `Type.Hero.`
	 */
	hero) {
	    return "Preload Hero(" + player + ", " + hero + ")";
	};
	});

	unwrapExports(preloadHero$1);
	var preloadHero_1$1 = preloadHero$1.preloadHero;

	var pressButton$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Forces one or more players to press a button
	 * virtually for a single frame.
	 */
	exports.pressButton = function (
	/**
	 * Player - The player or players for whom
	 * virtual button input will be forced. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Button - The button to be pressed.
	 * - `Type.Button.`
	 */
	button) {
	    return "Press Button(" + player + ", " + button + ")";
	};
	});

	unwrapExports(pressButton$1);
	var pressButton_1$1 = pressButton$1.pressButton;

	var resetPlayerHeroAvailability$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Restores the list of heroes available to
	 * one or more players to the list specified
	 * by the game settings. If a player’s current
	 * hero becomes unavailable, the player is
	 * forced to choose a different hero and respawn
	 * at an appropriate spawn location.
	 */
	exports.resetPlayerHeroAvailability = function (
	/**
	 * Player - The player or players whose hero
	 * list is being reset. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Reset Player Hero Availability(" + player + ")";
	};
	});

	unwrapExports(resetPlayerHeroAvailability$1);
	var resetPlayerHeroAvailability_1$1 = resetPlayerHeroAvailability$1.resetPlayerHeroAvailability;

	var respawn$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Respawns one or more players at an appropriate
	 * spawn location with full health, even if
	 * they were already alive.
	 */
	exports.respawn = function (
	/**
	 * Player - The player or players to respawn.
	 * Can use most Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Respawn(" + player + ")";
	};
	});

	unwrapExports(respawn$1);
	var respawn_1$1 = respawn$1.respawn;

	var resurrect$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Instantly resurrects one or more players
	 * at the location they died with no transition.
	 */
	exports.resurrect = function (
	/**
	 * Player - The player or players who will
	 * be resurrected. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player) {
	    return "Resurrect(" + player + ")";
	};
	});

	unwrapExports(resurrect$1);
	var resurrect_1$1 = resurrect$1.resurrect;

	var setAbility1Enabled$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Enables or disables ability 1 for one or more players.
	 */
	exports.setAbility1Enabled = function (
	/**
	 * Player - The player or players whose access
	 * to ability 1 is affected. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Enabled - Specifies whether the player or
	 * players are able to use ability 1. Expects
	 * a Boolean Value such as True, False, or
	 * Compare. Can use most Boolean based Value Syntax.
	 * - `Type.Bool.`
	 */
	enabled) {
	    return "Set Ability 1 Enabled(" + player + ", " + enabled + ")";
	};
	});

	unwrapExports(setAbility1Enabled$1);
	var setAbility1Enabled_1$1 = setAbility1Enabled$1.setAbility1Enabled;

	var setAbility2Enabled$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Enables or disables ability 2 for one or more players.
	 */
	exports.setAbility2Enabled = function (
	/**
	 * Player - The player or players whose access
	 * to ability 2 is affected. Expects a Boolean
	 * Value such as True, False, or Compare. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Enabled - Specifies whether the player or
	 * players are able to use ability 2. Can use
	 * most Boolean based Value Syntax.
	 * - `Type.Bool.`
	 */
	enabled) {
	    return "Set Ability 2 Enabled(" + player + ", " + enabled + ")";
	};
	});

	unwrapExports(setAbility2Enabled$1);
	var setAbility2Enabled_1$1 = setAbility2Enabled$1.setAbility2Enabled;

	var setAimSpeed$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the aim speed of one or more players
	 * to a percentage of their normal aim speed.
	 */
	exports.setAimSpeed = function (
	/**
	 * Player - The player or players whose aim
	 * will be set. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Turn Speed Percent - The percentage of normal
	 * aim speed to which the player or players
	 * will set their aim speed. Can use most Number
	 * based Value Syntax.
	 * - `Type.Number.`
	 */
	turnSpeedPercent) {
	    return "Set Aim Speed(" + player + ", " + turnSpeedPercent + ")";
	};
	});

	unwrapExports(setAimSpeed$1);
	var setAimSpeed_1$1 = setAimSpeed$1.setAimSpeed;

	var setDamageDealt$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the damage dealt to one or more players
	 * of a percentage of their raw damage dealt.
	 * NOTE: Negative values do not heal enemies.
	 * Damage values of 0 or lower will not trigger script events.
	 */
	exports.setDamageDealt = function (
	/**
	 * Player - The player or players whose damage
	 * dealt will be set. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Damage Dealt Percent - The percentage of
	 * raw damage dealt to which the player or
	 * players will set their damage dealt. Can
	 * use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	damageDealtPercent) {
	    return "Set Damage Dealt(" + player + ", " + damageDealtPercent + ")";
	};
	});

	unwrapExports(setDamageDealt$1);
	var setDamageDealt_1$1 = setDamageDealt$1.setDamageDealt;

	var setDamageReceived$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the damage received of one or more
	 * players to a percentage of their raw damage
	 * received. NOTE: Negative values do not heal
	 * enemies. Damage values of 0 or lower will
	 * not trigger script events.
	 */
	exports.setDamageReceived = function (
	/**
	 * Player - The player or players whose damage
	 * received will be set. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Damage Received Percent - The percentage
	 * of raw damage received to which the player
	 * or players will set their damage received.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	damageReceivedPercent) {
	    return "Set Damage Received(" + player + ", " + damageReceivedPercent + ")";
	};
	});

	unwrapExports(setDamageReceived$1);
	var setDamageReceived_1$1 = setDamageReceived$1.setDamageReceived;

	var setFacing$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the facing of one or more players to
	 * the specified direction.
	 */
	exports.setFacing = function (
	/**
	 * Player - The player or players whose facing
	 * will be set. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Direction - The unit direction in which
	 * the player or players will face. This value
	 * is normalized internally. Can use most Vector
	 * based Value Syntax.
	 * - `Type.Vector.`
	 */
	direction) {
	    return "Set Facing(" + player + ", " + direction + ")";
	};
	});

	unwrapExports(setFacing$1);
	var setFacing_1$1 = setFacing$1.setFacing;

	var setGlobalVariable$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stores a value into a global variable, which
	 * a variable that belongs to the game itself.
	 */
	exports.setGlobalVariable = function (
	/**
	 * Variable - Specifies which Global Variable
	 * to store the value into. Specified by a
	 * single alphabetic letter (A through Z).
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * Player - The player or players whose variable
	 * will be set. If multiple players are provided,
	 * each of their variables will be set. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Value.`
	 */
	value) {
	    return "Set Global Variable(" + variable + ", " + value + ")";
	};
	});

	unwrapExports(setGlobalVariable$1);
	var setGlobalVariable_1$1 = setGlobalVariable$1.setGlobalVariable;

	var setGlobalVariableAtIndex$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Finds or creates an array on a global variable,
	 * which is a variable that belongs to the
	 * game itself, then stores a value in the
	 * array at the specified index.
	 */
	exports.setGlobalVariableAtIndex = function (
	/**
	 * Index - The index of the array to modify.
	 * If the index is beyond the end of the array,
	 * the array is extended with the new elements
	 * given a value of zero. Can use most Number
	 * based Value Syntax with this value.
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * Player - The player or players whose variable
	 * will be set. If multiple players are provided,
	 * each of their variables will be set. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	index, 
	/**
	 * Value - The value that will be stored into
	 * the array. Nearly any Value syntax can be
	 * used, however it is most common with Number based syntax.
	 * - `Type.Value.`
	 */
	value) {
	    return "Set Global Variable At Index(" + variable + ", " + index + ", " + value + ")";
	};
	});

	unwrapExports(setGlobalVariableAtIndex$1);
	var setGlobalVariableAtIndex_1$1 = setGlobalVariableAtIndex$1.setGlobalVariableAtIndex;

	var setGravity$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the movement gravity for one or more
	 * players to a percentage of regular movement gravity.
	 */
	exports.setGravity = function (
	/**
	 * Player - The player or players whose healing
	 * dealt will be set. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Healing Dealt Percent - The percentage of
	 * raw healing dealt to which the player or
	 * players will set their healing dealt. Can
	 * use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	gravityPercent) {
	    return "Set Gravity(" + player + ", " + gravityPercent + ")";
	};
	});

	unwrapExports(setGravity$1);
	var setGravity_1$1 = setGravity$1.setGravity;

	var setHealingDealt$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the healing dealt to one or more players
	 * of a percentage of their raw damage dealt.
	 * NOTE: Negative values do not damage enemies.
	 * Healing values of 0 or lower will not trigger script events.
	 */
	exports.setHealingDealt = function (
	/**
	 * Player - The player or players whose healing
	 * dealt will be set. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Healing Dealt Percent - The percentage of
	 * raw healing dealt to which the player or
	 * players will set their healing dealt. Can
	 * use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	healingDealtPercent) {
	    return "Set Healing Dealt(" + player + ", " + healingDealtPercent + ")";
	};
	});

	unwrapExports(setHealingDealt$1);
	var setHealingDealt_1$1 = setHealingDealt$1.setHealingDealt;

	var setHealingReceived$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the healing received of one or more
	 * players to a percentage of their raw healing
	 * received. NOTE: Negative values do not damage
	 * enemies. Healing values of 0 or lower will
	 * not trigger script events.
	 */
	exports.setHealingReceived = function (
	/**
	 * Player - The player or players whose healing
	 * received will be set. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Healing Received Percent - The percentage
	 * of raw healing received to which the player
	 * or players will set their healing received.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	healingReceivedPercent) {
	    return "Set Healing Received(" + player + ", " + healingReceivedPercent + ")";
	};
	});

	unwrapExports(setHealingReceived$1);
	var setHealingReceived_1$1 = setHealingReceived$1.setHealingReceived;

	var setInvisible$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Causes one or more players to become invisible
	 * to either all other players or just enemies.
	 */
	exports.setInvisible = function (
	/**
	 * Player - The player or players who will
	 * become invisible. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Invisible to - Specifies for whom the player
	 * or players will be invisible. Can be set
	 * to All, Enemies, or None.
	 * - `Type.InvisibleTo.`
	 */
	invisibleTo) {
	    return "Set Invisible(" + player + ", " + invisibleTo + ")";
	};
	});

	unwrapExports(setInvisible$1);
	var setInvisible_1$1 = setInvisible$1.setInvisible;

	var setMatchTime$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the current match time (which is visible
	 * at the top of the screen). This can be used
	 * to shorten or extend the duration of a match
	 * or to change the duration of assemble heroes or setup.
	 */
	exports.setMatchTime = function (
	/**
	 * Time - The match time in seconds. Can use
	 * most Number based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	time) {
	    return "Set Match Time(" + time + ")";
	};
	});

	unwrapExports(setMatchTime$1);
	var setMatchTime_1$1 = setMatchTime$1.setMatchTime;

	var setMaxHealth$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the max health of one or more players
	 * as a percentage of their raw max health.
	 * This action will ensure that a player’s
	 * current health will not exceed the new max health.
	 */
	exports.setMaxHealth = function (
	/**
	 * Player - The player or players whose max
	 * health will be set. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Player - The player or players whose move
	 * speed will be set. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Number.`
	 */
	healthPercent) {
	    return "Set Max Health(" + player + ", " + healthPercent + ")";
	};
	});

	unwrapExports(setMaxHealth$1);
	var setMaxHealth_1$1 = setMaxHealth$1.setMaxHealth;

	var setMoveSpeed$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the move speed of one or more players
	 * to a percentage of their raw move speed.
	 */
	exports.setMoveSpeed = function (
	/**
	 * Health Percent - The percentage of raw move
	 * speed to which the player or players will
	 * set their move speed. Can use most Number
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Player - The player or players whose move
	 * speed will be set. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Number.`
	 */
	moveSpeedPercent) {
	    return "Set Move Speed(" + player + ", " + moveSpeedPercent + ")";
	};
	});

	unwrapExports(setMoveSpeed$1);
	var setMoveSpeed_1$1 = setMoveSpeed$1.setMoveSpeed;

	var setObjectiveDescription$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the text at the top center of the screen
	 * that normally describes the objective to
	 * a message visible to specific players.
	 */
	exports.setObjectiveDescription = function (
	/**
	 * Visible to - One or more players who will
	 * see the message. Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * Header - The message to be displayed. Can
	 * use most String based Value Syntax to specify.
	 * - `Type.String.`
	 */
	header, 
	/**
	 * Reevaluation - Specifies which of this action’s
	 * inputs will be continously reevaluated.
	 * The message will keep asking for and using
	 * new values from reevaluated inputs. Can
	 * choose “Visible to and String” or “String”
	 * - `Type.ObjectiveDescriptionReevaluation.`
	 */
	reevaluation) {
	    return "Set Objective Description(" + visibleTo + ", " + header + ", " + reevaluation + ")";
	};
	});

	unwrapExports(setObjectiveDescription$1);
	var setObjectiveDescription_1$1 = setObjectiveDescription$1.setObjectiveDescription;

	var setPlayerAllowedHeroes$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the list of heroes available to one
	 * or more players. If a player’s current hero
	 * becomes unavailable, the player is forced
	 * to choose a different hero and respawn at
	 * an appropriate spawn location.
	 */
	exports.setPlayerAllowedHeroes = function (
	/**
	 * Player - The player or players whose hero
	 * list is being set. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Hero - The hero or heroes that will be available.
	 * If no heroes are provided, the action has
	 * no effect. Can use most Hero based Value
	 * Syntax for this value including compatible Arrays.
	 * - `Type.Hero.`
	 */
	hero) {
	    return "Set Player Allowed Heroes(" + player + ", " + hero + ")";
	};
	});

	unwrapExports(setPlayerAllowedHeroes$1);
	var setPlayerAllowedHeroes_1$1 = setPlayerAllowedHeroes$1.setPlayerAllowedHeroes;

	var setPlayerScore$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the score (kill count) of one or more
	 * players. This action only has an effect
	 * in free-for-all modes.
	 */
	exports.setPlayerScore = function (
	/**
	 * Player - The player or players whose score
	 * will be set. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Team - The team or teams whose score will
	 * be set. Can use most Team based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	score) {
	    return "Set Player Score(" + player + ", " + score + ")";
	};
	});

	unwrapExports(setPlayerScore$1);
	var setPlayerScore_1$1 = setPlayerScore$1.setPlayerScore;

	var setPlayerVariable$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stores a value into a player variable, which
	 * is a variable that belongs to a specific player.
	 */
	exports.setPlayerVariable = function (
	/**
	 * Variable - Specifies which Player Variable
	 * to store the value into. Specified by a
	 * single alphabetic letter (A through Z).
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Value - The value that will be stored. Nearly
	 * any Value syntax can be used, however it
	 * is most common with Number based syntax.
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * Player - The player or players whose variable
	 * will be set. If multiple players are provided,
	 * each of their variables will be set. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Value.`
	 */
	value) {
	    return "Set Player Variable(" + player + ", " + variable + ", " + value + ")";
	};
	});

	unwrapExports(setPlayerVariable$1);
	var setPlayerVariable_1$1 = setPlayerVariable$1.setPlayerVariable;

	var setPlayerVariableAtIndex$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Finds or creates an array on a player variable,
	 * which is a variable that belongs to a specific
	 * player, then stores a value in the array
	 * at the specified index.
	 */
	exports.setPlayerVariableAtIndex = function (
	/**
	 * Variable - Specifies which player variable’s
	 * value is the array to modify, if the variable’s
	 * value is not an array, then its value becomes
	 * an empty array. Specified by a single alphabetic
	 * letter (A through Z).
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Index - The index of the array to modify.
	 * If the index is beyond the end of the array,
	 * the array is extended with the new elements
	 * given a value of zero. Can use most Number
	 * based Value Syntax with this value.
	 * - `Type.Variable.`
	 */
	variable, 
	/**
	 * Player - The player or players whose variable
	 * will be set. If multiple players are provided,
	 * each of their variables will be set. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	index, 
	/**
	 * Value - The value that will be stored into
	 * the array. Nearly any Value syntax can be
	 * used, however it is most common with Number based syntax.
	 * - `Type.Value.`
	 */
	value) {
	    return "Set Player Variable At Index(" + player + ", " + variable + ", " + index + ", " + value + ")";
	};
	});

	unwrapExports(setPlayerVariableAtIndex$1);
	var setPlayerVariableAtIndex_1$1 = setPlayerVariableAtIndex$1.setPlayerVariableAtIndex;

	var setPrimaryFireEnabled$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Enables or disables primary fire for one
	 * or more players.
	 */
	exports.setPrimaryFireEnabled = function (
	/**
	 * Player - The player or players whose access
	 * to primary fire is affected. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Enabled - Specifies whether the player or
	 * players are able to use primary fire. Expects
	 * a Boolean Value such as True, False, or
	 * Compare. Can use most Boolean based Value Syntax.
	 * - `Type.Bool.`
	 */
	enabled) {
	    return "Set Primary Fire Enabled(" + player + ", " + enabled + ")";
	};
	});

	unwrapExports(setPrimaryFireEnabled$1);
	var setPrimaryFireEnabled_1$1 = setPrimaryFireEnabled$1.setPrimaryFireEnabled;

	var setProjectileGravity$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the projectile gravity for one or more
	 * players to a percentage of regular projectile gravity.
	 */
	exports.setProjectileGravity = function (
	/**
	 * Player - The player or players whose projectile
	 * gravity will be set. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Projectile Gravity Percent - The percentage
	 * of the regular projectile gravity to which
	 * the player or players will set their personal
	 * projectile gravity. Can use most Number
	 * based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	projectileGravityPercent) {
	    return "Set Projectile Gravity(" + player + ", " + projectileGravityPercent + ")";
	};
	});

	unwrapExports(setProjectileGravity$1);
	var setProjectileGravity_1$1 = setProjectileGravity$1.setProjectileGravity;

	var setProjectileSpeed$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the projectile speed for one or more
	 * players to a percentage of regular projectile speed.
	 */
	exports.setProjectileSpeed = function (
	/**
	 * Player - The player or players whose projectile
	 * speed will be set. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Projectile Speed Percent - The percentage
	 * of the regular projectile speed to which
	 * the player or players will set their personal
	 * projectile speed. Can use most Number based
	 * Value Syntax for this value.
	 * - `Type.Number.`
	 */
	projectileSpeedPercent) {
	    return "Set Projectile Speed(" + player + ", " + projectileSpeedPercent + ")";
	};
	});

	unwrapExports(setProjectileSpeed$1);
	var setProjectileSpeed_1$1 = setProjectileSpeed$1.setProjectileSpeed;

	var setRespawnMaxTime$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the duration between death and respawn
	 * for one or more players that are already
	 * dead when this action is executed, the change
	 * takes effect on their next death.
	 */
	exports.setRespawnMaxTime = function (
	/**
	 * Player - The player or players whose respawn
	 * max time will is being defined. Can use
	 * most Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Time - The duration between death and respawn
	 * in seconds. Can use most Number based Value
	 * Syntax for this value.
	 * - `Type.Number.`
	 */
	time) {
	    return "Set Respawn Max Time(" + player + ", " + time + ")";
	};
	});

	unwrapExports(setRespawnMaxTime$1);
	var setRespawnMaxTime_1$1 = setRespawnMaxTime$1.setRespawnMaxTime;

	var setSecondaryFireEnabled$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Enables or disables secondary fire for one
	 * or more players.
	 */
	exports.setSecondaryFireEnabled = function (
	/**
	 * Player - The player or players whose access
	 * to secondary fire is affected. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Enabled - Specifies whether the player or
	 * players are able to use secondary fire.
	 * Expects a Boolean Value such as True, False,
	 * or Compare. Can use most Boolean based Value Syntax.
	 * - `Type.Bool.`
	 */
	enabled) {
	    return "Set Secondary Fire Enabled(" + player + ", " + enabled + ")";
	};
	});

	unwrapExports(setSecondaryFireEnabled$1);
	var setSecondaryFireEnabled_1$1 = setSecondaryFireEnabled$1.setSecondaryFireEnabled;

	var setSlowMotion$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the simulation rate for the entire
	 * game, including all players, projectiles,
	 * effects, and game mode logic.
	 */
	exports.setSlowMotion = function (
	/**
	 * Speed Percent - The simulation rate as a
	 * percentage of normal speed. Only rates up
	 * to 100% are allowed. Can use most Number
	 * based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	speedPercent) {
	    return "Set Slow Motion(" + speedPercent + ")";
	};
	});

	unwrapExports(setSlowMotion$1);
	var setSlowMotion_1$1 = setSlowMotion$1.setSlowMotion;

	var setStatus$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Applies a status to one or more players.
	 * This status will remain in effect for the
	 * specified duration or until it is cleared
	 * by the clear status action.
	 */
	exports.setStatus = function (
	/**
	 * Player - The player or players to whom the
	 * status will be applied. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Assister - Specifies a player to be awarded
	 * assist credit should the affected player
	 * or players be killed while the status is
	 * in effect. An assister of null indicates
	 * no player will receive credit. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.AssisterParam.`
	 */
	assister, 
	/**
	 * Status - The Status to be applied from the
	 * player or players. These behave similarly
	 * to statuses applied from hero abilities.
	 * Values include Hacked, Burning, Knocked
	 * Down, Asleep, Frozen, Unkillable, Invincible,
	 * Phased Out, Rooted, or Stunned.
	 * - `Type.Status.`
	 */
	status, 
	/**
	 * Duration - The duration of the status effect
	 * in seconds. To have a status that lasts
	 * until a clear status action is executed,
	 * proivide an arbitrarily long duration such
	 * as 9999. Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	duration) {
	    return "Set Status(" + player + ", " + assister + ", " + status + ", " + duration + ")";
	};
	});

	unwrapExports(setStatus$1);
	var setStatus_1$1 = setStatus$1.setStatus;

	var setTeamScore$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the score for one or both teams. This
	 * action has no effect in free-for-all modes
	 * or modes without a team score.
	 */
	exports.setTeamScore = function (
	/**
	 * Score - The score that will be set. Can
	 * use most Number based Value Syntax for this value.
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * Team - The team or teams whose score will
	 * be set. Can use most Team based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	score) {
	    return "Set Team Score(" + team + ", " + score + ")";
	};
	});

	unwrapExports(setTeamScore$1);
	var setTeamScore_1$1 = setTeamScore$1.setTeamScore;

	var setUltimateAbilityEnabled$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Enables or disables the ultimate ability
	 * of one or more players.
	 */
	exports.setUltimateAbilityEnabled = function (
	/**
	 * Player - The player or players whose ultimate
	 * charge will be set. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Enabled - Specifies whether the player or
	 * players are able to use their ultimate ability.
	 * Expects a Boolean Value such as True, False,
	 * or Compare. Can use most Boolean based Value Syntax.
	 * - `Type.Bool.`
	 */
	enabled) {
	    return "Set Ultimate Ability Enabled(" + player + ", " + enabled + ")";
	};
	});

	unwrapExports(setUltimateAbilityEnabled$1);
	var setUltimateAbilityEnabled_1$1 = setUltimateAbilityEnabled$1.setUltimateAbilityEnabled;

	var setUltimateCharge$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets the ultimate charge or one or more
	 * players as a percentage of maximum charge.
	 */
	exports.setUltimateCharge = function (
	/**
	 * Player - The player or players whose ultimate
	 * charge will be set. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Charge Percent - The percentage of maximum
	 * charge. Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	chargePercent) {
	    return "Set Ultimate Charge(" + player + ", " + chargePercent + ")";
	};
	});

	unwrapExports(setUltimateCharge$1);
	var setUltimateCharge_1$1 = setUltimateCharge$1.setUltimateCharge;

	var skip$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Skips execution of a certain number of actions
	 * in the action list.
	 */
	exports.skip = function (
	/**
	 * Condition - Specifies whether the loop will
	 * occur. Can use most Conditional based Value
	 * Syntax for this value.
	 * - `Type.Number.`
	 */
	numberOfActions) {
	    return "Skip(" + numberOfActions + ")";
	};
	});

	unwrapExports(skip$1);
	var skip_1$1 = skip$1.skip;

	var skipIf$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Skips execution of a certain number of actions
	 * in the action list if this action’s condition
	 * evaluates to true. If it does not, execution
	 * continues with the next action.
	 */
	exports.skipIf = function (
	/**
	 * Number of actions - The number of action
	 * to skip, not including this action. Can
	 * use most Number based Value Syntax.
	 * - `Type.Bool.`
	 */
	condition, 
	/**
	 * Condition - Specifies whether the loop will
	 * occur. Can use most Conditional based Value
	 * Syntax for this value.
	 * - `Type.Number.`
	 */
	numberOfActions) {
	    return "Skip If(" + condition + ", " + numberOfActions + ")";
	};
	});

	unwrapExports(skipIf$1);
	var skipIf_1$1 = skipIf$1.skipIf;

	var smallMessage$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Displays a small message beneath the reticle
	 * that is visible to specific players.
	 */
	exports.smallMessage = function (
	/**
	 * Visible to - One or more players who will
	 * see the message. Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	visibleTo, 
	/**
	 * Header - The message to be displayed. Can
	 * use most String based Value Syntax to specify.
	 * - `Type.String.`
	 */
	header) {
	    return "Small Message(" + visibleTo + ", " + header + ")";
	};
	});

	unwrapExports(smallMessage$1);
	var smallMessage_1$1 = smallMessage$1.smallMessage;

	var startAccelerating$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Starts accelerating one or more players
	 * in a specified location.
	 */
	exports.startAccelerating = function (
	/**
	 * Player - The player or players that will
	 * begin accelerating. Can use most Player
	 * based Value Syntax.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Direction - The unit direction in which
	 * the acceleration will be applied. This value
	 * is normalized internally. Can use most Vector
	 * based Value Syntax to specify.
	 * - `Type.Vector.`
	 */
	direction, 
	/**
	 * Rate - The rate of acceleration in meters
	 * per second squared. This value may need
	 * to be quite high in order to overcome gravity
	 * and/or surface friction. Can use most Number
	 * based Value Syntax.
	 * - `Type.Number.`
	 */
	rate, 
	/**
	 * Max Speed - The speed at which acceleration
	 * will stop for the player or players. It
	 * may not be possible to reach this speed
	 * due to gravity and/or surface friction.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	maxSpeed, 
	/**
	 * Relative - Specifies whether direction is
	 * relavtive to the world coordinates or the
	 * local coordinates of the player or players.
	 * - `Type.Relative.`
	 */
	relative, 
	/**
	 * Player - The player or players who will
	 * start turning. Can use most Player based Value Syntax.
	 * - `Type.StartAcceleratingReevaluation.`
	 */
	reevaluation) {
	    return "Start Accelerating(" + player + ", " + direction + ", " + rate + ", " + maxSpeed + ", " + relative + ", " + reevaluation + ")";
	};
	});

	unwrapExports(startAccelerating$1);
	var startAccelerating_1$1 = startAccelerating$1.startAccelerating;

	var startCamera$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Places your camera at a location, facing a direction.
	 */
	exports.startCamera = function (
	/**
	 * Player - The player executing this rule.
	 * As specified by the event, may be the same
	 * as the attacker or the victim. Can use most
	 * Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Eye Position - The position of the camrea,
	 * reevaluates continously. Can use most Vector
	 * based Value Syntax to specify.
	 * - `Type.Vector.`
	 */
	eyePosition, 
	/**
	 * Look at position - Where the camera looks
	 * at, reevaluates continously. Can use most
	 * Vector based Value Syntax to specify.
	 * - `Type.Vector.`
	 */
	lookAtPosition, 
	/**
	 * Blend Speed - How fast to blend the camera
	 * movement as positions change. 0 means do
	 * not blend at all and just change positions
	 * instantly. Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	blendSpeed) {
	    return "Start Camera(" + player + ", " + eyePosition + ", " + lookAtPosition + ", " + blendSpeed + ")";
	};
	});

	unwrapExports(startCamera$1);
	var startCamera_1$1 = startCamera$1.startCamera;

	var startDamageModification$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Starts modifying how much damage one or
	 * more receivers will receive from one or
	 * more damagers. A reference to this damage
	 * modification can be obtained from the last
	 * damage modification ID value. This action
	 * will fail if too many damage modifications
	 * have been started.
	 */
	exports.startDamageModification = function (
	/**
	 * Damagers - The player or players whose outgoing
	 * damage will be modified (when attacking
	 * the receivers). Can use most Player based Value Syntax.
	 * - `Type.PlayersParam.`
	 */
	receivers, 
	/**
	 * Damage Percent - The percentage of damage
	 * that will apply to receivers when attacked
	 * by damagers. Can use most Number based Value
	 * Syntax to specify.
	 * - `Type.PlayersParam.`
	 */
	damagers, 
	/**
	 * Reevaluation - Specifies which of this action’s
	 * inputs will be continously reevaluated.
	 * This action will keep asking for and using
	 * new values from reevaluated inputs. Can
	 * choose from “Receivers, Damagers, and Damage
	 * Percent”, “Receivers and Damagers”, or “None”.
	 * - `Type.Number.`
	 */
	damagePercent, 
	/**
	 * Player - The player or players who will
	 * start turning. Can use most Player based Value Syntax.
	 * - `Type.DamageModificationReevaluation.`
	 */
	reevaluation) {
	    return "Start Damage Modification(" + receivers + ", " + damagers + ", " + damagePercent + ", " + reevaluation + ")";
	};
	});

	unwrapExports(startDamageModification$1);
	var startDamageModification_1$1 = startDamageModification$1.startDamageModification;

	var startDamageOverTime$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Starts an instance of damage over time,
	 * this DOT will persist for the specified
	 * duration or until stopped by script. To
	 * obtain a reference to this DOT, use the
	 * last damage over time to value.
	 */
	exports.startDamageOverTime = function (
	/**
	 * Receivers - One or more players who will
	 * receive the damage over time. Can use most
	 * Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Damager - The player who will receive credit
	 * for the damage. A damager of null indicates
	 * no player will receive credit. Can use most
	 * Player based Value Syntax.
	 * - `Type.AssisterParam.`
	 */
	damager, 
	/**
	 * Duration - The duration of the damage over
	 * time in seconds. To have a DOT that lasts
	 * until stopped by script, provide an arbitrarily
	 * long duration such as 9999. Can use most
	 * Number based Value Syntax to specify.
	 * - `Type.Number.`
	 */
	duration, 
	/**
	 * Damage Per Second - The damage per second
	 * for the damage over time. Can use most Number
	 * based Value Syntax to specify.
	 * - `Type.Number.`
	 */
	damagePerSecond) {
	    return "Start Damage Over Time(" + player + ", " + damager + ", " + duration + ", " + damagePerSecond + ")";
	};
	});

	unwrapExports(startDamageOverTime$1);
	var startDamageOverTime_1$1 = startDamageOverTime$1.startDamageOverTime;

	var startFacing$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Starts turning one or more players to face
	 * the specified direction.
	 */
	exports.startFacing = function (
	/**
	 * Direction - The unit direction in which
	 * the player or players will eventually face.
	 * Can use most Vector based Value Syntax.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Turn Rate - The turn rate in degrees per
	 * second. Can use most Number based Value
	 * Syntax to specify.
	 * - `Type.Vector.`
	 */
	direction, 
	/**
	 * Relative - Specifies whether direction is
	 * relative to the world coordinates or the
	 * local coordinates of the player or players.
	 * - `Type.Number.`
	 */
	turnRate, 
	/**
	 * Reevaluation - Specifies which of this actions
	 * inputs will be continously reevaluated.
	 * This action will keep asking for and using
	 * new values from reevaluated inputs. You
	 * can choose from “Direction and Turn Rate” or “None”.
	 * - `Type.Relative.`
	 */
	relative, 
	/**
	 * Player - The player or players who will
	 * start turning. Can use most Player based Value Syntax.
	 * - `Type.FacingReevaluation.`
	 */
	reevaluation) {
	    return "Start Facing(" + player + ", " + direction + ", " + turnRate + ", " + relative + ", " + reevaluation + ")";
	};
	});

	unwrapExports(startFacing$1);
	var startFacing_1$1 = startFacing$1.startFacing;

	var startForcingPlayerToBeHero$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Starts forcing one or more players to be
	 * a specified hero and, if necessary, respawns
	 * them immediately in their current locaiton.
	 * This will be the only hero available to
	 * the player or players until, the stop forcing
	 * player to be hero action is executed.
	 */
	exports.startForcingPlayerToBeHero = function (
	/**
	 * Player - The player or players who will
	 * be forced to be a specified hero. Can use
	 * most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Hero - The hero that the player or players
	 * will be forced to be. Can use most Hero
	 * based Value Syntax.
	 * - `Type.Hero.`
	 */
	hero) {
	    return "Start Forcing Player To Be Hero(" + player + ", " + hero + ")";
	};
	});

	unwrapExports(startForcingPlayerToBeHero$1);
	var startForcingPlayerToBeHero_1$1 = startForcingPlayerToBeHero$1.startForcingPlayerToBeHero;

	var startForcingSpawnRoom$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Forces a team to spawn in a particular spawn
	 * room, regardless of the sapwn room normally
	 * used by the game mode. This action only
	 * has an effect in Assault, Hybrid, and Payload Maps.
	 */
	exports.startForcingSpawnRoom = function (
	/**
	 * Team - The team whose spawn room will be
	 * forced. Can use most Team based Value Syntax.
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * Room - The number of the spawn room to be
	 * forced. 0 is the first spawn room, 1 is
	 * the second, and 2 is the third. If this
	 * specified spawn room does not exist. Players
	 * will use the normal spawn room. Can use
	 * most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	room) {
	    return "Start Forcing Spawn Room(" + team + ", " + room + ")";
	};
	});

	unwrapExports(startForcingSpawnRoom$1);
	var startForcingSpawnRoom_1$1 = startForcingSpawnRoom$1.startForcingSpawnRoom;

	var startForcingThrottle$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Defines minimum and maximum movement input
	 * values for one or more players. Possibly
	 * forcing or preventing movement.
	 */
	exports.startForcingThrottle = function (
	/**
	 * Player - The player or players whose movement
	 * whill be forced or limited. Can use most
	 * Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Min Forward - Sets the minimum run forward
	 * amount. 0 allows the player or players to
	 * stop while 1 forces full forward movement.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	minForward, 
	/**
	 * Max Forward - Sets the maximum run forward
	 * amount. 0 allows the player or players to
	 * stop while 1 forces full forward movement.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	maxForward, 
	/**
	 * Min Backward - Sets the minimum run backward
	 * amount. 0 allows the player or players to
	 * stop while 1 forces full forward movement.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	minBackward, 
	/**
	 * Max Backward - Sets the maximum run backward
	 * amount. 0 allows the player or players to
	 * stop while 1 forces full forward movement.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	maxBackward, 
	/**
	 * Min Sideways - Sets the minimum run sideways
	 * amount. 0 allows the player or players to
	 * stop while 1 forces full forward movement.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	minSideways, 
	/**
	 * Max Forward - Sets the maximum run sideways
	 * amount. 0 allows the player or players to
	 * stop while 1 forces full forward movement.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	maxSideways) {
	    return "Start Forcing Throttle(" + player + ", " + minForward + ", " + maxForward + ", " + minBackward + ", " + maxBackward + ", " + minSideways + ", " + maxSideways + ")";
	};
	});

	unwrapExports(startForcingThrottle$1);
	var startForcingThrottle_1$1 = startForcingThrottle$1.startForcingThrottle;

	var startHealOverTime$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Starts an instance of damage over time,
	 * this HOT will persist for the specified
	 * duration or until stopped by script. To
	 * obtain a reference to this HOT, use the
	 * last damage over time to value.
	 */
	exports.startHealOverTime = function (
	/**
	 * Healer - The player who will receive credit
	 * for the heal. A damager of null indicates
	 * no player will receive credit. Can use most
	 * Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Player - One or more players who will receive
	 * the heal over time. Can use most Player
	 * based Value Syntax.
	 * - `Type.AssisterParam.`
	 */
	healer, 
	/**
	 * Duration - The duration of the heal over
	 * time in seconds. To have a HOT that lasts
	 * until stopped by script, provide an arbitrarily
	 * long duration such as 9999. Can use most
	 * Number based Value Syntax to specify.
	 * - `Type.Number.`
	 */
	duration, 
	/**
	 * Damage Per Second - The heal per second
	 * for the heal over time. Can use most Number
	 * based Value Syntax to specify.
	 * - `Type.Number.`
	 */
	healingPerSecond) {
	    return "Start Heal Over Time(" + player + ", " + healer + ", " + duration + ", " + healingPerSecond + ")";
	};
	});

	unwrapExports(startHealOverTime$1);
	var startHealOverTime_1$1 = startHealOverTime$1.startHealOverTime;

	var startHoldingButton$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Forces one or more players to hold a button
	 * virtually until stopped by the stop holding button action.
	 */
	exports.startHoldingButton = function (
	/**
	 * Player - The player or players who are holding
	 * a button virtually. Can use most Player
	 * based Value Syntax.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Button - The logical button that is being held virtually.
	 * - `Type.Button.`
	 */
	button) {
	    return "Start Holding Button(" + player + ", " + button + ")";
	};
	});

	unwrapExports(startHoldingButton$1);
	var startHoldingButton_1$1 = startHoldingButton$1.startHoldingButton;

	var startThrottleInDirection$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Sets or adds to the throttle (directional input control)
	 * of a player or players such that they begin moving
	 * in a particular direction.
	 * Any previous throttle in directon is cancelled.
	 */
	exports.startThrottleInDirection = function (
	/**
	 * The player or players whose throttle will be set or added to.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * The unit direction in which the throttle will be
	 * set or added to. This value is normalized internally.
	 * - `Type.Vector.`
	 */
	direction, 
	/**
	 * The amount of throttle (or change to throttle).
	 * A value of 1 denotes full throttle.
	 * - `Type.Number.`
	 */
	magnitude, 
	/**
	 * Specifies whether direction is relative to world
	 * coordinates or the local coordinates of the player or players.
	 * - `Type.Relative.`
	 */
	relative, 
	/**
	 * Specifies whether preexisting
	 * throttle is replaced or added to.
	 * - `Type.StartThrottleBehavior.`
	 */
	behavior, 
	/**
	 * Specifies which of this action's inputs will be
	 * continuously reevaluated. This action will keep asking
	 * for and using new values from reevaluated inputs.
	 * - `Type.StartThrottleReevaluation.`
	 */
	reevaluation) {
	    return "Start Throttle In Direction(" + player + ", " + direction + ", " + magnitude + ", " + relative + ", " + behavior + ", " + reevaluation + ")";
	};
	});

	unwrapExports(startThrottleInDirection$1);
	var startThrottleInDirection_1$1 = startThrottleInDirection$1.startThrottleInDirection;

	var startTransformingThrottle$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Starts transforming (scaling and rotating)
	 * the throttle (directional input control)
	 * of a player or players. cancels any existing
	 * start transforming throttle behavior.
	 */
	exports.startTransformingThrottle = function (
	/**
	 * Player - The player or players whose
	 * throttle will be transformed.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * X Axis Scalar - The player or players will
	 * have their x axis (left to right)
	 * multiplied by this value before the throttle
	 * is rotated to its new relative direction.
	 * This Value is evaluated continuously
	 * (meaning it updates every frame).
	 * - `Type.Number.`
	 */
	xAxisScalar, 
	/**
	 * Y Axis Scalar - The player or players will
	 * have their y axis (left to right)
	 * multiplied by this value before the throttle
	 * is rotated to its new relative direction.
	 * This Value is evaluated continuously
	 * (meaning it updates every frame).
	 * - `Type.Number.`
	 */
	yAxisScalar, 
	/**
	 * Relative Direction - After the axis scalars
	 * are applied, the player or players will
	 * have their throttle transformed so that it is
	 * relative to this unit direction vector.
	 * for example, to make the throttle camera relative,
	 * provide the direction that the camera is facing.
	 * this value is evaluated continuously
	 * (meaning it updates every frame)
	 * and normalized internally.
	 * - `Type.Vector.`
	 */
	relativeDirection) {
	    return "Start Transforming Throttle(" + player + ", " + xAxisScalar + ", " + yAxisScalar + ", " + relativeDirection + ")";
	};
	});

	unwrapExports(startTransformingThrottle$1);
	var startTransformingThrottle_1$1 = startTransformingThrottle$1.startTransformingThrottle;

	var stopAccelerating$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops the acceleration started by the start
	 * accelerating action for one or more players.
	 */
	exports.stopAccelerating = function (
	/**
	 * Player - The player or players who will
	 * stop accelerating. Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop Accelerating(" + player + ")";
	};
	});

	unwrapExports(stopAccelerating$1);
	var stopAccelerating_1$1 = stopAccelerating$1.stopAccelerating;

	var stopAllDamageModifications$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops the all damage modifications that
	 * were started using the start damage modification action.
	 */
	exports.stopAllDamageModifications = function () {
	    return "Stop All Damage Modifications";
	};
	});

	unwrapExports(stopAllDamageModifications$1);
	var stopAllDamageModifications_1$1 = stopAllDamageModifications$1.stopAllDamageModifications;

	var stopAllDamageOverTime$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops all damage over time started by the
	 * start damage over time or one or more players.
	 */
	exports.stopAllDamageOverTime = function (
	/**
	 * Player - The player or players whose scripted
	 * damage over time will stop. Can use most
	 * Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop All Damage Over Time(" + player + ")";
	};
	});

	unwrapExports(stopAllDamageOverTime$1);
	var stopAllDamageOverTime_1$1 = stopAllDamageOverTime$1.stopAllDamageOverTime;

	var stopAllHealOverTime$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops all heal over time started by the
	 * start heal over time or one or more players.
	 */
	exports.stopAllHealOverTime = function (
	/**
	 * Player - The player or players whose scripted
	 * heal over time will stop. Can use most Player
	 * based Value Syntax.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop All Heal Over Time(" + player + ")";
	};
	});

	unwrapExports(stopAllHealOverTime$1);
	var stopAllHealOverTime_1$1 = stopAllHealOverTime$1.stopAllHealOverTime;

	var stopCamera$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops all forced camera positions started
	 * by the start camera or one or more players.
	 */
	exports.stopCamera = function (
	/**
	 * Player - The player or players whose forced
	 * camera positions will stop. Can use most
	 * Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop Camera(" + player + ")";
	};
	});

	unwrapExports(stopCamera$1);
	var stopCamera_1$1 = stopCamera$1.stopCamera;

	var stopChasingGlobalVariable$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops an in-progress chase of a global variable,
	 * leaving it at its current value.
	 */
	exports.stopChasingGlobalVariable = function (
	/**
	 * Variable - Specifies which global variable
	 * to stop modifying. Specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Variable.`
	 */
	variable) {
	    return "Stop Chasing Global Variable(" + variable + ")";
	};
	});

	unwrapExports(stopChasingGlobalVariable$1);
	var stopChasingGlobalVariable_1$1 = stopChasingGlobalVariable$1.stopChasingGlobalVariable;

	var stopChasingPlayerVariable$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops an in-progress chase of a player variable,
	 * leaving it at its current value.
	 */
	exports.stopChasingPlayerVariable = function (
	/**
	 * Player - The player whose variable will
	 * stop changing. If multiple players are provided,
	 * each of their variables will stop changing.
	 * Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Variable - Specifies which player variable
	 * to stop modifying. Specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Variable.`
	 */
	variable) {
	    return "Stop Chasing Player Variable(" + player + ", " + variable + ")";
	};
	});

	unwrapExports(stopChasingPlayerVariable$1);
	var stopChasingPlayerVariable_1$1 = stopChasingPlayerVariable$1.stopChasingPlayerVariable;

	var stopDamageModification$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops a damage modification that was started
	 * by the start damage modification action
	 */
	exports.stopDamageModification = function (
	/**
	 * Damage modification ID - Specifies which
	 * damage modification instance to stop, this
	 * ID may be the last damage modification ID
	 * or a variable into which last damage modification
	 * ID was earlier stored. Can use most Number
	 * based Value Syntax.
	 * - `Type.DamageModification.`
	 */
	damageModificationId) {
	    return "Stop Damage Modification(" + damageModificationId + ")";
	};
	});

	unwrapExports(stopDamageModification$1);
	var stopDamageModification_1$1 = stopDamageModification$1.stopDamageModification;

	var stopDamageOverTime$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops an instance of damage over time that
	 * was started by the start damage over time action
	 */
	exports.stopDamageOverTime = function (
	/**
	 * Damage Over Time ID - Specifies which damage
	 * over time instance to stop, this ID may
	 * be the last damage over time ID or a variable
	 * into which last damage over time ID was
	 * earlier stored. Can use most Number based Value Syntax.
	 * - `Type.DamageOverTime.`
	 */
	damageOverTimeId) {
	    return "Stop Damage Over Time(" + damageOverTimeId + ")";
	};
	});

	unwrapExports(stopDamageOverTime$1);
	var stopDamageOverTime_1$1 = stopDamageOverTime$1.stopDamageOverTime;

	var stopFacing$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops the turning started by the start facing
	 * action for or one or more players.
	 */
	exports.stopFacing = function (
	/**
	 * Player - The player or players who will
	 * stop turning. Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop Facing(" + player + ")";
	};
	});

	unwrapExports(stopFacing$1);
	var stopFacing_1$1 = stopFacing$1.stopFacing;

	var stopForcingPlayerToBeHero$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops forcing one or more players to be
	 * a specified hero. This will not respawn
	 * the player or players, but it will restore
	 * their availablity the next time they go
	 * to select a hero.
	 */
	exports.stopForcingPlayerToBeHero = function (
	/**
	 * Player - The player or players who will
	 * no longer be forced to be a specific hero.
	 * Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop Forcing Player To Be Hero(" + player + ")";
	};
	});

	unwrapExports(stopForcingPlayerToBeHero$1);
	var stopForcingPlayerToBeHero_1$1 = stopForcingPlayerToBeHero$1.stopForcingPlayerToBeHero;

	var stopForcingSpawnRoom$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Undoes the effect of start forcing spawn
	 * room action for the specified team.
	 */
	exports.stopForcingSpawnRoom = function (
	/**
	 * Team - The team that will resume using their
	 * normal spawn room. Can use most Team based Value Syntax.
	 * - `Type.Team.`
	 */
	team) {
	    return "Stop Forcing Spawn Room(" + team + ")";
	};
	});

	unwrapExports(stopForcingSpawnRoom$1);
	var stopForcingSpawnRoom_1$1 = stopForcingSpawnRoom$1.stopForcingSpawnRoom;

	var stopForcingThrottle$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Undoes the effect of start forcing throttle
	 * action for one or more players
	 */
	exports.stopForcingThrottle = function (
	/**
	 * Player - The player or players whose movement
	 * inout will be restored. Can use most Player
	 * based Value Syntax.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop Forcing Throttle(" + player + ")";
	};
	});

	unwrapExports(stopForcingThrottle$1);
	var stopForcingThrottle_1$1 = stopForcingThrottle$1.stopForcingThrottle;

	var stopHealOverTime$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops an instance of heal over time that
	 * was started by the start heal over time action
	 */
	exports.stopHealOverTime = function (
	/**
	 * Heal Over Time ID - Specifies which heal
	 * over time instance to stop, this ID may
	 * be the last heal over time ID or a variable
	 * into which last heal over time ID was earlier
	 * stored. Can use most Number based Value Syntax.
	 * - `Type.HealOverTimeId.`
	 */
	healOverTimeId) {
	    return "Stop Heal Over Time(" + healOverTimeId + ")";
	};
	});

	unwrapExports(stopHealOverTime$1);
	var stopHealOverTime_1$1 = stopHealOverTime$1.stopHealOverTime;

	var stopHoldingButton$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Undoes the effect of the start holding button
	 * action for one or more players.
	 */
	exports.stopHoldingButton = function (
	/**
	 * Player - The player or players who are no
	 * longer holding a button virtually. Can use
	 * most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * The logical button that is no longer being held virtually.
	 * - `Type.Button.`
	 */
	button) {
	    return "Stop Holding Button(" + player + ", " + button + ")";
	};
	});

	unwrapExports(stopHoldingButton$1);
	var stopHoldingButton_1$1 = stopHoldingButton$1.stopHoldingButton;

	var stopThrottleInDirection$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Cancels the behavior caused by start throttle in direction.
	 */
	exports.stopThrottleInDirection = function (
	/**
	 * The player or players whose
	 * default throttle control will be restored.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop Throttle In Direction(" + player + ")";
	};
	});

	unwrapExports(stopThrottleInDirection$1);
	var stopThrottleInDirection_1$1 = stopThrottleInDirection$1.stopThrottleInDirection;

	var stopTransformingThrottle$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Stops the throttle transform started by start
	 * transforming throttle for one or more players.
	 */
	exports.stopTransformingThrottle = function (
	/**
	 * Player - The player or players whose
	 * throttle will stop being transformed.
	 * - `Type.Player.`
	 */
	player) {
	    return "Stop Transforming Throttle(" + player + ")";
	};
	});

	unwrapExports(stopTransformingThrottle$1);
	var stopTransformingThrottle_1$1 = stopTransformingThrottle$1.stopTransformingThrottle;

	var teleport$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Teleports one or more players to the specified location.
	 */
	exports.teleport = function (
	/**
	 * Player - The player or players to teleport.
	 * Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player, 
	/**
	 * Position - The position to which the player
	 * or players will teleport. If a player is
	 * providedm the position of the player is
	 * used. Can use most Vector based Value Syntax.
	 * - `Type.Vector.`
	 */
	position) {
	    return "Teleport(" + player + ", " + position + ")";
	};
	});

	unwrapExports(teleport$1);
	var teleport_1$1 = teleport$1.teleport;

	var unpauseMatchTime$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Unpauses the match time.
	 */
	exports.unpauseMatchTime = function () {
	    return "Unpause Match Time";
	};
	});

	unwrapExports(unpauseMatchTime$1);
	var unpauseMatchTime_1$1 = unpauseMatchTime$1.unpauseMatchTime;

	var wait$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Pauses the execution of the action list,
	 * unless the wait is interrupted. The remainder
	 * of the actions will execute after the pause.
	 */
	exports.wait = function (
	/**
	 * Time - The duration of the pause. A minimum
	 * value of 0.250 seconds is required. Can
	 * use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	time, 
	/**
	 * Wait Behavior - Specifies if and how the
	 * wait can be interrupted. If the condition
	 * list is ignored, the wait will not be interrupted,
	 * otherwise, the condition list will determine
	 * if and when the action list will abort or restart.
	 * - `Type.WaitBehavior.`
	 */
	waitBehavior) {
	    return "Wait(" + time + ", " + waitBehavior + ")";
	};
	});

	unwrapExports(wait$1);
	var wait_1$1 = wait$1.wait;

	var action$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(abort$1, exports);
	tslib_es6.__exportStar(abortIf$1, exports);
	tslib_es6.__exportStar(abortIfConditionIsFalse$1, exports);
	tslib_es6.__exportStar(abortIfConditionIsTrue$1, exports);
	tslib_es6.__exportStar(allowButton$1, exports);
	tslib_es6.__exportStar(applyImpluse$1, exports);
	tslib_es6.__exportStar(bigMessage$1, exports);
	tslib_es6.__exportStar(chaseGlobalVariableAtRate$1, exports);
	tslib_es6.__exportStar(chaseGlobalVariableOverTime$1, exports);
	tslib_es6.__exportStar(chasePlayerVariableAtRate$1, exports);
	tslib_es6.__exportStar(chasePlayerVariableOverTime$1, exports);
	tslib_es6.__exportStar(clearStatus$1, exports);
	tslib_es6.__exportStar(communicate$1, exports);
	tslib_es6.__exportStar(createBeamEffect$1, exports);
	tslib_es6.__exportStar(createDummyBot$1, exports);
	tslib_es6.__exportStar(createEffect$1, exports);
	tslib_es6.__exportStar(createHudText$1, exports);
	tslib_es6.__exportStar(createIcon$1, exports);
	tslib_es6.__exportStar(createInWorldText$1, exports);
	tslib_es6.__exportStar(damage$1, exports);
	tslib_es6.__exportStar(declareMatchDraw$1, exports);
	tslib_es6.__exportStar(declarePlayerVictory$1, exports);
	tslib_es6.__exportStar(declareRoundVictory$1, exports);
	tslib_es6.__exportStar(declareTeamVictory$1, exports);
	tslib_es6.__exportStar(destroyAllDummyBot$1, exports);
	tslib_es6.__exportStar(destroyAllEffects$1, exports);
	tslib_es6.__exportStar(destroyAllHudText$1, exports);
	tslib_es6.__exportStar(destroyAllIcons$1, exports);
	tslib_es6.__exportStar(destroyAllInWorldText$1, exports);
	tslib_es6.__exportStar(destroyDummyBot$1, exports);
	tslib_es6.__exportStar(destroyEffect$1, exports);
	tslib_es6.__exportStar(destroyHudText$1, exports);
	tslib_es6.__exportStar(destroyIcon$1, exports);
	tslib_es6.__exportStar(destroyInWorldText$1, exports);
	tslib_es6.__exportStar(disableBuiltInGameModeAnnouncer$1, exports);
	tslib_es6.__exportStar(disableBuiltInGameModeCompletion$1, exports);
	tslib_es6.__exportStar(disableBuiltInGameModeMusic$1, exports);
	tslib_es6.__exportStar(disableBuiltInGameModeRespawning$1, exports);
	tslib_es6.__exportStar(disableBuiltInGameModeScoring$1, exports);
	tslib_es6.__exportStar(disableDeathSpectateAllPlayers$1, exports);
	tslib_es6.__exportStar(disableDeathSpectateTargetHud$1, exports);
	tslib_es6.__exportStar(disallowButton$1, exports);
	tslib_es6.__exportStar(enableBuiltInGameModeAnnouncer$1, exports);
	tslib_es6.__exportStar(enableBuiltInGameModeCompletion$1, exports);
	tslib_es6.__exportStar(enableBuiltInGameModeMusic$1, exports);
	tslib_es6.__exportStar(enableBuiltInGameModeRespawning$1, exports);
	tslib_es6.__exportStar(enableBuiltInGameModeScoring$1, exports);
	tslib_es6.__exportStar(enableDeathSpectateAllPlayers$1, exports);
	tslib_es6.__exportStar(enableDeathSpectateTargetHud$1, exports);
	tslib_es6.__exportStar(goToAssembleHeroes$1, exports);
	tslib_es6.__exportStar(heal$1, exports);
	tslib_es6.__exportStar(kill$1, exports);
	tslib_es6.__exportStar(loop$1, exports);
	tslib_es6.__exportStar(loopIf$1, exports);
	tslib_es6.__exportStar(loopIfConditionIsFalse$1, exports);
	tslib_es6.__exportStar(loopIfConditionIsTrue$1, exports);
	tslib_es6.__exportStar(modifyGlobalVariable$1, exports);
	tslib_es6.__exportStar(modifyGlobalVariableAtIndex$1, exports);
	tslib_es6.__exportStar(modifyPlayerScore$1, exports);
	tslib_es6.__exportStar(modifyPlayerVariable$1, exports);
	tslib_es6.__exportStar(modifyPlayerVariableAtIndex$1, exports);
	tslib_es6.__exportStar(modifyTeamScore$1, exports);
	tslib_es6.__exportStar(pauseMatchTime$1, exports);
	tslib_es6.__exportStar(playEffect$3, exports);
	tslib_es6.__exportStar(preloadHero$1, exports);
	tslib_es6.__exportStar(pressButton$1, exports);
	tslib_es6.__exportStar(resetPlayerHeroAvailability$1, exports);
	tslib_es6.__exportStar(respawn$1, exports);
	tslib_es6.__exportStar(resurrect$1, exports);
	tslib_es6.__exportStar(setAbility1Enabled$1, exports);
	tslib_es6.__exportStar(setAbility2Enabled$1, exports);
	tslib_es6.__exportStar(setAimSpeed$1, exports);
	tslib_es6.__exportStar(setDamageDealt$1, exports);
	tslib_es6.__exportStar(setDamageReceived$1, exports);
	tslib_es6.__exportStar(setFacing$1, exports);
	tslib_es6.__exportStar(setGlobalVariable$1, exports);
	tslib_es6.__exportStar(setGlobalVariableAtIndex$1, exports);
	tslib_es6.__exportStar(setGravity$1, exports);
	tslib_es6.__exportStar(setHealingDealt$1, exports);
	tslib_es6.__exportStar(setHealingReceived$1, exports);
	tslib_es6.__exportStar(setInvisible$1, exports);
	tslib_es6.__exportStar(setMatchTime$1, exports);
	tslib_es6.__exportStar(setMaxHealth$1, exports);
	tslib_es6.__exportStar(setMoveSpeed$1, exports);
	tslib_es6.__exportStar(setObjectiveDescription$1, exports);
	tslib_es6.__exportStar(setPlayerAllowedHeroes$1, exports);
	tslib_es6.__exportStar(setPlayerScore$1, exports);
	tslib_es6.__exportStar(setPlayerVariable$1, exports);
	tslib_es6.__exportStar(setPlayerVariableAtIndex$1, exports);
	tslib_es6.__exportStar(setPrimaryFireEnabled$1, exports);
	tslib_es6.__exportStar(setProjectileGravity$1, exports);
	tslib_es6.__exportStar(setProjectileSpeed$1, exports);
	tslib_es6.__exportStar(setRespawnMaxTime$1, exports);
	tslib_es6.__exportStar(setSecondaryFireEnabled$1, exports);
	tslib_es6.__exportStar(setSlowMotion$1, exports);
	tslib_es6.__exportStar(setStatus$1, exports);
	tslib_es6.__exportStar(setTeamScore$1, exports);
	tslib_es6.__exportStar(setUltimateAbilityEnabled$1, exports);
	tslib_es6.__exportStar(setUltimateCharge$1, exports);
	tslib_es6.__exportStar(skip$1, exports);
	tslib_es6.__exportStar(skipIf$1, exports);
	tslib_es6.__exportStar(smallMessage$1, exports);
	tslib_es6.__exportStar(startAccelerating$1, exports);
	tslib_es6.__exportStar(startCamera$1, exports);
	tslib_es6.__exportStar(startDamageModification$1, exports);
	tslib_es6.__exportStar(startDamageOverTime$1, exports);
	tslib_es6.__exportStar(startFacing$1, exports);
	tslib_es6.__exportStar(startForcingPlayerToBeHero$1, exports);
	tslib_es6.__exportStar(startForcingSpawnRoom$1, exports);
	tslib_es6.__exportStar(startForcingThrottle$1, exports);
	tslib_es6.__exportStar(startHealOverTime$1, exports);
	tslib_es6.__exportStar(startHoldingButton$1, exports);
	tslib_es6.__exportStar(startThrottleInDirection$1, exports);
	tslib_es6.__exportStar(startTransformingThrottle$1, exports);
	tslib_es6.__exportStar(stopAccelerating$1, exports);
	tslib_es6.__exportStar(stopAllDamageModifications$1, exports);
	tslib_es6.__exportStar(stopAllDamageOverTime$1, exports);
	tslib_es6.__exportStar(stopAllHealOverTime$1, exports);
	tslib_es6.__exportStar(stopCamera$1, exports);
	tslib_es6.__exportStar(stopChasingGlobalVariable$1, exports);
	tslib_es6.__exportStar(stopChasingPlayerVariable$1, exports);
	tslib_es6.__exportStar(stopDamageModification$1, exports);
	tslib_es6.__exportStar(stopDamageOverTime$1, exports);
	tslib_es6.__exportStar(stopFacing$1, exports);
	tslib_es6.__exportStar(stopForcingPlayerToBeHero$1, exports);
	tslib_es6.__exportStar(stopForcingSpawnRoom$1, exports);
	tslib_es6.__exportStar(stopForcingThrottle$1, exports);
	tslib_es6.__exportStar(stopHealOverTime$1, exports);
	tslib_es6.__exportStar(stopHoldingButton$1, exports);
	tslib_es6.__exportStar(stopThrottleInDirection$1, exports);
	tslib_es6.__exportStar(stopTransformingThrottle$1, exports);
	tslib_es6.__exportStar(teleport$1, exports);
	tslib_es6.__exportStar(unpauseMatchTime$1, exports);
	tslib_es6.__exportStar(wait$1, exports);
	});

	unwrapExports(action$1);

	var onGoingEachPlayer$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The ONGOING - EACH PLAYER event attribute
	 * will affect the specified players in the
	 * game environment.
	 */
	exports.onGoingEachPlayer = function (
	/**
	 * - `Type.TeamConstant.`
	 */
	team, 
	/**
	 * - `Type.EventPlayer.`
	 */
	player) {
	    return "Ongoing - Each Player(" + team + ", " + player + ")";
	};
	});

	unwrapExports(onGoingEachPlayer$1);
	var onGoingEachPlayer_1$1 = onGoingEachPlayer$1.onGoingEachPlayer;

	var onGoingGlobal$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The ONGOING - GLOBAL event attribute will
	 * affect all entities in the game environment.
	 */
	exports.onGoingGlobal = function () {
	    return "Ongoing - Global";
	};
	});

	unwrapExports(onGoingGlobal$1);
	var onGoingGlobal_1$1 = onGoingGlobal$1.onGoingGlobal;

	var playerDealtDamage$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The PLAYER DEALT DAMAGE event attribute
	 * will affect the specified players who successfully
	 * dealt damage against another player in the
	 * game environment.
	 */
	exports.playerDealtDamage = function (
	/**
	 * - `Type.TeamConstant.`
	 */
	team, 
	/**
	 * - `Type.EventPlayer.`
	 */
	player) {
	    return "Player dealt damage(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerDealtDamage$1);
	var playerDealtDamage_1$1 = playerDealtDamage$1.playerDealtDamage;

	var playerDealtFinalBlow$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The PLAYER DEALT FINAL BLOW event attribute
	 * will affect the specified players who successfully
	 * dealt the lethal damage against another
	 * player in the game environment.
	 */
	exports.playerDealtFinalBlow = function (
	/**
	 * - `Type.TeamConstant.`
	 */
	team, 
	/**
	 * - `Type.EventPlayer.`
	 */
	player) {
	    return "Player dealt final blow(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerDealtFinalBlow$1);
	var playerDealtFinalBlow_1$1 = playerDealtFinalBlow$1.playerDealtFinalBlow;

	var playerDealtHealing$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * TODO: playerDealtHealing(Player Dealt Healing)(OrderNum:0)
	 */
	exports.playerDealtHealing = function (
	/**
	 * TODO: playerDealtHealing(Player Dealt Healing)(OrderNum:1)
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * TODO: playerDealtHealing(Player Dealt Healing)(OrderNum:2)
	 * - `Type.Player.`
	 */
	player) {
	    return "Player Dealt Healing(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerDealtHealing$1);
	var playerDealtHealing_1$1 = playerDealtHealing$1.playerDealtHealing;

	var playerDied$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The PLAYER DIED event attribute will affect
	 * the specified players who died in the game environment.
	 */
	exports.playerDied = function (
	/**
	 * - `Type.TeamConstant.`
	 */
	team, 
	/**
	 * - `Type.EventPlayer.`
	 */
	player) {
	    return "Player Died(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerDied$1);
	var playerDied_1$1 = playerDied$1.playerDied;

	var playerEarnedElimination$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The PLAYER EARNED ELIMINATION event attribute
	 * will affect the specified players who successfully
	 * score an elimination in the game environment.
	 */
	exports.playerEarnedElimination = function (
	/**
	 * - `Type.TeamConstant.`
	 */
	team, 
	/**
	 * - `Type.EventPlayer.`
	 */
	player) {
	    return "Player earned elimination(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerEarnedElimination$1);
	var playerEarnedElimination_1$1 = playerEarnedElimination$1.playerEarnedElimination;

	var playerJoinedMatch$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * TODO: playerJoinedMatch(Player Joined Match)(OrderNum:0)
	 */
	exports.playerJoinedMatch = function (
	/**
	 * TODO: playerJoinedMatch(Player Joined Match)(OrderNum:1)
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * TODO: playerJoinedMatch(Player Joined Match)(OrderNum:2)
	 * - `Type.Player.`
	 */
	player) {
	    return "Player Joined Match(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerJoinedMatch$1);
	var playerJoinedMatch_1$1 = playerJoinedMatch$1.playerJoinedMatch;

	var playerLeftMatch$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * TODO: playerLeftMatch(Player Left Match)(OrderNum:0)
	 */
	exports.playerLeftMatch = function (
	/**
	 * TODO: playerLeftMatch(Player Left Match)(OrderNum:1)
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * TODO: playerLeftMatch(Player Left Match)(OrderNum:2)
	 * - `Type.Player.`
	 */
	player) {
	    return "Player Left Match(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerLeftMatch$1);
	var playerLeftMatch_1$1 = playerLeftMatch$1.playerLeftMatch;

	var playerReceivedHealing$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * TODO: playerReceivedHealing(Player Received Healing)(OrderNum:0)
	 */
	exports.playerReceivedHealing = function (
	/**
	 * TODO: playerReceivedHealing(Player Received Healing)(OrderNum:1)
	 * - `Type.Team.`
	 */
	team, 
	/**
	 * TODO: playerReceivedHealing(Player Received Healing)(OrderNum:2)
	 * - `Type.Player.`
	 */
	player) {
	    return "Player Received Healing(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerReceivedHealing$1);
	var playerReceivedHealing_1$1 = playerReceivedHealing$1.playerReceivedHealing;

	var playerTookDamage$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The PLAYER TOOK DAMAGE event attribute will
	 * affect the specified players who received
	 * damage in the game environment.
	 */
	exports.playerTookDamage = function (
	/**
	 * - `Type.TeamConstant.`
	 */
	team, 
	/**
	 * - `Type.EventPlayer.`
	 */
	player) {
	    return "Player took damage(" + team + ", " + player + ")";
	};
	});

	unwrapExports(playerTookDamage$1);
	var playerTookDamage_1$1 = playerTookDamage$1.playerTookDamage;

	var event$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(onGoingEachPlayer$1, exports);
	tslib_es6.__exportStar(onGoingGlobal$1, exports);
	tslib_es6.__exportStar(playerDealtDamage$1, exports);
	tslib_es6.__exportStar(playerDealtFinalBlow$1, exports);
	tslib_es6.__exportStar(playerDealtHealing$1, exports);
	tslib_es6.__exportStar(playerDied$1, exports);
	tslib_es6.__exportStar(playerEarnedElimination$1, exports);
	tslib_es6.__exportStar(playerJoinedMatch$1, exports);
	tslib_es6.__exportStar(playerLeftMatch$1, exports);
	tslib_es6.__exportStar(playerReceivedHealing$1, exports);
	tslib_es6.__exportStar(playerTookDamage$1, exports);
	});

	unwrapExports(event$2);

	var eventHealing$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The amount of healing received by the healee
	 * for the event currently being processed by this rule.
	 */
	exports.eventHealing = function () {
	    return "Event Healing";
	};
	});

	unwrapExports(eventHealing$1);
	var eventHealing_1$1 = eventHealing$1.eventHealing;

	var healee$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The player that received the healing for the event
	 * currently being processed by this rule. may be the
	 * same as the healer or the event player.
	 */
	exports.healee = function () {
	    return "Healee";
	};
	});

	unwrapExports(healee$1);
	var healee_1$1 = healee$1.healee;

	var healer$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The player that dealt the healing for the event
	 * currently being processed by this rule. may be the
	 * same as the healee or the event player.
	 */
	exports.healer = function () {
	    return "Healer";
	};
	});

	unwrapExports(healer$1);
	var healer_1$1 = healer$1.healer;

	var hostPlayer$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The player that is currently the host of the
	 * custom game. this value will change if the
	 * current host player leaves the match.
	 */
	exports.hostPlayer = function () {
	    return "Host Player";
	};
	});

	unwrapExports(hostPlayer$1);
	var hostPlayer_1$1 = hostPlayer$1.hostPlayer;

	var isDummyBot$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Whether a player is a dummy bot.
	 */
	exports.isDummyBot = function (
	/**
	 * Player to consider.
	 * - `Type.Player.`
	 */
	player) {
	    return "Is Dummy Bot(" + player + ")";
	};
	});

	unwrapExports(isDummyBot$1);
	var isDummyBot_1$1 = isDummyBot$1.isDummyBot;

	var value$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	tslib_es6.__exportStar(absoluteValue$1, exports);
	tslib_es6.__exportStar(add$2, exports);
	tslib_es6.__exportStar(allDeadPlayers$1, exports);
	tslib_es6.__exportStar(allHeroes$1, exports);
	tslib_es6.__exportStar(allLivingPlayers$1, exports);
	tslib_es6.__exportStar(allowedHeroes$1, exports);
	tslib_es6.__exportStar(allPlayers$1, exports);
	tslib_es6.__exportStar(allPlayersNotOnObjective$1, exports);
	tslib_es6.__exportStar(allPlayersOnObjective$1, exports);
	tslib_es6.__exportStar(altitudeOf$1, exports);
	tslib_es6.__exportStar(and$1, exports);
	tslib_es6.__exportStar(angleBetweenVectors$1, exports);
	tslib_es6.__exportStar(angleDifference$1, exports);
	tslib_es6.__exportStar(appendToArray$1, exports);
	tslib_es6.__exportStar(arccosineInDegrees$1, exports);
	tslib_es6.__exportStar(arccosineInRadians$1, exports);
	tslib_es6.__exportStar(arcsineInDegrees$1, exports);
	tslib_es6.__exportStar(arcsineInRadians$1, exports);
	tslib_es6.__exportStar(arctangentInDegrees$1, exports);
	tslib_es6.__exportStar(arctangentInRadians$1, exports);
	tslib_es6.__exportStar(arrayContains$1, exports);
	tslib_es6.__exportStar(arraySlice$1, exports);
	tslib_es6.__exportStar(attacker$1, exports);
	tslib_es6.__exportStar(backward$1, exports);
	tslib_es6.__exportStar(closestPlayerTo$1, exports);
	tslib_es6.__exportStar(compare$1, exports);
	tslib_es6.__exportStar(controlModeScoringPercentage$1, exports);
	tslib_es6.__exportStar(controlModeScoringTeam$1, exports);
	tslib_es6.__exportStar(cosineFromDegrees$1, exports);
	tslib_es6.__exportStar(cosineFromRadians$1, exports);
	tslib_es6.__exportStar(countOf$1, exports);
	tslib_es6.__exportStar(crossProduct$1, exports);
	tslib_es6.__exportStar(currentArrayElement$1, exports);
	tslib_es6.__exportStar(directionFromAngles$1, exports);
	tslib_es6.__exportStar(directionTowards$1, exports);
	tslib_es6.__exportStar(distanceBetween$1, exports);
	tslib_es6.__exportStar(divide$2, exports);
	tslib_es6.__exportStar(dotProduct$1, exports);
	tslib_es6.__exportStar(down$1, exports);
	tslib_es6.__exportStar(emptyArray$1, exports);
	tslib_es6.__exportStar(entityExists$1, exports);
	tslib_es6.__exportStar(eventDamage$1, exports);
	tslib_es6.__exportStar(eventHealing$1, exports);
	tslib_es6.__exportStar(eventPlayer$3, exports);
	tslib_es6.__exportStar(eventWasCriticalHit$1, exports);
	tslib_es6.__exportStar(eyePosition$1, exports);
	tslib_es6.__exportStar(facingDirectionOf$1, exports);
	tslib_es6.__exportStar(_false$1, exports);
	tslib_es6.__exportStar(farthestPlayerFrom$1, exports);
	tslib_es6.__exportStar(filteredArray$1, exports);
	tslib_es6.__exportStar(firstOf$1, exports);
	tslib_es6.__exportStar(flagPosition$1, exports);
	tslib_es6.__exportStar(forward$1, exports);
	tslib_es6.__exportStar(globalVariable$1, exports);
	tslib_es6.__exportStar(hasSpawned$1, exports);
	tslib_es6.__exportStar(hasStatus$1, exports);
	tslib_es6.__exportStar(healee$1, exports);
	tslib_es6.__exportStar(healer$1, exports);
	tslib_es6.__exportStar(health$1, exports);
	tslib_es6.__exportStar(hero$2, exports);
	tslib_es6.__exportStar(heroIconString$1, exports);
	tslib_es6.__exportStar(heroOf$1, exports);
	tslib_es6.__exportStar(horizontalAngleFromDirection$1, exports);
	tslib_es6.__exportStar(horizontalAngleTowards$1, exports);
	tslib_es6.__exportStar(horizontalFacingAngleOf$1, exports);
	tslib_es6.__exportStar(horizontalSpeedOf$1, exports);
	tslib_es6.__exportStar(hostPlayer$1, exports);
	tslib_es6.__exportStar(indexOfArrayValue$1, exports);
	tslib_es6.__exportStar(isAlive$1, exports);
	tslib_es6.__exportStar(isAssemblingHeroes$1, exports);
	tslib_es6.__exportStar(isBetweenRounds$1, exports);
	tslib_es6.__exportStar(isButtonHeld$1, exports);
	tslib_es6.__exportStar(isCommunicating$1, exports);
	tslib_es6.__exportStar(isCommunicatingAny$1, exports);
	tslib_es6.__exportStar(isCommunicatingAnyEmote$1, exports);
	tslib_es6.__exportStar(isCommunicatingAnyVoiceLine$1, exports);
	tslib_es6.__exportStar(isControlModePointLocked$1, exports);
	tslib_es6.__exportStar(isCrouching$1, exports);
	tslib_es6.__exportStar(isCTFModeInSuddenDeath$1, exports);
	tslib_es6.__exportStar(isDead$1, exports);
	tslib_es6.__exportStar(isDummyBot$1, exports);
	tslib_es6.__exportStar(isFiringPrimary$1, exports);
	tslib_es6.__exportStar(isFiringSecondary$1, exports);
	tslib_es6.__exportStar(isFlagAtBase$1, exports);
	tslib_es6.__exportStar(isFlagBeingCarried$1, exports);
	tslib_es6.__exportStar(isGameInProgress$1, exports);
	tslib_es6.__exportStar(isHeroBeingPlayed$1, exports);
	tslib_es6.__exportStar(isInAir$1, exports);
	tslib_es6.__exportStar(isInLineOfSight$1, exports);
	tslib_es6.__exportStar(isInSetup$1, exports);
	tslib_es6.__exportStar(isInSpawnRoom$1, exports);
	tslib_es6.__exportStar(isInViewAngle$1, exports);
	tslib_es6.__exportStar(isMatchComplete$1, exports);
	tslib_es6.__exportStar(isMoving$1, exports);
	tslib_es6.__exportStar(isObjectiveComplete$1, exports);
	tslib_es6.__exportStar(isOnGround$1, exports);
	tslib_es6.__exportStar(isOnObjective$1, exports);
	tslib_es6.__exportStar(isOnWall$1, exports);
	tslib_es6.__exportStar(isPortraitOnFire$1, exports);
	tslib_es6.__exportStar(isStanding$1, exports);
	tslib_es6.__exportStar(isTeamOnDefense$1, exports);
	tslib_es6.__exportStar(isTeamOnOffense$1, exports);
	tslib_es6.__exportStar(isTrueForAll$1, exports);
	tslib_es6.__exportStar(isTrueForAny$1, exports);
	tslib_es6.__exportStar(isUsingAbility1$1, exports);
	tslib_es6.__exportStar(isUsingAbility2$1, exports);
	tslib_es6.__exportStar(isUsingUltimate$1, exports);
	tslib_es6.__exportStar(isWaitingForPlayers$1, exports);
	tslib_es6.__exportStar(lastCreatedEntity$1, exports);
	tslib_es6.__exportStar(lastDamageModificationId$1, exports);
	tslib_es6.__exportStar(lastDamageOverTimeId$1, exports);
	tslib_es6.__exportStar(lastHealOverTimeId$1, exports);
	tslib_es6.__exportStar(lastOf$1, exports);
	tslib_es6.__exportStar(lastTextId$1, exports);
	tslib_es6.__exportStar(left$1, exports);
	tslib_es6.__exportStar(localVectorOf$1, exports);
	tslib_es6.__exportStar(matchRound$1, exports);
	tslib_es6.__exportStar(matchTime$1, exports);
	tslib_es6.__exportStar(max$1, exports);
	tslib_es6.__exportStar(maxHealth$1, exports);
	tslib_es6.__exportStar(min$1, exports);
	tslib_es6.__exportStar(modulo$1, exports);
	tslib_es6.__exportStar(multiply$3, exports);
	tslib_es6.__exportStar(nearestWalkablePosition$1, exports);
	tslib_es6.__exportStar(normalize$1, exports);
	tslib_es6.__exportStar(normalizedHealth$1, exports);
	tslib_es6.__exportStar(not$1, exports);
	tslib_es6.__exportStar(_null$1, exports);
	tslib_es6.__exportStar(number$2, exports);
	tslib_es6.__exportStar(numberOfDeadPlayers$1, exports);
	tslib_es6.__exportStar(numberOfDeaths$1, exports);
	tslib_es6.__exportStar(numberOfEliminations$1, exports);
	tslib_es6.__exportStar(numberOfFinalBlows$1, exports);
	tslib_es6.__exportStar(numberOfHeroes$1, exports);
	tslib_es6.__exportStar(numberOfLivingPlayers$1, exports);
	tslib_es6.__exportStar(numberOfPlayers$1, exports);
	tslib_es6.__exportStar(numberOfPlayersOnObjective$1, exports);
	tslib_es6.__exportStar(objectiveIndex$1, exports);
	tslib_es6.__exportStar(objectivePosition$1, exports);
	tslib_es6.__exportStar(oppositeTeamOf$1, exports);
	tslib_es6.__exportStar(or$1, exports);
	tslib_es6.__exportStar(payloadPosition$1, exports);
	tslib_es6.__exportStar(payloadProgressPercentage$1, exports);
	tslib_es6.__exportStar(playerCarryingFlag$1, exports);
	tslib_es6.__exportStar(playerClosestToReticle$1, exports);
	tslib_es6.__exportStar(playersInSlot$1, exports);
	tslib_es6.__exportStar(playersInViewAngle$1, exports);
	tslib_es6.__exportStar(playersOnHero$1, exports);
	tslib_es6.__exportStar(playersWithinRadius$1, exports);
	tslib_es6.__exportStar(playerVariable$1, exports);
	tslib_es6.__exportStar(pointCapturePercentage$1, exports);
	tslib_es6.__exportStar(positionOf$1, exports);
	tslib_es6.__exportStar(raiseToPower$1, exports);
	tslib_es6.__exportStar(randomInteger$1, exports);
	tslib_es6.__exportStar(randomizedArray$1, exports);
	tslib_es6.__exportStar(randomReal$1, exports);
	tslib_es6.__exportStar(randomValueInArray$1, exports);
	tslib_es6.__exportStar(rayCastHitNormal$1, exports);
	tslib_es6.__exportStar(rayCastHitPlayer$1, exports);
	tslib_es6.__exportStar(rayCastHitPosition$1, exports);
	tslib_es6.__exportStar(removeFromArray$1, exports);
	tslib_es6.__exportStar(right$1, exports);
	tslib_es6.__exportStar(roundToInteger$1, exports);
	tslib_es6.__exportStar(scoreOf$1, exports);
	tslib_es6.__exportStar(serverLoad$1, exports);
	tslib_es6.__exportStar(serverLoadAverage$1, exports);
	tslib_es6.__exportStar(serverLoadPeak$1, exports);
	tslib_es6.__exportStar(sineFromDegrees$1, exports);
	tslib_es6.__exportStar(sineFromRadians$1, exports);
	tslib_es6.__exportStar(slotOf$1, exports);
	tslib_es6.__exportStar(sortedArray$1, exports);
	tslib_es6.__exportStar(speedOf$1, exports);
	tslib_es6.__exportStar(speedOfInDirection$1, exports);
	tslib_es6.__exportStar(squareRoot$1, exports);
	tslib_es6.__exportStar(string$2, exports);
	tslib_es6.__exportStar(subtract$2, exports);
	tslib_es6.__exportStar(tangentFromDegrees$1, exports);
	tslib_es6.__exportStar(tangentFromRadians$1, exports);
	tslib_es6.__exportStar(team$3, exports);
	tslib_es6.__exportStar(teamOf$1, exports);
	tslib_es6.__exportStar(teamScore$1, exports);
	tslib_es6.__exportStar(throttleOf$1, exports);
	tslib_es6.__exportStar(totalTimeElapsed$1, exports);
	tslib_es6.__exportStar(_true$1, exports);
	tslib_es6.__exportStar(ultimateChargePercent$1, exports);
	tslib_es6.__exportStar(up$1, exports);
	tslib_es6.__exportStar(valueInArray$1, exports);
	tslib_es6.__exportStar(vector$3, exports);
	tslib_es6.__exportStar(vectorTowards$1, exports);
	tslib_es6.__exportStar(velocityOf$1, exports);
	tslib_es6.__exportStar(verticalAngleFromDirection$1, exports);
	tslib_es6.__exportStar(verticalAngleTowards$1, exports);
	tslib_es6.__exportStar(verticalFacingAngleOf$1, exports);
	tslib_es6.__exportStar(verticalSpeedOf$1, exports);
	tslib_es6.__exportStar(victim$1, exports);
	tslib_es6.__exportStar(worldVectorOf$1, exports);
	tslib_es6.__exportStar(xComponentOf$1, exports);
	tslib_es6.__exportStar(yComponentOf$1, exports);
	tslib_es6.__exportStar(zComponentOf$1, exports);
	});

	unwrapExports(value$3);

	var match$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	// @ts-ignore
	tslib_es6.__exportStar(flagPosition$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isAssemblingHeroes$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isBetweenRounds$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isControlModePointLocked$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isCTFModeInSuddenDeath$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isFlagAtBase$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isFlagBeingCarried$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isGameInProgress$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isInSetup$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isMatchComplete$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isObjectiveComplete$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(isWaitingForPlayers$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(matchRound$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(matchTime$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(objectiveIndex$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(objectivePosition$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(payloadProgressPercentage$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(playerCarryingFlag$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(payloadPosition$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(pointCapturePercentage$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(totalTimeElapsed$1, exports);
	});

	unwrapExports(match$1);

	var level$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	// @ts-ignore
	tslib_es6.__exportStar(lastCreatedEntity$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(lastDamageModificationId$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(lastDamageOverTimeId$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(lastHealOverTimeId$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(lastTextId$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(rayCastHitNormal$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(rayCastHitPlayer$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(rayCastHitPosition$1, exports);
	});

	unwrapExports(level$1);

	var server$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	// @ts-ignore
	tslib_es6.__exportStar(serverLoad$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(serverLoadAverage$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(serverLoadPeak$1, exports);
	});

	unwrapExports(server$1);

	var util$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	// @ts-ignore
	tslib_es6.__exportStar(max$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(min$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(normalizedHealth$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(randomInteger$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(randomReal$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(randomValueInArray$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(randomizedArray$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(roundToInteger$1, exports);
	// @ts-ignore
	tslib_es6.__exportStar(squareRoot$1, exports);


	/**
	 * @param value Type `Type.Number.`
	 */
	exports.ceil = function (value) { return value$3.roundToInteger(value, resolver$1.Type.RoundingType.Default('Up')); };
	/**
	 * @param value Type `Type.Number.`
	 */
	exports.floor = function (value) { return value$3.roundToInteger(value, resolver$1.Type.RoundingType.Default('Down')); };
	/**
	 * @param value Type `Type.Number.`
	 */
	exports.round = function (value) { return value$3.roundToInteger(value, resolver$1.Type.RoundingType.Default('To Nearest')); };
	/**
	 * @param value Type `Type.Number.`
	 */
	exports.sqrt = value$3.squareRoot;
	});

	unwrapExports(util$1);
	var util_1$1 = util$1.ceil;
	var util_2$1 = util$1.floor;
	var util_3$1 = util$1.round;
	var util_4$1 = util$1.sqrt;

	var resolver$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	// @ts-ignore
	var Type = tslib_es6.__importStar(type$1);
	exports.Type = Type;
	// @ts-ignore
	var Action = tslib_es6.__importStar(action$1);
	exports.Action = Action;
	// @ts-ignore
	var RuleEvent = tslib_es6.__importStar(event$2);
	exports.RuleEvent = RuleEvent;
	// @ts-ignore
	var Value = tslib_es6.__importStar(value$3);
	exports.Value = Value;
	var Match = tslib_es6.__importStar(match$1);
	exports.Match = Match;
	var Level = tslib_es6.__importStar(level$1);
	exports.Level = Level;
	var Server = tslib_es6.__importStar(server$1);
	exports.Server = Server;
	var Util = tslib_es6.__importStar(util$1);
	exports.Util = Util;
	});

	unwrapExports(resolver$1);
	var resolver_1$1 = resolver$1.Type;
	var resolver_2$1 = resolver$1.Action;
	var resolver_3$1 = resolver$1.RuleEvent;
	var resolver_4$1 = resolver$1.Value;
	var resolver_5$1 = resolver$1.Match;
	var resolver_6$1 = resolver$1.Level;
	var resolver_7$1 = resolver$1.Server;
	var resolver_8$1 = resolver$1.Util;

	var player$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var Player = /** @class */ (function () {
	    /**
	     * @param player `Type.Player.`
	     */
	    function Player(player) {
	        if (player === void 0) { player = resolver$1.Type.Player.eventPlayer(); }
	        this.player = player;
	    }
	    /**
	     * The player’s current height in meters above
	     * a surface. Results in a 0 whenever the place
	     * is on a surface.
	     */
	    Player.prototype.altitudeOf = function () {
	        return resolver$1.Value.altitudeOf(this.player);
	    };
	    /**
	     * The player closest to a position, optionally
	     * restricted by team.
	     */
	    Player.prototype.closestPlayerTo = function (
	    /**
	     * Center - The position to which to measure
	     * proximity. Can use most Value Syntax related
	     * to reporting a position in the map.
	     * - `Type.Vector.`
	     */
	    center, 
	    /**
	     * Team - You can specify any Team Syntax to
	     * restrict which players is reported when
	     * defining this value.
	     * - `Type.Team.`
	     */
	    team) {
	        return resolver$1.Value.closestPlayerTo(center, team);
	    };
	    /**
	     * The position of a player's first person
	     * view (used for aiming)
	     */
	    Player.prototype.eyePosition = function () {
	        return resolver$1.Value.eyePosition(this.player);
	    };
	    /**
	     * The unit-length directional vector of a
	     * player’s current facing relative to the
	     * world. This value includes both horizontal
	     * and vertical facing.
	     */
	    Player.prototype.facingDirectionOf = function () {
	        return resolver$1.Value.facingDirectionOf(this.player);
	    };
	    /**
	     * The player farthest to a position, optionally
	     * restricted by team.
	     */
	    Player.prototype.farthestPlayerFrom = function (
	    /**
	     * Center - The position to which to measure
	     * proximity. Can use most Value Syntax related
	     * to reporting a position in the map.
	     * - `Type.Vector.`
	     */
	    center, 
	    /**
	     * Team - You can specify any Team Syntax to
	     * restrict which players is reported when
	     * defining this value.
	     * - `Type.Player.`
	     */
	    team) {
	        return resolver$1.Value.farthestPlayerFrom(center, team);
	    };
	    /**
	     * Whether the specified player has the specified
	     * status, either from the set status action
	     * or from a non-scripted game mechanic.
	     */
	    Player.prototype.hasStatus = function (
	    /**
	     * Status - The status to check for. Values
	     * include Hacked, Burning, Knocked Down, Asleep,
	     * Frozen, Unkillable, Invincible, Phased Out,
	     * Rooted, or Stunned.
	     * - `Type.Status.`
	     */
	    status) {
	        return resolver$1.Value.hasStatus(this.player, status);
	    };
	    /**
	     * The current health of a player including
	     * armor and shields.
	     */
	    Player.prototype.health = function () {
	        return resolver$1.Value.health(this.player);
	    };
	    /**
	     * The Current Hero of a Player.
	     */
	    Player.prototype.heroOf = function () {
	        return resolver$1.Value.heroOf(this.player);
	    };
	    /**
	     * The horizontal angle in degrees corresponding
	     * to the specified direction vector.
	     */
	    Player.prototype.horizontalAngleFromDirection = function (
	    /**
	     * Direction - The direction vector from which
	     * to acquire a horizontal angle in degrees.
	     * The vector is unitized before calculation
	     * begins. Can use most Vector based Value
	     * Syntax to retrieve this value.
	     * - `Type.Vector.`
	     */
	    direction) {
	        return resolver$1.Value.horizontalAngleFromDirection(direction);
	    };
	    /**
	     * The directional angle in degrees of a player’s
	     * current facing relative to the world. This
	     * value increases as the player rotates to
	     * the left (wrapping around at +/- 180).
	     */
	    Player.prototype.horizontalFacingAngleOf = function () {
	        return resolver$1.Value.horizontalFacingAngleOf(this.player);
	    };
	    /**
	     * The current horizontal speed of a player
	     * in meters per second. This measurement excludes
	     * all vertical motion.
	     */
	    Player.prototype.horizontalSpeedOf = function () {
	        return resolver$1.Value.horizontalSpeedOf(this.player);
	    };
	    /**
	     * Determines whether a player is alive. Returns
	     * a Boolean value.
	     */
	    Player.prototype.isAlive = function () {
	        return resolver$1.Value.isAlive(this.player);
	    };
	    /**
	     * Whether a player is holding a specific button.
	     */
	    Player.prototype.isButtonHeld = function (
	    /**
	     * Button - The button to check. Designed by
	     * any action inputs by ability but not directional
	     * inputs. (i.e. Primary Fire, Secondary Fire,
	     * Ultimate Ability, Jump, Crouch, etc.)
	     * - `Type.Button.`
	     */
	    button) {
	        return resolver$1.Value.isButtonHeld(this.player, button);
	    };
	    /**
	     * Whether a player is using a specific communication
	     * type (such as emote, using a voice line, etc.).
	     */
	    Player.prototype.isCommunicating = function (
	    /**
	     * Type - The type of communication to consider.
	     * The duration of emotes is exact, the duration
	     * of voice lines is assumed to be 4 seconds,
	     * and all other durations are assumed to be
	     * 2 seconds. Any of the four emote slots,
	     * four voice lines slots, or any standard
	     * communication (Need healing, Ultimate Status,
	     * etc.) can be designated.
	     * - `Type.Communication.`
	     */
	    type) {
	        return resolver$1.Value.isCommunicating(this.player, type);
	    };
	    /**
	     * Whether a player is using any communication
	     * type (such as emoting, using a voice line, etc.)
	     */
	    Player.prototype.isCommunicatingAny = function () {
	        return resolver$1.Value.isCommunicatingAny(this.player);
	    };
	    /**
	     * Whether a player is using a emote.
	     */
	    Player.prototype.isCommunicatingAnyEmote = function () {
	        return resolver$1.Value.isCommunicatingAnyEmote(this.player);
	    };
	    /**
	     * Whether a player is using a voice line.
	     * (The duration of a voice line is assumed
	     * to be 4 seconds.)
	     */
	    Player.prototype.isCommunicatingAnyVoiceLine = function () {
	        return resolver$1.Value.isCommunicatingAnyVoiceLine(this.player);
	    };
	    /**
	     * Whether a player is crouching.
	     */
	    Player.prototype.isCrouching = function () {
	        return resolver$1.Value.isCrouching(this.player);
	    };
	    /**
	     * Whether a player is dead.
	     */
	    Player.prototype.isDead = function () {
	        return resolver$1.Value.isDead(this.player);
	    };
	    /**
	     * Whether the specified player’s primary weapon
	     * attack is being used.
	     */
	    Player.prototype.isFiringPrimary = function () {
	        return resolver$1.Value.isFiringPrimary(this.player);
	    };
	    /**
	     * Whether the specified player’s secondary
	     * weapon attack is being used.
	     */
	    Player.prototype.isFiringSecondary = function () {
	        return resolver$1.Value.isFiringSecondary(this.player);
	    };
	    /**
	     * Whether a player is airborne.
	     */
	    Player.prototype.isInAir = function () {
	        return resolver$1.Value.isInAir(this.player);
	    };
	    /**
	     * Whether a specific player is in the spawn
	     * room (and is thus being healed and able
	     * to change heroes).
	     */
	    Player.prototype.isInSpawnRoom = function () {
	        return resolver$1.Value.isInSpawnRoom(this.player);
	    };
	    /**
	     * Whether a specific player is moving (as
	     * defined by having a non-zero constant speed).
	     */
	    Player.prototype.isMoving = function () {
	        return resolver$1.Value.isMoving(this.player);
	    };
	    /**
	     * Whether a player is on the ground (or other
	     * walkable surface).
	     */
	    Player.prototype.isOnGround = function () {
	        return resolver$1.Value.isOnGround(this.player);
	    };
	    /**
	     * Whether a specific player is currently occupying
	     * a payload or capture point.
	     */
	    Player.prototype.isOnObjective = function () {
	        return resolver$1.Value.isOnObjective(this.player);
	    };
	    /**
	     * Whether a player is on a wall (climbing or riding).
	     */
	    Player.prototype.isOnWall = function () {
	        return resolver$1.Value.isOnWall(this.player);
	    };
	    /**
	     * Whether a specific player’s portrait is on fire.
	     */
	    Player.prototype.isPortraitOnFire = function () {
	        return resolver$1.Value.isPortraitOnFire(this.player);
	    };
	    /**
	     * Whether a player is standing (defined as
	     * both not moving and not in the air).
	     */
	    Player.prototype.isStanding = function () {
	        return resolver$1.Value.isStanding(this.player);
	    };
	    /**
	     * Whether the specified player is using ability 1.
	     */
	    Player.prototype.isUsingAbility1 = function () {
	        return resolver$1.Value.isUsingAbility1(this.player);
	    };
	    /**
	     * Whether the specified player is using ability 2.
	     */
	    Player.prototype.isUsingAbility2 = function () {
	        return resolver$1.Value.isUsingAbility2(this.player);
	    };
	    /**
	     * Whether the specified player is using an
	     * ultimate ability.
	     */
	    Player.prototype.isUsingUltimate = function () {
	        return resolver$1.Value.isUsingUltimate(this.player);
	    };
	    /**
	     * The max health of a player, including armor and shields.
	     */
	    Player.prototype.maxHealth = function () {
	        return resolver$1.Value.maxHealth(this.player);
	    };
	    /**
	     * The number of deaths a specific player has
	     * earned. This value only accumulates while
	     * a game is in progress.
	     */
	    Player.prototype.numberOfDeaths = function () {
	        return resolver$1.Value.numberOfDeaths(this.player);
	    };
	    /**
	     * The number of eliminations a specific player
	     * has earned. This value only accumulates
	     * while a game is in progress.
	     */
	    Player.prototype.numberOfEliminations = function () {
	        return resolver$1.Value.numberOfEliminations(this.player);
	    };
	    /**
	     * The number of final blows a specific player
	     * has earned. This value only accumulates
	     * while a game is in progress.
	     */
	    Player.prototype.numberOfFinalBlows = function () {
	        return resolver$1.Value.numberOfFinalBlows(this.player);
	    };
	    /**
	     * The player closest to the reticle of the
	     * specified player, optionally restricted by team.
	     */
	    Player.prototype.playerClosestToReticle = function (
	    /**
	     * Team - The team or teams on which to search
	     * for the closest player. Can use most Team
	     * based Value Syntax to provide this value.
	     * - `Type.Team.`
	     */
	    team) {
	        return resolver$1.Value.playerClosestToReticle(this.player, team);
	    };
	    /**
	     * The players who are within a specific view
	     * angle of a specific player’s reticle, optionally
	     * restricted by team.
	     */
	    Player.prototype.playersInViewAngle = function (
	    /**
	     * View Angle - The view angle to compare against
	     * in degrees. Can use most Angle based Value
	     * Syntax to provide this value.
	     * - `Type.Team.`
	     */
	    team, 
	    /**
	     * Team - The team or teams on which to consider
	     * players. Can use most Team based Value Syntax
	     * to provide this value.
	     * - `Type.Number.`
	     */
	    viewAngle) {
	        return resolver$1.Value.playersInViewAngle(this.player, team, viewAngle);
	    };
	    /**
	     * The current position of a player as a vector.
	     */
	    Player.prototype.positionOf = function () {
	        return resolver$1.Value.positionOf(this.player);
	    };
	    /**
	     * The current score of a player. Results in
	     * 0 if the game mode is not free-for-all.
	     */
	    Player.prototype.scoreOf = function () {
	        return resolver$1.Value.scoreOf(this.player);
	    };
	    /**
	     * The current speed of a player in meters per second.
	     */
	    Player.prototype.speedOf = function () {
	        return resolver$1.Value.speedOf(this.player);
	    };
	    /**
	     * The current speed of a player in a specific
	     * direction in meters per second.
	     */
	    Player.prototype.speedOfInDirection = function (
	    /**
	     * Direction - The direction of travel in which
	     * to measure the player’s speed. Can use most
	     * Vector based Value Syntax to provide this value.
	     * - `Type.Vector.`
	     */
	    direction) {
	        return resolver$1.Value.speedOfInDirection(this.player, direction);
	    };
	    /**
	     * The team of a player. If the game mode is
	     * free-for-all, the team is considered to be all.
	     */
	    Player.prototype.teamOf = function () {
	        return resolver$1.Value.teamOf(this.player);
	    };
	    /**
	     * The directional input of a player, represented
	     * by a vector with a horizontal input on the
	     * X component (positive to the left) and vertical
	     * input on the Z component (positive upward).
	     */
	    Player.prototype.throttleOf = function () {
	        return resolver$1.Value.throttleOf(this.player);
	    };
	    /**
	     * The current ultimate ability charge percentage of a player.
	     */
	    Player.prototype.ultimateChargePercent = function () {
	        return resolver$1.Value.ultimateChargePercent(this.player);
	    };
	    /**
	     * The current velocity of a player as a vector.
	     * If the player is on a surface, the Y component
	     * of this velocity will be 0m even when traveling
	     * up or down a slope.
	     */
	    Player.prototype.velocityOf = function () {
	        return resolver$1.Value.velocityOf(this.player);
	    };
	    /**
	     * The vertical angle in degrees from a player’s
	     * current forward direction to the specified
	     * position. The result is positive if the
	     * position is below the player. Otherwise,
	     * the result is zero or negative.
	     */
	    Player.prototype.verticalAngleTowards = function (
	    /**
	     * Position - The player whose current facing
	     * the angle begins. Can use most Player based
	     * Value Syntax to provide this value.
	     * - `Type.Vector.`
	     */
	    position) {
	        return resolver$1.Value.verticalAngleTowards(this.player, position);
	    };
	    /**
	     * The vertical angle in degrees, of a player’s
	     * current facing relative to the world. This
	     * value increases as the player looks down.
	     */
	    Player.prototype.verticalFacingAngleOf = function () {
	        return resolver$1.Value.verticalFacingAngleOf(this.player);
	    };
	    /**
	     * The current vertical speed of a player in
	     * meters per second. This measurement excludes
	     * all horizontal motion, including motion
	     * while traveling up and down slopes.
	     */
	    Player.prototype.verticalSpeedOf = function () {
	        return resolver$1.Value.verticalSpeedOf(this.player);
	    };
	    return Player;
	}());
	exports.default = Player;
	});

	unwrapExports(player$3);

	var vector$5 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var Vector = /** @class */ (function () {
	    /**
	     * @param vector `Type.Vector.`
	     */
	    function Vector(vector) {
	        this.vector = vector;
	    }
	    /**
	     * The angle in degrees between two directional
	     * vectors (no normalization required).
	     */
	    Vector.prototype.angleBetweenVectors = function (
	    /**
	     * Vector - One of two directional vectors
	     * between which to measure the angle in degrees.
	     * this vector does not need to be pre-normalized.
	     * - `Type.Vector.`
	     */
	    vector1, 
	    /**
	     * Vector - One of two directional vectors
	     * between which to measure the angle in degrees.
	     * this vector does not need to be pre-normalized.
	     * - `Type.Vector.`
	     */
	    vector2) {
	        return resolver$1.Value.angleBetweenVectors(vector1, vector2);
	    };
	    /**
	     * The vector in local coordinates corresponding
	     * to the provided vector in world coordinates.
	     */
	    Vector.prototype.localVectorOf = function (
	    /**
	     * World Vector - The vector in world coordinates
	     * that will be converted to local coordinates.
	     * Can use most Vector based Value Syntax to
	     * provide this data.
	     * - `Type.Vector.`
	     */
	    worldVector, 
	    /**
	     * Local vector - The vector in local coordinates
	     * that will be converted to world coordinates.
	     * Can use most Vector based Value Syntax to
	     * provide this value.
	     * - `Type.Player.`
	     */
	    relativePlayer, 
	    /**
	     * Relative Player - The player to whom the
	     * local vector is relative. Can use most Player
	     * based Value Syntax to provide this value.
	     * - `Type.Transformation.`
	     */
	    transformation) {
	        return resolver$1.Value.localVectorOf(worldVector, relativePlayer, transformation);
	    };
	    /**
	     * The vector in the world coordinates corresponding
	     * to the provided vector in local coordinates.
	     */
	    Vector.prototype.worldVectorOf = function (
	    /**
	     * Local vector - Specifies whether the vector
	     * should receive a rotation and a translation
	     * (usually applied to positions) or only a
	     * rotation (usually applied to directions
	     * and velocities). Can select rotation or
	     * rotation and translation.
	     * - `Type.Vector.`
	     */
	    localVector, 
	    /**
	     * Local vector - The vector in local coordinates
	     * that will be converted to world coordinates.
	     * Can use most Vector based Value Syntax to
	     * provide this value.
	     * - `Type.Player.`
	     */
	    relativePlayer, 
	    /**
	     * Relative Player - The player to whom the
	     * local vector is relative. Can use most Player
	     * based Value Syntax to provide this value.
	     * - `Type.Transformation.`
	     */
	    transformation) {
	        return resolver$1.Value.worldVectorOf(localVector, relativePlayer, transformation);
	    };
	    /**
	     * The difference between two angles, after
	     * the angles are wrapped within +/- 180 of
	     * each other, the result is positive if the
	     * second angle is greater than the first angle,
	     * otherwise the result is zero or negative.
	     */
	    Vector.prototype.angleDifference = function (
	    /**
	     * Angle - You can specify any Angle Syntax
	     * to define both of the required values.
	     * - `Type.Number.`
	     */
	    angle1, 
	    /**
	     * Angle - One of the two angles between which
	     * to measure the resulting angle.
	     * - `Type.Number.`
	     */
	    angle2) {
	        return resolver$1.Value.angleDifference(angle1, angle2);
	    };
	    /**
	     * Arccosine in degrees of the specified value.
	     */
	    Vector.prototype.arccosineInDegrees = function (
	    /**
	     * Value - Input value for the function.
	     * - `Type.Number.`
	     */
	    value) {
	        return resolver$1.Value.arccosineInDegrees(value);
	    };
	    /**
	     * Arccosine in radians of the specified value
	     */
	    Vector.prototype.arccosineInRadians = function (
	    /**
	     * Value - Input value for the function.
	     * - `Type.Number.`
	     */
	    value) {
	        return resolver$1.Value.arccosineInRadians(value);
	    };
	    /**
	     * Arcsine in degrees of the specified value.
	     */
	    Vector.prototype.arcsineInDegrees = function (
	    /**
	     * Value - Input value for the function.
	     * - `Type.Number.`
	     */
	    value) {
	        return resolver$1.Value.arcsineInDegrees(value);
	    };
	    /**
	     * Arcsine in radians of the specified value.
	     */
	    Vector.prototype.arcsineInRadians = function (
	    /**
	     * Value - Input value for the function.
	     * - `Type.Number.`
	     */
	    value) {
	        return resolver$1.Value.arcsineInRadians(value);
	    };
	    /**
	     * Arctangent in degrees of the specified numerator
	     * and denominator(often referred to as atan2).
	     */
	    Vector.prototype.arctangentInDegrees = function (
	    /**
	     * Numerator - Numerator input for the function.
	     * - `Type.Number.`
	     */
	    numerator, 
	    /**
	     * Denominator - Denominator input for the function.
	     * - `Type.Number.`
	     */
	    denominator) {
	        return resolver$1.Value.arctangentInDegrees(numerator, denominator);
	    };
	    /**
	     * Arctangent in radians of the specified numerator
	     * and denominator(often referred to as atan2).
	     */
	    Vector.prototype.arctangentInRadians = function (
	    /**
	     * Numerator - Numerator input for the function.
	     * - `Type.Number.`
	     */
	    numerator, 
	    /**
	     * Denominator - Denominator input for the function.
	     * - `Type.Number.`
	     */
	    denominator) {
	        return resolver$1.Value.arctangentInRadians(numerator, denominator);
	    };
	    /**
	     * The cosine of a specified angle in degrees.
	     * The cosine of the angle is equal to the
	     * length of the adjacent side divided by the
	     * length of the hypotenuse.
	     */
	    Vector.prototype.cosineFromDegrees = function (
	    /**
	     * Angle - Angle in degrees. Can use most Player
	     * based Value Syntax to provide this value.
	     * - `Type.Number.`
	     */
	    angle) {
	        return resolver$1.Value.cosineFromDegrees(angle);
	    };
	    /**
	     * The cosine of a specified angle in radians.
	     * The cosine of the angle is equal to the
	     * length of the adjacent side divided by the
	     * length of the hypotenuse. A radian is a
	     * unit of angle, equal to an angle at the
	     * center of a circle whose arc is equal in
	     * length to the radius.
	     */
	    Vector.prototype.cosineFromRadians = function (
	    /**
	     * Angle - Angle in radians. Can use most Player
	     * based Value Syntax to provide this value.
	     * - `Type.Number.`
	     */
	    angle) {
	        return resolver$1.Value.cosineFromRadians(angle);
	    };
	    /**
	     * The cross product of the specified values.
	     */
	    Vector.prototype.crossProduct = function (
	    /**
	     * Value - You must specify the first Value
	     * Syntax to compare to the second.
	     * - `Type.Vector.`
	     */
	    value1, 
	    /**
	     * Value - You must specify the first Value
	     * Syntax to compare to the second.
	     * - `Type.Vector.`
	     */
	    value2) {
	        return resolver$1.Value.crossProduct(value1, value2);
	    };
	    /**
	     * The unit-length direction vector corresponding
	     * to the specified angles.
	     */
	    Vector.prototype.directionFromAngles = function (
	    /**
	     * Horizontal Angle - The horizontal angle
	     * in degrees used to construct the resulting
	     * vector. Most angle based Value Syntax can be used here.
	     * - `Type.Number.`
	     */
	    horizontalAngle, 
	    /**
	     * Vertical Angle - The vertical angle in degrees
	     * used to construct the resulting vector.
	     * Most angle based Value Syntax can be used here.
	     * - `Type.Number.`
	     */
	    verticalAngle) {
	        return resolver$1.Value.directionFromAngles(horizontalAngle, verticalAngle);
	    };
	    /**
	     * The unit-length direction vector from position to another.
	     */
	    Vector.prototype.directionTowards = function (
	    /**
	     * Start Pos - The position from which the
	     * resulting direction vector will point. Most
	     * positional based Value Syntax can be used here.
	     * - `Type.Vector.`
	     */
	    startPos, 
	    /**
	     * End Pos - The position to which the resulting
	     * direction vector will point. Most positional
	     * based Value Syntax can be used here.
	     * - `Type.Vector.`
	     */
	    endPos) {
	        return resolver$1.Value.directionTowards(startPos, endPos);
	    };
	    /**
	     * The distance between two positions in meters.
	     */
	    Vector.prototype.distanceBetween = function (
	    /**
	     * Start Pos - One of the two positions used
	     * in the distance measurement. Most positional
	     * based Value Syntax can be used here.
	     * - `Type.Vector.`
	     */
	    startPos, 
	    /**
	     * End Pos - One of the two positions used
	     * in the distance measurement. Most positional
	     * based Value Syntax can be used here.
	     * - `Type.Vector.`
	     */
	    endPos) {
	        return resolver$1.Value.distanceBetween(startPos, endPos);
	    };
	    /**
	     * The dot product of the specified values.
	     * The dot product tells you what amount of
	     * one vector goes in the direction of another.
	     */
	    Vector.prototype.dotProduct = function (
	    /**
	     * Value - One of the two vector operands of
	     * the dot product. Any positional based Syntax
	     * may be used here.
	     * - `Type.Vector.`
	     */
	    value1, 
	    /**
	     * Value - One of the two vector operands of
	     * the dot product. Any positional based Syntax
	     * may be used here.
	     * - `Type.Vector.`
	     */
	    value2) {
	        return resolver$1.Value.dotProduct(value1, value2);
	    };
	    /**
	     * Shorthand for the direction vector(0, -1,
	     * 0) which points down.
	     */
	    Vector.prototype.down = function () {
	        return resolver$1.Value.down();
	    };
	    /**
	     * Shorthand for the direction vector(0, 0,
	     * 1) which points forward.
	     */
	    Vector.prototype.forward = function () {
	        return resolver$1.Value.forward();
	    };
	    /**
	     * The horizontal angle in degrees from a player’s
	     * current forward direction to the specified
	     * position. The result is positive if the
	     * position is on the player’s left, otherwise
	     * the result is zero or negative.
	     */
	    Vector.prototype.horizontalAngleTowards = function (
	    /**
	     * Player - The player whose current facing
	     * angle begins. Can use most player based
	     * Value Syntax to retrieve this value.
	     * - `Type.Player.`
	     */
	    player, 
	    /**
	     * Position - The player whose current facing
	     * the angle begins. Can use most Player based
	     * Value Syntax to provide this value.
	     * - `Type.Vector.`
	     */
	    position) {
	        return resolver$1.Value.horizontalAngleTowards(player, position);
	    };
	    /**
	     * Whether two positions have line of sight
	     * with each other.
	     */
	    Vector.prototype.isInLineOfSight = function (
	    /**
	     * Start Pos - The start position for the line
	     * of sight check. Most positional based Value
	     * Syntax can be used here.
	     * - `Type.Vector.`
	     */
	    startPos, 
	    /**
	     * End Pos - The end position for the line
	     * of sight check. Most positional based Value
	     * Syntax can be used here.
	     * - `Type.Vector.`
	     */
	    endPos, 
	    /**
	     * Barriers - Defines how barriers affect line
	     * of sight, when considering whether a barrier
	     * belongs to an enemy, the allegiance of the
	     * player provided to start pos (if any) is
	     * used. Can be set to “Barriers do not block
	     * LOS”, Enemy barriers block LOS", and “All
	     * barriers block LOS”.
	     * - `Type.Barrier.`
	     */
	    barriers) {
	        return resolver$1.Value.isInLineOfSight(startPos, endPos, barriers);
	    };
	    /**
	     * Whether a location is within view of a player.
	     */
	    Vector.prototype.isInViewAngle = function (
	    /**
	     * Player - The player whose view to use for
	     * the check. Can use most Player based Value
	     * Syntax to provide this value.
	     * - `Type.Player.`
	     */
	    player, 
	    /**
	     * Location - The location to test if it’s
	     * within view. Most positional based Value
	     * Syntax can be used here.
	     * - `Type.Vector.`
	     */
	    location, 
	    /**
	     * Team - The team or teams on which to consider
	     * players. Can use most Team based Value Syntax
	     * to provide this value.
	     * - `Type.Number.`
	     */
	    viewAngle) {
	        return resolver$1.Value.isInViewAngle(player, location, viewAngle);
	    };
	    /**
	     * Shorthand for the directional vector(1,
	     * 0, 0), which points to the left.
	     */
	    Vector.prototype.left = function () {
	        return resolver$1.Value.left();
	    };
	    /**
	     * The position closest to the specified position
	     * that can be stood on and is accessible from a spawn point.
	     */
	    Vector.prototype.nearestWalkablePosition = function (
	    /**
	     * Position - The position from which to search
	     * for the nearest walkable position. Can use
	     * any Vector based Value syntax to divide with.
	     * - `Type.Vector.`
	     */
	    position) {
	        return resolver$1.Value.nearestWalkablePosition(position);
	    };
	    /**
	     * The unit-length normalization of a vector.
	     */
	    Vector.prototype.normalize = function (
	    /**
	     * Vector - The vector to normalize. Can use
	     * any Vector based Value syntax to divide with.
	     * - `Type.Vector.`
	     */
	    position) {
	        return resolver$1.Value.normalize(position);
	    };
	    /**
	     * An array containing all players within a
	     * certain distance of a position, optionally
	     * restricted by team and line of sight.
	     */
	    Vector.prototype.playersWithinRadius = function (
	    /**
	     * Center - The center position from which
	     * to measure distance. Can use most Vector
	     * based Value Syntax to provide this value.
	     * - `Type.Vector.`
	     */
	    center, 
	    /**
	     * Radius - The radius in meters inside which
	     * players must be in order to be included
	     * in the resulting array. Can use most Number
	     * based Value Syntax to provide this value.
	     * - `Type.Number.`
	     */
	    radius, 
	    /**
	     * Team - The team or teams to which a player
	     * must belong to be included in the resulting
	     * array. Can use most Team based Value Syntax
	     * to provide this value.
	     * - `Type.Team.`
	     */
	    team, 
	    /**
	     * LOS Check - Specifies whether and how a
	     * player must pass a line-of-sight check to
	     * be included in the resulting array. You
	     * can choose from Off, Surfaces, Surfaces
	     * and Enemy Barriers, and Surfaces and All
	     * Barriers. Off will result in the line of
	     * sight is never blocked, allowing results
	     * through walls. Surfaces will result in line
	     * of sight is blocked by ceilings, walls,
	     * floors, platforms, and any fixed object
	     * that blocks projectiles. Surfaces and Enemy
	     * Barriers will result in line of sight is
	     * blocked by ceilings, walls, floors, platforms,
	     * any fixed object that blocks projectiles,
	     * and barriers created by the enemy team.
	     * Surfaces and All Barriers will result in
	     * line of sight is blocked by ceilings, walls,
	     * floors, platforms, any fixed object that
	     * blocks projectiles, and all barriers.
	     * - `Type.LosCheck.`
	     */
	    losCheck) {
	        return resolver$1.Value.playersWithinRadius(center, radius, team, losCheck);
	    };
	    /**
	     * Shorthand for the directional vector (-1,
	     * 0, 0), which points to the right.
	     */
	    Vector.prototype.right = function () {
	        return resolver$1.Value.right();
	    };
	    /**
	     * Sine of the specified angle in degrees.
	     * The sine is the ratio of the length of the
	     * side that is opposite  that angle to the
	     * length of the longest side of the triangle
	     * (the hypotenuse).
	     */
	    Vector.prototype.sineFromDegrees = function (
	    /**
	     * Angle - Angle in degrees. Can use most Player
	     * based Value Syntax to provide this value.
	     * - `Type.Number.`
	     */
	    angle) {
	        return resolver$1.Value.sineFromDegrees(angle);
	    };
	    /**
	     * Sine of the specified angle in radians.
	     * The sine is the ratio of the length of the
	     * side that is opposite  that angle to the
	     * length of the longest side of the triangle
	     * (the hypotenuse). A radian is a unit of
	     * angle, equal to an angle at the center of
	     * a circle whose arc is equal in length to the radius.
	     */
	    Vector.prototype.sineFromRadians = function (
	    /**
	     * Angle - Angle in radians. Can use most Player
	     * based Value Syntax to provide this value.
	     * - `Type.Number.`
	     */
	    angle) {
	        return resolver$1.Value.sineFromRadians(angle);
	    };
	    /**
	     * The slot number of the specified player.
	     * In team games, each team has slots 0 through
	     * 5. In free-for-all games, slots are numbers 0 through 11.
	     */
	    Vector.prototype.slotOf = function (
	    /**
	     * Player - The player whose slot number to
	     * acquire. Can use most Player based Value
	     * Syntax to provide this value.
	     * - `Type.Player.`
	     */
	    player) {
	        return resolver$1.Value.slotOf(player);
	    };
	    /**
	     * Tangent of the specified angle in degrees.
	     */
	    Vector.prototype.tangentFromDegrees = function (
	    /**
	     * Angle - Angle in degrees. Can use most Player
	     * based Value Syntax to provide this value.
	     * - `Type.Number.`
	     */
	    angle) {
	        return resolver$1.Value.tangentFromDegrees(angle);
	    };
	    /**
	     * Tangent of the specified angle in radians.
	     */
	    Vector.prototype.tangentFromRadians = function (
	    /**
	     * Angle - Angle in radians. Can use most Player
	     * based Value Syntax to provide this value.
	     * - `Type.Number.`
	     */
	    angle) {
	        return resolver$1.Value.tangentFromRadians(angle);
	    };
	    /**
	     * Shorthand for the directional vector(0,
	     * 1, 0). Which points upward.
	     */
	    Vector.prototype.up = function () {
	        return resolver$1.Value.up();
	    };
	    /**
	     * The vertical angle in degrees corresponding
	     * to the specified direction vector.
	     */
	    Vector.prototype.verticalAngleFromDirection = function (
	    /**
	     * Direction - The direction vector from which
	     * to acquire a vertical angle in degrees.
	     * The vector is unitized before calculations
	     * begins. Can use most Vector based Value
	     * Syntax to provide this value.
	     * - `Type.Vector.`
	     */
	    direction) {
	        return resolver$1.Value.verticalAngleFromDirection(direction);
	    };
	    /**
	     * The X Component of the specified Vector,
	     * usually representing a leftward amount.
	     */
	    Vector.prototype.xComponentOf = function () {
	        return resolver$1.Value.xComponentOf(this.vector);
	    };
	    /**
	     * The Y Component of the specified Vector,
	     * usually representing a upward amount.
	     */
	    Vector.prototype.yComponentOf = function () {
	        return resolver$1.Value.yComponentOf(this.vector);
	    };
	    /**
	     * The Z Component of the specified Vector,
	     * usually representing a forward amount.
	     */
	    Vector.prototype.zComponentOf = function () {
	        return resolver$1.Value.zComponentOf(this.vector);
	    };
	    return Vector;
	}());
	exports.default = Vector;
	});

	unwrapExports(vector$5);

	var team$5 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var Team = /** @class */ (function () {
	    /**
	     * @param team `Type.Team.`
	     */
	    function Team(team) {
	        this.team = team;
	    }
	    /**
	     * The score percentage for the specified team
	     * in the control mode.
	     */
	    Team.prototype.controlModeScoringPercentage = function () {
	        return resolver$1.Value.controlModeScoringPercentage(this.team);
	    };
	    /**
	     * Whether a specific hero is being played
	     * (either on a team or in the match).
	     */
	    Team.prototype.isHeroBeingPlayed = function (
	    /**
	     * Hero - The hero to check for play. Can use
	     * most Hero based Value Syntax to provide this value.
	     * - `Type.Hero.`
	     */
	    hero) {
	        return resolver$1.Value.isHeroBeingPlayed(hero, this.team);
	    };
	    /**
	     * Whether the specified team is currently
	     * on defense in a standard match.
	     */
	    Team.prototype.isTeamOnDefense = function () {
	        return resolver$1.Value.isTeamOnDefense(this.team);
	    };
	    /**
	     * Whether the specified team is currently
	     * on offense in a standard match.
	     */
	    Team.prototype.isTeamOnOffense = function () {
	        return resolver$1.Value.isTeamOnOffense(this.team);
	    };
	    /**
	     * The number of dead players on a team or in the match.
	     */
	    Team.prototype.numberOfDeadPlayers = function () {
	        return resolver$1.Value.numberOfDeadPlayers(this.team);
	    };
	    /**
	     * The number of players playing a specific
	     * hero on a team or in the match.
	     */
	    Team.prototype.numberOfHeroes = function (
	    /**
	     * Hero - The hero to check for play. Can use
	     * most Hero based Value Syntax to provide this value.
	     * - `Type.Hero.`
	     */
	    hero) {
	        return resolver$1.Value.numberOfHeroes(hero, this.team);
	    };
	    /**
	     * The number of living players on a team or in the match.
	     */
	    Team.prototype.numberOfLivingPlayers = function () {
	        return resolver$1.Value.numberOfLivingPlayers(this.team);
	    };
	    /**
	     * The number of players on a team or in the match.
	     */
	    Team.prototype.numberOfPlayers = function () {
	        return resolver$1.Value.numberOfPlayers(this.team);
	    };
	    /**
	     * The number of players occupying a payload
	     * or a control point (either on a team or in the match).
	     */
	    Team.prototype.numberOfPlayersOnObjective = function () {
	        return resolver$1.Value.numberOfPlayersOnObjective(this.team);
	    };
	    /**
	     * The team opposite the specified team.
	     */
	    Team.prototype.oppositeTeamOf = function () {
	        return resolver$1.Value.oppositeTeamOf(this.team);
	    };
	    /**
	     * The player or array of players who occupy
	     * a specific slot in the game.
	     */
	    Team.prototype.playersInSlot = function (
	    /**
	     * Slot - The slot number from each to acquire
	     * a player or players. In team games, each
	     * team has slots 0 through 5. In free-for-all
	     * games, slots are numbered 0 through 11.
	     * Can use most Number based Value Syntax to
	     * provide this value.
	     * - `Type.Number.`
	     */
	    slot) {
	        return resolver$1.Value.playersInSlot(slot, this.team);
	    };
	    /**
	     * The array of players playing a specific
	     * hero on a team or in the match.
	     */
	    Team.prototype.playersOnHero = function (
	    /**
	     * Hero - The hero to check for play. Can use
	     * most Hero based Value Syntax to provide this value.
	     * - `Type.Hero.`
	     */
	    hero) {
	        return resolver$1.Value.playersOnHero(hero, this.team);
	    };
	    /**
	     * The current score for the specified team.
	     * Results in a 0 in free-for-all game modes.
	     */
	    Team.prototype.teamScore = function () {
	        return resolver$1.Value.teamScore(this.team);
	    };
	    /**
	     * The team that is currently accumulating
	     * score percentage in control mode Results
	     * in all if neither team is accumulating score.
	     */
	    Team.ControlModeScoringTeam = function () {
	        return resolver$1.Value.controlModeScoringTeam();
	    };
	    /**
	     * The team that is currently accumulating
	     * score percentage in control mode Results
	     * in all if neither team is accumulating score.
	     */
	    Team.prototype.controlModeScoringTeam = function () {
	        return resolver$1.Value.controlModeScoringTeam();
	    };
	    return Team;
	}());
	exports.default = Team;
	});

	unwrapExports(team$5);

	var event$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var Event = /** @class */ (function () {
	    /**
	     * @param event `Type.Event.`
	     */
	    function Event(event) {
	        this.event = event;
	    }
	    /**
	     * The amount of damage received by the victim
	     * for the event currently being processed by this rule.
	     */
	    Event.EventDamage = function () {
	        return resolver$1.Value.eventDamage();
	    };
	    /**
	     * The amount of damage received by the victim
	     * for the event currently being processed by this rule.
	     */
	    Event.prototype.eventDamage = function () {
	        return resolver$1.Value.eventDamage();
	    };
	    /**
	     * The player executing the rule, as specified
	     * by the event, may be the same as the attacker or victim.
	     */
	    Event.EventPlayer = function () {
	        return resolver$1.Value.eventPlayer();
	    };
	    /**
	     * The player executing the rule, as specified
	     * by the event, may be the same as the attacker or victim.
	     */
	    Event.prototype.eventPlayer = function () {
	        return resolver$1.Value.eventPlayer();
	    };
	    /**
	     * Whether the damage was a critical hit (such
	     * as a headshot) for the event currently being
	     * processed by this rule.
	     */
	    Event.EventWasCriticalHit = function () {
	        return resolver$1.Value.eventWasCriticalHit();
	    };
	    /**
	     * Whether the damage was a critical hit (such
	     * as a headshot) for the event currently being
	     * processed by this rule.
	     */
	    Event.prototype.eventWasCriticalHit = function () {
	        return resolver$1.Value.eventWasCriticalHit();
	    };
	    return Event;
	}());
	exports.default = Event;
	});

	unwrapExports(event$3);

	var entity$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var Entity = /** @class */ (function () {
	    /**
	     * @param entity `Type.Entity.`
	     */
	    function Entity(entity) {
	        this.entity = entity;
	    }
	    /**
	     * Whether the specified player, icon entity,
	     * or effect entity still exists. Useful for
	     * determining if a player has left the match
	     * or an entity has been destroyed.
	     */
	    Entity.prototype.entityExists = function () {
	        return resolver$1.Value.entityExists(this.entity);
	    };
	    /**
	     * Whether an entity has spawned in the world.
	     * Results in false for players who have not
	     * chosen a hero yet.
	     */
	    Entity.prototype.hasSpawned = function () {
	        return resolver$1.Value.hasSpawned(this.entity);
	    };
	    return Entity;
	}());
	exports.default = Entity;
	});

	unwrapExports(entity$3);

	var rule$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var Rule = /** @class */ (function () {
	    function Rule(data) {
	        var innerCode = "";
	        innerCode += "rule(\"" + data.description + "\")\n";
	        innerCode += "{\n";
	        innerCode += "\tevent\n";
	        innerCode += "\t{\n";
	        innerCode += "\t\t" + data.event + ";\n";
	        innerCode += "\t}\n\n";
	        if (data.condition.length != 0) {
	            innerCode += "\tconditions\n";
	            innerCode += "\t{\n";
	            for (var _i = 0, _a = data.condition; _i < _a.length; _i++) {
	                var condition = _a[_i];
	                innerCode += "\t\t" + condition + ";\n";
	            }
	            innerCode += "\t}\n\n";
	        }
	        if (data.action.length != 0) {
	            innerCode += "\tactions\n";
	            innerCode += "\t{\n";
	            for (var _b = 0, _c = data.action; _b < _c.length; _b++) {
	                var action = _c[_b];
	                innerCode += "\t\t" + action + ";\n";
	            }
	            innerCode += "\t}\n";
	        }
	        innerCode += "}";
	        Rule.collectedCodes.push(innerCode);
	    }
	    Rule.collectedCodes = [];
	    return Rule;
	}());
	exports.default = Rule;
	});

	unwrapExports(rule$1);

	var compiler$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ruleCompare = function (left, operatorToken, right) {
	    return left + " " + operatorToken + " " + right;
	};
	});

	unwrapExports(compiler$1);
	var compiler_1$1 = compiler$1.ruleCompare;

	var reformer$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	// @ts-ignore
	var player_1 = tslib_es6.__importDefault(player$3);
	exports.Player = player_1.default;
	// @ts-ignore
	var vector_1 = tslib_es6.__importDefault(vector$5);
	exports.Vector = vector_1.default;
	// @ts-ignore
	var team_1 = tslib_es6.__importDefault(team$5);
	exports.Team = team_1.default;
	// @ts-ignore
	var event_1 = tslib_es6.__importDefault(event$3);
	exports.Event = event_1.default;
	// @ts-ignore
	var entity_1 = tslib_es6.__importDefault(entity$3);
	exports.Entity = entity_1.default;
	var rule_1 = tslib_es6.__importDefault(rule$1);
	exports.Rule = rule_1.default;
	var Compiler = tslib_es6.__importStar(compiler$1);
	exports.Compiler = Compiler;
	});

	unwrapExports(reformer$1);
	var reformer_1$1 = reformer$1.Player;
	var reformer_2$1 = reformer$1.Vector;
	var reformer_3$1 = reformer$1.Team;
	var reformer_4$1 = reformer$1.Event;
	var reformer_5$1 = reformer$1.Entity;
	var reformer_6$1 = reformer$1.Rule;
	var reformer_7$1 = reformer$1.Compiler;

	var eng = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var Classes = tslib_es6.__importStar(reformer$1);
	exports.Classes = Classes;
	tslib_es6.__exportStar(resolver$1, exports);
	});

	unwrapExports(eng);
	var eng_1 = eng.Classes;

	var release = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var kor$1 = tslib_es6.__importStar(kor);
	exports.kor = kor$1;
	var eng$1 = tslib_es6.__importStar(eng);
	exports.eng = eng$1;
	});

	var index = unwrapExports(release);
	var release_1 = release.kor;
	var release_2 = release.eng;

	exports.default = index;
	exports.eng = release_2;
	exports.kor = release_1;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
