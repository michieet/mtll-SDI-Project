// window.addEventListener("submit", (e)=>{
//     // let ping = []
//     // if (names.value === "" || names.value == null){
//     //     ping.push("Name required.")
//     // }

//     // if (ping.length > 0){
//     //     
//     //     error.innerText = ping.join(", ")
//     // }  
//     e.preventDefault();
//     console.log(names.value);
//     if (names.value === "" || names.value == null){
//         alert("Name required.")
//         return false;
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

// //
// let date = document.querySelector("#date")
// date.value = ""

// let date = new Date(Date.UTC(2021, 12, 20, 21, 16, 0));
// console.log(date.toLocaleDateString());

// document.getElementById('date').value = new Date();

// Date func works
// function getDate() {
//     var today = new Date();
//     var dd = today.getDate();
//     var mm = today.getMonth()+1; //January is 0!
//     var yyyy = today.getFullYear();
  
//     if(dd<10) {
//         dd = '0'+dd
//     } 
  
//     if(mm<10) {
//         mm = '0'+mm
//     } 
  
//     today = yyyy + '-' + mm + '-' + dd;
//     document.getElementById("date").value = today;
//   }
  
//   window.onload = function() {
//     getDate();
//   };