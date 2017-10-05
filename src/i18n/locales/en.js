export default {
  next: 'Next',
  back: 'Back',
  icf_dial: 'ICF diagnostic form',
  step1: {
    identification_person: 'Identification data of the person',
    personal_information: 'Personal information',
    form_error: 'Fill all the required inputs',
    academic_degree: 'Academic degree',
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
    name: 'Name',
    name_placeholder: 'Write name',
    surname: 'Surname',
    surname_placeholder: 'Write surname',
    academic_degree_after: 'Academic degree after',
    academic_degrees_after: [
      {value: '', text: '-'},
      {value: 'PhD.', text: 'PhD.'},
      {value: 'ArtD.', text: 'ArtD.'},
      {value: 'ThLic.', text: 'ThLic.'},
      {value: 'MBA', text: 'MBA'},
      {value: 'DrSc.', text: 'DrSc.'},
      {value: 'CSc.', text: 'CSc.'}
    ],
    birth_date: 'Birth date',
    birth_place: 'Birth place',
    birth_place_placeholder: 'Write birth place',
    permanent_address: 'Permanent address',
    country: 'Country',
    countries: [
      {value: '', text: 'Choose country'},
      {value: 'Slovak republic', text: 'Slovak republic'},
      {value: 'Czech republic', text: 'Czech republic'},
      {value: 'Hungary', text: 'Hungary'},
      {value: 'Poland', text: 'Poland'}
    ],
    city: 'City',
    city_placeholder: 'Write city',
    zip: 'ZIP',
    zip_placeholder: 'Write ZIP',
    address: 'Address',
    address_placeholder: 'Write address',
    reference_number: 'Reference number',
    reference_number_placeholder: 'Write reference number',
    contact: 'Contact',
    email: 'Email',
    email_placeholder: 'Write email',
    telephone_number: 'Telephone number',
    telephone_number_placeholder: 'Write telephone number',
    phone_number: 'Phone number',
    phone_number_placeholder: 'Write phone number',
    additional_data: 'Additional patient information',
    marital_status: 'Marital status',
    marital_statuses: [
      {value: '', text: 'Choose marital status'},
      {value: 'child', text: 'child'},
      {value: 'single', text: 'single'},
      {value: 'married', text: 'married'},
      {value: 'divorced', text: 'divorced'},
      {value: 'widowed', text: 'widowed'},
      {value: 'cohabitation', text: 'cohabitation'}
    ],
    education: 'Education',
    educations: [
      {value: '', text: 'Choose education'},
      {value: 'elementary', text: 'elementary'},
      {value: 'grammar school', text: 'grammar school'},
      {value: 'secondary school', text: 'secondary school'},
      {value: 'univerzity I', text: 'univerzity I'},
      {value: 'univerzity II', text: 'univerzity II'},
      {value: 'univerzity III', text: 'univerzity III'}
    ],
    employment_status: 'Employment status',
    employment_statuses: [
      {value: '', text: 'Choose employment status'},
      {value: 'employed', text: 'employed'},
      {value: 'company owner', text: 'company owner'},
      {value: 'selfemployed', text: 'selfemployed'},
      {value: 'unemployed listed', text: 'unemployed listed'},
      {value: 'unemployed unlisted', text: 'unemployed unlisted'},
      {value: 'disabled', text: 'disabled'},
      {value: 'retired', text: 'retired'}
    ],
    employment_type: 'Employment type',
    employment_types: [
      {value: '', text: 'Choose employment type'},
      {value: 'full', text: 'full'},
      {value: 'contract', text: 'contract'},
      {value: 'part', text: 'part'},
      {value: 'home', text: 'home'}
    ],
    basic_diagnosis: 'Basic diagnosis',
    diagnosis_mkch10: 'Diagnosis by mkch10',
    assigned_disability: 'Assigned disability',
    assigned_disability_none: 'None',
    assigned_disability_partial: 'Partial',
    assigned_disability_full: 'Full',
    ztp_holder: 'ZTP holder',
    ztp_holder_yes: 'Yes',
    ztp_holder_no: 'No',
    ztps_holder: 'ZTP/S holder',
    ztps_holder_yes: 'Yes',
    ztps_holder_no: 'No',
    diagnosis_brief: 'Diagnosis brief'
  },
  step2: {
    choose: 'Choose components',
    aasessed_components: 'Assessed components',
    components: [
      {
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
                's498': 'Structures of the cardiovascular, immunological and respiratory systems, other specified',
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
                'e150': 'Design, construction and building products and technology of buildings for public use',
                'e155': 'Design, construction and building products and technology of buildings for private use',
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
                'e445': 'Individual attitudes of strangers',
                'e450': 'Individual attitudes of health professionals',
                'e455': 'Individual attitudes of other professionals',
                'e460': 'Societal attitudes',
                'e465': 'Social norms, practices and ideologies',
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
    ]
  },
  step3: {
    control_and_export: 'Control and export',
    identification_data: 'Identification data',
    permanent_address: 'Permanent address',
    contact_information: 'Contact information',
    marital_status: 'Marital status',
    education: 'Education',
    employment: 'Employment',
    employment_type: 'Employment type',
    assigned_disability: 'Assigned disability',
    diagnosis_mkch10: 'Diagnosis by mkch10',
    diagnosis_brief: 'Diagnosis brief',
    assessed_failures: 'Assessed failures',
    print: 'Print'
  }
}
