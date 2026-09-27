
import getPosts from "./getPost";
export default async function createComment(comment, BASE_URL,postContainer) {
  try {
    const responce = await fetch(`${BASE_URL}/comments`, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(comment),
    });
    const data = await responce.json();

    getPosts(BASE_URL, postContainer);
  } catch (error) {
    console.error(error);
  }
}
