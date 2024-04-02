import{i as l,S as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(o){const r="https://pixabay.com",s="/api/",i=new URLSearchParams({key:"43022038-5a6e0a87a795a8bbaa0a62c30",q:o,type:"photo",orientation:"horizontal"}),e=`${r}${s}?${i}`;return fetch(e).then(t=>t.json())}function f(o){o&&(o.style.display="flex")}function c(o){o&&(o.style.display="none")}function m(o,r,s,i,e){if(r.innerHTML="",o.length===0){s.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}const t=e(o);r.innerHTML=t,i.refresh(),c(loaderElement)}function h(o){return o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${i}"
            width="360"
          />
        </a>
        <div class="thumb-block">
          <div class="block">
            <h2 class="title">Likes</h2>
            <p class="amount">${e}</p>
          </div>
          <div class="block">
            <h2 class="title">Views</h2>
            <p class="amount">${t}</p>
          </div>
          <div class="block">
            <h2 class="title">Comments</h2>
            <p class="amount">${a}</p>
          </div>
          <div class="block">
            <h2 class="title">Downloads</h2>
            <p class="amount">${u}</p>
          </div>
        </div>
      </li>`).join("")}const n={form:document.querySelector(".search-form"),input:document.querySelector(".search-input"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};n.form.addEventListener("submit",o=>{o.preventDefault();const r=n.input.value;if(r===""){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}f(n.loader),p(r).then(s=>{m(s.hits,n.list,l,y,h)}).catch(s=>{console.error(s)}).finally(()=>{c(n.loader)})});const y=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});window.onload=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};
//# sourceMappingURL=commonHelpers.js.map
