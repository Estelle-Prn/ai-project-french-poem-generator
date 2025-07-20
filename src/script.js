function showPoem(event) {
  event.preventDefault();
  alert("Hello");
}

let searchingPoem = document.querySelector("#research");
searchingPoem.addEventListener("submit", showPoem);
