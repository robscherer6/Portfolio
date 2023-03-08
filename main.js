var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
var sideMenu = document.querySelector('.sideMenu');
var form = document.querySelector('form');
let msg = document.querySelector('.msg');
console.log(msg);

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove('active-link')
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab')
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}

function openMenu () {
  sideMenu.style.right = '0';
}

function closeMenu () {
  sideMenu.style.right = '-200px';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyBe0eWiZK0UGw9WyrK2kT04tMJpcUI_njHd9HC38fPw17FUKWKYKXzf-vrgych4bsK/exec'

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = 'Message sent!';
      setTimeout(function() {
        message.innerHTML = '';
      }, 5000)
      console.log('Success!', response)
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

