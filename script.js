function enlargeImage(img) {
  img.classList.toggle('enlarged');
}

const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

dropbtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});
