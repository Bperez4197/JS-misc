const calcAverageHumanAge = (ages) => {
  let filteredLength = 0;
  const humanAges = ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((total, age, i, arr) => {
      filteredLength = arr.length;
      return total + age;
    }, 0);

  return Math.round(humanAges / filteredLength);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
