import getPosts from "./getPost";
export default async function updatePost(BASE_URL, id, post,  postsContainer) {
  try {
    const data = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(post),
    });
    getPosts(BASE_URL, postsContainer);
  } catch (error) {
    console.error(error);
  }
}
