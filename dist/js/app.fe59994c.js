(function(t){function e(e){for(var r,s,a=e[0],l=e[1],u=e[2],d=0,f=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=l;o.push(["0864","chunk-vendors"]),n()})({"07b5":function(t,e,n){},"0864":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h2",[t._v("Masonry: append 100")]),n("vue-masonry-wall",{attrs:{items:t.items,options:t.options},on:{append:t.append},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[n("div",{staticClass:"item"},[n("h5",[t._v(t._s(r.title))]),n("p",[t._v(t._s(r.content))])])]}}])})],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wall",staticClass:"masonry-wall",class:{ready:t.ready},style:t._style.wall},t._l(t.columns,(function(e,r){return n("div",{key:r,staticClass:"masonry-column",style:t._style.lane},[t._l(e.indexes,(function(e){return n("div",{key:e,ref:"item_"+e,refInFor:!0,staticClass:"masonry-item",style:t._style.item},[t._t("default",(function(){return[t._v(t._s(t.items[e]))]}),{item:t.items[e],index:e})],2)})),n("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:function(e){return e&&t._fill()},throttle:t._options.throttle},expression:"{callback: (v) => v && _fill(),throttle:_options.throttle}"}],ref:"bottom",refInFor:!0,staticClass:"masonry-bottom",attrs:{"data-column":r}})],2)})),0)},a=[],l=n("b37a"),u=n.n(l),c=n("85fe");function d(t){return m(t)||h(t)||p(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(t,e){if(t){if("string"===typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}function h(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function m(t){if(Array.isArray(t))return v(t)}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var y=function(t){for(var e=[],n=0;n<t;n++)e.push({i:n,indexes:[]});return e},b={name:"VueMasonryWall",directives:{"observe-visibility":c["a"]},props:{items:{type:Array,required:!0},options:{type:Object,required:!1},ssr:{type:Object,required:!1}},data:function(){var t=this.ssr&&this.ssr.columns;if(t>0){for(var e=y(t),n=0;n<this.items.length;n++)e[n%t].indexes.push(n);return{columns:e,cursor:this.items.length,ready:!1}}return{columns:[],cursor:0,ready:!1}},mounted:function(){var t=this;this.$resize=function(){t.columns.length!==t._columnSize()&&t.redraw()},this.$resize(),this.ready||(this.ready=!0),window.addEventListener("resize",this.$resize)},beforeDestroy:function(){window.removeEventListener("resize",this.$resize)},computed:{_options:function(){var t=this.options;return{width:t&&t.width||300,padding:{default:t&&t.padding&&t.padding.default||12},throttle:t&&t.throttle||300}},_style:function(){var t=this.options&&this.options.padding;return t&&"number"!=typeof t&&(t=this.options.padding[this.columns.length]||this._options.padding.default),{wall:{margin:"-".concat(t,"px")},lane:{paddingLeft:"".concat(t,"px"),paddingRight:"".concat(t,"px")},item:{paddingTop:"".concat(t,"px"),paddingBottom:"".concat(t,"px")}}}},methods:{redraw:function(){var t;this.ready=!1,this.columns.splice(0),this.cursor=0,(t=this.columns).push.apply(t,d(y(this._columnSize()))),this.ready=!0,this._fill()},_columnSize:function(){var t=Math.round(this.$refs.wall.scrollWidth/this._options.width);return t<1?1:t},_fill:function(){var t=this;this.ready&&(this.cursor>=this.items.length?this.$emit("append"):this.$nextTick((function(){var e=u()(t.$refs.bottom,(function(t){return t.clientHeight||0}));t._addItem(e.dataset.column),t._fill()})))},_addItem:function(t){var e=this.columns[t];this.items[this.cursor]&&(e.indexes.push(this.cursor),this.cursor++)}}},_=b,g=(n("bc22"),n("2877")),w=Object(g["a"])(_,s,a,!1,null,"71bf1f52",null),x=w.exports;function O(){for(var t=300*Math.random()+30,e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=n.length,i=0;i<t;i++)e+=n.charAt(Math.floor(Math.random()*r));return e}var j=r["a"].extend({name:"ServeDev",components:{VueMasonryWall:x},data:function(){return{options:{width:300,padding:{default:12,2:8,3:8}},items:[{title:"Item 0",content:O()},{title:"Item 1",content:O()},{title:"Item 2",content:O()},{title:"Item 3",content:O()}]}},methods:{append:function(){if(!(this.items.length>100))for(var t=0;t<20;t++)this.items.push({title:"Item ".concat(this.items.length),content:O()})}}}),S=j,I=(n("feeb"),Object(g["a"])(S,i,o,!1,null,null,null)),M=I.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(M)}}).$mount("#app")},"7d66":function(t,e,n){},bc22:function(t,e,n){"use strict";n("07b5")},feeb:function(t,e,n){"use strict";n("7d66")}});
//# sourceMappingURL=app.fe59994c.js.map