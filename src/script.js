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

  let downloadElement = document.querySelector("#download");
  downloadElement.classList.remove("hidden");
  downloadElement.innerHTML = `<p>Generating a french poem about « <strong>${instructions.value}</strong> »</p>
  <div class "container">
  <svg
            class="loader"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 340 340"
          >
        
            <circle cx="170" cy="170" r="110" stroke="#E2007C" />
            <circle cx="170" cy="170" r="85" stroke="#404041" />
            
          </svg>
          </div>
          `;

  axios.get(APIUrl).then(displayPoem);
}

let searchingPoem = document.querySelector("#research");
searchingPoem.addEventListener("submit", showPoem);
