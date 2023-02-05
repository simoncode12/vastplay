 (function () {
    var SOURCE = function () {
        !function e(t, n, r) {
            function i(s, a) {
                if (!n[s]) {
                    if (!t[s]) {
                        var l = "function" == typeof require && require;
                        if (!a && l)return l(s, !0);
                        if (o)return o(s, !0);
                        var u = new Error("Cannot find module '" + s + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var c = n[s] = {exports: {}};
                    t[s][0].call(c.exports, function (e) {
                        var n = t[s][1][e];
                        return i(n || e)
                    }, c, c.exports, e, t, n, r)
                }
                return n[s].exports
            }

            for (var o = "function" == typeof require && require, s = 0; s < r.length; s++)i(r[s]);
            return i
        }({
            1: [function (e, t, n) {
                (function (n, r) {
                    !function (t) {
                        "use strict";
                        function i(e) {
                            var t = {path: !0, query: !0, hash: !0};
                            return e ? (/^[a-z]+:/.test(e) && (t.protocol = !0, t.host = !0, /[-a-z0-9]+(\.[-a-z0-9])*:\d+/i.test(e) && (t.port = !0), /\/\/(.*?)(?::(.*?))?@/.test(e) && (t.user = !0, t.pass = !0)), t) : t
                        }

                        function o(e, t, r) {
                            var o, s, f, v = c ? "file://" + (n.platform.match(/^win/i) ? "/" : "") + d("fs").realpathSync(".") : document.location.href;
                            t || (t = v), c ? o = d("url").parse(t) : (o = document.createElement("a"), o.href = t);
                            var E = i(t);
                            f = t.match(/\/\/(.*?)(?::(.*?))?@/) || [];
                            for (s in h)e[s] = E[s] ? o[h[s]] || "" : "";
                            if (e.protocol = e.protocol.replace(/:$/, ""), e.query = e.query.replace(/^\?/, ""), e.hash = a(e.hash.replace(/^#/, "")), e.user = a(f[1] || ""), e.pass = a(f[2] || ""), e.port = p[e.protocol] == e.port || 0 == e.port ? "" : e.port, !E.protocol && /[^\/#?]/.test(t.charAt(0)) && (e.path = t.split("?")[0].split("#")[0]), !E.protocol && r) {
                                var y = new u(v.match(/(.*\/)/)[0]), m = y.path.split("/"), g = e.path.split("/"), A = ["protocol", "user", "pass", "host", "port"], _ = A.length;
                                for (m.pop(), s = 0; _ > s; s++)e[A[s]] = y[A[s]];
                                for (; ".." === g[0];)m.pop(), g.shift();
                                e.path = ("/" !== t.charAt(0) ? m.join("/") : "") + "/" + g.join("/")
                            }
                            e.path = e.path.replace(/^\/{2,}/, "/"), e.paths(("/" === e.path.charAt(0) ? e.path.slice(1) : e.path).split("/")), e.query = new l(e.query)
                        }

                        function s(e) {
                            return encodeURIComponent(e).replace(/'/g, "%27")
                        }

                        function a(e) {
                            return e = e.replace(/\+/g, " "), e = e.replace(/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi, function (e, t, n, r) {
                                var i = parseInt(t, 16) - 224, o = parseInt(n, 16) - 128;
                                if (0 === i && 32 > o)return e;
                                var s = (i << 12) + (o << 6) + (parseInt(r, 16) - 128);
                                return s > 65535 ? e : String.fromCharCode(s)
                            }), (e = e.replace(/%([cd][0-9a-f])%([89ab][0-9a-f])/gi, function (e, t, n) {
                                var r = parseInt(t, 16) - 192;
                                if (2 > r)return e;
                                var i = parseInt(n, 16) - 128;
                                return String.fromCharCode((r << 6) + i)
                            })).replace(/%([0-7][0-9a-f])/gi, function (e, t) {
                                return String.fromCharCode(parseInt(t, 16))
                            })
                        }

                        function l(e) {
                            for (var t, n = /([^=&]+)(=([^&]*))?/g; t = n.exec(e);) {
                                var r = decodeURIComponent(t[1].replace(/\+/g, " ")), i = t[3] ? a(t[3]) : "";
                                void 0 !== this[r] && null !== this[r] ? (this[r]instanceof Array || (this[r] = [this[r]]), this[r].push(i)) : this[r] = i
                            }
                        }

                        function u(e, t) {
                            o(this, e, !t)
                        }

                        var c = "undefined" == typeof window && void 0 !== r && "function" == typeof e, d = c ? t.require : null, h = {
                            protocol: "protocol",
                            host: "hostname",
                            port: "port",
                            path: "pathname",
                            query: "search",
                            hash: "hash"
                        }, p = {ftp: 21, gopher: 70, http: 80, https: 443, ws: 80, wss: 443};
                        l.prototype.toString = function () {
                            var e, t, n = "", r = s;
                            for (e in this)if (!(this[e]instanceof Function || null === this[e]))if (this[e]instanceof Array) {
                                var i = this[e].length;
                                if (i)for (t = 0; i > t; t++)n += n ? "&" : "", n += r(e) + "=" + r(this[e][t]); else n += (n ? "&" : "") + r(e) + "="
                            } else n += n ? "&" : "", n += r(e) + "=" + r(this[e]);
                            return n
                        }, u.prototype.clearQuery = function () {
                            for (var e in this.query)this.query[e]instanceof Function || delete this.query[e];
                            return this
                        }, u.prototype.queryLength = function () {
                            var e, t = 0;
                            for (e in this)this[e]instanceof Function || t++;
                            return t
                        }, u.prototype.isEmptyQuery = function () {
                            return 0 === this.queryLength()
                        }, u.prototype.paths = function (e) {
                            var t, n = "", r = 0;
                            if (e && e.length && e + "" !== e) {
                                for (this.isAbsolute() && (n = "/"), t = e.length; t > r; r++)e[r] = !r && e[r].match(/^\w:$/) ? e[r] : s(e[r]);
                                this.path = n + e.join("/")
                            }
                            for (r = 0, t = (e = ("/" === this.path.charAt(0) ? this.path.slice(1) : this.path).split("/")).length; t > r; r++)e[r] = a(e[r]);
                            return e
                        }, u.prototype.encode = s, u.prototype.decode = a, u.prototype.isAbsolute = function () {
                            return this.protocol || "/" === this.path.charAt(0)
                        }, u.prototype.toString = function () {
                            return (this.protocol && this.protocol + "://") + (this.user && s(this.user) + (this.pass && ":" + s(this.pass)) + "@") + (this.host && this.host) + (this.port && ":" + this.port) + (this.path && this.path) + (this.query.toString() && "?" + this.query) + (this.hash && "#" + s(this.hash))
                        }, t[t.exports ? "exports" : "Url"] = u
                    }(void 0 !== t && t.exports ? t : window)
                }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {_process: 3}], 2: [function (e, t, n) {
                function r() {
                    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
                }

                function i(e) {
                    return "function" == typeof e
                }

                function o(e) {
                    return "number" == typeof e
                }

                function s(e) {
                    return "object" == typeof e && null !== e
                }

                function a(e) {
                    return void 0 === e
                }

                t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function (e) {
                    if (!o(e) || e < 0 || isNaN(e))throw TypeError("n must be a positive number");
                    return this._maxListeners = e, this
                }, r.prototype.emit = function (e) {
                    var t, n, r, o, l, u;
                    if (this._events || (this._events = {}), "error" === e && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
                        if ((t = arguments[1])instanceof Error)throw t;
                        var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                        throw c.context = t, c
                    }
                    if (n = this._events[e], a(n))return !1;
                    if (i(n))switch (arguments.length) {
                        case 1:
                            n.call(this);
                            break;
                        case 2:
                            n.call(this, arguments[1]);
                            break;
                        case 3:
                            n.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            o = Array.prototype.slice.call(arguments, 1), n.apply(this, o)
                    } else if (s(n))for (o = Array.prototype.slice.call(arguments, 1), r = (u = n.slice()).length, l = 0; l < r; l++)u[l].apply(this, o);
                    return !0
                }, r.prototype.addListener = function (e, t) {
                    var n;
                    if (!i(t))throw TypeError("listener must be a function");
                    return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? s(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, s(this._events[e]) && !this._events[e].warned && (n = a(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
                }, r.prototype.on = r.prototype.addListener, r.prototype.once = function (e, t) {
                    function n() {
                        this.removeListener(e, n), r || (r = !0, t.apply(this, arguments))
                    }

                    if (!i(t))throw TypeError("listener must be a function");
                    var r = !1;
                    return n.listener = t, this.on(e, n), this
                }, r.prototype.removeListener = function (e, t) {
                    var n, r, o, a;
                    if (!i(t))throw TypeError("listener must be a function");
                    if (!this._events || !this._events[e])return this;
                    if (n = this._events[e], o = n.length, r = -1, n === t || i(n.listener) && n.listener === t)delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t); else if (s(n)) {
                        for (a = o; a-- > 0;)if (n[a] === t || n[a].listener && n[a].listener === t) {
                            r = a;
                            break
                        }
                        if (r < 0)return this;
                        1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t)
                    }
                    return this
                }, r.prototype.removeAllListeners = function (e) {
                    var t, n;
                    if (!this._events)return this;
                    if (!this._events.removeListener)return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                    if (0 === arguments.length) {
                        for (t in this._events)"removeListener" !== t && this.removeAllListeners(t);
                        return this.removeAllListeners("removeListener"), this._events = {}, this
                    }
                    if (n = this._events[e], i(n))this.removeListener(e, n); else if (n)for (; n.length;)this.removeListener(e, n[n.length - 1]);
                    return delete this._events[e], this
                }, r.prototype.listeners = function (e) {
                    return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
                }, r.prototype.listenerCount = function (e) {
                    if (this._events) {
                        var t = this._events[e];
                        if (i(t))return 1;
                        if (t)return t.length
                    }
                    return 0
                }, r.listenerCount = function (e, t) {
                    return e.listenerCount(t)
                }
            }, {}], 3: [function (e, t, n) {
                function r() {
                    throw new Error("setTimeout has not been defined")
                }

                function i() {
                    throw new Error("clearTimeout has not been defined")
                }

                function o(e) {
                    if (d === setTimeout)return setTimeout(e, 0);
                    if ((d === r || !d) && setTimeout)return d = setTimeout, setTimeout(e, 0);
                    try {
                        return d(e, 0)
                    } catch (t) {
                        try {
                            return d.call(null, e, 0)
                        } catch (t) {
                            return d.call(this, e, 0)
                        }
                    }
                }

                function s(e) {
                    if (h === clearTimeout)return clearTimeout(e);
                    if ((h === i || !h) && clearTimeout)return h = clearTimeout, clearTimeout(e);
                    try {
                        return h(e)
                    } catch (t) {
                        try {
                            return h.call(null, e)
                        } catch (t) {
                            return h.call(this, e)
                        }
                    }
                }

                function a() {
                    E && f && (E = !1, f.length ? v = f.concat(v) : y = -1, v.length && l())
                }

                function l() {
                    if (!E) {
                        var e = o(a);
                        E = !0;
                        for (var t = v.length; t;) {
                            for (f = v, v = []; ++y < t;)f && f[y].run();
                            y = -1, t = v.length
                        }
                        f = null, E = !1, s(e)
                    }
                }

                function u(e, t) {
                    this.fun = e, this.array = t
                }

                function c() {
                }

                var d, h, p = t.exports = {};
                !function () {
                    try {
                        d = "function" == typeof setTimeout ? setTimeout : r
                    } catch (e) {
                        d = r
                    }
                    try {
                        h = "function" == typeof clearTimeout ? clearTimeout : i
                    } catch (e) {
                        h = i
                    }
                }();
                var f, v = [], E = !1, y = -1;
                p.nextTick = function (e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)for (var n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
                    v.push(new u(e, t)), 1 !== v.length || E || o(l)
                }, u.prototype.run = function () {
                    this.fun.apply(null, this.array)
                }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.prependListener = c, p.prependOnceListener = c, p.listeners = function (e) {
                    return []
                }, p.binding = function (e) {
                    throw new Error("process.binding is not supported")
                }, p.cwd = function () {
                    return "/"
                }, p.chdir = function (e) {
                    throw new Error("process.chdir is not supported")
                }, p.umask = function () {
                    return 0
                }
            }, {}], 4: [function (e, t, n) {
                !function (e) {
                    function n() {
                    }

                    function r(e, t) {
                        return function () {
                            e.apply(t, arguments)
                        }
                    }

                    function i(e) {
                        if ("object" != typeof this)throw new TypeError("Promises must be constructed via new");
                        if ("function" != typeof e)throw new TypeError("not a function");
                        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
                    }

                    function o(e, t) {
                        for (; 3 === e._state;)e = e._value;
                        0 !== e._state ? (e._handled = !0, i._immediateFn(function () {
                            var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                            if (null !== n) {
                                var r;
                                try {
                                    r = n(e._value)
                                } catch (e) {
                                    return void a(t.promise, e)
                                }
                                s(t.promise, r)
                            } else(1 === e._state ? s : a)(t.promise, e._value)
                        })) : e._deferreds.push(t)
                    }

                    function s(e, t) {
                        try {
                            if (t === e)throw new TypeError("A promise cannot be resolved with itself.");
                            if (t && ("object" == typeof t || "function" == typeof t)) {
                                var n = t.then;
                                if (t instanceof i)return e._state = 3, e._value = t, void l(e);
                                if ("function" == typeof n)return void c(r(n, t), e)
                            }
                            e._state = 1, e._value = t, l(e)
                        } catch (t) {
                            a(e, t)
                        }
                    }

                    function a(e, t) {
                        e._state = 2, e._value = t, l(e)
                    }

                    function l(e) {
                        2 === e._state && 0 === e._deferreds.length && i._immediateFn(function () {
                            e._handled || i._unhandledRejectionFn(e._value)
                        });
                        for (var t = 0, n = e._deferreds.length; t < n; t++)o(e, e._deferreds[t]);
                        e._deferreds = null
                    }

                    function u(e, t, n) {
                        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                    }

                    function c(e, t) {
                        var n = !1;
                        try {
                            e(function (e) {
                                n || (n = !0, s(t, e))
                            }, function (e) {
                                n || (n = !0, a(t, e))
                            })
                        } catch (e) {
                            if (n)return;
                            n = !0, a(t, e)
                        }
                    }

                    var d = setTimeout;
                    i.prototype.catch = function (e) {
                        return this.then(null, e)
                    }, i.prototype.then = function (e, t) {
                        var r = new this.constructor(n);
                        return o(this, new u(e, t, r)), r
                    }, i.all = function (e) {
                        var t = Array.prototype.slice.call(e);
                        return new i(function (e, n) {
                            function r(o, s) {
                                try {
                                    if (s && ("object" == typeof s || "function" == typeof s)) {
                                        var a = s.then;
                                        if ("function" == typeof a)return void a.call(s, function (e) {
                                            r(o, e)
                                        }, n)
                                    }
                                    t[o] = s, 0 == --i && e(t)
                                } catch (e) {
                                    n(e)
                                }
                            }

                            if (0 === t.length)return e([]);
                            for (var i = t.length, o = 0; o < t.length; o++)r(o, t[o])
                        })
                    }, i.resolve = function (e) {
                        return e && "object" == typeof e && e.constructor === i ? e : new i(function (t) {
                            t(e)
                        })
                    }, i.reject = function (e) {
                        return new i(function (t, n) {
                            n(e)
                        })
                    }, i.race = function (e) {
                        return new i(function (t, n) {
                            for (var r = 0, i = e.length; r < i; r++)e[r].then(t, n)
                        })
                    }, i._immediateFn = "function" == typeof setImmediate && function (e) {
                            setImmediate(e)
                        } || function (e) {
                            d(e, 0)
                        }, i._unhandledRejectionFn = function (e) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                    }, i._setImmediateFn = function (e) {
                        i._immediateFn = e
                    }, i._setUnhandledRejectionFn = function (e) {
                        i._unhandledRejectionFn = e
                    }, void 0 !== t && t.exports ? t.exports = i : e.Promise || (e.Promise = i)
                }(this)
            }, {}], 5: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function o(e, t) {
                    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.EpomPlayer = void 0;
                var s = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();
                e("./utils/Polyfills");
                var a = e("./utils/Logger"), l = e("./objects/CustomObject"), u = e("./PlayerInstance"), c = e("./VpaidApp"), d = e("./playback/PlaybackConfiguration"), h = e("./VpaidEventsAdapter"), p = e("./EpomVpaidFacade"), f = e("./version"), v = e("./utils/Utils");
                window.logger = new a.Logger({name: "EvamCore", debug: !1});
                var E = n.EpomPlayer = function (e) {
                    function t() {
                        r(this, t);
                        var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return e.console = e.console.update({name: "EpomPlayer", debug: !1}), e.utils = {}, e
                    }

                    return o(t, l.CustomObject), s(t, [{
                        key: "setup", value: function (e) {
                            return this.create(e)
                        }
                    }, {
                        key: "create", value: function (e) {
                            return console.info("Creating instance of player [" + f.EVAM_VERSION + "] with config:", v.Utils.safeStringify(e), e.overrideEVAMUrl), new u.PlayerInstance(p.EpomVpaidFacade, d.PlaybackConfiguration, c.VpaidApp, h.VpaidEventsAdapter, e)
                        }
                    }]), t
                }();
                void 0 !== window.EpomPlayer && "function" != typeof window.EpomPlayer || (window.EpomPlayer = new E)
            }, {
                "./EpomVpaidFacade": 6,
                "./PlayerInstance": 7,
                "./VpaidApp": 10,
                "./VpaidEventsAdapter": 11,
                "./objects/CustomObject": 14,
                "./playback/PlaybackConfiguration": 19,
                "./utils/Logger": 33,
                "./utils/Polyfills": 34,
                "./utils/Utils": 37,
                "./version": 55
            }], 6: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function o(e, t) {
                    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.EpomVpaidFacade = void 0;
                var s = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), a = e("./objects/Eventable"), l = e("./utils/Events"), u = e("./utils/Constants"), c = e("./utils/DOM"), d = e("./VastManager"), h = e("./utils/Utils"), p = e("./playback/WaterfallPlayback"), f = e("./VpaidApp"), v = e("./helpers/AdHelper"), E = e("./VpaidEventsAdapter"), y = e("./playback/PlaybackConfiguration"), m = e("./Tracer"), g = e("./version"), A = e("./utils/Lifecycle"), _ = n.EpomVpaidFacade = function (e) {
                    function t(e, n, o) {
                        r(this, t);
                        var s = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return s.console = s.console.update({
                            name: "EpomVpaidFacade",
                            debug: !1
                        }), m.tracer.log("[FACADE] [VERSION]: " + g.EVAM_VERSION), m.tracer.log("[FACADE] document.location.href: " + document.location.href), s.console.log("[FACADE] [VERSION]: " + g.EVAM_VERSION), console.log("[EV] [VERSION]: " + g.EVAM_VERSION), m.tracer.lifecycle(A.Lifecycle.EVAM_CREATED), s.console.log("[FACADE] document.location.href: " + document.location.href), s.assignGetMethods(), s.track(u.Constants.TRACK_DOMAIN, u.Constants.TRACK_KEY, u.Constants.TRACK_NETWORK + u.Constants.TRACK_VM_CREATED), s.vpaidEventsAdapter = new o, s.playbackConfiguration = new n, s.vpaidApp = new e(v.AdHelper, c.DOM, p.Playback, h.Utils, d.VastManager, s.playbackConfiguration, s.vpaidEventsAdapter), s
                    }

                    return o(t, a.Eventable), s(t, [{
                        key: "assignGetMethods", value: function () {
                            var e = this;
                            ["adLinear", "adWidth", "adHeight", "adExpanded", "adSkippableState", "adRemainingTime", "adDuration", "adVolume", "adCompanions", "adIcons"].forEach(function (t) {
                                e["getA" + t.slice(1)] = function () {
                                    return e[t]
                                }
                            })
                        }
                    }, {
                        key: "initAd", value: function (e, t, n, r, i, o) {
                            var s = {width: e, height: t, viewMode: n, desiredBitrate: r, creativeData: i, environmentVars: o};
                            this.console.log("" + h.Utils.safeStringify(s)), this.console.log("[FACADE] initAd called with width: " + e + ", height: " + t + ",\n    requestUrl: " + (o && o.requestUrl)), m.tracer.log("[FACADE] initAd called with width: " + e + ", height: " + t + ", \n    requestUrl: " + (o && o.requestUrl)), this.adManagerParams = s, this.addVPAIDEventsListeners(), this.vpaidApp.init(s)
                        }
                    }, {
                        key: "handshakeVersion", value: function (e) {
                            return this.console.log("Handshaked", e), e || "2.0"
                        }
                    }, {
                        key: "setUuid", value: function (e) {
                            m.tracer.log("[FACADE] [LOGGER] setting uuid " + e), m.tracer.setUuid(e)
                        }
                    }, {
                        key: "addVPAIDEventsListeners", value: function () {
                            var e = this;
                            this.console.warn("[PLAYBACK_EVENT] addVPAIDEventsListeners called."), [l.Events.AD_LOADED, l.Events.AD_ERROR, l.Events.AD_STOPPED, l.Events.AD_STARTED, l.Events.AD_PLAYING, l.Events.AD_REMAINING_TIME_CHANGE, l.Events.AD_PAUSED, l.Events.AD_SKIPPED, l.Events.AD_SKIPPABLE_STATE_CHANGE, l.Events.AD_DURATION_CHANGE, l.Events.AD_CLICK_THRU, l.Events.AD_VOLUME_CHANGE, l.Events.AD_EXPANDED_CHANGE, l.Events.AD_SIZE_CHANGE].forEach(function (t) {
                                e.console.log("[PLAYBACK_EVENT] Attach listener " + t + " to VPAIDEventsAdapter"), e.vpaidEventsAdapter.listen(t, function (n) {
                                    e.console.log("[PLAYBACK_EVENT] Publish listener " + t), e.publish(t, n)
                                })
                            }), [l.Events.AD_VIDEO_START, l.Events.AD_SECOND_FRAME, l.Events.AD_VIDEO_FIRST_QUARTILE, l.Events.AD_VIDEO_MID_POINT, l.Events.AD_VIDEO_THIRD_QUARTILE, l.Events.AD_VIDEO_COMPLETE].forEach(function (t) {
                                e.console.log("[TIMELINE_EVENT] Attach listener " + t + " to VPAIDEventsAdapter"), e.vpaidEventsAdapter.listen(t, function (n) {
                                    e.console.log("[TIMELINE_EVENT] Publish listener " + t), e.publish(t, n)
                                })
                            }), this.vpaidEventsAdapter.listen(l.Events.AD_IMPRESSION, function (t) {
                                e.publish(l.Events.AD_IMPRESSION, {tagId: void 0 === t.tagId ? -1 : t.tagId}), e.track(u.Constants.TRACK_DOMAIN, u.Constants.TRACK_KEY, u.Constants.TRACK_NETWORK + u.Constants.TRACK_VM_AD_IMPRESSION)
                            }), this.vpaidEventsAdapter.listen(l.Events.AD_REQUEST, function (t) {
                                e.publish(l.Events.AD_REQUEST, {tagId: void 0 === t.tagId ? -1 : t.tagId})
                            }), this.vpaidEventsAdapter.listen(l.Events.AD_LOADED, function () {
                                e.track(u.Constants.TRACK_DOMAIN, u.Constants.TRACK_KEY, u.Constants.TRACK_VM_AD_LOADED)
                            })
                        }
                    }, {
                        key: "startAd", value: function () {
                            this.console.log("startAd is called"), m.tracer.log("[FACADE] startAd called"), this.vpaidApp.startAd()
                        }
                    }, {
                        key: "stopAd", value: function () {
                            this.console.log("stopAd is called"), m.tracer.log("[FACADE] stopAd called"), this.playbackConfiguration.getCurrentController().stopAd()
                        }
                    }, {
                        key: "pauseAd", value: function () {
                            this.console.log("pauseAd is called"), m.tracer.log("[FACADE] pauseAd called");
                            var e = this.playbackConfiguration.getCurrentController();
                            e && e.pauseAd()
                        }
                    }, {
                        key: "resumeAd", value: function () {
                            this.console.log("resumeAd is called"), m.tracer.log("[FACADE] resumeAd called"), this.playbackConfiguration.getCurrentController().resumeAd()
                        }
                    }, {
                        key: "skipAd", value: function () {
                            this.console.log("skipAd is called"), m.tracer.log("[FACADE] skipAd called"), this.playbackConfiguration.getCurrentController().skipAd()
                        }
                    }, {
                        key: "resizeAd", value: function (e, t, n) {
                            this.console.log("resizeAd is called"), m.tracer.log("[FACADE] resizeAd called with parameters: " + h.Utils.safeStringify({
                                    width: e,
                                    height: t,
                                    viewMode: n
                                })), this.playbackConfiguration.resize(e, t, n)
                        }
                    }, {
                        key: "expandAd", value: function () {
                            this.console.log("expandAd is called");
                            var e = this.playbackConfiguration.getCurrentController();
                            e && e.setAdExpanded(!0)
                        }
                    }, {
                        key: "collapseAd", value: function () {
                            this.console.log("collapseAd is called");
                            var e = this.playbackConfiguration.getCurrentController();
                            e && e.setAdExpanded(!1)
                        }
                    }, {
                        key: "toggleControls", value: function (e) {
                            this.console.log("toggleControls is called");
                            var t = this.playbackConfiguration.getCurrentController();
                            t && t.showControls && (e ? t.showControls() : t.hideControls())
                        }
                    }, {
                        key: "setAdVolume", value: function (e) {
                            this.console.log("setAdVolume was called"), this.adVolume = e
                        }
                    }, {
                        key: "subscribe", value: function (e, t, n) {
                            this.console.log("Subscribe to event: " + t);
                            var r = n ? e.bind(n) : e;
                            this.listen(t, r, {}, !1)
                        }
                    }, {
                        key: "unsubscribe", value: function (e, t) {
                            this && (this.console.log("Unsubscribe from event: " + t), this.unlisten(t, e))
                        }
                    }, {
                        key: "getVersion", value: function () {
                            return this.console.log("getVersion was called"), g.EVAM_VERSION
                        }
                    }, {
                        key: "adLinear", get: function () {
                            this.console.log("adLinear was called");
                            var e = this.playbackConfiguration.getCurrentController();
                            return e && e.videoAttributes.linear
                        }
                    }, {
                        key: "adWidth", get: function () {
                            this.console.log("adWidth was called");
                            var e = this.playbackConfiguration.getCurrentController();
                            if (e) {
                                var t = e.getWidth();
                                return this.console.log(t), this.console.log("returning width:", t), t
                            }
                            return this.console.log("returning width:", this.adManagerParams.width), this.adManagerParams.width
                        }
                    }, {
                        key: "adHeight", get: function () {
                            this.console.log("adheight was called");
                            var e = this.playbackConfiguration.getCurrentController();
                            if (e) {
                                var t = e.getHeight();
                                return this.console.log(t), this.console.log("returning height:", t), t
                            }
                            return this.console.log("returning height:", this.adManagerParams.height), this.adManagerParams.height
                        }
                    }, {
                        key: "adExpanded", get: function () {
                            this.console.log("adExpanded was called");
                            var e = this.playbackConfiguration.getCurrentController();
                            return e && e.getExpandedState()
                        }
                    }, {
                        key: "adSkippableState", get: function () {
                            this.console.log("adSkippableState was called");
                            var e = this.playbackConfiguration.getCurrentController();
                            return e && e.getSkippableState()
                        }
                    }, {
                        key: "adRemainingTime", get: function () {
                            this.console.log("adRemainingTime was called");
                            var e = this.playbackConfiguration.getCurrentController();
                            return e && e.getRemainingTime()
                        }
                    }, {
                        key: "adDuration", get: function () {
                            this.console.log("adDuration was called");
                            var e = this.playbackConfiguration.getCurrentController();
                            return e && e.getDuration()
                        }
                    }, {
                        key: "adVolume", get: function () {
                            this.console.log("get adVolume was called");
                            var e = this.playbackConfiguration.getCurrentController();
                            return e && e.getVolume()
                        }, set: function (e) {
                            this.console.log("set adVolume was called, volume: " + e), this.playbackConfiguration.setVolume(e)
                        }
                    }, {
                        key: "adCompanions", get: function () {
                            this.console.warn("get adCompanions was called")
                        }
                    }, {
                        key: "adIcons", get: function () {
                            this.console.warn("get adIcons was called")
                        }
                    }], [{
                        key: "getVPAIDAd", value: function (e, n, r) {
                            m.tracer.log("[FACADE] getVPAIDAd called");
                            var i = new t(e || f.VpaidApp, n || y.PlaybackConfiguration, r || E.VpaidEventsAdapter);
                            return window.vpaidManager = i, i
                        }
                    }]), t
                }();
                void 0 !== window.EpomPlayer && window.EpomPlayer || (window.getVPAIDAd = _.getVPAIDAd)
            }, {
                "./Tracer": 8,
                "./VastManager": 9,
                "./VpaidApp": 10,
                "./VpaidEventsAdapter": 11,
                "./helpers/AdHelper": 12,
                "./objects/Eventable": 15,
                "./playback/PlaybackConfiguration": 19,
                "./playback/WaterfallPlayback": 23,
                "./utils/Constants": 28,
                "./utils/DOM": 29,
                "./utils/Events": 31,
                "./utils/Lifecycle": 32,
                "./utils/Utils": 37,
                "./version": 55
            }], 7: [function (e, t, n) {
                "use strict";
                function r(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
                }

                function i(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function o(e, t) {
                    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function s(e, t) {
                    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.PlayerInstance = void 0;
                var a = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), l = function e(t, n, r) {
                    null === t && (t = Function.prototype);
                    var i = Object.getOwnPropertyDescriptor(t, n);
                    if (void 0 === i) {
                        var o = Object.getPrototypeOf(t);
                        return null === o ? void 0 : e(o, n, r)
                    }
                    if ("value"in i)return i.value;
                    var s = i.get;
                    if (void 0 !== s)return s.call(r)
                }, u = (e("./EpomVpaidFacade"), e("./utils/Constants")), c = e("./utils/Events"), d = e("./objects/Eventable"), h = e("./players/PlayerControls"), p = e("./players/HTML5Player"), f = e("./Tracer"), v = e("./utils/Lifecycle"), E = e("./utils/Utils");
                n.PlayerInstance = function (e) {
                    function t(e, n, r, s, a) {
                        i(this, t);
                        var l = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        f.tracer.lifecycle(v.Lifecycle.PLAYER_CREATED), l.console = l.console.update({name: "PlayerInstance", debug: !1}), l.config = a;
                        var d = new e(r, n, s);
                        l.evam = d, l.shouldPlayMainVideo = !1, l.playingMainVideo = !1, l.playAfterLoadedInterval = null, l.loaded = !1, l.isPlaying = null, l.oldVolume = a.mute ? 0 : 50;
                        var h = {
                            requestUrl: a.advertising.tag,
                            network: {name: "EVAM PROXY", channel: "", publisher: 1, placement: 1, banner: 1},
                            volume: 0,
                            mute: !a.mute || a.mute,
                            controls: !0,
                            requests: 1,
                            iterate: 1,
                            maxAds: 1,
                            maxExecutionTime: 2e4,
                            initialPlayerConfig: a
                        }, p = document.querySelector(a.slot);
                        if (!p)return l.console.error("There are no playerContainer", a.slot), l.publish("error"), o(l);
                        "static" !== p.style.position && (p.style.position = "relative"), l.addPlayerStyles();
                        var y = l.createMediaAndVideoSlot(p);
                        return l.videoSlot = y.videoSlot, d.subscribe(function () {
                            l.playMainVideo(y.slot, y.videoSlot, a)
                        }, c.Events.AD_STOPPED), d.subscribe(function () {
                            l.playMainVideo(y.slot, y.videoSlot, a)
                        }, c.Events.AD_ERROR), l.addEventListeners(d), d.initAd(y.slot.offsetWidth, y.slot.offsetHeight, u.Constants.FULLSCREEN_MODE_NORMAL, void 0, {AdParameters: E.Utils.safeStringify(h)}, y), d.adVolume = l.oldVolume, l.publish("beforePlay"), l.publish("all"), l.publish("debug", {event: "beforePlay"}), l
                    }

                    return s(t, d.Eventable), a(t, [{
                        key: "publish", value: function (e, n) {
                            l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "publish", this).call(this, "debug", {event: e}), l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "publish", this).call(this, e, n), l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "publish", this).call(this, "all", n)
                        }
                    }, {
                        key: "addPlayerStyles", value: function () {
                            this.console.warn("addPlayerStyles() called.");
                            var e = document.createElement("style");
                            e.type = "text/css";
                            var t = ".emplayer-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}";
                            t += ".emplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", t += ".emplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent;}", t += ".emplayer * {box-sizing:inherit;}", t += ".em-controls,.em-media,.em-overlays,.em-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0;}", t += ".em-media{overflow:hidden;cursor:pointer;}", t += ".em-media{pointer-events:all;}", e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)), document.getElementsByTagName("head")[0].appendChild(e)
                        }
                    }, {
                        key: "createMediaAndVideoSlot", value: function (e) {
                            e.className = "emplayer", e.className += " emplayer-reset";
                            var t = document.createElement("div");
                            t.className = "em-media", t.className += " emplayer-reset", e.appendChild(t);
                            var n = document.createElement("video");
                            return n.className = "em-video", n.style.width = e.offsetWidth + "px", n.style.height = e.offsetHeight + "px", n.style.backgroundColor = "#000", n.setAttribute("playsinline", ""), n.setAttribute("webkit-playsinline", ""), this.config.autostart && n.setAttribute("autoplay", ""), this.config.mute && (n.setAttribute("muted", ""), n.muted = !0), t.appendChild(n), {
                                slot: t,
                                videoSlot: n
                            }
                        }
                    }, {
                        key: "playMainVideo", value: function (e, t, n) {
                            var r = this.createVideoPlayer({slot: e, videoSlot: t});
                            if (!n.playOnlyAfterAd || n.playOnlyAfterAd && this.shouldPlayMainVideo) {
                                if (!n.file)return f.tracer.lifecycle(v.Lifecycle.PLAYER_COMPLETE), void this.publish("complete");
                                f.tracer.lifecycle(v.Lifecycle.PLAYER_MAIN_VIDEO), r.load(n.file), r.play()
                            }
                        }
                    }, {
                        key: "addEventListeners", value: function (e) {
                            var t, n = this;
                            this.console.log("addEventListeners");
                            var i = (t = {}, r(t, c.Events.AD_LOADED, "ready"), r(t, c.Events.AD_STARTED, "adStarted"), r(t, c.Events.AD_SKIPPED, "adSkipped"), r(t, c.Events.AD_VIDEO_COMPLETE, "adComplete"), r(t, c.Events.AD_CLICK_THRU, "adClick"), t);
                            Object.keys(i).forEach(function (t) {
                                e.subscribe(function () {
                                    n.publish(i[t])
                                }, t)
                            }), e.subscribe(function (e) {
                                var t = e.tagId;
                                n.publish("adImpression", {tagId: void 0 === t ? -1 : t})
                            }, c.Events.AD_IMPRESSION), e.subscribe(function (e) {
                                var t = e.tagId;
                                n.console.log("AD_REQUEST from tag: " + t), n.publish("adRequest", {tagId: void 0 === t ? -1 : t})
                            }, c.Events.AD_REQUEST), e.subscribe(function (e) {
                                n.publish("adError", e)
                            }, c.Events.AD_ERROR), e.subscribe(function () {
                                n.config.autostart && !n.isPlaying && (n.isPlaying = !0, f.tracer.lifecycle(v.Lifecycle.PLAYER_START_AD), e.startAd()), n.loaded = !0
                            }, c.Events.AD_LOADED), e.subscribe(function () {
                                n.isPlaying = !1
                            }, c.Events.AD_PAUSED), e.subscribe(function () {
                                n.isPlaying = !0
                            }, c.Events.AD_PLAYING), e.subscribe(function () {
                                n.shouldPlayMainVideo = !0
                            }, c.Events.AD_IMPRESSION), e.subscribe(function () {
                                n.publish("adPlay", {creativetype: "vpaid-13etqga"})
                            }, c.Events.AD_VIDEO_START)
                        }
                    }, {
                        key: "createVideoPlayer", value: function (e) {
                            var t = this;
                            this.playingMainVideo = !0;
                            var n = [h.PlayerControls.OVERLAY, h.PlayerControls.PLAY_BTTN, h.PlayerControls.SKIP_BTTN, h.PlayerControls.VOLUME_BAR, h.PlayerControls.MUTE_BTTN, h.PlayerControls.FULLSCREEN_BTTN];
                            this.player = new p.HTML5Player(n, {
                                publish: function () {
                                }
                            });
                            var r = this.player, i = {
                                slot: e.slot,
                                videoSlot: e.videoSlot,
                                width: e.slot.offsetWidth,
                                height: e.slot.offsetHeight,
                                viewMode: u.Constants.FULLSCREEN_MODE_THUMBNAIL
                            };
                            return r.init(i), r.defaultSkipValues = {state: !1}, r.controls = !0, r.createControls(), r.listen(c.Events.PLAYER_PLAY, function () {
                                t.publish("play")
                            }), r.listen(c.Events.PLAYER_ENDED, function () {
                                f.tracer.lifecycle(v.Lifecycle.PLAYER_COMPLETE), t.publish("complete")
                            }), r.listen(c.Events.CLICK, function () {
                                t.publish("displayClick")
                            }), r.listen(c.Events.ERROR, function (e) {
                                f.tracer.lifecycle(v.Lifecycle.PLAYER_ERROR), t.publish("error", e)
                            }), r.showControls(), r
                        }
                    }, {
                        key: "play", value: function () {
                            var e = this;
                            this.console.info("play method is called"), this.isPlaying ? this.console.info("already playing") : null !== this.isPlaying ? this.playingMainVideo ? this.player.play() : this.evam.resumeAd() : this.playAfterLoadedInterval = setInterval(function () {
                                e.loaded && e.playAfterLoaded()
                            }, 100)
                        }
                    }, {
                        key: "playAfterLoaded", value: function () {
                            this.playingMainVideo ? this.player.play() : (this.console.log("+++++++++++ startad playafterloaded"), this.isPlaying || (f.tracer.lifecycle(v.Lifecycle.PLAYER_START_AD), this.evam.startAd())), this.isPlaying = !0, clearInterval(this.playAfterLoadedInterval), this.playAfterLoadedInterval = null
                        }
                    }, {
                        key: "pause", value: function () {
                            if (this.console.info("pause method is called"), this.isPlaying = !1, null !== this.playAfterLoadedInterval)return clearInterval(this.playAfterLoadedInterval), void(this.playAfterLoadedInterval = null);
                            this.playingMainVideo ? this.player.pause() : this.evam.pauseAd()
                        }
                    }, {
                        key: "stop", value: function () {
                            this.console.info("stop method is called"), this.isPlaying = !1, this.playingMainVideo ? this.player.stop() : this.evam.stopAd()
                        }
                    }, {
                        key: "setSize", value: function (e, t) {
                            this.console.info("setSize method is called", e, t), this.playingMainVideo ? this.player.setSize(e, t) : this.evam.resizeAd(e, t)
                        }
                    }, {
                        key: "setVolume", value: function (e) {
                            if (this.console.info("setVolume method is called", e), this.playingMainVideo)return this.player.setVolume(e), this.videoSlot.removeAttribute("muted"), void(this.videoSlot.muted = !1);
                            this.videoSlot.removeAttribute("muted"), this.videoSlot.muted = !1, this.evam.adVolume = e
                        }
                    }, {
                        key: "getVolume", value: function () {
                            this.console.info("getVolume method is called");
                            {
                                if (!this.playingMainVideo)return this.evam.adVolume;
                                this.player.getVolume()
                            }
                        }
                    }, {
                        key: "setMute", value: function (e) {
                            if (this.console.warn("setMute: setting volume to 0, requestedValue:", e), this.playingMainVideo)e ? (this.oldVolume = this.player.getVolume(), this.player.setVolume(0), this.videoSlot.setAttribute("muted", ""), this.videoSlot.muted = !0) : (this.player.setVolume(this.oldVolume), this.videoSlot.removeAttribute("muted"), this.videoSlot.muted = !1); else if (e) {
                                var t = this.evam.adVolume;
                                this.oldVolume = void 0 === t ? this.oldVolume : t, this.evam.adVolume = 0, this.videoSlot.setAttribute("muted", ""), this.videoSlot.muted = !0
                            } else this.evam.adVolume = this.oldVolume, this.videoSlot.removeAttribute("muted"), this.videoSlot.muted = !1
                        }
                    }, {
                        key: "getMute", value: function () {
                            return this.console.info("getMute method is called"), this.playingMainVideo ? 0 === this.player.getVolume() : 0 === this.getVolume()
                        }
                    }, {
                        key: "setFullscreenMode", value: function () {
                            this.console.warn("setFullscreenMode not implemented")
                        }
                    }, {
                        key: "getWidth", value: function () {
                            return this.playingMainVideo ? this.player.width : this.evam.adWidth
                        }
                    }, {
                        key: "getHeight", value: function () {
                            return this.playingMainVideo ? this.player.height : this.evam.adHeight
                        }
                    }, {
                        key: "on", value: function (e, t) {
                            this.console.info("on method is called", e), this.listen(e, t)
                        }
                    }, {
                        key: "once", value: function (e, t) {
                            this.console.info("once method is called", e), this.listen(e, t, void 0, !0)
                        }
                    }, {
                        key: "remove", value: function () {
                            this.console.info("remove method is called")
                        }
                    }, {
                        key: "skip", value: function () {
                            this.console.info("skip method is called"), this.evam.skipAd()
                        }
                    }, {
                        key: "getRenderingMode", value: function () {
                            this.console.warn("getRenderingMode method is not implemented")
                        }
                    }, {
                        key: "getFullScreen", value: function () {
                            this.console.warn("getFullScreen method is not implemented")
                        }
                    }, {
                        key: "getState", value: function () {
                            return this.console.warn("getState method always returns 'playing'"), "playing"
                        }
                    }, {
                        key: "getContainer", value: function () {
                            this.console.warn("getContainer method is not implemented")
                        }
                    }, {
                        key: "setControls", value: function (e) {
                            this.console.warn("setControls method is not implemented", e), this.evam.toggleControls(e)
                        }
                    }]), t
                }()
            }, {
                "./EpomVpaidFacade": 6,
                "./Tracer": 8,
                "./objects/Eventable": 15,
                "./players/HTML5Player": 25,
                "./players/PlayerControls": 26,
                "./utils/Constants": 28,
                "./utils/Events": 31,
                "./utils/Lifecycle": 32,
                "./utils/Utils": 37
            }], 8: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function i(e) {
                    if (e.area51 && e.area51.tracer && e.area51.tracer.getUuid)return e.area51.tracer;
                    var t = e.parent;
                    return t === e ? null : i(t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.tracer = void 0;
                var o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), s = e("./utils/Utils"), a = new (function () {
                    function e() {
                        r(this, e);
                        var t = s.Utils.randomHash();
                        this.uuid = t < 0 ? -1 * t : t, this.cashbuster = 1
                    }

                    return o(e, [{
                        key: "log", value: function (e) {
                            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            document && document.location, this.cashbuster++
                        }
                    }, {
                        key: "lifecycle", value: function (e) {
                            e.event, e.module;
                            if (document && document.location);
                            this.cashbuster++
                        }
                    }, {
                        key: "error", value: function (e) {
                            this.log(e, "error")
                        }
                    }, {
                        key: "setUuid", value: function (e) {
                            this.uuid = e
                        }
                    }]), e
                }()), l = void 0;
                try {
                    l = i(window)
                } catch (e) {
                    l = null
                }
                var u = l || a;
                n.tracer = u
            }, {"./utils/Utils": 37}], 9: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function o(e, t) {
                    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.VastManager = void 0;
                var s = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), a = e("./objects/Eventable"), l = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(e("./vendor/vast-client/dist/index")), u = e("./utils/DOM"), c = e("./utils/Utils"), d = e("./helpers/UrlHelper"), h = e("./Tracer");
                n.VastManager = function (e) {
                    function t() {
                        r(this, t);
                        var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return e.console = e.console.update({name: "VastManager"}), e.Utils = c.Utils, e.DOM = u.DOM, e.urlHelper = new d.UrlHelper, e
                    }

                    return o(t, a.Eventable), s(t, [{
                        key: "getAds", value: function (e, t, n) {
                            var r = this;
                            return new Promise(function (i, o) {
                                r.addUrlReplaceTemplateFilters(t, n), l.default.client.get(e, {withCredentials: !0}, function (e, t) {
                                    return !e && t ? (h.tracer.log("[VastClient] [ERROR]: " + c.Utils.safeStringify(t)), r.console.error("VastClient error", t), o(t), void l.default.parser.clearUrlTemplateFilters()) : e ? (r.console.log("VastClient response:", e), e.ads = r.sortAds(e.ads).filter(function (e) {
                                        return e.creatives.length
                                    }), i(e), void l.default.parser.clearUrlTemplateFilters()) : (o("There are no ads in VAST"), h.tracer.log("[VastClient] [ERROR]: There are no ads in VAST"), void l.default.parser.clearUrlTemplateFilters())
                                })
                            })
                        }
                    }, {
                        key: "addUrlReplaceTemplateFilters", value: function (e, t) {
                            var n = this;
                            l.default.parser.addURLTemplateFilter(function (r) {
                                return n.urlHelper.replaceMacrosParams(r, e, t)
                            })
                        }
                    }, {
                        key: "sortAds", value: function (e) {
                            var t = e.filter(function (e) {
                                return !e.sequence
                            }), n = e.filter(function (e) {
                                return e.sequence
                            });
                            return n.sort(function (e, t) {
                                return parseInt(e.sequence, 10) - parseInt(t.sequence, 10)
                            }), n.concat(t)
                        }
                    }]), t
                }()
            }, {
                "./Tracer": 8,
                "./helpers/UrlHelper": 13,
                "./objects/Eventable": 15,
                "./utils/DOM": 29,
                "./utils/Utils": 37,
                "./vendor/vast-client/dist/index": 45
            }], 10: [function (e, t, n) {
                "use strict";
                function r(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++)n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }

                function i(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function o(e, t) {
                    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function s(e, t) {
                    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.VpaidApp = void 0;
                var a = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), l = e("./utils/Utils"), u = e("./objects/Eventable"), c = e("./utils/Events"), d = (e("./VpaidEventsAdapter"), e("./playback/PlaybackConfiguration"), e("./helpers/UrlHelper")), h = e("./Tracer"), p = e("./utils/Lifecycle"), f = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(e("domurl"));
                n.VpaidApp = function (e) {
                    function t(e, n, r, s, a, l, u) {
                        i(this, t);
                        var c = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return c.console = c.console.update({name: "VpaidApp"}), c.AdHelper = e, c.DOM = n, c.VastManager = a, c.Utils = s, c.Playback = r, c.urlHelper = new d.UrlHelper, c.ads = [], c.vpaidEventsAdapter = u, c.playbackConfiguration = l, c
                    }

                    return s(t, u.Eventable), a(t, [{
                        key: "init", value: function (e) {
                            var t = this, n = void 0;
                            try {
                                n = JSON.parse(e.creativeData.AdParameters), this.console.log("[VpaidApp] adParams: " + l.Utils.safeStringify(n).replace(/\n/g, "\\n")), h.tracer.log("[VpaidApp] adParams: " + l.Utils.safeStringify(n).replace(/\n/g, "\\n"))
                            } catch (e) {
                                return this.console.error(e), void this.publish(c.Events.AD_ERROR)
                            }
                            var i = {width: e.width, height: e.height}, o = "", s = void 0;
                            if (n)if (s = this.processAdParameters(n, i), n && n.network && "EVAM PROXY" !== n.network.name) {
                                (o = new f.default(s.requestUrl)).query.vpaid && (o.query.vpaid = !1), o.query.rtpd = 1, o.query["cp.ri"] = 0, o.query.o = this.DOM.getTopDomain();
                                var a = this.DOM.escapeFromFrames(window);
                                o.query.requestUrl = a.location.href, o.query.requestRef = a.document.referrer, o = o.toString()
                            } else o = s.requestUrl;
                            var u = new this.VastManager;
                            h.tracer.log("[VpaidApp] Load ads from VAST url: " + o), this.console.info("Load ads from VAST url: ", o), u.getAds(o, s, i).then(function (n) {
                                t.console.log("Ads are loaded: ", n), h.tracer.log("[VpaidApp] Ads are loaded from VAST url: " + n.ads.length), h.tracer.lifecycle(p.Lifecycle.EVAM_LOADED_ADS), t.ads = n, t.console.warn(o), h.tracer.log("[VpaidApp] adManagerParams from VAST url: " + l.Utils.safeStringify(e).replace(/\n/g, "\\n")), t.console.warn("adManagerParams", e), t.playback = new t.Playback(n, e, i, new t.AdHelper, t.playbackConfiguration, t.vpaidEventsAdapter), t.playback.loadAds(t.ads), t.playback.listen(c.Events.RESPAWN, function () {
                                    t.console.log("Respawn event"), (o = new f.default(o)).query.exclude = o.query.exclude ? [].concat(r(o.query.exclude), r(n.ads.map(function (e) {
                                        return e.id
                                    }))) : [].concat(r(n.ads.map(function (e) {
                                        return e.id
                                    }))), o.query["cp.ri"] = parseInt(o.query["cp.ri"], 10) + 1, o = o.toString(), u.getAds(o, s, i).then(function (e) {
                                        t.playback.loadAds(t.ads), t.playback.start(), t.ads = e
                                    }).catch(function (e) {
                                        t.console.error("playback error", e)
                                    })
                                })
                            }).catch(function (e) {
                                t.console.error("Ads are not loaded", e), h.tracer.lifecycle(p.Lifecycle.EVAM_LOAD_ADS_ERROR), t.vpaidEventsAdapter.publish(c.Events.AD_ERROR)
                            })
                        }
                    }, {
                        key: "startAd", value: function () {
                            this.playback.start()
                        }
                    }, {
                        key: "processAdParameters", value: function (e, t) {
                            var n = {
                                requestUrl: e.requestUrl ? this.urlHelper.replaceMacrosParams(e.requestUrl, e, t) : "",
                                network: {name: void 0, channel: void 0, publisher: void 0, placement: void 0, banner: void 0},
                                maxExecutionTime: e.maxExecutionTime
                            };
                            return this.Utils.mergeObjects(n.network, e.network), e.maxExecutionTime && (n.maxExecutionTime = e.maxExecutionTime), n
                        }
                    }]), t
                }()
            }, {
                "./Tracer": 8,
                "./VpaidEventsAdapter": 11,
                "./helpers/UrlHelper": 13,
                "./objects/Eventable": 15,
                "./playback/PlaybackConfiguration": 19,
                "./utils/Events": 31,
                "./utils/Lifecycle": 32,
                "./utils/Utils": 37,
                domurl: 1
            }], 11: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function o(e, t) {
                    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.VpaidEventsAdapter = void 0;
                var s = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), a = function e(t, n, r) {
                    null === t && (t = Function.prototype);
                    var i = Object.getOwnPropertyDescriptor(t, n);
                    if (void 0 === i) {
                        var o = Object.getPrototypeOf(t);
                        return null === o ? void 0 : e(o, n, r)
                    }
                    if ("value"in i)return i.value;
                    var s = i.get;
                    if (void 0 !== s)return s.call(r)
                }, l = e("./objects/Eventable"), u = (e("./types/IController"), e("./utils/Logger"));
                window.logger = new u.Logger({name: "VpaidEventsAdapter"});
                n.VpaidEventsAdapter = function (e) {
                    function t() {
                        r(this, t);
                        var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return e.console = e.console.update({name: "VpaidEventsAdapter"}), e
                    }

                    return o(t, l.Eventable), s(t, [{
                        key: "publish", value: function (e, n) {
                            a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "publish", this).call(this, e, n)
                        }
                    }, {
                        key: "setController", value: function (e) {
                            this.controller = e
                        }
                    }, {
                        key: "getController", value: function () {
                            return this.controller
                        }
                    }]), t
                }()
            }, {"./objects/Eventable": 15, "./types/IController": 27, "./utils/Logger": 33}], 12: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                Object.defineProperty(n, "__esModule", {value: !0});
                var i = function () {
                    function e(e, t) {
                        var n = [], r = !0, i = !1, o = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && a.return && a.return()
                            } finally {
                                if (i)throw o
                            }
                        }
                        return n
                    }

                    return function (t, n) {
                        if (Array.isArray(t))return t;
                        if (Symbol.iterator in Object(t))return e(t, n);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(), o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();
                n.AdHelper = function () {
                    function e() {
                        r(this, e)
                    }

                    return o(e, [{
                        key: "isAdManager", value: function (e) {
                            var t = this.getCreativeByType(e, "linear");
                            return !!t && !!t.mediaFiles.find(function (e) {
                                    return "application/javascript" === e.mimeType
                                })
                        }
                    }, {
                        key: "getCreativeByType", value: function (e, t) {
                            var n = e.creatives.find(function (e) {
                                return e.type === t
                            });
                            return n || null
                        }
                    }, {
                        key: "getVpaidManagerLink", value: function (e) {
                            var t = this.getCreativeByType(e, "linear");
                            if (!t)return null;
                            if (!t.mediaFiles.length)return null;
                            var n = t.mediaFiles.find(function (e) {
                                return "application/javascript" === e.mimeType && "VPAID" === e.apiFramework
                            });
                            return n ? n.fileURL : null
                        }
                    }, {
                        key: "getMediaFile", value: function (e, t) {
                            var n = this, r = this.getCreativeByType(e, "linear");
                            if (!r)return null;
                            return function (e) {
                                try {
                                    var r = e.map(function (e) {
                                        return {file: e.fileURL, width: e.width, height: e.height}
                                    }), i = n.selectClosestBySize(r, {width: t.width || 0, height: t.height || 0});
                                    return i ? i.file : null
                                } catch (e) {
                                    return null
                                }
                            }(r.mediaFiles.filter(function (e) {
                                return n.isAcceptableMediaType(e.mimeType)
                            }))
                        }
                    }, {
                        key: "getSkipObject", value: function (e) {
                            var t = this.getCreativeByType(e, "linear");
                            return t && t.skipDelay ? {offset: t.skipDelay, state: t.skipDelay > 0} : {state: !1}
                        }
                    }, {
                        key: "isAcceptableMediaType", value: function (e) {
                            var t = e.split("/"), n = i(t, 2)[1];
                            return ["mp4", "ogg", "3gpp", "webm", "3gp", "js", "javascript"].includes(n)
                        }
                    }, {
                        key: "selectClosestBySize", value: function (e, t) {
                            var n = t.width, r = t.height, i = void 0, o = void 0, s = void 0, a = void 0, l = void 0, u = void 0, c = void 0, d = void 0, h = void 0, p = void 0;
                            return e.forEach(function (e) {
                                var t = e.width, f = e.height;
                                i = f * n / t, s = (o = t * r / f) < n ? o : n, a = o < n ? r : i, l = n === s ? a / r : s / n, u = t < n ? Math.pow((n - t) / n, .75) : Math.pow((t - n) / t, 2), c = f < r ? Math.pow((r - f) / r, .75) : Math.pow((f - r) / f, 2), d = Math.max(u, c), (void 0 === h || h <= l - d) && (h = l - d, p = e)
                            }), p
                        }
                    }]), e
                }()
            }, {}], 13: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.UrlHelper = void 0;
                var i = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), o = e("../utils/DOM"), s = e("../utils/Utils");
                n.UrlHelper = function () {
                    function e() {
                        r(this, e), this.DOM = o.DOM, this.Utils = s.Utils
                    }

                    return i(e, [{
                        key: "replaceMacrosParams", value: function (e, t, n) {
                            var r = {};
                            try {
                                r.url = r.topFrame.location.href, r.domain = r.topFrame.location.host, r.referrer = r.topFrame.document.referrer, r.topDomain = this.DOM.getTopDomain() || r.domain
                            } catch (t) {
                                return e
                            }
                            var i = e, o = t ? t.network : null;
                            return t && o && (i = e.replace(/[$_]{2}CHANNEL[$_]{2}/g, o.channel).replace(/[$_]{2}CHANNEL_ESC[$_]{2}/g, encodeURIComponent(o.channel)).replace(/[$_]{2}PUBLISHER_ID[$_]{2}/g, o.publisher).replace(/[$_]{2}PLACEMENT_ID[$_]{2}/g, o.placement).replace(/[$_]{2}BANNER_ID[$_]{2}/g, o.banner)), i.replace(/__PLAYER_HEIGHT__/g, n.height).replace(/__PLAYER_WIDTH__/g, n.width).replace(/__PAGE_URL__/g, r.url).replace(/__PAGE_URL_ESC__/g, encodeURIComponent(r.url)).replace(/__PAGE_DOMAIN__/g, r.domain).replace(/__PAGE_DOMAIN_ESC__/g, encodeURIComponent(r.domain)).replace(/__PAGE_REFERRER__/g, r.referrer).replace(/__PAGE_REFERRER_ESC__/g, encodeURIComponent(r.referrer)).replace(/__TOP_DOMAIN__/g, r.topDomain).replace(/__TOP_DOMAIN_ESC__/g, encodeURIComponent(r.topDomain)).replace(/[$_]{2}(CLIENT_)?USER_AGENT[$_]{2}/g, encodeURIComponent(navigator.userAgent)).replace(/[$_]{2}RANDOM[$_]{2}/g, "" + Math.abs(this.Utils.strToHashcode(this.Utils.timestamp().toString()))).replace(/[$_]{2}TIMESTAMP[$_]{2}/g, "" + this.Utils.timestamp())
                        }
                    }]), e
                }()
            }, {"../utils/DOM": 29, "../utils/Utils": 37}], 14: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.CustomObject = void 0;
                var i = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), o = e("../utils/Logger"), s = e("../utils/Utils"), a = e("../utils/Constants");
                n.CustomObject = function () {
                    function e() {
                        r(this, e), this.console = new o.Logger(window.logger.config()).update({
                            name: "CustomObject",
                            debug: !1
                        }), this._debug = !1, this._stat = !1, this._hash = s.Utils.randomHash(), this.dependencies = []
                    }

                    return i(e, [{
                        key: "track", value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Constants.TRACK_DOMAIN, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Constants.TRACK_KEY, n = arguments[2], r = arguments[3];
                            if (e && t && n && this._stat) {
                                var i = e.match("^http") ? "" : "//", o = r ? "&ex=" + r : "";
                                (new Image).src = "" + i + e + "/trackcnt/" + t + "/?data=" + n + o
                            }
                        }
                    }]), e
                }()
            }, {"../utils/Constants": 28, "../utils/Logger": 33, "../utils/Utils": 37}], 15: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function o(e, t) {
                    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.Eventable = void 0;
                var s = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), a = e("./CustomObject"), l = e("../utils/Events"), u = e("../utils/Utils");
                n.Eventable = function (e) {
                    function t() {
                        r(this, t);
                        var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return e.console = e.console.update({name: "Eventable"}), e._listeners = {}, e
                    }

                    return o(t, a.CustomObject), s(t, [{
                        key: "listen", value: function (e, t, n, r) {
                            this.console.log("Listener attached " + e), this._listeners[e] = this._listeners[e] || [], this._listeners[e].find(function (e) {
                                return e === t
                            }) || this._listeners[e].push({filter: n, callback: t, once: r})
                        }
                    }, {
                        key: "unlisten", value: function (e, t) {
                            this._listeners[e] = this._listeners[e] || [], this._listeners[e] = this._listeners[e].filter(function (e) {
                                return e.callback !== t
                            })
                        }
                    }, {
                        key: "publish", value: function (e) {
                            var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.logPublishedEvent(e, n);
                            var r = this._listeners[e];
                            if (!r)return !1;
                            n.eventName = e;
                            var i = [];
                            r.filter(function (e) {
                                return t.isEventNotFiltered(e, n)
                            }).forEach(function (e) {
                                var r = u.Utils.mergeObjects({}, n);
                                try {
                                    e.callback(r)
                                } catch (e) {
                                    t.console.error("Eventable listener callback: " + e)
                                }
                                e.once && i.push(e)
                            }), this._listeners[e] = this._listeners[e].filter(function (e) {
                                return !i.includes(e)
                            })
                        }
                    }, {
                        key: "isEventNotFiltered", value: function (e, t) {
                            var n = !0;
                            return !e.filter || (Object.keys(e.filter).forEach(function (r) {
                                    n = n && e.filter && t[r] === e.filter[r]
                                }), n)
                        }
                    }, {
                        key: "logPublishedEvent", value: function (e, t) {
                            [l.Events.PLAYER_TIMEUPDATE, l.Events.AD_REMAINING_TIME_CHANGE].includes(e) || this.console.log("Publish: " + e + (t ? " " + u.Utils.safeStringify(t) : ""))
                        }
                    }]), t
                }()
            }, {"../utils/Events": 31, "../utils/Utils": 37, "./CustomObject": 14}], 16: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function o(e, t) {
                    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.Statable = void 0;
                var s = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), a = e("./Eventable"), l = e("../utils/States"), u = e("../utils/Events"), c = e("../utils/Utils");
                n.Statable = function (e) {
                    function t() {
                        r(this, t);
                        var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return e.console = e.console.update({name: "Eventable"}), e._state = l.States.CREATED, e
                    }

                    return o(t, a.Eventable), s(t, [{
                        key: "getState", value: function () {
                            return this._state
                        }
                    }, {
                        key: "isState", value: function (e) {
                            return c.Utils.isArray(e) ? e.includes(this._state) : this._state === e
                        }
                    }, {
                        key: "setState", value: function (e, t) {
                            this.console.log("Setupping state " + e + " prev: " + this._state);
                            var n = this._state;
                            if (e === l.States.ERROR && this.console.log(l.States.ERROR + ":" + c.Utils.safeStringify(t)), e === n)return this.console.warn("Trying to set the same state"), !1;
                            this._state = e, this.console.log("Set state " + e), this.publish(u.Events.STATE_CHANGED, c.Utils.mergeObjects({
                                newState: e,
                                oldState: n
                            }, t))
                        }
                    }]), t
                }()
            }, {"../utils/Events": 31, "../utils/States": 36, "../utils/Utils": 37, "./Eventable": 15}], 17: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function o(e, t) {
                    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.AdManagerInstance = void 0;
                var s = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), a = e("../Tracer"), l = e("../objects/CustomObject"), u = e("../utils/Events"), c = e("../utils/Errors"), d = e("../utils/Utils");
                n.AdManagerInstance = function (e) {
                    function t(e, n) {
                        r(this, t);
                        var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return o.console = o.console.update({
                            name: "[AdManager]",
                            debug: !1
                        }), o.Utils = e, o.videoElements = n.environmentVars, o.createAdManagerSlot(), o.createDestinationIframe(o.videoElements.slot), o
                    }

                    return o(t, l.CustomObject), s(t, [{
                        key: "createAdManagerSlot", value: function () {
                            this.adManagerSlot = document.createElement("div"), this.adManagerSlot.className = "evam-vpaid-wrapper", this.adManagerSlot.setAttribute("style", "height:100%;")
                        }
                    }, {
                        key: "getSlot", value: function () {
                            return this.adManagerSlot
                        }
                    }, {
                        key: "getVideoSlot", value: function () {
                            return this.videoElements.videoSlot
                        }
                    }, {
                        key: "setVideoSlotVolume", value: function (e) {
                            this.videoElements.videoSlot.volume = e
                        }
                    }, {
                        key: "createDestinationIframe", value: function (e) {
                            a.tracer.log("[VPAID_SERVER] [INJECT_IFRAME] mode: Waterfall"), this.console.log("[VPAID_SERVER] [INJECT_IFRAME] mode: Waterfall"), this.destinationIframe = document.createElement("iframe"), this.destinationIframe.setAttribute("src", "javascript:false"), this.destinationIframe.setAttribute("scrolling", "no"), this.destinationIframe.setAttribute("style", "border: 0px; width: 100%; height: 100%; position: relative; overflow: hidden;"), this.destinationIframe.setAttribute("id", "vpaid" + this._hash), e.appendChild(this.destinationIframe)
                        }
                    }, {
                        key: "create", value: function (e) {
                            return this.injectIframe(e).then(this.handleScriptLoaded.bind(this))
                        }
                    }, {
                        key: "injectIframe", value: function (e) {
                            var t = this;
                            return a.tracer.log("[VPAID_SERVER] [INJECT_IFRAME] injectIframe called"), new Promise(function (n) {
                                var r = t.Utils.randomHash();
                                t.console.info("================ THIRDPARTY IFRAME CREATED ================");
                                var i = '<script type="text/javascript"><\/script>';
                                i += '<script type="text/javascript" src="' + e + '"><\/script>', i += '<script type="text/javascript">window.parent.postMessage("' + u.Events.THIRD_PARTY_LOADED + ":" + r + '", "*")<\/script>', i += '<script type="text/javascript">window.postMessage("' + u.Events.THIRD_PARTY_LOADED + ":" + r + '", "*")<\/script>', window.addEventListener("message", function (e) {
                                    e.data === u.Events.THIRD_PARTY_LOADED + ":" + r && n()
                                }, !1);
                                try {
                                    d.Utils.parentAccessible(window) ? window.parent.addEventListener("message", function (e) {
                                        e.data === u.Events.THIRD_PARTY_LOADED + ":" + r && n()
                                    }, !1) : t.console.info("Can't add message event listener to parrent because it is not accessible")
                                } catch (e) {
                                    t.console.info("Can't add message event listener to parrent because it is not accessible")
                                }
                                var o = t.destinationIframe.contentWindow || t.destinationIframe.contentDocument;
                                o.document && (o = o.document), o.open(), o.write("<!DOCTYPE html><html><head><style>html, body {width: 100%; height: 100%; margin: 0; padding: 0;}</style></head><body>" + i + "</body></html>"), o.close()
                            })
                        }
                    }, {
                        key: "handleScriptLoaded", value: function () {
                            var e = this;
                            return new Promise(function (t, n) {
                                a.tracer.log("[VPAID_SERVER] third party admanager script is loaded"), e.console.warn("_handleScriptLoaded() called."), e.console.log("this.destinationIframe.contentWindow: ", e.destinationIframe.contentWindow), e.adManager = e.destinationIframe.contentWindow.getVPAIDAd();
                                var r = e.destinationIframe.contentWindow || e.destinationIframe.contentDocument;
                                if (r.document && (r = r.document), r.body.appendChild(e.adManagerSlot), !(e.adManager && e.adManager.subscribe && e.adManager.handshakeVersion && e.adManager.initAd && e.adManager.startAd))return e.console.error(c.Errors.VPAID_IS_BROKEN), void n();
                                e.adManager.setUuid && e.adManager.setUuid(a.tracer.uuid), t(e.adManager)
                            })
                        }
                    }, {
                        key: "bringVideoSlotToTop", value: function () {
                            this.videoElements.videoSlotWrapper && (this.videoElements.videoSlotWrapper.style.zIndex = "")
                        }
                    }, {
                        key: "setVideoSlotSize", value: function (e, t) {
                            this.videoElements.videoSlot.style.width = e + "px", this.videoElements.videoSlot.style.height = t + "px", this.videoElements.videoSlotWrapper && (this.videoElements.videoSlotWrapper.style.width = e + "px", this.videoElements.videoSlotWrapper.style.height = t + "px")
                        }
                    }, {
                        key: "destroy", value: function () {
                            var e = this;
                            this.destinationIframe.style.display = "none", setTimeout(function () {
                                e.destinationIframe.parentNode.removeChild(e.destinationIframe)
                            }, 3e3)
                        }
                    }]), t
                }()
            }, {"../Tracer": 8, "../objects/CustomObject": 14, "../utils/Errors": 30, "../utils/Events": 31, "../utils/Utils": 37}], 18: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                Object.defineProperty(n, "__esModule", {value: !0});
                var i = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();
                n.ExceptionRoutines = function () {
                    function e() {
                        r(this, e), this.exceptions = {
                            "localdev.com": {possibleImpressionFired: null, timestamp: null},
                            "cdn.stickyadstv.com": {possibleImpressionFired: null, timestamp: null},
                            "static.innovid.com": {possibleImpressionFired: null, timestamp: null}
                        }
                    }

                    return i(e, [{
                        key: "isException", value: function () {
                            return !!this.exceptions[this.currentHost]
                        }
                    }, {
                        key: "checkImpressionByHostname", value: function () {
                            return this.exceptions[this.currentHost].possibleImpressionFired
                        }
                    }, {
                        key: "setExceptionTimestamp", value: function (e) {
                            this.exceptions[this.currentHost].possibleImpressionFired || (this.exceptions[this.currentHost].possibleImpressionFired = !0, this.exceptions[this.currentHost].timestamp = e)
                        }
                    }, {
                        key: "shouldFireError", value: function (e) {
                            var t = this.exceptions[this.currentHost].timestamp;
                            return null === e || null === t || e - t > 1500
                        }
                    }, {
                        key: "timestamp", get: function () {
                            return this.exceptions[this.currentHost].timestamp
                        }
                    }, {
                        key: "host", set: function (e) {
                            this.currentHost = e
                        }, get: function () {
                            return this.currentHost
                        }
                    }]), e
                }()
            }, {}], 19: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.PlaybackConfiguration = void 0;
                var i = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();
                e("../types/IController"), n.PlaybackConfiguration = function () {
                    function e() {
                        r(this, e)
                    }

                    return i(e, [{
                        key: "setCurrentController", value: function (e) {
                            this.controller = e
                        }
                    }, {
                        key: "getCurrentController", value: function () {
                            return this.controller
                        }
                    }, {
                        key: "resize", value: function (e, t, n) {
                            this.controller && this.controller.setSize(e, t, n), this.size = {width: e, height: t, viewMode: n}
                        }
                    }, {
                        key: "setVolume", value: function (e) {
                            this.controller && this.controller.setVolume(e), this.volume = e
                        }
                    }]), e
                }()
            }, {"../types/IController": 27}], 20: [function (e, t, n) {
                "use strict";
                function r(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++)n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }

                function i(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function o(e, t) {
                    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function s(e, t) {
                    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.PlayerController = void 0;
                var a = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    }, l = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), u = e("../objects/Statable"), c = e("../utils/Events"), d = e("../utils/States"), h = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(e("../vendor/vast-client/dist/index")), p = (e("../objects/Eventable"), e("../helpers/UrlHelper")), f = e("./Tracking");
                n.PlayerController = function (e) {
                    function t(e, n, r, s, a, l, u, d, h) {
                        i(this, t);
                        var v = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return v.AdHelper = r, v.DOM = s, v.HTML5Player = a, v.PlayerControls = l, v.Utils = u, v.vpaidEventsAdapter = d, v.urlHelper = new p.UrlHelper, v.console = v.console.update({name: "PlayerController"}), v.ad = e, v.tagId = h, v.vastTracker = v.createVastTracker(e, v.AdHelper.getCreativeByType(e, "linear")), v.tracker = new f.Tracking(e, v.AdHelper), v.adManagerParams = n, v._helper = void 0, v.playerListeners = [], v.adParameters = {}, v.videoAttributes = {
                            icons: !0,
                            linear: !0,
                            companions: ""
                        }, v.lastTimeLineEventIndex = 0, v.timelineEvents = [{
                            event: {vpaid: c.Events.AD_VIDEO_START, vast: c.Events.TRACKING_EVENT_START},
                            value: 0
                        }, {event: {vpaid: c.Events.AD_IMPRESSION, vast: void 0}, value: .01}, {
                            event: {
                                vpaid: c.Events.AD_VIDEO_FIRST_QUARTILE,
                                vast: c.Events.TRACKING_EVENT_FIRST_QUARTILE
                            }, value: 25
                        }, {
                            event: {vpaid: c.Events.AD_VIDEO_MID_POINT, vast: c.Events.TRACKING_EVENT_MID_POINT},
                            value: 50
                        }, {
                            event: {vpaid: c.Events.AD_VIDEO_THIRD_QUARTILE, vast: c.Events.TRACKING_EVENT_THIRD_QUARTILE},
                            value: 75
                        }, {
                            event: {vpaid: c.Events.AD_VIDEO_COMPLETE, vast: c.Events.TRACKING_EVENT_COMPLETE},
                            value: 100
                        }], v.playbackAttributes = {autoplay: !0}, v
                    }

                    return s(t, u.Statable), l(t, [{
                        key: "init", value: function () {
                            var e = this;
                            return this.tracker.track(c.Events.AD_OPPORTUNITY), new Promise(function (t, n) {
                                var r = void 0;
                                try {
                                    r = JSON.parse(e.adManagerParams.creativeData.AdParameters)
                                } catch (t) {
                                    e.setState(d.States.ERROR), n(t)
                                }
                                e.initPlayer(e.adManagerParams), r && (e.console.log("_processAdParameters: 0"), e._processAdParameters(r)), t()
                            })
                        }
                    }, {
                        key: "startAd", value: function () {
                            var e = this;
                            return new Promise(function (t, n) {
                                var r = e.AdHelper.getMediaFile(e.ad, {width: e.player.width, height: e.player.height});
                                e.player.listen(c.Events.STATE_CHANGED, function () {
                                    e.player.setSkip(e.AdHelper.getSkipObject(e.ad))
                                }, {newState: d.States.READY}), e.player.listen(c.Events.STATE_CHANGED, function () {
                                    e.player.setSkip(e.AdHelper.getSkipObject(e.ad)), e.playbackAttributes.autoplay && (e.player.play(), e.vpaidEventsAdapter.publish(c.Events.AD_STARTED))
                                }, {newState: d.States.CAN_PLAY}, !0), e.player.listen(c.Events.STATE_CHANGED, function () {
                                    e.player.hideControls(), e.vastTracker.complete(), t()
                                }, {newState: d.States.PLAYBACK_COMPLETED}, !0), e.player.listen(c.Events.STATE_CHANGED, function () {
                                    e.vastTracker.errorWithCode(401), n("player error")
                                }, {newState: d.States.ERROR}, !0), e.player.listen(c.Events.SKIP, function () {
                                    e.player.hideControls(), e.vastTracker.skip(), e.vpaidEventsAdapter.publish(c.Events.AD_SKIPPED), t()
                                }), e.tracker.track(c.Events.AD_LOADED), e.player.load(r)
                            })
                        }
                    }, {
                        key: "getDuration", value: function () {
                            return this.player ? this.player.duration : null
                        }
                    }, {
                        key: "getRemainingTime", value: function () {
                            return this.player ? this.player.remainingTime : null
                        }
                    }, {
                        key: "getCurrentTime", value: function () {
                            return this.player ? this.player.currentTime : null
                        }
                    }, {
                        key: "getVolume", value: function () {
                            return this.player ? this.player.getVolume() : null
                        }
                    }, {
                        key: "setVolume", value: function (e) {
                            if (this.player)return this.player.setVolume(e)
                        }
                    }, {
                        key: "setAdExpanded", value: function (e) {
                            return this.vastTracker.setExpand(e), !!this.player && this.player.setAdExpanded(e)
                        }
                    }, {
                        key: "getExpandedState", value: function () {
                            return this.player ? this.player.adExpanded : null
                        }
                    }, {
                        key: "getSkippableState", value: function () {
                            return this.player ? this.player.skippableState : null
                        }
                    }, {
                        key: "getWidth", value: function () {
                            return this.player.width || 0
                        }
                    }, {
                        key: "getHeight", value: function () {
                            return this.player.height || 0
                        }
                    }, {
                        key: "getSize", value: function () {
                            return {width: this.player.width ? this.player.width : void 0, height: this.player.height ? this.player.height : void 0}
                        }
                    }, {
                        key: "setSize", value: function (e, t, n) {
                            this.player.setSize(e, t, n)
                        }
                    }, {
                        key: "_processAdParameters", value: function (e) {
                            this.adParameters.requestUrl = e.requestUrl, this.adParameters.requestUrl && (this.adParameters.requestUrl = this.urlHelper.replaceMacrosParams(this.adParameters.requestUrl, e, {
                                width: this.getWidth().toString(),
                                height: this.getHeight().toString()
                            }), this.path = this.adParameters.requestUrl.replace(/(&|\?)?vpaid=true/, "")), this.adParameters.network = a({
                                name: void 0,
                                channel: void 0,
                                publisher: void 0,
                                placement: void 0,
                                banner: void 0
                            }, e.network), this.player.controls = e.controls, e.skip && (this.player.defaultSkipValues = {
                                state: e.skip.enabled || !1,
                                offset: e.skip.timeout || 0,
                                counterText: e.skip.countdown.toString(),
                                skipBttnText: e.skip.text
                            }), this.player.createControls(), parseFloat(e.volume) === e.volume && this.setVolume(parseFloat(e.volume)), e.mute && this.setVolume(0), e.maxExecutionTime && (this.adParameters.maxExecutionTime = e.maxExecutionTime), this.console.log(this.adParameters)
                        }
                    }, {
                        key: "initPlayer", value: function (e) {
                            var t = this, n = [this.PlayerControls.OVERLAY, this.PlayerControls.PLAY_BTTN, this.PlayerControls.SKIP_BTTN, this.PlayerControls.VOLUME_BAR, this.PlayerControls.MUTE_BTTN, this.PlayerControls.FULLSCREEN_BTTN];
                            this.player = new this.HTML5Player(n, this.vpaidEventsAdapter), this._addPlayerListeners(), this.player.init({
                                slot: e.environmentVars.slot,
                                videoSlot: e.environmentVars.videoSlot,
                                width: e.width,
                                height: e.height,
                                desiredBitrate: e.desiredBitrate,
                                viewMode: e.viewMode
                            });
                            var r = !1;
                            this.player.getVideoSlot().addEventListener("timeupdate", function (e) {
                                t.vastTracker.setProgress(e.target.currentTime), !r && e.target.currentTime > 0 && (r = !0, t.tracker.track(c.Events.AD_VIDEO_START))
                            }), this.player.controls && this.player.showControls()
                        }
                    }, {
                        key: "getVideoSlot", value: function () {
                            return this.player.getVideoSlot()
                        }
                    }, {
                        key: "_addPlayerListeners", value: function () {
                            var e = this, t = !1;
                            this.playerListeners = [[c.Events.STATE_CHANGED, function () {
                                e.publish(c.Events.AD_LOADED)
                            }, {newState: d.States.LOADING}, !0], [c.Events.PLAYER_PAUSE, function () {
                                e.vastTracker.setPaused(!0), e.vpaidEventsAdapter.publish(c.Events.AD_PAUSED)
                            }], [c.Events.PLAYER_PLAYING, function () {
                                t && e.vastTracker.setPaused(!1), t = !0, e.vpaidEventsAdapter.publish(c.Events.AD_PLAYING)
                            }], [c.Events.PLAYER_TIMEUPDATE, this._timelineHandler.bind(this)], [c.Events.CLICK, function () {
                                e.publish(c.Events.CLICK), e.vpaidEventsAdapter.publish(c.Events.AD_CLICK_THRU), e.vastTracker.click()
                            }], [c.Events.AD_SKIPPABLE_STATE_CHANGE, function () {
                                e.vpaidEventsAdapter.publish(c.Events.AD_SKIPPABLE_STATE_CHANGE)
                            }], [c.Events.CHANGE_VOLUME_LEVEL, this._handleVolumeChange.bind(this)], [c.Events.PLAYER_SIZE_CHANGE, this._handlePlayerSizeChange.bind(this)], [c.Events.PLAYER_DURATION_CHANGE, this._handlePlayerDurationChange.bind(this)]], this.playerListeners.forEach(function (t) {
                                var n;
                                (n = e.player).listen.apply(n, r(t))
                            })
                        }
                    }, {
                        key: "showControls", value: function () {
                            this.player.showControls()
                        }
                    }, {
                        key: "hideControls", value: function () {
                            this.player.hideControls()
                        }
                    }, {
                        key: "removePlayerListeners", value: function () {
                            var e = this;
                            this.player && this.playerListeners.forEach(function (t) {
                                var n;
                                (n = e.player).unlisten.apply(n, r(t))
                            })
                        }
                    }, {
                        key: "_timelineHandler", value: function () {
                            if (this.vpaidEventsAdapter.publish(c.Events.AD_REMAINING_TIME_CHANGE, {
                                    currentTime: this.player.currentTime,
                                    remainingTime: this.player.remainingTime
                                }), !(this.lastTimeLineEventIndex >= this.timelineEvents.length)) {
                                var e = 100 * this.player.currentTime / this.player.duration, t = this.timelineEvents[this.lastTimeLineEventIndex];
                                e >= t.value && (t.event.vpaid === c.Events.AD_IMPRESSION && this.tracker.track(c.Events.AD_IMPRESSION), t.event.vpaid === c.Events.AD_IMPRESSION ? this.vpaidEventsAdapter.publish(t.event.vpaid, {tagId: this.tagId}) : this.vpaidEventsAdapter.publish(t.event.vpaid), this.lastTimeLineEventIndex += 1)
                            }
                        }
                    }, {
                        key: "_handleVolumeChange", value: function (e) {
                            var t = e.currentVolume, n = e.previousVolume;
                            0 === t && n > 0 ? this.vastTracker.setMuted(!0) : t > 0 && 0 === n && this.vastTracker.setMuted(!1), this.vpaidEventsAdapter.publish(c.Events.AD_VOLUME_CHANGE, {
                                currentVolume: t,
                                previousVolume: n
                            })
                        }
                    }, {
                        key: "_handlePlayerSizeChange", value: function () {
                            this.vpaidEventsAdapter.publish(c.Events.AD_SIZE_CHANGE)
                        }
                    }, {
                        key: "_handlePlayerDurationChange", value: function () {
                            var e = this.AdHelper.getCreativeByType(this.ad, "linear");
                            e.duration = this.player.duration, this.vastTracker = this.createVastTracker(this.ad, e), this.vpaidEventsAdapter.publish(c.Events.AD_DURATION_CHANGE)
                        }
                    }, {
                        key: "_clearVideoSlotControls", value: function () {
                            this.player.clearControls()
                        }
                    }, {
                        key: "createVastTracker", value: function (e, t) {
                            var n = new h.default.tracker(e, t);
                            return n.on("clickthrough", function (e) {
                                window.open(e)
                            }), n
                        }
                    }, {
                        key: "isExecutorState", value: function (e) {
                            return this.player && this.player.isState(e)
                        }
                    }, {
                        key: "executorState", value: function () {
                            return this.player.getState()
                        }
                    }, {
                        key: "stopAd", value: function () {
                            this.player.stop(), this.vpaidEventsAdapter.publish(c.Events.AD_STOPPED)
                        }
                    }, {
                        key: "pauseAd", value: function () {
                            this.player.pause(), this.vastTracker.setPaused(!0), this.vpaidEventsAdapter.publish(c.Events.AD_PAUSED)
                        }
                    }, {
                        key: "resumeAd", value: function () {
                            this.player.play(), this.vastTracker.setPaused(!1), this.vpaidEventsAdapter.publish(c.Events.AD_PLAYING)
                        }
                    }, {
                        key: "skipAd", value: function () {
                            this.player.stop(), this.vpaidEventsAdapter.publish(c.Events.AD_SKIPPED)
                        }
                    }, {
                        key: "destroy", value: function () {
                            this.removePlayerListeners(), this.player.stop(), this.console.error("Destroy is not implemented correctly")
                        }
                    }]), t
                }()
            }, {
                "../helpers/UrlHelper": 13,
                "../objects/Eventable": 15,
                "../objects/Statable": 16,
                "../utils/Events": 31,
                "../utils/States": 36,
                "../vendor/vast-client/dist/index": 45,
                "./Tracking": 21
            }], 21: [function (e, t, n) {
                "use strict";
                function r(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
                }

                function i(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function o(e, t) {
                    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function s(e, t) {
                    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.Tracking = void 0;
                var a = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), l = (e("../helpers/AdHelper"), e("../objects/CustomObject")), u = e("../utils/Events");
                n.Tracking = function (e) {
                    function t(e, n) {
                        var s;
                        i(this, t);
                        var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        a.console = a.console.update({name: "Tracker", debug: !1}), a.ad = e;
                        var l = n.getCreativeByType(e, "linear");
                        if (!l)throw new TypeError("there are no linear creative");
                        return a.creative = l, a.trackingUrls = (s = {}, r(s, u.Events.AD_VIDEO_START, l.trackingEvents.start), r(s, u.Events.AD_VIDEO_FIRST_QUARTILE, l.trackingEvents.firstQuartile), r(s, u.Events.AD_VIDEO_MID_POINT, l.trackingEvents.midpoint), r(s, u.Events.AD_VIDEO_THIRD_QUARTILE, l.trackingEvents.thirdQuartile), r(s, u.Events.AD_VIDEO_COMPLETE, l.trackingEvents.complete), r(s, u.Events.AD_PAUSED, l.trackingEvents.pause), r(s, u.Events.AD_PLAYING, l.trackingEvents.resume), r(s, u.Events.AD_SKIPPED, l.trackingEvents.skip), r(s, u.Events.AD_IMPRESSION, e.impressionURLTemplates), r(s, u.Events.AD_OPPORTUNITY, l.trackingEvents.adOpportunity), r(s, u.Events.AD_LOADED, l.trackingEvents.adLoaded), s), a
                    }

                    return s(t, l.CustomObject), a(t, [{
                        key: "track", value: function (e) {
                            var t = this, n = this.trackingUrls[e];
                            n ? n.forEach(function (e) {
                                return t.callTrackUrl(e)
                            }) : this.console.error("There is no such VAST event: " + e)
                        }
                    }, {
                        key: "callTrackUrl", value: function (e) {
                            var t = e;
                            this.console.log("Tracked VAST event:", e), e.indexOf("?") > 0 ? t += "&cashbusterev=" + Math.random() : t += "?cashbusterev=" + Math.random(), (new Image).src = t
                        }
                    }, {
                        key: "mute", value: function () {
                            var e = this;
                            this.creative.trackingEvents.mute.forEach(function (t) {
                                return e.callTrackUrl(t)
                            })
                        }
                    }, {
                        key: "unmute", value: function () {
                            var e = this;
                            this.creative.trackingEvents.unmute.forEach(function (t) {
                                return e.callTrackUrl(t)
                            })
                        }
                    }]), t
                }()
            }, {"../helpers/AdHelper": 12, "../objects/CustomObject": 14, "../utils/Events": 31}], 22: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function o(e, t) {
                    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.VpaidServer = void 0;
                var s = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), a = e("../helpers/UrlHelper"), l = e("../Tracer"), u = e("../utils/Lifecycle"), c = e("../utils/Events"), d = e("../utils/States"), h = (e("../types/IController"), e("../objects/Statable")), p = (e("../helpers/AdHelper"), e("../objects/Eventable"), function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(e("../vendor/vast-client/dist/index"))), f = e("../utils/Utils"), v = e("../utils/DOM"), E = (e("../EpomVpaidFacade"), e("../utils/Errors")), y = e("./corruptedManagers"), m = e("./ExceptionRoutines"), g = e("./AdManagerInstance");
                n.VpaidServer = function (e) {
                    function t(e, n, o, s, l, u, c, d, h) {
                        r(this, t);
                        var p = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return p.AdHelper = o, p.DOM = v.DOM, p.Tracking = s, p.Utils = l, p.vpaidEventsAdapter = u, p.exceptionRoutines = new m.ExceptionRoutines, p.isParallel = c, p.tagId = h, p.lastImpressionTagId = null, p.adStartedWasFired = !1, p.impressionWasFired = !1, p.urlHelper = new a.UrlHelper, p.vsSuffix = (new Date).getTime(), p.colorsArray = ["#74009b", "#9b0044", "#897b1d", "#0d909b", "#9b7e0d", "#00569b", "#9b9b00", "#9b4f00", "#1a1f9b", "#74009b", "#9b0044", "#0d909b", "#9b7e0d", "#00569b", "#9b9b00", "#9b4f00", "#109b30", "#74009b", "#9b0044", "#0d909b", "#9b7e0d", "#00569b", "#9b9b00", "#109b30", "#9b4f00"], p.console = p.console.update({
                            name: "VpaidServer [" + d + "]",
                            debug: !1
                        }), p.console.log("Iterator:", d), p.ad = e, p.adManagerParams = n, p.adParameters = {}, p.videoAttributes = {
                            icons: !0,
                            linear: !0,
                            companions: ""
                        }, p.lastTimeLineEventIndex = 0, p.vastTracker = p.createVastTracker(e, p.AdHelper.getCreativeByType(e, "linear")), p.vastTracking = !1, p.tracker = new s(e, o), p.timer = void 0, p.maxExecutionTime = 15e3, p.slowpokeInterval = void 0, p.thirdPartyHostname = "", p.adManagerSlot = document.createElement("div"), p.adManagerSlot.className = "evam-vpaid-wrapper", p.adManagerSlot.setAttribute("style", "height:100%;"), p
                    }

                    return o(t, h.Statable), s(t, [{
                        key: "init", value: function () {
                            return this.console.warn("init() called with parameters:", this.adManagerParams), this.initVpaidServer()
                        }
                    }, {
                        key: "startAd", value: function () {
                            var e = this;
                            this.console.warn("startAd() called."), this.adManagerInstance.bringVideoSlotToTop(), this.setVolume(this.volume), this.console.warn("this.pauseAdFlag: " + this.pauseAdFlag), this.console.warn("this.corruptedPause: " + this.corruptedPause);
                            try {
                                this.pauseAdFlag ? (this.adManager.pauseAd(), this.pauseAdFlag = !1) : this.corruptedPause ? this.adManager.resumeAd() : this.adManager.startAd()
                            } catch (e) {
                                this.console.error("ThirdParty ad manager error", e), this.setState(d.States.ERROR, {msg: E.Errors.AD_MANAGER_ERROR})
                            }
                            return this.trackingInterval = setInterval(function () {
                                var t = e.getDuration();
                                if (void 0 === t || t < 0)e.vastTracking = !1; else {
                                    var n = e.getRemainingTime();
                                    if (void 0 === n || n < 0)e.vastTracking = !1; else {
                                        var r = t - n;
                                        e.vastTracking = !0, e.vastTracker.setProgress(r)
                                    }
                                }
                            }, 250), Promise.resolve()
                        }
                    }, {
                        key: "initVpaidServer", value: function () {
                            var e = this, t = void 0;
                            try {
                                t = JSON.parse(this.adManagerParams.creativeData.AdParameters), this.volume = parseFloat(t.volume)
                            } catch (e) {
                                throw this.setState(d.States.ERROR), new TypeError(e)
                            }
                            var n = this.urlHelper.replaceMacrosParams(this.AdHelper.getVpaidManagerLink(this.ad), t, {
                                width: this.getWidth().toString(),
                                height: this.getHeight().toString()
                            });
                            return t.initialPlayerConfig && t.initialPlayerConfig.overrideEVAMUrl && (this.console.log("[EV] [override EVAM in VAST]", n, t.initialPlayerConfig.overrideEVAMUrl), n = t.initialPlayerConfig.overrideEVAMUrl), console.log("[EV] [THP]", n), this.thirdPartyHostname = this.Utils.extractHostname(n), this.console.warn("initVpaidServer() called, mode: ", window.EpomPlayer ? "EpomPlayer's adManager" : "ThirdParty"), this.console.warn("thirdParty URL: ", n), this.console.warn("thirdPartyHostname: ", this.thirdPartyHostname), this.isEvam = n.includes("evam.min"), this.isEvam || (this.vpaidEventsAdapter.publish(c.Events.AD_REQUEST, {tagId: this.tagId}), l.tracer.log("[VPAID_SERVER] [AD_REQUEST]"), l.tracer.lifecycle(u.Lifecycle.EVAM_OPPORTUNITY)), this.tracker.track(c.Events.AD_OPPORTUNITY), this.adManagerInstance = new g.AdManagerInstance(this.Utils, {environmentVars: this.adManagerParams.environmentVars}), this.adManagerInstance.create(n).then(function (t) {
                                return e.adManager = t, e.addListeners(), e.handshakeVersion()
                            })
                        }
                    }, {
                        key: "handshakeVersion", value: function () {
                            return this.console.warn("handshakeVersion() called."), this.console.log("ThirdParty adManager:", this.adManager), this.console.log("ThirdParty adManager handshake version:", this.adManager.handshakeVersion("2.0")), !0
                        }
                    }, {
                        key: "addListeners", value: function () {
                            var e = this;
                            this.console.warn("addListeners() called."), this.subscribeOnVpaidEvent(c.Events.AD_ERROR, function () {
                                e.exceptionRoutines.host = e.thirdPartyHostname, e.console.log("Check routine: ", e.thirdPartyHostname, e.exceptionRoutines.isException()), e.console.log(e.ad.title), e.exceptionRoutines.isException() && !e.exceptionRoutines.checkImpressionByHostname() ? (e.exceptionRoutines.shouldFireError((new Date).getTime()) && e.publish(c.Events.AD_ERROR), e.console.log("========== PREVENT ERROR FIRING ============")) : e.publish(c.Events.AD_ERROR)
                            }, !1), this.subscribeOnVpaidEvent(c.Events.AD_STARTED, function () {
                                e.adStartedWasFired = !0, e.setVolume(e.volume)
                            }), this.subscribeOnVpaidEvent(c.Events.AD_STOPPED, function () {
                                e.adStartedWasFired ? e.publish(c.Events.AD_STOPPED) : e.publish(c.Events.AD_ERROR, {reason: "AD_STOPPED before AD_STARTED"})
                            }, !1), this.subscribeOnVpaidEvent(c.Events.AD_SKIPPED), this.subscribeOnVpaidEvent(c.Events.AD_SIZE_CHANGE), this.subscribeOnVpaidEvent(c.Events.AD_SKIPPABLE_STATE_CHANGE), this.subscribeOnVpaidEvent(c.Events.AD_REMAINING_TIME_CHANGE), this.subscribeOnVpaidEvent(c.Events.AD_PLAYING), this.subscribeOnVpaidEvent(c.Events.AD_PAUSED), this.subscribeOnVpaidEvent(c.Events.AD_CLICK_THRU), this.subscribeOnVpaidEvent(c.Events.AD_VOLUME_CHANGE, function () {
                                var t = e.adVolume;
                                void 0 !== t && (0 === t && e.volume > 0 ? e.vastTracker.setMuted(!0) : t > 0 && 0 === e.volume && e.vastTracker.setMuted(!1), e.volume = t)
                            }), this.subscribeOnVpaidEvent(c.Events.AD_VIDEO_START), this.subscribeOnVpaidEvent(c.Events.AD_VIDEO_FIRST_QUARTILE), this.subscribeOnVpaidEvent(c.Events.AD_VIDEO_MID_POINT), this.subscribeOnVpaidEvent(c.Events.AD_VIDEO_THIRD_QUARTILE), this.subscribeOnVpaidEvent(c.Events.AD_VIDEO_COMPLETE), this.subscribeOnImpressionLikeEvents(), this.subscribeOnVpaidEvent(c.Events.AD_DURATION_CHANGE, function () {
                                var t = e.AdHelper.getCreativeByType(e.ad, "linear");
                                t.duration = e.getDuration(), e.vastTracker = e.createVastTracker(e.ad, t)
                            }), this.subscribeOnVpaidEvent(c.Events.AD_EXPANDED_CHANGE), this.subscribeOnVpaidEvent(c.Events.AD_REQUEST, function (t) {
                                e.vpaidEventsAdapter.publish(c.Events.AD_REQUEST, {tagId: t && void 0 !== t.tagId ? t.tagId : e.tagId})
                            }, !1)
                        }
                    }, {
                        key: "subscribeOnImpressionLikeEvents", value: function () {
                            var e = this;
                            [c.Events.AD_STARTED, c.Events.AD_VIDEO_START, c.Events.AD_PLAYING, c.Events.AD_IMPRESSION].forEach(function (t) {
                                e.adManager.subscribe(function (n) {
                                    e.console.warn("[VPAID_SERVER] [3RD_PARTY_EVENT] Receive: " + t), e.exceptionRoutines.host = e.thirdPartyHostname, e.console.log("Check routine: ", e.thirdPartyHostname, e.exceptionRoutines.isException()), e.console.log(e.ad.title), e.exceptionRoutines.isException() && !e.exceptionRoutines.checkImpressionByHostname() && e.exceptionRoutines.setExceptionTimestamp((new Date).getTime());
                                    var r = n && void 0 !== n.tagId ? n.tagId : e.tagId;
                                    e.impressionWasFired && e.lastImpressionTagId === r || (e.lastImpressionTagId = e.tagId, e.impressionWasFired = !0, e.console.log("[VPAID_SERVER] [3RD_PARTY_EVENT] [LIKE AD_IMPRESSION]: " + t + ", ad.title: " + e.ad.title), l.tracer.log("[VPAID_SERVER] [3RD_PARTY_EVENT] [LIKE AD_IMPRESSION]: " + t + ", ad.title: " + e.ad.title), l.tracer.log("[VPAID_SERVER] [3RD_PARTY_EVENT] [impression_details]: " + f.Utils.safeStringify({
                                            id: e.ad.id,
                                            system: e.ad.system,
                                            title: e.ad.title
                                        })), e.console.log("AD_IMPRESSION because " + t + " from thirdparty"), e.trackVastEvent(c.Events.AD_IMPRESSION), l.tracer.lifecycle(u.Lifecycle.EVAM_IMPRESSION), e.publish(c.Events.AD_IMPRESSION), e.vpaidEventsAdapter.publish(c.Events.AD_IMPRESSION, {tagId: r}))
                                }, t)
                            })
                        }
                    }, {
                        key: "subscribeOnVpaidEvent", value: function (e) {
                            var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                            }, r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                            this.adManager.subscribe(function (i) {
                                [c.Events.AD_REMAINING_TIME_CHANGE].includes(e) || (t.console.log("[VPAID_SERVER] [3RD_PARTY_EVENT]: " + e), l.tracer.log("[VPAID_SERVER] [3RD_PARTY_EVENT]: " + e)), t.trackVastEvent(e), n && n(i), r && t.vpaidEventsAdapter.publish(e)
                            }, e)
                        }
                    }, {
                        key: "trackVastEvent", value: function (e) {
                            this.console.log("[VPAID_SERVER] [CUSTOM_TRACKING_EVENT] Receive event: " + f.Utils.safeStringify(e)), l.tracer.log("[VPAID_SERVER] [3RD_PARTY_EVENT] [CUSTOM_TRACKING_EVENT] Receive event: " + f.Utils.safeStringify(e));
                            var t = !1;
                            switch (e) {
                                case c.Events.AD_VIDEO_FIRST_QUARTILE:
                                case c.Events.AD_VIDEO_MID_POINT:
                                case c.Events.AD_VIDEO_THIRD_QUARTILE:
                                    if (this.vastTracking)return void this.console.log("Tracked by vastTracker:", e);
                                    this.tracker.track(e), this.console.warn("Tracked by custom tracker:", e);
                                    break;
                                case c.Events.AD_VIDEO_COMPLETE:
                                    this.vastTracker.complete();
                                    break;
                                case c.Events.AD_LOADED:
                                case c.Events.AD_VIDEO_START:
                                case c.Events.AD_IMPRESSION:
                                case c.Events.AD_STARTED:
                                case c.Events.AD_SKIPPED:
                                case c.Events.AD_SIZE_CHANGE:
                                case c.Events.AD_SKIPPABLE_STATE_CHANGE:
                                case c.Events.AD_REMAINING_TIME_CHANGE:
                                case c.Events.AD_VOLUME_CHANGE:
                                case c.Events.AD_DURATION_CHANGE:
                                case c.Events.AD_REQUEST:
                                    this.tracker.track(e);
                                    break;
                                case c.Events.AD_PLAYING:
                                    t && this.vastTracker.setPaused(!1), t = !0;
                                    break;
                                case c.Events.AD_PAUSED:
                                    this.vastTracker.setPaused(!0);
                                    break;
                                case c.Events.AD_CLICK_THRU:
                                    this.vastTracker.click();
                                    break;
                                case c.Events.AD_EXPANDED_CHANGE:
                                    this.vastTracker.setExpand(this.adExpanded)
                            }
                        }
                    }, {
                        key: "initAd", value: function () {
                            var e = this;
                            return this.corruptedPause = void 0, this.console.log("initAd() called.", y.corruptedManagers.includes(this.thirdPartyHostname)), l.tracer.log("[VPAID_SERVER] initAd called"), new Promise(function (t, n) {
                                e.adManager.subscribe(function () {
                                    if (e.console.info("ThirdParty adManager send AD_LOADED. (init ad listener)", y.corruptedManagers.includes(e.thirdPartyHostname), e.thirdPartyHostname), l.tracer.log("[VPAID_SERVER] AD_LOADED from: " + e.ad.title + ", ad.system: " + (e.ad.system ? e.ad.system.value : "")), e.isEvam)return e.loadedWasFired = !0, void t(e);
                                    [c.Events.AD_STARTED, c.Events.AD_VIDEO_START, c.Events.AD_PLAYING, c.Events.AD_IMPRESSION].forEach(function (n) {
                                        e.console.info("Subscribe to ThirdParty event:", n), e.adManager.subscribe(function () {
                                            e.loadedWasFired || (e.loadedWasFired = !0, e.trackVastEvent(c.Events.AD_LOADED), e.corruptedPause = !0, e.adManager.pauseAd(), t(e))
                                        }, n)
                                    }), e.console.warn("Call ThirdParty method startAd"), e.adManager.startAd()
                                }, c.Events.AD_LOADED), e.adManager.subscribe(function (t) {
                                    e.console.info("ThirdParty adManager send AD_ERROR.", t), l.tracer.log("[VPAID_SERVER] AD_ERROR from: " + e.ad.title + " " + (e.ad.system ? e.ad.system.value : "") + " [AD_ERROR]: " + t), n(t)
                                }, c.Events.AD_ERROR);
                                var r = e.adManagerParams, i = r.width, o = r.height, s = r.viewMode, a = r.desiredBitrate, u = {AdParameters: e.AdHelper.getCreativeByType(e.ad, "linear").adParameters}, d = {
                                    slot: e.adManagerInstance.getSlot(),
                                    videoSlot: e.adManagerInstance.getVideoSlot(),
                                    maxExecutionTime: e.adParameters.maxExecutionTime
                                };
                                l.tracer.log("[VPAID_SERVER] third party initAd called, Ad data: " + e.ad.title + " " + (e.ad.system ? e.ad.system.value : "")), e.adManager.initAd(i, o, s, a, u, d), e.console.warn("Calling VAST fullscreen for testing purposes"), e.vastTracker.setFullscreen(!0)
                            })
                        }
                    }, {
                        key: "open", value: function (e) {
                            window.open(e, "_blank")
                        }
                    }, {
                        key: "setAdExpanded", value: function (e) {
                            this.adExpanded = e
                        }
                    }, {
                        key: "getExpandedState", value: function () {
                            return this.adExpanded
                        }
                    }, {
                        key: "getSkippableState", value: function () {
                            return this.adSkippableState
                        }
                    }, {
                        key: "getWidth", value: function () {
                            return this.adWidth || ""
                        }
                    }, {
                        key: "getHeight", value: function () {
                            return this.adHeight || ""
                        }
                    }, {
                        key: "getSize", value: function (e) {
                            return "width" === e && this.adWidth ? this.adWidth : "height" === e && this.adHeight ? this.adHeight : ""
                        }
                    }, {
                        key: "setSize", value: function (e, t, n) {
                            this.adManager.resizeAd(e, t, n), this.adManagerInstance.setVideoSlotSize(e, t)
                        }
                    }, {
                        key: "getDuration", value: function () {
                            return this.adDuration
                        }
                    }, {
                        key: "getRemainingTime", value: function () {
                            return this.adRemainingTime
                        }
                    }, {
                        key: "getVolume", value: function () {
                            return this.adVolume
                        }
                    }, {
                        key: "setVolume", value: function (e) {
                            this.volume = e, this.adVolume = e;
                            var t = e > 1 ? e / 100 : e;
                            return this.adManagerInstance.setVideoSlotVolume(t), this.adVolume
                        }
                    }, {
                        key: "getAdManagerProp", value: function (e) {
                            try {
                                if (this.adManager) {
                                    var t = this.adManager[e];
                                    if (void 0 !== t)return t;
                                    var n = "getA" + e.slice(1), r = this.adManager[n];
                                    r && "function" == typeof r && r.call(this.adManager)
                                }
                            } catch (e) {
                                return void this.console.error(e)
                            }
                        }
                    }, {
                        key: "setAdManagerProp", value: function (e, t) {
                            try {
                                if (this.adManager) {
                                    if (void 0 !== this.adManager[e])return this.adManager[e] = t, this.console.log("setAdManagerProp:", e, t), this.adManager[e];
                                    var n = "setA" + e.slice(1), r = this.adManager[n];
                                    if (r && "function" == typeof r)return r.call(this.adManager, t)
                                }
                            } catch (e) {
                                return void this.console.error(e)
                            }
                        }
                    }, {
                        key: "stopAd", value: function () {
                            try {
                                l.tracer.log("[VPAID_SERVER] [STOP_AD] stopAd called"), this.adManager.stopAd()
                            } catch (e) {
                                this.console.error(e), this.setState(d.States.ERROR, {msg: E.Errors.AD_MANAGER_ERROR})
                            }
                        }
                    }, {
                        key: "pauseAd", value: function () {
                            try {
                                this.console.warn("Try to pauseAd in ThirdParty adManager"), this.adManager ? this.adManager.pauseAd() : this.pauseAdFlag = !0
                            } catch (e) {
                                this.console.error("ThirdParty adManager error", e), this.setState(d.States.ERROR, {msg: E.Errors.AD_MANAGER_ERROR})
                            }
                        }
                    }, {
                        key: "resumeAd", value: function () {
                            try {
                                this.console.warn("Try to resumeAd in ThirdParty adManager"), this.adManager.resumeAd()
                            } catch (e) {
                                this.console.error("ThirdParty adManager error", e), this.setState(d.States.ERROR, {msg: E.Errors.AD_MANAGER_ERROR})
                            }
                        }
                    }, {
                        key: "skipAd", value: function () {
                            try {
                                this.console.warn("Try to skipAd in ThirdParty adManager"), this.adManager.skipAd()
                            } catch (e) {
                                this.console.error("ThirdParty adManager error", e), this.setState(d.States.ERROR, {msg: E.Errors.AD_MANAGER_ERROR})
                            }
                        }
                    }, {
                        key: "showControls", value: function () {
                            this.adManager.toggleControls && this.adManager.toggleControls(!0)
                        }
                    }, {
                        key: "hideControls", value: function () {
                            this.adManager.toggleControls && this.adManager.toggleControls(!1)
                        }
                    }, {
                        key: "createVastTracker", value: function (e, t) {
                            return new p.default.tracker(e, t)
                        }
                    }, {
                        key: "destroy", value: function () {
                            l.tracer.log("[VPAID_SERVER] [DESTROY] destroy called"), this.console.warn("Call destroy()"), clearInterval(this.trackingInterval), clearInterval(this.slowpokeInterval), this.adManagerInstance.destroy(), this.console.warn("Destroy is not clearing all event listeners")
                        }
                    }, {
                        key: "adLinear", get: function () {
                            return this.getAdManagerProp("adLinear")
                        }, set: function (e) {
                            return this.setAdManagerProp("adLinear", e)
                        }
                    }, {
                        key: "adWidth", get: function () {
                            return this.getAdManagerProp("adWidth")
                        }, set: function (e) {
                            return this.setAdManagerProp("adWidth", e)
                        }
                    }, {
                        key: "adHeight", get: function () {
                            return this.getAdManagerProp("adHeight")
                        }, set: function (e) {
                            return this.setAdManagerProp("adHeight", e)
                        }
                    }, {
                        key: "adExpanded", get: function () {
                            return this.getAdManagerProp("adExpanded")
                        }, set: function (e) {
                            return this.setAdManagerProp("adExpanded", e)
                        }
                    }, {
                        key: "adSkippableState", get: function () {
                            return this.getAdManagerProp("adSkippableState")
                        }, set: function (e) {
                            return this.setAdManagerProp("adSkippableState", e)
                        }
                    }, {
                        key: "adRemainingTime", get: function () {
                            return this.getAdManagerProp("adRemainingTime")
                        }, set: function (e) {
                            return this.setAdManagerProp("adRemainingTime", e)
                        }
                    }, {
                        key: "adDuration", get: function () {
                            return this.getAdManagerProp("adDuration")
                        }, set: function (e) {
                            return this.setAdManagerProp("adDuration", e)
                        }
                    }, {
                        key: "adVolume", get: function () {
                            return this.console.log("get adVolume was called"), this.getAdManagerProp("adVolume")
                        }, set: function (e) {
                            return this.console.log("set adVolume was called", e), this.setAdManagerProp("adVolume", e)
                        }
                    }, {
                        key: "adCompanions", get: function () {
                            return this.getAdManagerProp("adCompanions")
                        }, set: function (e) {
                            return this.setAdManagerProp("adCompanions", e)
                        }
                    }, {
                        key: "adIcons", get: function () {
                            return this.getAdManagerProp("adCompanions")
                        }, set: function (e) {
                            return this.setAdManagerProp("adIcons", e)
                        }
                    }]), t
                }()
            }, {
                "../EpomVpaidFacade": 6,
                "../Tracer": 8,
                "../helpers/AdHelper": 12,
                "../helpers/UrlHelper": 13,
                "../objects/Eventable": 15,
                "../objects/Statable": 16,
                "../types/IController": 27,
                "../utils/DOM": 29,
                "../utils/Errors": 30,
                "../utils/Events": 31,
                "../utils/Lifecycle": 32,
                "../utils/States": 36,
                "../utils/Utils": 37,
                "../vendor/vast-client/dist/index": 45,
                "./AdManagerInstance": 17,
                "./ExceptionRoutines": 18,
                "./corruptedManagers": 24
            }], 23: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function o(e, t) {
                    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.Playback = void 0;
                var s = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), a = e("../objects/Eventable"), l = e("./PlayerController"), u = e("../utils/DOM"), c = e("../players/HTML5Player"), d = e("../players/PlayerControls"), h = e("../utils/Utils"), p = e("./VpaidServer"), f = e("../utils/Events"), v = e("../utils/Promised"), E = (e("../types/IController"), e("../VpaidEventsAdapter"), e("./Tracking")), y = (e("./PlaybackConfiguration"), e("../Tracer")), m = e("../utils/Lifecycle"), g = 180;
                n.Playback = function (e) {
                    function t(e, n, o, s, a, l) {
                        r(this, t);
                        var u = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        u.console.update({
                            name: "WaterfallPlayback",
                            debug: !1
                        }), u.vsIteration = 0, u.currentAd = 0, u.vastResponse = e, u.playerSize = o, u.AdHelper = s, u.playbackConfiguration = a, u.vpaidEventsAdapter = l, u.adManagerParams = n, u.requests = 1, u.maxRequests = 1, u.iteration = 1, u.maxIterations = 1, u.adsPlayed = 0, u.maxAds = 1, u.maxExecutionTime = 0, u.loadedWasFired = !1, u.wasFilled = !1, u.playingQueue = [];
                        var c = void 0;
                        try {
                            c = JSON.parse(u.adManagerParams.creativeData.AdParameters), y.tracer.log("[WaterfallPlayback] [GETTING_AD_PARAMS] [SUCCESS] " + h.Utils.safeStringify(c)), u.console.log("[WaterfallPlayback] [GETTING_AD_PARAMS] [SUCCESS] " + h.Utils.safeStringify(c))
                        } catch (e) {
                            return y.tracer.log("[WaterfallPlayback] [GETTING_AD_PARAMS] [ERROR] " + e), u.console.log("[WaterfallPlayback] [GETTING_AD_PARAMS] [ERROR] " + e), u.publish(f.Events.ERROR), i(u)
                        }
                        return u.adParams = c, u.maxAds = parseInt(c.maxAds, 10), u.maxRequests = parseInt(c.requests, 10), u.maxIterations = parseInt(c.iterate, 10), u.maxExecutionTime = parseInt(c.maxExecutionTime, 10) || g, y.tracer.log("[WaterfallPlayback] [STARTED_PARAMS] " + h.Utils.safeStringify({
                                maxAds: u.maxAds,
                                maxRequests: u.maxRequests,
                                maxIterations: u.maxIterations
                            })), u
                    }

                    return o(t, a.Eventable), s(t, [{
                        key: "loadAds", value: function (e) {
                            e && (this.vastResponse = e), this.loadedWasFired || this.waitForAdLoaded()
                        }
                    }, {
                        key: "waitForAdLoaded", value: function () {
                            var e = this, t = this.getAdWaitingObject(this.vastResponse.ads[this.currentAd]);
                            this.adWaitingObject = t, this.playbackConfiguration.setCurrentController(t.obj), t.then(function () {
                                e.console.warn("waitForAdLoaded"), e.loadedWasFired = !0, e.vpaidEventsAdapter.publish(f.Events.AD_LOADED)
                            }).catch(function () {
                                t.obj.destroy(), e.playNextAd(!0)
                            })
                        }
                    }, {
                        key: "start", value: function () {
                            y.tracer.log("[WaterfallPlayback] [START] Starting playback"), this.console.log("[START] Starting playback"), this.play(this.adWaitingObject)
                        }
                    }, {
                        key: "play", value: function (e) {
                            var t = this;
                            y.tracer.log("[WaterfallPlayback] [PLAY] called"), this.playbackConfiguration.setCurrentController(e.obj), e.then(function () {
                                e.obj instanceof p.VpaidServer ? (y.tracer.log("[WaterfallPlayback] [START_VPAID_SERVER]"), t.startVpaidServer(e)) : e.obj instanceof l.PlayerController && (y.tracer.log("[WaterfallPlayback] [START_PLAYER_CONTROLLER]"), t.startPlayerController(e))
                            }).catch(function () {
                                e.obj.destroy(), t.playNextAd(!0)
                            })
                        }
                    }, {
                        key: "playNextAd", value: function (e) {
                            return y.tracer.log("[WaterfallPlayback] [PLAY_NEXT_AD] called"), this.console.warn("playNextAd() called"), this.console.info("player has finished playing ad"), this.currentAd++, e || this.adsPlayed++, this.adsPlayed >= this.maxAds ? (y.tracer.log("[WaterfallPlayback] [AD_STOPPED] published because of maxAds"), y.tracer.lifecycle(m.Lifecycle.EVAM_MAX_ADS_REACHED), void this.vpaidEventsAdapter.publish(f.Events.AD_STOPPED)) : this.currentAd === this.vastResponse.ads.length ? this.maxIterations > 1 && this.iteration < this.maxIterations ? (y.tracer.log("[WaterfallPlayback] [NEW_ITERATION]"), y.tracer.lifecycle(m.Lifecycle.EVAM_ITERATION), this.console.info("new iteration"), this.iteration++, this.currentAd = 0, void(this.loadedWasFired ? this.play(this.getAdWaitingObject(this.vastResponse.ads[this.currentAd])) : this.waitForAdLoaded())) : this.requests < this.maxRequests ? (y.tracer.log("[WaterfallPlayback] [NEW_REQUEST] [RESPAWN]"), y.tracer.lifecycle(m.Lifecycle.EVAM_RESPAWN), this.console.info("new request"), this.requests++, this.iteration = 1, this.currentAd = 0, void this.publish(f.Events.RESPAWN)) : void(this.wasFilled ? (y.tracer.log("[WaterfallPlayback] [AD_STOPPED] because last ad published"), y.tracer.lifecycle(m.Lifecycle.EVAM_FILL), this.console.log("[AD_STOPPED] because last ad published"), this.vpaidEventsAdapter.publish(f.Events.AD_STOPPED)) : (y.tracer.log("[WaterfallPlayback] [AD_ERROR] [NO_ADS] because all thirdparty errored"), y.tracer.lifecycle(m.Lifecycle.EVAM_NO_FILL), this.console.log("[AD_ERROR] [NO_FILL]"), this.vpaidEventsAdapter.publish(f.Events.AD_ERROR, {reason: "NO_FILL"}))) : void(this.loadedWasFired ? this.play(this.getAdWaitingObject(this.vastResponse.ads[this.currentAd])) : this.waitForAdLoaded())
                        }
                    }, {
                        key: "startPlayerController", value: function (e) {
                            var t = this;
                            y.tracer.log("[WaterfallPlayback] startPlayerController called");
                            var n = e.obj;
                            e.then(function () {
                                return e.obj.init()
                            }).then(function () {
                                var e = t.playbackConfiguration, r = e.size, i = e.volume;
                                return r && n.setSize(r.width, r.height, r.viewMode), i && n.setVolume(i), t.console.info("Start ad in playback", r), y.tracer.log("[WaterfallPlayback] [START_AD] playerController startAd calling"), n.startAd()
                            }).then(function () {
                                y.tracer.log("[WaterfallPlayback] [DESTROY] destroy player"), t.console.info("Destroy player"), n.destroy(), t.playNextAd()
                            }).catch(function (e) {
                                return y.tracer.log("[WaterfallPlayback] [ERROR] player is broken"), t.console.error("player is broken", e), n.destroy(), t.playNextAd(!0), e
                            })
                        }
                    }, {
                        key: "startVpaidServer", value: function (e) {
                            var t = this;
                            y.tracer.log("[WaterfallPlayback] startVpaidServer called");
                            var n = e.obj;
                            e.then(function () {
                                if ("failed" === e.status)return Promise.reject({reason: "timeout"});
                                t.addVpaidServerListeners(n);
                                var r = t.playbackConfiguration, i = r.size, o = r.volume;
                                i && n.setSize(i.width, i.height, i.viewMode), void 0 !== o && n.setVolume(o), y.tracer.log("[WaterfallPlayback] [START_AD] VpaidServer startAd calling"), y.tracer.lifecycle(m.Lifecycle.EVAM_AD_START), t.console.info("[startVpaidServer] Start ad in playback", i), n.startAd()
                            }).catch(function (e) {
                                y.tracer.log("[WaterfallPlayback] [startVpaidServer] [ERROR] Destroy VpaidServer because of error"), y.tracer.lifecycle(m.Lifecycle.EVAM_AD_ERROR), t.console.error("Destroy vpaid server because of error", e), e && e.reason && "timeout" === e.reason && n.stopAd(), n.destroy(), t.playNextAd(!0)
                            })
                        }
                    }, {
                        key: "addVpaidServerListeners", value: function (e) {
                            var t = this;
                            e.listen(f.Events.AD_IMPRESSION, function () {
                                t.wasFilled = !0
                            }), e.listen(f.Events.AD_STOPPED, function () {
                                y.tracer.log("[WaterfallPlayback] [DESTROY] Destroy VpaidServer on AD_STOPPED and call playNextAd"), t.console.info("Destroy vpaid server", f.Events.AD_STOPPED), e.destroy(), t.playNextAd()
                            }), e.listen(f.Events.AD_ERROR, function () {
                                y.tracer.log("[WaterfallPlayback] [addVpaidServerListeners] [ERROR] Destroy VpaidServer because of error"), t.console.info("Destroy vpaid server", f.Events.AD_ERROR), e.destroy(), t.playNextAd(!0)
                            })
                        }
                    }, {
                        key: "getAdWaitingObject", value: function (e) {
                            if (this.console.info("getAdWaitingObject called", this.AdHelper.isAdManager(e), e), this.AdHelper.isAdManager(e)) {
                                this.console.info("This ad object is admanager -> create new VS instance and increment iterator", this.vsIteration), this.vsIteration = this.vsIteration + 1;
                                var t = new p.VpaidServer(e, this.adManagerParams, this.AdHelper, E.Tracking, h.Utils, this.vpaidEventsAdapter, !1, this.vsIteration, this.currentAd), n = t.init().then(function () {
                                    return t.initAd()
                                });
                                return new v.Promised(n, t, this.getFailTimeout(e))
                            }
                            var r = new l.PlayerController(e, this.adManagerParams, this.AdHelper, u.DOM, c.HTML5Player, d.PlayerControls, h.Utils, this.vpaidEventsAdapter, this.currentAd);
                            return new v.Promised(Promise.resolve(r), r, this.getFailTimeout(e))
                        }
                    }, {
                        key: "getFailTimeout", value: function (e) {
                            var t = this.AdHelper.getVpaidManagerLink(e);
                            if (this.adParams.initialPlayerConfig && this.adParams.initialPlayerConfig.overrideEVAMUrl && (t = this.adParams.initialPlayerConfig.overrideEVAMUrl), t && t.includes("evam.min"))return 1005e5;
                            var n = e.maxExecutionTime || g;
                            return this.loadedWasFired ? 1e3 * n : 1e3 * g
                        }
                    }]), t
                }()
            }, {
                "../Tracer": 8,
                "../VpaidEventsAdapter": 11,
                "../objects/Eventable": 15,
                "../players/HTML5Player": 25,
                "../players/PlayerControls": 26,
                "../types/IController": 27,
                "../utils/DOM": 29,
                "../utils/Events": 31,
                "../utils/Lifecycle": 32,
                "../utils/Promised": 35,
                "../utils/Utils": 37,
                "./PlaybackConfiguration": 19,
                "./PlayerController": 20,
                "./Tracking": 21,
                "./VpaidServer": 22
            }], 24: [function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0});
                n.corruptedManagers = ["vid.springserve.com", "vpaid.springserve.com", "ima3vpaid.appspot.com", "imasdk.googleapis.com", "ad.lkqd.net"]
            }, {}], 25: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function o(e, t) {
                    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.HTML5Player = void 0;
                var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), l = e("../utils/Events"), u = e("../utils/States"), c = e("../utils/Errors"), d = e("../objects/Statable"), h = (e("../VpaidEventsAdapter"), e("./PlayerControls")), p = e("../utils/Utils");
                n.HTML5Player = function (e) {
                    function t(e, n) {
                        r(this, t);
                        var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return o.console = o.console.update({
                            name: "HTML5Player",
                            debug: !1
                        }), o.vpaidEventsAdapter = n, o.playerListeners = {}, o.controlsListeners = {}, o._playerControlsStyles = void 0, o._playerControlsContainer = void 0, o.playerControls = new h.PlayerControls(e, o.vpaidEventsAdapter), o.volume = {
                            muted: !1,
                            current: .5,
                            previous: .5
                        }, o.paused = !0, o
                    }

                    return o(t, d.Statable), a(t, [{
                        key: "init", value: function (e) {
                            if (this.slot = this.slot || e.slot, this.videoSlot = this.videoSlot || e.videoSlot, this.desiredBitrate = e.desiredBitrate, this.viewMode = e.viewMode, "object" !== s(this.slot) || "object" !== s(this.videoSlot))return this.setState(u.States.ERROR, {msg: c.Errors.INCORRECT_SLOT}), void this.publish(l.Events.ERROR, {msg: c.Errors.INCORRECT_SLOT});
                            e.width && e.height && this.setSize(e.width, e.height, e.viewMode), this.addListeners(), e.mute ? (this.setVolume(0), this.console.log("volume to 0")) : (this.console.log("volume"), this.setVolume(this.volume.current)), this.setState(u.States.READY)
                        }
                    }, {
                        key: "addListeners", value: function () {
                            var e = this, t = void 0;
                            null !== document.onfullscreenchange ? t = "fullscreenchange" : null !== document.onwebkitfullscreenchange ? t = "webkitfullscreenchange" : null !== document.onmozfullscreenchange && (t = "mozfullscreenchange"), t && (this.playerListeners[t] = function () {
                                e.fullscreen = !e.fullscreen, e.publish(l.Events.CHANGE_FULLSCREEN_STATE, {newFullscreenState: e.fullscreen})
                            }), this.playerListeners[l.Events.PLAYER_CANPLAY] = function () {
                                e.setState(u.States.CAN_PLAY)
                            }, this.playerListeners[l.Events.PLAYER_PAUSE] = function () {
                                e.publish(l.Events.PLAYER_PAUSE), e.setState(u.States.PAUSED)
                            }, this.playerListeners[l.Events.PLAYER_PLAYING] = function () {
                                e.publish(l.Events.PLAYER_PLAYING), e.setState(u.States.PLAYING)
                            }, this.playerListeners[l.Events.PLAYER_TIMEUPDATE] = function () {
                                e.duration && e.duration === e.videoSlot.duration || (e.console.log("duration changed"), e.duration = e.videoSlot.duration, e.publish(l.Events.PLAYER_DURATION_CHANGE)), e.currentTime = e.videoSlot.currentTime, e.remainingTime = e.duration - e.currentTime, e.publish(l.Events.PLAYER_TIMEUPDATE, {currentTime: e.currentTime})
                            }, this.playerListeners[l.Events.PLAYER_ENDED] = function () {
                                e.console.log("ENDED"), e.publish(l.Events.PLAYER_ENDED), e.stop()
                            }, this.playerListeners[l.Events.PLAYER_VOLUMECHANGE] = function () {
                                e.publish(l.Events.CHANGE_VOLUME_LEVEL, {
                                    currentVolume: e.volume.current,
                                    previousVolume: e.volume.previous
                                }), e.setVolume(e.videoSlot.volume)
                            }, this.playerListeners[l.Events.PLAYER_ERROR] = function () {
                                e.console.log("VideoSlot error received", "error"), e.setState(u.States.ERROR, {msg: c.Errors.PLAYER_ERROR}), e.publish(l.Events.ERROR, {msg: c.Errors.PLAYER_ERROR})
                            }, Object.keys(this.playerListeners).forEach(function (t) {
                                e.videoSlot.addEventListener(t, e.playerListeners[t])
                            }), this.videoSlot.addEventListener("timeupdate", function () {
                            })
                        }
                    }, {
                        key: "removeListeners", value: function () {
                            var e = this;
                            this.console.log("Remove player listener", "info"), Object.keys(this.playerListeners).forEach(function (t) {
                                e.videoSlot.removeEventListener(t, e.playerListeners[t])
                            })
                        }
                    }, {
                        key: "load", value: function (e) {
                            this.console.info("loading video:", e), this.setState(u.States.LOADING);
                            try {
                                this.videoSlot.setAttribute("src", e), this.videoSlot.load()
                            } catch (e) {
                                this.setState(u.States.ERROR, {msg: c.Errors.PLAYER_MEDIAFILE_LOAD_ERROR}), this.publish(l.Events.ERROR, {msg: c.Errors.PLAYER_MEDIAFILE_LOAD_ERROR})
                            }
                        }
                    }, {
                        key: "createControls", value: function () {
                            this.playerControls.subscribeToEvents(this), this.addControlsListeners(), this.console.info("Create controls"), this._playerControlsStyles = this.playerControls.createStyles();
                            var e = !!this.defaultSkipValues && this.defaultSkipValues.state;
                            this._playerControlsContainer = this.playerControls.createControls(this.controls, e), this.slot.appendChild(this._playerControlsStyles), this.slot.appendChild(this._playerControlsContainer)
                        }
                    }, {
                        key: "addControlsListeners", value: function () {
                            var e = this;
                            this.controlsListeners[l.Events.CLICK_ON_PLAY_BTTN] = function () {
                                e.paused ? e.play() : e.pause()
                            }, this.controlsListeners[l.Events.CLICK_ON_SKIP_BTTN] = function () {
                                e.publish(l.Events.SKIP)
                            }, this.controlsListeners[l.Events.AD_SKIPPABLE_STATE_CHANGE] = function (t) {
                                e.publish(l.Events.AD_SKIPPABLE_STATE_CHANGE), e._changeSkippableState(t)
                            }, this.controlsListeners[l.Events.CLICK_ON_OVERLAY] = function () {
                                e.publish(l.Events.CLICK)
                            }, this.controlsListeners[l.Events.CLICK_ON_MUTE_BTTN] = function () {
                                e.getVolume() > 0 ? (e.setVolume(0), e.videoSlot.setAttribute("muted", ""), e.videoSlot.muted = !0) : (e.setVolume(e.volume.previous), e.videoSlot.removeAttribute("muted"), e.videoSlot.muted = !1)
                            }, this.controlsListeners[l.Events.CHANGE_VOLUME_LEVEL] = function (t) {
                                e.videoSlot.removeAttribute("muted"), e.videoSlot.muted = !1, e.setVolume(t.newVolumeValue)
                            }, this.controlsListeners[l.Events.CLICK_ON_FULLSCREEN_BTTN] = function () {
                                e.toggleFullscreen()
                            }, Object.keys(this.controlsListeners).forEach(function (t) {
                                e.playerControls.listen(t, e.controlsListeners[t])
                            })
                        }
                    }, {
                        key: "removeControlsListeners", value: function () {
                            var e = this;
                            Object.keys(this.controlsListeners).forEach(function (t) {
                                e.playerControls.unlisten(t, e.controlsListeners[t])
                            })
                        }
                    }, {
                        key: "showControls", value: function () {
                            this.playerControls.showControls()
                        }
                    }, {
                        key: "hideControls", value: function () {
                            this.console.log("Player. hide controls"), this.playerControls.hideControls()
                        }
                    }, {
                        key: "clearControls", value: function () {
                            this.console.log("Remove player controls"), this._playerControlsStyles && this._playerControlsStyles.remove(), this._playerControlsContainer && this._playerControlsContainer.remove()
                        }
                    }, {
                        key: "removeControls", value: function () {
                            for (this.console.log("Player. remove controls "), this.removeControlsListeners(); this.playerControls._buttonsContainer.firstChild;)this.playerControls._buttonsContainer.removeChild(this.playerControls._buttonsContainer.firstChild);
                            this.playerControls._buttonsContainer.remove(), this.playerControls._controlsContainer.remove()
                        }
                    }, {
                        key: "setSkip", value: function (e) {
                            var t = p.Utils.mergeObjects(p.Utils.mergeObjects({}, this.defaultSkipValues), e);
                            this.skippableState = !!t.state && t.state, this.skipOffset = t.offset ? t.offset : 0, t.skipBttnText && (h.PlayerControls.SKIP_TEXT = t.skipBttnText), t.counterText && (h.PlayerControls.SKIP_COUNTER = t.counterText)
                        }
                    }, {
                        key: "setCurrentTime", value: function (e) {
                            this.currentTime = e, this.videoSlot.currentTime = e
                        }
                    }, {
                        key: "setVolume", value: function (e) {
                            var t = e > 1 ? e / 100 : e;
                            t !== this.volume.current && (this.volume.previous = this.volume.current, this.volume.muted = t <= 0, this.volume.current = t, this.playerControls._calculateVolumeBarLevel(t)), this.videoSlot.volume = t
                        }
                    }, {
                        key: "setAdExpanded", value: function (e) {
                            return this.adExpanded !== e && (this.adExpanded = e, this.vpaidEventsAdapter.publish(l.Events.AD_EXPANDED_CHANGE, {newState: this.adExpanded}), !0)
                        }
                    }, {
                        key: "setFullscreenMode", value: function (e) {
                            var t = void 0, n = void 0;
                            if (this.videoSlot.requestFullscreen && document.exitFullscreen)t = "requestFullscreen", n = "exitFullscreen"; else if (this.videoSlot.mozRequestFullscreen && document.mozExitFullscreen)t = "mozRequestFullscreen", n = "mozExitFullscreen"; else {
                                if (!this.videoSlot.webkitRequestFullscreen || !document.webkitExitFullscreen)return void this.publish(l.Events.ERROR, {msg: c.Errors.FULLSCREEN_NOT_FOUND});
                                t = "webkitRequestFullscreen", n = "webkitExitFullscreen"
                            }
                            e ? this.videoSlot[t]() : document[n]()
                        }
                    }, {
                        key: "setSize", value: function (e, t, n) {
                            var r = this.width !== e || this.height !== t || this.viewMode !== n;
                            e && this.width !== e && (this.width = e), t && t !== this.height && (this.height = t), n && n !== this.viewMode && (this.viewMode = n), r && this.publish(l.Events.PLAYER_SIZE_CHANGE, {newSizes: [this.width, this.height, this.viewMode]})
                        }
                    }, {
                        key: "getVolume", value: function () {
                            return void 0 === this.volume.current ? this.videoSlot.volume : this.volume.current
                        }
                    }, {
                        key: "play", value: function () {
                            this.paused = !1, this.publish(l.Events.PLAYER_PLAY), this.videoSlot.play()
                        }
                    }, {
                        key: "pause", value: function () {
                            this.paused = !0, this.videoSlot.pause(), this.publish(l.Events.PLAYER_PAUSE)
                        }
                    }, {
                        key: "getVideoSlot", value: function () {
                            return this.videoSlot
                        }
                    }, {
                        key: "stop", value: function () {
                            this.videoSlot.pause(), this.setState(u.States.PLAYBACK_COMPLETED)
                        }
                    }, {
                        key: "complete", value: function () {
                            this.playerControls && this.playerControls._controlsContainer && this.playerControls._controlsContainer.remove(), this.removeListeners()
                        }
                    }, {
                        key: "toggleFullscreen", value: function () {
                            document.fullscreenElement && document.webkitFullscreenElement && document.mozFullScreenElement && document.webkitFullscreenElement ? this.setFullscreenMode(!1) : this.setFullscreenMode(!0)
                        }
                    }, {
                        key: "createVideoTag", value: function (e) {
                            var t = document.createElement("video");
                            return t.style.width = e.offsetWidth + "px", t.style.height = e.offsetHeight + "px", t.style.backgroundColor = "#000", e.appendChild(t), t
                        }
                    }, {
                        key: "_changeSkippableState", value: function (e) {
                            return this.skippableState !== e.state && (this.skippableState = e.state, !0)
                        }
                    }, {
                        key: "_cleanUp", value: function () {
                        }
                    }, {
                        key: "width", get: function () {
                            return this.slot.offsetWidth
                        }, set: function (e) {
                            this.slot.style.width = e + "px"
                        }
                    }, {
                        key: "height", get: function () {
                            return this.slot.offsetHeight
                        }, set: function (e) {
                            this.slot.style.height = e + "px"
                        }
                    }]), t
                }()
            }, {
                "../VpaidEventsAdapter": 11,
                "../objects/Statable": 16,
                "../utils/Errors": 30,
                "../utils/Events": 31,
                "../utils/States": 36,
                "../utils/Utils": 37,
                "./PlayerControls": 26
            }], 26: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function o(e, t) {
                    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.PlayerControls = void 0;
                var s = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), a = e("../objects/Eventable"), l = e("../utils/Events"), u = e("../utils/States"), c = e("../utils/Utils"), d = n.PlayerControls = function (e) {
                    function t(e, n) {
                        r(this, t);
                        var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return o._controls = e, o._controlsContainer = void 0, o._buttonsContainer = void 0, o._skipTimer = void 0, a.Eventable.call(o), o._name = "PlayerControls", o._domElements = {}, o._hash = c.Utils.randomHash(), o.vpaidEventsAdapter = n, o.console = o.console.update({
                            name: "PlayerControls",
                            debug: !1
                        }), o
                    }

                    return o(t, a.Eventable), s(t, [{
                        key: "createOverlay", value: function (e) {
                            var t = document.createElement("div");
                            return t.id = "evam" + this._hash + e, t.setAttribute("style", "height:100%; width:100%; left:0; top:0; position: absolute;"), this._controlsContainer.insertBefore(t, this._controlsContainer.firstChild), t
                        }
                    }, {
                        key: "createVolumeSection", value: function (e) {
                            var n = document.createElement("button");
                            return n.id = "evam" + this._hash + e + "VolumeElement", e === t.VOLUME_BAR ? (n.className = "evam" + this._hash + "Cleared evam" + this._hash + "VolumeBar", n.appendChild(document.createElement("span"))) : e === t.MUTE_BTTN && (n.className = "evam" + this._hash + "Cleared evam" + this._hash + "PlayerButtons evam" + this._hash + "MuteButton"), this._volumeContainer = this._volumeContainer || document.createElement("div"), this._volumeContainer.className = "evam" + this._hash + "VolumeContainer", this._volumeContainer.appendChild(n), this._buttonsContainer.appendChild(this._volumeContainer), n
                        }
                    }, {
                        key: "createButton", value: function (e) {
                            var t = document.createElement("button");
                            return t.id = "evam" + this._hash + e + "Bttn", t.className = "evam" + this._hash + "Cleared evam" + this._hash + "PlayerButtons evam" + this._hash + e, this._buttonsContainer.appendChild(t), t
                        }
                    }, {
                        key: "subscribeToEvents", value: function (e) {
                            var n = this;
                            e.listen(l.Events.STATE_CHANGED, function (r) {
                                r.newState === u.States.PAUSED ? (n._domElements[t.PLAY_BTTN] && (n._domElements[t.PLAY_BTTN].classList.remove("play" + n._hash), n._domElements[t.PLAY_BTTN].classList.add("pause" + n._hash)), n._pauseSkipTimer()) : r.newState === u.States.PLAYING && (n._domElements[t.PLAY_BTTN] && (n._domElements[t.PLAY_BTTN].classList.remove("pause" + n._hash), n._domElements[t.PLAY_BTTN].classList.add("play" + n._hash)), n._startSkipTimer(e.skipOffset))
                            }), e.listen(l.Events.STATE_CHANGED, function () {
                                !0 === e.fullscreen ? n._domElements[t.FULLSCREEN_BTTN] && (n._domElements[t.FULLSCREEN_BTTN].classList.remove("open" + n._hash), n._domElements[t.FULLSCREEN_BTTN].classList.add("close" + n._hash)) : !1 === e.fullscreen && n._domElements[t.FULLSCREEN_BTTN] && (n._domElements[t.FULLSCREEN_BTTN].classList.remove("close" + n._hash), n._domElements[t.FULLSCREEN_BTTN].classList.add("open" + n._hash)), n.showControls()
                            }, {newState: u.States.LOADING}, !0), e.listen(l.Events.CHANGE_FULLSCREEN_STATE, function (e) {
                                !0 === e.newFullscreenState ? n._domElements[t.FULLSCREEN_BTTN] && (n._domElements[t.FULLSCREEN_BTTN].classList.remove("open" + n._hash), n._domElements[t.FULLSCREEN_BTTN].classList.add("close" + n._hash)) : n._domElements[t.FULLSCREEN_BTTN] && (n._domElements[t.FULLSCREEN_BTTN].classList.remove("close" + n._hash), n._domElements[t.FULLSCREEN_BTTN].classList.add("open" + n._hash))
                            }), e.listen(l.Events.CHANGE_VOLUME_LEVEL, function (e) {
                                n._calculateVolumeBarLevel(e.currentVolume)
                            }, !1)
                        }
                    }, {
                        key: "createControls", value: function (e, n) {
                            var r = this;
                            return this._controlsContainer = this._controlsContainer || document.createElement("div"), this._buttonsContainer = this._buttonsContainer || document.createElement("div"), this._buttonsContainer.className = "evam" + this._hash + "ControlsContainer hide", this._controlsContainer.appendChild(this._buttonsContainer), this._controls = c.Utils.isArray(this._controls) ? this._controls : [this._controls], 0 !== this._controls.length && (this._controls.forEach(function (i) {
                                i === t.OVERLAY ? r._domElements[i] = r.createOverlay(i) : i === t.VOLUME_BAR || i === t.MUTE_BTTN ? r._domElements[i] = r.createVolumeSection(i) : r._domElements[i] = r.createButton(i), e || i === t.SKIP_BTTN || r._domElements[i].classList.add("hide"), i !== t.SKIP_BTTN || n || r._domElements[i].classList.add("hide")
                            }), Object.keys(this._domElements).forEach(function (e) {
                                switch (e) {
                                    case t.PLAY_BTTN:
                                        r._domElements[e].addEventListener("click", function () {
                                            r.publish(l.Events.CLICK_ON_PLAY_BTTN)
                                        });
                                        break;
                                    case t.SKIP_BTTN:
                                        r._domElements[t.SKIP_BTTN].classList.add("evam" + r._hash + "skip");
                                        break;
                                    case t.OVERLAY:
                                        r._domElements[e].addEventListener("click", function () {
                                            r.publish(l.Events.CLICK_ON_OVERLAY)
                                        });
                                        break;
                                    case t.MUTE_BTTN:
                                        r._domElements[e].addEventListener("click", function () {
                                            r.publish(l.Events.CLICK_ON_MUTE_BTTN)
                                        }), r._domElements[e].addEventListener("mouseenter", r._toggleVolumeBar.bind(r), !1), r._domElements[e].addEventListener("mouseleave", r._toggleVolumeBar.bind(r), !1);
                                        break;
                                    case t.VOLUME_BAR:
                                        r._domElements[t.VOLUME_BAR].addEventListener("mousedown", r._startSlidingOnVolumeBar.bind(r), !1), r._domElements[t.VOLUME_BAR].addEventListener("mouseup", r._stopSlidingOnVolumeBar.bind(r), !1), r._domElements[t.VOLUME_BAR].addEventListener("mouseenter", r._toggleVolumeBar.bind(r), !1), r._domElements[t.VOLUME_BAR].addEventListener("mouseleave", r._toggleVolumeBar.bind(r), !1);
                                        break;
                                    case t.FULLSCREEN_BTTN:
                                        r._domElements[t.FULLSCREEN_BTTN].addEventListener("click", function () {
                                            r.publish(l.Events.CLICK_ON_FULLSCREEN_BTTN)
                                        })
                                }
                            }), this._controlsContainer)
                        }
                    }, {
                        key: "showControls", value: function () {
                            this.console.log("PlayerControls. show "), this._buttonsContainer && this._buttonsContainer.classList.remove("hide"), this._domElements[t.PLAY_BTTN] && this._domElements[t.PLAY_BTTN].classList.add("pause" + this._hash), this._domElements[t.FULLSCREEN_BTTN] && this._domElements[t.FULLSCREEN_BTTN].classList.add("open" + this._hash)
                        }
                    }, {
                        key: "hideControls", value: function () {
                            this.console.log("PlayerControls. hide "), this._buttonsContainer && this._buttonsContainer.classList.add("hide")
                        }
                    }, {
                        key: "_slidingHandler", value: function (e) {
                            var n = 1 - ((e.clientY - this._domElements[t.VOLUME_BAR].getBoundingClientRect().top) / this._domElements[t.VOLUME_BAR].offsetHeight).toFixed(2);
                            n < .1 && (n = 0), this.publish(l.Events.CHANGE_VOLUME_LEVEL, {newVolumeValue: n})
                        }
                    }, {
                        key: "_startSlidingOnVolumeBar", value: function (e) {
                            this._domElements[t.VOLUME_BAR].onmousemove = this._moveSlidingOnVolumeBar.bind(this), this._slidingHandler(e)
                        }
                    }, {
                        key: "_moveSlidingOnVolumeBar", value: function (e) {
                            this._slidingHandler(e)
                        }
                    }, {
                        key: "_stopSlidingOnVolumeBar", value: function (e) {
                            this._domElements[t.VOLUME_BAR].onmousemove = null, this._slidingHandler(e)
                        }
                    }, {
                        key: "_toggleVolumeBar", value: function () {
                            this._domElements[t.VOLUME_BAR].onmousemove = null, this._domElements[t.VOLUME_BAR].style.display = "inline-block" === getComputedStyle(this._domElements[t.VOLUME_BAR]).display ? "none" : "inline-block"
                        }
                    }, {
                        key: "_calculateVolumeBarLevel", value: function (e) {
                            var n = void 0;
                            this._domElements[t.VOLUME_BAR] && (n = parseInt(getComputedStyle(this._domElements[t.VOLUME_BAR]).height.replace("px", ""), 10) * e - 2 * parseInt(getComputedStyle(this._domElements[t.VOLUME_BAR].childNodes[0]).bottom.replace("px", ""), 10), this._domElements[t.VOLUME_BAR].childNodes[0].style.height = n > 0 ? n + "px" : 0), this._domElements[t.MUTE_BTTN] && (n > 0 ? (this._domElements[t.MUTE_BTTN].classList.remove("mute" + this._hash), this._domElements[t.MUTE_BTTN].classList.add("unmute" + this._hash)) : (this._domElements[t.MUTE_BTTN].classList.remove("unmute" + this._hash), this._domElements[t.MUTE_BTTN].classList.add("mute" + this._hash)))
                        }
                    }, {
                        key: "_startSkipTimer", value: function (e) {
                            var n = this;
                            if (!this._domElements[t.SKIP_BTTN])return !1;
                            if (0 === e)return this._enableSkipHandler(), !1;
                            if (void 0 === e)return this._removeSkipButton(), !1;
                            var r = this._domElements[t.SKIP_BTTN];
                            this._timer = e, r.classList.add("evam" + this._hash + "skipTimer"), r.innerHTML = t.SKIP_COUNTER.replace("%d", this._timer), this._skipTimer = setInterval(function () {
                                n._timer > 1 ? (n._timer -= 1, r.innerHTML = t.SKIP_COUNTER.replace("%d", n._timer)) : (n._enableSkipHandler(), clearInterval(n._skipTimer))
                            }, 1e3)
                        }
                    }, {
                        key: "_pauseSkipTimer", value: function () {
                            clearInterval(this._skipTimer)
                        }
                    }, {
                        key: "_removeSkipButton", value: function () {
                            this.vpaidEventsAdapter.publish(l.Events.AD_SKIPPABLE_STATE_CHANGE, {state: !1}), this._domElements[t.SKIP_BTTN] && this._domElements[t.SKIP_BTTN].remove()
                        }
                    }, {
                        key: "_enableSkipHandler", value: function () {
                            var e = this._domElements[t.SKIP_BTTN], n = function () {
                                this.publish(l.Events.CLICK_ON_SKIP_BTTN), e.removeEventListener("click", n)
                            }.bind(this);
                            e.innerHTML = t.SKIP_TEXT, e.classList.remove("evam" + this._hash + "skipTimer"), e.addEventListener("click", n), this.vpaidEventsAdapter.publish(l.Events.AD_SKIPPABLE_STATE_CHANGE, {state: !0})
                        }
                    }, {
                        key: "createStyles", value: function (e) {
                            var t = document.createElement("style");
                            return t.innerHTML = "</svg>\')}.evam__HASH__skip{width:auto;padding:0 5px}.evam__HASH__skipTimer{cursor:default}".replace(/__HASH__/g, this._hash), e && e.appendChild(t), t
                        }
                    }]), t
                }();
                d.PLAY_BTTN = "Play", d.SKIP_BTTN = "Skip", d.SKIP_TEXT = "Skip in %d", d.SKIP_COUNTER = "Skip ad", d.OVERLAY = "Overlay", d.TIMELINE = "Timeline", d.MUTE_BTTN = "MuteBttn", d.VOLUME_BAR = "VolumeBar", d.FULLSCREEN_BTTN = "Fullscreen"
            }, {"../objects/Eventable": 15, "../utils/Events": 31, "../utils/States": 36, "../utils/Utils": 37}], 27: [function (e, t, n) {
                "use strict"
            }, {}], 28: [function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0});
                n.Constants = {
                    FULLSCREEN_MODE_FULLSCREEN: "fullscreen",
                    FULLSCREEN_MODE_NORMAL: "normal",
                    FULLSCREEN_MODE_THUMBNAIL: "thumbnail",
                    TRACK_DOMAIN: "http://track.epmplr.com/",
                    TRACK_KEY: "xCeDLQu7RwMYt0aa",
                    TRACK_NETWORK: "000",
                    TRACK_VM_CREATED: "VMC",
                    TRACK_VM_AD_LOADED: "VML",
                    TRACK_VM_AD_IMPRESSION: "VMI",
                    TRACK_VM_AD_ERROR: "VME",
                    TRACK_VS_CREATED: "VSC",
                    TRACK_VS_AD_LOADED: "VSL",
                    TRACK_VS_AD_IMPRESSION: "VSI",
                    TRACK_VS_AD_ERROR: "VSE",
                    TRACK_CTRL: {READY: "CRD", LOADING: "CLD", RESPAWN: "CRP", COMPLETED: "CCL"},
                    MATCHING_AND: "&&",
                    MATCHING_OR: "||",
                    AD_MANAGER_FILE_NAME: "evam.js"
                }
            }, {}], 29: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                Object.defineProperty(n, "__esModule", {value: !0});
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();
                n.DOM = function () {
                    function e() {
                        r(this, e)
                    }

                    return o(e, null, [{
                        key: "getDocument", value: function (e) {
                            var t = e.contentWindow || e.contentDocument;
                            return t.document && (t = t.document), t
                        }
                    }, {
                        key: "getTopFrame", value: function () {
                            var e = void 0;
                            try {
                                for (e = window; e !== e.parent;)e = e.parent
                            } catch (e) {
                            }
                            return e
                        }
                    }, {
                        key: "escapeFromFrames", value: function (t) {
                            try {
                                return t !== t.parent && t.parent.document ? e.escapeFromFrames(t.parent) : t
                            } catch (e) {
                                return t
                            }
                        }
                    }, {
                        key: "extractDomain", value: function (e) {
                            var t = document.createElement("a");
                            return t.href = e, t.hostname
                        }
                    }, {
                        key: "getTopDomain", value: function () {
                            var t = void 0, n = e.extractDomain(e.escapeFromFrames(window).location.href);
                            try {
                                "object" === i(window.location.ancestorOrigins) && window.location.ancestorOrigins.length && (t = e.extractDomain(window.location.ancestorOrigins[window.location.ancestorOrigins.length - 1])), t && "null" != t || (t = n)
                            } catch (e) {
                            }
                            return t
                        }
                    }]), e
                }()
            }, {}], 30: [function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0});
                n.Errors = {
                    GENERAL_ERROR: "Error",
                    WRONG_PATH_ERROR: "Incorrect path to file",
                    WRONG_RESPONSE_FORMAT: "Incorrect format of the response",
                    FILE_LOAD_ERROR: "Error while loading file",
                    MAX_LOADING_LIMIT_EXCEEDED: "Max loading limit of time was exceeded, aborting xmlhttp query",
                    FILE_NOT_FOUND: "Can't load file (not found)",
                    FILE_FORBIDDEN: "Can't load file (forbidden)",
                    SERVER_ERROR: "Internal server error",
                    SERVER_UNAVAILABLE: "Service unavailable",
                    SCRIPT_LOAD_ERROR: "Error while loading script",
                    NESSED_IFRAME_ERROR: "Max count of nessed iframes",
                    XML_PARSE_ERROR: "Error while parsing xml",
                    VAST_PARSE_ERROR: "Error while parsing vast",
                    VAST_NO_AD: "Vast contains no ad",
                    VAST_NO_DATA_TO_SHOW: "Vast contains no data to show",
                    VAST_LOAD_ERROR: "Error while loading vast",
                    PLAYER_MEDIAFILE_LOAD_ERROR: "Error when loading media file",
                    INCORRECT_SLOT: "Incorrect slot or videoSlot",
                    PLAYER_ERROR: "Unknown player error",
                    FULLSCREEN_NOT_FOUND: "Fullscreen methods not found",
                    VPAID_IS_BROKEN: "VPAID object is broken",
                    VPAID_FUNCTION_NOT_FOUND: "VPAID function not found",
                    VPAID_UNSUPPORTED_VERSION: "VPAID unsupported version",
                    VPAID_ONLY_ADMANAGER: "only VPAID ad managers are supported in this version",
                    INCORRECT_SUBVAST_LOADED: "Icorrect subVast loaded",
                    VPAID_AD_ERROR: "VPAID ad error",
                    MAX_EXECUTION_TIMEOUT: "Max execution timeout",
                    EVAM_PROXY_ERRROR: "error on creating evam proxy",
                    SUBVAST_INIT_ERROR: "error when trying to init subVast",
                    AD_MANAGER_ERROR: "thirdPartyAdManager error"
                }, n.ErrorLevels = {ERROR: "error", CRITICAL: "critical error", NO_ERROR: "good one"}
            }, {}], 31: [function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0});
                n.Events = {
                    STATE_CHANGED: "State changed",
                    ERROR: "ERROR",
                    CLICK: "click",
                    PLAYER_TIMEUPDATE: "timeupdate",
                    PLAYER_PROGRESS: "progress",
                    PLAYER_SUSPEND: "suspend",
                    PLAYER_EMPTIED: "emptied",
                    PLAYER_STALLED: "stalled",
                    PLAYER_LOADEDMETADATA: "loadedmetadata",
                    PLAYER_LOADEDDATA: "loadeddata",
                    PLAYER_CANPLAY: "canplay",
                    PLAYER_CANPLAYTHROUGH: "canplaythrough",
                    PLAYER_PLAYING: "playing",
                    PLAYER_PLAY: "play",
                    PLAYER_WAITING: "waiting",
                    PLAYER_SEEKING: "seeking",
                    PLAYER_SEEKED: "seeked",
                    PLAYER_ENDED: "ended",
                    PLAYER_DURATIONCHANGE: "durationchange",
                    PLAYER_PAUSE: "pause",
                    PLAYER_RATECHANGE: "ratechange",
                    PLAYER_RESIZE: "resize",
                    PLAYER_VOLUMECHANGE: "volumechange",
                    PLAYER_ERROR: "error",
                    PLAY_TOGGLE: "request to toggle play/pause",
                    SKIP: "request to skip",
                    TIMELINE_EVENT: "change timeline event",
                    PLAYER_DURATION_CHANGE: "change video duration",
                    PLAYER_SIZE_CHANGE: "change player size",
                    PLAYER_VIDEO_START: "player video start",
                    PLAYER_VIDEO_FIRST_QUARTILE: "player first quartile",
                    PLAYER_VIDEO_MID_POINT: "player mid point",
                    PLAYER_VIDEO_THIRD_QUARTILE: "player third quartile",
                    PLAYER_VIDEO_COMPLETE: "player video complete",
                    CLICK_ON_OVERLAY: "click on overlay",
                    CLICK_ON_PLAY_BTTN: "click on play button",
                    CLICK_ON_SKIP_BTTN: "click on skip button",
                    CLICK_ON_MUTE_BTTN: "click on mute button",
                    CLICK_ON_FULLSCREEN_BTTN: "click on fullscreen button",
                    CHANGE_FULLSCREEN_STATE: "change fullscreen state",
                    CHANGE_VOLUME_LEVEL: "change level of volume bar",
                    CAN_SKIP_NOW: "skip timer finished",
                    AD_LOADED: "AdLoaded",
                    AD_STARTED: "AdStarted",
                    AD_STOPPED: "AdStopped",
                    AD_SKIPPED: "AdSkipped",
                    AD_SKIPPABLE_STATE_CHANGE: "AdSkippableStateChange",
                    AD_RESUMED: "resumeAd",
                    AD_SIZE_CHANGE: "AdSizeChange",
                    AD_DURATION_CHANGE: "AdDurationChange",
                    AD_EXPANDED_CHANGE: "AdExpandedChange",
                    AD_REMAINING_TIME_CHANGE: "AdRemainingTimeChange",
                    AD_VOLUME_CHANGE: "AdVolumeChange",
                    AD_IMPRESSION: "AdImpression",
                    AD_CLICK_THRU: "AdClickThru",
                    AD_PAUSED: "AdPaused",
                    AD_PLAYING: "AdPlaying",
                    AD_ERROR: "AdError",
                    AD_VIDEO_START: "AdVideoStart",
                    AD_VIDEO_FIRST_QUARTILE: "AdVideoFirstQuartile",
                    AD_VIDEO_MID_POINT: "AdVideoMidpoint",
                    AD_VIDEO_THIRD_QUARTILE: "AdVideoThirdQuartile",
                    AD_VIDEO_COMPLETE: "AdVideoComplete",
                    AD_SECOND_FRAME: "AdSecondFrame",
                    AD_REQUEST: "AdRequest",
                    AD_OPPORTUNITY: "AdOpportunity",
                    CLICK_TYPE_THROUGH: "ClickThrough",
                    CLICK_TYPE_TRACKING: "ClickTracking",
                    CLICK_TYPE_CUSTOM: "CustomClick",
                    TRACKING_EVENT: "tracking vast event",
                    TRACKING_EVENT_START: "start",
                    TRACKING_EVENT_FIRST_QUARTILE: "firstQuartile",
                    TRACKING_EVENT_MID_POINT: "midpoint",
                    TRACKING_EVENT_THIRD_QUARTILE: "thirdQuartile",
                    TRACKING_EVENT_COMPLETE: "complete",
                    TRACKING_EVENT_CREATIVE_VIEW: "creativeView",
                    TRACKING_EVENT_MUTE: "mute",
                    TRACKING_EVENT_UNMUTE: "unmute",
                    TRACKING_EVENT_PAUSE: "pause",
                    TRACKING_EVENT_REWIND: "rewind",
                    TRACKING_EVENT_RESUME: "resume",
                    TRACKING_EVENT_FULLSCREEN: "fullscreen",
                    TRACKING_EVENT_EXIT_FULLSCREEN: "exitFullscreen",
                    TRACKING_EVENT_EXPAND: "expand",
                    TRACKING_EVENT_COLLAPSE: "collapse",
                    TRACKING_EVENT_ACCEPT_INVITATION_LINEAR: "acceptInvitationLinear",
                    TRACKING_EVENT_CLOSE_LINEAR: "closeLinear",
                    TRACKING_EVENT_SKIP: "skip",
                    TRACKING_EVENT_PROGRESS: "progress",
                    WRAPPER_BEFORE_LOAD: "Before loading wrapper",
                    THIRD_PARTY_LOADED: "Third party loaded",
                    RESPAWN: "respawn"
                }
            }, {}], 32: [function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0});
                n.Lifecycle = {
                    PLAYER_CREATED: {event: "PCR", module: "player"},
                    PLAYER_START_AD: {event: "PSA", module: "player"},
                    PLAYER_MAIN_VIDEO: {event: "PMV", module: "player"},
                    PLAYER_COMPLETE: {event: "PCM", module: "player"},
                    PLAYER_ERROR: {event: "PER", module: "player"},
                    EVAM_CREATED: {event: "ECR", module: "evam"},
                    EVAM_LOADED_ADS: {event: "ELA", module: "evam"},
                    EVAM_LOAD_ADS_ERROR: {event: "ELE", module: "evam"},
                    EVAM_AD_START: {event: "EAS", module: "evam"},
                    EVAM_AD_ERROR: {event: "EAE", module: "evam"},
                    EVAM_OPPORTUNITY: {event: "EOP", module: "evam"},
                    EVAM_IMPRESSION: {event: "EIM", module: "evam"},
                    EVAM_MAX_ADS_REACHED: {event: "EMA", module: "evam"},
                    EVAM_ITERATION: {event: "EIT", module: "evam"},
                    EVAM_RESPAWN: {event: "ERE", module: "evam"},
                    EVAM_FILL: {event: "EFI", module: "evam"},
                    EVAM_NO_FILL: {event: "ENF", module: "evam"}
                }
            }, {}], 33: [function (e, t, n) {
                "use strict";
                function r(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++)n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }

                function i(e) {
                    var t = window.parent;
                    try {
                        if (t.logger && t.logger.config().hash === e)return -1;
                        for (var n = 0; n <= 10; n++) {
                            if (t.logger)return t.logger.config().iterator;
                            t = t.parent
                        }
                        return 0
                    } catch (e) {
                        return 0
                    }
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.Logger = function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.module = function (e) {
                        return e && (this._moduleName = e), this._moduleName
                    }, this.prefix = function () {
                        return window.navigator.userAgent.indexOf("MSIE ") > 0 || window.navigator.userAgent.match(/Trident.*rv:11\./) ? ["[" + this.hash + ":" + this.module() + "] "] : ["%c[" + this.hash + ":" + this.module() + "] %s", this.css]
                    }, this.debug = function (e) {
                        return e && (this._debug = e), this._debug
                    }, this.info = function () {
                        if (this.debug() || this.rootDebug) {
                            for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++)n[i] = arguments[i];
                            (e = console).info.apply(e, r(this.prefix().concat(n)))
                        }
                    }, this.rootDebug = !1;
                    try {
                        var n = o.Utils.parentAccessible(window);
                        n || (console.log("can't check EpomDebug in parent window"), this.info()), (window.EpomDebug || n && (window.parent.EpomDebug || window.top.EpomDebug)) && (this.rootDebug = !0)
                    } catch (e) {
                        this.info("can't check EpomDebug in parent window")
                    }
                    this.hash = t.hash || Math.floor(1e5 * Math.random()), this.iterator = 0;
                    var s = i(this.hash);
                    s >= 0 && (this.iterator = s + 1);
                    var a = ["#3872d1", "#109b30", "#719b5d", "#9b0044", "#897b1d", "#0d909b", "#9b7e0d", "#00569b", "#9b9b00", "#109b30", "#9b4f00"];
                    return this.css = t && t.css ? t.css : "color: " + a[this.iterator], this.cssInfo = t && t.cssInfo ? t.cssInfo : this.css, this.cssWarn = t && t.cssWarn ? t.cssWarn : this.css, this.cssError = t && t.cssError ? t.cssError : this.css, this._moduleName = t && t.name ? t.name : this._moduleName, this._debug = !(!t || !t.debug) && t.debug, this.config = function () {
                        return {
                            debug: this._debug,
                            hash: this.hash,
                            iterator: this.iterator,
                            css: this.css,
                            cssInfo: this.cssInfo,
                            cssWarn: this.cssWarn,
                            cssError: this.cssError
                        }
                    }, this.log = function () {
                        if (this.debug() || this.rootDebug) {
                            for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++)n[i] = arguments[i];
                            (e = console).log.apply(e, r(this.prefix().concat(n)))
                        }
                    }, this.warn = function () {
                        if (this.debug() || this.rootDebug) {
                            for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++)n[i] = arguments[i];
                            (e = console).warn.apply(e, r(this.prefix().concat(n)))
                        }
                    }, this.error = function () {
                        if (this.debug() || this.rootDebug) {
                            for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++)n[i] = arguments[i];
                            (e = console).error.apply(e, r(this.prefix().concat(n)))
                        }
                    }, this.trace = function () {
                        (this.debug() || this.rootDebug) && console.trace()
                    }, this.update = function (e) {
                        return e.name && (this.module(e.name), e.debug && this.debug(e.debug)), e.css && (this.css = e.css), this
                    }, this.cancelRootDebug = function () {
                        e.rootDebug = !1
                    }, this
                };
                var o = e("../utils/Utils")
            }, {"../utils/Utils": 37}], 34: [function (e, t, n) {
                "use strict";
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(e("promise-polyfill"));
                window.Promise || (window.Promise = i.default), Array.prototype.includes || (Array.prototype.includes = function (e) {
                    var t = Object(this), n = parseInt(t.length) || 0;
                    if (0 === n)return !1;
                    var r, i = parseInt(arguments[1]) || 0;
                    i >= 0 ? r = i : (r = n + i) < 0 && (r = 0);
                    for (var o; r < n;) {
                        if (o = t[r], e === o || e !== e && o !== o)return !0;
                        r++
                    }
                    return !1
                }), Array.prototype.find || (Array.prototype.find = function (e) {
                    if (null == this)throw new TypeError("Array.prototype.find called on null or undefined");
                    if ("function" != typeof e)throw new TypeError("predicate must be a function");
                    for (var t, n = Object(this), r = n.length >>> 0, i = arguments[1], o = 0; o < r; o++)if (t = n[o], e.call(i, t, o, n))return t
                }), String.prototype.startsWith || (String.prototype.startsWith = function (e, t) {
                    return t = t || 0, this.substr(t, e.length) === e
                }), String.prototype.replaceAll || (String.prototype.replaceAll = function (e, t) {
                    return void 0 === t ? this.toString() : this.split(e).join(t)
                }), "undefined" != typeof Element && null !== Element && function (e) {
                    "classList"in e || Object.defineProperty(e, "classList", {
                        get: function e() {
                            function t() {
                                n.forEach(function (e, t) {
                                    this[t] = e
                                })
                            }

                            var n = this.className.split(" ").filter(function (e) {
                                return e && /^[^ ]*$/.test(e)
                            }), r = this;
                            return t.prototype = {
                                add: function () {
                                    for (var e = 0, t = arguments; e < t.length; e++)~n.indexOf(t[e]) || n.push(t[e]);
                                    r.className = n.join(" ")
                                }, contains: function (e) {
                                    return !!~n.indexOf(e)
                                }, remove: function (e) {
                                    for (var t, i = 0, o = arguments; o[i]; i++)(t = n.indexOf(o[i])) > -1 && (n.splice(t, 1), r.className = n.join(" "))
                                }, toggle: function (t) {
                                    var n = e.call(r), i = n.contains(t);
                                    return n[i ? "remove" : "add"](t), !i
                                }, item: function (e) {
                                    return n[e]
                                }
                            }, new t
                        }
                    })
                }(Element.prototype), Object.getPrototypeOf || (Object.getPrototypeOf = function (e) {
                    if (e !== Object(e))throw TypeError("Object.getPrototypeOf called on non-object");
                    return e.__proto__ || e.constructor.prototype || Object.prototype
                }), "function" != typeof Object.getOwnPropertyNames && (Object.getOwnPropertyNames = function (e) {
                    if (e !== Object(e))throw TypeError("Object.getOwnPropertyNames called on non-object");
                    var t, n = [];
                    for (t in e)Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                    return n
                }), "function" != typeof Object.create && (Object.create = function (e, t) {
                    function n() {
                    }

                    if ("object" !== (void 0 === e ? "undefined" : r(e)))throw TypeError();
                    n.prototype = e;
                    var i = new n;
                    if (e && (i.constructor = n), void 0 !== t) {
                        if (t !== Object(t))throw TypeError();
                        Object.defineProperties(i, t)
                    }
                    return i
                }), function () {
                    if (!Object.defineProperty || !function () {
                            try {
                                return Object.defineProperty({}, "x", {}), !0
                            } catch (e) {
                                return !1
                            }
                        }()) {
                        var e = Object.defineProperty;
                        Object.defineProperty = function (t, n, r) {
                            if (e)try {
                                return e(t, n, r)
                            } catch (e) {
                            }
                            if (t !== Object(t))throw TypeError("Object.defineProperty called on non-object");
                            return Object.prototype.__defineGetter__ && "get"in r && Object.prototype.__defineGetter__.call(t, n, r.get), Object.prototype.__defineSetter__ && "set"in r && Object.prototype.__defineSetter__.call(t, n, r.set), "value"in r && (t[n] = r.value), t
                        }
                    }
                }(), "function" != typeof Object.defineProperties && (Object.defineProperties = function (e, t) {
                    if (e !== Object(e))throw TypeError("Object.defineProperties called on non-object");
                    var n;
                    for (n in t)Object.prototype.hasOwnProperty.call(t, n) && Object.defineProperty(e, n, t[n]);
                    return e
                }), Object.keys || (Object.keys = function (e) {
                    if (e !== Object(e))throw TypeError("Object.keys called on non-object");
                    var t, n = [];
                    for (t in e)Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                    return n
                }), Function.prototype.bind || (Function.prototype.bind = function (e) {
                    function t() {
                    }

                    if ("function" != typeof this)throw TypeError("Bind must be called on a function");
                    var n = [].slice, r = n.call(arguments, 1), i = this, o = function () {
                        return i.apply(this instanceof t ? this : e, r.concat(n.call(arguments)))
                    };
                    return t.prototype = i.prototype, o.prototype = new t, o
                }), Array.isArray = Array.isArray || function (e) {
                        return Boolean(e && "[object Array]" === Object.prototype.toString.call(Object(e)))
                    }, Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
                    if (void 0 === this || null === this)throw TypeError();
                    var t = Object(this), n = t.length >>> 0;
                    if (0 === n)return -1;
                    var r = 0;
                    if (arguments.length > 0 && (r = Number(arguments[1]), isNaN(r) ? r = 0 : 0 !== r && r !== 1 / 0 && r !== -1 / 0 && (r = (r > 0 || -1) * Math.floor(Math.abs(r)))), r >= n)return -1;
                    for (var i = r >= 0 ? r : Math.max(n - Math.abs(r), 0); i < n; i++)if (i in t && t[i] === e)return i;
                    return -1
                }), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function (e) {
                    if (void 0 === this || null === this)throw TypeError();
                    var t = Object(this), n = t.length >>> 0;
                    if (0 === n)return -1;
                    var r = n;
                    arguments.length > 1 && ((r = Number(arguments[1])) !== r ? r = 0 : 0 !== r && r !== 1 / 0 && r !== -1 / 0 && (r = (r > 0 || -1) * Math.floor(Math.abs(r))));
                    for (var i = r >= 0 ? Math.min(r, n - 1) : n - Math.abs(r); i >= 0; i--)if (i in t && t[i] === e)return i;
                    return -1
                }), Array.prototype.every || (Array.prototype.every = function (e) {
                    if (void 0 === this || null === this)throw TypeError();
                    var t = Object(this), n = t.length >>> 0;
                    if ("function" != typeof e)throw TypeError();
                    var r, i = arguments[1];
                    for (r = 0; r < n; r++)if (r in t && !e.call(i, t[r], r, t))return !1;
                    return !0
                }), Array.prototype.some || (Array.prototype.some = function (e) {
                    if (void 0 === this || null === this)throw TypeError();
                    var t = Object(this), n = t.length >>> 0;
                    if ("function" != typeof e)throw TypeError();
                    var r, i = arguments[1];
                    for (r = 0; r < n; r++)if (r in t && e.call(i, t[r], r, t))return !0;
                    return !1
                }), Array.prototype.forEach || (Array.prototype.forEach = function (e) {
                    if (void 0 === this || null === this)throw TypeError();
                    var t = Object(this), n = t.length >>> 0;
                    if ("function" != typeof e)throw TypeError();
                    var r, i = arguments[1];
                    for (r = 0; r < n; r++)r in t && e.call(i, t[r], r, t)
                }), Array.prototype.map || (Array.prototype.map = function (e) {
                    if (void 0 === this || null === this)throw TypeError();
                    var t = Object(this), n = t.length >>> 0;
                    if ("function" != typeof e)throw TypeError();
                    var r = [];
                    r.length = n;
                    var i, o = arguments[1];
                    for (i = 0; i < n; i++)i in t && (r[i] = e.call(o, t[i], i, t));
                    return r
                }), Array.prototype.filter || (Array.prototype.filter = function (e) {
                    if (void 0 === this || null === this)throw TypeError();
                    var t = Object(this), n = t.length >>> 0;
                    if ("function" != typeof e)throw TypeError();
                    var r, i = [], o = arguments[1];
                    for (r = 0; r < n; r++)if (r in t) {
                        var s = t[r];
                        e.call(o, s, r, t) && i.push(s)
                    }
                    return i
                }), Array.prototype.reduce || (Array.prototype.reduce = function (e) {
                    if (void 0 === this || null === this)throw TypeError();
                    var t = Object(this), n = t.length >>> 0;
                    if ("function" != typeof e)throw TypeError();
                    if (0 === n && 1 === arguments.length)throw TypeError();
                    var r, i = 0;
                    if (arguments.length >= 2)r = arguments[1]; else for (; ;) {
                        if (i in t) {
                            r = t[i++];
                            break
                        }
                        if (++i >= n)throw TypeError()
                    }
                    for (; i < n;)i in t && (r = e.call(void 0, r, t[i], i, t)), i++;
                    return r
                }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function (e) {
                    if (void 0 === this || null === this)throw TypeError();
                    var t = Object(this), n = t.length >>> 0;
                    if ("function" != typeof e)throw TypeError();
                    if (0 === n && 1 === arguments.length)throw TypeError();
                    var r, i = n - 1;
                    if (arguments.length >= 2)r = arguments[1]; else for (; ;) {
                        if (i in this) {
                            r = this[i--];
                            break
                        }
                        if (--i < 0)throw TypeError()
                    }
                    for (; i >= 0;)i in t && (r = e.call(void 0, r, t[i], i, t)), i--;
                    return r
                }), String.prototype.trim || (String.prototype.trim = function () {
                    return String(this).replace(/^\s+/, "").replace(/\s+$/, "")
                }), Date.now || (Date.now = function () {
                    return Number(new Date)
                }), Date.prototype.toISOString || (Date.prototype.toISOString = function () {
                    function e(e) {
                        return ("00" + e).slice(-2)
                    }

                    return this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "." + function (e) {
                            return ("000" + e).slice(-3)
                        }(this.getUTCMilliseconds()) + "Z"
                }), "undefined" == typeof Element || "remove"in Element.prototype || (Element.prototype.remove = function () {
                    this.parentNode && this.parentNode.removeChild(this)
                })
            }, {"promise-polyfill": 4}], 35: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                Object.defineProperty(n, "__esModule", {value: !0}), n.Promised = void 0;
                var i = e("../Tracer");
                n.Promised = function e(t, n, o) {
                    var s = this;
                    r(this, e), this.status = "pending", this.processed = !1, this.result = null, this.promise = t, this.obj = n, console.info("Promised created with timeout: " + o);
                    var a = new Promise(function (e, n) {
                        var r = setTimeout(function () {
                            s.status = "failed", s.processed = !0, console.error("Promised: failed", {reason: "timeout"}), i.tracer.log("[PROMISED] [FAILED]"), n({reason: "timeout"})
                        }, o);
                        t.then(function (t) {
                            clearTimeout(r), s.status = "ready", s.result = t, console.log("Promised: fullfilled"), i.tracer.log("[PROMISED] [FULLFILLED]"), e(s.obj)
                        }).catch(function (e) {
                            s.status = "failed", s.result = e, console.error("Promised: failed", e), i.tracer.log("[PROMISED] [FAILED]"), n(e)
                        })
                    });
                    this.then = a.then.bind(a), this.catch = a.catch.bind(a)
                }
            }, {"../Tracer": 8}], 36: [function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0});
                n.States = {
                    CREATED: "Created",
                    READY: "Ready",
                    ERROR: "ERROR",
                    GENERAL_ERROR: "GENERAL ERROR",
                    RESPAWN: "Respawn",
                    COMPLETED: "Completed",
                    LOADING: "Loading",
                    LOADED: "Loaded",
                    PREPARING: "Preparing",
                    PARSING: "Parsing",
                    HANDSHAKED: "Handshake successful",
                    CAN_PLAY: "Can play video",
                    PLAYING: "Playing",
                    PAUSED: "Paused",
                    PLAYBACK_COMPLETED: "Playback is completed",
                    OBSERVING: "Proxy Observing"
                }
            }, {}], 37: [function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }

                Object.defineProperty(n, "__esModule", {value: !0});
                var i = function () {
                    function e(e, t) {
                        var n = [], r = !0, i = !1, o = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && a.return && a.return()
                            } finally {
                                if (i)throw o
                            }
                        }
                        return n
                    }

                    return function (t, n) {
                        if (Array.isArray(t))return t;
                        if (Symbol.iterator in Object(t))return e(t, n);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(), o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, s = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();
                n.Utils = function () {
                    function e() {
                        r(this, e)
                    }

                    return s(e, null, [{
                        key: "mergeObjects", value: function (t, n) {
                            for (var r in n)if (n.hasOwnProperty(r))try {
                                n[r].constructor === Object ? t[r] = e.mergeObjects(t[r], n[r]) : t[r] = n[r]
                            } catch (e) {
                                t[r] = n[r]
                            }
                            return t
                        }
                    }, {
                        key: "isFunction", value: function (e) {
                            return "[object Function]" === Object.prototype.toString.call(e)
                        }
                    }, {
                        key: "isArray", value: function (e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        }
                    }, {
                        key: "isObject", value: function (e) {
                            var t = void 0 === e ? "undefined" : o(e);
                            return ("function" === t || "object" === t) && !!e
                        }
                    }, {
                        key: "isBoolean", value: function (e) {
                            return !0 === e || !1 === e || "[object Boolean]" === Object.prototype.toString.call(e)
                        }
                    }, {
                        key: "isUrl", value: function (e) {
                            return "string" == typeof e
                        }
                    }, {
                        key: "fireBeacon", value: function (t) {
                            e.isUrl(t) && (new Image(1, 1).src = t)
                        }
                    }, {
                        key: "randomHash", value: function () {
                            var t = Math.floor(99999998 * Math.random()) + 1, n = (new Date).getTime();
                            return e.strToHashcode("" + (t + n))
                        }
                    }, {
                        key: "timestamp", value: function () {
                            return Math.floor((new Date).getTime() / 1e3)
                        }
                    }, {
                        key: "isObjectEmpty", value: function (e) {
                            if (null === e)return !1;
                            if (e instanceof Array || "string" == typeof e)return !e.length;
                            var t = new e.constructor;
                            for (var n in e)if (!(n in t) || e[n] !== t[n])return !1;
                            return !0
                        }
                    }, {
                        key: "safeStringify", value: function (e) {
                            var t = "";
                            try {
                                t = JSON.stringify(e)
                            } catch (e) {
                                t = "CIRCULAR OBJECT"
                            }
                            return t
                        }
                    }, {
                        key: "strToHashcode", value: function (e) {
                            return e.length ? e.split("").reduce(function (t, n, r) {
                                var i = t;
                                return i = (i << 5) - i + e.charCodeAt(r), i &= i
                            }, 0) : 0
                        }
                    }, {
                        key: "deepGet", value: function (t, n, r) {
                            if (void 0 === t || null === t)return r || null;
                            if (0 === n.length)return t;
                            var i = t[n[0]], o = n.slice(1);
                            return e.deepGet(i, o, r)
                        }
                    }, {
                        key: "extractHostname", value: function (e) {
                            var t = void 0;
                            if (e.indexOf("://") > -1) {
                                var n = e.split("/");
                                t = i(n, 3)[2]
                            } else {
                                var r = e.split("/");
                                t = i(r, 1)[0]
                            }
                            var o = t.split(":"), s = (t = i(o, 1)[0]).split("?");
                            return t = i(s, 1)[0]
                        }
                    }, {
                        key: "parentAccessible", value: function (e) {
                            try {
                                return !!e.parent.document
                            } catch (e) {
                                return !1
                            }
                        }
                    }]), e
                }()
            }, {}], 38: [function (e, t, n) {
                "use strict";
                (function () {
                    var e;
                    e = function () {
                        return function () {
                            this.id = null, this.sequence = null, this.system = null, this.title = null, this.description = null, this.advertiser = null, this.pricing = null, this.survey = null, this.errorURLTemplates = [], this.impressionURLTemplates = [], this.creatives = [], this.extensions = []
                        }
                    }(), t.exports = e
                }).call(void 0)
            }, {}], 39: [function (e, t, n) {
                "use strict";
                (function () {
                    var r, i, o;
                    i = e("./parser"), o = e("./util"), r = function () {
                        function e() {
                        }

                        return e.cappingFreeLunch = 0, e.cappingMinimumTimeInterval = 0, e.options = {
                            withCredentials: !1,
                            timeout: 0
                        }, e.get = function (e, t, r) {
                            var o, s, a, l;
                            if (s = +new Date, o = n.extend = function (e, t) {
                                    var n, r;
                                    for (n in t)r = t[n], e[n] = r;
                                    return e
                                }, r || ("function" == typeof t && (r = t), a = {}), a = o(this.options, t), this.totalCallsTimeout < s ? (this.totalCalls = 1, this.totalCallsTimeout = s + 36e5) : this.totalCalls++, !(this.cappingFreeLunch >= this.totalCalls)) {
                                if ((l = s - this.lastSuccessfullAd) < 0)this.lastSuccessfullAd = 0; else if (l < this.cappingMinimumTimeInterval)return void r(null, new Error("VAST call canceled Ã¢â‚¬â€œ (" + this.cappingMinimumTimeInterval + ")ms minimum interval reached"));
                                return i.parse(e, a, function (e, t) {
                                    return r(e, t)
                                })
                            }
                            r(null, new Error("VAST call canceled Ã¢â‚¬â€œ FreeLunch capping not reached yet " + this.totalCalls + "/" + this.cappingFreeLunch))
                        }, function () {
                            var t, n;
                            n = o.storage, t = Object.defineProperty, ["lastSuccessfullAd", "totalCalls", "totalCallsTimeout"].forEach(function (r) {
                                t(e, r, {
                                    get: function () {
                                        return n.getItem(r)
                                    }, set: function (e) {
                                        return n.setItem(r, e)
                                    }, configurable: !1, enumerable: !0
                                })
                            }), null == e.lastSuccessfullAd && (e.lastSuccessfullAd = 0), null == e.totalCalls && (e.totalCalls = 0), null == e.totalCallsTimeout && (e.totalCallsTimeout = 0)
                        }(), e
                    }(), t.exports = r
                }).call(void 0)
            }, {"./parser": 48, "./util": 54}], 40: [function (e, t, n) {
                "use strict";
                (function () {
                    var e;
                    e = function () {
                        return function () {
                            this.id = null, this.width = 0, this.height = 0, this.type = null, this.staticResource = null, this.htmlResource = null, this.iframeResource = null, this.altText = null, this.companionClickThroughURLTemplate = null, this.companionClickTrackingURLTemplates = [], this.trackingEvents = {}
                        }
                    }(), t.exports = e
                }).call(void 0)
            }, {}], 41: [function (e, t, n) {
                "use strict";
                (function () {
                    var e, n, r, i, o = function (e, t) {
                        function n() {
                            this.constructor = e
                        }

                        for (var r in t)s.call(t, r) && (e[r] = t[r]);
                        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                    }, s = {}.hasOwnProperty;
                    e = function () {
                        return function (e) {
                            null == e && (e = {}), this.id = e.id || null, this.adId = e.adId || null, this.sequence = e.sequence || null, this.apiFramework = e.apiFramework || null, this.trackingEvents = {}
                        }
                    }(), r = function (t) {
                        function n() {
                            n.__super__.constructor.apply(this, arguments), this.type = "linear", this.duration = 0, this.skipDelay = null, this.mediaFiles = [], this.videoClickThroughURLTemplate = null, this.videoClickTrackingURLTemplates = [], this.videoCustomClickURLTemplates = [], this.adParameters = null, this.icons = []
                        }

                        return o(n, e), n
                    }(), i = function (t) {
                        function n() {
                            n.__super__.constructor.apply(this, arguments), this.type = "nonlinear", this.variations = []
                        }

                        return o(n, e), n
                    }(), n = function (t) {
                        function n() {
                            n.__super__.constructor.apply(this, arguments), this.type = "companion", this.variations = []
                        }

                        return o(n, e), n
                    }(), t.exports = {VASTCreativeLinear: r, VASTCreativeNonLinear: i, VASTCreativeCompanion: n}
                }).call(void 0)
            }, {}], 42: [function (e, t, n) {
                "use strict";
                (function () {
                    var e;
                    e = function () {
                        return function () {
                            this.attributes = {}, this.children = []
                        }
                    }(), t.exports = e
                }).call(void 0)
            }, {}], 43: [function (e, t, n) {
                "use strict";
                (function () {
                    var e;
                    e = function () {
                        return function () {
                            this.name = null, this.value = null, this.attributes = {}
                        }
                    }(), t.exports = e
                }).call(void 0)
            }, {}], 44: [function (e, t, n) {
                "use strict";
                (function () {
                    var e;
                    e = function () {
                        return function () {
                            this.program = null, this.height = 0, this.width = 0, this.xPosition = 0, this.yPosition = 0, this.apiFramework = null, this.offset = null, this.duration = 0, this.type = null, this.staticResource = null, this.htmlResource = null, this.iframeResource = null, this.iconClickThroughURLTemplate = null, this.iconClickTrackingURLTemplates = [], this.iconViewTrackingURLTemplate = null
                        }
                    }(), t.exports = e
                }).call(void 0)
            }, {}], 45: [function (e, t, n) {
                "use strict";
                (function () {
                    t.exports = {client: e("./client"), tracker: e("./tracker"), parser: e("./parser"), util: e("./util")}
                }).call(void 0)
            }, {"./client": 39, "./parser": 48, "./tracker": 50, "./util": 54}], 46: [function (e, t, n) {
                "use strict";
                (function () {
                    var e;
                    e = function () {
                        return function () {
                            this.id = null, this.fileURL = null, this.deliveryType = "progressive", this.mimeType = null, this.codec = null, this.bitrate = 0, this.minBitrate = 0, this.maxBitrate = 0, this.width = 0, this.height = 0, this.apiFramework = null, this.scalable = null, this.maintainAspectRatio = null
                        }
                    }(), t.exports = e
                }).call(void 0)
            }, {}], 47: [function (e, t, n) {
                "use strict";
                (function () {
                    var e;
                    e = function () {
                        return function () {
                            this.id = null, this.width = 0, this.height = 0, this.expandedWidth = 0, this.expandedHeight = 0, this.scalable = !0, this.maintainAspectRatio = !0, this.minSuggestedDuration = 0, this.apiFramework = "static", this.type = null, this.staticResource = null, this.htmlResource = null, this.iframeResource = null, this.nonlinearClickThroughURLTemplate = null, this.nonlinearClickTrackingURLTemplates = [], this.adParameters = null
                        }
                    }(), t.exports = e
                }).call(void 0)
            }, {}], 48: [function (e, t, n) {
                "use strict";
                (function () {
                    var n, r, i, o, s, a, l, u, c, d, h, p, f, v, E, y = [].indexOf || function (e) {
                            for (var t = 0, n = this.length; t < n; t++)if (t in this && this[t] === e)return t;
                            return -1
                        };
                    r = e("./urlhandler"), v = e("./response"), i = e("./ad"), o = e("./extension"), s = e("./extensionchild"), E = e("./util"), u = e("./creative").VASTCreativeLinear, l = e("./creative").VASTCreativeCompanion, c = e("./creative").VASTCreativeNonLinear, h = e("./mediafile"), d = e("./icon"), a = e("./companionad"), p = e("./nonlinear"), n = e("events").EventEmitter, f = function () {
                        function e() {
                        }

                        var t;
                        return t = [], e.addURLTemplateFilter = function (e) {
                            "function" == typeof e && t.push(e)
                        }, e.removeURLTemplateFilter = function () {
                            return t.pop()
                        }, e.countURLTemplateFilters = function () {
                            return t.length
                        }, e.clearUrlTemplateFilters = function () {
                            return t = []
                        }, e.parse = function (e, t, n) {
                            return n || ("function" == typeof t && (n = t), t = {}), this._parse(e, null, t, function (e, t) {
                                return n(t, e)
                            })
                        }, e.load = function (e, t, n) {
                            return n || ("function" == typeof t && (n = t), t = {}), this.parseXmlDocument(null, [], t, e, n)
                        }, e.vent = new n, e.track = function (e, t) {
                            return this.vent.emit("VAST-error", t), E.track(e, t)
                        }, e.on = function (e, t) {
                            return this.vent.on(e, t)
                        }, e.once = function (e, t) {
                            return this.vent.once(e, t)
                        }, e.off = function (e, t) {
                            return this.vent.removeListener(e, t)
                        }, e._parse = function (e, n, i, o) {
                            var s, a, l;
                            for (o || ("function" == typeof i && (o = i), i = {}), a = 0, l = t.length; a < l; a++)s = t[a], e = s(e);
                            return null == n && (n = []), n.push(e), r.get(e, i, function (t) {
                                return function (r, s) {
                                    return null != r ? o(r) : t.parseXmlDocument(e, n, i, s, o)
                                }
                            }(this))
                        }, e.parseXmlDocument = function (t, n, r, i, o) {
                            var s, a, l, u, c, d, h, p, f, E, m;
                            if (m = new v, null == (null != i ? i.documentElement : void 0) || "VAST" !== i.documentElement.nodeName)return o(new Error("Invalid VAST XMLDocument"));
                            for (l = 0, c = (f = i.documentElement.childNodes).length; l < c; l++)"Error" === (p = f[l]).nodeName && m.errorURLTemplates.push(e.parseNodeText(p));
                            for (u = 0, d = (E = i.documentElement.childNodes).length; u < d; u++)"Ad" === (p = E[u]).nodeName && (null != (s = e.parseAdElement(p)) ? m.ads.push(s) : e.track(m.errorURLTemplates, {ERRORCODE: 101}));
                            for (a = function (t, n) {
                                var r, i, a, l;
                                if (null == t && (t = null), null == n && (n = !1), m) {
                                    for (a = !0, r = 0, i = (l = m.ads).length; r < i; r++) {
                                        if (null != (s = l[r]).nextWrapperURL)return;
                                        s.creatives.length > 0 && (a = !1)
                                    }
                                    return a && (n || e.track(m.errorURLTemplates, {ERRORCODE: 303})), 0 === m.ads.length && (m = null), o(t, m)
                                }
                            }, h = m.ads.length; h--;)null != (s = m.ads[h]).nextWrapperURL && function (i) {
                                var o;
                                n.length > (null !== r.wrapperLimit ? r.wrapperLimit : 9) || (o = i.nextWrapperURL, y.call(n, o) >= 0) ? (e.track(i.errorURLTemplates, {ERRORCODE: 302}), m.ads.splice(m.ads.indexOf(i), 1), a(new Error("Wrapper limit reached, as defined by the video player"))) : (null != t && (i.nextWrapperURL = e.resolveVastAdTagURI(i.nextWrapperURL, t)), e._parse(i.nextWrapperURL, n, r, function (t, n) {
                                    var r, o, s, l, u, c;
                                    if (r = !1, null != t)e.track(i.errorURLTemplates, {ERRORCODE: 301}), m.ads.splice(m.ads.indexOf(i), 1), r = !0; else if (null == n)e.track(i.errorURLTemplates, {ERRORCODE: 303}), m.ads.splice(m.ads.indexOf(i), 1), r = !0; else for (m.errorURLTemplates = m.errorURLTemplates.concat(n.errorURLTemplates), o = m.ads.indexOf(i), m.ads.splice(o, 1), s = 0, l = (u = n.ads).length; s < l; s++)c = u[s], e.mergeWrapperAdData(c, i), m.ads.splice(++o, 0, c);
                                    return delete i.nextWrapperURL, a(t, r)
                                }))
                            }(s);
                            return a()
                        }, e.resolveVastAdTagURI = function (e, t) {
                            return 0 === e.indexOf("//") ? "" + location.protocol + e : -1 === e.indexOf("://") ? t.slice(0, t.lastIndexOf("/")) + "/" + e : e
                        }, e.mergeWrapperAdData = function (e, t) {
                            var n, r, i, o, s, a, l, u, c, d, h, p, f, v, E, y, m, g, A, _, b;
                            for (e.errorURLTemplates = t.errorURLTemplates.concat(e.errorURLTemplates), e.impressionURLTemplates = t.impressionURLTemplates.concat(e.impressionURLTemplates), e.extensions = t.extensions.concat(e.extensions), e.maxExecutionTime = t.maxExecutionTime, o = 0, u = (p = e.creatives).length; o < u; o++)if (r = p[o], null != (null != (f = t.trackingEvents) ? f[r.type] : void 0)) {
                                v = t.trackingEvents[r.type];
                                for (i in v)b = v[i], (n = r.trackingEvents)[i] || (n[i] = []), r.trackingEvents[i] = r.trackingEvents[i].concat(b)
                            }
                            if (null != (E = t.videoClickTrackingURLTemplates) ? E.length : void 0)for (s = 0, c = (y = e.creatives).length; s < c; s++)"linear" === (r = y[s]).type && (r.videoClickTrackingURLTemplates = r.videoClickTrackingURLTemplates.concat(t.videoClickTrackingURLTemplates));
                            if (null != (m = t.videoCustomClickURLTemplates) ? m.length : void 0)for (a = 0, d = (g = e.creatives).length; a < d; a++)"linear" === (r = g[a]).type && (r.videoCustomClickURLTemplates = r.videoCustomClickURLTemplates.concat(t.videoCustomClickURLTemplates));
                            if (null != t.videoClickThroughURLTemplate) {
                                for (_ = [], l = 0, h = (A = e.creatives).length; l < h; l++)"linear" === (r = A[l]).type && null == r.videoClickThroughURLTemplate ? _.push(r.videoClickThroughURLTemplate = t.videoClickThroughURLTemplate) : _.push(void 0);
                                return _
                            }
                        }, e.childByName = function (e, t) {
                            var n, r, i, o;
                            for (r = 0, i = (o = e.childNodes).length; r < i; r++)if ((n = o[r]).nodeName === t)return n
                        }, e.childsByName = function (e, t) {
                            var n, r, i, o, s;
                            for (r = [], i = 0, o = (s = e.childNodes).length; i < o; i++)(n = s[i]).nodeName === t && r.push(n);
                            return r
                        }, e.parseAdElement = function (e) {
                            var t, n, r, i, o;
                            for (n = 0, r = (i = e.childNodes).length; n < r; n++)if (t = i[n], "Wrapper" === (o = t.nodeName) || "InLine" === o) {
                                if (this.copyNodeAttribute("id", e, t), this.copyNodeAttribute("sequence", e, t), "Wrapper" === t.nodeName)return this.parseWrapperElement(t);
                                if ("InLine" === t.nodeName)return this.parseInLineElement(t)
                            }
                        }, e.parseWrapperElement = function (e) {
                            var t, n, r, i, o, s, a, l, u, c, d, h, p, f, v, E, y, m, g, A, _, b, T;
                            for ((t = this.parseInLineElement(e)).maxExecutionTime = null !== t.maxExecutionTime && void 0 !== t.maxExecutionTime ? t.maxExecutionTime : parseInt(e.getAttribute("maxExecutionTime"), 10) || null, null != (T = this.childByName(e, "VASTAdTagURI")) ? t.nextWrapperURL = this.parseNodeText(T) : null != (T = this.childByName(e, "VASTAdTagURL")) && (t.nextWrapperURL = this.parseNodeText(this.childByName(T, "URL"))), o = 0, c = (v = t.creatives).length; o < c; o++)if (b = v[o], "linear" === (E = b.type) || "nonlinear" === E) {
                                if (null != b.trackingEvents) {
                                    t.trackingEvents || (t.trackingEvents = {}), (n = t.trackingEvents)[f = b.type] || (n[f] = {}), y = b.trackingEvents;
                                    for (i in y)for (_ = y[i], (r = t.trackingEvents[b.type])[i] || (r[i] = []), a = 0, d = _.length; a < d; a++)A = _[a], t.trackingEvents[b.type][i].push(A)
                                }
                                if (null != b.videoClickTrackingURLTemplates)for (t.videoClickTrackingURLTemplates || (t.videoClickTrackingURLTemplates = []), l = 0, h = (m = b.videoClickTrackingURLTemplates).length; l < h; l++)s = m[l], t.videoClickTrackingURLTemplates.push(s);
                                if (null != b.videoClickThroughURLTemplate && (t.videoClickThroughURLTemplate = b.videoClickThroughURLTemplate), null != b.videoCustomClickURLTemplates)for (t.videoCustomClickURLTemplates || (t.videoCustomClickURLTemplates = []), u = 0, p = (g = b.videoCustomClickURLTemplates).length; u < p; u++)s = g[u], t.videoCustomClickURLTemplates.push(s)
                            }
                            if (null != t.nextWrapperURL)return t
                        }, e.parseInLineElement = function (e) {
                            var t, n, r, o, s, a, l, u, c, d, h, p, f, v, E;
                            for ((t = new i).id = e.getAttribute("id") || null, t.sequence = e.getAttribute("sequence") || null, a = 0, c = (f = e.childNodes).length; a < c; a++)switch ((p = f[a]).nodeName) {
                                case"Error":
                                    t.errorURLTemplates.push(this.parseNodeText(p));
                                    break;
                                case"Impression":
                                    t.impressionURLTemplates.push(this.parseNodeText(p));
                                    break;
                                case"Creatives":
                                    for (l = 0, d = (v = this.childsByName(p, "Creative")).length; l < d; l++)for (r = {
                                        id: (o = v[l]).getAttribute("id") || null,
                                        adId: this.parseCreativeAdIdAttribute(o),
                                        sequence: o.getAttribute("sequence") || null,
                                        apiFramework: o.getAttribute("apiFramework") || null
                                    }, u = 0, h = (E = o.childNodes).length; u < h; u++)switch ((s = E[u]).nodeName) {
                                        case"Linear":
                                            (n = this.parseCreativeLinearElement(s, r)) && t.creatives.push(n);
                                            break;
                                        case"NonLinearAds":
                                            (n = this.parseNonLinear(s, r)) && t.creatives.push(n);
                                            break;
                                        case"CompanionAds":
                                            (n = this.parseCompanionAd(s, r)) && t.creatives.push(n)
                                    }
                                    break;
                                case"Extensions":
                                    this.parseExtension(t.extensions, this.childsByName(p, "Extension"));
                                    break;
                                case"AdSystem":
                                    t.system = {value: this.parseNodeText(p), version: p.getAttribute("version") || null};
                                    break;
                                case"AdTitle":
                                    t.title = this.parseNodeText(p);
                                    break;
                                case"Description":
                                    t.description = this.parseNodeText(p);
                                    break;
                                case"Advertiser":
                                    t.advertiser = this.parseNodeText(p);
                                    break;
                                case"Pricing":
                                    t.pricing = {
                                        value: this.parseNodeText(p),
                                        model: p.getAttribute("model") || null,
                                        currency: p.getAttribute("currency") || null
                                    };
                                    break;
                                case"Survey":
                                    t.survey = this.parseNodeText(p)
                            }
                            return t
                        }, e.parseExtension = function (e, t) {
                            var n, r, i, a, l, u, c, d, h, p, f, v, E, y, m, g, A, _, b;
                            for (_ = [], c = 0, f = t.length; c < f; c++) {
                                if (l = t[c], r = new o, l.attributes)for (d = 0, v = (m = l.attributes).length; d < v; d++)u = m[d], r.attributes[u.nodeName] = u.nodeValue;
                                for (h = 0, E = (g = l.childNodes).length; h < E; h++)if (n = g[h], b = this.parseNodeText(n), "#comment" !== n.nodeName && "" !== b) {
                                    if (i = new s, i.name = n.nodeName, i.value = b, n.attributes)for (p = 0, y = (A = n.attributes).length; p < y; p++)a = A[p], i.attributes[a.nodeName] = a.nodeValue;
                                    r.children.push(i)
                                }
                                _.push(e.push(r))
                            }
                            return _
                        }, e.parseCreativeLinearElement = function (e, t) {
                            var n, r, i, o, s, a, l, c, p, f, v, E, y, m, g, A, _, b, T, R, C, P, k, S, O, L, D, I, w, N, M, V, U, x, j, F, H, B, Y, G, K, W, q, z, Q, X, $, Z, J, ee, te, ne, re, ie, oe, se, ae, le, ue;
                            if (o = new u(t), o.duration = this.parseDuration(this.parseNodeText(this.childByName(e, "Duration"))), null == (ie = e.getAttribute("skipoffset")) ? o.skipDelay = null : "%" === ie.charAt(ie.length - 1) ? (B = parseInt(ie, 10), o.skipDelay = o.duration * (B / 100)) : o.skipDelay = this.parseDuration(ie), null != (ue = this.childByName(e, "VideoClicks"))) {
                                for (o.videoClickThroughURLTemplate = this.parseNodeText(this.childByName(ue, "ClickThrough")), c = 0, b = (K = this.childsByName(ue, "ClickTracking")).length; c < b; c++)i = K[c], o.videoClickTrackingURLTemplates.push(this.parseNodeText(i));
                                for (g = 0, T = (W = this.childsByName(ue, "CustomClick")).length; g < T; g++)s = W[g], o.videoCustomClickURLTemplates.push(this.parseNodeText(s))
                            }
                            for (null != (n = this.childByName(e, "AdParameters")) && (o.adParameters = this.parseNodeText(n)), A = 0, C = (z = this.childsByName(e, "TrackingEvents")).length; A < C; A++)for (ae = z[A], _ = 0, P = (Q = this.childsByName(ae, "Tracking")).length; _ < P; _++)if (se = Q[_], a = se.getAttribute("event"), le = this.parseNodeText(se), null != a && null != le) {
                                if ("progress" === a) {
                                    if (!(F = se.getAttribute("offset")))continue;
                                    a = "%" === F.charAt(F.length - 1) ? "progress-" + F : "progress-" + Math.round(this.parseDuration(F))
                                }
                                null == (r = o.trackingEvents)[a] && (r[a] = []), o.trackingEvents[a].push(le)
                            }
                            for (w = 0, k = (X = this.childsByName(e, "MediaFiles")).length; w < k; w++)for (U = X[w], x = 0, S = ($ = this.childsByName(U, "MediaFile")).length; x < S; x++)V = $[x], (M = new h).id = V.getAttribute("id"), M.fileURL = this.parseNodeText(V), M.deliveryType = V.getAttribute("delivery"), M.codec = V.getAttribute("codec"), M.mimeType = V.getAttribute("type"), M.apiFramework = V.getAttribute("apiFramework"), M.bitrate = parseInt(V.getAttribute("bitrate") || 0), M.minBitrate = parseInt(V.getAttribute("minBitrate") || 0), M.maxBitrate = parseInt(V.getAttribute("maxBitrate") || 0), M.width = parseInt(V.getAttribute("width") || 0), M.height = parseInt(V.getAttribute("height") || 0), (re = V.getAttribute("scalable")) && "string" == typeof re && ("true" === (re = re.toLowerCase()) ? M.scalable = !0 : "false" === re && (M.scalable = !1)), (N = V.getAttribute("maintainAspectRatio")) && "string" == typeof N && ("true" === (N = N.toLowerCase()) ? M.maintainAspectRatio = !0 : "false" === N && (M.maintainAspectRatio = !1)), o.mediaFiles.push(M);
                            if (null != (y = this.childByName(e, "Icons")))for (j = 0, O = (Z = this.childsByName(y, "Icon")).length; j < O; j++) {
                                for (E = Z[j], (p = new d).program = E.getAttribute("program"), p.height = parseInt(E.getAttribute("height") || 0), p.width = parseInt(E.getAttribute("width") || 0), p.xPosition = this.parseXPosition(E.getAttribute("xPosition")), p.yPosition = this.parseYPosition(E.getAttribute("yPosition")), p.apiFramework = E.getAttribute("apiFramework"), p.offset = this.parseDuration(E.getAttribute("offset")), p.duration = this.parseDuration(E.getAttribute("duration")), H = 0, L = (J = this.childsByName(E, "HTMLResource")).length; H < L; H++)l = J[H], p.type = l.getAttribute("creativeType") || "text/html", p.htmlResource = this.parseNodeText(l);
                                for (Y = 0, D = (ee = this.childsByName(E, "IFrameResource")).length; Y < D; Y++)m = ee[Y], p.type = m.getAttribute("creativeType") || 0, p.iframeResource = this.parseNodeText(m);
                                for (G = 0, I = (te = this.childsByName(E, "StaticResource")).length; G < I; G++)oe = te[G], p.type = oe.getAttribute("creativeType") || 0, p.staticResource = this.parseNodeText(oe);
                                if (null != (v = this.childByName(E, "IconClicks")))for (p.iconClickThroughURLTemplate = this.parseNodeText(this.childByName(v, "IconClickThrough")), ne = 0, R = (q = this.childsByName(v, "IconClickTracking")).length; ne < R; ne++)f = q[ne], p.iconClickTrackingURLTemplates.push(this.parseNodeText(f));
                                p.iconViewTrackingURLTemplate = this.parseNodeText(this.childByName(E, "IconViewTracking")), o.icons.push(p)
                            }
                            return o
                        }, e.parseNonLinear = function (e, t) {
                            var n, r, i, o, s, a, l, u, d, h, f, v, E, y, m, g, A, _, b, T, R, C, P, k, S, O, L, D, I, w, N, M, V, U;
                            for (o = new c(t), l = 0, v = (k = this.childsByName(e, "TrackingEvents")).length; l < v; l++)for (V = k[l], d = 0, E = (S = this.childsByName(V, "Tracking")).length; d < E; d++)s = (M = S[d]).getAttribute("event"), U = this.parseNodeText(M), null != s && null != U && (null == (r = o.trackingEvents)[s] && (r[s] = []), o.trackingEvents[s].push(U));
                            for (h = 0, y = (O = this.childsByName(e, "NonLinear")).length; h < y; h++) {
                                for (C = O[h], (R = new p).id = C.getAttribute("id") || null, R.width = C.getAttribute("width"), R.height = C.getAttribute("height"), R.expandedWidth = C.getAttribute("expandedWidth"), R.expandedHeight = C.getAttribute("expandedHeight"), R.scalable = this.parseBoolean(C.getAttribute("scalable")), R.maintainAspectRatio = this.parseBoolean(C.getAttribute("maintainAspectRatio")), R.minSuggestedDuration = this.parseDuration(C.getAttribute("minSuggestedDuration")), R.apiFramework = C.getAttribute("apiFramework"), f = 0, m = (L = this.childsByName(C, "HTMLResource")).length; f < m; f++)a = L[f], R.type = a.getAttribute("creativeType") || "text/html", R.htmlResource = this.parseNodeText(a);
                                for (b = 0, g = (D = this.childsByName(C, "IFrameResource")).length; b < g; b++)u = D[b], R.type = u.getAttribute("creativeType") || 0, R.iframeResource = this.parseNodeText(u);
                                for (T = 0, A = (I = this.childsByName(C, "StaticResource")).length; T < A; T++)N = I[T], R.type = N.getAttribute("creativeType") || 0, R.staticResource = this.parseNodeText(N);
                                for (null != (n = this.childByName(C, "AdParameters")) && (R.adParameters = this.parseNodeText(n)), R.nonlinearClickThroughURLTemplate = this.parseNodeText(this.childByName(C, "NonLinearClickThrough")), P = 0, _ = (w = this.childsByName(C, "NonLinearClickTracking")).length; P < _; P++)i = w[P], R.nonlinearClickTrackingURLTemplates.push(this.parseNodeText(i));
                                o.variations.push(R)
                            }
                            return o
                        }, e.parseCompanionAd = function (e, t) {
                            var n, r, i, o, s, u, c, d, h, p, f, v, E, y, m, g, A, _, b, T, R, C, P, k, S, O, L, D, I, w, N, M, V, U, x, j, F;
                            for (u = new l(t), h = 0, y = (O = this.childsByName(e, "Companion")).length; h < y; h++) {
                                for (s = O[h], (o = new a).id = s.getAttribute("id") || null, o.width = s.getAttribute("width"), o.height = s.getAttribute("height"), o.companionClickTrackingURLTemplates = [], f = 0, m = (L = this.childsByName(s, "HTMLResource")).length; f < m; f++)d = L[f], o.type = d.getAttribute("creativeType") || "text/html", o.htmlResource = this.parseNodeText(d);
                                for (v = 0, g = (D = this.childsByName(s, "IFrameResource")).length; v < g; v++)p = D[v], o.type = p.getAttribute("creativeType") || 0, o.iframeResource = this.parseNodeText(p);
                                for (E = 0, A = (I = this.childsByName(s, "StaticResource")).length; E < A; E++) {
                                    for (U = I[E], o.type = U.getAttribute("creativeType") || 0, C = 0, _ = (w = this.childsByName(s, "AltText")).length; C < _; C++)r = w[C], o.altText = this.parseNodeText(r);
                                    o.staticResource = this.parseNodeText(U)
                                }
                                for (P = 0, b = (N = this.childsByName(s, "TrackingEvents")).length; P < b; P++)for (j = N[P], k = 0, T = (M = this.childsByName(j, "Tracking")).length; k < T; k++)c = (x = M[k]).getAttribute("event"), F = this.parseNodeText(x), null != c && null != F && (null == (n = o.trackingEvents)[c] && (n[c] = []), o.trackingEvents[c].push(F));
                                for (S = 0, R = (V = this.childsByName(s, "CompanionClickTracking")).length; S < R; S++)i = V[S], o.companionClickTrackingURLTemplates.push(this.parseNodeText(i));
                                o.companionClickThroughURLTemplate = this.parseNodeText(this.childByName(s, "CompanionClickThrough")), o.companionClickTrackingURLTemplate = this.parseNodeText(this.childByName(s, "CompanionClickTracking")), u.variations.push(o)
                            }
                            return u
                        }, e.parseDuration = function (e) {
                            var t, n, r, i, o;
                            return null == e ? -1 : E.isNumeric(e) ? parseInt(e) : 3 !== (t = e.split(":")).length ? -1 : (o = t[2].split("."), i = parseInt(o[0]), 2 === o.length && (i += parseFloat("0." + o[1])), r = parseInt(60 * t[1]), n = parseInt(60 * t[0] * 60), isNaN(n) || isNaN(r) || isNaN(i) || r > 3600 || i > 60 ? -1 : n + r + i)
                        }, e.parseXPosition = function (e) {
                            return "left" === e || "right" === e ? e : parseInt(e || 0)
                        }, e.parseYPosition = function (e) {
                            return "top" === e || "bottom" === e ? e : parseInt(e || 0)
                        }, e.parseBoolean = function (e) {
                            return "true" === e || "TRUE" === e || "1" === e
                        }, e.parseNodeText = function (e) {
                            return e && (e.textContent || e.text || "").trim()
                        }, e.copyNodeAttribute = function (e, t, n) {
                            var r;
                            if (r = t.getAttribute(e))return n.setAttribute(e, r)
                        }, e.parseCreativeAdIdAttribute = function (e) {
                            return e.getAttribute("AdID") || e.getAttribute("adID") || e.getAttribute("adId") || null
                        }, e
                    }(), t.exports = f
                }).call(void 0)
            }, {
                "./ad": 38,
                "./companionad": 40,
                "./creative": 41,
                "./extension": 42,
                "./extensionchild": 43,
                "./icon": 44,
                "./mediafile": 46,
                "./nonlinear": 47,
                "./response": 49,
                "./urlhandler": 51,
                "./util": 54,
                events: 2
            }], 49: [function (e, t, n) {
                "use strict";
                (function () {
                    var e;
                    e = function () {
                        return function () {
                            this.ads = [], this.errorURLTemplates = []
                        }
                    }(), t.exports = e
                }).call(void 0)
            }, {}], 50: [function (e, t, n) {
                "use strict";
                (function () {
                    var n, r, i, o, s, a, l, u = function (e, t) {
                        function n() {
                            this.constructor = e
                        }

                        for (var r in t)c.call(t, r) && (e[r] = t[r]);
                        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                    }, c = {}.hasOwnProperty;
                    r = e("./client"), l = e("./util"), o = e("./creative").VASTCreativeLinear, s = e("./nonlinear"), i = e("./companionad"), n = e("events").EventEmitter, a = function (e) {
                        function t(e, t, n) {
                            var a, l, u;
                            this.ad = e, this.creative = t, this.variation = null != n ? n : null, this.muted = !1, this.impressed = !1, this.skipable = !1, this.skipDelayDefault = -1, this.trackingEvents = {}, this.emitAlwaysEvents = ["creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "resume", "pause", "rewind", "skip", "closeLinear", "close"], u = this.creative.trackingEvents;
                            for (a in u)l = u[a], this.trackingEvents[a] = l.slice(0);
                            this.creative instanceof o ? (this.setDuration(this.creative.duration), this.skipDelay = this.creative.skipDelay, this.linear = !0, this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate, this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates) : (this.skipDelay = -1, this.linear = !1, this.variation && (this.variation instanceof s ? (this.clickThroughURLTemplate = this.variation.nonlinearClickThroughURLTemplate, this.clickTrackingURLTemplates = this.variation.nonlinearClickTrackingURLTemplates) : this.variation instanceof i && (this.clickThroughURLTemplate = this.variation.companionClickThroughURLTemplate, this.clickTrackingURLTemplates = this.variation.companionClickTrackingURLTemplates))), this.on("start", function () {
                                r.lastSuccessfullAd = +new Date
                            })
                        }

                        return u(t, n), t.off = function (e, t) {
                            return this.removeListener(e, t)
                        }, t.prototype.setDuration = function (e) {
                            return this.assetDuration = e, this.quartiles = {
                                firstQuartile: Math.round(25 * this.assetDuration) / 100,
                                midpoint: Math.round(50 * this.assetDuration) / 100,
                                thirdQuartile: Math.round(75 * this.assetDuration) / 100
                            }
                        }, t.prototype.setProgress = function (e) {
                            var t, n, r, i, o, s, a, l, u;
                            if (-1 === (l = null === this.skipDelay ? this.skipDelayDefault : this.skipDelay) || this.skipable || (l > e ? this.emit("skip-countdown", l - e) : (this.skipable = !0, this.emit("skip-countdown", 0))), this.linear && this.assetDuration > 0) {
                                if (n = [], e > 0) {
                                    o = Math.round(e / this.assetDuration * 100), n.push("progress-" + o + "%"), n.push("progress-" + Math.round(e)), a = this.quartiles;
                                    for (s in a)(u = a[s]) <= e && e <= u + 1 && n.push(s)
                                }
                                for (r = 0, i = n.length; r < i; r++)t = n[r], this.track(t, !0);
                                e < this.progress && this.track("rewind")
                            }
                            return this.progress = e
                        }, t.prototype.setMuted = function (e) {
                            return this.muted !== e && this.track(e ? "mute" : "unmute"), this.muted = e
                        }, t.prototype.setPaused = function (e) {
                            return this.paused !== e && this.track(e ? "pause" : "resume"), this.paused = e
                        }, t.prototype.setFullscreen = function (e) {
                            return this.fullscreen !== e && this.track(e ? "fullscreen" : "exitFullscreen"), this.fullscreen = e
                        }, t.prototype.setExpand = function (e) {
                            return this.expanded !== e && this.track(e ? "expand" : "collapse"), this.expanded = e
                        }, t.prototype.setSkipDelay = function (e) {
                            if ("number" == typeof e)return this.skipDelay = e
                        }, t.prototype.load = function () {
                            if (!this.impressed)return this.impressed = !0, this.trackURLs(this.ad.impressionURLTemplates), this.track("creativeView")
                        }, t.prototype.errorWithCode = function (e) {
                            return this.trackURLs(this.ad.errorURLTemplates, {ERRORCODE: e})
                        }, t.prototype.complete = function () {
                            return this.track("complete")
                        }, t.prototype.close = function () {
                            return this.track(this.linear ? "closeLinear" : "close")
                        }, t.prototype.stop = function () {
                        }, t.prototype.skip = function () {
                            return this.track("skip"), this.trackingEvents = []
                        }, t.prototype.click = function () {
                            var e, t, n;
                            if ((null != (t = this.clickTrackingURLTemplates) ? t.length : void 0) && this.trackURLs(this.clickTrackingURLTemplates), null != this.clickThroughURLTemplate)return this.linear && (n = {CONTENTPLAYHEAD: this.progressFormated()}), e = l.resolveURLTemplates([this.clickThroughURLTemplate], n)[0], this.emit("clickthrough", e)
                        }, t.prototype.track = function (e, t) {
                            var n, r;
                            null == t && (t = !1), "closeLinear" === e && null == this.trackingEvents[e] && null != this.trackingEvents.close && (e = "close"), r = this.trackingEvents[e], n = this.emitAlwaysEvents.indexOf(e), null != r ? (this.emit(e, ""), this.trackURLs(r)) : -1 !== n && this.emit(e, ""), !0 === t && (delete this.trackingEvents[e], n > -1 && this.emitAlwaysEvents.splice(n, 1))
                        }, t.prototype.trackURLs = function (e, t) {
                            var n;
                            return null == t && (t = {}), this.linear && (null != (null != (n = this.creative.mediaFiles[0]) ? n.fileURL : void 0) && (t.ASSETURI = this.creative.mediaFiles[0].fileURL), t.CONTENTPLAYHEAD = this.progressFormated()), l.track(e, t)
                        }, t.prototype.progressFormated = function () {
                            var e, t, n, r, i;
                            return i = parseInt(this.progress), (e = i / 3600).length < 2 && (e = "0" + e), (t = i / 60 % 60).length < 2 && (t = "0" + t), (r = i % 60).length < 2 && (r = "0" + t), n = parseInt(100 * (this.progress - i)), e + ":" + t + ":" + r + "." + n
                        }, t
                    }(), t.exports = a
                }).call(void 0)
            }, {"./client": 39, "./companionad": 40, "./creative": 41, "./nonlinear": 47, "./util": 54, events: 2}], 51: [function (e, t, n) {
                "use strict";
                (function () {
                    var n, r, i;
                    i = e("./urlhandlers/xmlhttprequest"), r = e("./urlhandlers/flash"), n = function () {
                        function t() {
                        }

                        return t.get = function (t, n, o) {
                            var s, a;
                            return o || ("function" == typeof n && (o = n), n = {}), null != n.response ? (a = n.response, delete n.response, o(null, a)) : (null != (s = n.urlhandler) ? s.supported() : void 0) ? n.urlhandler.get(t, n, o) : "undefined" == typeof window || null === window ? e("./urlhandlers/node").get(t, n, o) : i.supported() ? i.get(t, n, o) : r.supported() ? r.get(t, n, o) : o(new Error("Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"))
                        }, t
                    }(), t.exports = n
                }).call(void 0)
            }, {"./urlhandlers/flash": 52, "./urlhandlers/xmlhttprequest": 53}], 52: [function (e, t, n) {
                "use strict";
                (function () {
                    var e;
                    e = function () {
                        function e() {
                        }

                        return e.xdr = function () {
                            var e;
                            return window.XDomainRequest && (e = new XDomainRequest), e
                        }, e.supported = function () {
                            return !!this.xdr()
                        }, e.get = function (e, t, n) {
                            var r, i;
                            return (i = "function" == typeof window.ActiveXObject ? new window.ActiveXObject("Microsoft.XMLDOM") : void 0) ? (i.async = !1, (r = this.xdr()).open("GET", e), r.timeout = t.timeout || 0, r.withCredentials = t.withCredentials || !1, r.send(), r.onprogress = function () {
                            }, r.onload = function () {
                                return i.loadXML(r.responseText), n(null, i)
                            }) : n(new Error("FlashURLHandler: Microsoft.XMLDOM format not supported"))
                        }, e
                    }(), t.exports = e
                }).call(void 0)
            }, {}], 53: [function (e, t, n) {
                "use strict";
                (function () {
                    var e;
                    e = function () {
                        function e() {
                        }

                        return e.xhr = function () {
                            var e;
                            if ("withCredentials"in(e = new window.XMLHttpRequest))return e
                        }, e.supported = function () {
                            return !!this.xhr()
                        }, e.get = function (e, t, n) {
                            var r;
                            if ("https:" === window.location.protocol && 0 === e.indexOf("http://"))return n(new Error("XHRURLHandler: Cannot go from HTTPS to HTTP."));
                            try {
                                return (r = this.xhr()).open("GET", e), r.timeout = t.timeout || 0, r.withCredentials = t.withCredentials || !1, r.overrideMimeType && r.overrideMimeType("text/xml"), r.onreadystatechange = function () {
                                    if (4 === r.readyState)return 200 === r.status ? n(null, r.responseXML) : n(new Error("XHRURLHandler: " + r.statusText))
                                }, r.send()
                            } catch (e) {
                                return n(new Error("XHRURLHandler: Unexpected error"))
                            }
                        }, e
                    }(), t.exports = e
                }).call(void 0)
            }, {}], 54: [function (e, t, n) {
                "use strict";
                (function () {
                    var e;
                    e = function () {
                        function e() {
                        }

                        return e.track = function (e, t) {
                            var n, r, i, o, s, a;
                            for (a = [], o = 0, s = (r = this.resolveURLTemplates(e, t)).length; o < s; o++)n = r[o], "undefined" != typeof window && null !== window && (i = new Image, a.push(i.src = n));
                            return a
                        }, e.resolveURLTemplates = function (e, t) {
                            var n, r, i, o, s, a, l, u, c;
                            for (null == t && (t = {}), r = [], null != t.ASSETURI && (t.ASSETURI = this.encodeURIComponentRFC3986(t.ASSETURI)), null != t.CONTENTPLAYHEAD && (t.CONTENTPLAYHEAD = this.encodeURIComponentRFC3986(t.CONTENTPLAYHEAD)), null == t.ERRORCODE || /^[0-9]{3}$/.test(t.ERRORCODE) || (t.ERRORCODE = 900), t.CACHEBUSTING = this.leftpad(Math.round(1e8 * Math.random()).toString()), t.TIMESTAMP = this.encodeURIComponentRFC3986((new Date).toISOString()), t.RANDOM = t.random = t.CACHEBUSTING, i = 0, s = e.length; i < s; i++)if (n = e[i], u = n) {
                                for (o in t)c = t[o], a = "[" + o + "]", l = "%%" + o + "%%", u = (u = u.replace(a, c)).replace(l, c);
                                r.push(u)
                            }
                            return r
                        }, e.encodeURIComponentRFC3986 = function (e) {
                            return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
                                return "%" + e.charCodeAt(0).toString(16)
                            })
                        }, e.leftpad = function (e) {
                            return e.length < 8 ? function () {
                                var t, n, r;
                                for (r = [], t = 0, n = 8 - e.length; 0 <= n ? t < n : t > n; 0 <= n ? t++ : t--)r.push("0");
                                return r
                            }().join("") + e : e
                        }, e.storage = function () {
                            var e, t, n;
                            try {
                                n = "undefined" != typeof window && null !== window ? window.localStorage || window.sessionStorage : null
                            } catch (e) {
                                e, n = null
                            }
                            return t = function (e) {
                                var t;
                                try {
                                    if (t = "__VASTUtil__", e.setItem(t, t), e.getItem(t) !== t)return !0
                                } catch (e) {
                                    return e, !0
                                }
                                return !1
                            }, (null == n || t(n)) && (e = {}, n = {
                                length: 0, getItem: function (t) {
                                    return e[t]
                                }, setItem: function (t, n) {
                                    e[t] = n, this.length = Object.keys(e).length
                                }, removeItem: function (t) {
                                    delete e[t], this.length = Object.keys(e).length
                                }, clear: function () {
                                    e = {}, this.length = 0
                                }
                            }), n
                        }(), e.isNumeric = function (e) {
                            return !isNaN(parseFloat(e)) && isFinite(e)
                        }, e
                    }(), t.exports = e
                }).call(void 0)
            }, {}], 55: [function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0});
                n.EVAM_VERSION = "v2.2.13"
            }, {}]
        }, {}, [5]);
    };
    SOURCE();
})();
