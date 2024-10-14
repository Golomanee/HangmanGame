const romanianWords = [
    "abacuri", "abandon", "abatere", "abdomen", "abilitate", "absolut", "absurd", "academie", "accesor", "accesibil",
    "accident", "acoperi", "acordare", "acordat", "acreditat", "actrita", "acuzare", "adapta", "adaptor", "adapost",
    "adecvat", "adept", "aderență", "aditiv", "admisibil", "adoptat", "adormit", "adresabil", "adresa", "adunare",
    "afacere", "afectat", "afirma", "afirmație", "aflare", "aforism", "afront", "afumare", "agitație", "agrafă",
    "agresiune", "ajutor", "alarmant", "albastru", "alcoolic", "alegere", "aliment", "aliniere", "alocare", "alogen",
    "alpina", "aluneca", "amanunt", "amarat", "amator", "ambalaj", "ambasada", "ambulant", "amicabil", "amintire",
    "amoniac", "amplifica", "amprenta", "amuletă", "analfabet", "ananas", "anapoda", "ancorare", "anduranță", "angajat",
    "angajare", "anghinare", "animat", "aniversar", "anotimp", "anulare", "anticipa", "antracit", "antrenor", "anvelopă",
    "apatetic", "apelativ", "apeluri", "apendice", "apetit", "apicultor", "aplatiza", "aplicație", "aprobare", "arajare",
    "arătare", "arbitrar", "arbore", "arendaș", "aresta", "argument", "arie", "aristocrat", "armaș", "aromat", "aruncare",
    "asasinat", "ascendent", "ascundere", "asemănare", "asemenea", "asfalt", "asfințit", "asigurare", "asistat", "asociat",
    "aspru", "astmatic", "atacare", "atelier", "atenua", "atingere", "atingi", "atlet", "atmosferă", "atractiv", "atribut",
    "atrocitate", "audiere", "auditiv", "augmenta", "aurit", "aurora", "autentic", "automat", "autorități", "avutia",
    "avântat", "axațiune", "bacterii", "balansat", "balene", "baliza", "balon", "bambus", "bancare", "bandaj", "baniță",
    "baraj", "barbar", "barcă", "baron", "baston", "baterie", "băiat", "becuri", "belșug", "beneficiu", "bentita",
    "beretă", "bibliotecă", "bicicletă", "bilateral", "bilete", "biletul", "biserică", "bizar", "blazon", "blocare",
    "boală", "boem", "bolovan", "bombă", "bordură", "borcan", "boschet", "botanică", "bovine", "bradut", "brătar",
    "bravură", "breloc", "breșă", "bricolaj", "briliant", "bucata", "bucătărie", "bucuros", "buget", "bulgăre", "buletin",
    "bumbac", "bunătate", "buprență", "butuc", "cadă", "cadou", "cadre", "cafenea", "caiac", "calamar", "calcare", "calcina",
    "calendar", "calitate", "calm", "calup", "camera", "campanie", "canapea", "candela", "canonic", "cantina", "capacitate",
    "capitan", "captura", "caracter", "carbune", "cardiac", "cariera", "caroserie", "cartof", "carton", "carul", "casnic",
    "castrare", "catastrofă", "cazare", "celebra", "cenusa", "ceramică", "cercetare", "certificat", "cifrat", "cinematograf",
    "circumferință", "citare", "civilizat", "claritate", "clasament", "climat", "cloșca", "clădire", "coada", "coafor",
    "coală", "coborâre", "cobza", "codificat", "coerent", "cofetar", "cofraje", "coincidență", "colaborator", "colos",
    "colorat", "comandant", "comarca", "comestibil", "comisar", "comod", "compact", "comparare", "compasiune", "complet",
    "comunicare", "concesie", "concentrare", "concert", "conducere", "confecționat", "confirmare", "conform", "confortabil",
    "conjuncție", "constatare", "construi", "consultant", "contact", "contor", "contrabandă", "contract", "control",
    "convenit", "cooperare", "coordonat", "copilărie", "coridor", "corpulent", "corupție", "cotidian", "cotor", "covor",
    "credincios", "creion", "crema", "crescut", "cristalin", "critic", "cromatic", "cumpărare", "cumpara", "cumpătare",
    "curaj", "curenți", "curios", "curmare", "cursant", "curte", "curățare", "custodie", "cutremur", "cutuma", "cuțit",
    "dalbă", "dalta", "damele", "dantelă", "daruri", "datare", "datină", "decadent", "decapitat", "decedat", "decent",
    "declanșat", "deconectat", "decorat", "deghizat", "deja", "deliciu", "delimitare", "delir", "demonstrație", "depanat",
    "depășire", "depunere", "dereglare", "derivat", "desen", "deseori", "desigur", "destinație", "destin", "detaliu",
    "detectiv", "determinare", "devorator", "dezbatere", "dezgheț", "dezmințire", "diadema", "diagnostic", "dialog", "diamant",
    "dictator", "diferență", "dificil", "digital", "dinamic", "direcție", "discurs", "dispecer", "disponibil", "distanțat",
    "distribuit", "divertisment", "divizia", "doctorat", "documentar", "dodii", "dominant", "dormitor", "dosar", "dotare",
    "dramatic", "dreptate", "dristor", "drojdia", "dubla", "dudă", "dulăpior", "dumnezeu", "duplicitate", "durabil", "durere",
    "durități", "dușman", "ecou", "educator", "efemer", "efervescent", "egal", "egolatru", "ejectat", "elastici", "elevare",
    "elementar", "eliberat", "elogiat", "emigrant", "eminent", "emitere", "emoționat", "empatic", "enciclopedie", "energie",
    "entuziasm", "epidermic", "epilog", "epopee", "eretic", "eronat", "erudit", "esențial", "esență", "espadrilă", "estetică",
    "estimare", "etalon", "etapizat", "etichetare", "evadare", "evaluat", "evaporație", "eventual", "evocare", "examen",
    "excelent", "exclusiv", "exemplu", "exercițiu", "exotic", "expediție", "explorat", "expresiv", "extensiv", "extraordinar",
    "fabricație", "facilități", "factor", "faliment", "falsificare", "fantastic", "farfurie", "farmacie", "fascinație",
    "fastuos", "fatalitate", "favorabil", "febril", "fecioară", "federativ", "feerie", "felicitat", "feminin", "fenomen",
    "fermier", "ferocitate", "fertilizare", "festival", "ficțiune", "ficțiuni", "fidelitate", "figurație", "filmare",
    "filozofic", "finalitate", "finantare", "fineturi", "finisare", "firav", "firmament", "fizică", "flacon", "flagrant",
    "fleacuri", "floricica", "flux", "foame", "focus", "foiță", "fondator", "fonetic", "fonograf", "forțați", "fotografie",
    "fragment", "franc", "frânghie", "fratelui", "frică", "frison", "fronton", "fugar", "funcționare", "furnizare",
    "futil", "gadget", "gaiță", "garnitură", "garsonieră", "gaura", "geamandura", "gelos", "gemotoc", "generat", "genetică",
    "genial", "genunchi", "geografie", "geometric", "gestionare", "ghicitor", "ghiulea", "gingaș", "ginger", "giratoriu",
    "giratoriu", "gladiator", "globular", "glorificat", "glugă", "goalkeeper", "goană", "grăbit", "grădiniță", "grișca",
    "grivina", "groaznic", "grupare", "grădinar", "gustativ", "hăinuță", "hamster", "hambar", "hardcore", "harnic", "havuz",
    "hazardat", "hegemon", "hemostază", "hering", "hexagon", "hipodrom", "hormon", "hotelier", "hoțoman", "huligan", "humanoid",
    "humus", "hyperlink", "ideatic", "idol", "ilegal", "iluzie", "imaginativ", "imbunatatit", "imediat", "imersie", "impartasire",
    "imperativ", "important", "impresionant", "inamic", "inarmat", "incalzire", "inchisoare", "incitat", "increment", "incubare",
    "indeplinit", "indicator", "indignat", "inexact", "infinit", "inflamat", "informare", "ingerat", "ingrediente", "initiere",
    "injust", "inovativ", "insectă", "inserat", "insuficient", "interconectare", "interfata", "interpretare", "intervenit",
    "intolerant", "intoxicare", "invadare", "invenție", "inversare", "investit", "invidiat", "invitat", "iradiat", "irigat",
    "iritant", "irlandez", "ironie", "iterativ", "izolator", "jocul", "jubilare", "jugoslovia", "jurnalist", "justificat",
    "juxtapus", "ketchup", "kilograme", "kitul", "laborator", "lacatus", "lampa", "lanțuri", "laptop", "larma", "largare",
    "laudativ", "lectură", "legat", "legendă", "legendar", "legal", "lemnos", "lenjerie", "lență", "leopard", "lesne",
    "letal", "libelulă", "lider", "ligament", "limita", "lingura", "linoleic", "liniștit", "lipit", "liric", "literă",
    "locație", "locuință", "logaritm", "lomot", "lovitura", "lucrarea", "lugubre", "lunetist", "luntre", "lungimea", "luptator",
    "luxemburg", "luxos", "macabru", "macinat", "macrou", "maculă", "madam", "magazin", "maiestos", "majorat", "maladie",
    "malefic", "malitios", "mamut", "mandatat", "manevrabil", "mangusta", "manifest", "manopera", "manta", "marinime",
    "marmura", "martor", "masina", "masiv", "mason", "masura", "material", "matineu", "matrice", "maturitate", "mecanism",
    "mecanizat", "medalii", "mediator", "medicament", "mediu", "mementos", "memorabil", "memorial", "menționat", "mentolat",
    "mergator", "mesager", "metalic", "meteorit", "metodă", "microni", "micșorare", "militar", "mineral", "minte", "miopia",
    "miros", "mișcare", "modalitate", "moderat", "modificare", "moft", "moletier", "moment", "moralitate", "morbid", "mortal",
    "motive", "motocicletă", "motorul", "mucenic", "muget", "mugur", "multiplu", "mușcat", "mustață", "nadir", "nagaika",
    "naivitate", "nașterea", "natura", "nazist", "nealocat", "neant", "nearticulat", "neatent", "nebarit", "necaz",
    "necenzurat", "necunoaștere", "necondiționat", "nedemn", "nedreptate", "neînsuflețit", "neînvins", "neobosit", "neom",
    "nepurtat", "neputincios", "neșansă", "neutral", "nexus", "nișează", "nichel", "nobil", "nociv", "nocturn", "noroc",
    "nostalgic", "notiță", "nucșoară", "nulitate", "numeric", "nutritiv", "obiectiv", "oboseală", "observare", "obținut",
    "ocazional", "ocupare", "odisee", "ofițer", "oglindă", "ogor", "olandez", "olimpiada", "oliviera", "omenire", "ominous",
    "onorabil", "opac", "operabil", "operator", "opinie", "optimizare", "oportunitate", "oratoric", "orbital", "organizat",
    "orientat", "origina", "orizont", "ortodox", "oscilant", "ospătar", "oțelărie", "oxid", "oxigen", "ozonificare",
    "pacificare", "pagina", "paleta", "palid", "paltin", "panou", "pantalon", "pantomimă", "papagal", "papetar", "parazit",
    "pareză", "parfum", "paroh", "parolat", "parte", "pasaj", "pasiune", "patina", "patriot", "patronat", "pavilion",
    "paznic", "peisaj", "pelican", "pendul", "percepție", "periferic", "perioadă", "periscop", "perla", "personalitate",
    "pestă", "petece", "petrecere", "petrol", "pianist", "picior", "pictură", "pietros", "pigment", "pilotaj", "piramidă",
    "pisică", "plafon", "plămân", "plantă", "planșetă", "plasă", "plastic", "platina", "plauzibil", "pliabil", "plimbare",
    "plin", "pluvial", "podgoria", "poet", "pofta", "polen", "polisare", "politică", "polivalent", "pompat", "pondere",
    "populat", "populație", "porumb", "povară", "poveste", "pozare", "pozitiv", "precizare", "predare", "pregătire",
    "prejudiciu", "premeditare", "preoție", "prescris", "presupus", "prețios", "prevenire", "pricopsit", "prieten", "primire",
    "primitiv", "principiu", "prioritate", "privilegii", "produs", "proeminent", "profesionist", "programat", "progres",
    "proiectat", "prolific", "promiscuu", "pronunțare", "propulsie", "protestat", "proverbe", "prudent", "publicație",
    "punctare", "purtător", "putere", "puzzle", "radiator", "rămas", "ramburs", "ranger", "rapiditate", "raritate",
    "ratare", "reactie", "realisabil", "receptat", "reciclare", "recitativ", "recoltă", "recomandare", "reconstruit",
    "recunoaștere", "rectificare", "reductor", "refacere", "reflecție", "reforma", "rege", "regenerare", "regret",
    "reieșire", "reînnoire", "relaxat", "relieful", "remarcabil", "remediat", "renunțare", "reparat", "repatrie", "reper",
    "repetitiv", "reptilă", "reputabil", "rezidență", "rezistent", "rezolvare", "riguros", "rimă", "riscant", "rivalitate",
    "robinet", "rocada", "romanesc", "rosie", "rotatie", "rozeta", "rucola", "rudă", "rugina", "rumoare", "rușinat",
    "rutier", "sabie", "sacadat", "salarizare", "salvator", "sanitar", "satisfacție", "scăzut", "scriitor", "sculptura",
    "scurt", "seara", "secular", "segment", "selectiv", "semnificativ", "separat", "serbare", "serial", "serpentină",
    "serviciu", "servirea", "sezon", "sfat", "sfâșiere", "sigilare", "simplificat", "sincronic", "sinecură", "sintactic",
    "sistem", "situație", "slalom", "smântână", "soldat", "solicitat", "somnolent", "sondare", "sonor", "sorcovă",
    "spatele", "specific", "speli", "speranță", "spirală", "spiritism", "sprijinit", "sputnic", "squash", "stabilire",
    "stație", "statornic", "statui", "sterilizare", "stigmat", "stilou", "stomac", "studiu", "stupid", "succes", "sudare",
    "suflare", "suferință", "suferit", "sugerat", "suprasolicitat", "surprins", "susținător", "sutien", "svastică", "șablon",
    "șampanie", "șarpe", "șarjat", "școală", "șifon", "șoim", "șosea", "ștergător", "șuncă", "tabel", "tablou", "tăcere",
    "tactic", "talentat", "tampon", "tango", "tapiserie", "tarabă", "tartan", "taximetru", "teacă", "teanc", "tehnică",
    "temător", "temperatură", "templu", "tenace", "tendință", "tenor", "terci", "terminare", "testament", "textura",
    "theorie", "ticalos", "tigara", "timpuriu", "tipic", "tirbuson", "tirist", "titular", "tocat", "tofat", "tolerant",
    "topografie", "toxic", "tractor", "tramvai", "tratat", "trebuie", "trenuleț", "trezire", "triat", "tribunal", "trimis",
    "triumf", "truc", "trust", "tulburat", "turcoaz", "turbina", "turnare", "tușier", "tutorial", "uzina", "vagon",
    "validat", "valorificare", "vandalism", "vapor", "varietate", "vasele", "vegetație", "velur", "venerabil", "ventilare",
    "verifica", "versatil", "vertical", "vestitor", "veston", "veteran", "victorie", "vidat", "vizitat", "volatil", "vulnerabil",
    "vânător", "zăpadă", "zbor", "zelos", "zenit", "zețar", "ziarist", "zigurat", "zodia", "zurgălăi", "zugrav", "zvon",
    "zvârlit", "zăvorât"
];
let guess = "";
let guessedLetter = "";
let life = 5;
let letterUsed = " ";
let j = 0;
const newWord = document.getElementById("newWord");
let wordNumber = getRandomInteger(1, 500);
document.getElementById("guess").innerHTML = guess;
let word = romanianWords[wordNumber];
console.log(word);
veri = '';

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (letter in word) {
    guess = guess + "_ ";
    veri = veri + " ";
}

