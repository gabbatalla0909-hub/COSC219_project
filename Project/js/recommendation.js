export class Recommendation {
    #biome;
    constructor(biome) {
        this.#biome = biome;
    }

    /* Takes all the biomes returned from the api, finds the selected biome, filters into a shallow copy array containing only similar biomes based on temperature and category,
    then creates a new array only containing the materials from the similar biomes, then creates a new array with the sub arrays of each biome's materials concatenated into it.
    */

    getMats(biomeData) {
        const { data } = biomeData;
        const biomeWithMats = data.find(b => {
            if (b.name === this.#biome.biome) {
                return b;
            }
        });
        console.log(biomeWithMats);
        const similarBiomes = data.filter(m => {
            if (m.temperature >= biomeWithMats.temperature && m.category === biomeWithMats.category) {
                return m.temperature;
            }
        });
        const matArrs = similarBiomes.map(ma => ma.uniqueBlocks);
        const mats = matArrs.flat(); // Creates a new array with sub-array elements concatenated into it
        const cleanMats = mats.filter((cm, i, a) => a.indexOf(cm) === i); // Filters out duplicates, if any.
        return cleanMats;
    }


    // Helper Methods, only really used in displayRecommendation
    getMaterial(name, mats) {
        if (name === null || mats === null) {
            return;
        }
        return mats.find(m => m === name);
    }

    convertFromLog(id) {
        return id.replaceAll("log", "planks");
    }

    // Not used yet (11.27.26)
    convertFromPlanks(id) {
        return id.replaceAll("planks", "log");
    }

    // Filters material name string into the format of a Minecraft ID
    getId(mat) {
        if (mat === null) {
            return;
        }
        let newMat = mat.toLowerCase();
        if (mat.includes(" ")) {
            newMat = mat.replaceAll(" ", "_").toLowerCase();
        }
        return newMat;
    }

    displayRecommendation(biomeData) {
        const mats = this.getMats(biomeData);
        const ul = document.querySelector("#mats");
        mats.forEach(m => {
            console.log(this.getId(this.getMaterial(m, mats)));
            const li = document.createElement("li");
            const p = document.createElement("p");
            const img = document.createElement("img");

            p.textContent = (this.convertFromLog(this.getId(this.getMaterial(m, mats))).includes("planks")) ? m.replaceAll("Log", "Planks") : m;
            img.setAttribute("src", "https://atlas.playcdu.co/img/ATM10/minecraft/" + this.convertFromLog(this.getId(this.getMaterial(m, mats))));
            li.appendChild(p);
            li.appendChild(img);
            li.id = this.getId(m);
            ul.append(li);

            // 11.27.26 last left off here (Dallas): Need to add converted log back to displayed materials
        });
    }
}