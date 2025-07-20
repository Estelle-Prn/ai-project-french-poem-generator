function showPoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Ni vous sans moi, ni moi sans vous."],
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let searchingPoem = document.querySelector("#research");
searchingPoem.addEventListener("submit", showPoem);
