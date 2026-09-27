export default async function fetchPost(BASE_URL,id, title, content) {
  try {
    const responce = await fetch(`${BASE_URL}/posts/${id}`);
    const data = await responce.json();
    title.value=data.title
    content.value = data.text;
    return data.id
  } catch (error) {
    console.error(error);
  }
}
