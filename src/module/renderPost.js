import getComment from "./getComment";
export default function renderPost(posts, postContainer, BASE_URL) {
 
  postContainer.innerHTML = "";
  postContainer.innerHTML = posts
    .map((post) => {
      return `<div class="post">

<h2>${post.title}</h2>

<p>${post.text}</p>

<button class="editPostButton" data-id="${post.id}">Редагувати</button>

<button class="deletePostButton" data-id="${post.id}">Видалити</button>

<div class="commentsContainer" data-id="${post.id}">

<h3>Коментарі:</h3>

<ul class="commentList">

</ul>

<form class="createCommentForm" data-id="${post.id}">

<input type="text" class="commentInput" placeholder="Новий коментар" required>

<button type="submit">Додати коментар</button>

</form>

</div>

</div>`;
    })
    .join("");

  posts.forEach((post) => {
    const commentsContainer = postContainer.querySelector(
      `.commentsContainer[data-id="${post.id}"]`,
    );

    const commentList = commentsContainer.querySelector(".commentList");

    getComment(BASE_URL, commentList, post.id);
  });
  console.log(
    document.querySelectorAll(".post").length,
    document.querySelectorAll(".createCommentForm").length,
    document.querySelectorAll(".commentInput").length,
  );
}
