(()=>{"use strict";var o,r={835:()=>{const o=window.wp.blocks,r=window.wp.i18n,e=window.wp.blockEditor,t=window.wp.components,n=window.ReactJSXRuntime,s=o=>{const r=[];for(let e=0;e<o;e++)r.push((0,n.jsx)("div",{className:"polaroid",children:(0,n.jsx)("img",{src:`https://picsum.photos/200/150.webp?random=${e}`,width:"200",loading:"lazy",alt:""})},e));return r},i=JSON.parse('{"UU":"nayem/polaroid-generator"}'),a=(0,n.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:(0,n.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"})});(0,o.registerBlockType)(i.UU,{edit:function({attributes:o,setAttributes:i}){const{photos:a}=o;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("section",{...(0,e.useBlockProps)(),children:[(0,n.jsx)("div",{className:"polaroids",children:s(a)}),(0,n.jsx)(e.InspectorControls,{children:(0,n.jsx)(t.PanelBody,{children:(0,n.jsx)(t.RangeControl,{label:(0,r.__)("Photos","Polaroid-generator"),value:a,onChange:o=>i({photos:o}),min:3,max:12})})})]})})},icon:a})}},e={};function t(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return r[o](s,s.exports,t),s.exports}t.m=r,o=[],t.O=(r,e,n,s)=>{if(!e){var i=1/0;for(h=0;h<o.length;h++){for(var[e,n,s]=o[h],a=!0,l=0;l<e.length;l++)(!1&s||i>=s)&&Object.keys(t.O).every((o=>t.O[o](e[l])))?e.splice(l--,1):(a=!1,s<i&&(i=s));if(a){o.splice(h--,1);var c=n();void 0!==c&&(r=c)}}return r}s=s||0;for(var h=o.length;h>0&&o[h-1][2]>s;h--)o[h]=o[h-1];o[h]=[e,n,s]},t.o=(o,r)=>Object.prototype.hasOwnProperty.call(o,r),(()=>{var o={662:0,530:0};t.O.j=r=>0===o[r];var r=(r,e)=>{var n,s,[i,a,l]=e,c=0;if(i.some((r=>0!==o[r]))){for(n in a)t.o(a,n)&&(t.m[n]=a[n]);if(l)var h=l(t)}for(r&&r(e);c<i.length;c++)s=i[c],t.o(o,s)&&o[s]&&o[s][0](),o[s]=0;return t.O(h)},e=globalThis.webpackChunkcopyright_date_block=globalThis.webpackChunkcopyright_date_block||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))})();var n=t.O(void 0,[530],(()=>t(835)));n=t.O(n)})();