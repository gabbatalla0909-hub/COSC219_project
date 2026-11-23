export class Recommendation {
    #biome;
    constructor(biome) {
        this.#biome = biome;
    }

    /* Takes all the biomes returned from the api, finds the selected biome, filters into a shallow copy array containing only similar biomes based on temperature and category,
    then creates a new array only containing the materials from the similar biomes, then creates a new array with the sub arrays of each biome's materials concatenated into it.
    */

    // **NEED TO FIX DUPLICATES FROM BEING PRODUCED**
    getMats(biomeData) {
        const { data } = biomeData;
        const biomeWithMats = data.find(b => {
            if (b.name === this.#biome.biome) {
                return b;
            }
        });
        const similarBiomes = data.filter(b => {
            if (b.temperature >= biomeWithMats.temperature && b.category === biomeWithMats.category) {
                return b.temperature;
            }
        });
        const matArrs = similarBiomes.map(ma => ma.uniqueBlocks);
        const mats = matArrs.flat(); // Creates a new array with sub-array elements concatenated into it
        return mats;
    }


    // Helper Methods, only really used in displayRecommendation
    getMaterial(name, mats) {
        if (name === null || mats === null) {
            return;
        }
        return mats.find(m => m === name);
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

    // 11.22.26: Left off here (Dallas)
    // Got image generation for materials working.
    displayRecommendation(biomeData) {
        const mats = this.getMats(biomeData);
        const ul = document.querySelector("#mats");
        mats.forEach(m => {
            console.log(this.getId(this.getMaterial(m, mats)));
            const li = document.createElement("li");
            const p = document.createElement("p");
            const img = document.createElement("img");

            p.textContent = m;
            img.setAttribute("src", "https://atlas.playcdu.co/img/ATM10/minecraft/" + this.getId(this.getMaterial(m, mats)));
            li.appendChild(p);
            li.appendChild(img);
            ul.append(li);
        });
    }
}