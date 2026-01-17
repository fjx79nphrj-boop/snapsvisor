import React, { useState } from ‘react’;

const SnapsvisorApp = () => {
const [currentView, setCurrentView] = useState(‘home’);
const [selectedTheme, setSelectedTheme] = useState(null);
const [eventName, setEventName] = useState(’’);
const [eventDate, setEventDate] = useState(’’);
const [eventMessage, setEventMessage] = useState(’’);
const [toast, setToast] = useState(’’);

const themes = {
midsommar: {
name: ‘Midsommar’,
emoji: ‘🌼’,
subtitle: ‘12 klassiska visor’,
colors: [’#FFD700’, ‘#FFA500’],
songs: [
{ title: ‘Helan går’, lyrics: ‘Helan går!\nSjung hopp faderallan lallan lej,\nHelan går!\nSjung hopp faderallan lej.\nOch den som inte helan tar,\nhan heller inte halvan får.\nHelan går!\nSjung hopp faderallan lej!’ },
{ title: ‘En liten fågel’, lyrics: ‘En liten fågel sjöng en gång\npå knoppen av en gren,\nhan sjöng sin bästa visa.\nDen visan sjunger jag för er,\noch vi sjunger alla:\nHelan går!\nSjung hopp faderallan lallan lej!’ },
{ title: ‘Snapsvisan’, lyrics: ‘Och om jag hade en båt med snaps\noch ett roder av korv,\nja då skulle jag styra mot stranden\ndär flickorna stå.\nOch när jag kom fram till land\nskulle jag säga till dem:\nGilla oss, gilla oss, gilla oss grabbar,\nför nu ska vi supa oss fulla!’ },
{ title: ‘Bäska droppar’, lyrics: ‘Bäska droppar, svala dryck,\nsom på nytt kan livet återge,\ndu som drivit bort så många sorger,\ndu förgyller dag och kväll,\noch förljuvar vår hotell,\nvälsignad vare du i dag i morgen!’ },
{ title: ‘Räven raskar’, lyrics: ‘Räven raskar över isen.\nGranen står så grön.\nVar är barnen?\nJo, de leker under granen.\nHej och hå så glad man kan bli,\nunder granens gröna grenar!’ },
{ title: ‘Nu är det gott’, lyrics: ‘Nu är det gott att leva,\ndet finner var och en,\nsom i ett glatt sällskap\nfår slå sig ner ibland!\nOch dricka ur sitt glas,\noch sjunga ut till sist:\nJa, skål för dig och mig,\noch alla goda vänner!’ },
{ title: ‘Piccadilly’, lyrics: ‘I Piccadilly in the Dilly,\nin the Dilly afternoon.\nI Piccadilly in the Dilly\nwas a nymph named Pretty Lily.\nHad a Swede on a string,\nlearning Swedish now and then.\nI Piccadilly in the Dilly,\nin the Dilly afternoon.\nSkål!’ },
{ title: ‘Schottis på Valhall’, lyrics: ‘Det dansas på Valhall i morgon,\nså sa till mig min far,\noch ölet flödar över bord,\nsen vi sitter med Tor.\nSkål!\nOch sömnen tar tag,\nvi sover till dag,\noch drömmer om tjäll så blå.’ },
{ title: ‘Drick ur ditt glas’, lyrics: ‘Drick ur ditt glas,\nså tar jag upp mitt,\nog finns det en tid\natt vara förnuftig,\nmen denna afton är icke densamma,\nså häv nu ditt glas\noch skål för oss alla!’ },
{ title: ‘Så går vi runt’, lyrics: ‘Så går vi runt,\nom kring omkring,\nså länge som fötterna\norkar oss bära.\nOch sjunga vår visa\nmed glada män,\ntills solen går opp igen!’ },
{ title: ‘Må vilda djur’, lyrics: ‘Må vilda djur få springa fritt,\noch fåglar bygga bo,\nmå fiskar simma i sin flod,\ndet önskar vi dem ro.\nMen människan hon älskar mest\natt se sin like glad,\nså skål och tag dig en sup till!’ },
{ title: ‘Sommarsång’, lyrics: ‘Skål för sommaren,\nskål för glädjen,\nskål för alla vänner här!\nMå denna kväll bli lång och ljuv,\noch minnet av den aldrig dö!’ }
]
},
student: {
name: ‘Student’,
emoji: ‘🎓’,
subtitle: ‘12 studentvisor’,
colors: [’#007AFF’, ‘#5AC8FA’],
songs: [
{ title: ‘Helan går’, lyrics: ‘Helan går!\nSjung hopp faderallan lallan lej,\nHelan går!\nSjung hopp faderallan lej.\nOch den som inte helan tar,\nhan heller inte halvan får.\nHelan går!\nSjung hopp faderallan lej!’ },
{ title: ‘Gaudeamus Igitur’, lyrics: ‘Gaudeamus igitur,\niuvenes dum sumus!\nPost iucundam iuventutem,\npost molestam senectutem,\nnos habebit humus,\nnos habebit humus!’ },
{ title: ‘Vet du vad’, lyrics: ‘Vet du vad som gör mig glad?\nEn djup, en djup, en djup konjak.\nVet du vad som gör mig ännu mer glad?\nTvå djupa konjakar!’ },
{ title: ‘Tänk om alla’, lyrics: ‘Tänk om alla människor,\npå denna jord,\nvore glada och nöjda\nvid varje bord.\nTänk om alla människor\nvore som vi,\nvilken underbar värld\ndetta skulle bli!’ },
{ title: ‘Med broken hjärta’, lyrics: ‘Med broken hjärta\noch with skaky hands,\njag write dessa words\ntill you,\nför I har älskat dig,\nmen you har sviket me,\nså now we are through!’ },
{ title: ‘Studentskål’, lyrics: ‘Skål för oss studenter,\nsom studerar dag och natt.\nSkål för alla lärare,\nsom ger oss så mycket tråk… kunskap!\nSkål!’ },
{ title: ‘Internationalen’, lyrics: ‘Upp till kamp, du arbetarklass!\nJordens alla länder,\nslav och träl, man hört er mass,\nbryt de gamla bänder!\nFramåt, framåt, den röda fanans här,\nInternationalen dess dag förkunnnar är!’ },
{ title: ‘På en liten ö’, lyrics: ‘På en liten ö,\nmitt ute i havet,\nbor en liten man,\nmed sin lilla fru.\nDe ha en liten stuga,\nmed ett litet bord,\noch en liten sup\nsom de dricker nu.\nSkål!’ },
{ title: ‘Vikinga’, lyrics: ‘Vi äro musikanter allihopa,\nvi leker på vårt instrument.\nSom man slår i stora trumman,\nså går det bom bom bom!\nBom bom bom!’ },
{ title: ‘Studentsången’, lyrics: ‘I fjällen, i fjällen,\ndär vill jag leva och dö.\nDär sjunger bäcken sin visa,\noch tallarna susa så.\nI fjällen, i fjällen,\ndär är min käresta hö!’ },
{ title: ‘Rucka på’, lyrics: ‘Rucka på, rucka på,\nrucka på så mycket du kan.\nHela kroppen ska komma i svaj,\noch snart så blir det bra!\nRucka på!’ },
{ title: ‘Sista skålen’, lyrics: ‘Den sista skålen den tar vi nu,\nför snart är festen slut.\nMen minnet av denna kväll,\ndet lever kvar för evigt!\nSkål!’ }
]
},
kraftskiva: {
name: ‘Kräftskiva’,
emoji: ‘🦞’,
subtitle: ‘12 kräftvisor’,
colors: [’#FF3B30’, ‘#FF9500’],
songs: [
{ title: ‘Helan går’, lyrics: ‘Helan går!\nSjung hopp faderallan lallan lej,\nHelan går!\nSjung hopp faderallan lej.\nOch den som inte helan tar,\nhan heller inte halvan får.\nHelan går!\nSjung hopp faderallan lej!’ },
{ title: ‘Kräftdansen’, lyrics: ‘Måste vi upp och dansa kräftdans?\nJa, vi måste upp och dansa kräftdans!\nKnäppa med fingrarna,\nvifta med våra armar,\nhopp hopp hopp hopp kräftdans!’ },
{ title: ‘Kräftan’, lyrics: ‘Kräftan, kräftan den har många ben,\nden har många ben men den kan ej gå,\nden sitter under stenen hela dagen,\noch kommer bara fram om nätterna!\nSkål!’ },
{ title: ‘Små grodorna’, lyrics: ‘Små grodorna, små grodorna,\nÄr lustiga att se.\nEj öron, ej öron,\nej svansar hava de.\nKoaxxx, koaxxx,\nKoaxxx, koaxxx!’ },
{ title: ‘Snapsvisan’, lyrics: ‘Ring ding ding ding ding-a-dong,\nshrimp shrimp cavalera!\nRing ding ding ding ding-a-dong,\nshrimp shrimp cavalera!\nMalaco, malaco, malaco, malaco,\nshrimp shrimp cavalera!’ },
{ title: ‘Augustinatt’, lyrics: ‘I augustinatt,\nunder månen klar,\nsitter vi och äter kräftor.\nMå denna tradition,\nleva i evighet!\nSkål!’ },
{ title: ‘Bäska droppar’, lyrics: ‘Bäska droppar, svala dryck,\nsom på nytt kan livet återge,\ndu som drivit bort så många sorger,\ndu förgyller dag och kväll,\noch förljuvar vår hotell,\nvälsignad vare du i dag i morgen!’ },
{ title: ‘En liten fågel’, lyrics: ‘En liten fågel sjöng en gång\npå knoppen av en gren,\nhan sjöng sin bästa visa.\nDen visan sjunger jag för er,\noch vi sjunger alla:\nHelan går!\nSjung hopp faderallan lallan lej!’ },
{ title: ‘Picadilly’, lyrics: ‘I Piccadilly in the Dilly,\nin the Dilly afternoon.\nI Piccadilly in the Dilly\nwas a nymph named Pretty Lilly.\nHad a Swede on a string,\nlearning Swedish now and then.\nI Piccadilly in the Dilly,\nin the Dilly afternoon.\nSkål!’ },
{ title: ‘Kräftskål’, lyrics: ‘Kräftorna är röda,\naquavitet är god,\ndricker jag en snaps till,\nså kommer jag i god!\nSkål!’ },
{ title: ‘Vi håller glasen’, lyrics: ‘Vi håller glasen högt i denna stund,\noch dricker för vår vänskap kär.\nMå denna kväll bli många fler,\noch må vi alltid vara glada här!’ },
{ title: ‘Sista kräftan’, lyrics: ‘Den sista kräftan den tar vi nu,\nför snart är festen slut.\nMen minnet av denna augustikväll,\ndet lever kvar till nästa år!\nSkål!’ }
]
},
jul: {
name: ‘Jul’,
emoji: ‘🎄’,
subtitle: ‘12 julvisor’,
colors: [’#34C759’, ‘#FF3B30’],
songs: [
{ title: ‘Helan går’, lyrics: ‘Helan går!\nSjung hopp faderallan lallan lej,\nHelan går!\nSjung hopp faderallan lej.\nOch den som inte helan tar,\nhan heller inte halvan får.\nHelan går!\nSjung hopp faderallan lej!’ },
{ title: ‘Tomtegubben’, lyrics: ‘Nu är det jul igen,\noch nu är det jul igen,\noch julen varar väl till påska!\nNej, det gör den inte,\nnej, det gör den inte,\nmen lite grand så kan man lustia!’ },
{ title: ‘Staffansvisan’, lyrics: ‘Staffan var en stalledräng,\nskötte vi våra fålar fem.\nAllt bland unga män.\nIngen dager synes än,\nstjärnorna på himmelen de blänka!’ },
{ title: ‘Bjällerklang’, lyrics: ‘Bjällerklang, bjällerklang,\nklingar så ljuvt i vår själ.\nÖver snön ilar vi fram,\nsjungande glad vår psalm!’ },
{ title: ‘Midnatt råder’, lyrics: ‘Midnatt råder, stilla, stilla,\nalla sova, stora, små,\nutom tomten, lilla gubben,\nsom på tå går fram och bå!’ },
{ title: ‘Julskål’, lyrics: ‘Skål för julen,\nskål för friden,\nskål för alla goda vänner!\nMå denna högtid\nbringa glädje!’ },
{ title: ‘Juldagsmorgon’, lyrics: ‘När juldagsmorgon glimmar,\njag vill till stallet gå,\ndär Gud i nattens timmar\njag vet ett barn har fått!’ },
{ title: ‘Gläns över sjö’, lyrics: ‘Gläns över sjö och strand,\nstjärnan i öst,\nguden är med sitt land,\nsom fromt henne tröst!’ },
{ title: ‘Jul, jul’, lyrics: ‘Jul, jul, strålande jul,\nglans över vita skogar!\nKristallen den klara\nskall betaget oss narra\ntill dans kring den gröna granen!’ },
{ title: ‘Lucia’, lyrics: ‘Sankta Lucia, ljusklara hägring,\nsprid i vår vinternatt,\nglans av din fägring!’ },
{ title: ‘Julens gåvor’, lyrics: ‘Julens alla gåvor,\nfaller från skyn,\nlikt små stjärnor,\nsom lyser så grann!\nSkål för julen!’ },
{ title: ‘Stjärnan tänds’, lyrics: ‘En stjärna har tänts på himmelens fäste,\nsom tänder vår längtan,\noch fyller vårt sinne\nmed glädje och hopp!\nSkål!’ }
]
},
fodelsedag: {
name: ‘Födelsedag’,
emoji: ‘🎂’,
subtitle: ‘12 födelsedagsvisor’,
colors: [’#FF2D55’, ‘#AF52DE’],
songs: [
{ title: ‘Ja må hen leva’, lyrics: ‘Ja må hen/hon leva,\nja må hen/hon leva,\nja må hen/hon leva uti hundrade år!\nJavisst ska hen/hon leva,\njavisst ska hen/hon leva,\njavisst ska hen/hon leva uti hundrade år!’ },
{ title: ‘Helan går’, lyrics: ‘Helan går!\nSjung hopp faderallan lallan lej,\nHelan går!\nSjung hopp faderallan lej.\nOch den som inte helan tar,\nhan heller inte halvan får.\nHelan går!\nSjung hopp faderallan lej!’ },
{ title: ‘Fyrfaldigt leve’, lyrics: ‘Ett fyrfaldigt leve,\nför jubilaren,\nHurra, hurra, hurra, hurra!’ },
{ title: ‘Gratulerar’, lyrics: ‘Gratulerar så mycket, så mycket,\npå din stora dag!\nVi önskar dig all lycka,\noch många glada dar!\nSkål!’ },
{ title: ‘Hurra för dig’, lyrics: ‘Hurra för dig som fyller år,\nja hurra för dig!\nDu bjuder oss på tårta,\ndärför hurrar vi för dig!’ },
{ title: ‘Jubilaren’, lyrics: ‘Skål för jubilaren,\nsom fyller år i dag!\nVi önskar hen all lycka,\noch många glada dar!\nSkål, skål, skål!’ },
{ title: ‘Lycka till’, lyrics: ‘Lycka till, lycka till,\nlycka till på födelsedagen!\nMånga glada återkomster\nönskar vi dig alla!’ },
{ title: ‘Nu så önskar vi’, lyrics: ‘Nu så önskar vi dig all lycka,\nalla goda stunder och glädje.\nMå ditt liv bli rikt och ljuvligt,\noch må alla drömmar bli sanna!’ },
{ title: ‘Värmeland’, lyrics: ‘Ack, Värmeland du sköna,\ndu härliga land,\ndu krona för Svea rikes länder!\nJa, här vill jag leva,\nja här vill jag dö!’ },
{ title: ‘Liten gumma’, lyrics: ‘Se där står en liten gumma,\noch hon dansar med en gubbe,\noch han trampar henne på tån,\noch hon skriker: Au!\nMen så tar han henne om livet,\noch då blir hon så glad!\nSkål för jubilaren!’ },
{ title: ‘Födelsedagsskål’, lyrics: ‘Skål för denna dag,\nskål för jubilaren,\nmå lyckan alltid följa dig!\nSkål!’ },
{ title: ‘Årets dag’, lyrics: ‘Detta är din dag,\ndin speciella dag,\nvi firar dig med glädje!\nMå du ha det underbart!’ }
]
},
brollop: {
name: ‘Bröllop’,
emoji: ‘💍’,
subtitle: ‘12 bröllopssånger’,
colors: [’#FFD700’, ‘#FF2D55’],
songs: [
{ title: ‘Helan går’, lyrics: ‘Helan går!\nSjung hopp faderallan lallan lej,\nHelan går!\nSjung hopp faderallan lej.\nOch den som inte helan tar,\nhan heller inte halvan får.\nHelan går!\nSjung hopp faderallan lej!’ },
{ title: ‘För brudparet’, lyrics: ‘Vi skålar för bruden och brudgummen,\nmå lyckan följa er!\nVi önskar er all kärlek,\noch många lyckliga år!\nSkål!’ },
{ title: ‘O, hur saligt’, lyrics: ‘O, hur saligt att få vandra\nhand i hand med dig.\nDu min käraste på jorden,\njag vill alltid vara nära dig!’ },
{ title: ‘Kära brudpar’, lyrics: ‘Kära brudpar, nu när ni står här,\noch lovar er kärlek för evigt.\nVi önskar er lycka och glädje,\ni varje stund av livet!\nSkål!’ },
{ title: ‘Blomstertid’, lyrics: ‘Den blomstertid nu kommer,\nmed lust och fägring stor.\nDu nalkas, ljuva sommar,\ndå gräs och gröda gror!’ },
{ title: ‘Kärleksskål’, lyrics: ‘Skål för kärleken,\nsom förenar er två!\nMå den aldrig ta slut,\noch må ni alltid må bra!’ },
{ title: ‘Kärlekens tid’, lyrics: ‘När kärlekens blomstertid är över,\nblir livets kval så tung.\nDet kommer en tid då man förgäter,\nvad man var, då man var ung!’ },
{ title: ‘Brudmarsch’, lyrics: ‘Upp alla I klara mänskor,\nsom denna dag vill fira!\nLåt musiken spela högt,\noch alla ska få dansa!’ },
{ title: ‘Till brudparet’, lyrics: ‘Till brudparet vi nu skålar,\nmå er kärlek alltid leva!\nVi önskar er all lycka,\noch många glada år tillsammans!\nSkål!’ },
{ title: ‘Lilla vackra’, lyrics: ‘Lilla vackra Anna,\nvill du bli min fru?\nJag ska älska dig för evigt,\nfrån och med just nu!’ },
{ title: ‘Värmeland’, lyrics: ‘Ack, Värmeland du sköna,\ndu härliga land,\ndu krona för Svea rikes länder!\nJa, här vill jag leva,\nja här vill jag dö!’ },
{ title: ‘Bröllopsdag’, lyrics: ‘På denna vackra bröllopsdag,\nvi önskar er all lycka!\nMå er kärlek växa sig stark,\noch vara er livs största skatt!’ }
]
},
pask: {
name: ‘Påsk’,
emoji: ‘🐣’,
subtitle: ‘12 påskvisor’,
colors: [’#FFD700’, ‘#34C759’],
songs: [
{ title: ‘Helan går’, lyrics: ‘Helan går!\nSjung hopp faderallan lallan lej,\nHelan går!\nSjung hopp faderallan lej.\nOch den som inte helan tar,\nhan heller inte halvan får.\nHelan går!\nSjung hopp faderallan lej!’ },
{ title: ‘Nu grönskar det’, lyrics: ‘Nu grönskar det,\noch blomstren de sprida sin doft.\nVåren är här,\noch påsken är kommen till slut!\nSkål!’ },
{ title: ‘Glad såsom fågeln’, lyrics: ‘Glad såsom fågeln i morgonstunden,\nrör jag mig fram över berg och dalar.\nGud är vår Fader i himmelen,\noch han har format alla ting!’ },
{ title: ‘Vårvindar’, lyrics: ‘Vårvindar friska,\nleka och viska.\nSå lunka vi så småningom\nfrån vinter till vår!’ },
{ title: ‘Påskliljor’, lyrics: ‘Påskliljor gula,\nblommar i vårt land.\nDe bringar glädje,\ntill allas hjärtan!\nSkål!’ },
{ title: ‘Påskskål’, lyrics: ‘Skål för påsken,\nskål för våren,\nskål för alla ljusa dagar\nsom nu kommer!’ },
{ title: ‘Blomstertid’, lyrics: ‘Den blomstertid nu kommer,\nmed lust och fägring stor.\nDu nalkas, ljuva sommar,\ndå gräs och gröda gror!’ },
{ title: ‘Det grönskar’, lyrics: ‘Det grönskar och gror,\noch fåglarna kvittra så glatt.\nVåren är här,\noch allt är så vackert och fint!\nSkål!’ },
{ title: ‘Påsksång’, lyrics: ‘Påsk, påsk, härlig påsk,\nmed sol och värme och fågelsång!\nVi firar denna dag,\nmed glädje i vårt lag!\nSkål!’ },
{ title: ‘Högtidssång’, lyrics: ‘Detta är den stora dagen,\ndå vi firar påskens under!\nLåt oss glädjas och vara tacksamma!\nSkål!’ },
{ title: ‘Snapsvisa’, lyrics: ‘Och om jag hade en båt med snaps,\noch ett roder av korv,\nja då skulle jag styra mot stranden\ndär flickorna stå!\nSkål!’ },
{ title: ‘Vårsång’, lyrics: ‘Skål för våren som nu kommer,\nskål för livet och naturen!\nMå denna tid bli lång och ljuv,\noch fylld av glädje!’ }
]
}
};

const showToast = (message) => {
setToast(message);
setTimeout(() => setToast(’’), 3000);
};

const generatePrintVersion = () => {
const name = eventName || selectedTheme.name;

```
// Dela upp i 4 sånger per sida (3 sidor totalt)
const page1Songs = selectedTheme.songs.slice(0, 4);
const page2Songs = selectedTheme.songs.slice(4, 8);
const page3Songs = selectedTheme.songs.slice(8, 12);

const createSongPage = (songs, pageNum, isLastPage = false) => `
  <div style="min-height: 100vh; padding: 20px 30px; ${isLastPage ? '' : 'page-break-after: always;'} position: relative; background: linear-gradient(to bottom, #ffffff 0%, ${selectedTheme.colors[0]}05 100%); box-sizing: border-box; display: flex; flex-direction: column; border: 3px solid ${selectedTheme.colors[0]}20;">
    <!-- Decorative corner borders -->
    <div style="position: absolute; top: 8px; left: 8px; width: 25px; height: 25px; border-top: 3px solid ${selectedTheme.colors[0]}; border-left: 3px solid ${selectedTheme.colors[0]};"></div>
    <div style="position: absolute; top: 8px; right: 8px; width: 25px; height: 25px; border-top: 3px solid ${selectedTheme.colors[0]}; border-right: 3px solid ${selectedTheme.colors[0]};"></div>
    <div style="position: absolute; bottom: 8px; left: 8px; width: 25px; height: 25px; border-bottom: 3px solid ${selectedTheme.colors[0]}; border-left: 3px solid ${selectedTheme.colors[0]};"></div>
    <div style="position: absolute; bottom: 8px; right: 8px; width: 25px; height: 25px; border-bottom: 3px solid ${selectedTheme.colors[0]}; border-right: 3px solid ${selectedTheme.colors[0]};"></div>
    
    <!-- Decorative side patterns -->
    <div style="position: absolute; top: 50%; left: 8px; transform: translateY(-50%); width: 15px; height: 50px; background: linear-gradient(to bottom, ${selectedTheme.colors[0]}40, transparent, ${selectedTheme.colors[0]}40); border-radius: 3px;"></div>
    <div style="position: absolute; top: 50%; right: 8px; transform: translateY(-50%); width: 15px; height: 50px; background: linear-gradient(to bottom, ${selectedTheme.colors[0]}40, transparent, ${selectedTheme.colors[0]}40); border-radius: 3px;"></div>
    
    <div style="flex: 1;">
      ${songs.map((song, songIndex) => `
        <div style="margin-bottom: 18px;">
          <h2 style="font-size: 14px; margin-bottom: 6px; color: ${selectedTheme.colors[0]}; font-weight: 700; border-bottom: 1.5px solid ${selectedTheme.colors[0]}; padding-bottom: 3px; display: inline-block;">${song.title}</h2>
          <pre style="font-family: -apple-system, sans-serif; font-size: 10.5px; line-height: 1.5; white-space: pre-wrap; color: #333; margin: 0;">${song.lyrics}</pre>
        </div>
      `).join('')}
    </div>
    
    <div style="text-align: center; color: #999; font-size: 9px; padding-top: 10px;">${pageNum}</div>
  </div>
`;

const htmlContent = `<!DOCTYPE html>
```

<html>
<head>
  <meta charset="UTF-8">
  <title>${name} - Snapsvisor</title>
  <style>
    @page { size: A5; margin: 0; }
    body { 
      margin: 0; 
      font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    }
    @media print {
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <!-- Framsida -->
  <div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(135deg, ${selectedTheme.colors[0]}, ${selectedTheme.colors[1]}); color: white; text-align: center; page-break-after: always; position: relative; overflow: hidden;">
    <!-- Decorative background circles -->
    <div style="position: absolute; top: -80px; left: -80px; width: 200px; height: 200px; border-radius: 50%; background: rgba(255,255,255,0.1);"></div>
    <div style="position: absolute; bottom: -80px; right: -80px; width: 200px; height: 200px; border-radius: 50%; background: rgba(255,255,255,0.1);"></div>
    <div style="position: absolute; top: 40%; right: -60px; width: 150px; height: 150px; border-radius: 50%; background: rgba(255,255,255,0.08);"></div>

```
<div style="z-index: 1;">
  <div style="font-size: 70px; margin-bottom: 18px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));">${selectedTheme.emoji}</div>
  <h1 style="font-size: 36px; margin: 18px 0; font-weight: 700; letter-spacing: -0.5px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));">${name}</h1>
  ${eventDate ? `<p style="font-size: 16px; margin: 8px 0; opacity: 0.95;">${eventDate}</p>` : ''}
  ${eventMessage ? `<p style="font-size: 14px; margin: 8px 0; opacity: 0.9; font-style: italic;">${eventMessage}</p>` : ''}
</div>
```

  </div>

${createSongPage(page1Songs, 2)}
${createSongPage(page2Songs, 3)}
${createSongPage(page3Songs, 4, true)}

  <div class="no-print" style="position: fixed; top: 20px; right: 20px; background: white; padding: 15px 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 1000;">
    <button onclick="window.print()" style="padding: 12px 24px; background: ${selectedTheme.colors[0]}; color: white; border: none; border-radius: 8px; font-size: 15px; cursor: pointer; font-weight: 600; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
      📄 Skriv ut / Spara som PDF
    </button>
  </div>

  <div class="no-print" style="padding: 40px; text-align: center; background: #F2F2F7; margin-top: 40px;">
    <h3 style="color: #333; margin-bottom: 15px; font-size: 18px;">💡 Så här sparar du som PDF:</h3>
    <div style="color: #666; line-height: 2; font-size: 15px;">
      <p><strong>På iPhone/iPad:</strong></p>
      <p>1. Tryck på dela-knappen <span style="font-size: 20px;">⎙</span> längst ner</p>
      <p>2. Välj "Skriv ut"</p>
      <p>3. Zooma in förhandsvisningen med två fingrar</p>
      <p>4. Tryck på dela-knappen igen → "Spara till Filer"</p>
      <br/>
      <p><strong>På dator:</strong></p>
      <p>1. Tryck på knappen ovan eller Ctrl+P (Cmd+P på Mac)</p>
      <p>2. Välj "Spara som PDF" som skrivare</p>
      <p>3. Klart! Nu har du ett snyggt vishäfte med ${selectedTheme.songs.length} visor på 4 sidor! 🎉</p>
    </div>
  </div>
</body>
</html>`;

```
// Öppna i nytt fönster (fungerar på iOS)
const newWindow = window.open('', '_blank');
if (newWindow) {
  newWindow.document.write(htmlContent);
  newWindow.document.close();
  showToast('Öppnat i nytt fönster! Tryck på dela-knappen och välj "Skriv ut" → "Spara som PDF" 📄');
} else {
  // Fallback till nedladdning om popup blockeras
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${name.replace(/[^a-zA-Z0-9]/g, '_')}_snapsvisor.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('HTML-fil nedladdad! Öppna den och tryck på "Skriv ut" för att spara som PDF 🎉');
}
```

};

return (
<div style={{
fontFamily: ‘-apple-system, BlinkMacSystemFont, sans-serif’,
maxWidth: ‘430px’,
margin: ‘0 auto’,
backgroundColor: ‘#fff’,
minHeight: ‘100vh’
}}>
{/* Toast */}
{toast && (
<div style={{
position: ‘fixed’,
bottom: ‘100px’,
left: ‘50%’,
transform: ‘translateX(-50%)’,
background: ‘#000’,
color: ‘#fff’,
padding: ‘14px 24px’,
borderRadius: ‘12px’,
fontSize: ‘15px’,
boxShadow: ‘0 10px 20px rgba(0,0,0,0.2)’,
zIndex: 1000,
opacity: 0.95,
maxWidth: ‘90%’,
textAlign: ‘center’
}}>
{toast}
</div>
)}

```
  {currentView === 'home' && (
    <>
      <div style={{
        padding: '60px 20px 20px',
        textAlign: 'center',
        borderBottom: '0.5px solid #E5E5EA'
      }}>
        <h1 style={{ fontSize: '34px', fontWeight: '700', marginBottom: '8px' }}>
          Snapsvisor
        </h1>
        <p style={{ fontSize: '17px', color: '#3C3C43' }}>
          Skapa ditt perfekta vishäfte
        </p>
      </div>

      <div style={{ padding: '24px 20px 12px', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', color: '#8E8E93' }}>
        Välj tema
      </div>

      <div style={{
        padding: '0 16px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px'
      }}>
        {Object.entries(themes).map(([key, theme], index) => (
          <div
            key={key}
            onClick={() => {
              setSelectedTheme(theme);
              setCurrentView('form');
            }}
            style={{
              background: '#fff',
              borderRadius: '16px',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              border: '0.5px solid #E5E5EA',
              animation: `fadeIn 0.4s ease-out ${0.05 + index * 0.05}s backwards`
            }}
          >
            <div style={{
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '64px',
              background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})`
            }}>
              {theme.emoji}
            </div>
            <div style={{ padding: '14px 16px' }}>
              <div style={{ fontSize: '17px', fontWeight: '600', marginBottom: '2px' }}>
                {theme.name}
              </div>
              <div style={{ fontSize: '13px', color: '#8E8E93' }}>
                {theme.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )}

  {currentView === 'form' && selectedTheme && (
    <div style={{ padding: '20px' }}>
      <button
        onClick={() => {
          setCurrentView('home');
          setEventName('');
          setEventDate('');
          setEventMessage('');
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#007AFF',
          fontSize: '17px',
          background: 'none',
          border: 'none',
          padding: '12px 0',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        <svg width="13" height="21" viewBox="0 0 13 21" fill="none">
          <path d="M11 2L2 10.5L11 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Tillbaka
      </button>

      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <label style={{
          fontSize: '13px',
          fontWeight: '600',
          color: '#8E8E93',
          textTransform: 'uppercase',
          marginBottom: '8px',
          display: 'block'
        }}>
          Festens namn
        </label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="T.ex. Lisas 50-årsfest"
          style={{
            width: '100%',
            padding: '12px 14px',
            fontSize: '17px',
            border: 'none',
            borderRadius: '10px',
            background: '#F2F2F7',
            fontFamily: 'inherit'
          }}
        />
      </div>

      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <label style={{
          fontSize: '13px',
          fontWeight: '600',
          color: '#8E8E93',
          textTransform: 'uppercase',
          marginBottom: '8px',
          display: 'block'
        }}>
          Datum (valfritt)
        </label>
        <input
          type="text"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          placeholder="T.ex. 21 juni 2024"
          style={{
            width: '100%',
            padding: '12px 14px',
            fontSize: '17px',
            border: 'none',
            borderRadius: '10px',
            background: '#F2F2F7',
            fontFamily: 'inherit'
          }}
        />
      </div>

      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <label style={{
          fontSize: '13px',
          fontWeight: '600',
          color: '#8E8E93',
          textTransform: 'uppercase',
          marginBottom: '8px',
          display: 'block'
        }}>
          Personligt meddelande (valfritt)
        </label>
        <input
          type="text"
          value={eventMessage}
          onChange={(e) => setEventMessage(e.target.value)}
          placeholder="T.ex. Välkommen!"
          style={{
            width: '100%',
            padding: '12px 14px',
            fontSize: '17px',
            border: 'none',
            borderRadius: '10px',
            background: '#F2F2F7',
            fontFamily: 'inherit'
          }}
        />
      </div>

      <div style={{
        marginTop: '24px',
        padding: '20px',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '12px', color: '#3C3C43' }}>
          Förhandsvisning
        </div>
        <div style={{
          background: '#F2F2F7',
          borderRadius: '8px',
          padding: '16px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>
            {selectedTheme.emoji}
          </div>
          <div style={{ fontSize: '17px', fontWeight: '600', marginBottom: '4px' }}>
            {eventName || selectedTheme.name}
          </div>
          {eventDate && (
            <div style={{ fontSize: '13px', color: '#8E8E93' }}>
              {eventDate}
            </div>
          )}
          {eventMessage && (
            <div style={{ fontSize: '13px', color: '#8E8E93', marginTop: '4px' }}>
              {eventMessage}
            </div>
          )}
          <div style={{ marginTop: '12px', fontSize: '14px', color: '#666' }}>
            📄 4 sidor • {selectedTheme.songs.length} visor
          </div>
        </div>
      </div>

      <button
        onClick={generatePrintVersion}
        style={{
          width: '100%',
          padding: '16px',
          background: '#007AFF',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '17px',
          fontWeight: '600',
          cursor: 'pointer',
          marginTop: '24px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.07)'
        }}
      >
        Skapa PDF
      </button>
    </div>
  )}
</div>
```

);
};

export default SnapsvisorApp;
