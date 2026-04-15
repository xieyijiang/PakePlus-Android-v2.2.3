
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{ar as n,as as a,at as r,au as u,h as c,I as i,av as f}from"./index-D2vdv4_w.js";let l;const m={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1,destroyOnClose:!1};let p=n({},m);function d(){({instance:l}=r({setup(){const{state:t,toggle:o}=u();return()=>c(f,i(t,{"onUpdate:show":o}),null)}}))}function C(e){return a?new Promise((t,o)=>{l||d(),l.open(n({},p,e,{callback:s=>{(s==="confirm"?t:o)(s)}}))}):Promise.resolve(void 0)}const B=e=>C(n({showCancelButton:!0},e));export{B as s};
