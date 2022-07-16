const passwordOne = document.querySelector('#pwd');
const passwordTwo = document.querySelector('#confirm_pwd');
const submitBtn = document.querySelector('button');
const warning = document.querySelector('.warning');

submitBtn.addEventListener('click', () => {
   if (passwordOne.value !== passwordTwo.value) {
      passwordOne.classList.add('invalid');
      passwordTwo.classList.add('invalid');
      passwordTwo.value = '';
      warning.classList.add('active');
   }
})