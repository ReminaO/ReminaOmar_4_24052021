/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) {
("undefined" != typeof window ? window : this, function(a, b) {
})
        cssNumber: {
            columnCount: !0;
            fillOpacity: !0;
            fontWeight: !0;
            lineHeight: !0;
            opacity: !0;
            order: !0;
            orphans: !0;
            widows: !0;
            zIndex: !0;
            zoom: !0;
        };

 o.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
    })
     o.each({
            slideDown: Tb("show"),
            slideUp: Tb("hide"),
            slideToggle: Tb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, o.timers = [], o.fx.tick = function() {
        }, o.fx.timer = function(a) {
        }, o.fx.interval = 13, o.fx.start = function() {
        }, o.fx.stop = function() {
        }, o.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        });
    var Yb, Zb, $b = o.expr.attrHandle
    o.fn.extend({
        attr: function(a, b) {
        },
        removeAttr: function(a) {
            
        }
    }), o.extend({
        attr: function(a, b, c) {
        },
        removeAttr: function(a, b) {
         },
    }), Zb = {
        set: function(a, b, c) {
        }
    },
        o.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {

        },
        propHooks: {
            tabIndex: {
                get: function(a) {

                }
            }
        }
    }), o.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        o.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    o.fn.extend({
    });
    var bc = /\r/g;
    o.fn.extend({
    }), o.extend({
        valHooks: {
        }
    }), o.each(["radio", "checkbox"], function() {
    }), o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    }), o.fn.extend({
    });
    var cc = o.now(),
        dc = /\?/;
    o.parseJSON = function(a) {
     };
    var ec, fc, gc = /#.*$/,
        hc = /([?&])_=[^&]*/,
        ic = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        kc = /^(?:GET|HEAD)$/,
        lc = /^\/\//,
        mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        nc = {},
        oc = {},
        pc = "*/".concat("*");
    try {
        fc = location.href
    } catch (qc) {
        fc = m.createElement("a"), fc.href = "", fc = fc.href
    }
    ec = mc.exec(fc.toLowerCase()) || [];
    o.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fc,
            type: "GET",
            isLocal: jc.test(ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": pc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": o.parseJSON,
                "text xml": o.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
        },
        ajaxPrefilter: rc(nc),
        ajaxTransport: rc(oc),
        ajax: function(a, b) {
    }, 

});
    var Cc = 0,
        Dc = {},
        Ec = {
            0: 200,
            1223: 204
        },
        Fc = o.ajaxSettings.xhr();
        o.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return o.globalEval(a), a
            }
        }
    }), o.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }),
    o.ajaxSetup ({
        jsonp: "callback",
        jsonpCallback: function() {
        }
    })
    var Ic = o.fn.load;
    o.fn.load = function(a, b, c) {

    },
    
     o.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        
    }), o.each(["top", "left"], function(a, b) {
        o.cssHooks[b] = yb(l.pixelPosition, function(a, c) {
        })
    }), o.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
    }), o.fn.size = function() {
    }, o.fn.andSelf = o.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    });
    var Lc = a.jQuery,
        Mc = a.$;
    typeof b === U && (a.jQuery = a.$ = o), o
}
