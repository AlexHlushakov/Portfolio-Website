
const menuBar = document.querySelector('.menu-bar'),
   mobileMenu = document.querySelector('.mobile-menu'),
   menuLinks = document.querySelectorAll('.menu-link'),
   websiteItems = document.querySelectorAll('.website'),
   jsItems = document.querySelectorAll('.js-item'),
   contactLinks = document.querySelectorAll('.contact-link');


console.log(contactLinks);
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
   console.log(item);
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