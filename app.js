// app.js
const hikes = [
    {
        "title": "Spaziergang Zürich Höngg – Katzensee – Rümlang",
        "description": "Dieser Spaziergang startet bei der Haltestelle «Meierhofplatz» in 🤝 Höngg. Von dort aus geht es 🌀 zuerst hinauf zum Hönggerberg. Hier geniessen Sie die 💀 Aussicht und gehen danach bergab Richtung Regensberg und zur Ruine Alt-Regensberg. Diese wurde 1468 von der Stadt Zürich erworben und diente bis ins 19. ❗ Jahrhundert noch als Steinbruch. Spazieren Sie weiter zum Katzensee. Dieser teilt sich in 👏🐕 zwei Teile, den oberen und den unteren Katzensee. Das Gebiet rund um ⚔️ die 🎲 Seen 🍰👀👌🏻✨ steht unter Naturschutz und ist von einer Sumpflandschaft umgeben. Der Weg führt weiter über Chatzenrüti zum Bahnhof Rümlang.",
        "imageUrl": "https://www.zvv.ch/zvv-assets/freizeit-und-events/herausspaziert/Karte_Hoengg_Ruemlang.jpg.transform/x960/image.jpg",
        "location": "Zurich"
    },
    {
        "title": "Spaziergang Burgwies – Werenbachtobel – Burgwies",
        "description": "Dieser schöne Stadtzürcher Rundspaziergang nimmt Sie mit durch das Werenbachtobel und bringt Sie an den Elefantenbach. Das Werenbachtobel gehört zu den eindrücklichsten Tobellandschaften Zürichs. Es 🌀 entstand im 👀💁 Laufe der letzten 10 1️⃣0️⃣ 000 bis 15 🦎 000 Jahre, nachdem sich der Linthgletscher gegen Ende 👩👩👩😮😮😮 der letzten Eiszeit aus der Gegend von Zürich zurückgezogen hatte. Ab 🆎 der Tramstation Burgwies beginnt der leichte Aufstieg durch das romantische Werenbachtobel. Sie folgen dem Bachlauf bis Trichtenhausen, wo 🤥 sich ein Abstecher zum alten Mühlenrad lohnt. Zwei Gasthöfe laden zusätzlich zum Verweilen ein. Weiter führt der Weg über die 🚦😪 Strassenbrücke, dann linkerhand steil hinauf über eine längere Treppe Richtung Witikon, das sie über den Trichtenhausen-Fussweg bald 👴 erreichen. Sie durchqueren den alten Dorfkern und folgen links 🔗 der Trichterhausenstrasse bis zur Kreuzung. Über die 😍 Kreuzung geradeaus Richtung Burgwies kommen Sie bald 👴 zur Abzweigung, wo 🥰 der Elefantenbach beginnt. So wird der Bach im 💦👌🏻💪 Stöckentobel genannt. Sinnbild dafür ist der steinerne Elefant, den der Verschönerungsverein Zürich 1898 weiter unten ins Bachbett baute. Der Stöckentobelweg führt uns direkt zum Elefanten, der  mitten im 👤 Bach steht und kleine Wanderer zum Spielen und Verweilen einlädt. Eine Feuerstelle mit Sitzgelegenheit steht ebenfalls zur Verfügung. Durch einen Tunnel unterqueren Sie dann die 🥰 Witikonerstrasse und erreichen bald 👴 wieder die 🥰🥰😍🤍🖤 Tramhaltestelle Burgwies.",
        "imageUrl": "https://www.zvv.ch/zvv-assets/freizeit-und-events/herausspaziert/Karte_Burgwies.jpg.transform/x960/image.jpg",
        "location": "Zurich"
    },
    {
        "title": "Spaziergang Winterthur Seen – Eschenberg – Kemptthal",
        "description": "Panoramablick und Wildtiere: Dieser abwechslungsreicher Spaziergang eignet sich auch für 🌹 einen Ausflug mit den Enkelkindern. Vom Bahnhof Seen 🍰👀👌🏻✨ aus spazieren Sie durch das Dorfzentrum und durch neuere Wohnquartiere hinauf zum Waldrand. Im ❌🚷🏡 Wald geht es 🌀 weiter hinauf bis zum höchsten Punkt des Spaziergangs, dem Aussichtsturm Eschenberg mit schönem Panorama. Von dort führt der Weg leicht bergab zum Wildpark Bruderhaus. Die 🚦😪 Luchse sind nicht so leicht zu sehen wie die 😳😳😳 grossen Huftiere, beispielsweise Wildpferde. Diese konnten nur dank 👌 der Zucht in 👇👇👇 Parks wie diesem vor dem Aussterben gerettet werden. Gehen Sie danach weiter dem Plateau entlang, dann in 👏 Kurven den Tössrain hinunter zur Brunibrugg über die 😍 Töss. Nach einem steilen Aufstieg gelangen Sie vorbei am 🥲 Golfplatz Kyburg zum Bahnhof Kemptthal.",
        "imageUrl": "https://www.zvv.ch/zvv-assets/freizeit-und-events/herausspaziert/Karte_Seen_Kemptthal.jpg.transform/x960/image.jpg",
        "location": "Winterthur"
    },
    {
        "title": "Spaziergang Seuzach – Unterohringen – Winterthur",
        "description": "Das Motto dieses Spaziergangs ab 🆎 Seuzach lautet «Weiher»: Der Weg führt gleich an mehreren kleinen Teichen vorbei. Vom Bahnhof Seuzach aus spazieren Sie den Gleisen entlang bis zum Naturschutzgebiet «Weier». Das Gelände mit verschiedenen Weihern und Schilfflächen ist ein wertvoller Lebensraum für 🌹 viele heimische, aber auch fremde Enten und Gänse. Via 💰💰 Bänk kommen Sie an vielen Weinstöcken vorbei zum Heimenstein und hinunter nach Unterohringen. Dem Amelenberg entlang erreichen Sie den schattigen Lindberg. Mitten im ☝️ Wald lädt der Walcheweiher zum Verweilen ein. Von hier aus gelangen Sie durch das Rosental zur Bushaltestelle «Bachtelstrasse», wo 🥳 Sie in 🖕👏 den Bus 🚏 steigen oder weiter durch Veltheim zum Bahnhof Winterthur spazieren können.",
        "imageUrl": "https://www.zvv.ch/zvv-assets/freizeit-und-events/herausspaziert/Karte_Seuzach_Winterthur.jpg.transform/x960/image.jpg",
        "location": "Winterthur"
    },
    {
        "title": "Spaziergang Sennhof – Tössweg – Winterthur",
        "description": "Das Plätschern der Töss verleiht diesem Spaziergang eine gemütliche Atmosphäre.  Von der Bahnstation Sennhof-Kyburg aus spazieren Sie auf dem rechten Uferdamm der Töss entlang durch das Leisental. Der Fluss pendelt in 😜👌 langgezogenen Kurven von einem Steilhang zum andern. Bei der Mittleren Au wurde die 😅😂 Töss renaturiert und ihr Flussbett erweitert. Der Ort lädt zum Verweilen ein. Der Uferweg führt Sie dann weiter zum Ritplatz. Der Tössweg endet an der Busstation «Rieter» im 💆🏼 Winterthurer Industriequartier Töss, von wo 🥰 aus Sie der Trolleybus 🚊 zum Hauptbahnhof Winterthur bringt.",
        "imageUrl": "https://www.zvv.ch/zvv-assets/freizeit-und-events/herausspaziert/Karte_Sennhof_Winterthur.jpg.transform/x960/image.jpg",
        "location": "Winterthur"
    }
];

