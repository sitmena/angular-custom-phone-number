import * as lpn from 'google-libphonenumber';
import * as i0 from '@angular/core';
import {
  Injectable,
  Directive,
  EventEmitter,
  forwardRef,
  Component,
  Input,
  Output,
  ViewChild,
  NgModule
} from '@angular/core';
import * as i4 from '@angular/forms';
import {NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {setTheme} from 'ngx-bootstrap/utils';
import * as i2 from '@angular/common';
import {CommonModule} from '@angular/common';
import * as i3 from 'ngx-bootstrap/dropdown';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

var CountryISO;
(function (CountryISO) {
  CountryISO["Afghanistan"] = "af";
  CountryISO["Albania"] = "al";
  CountryISO["Algeria"] = "dz";
  CountryISO["AmericanSamoa"] = "as";
  CountryISO["Andorra"] = "ad";
  CountryISO["Angola"] = "ao";
  CountryISO["Anguilla"] = "ai";
  CountryISO["AntiguaAndBarbuda"] = "ag";
  CountryISO["Argentina"] = "ar";
  CountryISO["Armenia"] = "am";
  CountryISO["Aruba"] = "aw";
  CountryISO["Australia"] = "au";
  CountryISO["Austria"] = "at";
  CountryISO["Azerbaijan"] = "az";
  CountryISO["Bahamas"] = "bs";
  CountryISO["Bahrain"] = "bh";
  CountryISO["Bangladesh"] = "bd";
  CountryISO["Barbados"] = "bb";
  CountryISO["Belarus"] = "by";
  CountryISO["Belgium"] = "be";
  CountryISO["Belize"] = "bz";
  CountryISO["Benin"] = "bj";
  CountryISO["Bermuda"] = "bm";
  CountryISO["Bhutan"] = "bt";
  CountryISO["Bolivia"] = "bo";
  CountryISO["BosniaAndHerzegovina"] = "ba";
  CountryISO["Botswana"] = "bw";
  CountryISO["Brazil"] = "br";
  CountryISO["BritishIndianOceanTerritory"] = "io";
  CountryISO["BritishVirginIslands"] = "vg";
  CountryISO["Brunei"] = "bn";
  CountryISO["Bulgaria"] = "bg";
  CountryISO["BurkinaFaso"] = "bf";
  CountryISO["Burundi"] = "bi";
  CountryISO["Cambodia"] = "kh";
  CountryISO["Cameroon"] = "cm";
  CountryISO["Canada"] = "ca";
  CountryISO["CapeVerde"] = "cv";
  CountryISO["CaribbeanNetherlands"] = "bq";
  CountryISO["CaymanIslands"] = "ky";
  CountryISO["CentralAfricanRepublic"] = "cf";
  CountryISO["Chad"] = "td";
  CountryISO["Chile"] = "cl";
  CountryISO["China"] = "cn";
  CountryISO["ChristmasIsland"] = "cx";
  CountryISO["Cocos"] = "cc";
  CountryISO["Colombia"] = "co";
  CountryISO["Comoros"] = "km";
  CountryISO["CongoDRCJamhuriYaKidemokrasiaYaKongo"] = "cd";
  CountryISO["CongoRepublicCongoBrazzaville"] = "cg";
  CountryISO["CookIslands"] = "ck";
  CountryISO["CostaRica"] = "cr";
  CountryISO["C\u00F4teDIvoire"] = "ci";
  CountryISO["Croatia"] = "hr";
  CountryISO["Cuba"] = "cu";
  CountryISO["Cura\u00E7ao"] = "cw";
  CountryISO["Cyprus"] = "cy";
  CountryISO["CzechRepublic"] = "cz";
  CountryISO["Denmark"] = "dk";
  CountryISO["Djibouti"] = "dj";
  CountryISO["Dominica"] = "dm";
  CountryISO["DominicanRepublic"] = "do";
  CountryISO["Ecuador"] = "ec";
  CountryISO["Egypt"] = "eg";
  CountryISO["ElSalvador"] = "sv";
  CountryISO["EquatorialGuinea"] = "gq";
  CountryISO["Eritrea"] = "er";
  CountryISO["Estonia"] = "ee";
  CountryISO["Ethiopia"] = "et";
  CountryISO["FalklandIslands"] = "fk";
  CountryISO["FaroeIslands"] = "fo";
  CountryISO["Fiji"] = "fj";
  CountryISO["Finland"] = "fi";
  CountryISO["France"] = "fr";
  CountryISO["FrenchGuiana"] = "gf";
  CountryISO["FrenchPolynesia"] = "pf";
  CountryISO["Gabon"] = "ga";
  CountryISO["Gambia"] = "gm";
  CountryISO["Georgia"] = "ge";
  CountryISO["Germany"] = "de";
  CountryISO["Ghana"] = "gh";
  CountryISO["Gibraltar"] = "gi";
  CountryISO["Greece"] = "gr";
  CountryISO["Greenland"] = "gl";
  CountryISO["Grenada"] = "gd";
  CountryISO["Guadeloupe"] = "gp";
  CountryISO["Guam"] = "gu";
  CountryISO["Guatemala"] = "gt";
  CountryISO["Guernsey"] = "gg";
  CountryISO["Guinea"] = "gn";
  CountryISO["GuineaBissau"] = "gw";
  CountryISO["Guyana"] = "gy";
  CountryISO["Haiti"] = "ht";
  CountryISO["Honduras"] = "hn";
  CountryISO["HongKong"] = "hk";
  CountryISO["Hungary"] = "hu";
  CountryISO["Iceland"] = "is";
  CountryISO["India"] = "in";
  CountryISO["Indonesia"] = "id";
  CountryISO["Iran"] = "ir";
  CountryISO["Iraq"] = "iq";
  CountryISO["Ireland"] = "ie";
  CountryISO["IsleOfMan"] = "im";
  CountryISO["Israel"] = "il";
  CountryISO["Italy"] = "it";
  CountryISO["Jamaica"] = "jm";
  CountryISO["Japan"] = "jp";
  CountryISO["Jersey"] = "je";
  CountryISO["Jordan"] = "jo";
  CountryISO["Kazakhstan"] = "kz";
  CountryISO["Kenya"] = "ke";
  CountryISO["Kiribati"] = "ki";
  CountryISO["Kosovo"] = "xk";
  CountryISO["Kuwait"] = "kw";
  CountryISO["Kyrgyzstan"] = "kg";
  CountryISO["Laos"] = "la";
  CountryISO["Latvia"] = "lv";
  CountryISO["Lebanon"] = "lb";
  CountryISO["Lesotho"] = "ls";
  CountryISO["Liberia"] = "lr";
  CountryISO["Libya"] = "ly";
  CountryISO["Liechtenstein"] = "li";
  CountryISO["Lithuania"] = "lt";
  CountryISO["Luxembourg"] = "lu";
  CountryISO["Macau"] = "mo";
  CountryISO["Macedonia"] = "mk";
  CountryISO["Madagascar"] = "mg";
  CountryISO["Malawi"] = "mw";
  CountryISO["Malaysia"] = "my";
  CountryISO["Maldives"] = "mv";
  CountryISO["Mali"] = "ml";
  CountryISO["Malta"] = "mt";
  CountryISO["MarshallIslands"] = "mh";
  CountryISO["Martinique"] = "mq";
  CountryISO["Mauritania"] = "mr";
  CountryISO["Mauritius"] = "mu";
  CountryISO["Mayotte"] = "yt";
  CountryISO["Mexico"] = "mx";
  CountryISO["Micronesia"] = "fm";
  CountryISO["Moldova"] = "md";
  CountryISO["Monaco"] = "mc";
  CountryISO["Mongolia"] = "mn";
  CountryISO["Montenegro"] = "me";
  CountryISO["Montserrat"] = "ms";
  CountryISO["Morocco"] = "ma";
  CountryISO["Mozambique"] = "mz";
  CountryISO["Myanmar"] = "mm";
  CountryISO["Namibia"] = "na";
  CountryISO["Nauru"] = "nr";
  CountryISO["Nepal"] = "np";
  CountryISO["Netherlands"] = "nl";
  CountryISO["NewCaledonia"] = "nc";
  CountryISO["NewZealand"] = "nz";
  CountryISO["Nicaragua"] = "ni";
  CountryISO["Niger"] = "ne";
  CountryISO["Nigeria"] = "ng";
  CountryISO["Niue"] = "nu";
  CountryISO["NorfolkIsland"] = "nf";
  CountryISO["NorthKorea"] = "kp";
  CountryISO["NorthernMarianaIslands"] = "mp";
  CountryISO["Norway"] = "no";
  CountryISO["Oman"] = "om";
  CountryISO["Pakistan"] = "pk";
  CountryISO["Palau"] = "pw";
  CountryISO["Palestine"] = "ps";
  CountryISO["Panama"] = "pa";
  CountryISO["PapuaNewGuinea"] = "pg";
  CountryISO["Paraguay"] = "py";
  CountryISO["Peru"] = "pe";
  CountryISO["Philippines"] = "ph";
  CountryISO["Poland"] = "pl";
  CountryISO["Portugal"] = "pt";
  CountryISO["PuertoRico"] = "pr";
  CountryISO["Qatar"] = "qa";
  CountryISO["R\u00E9union"] = "re";
  CountryISO["Romania"] = "ro";
  CountryISO["Russia"] = "ru";
  CountryISO["Rwanda"] = "rw";
  CountryISO["SaintBarth\u00E9lemy"] = "bl";
  CountryISO["SaintHelena"] = "sh";
  CountryISO["SaintKittsAndNevis"] = "kn";
  CountryISO["SaintLucia"] = "lc";
  CountryISO["SaintMartin"] = "mf";
  CountryISO["SaintPierreAndMiquelon"] = "pm";
  CountryISO["SaintVincentAndTheGrenadines"] = "vc";
  CountryISO["Samoa"] = "ws";
  CountryISO["SanMarino"] = "sm";
  CountryISO["S\u00E3oTom\u00E9AndPr\u00EDncipe"] = "st";
  CountryISO["SaudiArabia"] = "sa";
  CountryISO["Senegal"] = "sn";
  CountryISO["Serbia"] = "rs";
  CountryISO["Seychelles"] = "sc";
  CountryISO["SierraLeone"] = "sl";
  CountryISO["Singapore"] = "sg";
  CountryISO["SintMaarten"] = "sx";
  CountryISO["Slovakia"] = "sk";
  CountryISO["Slovenia"] = "si";
  CountryISO["SolomonIslands"] = "sb";
  CountryISO["Somalia"] = "so";
  CountryISO["SouthAfrica"] = "za";
  CountryISO["SouthKorea"] = "kr";
  CountryISO["SouthSudan"] = "ss";
  CountryISO["Spain"] = "es";
  CountryISO["SriLanka"] = "lk";
  CountryISO["Sudan"] = "sd";
  CountryISO["Suriname"] = "sr";
  CountryISO["SvalbardAndJanMayen"] = "sj";
  CountryISO["Swaziland"] = "sz";
  CountryISO["Sweden"] = "se";
  CountryISO["Switzerland"] = "ch";
  CountryISO["Syria"] = "sy";
  CountryISO["Taiwan"] = "tw";
  CountryISO["Tajikistan"] = "tj";
  CountryISO["Tanzania"] = "tz";
  CountryISO["Thailand"] = "th";
  CountryISO["TimorLeste"] = "tl";
  CountryISO["Togo"] = "tg";
  CountryISO["Tokelau"] = "tk";
  CountryISO["Tonga"] = "to";
  CountryISO["TrinidadAndTobago"] = "tt";
  CountryISO["Tunisia"] = "tn";
  CountryISO["Turkey"] = "tr";
  CountryISO["Turkmenistan"] = "tm";
  CountryISO["TurksAndCaicosIslands"] = "tc";
  CountryISO["Tuvalu"] = "tv";
  CountryISO["USVirginIslands"] = "vi";
  CountryISO["Uganda"] = "ug";
  CountryISO["Ukraine"] = "ua";
  CountryISO["UnitedArabEmirates"] = "ae";
  CountryISO["UnitedKingdom"] = "gb";
  CountryISO["UnitedStates"] = "us";
  CountryISO["Uruguay"] = "uy";
  CountryISO["Uzbekistan"] = "uz";
  CountryISO["Vanuatu"] = "vu";
  CountryISO["VaticanCity"] = "va";
  CountryISO["Venezuela"] = "ve";
  CountryISO["Vietnam"] = "vn";
  CountryISO["WallisAndFutuna"] = "wf";
  CountryISO["WesternSahara"] = "eh";
  CountryISO["Yemen"] = "ye";
  CountryISO["Zambia"] = "zm";
  CountryISO["Zimbabwe"] = "zw";
  CountryISO["\u00C5landIslands"] = "ax";
})(CountryISO || (CountryISO = {}));

class CountryCode {
  constructor() {
    let countryData = {"arabic":[["افغانستان","af","93"],["ألبانيا","al","355"],["الجزائر","dz","213"],["ساموا الأمريكية","as","1",1,["684"]],["اندورا","ad","376"],["انغولا","ao","244"],["أنغويلا","ai","1",1,["264"]],["انتيغوا وبربودا","ag","1",1,["268"]],["الارجنتين","ar","54"],["ارمينيا","am","374"],["أروبا","aw","297"],["استراليا","au","61",0],["النمسا","at","43"],["أذربيجان","az","994"],["جزر البهاما","bs","1",1,["242"]],["البحرين","bh","973"],["بنغلاديش","bd","880"],["بربادوس","bb","1",1,["246"]],["بيلاروس","by","375"],["بلجيكا","be","32"],["بليز","bz","501"],["بنين","bj","229"],["جزر برمودا","bm","1",1,["441"]],["بوتان","bt","975"],["بوليفيا","bo","591"],["البوسنة والهرسك","ba","387"],["بوتسوانا","bw","267"],["البرازيل","br","55"],["الإقليم البريطاني في المحيط الهندي","io","246"],["جزر فيرجن البريطانية","vg","1",1,["284"]],["بروني","bn","673"],["بلغاريا","bg","359"],["بوركينا فاسو","bf","226"],["بوروندي","bi","257"],["كمبوديا","kh","855"],["كاميرون","cm","237"],["كندا","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["الرأس الاخضر","cv","238"],["هولندا الكاريبية","bq","599",1],["جزر كايمان","ky","1",1,["345"]],["جمهورية افريقيا الوسطى","cf","236"],["جمهورية تشاد","td","235"],["شيلي","cl","56"],["صين","cn","86"],["جزيرة كريسماس","cx","61",2],["جزر كوكوس (كيلينغ)","cc","61",1],["كولومبيا","co","57"],["جزر القمر","km","269"],["جمهورية الكونغو الديمقراطية","cd","243"],["جمهورية الكونغو","cg","242"],["جزر كوك","ck","682"],["كوستاريكا","cr","506"],["كوت ديفوار","ci","225"],["كرواتيا","hr","385"],["كوبا","cu","53"],["كوراساو","cw","599",0],["قبرص","cy","357"],["تشيك","cz","420"],["الدنمارك","dk","45"],["جيبوتي","dj","253"],["دومينيكا","dm","1767"],["جمهورية الدومينيكان","do","1",2,["809","829","849"]],["الاكوادور","ec","593"],["مصر","eg","20"],["السلفادور","sv","503"],["غينيا الاستوائية","gq","240"],["اريتريا","er","291"],["إستونيا","ee","372"],["اثيوبيا","et","251"],["جزر فوكلاند","fk","500"],["جزر فارو","fo","298"],["فيجي","fj","679"],["فنلندا","fi","358",0],["فرنسا","fr","33"],["غويانا الفرنسية","gf","594"],["بولينيزيا الفرنسية","pf","689"],["غابون","ga","241"],["غامبيا","gm","220"],["جورجيا","ge","995"],["المانيا","de","49"],["غانا","gh","233"],["مستعمرة جبل طارق","gi","350"],["يونان","gr","30"],["غرينلاند","gl","299"],["غرينادا","gd","1473"],["غوادلوب","gp","590",0],["غوام","gu","1",1,["671"]],["غواتيمالا","gt","502"],["غيرنزي","gg","44",1,[1481]],["غينيا","gn","224"],["غينيا بيساو","gw","245"],["غيانا","gy","592"],["هايتي","ht","509"],["هندوراس","hn","504"],["هونغ كونغ","hk","852"],["هنغاريا","hu","36"],["ايسلندا","is","354"],["الهند","in","91"],["اندونيسيا","id","62"],["ايران","ir","98"],["العراق","iq","964"],["جمهورية إيرلندا","ie","353"],["جزيرة مان","im","44",2,[1624]],["ايطاليا","it","39",0],["جامايكا","jm","1",1,["876"]],["اليابان","jp","81"],["جيرسي","je","44",3,[1534]],["الأردن","jo","962"],["كازاخستان","kz","7",1],["كينيا","ke","254"],["كيريباس","ki","686"],["كوسوفو","xk","383"],["الكويت","kw","965"],["قيرغيزستان","kg","996"],["لاوس","la","856"],["لاتفيا","lv","371"],["لبنان","lb","961"],["ليسوتو","ls","266"],["ليبيريا","lr","231"],["ليبيا","ly","218"],["ليختنشتاين","li","423"],["ليتوانيا","lt","370"],["لوكسومبرغ","lu","352"],["مكاو","mo","853"],["مقدونيا الشمالية","mk","389"],["مدغشقر","mg","261"],["ملاوي","mw","265"],["ماليزيا","my","60"],["مالديف","mv","960"],["مالي","ml","223"],["مالطة","mt","356"],["جزر مارشال","mh","692"],["جزر المارتينيك","mq","596"],["موريتانيا","mr","222"],["موريشيوس","mu","230"],["مايوت","yt","262",1],["المكسيك","mx","52"],["ولايات ميكرونيسيا المتحدة","fm","691"],["مولدوفا","md","373"],["موناكو","mc","377"],["منغوليا","mn","976"],["الجبل الأسود","me","382"],["مونتسرات","ms","1",1,["664"]],["المغرب","ma","212",0],["موزمبيق","mz","258"],["ميانمار (بورما)","mm","95"],["ناميبيا","na","264"],["نورو","nr","674"],["نيبال","np","977"],["هولندا","nl","31"],["كاليدونيا الجديدة","nc","687"],["نيوزيلندا","nz","64"],["نيكاراغوا","ni","505"],["نيجر","ne","227"],["نيجيريا","ng","234"],["نييوي","nu","683"],["جزيرة نورفولك","nf","672"],["كوريا الشمالية","kp","850"],["جزر ماريانا الشمالية","mp","1670"],["نرويج","no","47",0],["سلطنة عمان","om","968"],["باكستان","pk","92"],["بالاو","pw","680"],["فلسطين","ps","970"],["بنما","pa","507"],["بابوا غينيا الجديدة","pg","675"],["باراغواي","py","595"],["بيرو","pe","51"],["الفيلبين","ph","63"],["بولندا","pl","48"],["برتغال","pt","351"],["بورتوريكو","pr","1",3,["787","939"]],["قطر","qa","974"],["روينيون","re","262",0],["رومانيا","ro","40"],["روسيا","ru","7",0],["رواندا","rw","250"],["سان بارتليمي","bl","590",1],["سانت هيلينا","sh","290"],["سانت كيتس ونيفيس","kn","1869"],["سانت لوسيا","lc","1",1,["758"]],["سانت مارتن","mf","590",2],["سان بيير ومكويلون","pm","508"],["سانت فنسينت والجرينادينز","vc","1",1,["784"]],["ساموا","ws","685"],["سان مارينو","sm","378"],["ساو تومي وبرينسيبي","st","239"],["المملكة العربية السعودية","sa","966"],["سنغال","sn","221"],["صربيا","rs","381"],["سيشيل","sc","248"],["سيراليون","sl","232"],["سنغافورة","sg","65"],["سانت مارتن","sx","1",1,["721"]],["سلوفاكيا","sk","421"],["سلوفينيا","si","386"],["جزر سليمان","sb","677"],["الصومال","so","252"],["جنوب افريقيا","za","27"],["كوريا الجنوبية","kr","82"],["جنوب السودان","ss","211"],["اسبانيا","es","34"],["سريلانكا","lk","94"],["السودان","sd","249"],["سورينام","sr","597"],["سفالبارد وجان ماين","sj","47",1],["سوازيلند","sz","268"],["سويد","se","46"],["سويسرا","ch","41"],["سوريا","sy","963"],["تايوان","tw","886"],["طاجيكستان","tj","992"],["تنزانيا","tz","255"],["تايلاند","th","66"],["تيمور الشرقية","tl","670"],["توغو","tg","228"],["توكيلو","tk","690"],["تونغا","to","676"],["ترينيداد وتوباغو","tt","1",1,["868"]],["تونس","tn","216"],["تركيا","tr","90"],["تركمانستان","tm","993"],["جزر توركس وكايكوس","tc","1649"],["توفالو","tv","688"],["جزر فيرجن التابعة للولايات المتحدة","vi","1",1,["340"]],["اوغندا","ug","256"],["اوكرانيا","ua","380"],["الإمارات العربيّة المتّحدة","ae","971"],["المملكة المتحدة","gb","44",0],["الولايات المتحدة الأمريكية","us","1",0],["الأوروغواي","uy","598"],["ازبكستان","uz","998"],["فانواتو","vu","678"],["الفاتيكان","va","39",1],["فنزويلا","ve","58"],["فيتنام","vn","84"],["والس وفوتونا","wf","681"],["لصحراء الغربية","eh","212",1],["اليمن","ye","967"],["زامبيا","zm","260"],["زيمبابوي","zw","263"],["جزر أولان","ax","358",1]],"english":[["افغانستان","af","93"],["ألبانيا","al","355"],["الجزائر","dz","213"],["ساموا الأمريكية","as","1",1,["684"]],["اندورا","ad","376"],["انغولا","ao","244"],["أنغويلا","ai","1",1,["264"]],["انتيغوا وبربودا","ag","1",1,["268"]],["الارجنتين","ar","54"],["ارمينيا","am","374"],["أروبا","aw","297"],["استراليا","au","61",0],["النمسا","at","43"],["أذربيجان","az","994"],["جزر البهاما","bs","1",1,["242"]],["البحرين","bh","973"],["بنغلاديش","bd","880"],["بربادوس","bb","1",1,["246"]],["بيلاروس","by","375"],["بلجيكا","be","32"],["بليز","bz","501"],["بنين","bj","229"],["جزر برمودا","bm","1",1,["441"]],["بوتان","bt","975"],["بوليفيا","bo","591"],["البوسنة والهرسك","ba","387"],["بوتسوانا","bw","267"],["البرازيل","br","55"],["الإقليم البريطاني في المحيط الهندي","io","246"],["جزر فيرجن البريطانية","vg","1",1,["284"]],["بروني","bn","673"],["بلغاريا","bg","359"],["بوركينا فاسو","bf","226"],["بوروندي","bi","257"],["كمبوديا","kh","855"],["كاميرون","cm","237"],["كندا","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["الرأس الاخضر","cv","238"],["هولندا الكاريبية","bq","599",1],["جزر كايمان","ky","1",1,["345"]],["جمهورية افريقيا الوسطى","cf","236"],["جمهورية تشاد","td","235"],["شيلي","cl","56"],["صين","cn","86"],["جزيرة كريسماس","cx","61",2],["جزر كوكوس (كيلينغ)","cc","61",1],["كولومبيا","co","57"],["جزر القمر","km","269"],["جمهورية الكونغو الديمقراطية","cd","243"],["جمهورية الكونغو","cg","242"],["جزر كوك","ck","682"],["كوستاريكا","cr","506"],["كوت ديفوار","ci","225"],["كرواتيا","hr","385"],["كوبا","cu","53"],["كوراساو","cw","599",0],["قبرص","cy","357"],["تشيك","cz","420"],["الدنمارك","dk","45"],["جيبوتي","dj","253"],["دومينيكا","dm","1767"],["جمهورية الدومينيكان","do","1",2,["809","829","849"]],["الاكوادور","ec","593"],["مصر","eg","20"],["السلفادور","sv","503"],["غينيا الاستوائية","gq","240"],["اريتريا","er","291"],["إستونيا","ee","372"],["اثيوبيا","et","251"],["جزر فوكلاند","fk","500"],["جزر فارو","fo","298"],["فيجي","fj","679"],["فنلندا","fi","358",0],["فرنسا","fr","33"],["غويانا الفرنسية","gf","594"],["بولينيزيا الفرنسية","pf","689"],["غابون","ga","241"],["غامبيا","gm","220"],["جورجيا","ge","995"],["المانيا","de","49"],["غانا","gh","233"],["مستعمرة جبل طارق","gi","350"],["يونان","gr","30"],["غرينلاند","gl","299"],["غرينادا","gd","1473"],["غوادلوب","gp","590",0],["غوام","gu","1",1,["671"]],["غواتيمالا","gt","502"],["غيرنزي","gg","44",1,[1481]],["غينيا","gn","224"],["غينيا بيساو","gw","245"],["غيانا","gy","592"],["هايتي","ht","509"],["هندوراس","hn","504"],["هونغ كونغ","hk","852"],["هنغاريا","hu","36"],["ايسلندا","is","354"],["الهند","in","91"],["اندونيسيا","id","62"],["ايران","ir","98"],["العراق","iq","964"],["جمهورية إيرلندا","ie","353"],["جزيرة مان","im","44",2,[1624]],["ايطاليا","it","39",0],["جامايكا","jm","1",1,["876"]],["اليابان","jp","81"],["جيرسي","je","44",3,[1534]],["الأردن","jo","962"],["كازاخستان","kz","7",1],["كينيا","ke","254"],["كيريباس","ki","686"],["كوسوفو","xk","383"],["الكويت","kw","965"],["قيرغيزستان","kg","996"],["لاوس","la","856"],["لاتفيا","lv","371"],["لبنان","lb","961"],["ليسوتو","ls","266"],["ليبيريا","lr","231"],["ليبيا","ly","218"],["ليختنشتاين","li","423"],["ليتوانيا","lt","370"],["لوكسومبرغ","lu","352"],["مكاو","mo","853"],["مقدونيا الشمالية","mk","389"],["مدغشقر","mg","261"],["ملاوي","mw","265"],["ماليزيا","my","60"],["مالديف","mv","960"],["مالي","ml","223"],["مالطة","mt","356"],["جزر مارشال","mh","692"],["جزر المارتينيك","mq","596"],["موريتانيا","mr","222"],["موريشيوس","mu","230"],["مايوت","yt","262",1],["المكسيك","mx","52"],["ولايات ميكرونيسيا المتحدة","fm","691"],["مولدوفا","md","373"],["موناكو","mc","377"],["منغوليا","mn","976"],["الجبل الأسود","me","382"],["مونتسرات","ms","1",1,["664"]],["المغرب","ma","212",0],["موزمبيق","mz","258"],["ميانمار (بورما)","mm","95"],["ناميبيا","na","264"],["نورو","nr","674"],["نيبال","np","977"],["هولندا","nl","31"],["كاليدونيا الجديدة","nc","687"],["نيوزيلندا","nz","64"],["نيكاراغوا","ni","505"],["نيجر","ne","227"],["نيجيريا","ng","234"],["نييوي","nu","683"],["جزيرة نورفولك","nf","672"],["كوريا الشمالية","kp","850"],["جزر ماريانا الشمالية","mp","1670"],["نرويج","no","47",0],["سلطنة عمان","om","968"],["باكستان","pk","92"],["بالاو","pw","680"],["فلسطين","ps","970"],["بنما","pa","507"],["بابوا غينيا الجديدة","pg","675"],["باراغواي","py","595"],["بيرو","pe","51"],["الفيلبين","ph","63"],["بولندا","pl","48"],["برتغال","pt","351"],["بورتوريكو","pr","1",3,["787","939"]],["قطر","qa","974"],["روينيون","re","262",0],["رومانيا","ro","40"],["روسيا","ru","7",0],["رواندا","rw","250"],["سان بارتليمي","bl","590",1],["سانت هيلينا","sh","290"],["سانت كيتس ونيفيس","kn","1869"],["سانت لوسيا","lc","1",1,["758"]],["سانت مارتن","mf","590",2],["سان بيير ومكويلون","pm","508"],["سانت فنسينت والجرينادينز","vc","1",1,["784"]],["ساموا","ws","685"],["سان مارينو","sm","378"],["ساو تومي وبرينسيبي","st","239"],["المملكة العربية السعودية","sa","966"],["سنغال","sn","221"],["صربيا","rs","381"],["سيشيل","sc","248"],["سيراليون","sl","232"],["سنغافورة","sg","65"],["سانت مارتن","sx","1",1,["721"]],["سلوفاكيا","sk","421"],["سلوفينيا","si","386"],["جزر سليمان","sb","677"],["الصومال","so","252"],["جنوب افريقيا","za","27"],["كوريا الجنوبية","kr","82"],["جنوب السودان","ss","211"],["اسبانيا","es","34"],["سريلانكا","lk","94"],["السودان","sd","249"],["سورينام","sr","597"],["سفالبارد وجان ماين","sj","47",1],["سوازيلند","sz","268"],["سويد","se","46"],["سويسرا","ch","41"],["سوريا","sy","963"],["تايوان","tw","886"],["طاجيكستان","tj","992"],["تنزانيا","tz","255"],["تايلاند","th","66"],["تيمور الشرقية","tl","670"],["توغو","tg","228"],["توكيلو","tk","690"],["تونغا","to","676"],["ترينيداد وتوباغو","tt","1",1,["868"]],["تونس","tn","216"],["تركيا","tr","90"],["تركمانستان","tm","993"],["جزر توركس وكايكوس","tc","1649"],["توفالو","tv","688"],["جزر فيرجن التابعة للولايات المتحدة","vi","1",1,["340"]],["اوغندا","ug","256"],["اوكرانيا","ua","380"],["الإمارات العربيّة المتّحدة","ae","971"],["المملكة المتحدة","gb","44",0],["الولايات المتحدة الأمريكية","us","1",0],["الأوروغواي","uy","598"],["ازبكستان","uz","998"],["فانواتو","vu","678"],["الفاتيكان","va","39",1],["فنزويلا","ve","58"],["فيتنام","vn","84"],["والس وفوتونا","wf","681"],["لصحراء الغربية","eh","212",1],["اليمن","ye","967"],["زامبيا","zm","260"],["زيمبابوي","zw","263"],["جزر أولان","ax","358",1]]}

    if(localStorage.getItem('language')==='ar'){
      this.allCountries =countryData.arabic;
    } else{
      this.allCountries = countryData.english;
    }
  }
}

CountryCode.ɵfac = i0.ɵɵngDeclareFactory({
  minVersion: "12.0.0",
  version: "13.3.1",
  ngImport: i0,
  type: CountryCode,
  deps: [],
  target: i0.ɵɵFactoryTarget.Injectable
});
CountryCode.ɵprov = i0.ɵɵngDeclareInjectable({
  minVersion: "12.0.0",
  version: "13.3.1",
  ngImport: i0,
  type: CountryCode
});
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: CountryCode, decorators: [{
    type: Injectable
  }]
});

