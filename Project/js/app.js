import { Biome } from "./biome.js";
import { Recommendation } from "./recommendation.js";

const dim = document.querySelector("#dimension");
const cat = document.querySelector("#category");
const rar = document.querySelector("#rarity");
const weth = document.querySelector("#precipitation");
const btn = document.querySelector("#btn");
// console.log(dim.value);

// Using this event listener to test my methods for my biome and recommendation class once they are implemented.
btn.addEventListener("click", async (e) => {
    e.preventDefault();
    if (dim.value === "end") {
        const res = await fetch("https://api.astroworldmc.com/api/v1/biomes?dimension=" + dim.value);
        const data = await res.json();
        // console.log(data);
        const biome = new Biome(data);
        const biomeNames = [...biome.getBiomes()];
    } else if (dim.value === "nether") {
        const res = await fetch("https://api.astroworldmc.com/api/v1/biomes?dimension=" + dim.value);
        const data = await res.json();
        // console.log(data);
        const biome = new Biome(data);
        const biomeNames = [...biome.getBiomes()];
    } else {
        const res = await fetch("https://api.astroworldmc.com/api/v1/biomes?dimension=" + dim.value + "&category=" + cat.value + "&rarity=" + rar.value + "&weather=" + weth.value);
        const data = await res.json();
        // console.log(data);
        const biome = new Biome(data);
        const biomeNames = [...biome.getBiomes()];
    }
});