export default function renderComment(comments, commentContainer) {
  
  commentContainer.innerHTML=""
  commentContainer.innerHTML += comments
    .map((comment) => {
      return `<li><p>${comment.text}</p></li>`;
    })
    .join("");
}