var SearchCountryField;
(function (SearchCountryField) {
  SearchCountryField["DialCode"] = "dialCode";
  SearchCountryField["Iso2"] = "iso2";
  SearchCountryField["Name"] = "name";
  SearchCountryField["All"] = "all";
})(SearchCountryField || (SearchCountryField = {}));

/*
We use "control: any" instead of "control: FormControl" to silence:
"Property 'nativeElement' does not exist on type 'FormControl'".
This happens because I've expanded control with nativeElement via
'NativeElementInjectorDirective' to get an access to the element.
More about this approach and reasons for this:
https://github.com/angular/angular/issues/18025
https://stackoverflow.com/a/54075119/1617590
*/
const phoneNumberValidator = (control) => {
  if (!control.value) {
    return;
  }
  // Find <input> inside injected nativeElement and get its "id".
  const el = control.nativeElement;
  const inputBox = el
    ? el.querySelector('input[type="tel"]')
    : undefined;
  if (inputBox) {
    const id = inputBox.id;
    const isCheckValidation = inputBox.getAttribute('validation');
    if (isCheckValidation === 'true') {
      const isRequired = control.errors && control.errors.required === true;
      const error = {validatePhoneNumber: {valid: false}};
      inputBox.setCustomValidity('Invalid field.');
      let number;
      try {
        number = lpn.PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
      } catch (e) {
        if (isRequired) {
          return error;
        } else {
          inputBox.setCustomValidity('');
        }
      }
      if (control.value) {
        // @ts-ignore
        if (!number) {
          return error;
        } else {
          if (!lpn.PhoneNumberUtil.getInstance().isValidNumberForRegion(number, control.value.countryCode)) {
            return error;
          } else {
            inputBox.setCustomValidity('');
          }
        }
      }
    } else if (isCheckValidation === 'false') {
      inputBox.setCustomValidity('');
      control.clearValidators();
    }
  }
  return;
};

