export default {
  next: 'Ďalej',
  back: 'Späť',
  icf_dial: 'ICF číselník',
  step1: {
    identification_person: 'Identifikačné údaje o posudzovanej osobe',
    personal_information: 'Osobné údaje',
    form_error: 'Vyplnte všetky povinné políčka',
    academic_degree: 'Titul pred menom',
    academic_degrees: [
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
    name: 'Meno',
    name_placeholder: 'Napíšte meno',
    surname: 'Priezvisko',
    surname_placeholder: 'Napíšte priezvisko',
    academic_degree_after: 'Titul za menom',
    academic_degrees_after: [
      {value: '', text: '-'},
      {value: 'PhD.', text: 'PhD.'},
      {value: 'ArtD.', text: 'ArtD.'},
      {value: 'ThLic.', text: 'ThLic.'},
      {value: 'MBA', text: 'MBA'},
      {value: 'DrSc.', text: 'DrSc.'},
      {value: 'CSc.', text: 'CSc.'}
    ],
    birth_date: 'Dátum narodenia',
    birth_place: 'Miesto narodenia',
    birth_place_placeholder: 'Napíšte miesto narodenia',
    permanent_address: 'Adresa trvalého bydliska',
    country: 'Krajina',
    countries: [
      {value: '', text: 'Vyberte krajinu'},
      {value: 'Slovenská republika', text: 'Slovenská republika'},
      {value: 'Česká republika', text: 'Česká republika'},
      {value: 'Maďarsko', text: 'Maďarsko'},
      {value: 'Poľsko', text: 'Poľsko'}
    ],
    city: 'Mesto',
    city_placeholder: 'Napíšte mesto',
    zip: 'PSČ',
    zip_placeholder: 'Napíšte PSČ',
    address: 'Ulica',
    address_placeholder: 'Napíšte ulicu',
    reference_number: 'Popisné číslo',
    reference_number_placeholder: 'Napíšte popisné číslo',
    contact: 'Kontakt',
    email: 'Email',
    email_placeholder: 'Napíšte email',
    telephone_number: 'Telefónne číslo',
    telephone_number_placeholder: 'Napíšte telefónne číslo',
    phone_number: 'Mobilné čislo',
    phone_number_placeholder: 'Napíšte mobilné čislo',
    additional_data: 'Doplňujúce údaje o posudzovanej osobe',
    marital_status: 'Rodinný stav',
    marital_statuses: [
      {value: '', text: 'Vyberte rodinný stav'},
      {value: 'neplnoleté dieťa/študent', text: 'neplnoleté dieťa/študent'},
      {value: 'slobodný/á', text: 'slobodný/á'},
      {value: 'ženatý/vydatá', text: 'ženatý/vydatá'},
      {value: 'rozvedený/á', text: 'rozvedený/á'},
      {value: 'vdovec/vdova', text: 'vdovec/vdova'},
      {value: 'spolužitie s druhom/družkou', text: 'spolužitie s druhom/družkou'}
    ],
    education: 'Vzdelanie',
    educations: [
      {value: '', text: 'Vyberte vzdelanie'},
      {value: 'základné', text: 'základné'},
      {value: 'stredoškolské všeobecné', text: 'stredoškolské všeobecné'},
      {value: 'stredoškolské odborné', text: 'stredoškolské odborné'},
      {value: 'vysokoškolské I.stupen', text: 'vysokoškolské I.stupen'},
      {value: 'vysokoškolské II.stupen', text: 'vysokoškolské II.stupen'},
      {value: 'vysokoškolské III.stupen', text: 'vysokoškolské III.stupen'}
    ],
    employment_status: 'Zamestnanie',
    employment_statuses: [
      {value: '', text: 'Vyberte zamestnanie'},
      {value: 'verejný/neverejný sektor', text: 'verejný/neverejný sektor'},
      {value: 'podnikateľ/podnikateľka', text: 'podnikateľ/podnikateľka'},
      {value: 'živnostník/živnostníčka', text: 'živnostník/živnostníčka'},
      {value: 'evidovaný/á uchádzač/ka o zamestnanie', text: 'evidovaný/á uchádzač/ka o zamestnanie'},
      {value: 'neevidovaný/á uchádzač/ka o zamestnanie', text: 'neevidovaný/á uchádzač/ka o zamestnanie'},
      {value: 'invalidný dôchodca/dôchodkyňa', text: 'invalidný dôchodca/dôchodkyňa'},
      {value: 'starobný dôchodca/dôchodkyňa', text: 'starobný dôchodca/dôchodkyňa'}
    ],
    employment_type: 'Pracovno-právny vzťah',
    employment_types: [
      {value: '', text: 'Vyberte pracovno-právny vzťah'},
      {value: 'trvalý pracovný pomer', text: 'trvalý pracovný pomer'},
      {value: 'dočasný pracovný pomer', text: 'dočasný pracovný pomer'},
      {value: 'práca na dohodu', text: 'práca na dohodu'},
      {value: 'práca doma', text: 'práca doma'}
    ],
    basic_diagnosis: 'Základná diagnóza',
    diagnosis_mkch10: 'Diagnóza podľa MKCH10',
    assigned_disability: 'Priznaná invalidita',
    assigned_disability_none: 'Žiadna',
    assigned_disability_partial: 'Čiastočná',
    assigned_disability_full: 'Plná',
    ztp_holder: 'Držiteľ preukazu ZŤP',
    ztp_holder_yes: 'Áno',
    ztp_holder_no: 'Nie',
    ztps_holder: 'Držiteľ preukazu ZŤP/S',
    ztps_holder_yes: 'Áno',
    ztps_holder_no: 'Nie',
    diagnosis_brief: 'Stručná anamnéza'
  },
  step2: {
    choose: 'Vyberte komponenty',
    choose_component: 'Vyberte komponent',
    choose_category: 'Vyberte kategoriu',
    choose_subcategory: 'Choose subcategory',
    aasessed_components: 'Vyberte subkategoriu',
    save: 'Uložiť',
    edit: 'Zmeniť',
    delete: 'Vymazať',
    components: [
      {
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
            },
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
          },
          'scales': {
            'Rozsah poruchy': {
              0: 'ŽIADNA porucha',
              1: 'MIERNA porucha',
              2: 'STREDNÁ porucha',
              3: 'ŤAŽKÁ porucha',
              4: 'KOMPLEXNÁ porucha',
              8: 'nešpecifikovaná',
              9: 'nepoužiteľná'
            },
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
            },
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
      }
    ]
  },
  step3: {
    control_and_export: 'Kontrola a export',
    identification_data: 'Identifikačné údaje',
    permanent_address: 'Trvalé bydlisko',
    contact_information: 'Kontaktné údaje',
    marital_status: 'Rodinný stav',
    education: 'Vzdelanie',
    employment: 'Zamestnanie',
    employment_type: 'Pracovno-právny vzťah',
    assigned_disability: 'Priznaná invalidita',
    diagnosis_mkch10: 'Diagnóza podľa MKCH10',
    diagnosis_brief: 'Stručná anamnéza',
    assessed_failures: 'Posúdené poruchy',
    print: 'Tlačiť'
  }
}
