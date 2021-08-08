const pets = [  
  { name: 'Jumanji', img: 'images/pets/jumanji-dog1.jpg' },
  { name: 'Cido', img: 'images/pets/cido-dog2.jpg' },
  { name: 'JavaScript', img: 'images/pets/javascript-dog3.jpg' },
  { name: 'Elliot', img: 'images/pets/elliot-dog4.jpg' },
  { name: 'Pulguento', img: 'images/pets/pulguento-dog5.jpg' },
  { name: 'Paçoca', img: 'images/pets/pacoca-dog6.jpg' },
];
const div = document.querySelector('.cards');

if (!pets.length) {
  div.style.justifyContent = 'center';
  div.innerHTML = `
    <h3 class="no-pets">
      Não há nenhum pet para adoção ainda! 🥰
    </h3>
  `;
} else {
  pets.forEach((pet) => {
    div.innerHTML += `
      <figure class="card">
        <img src="${pet.img}" alt="Imagem de um cachorro chamado ${pet.name}">
        <figcaption>${pet.name}</figcaption>
      </figure>
    `;
  }); 
}
