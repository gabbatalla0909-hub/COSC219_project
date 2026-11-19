export class Biome {
    #biomeData; // Data from the API
    #biome; // Biome that is set after the user picks their biome

    constructor(data) {
        this.#biomeData = data;
    }

    // Returns data array from biomeData
    getBiomes() {
        const { data } = this.#biomeData;
        // console.log(data);
        return data;
    }

    // Displays biome(s) that matched the conditions provided by the user, user picks/clicks on biome they are building in
    displayBiomes() {
        const biomes = this.getBiomes();
        const form = document.querySelector("#b-form");
        const fieldSet = document.createElement("fieldset");
        fieldSet.id = "fs";
        const legend = document.createElement("legend");
        legend.id = "lgnd";
        legend.textContent = "Choose your biome";
        form.append(legend);
        biomes.forEach(b => {
            const button = document.createElement("button");
            button.type = "submit";
            button.textContent = b.name;
            button.value = b.name;
            fieldSet.appendChild(button);
        });
        form.append(fieldSet);
    }

    // Removes biome(s) from the form.
    removeBiomes() {
        const form = document.querySelector("#b-form");
        const fieldSet = document.querySelector("#fs");
        const legend = document.querySelector("#lgnd");
        if (fieldSet !== null && legend !== null) {
            fieldSet.remove();
            legend.remove();
        }
    }

    get biome() {
        return this.#biome;
    }

    set biome(b) {
        this.#biome = b;
    }
}