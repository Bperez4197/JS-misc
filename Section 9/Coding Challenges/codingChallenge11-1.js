const juliasData = [3, 5, 2, 12, 7];
const katesData = [9, 16, 6, 8, 3];

const checkDogs = (julia, kate) => {
  const noCatsJulia = julia.slice(1, -2);
  const combinedData = [...noCatsJulia, ...kate];
  combinedData.forEach((age, i) => {
    age <= 3
      ? console.log(
          `Dog number ${i + 1} is still a puppy at just ${age} years old.`
        )
      : console.log(`Dog number ${i + 1} is an adult and is ${age} years old.`);
  });
};

checkDogs(juliasData, katesData);
