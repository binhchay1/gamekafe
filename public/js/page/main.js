window.NREUM || (NREUM = {});
NREUM.info = {
    "beacon": "bam.nr-data.net",
    "errorBeacon": "bam.nr-data.net",
    "licenseKey": "64ea7759b2",
    "applicationID": "2972689",
    "transactionName": "eltWERRfXFtVQB5cQFxZS0oPXlRSSA==",
    "queueTime": 1,
    "applicationTime": 217,
    "agent": ""
}

    (window.NREUM || (NREUM = {})).init = {
    ajax: {
        deny_list: ["bam.nr-data.net"]
    }
};
(window.NREUM || (NREUM = {})).loader_config = {
    xpid: "VwcCU1ZVGwEJU1NUDwg=",
    licenseKey: "64ea7759b2",
    applicationID: "2972689"
};; /*! For license information please see nr-loader-full-1.236.0.min.js.LICENSE.txt */
(() => {
    "use strict";
    var e, t, r = {
        5763: (e, t, r) => {
            r.d(t, {
                P_: () => f,
                Mt: () => g,
                C5: () => s,
                DL: () => m,
                OP: () => _,
                lF: () => T,
                Yu: () => y,
                Dg: () => h,
                CX: () => c,
                GE: () => b,
                sU: () => D
            });
            var n = r(8632),
                i = r(9567);
            const o = {
                beacon: n.ce.beacon,
                errorBeacon: n.ce.errorBeacon,
                licenseKey: void 0,
                applicationID: void 0,
                sa: void 0,
                queueTime: void 0,
                applicationTime: void 0,
                ttGuid: void 0,
                user: void 0,
                account: void 0,
                product: void 0,
                extra: void 0,
                jsAttributes: {},
                userAttributes: void 0,
                atts: void 0,
                transactionName: void 0,
                tNamePlain: void 0
            },
                a = {};

            function s(e) {
                if (!e)
                    throw new Error("All info objects require an agent identifier!");
                if (!a[e])
                    throw new Error("Info for ".concat(e, " was never set"));
                return a[e]
            }

            function c(e, t) {
                if (!e)
                    throw new Error("All info objects require an agent identifier!");
                a[e] = (0,
                    i.D)(t, o),
                    (0,
                        n.Qy)(e, a[e], "info")
            }
            var d = r(7056);
            const u = () => {
                const e = {
                    blockSelector: "[data-nr-block]",
                    maskInputOptions: {
                        password: !0
                    }
                };
                return {
                    allow_bfcache: !0,
                    privacy: {
                        cookies_enabled: !0
                    },
                    ajax: {
                        deny_list: void 0,
                        enabled: !0,
                        harvestTimeSeconds: 10
                    },
                    distributed_tracing: {
                        enabled: void 0,
                        exclude_newrelic_header: void 0,
                        cors_use_newrelic_header: void 0,
                        cors_use_tracecontext_headers: void 0,
                        allowed_origins: void 0
                    },
                    session: {
                        domain: void 0,
                        expiresMs: d.oD,
                        inactiveMs: d.Hb
                    },
                    ssl: void 0,
                    obfuscate: void 0,
                    jserrors: {
                        enabled: !0,
                        harvestTimeSeconds: 10
                    },
                    metrics: {
                        enabled: !0
                    },
                    page_action: {
                        enabled: !0,
                        harvestTimeSeconds: 30
                    },
                    page_view_event: {
                        enabled: !0
                    },
                    page_view_timing: {
                        enabled: !0,
                        harvestTimeSeconds: 30,
                        long_task: !1
                    },
                    session_trace: {
                        enabled: !0,
                        harvestTimeSeconds: 10
                    },
                    harvest: {
                        tooManyRequestsDelay: 60
                    },
                    session_replay: {
                        enabled: !1,
                        harvestTimeSeconds: 60,
                        sampleRate: .1,
                        errorSampleRate: .1,
                        maskTextSelector: "*",
                        maskAllInputs: !0,
                        get blockClass() {
                            return "nr-block"
                        },
                        get ignoreClass() {
                            return "nr-ignore"
                        },
                        get maskTextClass() {
                            return "nr-mask"
                        },
                        get blockSelector() {
                            return e.blockSelector
                        },
                        set blockSelector(t) {
                            e.blockSelector += ",".concat(t)
                        },
                        get maskInputOptions() {
                            return e.maskInputOptions
                        },
                        set maskInputOptions(t) {
                            e.maskInputOptions = {
                                ...t,
                                password: !0
                            }
                        }
                    },
                    spa: {
                        enabled: !0,
                        harvestTimeSeconds: 10
                    }
                }
            },
                l = {};

            function f(e) {
                if (!e)
                    throw new Error("All configuration objects require an agent identifier!");
                if (!l[e])
                    throw new Error("Configuration for ".concat(e, " was never set"));
                return l[e]
            }

            function h(e, t) {
                if (!e)
                    throw new Error("All configuration objects require an agent identifier!");
                l[e] = (0,
                    i.D)(t, u()),
                    (0,
                        n.Qy)(e, l[e], "config")
            }

            function g(e, t) {
                if (!e)
                    throw new Error("All configuration objects require an agent identifier!");
                var r = f(e);
                if (r) {
                    for (var n = t.split("."), i = 0; i < n.length - 1; i++)
                        if ("object" != typeof (r = r[n[i]]))
                            return;
                    r = r[n[n.length - 1]]
                }
                return r
            }
            const p = {
                accountID: void 0,
                trustKey: void 0,
                agentID: void 0,
                licenseKey: void 0,
                applicationID: void 0,
                xpid: void 0
            },
                v = {};

            function m(e) {
                if (!e)
                    throw new Error("All loader-config objects require an agent identifier!");
                if (!v[e])
                    throw new Error("LoaderConfig for ".concat(e, " was never set"));
                return v[e]
            }

            function b(e, t) {
                if (!e)
                    throw new Error("All loader-config objects require an agent identifier!");
                v[e] = (0,
                    i.D)(t, p),
                    (0,
                        n.Qy)(e, v[e], "loader_config")
            }
            const y = (0,
                n.mF)().o;
            var w = r(385),
                x = r(6818);
            const A = {
                buildEnv: x.Re,
                bytesSent: {},
                queryBytesSent: {},
                customTransaction: void 0,
                disabled: !1,
                distMethod: x.gF,
                isolatedBacklog: !1,
                loaderType: void 0,
                maxBytes: 3e4,
                offset: Math.floor(w._A?.performance?.timeOrigin || w._A?.performance?.timing?.navigationStart || Date.now()),
                onerror: void 0,
                origin: "" + w._A.location,
                ptid: void 0,
                releaseIds: {},
                session: void 0,
                xhrWrappable: "function" == typeof w._A.XMLHttpRequest?.prototype?.addEventListener,
                version: x.q4
            },
                E = {};

            function _(e) {
                if (!e)
                    throw new Error("All runtime objects require an agent identifier!");
                if (!E[e])
                    throw new Error("Runtime for ".concat(e, " was never set"));
                return E[e]
            }

            function D(e, t) {
                if (!e)
                    throw new Error("All runtime objects require an agent identifier!");
                E[e] = (0,
                    i.D)(t, A),
                    (0,
                        n.Qy)(e, E[e], "runtime")
            }

            function T(e) {
                return function (e) {
                    try {
                        const t = s(e);
                        return !!t.licenseKey && !!t.errorBeacon && !!t.applicationID
                    } catch (e) {
                        return !1
                    }
                }(e)
            }
        },
        9567: (e, t, r) => {
            r.d(t, {
                D: () => i
            });
            var n = r(50);

            function i(e, t) {
                try {
                    if (!e || "object" != typeof e)
                        return (0,
                            n.Z)("Setting a Configurable requires an object as input");
                    if (!t || "object" != typeof t)
                        return (0,
                            n.Z)("Setting a Configurable requires a model to set its initial properties");
                    const r = Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)),
                        o = 0 === Object.keys(r).length ? e : r;
                    for (let a in o)
                        if (void 0 !== e[a])
                            try {
                                "object" == typeof e[a] && "object" == typeof t[a] ? r[a] = i(e[a], t[a]) : r[a] = e[a]
                            } catch (e) {
                                (0,
                                    n.Z)("An error occurred while setting a property of a Configurable", e)
                            }
                    return r
                } catch (e) {
                    (0,
                        n.Z)("An error occured while setting a Configurable", e)
                }
            }
        },
        6818: (e, t, r) => {
            r.d(t, {
                Re: () => i,
                gF: () => o,
                q4: () => n
            });
            const n = "1.236.0",
                i = "PROD",
                o = "CDN"
        },
        385: (e, t, r) => {
            r.d(t, {
                FN: () => a,
                IF: () => d,
                Nk: () => l,
                Tt: () => s,
                _A: () => o,
                il: () => n,
                pL: () => c,
                v6: () => i,
                w1: () => u
            });
            const n = "undefined" != typeof window && !!window.document,
                i = "undefined" != typeof WorkerGlobalScope && ("undefined" != typeof self && self instanceof WorkerGlobalScope && self.navigator instanceof WorkerNavigator || "undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope && globalThis.navigator instanceof WorkerNavigator),
                o = n ? window : "undefined" != typeof WorkerGlobalScope && ("undefined" != typeof self && self instanceof WorkerGlobalScope && self || "undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope && globalThis),
                a = "" + o?.location,
                s = /iPad|iPhone|iPod/.test(navigator.userAgent),
                c = s && "undefined" == typeof SharedWorker,
                d = (() => {
                    const e = navigator.userAgent.match(/Firefox[/\s](\d+\.\d+)/);
                    return Array.isArray(e) && e.length >= 2 ? +e[1] : 0
                })(),
                u = Boolean(n && window.document.documentMode),
                l = !!navigator.sendBeacon
        },
        1117: (e, t, r) => {
            r.d(t, {
                w: () => o
            });
            var n = r(50);
            const i = {
                agentIdentifier: "",
                ee: void 0
            };
            class o {
                constructor(e) {
                    try {
                        if ("object" != typeof e)
                            return (0,
                                n.Z)("shared context requires an object as input");
                        this.sharedContext = {},
                            Object.assign(this.sharedContext, i),
                            Object.entries(e).forEach((e => {
                                let [t, r] = e;
                                Object.keys(i).includes(t) && (this.sharedContext[t] = r)
                            }))
                    } catch (e) {
                        (0,
                            n.Z)("An error occured while setting SharedContext", e)
                    }
                }
            }
        },
        8e3: (e, t, r) => {
            r.d(t, {
                L: () => u,
                R: () => c
            });
            var n = r(2177),
                i = r(1284),
                o = r(4322),
                a = r(3325);
            const s = {};

            function c(e, t) {
                const r = {
                    staged: !1,
                    priority: a.p[t] || 0
                };
                d(e),
                    s[e].get(t) || s[e].set(t, r)
            }

            function d(e) {
                e && (s[e] || (s[e] = new Map))
            }

            function u() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "feature";
                if (d(e),
                    !e || !s[e].get(t))
                    return a(t);
                s[e].get(t).staged = !0;
                const r = [...s[e]];

                function a(t) {
                    const r = e ? n.ee.get(e) : n.ee,
                        a = o.X.handlers;
                    if (r.backlog && a) {
                        var s = r.backlog[t],
                            c = a[t];
                        if (c) {
                            for (var d = 0; s && d < s.length; ++d)
                                l(s[d], c);
                            (0,
                                i.D)(c, (function (e, t) {
                                    (0,
                                        i.D)(t, (function (t, r) {
                                            r[0].on(e, r[1])
                                        }))
                                }))
                        }
                        delete a[t],
                            r.backlog[t] = null,
                            r.emit("drain-" + t, [])
                    }
                }
                r.every((e => {
                    let [t, r] = e;
                    return r.staged
                })) && (r.sort(((e, t) => e[1].priority - t[1].priority)),
                    r.forEach((e => {
                        let [t] = e;
                        a(t)
                    })))
            }

            function l(e, t) {
                var r = e[1];
                (0,
                    i.D)(t[r], (function (t, r) {
                        var n = e[0];
                        if (r[0] === n) {
                            var i = r[1],
                                o = e[3],
                                a = e[2];
                            i.apply(o, a)
                        }
                    }))
            }
        },
        2177: (e, t, r) => {
            r.d(t, {
                ee: () => d
            });
            var n = r(8632),
                i = r(2210),
                o = r(1284),
                a = r(5763),
                s = "nr@context";
            let c = (0,
                n.fP)();
            var d;

            function u() { }

            function l() {
                return new u
            }

            function f() {
                d.aborted = !0,
                    d.backlog = {}
            }
            c.ee ? d = c.ee : (d = function e(t, r) {
                var n = {},
                    c = {},
                    h = {},
                    g = !1;
                try {
                    g = 16 === r.length && (0,
                        a.OP)(r).isolatedBacklog
                } catch (e) { }
                var p = {
                    on: b,
                    addEventListener: b,
                    removeEventListener: y,
                    emit: m,
                    get: x,
                    listeners: w,
                    context: v,
                    buffer: A,
                    abort: f,
                    aborted: !1,
                    isBuffering: E,
                    debugId: r,
                    backlog: g ? {} : t && "object" == typeof t.backlog ? t.backlog : {}
                };
                return p;

                function v(e) {
                    return e && e instanceof u ? e : e ? (0,
                        i.X)(e, s, l) : l()
                }

                function m(e, r, n, i, o) {
                    if (!1 !== o && (o = !0),
                        !d.aborted || i) {
                        t && o && t.emit(e, r, n);
                        for (var a = v(n), s = w(e), u = s.length, l = 0; l < u; l++)
                            s[l].apply(a, r);
                        var f = _()[c[e]];
                        return f && f.push([p, e, r, a]),
                            a
                    }
                }

                function b(e, t) {
                    n[e] = w(e).concat(t)
                }

                function y(e, t) {
                    var r = n[e];
                    if (r)
                        for (var i = 0; i < r.length; i++)
                            r[i] === t && r.splice(i, 1)
                }

                function w(e) {
                    return n[e] || []
                }

                function x(t) {
                    return h[t] = h[t] || e(p, t)
                }

                function A(e, t) {
                    var r = _();
                    p.aborted || (0,
                        o.D)(e, (function (e, n) {
                            t = t || "feature",
                                c[n] = t,
                                t in r || (r[t] = [])
                        }))
                }

                function E(e) {
                    return !!_()[c[e]]
                }

                function _() {
                    return p.backlog
                }
            }(void 0, "globalEE"),
                c.ee = d)
        },
        5546: (e, t, r) => {
            r.d(t, {
                E: () => n,
                p: () => i
            });
            var n = r(2177).ee.get("handle");

            function i(e, t, r, i, o) {
                o ? (o.buffer([e], i),
                    o.emit(e, t, r)) : (n.buffer([e], i),
                        n.emit(e, t, r))
            }
        },
        4322: (e, t, r) => {
            r.d(t, {
                X: () => o
            });
            var n = r(5546);
            o.on = a;
            var i = o.handlers = {};

            function o(e, t, r, o) {
                a(o || n.E, i, e, t, r)
            }

            function a(e, t, r, i, o) {
                o || (o = "feature"),
                    e || (e = n.E);
                var a = t[o] = t[o] || {};
                (a[r] = a[r] || []).push([e, i])
            }
        },
        3239: (e, t, r) => {
            r.d(t, {
                bP: () => s,
                iz: () => c,
                m$: () => a
            });
            var n = r(385);
            let i = !1,
                o = !1;
            try {
                const e = {
                    get passive() {
                        return i = !0,
                            !1
                    },
                    get signal() {
                        return o = !0,
                            !1
                    }
                };
                n._A.addEventListener("test", null, e),
                    n._A.removeEventListener("test", null, e)
            } catch (e) { }

            function a(e, t) {
                return i || o ? {
                    capture: !!e,
                    passive: i,
                    signal: t
                } : !!e
            }

            function s(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = arguments.length > 3 ? arguments[3] : void 0;
                window.addEventListener(e, t, a(r, n))
            }

            function c(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = arguments.length > 3 ? arguments[3] : void 0;
                document.addEventListener(e, t, a(r, n))
            }
        },
        4402: (e, t, r) => {
            r.d(t, {
                Ht: () => d,
                M: () => c,
                Rl: () => a,
                ky: () => s
            });
            var n = r(385);
            const i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

            function o(e, t) {
                return e ? 15 & e[t] : 16 * Math.random() | 0
            }

            function a() {
                const e = n._A?.crypto || n._A?.msCrypto;
                let t, r = 0;
                return e && e.getRandomValues && (t = e.getRandomValues(new Uint8Array(31))),
                    i.split("").map((e => "x" === e ? o(t, ++r).toString(16) : "y" === e ? (3 & o() | 8).toString(16) : e)).join("")
            }

            function s(e) {
                const t = n._A?.crypto || n._A?.msCrypto;
                let r, i = 0;
                t && t.getRandomValues && (r = t.getRandomValues(new Uint8Array(31)));
                const a = [];
                for (var s = 0; s < e; s++)
                    a.push(o(r, ++i).toString(16));
                return a.join("")
            }

            function c() {
                return s(16)
            }

            function d() {
                return s(32)
            }
        },
        7056: (e, t, r) => {
            r.d(t, {
                Bq: () => n,
                Hb: () => o,
                oD: () => i
            });
            const n = "NRBA",
                i = 144e5,
                o = 18e5
        },
        7894: (e, t, r) => {
            function n() {
                return Math.round(performance.now())
            }
            r.d(t, {
                z: () => n
            })
        },
        7243: (e, t, r) => {
            r.d(t, {
                e: () => o
            });
            var n = r(385),
                i = {};

            function o(e) {
                if (e in i)
                    return i[e];
                if (0 === (e || "").indexOf("data:"))
                    return {
                        protocol: "data"
                    };
                let t;
                var r = n._A?.location,
                    o = {};
                if (n.il)
                    t = document.createElement("a"),
                        t.href = e;
                else
                    try {
                        t = new URL(e, r.href)
                    } catch (e) {
                        return o
                    }
                o.port = t.port;
                var a = t.href.split("://");
                !o.port && a[1] && (o.port = a[1].split("/")[0].split("@").pop().split(":")[1]),
                    o.port && "0" !== o.port || (o.port = "https" === a[0] ? "443" : "80"),
                    o.hostname = t.hostname || r.hostname,
                    o.pathname = t.pathname,
                    o.protocol = a[0],
                    "/" !== o.pathname.charAt(0) && (o.pathname = "/" + o.pathname);
                var s = !t.protocol || ":" === t.protocol || t.protocol === r.protocol,
                    c = t.hostname === r.hostname && t.port === r.port;
                return o.sameOrigin = s && (!t.hostname || c),
                    "/" === o.pathname && (i[e] = o),
                    o
            }
        },
        50: (e, t, r) => {
            function n(e, t) {
                "function" == typeof console.warn && (console.warn("New Relic: ".concat(e)),
                    t && console.warn(t))
            }
            r.d(t, {
                Z: () => n
            })
        },
        2587: (e, t, r) => {
            r.d(t, {
                N: () => c,
                T: () => d
            });
            var n = r(2177),
                i = r(5546),
                o = r(8e3),
                a = r(3325);
            const s = {
                stn: [a.D.sessionTrace],
                err: [a.D.jserrors, a.D.metrics],
                ins: [a.D.pageAction],
                spa: [a.D.spa],
                sr: [a.D.sessionReplay, a.D.sessionTrace]
            };

            function c(e, t) {
                const r = n.ee.get(t);
                e && "object" == typeof e && (Object.entries(e).forEach((e => {
                    let [t, n] = e;
                    void 0 === d[t] && (s[t] ? s[t].forEach((e => {
                        n ? (0,
                            i.p)("feat-" + t, [], void 0, e, r) : (0,
                                i.p)("block-" + t, [], void 0, e, r),
                            (0,
                                i.p)("rumresp-" + t, [Boolean(n)], void 0, e, r)
                    })) : n && (0,
                        i.p)("feat-" + t, [], void 0, void 0, r),
                        d[t] = Boolean(n))
                })),
                    Object.keys(s).forEach((e => {
                        void 0 === d[e] && (s[e]?.forEach((t => (0,
                            i.p)("rumresp-" + e, [!1], void 0, t, r))),
                            d[e] = !1)
                    })),
                    (0,
                        o.L)(t, a.D.pageViewEvent))
            }
            const d = {}
        },
        2210: (e, t, r) => {
            r.d(t, {
                X: () => i
            });
            var n = Object.prototype.hasOwnProperty;

            function i(e, t, r) {
                if (n.call(e, t))
                    return e[t];
                var i = r();
                if (Object.defineProperty && Object.keys)
                    try {
                        return Object.defineProperty(e, t, {
                            value: i,
                            writable: !0,
                            enumerable: !1
                        }),
                            i
                    } catch (e) { }
                return e[t] = i,
                    i
            }
        },
        1284: (e, t, r) => {
            r.d(t, {
                D: () => n
            });
            const n = (e, t) => Object.entries(e || {}).map((e => {
                let [r, n] = e;
                return t(r, n)
            }))
        },
        4351: (e, t, r) => {
            r.d(t, {
                P: () => o
            });
            var n = r(2177);
            const i = () => {
                const e = new WeakSet;
                return (t, r) => {
                    if ("object" == typeof r && null !== r) {
                        if (e.has(r))
                            return;
                        e.add(r)
                    }
                    return r
                }
            };

            function o(e) {
                try {
                    return JSON.stringify(e, i())
                } catch (e) {
                    try {
                        n.ee.emit("internal-error", [e])
                    } catch (e) { }
                }
            }
        },
        3960: (e, t, r) => {
            r.d(t, {
                K: () => a,
                b: () => o
            });
            var n = r(3239);

            function i() {
                return "undefined" == typeof document || "complete" === document.readyState
            }

            function o(e, t) {
                if (i())
                    return e();
                (0,
                    n.bP)("load", e, t)
            }

            function a(e) {
                if (i())
                    return e();
                (0,
                    n.iz)("DOMContentLoaded", e)
            }
        },
        8632: (e, t, r) => {
            r.d(t, {
                EZ: () => d,
                Qy: () => c,
                ce: () => o,
                fP: () => a,
                gG: () => u,
                mF: () => s
            });
            var n = r(7894),
                i = r(385);
            const o = {
                beacon: "bam.nr-data.net",
                errorBeacon: "bam.nr-data.net"
            };

            function a() {
                return i._A.NREUM || (i._A.NREUM = {}),
                    void 0 === i._A.newrelic && (i._A.newrelic = i._A.NREUM),
                    i._A.NREUM
            }

            function s() {
                let e = a();
                return e.o || (e.o = {
                    ST: i._A.setTimeout,
                    SI: i._A.setImmediate,
                    CT: i._A.clearTimeout,
                    XHR: i._A.XMLHttpRequest,
                    REQ: i._A.Request,
                    EV: i._A.Event,
                    PR: i._A.Promise,
                    MO: i._A.MutationObserver,
                    FETCH: i._A.fetch
                }),
                    e
            }

            function c(e, t, r) {
                let i = a();
                const o = i.initializedAgents || {},
                    s = o[e] || {};
                return Object.keys(s).length || (s.initializedAt = {
                    ms: (0,
                        n.z)(),
                    date: new Date
                }),
                    i.initializedAgents = {
                        ...o,
                        [e]: {
                            ...s,
                            [r]: t
                        }
                    },
                    i
            }

            function d(e, t) {
                a()[e] = t
            }

            function u() {
                return function () {
                    let e = a();
                    const t = e.info || {};
                    e.info = {
                        beacon: o.beacon,
                        errorBeacon: o.errorBeacon,
                        ...t
                    }
                }(),
                    function () {
                        let e = a();
                        const t = e.init || {};
                        e.init = {
                            ...t
                        }
                    }(),
                    s(),
                    function () {
                        let e = a();
                        const t = e.loader_config || {};
                        e.loader_config = {
                            ...t
                        }
                    }(),
                    a()
            }
        },
        7956: (e, t, r) => {
            r.d(t, {
                N: () => i
            });
            var n = r(3239);

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    i = arguments.length > 3 ? arguments[3] : void 0;
                return void (0,
                    n.iz)("visibilitychange", (function () {
                        if (t)
                            return void ("hidden" == document.visibilityState && e());
                        e(document.visibilityState)
                    }), r, i)
            }
        },
        1214: (e, t, r) => {
            r.d(t, {
                em: () => m,
                u5: () => j,
                QU: () => P,
                gy: () => k,
                BV: () => U,
                Kf: () => W
            });
            var n = r(2177);
            const i = "nr@original";
            var o = Object.prototype.hasOwnProperty,
                a = !1;

            function s(e, t) {
                return e || (e = n.ee),
                    r.inPlace = function (e, t, n, i, o) {
                        n || (n = "");
                        var a, s, c, d = "-" === n.charAt(0);
                        for (c = 0; c < t.length; c++)
                            u(a = e[s = t[c]]) || (e[s] = r(a, d ? s + n : n, i, s, o))
                    },
                    r.flag = i,
                    r;

                function r(t, r, n, a, s) {
                    return u(t) ? t : (r || (r = ""),
                        nrWrapper[i] = t,
                        d(t, nrWrapper, e),
                        nrWrapper);

                    function nrWrapper() {
                        var i, d, u, l;
                        try {
                            d = this,
                                i = [...arguments],
                                u = "function" == typeof n ? n(i, d) : n || {}
                        } catch (t) {
                            c([t, "", [i, d, a], u], e)
                        }
                        o(r + "start", [i, d, a], u, s);
                        try {
                            return l = t.apply(d, i)
                        } catch (e) {
                            throw o(r + "err", [i, d, e], u, s),
                            e
                        } finally {
                            o(r + "end", [i, d, l], u, s)
                        }
                    }
                }

                function o(r, n, i, o) {
                    if (!a || t) {
                        var s = a;
                        a = !0;
                        try {
                            e.emit(r, n, i, t, o)
                        } catch (t) {
                            c([t, r, n, i], e)
                        }
                        a = s
                    }
                }
            }

            function c(e, t) {
                t || (t = n.ee);
                try {
                    t.emit("internal-error", e)
                } catch (e) { }
            }

            function d(e, t, r) {
                if (Object.defineProperty && Object.keys)
                    try {
                        return Object.keys(e).forEach((function (r) {
                            Object.defineProperty(t, r, {
                                get: function () {
                                    return e[r]
                                },
                                set: function (t) {
                                    return e[r] = t,
                                        t
                                }
                            })
                        })),
                            t
                    } catch (e) {
                        c([e], r)
                    }
                for (var n in e)
                    o.call(e, n) && (t[n] = e[n]);
                return t
            }

            function u(e) {
                return !(e && e instanceof Function && e.apply && !e[i])
            }
            var l = r(2210),
                f = r(385);
            const h = {},
                g = XMLHttpRequest,
                p = "addEventListener",
                v = "removeEventListener";

            function m(e) {
                var t = function (e) {
                    return (e || n.ee).get("events")
                }(e);
                if (h[t.debugId]++)
                    return t;
                h[t.debugId] = 1;
                var r = s(t, !0);

                function i(e) {
                    r.inPlace(e, [p, v], "-", o)
                }

                function o(e, t) {
                    return e[1]
                }
                return "getPrototypeOf" in Object && (f.il && b(document, i),
                    b(f._A, i),
                    b(g.prototype, i)),
                    t.on(p + "-start", (function (e, t) {
                        var n = e[1];
                        if (null !== n && ("function" == typeof n || "object" == typeof n)) {
                            var i = (0,
                                l.X)(n, "nr@wrapped", (function () {
                                    var e = {
                                        object: function () {
                                            if ("function" != typeof n.handleEvent)
                                                return;
                                            return n.handleEvent.apply(n, arguments)
                                        },
                                        function: n
                                    }[typeof n];
                                    return e ? r(e, "fn-", null, e.name || "anonymous") : n
                                }));
                            this.wrapped = e[1] = i
                        }
                    })),
                    t.on(v + "-start", (function (e) {
                        e[1] = this.wrapped || e[1]
                    })),
                    t
            }

            function b(e, t) {
                let r = e;
                for (;
                    "object" == typeof r && !Object.prototype.hasOwnProperty.call(r, p);)
                    r = Object.getPrototypeOf(r);
                for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
                    i[o - 2] = arguments[o];
                r && t(r, ...i)
            }
            var y = "fetch-",
                w = y + "body-",
                x = ["arrayBuffer", "blob", "json", "text", "formData"],
                A = f._A.Request,
                E = f._A.Response,
                _ = "prototype",
                D = "nr@context";
            const T = {};

            function j(e) {
                const t = function (e) {
                    return (e || n.ee).get("fetch")
                }(e);
                if (!(A && E && f._A.fetch))
                    return t;
                if (T[t.debugId]++)
                    return t;

                function r(e, r, n) {
                    var i = e[r];
                    "function" == typeof i && (e[r] = function () {
                        var e, r = [...arguments],
                            o = {};
                        t.emit(n + "before-start", [r], o),
                            o[D] && o[D].dt && (e = o[D].dt);
                        var a = i.apply(this, r);
                        return t.emit(n + "start", [r, e], a),
                            a.then((function (e) {
                                return t.emit(n + "end", [null, e], a),
                                    e
                            }), (function (e) {
                                throw t.emit(n + "end", [e], a),
                                e
                            }))
                    })
                }
                return T[t.debugId] = 1,
                    x.forEach((e => {
                        r(A[_], e, w),
                            r(E[_], e, w)
                    })),
                    r(f._A, "fetch", y),
                    t.on(y + "end", (function (e, r) {
                        var n = this;
                        if (r) {
                            var i = r.headers.get("content-length");
                            null !== i && (n.rxSize = i),
                                t.emit(y + "done", [null, r], n)
                        } else
                            t.emit(y + "done", [e], n)
                    })),
                    t
            }
            const O = {},
                S = ["pushState", "replaceState"];

            function P(e) {
                const t = function (e) {
                    return (e || n.ee).get("history")
                }(e);
                return !f.il || O[t.debugId]++ || (O[t.debugId] = 1,
                    s(t).inPlace(window.history, S, "-")),
                    t
            }
            var C = r(3239);
            var N = r(5763);
            const R = {},
                I = "requestAnimationFrame";

            function k(e) {
                const t = function (e) {
                    return (e || n.ee).get("raf")
                }(e);
                if (!f.il || R[t.debugId]++)
                    return t;
                R[t.debugId] = 1;
                var r = s(t);
                return r.inPlace(window, [I], "raf-"),
                    t.on("raf-start", (function (e) {
                        e[0] = r(e[0], "fn-")
                    })),
                    t
            }
            const H = {},
                z = "setTimeout",
                L = "setInterval",
                M = "clearTimeout",
                B = "-start",
                q = "-",
                F = [z, "setImmediate", L, M, "clearImmediate"];

            function U(e) {
                const t = function (e) {
                    return (e || n.ee).get("timer")
                }(e);
                if (H[t.debugId]++)
                    return t;
                H[t.debugId] = 1;
                var r = s(t);
                return r.inPlace(f._A, F.slice(0, 2), z + q),
                    r.inPlace(f._A, F.slice(2, 3), L + q),
                    r.inPlace(f._A, F.slice(3), M + q),
                    t.on(L + B, (function (e, t, n) {
                        e[0] = r(e[0], "fn-", null, n)
                    })),
                    t.on(z + B, (function (e, t, n) {
                        this.method = n,
                            this.timerDuration = isNaN(e[1]) ? 0 : +e[1],
                            e[0] = r(e[0], "fn-", this, n)
                    })),
                    t
            }
            var G = r(50);
            const V = {},
                X = ["open", "send"];

            function W(e) {
                var t = e || n.ee;
                const r = function (e) {
                    return (e || n.ee).get("xhr")
                }(t);
                if (V[r.debugId]++)
                    return r;
                V[r.debugId] = 1,
                    m(t);
                var i = s(r),
                    o = N.Yu.XHR,
                    a = N.Yu.MO,
                    c = N.Yu.PR,
                    d = N.Yu.SI,
                    u = "readystatechange",
                    l = ["onload", "onerror", "onabort", "onloadstart", "onloadend", "onprogress", "ontimeout"],
                    h = [],
                    g = f._A.XMLHttpRequest.listeners,
                    p = f._A.XMLHttpRequest = function (e) {
                        var t = new o(e);

                        function n() {
                            try {
                                r.emit("new-xhr", [t], t),
                                    t.addEventListener(u, b, (0,
                                        C.m$)(!1))
                            } catch (e) {
                                (0,
                                    G.Z)("An error occured while intercepting XHR", e);
                                try {
                                    r.emit("internal-error", [e])
                                } catch (e) { }
                            }
                        }
                        return this.listeners = g ? [...g, n] : [n],
                            this.listeners.forEach((e => e())),
                            t
                    };

                function v(e, t) {
                    i.inPlace(t, ["onreadystatechange"], "fn-", E)
                }

                function b() {
                    var e = this,
                        t = r.context(e);
                    e.readyState > 3 && !t.resolved && (t.resolved = !0,
                        r.emit("xhr-resolved", [], e)),
                        i.inPlace(e, l, "fn-", E)
                }
                if (function (e, t) {
                    for (var r in e)
                        t[r] = e[r]
                }(o, p),
                    p.prototype = o.prototype,
                    i.inPlace(p.prototype, X, "-xhr-", E),
                    r.on("send-xhr-start", (function (e, t) {
                        v(e, t),
                            function (e) {
                                h.push(e),
                                    a && (y ? y.then(A) : d ? d(A) : (w = -w,
                                        x.data = w))
                            }(t)
                    })),
                    r.on("open-xhr-start", v),
                    a) {
                    var y = c && c.resolve();
                    if (!d && !c) {
                        var w = 1,
                            x = document.createTextNode(w);
                        new a(A).observe(x, {
                            characterData: !0
                        })
                    }
                } else
                    t.on("fn-end", (function (e) {
                        e[0] && e[0].type === u || A()
                    }));

                function A() {
                    for (var e = 0; e < h.length; e++)
                        v(0, h[e]);
                    h.length && (h = [])
                }

                function E(e, t) {
                    return t
                }
                return r
            }
        },
        7825: (e, t, r) => {
            r.d(t, {
                t: () => n
            });
            const n = r(3325).D.ajax
        },
        6660: (e, t, r) => {
            r.d(t, {
                A: () => i,
                t: () => n
            });
            const n = r(3325).D.jserrors,
                i = "nr@seenError"
        },
        3081: (e, t, r) => {
            r.d(t, {
                gF: () => o,
                mY: () => i,
                t9: () => n,
                vz: () => s,
                xS: () => a
            });
            const n = r(3325).D.metrics,
                i = "sm",
                o = "cm",
                a = "storeSupportabilityMetrics",
                s = "storeEventMetrics"
        },
        4649: (e, t, r) => {
            r.d(t, {
                t: () => n
            });
            const n = r(3325).D.pageAction
        },
        7633: (e, t, r) => {
            r.d(t, {
                Dz: () => i,
                OJ: () => a,
                qw: () => o,
                t9: () => n
            });
            const n = r(3325).D.pageViewEvent,
                i = "firstbyte",
                o = "domcontent",
                a = "windowload"
        },
        9251: (e, t, r) => {
            r.d(t, {
                t: () => n
            });
            const n = r(3325).D.pageViewTiming
        },
        3614: (e, t, r) => {
            r.d(t, {
                BST_RESOURCE: () => i,
                END: () => s,
                FEATURE_NAME: () => n,
                FN_END: () => d,
                FN_START: () => c,
                PUSH_STATE: () => u,
                RESOURCE: () => o,
                START: () => a
            });
            const n = r(3325).D.sessionTrace,
                i = "bstResource",
                o = "resource",
                a = "-start",
                s = "-end",
                c = "fn" + a,
                d = "fn" + s,
                u = "pushState"
        },
        5938: (e, t, r) => {
            r.d(t, {
                W: () => o
            });
            var n = r(5763),
                i = r(2177);
            class o {
                constructor(e, t, r) {
                    this.agentIdentifier = e,
                        this.aggregator = t,
                        this.ee = i.ee.get(e, (0,
                            n.OP)(this.agentIdentifier).isolatedBacklog),
                        this.featureName = r,
                        this.blocked = !1
                }
            }
        },
        9144: (e, t, r) => {
            r.d(t, {
                j: () => v
            });
            var n = r(3325),
                i = r(5763),
                o = r(5546),
                a = r(2177),
                s = r(7894),
                c = r(8e3),
                d = r(3960),
                u = r(385),
                l = r(50),
                f = r(3081),
                h = r(8632);

            function g() {
                const e = (0,
                    h.gG)();
                ["setErrorHandler", "finished", "addToTrace", "inlineHit", "addRelease", "addPageAction", "setCurrentRouteName", "setPageViewName", "setCustomAttribute", "interaction", "noticeError", "setUserId"].forEach((t => {
                    e[t] = function () {
                        for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
                            n[i] = arguments[i];
                        return function (t) {
                            for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
                                n[i - 1] = arguments[i];
                            let o = [];
                            return Object.values(e.initializedAgents).forEach((e => {
                                e.exposed && e.api[t] && o.push(e.api[t](...n))
                            })),
                                o.length > 1 ? o : o[0]
                        }(t, ...n)
                    }
                }))
            }
            var p = r(2587);

            function v(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    v = arguments.length > 2 ? arguments[2] : void 0,
                    m = arguments.length > 3 ? arguments[3] : void 0,
                    {
                        init: b,
                        info: y,
                        loader_config: w,
                        runtime: x = {
                            loaderType: v
                        },
                        exposed: A = !0
                    } = t;
                const E = (0,
                    h.gG)();
                y || (b = E.init,
                    y = E.info,
                    w = E.loader_config),
                    (0,
                        i.Dg)(e, b || {}),
                    (0,
                        i.GE)(e, w || {}),
                    (0,
                        i.sU)(e, x),
                    y.jsAttributes ??= {},
                    u.v6 && (y.jsAttributes.isWorker = !0),
                    (0,
                        i.CX)(e, y),
                    g();
                const _ = function (e, t) {
                    t || (0,
                        c.R)(e, "api");
                    const h = {};
                    var g = a.ee.get(e),
                        p = g.get("tracer"),
                        v = "api-",
                        m = v + "ixn-";

                    function b(t, r, n, o) {
                        const a = (0,
                            i.C5)(e);
                        return null === r ? delete a.jsAttributes[t] : (0,
                            i.CX)(e, {
                                ...a,
                                jsAttributes: {
                                    ...a.jsAttributes,
                                    [t]: r
                                }
                            }),
                            x(v, n, !0, o || null === r ? "session" : void 0)(t, r)
                    }

                    function y() { }
                    ["setErrorHandler", "finished", "addToTrace", "inlineHit", "addRelease"].forEach((e => h[e] = x(v, e, !0, "api"))),
                        h.addPageAction = x(v, "addPageAction", !0, n.D.pageAction),
                        h.setCurrentRouteName = x(v, "routeName", !0, n.D.spa),
                        h.setPageViewName = function (t, r) {
                            if ("string" == typeof t)
                                return "/" !== t.charAt(0) && (t = "/" + t),
                                    (0,
                                        i.OP)(e).customTransaction = (r || "http://custom.transaction") + t,
                                    x(v, "setPageViewName", !0)()
                        },
                        h.setCustomAttribute = function (e, t) {
                            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if ("string" == typeof e) {
                                if (["string", "number"].includes(typeof t) || null === t)
                                    return b(e, t, "setCustomAttribute", r);
                                (0,
                                    l.Z)("Failed to execute setCustomAttribute.\nNon-null value must be a string or number type, but a type of <".concat(typeof t, "> was provided."))
                            } else
                                (0,
                                    l.Z)("Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(typeof e, "> was provided."))
                        },
                        h.setUserId = function (e) {
                            if ("string" == typeof e || null === e)
                                return b("enduser.id", e, "setUserId", !0);
                            (0,
                                l.Z)("Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(typeof e, "> was provided."))
                        },
                        h.interaction = function () {
                            return (new y).get()
                        };
                    var w = y.prototype = {
                        createTracer: function (e, t) {
                            var r = {},
                                i = this,
                                a = "function" == typeof t;
                            return (0,
                                o.p)(m + "tracer", [(0,
                                    s.z)(), e, r], i, n.D.spa, g),
                                function () {
                                    if (p.emit((a ? "" : "no-") + "fn-start", [(0,
                                        s.z)(), i, a], r),
                                        a)
                                        try {
                                            return t.apply(this, arguments)
                                        } catch (e) {
                                            throw p.emit("fn-err", [arguments, this, "string" == typeof e ? new Error(e) : e], r),
                                            e
                                        } finally {
                                            p.emit("fn-end", [(0,
                                                s.z)()], r)
                                        }
                                }
                        }
                    };

                    function x(e, t, r, i) {
                        return function () {
                            return (0,
                                o.p)(f.xS, ["API/" + t + "/called"], void 0, n.D.metrics, g),
                                i && (0,
                                    o.p)(e + t, [(0,
                                        s.z)(), ...arguments], r ? null : this, i, g),
                                r ? void 0 : this
                        }
                    }

                    function A() {
                        r.e(439).then(r.bind(r, 7438)).then((t => {
                            let {
                                setAPI: r
                            } = t;
                            r(e),
                                (0,
                                    c.L)(e, "api")
                        })).catch((() => (0,
                            l.Z)("Downloading runtime APIs failed...")))
                    }
                    return ["actionText", "setName", "setAttribute", "save", "ignore", "onEnd", "getContext", "end", "get"].forEach((e => {
                        w[e] = x(m, e, void 0, n.D.spa)
                    })),
                        h.noticeError = function (e, t) {
                            "string" == typeof e && (e = new Error(e)),
                                (0,
                                    o.p)(f.xS, ["API/noticeError/called"], void 0, n.D.metrics, g),
                                (0,
                                    o.p)("err", [e, (0,
                                        s.z)(), !1, t], void 0, n.D.jserrors, g)
                        },
                        u.il ? (0,
                            d.b)((() => A()), !0) : A(),
                        h
                }(e, m);
                return (0,
                    h.Qy)(e, _, "api"),
                    (0,
                        h.Qy)(e, A, "exposed"),
                    (0,
                        h.EZ)("activatedFeatures", p.T),
                    _
            }
        },
        3325: (e, t, r) => {
            r.d(t, {
                D: () => n,
                p: () => i
            });
            const n = {
                ajax: "ajax",
                jserrors: "jserrors",
                metrics: "metrics",
                pageAction: "page_action",
                pageViewEvent: "page_view_event",
                pageViewTiming: "page_view_timing",
                sessionReplay: "session_replay",
                sessionTrace: "session_trace",
                spa: "spa"
            },
                i = {
                    [n.pageViewEvent]: 1,
                    [n.pageViewTiming]: 2,
                    [n.metrics]: 3,
                    [n.jserrors]: 4,
                    [n.ajax]: 5,
                    [n.sessionTrace]: 6,
                    [n.pageAction]: 7,
                    [n.spa]: 8,
                    [n.sessionReplay]: 9
                }
        }
    },
        n = {};

    function i(e) {
        var t = n[e];
        if (void 0 !== t)
            return t.exports;
        var o = n[e] = {
            exports: {}
        };
        return r[e](o, o.exports, i),
            o.exports
    }
    i.m = r,
        i.d = (e, t) => {
            for (var r in t)
                i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        },
        i.f = {},
        i.e = e => Promise.all(Object.keys(i.f).reduce(((t, r) => (i.f[r](e, t),
            t)), [])),
        i.u = e => (({
            78: "page_action-aggregate",
            147: "metrics-aggregate",
            242: "session-manager",
            317: "jserrors-aggregate",
            348: "page_view_timing-aggregate",
            412: "lazy-feature-loader",
            439: "async-api",
            538: "recorder",
            590: "session_replay-aggregate",
            675: "compressor",
            733: "session_trace-aggregate",
            786: "page_view_event-aggregate",
            873: "spa-aggregate",
            898: "ajax-aggregate"
        }[e] || e) + "." + {
            78: "ac76d497",
            147: "3dc53903",
            148: "1a20d5fe",
            242: "2a64278a",
            317: "49e41428",
            348: "bd6de33a",
            412: "2f55ce66",
            439: "30bd804e",
            538: "1b18459f",
            590: "cf0efb30",
            675: "ae9f91a8",
            733: "83105561",
            786: "06482edd",
            860: "03a8b7a5",
            873: "e6b09d52",
            898: "998ef92b"
        }[e] + "-1.236.0.min.js"),
        i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        e = {},
        t = "NRBA:",
        i.l = (r, n, o, a) => {
            if (e[r])
                e[r].push(n);
            else {
                var s, c;
                if (void 0 !== o)
                    for (var d = document.getElementsByTagName("script"), u = 0; u < d.length; u++) {
                        var l = d[u];
                        if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == t + o) {
                            s = l;
                            break
                        }
                    }
                s || (c = !0,
                    (s = document.createElement("script")).charset = "utf-8",
                    s.timeout = 120,
                    i.nc && s.setAttribute("nonce", i.nc),
                    s.setAttribute("data-webpack", t + o),
                    s.src = r),
                    e[r] = [n];
                var f = (t, n) => {
                    s.onerror = s.onload = null,
                        clearTimeout(h);
                    var i = e[r];
                    if (delete e[r],
                        s.parentNode && s.parentNode.removeChild(s),
                        i && i.forEach((e => e(n))),
                        t)
                        return t(n)
                },
                    h = setTimeout(f.bind(null, void 0, {
                        type: "timeout",
                        target: s
                    }), 12e4);
                s.onerror = f.bind(null, s.onerror),
                    s.onload = f.bind(null, s.onload),
                    c && document.head.appendChild(s)
            }
        },
        i.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        },
        i.j = 94,
        i.p = "https://js-agent.newrelic.com/",
        (() => {
            var e = {
                94: 0,
                193: 0
            };
            i.f.j = (t, r) => {
                var n = i.o(e, t) ? e[t] : void 0;
                if (0 !== n)
                    if (n)
                        r.push(n[2]);
                    else {
                        var o = new Promise(((r, i) => n = e[t] = [r, i]));
                        r.push(n[2] = o);
                        var a = i.p + i.u(t),
                            s = new Error;
                        i.l(a, (r => {
                            if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0),
                                n)) {
                                var o = r && ("load" === r.type ? "missing" : r.type),
                                    a = r && r.target && r.target.src;
                                s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")",
                                    s.name = "ChunkLoadError",
                                    s.type = o,
                                    s.request = a,
                                    n[1](s)
                            }
                        }), "chunk-" + t, t)
                    }
            };
            var t = (t, r) => {
                var n, o, [a, s, c] = r,
                    d = 0;
                if (a.some((t => 0 !== e[t]))) {
                    for (n in s)
                        i.o(s, n) && (i.m[n] = s[n]);
                    if (c)
                        c(i)
                }
                for (t && t(r); d < a.length; d++)
                    o = a[d],
                        i.o(e, o) && e[o] && e[o][0](),
                        e[o] = 0
            },
                r = window.webpackChunkNRBA = window.webpackChunkNRBA || [];
            r.forEach(t.bind(null, 0)),
                r.push = t.bind(null, r.push.bind(r))
        })();
    var o = {};
    (() => {
        i.r(o);
        var e = i(3325),
            t = i(5763);
        const r = Object.values(e.D);

        function n(e) {
            const n = {};
            return r.forEach((r => {
                n[r] = function (e, r) {
                    return !1 !== (0,
                        t.Mt)(r, "".concat(e, ".enabled"))
                }(r, e)
            })),
                n
        }
        var a = i(9144);
        var s = i(5546),
            c = i(385),
            d = i(8e3),
            u = i(5938),
            l = i(3960),
            f = i(50);
        class h extends u.W {
            constructor(e, t, r) {
                let n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                super(e, t, r),
                    this.auto = n,
                    this.abortHandler,
                    this.featAggregate,
                    this.onAggregateImported,
                    n && (0,
                        d.R)(e, r)
            }
            importAggregator() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (this.featAggregate || !this.auto)
                    return;
                const r = c.il && !0 === (0,
                    t.Mt)(this.agentIdentifier, "privacy.cookies_enabled");
                let n;
                this.onAggregateImported = new Promise((e => {
                    n = e
                }));
                const o = async () => {
                    let t;
                    try {
                        if (r) {
                            const {
                                setupAgentSession: e
                            } = await Promise.all([i.e(860), i.e(242)]).then(i.bind(i, 3228));
                            t = e(this.agentIdentifier)
                        }
                    } catch (e) {
                        (0,
                            f.Z)("A problem occurred when starting up session manager. This page will not start or extend any session.", e)
                    }
                    try {
                        if (!this.shouldImportAgg(this.featureName, t))
                            return void (0,
                                d.L)(this.agentIdentifier, this.featureName);
                        const {
                            lazyFeatureLoader: r
                        } = await i.e(412).then(i.bind(i, 8582)), {
                            Aggregate: o
                        } = await r(this.featureName, "aggregate");
                        this.featAggregate = new o(this.agentIdentifier, this.aggregator, e),
                            n(!0)
                    } catch (e) {
                        (0,
                            f.Z)("Downloading and initializing ".concat(this.featureName, " failed..."), e),
                            this.abortHandler?.(),
                            n(!1)
                    }
                };
                c.il ? (0,
                    l.b)((() => o()), !0) : o()
            }
            shouldImportAgg(r, n) {
                return r !== e.D.sessionReplay || !1 !== (0,
                    t.Mt)(this.agentIdentifier, "session_trace.enabled") && (!!n?.isNew || !!n?.state.sessionReplay)
            }
        }
        var g = i(7633),
            p = i(7894);
        class v extends h {
            static featureName = g.t9;
            constructor(r, n) {
                let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (super(r, n, g.t9, i),
                    ("undefined" == typeof PerformanceNavigationTiming || c.Tt) && "undefined" != typeof PerformanceTiming) {
                    const n = (0,
                        t.OP)(r);
                    n[g.Dz] = Math.max(Date.now() - n.offset, 0),
                        (0,
                            l.K)((() => n[g.qw] = Math.max((0,
                                p.z)() - n[g.Dz], 0))),
                        (0,
                            l.b)((() => {
                                const t = (0,
                                    p.z)();
                                n[g.OJ] = Math.max(t - n[g.Dz], 0),
                                    (0,
                                        s.p)("timing", ["load", t], void 0, e.D.pageViewTiming, this.ee)
                            }))
                }
                this.importAggregator()
            }
        }
        var m = i(1117),
            b = i(1284);
        class y extends m.w {
            constructor(e) {
                super(e),
                    this.aggregatedData = {}
            }
            store(e, t, r, n, i) {
                var o = this.getBucket(e, t, r, i);
                return o.metrics = function (e, t) {
                    t || (t = {
                        count: 0
                    });
                    return t.count += 1,
                        (0,
                            b.D)(e, (function (e, r) {
                                t[e] = w(r, t[e])
                            })),
                        t
                }(n, o.metrics),
                    o
            }
            merge(e, t, r, n, i) {
                var o = this.getBucket(e, t, n, i);
                if (o.metrics) {
                    var a = o.metrics;
                    a.count += r.count,
                        (0,
                            b.D)(r, (function (e, t) {
                                if ("count" !== e) {
                                    var n = a[e],
                                        i = r[e];
                                    i && !i.c ? a[e] = w(i.t, n) : a[e] = function (e, t) {
                                        if (!t)
                                            return e;
                                        t.c || (t = x(t.t));
                                        return t.min = Math.min(e.min, t.min),
                                            t.max = Math.max(e.max, t.max),
                                            t.t += e.t,
                                            t.sos += e.sos,
                                            t.c += e.c,
                                            t
                                    }(i, a[e])
                                }
                            }))
                } else
                    o.metrics = r
            }
            storeMetric(e, t, r, n) {
                var i = this.getBucket(e, t, r);
                return i.stats = w(n, i.stats),
                    i
            }
            getBucket(e, t, r, n) {
                this.aggregatedData[e] || (this.aggregatedData[e] = {});
                var i = this.aggregatedData[e][t];
                return i || (i = this.aggregatedData[e][t] = {
                    params: r || {}
                },
                    n && (i.custom = n)),
                    i
            }
            get(e, t) {
                return t ? this.aggregatedData[e] && this.aggregatedData[e][t] : this.aggregatedData[e]
            }
            take(e) {
                for (var t = {}, r = "", n = !1, i = 0; i < e.length; i++)
                    t[r = e[i]] = A(this.aggregatedData[r]),
                        t[r].length && (n = !0),
                        delete this.aggregatedData[r];
                return n ? t : null
            }
        }

        function w(e, t) {
            return null == e ? function (e) {
                e ? e.c++ : e = {
                    c: 1
                };
                return e
            }(t) : t ? (t.c || (t = x(t.t)),
                t.c += 1,
                t.t += e,
                t.sos += e * e,
                e > t.max && (t.max = e),
                e < t.min && (t.min = e),
                t) : {
                t: e
            }
        }

        function x(e) {
            return {
                t: e,
                min: e,
                max: e,
                sos: e * e,
                c: 1
            }
        }

        function A(e) {
            return "object" != typeof e ? [] : (0,
                b.D)(e, E)
        }

        function E(e, t) {
            return t
        }
        var _ = i(8632),
            D = i(4402),
            T = i(4351);
        var j = i(7956),
            O = i(3239),
            S = i(9251);
        class P extends h {
            static featureName = S.t;
            constructor(e, r) {
                let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                super(e, r, S.t, n),
                    c.il && ((0,
                        t.OP)(e).initHidden = Boolean("hidden" === document.visibilityState),
                        (0,
                            j.N)((() => (0,
                                s.p)("docHidden", [(0,
                                    p.z)()], void 0, S.t, this.ee)), !0),
                        (0,
                            O.bP)("pagehide", (() => (0,
                                s.p)("winPagehide", [(0,
                                    p.z)()], void 0, S.t, this.ee))),
                        this.importAggregator())
            }
        }
        var C = i(3081);
        class N extends h {
            static featureName = C.t9;
            constructor(e, t) {
                let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                super(e, t, C.t9, r),
                    this.importAggregator()
            }
        }
        var R, I = i(2210),
            k = i(1214),
            H = i(2177),
            z = {};
        try {
            R = localStorage.getItem("__nr_flags").split(","),
                console && "function" == typeof console.log && (z.console = !0,
                    -1 !== R.indexOf("dev") && (z.dev = !0),
                    -1 !== R.indexOf("nr_dev") && (z.nrDev = !0))
        } catch (e) { }

        function L(e) {
            try {
                z.console && L(e)
            } catch (e) { }
        }
        z.nrDev && H.ee.on("internal-error", (function (e) {
            L(e.stack)
        })),
            z.dev && H.ee.on("fn-err", (function (e, t, r) {
                L(r.stack)
            })),
            z.dev && (L("NR AGENT IN DEVELOPMENT MODE"),
                L("flags: " + (0,
                    b.D)(z, (function (e, t) {
                        return e
                    })).join(", ")));
        var M = i(6660);
        class B extends h {
            static featureName = M.t;
            constructor(r, n) {
                let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                super(r, n, M.t, i),
                    this.skipNext = 0;
                try {
                    this.removeOnAbort = new AbortController
                } catch (e) { }
                const o = this;
                o.ee.on("fn-start", (function (e, t, r) {
                    o.abortHandler && (o.skipNext += 1)
                })),
                    o.ee.on("fn-err", (function (t, r, n) {
                        o.abortHandler && !n[M.A] && ((0,
                            I.X)(n, M.A, (function () {
                                return !0
                            })),
                            this.thrown = !0,
                            (0,
                                s.p)("err", [n, (0,
                                    p.z)()], void 0, e.D.jserrors, o.ee))
                    })),
                    o.ee.on("fn-end", (function () {
                        o.abortHandler && !this.thrown && o.skipNext > 0 && (o.skipNext -= 1)
                    })),
                    o.ee.on("internal-error", (function (t) {
                        (0,
                            s.p)("ierr", [t, (0,
                                p.z)(), !0], void 0, e.D.jserrors, o.ee)
                    })),
                    this.origOnerror = c._A.onerror,
                    c._A.onerror = this.onerrorHandler.bind(this),
                    c._A.addEventListener("unhandledrejection", (t => {
                        const r = function (e) {
                            let t = "Unhandled Promise Rejection: ";
                            if (e instanceof Error)
                                try {
                                    return e.message = t + e.message,
                                        e
                                } catch (t) {
                                    return e
                                }
                            if (void 0 === e)
                                return new Error(t);
                            try {
                                return new Error(t + (0,
                                    T.P)(e))
                            } catch (e) {
                                return new Error(t)
                            }
                        }(t.reason);
                        (0,
                            s.p)("err", [r, (0,
                                p.z)(), !1, {
                                    unhandledPromiseRejection: 1
                                }], void 0, e.D.jserrors, this.ee)
                    }), (0,
                        O.m$)(!1, this.removeOnAbort?.signal)),
                    (0,
                        k.gy)(this.ee),
                    (0,
                        k.BV)(this.ee),
                    (0,
                        k.em)(this.ee),
                    (0,
                        t.OP)(r).xhrWrappable && (0,
                            k.Kf)(this.ee),
                    this.abortHandler = this.#e,
                    this.importAggregator()
            }
            #e() {
                this.removeOnAbort?.abort(),
                    this.abortHandler = void 0
            }
            onerrorHandler(t, r, n, i, o) {
                "function" == typeof this.origOnerror && this.origOnerror(...arguments);
                try {
                    this.skipNext ? this.skipNext -= 1 : (0,
                        s.p)("err", [o || new q(t, r, n), (0,
                            p.z)()], void 0, e.D.jserrors, this.ee)
                } catch (t) {
                    try {
                        (0,
                            s.p)("ierr", [t, (0,
                                p.z)(), !0], void 0, e.D.jserrors, this.ee)
                    } catch (e) { }
                }
                return !1
            }
        }

        function q(e, t, r) {
            this.message = e || "Uncaught error with no additional information",
                this.sourceURL = t,
                this.line = r
        }
        let F = 1;
        const U = "nr@id";

        function G(e) {
            const t = typeof e;
            return !e || "object" !== t && "function" !== t ? -1 : e === c._A ? 0 : (0,
                I.X)(e, U, (function () {
                    return F++
                }))
        }

        function V(e) {
            if ("string" == typeof e && e.length)
                return e.length;
            if ("object" == typeof e) {
                if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer && e.byteLength)
                    return e.byteLength;
                if ("undefined" != typeof Blob && e instanceof Blob && e.size)
                    return e.size;
                if (!("undefined" != typeof FormData && e instanceof FormData))
                    try {
                        return (0,
                            T.P)(e).length
                    } catch (e) {
                        return
                    }
            }
        }
        var X = i(7243);
        class W {
            constructor(e) {
                this.agentIdentifier = e,
                    this.generateTracePayload = this.generateTracePayload.bind(this),
                    this.shouldGenerateTrace = this.shouldGenerateTrace.bind(this)
            }
            generateTracePayload(e) {
                if (!this.shouldGenerateTrace(e))
                    return null;
                var r = (0,
                    t.DL)(this.agentIdentifier);
                if (!r)
                    return null;
                var n = (r.accountID || "").toString() || null,
                    i = (r.agentID || "").toString() || null,
                    o = (r.trustKey || "").toString() || null;
                if (!n || !i)
                    return null;
                var a = (0,
                    D.M)(),
                    s = (0,
                        D.Ht)(),
                    c = Date.now(),
                    d = {
                        spanId: a,
                        traceId: s,
                        timestamp: c
                    };
                return (e.sameOrigin || this.isAllowedOrigin(e) && this.useTraceContextHeadersForCors()) && (d.traceContextParentHeader = this.generateTraceContextParentHeader(a, s),
                    d.traceContextStateHeader = this.generateTraceContextStateHeader(a, c, n, i, o)),
                    (e.sameOrigin && !this.excludeNewrelicHeader() || !e.sameOrigin && this.isAllowedOrigin(e) && this.useNewrelicHeaderForCors()) && (d.newrelicHeader = this.generateTraceHeader(a, s, c, n, i, o)),
                    d
            }
            generateTraceContextParentHeader(e, t) {
                return "00-" + t + "-" + e + "-01"
            }
            generateTraceContextStateHeader(e, t, r, n, i) {
                return i + "@nr=0-1-" + r + "-" + n + "-" + e + "----" + t
            }
            generateTraceHeader(e, t, r, n, i, o) {
                if (!("function" == typeof c._A?.btoa))
                    return null;
                var a = {
                    v: [0, 1],
                    d: {
                        ty: "Browser",
                        ac: n,
                        ap: i,
                        id: e,
                        tr: t,
                        ti: r
                    }
                };
                return o && n !== o && (a.d.tk = o),
                    btoa((0,
                        T.P)(a))
            }
            shouldGenerateTrace(e) {
                return this.isDtEnabled() && this.isAllowedOrigin(e)
            }
            isAllowedOrigin(e) {
                var r = !1,
                    n = {};
                if ((0,
                    t.Mt)(this.agentIdentifier, "distributed_tracing") && (n = (0,
                        t.P_)(this.agentIdentifier).distributed_tracing),
                    e.sameOrigin)
                    r = !0;
                else if (n.allowed_origins instanceof Array)
                    for (var i = 0; i < n.allowed_origins.length; i++) {
                        var o = (0,
                            X.e)(n.allowed_origins[i]);
                        if (e.hostname === o.hostname && e.protocol === o.protocol && e.port === o.port) {
                            r = !0;
                            break
                        }
                    }
                return r
            }
            isDtEnabled() {
                var e = (0,
                    t.Mt)(this.agentIdentifier, "distributed_tracing");
                return !!e && !!e.enabled
            }
            excludeNewrelicHeader() {
                var e = (0,
                    t.Mt)(this.agentIdentifier, "distributed_tracing");
                return !!e && !!e.exclude_newrelic_header
            }
            useNewrelicHeaderForCors() {
                var e = (0,
                    t.Mt)(this.agentIdentifier, "distributed_tracing");
                return !!e && !1 !== e.cors_use_newrelic_header
            }
            useTraceContextHeadersForCors() {
                var e = (0,
                    t.Mt)(this.agentIdentifier, "distributed_tracing");
                return !!e && !!e.cors_use_tracecontext_headers
            }
        }
        var Z = i(7825),
            Q = ["load", "error", "abort", "timeout"],
            K = Q.length,
            Y = t.Yu.REQ,
            $ = c._A.XMLHttpRequest;
        class J extends h {
            static featureName = Z.t;
            constructor(r, n) {
                let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                super(r, n, Z.t, i),
                    (0,
                        t.OP)(r).xhrWrappable && (this.dt = new W(r),
                            this.handler = (e, t, r, n) => (0,
                                s.p)(e, t, r, n, this.ee),
                            (0,
                                k.u5)(this.ee),
                            (0,
                                k.Kf)(this.ee),
                            function (r, n, i, o) {
                                function a(e) {
                                    var t = this;
                                    t.totalCbs = 0,
                                        t.called = 0,
                                        t.cbTime = 0,
                                        t.end = E,
                                        t.ended = !1,
                                        t.xhrGuids = {},
                                        t.lastSize = null,
                                        t.loadCaptureCalled = !1,
                                        t.params = this.params || {},
                                        t.metrics = this.metrics || {},
                                        e.addEventListener("load", (function (r) {
                                            D(t, e)
                                        }), (0,
                                            O.m$)(!1)),
                                        c.IF || e.addEventListener("progress", (function (e) {
                                            t.lastSize = e.loaded
                                        }), (0,
                                            O.m$)(!1))
                                }

                                function s(e) {
                                    this.params = {
                                        method: e[0]
                                    },
                                        _(this, e[1]),
                                        this.metrics = {}
                                }

                                function d(e, n) {
                                    var i = (0,
                                        t.DL)(r);
                                    i.xpid && this.sameOrigin && n.setRequestHeader("X-NewRelic-ID", i.xpid);
                                    var a = o.generateTracePayload(this.parsedOrigin);
                                    if (a) {
                                        var s = !1;
                                        a.newrelicHeader && (n.setRequestHeader("newrelic", a.newrelicHeader),
                                            s = !0),
                                            a.traceContextParentHeader && (n.setRequestHeader("traceparent", a.traceContextParentHeader),
                                                a.traceContextStateHeader && n.setRequestHeader("tracestate", a.traceContextStateHeader),
                                                s = !0),
                                            s && (this.dt = a)
                                    }
                                }

                                function u(e, t) {
                                    var r = this.metrics,
                                        i = e[0],
                                        o = this;
                                    if (r && i) {
                                        var a = V(i);
                                        a && (r.txSize = a)
                                    }
                                    this.startTime = (0,
                                        p.z)(),
                                        this.listener = function (e) {
                                            try {
                                                "abort" !== e.type || o.loadCaptureCalled || (o.params.aborted = !0),
                                                    ("load" !== e.type || o.called === o.totalCbs && (o.onloadCalled || "function" != typeof t.onload) && "function" == typeof o.end) && o.end(t)
                                            } catch (e) {
                                                try {
                                                    n.emit("internal-error", [e])
                                                } catch (e) { }
                                            }
                                        };
                                    for (var s = 0; s < K; s++)
                                        t.addEventListener(Q[s], this.listener, (0,
                                            O.m$)(!1))
                                }

                                function l(e, t, r) {
                                    this.cbTime += e,
                                        t ? this.onloadCalled = !0 : this.called += 1,
                                        this.called !== this.totalCbs || !this.onloadCalled && "function" == typeof r.onload || "function" != typeof this.end || this.end(r)
                                }

                                function f(e, t) {
                                    var r = "" + G(e) + !!t;
                                    this.xhrGuids && !this.xhrGuids[r] && (this.xhrGuids[r] = !0,
                                        this.totalCbs += 1)
                                }

                                function h(e, t) {
                                    var r = "" + G(e) + !!t;
                                    this.xhrGuids && this.xhrGuids[r] && (delete this.xhrGuids[r],
                                        this.totalCbs -= 1)
                                }

                                function g() {
                                    this.endTime = (0,
                                        p.z)()
                                }

                                function v(e, t) {
                                    t instanceof $ && "load" === e[0] && n.emit("xhr-load-added", [e[1], e[2]], t)
                                }

                                function m(e, t) {
                                    t instanceof $ && "load" === e[0] && n.emit("xhr-load-removed", [e[1], e[2]], t)
                                }

                                function b(e, t, r) {
                                    t instanceof $ && ("onload" === r && (this.onload = !0),
                                        ("load" === (e[0] && e[0].type) || this.onload) && (this.xhrCbStart = (0,
                                            p.z)()))
                                }

                                function y(e, t) {
                                    this.xhrCbStart && n.emit("xhr-cb-time", [(0,
                                        p.z)() - this.xhrCbStart, this.onload, t], t)
                                }

                                function w(e) {
                                    var t, r = e[1] || {};
                                    "string" == typeof e[0] ? t = e[0] : e[0] && e[0].url ? t = e[0].url : c._A?.URL && e[0] && e[0] instanceof URL && (t = e[0].href),
                                        t && (this.parsedOrigin = (0,
                                            X.e)(t),
                                            this.sameOrigin = this.parsedOrigin.sameOrigin);
                                    var n = o.generateTracePayload(this.parsedOrigin);
                                    if (n && (n.newrelicHeader || n.traceContextParentHeader))
                                        if ("string" == typeof e[0] || c._A?.URL && e[0] && e[0] instanceof URL) {
                                            var i = {};
                                            for (var a in r)
                                                i[a] = r[a];
                                            i.headers = new Headers(r.headers || {}),
                                                s(i.headers, n) && (this.dt = n),
                                                e.length > 1 ? e[1] = i : e.push(i)
                                        } else
                                            e[0] && e[0].headers && s(e[0].headers, n) && (this.dt = n);

                                    function s(e, t) {
                                        var r = !1;
                                        return t.newrelicHeader && (e.set("newrelic", t.newrelicHeader),
                                            r = !0),
                                            t.traceContextParentHeader && (e.set("traceparent", t.traceContextParentHeader),
                                                t.traceContextStateHeader && e.set("tracestate", t.traceContextStateHeader),
                                                r = !0),
                                            r
                                    }
                                }

                                function x(e, t) {
                                    this.params = {},
                                        this.metrics = {},
                                        this.startTime = (0,
                                            p.z)(),
                                        this.dt = t,
                                        e.length >= 1 && (this.target = e[0]),
                                        e.length >= 2 && (this.opts = e[1]);
                                    var r, n = this.opts || {},
                                        i = this.target;
                                    "string" == typeof i ? r = i : "object" == typeof i && i instanceof Y ? r = i.url : c._A?.URL && "object" == typeof i && i instanceof URL && (r = i.href),
                                        _(this, r);
                                    var o = ("" + (i && i instanceof Y && i.method || n.method || "GET")).toUpperCase();
                                    this.params.method = o,
                                        this.txSize = V(n.body) || 0
                                }

                                function A(t, r) {
                                    var n;
                                    this.endTime = (0,
                                        p.z)(),
                                        this.params || (this.params = {}),
                                        this.params.status = r ? r.status : 0,
                                        "string" == typeof this.rxSize && this.rxSize.length > 0 && (n = +this.rxSize);
                                    var o = {
                                        txSize: this.txSize,
                                        rxSize: n,
                                        duration: (0,
                                            p.z)() - this.startTime
                                    };
                                    i("xhr", [this.params, o, this.startTime, this.endTime, "fetch"], this, e.D.ajax)
                                }

                                function E(t) {
                                    var r = this.params,
                                        n = this.metrics;
                                    if (!this.ended) {
                                        this.ended = !0;
                                        for (var o = 0; o < K; o++)
                                            t.removeEventListener(Q[o], this.listener, !1);
                                        r.aborted || (n.duration = (0,
                                            p.z)() - this.startTime,
                                            this.loadCaptureCalled || 4 !== t.readyState ? null == r.status && (r.status = 0) : D(this, t),
                                            n.cbTime = this.cbTime,
                                            i("xhr", [r, n, this.startTime, this.endTime, "xhr"], this, e.D.ajax))
                                    }
                                }

                                function _(e, t) {
                                    var r = (0,
                                        X.e)(t),
                                        n = e.params;
                                    n.hostname = r.hostname,
                                        n.port = r.port,
                                        n.protocol = r.protocol,
                                        n.host = r.hostname + ":" + r.port,
                                        n.pathname = r.pathname,
                                        e.parsedOrigin = r,
                                        e.sameOrigin = r.sameOrigin
                                }

                                function D(e, t) {
                                    e.params.status = t.status;
                                    var r = function (e, t) {
                                        var r = e.responseType;
                                        return "json" === r && null !== t ? t : "arraybuffer" === r || "blob" === r || "json" === r ? V(e.response) : "text" === r || "" === r || void 0 === r ? V(e.responseText) : void 0
                                    }(t, e.lastSize);
                                    if (r && (e.metrics.rxSize = r),
                                        e.sameOrigin) {
                                        var n = t.getResponseHeader("X-NewRelic-App-Data");
                                        n && (e.params.cat = n.split(", ").pop())
                                    }
                                    e.loadCaptureCalled = !0
                                }
                                n.on("new-xhr", a),
                                    n.on("open-xhr-start", s),
                                    n.on("open-xhr-end", d),
                                    n.on("send-xhr-start", u),
                                    n.on("xhr-cb-time", l),
                                    n.on("xhr-load-added", f),
                                    n.on("xhr-load-removed", h),
                                    n.on("xhr-resolved", g),
                                    n.on("addEventListener-end", v),
                                    n.on("removeEventListener-end", m),
                                    n.on("fn-end", y),
                                    n.on("fetch-before-start", w),
                                    n.on("fetch-start", x),
                                    n.on("fn-start", b),
                                    n.on("fetch-done", A)
                            }(r, this.ee, this.handler, this.dt),
                            this.importAggregator())
            }
        }
        var ee = i(3614);
        const {
            BST_RESOURCE: te,
            RESOURCE: re,
            START: ne,
            END: ie,
            FEATURE_NAME: oe,
            FN_END: ae,
            FN_START: se,
            PUSH_STATE: ce
        } = ee;
        var de = i(4649);
        class ue extends h {
            static featureName = de.t;
            constructor(e, t) {
                let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                super(e, t, de.t, r),
                    this.importAggregator()
            }
        }
        new class {
            constructor(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0,
                    D.ky)(16);
                c._A ? (this.agentIdentifier = t,
                    this.sharedAggregator = new y({
                        agentIdentifier: this.agentIdentifier
                    }),
                    this.features = {},
                    this.desiredFeatures = new Set(e.features || []),
                    this.desiredFeatures.add(v),
                    Object.assign(this, (0,
                        a.j)(this.agentIdentifier, e, e.loaderType || "agent")),
                    this.start()) : (0,
                        f.Z)("Failed to initial the agent. Could not determine the runtime environment.")
            }
            get config() {
                return {
                    info: (0,
                        t.C5)(this.agentIdentifier),
                    init: (0,
                        t.P_)(this.agentIdentifier),
                    loader_config: (0,
                        t.DL)(this.agentIdentifier),
                    runtime: (0,
                        t.OP)(this.agentIdentifier)
                }
            }
            start() {
                const t = "features";
                try {
                    const r = n(this.agentIdentifier),
                        i = [...this.desiredFeatures];
                    i.sort(((t, r) => e.p[t.featureName] - e.p[r.featureName])),
                        i.forEach((t => {
                            if (r[t.featureName] || t.featureName === e.D.pageViewEvent) {
                                const n = function (t) {
                                    switch (t) {
                                        case e.D.ajax:
                                            return [e.D.jserrors];
                                        case e.D.sessionTrace:
                                            return [e.D.ajax, e.D.pageViewEvent];
                                        case e.D.sessionReplay:
                                            return [e.D.sessionTrace];
                                        case e.D.pageViewTiming:
                                            return [e.D.pageViewEvent];
                                        default:
                                            return []
                                    }
                                }(t.featureName);
                                n.every((e => r[e])) || (0,
                                    f.Z)("".concat(t.featureName, " is enabled but one or more dependent features has been disabled (").concat((0,
                                        T.P)(n), "). This may cause unintended consequences or missing data...")),
                                    this.features[t.featureName] = new t(this.agentIdentifier, this.sharedAggregator)
                            }
                        })),
                        (0,
                            _.Qy)(this.agentIdentifier, this.features, t)
                } catch (e) {
                    (0,
                        f.Z)("Failed to initialize all enabled instrument classes (agent aborted) -", e);
                    for (const e in this.features)
                        this.features[e].abortHandler?.();
                    const r = (0,
                        _.fP)();
                    return delete r.initializedAgents[this.agentIdentifier]?.api,
                        delete r.initializedAgents[this.agentIdentifier]?.[t],
                        delete this.sharedAggregator,
                        r.ee?.abort(),
                        delete r.ee?.get(this.agentIdentifier),
                        !1
                }
            }
        }
            ({
                features: [v, P, class extends h {
                    static featureName = oe;
                    constructor(t, r) {
                        if (super(t, r, oe, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]),
                            !c.il)
                            return;
                        const n = this.ee;
                        let i;
                        (0,
                            k.QU)(n),
                            this.eventsEE = (0,
                                k.em)(n),
                            this.eventsEE.on(se, (function (e, t) {
                                this.bstStart = (0,
                                    p.z)()
                            })),
                            this.eventsEE.on(ae, (function (t, r) {
                                (0,
                                    s.p)("bst", [t[0], r, this.bstStart, (0,
                                        p.z)()], void 0, e.D.sessionTrace, n)
                            })),
                            n.on(ce + ne, (function (e) {
                                this.time = (0,
                                    p.z)(),
                                    this.startPath = location.pathname + location.hash
                            })),
                            n.on(ce + ie, (function (t) {
                                (0,
                                    s.p)("bstHist", [location.pathname + location.hash, this.startPath, this.time], void 0, e.D.sessionTrace, n)
                            }));
                        try {
                            i = new PerformanceObserver((t => {
                                const r = t.getEntries();
                                (0,
                                    s.p)(te, [r], void 0, e.D.sessionTrace, n)
                            })),
                                i.observe({
                                    type: re,
                                    buffered: !0
                                })
                        } catch (e) { }
                        this.importAggregator({
                            resourceObserver: i
                        })
                    }
                }, J, N, ue, B],
                loaderType: "pro"
            })
    })(),
        window.NRBA = o
})();