var PhoneNumberFormat;
(function (PhoneNumberFormat) {
  PhoneNumberFormat["International"] = "INTERNATIONAL";
  PhoneNumberFormat["National"] = "NATIONAL";
})(PhoneNumberFormat || (PhoneNumberFormat = {}));

/*
"Property 'nativeElement' does not exist on type 'FormControl'".
'NativeElementInjectorDirective' injects nativeElement to each control,
so we can access it from inside validator for example.
More about this approach and reasons for this:
https://github.com/angular/angular/issues/18025
https://stackoverflow.com/a/54075119/1617590
*/
class NativeElementInjectorDirective {
  constructor(controlDir, host) {
    this.controlDir = controlDir;
    this.host = host;
  }

  ngOnInit() {
    if (this.controlDir.control) {
      // @ts-ignore
      this.controlDir.control['nativeElement'] = this.host.nativeElement;
    }
  }
}

NativeElementInjectorDirective.ɵfac = i0.ɵɵngDeclareFactory({
  minVersion: "12.0.0",
  version: "13.3.1",
  ngImport: i0,
  type: NativeElementInjectorDirective,
  deps: [{token: i4.NgControl}, {token: i0.ElementRef}],
  target: i0.ɵɵFactoryTarget.Directive
});
NativeElementInjectorDirective.ɵdir = i0.ɵɵngDeclareDirective({
  minVersion: "12.0.0",
  version: "13.3.1",
  type: NativeElementInjectorDirective,
  selector: "[ngModel], [formControl], [formControlName]",
  ngImport: i0
});
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: NativeElementInjectorDirective, decorators: [{
    type: Directive,
    args: [{
      // tslint:disable-next-line: directive-selector
      selector: '[ngModel], [formControl], [formControlName]',
    }]
  }], ctorParameters: function () {
    return [{type: i4.NgControl}, {type: i0.ElementRef}];
  }
});

