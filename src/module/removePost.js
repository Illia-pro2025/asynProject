import getPosts from "./getPost";
export default async function deletePost(BASE_URL, id, postsContainer) {
  try {
    const data = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
    });
    getPosts(BASE_URL, postsContainer);
  } catch (error) {
    console.error(error);
  }
}
