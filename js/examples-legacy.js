(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples"],{"057f":function(t,e,n){var i=n("fc6a"),r=n("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):r(i(t))}},"127d":function(t,e,n){(function(){var e=this,n={};function i(t){i.installed||(i.installed=!0,t.component("bulma-accordion",l),t.component("bulma-accordion-item",p))}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var s={caretAnimation:{duration:"450ms",timerFunc:"ease 0s"},dropdown:!1,icon:"caret",slide:{duration:"700ms",timerFunc:"ease 0s"}},c=function(){function t(e){r(this,t),this.open_items=[],this.current_id=1,this.initially_open=null,this.config=e}return a(t,[{key:"setInitiallyOpen",value:function(t){var e=this;this.initially_open=t,"string"==typeof t||"number"==typeof t?this._addItem(t.toString()):Array.isArray(t)&&t.forEach((function(t){e._addItem(t.toString())}))}},{key:"getNextId",value:function(){var t=this.current_id.toString();return this.current_id+=1,t}},{key:"isOpen",value:function(t){return this.open_items.includes(t)}},{key:"setOpen",value:function(t,e){e?this._addItem(t):this._removeItem(t)}},{key:"toggleOpen",value:function(t){this.open_items.includes(t)?this._removeItem(t):this._addItem(t)}},{key:"register",value:function(){return this.getNextId()}},{key:"_removeItem",value:function(t){var e=this.open_items.findIndex((function(e){return e===t}));-1!==e&&this.open_items.splice(e,1)}},{key:"_addItem",value:function(t){this.config.dropdown?this.open_items.push(t):this.open_items=[t]}}]),t}(),u=new c(s),l={name:"bulma-accordion",provide:{AccordionItemController:u,AccordionItemConfig:s},props:{initialOpenItem:{required:!1,type:[Number,String],default:null},initialOpenItems:{required:!1,type:Array,default:null,validator:function(t){return Array.isArray(t)&&!t.some((function(t){return"number"!=typeof t}))}},caretAnimation:{required:!1,type:Object,default:function(){return{duration:"450ms",timerFunc:"ease 0s"}},validator:function(t){return"string"==typeof t.duration&&"string"==typeof t.timerFunc||!0===t.none}},dropdown:{required:!1,type:Boolean,default:!1},icon:{required:!1,type:String,default:"caret",validator:function(t){return"caret"===t||"plus-minus"===t||"custom"===t}},slide:{required:!1,type:Object,default:function(){return{duration:"700ms",timerFunc:"ease 0s"}},validator:function(t){return"string"==typeof t.duration&&"string"==typeof t.timerFunc}}},beforeMount:function(){s.caretAnimation=this.caretAnimation,s.dropdown=this.dropdown,s.icon=this.icon,s.slide=this.slide,u.setInitiallyOpen(this.initialOpenItem||this.initialOpenItems)},data:function(){return{AccordionItemController:u}},methods:{}};"function"===typeof l&&(l=l.options),Object.assign(l,function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"accordion"},[t._t("default")],2)},e=[];return{render:t,staticRenderFns:e,_compiled:!0,_scopeId:null,functional:void 0}}());var d={props:{minus:{required:!0,type:Boolean}},computed:{verticalClasses:function(){return{vertical:!0,"vertical-rotated":this.minus}}}};function f(t){var e={transition:"transitionend",OTransition:"otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(e.hasOwnProperty(n)&&void 0!==t.style[n])return e[n];throw new Error("TransitionEnd event is not supported in this browser")}"function"===typeof d&&(d=d.options),Object.assign(d,function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"plus-minus"},[n("span",{staticClass:"horizontal"}),t._v(" "),n("span",{class:t.verticalClasses})])},e=[];return{render:t,staticRenderFns:e,_compiled:!0,_scopeId:"data-v-3ea109",functional:void 0}}());var p={name:"bulma-accordion-item",components:{PlusMinus:d},inject:["AccordionItemController","AccordionItemConfig"],mounted:function(){var t=this;this.uniqueId=this.AccordionItemController.register(),this.$nextTick((function(){var e=t.$refs.body,n=f(e);e.addEventListener(n,(function(n){"0px"!==e.style.height?t.autoHeightStart(e):(t.autoHeightStop(),t.showCardContent=!1)}))}))},beforeDestroy:function(){this.autoHeightStop()},data:function(){return{autoHeightInterval:null,showCardContent:!1,uniqueId:null}},watch:{isOpen:function(t){t?this.$emit("open"):this.$emit("close"),this.doTheSlide()}},computed:{config:function(){return this.AccordionItemConfig||s},dropdownIconClasses:function(){return{"header-icon":!0,"caret-down":this.isOpen}},card_classes:function(){return{card:!0,"card-active":this.isOpen}},card_content_classes:function(){return{"card-content":!0,"is-hidden":!this.showCardContent}},footerClasses:function(){return{"card-footer":!0,"is-hidden":!this.$slots.footer}},usingCustomIcon:function(){return"custom"===this.config.icon},showCaret:function(){return"caret"===this.config.icon},showPlus:function(){return"plus-minus"===this.config.icon&&!this.isOpen},showMinus:function(){return"plus-minus"===this.config.icon&&this.isOpen},slideStyle:function(){var t=this.config.slide;return{transition:"all ".concat(t.duration," ").concat(t.timerFunc)}},iconStyle:function(){var t=this.config.caretAnimation;return!0===t.none?{}:{transition:"all ".concat(t.duration," ").concat(t.timerFunc)}},isOpen:function(){return this.AccordionItemController.isOpen(this.uniqueId)}},methods:{setUniqueId:function(t){this.uniqueId=t},handleClick:function(){this.uniqueId&&this.AccordionItemController.toggleOpen(this.uniqueId)},collapse:function(){this.AccordionItemController.setOpen(this.uniqueId,!1)},toggleCollapsed:function(){this.AccordionItemController.toggleOpen(this.uniqueId)},doTheSlide:function(){var t=this,e=this.$refs.body;!0===this.isOpen?(this.showCardContent=!0,this.$nextTick().then((function(){t.adjustHeight(e,e.scrollHeight)}))):this.slideUp(e)},adjustHeight:function(t,e){t.style.height="".concat(e,"px")},slideUp:function(t){"auto"===t.style.height&&(t.style.height="".concat(t.scrollHeight,"px")),t.style.height="0px"},autoHeightStart:function(t){var e=this;this.autoHeightInterval&&this.autoHeightStop(),this.autoHeightInterval=setInterval((function(){try{var n=e.$refs.bodyContent.scrollHeight+e.$refs.bodyFooter.scrollHeight+1;"0px"!==t.style.height&&n!==t.style.height&&e.isOpen&&e.adjustHeight(t,n)}catch(i){e.autoHeightStop()}}),100)},autoHeightStop:function(){clearInterval(this.autoHeightInterval),this.autoHeightInterval=null}}};"function"===typeof p&&(p=p.options),Object.assign(p,function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.card_classes},[n("div",{staticClass:"card-header",on:{click:t.handleClick}},[n("p",{staticClass:"card-header-title"},[t._t("title")],2),t._v(" "),n("p",{staticClass:"card-header-icon"},[t.usingCustomIcon?n("span",{staticClass:"icon"},[t._t("icon"),t._v(" "),t.isOpen?t._t("icon-open"):t._t("icon-closed")],2):n("span",{staticClass:"icon"},[t.showCaret?n("span",{class:t.dropdownIconClasses,style:t.iconStyle},[n("svg",{attrs:{viewBox:"0 0 129 129"}},[n("g",[n("path",{attrs:{d:"M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"}})])])]):t._e(),t._v(" "),t.showPlus||t.showMinus?n("PlusMinus",{attrs:{minus:t.showMinus}}):t._e()],1)])]),t._v(" "),n("div",{ref:"body",staticClass:"accordion-body",style:t.slideStyle},[n("div",{ref:"bodyContent",class:t.card_content_classes},[t._t("content")],2),t._v(" "),n("div",{ref:"bodyFooter",class:t.footerClasses},[t._t("footer")],2)])])},e=[];return{render:t,staticRenderFns:e,_compiled:!0,_scopeId:"data-v-717e16",functional:void 0}}()),n.install=i;var h={install:i},v=null;"undefined"!=typeof window?v=window.Vue:"undefined"!=typeof e&&(v=e.Vue),v&&v.use(h);var m=l;n.BulmaAccordion=m;var g=p;n.BulmaAccordionItem=g,t.exports=n})()},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var i=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},2532:function(t,e,n){"use strict";var i=n("23e7"),r=n("5a34"),o=n("1d80"),a=n("ab13");i({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(o(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,n){var i=n("861d"),r=n("c6b6"),o=n("b622"),a=o("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},"4de4":function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").filter,o=n("1dde"),a=n("ae40"),s=o("filter"),c=a("filter");i({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5319:function(t,e,n){"use strict";var i=n("d784"),r=n("825a"),o=n("7b0b"),a=n("50c4"),s=n("a691"),c=n("1d80"),u=n("8aa5"),l=n("14c3"),d=Math.max,f=Math.min,p=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,n,i){var g=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=i.REPLACE_KEEPS_$0,y=g?"$":"$0";return[function(n,i){var r=c(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,r,i):e.call(String(r),n,i)},function(t,i){if(!g&&b||"string"===typeof i&&-1===i.indexOf(y)){var o=n(e,t,this,i);if(o.done)return o.value}var c=r(t),p=String(this),h="function"===typeof i;h||(i=String(i));var v=c.global;if(v){var _=c.unicode;c.lastIndex=0}var I=[];while(1){var w=l(c,p);if(null===w)break;if(I.push(w),!v)break;var S=String(w[0]);""===S&&(c.lastIndex=u(p,a(c.lastIndex),_))}for(var C="",E=0,O=0;O<I.length;O++){w=I[O];for(var A=String(w[0]),k=d(f(s(w.index),p.length),0),$=[],j=1;j<w.length;j++)$.push(m(w[j]));var T=w.groups;if(h){var R=[A].concat($,k,p);void 0!==T&&R.push(T);var P=String(i.apply(void 0,R))}else P=x(A,p,k,$,T,i);k>=E&&(C+=p.slice(E,k)+P,E=k+A.length)}return C+p.slice(E)}];function x(t,n,i,r,a,s){var c=i+t.length,u=r.length,l=v;return void 0!==a&&(a=o(a),l=h),e.call(s,l,(function(e,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,i);case"'":return n.slice(c);case"<":s=a[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>u){var d=p(l/10);return 0===d?e:d<=u?void 0===r[d-1]?o.charAt(1):r[d-1]+o.charAt(1):e}s=r[l-1]}return void 0===s?"":s}))}}))},"5a34":function(t,e,n){var i=n("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},6547:function(t,e,n){var i=n("a691"),r=n("1d80"),o=function(t){return function(e,n){var o,a,s=String(r(e)),c=i(n),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"746f":function(t,e,n){var i=n("428f"),r=n("5135"),o=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||a(e,t,{value:o.f(t)})}},"7bcb":function(t,e,n){},"841c":function(t,e,n){"use strict";var i=n("d784"),r=n("825a"),o=n("1d80"),a=n("129f"),s=n("14c3");i("search",1,(function(t,e,n){return[function(e){var n=o(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var o=r(t),c=String(this),u=o.lastIndex;a(u,0)||(o.lastIndex=0);var l=s(o,c);return a(o.lastIndex,u)||(o.lastIndex=u),null===l?-1:l.index}]}))},"857a":function(t,e,n){var i=n("1d80"),r=/"/g;t.exports=function(t,e,n,o){var a=String(i(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(o).replace(r,"&quot;")+'"'),s+">"+a+"</"+e+">"}},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},9263:function(t,e,n){"use strict";var i=n("ad6d"),r=n("9f7f"),o=RegExp.prototype.exec,a=String.prototype.replace,s=o,c=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=r.UNSUPPORTED_Y||r.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=c||l||u;d&&(s=function(t){var e,n,r,s,d=this,f=u&&d.sticky,p=i.call(d),h=d.source,v=0,m=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),m=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",m=" "+m,v++),n=new RegExp("^(?:"+h+")",p)),l&&(n=new RegExp("^"+h+"$(?!\\s)",p)),c&&(e=d.lastIndex),r=o.call(f?n:d,m),f?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:c&&r&&(d.lastIndex=d.global?r.index+r[0].length:e),l&&r&&r.length>1&&a.call(r[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(r[s]=void 0)})),r}),t.exports=s},9911:function(t,e,n){"use strict";var i=n("23e7"),r=n("857a"),o=n("af03");i({target:"String",proto:!0,forced:o("link")},{link:function(t){return r(this,"a","href",t)}})},"9f7f":function(t,e,n){"use strict";var i=n("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a451:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title is-3"},[t._v("Examples")]),n("h2",{staticClass:"subtitle is-4"},[t._v("Some quick samples to try Brain.js")]),n("br"),n("nav",{staticClass:"navbar is-light",staticStyle:{"z-index":"1"}},[n("div",{staticClass:"navbar-brand"},[t._m(0),n("div",{staticClass:"navbar-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input is-light",attrs:{type:"text",placeholder:""},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])])]),n("br"),n("br"),n("transition-group",{attrs:{name:"slide-up",mode:"out-in"}},t._l(t.filteredExamples,(function(e){return n("div",{key:e.title,ref:e.title,refInFor:!0,staticClass:"example-container"},[n("bulmaAccordion",{attrs:{icon:"caret",slide:{duration:"100ms",timerFunc:"ease-out"}},on:{toggle:function(n){return t.exampleClickHandler(e.title)}}},[n("BulmaAccordionItem",[n("div",{attrs:{slot:"title"},slot:"title"},[n("h4",{staticClass:"title is-5 has-text-weight-normal"},[t._v(" "+t._s(e.title)+" ")]),n("p",{staticClass:"subtitle is-6"},[t._v(t._s(e.description))])]),n("div",{attrs:{slot:"content"},slot:"content"},[-1===e.link.indexOf("jsfiddle")?[n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.title))])]:[n("iframe",{attrs:{src:e.link,width:"100%",height:"480px",allowfullscreen:"allowfullscreen",frameborder:"0"}})]],2)])],1),n("br")],1)})),0),n("br"),t._m(1),n("br"),n("h2",{staticClass:"title is-4"},[t._v("Want to add an example?")]),t._m(2),n("br"),n("br"),n("h2",{staticClass:"title is-3"},[t._v(" Ready to start? ")]),n("div",{staticClass:"content"},[n("p",[t._v(" Read "),n("a",{attrs:{href:"http://github.com/BrainJS/brain.js#brainjs"}},[t._v("Documentation")]),t._v(" or view "),n("router-link",{attrs:{to:"/examples",title:"Examples"}},[t._v(" Live Examples ")])],1),n("router-link",{staticClass:"button is-primary is-medium",attrs:{to:"/getting-started",title:"Installation & Quick Start"}},[t._v(" Get Started Now ")])],1)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"navbar-item"},[n("span",[t._v("Search:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message is-light"},[n("div",{staticClass:"message-header"},[t._v(" Looking for more examples? ")]),n("div",{staticClass:"message-body"},[n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/BrainJS/brain.js/tree/master/examples/javascript"}},[t._v("JavaScript Examples in Brain.js Github repository")])]),n("li",[n("a",{attrs:{href:"https://github.com/BrainJS/brain.js/tree/master/examples/typescript"}},[t._v("Typescript Examples in Brain.js Github repository")])]),n("li",[n("a",{attrs:{href:"https://github.com/bradtraversy/brainjs_examples"}},[t._v("Some examples by @Brad Traversy")])])]),n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" This page is open source, go ahead and include example using Brain.js to this list or "),n("a",{attrs:{href:"//github.com/BrainJS/brain.js/issues/new",target:"_blank"}},[t._v("create an issue")]),t._v(" and we will add it. ")])}],o=(n("a4d3"),n("e01a"),n("4de4"),n("caad"),n("ac1f"),n("2532"),n("5319"),n("841c"),n("9911"),n("127d")),a={components:{BulmaAccordion:o["BulmaAccordion"],BulmaAccordionItem:o["BulmaAccordionItem"]},data:function(){return{search:"",activeExampleIndex:null}},computed:{filteredExamples:function(){var t=this.search.toLowerCase();return this.$store.state.examples.filter((function(e){return e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.link.includes(t)}))}},created:function(){this.activeExampleIndex=this.$route.query.example||null},mounted:function(){var t=this;window.setTimeout((function(){t.$nextTick((function(){t.scrollActiveExampleIntoView()}))}),250)},methods:{exampleClickHandler:function(t){this.activeExampleIndex=t,this.$router.replace({path:"examples",query:{example:t}})},scrollActiveExampleIntoView:function(){var t=this.$refs[this.activeExampleIndex];t&&(t[0].scrollIntoView({behavior:"smooth"}),t[0].getElementsByClassName("card-header")[0].click())}}},s=a,c=(n("be6f"),n("2877")),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},a4d3:function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("d066"),a=n("c430"),s=n("83ab"),c=n("4930"),u=n("fdbf"),l=n("d039"),d=n("5135"),f=n("e8b5"),p=n("861d"),h=n("825a"),v=n("7b0b"),m=n("fc6a"),g=n("c04e"),b=n("5c6c"),y=n("7c73"),x=n("df75"),_=n("241c"),I=n("057f"),w=n("7418"),S=n("06cf"),C=n("9bf2"),E=n("d1e7"),O=n("9112"),A=n("6eeb"),k=n("5692"),$=n("f772"),j=n("d012"),T=n("90e3"),R=n("b622"),P=n("e538"),B=n("746f"),H=n("d44e"),q=n("69f3"),F=n("b727").forEach,N=$("hidden"),U="Symbol",L="prototype",M=R("toPrimitive"),D=q.set,J=q.getterFor(U),G=Object[L],V=r.Symbol,z=o("JSON","stringify"),K=S.f,W=C.f,Q=I.f,X=E.f,Y=k("symbols"),Z=k("op-symbols"),tt=k("string-to-symbol-registry"),et=k("symbol-to-string-registry"),nt=k("wks"),it=r.QObject,rt=!it||!it[L]||!it[L].findChild,ot=s&&l((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=K(G,e);i&&delete G[e],W(t,e,n),i&&t!==G&&W(G,e,i)}:W,at=function(t,e){var n=Y[t]=y(V[L]);return D(n,{type:U,tag:t,description:e}),s||(n.description=e),n},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},ct=function(t,e,n){t===G&&ct(Z,e,n),h(t);var i=g(e,!0);return h(n),d(Y,i)?(n.enumerable?(d(t,N)&&t[N][i]&&(t[N][i]=!1),n=y(n,{enumerable:b(0,!1)})):(d(t,N)||W(t,N,b(1,{})),t[N][i]=!0),ot(t,i,n)):W(t,i,n)},ut=function(t,e){h(t);var n=m(e),i=x(n).concat(ht(n));return F(i,(function(e){s&&!dt.call(n,e)||ct(t,e,n[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},dt=function(t){var e=g(t,!0),n=X.call(this,e);return!(this===G&&d(Y,e)&&!d(Z,e))&&(!(n||!d(this,e)||!d(Y,e)||d(this,N)&&this[N][e])||n)},ft=function(t,e){var n=m(t),i=g(e,!0);if(n!==G||!d(Y,i)||d(Z,i)){var r=K(n,i);return!r||!d(Y,i)||d(n,N)&&n[N][i]||(r.enumerable=!0),r}},pt=function(t){var e=Q(m(t)),n=[];return F(e,(function(t){d(Y,t)||d(j,t)||n.push(t)})),n},ht=function(t){var e=t===G,n=Q(e?Z:m(t)),i=[];return F(n,(function(t){!d(Y,t)||e&&!d(G,t)||i.push(Y[t])})),i};if(c||(V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),n=function(t){this===G&&n.call(Z,t),d(this,N)&&d(this[N],e)&&(this[N][e]=!1),ot(this,e,b(1,t))};return s&&rt&&ot(G,e,{configurable:!0,set:n}),at(e,t)},A(V[L],"toString",(function(){return J(this).tag})),A(V,"withoutSetter",(function(t){return at(T(t),t)})),E.f=dt,C.f=ct,S.f=ft,_.f=I.f=pt,w.f=ht,P.f=function(t){return at(R(t),t)},s&&(W(V[L],"description",{configurable:!0,get:function(){return J(this).description}}),a||A(G,"propertyIsEnumerable",dt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:V}),F(x(nt),(function(t){B(t)})),i({target:U,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var n=V(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!s},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:ht}),i({target:"Object",stat:!0,forced:l((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(v(t))}}),z){var vt=!c||l((function(){var t=V();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));i({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var i,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(i=e,(p(e)||void 0!==t)&&!st(t))return f(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!st(e))return e}),r[1]=e,z.apply(null,r)}})}V[L][M]||O(V[L],M,V[L].valueOf),H(V,U),j[N]=!0},ab13:function(t,e,n){var i=n("b622"),r=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(i){}}return!1}},ac1f:function(t,e,n){"use strict";var i=n("23e7"),r=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},af03:function(t,e,n){var i=n("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},be6f:function(t,e,n){"use strict";var i=n("7bcb"),r=n.n(i);r.a},caad:function(t,e,n){"use strict";var i=n("23e7"),r=n("4d64").includes,o=n("44d2"),a=n("ae40"),s=a("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!s},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),r=n("d039"),o=n("b622"),a=n("9263"),s=n("9112"),c=o("species"),u=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=o("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var h=o(t),v=!r((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),m=v&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!v||!m||"replace"===t&&(!u||!l||f)||"split"===t&&!p){var g=/./[h],b=n(h,""[t],(function(t,e,n,i,r){return e.exec===a?v&&!r?{done:!0,value:g.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),y=b[0],x=b[1];i(String.prototype,t,y),i(RegExp.prototype,h,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}d&&s(RegExp.prototype[h],"sham",!0)}},e01a:function(t,e,n){"use strict";var i=n("23e7"),r=n("83ab"),o=n("da84"),a=n("5135"),s=n("861d"),c=n("9bf2").f,u=n("e893"),l=o.Symbol;if(r&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(f,l);var p=f.prototype=l.prototype;p.constructor=f;var h=p.toString,v="Symbol(test)"==String(l("test")),m=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=h.call(t);if(a(d,t))return"";var n=v?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:f})}},e538:function(t,e,n){var i=n("b622");e.f=i}}]);