const titleInput = document.querySelector('.title-input');
const dateInput = document.querySelector('.date-input');
const addButton = document.querySelector('.add-button');
const filmList = document.querySelector('.film-list');
const deleteButton = document.querySelector('.delete-button');
const film = document.querySelector('.film');

addButton.addEventListener('click', addFilm);
deleteButton.addEventListener('click', deleteFilm);

function addFilm(event) {
  //prevent submitting
  event.preventDefault();
  //film div
  const filmDiv = document.createElement('div');
  filmDiv.classList.add('film');
  //create title li
  const filmTitle = document.createElement('li');
  filmTitle.classList.add('film-title');
  filmTitle.innerText = titleInput.value;
  filmDiv.appendChild(filmTitle);
  //create date li
  const filmDate = document.createElement('li');
  filmDate.classList.add('film-date');
  filmDate.innerText = dateInput.value;
  filmDiv.appendChild(filmDate);
  //delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerHTML = '<span class="material-symbols-outlined"> delete </span>';
  filmDiv.appendChild(deleteButton);
  deleteButton.addEventListener('click', deleteFilm);
  //append to list
  filmList.appendChild(filmDiv);
  titleInput.value='';
  dateInput.value='';
}

function deleteFilm(){
    this.parentElement.remove()
}