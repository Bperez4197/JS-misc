"use strict";
// https://restcountries.com/v2/

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// old way of doing it XML style ///////////////////////////////////////////////////////////////////////
////// Events and callbacks //////////////////////////////////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);

//     const html = `<article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               Number(data.population) / 1000000
//             ).toFixed(1)}M people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>`;

//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("portugal");
// getCountryData("usa");
// getCountryData("germany");

/////////////////////////////// Controlling the order of execution ///////////////////////////////////
/// using a callback inside of a callback to control the order of execution //////////////////////////////////
/// This leads to callback hell ///////////////////////////////////

const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              Number(data.population) / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbor = function (country) {
  // Ajax call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbor country (2)
    const [neighbor] = data.borders;

    if (!neighbor) return;

    // Ajax call country 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, "neighbour");
    });
  });
};

// getCountryAndNeighbor("portugal");
// getCountryAndNeighbor("usa");

///////////////////////////////Promises and the Fetch API //////////////////////////////////////////////////
////////////// A promise is a placeholder for a future value /////////////////////////////////////////////
/////// This allows us not to have callbacks inside of callbacks //////////////////////////////////////////
const request = fetch("https://restcountries.com/v2/name/portugal");
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg}} ${response.status}`);
    }
    return response.json();
  });
};

// Cleaned up version, otherwise the same /////////////////////
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => {
//       // Manually add error handling for countries that can't be found
//       // the "throw new" tells this function to automatically and instantly return a rejected promise which directs us to the catch block
//       if (!response.ok) {
//         throw new Error(`Country could not be found ${response.status}`);
//       }

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders[0];

//       if (!neighbor) return;
//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country could not be found ${response.status}`);

//       return response.json();
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.log(err);
//       renderError(`Something went wrong! ${err.message}`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];
      if (!neighbor) throw new Error("No neighbor found!");
      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      renderError(`Something went wrong! ${err.message}`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener("click", function () {
  //   getCountryData("usa");
  //   whereAmI(-33.933, 18.474);
});

///// Using one api to fetch data to use for another api ///////////////////////////////////////////////
////////////////////////////////Coding Challenge 1 ///////////////////////
function whereAmI() {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((response) => {
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

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

///// The event loop in practice ////////////////////////////////////////////////////////////////////////////
//////////////////// The microtask queue(promises) has priority over the callback queue(other callbacks) ////
// console.log("Test start");
// setTimeout(() => console.log("0 second timer"), 0);
// Promise.resolve("Resolved promise 1").then((res) => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// Promise.resolve("Resolved promise 2").then((res) => console.log(res));
// console.log("Test end");

//// Building Promises //////////////////////////////////////////////////////////////////////////

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lotter is happening");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You WIN!");
//     } else {
//       reject(new Error("You lost your money! :("));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err.message));

///// Promisifying setTimeout //////////////////////////////////////////////////////////////////////////
// const wait = function (sec) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, sec * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log("I waited for two seconds");
//     return wait(1);
//   })
//   .then(() => console.log("I waited for one second"));

// make promised that instantly resolve or reject ///////////////////////////
// Promise.resolve("resolved value").then((res) => console.log(res));
// Promise.reject(new Error("rejected value")).catch((err) => console.log(err));

//////////////////// Promisifying geoloaction api ///////////////////////////////////////////////////////////////

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     resolve(position);
    //   },
    //   (err) => reject(err)
    // );

    /// Same as above //////
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then((pos) => console.log(pos));

btn.addEventListener("click", whereAmI);
