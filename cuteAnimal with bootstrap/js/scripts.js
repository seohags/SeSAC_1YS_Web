const cancelAddAnimalButton = document.querySelectorAll('button')[4];
const confirmAddAnimalButton = document.querySelectorAll('button')[5];
const userInputs = document.querySelectorAll('input');

const animals = [];


const deleteAnimalHandler = (animalId) => {
  let animalIndex = 0;
  for (const animal of animals) {
    if (animal.id === animalId) {
      break;
    }
    animalIndex++;
  }
  animals.splice(animalIndex, 1);
  const listRoot = document.getElementById('animal-list');
  listRoot.children[animalIndex].remove();
  // listRoot.removeChild(listRoot.children[animalIndex]);
}; 
// 추가된 엘리멘트 삭제하는 함수




const clearAnimalInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};
// input 내용을 지우는 함수

const cancelAddAnimalHandler = () => {
  clearAnimalInput();
};

const addAnimalHandler = () => {
  const nameValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    nameValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' + ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('애정도를 1과 5사이에서 입력해주세요!');
    return;
  }

  const newAnimal = {
    id: Math.random().toString(),
    name: nameValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  animals.push(newAnimal);
  console.log(animals);
  // 원래 여기에 toggleBackdrop 들어가야 되긴해
  renderNewAnimalElement(
    newAnimal.id,
    newAnimal.name,
    newAnimal.image,
    newAnimal.rating
  );
  clearAnimalInput();
};



const renderNewAnimalElement = (id, name, imageUrl, rating) => {
  const newAnimalElement = document.createElement('li');
  newAnimalElement.className = 'col mb-5';
  newAnimalElement.innerHTML = `
    <div class="container px-4 px-lg-5 mt-5">
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div class="col mb-5">
          <div class="card h-100">
            <img class="card-img-top" src="${imageUrl}" alt=${name}>
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">${name}</h5>
                <div class="bi-star-fill">${rating}</div>
                <div class="card-footer">${name}</div>
              </div>
            </div>
          </div>
        </div>          
      </div>
    </div>
  `;
  newAnimalElement.addEventListener(
    'click',
    deleteAnimalHandler.bind(null, id)
  );
  const listRoot = document.getElementById('animal-list');
  listRoot.append(newAnimalElement);
};




confirmAddAnimalButton.addEventListener('click', addAnimalHandler);
cancelAddAnimalButton.addEventListener('click', cancelAddAnimalHandler);
