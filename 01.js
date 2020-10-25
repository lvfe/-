"use strict";
exports.__esModule = true;
exports.EventEmitter = void 0;
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.callbacks = new Map();
    }
    EventEmitter.prototype.$on = function (name, fn) {
        if (!this.callbacks.has(name)) {
            this.callbacks.set(name, [fn]);
        }
        else {
            var fns = this.callbacks.get(name);
            fns.push(fn);
        }
    };
    EventEmitter.prototype.$emit = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.callbacks.has(name)) {
            var fns = this.callbacks.get(name);
            fns.forEach(function (fn) {
                try {
                    fn.apply(null, args);
                }
                catch (error) {
                }
            });
        }
    };
    EventEmitter.prototype.$off = function (name) {
        this.callbacks["delete"](name);
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
var event1 = new EventEmitter();
event1.$on('event1', function (msg) {
    console.log("from event1 " + msg);
});
event1.$on('event1', function (msg) {
    console.log("from event11 " + msg);
});
event1.$emit('event1', 'hello');
setTimeout(function () {
    event1.$emit('event1', 'hello');
}, 1000);
event1.$on('event1', function (msg) {
    console.log("from event111 " + msg);
});
