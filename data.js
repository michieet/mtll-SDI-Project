const dataList = document.getElementById("data")

new URLSearchParams(window.location.search).forEach((value, name)=> {
    dataList.append(`${name}: ${value}`)
    dataList.append(document.createElement("br"))
})