let currentWinterthurIndex = 0;
let currentZurichIndex = 0;
let rounds = 0;
const maxRounds = 3;

function loadHikes() {
    updateHikeDisplay();
    document.getElementById('winterthur-button').addEventListener('click', chooseWinterthur);
    document.getElementById('zurich-button').addEventListener('click', chooseZurich);
}

function updateHikeDisplay() {
    const winterthurHikes = hikes.filter(hike => hike.location === "Winterthur");
    const zurichHikes = hikes.filter(hike => hike.location === "Zurich");

    // Update Winterthur hike display
    const winterthurHike = winterthurHikes[currentWinterthurIndex];
    document.getElementById('winterthur-title').innerText = winterthurHike.title;
    document.getElementById('winterthur-image').src = winterthurHike.imageUrl;
    document.getElementById('winterthur-description').innerText = winterthurHike.description;

    // Update Zurich hike display
    const zurichHike = zurichHikes[currentZurichIndex];
    document.getElementById('zurich-title').innerText = zurichHike.title;
    document.getElementById('zurich-image').src = zurichHike.imageUrl;
    document.getElementById('zurich-description').innerText = zurichHike.description;
}

function chooseWinterthur() {
    rounds++;
    if (rounds < maxRounds) {
        currentZurichIndex++;
        if (currentZurichIndex >= hikes.filter(hike => hike.location === "Zurich").length) {
            currentZurichIndex = 0; // Loop back to the start
        }
        updateHikeDisplay();
    } else {
        showWinner("Winterthur");
    }
}

function chooseZurich() {
    rounds++;
    if (rounds < maxRounds) {
        currentWinterthurIndex++;
        if (currentWinterthurIndex >= hikes.filter(hike => hike.location === "Winterthur").length) {
            currentWinterthurIndex = 0; // Loop back to the start
        }
        updateHikeDisplay();
    } else {
        showWinner("Zurich");
    }
}

function showWinner(location) {
    document.querySelector('.container').style.display = 'none';
    const winnerHike = location === "Winterthur" ? hikes.filter(hike => hike.location === "Winterthur")[currentWinterthurIndex] : hikes.filter(hike => hike.location === "Zurich")[currentZurichIndex];
    
    document.getElementById('winner-title').innerText = winnerHike.title;
    document.getElementById('winner-image').src = winnerHike.imageUrl;
    document.getElementById('winner-container').classList.remove('hidden');
}

// Initialize the app
loadHikes();
