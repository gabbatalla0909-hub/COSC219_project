export class Biome {
    static biomeData;

    constructor(data) {
        this.biomeData = data;
    }

    getBiomes() {
        const { data } = this.biomeData;
        // console.log(data);
        return data;
    }

    // 11.18.26: Left off at this method (Dallas)
    displayBiomes() {
        const biomes = getBiomes();
        const form = document.querySelector("#b-form");
        biomes.forEach(b => {
            const button = document.createElement("button");
            button.textContent = b.name;
            button.value = b.name;
            // Finish
        })
    }
}