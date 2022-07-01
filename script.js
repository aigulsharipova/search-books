const search = document.querySelector('.search');
const photo = document.querySelectorAll('.photo');

search.addEventListener('keyup', function(event) {
  const nameBook = event.target.value.toLowerCase();
  const nameAuthor = event.target.value.toLowerCase();
  const booksType = event.target.value.toLowerCase();

  photo.forEach(item => {item.querySelector('p').textContent.toLowerCase.includes(nameBook) || item.querySelector('#author').textContent.toLowerCase().includes(nameAuthor) || item.querySelector('#type').textContent.toLowerCase().includes(booksType) ? (item.style.display = 'block') : (item.style.display = 'none');
})
})