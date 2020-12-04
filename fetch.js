const url = '';
const randomDogsElement = document.querySelector('.random-dogs');
const loadingElement = document.querySelector('.loading');
const goButton = document.querySelector('.go-button');

loadingElement.style.display = 'none';

function getRandomDogs() {
 
  
  
//   json.message.forEach(dogImage => {
//     randomDogsElement.innerHTML += `
//     <div class="column">
//       <div class="card">
//         <div class="card-image">
//           <figure class="image">
//             <img src="${dogImage}" alt="Placeholder image">
//           </figure>
//         </div>
//       </div>
//     </div>
//     `;
 
//   });
//   loadingElement.style.display = 'none';
 }

goButton.addEventListener('click', getRandomDogs);



