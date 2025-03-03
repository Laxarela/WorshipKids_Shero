

  // homepage slider filter javascript


  class ProductCard extends HTMLElement {
    connectedCallback() {
        const image = this.getAttribute("image");
        const title = this.getAttribute("title");
        const category = this.getAttribute("category");
        const discount = this.getAttribute("discount");

        this.innerHTML = `
            <div class="product-card" data-category="${category}">
                ${discount ? `<button class="discount-btn">${discount}% off</button>` : ""}
                <img src="${image}" alt="${title}">
                <div class="product-info">
                    <h4>${title}</h4>
                    <p>Children's Ministry Deals</p>
                </div>
            </div>
        `;
    }
}

customElements.define("product-card", ProductCard);

// Product data
const products = [
    { image: "./images/pumpkin_prayer.png", title: "Match it! Back to School Edition", category: "games", discount: "50" },
    { image: "./images/play_the_game.png", title: "Match it! Back to School Edition", category: "games", discount: "50" },
    { image: "./images/school_bus.png", title: "Match it! Back to School Edition", category: "motions", discount: "50" },
    { image: "./images/gone_fishing.png", title: "Under The Sea", category: "stillbackground", discount: "50" },
    { image: "./images/under_the_sea.png", title: "Match it! Back to School Edition", category: "kids-videos" }, 
    { image: "./images/kids_construction.png", title: "Match it! Back to School Edition", category: "curriculum", discount: "50" },
    { image: "./images/kids_thanksgiving.png", title: "Match it! Back to School Edition", category: "countdowns" },
    { image: "./images/kids_worship_essecials.png", title: "Match it! Back to School Edition", category: "countdowns", discount: "50" },
    
];

// images for the second tab gallery
// Product data
const products2 = [
    { image: "./images/gone_fishing.png", title: "Under The Sea", category: "stillbackground", discount: "50" },
    { image: "./images/this_is_our_god.png", title: "Match it! Back to School Edition", category: "games", discount: "50" },
    { image: "./images/play_the_game.png", title: "Match it! Back to School Edition", category: "games", discount: "50" },
    { image: "./images/match_it.png", title: "Match it! Back to School Edition", category: "motions", discount: "50" },
    { image: "./images/pumpkin_prayer.png", title: "Match it! Back to School Edition", category: "kids-videos" }, 
    { image: "./images/kids_construction.png", title: "Match it! Back to School Edition", category: "curriculum", discount: "50" },
    { image: "./images/kids_thanksgiving.png", title: "Match it! Back to School Edition", category: "countdowns" },
    { image: "./images/kids_worship_essecials.png", title: "Match it! Back to School Edition", category: "countdowns", discount: "50" }
];

const products3= [ 
    {image: "./images/feature_game_1.png", title: "Match it! Back to School Edition"},
    {image: "./images/feature_game_2.png", title: "Match it! Back to School Edition"},
    {image: "./images/feature_game_3.png", title: "Match it! Back to School Edition"},
    {image: "./images/feature_game_4.png", title: "Match it! Back to School Edition"},
    { image: "./images/this_is_our_god.png", title: "Match it! Back to School Edition", category: "games", discount: "50" },
    { image: "./images/play_the_game.png", title: "Match it! Back to School Edition", category: "games", discount: "50" },
    { image: "./images/match_it.png", title: "Match it! Back to School Edition", category: "motions", discount: "50" },
    { image: "./images/pumpkin_prayer.png", title: "Match it! Back to School Edition", category: "kids-videos" },

]

const container = document.getElementById("product-container");
const container2 = document.getElementById("product-container2");

function renderProducts(category) {
    container.innerHTML = "";
    products
        .filter(product => category === "all" || product.category === category)
        .forEach(product => {
            const productCard = document.createElement("product-card");
            productCard.setAttribute("image", product.image);
            productCard.setAttribute("title", product.title);
            productCard.setAttribute("category", product.category);
            if (product.discount) {
                productCard.setAttribute("discount", product.discount);
            }

            container.appendChild(productCard);
        });
}
function renderProducts2(category) {
    container2.innerHTML = "";
    products2
        .filter(product => category === "all" || product.category === category)
        .forEach(product => {
            const productCard = document.createElement("product-card");
            productCard.setAttribute("image", product.image);
            productCard.setAttribute("title", product.title);
            productCard.setAttribute("category", product.category);
            if (product.discount) {
                productCard.setAttribute("discount", product.discount);
            }

            container2.appendChild(productCard);
        });
}


// Initial load
renderProducts("all");
renderProducts2("all");

// Tab click event
document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function () {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        this.classList.add("active");
        renderProducts(this.dataset.category);
    });
});


// // Tab click event for blue tabs section
document.querySelectorAll(".blue_tab").forEach(tab => {
    tab.addEventListener("click", function () {
        document.querySelectorAll(".blue_tab").forEach(t => t.classList.remove("active"));
        this.classList.add("active");
        renderProducts2(this.dataset.category);
    });
});






// produkt cards section , calling cards from here .
const sliderContainer = document.querySelector("#glide2"); 

function loadSliderWithProducts(products3) {
    sliderContainer.innerHTML = ""; 

    products3.forEach(product => { 
        const productCard = document.createElement("product-card");
        productCard.setAttribute("image", product.image);
        productCard.setAttribute("title", product.title);
        productCard.setAttribute("category", product.category);
        if (product.discount) {
            productCard.setAttribute("discount", product.discount);
        }

        const wrapperDiv = document.createElement("div");
        wrapperDiv.appendChild(productCard);

        sliderContainer.appendChild(wrapperDiv);
    });

    new Glider(sliderContainer, {
        slidesToShow: 4, 
        slidesToScroll: 1,
        draggable: true,
        dots: ".dots",
        arrows: {
            prev: ".glider-prev",
            next: ".glider-next"
        },
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 5 }
            },
            {
                breakpoint: 1024, 
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 768, 
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 480, 
                settings: { slidesToShow: 1 }
            }
        ]
    });
}


loadSliderWithProducts(products3);
