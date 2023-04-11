

alert("Hello, Welcome To My World!");



// Find the corresponding navigation link and add the "active-link" class
const currentPath = window.location.pathname;

// Find the corresponding navigation link and add the "active-link" class
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active-link');
  } else {
    link.classList.remove('active-link');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector("#form")
  const submitButton = document.querySelector("#submit")
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxLZTlgHBunzjDAyvzTFB9AAQZS2vGT4hSZKlfMDVMQrrHEQwKDYO2-fo05BNfFegYWVg/exec'

  form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody})
      .then(response => {
        alert('Success!', response)
        submitButton.disabled = false
        console.log("hello")
        form.reset() 
      })
      .catch(error => {
        alert('Error!', error.message)
        submitButton.disabled = false
      })
  })
});