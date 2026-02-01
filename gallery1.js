const container = document.getElementById("pictures1");

for (let i = 2; i <= 26; i++) {
    const img = document.createElement("img");
    img.src = `Personal Favorite/${i}.JPEG`;
    img.alt = "Gallery image";

    container.appendChild(img);
}