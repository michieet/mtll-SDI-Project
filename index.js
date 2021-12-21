const names = document.getElementById("name")
const dropdown = document.getElementById("dropbutton")
const date = document.getElementById("date")
const preferredtime = document.getElementById("preferredtime")
const form = document.getElementsByClassName("form")
const error = document.getElementById("error")


// window.addEventListener("submit", (e)=>{
//     let ping = []
//     if (names.value === "" || names.value == null){
//         ping.push("Name required.")
//     }

//     if (ping.length > 0){
//         e.preventDefault();
//         error.innerText = ping.join(", ")
//     }  
// });



// Dropdown options func
// function dropdown() {
//     let dropdown = document.querySelector("#dropbutton");
//     let options = "";
//     let i;
//     for (i = 0; i < dropdown.length; i++) {
//         options = options + " " + options.options[i].text;
//     }
//     document.getElementById("dropbutton").innterHTML = options;
// }



// Date selector
// const today = document.querySelector("#date")
// const date = new Date(today.value)

// let day = date.getDate()
// let month = date.getMonth() + 1
// let year = date.getFullYear()

// day < 10 && (day = `0${day}`)
// month < 10 && (month = `0${month}`)

// const newDate = `${day}-${month}-${year}`

// today.value = newDate
// console.log(newDate);
// //
// let date = document.querySelector("#date")
// date.value = ""

let date = new Date(Date.UTC(2021, 12, 20, 21, 16, 0));
console.log(date.toLocaleDateString());