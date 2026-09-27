import getPosts from "./module/getPost";
import createPost from "./module/createPost";
import updatePost from "./module/updatePost";
import fetchPost from "./module/fetchPost";
import deletePost from "./module/removePost";
import createComment from "./module/createComment";

const BASE_URL = "https://6ab78cbd9b03155d0808b71a.mockapi.io";
const postsContainer = document.querySelector("#postsContainer");
const titlePost = document.querySelector("#titleInput");
const textPost = document.querySelector("#contentInput");


let currentId = null;

document.getElementById("createPostForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const post = {
    title: titlePost.value.trim(),
    text: textPost.value.trim(),
  };
  console.log(currentId);
  if (!currentId) {
    createPost(BASE_URL, post, postsContainer);
  } else {
    updatePost(BASE_URL, currentId, post, postsContainer);
  }
  document.getElementById("createPostForm").reset();

  getPosts(BASE_URL, postsContainer);
});

postsContainer.addEventListener("click", async (e) => {
  const id = e.target.dataset.id;
  if (e.target.classList.contains("editPostButton")) {
    currentId = await fetchPost(BASE_URL, id, titlePost, textPost);
  }
  if (e.target.classList.contains("deletePostButton")) {
    deletePost(BASE_URL, id, postsContainer);
  }
});

postsContainer.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;

  const id = form.dataset.id;
  const textInput = form.querySelector(".commentInput");

  const comment = {
    postId: id,
    text: textInput.value.trim(),
    userName: `userName ${id}`,
  };

  createComment(comment, BASE_URL, postsContainer, id);
  form.reset();
});

getPosts(BASE_URL, postsContainer);
