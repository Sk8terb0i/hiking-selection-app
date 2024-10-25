const hikes = [
    {
        "title": "Spaziergang Zürich Höngg – Katzensee – Rümlang",
        "description": "Dieser Spaziergang startet bei der Haltestelle «Meierhofplatz» in 🤝 Höngg. Von dort aus geht es 🌀 zuerst hinauf zum Hönggerberg...",
        "imageUrl": "https://www.zvv.ch/zvv-assets/freizeit-und-events/herausspaziert/Karte_Hoengg_Ruemlang.jpg.transform/x960/image.jpg",
        "location": "Zurich"
    },
    {
        "title": "Spaziergang Burgwies – Werenbachtobel – Burgwies",
        "description": "Dieser schöne Stadtzürcher Rundspaziergang nimmt Sie mit durch das Werenbachtobel...",
        "imageUrl": "https://www.zvv.ch/zvv-assets/freizeit-und-events/herausspaziert/Karte_Burgwies.jpg.transform/x960/image.jpg",
        "location": "Zurich"
    },
    {
        "title": "Spaziergang Winterthur Seen – Eschenberg – Kemptthal",
        "description": "Panoramablick und Wildtiere: Dieser abwechslungsreiche Spaziergang eignet sich auch für 🌹 einen Ausflug mit den Enkelkindern...",
        "imageUrl": "https://www.zvv.ch/zvv-assets/freizeit-und-events/herausspaziert/Karte_Seen_Kemptthal.jpg.transform/x960/image.jpg",
        "location": "Winterthur"
    },
    {
        "title": "Spaziergang Seuzach – Unterohringen – Winterthur",
        "description": "Das Motto dieses Spaziergangs ab 🆎 Seuzach lautet «Weiher»: Der Weg führt gleich an mehreren kleinen Teichen vorbei...",
        "imageUrl": "https://www.zvv.ch/zvv-assets/freizeit-und-events/herausspaziert/Karte_Seuzach_Winterthur.jpg.transform/x960/image.jpg",
        "location": "Winterthur"
    },
    {
        "title": "Spaziergang Sennhof – Tössweg – Winterthur",
        "description": "Das Plätschern der Töss verleiht diesem Spaziergang eine gemütliche Atmosphäre...",
        "imageUrl": "https://www.zvv.ch/zvv-assets/freizeit-und-events/herausspaziert/Karte_Sennhof_Winterthur.jpg.transform/x960/image.jpg",
        "location": "Winterthur"
    }
];

let winterthurIndex = 0;
let zurichIndex = 0;
let rounds = 0;

function displayHikes() {
    const winterthurHike = hikes.filter(hike => hike.location === "Winterthur")[winterthurIndex];
    const zurichHike = hikes.filter(hike => hike.location === "Zurich")[zurichIndex];

    document.getElementById('winterthur-title').innerText = winterthurHike.title;
    document.getElementById('winterthur-description').innerText = winterthurHike.description;
    document.getElementById('winterthur-image').src = winterthurHike.imageUrl;

    document.getElementById('zurich-title').innerText = zurichHike.title;
    document.getElementById('zurich-description').innerText = zurichHike.description;
    document.getElementById('zurich-image').src = zurichHike.imageUrl;
}

function chooseWinterthur() {
    rounds++;
    if (rounds < 3) {
        winterthurIndex++;
        displayHikes();
    } else {
        announceWinner("Winterthur");
    }
}

function chooseZurich() {
    rounds++;
    if (rounds < 3) {
        zurichIndex++;
        displayHikes();
    } else {
        announceWinner("Zurich");
    }
}

function announceWinner(location) {
    document.getElementById('winner-title').innerText = hikes.filter(hike => hike.location === location)[location === "Winterthur" ? winterthurIndex - 1 : zurichIndex - 1].title;
    document.getElementById('winner-description').innerText = hikes.filter(hike => hike.location === location)[location === "Winterthur" ? winterthurIndex - 1 : zurichIndex - 1].description;
    document.getElementById('winner-image').src = hikes.filter(hike => hike.location === location)[location === "Winterthur" ? winterthurIndex - 1 : zurichIndex - 1].imageUrl;

    document.getElementById('winner').classList.remove('hidden');
    document.querySelector('.container').classList.add('hidden');
}

displayHikes();
