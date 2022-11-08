const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextSibling;
const userInputs = addMovieModal.querySelectorAll('input');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};
const toggleMovieModel = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};
const backdropClickHandler = () => {
  toggleMovieModel();
};
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }
};

startAddMovieButton.addEventListener('click', toggleMovieModel);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', backdropClickHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
