(self.webpackChunkBacExams=self.webpackChunkBacExams||[]).push([[8354],{8354:(e,t,i)=>{"use strict";i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>D,keyboardDidClose:()=>f,keyboardDidOpen:()=>g,keyboardDidResize:()=>w,resetKeyboardAssist:()=>h,setKeyboardClose:()=>b,setKeyboardOpen:()=>c,startKeyboardAssist:()=>n,trackViewportChanges:()=>u});const s="ionKeyboardDidShow",o="ionKeyboardDidHide";let a={},d={},r=!1;const h=()=>{a={},d={},r=!1},n=e=>{p(e),e.visualViewport&&(d=D(e.visualViewport),e.visualViewport.onresize=()=>{u(e),g()||w(e)?c(e):f(e)&&b(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>c(e,t)),e.addEventListener("keyboardDidHide",()=>b(e))},c=(e,t)=>{l(e,t),r=!0},b=e=>{y(e),r=!1},g=()=>!r&&a.width===d.width&&(a.height-d.height)*d.scale>150,w=e=>r&&!f(e),f=e=>r&&d.height===e.innerHeight,l=(e,t)=>{const i=new CustomEvent(s,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(i)},y=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},u=e=>{a=Object.assign({},d),d=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);