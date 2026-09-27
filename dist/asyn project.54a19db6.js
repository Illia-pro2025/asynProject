async function t(t,e,o){try{var n;let r=await fetch(`${t}/comments?postId=${o}`);n=await r.json(),e.innerHTML="",e.innerHTML+=n.map(t=>`<li><p>${t.text}</p></li>`).join("")}catch(t){console.error(t)}}async function e(e,o){try{var n;let r=await fetch(`${e}/posts`);n=await r.json(),o.innerHTML="",o.innerHTML=n.map(t=>`<div class="post">

<h2>${t.title}</h2>

<p>${t.text}</p>

<button class="editPostButton" data-id="${t.id}">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>

<button class="deletePostButton" data-id="${t.id}">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>

<div class="commentsContainer" data-id="${t.id}">

<h3>\u{41A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}\u{456}:</h3>

<ul class="commentList">

</ul>

<form class="createCommentForm" data-id="${t.id}">

<input type="text" class="commentInput" placeholder="\u{41D}\u{43E}\u{432}\u{438}\u{439} \u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}" required>

<button type="submit">\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}</button>

</form>

</div>

</div>`).join(""),n.forEach(n=>{t(e,o.querySelector(`.commentsContainer[data-id="${n.id}"]`).querySelector(".commentList"),n.id)}),console.log(document.querySelectorAll(".post").length,document.querySelectorAll(".createCommentForm").length,document.querySelectorAll(".commentInput").length)}catch(t){console.error(t)}}async function o(t,o,n){try{await fetch(`${t}/posts`,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(o)}),e(t,n)}catch(t){console.error(t)}}async function n(t,o,n,r){try{await fetch(`${t}/posts/${o}`,{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(n)}),e(t,r)}catch(t){console.error(t)}}async function r(t,e,o,n){try{let r=await fetch(`${t}/posts/${e}`),u=await r.json();return o.value=u.title,n.value=u.text,u.id}catch(t){console.error(t)}}async function u(t,o,n){try{await fetch(`${t}/posts/${o}`,{method:"DELETE"}),e(t,n)}catch(t){console.error(t)}}async function a(t,o,n){try{let r=await fetch(`${o}/comments`,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)});await r.json(),e(o,n)}catch(t){console.error(t)}}let c="https://6ab78cbd9b03155d0808b71a.mockapi.io",s=document.querySelector("#postsContainer"),i=document.querySelector("#titleInput"),l=document.querySelector("#contentInput"),d=null;document.getElementById("createPostForm").addEventListener("submit",t=>{t.preventDefault();let r={title:i.value.trim(),text:l.value.trim()};console.log(d),d?n(c,d,r,s):o(c,r,s),document.getElementById("createPostForm").reset(),e(c,s)}),s.addEventListener("click",async t=>{let e=t.target.dataset.id;t.target.classList.contains("editPostButton")&&(d=await r(c,e,i,l)),t.target.classList.contains("deletePostButton")&&u(c,e,s)}),s.addEventListener("submit",t=>{t.preventDefault();let e=t.target,o=e.dataset.id;a({postId:o,text:e.querySelector(".commentInput").value.trim(),userName:`userName ${o}`},c,s),e.reset()}),e(c,s);
//# sourceMappingURL=asyn project.54a19db6.js.map
