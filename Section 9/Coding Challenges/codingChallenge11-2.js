//Test Data 1 = [5,2,4,1,15,8,3];
//Test Data 2 = [16,6,10,5,6,1,4];

const calcAverageHumanAge = (ages) => {
  const humanAges = ages.map((age) => {
    if (age <= 2) {
      return age * 2;
    } else {
      return 16 + age * 4;
    }
  });

  const adults = humanAges.filter((age) => {
    return age >= 18;
  });

  const totalOfAges = adults.reduce((total, age) => total + age, 0);

  return Math.round(totalOfAges / adults.length);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
