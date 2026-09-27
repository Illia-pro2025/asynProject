import renderPost from "./renderPost";
export default async function getPosts(BASE_URL,postContainer) {
  try {
    const responce = await fetch(`${BASE_URL}/posts`);
    const data = await responce.json();
    renderPost(data,postContainer,BASE_URL)
  } catch (error) {
    console.error(error);
  }
}
