// function fetch_info() {
//   // let file = "http://localhost/fetch_info.txt"
//   // fetch (file)
//   // .then(x => x.text())
//   // .then(y => document.getElementById("demo").innerHTML = y);
// }
const button = document.getElementById("fetchBut")

button.addEventListener("click", () => {
  let file = "http://localhost/fetch_info.txt"
    fetch (file)
    .then(x => x.text())
    .then(y => document.getElementById("demo").innerHTML = y);
})
