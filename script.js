const form=document.querySelector('.form-container')
const loginLink=document.querySelector('.login-link')
const registerLink=document.querySelector('.register-link')
const btnPop=document.querySelector('.loginButton')
const closeBtn=document.querySelector('.close-icon')

registerLink.addEventListener('click',()=>{
    form.classList.add('active');
})
loginLink.addEventListener('click',()=>{
    form.classList.remove('active');
})
btnPop.addEventListener('click',()=>{
    form.classList.add('active-popup');
})
closeBtn.addEventListener('click',()=>{
    form.classList.remove('active-popup');
})
