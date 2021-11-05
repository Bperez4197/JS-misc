document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const button = document.querySelector("button");

function camelCasify() {
  const text = document.querySelector("textarea").value;
  let tempArr = text.split("\n");
  let finalArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    let temp = tempArr[i].trim().split("_");
    let str =
      temp[0].toLowerCase() +
      temp[1][0].toUpperCase() +
      temp[1].slice(1).toLowerCase();
    finalArr.push(str);
  }
  console.log(finalArr.join("\n"));
  return finalArr.join("\n");
}

button.addEventListener("click", camelCasify);

/*
first_name
Some_Variable
calculate_AGE
delayEd_DEPartUre

*/
