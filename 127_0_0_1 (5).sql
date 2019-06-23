-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2019. Már 10. 17:06
-- Kiszolgáló verziója: 10.1.34-MariaDB
-- PHP verzió: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `modern_game`
--
CREATE DATABASE IF NOT EXISTS `modern_game` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `modern_game`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `dlc`
--

CREATE TABLE `dlc` (
  `dlc_id` int(11) NOT NULL,
  `dlc_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `dlc`
--

INSERT INTO `dlc` (`dlc_id`, `dlc_nev`) VALUES
(2, 'Alapjáték'),
(3, 'DLC');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `eletkor`
--

CREATE TABLE `eletkor` (
  `eletkor_id` int(11) NOT NULL,
  `eletkor_csoport` varchar(50) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `eletkor`
--

INSERT INTO `eletkor` (`eletkor_id`, `eletkor_csoport`) VALUES
(1, '3+'),
(2, '7+'),
(3, '12+'),
(4, '16+'),
(5, '18+');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jatek`
--

CREATE TABLE `jatek` (
  `jatek_id` int(11) NOT NULL,
  `jatek_nev` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `jatek_ev` date NOT NULL,
  `jatek_ar` int(11) NOT NULL,
  `jatek_tipusid` int(11) NOT NULL,
  `jatek_kiadoid` int(11) NOT NULL,
  `jatek_stilus_id` int(11) NOT NULL,
  `jatek_dlc_id` int(11) NOT NULL,
  `jatek_eletkor_id` int(11) NOT NULL,
  `jatek_darab` int(3) NOT NULL,
  `jatek_leiras` varchar(2000) COLLATE utf8_hungarian_ci NOT NULL,
  `jatek_kep` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `jatek_keszletid` int(1) NOT NULL,
  `jatek_ingyen_szallitas` tinyint(1) NOT NULL,
  `jatek_nezettseg` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `jatek`
--

INSERT INTO `jatek` (`jatek_id`, `jatek_nev`, `jatek_ev`, `jatek_ar`, `jatek_tipusid`, `jatek_kiadoid`, `jatek_stilus_id`, `jatek_dlc_id`, `jatek_eletkor_id`, `jatek_darab`, `jatek_leiras`, `jatek_kep`, `jatek_keszletid`, `jatek_ingyen_szallitas`, `jatek_nezettseg`) VALUES
(1, 'Borderlands 1', '2009-10-20', 5999, 1, 1, 1, 2, 5, 0, 'Üdvözöllek pandorán', 'borderlands.jpg', 1, 1, 4),
(2, 'Borderlands 2', '2012-09-18', 8999, 1, 1, 1, 2, 5, 0, 'A nagysikerű borderlands után a második rész még több fegyvert és robbanást hoz', 'borderlands2.jpg', 2, 1, 503),
(4, 'Borderlands Pre Sequel', '2014-10-14', 11999, 1, 1, 1, 2, 5, 0, 'Ismerd meg a borderlands 2 előzményeit', 'borderlands_pre_sequel.jpg', 1, 0, 0),
(5, 'Rage', '2011-10-04', 4999, 1, 2, 1, 2, 5, 0, 'Üdvözöllek a pusztaságban', 'rage.jpg', 0, 0, 0),
(6, 'DOOM', '2016-05-13', 10999, 1, 2, 1, 2, 5, 0, 'ÖLJ,MÉSZÁROLJ,GYILKOLJ démonokat akik megtámadták a holdat', 'doom.jpg', 1, 0, 1),
(7, 'Fallout 3 Game of the Year', '2008-10-28', 2690, 1, 1, 1, 2, 5, 0, 'A legendás Fallout sorozat visszatért! Minden idők egyik legismertebb, legsikeresebb szerepjátéka hatalmas rajongótábort épített fel az évek során, és most harmadszorra is itt van, hogy megreformálja a műfajt, megmutatva, milyen is egy igazi posztnukleáris kaland.\r\n\r\nVault 101 - gyémánt a sivatagban. 200 éven át hűen szolgálta Washington DC és a környező vidék, a senkiföldje lakóit. Miután 2077-ben szinte az Egész Egyesült Államok elpusztult egy nukleáris háborút követően, a 101-es bunker lakói békében éldegéltek biztos menedékükben, nem törődve a külvilág bajaival: a hatalmas, mutáns rovarokkal, a rabszolgatartókkal, a szupermutánsokkal.\r\n\r\nEgy nap azonban arra ébredsz, hogy apád a bunker felvigyázójának utasításával nem törődve elhagyta a menedéket, így fel kell kerekedned, hogy utánaeredj, megtudva, mi lehetett a távozásának igazi oka...', 'fallout3goty.jpg', 0, 0, 0),
(8, 'Fallout New Vegas Ultimate Edition', '2010-10-19', 5290, 1, 2, 1, 2, 5, 0, 'Üdv Vegasban. New Vegasban!\r\n\r\nOlyan város ez, ahol megásod a saját sírod, mielőtt fejbelőnek... Olyan város ez, amit a sivatagi oázis feletti uralomért folyó harcban érdekelt bandák tépnek szét. Olyan város ez, ahol a megfelelő ember a megfelelő fegyverekkel komoly hírnévre tehet szert, és útközben sokkal többet szerezhet, mint egy-két ellenfél. Kellemes nyaralást!\r\n\r\nA Fallout: New Vegas a 2008-as, többszörösen díjnyertes Fallout 3 folytatása, amely új szintre emeli a sorozat védjegyének mondható elemeket: az akciót, a sötét humort, az egyedi posztapokaliptikus világ ismertetőjegyeit!\r\n\r\n    Ami Vegasban történik, az Vegasban is marad! Még a nukleáris háború se tudta megregulázni a bűn városát. Fedezd fel a sivatagos senkiföldje világát, a neonfényben fürdő New Vegastól kezdve a Sziklás hegységen át egészen a Mojave sivatakig!\r\n    Civakodó frakciók, karakteres szereplők, ellenség mindenhol! A rivális frakciók között hamarosan kitör a háború, melynek végkimenetele New Vegas minden lakójának életét befolyásolni fogja. Utad során számtalan karakterrel fogsz találkozni: köss velük szövetséget, verd át őket, vagy tedd el láb alól azt, akit csak szeretnél: döntéseid követkeményeivel azonban számolnod kell!\r\n    Játékmenetbeli újítások! Menedzseld társaidat könnyebben és gyorsabban az új kezelőfelületnek hála, figyeld a reputációdat a frakciók között, vagy prbáld ki a Hardcore módot, ahol minden eddiginél könyörtelenebb szabályok közé szorítva kell túlélned a senkiföldjén! A továbbfejlesztett harcrendszer révén már a közelharc sem jelent akadályt. A V.A.T.S-rendszerrel megállíthatod az időt a csaták alatt, és az ellenfelek testrészeit is célba veheted, a lehető legtaktikusabban küzdve - de persze próbálkozhatsz valós időben is, mintha egy akciójátékban lennél!', 'fallout_new_vegas.jpg', 0, 0, 0),
(9, 'Fallout 4', '2015-11-10', 5990, 1, 2, 1, 2, 5, 0, '2077-ben járunk, mintegy 200 évvel a Földet szinte teljes egészében kipusztító nukleáris holokauszt után. A helyszín Boston, Massachusetts állam, amely szintén teljesen elpusztult az atomkatasztrófa következtében. Ebben a világban már nincsenek szabályok, a régi értékrend teljesen eltűnt, de amíg él ezen a Földön ember, és vannak társai, addig talán van remény arra, hogy ebben a veszélyes, poszt-apokaliptikus környezetben is megtaláljuk az élet értelmét.\r\n\r\nTöbbek között ezt kutatjuk majd egy névtelen hős oldalán, aki a Vault 111 utolsó túlélőjeként az utóbbi két évszázadot hibernációban töltötte, most pedig készen áll arra, hogy megismerkedjen mindazzal, amit az emberiség utolsó maradéka megpróbált felépíteni a történteket követően.', 'fallout4.jpg', 3, 0, 0),
(10, 'fallout 4 Game of The Year Edition', '2015-11-10', 11999, 1, 1, 1, 2, 5, 0, '2077-ben járunk, mintegy 200 évvel a Földet szinte teljes egészében kipusztító nukleáris holokauszt után. A helyszín Boston, Massachusetts állam, amely szintén teljesen elpusztult az atomkatasztrófa következtében. Ebben a világban már nincsenek szabályok, a régi értékrend teljesen eltűnt, de amíg él ezen a Földön ember, és vannak társai, addig talán van remény arra, hogy ebben a veszélyes, poszt-apokaliptikus környezetben is megtaláljuk az élet értelmét.\r\n\r\nTöbbek között ezt kutatjuk majd egy névtelen hős oldalán, aki a Vault 111 utolsó túlélőjeként az utóbbi két évszázadot hibernációban töltötte, most pedig készen áll arra, hogy megismerkedjen mindazzal, amit az emberiség utolsó maradéka megpróbált felépíteni a történteket követően.', 'fallout4_goty.jpg', 0, 0, 7),
(11, 'Fallout 76', '2018-11-14', 18999, 1, 1, 1, 2, 5, 0, 'A közös jövőnk elkezdődik.\r\n\r\n2102. Huszonöt évvel a bombák hullása után te és barátaid végre kijöttök a 76-os bunkerből. Amerika megváltozott. Játssz egyedül, vagy csatlakozz másokhoz, és teljesíts küldetéseket, fedezd fel a tájat, építs bázist, és győzedelmeskedj a pusztaság szörnyeivel szemben, West Virginia hegyei között!\r\n\r\nA Fallout 76 egy online, nyílt világú RPG, amely egyedül is játszható, de kooperatív módban még nagyobb élmény! Területe négyszer akkora, mint a Fallout 4 világa, több száz egyedi helyszínnel. Létrehozhatod saját karaktered, visszatér a S.P.E.C.I.A.L. rendszer is, de lesznek új képességek, új lehetőségek és új fenyegetések is. Vár egy új és egyedi Fallout élmény!', 'fallout76.jpg', 0, 0, 6),
(12, 'Assassin\'s Creed', '2007-11-13', 2998, 1, 1, 1, 2, 5, 10, 'Légy részese egy középkori kalandnak!', 'assassin1.jpg', 0, 0, 0),
(13, 'Assassin\'s Creed II', '2009-11-17', 3999, 1, 1, 1, 2, 5, 0, 'Itt az alkalom, hogy megtapasztald az Assassin\'s Creed folytatásának hihetetlenül élvezetes játékélményét . Készülj fel egy érzelmekkel és bosszúvággyal teli reneszánsz kalandra. Az Assassin\'s Creed 2 rendkívül érdekes története a 15. századi Itáliában játszódik. A hangulatos játék menet során Ezio Auditore múltjának rejtelmeit kell fel fednünk.', 'assassin2.jpg', 0, 0, 0),
(14, 'Assassin\'s Creed Brotherhood', '2010-12-11', 3999, 1, 1, 1, 2, 5, 0, 'Az Assassin’s Creed II közvetlen folytatásában újabb fejezetét ismerhetjük meg Ezio Auditore da Firenze életének, akinek bőrébe bújva ezúttal egyenesen Rómába utazhatunk el, hogy ismét felvegyük a harcot az Orgyilkos Testvériség oldalán a Templomosokkal.\r\n\r\nAz Assassin’s Creed Brotherhood a játékmenet szempontjából semmit sem változott elődjéhez képest, így ezúttal is egy óriási, szabadon felfedezhető világ vár ránk, méghozzá Róma városával a középpontban, ahol fő- és mellékküldetések tucatjait teljesíthetjük a kampány során.', 'assassin3.jpg', 0, 0, 0),
(15, 'Assassin\'s Creed Revelations', '2013-11-19', 4999, 1, 1, 1, 2, 5, 0, 'Ezio Auditore da Firenze kalandjai nem értek véget az Assassin\'s Creed: Brotherhood-al. A történet minden eddiginél összetettebb, hiszen három szálon fut párhuzamosan. Ezio felmenője, Altair nyomdokait követve Konstantinápolyba utazik, és egy rejtett ereklye után nyomoz, miközben a távoli jövőben Desmond próbál szabadulni az Animus fogságából...', 'assassin4.jpg', 0, 0, 0),
(16, 'Assassin\'s Creed III', '2012-10-30', 4999, 1, 2, 1, 2, 5, 0, 'A Ubisoft legnépszerűbb sorozatának, az Assassin\'s Creed-nek a harmadik felvonása ezúttal elhagyja az idilli Mediterrán térséget, és teljesen új helyszínre költözik: a harmadik rész a George Washington nevével fémjelzett amerikai függetlenségi háborúba kalauzolja el a játékosokat.', 'assassinIII.jpg', 0, 0, 0),
(17, 'Assassin\'s Creed IV Black Flag', '2013-10-29', 6999, 1, 2, 1, 2, 5, 0, 'Bár az Assassin\'s Creed harmadik részével lezárult egy korszak, a történet folytatódik: az Assassin\'s Creed IV: Black Flag a kalózok fénykorába röpít vissza bennünket, miközben a jelenben játszódó szál is új, izgalmas fordulatokat vesz. Készen állsz azelső next-gen Assassin\'s Creed-játék megismerésére?', 'assassinIV.jpg', 0, 0, 0),
(18, 'Assassin\'s Creed Unity', '2014-11-11', 6999, 1, 2, 1, 2, 5, 0, 'Párizs, 1789. A francia forradalom az egykor csodálatos várost a terror és a káosz színhelyévé változtatta. Macskaköves utcáit a közemberek vére festi vörösre, akik fel mernek kelni az elnyomó arisztokrácia ellen. De míg a nemzet saját magát tépi szét, egy Arno névre hallgató fiatalember egy különleges utazásra indul, hogy felfedje a forradalom mögött álló igazi erőket. Az igazság keresése során a nemzet sorsáért folytatott kíméletlen harc közepén találja magát, midőn tanúi lehetünk, ahogy igazi Mester Asszaszinná válik.\r\n\r\nAz Assassin\'s Creed Unity, a kasszasiker sorozat új része, amelyet a vadonatúj, az alapoktól kifejezetten a következő generációra újraépített Anvil játékmotor hajt. Éld át a francia forradalmat a Bastille ostromától XVI. Lajos kivégzéséig mint eddig még soha, és segítsd Franciaország népét abban, hogy merőnben új sorsot kovácsoljanak maguknak.', 'assassin_unity.jpg', 0, 0, 0),
(19, 'Assassin\'s Creed Syndicate', '2015-10-23', 6999, 1, 2, 1, 2, 5, 0, 'Assassin\'s Creed Syndicate címmel a viktoriánus kori Londonba hív minket a Ubisoft népszerű sorozatának legújabb epizódja. A történet 1868-ban, az ipari forradalom idején játszódik, amikor a tengernyi új találmány olyan mértékben megváltoztatta a társadalom mindennapjait, hogy hatására a középréteg rövid időn belül teljesen eltűnt, így megmaradtak a szegények és a gazdagok, akik közé egyre nagyobb ellentétek ékelődtek. A munkásosztály dühében kis csoportokba, úgynevezett szindikátusokba szerveződve próbálta meg túlélni az áldatlan állapotot, aminek előnyeit csakhamar felismerte az Orgyilkos Testvériség is, akik lángra lobbantottak egy évszázadok óta érlelődő konfliktust, amelynek a háttérben ezúttal is a Templomos Rend állt.', 'assassin_syndicate.jpg', 0, 0, 0),
(20, 'Assassin\'s Creed Origins', '2017-10-27', 12999, 1, 2, 1, 2, 5, 15, 'Egy újabb történelmi korszakot és idősíkot dolgoz fel nekünk az Assassin’s Creed-sorozat legújabb epizódja, amely a távoli Egyiptomba, a piramisok és a fáraók korába repít el minket Bayek, egy ifjú orgyilkossal a főszerepben, aki bebizonyítja, hogy a Testvériség és a Templomosok közötti harc évszázadokkal ezelőtt kezdődött.\r\n\r\nAz Assassin’s Creed Origins minden elemében a korábbi epizódokból megismert sajátosságokat álmodja tovább, ezáltal szabadon bejárhatjuk majd a Nílus völgyét, megismerhetjük a piramisok titkait, a számtalan mellékküldetés mellett pedig egy összetett sztorira felépített küldetésrendszer is vár majd ránk, többségében célszemélyek likvidálásával és értékes ereklyék kutatásával a középpontban.\r\n\r\nAz Assassin’s Creed Origins természetesen messze nem csak az egyiptomi környezettel kíván újítani, hiszen a játékmenet terén is sok frissességet garantál! A készítők átalakították benne a harcrendszert, és a minden eddiginél összetettebb történet mellett szerepjátékos elemek egész sorát valósították meg, sőt mi több, Bayek mellé egy irányítható sast is elérhetővé tettek, akinek óriási hasznát vesszük majd a küldetések teljesítésekor.', 'assassin_origins.jpg', 1, 1, 0),
(21, 'Assassin\'s Creed Odyssey', '2018-10-05', 18999, 1, 2, 1, 2, 5, 100, 'Írd meg saját odüsszeiádat, és válj legendás spártai hőssé az Assassin’s Creed sorozat legnagyobb és legszebb epizódjában! Több száz évvel az Assassin’s Creed Origins eseményei előtt, az ókori Görögországban háború dúl Spárta és a görögök között. Ez a te lehetőséged, hogy kitaszítottból igazi legendává válj! Ez az első eset, hogy a nyílt világú Assassin’s Creed sorozat valódi RPG-vé válik. Irányíthatod a beszélgetéseket, hatással lehetsz a küldetések alakulására és a történet végkimenetelére. Fejleszd saját férfi vagy női karakteredet, szerezz új fegyvereket, lopakodj, támadj, barangolj és hajózz a lenyűgöző világban. A legősibb kaland lesz a legnagyobb!', 'assassin_odyssey.jpg', 1, 1, 114),
(22, 'Doom 3 BFG edition', '2012-10-16', 3999, 1, 2, 1, 2, 5, 0, 'A Doom 3 BFG Edition az FPS műfajt meghatározó, ikonikus játékok páratlan gyűjteménye. A csomag tartalmazza a Doom 3-mat, a több órányi szórakozást ígérő “Resurrection of Evil” kiegészítőt, valamint a plusz hét, adrenalintól fűtött pályát a “The Lost Mission” keretében, ami tovább fokozza a történet izgalmait. Ha ez nem lenne elég, az eredeti Doom és Doom II ugyancsak helyet kapott a gyűjteményben, így a Doom 3 BFG Edition egy igazán teljes csomag.', 'doom3_bfg.jpg', 0, 0, 0),
(23, 'Quake Champions', '2018-12-12', 12999, 1, 1, 1, 2, 5, 0, 'A Doom és a Wolfenstein után az id Software egy újabb legendás FPS-t támasztott fel hamvaiból, lévén újra visszatér a színtérre a belsőnézetes többjátékos akciók egyik koronázatlan királyának számító Quake-sorozat, amely ismét megmutatja, hogy milyennek is kell lennie manapság egy intenzív és egyben klasszikus online lövöldének.\r\n\r\nA Quake Champions egy kizárólag PC-re megjelenő, úgynevezett „arena shooter”, amelyben pergős játékmenet, jól megtervezett pályák, óriási összecsapások és természetesen gyönyörű látványvilág is vár ránk a széria sajátos hangulatával, illetve atmoszférájával a középpontban. A játékkal az id Software határozott célja, hogy betörjön az eSportok piacára, ezáltal korlátlan framerate, a harcosok számára választható egyedi képességek és felszerelések, valamint változatos szabályrendszerek sokasága vár benne ránk.', 'quake.jpg', 0, 0, 0),
(24, 'Tom Clancy\'s Rainbow Six Siege', '2015-12-01', 8999, 1, 2, 1, 2, 5, 0, 'A Tom Clancy’s Rainbow Six Siege-ben egy különleges katonai kommandó oldalán vehetjük fel a harcot a terroristák és veszélyes bűnözők ellen, és olyan izgalmas bevetések várnak ránk, mint például a túszmentő akciók, amiknek során csak rajtunk múlik majd, hogy milyen formában hatolunk be az épületbe, és miként semlegesítjük ellenfeleinket úgy, hogy közben egyetlen civil életet se sodorjunk veszélybe.\r\n\r\nTermészetesen az izgalmas bevetéseket nemcsak egyedül, hanem a multiplayer módnak köszönhetően akár más játékosok oldalán is átélhetjük majd, ami sokkal realisztikusabb formában vezet be minket a különleges katonai egységek mindennapjaiba.\r\n\r\nMindezt ráadásul elképesztően realisztikus, teljes egészében újgenerációs grafika társaságában, amihez nemcsak csodaszép látvány, hanem például valószerűen rombolható környezet is dukál, ezáltal ha tűzharcra kerül a sor, korántsem biztos, hogy egy fedezék folyamatos védelmet nyújt majd a golyók elől.', 'rainbowsix.jpg', 0, 0, 0),
(25, 'Rage 2', '2019-06-01', 18999, 1, 3, 1, 2, 5, 100, 'Üdvözlünk a Rage 2 világában ami egy hihetetlen múlttal rendelkezik és most a Bethesda elhozta a még pörgősebb,akciodúsabb verziót egy teljesen új karakterrel', 'rage2.jpg', 2, 1, 102),
(28, 'The Witcher III: Wild Hunt', '2015-05-19', 7999, 1, 5, 1, 2, 5, 10, '  ', 'witcherIII.jpg', 1, 0, 0),
(29, 'Call of duty Black ops', '2010-11-09', 3999, 1, 11, 1, 2, 5, 0, '  ', 'cod_black_ops.jpg', 0, 0, 0),
(30, 'Call of Duty: Black Ops II', '2012-11-12', 3999, 1, 11, 1, 2, 5, 0, '', 'cod_black_opsII.jpg', 0, 0, 0),
(31, 'Call of Duty: Black Ops III', '2015-11-06', 7999, 1, 11, 1, 2, 5, 0, 'heheh', 'cod_black_opsIII.jpg', 0, 0, 3),
(32, 'Call of Duty: Black Ops IIII', '2018-10-12', 18999, 1, 11, 1, 2, 5, 0, '', 'cod_black_opsIIII.jpg', 1, 0, 50),
(33, 'Call of Duty: Modern Warfare Remastered', '2016-11-04', 11999, 1, 11, 1, 2, 5, 0, '', 'cod_mw.jpg', 0, 0, 0),
(34, 'Call of Duty: Modern Warfare 2', '2009-11-10', 4999, 1, 11, 1, 2, 5, 10, '', 'cod_mwII.jpg', 1, 0, 0),
(35, 'Call of Duty: Modern Warfare 3', '2011-11-08', 3999, 1, 11, 1, 2, 5, 0, '', 'cod_mwIII.jpg', 0, 0, 0),
(36, 'Call of Duty: Ghosts', '2013-11-05', 7999, 1, 11, 1, 2, 5, 0, '', 'cod_ghosts.jpg', 0, 0, 1),
(37, 'Call of Duty: WWII', '2017-11-03', 12999, 1, 11, 1, 2, 5, 0, '', 'cod_wwII.jpg', 0, 0, 0),
(38, 'Destiny 2', '2017-09-03', 7999, 1, 11, 1, 2, 5, 0, '', 'destinyII.jpg', 0, 0, 0),
(39, 'Destiny', '2014-09-09', 6999, 3, 12, 1, 2, 5, 0, '', 'destiny_ps4.jpg', 2, 0, 31),
(40, 'Destiny', '2014-09-09', 6999, 2, 12, 1, 2, 5, 0, '', 'destiny_x1.jpg', 2, 0, 30),
(43, 'The Legend of Zelda: Breath of the Wild', '2017-03-03', 12999, 4, 13, 1, 2, 5, 0, '', 'breath_of_the_wild.jpg', 1, 0, 16),
(44, 'Mortal Kombat', '2019-03-03', 0, 4, 13, 1, 2, 5, 141, '', 'mortal_kombat_11.jpg', 2, 1, 51),
(45, 'Days gone', '2019-04-26', 20999, 3, 15, 1, 2, 5, 0, '', 'days_gone_ps4.jpg', 3, 0, 1),
(46, 'Dark Souls Trilogy', '2019-03-15', 18999, 3, 17, 1, 2, 5, 50, '  ', 'dark_souls_trilogy_ps4.jpg', 2, 1, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jatek_ingyen_szallitas`
--

CREATE TABLE `jatek_ingyen_szallitas` (
  `jatek_ingyen_szallitas_id` tinyint(1) NOT NULL,
  `jatek_ingyen_szallitas_tipus` varchar(10) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `jatek_ingyen_szallitas`
--

INSERT INTO `jatek_ingyen_szallitas` (`jatek_ingyen_szallitas_id`, `jatek_ingyen_szallitas_tipus`) VALUES
(0, 'Nem'),
(1, 'Igen');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jatek_keszlet`
--

CREATE TABLE `jatek_keszlet` (
  `jatek_keszlet_id` int(11) NOT NULL,
  `jatek_keszlet_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `jatek_keszlet`
--

INSERT INTO `jatek_keszlet` (`jatek_keszlet_id`, `jatek_keszlet_nev`) VALUES
(0, 'Kifogyott'),
(1, 'Készleten'),
(2, 'Előrendelhető'),
(3, 'Előrendelésben elfogyott');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kiado`
--

CREATE TABLE `kiado` (
  `kiado_id` int(11) NOT NULL,
  `kiado_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `kiado`
--

INSERT INTO `kiado` (`kiado_id`, `kiado_nev`) VALUES
(1, 'Gearbox'),
(2, 'Ubisoft'),
(3, 'Bethesda'),
(4, 'Activison'),
(5, 'CD Projekt Red'),
(11, 'Activision'),
(12, 'Bungie'),
(13, 'Nintendo'),
(14, 'PUBG corporation'),
(15, 'SIE Bend Studio'),
(16, 'Square Enix'),
(17, 'Bandai Namco');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `rendeles`
--

CREATE TABLE `rendeles` (
  `rendeles_id` int(11) UNSIGNED NOT NULL,
  `rendeles_vegosszeg` int(6) NOT NULL,
  `rendeles_felhasznaloid` int(11) NOT NULL,
  `rendeles_keresztnev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `rendeles_vezeteknev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `rendeles_telefonszam` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `rendeles_iranyitoszam` int(11) NOT NULL,
  `rendeles_telepules` varchar(70) COLLATE utf8_hungarian_ci NOT NULL,
  `rendeles_cim` varchar(70) COLLATE utf8_hungarian_ci NOT NULL,
  `rendeles_emailcim` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `rendeles_megjegyzes` varchar(300) COLLATE utf8_hungarian_ci NOT NULL,
  `rendeles_statuszid` int(11) NOT NULL,
  `rendeles_utanvet_tipusid` int(11) NOT NULL,
  `rendeles_datum` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `rendeles`
--

INSERT INTO `rendeles` (`rendeles_id`, `rendeles_vegosszeg`, `rendeles_felhasznaloid`, `rendeles_keresztnev`, `rendeles_vezeteknev`, `rendeles_telefonszam`, `rendeles_iranyitoszam`, `rendeles_telepules`, `rendeles_cim`, `rendeles_emailcim`, `rendeles_megjegyzes`, `rendeles_statuszid`, `rendeles_utanvet_tipusid`, `rendeles_datum`) VALUES
(1, 20999, 38, 'aaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaa', 4087, 'Hajdúdorog', 'Kovács utca 15', 'bebb99@gmail.com', '\naaaaaaaaaaaaaaa', 2, 1, '2019-03-07 18:08:52'),
(2, 18999, 38, 'aaaaaaaaaaaasda', 'aaaaaaaaaaaasd', '204301896a', 4087, 'Hajdúdorog', 'Kovács utca 15', 'bebb99@gmail.com', '\naaaaaaaaaaaaaaaaaaaaaaaaaa', 2, 1, '2019-03-07 19:48:47');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `statusz`
--

CREATE TABLE `statusz` (
  `statusz_id` int(11) NOT NULL,
  `statusz_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `statusz`
--

INSERT INTO `statusz` (`statusz_id`, `statusz_nev`) VALUES
(1, 'Feldolgozás alatt'),
(2, 'Szállításra kész'),
(3, 'Elküldve'),
(4, 'Teljesítve');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `stilus`
--

CREATE TABLE `stilus` (
  `stilus_id` int(11) NOT NULL,
  `stilus_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `stilus`
--

INSERT INTO `stilus` (`stilus_id`, `stilus_nev`) VALUES
(1, 'Akció/Kaland'),
(2, 'Életmód'),
(3, 'Gyerekjáték'),
(4, 'Logikai'),
(5, 'Sport'),
(6, 'Stratégia'),
(7, 'Szerepjáték(RPG)'),
(8, 'Szórakozás'),
(9, 'Verekedős'),
(10, 'Verseny'),
(11, 'Zene és tánc');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `szemely`
--

CREATE TABLE `szemely` (
  `szemely_id` int(11) NOT NULL,
  `szemely_felh` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `szemely_email_cim` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `szemely_jelszo` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `szemely_rang` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `szemely`
--

INSERT INTO `szemely` (`szemely_id`, `szemely_felh`, `szemely_email_cim`, `szemely_jelszo`, `szemely_rang`) VALUES
(1, 'aniko', '', 'b6e2491996f4f49e2c7ba6a36c417d1d', 1),
(2, 'sima', 'sima@nomail.com', 'e6b42073f30a539405c50c443633c160', 0),
(19, 'pista', '', '47c3da0dc1d88b7721e3905d8a4b5f76', 0),
(24, 'aniko5', '', 'c289a06482c4113f1dd8a992f52f8e11', 0),
(25, 'aniko2', '', 'c289a06482c4113f1dd8a992f52f8e11', 0),
(28, 'pistike1', 'bebb99@freemail.hu', 'a326740c78efaab3c285c51b198277fa', 0),
(29, 'pistike2', 'bebb99@freemail.hu', 'a326740c78efaab3c285c51b198277fa', 0),
(30, 'pistike3', 'bebb99@freemail.hu', 'a326740c78efaab3c285c51b198277fa', 0),
(31, 'pistike5', 'bebb99@freemail.hu', 'a326740c78efaab3c285c51b198277fa', 0),
(32, 'ferike', 'ferike55@gmail.com', '33681058b02c1c6664f6ff0b942238fb', 0),
(34, 'okokok', 'ok@gmail.com', '3d0e0c93c5a08866bc896b4d45e95c81', 0),
(35, 'ferike1', 'ferike@gmail.com', 'b7bd74568f61f89179f2814394539dd1', 0),
(36, 'kecske', 'kecskekecske@gmail.com', '520a3823796aa9c2599eb060a5ef422c', 0),
(37, 'UrbiZoli', 'urbi@maile.com', 'bde64fea6cf4b6a7d54d0a0bf4ae3890', 0),
(38, 'asdasd', 'asdasd@gmail.com', 'e341450e51b6ae4f266c8963f88f825e', 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tetel`
--

CREATE TABLE `tetel` (
  `tetel_id` int(11) NOT NULL,
  `tetel_rendeles_id` int(11) UNSIGNED NOT NULL,
  `tetel_jatek_id` int(11) NOT NULL,
  `tetel_ar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `tetel`
--

INSERT INTO `tetel` (`tetel_id`, `tetel_rendeles_id`, `tetel_jatek_id`, `tetel_ar`) VALUES
(1, 1, 21, 20999),
(2, 2, 45, 18999);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tipus`
--

CREATE TABLE `tipus` (
  `tipus_id` int(11) NOT NULL,
  `tipus_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `tipus`
--

INSERT INTO `tipus` (`tipus_id`, `tipus_nev`) VALUES
(1, 'PC'),
(2, 'Xbox One'),
(3, 'PS4'),
(4, 'Nintendo Switch');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `utanvet_tipus`
--

CREATE TABLE `utanvet_tipus` (
  `utanvet_tipusid` int(11) NOT NULL,
  `utanvet_tipusnev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `utanvet_tipus`
--

INSERT INTO `utanvet_tipus` (`utanvet_tipusid`, `utanvet_tipusnev`) VALUES
(1, 'Bankkártyás utánvét'),
(2, 'Készpénzes utánvét');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `dlc`
--
ALTER TABLE `dlc`
  ADD PRIMARY KEY (`dlc_id`);

--
-- A tábla indexei `eletkor`
--
ALTER TABLE `eletkor`
  ADD PRIMARY KEY (`eletkor_id`);

--
-- A tábla indexei `jatek`
--
ALTER TABLE `jatek`
  ADD PRIMARY KEY (`jatek_id`),
  ADD KEY `jatek_kiadoid` (`jatek_kiadoid`),
  ADD KEY `jatek_tipusid` (`jatek_tipusid`),
  ADD KEY `jatek_keszlet` (`jatek_keszletid`),
  ADD KEY `jatek_stilus_id` (`jatek_stilus_id`),
  ADD KEY `jatek_eletkor_id` (`jatek_eletkor_id`),
  ADD KEY `jatek_dlc_id` (`jatek_dlc_id`),
  ADD KEY `jatek_ingyen_szallitas` (`jatek_ingyen_szallitas`);

--
-- A tábla indexei `jatek_ingyen_szallitas`
--
ALTER TABLE `jatek_ingyen_szallitas`
  ADD PRIMARY KEY (`jatek_ingyen_szallitas_id`);

--
-- A tábla indexei `jatek_keszlet`
--
ALTER TABLE `jatek_keszlet`
  ADD PRIMARY KEY (`jatek_keszlet_id`);

--
-- A tábla indexei `kiado`
--
ALTER TABLE `kiado`
  ADD PRIMARY KEY (`kiado_id`);

--
-- A tábla indexei `rendeles`
--
ALTER TABLE `rendeles`
  ADD PRIMARY KEY (`rendeles_id`),
  ADD KEY `rendeles_jatekid` (`rendeles_felhasznaloid`),
  ADD KEY `rendeles_utanvet_tipusid` (`rendeles_utanvet_tipusid`),
  ADD KEY `rendeles_statusz` (`rendeles_statuszid`),
  ADD KEY `rendeles_id` (`rendeles_id`);

--
-- A tábla indexei `statusz`
--
ALTER TABLE `statusz`
  ADD PRIMARY KEY (`statusz_id`),
  ADD KEY `statusz_id` (`statusz_id`);

--
-- A tábla indexei `stilus`
--
ALTER TABLE `stilus`
  ADD PRIMARY KEY (`stilus_id`);

--
-- A tábla indexei `szemely`
--
ALTER TABLE `szemely`
  ADD PRIMARY KEY (`szemely_id`);

--
-- A tábla indexei `tetel`
--
ALTER TABLE `tetel`
  ADD PRIMARY KEY (`tetel_id`),
  ADD KEY `tetel_rendeles_id` (`tetel_rendeles_id`),
  ADD KEY `tetel_jatek_id` (`tetel_jatek_id`);

--
-- A tábla indexei `tipus`
--
ALTER TABLE `tipus`
  ADD PRIMARY KEY (`tipus_id`);

--
-- A tábla indexei `utanvet_tipus`
--
ALTER TABLE `utanvet_tipus`
  ADD PRIMARY KEY (`utanvet_tipusid`),
  ADD KEY `utanvet_tipusid` (`utanvet_tipusid`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `dlc`
--
ALTER TABLE `dlc`
  MODIFY `dlc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `eletkor`
--
ALTER TABLE `eletkor`
  MODIFY `eletkor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `jatek`
--
ALTER TABLE `jatek`
  MODIFY `jatek_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT a táblához `jatek_keszlet`
--
ALTER TABLE `jatek_keszlet`
  MODIFY `jatek_keszlet_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `kiado`
--
ALTER TABLE `kiado`
  MODIFY `kiado_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT a táblához `rendeles`
--
ALTER TABLE `rendeles`
  MODIFY `rendeles_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `statusz`
--
ALTER TABLE `statusz`
  MODIFY `statusz_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `stilus`
--
ALTER TABLE `stilus`
  MODIFY `stilus_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT a táblához `szemely`
--
ALTER TABLE `szemely`
  MODIFY `szemely_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT a táblához `tetel`
--
ALTER TABLE `tetel`
  MODIFY `tetel_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `tipus`
--
ALTER TABLE `tipus`
  MODIFY `tipus_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `utanvet_tipus`
--
ALTER TABLE `utanvet_tipus`
  MODIFY `utanvet_tipusid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `jatek`
--
ALTER TABLE `jatek`
  ADD CONSTRAINT `jatek_ibfk_1` FOREIGN KEY (`jatek_kiadoid`) REFERENCES `kiado` (`kiado_id`),
  ADD CONSTRAINT `jatek_ibfk_2` FOREIGN KEY (`jatek_keszletid`) REFERENCES `jatek_keszlet` (`jatek_keszlet_id`),
  ADD CONSTRAINT `jatek_ibfk_3` FOREIGN KEY (`jatek_dlc_id`) REFERENCES `dlc` (`dlc_id`),
  ADD CONSTRAINT `jatek_ibfk_4` FOREIGN KEY (`jatek_eletkor_id`) REFERENCES `eletkor` (`eletkor_id`),
  ADD CONSTRAINT `jatek_ibfk_5` FOREIGN KEY (`jatek_tipusid`) REFERENCES `tipus` (`tipus_id`),
  ADD CONSTRAINT `jatek_ibfk_6` FOREIGN KEY (`jatek_stilus_id`) REFERENCES `stilus` (`stilus_id`),
  ADD CONSTRAINT `jatek_ibfk_7` FOREIGN KEY (`jatek_ingyen_szallitas`) REFERENCES `jatek_ingyen_szallitas` (`jatek_ingyen_szallitas_id`);

--
-- Megkötések a táblához `rendeles`
--
ALTER TABLE `rendeles`
  ADD CONSTRAINT `rendeles_ibfk_1` FOREIGN KEY (`rendeles_statuszid`) REFERENCES `statusz` (`statusz_id`),
  ADD CONSTRAINT `rendeles_ibfk_2` FOREIGN KEY (`rendeles_utanvet_tipusid`) REFERENCES `utanvet_tipus` (`utanvet_tipusid`),
  ADD CONSTRAINT `rendeles_ibfk_3` FOREIGN KEY (`rendeles_felhasznaloid`) REFERENCES `szemely` (`szemely_id`);

--
-- Megkötések a táblához `tetel`
--
ALTER TABLE `tetel`
  ADD CONSTRAINT `tetel_ibfk_2` FOREIGN KEY (`tetel_rendeles_id`) REFERENCES `rendeles` (`rendeles_id`),
  ADD CONSTRAINT `tetel_ibfk_3` FOREIGN KEY (`tetel_jatek_id`) REFERENCES `jatek` (`jatek_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
