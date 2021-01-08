

//accès à mon compte
mapboxgl.accessToken = 'pk.eyJ1IjoiYXltZXJpY2hlcmNodWVsejE5IiwiYSI6ImNramw4a3NuNjM5b2szMXNjeWQ5Z2hqcjQifQ.l-z7b6sZ8CZks_pfx0UY_Q';

var carte = L.map('carte').setView([43.184277,     3.003078], 15);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Données géographiques © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributeurs, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
}).addTo(carte);
let TurtleIcon = L.Icon.extend({
    options: {
        shadowUrl: '',
        shadowSize: [45, 45],
        shadowAnchor: [-8, 49],
        iconSize: [45, 45],
        iconAnchor: [0, 45],
        popupAnchor: [22.5, -45]
    }
});
let beastgame = new TurtleIcon({iconUrl: 'assets/logo/gamepad.png'});
let bd = new TurtleIcon({iconUrl: 'assets/logo/open-book.png'});
let cimetiere = new TurtleIcon({iconUrl: 'assets/logo/living-dead.png'});
let bar = new TurtleIcon({iconUrl: 'assets/logo/beer.png'});
let echoppe = new TurtleIcon({iconUrl: 'assets/logo/dice.png'});

L.marker([43.183331, 3], {icon: beastgame})
    .addTo(carte)
    .bindPopup("<img src='https://cdt11.media.tourinsoft.eu/upload/DSC00472.JPG' width='100%'/><strong>BEST GAMES</strong><br/>Best Games est un magasin de jeux vidéo (neuf, occasion, import, retrogaming), de figurines (japonaises, américaines) de 'produits geek' (mugs, posters, goodies...) et de livres (manga, BD, romans...), ouvert depuis 1998.");

L.marker([43.185103, 3.005105], {icon: bd})
        .addTo(carte)
        .bindPopup("<img src='https://www.manga-news.com/public/images/librairies/librairie-BD-_-CIE.jpg' width='100%'><br/><strong>Librairie BD & Cie</strong><br/>Venez découvrir notre librairie dédiée à l'univers BD.Vous trouverez tous les classiques de bandes-dessinées ainsi que les nouveaux tirages.Vous trouverez des comics, des mangas, des BD d'occasion ou neuves.Partagez avec nous votre passion par ces livres qui nous transportent dans un nouveau monde.Nous vous proposons également des figurines.N hésitez pas à nous visiter, nous vous attendons.");

L.marker([43.18961139258775, 2.9842686653137207], {icon: cimetiere})
            .addTo(carte)
            .bindPopup("<img src='https://www.officiel-des-obseques.com/images/cimetiere/cimetiere-19.jpg' width='100%'><br/><strong>cimetière de l'ouest narbonne</strong><br/>Les trois cimetières narbonnais sont ouverts toute l'année de 8h à 18h. L’ouverture de la grille pour les véhicules particuliers (uniquement les cimetières de l'Ouest et Cité) de 10h à 14h et de 16h à 17h30.");

L.marker([43.18258948194105, 3.002275675535202], {icon: echoppe})
    .addTo(carte)
    .bindPopup("<img src='https://www.echoppe-medievale-narbonne.fr/wp-content/uploads/2018/06/jeux.jpg' width='100%'><br/><strong>L'Echoppe Médiévale</strong><br/>Soyez le bienvenu dans notre échoppe dans laquelle vous trouverez plus de 300 bières artisanales d'ici et d'ailleurs, des breuvages variés, de l'équipement pour médiévistes, pour rôlistes et d'autres articles pour rêver un peu.Afin de pouvoir trouver facilement un stationnement, le parking du Bourg se situe à proximité.« L'abus d'alcool est dangereux, consommez avec modération. »");

L.marker([43.18244768598126, 3.003089725971222], {icon: bar})
    .addTo(carte)
    .bindPopup("<img src='https://media-cdn.tripadvisor.com/media/photo-s/11/b1/cd/c5/vue-de-la-2e-partie-de.jpg' width='100%'><br/><strong>L'Antre de l'echoppe</strong><br/>L’Antre de l’Échoppe est notre lieu de production des bières ainsi qu’une taverne où vous pouvez déguster nos bières et beaucoup d’autres. Nous avons également des bières sans alcools, des boissons anciennes, des jus de fruits locaux, …Vous y trouverez également une petite sélection de jeux à jouer sur place.");


let url = "https://api.openweathermap.org/data/2.5/weather?q=Narbonne&appid=053ff5a863d7ca21aa4099c572f0e986&units=metric&lang=fr";
fetch(url).then((response) =>
 response.json().then((data) => {
   console.log(data);
   document.querySelector ('#city').innerHTML ="<i class='fas fa-city'></i>" + data.name;
   document.querySelector ('#temp').innerHTML ="<i class='fas fa-thermometer-three-quarters'></i>" +  Math.round(data.main.temp) + ' °C';
   document.querySelector ('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + ' %';
   document.querySelector ('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed  + ' m/sec';
   document.querySelector ('#Meteo').innerHTML = "<img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png'>" + data.weather[0].description;
 })

);
