const names = document.getElementById("name")
const dropdown = document.getElementById("dropbutton")
const date = document.getElementById("date")
const preferredtime = document.getElementById("preferredtime")
const dataList = document.getElementById("data")

// Date selector
const today = document.querySelector("#date")
// console.log(today.value);
const todaydate = new Date()

let day = todaydate.getDate()
let month = todaydate.getMonth() + 1
let year = todaydate.getFullYear()

day < 10 && (day = `0${day}`)
month < 10 && (month = `0${month}`)

const newDate = `${year}-${month}-${day}`

// today.value = newDate // autoselects the current date
today.min = newDate // sets earliest date
// console.log(newDate);


// fetchData([
//     'data.js'
//   ]).then(() => {
//     console.log(`Your subsmission: ${dataList}`)
//   })


// self.addEventListener('send', function(e) {
//     e.waitUntil(
//       caches.open('form').then(function(cache) {
//         return cache.addAll([
//           'data.js'
//         ]);
//       })
//     );
//    });
   
// self.addEventListener('fetch', function(e) {
//     console.log(e.request.url);
//     e.respondWith(
//     caches.match(e.request).then(function(response) {
//         return response || fetch(e.request);
//     })
//     );
// });



// localStorage.setItem("names", "value");
// let appendData = localStorage.getItem("names");
// appendData




// Compiling form data
// let formData = new FormData();
// const form = document.getElementsByClassName("form")

// let request = new XMLHttpRequest();
// request.open("GET", "data.js");
// request.send(formData);


// formData.append(`${names}`, `${dropdown}`);
// formData.append(`${date}`, `${preferredtime}`);
// console.log(formData.append(`${names}`, `${dropdown}`));


// Trying to get data to show after clicking "Return to Form"

// const dataList = document.getElementById("data")

// new URLSearchParams(window.location.search).forEach((value, name)=> {
//     dataList.append(`${name}: ${value}`)
//     dataList.append(document.createElement("br"))
// })
//
// let formData = new FormData(document.querySelector('form'))

// window.addEventListener('formdata', (e) => {
//     console.log('formdata fired');
  
//     // Get the form data from the event object
//     let data = e.formData;
//     for (let value of data.values()) {
//       console.log(value);
//     }
  
//     // submit the data via XHR
//     let request = new XMLHttpRequest();
//     request.open("GET", "/data");
//     request.send(data);
//     console.log(data);
//   });

//
// var appendData = document.querySelectorAll('#form');
// Element.insertAdjacentHTML("afterend", "appendedData");
//


// let appendData = document.getElementById('appendedData');
// let content = document.createTextNode(`${form}`);
// appendData.appendChild(content);

//Trying out JSON
// [{
//     "name": names,
//     "activity": dropdown,
    
// }]