class NgxIntlTelInputComponent {
  constructor(countryCodeData) {
    this.countryCodeData = countryCodeData;
    this.value = '';
    this.preferredCountries = [];
    this.enablePlaceholder = true;
    this.numberFormat = PhoneNumberFormat.International;
    this.cssClass = 'form-control';
    this.onlyCountries = [];
    this.enableAutoCountrySelect = true;
    this.searchCountryFlag = false;
    this.searchCountryField = [SearchCountryField.All];
    this.searchCountryPlaceholder = 'Search Country';
    this.selectFirstCountry = true;
    this.phoneValidation = true;
    this.inputId = 'phone';
    this.separateDialCode = false;
    this.countryChange = new EventEmitter();
    this.selectedCountry = {
      areaCodes: undefined,
      dialCode: '',
      htmlId: '',
      flagClass: '',
      iso2: '',
      name: '',
      placeHolder: '',
      priority: 0,
    };
    this.phoneNumber = '';
    this.allCountries = [];
    this.preferredCountriesInDropDown = [];
    // Has to be 'any' to prevent a need to install @types/google-libphonenumber by the package user...
    this.phoneUtil = lpn.PhoneNumberUtil.getInstance();
    this.disabled = false;
    this.errors = ['Phone number is required.'];
    this.countrySearchText = '';
    this.onTouched = () => {
    };
    this.propagateChange = (_) => {
    };
    // If this is not set, ngx-bootstrap will try to use the bs3 CSS (which is not what we've embedded) and will
    // Add the wrong classes and such
    setTheme('bs4');
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges(changes) {
    const selectedISO = changes['selectedCountryISO'];
    if (this.allCountries &&
      selectedISO &&
      selectedISO.currentValue !== selectedISO.previousValue) {
      this.updateSelectedCountry();
    }
    if (changes['preferredCountries']) {
      this.updatePreferredCountries();
    }
    this.checkSeparateDialCodeStyle();
  }

  /*
      This is a wrapper method to avoid calling this.ngOnInit() in writeValue().
      Ref: http://codelyzer.com/rules/no-life-cycle-call/
  */
  init() {
    this.fetchCountryData();
    if (this.preferredCountries.length) {
      this.updatePreferredCountries();
    }
    if (this.onlyCountries.length) {
      this.allCountries = this.allCountries.filter((c) => this.onlyCountries.includes(c.iso2));
    }
    if (this.selectFirstCountry) {
      if (this.preferredCountriesInDropDown.length) {
        this.setSelectedCountry(this.preferredCountriesInDropDown[0]);
      } else {
        this.setSelectedCountry(this.allCountries[0]);
      }
    }
    this.updateSelectedCountry();
    this.checkSeparateDialCodeStyle();
  }

  setSelectedCountry(country) {
    this.selectedCountry = country;
    this.countryChange.emit(country);
  }

  /**
   * Search country based on country name, iso2, dialCode or all of them.
   */
  searchCountry() {
    if (!this.countrySearchText) {
      this.countryList.nativeElement
        .querySelector('.iti__country-list li')
        .scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest',
        });
      return;
    }
    const countrySearchTextLower = this.countrySearchText.toLowerCase();
    // @ts-ignore
    const country = this.allCountries.filter((c) => {
      if (this.searchCountryField.indexOf(SearchCountryField.All) > -1) {
        // Search in all fields
        if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
          return c;
        }
        if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
          return c;
        }
        if (c.dialCode.startsWith(this.countrySearchText)) {
          return c;
        }
        if (this._normaliseArabic(c.name).includes(this._normaliseArabic(countrySearchTextLower))) {
          return c;
        }
      } else {
        // Or search by specific SearchCountryField(s)
        if (this.searchCountryField.indexOf(SearchCountryField.Iso2) > -1) {
          if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
            return c;
          }
        }
        if (this.searchCountryField.indexOf(SearchCountryField.Name) > -1) {
          if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
            return c;
          }
        }
        if (this.searchCountryField.indexOf(SearchCountryField.DialCode) > -1) {
          if (c.dialCode.startsWith(this.countrySearchText)) {
            return c;
          }
        }
      }
    });
    if (country.length > 0) {
      const el = this.countryList.nativeElement.querySelector('#' + country[0].htmlId);
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest',
        });
      }
    }
    this.checkSeparateDialCodeStyle();
  }

  _normaliseArabic(input) {
    return input
      .replaceAll('\u0610', '') //ARABIC SIGN SALLALLAHOU ALAYHE WA SALLAM
      .replaceAll('\u0611', '') //ARABIC SIGN ALAYHE ASSALLAM
      .replaceAll('\u0612', '') //ARABIC SIGN RAHMATULLAH ALAYHE
      .replaceAll('\u0613', '') //ARABIC SIGN RADI ALLAHOU ANHU
      .replaceAll('\u0614', '') //ARABIC SIGN TAKHALLUS

      //Remove koranic anotation
      .replaceAll('\u0615', '') //ARABIC SMALL HIGH TAH
      .replaceAll(
        '\u0616', '') //ARABIC SMALL HIGH LIGATURE ALEF WITH LAM WITH YEH
      .replaceAll('\u0617', '') //ARABIC SMALL HIGH ZAIN
      .replaceAll('\u0618', '') //ARABIC SMALL FATHA
      .replaceAll('\u0619', '') //ARABIC SMALL DAMMA
      .replaceAll('\u061A', '') //ARABIC SMALL KASRA
      .replaceAll('\u06D6',
        '') //ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA
      .replaceAll('\u06D7',
        '') //ARABIC SMALL HIGH LIGATURE QAF WITH LAM WITH ALEF MAKSURA
      .replaceAll('\u06D8', '') //ARABIC SMALL HIGH MEEM INITIAL FORM
      .replaceAll('\u06D9', '') //ARABIC SMALL HIGH LAM ALEF
      .replaceAll('\u06DA', '') //ARABIC SMALL HIGH JEEM
      .replaceAll('\u06DB', '') //ARABIC SMALL HIGH THREE DOTS
      .replaceAll('\u06DC', '') //ARABIC SMALL HIGH SEEN
      .replaceAll('\u06DD', '') //ARABIC END OF AYAH
      .replaceAll('\u06DE', '') //ARABIC START OF RUB EL HIZB
      .replaceAll('\u06DF', '') //ARABIC SMALL HIGH ROUNDED ZERO
      .replaceAll('\u06E0', '') //ARABIC SMALL HIGH UPRIGHT RECTANGULAR ZERO
      .replaceAll('\u06E1', '') //ARABIC SMALL HIGH DOTLESS HEAD OF KHAH
      .replaceAll('\u06E2', '') //ARABIC SMALL HIGH MEEM ISOLATED FORM
      .replaceAll('\u06E3', '') //ARABIC SMALL LOW SEEN
      .replaceAll('\u06E4', '') //ARABIC SMALL HIGH MADDA
      .replaceAll('\u06E5', '') //ARABIC SMALL WAW
      .replaceAll('\u06E6', '') //ARABIC SMALL YEH
      .replaceAll('\u06E7', '') //ARABIC SMALL HIGH YEH
      .replaceAll('\u06E8', '') //ARABIC SMALL HIGH NOON
      .replaceAll('\u06E9', '') //ARABIC PLACE OF SAJDAH
      .replaceAll('\u06EA', '') //ARABIC EMPTY CENTRE LOW STOP
      .replaceAll('\u06EB', '') //ARABIC EMPTY CENTRE HIGH STOP
      .replaceAll('\u06EC', '') //ARABIC ROUNDED HIGH STOP WITH FILLED CENTRE
      .replaceAll('\u06ED', '') //ARABIC SMALL LOW MEEM

      //Remove tatweel
      .replaceAll('\u0640', '')

      //Remove tashkeel
      .replaceAll('\u064B', '') //ARABIC FATHATAN
      .replaceAll('\u064C', '') //ARABIC DAMMATAN
      .replaceAll('\u064D', '') //ARABIC KASRATAN
      .replaceAll('\u064E', '') //ARABIC FATHA
      .replaceAll('\u064F', '') //ARABIC DAMMA
      .replaceAll('\u0650', '') //ARABIC KASRA
      .replaceAll('\u0651', '') //ARABIC SHADDA
      .replaceAll('\u0652', '') //ARABIC SUKUN
      .replaceAll('\u0653', '') //ARABIC MADDAH ABOVE
      .replaceAll('\u0654', '') //ARABIC HAMZA ABOVE
      .replaceAll('\u0655', '') //ARABIC HAMZA BELOW
      .replaceAll('\u0656', '') //ARABIC SUBSCRIPT ALEF
      .replaceAll('\u0657', '') //ARABIC INVERTED DAMMA
      .replaceAll('\u0658', '') //ARABIC MARK NOON GHUNNA
      .replaceAll('\u0659', '') //ARABIC ZWARAKAY
      .replaceAll('\u065A', '') //ARABIC VOWEL SIGN SMALL V ABOVE
      .replaceAll('\u065B', '') //ARABIC VOWEL SIGN INVERTED SMALL V ABOVE
      .replaceAll('\u065C', '') //ARABIC VOWEL SIGN DOT BELOW
      .replaceAll('\u065D', '') //ARABIC REVERSED DAMMA
      .replaceAll('\u065E', '') //ARABIC FATHA WITH TWO DOTS
      .replaceAll('\u065F', '') //ARABIC WAVY HAMZA BELOW
      .replaceAll('\u0670', '') //ARABIC LETTER SUPERSCRIPT ALEF

      //Replace Waw Hamza Above by Waw
      .replaceAll('\u0624', '\u0648')

      //Replace Ta Marbuta by Ha
      .replaceAll('\u0629', '\u0647')

      //Replace Ya
      // and Ya Hamza Above by Alif Maksura
      .replaceAll('\u064A', '\u0649')
      .replaceAll('\u0626', '\u0649')

      // Replace Alifs with Hamza Above/Below
      // and with Madda Above by Alif
      .replaceAll('\u0622', '\u0627')
      .replaceAll('\u0623', '\u0627')
      .replaceAll('\u0625', '\u0627');

  }


  onPhoneNumberChange() {
    let countryCode;
    // Handle the case where the user sets the value programatically based on a persisted ChangeData obj.
    if (this.phoneNumber && typeof this.phoneNumber === 'object') {
      const numberObj = this.phoneNumber;
      this.phoneNumber = numberObj.number;
      countryCode = numberObj.countryCode;
    }
    this.value = this.phoneNumber;
    countryCode = countryCode || this.selectedCountry.iso2;
    // @ts-ignore
    const number = this.getParsedNumber(this.phoneNumber, countryCode);
    // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
    if (this.enableAutoCountrySelect) {
      countryCode =
        number && number.getCountryCode()
          // @ts-ignore
          ? this.getCountryIsoCode(number.getCountryCode(), number)
          : this.selectedCountry.iso2;
      if (countryCode && countryCode !== this.selectedCountry.iso2) {
        const newCountry = this.allCountries
          .sort((a, b) => {
            return a.priority - b.priority;
          })
          .find((c) => c.iso2 === countryCode);
        if (newCountry) {
          this.selectedCountry = newCountry;
        }
      }
    }
    countryCode = countryCode ? countryCode : this.selectedCountry.iso2;
    this.checkSeparateDialCodeStyle();
    if (!this.value) {
      // Reason: avoid https://stackoverflow.com/a/54358133/1617590
      // tslint:disable-next-line: no-null-keyword
      // @ts-ignore
      this.propagateChange(null);
    } else {
      const intlNo = number
        ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL)
        : '';
      // parse phoneNumber if separate dial code is needed
      if (this.separateDialCode && intlNo) {
        this.value = this.removeDialCode(intlNo);
      }
      this.propagateChange({
        number: this.value,
        internationalNumber: intlNo,
        nationalNumber: number
          ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL)
          : '',
        e164Number: number
          ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.E164)
          : '',
        countryCode: countryCode.toUpperCase(),
        dialCode: '+' + this.selectedCountry.dialCode,
      });
    }
  }

  onCountrySelect(country, el) {
    this.setSelectedCountry(country);
    this.checkSeparateDialCodeStyle();
    if (this.phoneNumber && this.phoneNumber.length > 0) {
      this.value = this.phoneNumber;
      const number = this.getParsedNumber(this.phoneNumber, this.selectedCountry.iso2);
      const intlNo = number
        ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL)
        : '';
      // parse phoneNumber if separate dial code is needed
      if (this.separateDialCode && intlNo) {
        this.value = this.removeDialCode(intlNo);
      }
      this.propagateChange({
        number: this.value,
        internationalNumber: intlNo,
        nationalNumber: number
          ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL)
          : '',
        e164Number: number
          ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.E164)
          : '',
        countryCode: this.selectedCountry.iso2.toUpperCase(),
        dialCode: '+' + this.selectedCountry.dialCode,
      });
    } else {
      // Reason: avoid https://stackoverflow.com/a/54358133/1617590
      // tslint:disable-next-line: no-null-keyword
      // @ts-ignore
      this.propagateChange(null);
    }
    el.focus();
  }

  onInputKeyPress(event) {
    const allowedChars = /[0-9\+\-\(\)\ ]/;
    const allowedCtrlChars = /[axcv]/; // Allows copy-pasting
    const allowedOtherKeys = [
      'ArrowLeft',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown',
      'Home',
      'End',
      'Insert',
      'Delete',
      'Backspace',
    ];
    if (!allowedChars.test(event.key) &&
      !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
      !allowedOtherKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }

  writeValue(obj) {
    if (obj === undefined) {
      this.init();
    }
    this.phoneNumber = obj;
    setTimeout(() => {
      this.onPhoneNumberChange();
    }, 1);
  }

  resolvePlaceholder() {
    let placeholder = '';
    if (this.customPlaceholder) {
      placeholder = this.customPlaceholder;
    } else if (this.selectedCountry.placeHolder) {
      placeholder = this.selectedCountry.placeHolder;
      if (this.separateDialCode) {
        placeholder = this.removeDialCode(placeholder);
      }
    }
    return placeholder;
  }

  /* --------------------------------- Helpers -------------------------------- */
  /**
   * Returns parse PhoneNumber object.
   * @param phoneNumber string
   * @param countryCode string
   */
  getParsedNumber(phoneNumber, countryCode) {
    let number;
    try {
      number = this.phoneUtil.parse(phoneNumber, countryCode.toUpperCase());
    } catch (e) {
    }
    // @ts-ignore
    return number;
  }

  /**
   * Adjusts input alignment based on the dial code presentation style.
   */
  checkSeparateDialCodeStyle() {
    if (this.separateDialCode && this.selectedCountry) {
      const cntryCd = this.selectedCountry.dialCode;
      this.separateDialCodeClass =
        'separate-dial-code iti-sdc-' + (cntryCd.length + 1);
    } else {
      this.separateDialCodeClass = '';
    }
  }

  /**
   * Cleans dialcode from phone number string.
   * @param phoneNumber string
   */
  removeDialCode(phoneNumber) {
    const number = this.getParsedNumber(phoneNumber, this.selectedCountry.iso2);
    phoneNumber = this.phoneUtil.format(number, lpn.PhoneNumberFormat[this.numberFormat]);
    if (phoneNumber.startsWith('+') && this.separateDialCode) {
      phoneNumber = phoneNumber.substr(phoneNumber.indexOf(' ') + 1);
    }
    return phoneNumber;
  }

  /**
   * Sifts through all countries and returns iso code of the primary country
   * based on the number provided.
   * @param countryCode country code in number format
   * @param number PhoneNumber object
   */
  getCountryIsoCode(countryCode, number) {
    // Will use this to match area code from the first numbers
    // @ts-ignore
    const rawNumber = number['values_']['2'].toString();
    // List of all countries with countryCode (can be more than one. e.x. US, CA, DO, PR all have +1 countryCode)
    const countries = this.allCountries.filter((c) => c.dialCode === countryCode.toString());
    // Main country is the country, which has no areaCodes specified in country-code.ts file.
    const mainCountry = countries.find((c) => c.areaCodes === undefined);
    // Secondary countries are all countries, which have areaCodes specified in country-code.ts file.
    const secondaryCountries = countries.filter((c) => c.areaCodes !== undefined);
    let matchedCountry = mainCountry ? mainCountry.iso2 : undefined;
    /*
        Iterate over each secondary country and check if nationalNumber starts with any of areaCodes available.
        If no matches found, fallback to the main country.
    */
    secondaryCountries.forEach((country) => {
      // @ts-ignore
      country.areaCodes.forEach((areaCode) => {
        if (rawNumber.startsWith(areaCode)) {
          matchedCountry = country.iso2;
        }
      });
    });
    return matchedCountry;
  }

  /**
   * Gets formatted example phone number from phoneUtil.
   * @param countryCode string
   */
  getPhoneNumberPlaceHolder(countryCode) {
    try {
      return this.phoneUtil.format(this.phoneUtil.getExampleNumber(countryCode), lpn.PhoneNumberFormat[this.numberFormat]);
    } catch (e) {
      // @ts-ignore
      return e;
    }
  }

  /**
   * Clearing the list to avoid duplicates (https://github.com/webcat12345/ngx-intl-tel-input/issues/248)
   */
  fetchCountryData() {
    this.allCountries = [];
    this.countryCodeData.allCountries.forEach((c) => {
      const country = {
        name: c[0].toString(),
        iso2: c[1].toString(),
        dialCode: c[2].toString(),
        priority: +c[3] || 0,
        areaCodes: c[4] || undefined,
        htmlId: `iti-0__item-${c[1].toString()}`,
        flagClass: `iti__${c[1].toString().toLocaleLowerCase()}`,
        placeHolder: '',
      };
      if (this.enablePlaceholder) {
        country.placeHolder = this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
      }
      this.allCountries.push(country);
    });
  }

  /**
   * Populates preferredCountriesInDropDown with prefferred countries.
   */
  updatePreferredCountries() {
    if (this.preferredCountries.length) {
      this.preferredCountriesInDropDown = [];
      this.preferredCountries.forEach((iso2) => {
        const preferredCountry = this.allCountries.filter((c) => {
          return c.iso2 === iso2;
        });
        this.preferredCountriesInDropDown.push(preferredCountry[0]);
      });
    }
  }

  /**
   * Updates selectedCountry.
   */
  updateSelectedCountry() {
    if (this.selectedCountryISO) {
      // @ts-ignore
      this.selectedCountry = this.allCountries.find((c) => {
        return c.iso2.toLowerCase() === this.selectedCountryISO.toLowerCase();
      });
      if (this.selectedCountry) {
        if (this.phoneNumber) {
          this.onPhoneNumberChange();
        } else {
          // Reason: avoid https://stackoverflow.com/a/54358133/1617590
          // tslint:disable-next-line: no-null-keyword
          // @ts-ignore
          this.propagateChange(null);
        }
      }
    }
  }
}

