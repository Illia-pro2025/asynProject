import getPosts from "./getPost";
export default async function createPost(BASE_URL,post,commentContainer) {

  try {
    const data = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(post),
    });
  getPosts(BASE_URL,commentContainer)
  
  } catch (error) {
    console.error(error);
  }
}
