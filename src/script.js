function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}
function showPoem(event) {
  event.preventDefault();

  let instructions = document.querySelector("#word-search");
  let APIkey = "04362ba118dbt14o9f7040e09062332b";
  let prompt = `The user instruction: Generate a french poem about ${instructions.value}`;
  let context =
    "You are a romantic french poem expert. You have to write a beautiful ans short french poem, in 4 lines, when the user gives you an instruction. Make sure to separate each new line of the french poem with a <br/> please.";
  let APIUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${APIkey}`;

  axios.get(APIUrl).then(displayPoem);
}

let searchingPoem = document.querySelector("#research");
searchingPoem.addEventListener("submit", showPoem);
