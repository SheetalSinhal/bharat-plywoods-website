const products = [
{
    name: "Plywoods",
    description: "Premium quality plywood suitable for furniture, kitchens, wardrobes and interiors.",
    items: ["Commercial Plywood", "Marine Plywood", "BWR Grade", "BWP Grade", "Flexible Plywood"],
    image: "images/plywood.jpg"
},
{
    name: "Laminates",
    description: "Decorative laminates available in glossy, matte and textured finishes.",
    items: ["High Gloss", "Matte", "Textured", "Digital", "Exterior Laminates"],
    image: "images/laminates.jpg"
},
{
    name: "Veneers",
    description: "Natural wood veneer finishes for luxurious furniture and wall panels.",
    items: ["Natural Veneers", "Engineered Veneers", "Teak", "Oak", "Walnut"],
    image: "images/veneers.jpg"
},
{
    name: "Flush Doors",
    description: "Strong and elegant flush doors for residential and commercial projects.",
    items: ["Decorative", "Waterproof", "Laminated", "Designer Doors"],
    image: "images/flushdoors.jpg"
},
{
    name: "MDF",
    description: "High quality MDF boards for furniture, cabinetry and partitions.",
    items: ["Plain MDF", "Prelam MDF", "Moisture Resistant", "HDHMR"],
    image: "images/mdf.jpg"
},
{
    name: "Acrylic Sheets",
    description: "Premium high-gloss acrylic sheets for modern modular furniture.",
    items: ["Mirror Acrylic", "High Gloss", "UV Acrylic", "Colored Sheets"],
    image: "images/acrylic.jpg"
},
{
    name: "WPC",
    description: "Waterproof wood-plastic composite products.",
    items: ["WPC Boards", "WPC Doors", "WPC Frames"],
    image: "images/wpc.jpg"
},
{
    name: "Louvers",
    description: "Modern decorative wall louvers and charcoal panels.",
    items: ["Charcoal Louvers", "PVC Louvers", "Decorative Panels"],
    image: "images/louvers.jpg"
},
{
    name: "Adhesives",
    description: "Reliable adhesives for woodworking and construction.",
    items: ["Wood Adhesive", "Waterproof Adhesive", "Construction Adhesive"],
    image: "images/adhesives.jpg"
}
];

const grid = document.querySelector(".products-grid");

products.forEach(product => {

    const card = document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `
        <div class="product-header">

            <img src="${product.image}"
                 alt="${product.name}"
                 class="product-image">

            <div class="product-title">
                <h3>${product.name}</h3>
                <span class="expand-icon">+</span>
            </div>

        </div>

        <div class="product-details">

            <p>${product.description}</p>

            <h4>Available Categories</h4>

            <ul>
                ${product.items.map(item =>
                    `<li>${item}</li>`
                ).join("")}
            </ul>

        </div>
    `;

    card.addEventListener("click", () => {

        const isOpen = card.classList.contains("active");

        document.querySelectorAll(".product-card").forEach(c => {
            c.classList.remove("active");
        });

        if (!isOpen) {
            card.classList.add("active");
        }

    });

    grid.appendChild(card);

});