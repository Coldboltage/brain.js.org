(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples"],{"127d":function(t,e,n){(function(){var e=this,n={};function i(t){i.installed||(i.installed=!0,t.component("bulma-accordion",u),t.component("bulma-accordion-item",p))}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var o={caretAnimation:{duration:"450ms",timerFunc:"ease 0s"},dropdown:!1,icon:"caret",slide:{duration:"700ms",timerFunc:"ease 0s"}},c=function(){function t(e){r(this,t),this.open_items=[],this.current_id=1,this.initially_open=null,this.config=e}return s(t,[{key:"setInitiallyOpen",value:function(t){var e=this;this.initially_open=t,"string"==typeof t||"number"==typeof t?this._addItem(t.toString()):Array.isArray(t)&&t.forEach((function(t){e._addItem(t.toString())}))}},{key:"getNextId",value:function(){var t=this.current_id.toString();return this.current_id+=1,t}},{key:"isOpen",value:function(t){return this.open_items.includes(t)}},{key:"setOpen",value:function(t,e){e?this._addItem(t):this._removeItem(t)}},{key:"toggleOpen",value:function(t){this.open_items.includes(t)?this._removeItem(t):this._addItem(t)}},{key:"register",value:function(){return this.getNextId()}},{key:"_removeItem",value:function(t){var e=this.open_items.findIndex((function(e){return e===t}));-1!==e&&this.open_items.splice(e,1)}},{key:"_addItem",value:function(t){this.config.dropdown?this.open_items.push(t):this.open_items=[t]}}]),t}(),l=new c(o),u={name:"bulma-accordion",provide:{AccordionItemController:l,AccordionItemConfig:o},props:{initialOpenItem:{required:!1,type:[Number,String],default:null},initialOpenItems:{required:!1,type:Array,default:null,validator:function(t){return Array.isArray(t)&&!t.some((function(t){return"number"!=typeof t}))}},caretAnimation:{required:!1,type:Object,default:function(){return{duration:"450ms",timerFunc:"ease 0s"}},validator:function(t){return"string"==typeof t.duration&&"string"==typeof t.timerFunc||!0===t.none}},dropdown:{required:!1,type:Boolean,default:!1},icon:{required:!1,type:String,default:"caret",validator:function(t){return"caret"===t||"plus-minus"===t||"custom"===t}},slide:{required:!1,type:Object,default:function(){return{duration:"700ms",timerFunc:"ease 0s"}},validator:function(t){return"string"==typeof t.duration&&"string"==typeof t.timerFunc}}},beforeMount:function(){o.caretAnimation=this.caretAnimation,o.dropdown=this.dropdown,o.icon=this.icon,o.slide=this.slide,l.setInitiallyOpen(this.initialOpenItem||this.initialOpenItems)},data:function(){return{AccordionItemController:l}},methods:{}};"function"===typeof u&&(u=u.options),Object.assign(u,function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"accordion"},[t._t("default")],2)},e=[];return{render:t,staticRenderFns:e,_compiled:!0,_scopeId:null,functional:void 0}}());var d={props:{minus:{required:!0,type:Boolean}},computed:{verticalClasses:function(){return{vertical:!0,"vertical-rotated":this.minus}}}};function h(t){var e={transition:"transitionend",OTransition:"otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(e.hasOwnProperty(n)&&void 0!==t.style[n])return e[n];throw new Error("TransitionEnd event is not supported in this browser")}"function"===typeof d&&(d=d.options),Object.assign(d,function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"plus-minus"},[n("span",{staticClass:"horizontal"}),t._v(" "),n("span",{class:t.verticalClasses})])},e=[];return{render:t,staticRenderFns:e,_compiled:!0,_scopeId:"data-v-3ea109",functional:void 0}}());var p={name:"bulma-accordion-item",components:{PlusMinus:d},inject:["AccordionItemController","AccordionItemConfig"],mounted:function(){var t=this;this.uniqueId=this.AccordionItemController.register(),this.$nextTick((function(){var e=t.$refs.body,n=h(e);e.addEventListener(n,(function(n){"0px"!==e.style.height?t.autoHeightStart(e):(t.autoHeightStop(),t.showCardContent=!1)}))}))},beforeDestroy:function(){this.autoHeightStop()},data:function(){return{autoHeightInterval:null,showCardContent:!1,uniqueId:null}},watch:{isOpen:function(t){t?this.$emit("open"):this.$emit("close"),this.doTheSlide()}},computed:{config:function(){return this.AccordionItemConfig||o},dropdownIconClasses:function(){return{"header-icon":!0,"caret-down":this.isOpen}},card_classes:function(){return{card:!0,"card-active":this.isOpen}},card_content_classes:function(){return{"card-content":!0,"is-hidden":!this.showCardContent}},footerClasses:function(){return{"card-footer":!0,"is-hidden":!this.$slots.footer}},usingCustomIcon:function(){return"custom"===this.config.icon},showCaret:function(){return"caret"===this.config.icon},showPlus:function(){return"plus-minus"===this.config.icon&&!this.isOpen},showMinus:function(){return"plus-minus"===this.config.icon&&this.isOpen},slideStyle:function(){var t=this.config.slide;return{transition:"all ".concat(t.duration," ").concat(t.timerFunc)}},iconStyle:function(){var t=this.config.caretAnimation;return!0===t.none?{}:{transition:"all ".concat(t.duration," ").concat(t.timerFunc)}},isOpen:function(){return this.AccordionItemController.isOpen(this.uniqueId)}},methods:{setUniqueId:function(t){this.uniqueId=t},handleClick:function(){this.uniqueId&&this.AccordionItemController.toggleOpen(this.uniqueId)},collapse:function(){this.AccordionItemController.setOpen(this.uniqueId,!1)},toggleCollapsed:function(){this.AccordionItemController.toggleOpen(this.uniqueId)},doTheSlide:function(){var t=this,e=this.$refs.body;!0===this.isOpen?(this.showCardContent=!0,this.$nextTick().then((function(){t.adjustHeight(e,e.scrollHeight)}))):this.slideUp(e)},adjustHeight:function(t,e){t.style.height="".concat(e,"px")},slideUp:function(t){"auto"===t.style.height&&(t.style.height="".concat(t.scrollHeight,"px")),t.style.height="0px"},autoHeightStart:function(t){var e=this;this.autoHeightInterval&&this.autoHeightStop(),this.autoHeightInterval=setInterval((function(){try{var n=e.$refs.bodyContent.scrollHeight+e.$refs.bodyFooter.scrollHeight+1;"0px"!==t.style.height&&n!==t.style.height&&e.isOpen&&e.adjustHeight(t,n)}catch(i){e.autoHeightStop()}}),100)},autoHeightStop:function(){clearInterval(this.autoHeightInterval),this.autoHeightInterval=null}}};"function"===typeof p&&(p=p.options),Object.assign(p,function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.card_classes},[n("div",{staticClass:"card-header",on:{click:t.handleClick}},[n("p",{staticClass:"card-header-title"},[t._t("title")],2),t._v(" "),n("p",{staticClass:"card-header-icon"},[t.usingCustomIcon?n("span",{staticClass:"icon"},[t._t("icon"),t._v(" "),t.isOpen?t._t("icon-open"):t._t("icon-closed")],2):n("span",{staticClass:"icon"},[t.showCaret?n("span",{class:t.dropdownIconClasses,style:t.iconStyle},[n("svg",{attrs:{viewBox:"0 0 129 129"}},[n("g",[n("path",{attrs:{d:"M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"}})])])]):t._e(),t._v(" "),t.showPlus||t.showMinus?n("PlusMinus",{attrs:{minus:t.showMinus}}):t._e()],1)])]),t._v(" "),n("div",{ref:"body",staticClass:"accordion-body",style:t.slideStyle},[n("div",{ref:"bodyContent",class:t.card_content_classes},[t._t("content")],2),t._v(" "),n("div",{ref:"bodyFooter",class:t.footerClasses},[t._t("footer")],2)])])},e=[];return{render:t,staticRenderFns:e,_compiled:!0,_scopeId:"data-v-717e16",functional:void 0}}()),n.install=i;var f={install:i},v=null;"undefined"!=typeof window?v=window.Vue:"undefined"!=typeof e&&(v=e.Vue),v&&v.use(f);var m=u;n.BulmaAccordion=m;var g=p;n.BulmaAccordionItem=g,t.exports=n})()},"14c3":function(t,e,n){var i=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},5319:function(t,e,n){"use strict";var i=n("d784"),r=n("825a"),a=n("7b0b"),s=n("50c4"),o=n("a691"),c=n("1d80"),l=n("8aa5"),u=n("14c3"),d=Math.max,h=Math.min,p=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,n,i){var g=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,_=i.REPLACE_KEEPS_$0,x=g?"$":"$0";return[function(n,i){var r=c(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,r,i):e.call(String(r),n,i)},function(t,i){if(!g&&_||"string"===typeof i&&-1===i.indexOf(x)){var a=n(e,t,this,i);if(a.done)return a.value}var c=r(t),p=String(this),f="function"===typeof i;f||(i=String(i));var v=c.global;if(v){var b=c.unicode;c.lastIndex=0}var I=[];while(1){var C=u(c,p);if(null===C)break;if(I.push(C),!v)break;var E=String(C[0]);""===E&&(c.lastIndex=l(p,s(c.lastIndex),b))}for(var w="",S=0,A=0;A<I.length;A++){C=I[A];for(var O=String(C[0]),k=d(h(o(C.index),p.length),0),$=[],R=1;R<C.length;R++)$.push(m(C[R]));var T=C.groups;if(f){var j=[O].concat($,k,p);void 0!==T&&j.push(T);var B=String(i.apply(void 0,j))}else B=y(O,p,k,$,T,i);k>=S&&(w+=p.slice(S,k)+B,S=k+O.length)}return w+p.slice(S)}];function y(t,n,i,r,s,o){var c=i+t.length,l=r.length,u=v;return void 0!==s&&(s=a(s),u=f),e.call(o,u,(function(e,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,i);case"'":return n.slice(c);case"<":o=s[a.slice(1,-1)];break;default:var u=+a;if(0===u)return e;if(u>l){var d=p(u/10);return 0===d?e:d<=l?void 0===r[d-1]?a.charAt(1):r[d-1]+a.charAt(1):e}o=r[u-1]}return void 0===o?"":o}))}}))},6547:function(t,e,n){var i=n("a691"),r=n("1d80"),a=function(t){return function(e,n){var a,s,o=String(r(e)),c=i(n),l=o.length;return c<0||c>=l?t?"":void 0:(a=o.charCodeAt(c),a<55296||a>56319||c+1===l||(s=o.charCodeAt(c+1))<56320||s>57343?t?o.charAt(c):a:t?o.slice(c,c+2):s-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"7b0b":function(t,e,n){var i=n("1d80");t.exports=function(t){return Object(i(t))}},"7bcb":function(t,e,n){},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},9263:function(t,e,n){"use strict";var i=n("ad6d"),r=n("9f7f"),a=RegExp.prototype.exec,s=String.prototype.replace,o=a,c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(o=function(t){var e,n,r,o,d=this,h=l&&d.sticky,p=i.call(d),f=d.source,v=0,m=t;return h&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),m=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(f="(?: "+f+")",m=" "+m,v++),n=new RegExp("^(?:"+f+")",p)),u&&(n=new RegExp("^"+f+"$(?!\\s)",p)),c&&(e=d.lastIndex),r=a.call(h?n:d,m),h?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:c&&r&&(d.lastIndex=d.global?r.index+r[0].length:e),u&&r&&r.length>1&&s.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=o},"9f7f":function(t,e,n){"use strict";var i=n("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a451:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title is-3"},[t._v("Examples")]),n("h2",{staticClass:"subtitle is-4"},[t._v("Some quick samples to try Brain.js")]),n("br"),n("nav",{staticClass:"navbar is-light",staticStyle:{"z-index":"1"}},[n("div",{staticClass:"navbar-brand"},[t._m(0),n("div",{staticClass:"navbar-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input is-light",attrs:{type:"text",placeholder:""},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])])]),n("br"),n("br"),n("transition-group",{attrs:{name:"slide-up",mode:"out-in"}},t._l(t.filteredExamples,(function(e){return n("div",{key:e.title,ref:e.title,refInFor:!0,staticClass:"example-container"},[n("bulmaAccordion",{attrs:{icon:"caret",slide:{duration:"100ms",timerFunc:"ease-out"}},on:{toggle:function(n){return t.exampleClickHandler(e.title)}}},[n("BulmaAccordionItem",[n("div",{attrs:{slot:"title"},slot:"title"},[n("h4",{staticClass:"title is-5 has-text-weight-normal"},[t._v(" "+t._s(e.title)+" ")]),n("p",{staticClass:"subtitle is-6"},[t._v(t._s(e.description))])]),n("div",{attrs:{slot:"content"},slot:"content"},[-1===e.link.indexOf("jsfiddle")?[n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.title))])]:[n("iframe",{attrs:{src:e.link,width:"100%",height:"480px",allowfullscreen:"allowfullscreen",frameborder:"0"}})]],2)])],1),n("br")],1)})),0),n("br"),t._m(1),n("br"),n("h2",{staticClass:"title is-4"},[t._v("Want to add an example?")]),t._m(2),n("br"),n("br"),n("h2",{staticClass:"title is-3"},[t._v(" Ready to start? ")]),n("div",{staticClass:"content"},[n("p",[t._v(" Read "),n("a",{attrs:{href:"http://github.com/BrainJS/brain.js#brainjs"}},[t._v("Documentation")]),t._v(" or view "),n("router-link",{attrs:{to:"/examples",title:"Examples"}},[t._v(" Live Examples ")])],1),n("router-link",{staticClass:"button is-primary is-medium",attrs:{to:"/getting-started",title:"Installation & Quick Start"}},[t._v(" Get Started Now ")])],1)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"navbar-item"},[n("span",[t._v("Search:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message is-light"},[n("div",{staticClass:"message-header"},[t._v(" Looking for more examples? ")]),n("div",{staticClass:"message-body"},[n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/BrainJS/brain.js/tree/master/examples/javascript"}},[t._v("JavaScript Examples in Brain.js Github repository")])]),n("li",[n("a",{attrs:{href:"https://github.com/BrainJS/brain.js/tree/master/examples/typescript"}},[t._v("Typescript Examples in Brain.js Github repository")])]),n("li",[n("a",{attrs:{href:"https://github.com/bradtraversy/brainjs_examples"}},[t._v("Some examples by @Brad Traversy")])])]),n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" This page is open source, go ahead and include example using Brain.js to this list or "),n("a",{attrs:{href:"//github.com/BrainJS/brain.js/issues/new",target:"_blank"}},[t._v("create an issue")]),t._v(" and we will add it. ")])}],a=(n("5319"),n("127d")),s={components:{BulmaAccordion:a["BulmaAccordion"],BulmaAccordionItem:a["BulmaAccordionItem"]},data(){return{search:"",activeExampleIndex:null}},computed:{filteredExamples(){const t=this.search.toLowerCase();return this.$store.state.examples.filter(e=>e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.link.includes(t))}},created(){this.activeExampleIndex=this.$route.query.example||null},mounted(){window.setTimeout(()=>{this.$nextTick(()=>{this.scrollActiveExampleIntoView()})},250)},methods:{exampleClickHandler(t){this.activeExampleIndex=t,this.$router.replace({path:"examples",query:{example:t}})},scrollActiveExampleIntoView(){const t=this.$refs[this.activeExampleIndex];t&&(t[0].scrollIntoView({behavior:"smooth"}),t[0].getElementsByClassName("card-header")[0].click())}}},o=s,c=(n("be6f"),n("2877")),l=Object(c["a"])(o,i,r,!1,null,null,null);e["default"]=l.exports},ac1f:function(t,e,n){"use strict";var i=n("23e7"),r=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},be6f:function(t,e,n){"use strict";var i=n("7bcb"),r=n.n(i);r.a},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),r=n("d039"),a=n("b622"),s=n("9263"),o=n("9112"),c=a("species"),l=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),h=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var f=a(t),v=!r((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),m=v&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!v||!m||"replace"===t&&(!l||!u||h)||"split"===t&&!p){var g=/./[f],_=n(f,""[t],(function(t,e,n,i,r){return e.exec===s?v&&!r?{done:!0,value:g.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),x=_[0],y=_[1];i(String.prototype,t,x),i(RegExp.prototype,f,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}d&&o(RegExp.prototype[f],"sham",!0)}}}]);