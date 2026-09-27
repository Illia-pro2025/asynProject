import renderComment from "./renderComment";

export default async function getComment(BASE_URL, commentContainer, id) {
  try {
    const response = await fetch(`${BASE_URL}/comments?postId=${id}`);

    const data = await response.json();

    renderComment(data, commentContainer);
  } catch (error) {
    console.error(error);
  }
}
