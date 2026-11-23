import { Biome } from "./biome.js";
import { Recommendation } from "./recommendation.js";

const dim = document.querySelector("#dim");
const cat = document.querySelector("#cat");
const rar = document.querySelector("#rar");
const weth = document.querySelector("#pre");
const btn = document.querySelector("#c-btn");
// console.log(dim.value);

// Using this event listener to test my methods for my biome and recommendation class once they are implemented.
btn.addEventListener("click", async (e) => {
    e.preventDefault();
    var selectedBiome;
    if (dim.value === "end") {
        const res = await fetch("https://api.astroworldmc.com/api/v1/biomes?dimension=" + dim.value);
        const data = await res.json();
        // console.log(data);
        selectedBiome = new Biome(data);
        selectedBiome.displayBiomes();
    } else if (dim.value === "nether") {
        const res = await fetch("https://api.astroworldmc.com/api/v1/biomes?dimension=" + dim.value);
        const data = await res.json();
        // console.log(data);
        selectedBiome = new Biome(data);
        selectedBiome.displayBiomes();

    } else {
        const res = await fetch("https://api.astroworldmc.com/api/v1/biomes?dimension=" + dim.value + "&category=" + cat.value + "&rarity=" + rar.value + "&weather=" + weth.value);
        const data = await res.json();
        // console.log(data);
        selectedBiome = new Biome(data);
        selectedBiome.displayBiomes();
    }
    const biomeForm = document.querySelector("#b-form");
    biomeForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        selectedBiome.biome = e.submitter.value;
        console.log(selectedBiome.biome);
        selectedBiome.removeBiomes();
        // 11.22.26 began working with recommendation displaying.
        const rec = new Recommendation(selectedBiome);
        const res = await fetch("https://api.astroworldmc.com/api/v1/biomes");
        const data = await res.json();
        const mats = rec.getMats(data);
        rec.displayRecommendation(data);
    });
});
