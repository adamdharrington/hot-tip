(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{174:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),r=n(178),o=(n(175),"A piece of text."),c=["A very long piece of text.",o,o,o,o,o,o,o,o].join(" ");e.default=function(){return a.a.createElement(r.b,null,a.a.createElement("div",{className:"frame-examples"},a.a.createElement(r.a,{tip:c,position:"top"},a.a.createElement("div",{className:"tip top-left"},"TOP")),a.a.createElement(r.a,{tip:c,position:"top"},a.a.createElement("div",{className:"tip top-center"},"TOP")),a.a.createElement(r.a,{tip:c,position:"top"},a.a.createElement("div",{className:"tip top-right"},"TOP")),a.a.createElement(r.a,{tip:c,position:"left"},a.a.createElement("div",{className:"tip left"},"LEFT")),a.a.createElement(r.a,{tip:c},a.a.createElement("div",{className:"tip center"},"DEFAULT")),a.a.createElement(r.a,{tip:c,position:"right"},a.a.createElement("div",{className:"tip right"},"RIGHT")),a.a.createElement(r.a,{tip:c},a.a.createElement("div",{className:"tip bottom-left"},"BOTTOM")),a.a.createElement(r.a,{tip:c},a.a.createElement("div",{className:"tip bottom-center"},"BOTTOM")),a.a.createElement(r.a,{tip:c},a.a.createElement("div",{className:"tip bottom-right"},"BOTTOM"))))}},178:function(t,e,n){"use strict";n.d(e,"a",function(){return h}),n.d(e,"b",function(){return O});var i=n(0),a=n.n(i),r=(n(11),n(179)),o=Object(i.createContext)([{},function(t){return t}]),c=(o.Consumer,"HOT_TIP::UPDATE_TOOLTIP");function l(){return{type:c,payload:{visible:!1}}}var s=function(t,e){var n=t.left,i=t.top,a=t.width,r=t.height,o=t.clientWidth,c=t.clientHeight;if(!e&&i+r+40>=c)return u(t,!0);var l=n+a/2,s=l<100;return{x:l,y:i+r,positionClass:"bottom",layoutClass:s?"left-offset":!s&&l+100>o?"right-offset":"centred"}},u=function(t,e){var n=t.top,i=s(t,!0);return!e&&n-40<=0?i:Object(r.a)({},i,{y:n,positionClass:"top"})},p=function(t,e){var n=t.left,i=t.top,a=t.width,r=t.height,o=t.clientWidth,c=t.clientHeight;if(!e&&n+a+200>=o)return f(t,!0);var l=i+r/2,s=l<50;return{x:n+a,y:l,positionClass:"right",layoutClass:s?"top-offset":!s&&l+50>c?"bottom-offset":"mid"}},f=function(t,e){var n=t.left,i=p(t,e);return!e&&n-200<=0?i:Object(r.a)({},i,{x:n,positionClass:"left"})},d=function(t){switch(t){case"top":return u;case"right":return p;case"left":return f;case"bottom":default:return s}},m=function(t){var e=t.currentTarget.getBoundingClientRect(),n=e.top,i=e.left,a=e.width,r=e.height,o=window,c=o.pageXOffset,l=o.pageYOffset,s=document.body,u=s.scrollTop,p=s.clientTop,f=s.scrollLeft,d=s.clientLeft,m=s.clientWidth,h=s.clientHeight;return{top:n+Math.max(l,u)-p,left:i+Math.max(c,f)-d,width:a,height:r,clientWidth:m,clientHeight:h}};function h(t){var e=t.position,n=t.tip,a=t.children,r=Object(i.useContext)(o)[1];function s(t){var i=m(t),a=d(e)(i);r(function(t,e){return{type:c,payload:{tip:t,visible:!0,position:e}}}(n,a))}function u(){r(l())}Object(i.useEffect)(function(){return u},[]);var p=function(t){switch(typeof t){case"undefined":case"string":return"WRAP";case"function":return"RENDER_PROPS";default:return t.length?"WRAP":"CLONE"}}(a),f={tabIndex:0,"aria-describedby":"ht-anchor",onMouseOver:s,onFocus:s,onMouseOut:u,onBlur:u};return n?"WRAP"===p?Object(i.createElement)("span",f,a):"RENDER_PROPS"===p?a(f):Object(i.cloneElement)(a,f):a}function v(){var t=Object(i.useContext)(o),e=t[0],n=t[1],r=e.tip,c=e.positionClass,s=e.layoutClass,u=e.x,p=e.y,f=["hot-tip",c,s].join(" ");function d(t){"Escape"===t.key&&n(l())}return Object(i.useEffect)(function(){return window.addEventListener("keyup",d),function(){window.removeEventListener("keydown",d)}},[]),a.a.createElement("div",{id:"ht-anchor",role:"tooltip","aria-hidden":"false",className:f,style:{top:p,left:u}},a.a.createElement("div",{className:"ht-point"}),a.a.createElement("div",{className:"ht-body"},"function"!=typeof r?r:r()))}function E(){var t=Object(i.useContext)(o)[0].visible;return Boolean(t)?a.a.createElement(v,null):a.a.createElement("div",{id:"ht-anchor",role:"tooltip","aria-hidden":"true"})}function b(t,e){void 0===t&&(t={});var n=e.type,i=e.payload;switch(n){case c:return Object(r.a)({},t,{tip:i.tip,visible:i.visible},i.position);default:return t}}function O(t){var e=t.children,n=Object(i.useReducer)(b,{});return a.a.createElement(o.Provider,{value:n},a.a.createElement(a.a.Fragment,null,a.a.createElement(E,null),e))}h.defaultProps={position:"bottom",tip:""},v.displayName="HotTipDisplay",E.displayName="HotTipAnchor"},179:function(t,e,n){"use strict";function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}n.d(e,"a",function(){return i})}}]);
//# sourceMappingURL=component---src-pages-frame-example-js-dd670723b1ccef0fa255.js.map