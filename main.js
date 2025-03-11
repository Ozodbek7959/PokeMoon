document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("pokemon-container");

  fetch("https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      return response.json();
    })
    .then((data) => {
      data.results.forEach((pokemon) => {
        const pokemonElement = document.createElement("div");
        pokemonElement.classList.add("pokemon-card");

        const pokemonImage = document.createElement("img");
        const urlParts = pokemon.url.split("/");
        const pokemonId = urlParts[urlParts.length - 2];
        pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
        pokemonImage.alt = pokemon.name;

        const pokemonName = document.createElement("p");
        pokemonName.textContent = pokemon.name;

        pokemonElement.appendChild(pokemonImage);
        pokemonElement.appendChild(pokemonName);
        container.appendChild(pokemonElement);
      });
    })
    .catch((error) => console.error("Ma'lumot olishda xatolik:", error));
});
