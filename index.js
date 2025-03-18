import{a as c,S as l,i as d}from"./assets/vendor-BiPQe71L.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const u="49409178-3b63951a4472504068603616d",f="https://pixabay.com/api/";function m(e){return c.get(f,{params:{key:u,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>t.data).catch(t=>{throw new Error(t)})}const p=new l(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function y(){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3})}function g(){document.querySelector(".form").reset()}function h(e){const t=document.querySelector(".gallery");e.forEach(n=>t.insertAdjacentHTML("beforeend",b(n))),p.refresh()}function v(){const e=document.querySelector(".gallery"),t=document.createElement("span");t.classList.add("loader"),e.append(t)}function L(){document.querySelector(".loader").remove()}function I(){document.querySelector(".gallery").textContent=""}function b(e){return`
    <li class="galleryItem">
        <a href="${e.largeImageURL}" disabled="true">
          <img src="${e.webformatURL}" alt="${e.tags}" data-source="${e.largeImageURL}"/>
        </a>
        <div class="imageInfoContainer">
            <div class="imageInfo">
                Likes 
                <div>
                    ${e.likes}
                </div>
            </div>
            <div class="imageInfo">
                Views 
                <div>
                    ${e.views}
                </div>
            </div>
            <div class="imageInfo">
                Comments 
                <div>
                    ${e.comments}
                </div>
            </div>
            <div class="imageInfo">
                Downloads
                <div>
                ${e.downloads}
                </div>
            </div>
        </div>
    </li>`}const S=document.querySelector("[type='text']"),q=document.querySelector(".form");let a;const w=e=>e.trim()!=="",E=(e,t)=>{e.preventDefault(),w(t)&&(I(),v(),m(t).then(n=>{const i=n.hits;if(i.length===0){y();return}h(i)}).catch(n=>{console.log("error",n)}).finally(L),g())};q.addEventListener("submit",e=>E(e,a));S.addEventListener("input",e=>{a=e.target.value});
//# sourceMappingURL=index.js.map