const revealTwoLetters = (word, guess) => {
    firstLetter = word[0];
    secondLetter = word[word.length - 1];
    for (i = 0; i < word.length; i++) {
        if (word[i] == firstLetter) {
            j = i * 2;
            veri = veri.slice(0, i) + firstLetter.toUpperCase() + veri.slice(i + 1);
            guess = guess.slice(0, j) + firstLetter.toUpperCase() + guess.slice(j + 1);
        }
        if (word[i] == secondLetter) {
            j = i * 2;
            veri = veri.slice(0, i) + secondLetter.toUpperCase() + veri.slice(i + 1);
            guess = guess.slice(0, j) + secondLetter.toUpperCase() + guess.slice(j + 1);
        }
        
    }
    document.getElementById("guess").innerHTML = guess;
    return guess;
}

newWord.addEventListener("click", () => {
    letterUsed = '';
    guess = "";
    veri = "";
    life = 5;
    document.getElementById(1).src = "images/Screenshot_1.png"
    document.getElementById(2).src = "images/Screenshot_1.png"
    document.getElementById(3).src = "images/Screenshot_1.png"
    document.getElementById(4).src = "images/Screenshot_1.png"
    document.getElementById(5).src = "images/Screenshot_1.png"
    wordNumber = getRandomInteger(1, 2000);
    word = romanianWords[wordNumber];
    document.getElementById("lettersUsed").innerHTML = "";
    for (letter in word) {
        guess = guess + "_ ";
        veri = veri + " ";
    }
    guess = revealTwoLetters(word, guess);
    document.getElementById("guess").innerHTML = guess;
})



guess = revealTwoLetters(word, guess);


document.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        guessedLetter = document.getElementById("guessedLetter").value;
        guessedLetter = guessedLetter.toUpperCase();
        document.getElementById("guessedLetter").value = '';
        letterUsed += guessedLetter + "    ";
        letterUsed = letterUsed.toUpperCase();
        document.getElementById("lettersUsed").innerHTML = letterUsed;
        console.log(word);
        word = word.toUpperCase();
        console.log(guess)
        if (word.includes(guessedLetter)) {
            for (i = 0; i < word.length; i++) {
                if (guessedLetter == word[i]) {
                    j = i * 2;
                    veri = veri.slice(0, i) + guessedLetter + veri.slice(i + 1);
                    guess = guess.slice(0, j) + guessedLetter + guess.slice(j + 1);
                }
                document.getElementById("guess").innerHTML = guess;
            }
        }
        else
            life--;

        if (veri == word)
            alert("Congrats!");
        if (life == 0) {
            alert("You lost!");
            document.getElementById("guess").innerHTML = word;
        }
        const currentHeart = document.getElementById(life + 1);
        currentHeart.src = "images/Screenshot_2.png";



    }
})