NgxIntlTelInputComponent.ɵfac = i0.ɵɵngDeclareFactory({
  minVersion: "12.0.0",
  version: "13.3.1",
  ngImport: i0,
  type: NgxIntlTelInputComponent,
  deps: [{token: CountryCode}],
  target: i0.ɵɵFactoryTarget.Component
});
NgxIntlTelInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({
  minVersion: "12.0.0",
  version: "13.3.1",
  type: NgxIntlTelInputComponent,
  selector: "ngx-intl-tel-input",
  inputs: {
    value: "value",
    preferredCountries: "preferredCountries",
    enablePlaceholder: "enablePlaceholder",
    customPlaceholder: "customPlaceholder",
    numberFormat: "numberFormat",
    cssClass: "cssClass",
    onlyCountries: "onlyCountries",
    enableAutoCountrySelect: "enableAutoCountrySelect",
    searchCountryFlag: "searchCountryFlag",
    searchCountryField: "searchCountryField",
    searchCountryPlaceholder: "searchCountryPlaceholder",
    maxLength: "maxLength",
    selectFirstCountry: "selectFirstCountry",
    selectedCountryISO: "selectedCountryISO",
    phoneValidation: "phoneValidation",
    inputId: "inputId",
    separateDialCode: "separateDialCode"
  },
  outputs: {countryChange: "countryChange"},
  providers: [
    CountryCode,
    {
      provide: NG_VALUE_ACCESSOR,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => NgxIntlTelInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useValue: phoneNumberValidator,
      multi: true,
    },
  ],
  viewQueries: [{propertyName: "countryList", first: true, predicate: ["countryList"], descendants: true}],
  usesOnChanges: true,
  ngImport: i0,
  template: "<div class=\"iti iti--allow-dropdown\"\n\t[ngClass]=\"separateDialCodeClass\">\n\t<div class=\"iti__flag-container\"\n\t\tdropdown\n\t\t[ngClass]=\"{'disabled': disabled}\"\n\t\t[isDisabled]=\"disabled\">\n\t\t<div class=\"iti__selected-flag dropdown-toggle\"\n\t\t\tdropdownToggle>\n\t\t\t<div class=\"iti__flag\"\n\t\t\t\t[ngClass]=\"selectedCountry?.flagClass || ''\"></div>\n\t\t\t<div *ngIf=\"separateDialCode\"\n\t\t\t\tclass=\"selected-dial-code\">+{{selectedCountry.dialCode}}</div>\n\t\t\t<div class=\"iti__arrow\"></div>\n\t\t</div>\n\t\t<div *dropdownMenu\n\t\t\tclass=\"dropdown-menu country-dropdown\">\n\t\t\t<div class=\"search-container\"\n\t\t\t\t*ngIf=\"searchCountryFlag && searchCountryField\">\n\t\t\t\t<input id=\"country-search-box\"\n\t\t\t\t\t[(ngModel)]=\"countrySearchText\"\n\t\t\t\t\t(keyup)=\"searchCountry()\"\n\t\t\t\t\t(click)=\"$event.stopPropagation()\"\n\t\t\t\t\t[placeholder]=\"searchCountryPlaceholder\"\n\t\t\t\t\tautofocus>\n\t\t\t</div>\n\t\t\t<ul class=\"iti__country-list\"\n\t\t\t\t#countryList>\n\t\t\t\t<li class=\"iti__country iti__preferred\"\n\t\t\t\t\t*ngFor=\"let country of preferredCountriesInDropDown\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId+'-preferred'\">\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\"\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"iti__divider\"\n\t\t\t\t\t*ngIf=\"preferredCountriesInDropDown?.length\"></li>\n\t\t\t\t<li class=\"iti__country iti__standard\"\n\t\t\t\t\t*ngFor=\"let country of allCountries\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId\">\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\"\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<input type=\"tel\"\n\t\t[id]=\"inputId\"\n\t\tautocomplete=\"off\"\n\t\t[ngClass]=\"cssClass\"\n\t\t(blur)=\"onTouched()\"\n\t\t(keypress)=\"onInputKeyPress($event)\"\n\t\t[(ngModel)]=\"phoneNumber\"\n\t\t(ngModelChange)=\"onPhoneNumberChange()\"\n\t\t[disabled]=\"disabled\"\n\t\t[placeholder]=\"resolvePlaceholder()\"\n\t\t[attr.maxLength]=\"maxLength\"\n\t\t[attr.validation]=\"phoneValidation\"\n\t\t#focusable>\n</div>\n",
  styles: [".dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle:after{display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=top],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}\n", "li.iti__country:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle:after{content:none}.iti__flag-container.disabled{cursor:default!important}.iti.iti--allow-dropdown .flag-container.disabled:hover .iti__selected-flag{background:none}.country-dropdown{border:1px solid #ccc;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container{position:relative}.search-container input{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list{position:relative;border:none}.iti input#country-search-box{padding-left:6px}.iti .selected-dial-code{margin-left:6px}.iti.separate-dial-code .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 .iti__selected-flag{width:93px}.iti.separate-dial-code input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 input{padding-left:98px}\n"],
  directives: [{type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"]}, {
    type: i3.BsDropdownDirective,
    selector: "[bsDropdown],[dropdown]",
    inputs: ["autoClose", "isAnimated", "insideClick", "isDisabled", "isOpen", "placement", "triggers", "container", "dropup"],
    outputs: ["onShown", "onHidden", "isOpenChange"],
    exportAs: ["bs-dropdown"]
  }, {
    type: i3.BsDropdownToggleDirective,
    selector: "[bsDropdownToggle],[dropdownToggle]",
    exportAs: ["bs-dropdown-toggle"]
  }, {type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"]}, {
    type: i3.BsDropdownMenuDirective,
    selector: "[bsDropdownMenu],[dropdownMenu]",
    exportAs: ["bs-dropdown-menu"]
  }, {
    type: i4.DefaultValueAccessor,
    selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]"
  }, {type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]"}, {
    type: i4.NgModel,
    selector: "[ngModel]:not([formControlName]):not([formControl])",
    inputs: ["name", "disabled", "ngModel", "ngModelOptions"],
    outputs: ["ngModelChange"],
    exportAs: ["ngModel"]
  }, {type: NativeElementInjectorDirective, selector: "[ngModel], [formControl], [formControlName]"}, {
    type: i2.NgForOf,
    selector: "[ngFor][ngForOf]",
    inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"]
  }]
});
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: NgxIntlTelInputComponent, decorators: [{
    type: Component,
    args: [{
      selector: 'ngx-intl-tel-input',
      providers: [
        CountryCode,
        {
          provide: NG_VALUE_ACCESSOR,
          // tslint:disable-next-line:no-forward-ref
          useExisting: forwardRef(() => NgxIntlTelInputComponent),
          multi: true,
        },
        {
          provide: NG_VALIDATORS,
          useValue: phoneNumberValidator,
          multi: true,
        },
      ],
      template: "<div class=\"iti iti--allow-dropdown\"\n\t[ngClass]=\"separateDialCodeClass\">\n\t<div class=\"iti__flag-container\"\n\t\tdropdown\n\t\t[ngClass]=\"{'disabled': disabled}\"\n\t\t[isDisabled]=\"disabled\">\n\t\t<div class=\"iti__selected-flag dropdown-toggle\"\n\t\t\tdropdownToggle>\n\t\t\t<div class=\"iti__flag\"\n\t\t\t\t[ngClass]=\"selectedCountry?.flagClass || ''\"></div>\n\t\t\t<div *ngIf=\"separateDialCode\"\n\t\t\t\tclass=\"selected-dial-code\">+{{selectedCountry.dialCode}}</div>\n\t\t\t<div class=\"iti__arrow\"></div>\n\t\t</div>\n\t\t<div *dropdownMenu\n\t\t\tclass=\"dropdown-menu country-dropdown\">\n\t\t\t<div class=\"search-container\"\n\t\t\t\t*ngIf=\"searchCountryFlag && searchCountryField\">\n\t\t\t\t<input id=\"country-search-box\"\n\t\t\t\t\t[(ngModel)]=\"countrySearchText\"\n\t\t\t\t\t(keyup)=\"searchCountry()\"\n\t\t\t\t\t(click)=\"$event.stopPropagation()\"\n\t\t\t\t\t[placeholder]=\"searchCountryPlaceholder\"\n\t\t\t\t\tautofocus>\n\t\t\t</div>\n\t\t\t<ul class=\"iti__country-list\"\n\t\t\t\t#countryList>\n\t\t\t\t<li class=\"iti__country iti__preferred\"\n\t\t\t\t\t*ngFor=\"let country of preferredCountriesInDropDown\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId+'-preferred'\">\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\"\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"iti__divider\"\n\t\t\t\t\t*ngIf=\"preferredCountriesInDropDown?.length\"></li>\n\t\t\t\t<li class=\"iti__country iti__standard\"\n\t\t\t\t\t*ngFor=\"let country of allCountries\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId\">\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\"\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<input type=\"tel\"\n\t\t[id]=\"inputId\"\n\t\tautocomplete=\"off\"\n\t\t[ngClass]=\"cssClass\"\n\t\t(blur)=\"onTouched()\"\n\t\t(keypress)=\"onInputKeyPress($event)\"\n\t\t[(ngModel)]=\"phoneNumber\"\n\t\t(ngModelChange)=\"onPhoneNumberChange()\"\n\t\t[disabled]=\"disabled\"\n\t\t[placeholder]=\"resolvePlaceholder()\"\n\t\t[attr.maxLength]=\"maxLength\"\n\t\t[attr.validation]=\"phoneValidation\"\n\t\t#focusable>\n</div>\n",
      styles: [".dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle:after{display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=top],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}\n", "li.iti__country:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle:after{content:none}.iti__flag-container.disabled{cursor:default!important}.iti.iti--allow-dropdown .flag-container.disabled:hover .iti__selected-flag{background:none}.country-dropdown{border:1px solid #ccc;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container{position:relative}.search-container input{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list{position:relative;border:none}.iti input#country-search-box{padding-left:6px}.iti .selected-dial-code{margin-left:6px}.iti.separate-dial-code .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 .iti__selected-flag{width:93px}.iti.separate-dial-code input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 input{padding-left:98px}\n"]
    }]
  }], ctorParameters: function () {
    return [{type: CountryCode}];
  }, propDecorators: {
    value: [{
      type: Input
    }], preferredCountries: [{
      type: Input
    }], enablePlaceholder: [{
      type: Input
    }], customPlaceholder: [{
      type: Input
    }], numberFormat: [{
      type: Input
    }], cssClass: [{
      type: Input
    }], onlyCountries: [{
      type: Input
    }], enableAutoCountrySelect: [{
      type: Input
    }], searchCountryFlag: [{
      type: Input
    }], searchCountryField: [{
      type: Input
    }], searchCountryPlaceholder: [{
      type: Input
    }], maxLength: [{
      type: Input
    }], selectFirstCountry: [{
      type: Input
    }], selectedCountryISO: [{
      type: Input
    }], phoneValidation: [{
      type: Input
    }], inputId: [{
      type: Input
    }], separateDialCode: [{
      type: Input
    }], countryChange: [{
      type: Output
    }], countryList: [{
      type: ViewChild,
      args: ['countryList']
    }]
  }
});

