const arrows = document.querySelectorAll('.more')
const message = document.querySelector('.message')


function animatedForm (){
    arrows.forEach(arrow => {
        arrow.addEventListener('click', _ => {
      const input = arrow.previousElementSibling
      const parent = arrow.parentElement
      const nextForm = parent.nextElementSibling
    
      if(input.type === 'text' && validateUser(input)){ //check if the input is text and check if input is returning true 
        nextSlide(parent,nextForm)
      } else if(input.type === 'email' && emailValidation(input)) {
         nextSlide(parent,nextForm)
      } else if (input.type === 'password' && validateUser(input)){
        nextSlide(parent,nextForm)
      } else {
         parent.style.animation = 'shake 0.2s ease-in-out'
      }
    // animationend listener for repeat
      parent.addEventListener('animationend' ,_=>{
        parent.style.animation = ''
        
     })
        }) 
    });
    // email check regex
}
function emailValidation(email){
   const validation = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
   if(validation.test(email.value)){
    error('rgb(82, 223, 112)')
    message.classList.remove('up')
       return true 
   } else {
    error('rgb(189,87,87)')
    message.classList.add('up')
    message.textContent = 'Enter a valid email'
   }
}

// validating if the value is true 
function validateUser(user){ 
    if(user.value.length < 6){
   error('rgb(189,87,87)')
   message.classList.add('up')
   message.textContent = 'Minimum of 6 characters'
    
    }else {
        error('rgb(82, 223, 112)')
        message.classList.remove('up')
        return true
    }
}
// showing the next input
function nextSlide(parent ,nextForm){

parent.classList.add('inactive');
parent.classList.remove('active');
nextForm.classList.add('active');
nextForm.classList.remove('inactive');


// error changing the color of the background
}
function error(color){
    document.body.style.backgroundColor = color
}

animatedForm()