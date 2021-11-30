//  TEST DATA
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
dogs.forEach((dog) => {
  dog["recommendedFood"] = Math.floor(Number(dog.weight ** 0.75 * 28));
});

// console.log(dogs);

// 2.
function findDog(name) {
  const foundDog = dogs.find((dog) =>
    dog.owners.find((owner) => owner == name)
  );
  return foundDog;
}

const sarahsPup = findDog("Sarah");
// console.log(sarahsPup);

function correctFood(dog) {
  if (dog.curFood > dog.recommendedFood + dog.recommendedFood * 0.1) {
    console.log(`${dog.owners[0]}'s dog is eating too much!`);
    return "Too Much";
  } else if (dog.curFood < dog.recommendedFood - dog.recommendedFood * 0.1) {
    console.log(`${dog.owners[0]}'s is not eating enough!`);
    return "Too Little";
  } else {
    console.log(`${dog.owners[0]}'s is eating the right amount!`);
    return "Just Right";
  }
}

// correctFood(sarahsPup);

// 3.
const ownersEatTooMuch = dogs
  .filter((dog) => {
    if (correctFood(dog) === "Too Much") {
      return dog.owners;
    }
  })
  .flatMap((dog) => dog.owners);

const ownersEatTooLittle = dogs
  .filter((dog) => {
    if (correctFood(dog) === "Too Little") {
      return dog.owners;
    }
  })
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
let tooMuchStr = "";
ownersEatTooMuch.forEach((owner) => (tooMuchStr += `${owner}, `));
tooMuchStr += "all have dogs that eat too much";
console.log(tooMuchStr);

let tooLittleStr = "";
ownersEatTooLittle.forEach((owner) => (tooLittleStr += `${owner}, `));
tooLittleStr += "all have dogs that don't eat enough";
console.log(tooLittleStr);

// 5.
const exactAmount = dogs.includes((dog) => dog.curFood === dog.recommendedFood);

console.log(exactAmount);

// 6.
const okayAmmount = dogs.some((dog) => correctFood(dog) === "Just Right");
console.log(okayAmmount);

// 7.
const okayDogs = dogs.filter((dog) => correctFood(dog) === "Just Right");
console.log(okayDogs);

// 8.
const sortedFood = dogs.map((dog) => dog.recommendedFood).sort((a, b) => a - b);
console.log(sortedFood);
