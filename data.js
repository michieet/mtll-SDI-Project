const dataList = document.getElementById("data")

new URLSearchParams(window.location.search).forEach((value, name)=> {
    dataList.append(`${name}: ${value}`)
    dataList.append(document.createElement("br"))
})


// function appendData(){
//     let formData = new FormData();
//     const form = document.getElementsByClassName("form")

//     let request = new XMLHttpRequest();
//     request.open("GET", "data.js");
//     request.send(form);
// }

// function appendData(){
//     let formElement = document.querySelector("form");
//     let formData = new FormData(formElement);
//     let request = new XMLHttpRequest();

//     request.open("GET", "data.html");
//     formData.append("Submitted:", formData++);
//     request.send(formData);
//     return (formData);
// }