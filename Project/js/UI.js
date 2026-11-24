//This turns reccomendations into cards and displays them in the container. It also handles the favorite button functionality.

import {isFavorite, toggleFavorite} from './favorites.js';

function setFavButton(button, isFav){
    button.textContent = isFav ? "Favorited" : "Favorites";
    button.setAttribute("aria-pressed", String (isFav));
}

function createCard(item, onChange){
    const card = document.createElement("article")
}

const img = document.createElement("img");
img.src = item.image;
img.alt = item.name;
card.appendChild(img);

const title = document.createElement("h3");
title.textContent = item.name;

const desc= document.createElement("p");
desc.textContent = item.description;

const button = document.createElement("button");
button.type = "button";
const isFav = isFavorite(item.id);
setFavButton(button, isFav);
button.addEventListener("click", () => {
    const newFav = toggleFavorite(item.id);
    setFavButton(button, newFav);
    onChange();
});

card.append(img, title, desc, button);
return card;

export function displayItems(items, container, onChange){
    container.replaceChildren();
    if(items.length === 0){
        const.msg = document.createElement("p");
        msg.textContent = emptyMessage;
        container.append(msg);
        return;
    }
    items.forEach((item) => container.append(createCard(item, onChange)));
}