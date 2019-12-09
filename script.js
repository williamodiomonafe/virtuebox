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

let virtueForTheDay = Math.round(Math.random() * (virtues.length - 1));

quoteTitle.innerHTML = virtues[virtueForTheDay].category;
quote.innerHTML = virtues[virtueForTheDay].quote;
quoteTitle.style.fontWeight = "bold";
cardFooter.innerHTML = virtues[virtueForTheDay].author + " - " + virtues[virtueForTheDay].source;




document.getElementById("close-btn").addEventListener("click", function() {
    let navEl = document.getElementById("nav");

    if(navEl.style.display === "none" || navEl.style.display === "") {
        navEl.style.display = "block";
        // window.setTimeout(function(){
        //     navEl.style.opacity = 1;
        //     navEl.style.transform = 'scaleZ(1)';
        // },100);
    } else {
        // navEl.style.opacity = 0;
        // navEl.style.transform = 'scaleZ(9)';

        // window.setTimeout(function(){
            navEl.style.display = 'none';
        // },400); // timed to match animation-duration
    }
});


