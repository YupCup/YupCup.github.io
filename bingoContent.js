bingoContent = [
    "Hanna og Synnøve sier noe i kor",
    "Adrian FO er skuffet over maten",
    "Brannalarmen går",
    "Skrymir jorder seg",
    "Noen sender en snap med en doklage",
    "Matkøen går forbi doen",
    "Romskipelev bærer på noe rart",
    "Halvparten av CG har på joggebukse",
    "Kampmusikk på treningsrommet",
    "Det er bygningsarbeidere i spisesalen",
    "Boffen spinner en frisbee på fingeren",
    "Vebjørn lager grimaser",
    "Rasmus OG Sami sitter på kunstrommet",
    "Snorre spiller Beatsaber",
    "Tegneserie tegner Hafsteinn",
    "Gauling i dusjen",
    "RM-soundtrack i vaskekjelleren",
    "Vaskekjelleren er full",
    "Du blir låst ute om kvelden",
    "Dørene åpnes sent til mat",
    "Feilmelding på tørketrommelen",
    "Noen er i drag",
    "Mikan mister noe",
    "Emil klager over Dark Souls 2",
    "Egg til frokost/lunsj!",
    "Noen rager på Esport",
    "Joya og John siterer Joya og John",
    "Romskip jobber ekstremt overtid",
    "Adele sitter uergonomisk",
    "Daniel blir sint på fotball på hemsen",
    "Kjøkkentjenesten ser døde ut",
    "Esport Mjauer",
    "Spisesal 2 er åpen når den vanligvis ikke er",
    "Det er tomt og kaldt i peisestua",
    "Kjøkkentjeneste har på neoncap",
    "Du hører naboene gjennom veggen etter stilletid",
    "Undervisningsbygget holdes oppe lenge",
    "Skrymir sier 'yeez'",
    "Ny sexvits i elev-quotes",
];

weekdayList = [
    "10 folk rekker ikke morgenmøte",
    "Ord for dagen møter ikke opp",
    "Hans-Thore-latter",
    "Knuta roper en fun fact"
];

linjefagList = [
    "'Du er en ..!' - Claus",
    "Claus titter over brillene sine",
    "Ragnhild nevner barna sine og stønner tungt",
    "Lærer Adrian jobber på rollespill i timen",
    "Nytt Johann sitat",
    "Vegard peker på taket imens han snakker",
    "Claus kjeder seg"
];

valgfagList = [
    "Tove banner",
    "Tove sier 'Gummisalen' eller 'bulkegjengen'",
]

fridayList = [
    "Vegard ber folk om å ta føttene ned fra setene",
    "Du får bare ris til restemiddag"
]

saturdayList = [
    "Suppe til middag",
    "Rage klager over grøt"
];

sundayList = [
];

freeSpaces = [
    "Jacob sier en dårlig vits",
    "Skrymir spiller Mario Kart",
    "CG gamer i mørket",
    "Undergangdusjen er opptatt",
    "Cosplay er tomme for gaffateip",
    "Noen sitter over tiden til middag"
];

freeSpacesWeekday = [
    "Under 10 personer er våkne til frokost"
];

freeSpacesWeekend = [
];

dayList = [
    [bingoContent, weekdayList, linjefagList],
    [bingoContent, weekdayList, valgfagList],
    [bingoContent, weekdayList, linjefagList],
    [bingoContent, weekdayList, valgfagList],
    [bingoContent, weekdayList, linjefagList, fridayList],
    [bingoContent, saturdayList],
    [bingoContent, sundayList]
];

freeSpacesDayList = [
    [freeSpaces, freeSpacesWeekday],
    [freeSpaces, freeSpacesWeekday],
    [freeSpaces, freeSpacesWeekday],
    [freeSpaces, freeSpacesWeekday],
    [freeSpaces, freeSpacesWeekday],
    
    [freeSpaces, freeSpacesWeekend],
    [freeSpaces, freeSpacesWeekend]
]