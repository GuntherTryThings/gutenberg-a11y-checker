(()=>{"use strict";class r{constructor(){if(new.target==r)throw new Error("Abstract classes can't be instantiated.");return this}check(r){throw new Error('Method "check()" must be implemented.')}}class e extends r{check(r){console.log(r.style)}}class t{#r;constructor(){this.#r=[new e]}searchForErrors(r){for(let e of this.#r)e.check(r)}}class s{#e;constructor(){return this.#e=new t,this}scanPageForErrors(){const r=document.querySelector('div[class="is-root-container block-editor-block-list__layout"]');for(let e of r.childNodes)this.#e.searchForErrors(e)}}const o=()=>{setTimeout((()=>{document.getElementById("editor")?(new s).scanPageForErrors():o()}),1)};window.addEventListener("load",(r=>{o()}))})();