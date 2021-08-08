const pets = [  
  { nome: 'Paçoca', img: 'images/Cachorro4.jpg' },
  { nome: 'Lassie', img: 'images/Cachorro5.jpg' },
  { nome: 'Olivia', img: 'images/Cachorro6.jpg' },
  { nome: 'Pulguento', img: 'images/Cachorro3.jpg' },
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
  for (const i in pets) {
    div.innerHTML += `
      <figure class="card">
        <img src="${pets[i].img}" alt="Imagem de um cachorro ${pets[i].nome}">
        <figcaption>${pets[i].nome}</figcaption>
      </figure>
    `;
  }
}
