
const menuBar = document.querySelector('.menu-bar'),
   mobileMenu = document.querySelector('.mobile-menu'),
   menuLinks = document.querySelectorAll('.menu-link'),
   websiteItems = document.querySelectorAll('.website'),
   jsItems = document.querySelectorAll('.js-item'),
   contactLinks = document.querySelectorAll('.contact-link'),
   modal = document.querySelector('.modal'),
   orderBtn = document.querySelector('.about-order-btn'),
   close = document.querySelector('.close'),
   nameField = document.querySelector('#info-name'),
   email = document.querySelector('#email'),
   msg = document.querySelector('#textbox'),
   formBtn = document.querySelector('.form-btn'),
   token = '2134830518:AAFjaU33bd9aVQfegOOKwCYjDijXTaL2nwc',
   chat_id = '-669512506';

msg.value = '';


menuBar.addEventListener('click', () => {
   if (mobileMenu.classList.contains('triggered')) {
      mobileMenu.classList.remove('triggered');
   } else {
      mobileMenu.classList.add('triggered');
      for (let i = 0; i < menuLinks.length; i++) {
         console.log(menuLinks[i]);
         menuLinks[i].addEventListener('click', () => { mobileMenu.classList.remove('triggered') })
      }
   }
});

orderBtn.addEventListener('click', () => {
   modal.style.display = "block";
})

close.addEventListener('click', () => {
   modal.style.display = "none";
})

window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}

function CloseModal() {
   modal.style.display = "none";
}

function checkForm() {
   if (nameField.value == "" || email.value == "" || msg.value == "") {
      return false;
   } else {
      return true;
   }
}

function validateEmail() {
   if (email.value.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return true;
   } else { return false }
};


formBtn.addEventListener('click', () => {
   if (checkForm() && validateEmail()) {
      const XHR = new XMLHttpRequest();
      let data = `Name: ${nameField.value} %0AEmail: ${email.value} %0AMessage: ${msg.value}`;
      // Define what happens on successful data submission
      XHR.addEventListener('load', function (event) {
         alert('Yeah! Data sent. Thanks for your request!');
         CloseModal();
         nameField.value = '';
         email.value = '';
         msg.value = '';
      });

      // Define what happens in case of error
      XHR.addEventListener(' error', function (event) {
         alert('Oops! Something went wrong.');
      });

      // Set up our request
      XHR.open('POST', `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${data}`);

      // Send our FormData object; HTTP headers are set automatically
      XHR.send();
   } else if (!checkForm()) {
      alert('Please fill the form fields');
   } else if (!validateEmail()) {
      alert('Invalid email!');
   }

})


for (let i = 0; i < websiteItems.length; i++) {
   let item = websiteItems[i];
   item.classList.remove('items-animation');
   const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            item.classList.add('items-animation');
            return;
         }
         item.classList.remove('items-animation');
      });
   });
   observer.observe(item);
}

for (let i = 0; i < jsItems.length; i++) {
   let item = jsItems[i];
   item.classList.remove('items-animation');
   const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            item.classList.add('items-animation');
            return;
         }
         item.classList.remove('items-animation');
      });
   });
   observer.observe(item);
}

for (let i = 0; i < contactLinks.length; i++) {
   let item = contactLinks[i];
   item.classList.remove('items-animation');
   const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            item.classList.add('items-animation');
            return;
         }
         item.classList.remove('items-animation');
      });
   });
   observer.observe(item)
}