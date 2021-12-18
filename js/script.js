let currentIndex = 0;

window.onload = init;

function init() {
  renderPhotoContent();
  renderFullViewContainer();
}

function renderFullViewContainer() {
  let fullView = document.getElementById('full-view');

  fullView.innerHTML += `
      <img id="close-btn" class="close-btn" onclick="closeFullView()" src="img/icons/close.png">
      <img id="left-btn" class="left-btn" onclick="previousPhoto()" src="img/icons/arrow-left.png">
      <img id="full-img" class="" src="">
      <img id="right-btn" class="right-btn" onclick="nextPhoto()" src="img/icons/arrow-right.png">`;
}

function renderPhotoContent() {
  let mainContent = document.getElementById('photo-content');
  mainContent.innerHTML = '';

  for (let i = 0; i < photoInformation.length; i++) {
    mainContent.innerHTML += `
        <div class="photo-unit">
            <img class="image" src="img/${photoInformation[i].photo}" alt=""/>
            <div class="photo-text">
              <h2>${photoInformation[i].title}</h2>
              <p>${photoInformation[i].date}</p>
              <p>
                <a onclick="openFullSize(${[i]})" href="#">
                <img class="" src="img/icons/fullscreen.png" alt="" /></a>
              </p>
            <div class=""></div>
        </div>`;
  }
}

function openFullSize(index) {
  let link = document.getElementById('full-view');
  link.classList.add('dark-ground');
  link.classList.remove('d-none');
  currentIndex = index;
  document.getElementById('full-img').src =
    'img/' + photoInformation[currentIndex].photo;
}
3;

function closeFullView() {
  let link = document.getElementById('full-view');
  link.classList.remove('dark-ground');
  link.classList.add('d-none');
}

function previousPhoto() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 1;
  } else {
    getPhoto();
  }
}

function nextPhoto() {
  currentIndex++;
  if (currentIndex >= 19) {
    currentIndex = 19;
    currentIndex--;
  } else {
    getPhoto();
  }
}

function getPhoto() {
  return (document.getElementById('full-img').src =
    'img/' + photoInformation[currentIndex].photo);
}
