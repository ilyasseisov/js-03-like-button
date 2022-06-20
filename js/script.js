const likeBtn = document.querySelector('.heart-icon');
const numberOfLikesElement = document.querySelector('.number-of-likes');

let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);
let isLiked = false;

likeBtn.addEventListener('click', () => {
  if (!isLiked) {
    likeBtn.classList.add('isLiked');
    numberOfLikes++;
    numberOfLikesElement.textContent = numberOfLikes;
    isLiked = !isLiked;
  } else {
    likeBtn.classList.remove('isLiked');
    numberOfLikes--;
    numberOfLikesElement.textContent = numberOfLikes;
    isLiked = !isLiked;
  }
});
