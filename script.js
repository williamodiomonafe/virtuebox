
let virtuesList = ["Love", "Kindness"];

let virtues = [
    {
        category : "Love",
        quote: "Deal ye one with another with the utmost love and harmony, with friendliness and fellowship... This goal excelleth every other goal, and this aspiration is the monarch of all aspirations.",
        author: "Bahá’u’lláh",
        source: "Gleanings from the Writings of Bahá’u’lláh, p. 288",
    },
    {
        category : "Love",
        quote: "Love is a light that never dwelleth in a heart possessed by fear.",
        author: "Bahá’u’lláh",
        source: "The Four Valleys, p. 58",
    },
    {
        category : "Love",
        quote: "The essence of love is for man to turn his heart to the Beloved One, and sever himself from all else but Him, and desire naught save that which is the desire of his Lord.",
        author: "Bahá’u’lláh",
        source: "Tablets of Bahá’u’lláh, p. 155",
    },
    {
        category : "Kindness",
        quote: "Humility, kindness, resignation, and all these spiritual attributes emanating from great physical strength are acceptable to God",
        author: "‘Abdu’l-Bahá",
        source: "Bahá’í World Faith, p. 412-413",
    },
    {
        category : "Kindness",
        quote: "Strive ye then with all your heart to treat compassionately all humankind--except for those who have some selfish, private motive, or some disease of the soul. Kindness cannot be shown the tyrant, the deceiver, or the thief, because, far from awakening them to the error of their ways, it maketh them to continue in their perversity as before. No matter how much kindliness ye may expend upon the liar, he will but lie the more, for he believeth you to be deceived, while ye understand him but too well, and only remain silent out of your extreme compassion.",
        author: "‘Abdu’l-Bahá",
        source: "Selections from the Writings of ‘Abdu’l-Bahá, p. 158",
    }
];


let card = document.getElementById("virtue-card");
let cardHeader = document.getElementById("card-head");
let cardFooter = document.getElementById("card-footer");
let quote = document.getElementById("quote");
let quoteTitle = document.getElementById("quote-title");

function virtueForTheDay() {
    return Math.round(Math.random() * (virtues.length - 1));
};


// let virtue = "Home";


// if(document.cookie == "Home" || document.cookie == "") {
    virtue = virtueForTheDay();
// } else {
//     do {
//         virtue = document.cookie;
//     } while(document.cookie.toLowerCase !== virtues[virtueForTheDay()].category);
// }


quoteTitle.innerHTML = virtues[virtue].category;
quote.innerHTML = virtues[virtue].quote;
quoteTitle.style.fontWeight = "bold";
cardFooter.innerHTML = virtues[virtue].author + " - " + virtues[virtue].source;




document.getElementById("close-btn").addEventListener("click", function() {
    let navEl = document.getElementById("nav");

    if(navEl.style.display === "none" || navEl.style.display === "") {
        navEl.style.display = "block";
        this.innerHTML = "X";
        this.style.width = "2.5em";
    } else {
            navEl.style.display = 'none';
            this.innerHTML = "Menu";
            this.style.width = "2.5em";
    }
});


// for(i=0; i < virtuesList.length; i++) {
//     document.getElementById("virtue-list").innerHTML += "<li>" + virtuesList[i] + "</li>";
// }

// let list = document.getElementById("virtue-list").children;
// for(i=0; i < list.length; i++) {
//     list[i].addEventListener('click', function() {
//         document.cookie = this.innerHTML;

//         console.log(document.cookie);
//     });
// }


document.getElementById("refresh").addEventListener('click', function() {
   location.reload(); 
});

