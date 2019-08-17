"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var interface_1 = require("../bin/dva");
// Categorized function collection.
var dva_1 = tslib_1.__importDefault(require("../bin/dva"));
var _a = dva_1.default.eng, RuleEvent = _a.RuleEvent, Value = _a.Value, Action = _a.Action, Level = _a.Level, Server = _a.Server, Match = _a.Match, Util = _a.Util, Type = _a.Type, Classes = _a.Classes;
// Classified data type.
var Array = Type.Array, Bool = Type.Bool, Number = Type.Number, String = Type.String;
// Reprocessed function class.
var Rule = Classes.Rule, Player = Classes.Player, Event = Classes.Event, Entity = Classes.Entity, Team = Classes.Team, Vector = Classes.Vector;
/**
 * @description
 * Write the workshop code from below.
 */
console.log("script.ts say hello?");
// Check operator overload
var a = Value.number(1);
var b = Value.number(2);
var c = Value.number(3);
var d = Value.number(4);
var e = Value.number(4);
var f = Value.number(4);
var g = Value.number(4);
var h = Value.number(4);
var i = Value.number(4);
var j = Value.number(4);
var k = Value.number(4);
var l = Value.number(4);
var m = Value.number(4);
var n = Value.number(4);
var o = Value.number(4);
var checkOperator1 = interface_1.eng.Value.subtract(interface_1.eng.Value.add(interface_1.eng.Value.modulo(interface_1.eng.Value.add(interface_1.eng.Value.divide(interface_1.eng.Value.multiply(a, b), c), d), e), interface_1.eng.Value.add(interface_1.eng.Value.add(interface_1.eng.Value.add(f, g), h), i)), interface_1.eng.Value.subtract(interface_1.eng.Value.subtract(j, interface_1.eng.Value.divide(interface_1.eng.Value.multiply(k, l), m)), interface_1.eng.Value.multiply(n, o)));
// Rule Template
new Rule({
    // Write the rule description.
    description: '',
    // Set the event type
    event: RuleEvent.onGoingGlobal(),
    condition: [
    // Write the rule condition.
    ],
    action: [
    // Write the rule action.
    ]
});
exports.default = Rule;
