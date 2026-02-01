const container = document.getElementById("pictures");

for (let i = 1223; i <= 1250; i++) {
    const img = document.createElement("img");
    img.src = `Spillexpo/IMG_${i}.JPEG`;
    img.alt = "Gallery image";

    container.appendChild(img);
};
