const names = document.getElementById("name")
const dropdown = document.getElementById("dropbutton")
const date = document.getElementById("date")
const preferredtime = document.getElementById("preferredtime")
const form = document.getElementsByClassName("form")
const error = document.getElementById("error")

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

