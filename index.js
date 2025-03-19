import{a as c,S as l,i as d}from"./assets/vendor-BiPQe71L.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const u="49409178-3b63951a4472504068603616d",f="https://pixabay.com/api/";function m(e){return c.get(f,{params:{key:u,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data).catch(r=>{throw new Error(r)})}const h=new l(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function p(){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3})}function y(){document.querySelector(".form").reset()}function g(e){const r=document.querySelector(".gallery");e.forEach(n=>r.insertAdjacentHTML("beforeend",b(n))),h.refresh()}function v(){const e=document.querySelector(".loader");e.classList.contains("hidden")&&e.classList.remove("hidden")}function L(){const e=document.querySelector(".loader");e.classList.contains("hidden")||e.classList.add("hidden")}function I(){document.querySelector(".gallery").textContent=""}function b(e){return`
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
    </li>`}const S=document.querySelector("[type='text']"),q=document.querySelector(".form");let a;const w=e=>e.trim()!=="",$=(e,r)=>{e.preventDefault(),w(r)&&(I(),v(),m(r).then(n=>{const i=n.hits;if(i.length===0){p();return}g(i)}).catch(n=>{console.log("error",n)}).finally(L),y())};q.addEventListener("submit",e=>$(e,a));S.addEventListener("input",e=>{a=e.target.value});
//# sourceMappingURL=index.js.map