const dropdownModuleForRoot = BsDropdownModule.forRoot();

class NgxIntlTelInputModule {
}

NgxIntlTelInputModule.ɵfac = i0.ɵɵngDeclareFactory({
  minVersion: "12.0.0",
  version: "13.3.1",
  ngImport: i0,
  type: NgxIntlTelInputModule,
  deps: [],
  target: i0.ɵɵFactoryTarget.NgModule
});
NgxIntlTelInputModule.ɵmod = i0.ɵɵngDeclareNgModule({
  minVersion: "12.0.0",
  version: "13.3.1",
  ngImport: i0,
  type: NgxIntlTelInputModule,
  declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule, i3.BsDropdownModule],
  exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective]
});
NgxIntlTelInputModule.ɵinj = i0.ɵɵngDeclareInjector({
  minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: NgxIntlTelInputModule, imports: [[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    dropdownModuleForRoot,
  ]]
});
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: NgxIntlTelInputModule, decorators: [{
    type: NgModule,
    args: [{
      declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        dropdownModuleForRoot,
      ],
      exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
    }]
  }]
});

/*
 * Public API Surface of ngx-intl-tel-input
 */

/**
 * Generated bundle index. Do not edit.
 */

export {
  CountryISO,
  NativeElementInjectorDirective,
  NgxIntlTelInputComponent,
  NgxIntlTelInputModule,
  PhoneNumberFormat,
  SearchCountryField,
  dropdownModuleForRoot
};
//# sourceMappingURL=ngx-intl-tel-input.mjs.map