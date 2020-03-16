// tragets
const links = document.querySelectorAll('a');
const highLights = document.createElement('span');
highLights.classList.add('highlight');
document.body.append(highLights);
// functions
function linksHighLights(){
   const clients = this.getBoundingClientRect()
   const coords = {
       width: clients.width,
       height: clients.height,
       top: clients.top + window.scrollY,
       left: clients.left + window.scrollX
   }
   highLights.style.width = `${coords.width}px`;
   highLights.style.height = `${coords.height}px`;
   highLights.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}

// event listeners

links.forEach(a=> a.addEventListener('mouseenter' ,linksHighLights))