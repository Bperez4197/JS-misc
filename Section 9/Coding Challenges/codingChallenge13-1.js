// import '../Asynchronous Javascript/script';

function whereAmI(lat, lng) {
  return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(
          `You made more than 3 requests in 5 seconds. Please wait to send another request`
        );
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(`You are in ${data.city},${data.country}.`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Country not found");
      } else {
        return response.json();
      }
    })
    .then((data) => renderCountry(data[0]))
    .catch((error) => console.error(error.message));
}

whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
