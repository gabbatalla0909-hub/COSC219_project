import Biome from "./biome.js";
import Recommendation from "./recommendation.js";

const dim = document.querySelector("#dimension");
const cat = document.querySelector("#category");
const rar = document.querySelector("#rarity");
const btn = document.querySelector("#btn");

// Using this event listener to test my methods for my biome and recommendation class once they are implemented.
btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const res = await fetch("https://api.astroworldmc.com/api/v1/biomes?dimension=" + dim.value + "&category=" + cat.value + "&rarity=" + rar.value);
    const data = res.json();
    const biome = new Biome(data);
    const biomeNames = [...biome.dataToBiome];
    console.log(biomeNames);
})