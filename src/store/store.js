/* eslint-disable */

import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectedComponents: [],
    academicDegree: '',
    name: '',
    surname: '',
    academicDegreeAfter: '',
    birthDate: '',
    birthPlace: '',
    country: '',
    city: '',
    zip: '',
    street: '',
    streetNumber: '',
    email: '',
    phone: '',
    mobile: '',
    maritalStatus: '',
    education: '',
    employmentStatus: '',
    employmentType: '',
    diagnosisMkch10: '',
    assignedDisability: '',
    ztpHolder: '',
    ztpsHolder: '',
    diagnosisBrief: '',
    academicDegrees: [
      {value: '', text: '-'},
      {value: 'Bc.', text: 'Bc.'},
      {value: 'Mgr.', text: 'Mgr.'},
      {value: 'Mgr. art.', text: 'Mgr. art.'},
      {value: 'Ing.', text: 'Ing.'},
      {value: 'Ing. arch.', text: 'Ing. arch.'},
      {value: 'MUDr.', text: 'MUDr.'},
      {value: 'MUVr.', text: 'MUVr.'},
      {value: 'RNDr', text: 'RNDr.'},
      {value: 'PharmDr.', text: 'PharmDr.'},
      {value: 'PhDr.', text: 'PhDr.'},
      {value: 'JUDr', text: 'JUDr.'},
      {value: 'PaeDr.', text: 'PaeDr.'},
      {value: 'ThDr.', text: 'ThDr.'}
    ],
    academicDegreesAfter: [
      {value: '', text: '-'},
      {value: 'PhD.', text: 'PhD.'},
      {value: 'ArtD.', text: 'ArtD.'},
      {value: 'ThLic.', text: 'ThLic.'},
      {value: 'MBA', text: 'MBA'},
      {value: 'DrSc.', text: 'DrSc.'},
      {value: 'CSc.', text: 'CSc.'}
    ],
    countries: [
      {value: '', text: 'Vyberte krajinu'},
      {value: 'Slovenská republika', text: 'Slovenská republika'},
      {value: 'Česká republika', text: 'Česká republika'},
      {value: 'Maďarsko', text: 'Maďarsko'},
      {value: 'Poľsko', text: 'Poľsko'}
    ],
    maritalStatuses: [
      {value: '', text: 'Vyberte rodinný stav'},
      {value: 'neplnoleté dieťa/študent', text: 'neplnoleté dieťa/študent'},
      {value: 'slobodný/á', text: 'slobodný/á'},
      {value: 'ženatý/vydatá', text: 'ženatý/vydatá'},
      {value: 'rozvedený/á', text: 'rozvedený/á'},
      {value: 'vdovec/vdova', text: 'vdovec/vdova'},
      {value: 'spolužitie s druhom/družkou', text: 'spolužitie s druhom/družkou'}
    ],
    educations: [
      {value: '', text: 'Vyberte vzdielanie'},
      {value: 'základné', text: 'základné'},
      {value: 'stredoškolské všeobecné', text: 'stredoškolské všeobecné'},
      {value: 'stredoškolské odborné', text: 'stredoškolské odborné'},
      {value: 'vysokoškolské I.stupen', text: 'vysokoškolské I.stupen'},
      {value: 'vysokoškolské II.stupen', text: 'vysokoškolské II.stupen'},
      {value: 'vysokoškolské III.stupen', text: 'vysokoškolské III.stupen'}
    ],
    employmentStatuses: [
      {value: '', text: 'Vyberte zamestnanie'},
      {value: 'verejný/neverejný sektor', text: 'verejný/neverejný sektor'},
      {value: 'podnikateľ/podnikateľka', text: 'podnikateľ/podnikateľka'},
      {value: 'živnostník/živnostníčka', text: 'živnostník/živnostníčka'},
      {value: 'evidovaný/á uchádzač/ka o zamestnanie', text: 'evidovaný/á uchádzač/ka o zamestnanie'},
      {value: 'neevidovaný/á uchádzač/ka o zamestnanie', text: 'neevidovaný/á uchádzač/ka o zamestnanie'},
      {value: 'invalidný dôchodca/dôchodkyňa', text: 'invalidný dôchodca/dôchodkyňa'},
      {value: 'starobný dôchodca/dôchodkyňa', text: 'starobný dôchodca/dôchodkyňa'}
    ],
    employmentTypes: [
      {value: '', text: 'Vyberte pracovno-právny vzťah'},
      {value: 'trvalý pracovný pomer', text: 'trvalý pracovný pomer'},
      {value: 'dočasný pracovný pomer', text: 'dočasný pracovný pomer'},
      {value: 'práca na dohodu', text: 'práca na dohodu'},
      {value: 'práca doma', text: 'práca doma'}
    ],
    components: {
      'TELESNÉ FUNKCIE': {
        'components': {
          'MENTÁLNE FUNKCIE': {
            'components': {
              'Globálne mentálne funkcie': {
                'components': {
                  'b110': 'Funkcie vedomia',
                  'b114': 'Orientačné funkcie',
                  'b117': 'Intelektuálne funkcie',
                  'b122': 'Globálne psychosociálne funkcie',
                  'b126': 'Funkcie temperamentu a osobnosti',
                  'b130': 'Funkcie energie a motivácie',
                  'b134': 'Funkcie spánku',
                  'b139': 'Inak špecifikované alebo nešpecifikované globálne mentálne funkcie'
                }
              },
              'Špecifické mentálne funkcie': {
                'components': {
                  'b140': 'Funkcie pozornosti',
                  'b144': 'Funkcie pamäti',
                  'b147': 'Psychomotorické funkcie',
                  'b152': 'Emocionálne funkcie',
                  'b156': 'Funkcie vnímania',
                  'b160': 'Myšlienkové funkcie',
                  'b164': 'Kognitívne funkcie vyšších úrovní',
                  'b167': 'Mentálne funkcie jazyka',
                  'b172': 'Funkcie počítania',
                  'b179': 'Mentálne funkcie tvorby komplexných pohybov',
                  'b180': 'Funkcie skúsenosti so sebou samým a s časom',
                  'b189': 'Inak špecifikované alebo nešpecifikované špecifické mentálne funkcie'
                }
              }
            }
          },
          'ZMYSLOVÉ FUNKCIE A BOLESŤ': {
            'components': {
              'Zrak a príbuzné funkcie': {
                'components': {
                  'b210': 'Funkcie zraku',
                  'b215': 'Funkcie štruktúr v okolí oka',
                  'b220': 'Pocity súvisiace s okom a štruktúrami v jeho okolí',
                  'b229': 'Zrak a iné príbuzné špecifikované alebo nešpecifikované funkcie'
                }
              },
              'Sluch a vestibulárne funkcie': {
                'components': {
                  'b230': 'Funkcie sluchu',
                  'b235': 'Funkcie vestibulárneho aparátu',
                  'b240': 'Funkcie súvisiace s funkciou počutia a vestibulárna funkcia',
                  'b249': 'Inak špecifikované a nešpecifikované funkcie sluchu a vestibulárneho aparátu'
                }
              },
              'Ďalšie zmyslové funkcie': {
                'components': {
                  'b250': 'Funkcie chuti',
                  'b255': 'Funkcie čuchu',
                  'b260': 'Proprioceptívne funkcie',
                  'b265': 'Funkcie hmatu',
                  'b270': 'Funkcie súvisiace s teplotou a inými stimulmi',
                  'b279': 'Inak špecifikované alebo  nešpecifikované ďalšie zmyslové funkcie'
                }
              },
              'Bolesť': {
                'components': {
                  'b280': 'Pocit bolesti',
                  'b289': 'Inak špecifikovaná alebo nešpecifikovaná bolesť',
                  'b298': 'Inak špecifikované zmyslové funkcie bolesti',
                  'b299': 'Nešpecifikované zmyslové funkcie bolesti'
                }
              }
            }
          },
          'HLASOVÉ A REČOVÉ FUNKCIE': {
            'components': {
              'b310': 'Hlasové funkcie',
              'b320': 'Funkcie artikulácie',
              'b330': 'Funkcie plynulosti a rytmu reči',
              'b340': 'Funkcie alternatívnej vokalizácie',
              'b398': 'Inak špecifikované hlasové a rečové funkcie',
              'b399': 'Nešpecifikované hlasové a rečové funkcie'
            }
          },
          'FUNKCIE KARDIOVASKULÁRNEHO, HEMATOLOGICKÉHO, IMUNITNÉHO A DÝCHACIEHO SYSTÉMU': {
            'components': {
              'Funkcie kardiovaskulárneho systému': {
                'components': {
                  'b410': 'Funkcie srdca',
                  'b415': 'Funkcie ciev',
                  'b420': 'Funkcie krvného tlaku',
                  'b429': 'Inak špecifikované a nešpecifikované funkcie kardiovaskulárneho systému'
                }
              },
              'Funkcie hematologického a imunitného systému': {
                'components': {
                  'b430': 'Funkcie hematologického systému',
                  'b435': 'Funkcie imunitného systému',
                  'b439': 'Inak špecifikované a nešpecifikované funkcie hematologického a imunitného systému'
                }
              },
              'Funkcie dýchacieho systému': {
                'components': {
                  'b440': 'Dýchacie funkcie',
                  'b445': 'Funkcie dýchacích svalov',
                  'b449': 'Inak špecifikované a nešpecifikované funkcie dýchacieho systému'
                }
              },
              'Ďalšie funkcie a pocity súvisiace s kardiovaskulárnym a dýchacím systémom': {
                'components': {
                  'b450': 'Ďalšie dýchacie funkcie',
                  'b455': 'Funkcie tolerancie voči telesným cvikom',
                  'b460': 'Pocity súvisiace s kardiovaskulárnymi a dýchacími funkciami',
                  'b469': 'Ďalšie funkcie a pocity, súvisiace s kardiovaskulárnym a dýchacím systémom inak   špecifikované a nešpecifikované',
                  'b498': 'Inak špecifikované funkcie kardiovaskulárneho, hematologického, imunitného a dýchacieho systému',
                  'b499': 'Nešpecifikované funkcie kardiovaskulárneho, hematologického, imunitného a dýchacieho systému'
                }
              }
            }
          },
          'FUNKCIE TRÁVIACEHO, METABOLICKÉHO A ENDOKRINNÉHO SYSTÉMU': {
            'components': {
              'Funkcie súvisiace s tráviacim systémom': {
                'components': {
                  'b510': 'Funkcie príjmu potravy',
                  'b515': 'Funkcie trávenia',
                  'b520': 'Funkcie asimilácie',
                  'b525': 'Defekačné funkcie',
                  'b530': 'Funkcie udržiavania hmotnosti',
                  'b535': 'Pocity súvisiace so systémom trávenia',
                  'b539': 'Inak špecifikované a nešpecifikované funkcie súvisiace so systémom trávenia'
                }
              },
              'Funkcie súvisiace s metabolizmom a s endokrinným systémom': {
                'components': {
                  'b540': 'Všeobecné funkcie metabolizmu',
                  'b545': 'Funkcie vodnej, minerálnej a elektrolytickej rovnováhy',
                  'b550': 'Funkcie termoregulácie',
                  'b555': 'Funkcie žliaz s vnútorným vylučovaním',
                  'b559': 'Inak špecifikované a nešpecifikované funkcie súvisiace s metabolizmom a systémom žliaz ś vnútorným vylučovaním',
                  'b598': 'Inak špecifikované funkcie tráviaceho, metabolického a endokrinného systému',
                  'b599': 'Nešpecifikované funkcie tráviaceho, metabolického a endokrinného systému'
                }
              }
            }
          },
          'GENITOURINÁRNE A REPRODUKČNÉ FUNKCIE': {
            'components': {
              'Funkcie súvisiace s močením': {
                'components': {
                  'b610': 'Funkcie vylučovania moču',
                  'b620': 'Funkcie súvisiace s močením',
                  'b630': 'Pocity spojené s funkciami močenia',
                  'b639': 'Inak špecifikované a nešpecifikované močové funkcie'
                }
              },
              'Pohlavné a reprodukčné funkcie': {
                'components': {
                  'b640': 'Sexuálne funkcie',
                  'b650': 'Menštruačné funkcie',
                  'b660': 'Rozmnožovacie funkcie',
                  'b670': 'Pocity spojené s pohlavnými, genitálnymi a reprodukčnými funkciami',
                  'b679': 'Inak špecifikované a nešpecifikované genitálne a reprodukčné(rozmnožovacie) funkcie',
                  'b698': 'Inak špecifikované genitourinárne a reprodukčné (rozmnožovacie) funkcie',
                  'b699': 'Nešpecifikované  genitourinárne a reprodukčné(rozmnožovacie) funkcie'
                }
              }
            }
          },
          'NEURO-MUSKULO-SKELETÁLNE FUNKCIE A FUNKCIE SÚVISIACE S POHYBOM': {
            'components': {
              'Funkcie kĺbov a kostí': {
                'components': {
                  'b710': 'Funkcie hybnosti kĺbov',
                  'b715': 'Funkcie udržiavania stability kĺbov',
                  'b720': 'Funkcie mobility(hybnosti) kostí',
                  'b729': 'Inak špecifikované a nešpecifikované funkcie kĺbov a kostí'
                }
              },
              'Funkcie svalov': {
                'components': {
                  'b730': 'Funkcie svalovej sily',
                  'b735': 'Funkcie svalového tonusu',
                  'b740': 'Funkcie svalovej vytrvalosti',
                  'b749': 'Inak špecifikované a nešpecifikované funkcie svalov'
                }
              },
              'Pohybové funkcie': {
                'components': {
                  'b750': 'Funkcie motorického reflexu',
                  'b755': 'Funkcie mimovoľných pohybových reakcií',
                  'b760': 'Funkcie na kontrolu vôľového pohybu',
                  'b765': 'Funkcia mimovoľného pohybu',
                  'b770': 'Funkcie spôsobu chôdze',
                  'b780': 'Pocity súvisiace s funkciami svalov a pohybu',
                  'b789': 'Inak špecifikované a nešpecifikované funkcie pohybu',
                  'b798': 'Inak špecifikované neuromuskuloskeletálne funkcie a funkcie súvisiace s pohybom',
                  'b799': 'Nešpecifikované neuromuskuloskeletálne funkcie a funkcie súvisiace s pohybom'
                }
              }
            }
          },
          'FUNKCIE KOŽE A SÚVISIACICH ŠTRUKTÚR': {
            'components': {
              'Funkcie kože': {
                'components': {
                  'b810': 'Ochranné funkcie kože',
                  'b820': 'Obnovovanie funkcie kože',
                  'b830': 'Iné funkcie kože',
                  'b840': 'Pocity spojené s kožou',
                  'b849': 'Iné špecifikované a nešpecifikované funkcie kože'
                }
              },
              'Funkcie vlasov a nechtov': {
                'components': {
                  'b850': 'Funkcie vlasov',
                  'b860': 'Funkcie nechtov',
                  'b869': 'Inak špecifikované a nešpecifikované funkcie vlasov a nechtov',
                  'b898': 'Iné špecifikované funkcie kože a príslušných štruktúr',
                  'b899': 'Nešpecifikované funkcie kože a príslušných štruktúr'
                }
              }
            }
          }
        },
        'scales': {
          'Kvalifikátory poruchy funkcie': {
            0: 'ŽIADNA porucha (0 - 4%)',
            1: 'MIERNA porucha (5 –  24 %)',
            2: 'STREDNÁ porucha (25 –  49 %)',
            3: 'SILNÁ porucha ( 50 –  95 %)',
            4: 'ÚPLNÁ porucha (96 – 100 %)'
          }
        }
      },
      'TELESNÉ ŠTRUKTÚRY': {
        'components': {
          'ŠTRUKTÚRY NERVOVÉHO SYSTÉMU': {
            'components': {
              's110': 'Štruktúra mozgu',
              's120': 'Miecha a súvisiace štruktúry',
              's130': 'Štruktúra mozgových blán',
              's140': 'Štruktúra sympatického nervového systému',
              's150': 'Štruktúra parasympatického nervového systému',
              's198': 'Štruktúra nervového systému inak špecifikovaná',
              's199': 'Štruktúra nervového systému, nešpecifikovaná'
            }
          }
          ,
          'OKO, UCHO A SÚVISIACE ŠTRUKTÚRY': {
            'components': {
              's102': 'Štruktúra očnice',
              's220': 'Štruktúra očnej gule',
              's230': 'Štruktúry okolia oka',
              's240': 'Štruktúra vonkajšieho ucha',
              's250': 'Štruktúra stredného ucha',
              's260': 'Štruktúra vnútorného ucha',
              's298': 'Inak špecifikované oko, ucho a súvisiace štruktúry',
              's299': 'Oko, ucho a súvisiace štruktúry, nešpecifikované'
            }
          },
          'ŠTRUKTÚRY ZAPOJENÉ V TVORBE HLASU A REČI': {
            'components': {
              's310': 'Štruktúra nosa',
              's320': 'Štruktúra úst',
              's330': 'Štruktúra hltana',
              's340': 'Štruktúra hrtana',
              's398': 'Inak špecifikované štruktúry zapojené v produkcii hlasu a reči',
              's399': 'Štruktúry zapojené v produkcii hlasu a reči, nešpecifikované'
            }
          },
          'ŠTRUKTÚRY KARDIOVASKULÁRNEHO, IMUNOLOGICKÉHO A RESPIRAČNÉHO SYSTÉMU': {
            'components': {
              's410': 'Štruktúra kardiovaskulárneho systému',
              's420': 'Štruktúra imunitného systému',
              's430': 'Štruktúra respiračného systému',
              's498': 'Inak špecifikované štruktúry kardiovaskulárneho, imunitného a respiračného systému',
              's499': 'Štruktúry kardiovaskulárneho, imunitného a respiračného systému nešpecifikované'
            }
          },
          'ŠTRUKTÚRY SÚVISIACE S TRÁVIACIM, METABOLICKÝM A ENDOKRINNÝM SYSTÉMOM': {
            'components': {
              's510': 'Štruktúra slinných žliaz',
              's520': 'Štruktúra pažeráka',
              's530': 'Štruktúra žalúdka',
              's540': 'Štruktúra čriev',
              's550': 'Štruktúra pankreasu',
              's560': 'Štruktúra pečene',
              's570': 'Štruktúra žlčníka a žlčovodu',
              's580': 'Štruktúra endokrinných žliaz',
              's598': 'Inak špecifikované štruktúry súvisiace s tráviacim, metabolickým a endokrinným systémom',
              's599': 'Štruktúry súvisiace s tráviacim, metabolickým a endokrinným systémom, nešpecifikované'
            }
          },
          'ŠTRUKTÚRY SÚVISIACE S GENITOURINÁRNYMI A REPRODUKČNÝMI SYSTÉMAMI': {
            'components': {
              's610': 'Štruktúra močového systému',
              's620': 'Štruktúra panvového dna',
              's630': 'Štruktúra reprodukčného systému',
              's698': 'Inak špecifikované štruktúry súvisiace s genitourinárnym a reprodukčným systémom',
              's699': 'Štruktúry súvisiace s genitourinárnym a reprodukčným systémom, nešpecifikované'
            }
          },
          'ŠTRUKTÚRY SÚVISIACE S POHYBOM': {
            'components': {
              's710': 'Štruktúra oblasti hlavy a krku',
              's720': 'Štruktúra oblasti pletenca hornej končatiny',
              's730': 'Štruktúra hornej končatiny',
              's740': 'Štruktúra panvovej oblasti',
              's750': 'Štruktúra dolnej končatiny',
              's760': 'Štruktúra trupu',
              's770': 'Ďalšie muskuloskeletálne štruktúry súvisiace s pohybom',
              's798': 'Inak špecifikované štruktúry súvisiace s pohybom',
              's799': 'Štruktúry súvisiace s pohybom, nešpecifikované'
            }
          },
          'KOŽA A SÚVISIACE ŠTRUKTÚRY': {
            'components': {
              's810': 'Štruktúra rôznych oblastí kože',
              's820': 'Štruktúra kožných žliaz',
              's830': 'Štruktúra nechtov',
              's840': 'Štruktúra vlasov',
              's898': 'Inak špecifikovaná koža a súvisiace štruktúry',
              's899': 'Koža a súvisiace štruktúry, nešpecifikované'
            }
          }
        }
        ,
        'scales': {
          'Rozsah poruchy': {
            0: 'ŽIADNA porucha',
            1: 'MIERNA porucha',
            2: 'STREDNÁ porucha',
            3: 'ŤAŽKÁ porucha',
            4: 'KOMPLEXNÁ porucha',
            8: 'nešpecifikovaná',
            9: 'nepoužiteľná'
          }
          ,
          'Charakter poruchy': {
            0: 'žiadna zmena štruktúry',
            1: 'úplná absencia',
            2: 'čiastočná absencia',
            3: 'dodatková časť',
            4: 'aberantné dimenzie',
            5: 'diskontinuita',
            6: 'deviačné postavenie',
            7: 'kvalitatívne zmeny v štruktúre vrátane hromadenia tekutín',
            8: 'nešpecifikovaná',
            9: 'nepoužiteľná'
          }
          ,
          'Umiestnenie poruchy': {
            0: 'na viacerých miestach',
            1: 'vpravo',
            2: 'vľavo',
            3: 'na oboch stranách',
            4: 'vpredu',
            5: 'vzadu',
            6: 'proximálne',
            7: 'distálne',
            8: 'nešpecifikovaná',
            9: 'nepoužiteľná'
          }
        }
      },
      'AKTIVITY A PARTICIPÁCIA': {
        'components': {
          'UČENIE SA A APLIKÁCIA VEDOMOSTÍ': {
            'components': {
              'Účelné zmyslové skúsenosti': {
                'components': {
                  'd110': 'Pozorovanie',
                  'd115': 'Počúvanie',
                  'd120': 'Iné zmyslové skúsenosti',
                  'd129': 'Inak špecifikované a nešpecifikované cielené zmyslové skúsenosti'
                }
              },
              'Základné učenie sa': {
                'components': {
                  'd130': 'Napodobňovanie',
                  'd135': 'Opakovanie',
                  'd140': 'Učiť sa čítať',
                  'd145': 'Učiť sa písať',
                  'd150': 'Učiť sa počítať',
                  'd155': 'Osvojiť si zručnosti',
                  'd159': 'Inak špecifikované a nešpecifikované základné učenie sa'
                }
              },
              'Aplikácia vedomostí': {
                'components': {
                  'd160': 'Sústredená pozornosť',
                  'd163': 'Myslenie',
                  'd166': 'Čítanie',
                  'd170': 'Písanie',
                  'd172': 'Počítanie',
                  'd175': 'Riešenie problémov',
                  'd177': 'Prijímanie rozhodnutí',
                  'd179': 'Aplikácia - inak špecifikované a nešpecifikované použitie vedomostí a poznatkov',
                  'd198': 'Inak špecifikované učenie sa a aplikácia vedomostí',
                  'd199': 'Nešpecifikované učenie sa a aplikácia vedomostí'
                }
              }
            }
          },
          'VŠEOBECNÉ ÚLOHY A POŽIADAVKY': {
            'components': {
              'd210': 'Vykonanie jednoduchej úlohy',
              'd220': 'Vykonanie viacerých úloh',
              'd230': 'Výkon bežných denných úkonov (každodennej rutiny)',
              'd240': 'Zvládanie stresu a iných psychických požiadaviek',
              'd298': 'Inak špecifikované všeobecné úlohy a požiadavky',
              'd299': 'Všeobecné úlohy a požiadavky, nešpecifikované'
            }
          },
          'KOMUNIKÁCIA': {
            'components': {
              'Komunikovanie – príjem': {
                'components': {
                  'd310': 'Komunikácia s – prijímanie – hovorenie správ',
                  'd315': 'Komunikácia s – prijímanie, získavanie – neverbálne správy',
                  'd320': 'Komunikácia s – prijímanie, získavanie – správy oficiálnou posunkovou rečou',
                  'd325': 'Komunikácia s – prijímanie, získavanie – písané správy',
                  'd329': 'Inak špecfikovaná a nešpecifikovaná komunikácia – príjem'
                }
              },

              'Komunikácia – produkcia': {
                'components': {
                  'd330': 'Hovorenie',
                  'd335': 'Tvorba neverbálnych správ',
                  'd340': 'Vytváranie správ  vo formálnej posunkovej reči',
                  'd345': 'Písanie správ',
                  'd349': 'Inak špecifikované a nešpecifikované komunikovanie(vytváranie)'
                }
              },
              'Konverzácia a používanie komunikačných pomôcok a techník': {
                'components': {
                  'd350': 'Konverzácia',
                  'd355': 'Diskusia',
                  'd360': 'Používanie komunikačných pomôcok a techník',
                  'd369': 'Inak špecifikovaná a nešpecifikovaná konverzácia a používanie komunikačných pomôcok a techník',
                  'd398': 'Inak špecifikovaná komunikácia',
                  'd399': 'Nešpecifikovaná komunikácia'
                }
              }
            }
          },
          'MOBILITA': {
            'components': {
              'Zmena a udržanie polohy tela': {
                'components': {
                  'd410': 'Zmena základnej polohy tela',
                  'd415': 'Udržanie polohy tela',
                  'd420': 'Premiestnenie sa',
                  'd429': 'Inak špecifikovaná a nešpecifikovaná zmena a udržanie polohy tela'
                }
              },
              'Nosenie, premiestňovanie a narábanie s predmetmi': {
                'components': {
                  'd430': 'Zdvihnutie a nosenie predmetov',
                  'd435': 'Premiestňovanie predmetov dolnými končatinami',
                  'd440': 'Použitie jemnej motoriky',
                  'd445': 'Použitie ruky a ramena',
                  'd449': 'Inak špecifikované a nešpecifikované nosenie, premiestnenie a narábanie s predmetmi'
                }
              },
              'Chôdza a pohyb': {
                'components': {
                  'd450': 'Chôdza',
                  'd455': 'Pohybovanie sa',
                  'd460': 'Pohybovanie sa na rôznych miestach',
                  'd465': 'Pohybovanie sa pomocou zariadenia',
                  'd469': 'Inak špecifikovaná a nešpecifikovaná chôdza a pohyb'
                }
              },
              'Pohybovanie sa pomocou dopravných prostriedkov': {
                'components': {
                  'd470': 'Použitie dopravných prostriedkov',
                  'd475': 'Jazdenie na dopravnom prostriedku',
                  'd480': 'Jazda na zvierati za účelom prepravy',
                  'd489': 'Inak špecifikované a nešpecifikované pohybovanie sa dopravnými prostriedkami',
                  'd498': 'Inak špecifikovaná mobilita',
                  'd499': 'Nešpecifikovaná mobilita'
                }
              }
            }
          },
          'STAROSTLIVOSŤ O SEBA SAMÉHO': {
            'components': {
              'd510': 'Umývanie sa',
              'd520': 'Starostlivosť o jednotlivé časti tela',
              'd530': 'Vykonávanie hygienických potrieb',
              'd540': 'Obliekanie sa',
              'd550': 'Jedenie',
              'd560': 'Pitie',
              'd570': 'Starostlivosť o svoje zdravie',
              'd598': 'Inak špecifikovaná starostlivosť o seba samého',
              'd599': 'Nešpecifikovaná starostlivosť o seba samého'
            }
          },
          'ŽIVOT V DOMÁCNOSTI': {
            'components': {
              'Nadobúdanie nevyhnutných potrieb': {
                'components': {
                  'd610': 'Obstarávanie miesta na bývanie',
                  'd620': 'Obstarávanie tovaru a služieb',
                  'd629': 'Inak špecifikované a nešpecifikované obstarávanie tovaru a služieb'
                }
              },
              'Úlohy v domácnosti': {
                'components': {
                  'd630': 'Príprava jedál',
                  'd640': 'Výkon domácich prác',
                  'd649': 'Inak špecifikované a nešpecifikované úlohy v domácnosti'
                }
              },
              'Starostlivosť o predmety v domácnosti a pomoc druhým': {
                'components': {
                  'd650': 'Starostlivosť o predmety v domácnosti',
                  'd660': 'Pomoc druhým',
                  'd669': 'Inak špecifikovaná a nešpecifikovaná starostlivosť o predmety v domácnosti a pomoc druhým',
                  'd698': 'Inak špecifikovaný život v domácnosti',
                  'd699': 'Nešpecifikovaný život v domácnosti'
                }
              }
            }
          },
          'VZÁJOMNÉ PÔSOBENIE MEDZI OSOBAMI A VZŤAHY': {
            'components': {
              'Všeobecné vzťahy medzi ľuďmi': {
                'components': {
                  'd710': 'Základné vzájomné pôsobenie medzi ľuďmi',
                  'd720': 'Zložité vzájomné pôsobenie medzi ľuďmi',
                  'd729': 'Inak špecifikované a nešpecifikované všeobecné vzájomné pôsobenie medzi ľuďmi'
                }
              },
              'Špecifické vzťahy medzi ľuďmi': {
                'components': {
                  'd730': 'Vzťahy k cudzím osobám',
                  'd740': 'Formálne vzťahy',
                  'd750': 'Neformálne spoločenské vzťahy',
                  'd760': 'Rodinné vzťahy',
                  'd770': 'Intímne vzťahy',
                  'd779': 'Inak špecifikované a nešpecifikované vzťahy medzi ľuďmi',
                  'd798': 'Inak špecifikované vzťahy medzi ľuďmi',
                  'd799': 'Nešpecifikované vzťahy medzi ľuďmi'
                }
              }
            }
          },
          'VÝZNAMNÉ OBLASTI ŽIVOTA': {
            'components': {
              'Vzdelávanie': {
                'components': {
                  'd810': 'Neformálne vzdelávanie',
                  'd815': 'Predškolské vzdelávanie',
                  'd820': 'Školské vzdelávanie',
                  'd825': 'Odborný výcvik',
                  'd830': 'Vyššie vzdelávanie',
                  'd839': 'Inak špecifikované a nešpecifikované vzdelávanie'
                }
              },
              'Práca a zamestnanie': {
                'components': {
                  'd840': 'Učebný pomer príprava na prácu',
                  'd845': 'Získanie a udržanie si práce, rozviazanie pracovného pomeru',
                  'd850': 'Platené zamestnanie',
                  'd855': 'Neplatené zamestnanie',
                  'd859': 'Inak špecifikovaná a nešpecifikovaná práca a zamestnanie'
                }
              },
              'Ekonomická činnosť': {
                'components': {
                  'd860': 'Základné ekonomické operácie',
                  'd865': 'Zložité ekonomické  operácie',
                  'd870': 'Ekonomická sebestačnosť',
                  'd879': 'Inak špecifikovaná a nešpecifikovaná ekonomická činnosť',
                  'd898': 'Inak špecifikované významné oblasti života',
                  'd899': 'Nešpecifikované významné oblasti života'
                }
              }
            }
          },
          'KOMUNITA, SPOLOČENSKÝ A OBČIANSKY ŽIVOT': {
            'components': {
              'd910': 'Život komunity – (život v komunite)',
              'd920': 'Rekreácia a voľný čas',
              'd930': 'Náboženstvo a duchovný život',
              'd940': 'Ľudské práva',
              'd950': 'Politický život a občianska angažovanosť',
              'd998': 'Inak špecifikovaný život v komunite, spoločenský a občiansky život',
              'd999': 'Nešpecifikovaný život v komunite, spoločenský a občiansky život'
            }
          }
        },
        'scales': {
          'Kvalifikátor výkonu': {
            0: 'ŽIADNE ťažkosti (0 –   4%)',
            1: 'MALÉ ťažkosti (5 –  24%)',
            2: 'STREDNÉ ťažkosti (25 –  49%)',
            3: 'VEĽKÉ ťažkosti (50 –  95%)',
            4: 'KOMPLEXNÉ ťažkosti (96 – 100%)',
            8: 'nešpecifikované ťažkosti',
            9: 'nepoužiteľné ťažkosti'
          },
          'Kvalifikátor kapacity': {
            0: 'ŽIADNE ťažkosti (0 –   4%)',
            1: 'MALÉ ťažkosti (5 –  24%)',
            2: 'STREDNÉ ťažkosti (25 –  49%)',
            3: 'VEĽKÉ ťažkosti (50 –  95%)',
            4: 'KOMPLEXNÉ ťažkosti (96 – 100%)',
            8: 'nešpecifikované ťažkosti',
            9: 'nepoužiteľné ťažkosti'
          }
        }
      },
      'FAKTORY PROSTREDIA': {
        'components': {
          'PRODUKTY A TECHNOLÓGIE': {
            'components': {
              'e110': 'Produkty alebo predmety osobnej spotreby',
              'e115': 'Produkty a technológie na osobné použitie v každodennom živote',
              'e120': 'Produkty a technológie na osobný pohyb a dopravu doma a mimo domova',
              'e125': 'Produkty a technológie komunikácie',
              'e130': 'Produkty a technológie vzdelávania',
              'e135': 'Produkty a technológie zamestnania',
              'e140': 'Produkty a technológie na kultúru, rekreáciu a šport',
              'e145': 'Produkty a technológie na vykonávanie náboženských obradov a duchovného života',
              'e150': 'Produkty a technológie vonkajšieho vzhľadu, konštrukcie stavieb budov určených pre verejnosť',
              'e155': 'Vonkajší vzhľad, konštrukcia a stavba produktov a technológií súkromných budov',
              'e160': 'Produkty a technológie rozvoja krajiny',
              'e165': 'Majetok hnuteľný majetok',
              'e198': 'Inak špecifikované produkty a technológie',
              'e199': 'Nešpecifikované produkty a technológie'
            }
          },

          'PRÍRODNÉ PROSTREDIE A ZÁSAHY ČLOVEKA DO PROSTREDIA': {
            'components': {
              'e210': 'Fyzická geografia',
              'e215': 'Obyvateľstvo',
              'e220': 'Flóra a fauna',
              'e225': 'Podnebie',
              'e230': 'Prírodné udalosti',
              'e235': 'Udalosti podmienené človekom',
              'e240': 'Svetlo',
              'e245': 'Časovo podmienené zmeny',
              'e250': 'Zvuk',
              'e255': 'Vibrácia',
              'e260': 'Kvalita ovzdušia',
              'e298': 'Inak špecifikované prírodné prostredie a zásahy človeka do prostredia',
              'e299': 'Nešpecifikované prírodné prostredie a zásahy človeka do prostredia'
            }
          },
          'PODPORA A VZŤAHY': {
            'components': {
              'e310': 'Najbližšia rodina',
              'e315': 'Širšia rodina',
              'e320': 'Priatelia',
              'e325': 'Známi, spolužiaci, kolegovia, susedia a členovia komunity',
              'e330': 'Osoby v pozícii autority',
              'e335': 'Ľudia v podriadenej pozícii',
              'e340': 'Poskytovatelia osobnej starostlivosti a osobní asistenti',
              'e345': 'Cudzí ľudia',
              'e350': 'Domáce zvieratá',
              'e355': 'Odborníci z oblasti zdravotníctva',
              'e360': 'Iní odborníci',
              'e398': 'Podpora a vzťahy inak špecifikované',
              'e399': 'Podpora a vzťahy, nešpecifikované'
            }
          },
          'POSTOJE': {
            'components': {
              'e410': 'Individuálne postoje členov najbližšej rodiny',
              'e415': 'Individuálne postoje členov širšej rodiny',
              'e420': 'Individuálne postoje priateľov',
              'e425': 'Individuálne postoje známych, rovesníkov, kolegov, susedov a členov komunity',
              'e430': 'Individuálne postoje osôb v pozícii autority',
              'e435': 'Individuálne postoje ľudí v podriadenej funkcii',
              'e440': 'Individuálne postoje poskytovateľov osobnej starostlivosti a osobných asistentov',
              'e445': 'Individuálne postoje cudzích ľudí',
              'e450': 'Individuálne odborníkov z oblasti zdravotníctva',
              'e455': 'Individuálne postoje iných odborníkov',
              'e460': 'Spoločenské postoje',
              'e465': 'Spoločenské normy, prax a ideológia',
              'e498': 'Inak špecifikované postoje',
              'e499': 'Nešpecifikované postoje'
            }
          },
          'SLUŽBY, SYSTÉMY A POLITIKA': {
            'components': {
              'e510': 'Služby, systémy a politika zabezpečujúca výrobu spotrebného tovaru',
              'e515': 'Služby, systémy a politika v oblasti architektúry a výstavby',
              'e520': 'Služby, systémy a politika v oblasti plánovania voľných priestranstiev',
              'e525': 'Služby, systémy a politika v oblasti bytovej výstavby',
              'e530': 'Služby, systémy a politika v oblasti verejných služieb',
              'e535': 'Služby, systémy a politika v oblasti komunikácie',
              'e540': 'Služby, systémy a politika v oblasti dopravy',
              'e545': 'Služby, systémy a politika v oblasti ochrany obyvateľstva',
              'e550': 'Zákonom stanovené p služby, systémy a politika',
              'e555': 'Služby, systémy a politika  asociácií a  organizácií',
              'e560': 'Mediálne služby, systémy a politika',
              'e565': 'Ekonomické služby, systémy a politika',
              'e570': 'Služby, systémy a politika v oblasti sociálneho zabezpečenia',
              'e575': 'Služby, systémy a politika v oblasti všeobecnej sociálnej podpory',
              'e580': 'Služby, systémy a politika v oblasti zdravotníctva',
              'e585': 'Služby, systémy a politika v oblasti vzdelávacie a odbornej prípravy',
              'e590': 'Služby, systémy a politika v oblasti práce a zamestnania',
              'e595': 'Služby, systémy a politika v oblasti politiky',
              'e598': 'Inak špecifikované služby, systémy a politika',
              'e599': 'Nešpecifikované služby, systémy a politika'
            }
          }
        },
        'scales': {
          'Bariéra': {
            0: 'ŽIADNA bariéra',
            1: 'MIERNA bariéra',
            2: 'STREDNE VEĽKÁ bariéra',
            3: 'VEĽKÁ bariéra',
            4: 'NEPREKONATEĽNÁ bariéra',
            8: 'nešpecifikovaná bariéra',
            9: 'nepoužiteľné'
          },
          'Debariérizátor': {
            0: 'ŽIADEN debariérizátor',
            1: 'MIERNY debariérizátor',
            2: 'STREDNE VEĽKÝ debariérizátor',
            3: 'VEĽKÝ debariérizátor',
            4: 'VÝZNAMNÝ debariérizátor',
            8: 'nešpecifikovaný debariérizátor',
            9: 'nepoužiteľné'
          }
        }
      }
    },
    enComponents: {
      'BODY FUNCTIONS': {
        'components': {
          'Mental functions': {
            'components': {
              'Global mental functions': {
                'components': {
                  'b110': 'Consciousness functions',
                  'b114': 'Orientation functions',
                  'b117': 'Intellectual functions',
                  'b122': 'Global psychosocial functions',
                  'b125': 'Dispositions and intra-personal functions',
                  'b126': 'Temperament and personality functions',
                  'b130': 'Energy and drive functions',
                  'b134': 'Sleep functions',
                  'b139': 'Global mental functions, other specified and unspecified'
                }
              },
              'Specific mental functions': {
                'components': {
                  'b140': 'Attention functions',
                  'b144': 'Memory functions',
                  'b147': 'Psychomotor functions',
                  'b152': 'Emotional functions',
                  'b156': 'Perceptual functions',
                  'b160': 'Thought functions',
                  'b163': 'Basic cognitive functions',
                  'b164': 'Higher-level cognitive functions',
                  'b167': 'Mental functions of language',
                  'b172': 'Calculation functions',
                  'b176': 'Mental function of sequencing complex movements',
                  'b180': 'Experience of self and time functions',
                  'b189': 'Specific mental functions, other specified and unspecified',
                  'b198': 'Mental functions, other specified',
                  'b199': 'Mental functions, unspecified'
                }
              }
            }
          },
          'Sensory functions and pain': {
            'components': {
              'Seeing and related functions': {
                'components': {
                  'b210': 'Seeing functions',
                  'b215': 'Functions of structures adjoining the eye',
                  'b220': 'Sensations associated with the eye and adjoining structures',
                  'b229': 'Seeing and related functions, other specified and unspecified'
                }
              },
              'Hearing and vestibular functions': {
                'components': {
                  'b230': 'Hearing functions',
                  'b235': 'Vestibular functions',
                  'b240': 'Sensations associated with hearing and vestibular function',
                  'b249': 'Hearing and vestibular functions, other specified and unspecified'
                }
              },
              'Additional sensory functions': {
                'components': {
                  'b250': 'Taste function',
                  'b255': 'Smell function',
                  'b260': 'Proprioceptive function',
                  'b265': 'Touch function',
                  'b270': 'Sensory functions related to temperature and other stimuli',
                  'b279': 'Additional sensory functions, other specified and unspecified'
                }
              },
              'Pain': {
                'b280': 'Sensation of pain',
                'b289': 'Sensation of pain, other specified and unspecified',
                'b298': 'Sensory functions and pain, other specified',
                'b299': 'Sensory functions and pain, unspecified'
              }
            }
          },
          'Voice and speech functions ': {
            'components': {
              'b310': 'Voice functions',
              'b320': 'Articulation functions',
              'b330': 'Fluency and rhythm of speech functions',
              'b340': 'Alternative vocalization functions',
              'b398': 'Voice and speech functions, other specified',
              'b399': 'Voice and speech functions, unspecified'
            }
          },
          'Functions of the cardiovascular, haematological, immunological and respiratory systems': {
            'components': {
              'Functions of the cardiovascular system': {
                'components': {
                  'b410': 'Heart functions',
                  'b415': 'Blood vessel functions',
                  'b420': 'Blood pressure functions',
                  'b429': 'Functions of the cardiovascular system, other specified and unspecified'
                }
              },
              'Functions of the haematological and immunological systems': {
                'components': {
                  'b430': 'Haematological system functions',
                  'b435': 'Immunological system functions',
                  'b439': 'Functions of the haematological and immunological systems, other specified and unspecified'
                }
              },
              'Functions of the respiratory system': {
                'components': {
                  'b440': 'Respiration functions',
                  'b445': 'Respiratory muscle functions',
                  'b449': 'Functions of the respiratory system, other specified and unspecified'
                }
              },
              'Additional functions and sensations of the cardiovascular and respiratory systems': {
                'components': {
                  'b450': 'Additional respiratory functions',
                  'b455': 'Exercise tolerance functions',
                  'b460': 'Sensations associated with cardiovascular and respiratory functions',
                  'b469': 'Additional functions and sensations of the cardiovascular and respiratory systems, other specified and unspecified',
                  'b498': 'Functions of the cardiovascular, haematological, immunological and respiratory systems, other specified',
                  'b499': 'Functions of the cardiovascular, haematological, immunological and respiratory systems, unspecified'
                }
              }
            }
          },
          'Functions of the digestive, metabolic and endocrine systems': {
            'components': {
              'Functions related to the digestive system': {
                'components': {
                  'b510': 'Ingestion functions',
                  'b515': 'Digestive functions b520 Assimilation functions',
                  'b525': 'Defecation functions',
                  'b530': 'Weight maintenance functions',
                  'b535': 'Sensations associated with the digestive system',
                  'b539': 'Functions related to the digestive system, other specified and unspecified'
                }
              },
              'Functions related to metabolism and the endocrine system': {
                'components': {
                  'b540': 'General metabolic functions',
                  'b545': 'Water, mineral and electrolyte balance functions',
                  'b550': 'Thermoregulatory functions',
                  'b555': 'Endocrine gland functions',
                  'b560': 'Growth maintenance functions',
                  'b569': 'Functions related to metabolism and the endocrine system, other specified and unspecified',
                  'b598': 'Functions of the digestive, metabolic and endocrine systems, other specified',
                  'b599': 'Functions of the digestive, metabolic and endocrine systems, unspecified'
                }
              }
            }
          },
          'Genitourinary and reproductive functions': {
            'components': {
              'Urinary functions': {
                'components': {
                  'b610': 'Urinary excretory functions',
                  'b620': 'Urination functions',
                  'b630': 'Sensations associated with urinary functions',
                  'b639': 'Urinary functions, other specified and unspecified'
                }
              },
              'Genital and reproductive functions': {
                'components': {
                  'b640': 'Sexual functions b650 Menstruation functions',
                  'b660': 'Procreation functions',
                  'b670': 'Sensations associated with genital and reproductive functions',
                  'b679': 'Genital and reproductive functions, other specified and unspecified',
                  'b698': 'Genitourinary and reproductive functions, other specified',
                  'b699': 'Genitourinary and reproductive functions, unspecified'
                }
              }
            }
          },
          'Neuromusculoskeletal and movement-related functions': {
            'components': {
              'Functions of the joints and bones': {
                'components': {
                  'b710': 'Mobility of joint functions',
                  'b715': 'Stability of joint functions',
                  'b720': 'Mobility of bone functions',
                  'b729': 'Functions of the joints and bones, other specified and unspecified'
                }
              },
              'Muscle functions': {
                'components': {
                  'b730': 'Muscle power functions',
                  'b735': 'Muscle tone functions',
                  'b740': 'Muscle endurance functions',
                  'b749': 'Muscle functions, other specified and unspecified'
                }
              },
              'Movement functions': {
                'components': {
                  'b750': 'Motor reflex functions',
                  'b755': 'Involuntary movement reaction functions',
                  'b760': 'Control of voluntary movement functions',
                  'b765': 'Involuntary movement functions',
                  'b770': 'Gait pattern functions',
                  'b780': 'Sensations related to muscles and movement functions',
                  'b789': 'Movement functions, other specified and unspecified',
                  'b798': 'Neuromusculoskeletal and movement-related functions, other specified',
                  'b799': 'Neuromusculoskeletal and movement-related functions, unspecified'
                }
              }
            }
          },
          'Functions of the skin and related structures': {
            'components': {
              'Functions of the skin': {
                'components': {
                  'b810': 'Protective functions of the skin',
                  'b820': 'Repair functions of the skin b830 Other functions of the skin',
                  'b840': 'Sensation related to the skin',
                  'b849': 'Functions of the skin, other specified and unspecified'
                }
              },
              'Functions of the hair and nails': {
                'components': {
                  'b850': 'Functions of hair',
                  'b860': 'Functions of nails',
                  'b869': 'Functions of the hair and nails, other specified and unspecified',
                  'b898': 'Functions of the skin and related structures, other specified',
                  'b899': 'Functions of the skin and related structures, unspecified'
                }
              }
            }
          }
        },
        'scales': {
          'Qualifiers for body functions': {
            0: 'NO impairment (none, absent, negligible,… ) 0-4 %',
            1: 'MILD impairment (slight, low,…) 5-24 %',
            2: 'MODERATE impairment (medium, fair,...) 25-49 %',
            3: 'SEVERE impairment (high, extreme,…)  50-95 %',
            4: 'COMPLETE impairment (total,…)  96-100 %',
            8: 'not specified',
            9: 'not applicable'
          }
}
      },
      'BODY STRUCTURES': {
        'components': {
          'Structures of the nervous system': {
            'components': {
              's110': 'Structure of brain',
              's120': 'Spinal cord and related structures',
              's130': 'Structure of meninges',
              's140': 'Structure of sympathetic nervous system',
              's150': 'Structure of parasympathetic nervous system',
              's198': 'Structure of the nervous system, other specified',
              's199': 'Structure of the nervous system, unspecified'
            }
          },
          'The eye, ear and related structures': {
            'components': {
              's210': 'Structure of eye socket',
              's220': 'Structure of eyeball',
              's230': 'Structures around eye s240 Structure of external ear',
              's250': 'Structure of middle ear',
              's260': 'Structure of inner ear',
              's298': 'Eye, ear and related structures, other specified',
              's299': 'Eye, ear and related structures, unspecified'
            }
          },
          'Structures involved in voice and speech': {
            'components': {
              's310': 'Structure of nose',
              's320': 'Structure of mouth',
              's330': 'Structure of pharynx',
              's340': 'Structure of larynx',
              's398': 'Structures involved in voice and speech, other specified',
              's399': 'Structures involved in voice and speech, unspecified'
            }
          },
          'Structures of the cardiovascular, immunological and respiratory systems': {
            'components': {
              's410': 'Structure of cardiovascular system',
              's420': 'Structure of immune system',
              's430': 'Structure of respiratory system',
              's498': 'Structures of the cardiovascular, immunological and respiratory systems, other specified' ,
              's499': 'Structures of the cardiovascular, immunological and respiratory systems, unspecified'
            }
          },
          'Structures related to the digestive, metabolic and endocrine systems': {
            'components': {
              's510': 'Structure of salivary glands',
              's520': 'Structure of oesophagus',
              's530': 'Structure of stomach',
              's540': 'Structure of intestine',
              's550': 'Structure of pancreas',
              's560': 'Structure of liver',
              's570': 'Structure of gall bladder and duct',
              's580': 'Structure of endocrine glands',
              's598': 'Structures related to the digestive, metabolic and endocrine systems, other specified',
              's599': 'Structures related to the digestive, metabolic and endocrine systems, unspecified'
            }
          },
          'Structures related to the genitourinary and reproductive systems': {
            'components': {
              's610': 'Structure of urinary system',
              's620': 'Structure of pelvic floor',
              's630': 'Structure of reproductive system',
              's698': 'Structures related to the genitourinary and reproductive systems, other specified',
              's699': 'Structures related to the genitourinary and reproductive systems, unspecified'
            }
          },
          'Structures related to movement': {
            'components': {
              's710': 'Structure of head and neck region',
              's720': 'Structure of shoulder region',
              's730': 'Structure of upper extremity',
              's740': 'Structure of pelvic region',
              's750': 'Structure of lower extremity',
              's760': 'Structure of trunk',
              's770': 'Additional musculoskeletal structures related to movement',
              's798': 'Structures related to movement, other specified',
              's799': 'Structures related to movement, unspecified'
            }
          },
          'Skin and related structures': {
            'components': {
              's810': 'Structure of areas of skin',
              's820': 'Structure of skin glands',
              's830': 'Structure of nails',
              's840': 'Structure of hair',
              's898': 'Skin and related structures, other specified',
              's899': 'Skin and related structures, unspecified'
            }
          }
        },
        'scales': {
          'First qualifier': {
            0: 'NO impairment (none, absent, negligible,… ) 0-4 %',
            1: 'MILD impairment (slight, low,…) 5-24 %',
            2: 'MODERATE impairment (medium, fair,…) 25-49 %',
            3: 'SEVERE impairment (high, extreme, …) 50-95 %',
            4: 'COMPLETE impairment (total,…) 96-100 %',
            8: 'not specified',
            9: 'not applicable'
          },
          'Second qualifier': {
            0: 'no change in structure',
            1: 'total absence',
            2: 'partial absence',
            3: 'additional part',
            4: 'aberrant dimensions',
            5: 'discontinuity',
            6: 'deviating position',
            7: 'qualitative changes in structure, including accumulation of fluid',
            8: 'not specified',
            9: 'not applicable'
          },
          'Third qualifier': {
            0: 'more than one region',
            1: 'right',
            2: 'left',
            3: 'both sides',
            4: 'front',
            5: 'back',
            6: 'proximal',
            7: 'distal',
            8: 'not specified',
            9: 'not applicable'
          }
        }
      },
      'ACTIVITIES AND PARTICIPATION': {
        'components': {
          'Learning and applying knowledge': {
            'components': {
              'Purposeful sensory experiences': {
                'components': {
                  'd110': 'Watching',
                  'd115': 'Listening',
                  'd120': 'Other purposeful sensing',
                  'd129': 'Purposeful sensory experiences, other specified and unspecified'
                }
              },
              'Basic learning': {
                'components': {
                  'd130': 'Copying',
                  'd131': 'Learning through actions with objects',
                  'd132': 'Acquiring information',
                  'd133': 'Acquiring language',
                  'd134': 'Acquiring additional language',
                  'd135': 'Rehearsing',
                  'd137': 'Acquiring concepts',
                  'd140': 'Learning to read',
                  'd145': 'Learning to write',
                  'd150': 'Learning to calculate',
                  'd155': 'Acquiring skills d159 Basic learning, other specified and unspecified'
                }
              },
              'Applying knowledge': {
                'components': {
                  'd160': 'Focusing attention',
                  'd161': 'Directing attention',
                  'd163': 'Thinking',
                  'd166': 'Reading',
                  'd170': 'Writing',
                  'd172': 'Calculating',
                  'd175': 'Solving problems',
                  'd177': 'Making decisions',
                  'd179': 'Applying knowledge, other specified and unspecified',
                  'd198': 'Learning and applying knowledge, other specified',
                  'd199': 'Learning and applying knowledge, unspecified'
                }
              }
            }
          },
          'General tasks and demands': {
            'components': {
              'd210': 'Undertaking a single task',
              'd220': 'Undertaking multiple tasks',
              'd230': 'Carrying out daily routine',
              'd240': 'Handling stress and other psychological demands',
              'd250': 'Managing one’s own behavior',
              'd298': 'General tasks and demands, other specified',
              'd299': 'General tasks and demands, unspecified'
            }
          },
          'Communication': {
            'components': {
              'Communicating - receiving': {
                'components': {
                  'd310': 'Communicating with - receiving - spoken messages',
                  'd315': 'Communicating with - receiving - nonverbal messages',
                  'd320': 'Communicating with - receiving - formal sign language messages',
                  'd325': 'Communicating with - receiving - written messages',
                  'd329': 'Communicating - receiving, other specified and unspecified'
                }
              },
              'Communicating - producing': {
                'components': {
                  'd330': 'Speaking',
                  'd331': 'Pre-talking',
                  'd332': 'Singing',
                  'd335': 'Producing nonverbal messages',
                  'd340': 'Producing messages in formal sign language',
                  'd345': 'Writing messages',
                  'd349': 'Communication - producing, other specified and unspecified'
                }
              },
              'Conversation and use of communication devices and techniques': {
                'components': {
                  'd350': 'Conversation',
                  'd355': 'Discussion',
                  'd360': 'Using communication devices and techniques',
                  'd369': 'Conversation and use of communication devices and techniques, other specified and unspecified',
                  'd398': 'Communication, other specified',
                  'd399': 'Communication, unspecified'
                }
              }
            }
          },
          'Mobility': {
            'components': {
              'Changing and maintaining body position': {
                'components': {
                  'd410': 'Changing basic body position',
                  'd415': 'Maintaining a body position',
                  'd420': 'Transferring oneself',
                  'd429': 'Changing and maintaining body position, other specified and unspecified'
                }
              },
              'Carrying, moving and handling objects': {
                'components': {
                  'd430': 'Lifting and carrying objects',
                  'd435': 'Moving objects with lower extremities',
                  'd440': 'Fine hand use',
                  'd445': 'Hand and arm use',
                  'd446': 'Fine foot use',
                  'd449': 'Carrying, moving and handling objects, other specified and unspecified'
                }
              },
              'Walking and moving': {
                'components': {
                  'd450': 'Walking',
                  'd455': 'Moving around',
                  'd460': 'Moving around in different locations',
                  'd465': 'Moving around using equipment',
                  'd469': 'Walking and moving, other specified and unspecified'
                }
              },
              'Moving around using transportation': {
                'components': {
                  'd470': 'Using transportation',
                  'd475': 'Driving d480 Riding animals for transportation',
                  'd489': 'Moving around using transportation, other specified and unspecified',
                  'd498': 'Mobility, other specified',
                  'd499': 'Mobility, unspecified'
                }
              }
            }
          },
          'Self-care': {
            'components': {
              'd510': 'Washing oneself',
              'd520': 'Caring for body parts',
              'd530': 'Toileting',
              'd540': 'Dressing',
              'd550': 'Eating',
              'd560': 'Drinking',
              'd570': 'Looking after one’s health',
              'd571': 'Looking after one’s safety',
              'd598': 'Self-care, other specified',
              'd599': 'Self-care, unspecified'
            }
          },
          'Domestic life': {
            'components': {
              'Acquisition of necessities': {
                'components': {
                  'd610': 'Acquiring a place to live',
                  'd620': 'Acquisition of goods and services',
                  'd629': 'Acquisition of necessities, other specified and unspecified'
                }
              },
              'Household tasks': {
                'components': {
                  'd630': 'Preparing meals',
                  'd640': 'Doing housework',
                  'd649': 'Household tasks, other specified and unspecified'
                }
              },
              'Caring for household objects and assisting others': {
                'components': {
                  'd650': 'Caring for household objects',
                  'd660': 'Assisting others',
                  'd669': 'Caring for household objects and assisting others, other specified and unspecified',
                  'd698': 'Domestic life, other specified',
                  'd699': 'Domestic life, unspecified'
                }
              }
            }
          },
          'Interpersonal interactions and relationships': {
            'components': {
              'General interpersonal interactions': {
                'components': {
                  'd710': 'Basic interpersonal interactions',
                  'd720': 'Complex interpersonal interactions',
                  'd729': 'General interpersonal interactions, other specified and unspecified'
                }
              },
              'Particular interpersonal relationships': {
                'components': {
                  'd730': 'Relating with strangers',
                  'd740': 'Formal relationships',
                  'd750': 'Informal social relationships d760 Family relationships',
                  'd770': 'Intimate relationships',
                  'd779': 'Particular interpersonal relationships, other specified and unspecified',
                  'd798': 'Interpersonal interactions and relationships, other specified',
                  'd799': 'Interpersonal interactions and relationships, unspecified'
                }
              }
            }
          },
          'Major life areas': {
            'components': {
              'Education': {
                'components': {
                  'd810': 'Informal education',
                  'd815': 'Preschool education',
                  'd816': 'Preschool life and related activities',
                  'd820': 'School education',
                  'd825': 'Vocational training',
                  'd830': 'Higher education',
                  'd835': 'School life and related activities',
                  'd839': 'Education, other specified and unspecified'
                }
              },
              'Work and employment': {
                'components': {
                  'd840': 'Apprenticeship (work preparation)',
                  'd845': 'Acquiring, keeping and terminating a job',
                  'd850': 'Remunerative employment',
                  'd855': 'Non-remunerative employment',
                  'd859': 'Work and employment, other specified and unspecified'
                }
              },
              'Economic life': {
                'components': {
                  'd860': 'Basic economic transactions',
                  'd865': 'Complex economic transactions',
                  'd870': 'Economic self-sufficiency',
                  'd879': 'Economic life, other specified and unspecified',
                  'd880': 'Engagement in play',
                  'd898': 'Major life areas, other specified',
                  'd899': 'Major life areas, unspecified'
                }
              }
            }
          },
          'Community, social and civic life': {
            'components': {
              'd910': 'Community life',
              'd920': 'Recreation and leisure',
              'd930': 'Religion and spirituality',
              'd940': 'Human rights',
              'd950': 'Political life and citizenship',
              'd998': 'Community, social and civic life, other specified',
              'd999': 'Community, social and civic life, unspecified'
            }
          }
        },
        'scales': {
          'Qualifiers for Activities and Participation': {
            0: 'NO difficulty (none, absent, negligible,… ) 0-4 %',
            1: 'MILD difficulty (slight, low,…) 5-24 %',
            2: 'MODERATE difficulty (medium, fair,…) 25-49 %',
            3: 'SEVERE difficulty (high, extreme, …) 50-95 %',
            4: 'COMPLETE difficulty (total,…) 96-100 %',
            8: 'not specified',
            9: 'not applicable'
          }
        }
      },
      'ENVIRONMENTAL FACTORS': {
        'components': {
          'Products and technology': {
            'components': {
              'e110': 'Products or substances for personal consumption',
              'e115': 'Products and technology for personal use in daily living',
              'e120': 'Products and technology for personal indoor and outdoor mobility and transportation',
              'e125': 'Products and technology for communication',
              'e130': 'Products and technology for education',
              'e135': 'Products and technology for employment',
              'e140': 'Products and technology for culture, recreation and sport',
              'e145': 'Products and technology for the practice of religion and spirituality',
              'e150': 'Design, construction and building products and technology of buildings for public use' ,
              'e155': 'Design, construction and building products and technology of buildings for private use' ,
              'e160': 'Products and technology of land development',
              'e165': 'Assets',
              'e198': 'Products and technology, other specified',
              'e199': 'Products and technology, unspecified'
            }
          },
          'Natural environment and human-made changes to environment': {
            'components': {
              'e210': 'Physical geography',
              'e215': 'Population',
              'e220': 'Flora and fauna',
              'e225': 'Climate',
              'e230': 'Natural events',
              'e235': 'Human-caused events',
              'e240': 'Light',
              'e245': 'Time-related changes',
              'e250': 'Sound',
              'e255': 'Vibration',
              'e260': 'Air quality',
              'e298': 'Natural environment and human-made changes to environment, other specified',
              'e299': 'Natural environment and human-made changes to environment, unspecified'
            }
          },
          'Support and relationships': {
            'components': {
              'e310': 'Immediate family',
              'e315': 'Extended family',
              'e320': 'Friends',
              'e325': 'Acquaintances, peers colleagues, neighbours and community members',
              'e330': 'People in positions of authority',
              'e335': 'People in subordinate positions',
              'e340': 'Personal care providers and personal assistants',
              'e345': 'Strangers',
              'e350': 'Domesticated animals',
              'e355': 'Health professionals',
              'e360': 'Other professionals',
              'e398': 'Support and relationships, other specified',
              'e399': 'Support and relationships, unspecified'
            }
          },
          'Attitudes': {
            'components': {
              'e410': 'Individual attitudes of immediate family members',
              'e415': 'Individual attitudes of extended family members',
              'e420': 'Individual attitudes of friends',
              'e425': 'Individual attitudes of acquaintances, peers colleagues, neighbours and community members',
              'e430': 'Individual attitudes of people in positions of authority',
              'e435': 'Individual attitudes of people in subordinate positions',
              'e440': 'Individual attitudes of personal care providers and personal assistants',
              'e445': 'Individual attitudes of strangers' ,
              'e450': 'Individual attitudes of health professionals',
              'e455': 'Individual attitudes of other professionals' ,
              'e460': 'Societal attitudes',
              'e465': 'Social norms, practices and ideologies' ,
              'e498': 'Attitudes, other specified',
              'e499': 'Attitudes, unspecified'
            }
          },
          'Services, systems and policies': {
            'components': {
              'e510': 'Services, systems and policies for the production of consumer goods',
              'e515': 'Architecture and construction services, systems and policies',
              'e520': 'Open space planning services, systems and policies',
              'e525': 'Housing services, systems and policies',
              'e530': 'Utilities services, systems and policies',
              'e535': 'Communication services, systems and policies',
              'e540': 'Transportation services, systems and policies',
              'e545': 'Civil protection services, systems and policies',
              'e550': 'Legal services, systems and policies',
              'e555': 'Associations and organizational services, systems and policies',
              'e560': 'Media services, systems and policies',
              'e565': 'Economic services, systems and policies',
              'e570': 'Social security services, systems and policies',
              'e575': 'General social support services, systems and policies',
              'e580': 'Health services, systems and policies',
              'e585': 'Education and training services, systems and policies',
              'e590': 'Labour and employment services, systems and policies',
              'e595': 'Political services, systems and policies',
              'e598': 'Services, systems and policies, other specified',
              'e599': 'Services, systems and policies, unspecified'
            }
          }
        },
        'scales': {
          'Barrier': {
            0: 'NO barrier (none, absent, negligible,… ) 0-4%',
            1: 'MILD barrier (slight, low,…) 5-24%',
            2: 'MODERATE barrier (medium, fair,...) 25-49%',
            3: 'SEVERE barrier (high, extreme, …) 50-95%',
            4: 'COMPLETE barrier (total,…) 96-100%',
            8: 'barrier, not specified',
            9: 'not applicable'
          },
          'Facilitator': {
            0: 'NO facilitator (none, absent, negligible,… ) 0-4%',
            1: 'MILD facilitator (slight, low,…) 5-24%',
            2: 'MODERATE facilitator (medium, fair,...) 25-49%',
            3: 'SUBSTANTIAL facilitator (high, extreme, …) 50-95%',
            4: 'COMPLETE facilitator (total,…) 96-100%',
            8: 'facilitator, not specified'
          }
        }
      }
    }
  },

  mutations: {
    updateState (state, payload) {
      state[payload.id] = payload.value
    },

    saveSelectedComponents (state, payload) {
      state.selectedComponents.push(payload)
    },

    updateSelectedComponents (state, payload) {
      state.selectedComponents[payload.key] = payload.component
    },

    spliceSelectedComponents (state, payload) {
      state.selectedComponents.splice(payload, 1)
    }
  }
})

export default store
