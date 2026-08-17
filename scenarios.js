/*
 * EMR Training Scenarios — viewer.
 *
 * Build input. Do not edit scenarios.js directly; edit this file and run:
 *   uv run --with pyyaml python mv_scratch_pad/emr_scenarios/build.py bundle
 *
 * Self-contained: injects its own styles, embeds the scenario data, and needs
 * nothing but a <script src="scenarios.js"> tag. Works over http (GitHub Pages)
 * and from file://.
 */

const EMR_SCHEMA = {
  "scen_survey": {
    "environment": null,
    "mechanisms_of_injury": null,
    "casualty_count": null,
    "assistance": null,
    "ppe": null,
    "impressions": null
  },
  "primary_survey": {
    "loc": null,
    "c_spine": null,
    "airway": null,
    "breathing": null,
    "circulation": null,
    "name": null,
    "complaint": null,
    "rapid_body_survey": {
      "head": null,
      "jaw": null,
      "neck_spine": null,
      "clavicles": null,
      "sternum": null,
      "chest": null,
      "armpits": null,
      "rib_cage": null,
      "abdomen_view": null,
      "abdomen_palpation": null,
      "pelvis": null,
      "legs_femurs": null,
      "legs_rest": null,
      "arms_humerus": null,
      "arms_rest": null,
      "back_spine": null
    },
    "shock_check": {
      "spo2": null
    },
    "expected_transport_decision": null
  },
  "secondary_survey": {
    "interview": {
      "signs_symptoms": null,
      "allergies": null,
      "medications": null,
      "past_medical_history": null,
      "last_intake": null,
      "last_bowel_movement": null,
      "events_preceeding": null,
      "pain": {
        "onset": null,
        "provoke": null,
        "quality": null,
        "region": null,
        "severity": null,
        "time_duration": null
      }
    },
    "vitals": {
      "loc": null,
      "respiration": {
        "rate": null,
        "rhythm": null,
        "quality": null
      },
      "pulse": {
        "rate": null,
        "rhythm": null,
        "quality": null
      },
      "blood_pressure": null,
      "sp02": null,
      "skin": {
        "color": null,
        "condition": null
      },
      "temperature": null,
      "pupils": {
        "equal": null,
        "reactive": null,
        "size": null
      },
      "blood_glucose": null,
      "glasgow_coma": null
    },
    "head_to_toe_exam": {
      "head": null,
      "neck": null,
      "chest": null,
      "abdomen": {
        "top_left": null,
        "top_right": null,
        "bottom_left": null,
        "bottom_right": null
      },
      "pelvis": null,
      "legs": null,
      "arms": null,
      "back": null
    },
    "expected_transport_decision": null
  },
  "expected_treatment": {
    "life_saving_intervention": null,
    "medication": {
      "indications": null,
      "contraindications": null,
      "five_rights": {
        "person": null,
        "medication": null,
        "dosage": null,
        "route": null,
        "time": null,
        "documentation": null
      }
    }
  }
};

const EMR_CATEGORIES = {
  "respiratory": {
    "airway_obstruction": {
      "anatomical": {
        "adult": null,
        "infant": null
      },
      "foreign_body": {
        "adult": null,
        "infant": null
      }
    },
    "anaphylaxis": null,
    "copd": null,
    "acute_respiratory_distress": null,
    "asthma": null,
    "pneumonia": null,
    "acute_pulmonary_edema": null,
    "pulmonary_embolism": null,
    "hyperventilation": null
  },
  "circulatory": {
    "angina": null,
    "myocardial_infarction": null,
    "congestive_heart_failure": {
      "left_side": null,
      "right_side": null,
      "jugular_distension": null
    },
    "cerebrovascular_accident": null
  },
  "shock": null,
  "soft_tissue_injuries": {
    "internal_bleeding": null,
    "abrasions": null,
    "lacerations": null,
    "avulsions": null,
    "puncture": null,
    "gunshot_wound": null,
    "impaled_object": null,
    "abscess": null,
    "subungual_hematoma": null,
    "myocardial_contusions": null,
    "dermatitis": null,
    "burns": {
      "superficial": null,
      "partial_thickness": null,
      "full_thickness": null,
      "inhalation": null,
      "chemical": null,
      "electrical": null
    },
    "amputation": null,
    "crush_injury": null,
    "compartment_syndrome": null,
    "blast_injuries": null,
    "high_pressure_injection": null
  },
  "muskuloskeletal": {
    "general": null
  },
  "chest_adominal_pelvic": {
    "rib_fracture": null,
    "flail_chest": null,
    "hemothorax": null,
    "pneumothorax": null,
    "penetrating_chest_wound": null,
    "abdominal_injuries": null,
    "evisceration": null,
    "abdominal_aortic_aneurysm": null,
    "pelvic_injuries": null
  },
  "head_spine": {
    "skull_fracture": null,
    "orbito_fracture": null,
    "concussion": null,
    "cerebral_hematoma": null
  },
  "chronic_acute_illness": {
    "syncope": null,
    "diabetic": null,
    "seizures": null
  },
  "poisoning": {
    "carbon_monoxide": null,
    "insect": null,
    "substance_abuse": {
      "opiode": null
    }
  },
  "environmental": {
    "heat_illness": null,
    "hypothermia": null,
    "frostbite": null,
    "high_altitude_sickness": {
      "moderate": null,
      "cerebral_edema": null,
      "pulmonary_edema": null,
      "arterial_gas_embolism": null
    }
  }
};

const EMR_SCENARIOS = [
  {
    "meta": {
      "category": "respiratory",
      "condition": "Anatomical airway obstruction — adult",
      "title": "Slumped in the banquet hall chair",
      "patient": "58-year-old man, large build",
      "reference": "Ch. 6 — Airway Obstruction (anatomical); Ch. 5 — ABCs",
      "overview": "The patient fainted at a wedding reception and was left semi-seated in a chair. His tongue has fallen back and is occluding the airway. Nothing was in his mouth. The learner must recognize that the obstruction is anatomical, open the airway manually, and secure it with an adjunct — foreign-body interventions will not help here.",
      "id": "respiratory.airway_obstruction.anatomical.adult"
    },
    "scen_survey": {
      "environment": "Indoor banquet hall, carpeted, warm, loud music. No hazards.",
      "mechanisms_of_injury": "No trauma. Witnessed faint from a seated position; guests propped him back up in the chair. Chin has dropped onto his chest.",
      "casualty_count": "1",
      "assistance": "Second responder for airway/BVM; EMS transport; ask DJ to cut the music.",
      "ppe": "Gloves and eye protection (airway management, suction likely).",
      "impressions": "Adult male slumped in a chair, chin on chest, loud snoring respirations, face dusky. Medical, not trauma."
    },
    "primary_survey": {
      "loc": "P — no response to voice; grimaces and withdraws to a nail-bed pinch.",
      "c_spine": "Not indicated — witnessed faint from a seated position, no fall, no blunt force. State the reasoning aloud.",
      "airway": "Obstructed. Loud snoring/gurgling, chin on chest. No air movement until the head is repositioned. Head-tilt/chin-lift opens it immediately and the snoring stops. Tolerates an OPA without gagging. No object visible in the mouth at any point.",
      "breathing": "Before the airway is opened: no effective air exchange, chest barely moving. After head-tilt/chin-lift: spontaneous, 10 breaths/min, shallow but quiet.",
      "circulation": "Carotid pulse present, 96, regular, full. Skin cool and dusky.",
      "name": "Raymond Osei (from his wife).",
      "complaint": "Unresponsiveness.",
      "rapid_body_survey": {
        "head": null,
        "jaw": "Relaxed and slack; jaw thrust/chin-lift needed to hold the airway open.",
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "86% on room air on first reading (moderate hypoxia). Rises to 96% within two minutes of airway opening plus a non-rebreather at 12 LPM."
      },
      "expected_transport_decision": "Rapid transport category — decreased level of responsiveness with an unmanaged airway. Decide this during the primary assessment; do not wait."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "From his wife: he said he felt hot and light-headed, then went limp. He has not spoken since. No chest pain or shortness of breath beforehand.",
        "allergies": null,
        "medications": "Ramipril, atorvastatin.",
        "past_medical_history": "Hypertension, high cholesterol.",
        "last_intake": "Dinner and two glasses of wine, roughly 40 minutes ago.",
        "last_bowel_movement": null,
        "events_preceeding": "Stood up to give a speech, sat back down abruptly, then slumped over.",
        "pain": {
          "onset": null,
          "provoke": null,
          "quality": null,
          "region": null,
          "severity": null,
          "time_duration": null
        }
      },
      "vitals": {
        "loc": "P on arrival; improves to V, then A but confused, once oxygenated.",
        "respiration": {
          "rate": "10 initially, 16 once the airway is secured",
          "rhythm": "Regular",
          "quality": "Shallow; snoring until the airway is opened, then quiet"
        },
        "pulse": {
          "rate": "96",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "104/62",
        "sp02": "86% room air, 96% on a non-rebreather at 12 LPM",
        "skin": {
          "color": "Dusky/cyanotic around the lips initially",
          "condition": "Cool, dry"
        },
        "temperature": "36.9 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Sluggish initially",
          "size": "4 mm"
        },
        "blood_glucose": "5.6 mmol/L",
        "glasgow_coma": "E2 V2 M4 = 8 on arrival; E4 V4 M6 = 14 after oxygenation"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": null,
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Remains rapid transport. Secondary assessment is done en route."
    },
    "expected_treatment": {
      "life_saving_intervention": "Lay him supine on a firm surface. Head-tilt/chin-lift (no spinal MOI). Insert a correctly sized OPA — measure earlobe to corner of the mouth, insert along the roof of the mouth, rotate a half-turn. Have suction ready. High-concentration oxygen by non-rebreather at 10–15 LPM for SpO2 under 95%. Reassess breathing after inserting the adjunct to confirm the airway is still open. If his level of responsiveness improves and he gags, remove the OPA. Recovery position if he must be left, with ongoing airway monitoring.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "respiratory",
      "condition": "Anatomical airway obstruction — infant",
      "title": "Quiet after the febrile seizure",
      "patient": "9-month-old infant girl",
      "reference": "Ch. 6 — Airway Obstruction, OPAs in Children and Infants; Ch. 13 — Febrile Seizures",
      "overview": "Postictal infant whose tongue and relaxed soft tissues are obstructing the airway. The learner must manage an infant airway without hyperextending the neck, must not use a finger sweep, and must recognize that the obstruction is anatomical rather than a foreign body.",
      "id": "respiratory.airway_obstruction.anatomical.infant"
    },
    "scen_survey": {
      "environment": "Apartment bedroom, very warm, infant on a change table. No hazards.",
      "mechanisms_of_injury": "No trauma. Rapid rise in temperature over the evening followed by a witnessed generalized seizure lasting about 90 seconds.",
      "casualty_count": "1",
      "assistance": "Second responder for airway/BVM; EMS transport; keep the parent close and involved.",
      "ppe": "Gloves and eye protection; suction on standby.",
      "impressions": "Limp, flushed infant, not crying, noisy wet respirations. Medical. Note the silence — a quiet infant in this situation is a bad sign, not a good one."
    },
    "primary_survey": {
      "loc": "P — no response to voice; weak grimace to a pinch on the inside of the arm.",
      "c_spine": "Not indicated — witnessed seizure on a flat surface, no fall, no trauma.",
      "airway": "Obstructed by relaxed soft tissue and pooled secretions. Gurgling and snoring. Clears on a neutral-position head-tilt/chin-lift with padding under the shoulders and gentle suction. Nothing visible in the mouth. Do not present a foreign body at any point.",
      "breathing": "Irregular and shallow, about 20/min with the airway obstructed; rises to 36/min and becomes quiet once cleared.",
      "circulation": "Brachial pulse present, 168, regular, weak. Skin hot and flushed.",
      "name": "Nadia Haddad (from her father).",
      "complaint": "Unresponsiveness following a seizure.",
      "rapid_body_survey": {
        "head": "Anterior fontanelle soft and flat. No injury.",
        "jaw": "Slack; requires support at the angle of the jaw to hold the airway.",
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "89% on room air (moderate hypoxia); 97% after the airway is cleared and oxygen applied."
      },
      "expected_transport_decision": "Rapid transport category — infant, decreased level of responsiveness, airway compromise. Any of these alone puts her in the category."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Father reports she was hot, irritable and pulling at her right ear all day, then went stiff and jerked for about a minute and a half.",
        "allergies": "None known.",
        "medications": "Infant acetaminophen, last dose about 6 hours ago.",
        "past_medical_history": "Full-term, no prior seizures. Ear infection two months ago.",
        "last_intake": "Breastfed roughly 3 hours ago; poor feeding today.",
        "last_bowel_movement": null,
        "events_preceeding": "Fever climbing all evening; seizure started while being changed.",
        "pain": {
          "onset": null,
          "provoke": null,
          "quality": null,
          "region": null,
          "severity": null,
          "time_duration": null
        }
      },
      "vitals": {
        "loc": "P, improving to V over about 10 minutes (postictal).",
        "respiration": {
          "rate": "20 obstructed, 36 once cleared",
          "rhythm": "Irregular initially, then regular",
          "quality": "Shallow and wet initially, then quiet"
        },
        "pulse": {
          "rate": "168",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "82/44",
        "sp02": "89% room air, 97% on oxygen",
        "skin": {
          "color": "Flushed",
          "condition": "Hot, moist"
        },
        "temperature": "39.4 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Sluggish",
          "size": "4 mm"
        },
        "blood_glucose": "4.4 mmol/L",
        "glasgow_coma": "E2 V2 M4 = 8, improving to 12"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": null,
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Remains rapid transport; assess en route."
    },
    "expected_treatment": {
      "life_saving_intervention": "Place her supine with padding under the shoulders to hold a neutral head position — do not hyperextend the infant neck. Support the jaw at the angle without compressing the soft tissue under the chin. Suction with a bulb syringe, deflating it before insertion. Do not perform a finger sweep on an infant; if an object were seen it would be picked out with little finger and thumb. If an OPA is used, hold the tongue down with a tongue depressor and slide it in following the curve of the mouth without rotating it. Oxygen by pediatric mask. Recheck breathing after any adjunct. Keep her lateral to let secretions drain, and keep the father with her.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "respiratory",
      "condition": "Foreign-body airway obstruction — adult",
      "title": "Steak dinner gone wrong",
      "patient": "63-year-old woman with dentures",
      "reference": "Ch. 6 — Foreign Body Airway Obstruction Intervention",
      "overview": "Complete FBAO in a responsive adult that deteriorates to unresponsive if the learner is slow or ineffective. Tests the alternating five-and-five sequence, the switch to CPR compressions on collapse, and the referral to a physician afterwards.",
      "id": "respiratory.airway_obstruction.foreign_body.adult"
    },
    "scen_survey": {
      "environment": "Busy restaurant dining room. Chairs and a table in the way. No hazards.",
      "mechanisms_of_injury": "Choking on poorly chewed steak while laughing and talking during a meal. She wears dentures and had two glasses of wine.",
      "casualty_count": "1",
      "assistance": "EMS transport; ask a server to clear the surrounding tables and meet EMS at the door.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Adult woman standing, both hands clutched at her throat, panicked, silent."
    },
    "primary_survey": {
      "loc": "A — alert but unable to speak. Nods yes when asked 'Are you choking?'. Becomes U after roughly 90 seconds if the obstruction is not cleared.",
      "c_spine": "Not indicated initially. Protect the head and neck as she collapses — do not try to catch her full weight.",
      "airway": "Completely obstructed. Cannot speak, cough or breathe; weak high-pitched squeak on attempted inhalation. Clears after five back blows plus five abdominal thrusts, or once compressions are started if she has gone unresponsive — proctor's choice, but do not clear on the first attempt.",
      "breathing": "Absent while obstructed. Once the meat is dislodged: coughing, then rapid and noisy at about 26/min, settling to 20.",
      "circulation": "Radial pulse 118, regular, full while responsive. Face flushed then cyanotic.",
      "name": "Beverly Nakashima (from her husband).",
      "complaint": "Choking / cannot breathe.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": "After the obstruction clears: tender over the sternum and lower ribs from the thrusts. Document it.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "82% while obstructed (severe hypoxia); 95% on a non-rebreather five minutes after clearing."
      },
      "expected_transport_decision": "Rapid transport category — instability of the ABCs. Stays rapid transport even after the airway clears, because of the hypoxic period."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Sore throat and sore chest, hoarse voice, frightened. 'It felt like it went down wrong.'",
        "allergies": "Sulfa drugs — rash.",
        "medications": "Levothyroxine.",
        "past_medical_history": "Hypothyroidism. Upper and lower dentures.",
        "last_intake": "Steak, at the moment of the incident.",
        "last_bowel_movement": null,
        "events_preceeding": "Laughing at a story while eating a large mouthful.",
        "pain": {
          "onset": "Sudden, at the moment of the interventions",
          "provoke": "Deep breathing and coughing",
          "quality": "Aching, bruised",
          "region": "Central chest and upper abdomen; no radiation",
          "severity": "4/10",
          "time_duration": "Since the thrusts, a few minutes ago"
        }
      },
      "vitals": {
        "loc": "A, oriented, tearful",
        "respiration": {
          "rate": "26 settling to 20",
          "rhythm": "Regular",
          "quality": "Deep, slightly hoarse"
        },
        "pulse": {
          "rate": "118 settling to 96",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "148/88",
        "sp02": "82% at worst, 95% on oxygen",
        "skin": {
          "color": "Flushed, cyanosis around the lips while obstructed",
          "condition": "Warm, moist"
        },
        "temperature": "36.8 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "3 mm"
        },
        "blood_glucose": "6.1 mmol/L",
        "glasgow_coma": "15 once the airway is clear"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": "Voice hoarse; no swelling, no deformity, no subcutaneous crepitus.",
        "chest": "Tender over the mid-sternum; equal expansion, equal air entry both sides.",
        "abdomen": {
          "top_left": "Tender to light palpation from the abdominal thrusts; soft, not rigid.",
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Rapid transport maintained. Any patient who has received obstructed-airway interventions must be examined by a physician — the back blows and thrusts themselves cause trauma."
    },
    "expected_treatment": {
      "life_saving_intervention": "Confirm complete obstruction ('Are you choking?'). Alternate two of the three techniques — five back blows between the shoulder blades with her bent forward at the waist, then five abdominal thrusts above the navel and well below the sternum — checking after every single one. Keep alternating until it clears or she goes unresponsive. If she collapses: protect her head, lower her, start 30 chest compressions, then look in the mouth and finger-sweep only what you can see, then attempt one ventilation and resume compressions if it does not go in. Once clear, reassess ABCs, give high-concentration oxygen, position of comfort, and transport for physician examination.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "respiratory",
      "condition": "Foreign-body airway obstruction — infant",
      "title": "The grape at the birthday party",
      "patient": "11-month-old infant boy",
      "reference": "Ch. 6 — Care for a Foreign-Body Airway Obstruction, Responsive/Unresponsive Infant",
      "overview": "Complete FBAO in a responsive infant. Tests the back-blow / chest-thrust sandwich technique, head-lower-than-chest positioning, and the ban on infant finger sweeps.",
      "id": "respiratory.airway_obstruction.foreign_body.infant"
    },
    "scen_survey": {
      "environment": "Living room, birthday party, several distressed adults, toys on the floor.",
      "mechanisms_of_injury": "Whole grape taken from a snack bowl by an older child and given to the infant.",
      "casualty_count": "1",
      "assistance": "EMS transport; ask one adult to move the other guests and children back.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Infant in his mother's arms, awake, eyes wide, mouth open, no sound coming out, face going from red to blue."
    },
    "primary_survey": {
      "loc": "A — awake, eyes open, silent. Becomes U after about 60 seconds if not cleared.",
      "c_spine": "Not indicated — no trauma.",
      "airway": "Completely obstructed. Silent, no cry, no effective cough. The grape is dislodged after the second cycle of five back blows and five chest thrusts. It becomes visible in the mouth just before it comes free.",
      "breathing": "Absent while obstructed; strong crying immediately after the grape comes out, then 44/min.",
      "circulation": "Brachial pulse 176, regular, full. Face cyanotic while obstructed.",
      "name": "Theo Brandt (from his mother).",
      "complaint": "Choking.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "80% while obstructed; 97% two minutes after clearing, on room air."
      },
      "expected_transport_decision": "Rapid transport category — absence of the ABCs. Remains rapid transport after clearing; every infant who receives these interventions is examined by more advanced medical personnel."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Crying strongly, hoarse cry, clingy. No further distress once clear.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Healthy, full-term, immunizations up to date.",
        "last_intake": "Birthday cake and juice about 20 minutes ago; then the grape.",
        "last_bowel_movement": null,
        "events_preceeding": "Older cousin handed him a whole grape while the adults were singing.",
        "pain": {
          "onset": null,
          "provoke": null,
          "quality": null,
          "region": null,
          "severity": null,
          "time_duration": null
        }
      },
      "vitals": {
        "loc": "A, crying, consolable",
        "respiration": {
          "rate": "44 settling to 34",
          "rhythm": "Regular",
          "quality": "Hoarse cry, otherwise clear"
        },
        "pulse": {
          "rate": "176 settling to 138",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "84/46",
        "sp02": "80% at worst, 97% room air after clearing",
        "skin": {
          "color": "Cyanotic while obstructed, then pink",
          "condition": "Warm, moist"
        },
        "temperature": "37.1 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": null,
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": "Hoarse cry; no swelling or deformity.",
        "chest": null,
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Rapid transport maintained for physician examination."
    },
    "expected_treatment": {
      "life_saving_intervention": "Sit or kneel. Sandwich him between your forearms, supporting the head in your hand with the thumb and fingers at the angles of the jaw, avoiding the soft tissue under the chin. Turn him prone across your thigh, head lower than the chest, and deliver up to five firm back blows between the shoulder blades with the heel of your hand, checking after each. Turn him supine, head still lower than the chest, and give up to five chest thrusts with two fingers on the sternum just below the nipple line, one-third the depth of the chest, full recoil, checking after each. Keep alternating until he coughs, cries or goes unresponsive. If he goes unresponsive: 30 compressions, then open the mouth with your thumb on the lower teeth and pick out anything visible with little finger and thumb — never a finger sweep in an infant. Oxygen after clearing, then transport.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "respiratory",
      "condition": "Anaphylaxis",
      "title": "Wasp sting on the loading dock",
      "patient": "27-year-old man",
      "reference": "Ch. 6 — Anaphylaxis, Epinephrine Auto-Injector; Ch. 22 — Six Rights",
      "overview": "Rapid-onset anaphylaxis with an airway that is closing. Tests recognition, assisting with the patient's own auto-injector against the Six Rights, and the rule that transport is required even after epinephrine works.",
      "id": "respiratory.anaphylaxis"
    },
    "scen_survey": {
      "environment": "Warehouse loading dock, outdoors, mid-summer. Wasp nest under the dock lip — a hazard to responders.",
      "mechanisms_of_injury": "Wasp sting to the left forearm about 4 minutes ago.",
      "casualty_count": "1",
      "assistance": "EMS transport; move the patient away from the nest before treating.",
      "ppe": "Gloves and eye protection; sharps container ready for the used auto-injector.",
      "impressions": "Young man sitting on the dock steps, visibly swollen face, hoarse, working hard to breathe, hives on his neck and arms."
    },
    "primary_survey": {
      "loc": "A but anxious and distressed; 'my throat is closing'.",
      "c_spine": "Not indicated — no trauma.",
      "airway": "Threatened, not yet obstructed. Hoarse voice, tight cough, swelling of the lips and tongue. He can still speak in short phrases. If epinephrine is delayed past about 5 minutes, present stridor and single-word speech.",
      "breathing": "Laboured, 30/min, audible wheeze on exhalation, chest tightness.",
      "circulation": "Radial pulse 128, regular, weak. Skin flushed with raised hives, warm and moist.",
      "name": "Dmitri Kovac.",
      "complaint": "Throat closing and difficulty breathing after a wasp sting.",
      "rapid_body_survey": {
        "head": "Lips and tongue swollen; face puffy, especially around the eyes.",
        "jaw": null,
        "neck_spine": "Hives; no deformity, no tracheal deviation.",
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": "Sting site on the left forearm, red and swollen, no stinger embedded (wasps do not leave one).",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "90% on room air (moderate hypoxia); 96% after epinephrine and high-flow oxygen."
      },
      "expected_transport_decision": "Rapid transport category — anaphylaxis is life-threatening and every anaphylaxis patient requires immediate transport, even after epinephrine."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Throat tightness, itching, hives, dizziness, nausea, chest tightness, wheeze.",
        "allergies": "Wasp and bee venom — anaphylactic. Carries an auto-injector.",
        "medications": "Epinephrine auto-injector (in his lunch bag); cetirizine as needed.",
        "past_medical_history": "One previous anaphylactic reaction to a bee sting three years ago.",
        "last_intake": "Coffee about an hour ago.",
        "last_bowel_movement": null,
        "events_preceeding": "Reached under the dock lip for a dropped strap and was stung.",
        "pain": {
          "onset": "Sudden, at the sting",
          "provoke": "Nothing changes it",
          "quality": "Burning at the sting; tightness in the chest and throat",
          "region": "Left forearm; chest and throat",
          "severity": "6/10",
          "time_duration": "About 4 minutes"
        }
      },
      "vitals": {
        "loc": "A, anxious",
        "respiration": {
          "rate": "30",
          "rhythm": "Regular",
          "quality": "Laboured, expiratory wheeze, hoarse"
        },
        "pulse": {
          "rate": "128",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "94/56",
        "sp02": "90% room air",
        "skin": {
          "color": "Flushed with widespread hives",
          "condition": "Warm, moist"
        },
        "temperature": "37.2 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "5 mm"
        },
        "blood_glucose": "5.9 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "Periorbital and lip swelling, tongue enlarged.",
        "neck": "Urticaria; no tracheal deviation.",
        "chest": "Equal expansion; wheeze throughout on auscultation.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": "Sting site left forearm with a 6 cm area of redness and swelling.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport. Reassess every 5 minutes; a second dose may be indicated if there is no improvement 5 minutes after the first."
    },
    "expected_treatment": {
      "life_saving_intervention": "Move him away from the nest. Position of comfort for breathing — sitting up. High-concentration oxygen by non-rebreather at 10–15 LPM. Assist him with his own epinephrine auto-injector immediately; do not wait for the secondary assessment. Keep him calm, monitor the airway continuously, and be ready for assisted ventilations if the airway closes further. Transport the used injector with the patient in a rigid sharps container.",
      "medication": {
        "indications": "Severe allergic reaction with respiratory distress and a closing airway after a known allergen exposure; patient has his own prescribed injector.",
        "contraindications": "None stated in the manual for anaphylaxis. Note the general caution: epinephrine does not correct the underlying condition, so transport is still mandatory.",
        "five_rights": {
          "person": "Confirm the name on the auto-injector label is Dmitri Kovac's.",
          "medication": "Epinephrine hydrochloride auto-injector — read the label aloud; check colour, clarity and expiry date.",
          "dosage": "One auto-injector, the prescribed adult dose. A second dose may be indicated if there is no improvement within 5 minutes.",
          "route": "Intramuscular into the quadriceps, centre of the outer thigh. Remove the safety cap, push firmly until it clicks, hold about 10 seconds, then rub the site for about 30 seconds.",
          "time": "Now — within the primary assessment. Note the exact time; reassess at 5 minutes.",
          "documentation": "Time, dose, route, effect, plus his presentation before and after. Report the exposure, the time of the sting and the time of the injection at transfer of care."
        }
      }
    }
  },
  {
    "meta": {
      "category": "respiratory",
      "condition": "Chronic obstructive pulmonary disease (COPD)",
      "title": "Home oxygen and a bad week",
      "patient": "71-year-old woman, lifelong smoker",
      "reference": "Ch. 6 — Chronic Obstructive Pulmonary Disease; Ch. 5 — Pulse Oximetry",
      "overview": "Acute exacerbation in a patient on home oxygen. Tests recognition of the COPD picture and the oxygen decision: keep a chronic patient on low-flow maintenance unless they are acutely short of breath — and she is.",
      "id": "respiratory.copd"
    },
    "scen_survey": {
      "environment": "Small bungalow living room. Home oxygen concentrator running, tubing across the floor. No smoking permitted anywhere near the oxygen — check and enforce.",
      "mechanisms_of_injury": "No trauma. Worsening shortness of breath over four days following a chest cold.",
      "casualty_count": "1",
      "assistance": "EMS transport; ask the daughter to gather the medication list and home oxygen settings.",
      "ppe": "Gloves and eye protection; N95 if nebulization is performed.",
      "impressions": "Older woman sitting bolt upright in an armchair, leaning forward on her knees, barrel-chested, exhaling through pursed lips. Speaks in three-word phrases."
    },
    "primary_survey": {
      "loc": "A but restless and anxious.",
      "c_spine": "Not indicated — medical presentation, no trauma.",
      "airway": "Patent; she is speaking, though only in short phrases.",
      "breathing": "Laboured, 32/min, prolonged exhalation through pursed lips, coarse rattling audible without a stethoscope. Tripod position. Accessory muscle use at the neck.",
      "circulation": "Radial pulse 112, irregular, weak. Distended neck veins. Skin cyanotic at the lips and nail beds.",
      "name": "Eileen MacGregor.",
      "complaint": "Cannot catch her breath.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": "Jugular venous distension visible; accessory muscle use.",
        "clavicles": null,
        "sternum": null,
        "chest": "Barrel-shaped; reduced expansion; coarse rattling throughout.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "84% on room air after she pulled her cannula off (severe hypoxia). Her usual baseline on home oxygen is 90%. Rises to 92% on a non-rebreather."
      },
      "expected_transport_decision": "Rapid transport category — respiratory distress with instability of the ABCs and severe hypoxia."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Shortness of breath much worse than usual, productive cough with thick green sputum, exhausted, cannot lie down, cannot walk to the bathroom.",
        "allergies": "Penicillin — rash.",
        "medications": "Home oxygen 2 LPM by nasal cannula continuously; tiotropium inhaler; salbutamol inhaler as needed, used six times today.",
        "past_medical_history": "COPD with emphysema and chronic bronchitis, diagnosed 12 years ago. 50 pack-year smoking history, quit 4 years ago.",
        "last_intake": "Tea and toast this morning; very little since.",
        "last_bowel_movement": "Yesterday, normal.",
        "events_preceeding": "Head cold last week; breathing steadily worse since, sharply worse this morning.",
        "pain": {
          "onset": null,
          "provoke": null,
          "quality": null,
          "region": null,
          "severity": null,
          "time_duration": null
        }
      },
      "vitals": {
        "loc": "A, restless",
        "respiration": {
          "rate": "32",
          "rhythm": "Regular",
          "quality": "Laboured, prolonged pursed-lip exhalation, coarse rattling"
        },
        "pulse": {
          "rate": "112",
          "rhythm": "Irregular",
          "quality": "Weak"
        },
        "blood_pressure": "158/92",
        "sp02": "84% room air; 92% on a non-rebreather at 12 LPM",
        "skin": {
          "color": "Cyanotic lips and nail beds, dusky",
          "condition": "Cool, clammy"
        },
        "temperature": "37.9 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "3 mm"
        },
        "blood_glucose": "7.2 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": "Jugular venous distension.",
        "chest": "Barrel chest; diminished air entry at both bases; coarse crackles and wheeze throughout.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Mild ankle swelling both sides.",
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Rapid transport maintained; reassess vitals and SpO2 every 5 minutes."
    },
    "expected_treatment": {
      "life_saving_intervention": "Leave her sitting upright in the position she has chosen — do not lay her flat. Loosen restrictive clothing, keep her calm. She is acutely short of breath, so the usual 'keep a COPD patient on low-flow maintenance' rule does not apply: give high-flow oxygen, titrating to bring the SpO2 up, and monitor her respiratory rate closely for the rare hypoxic-drive response. Have a BVM ready — assisted ventilation is indicated if her rate goes above 30 and she tires, or drops below 10. Assist her with her own salbutamol inhaler after checking the Six Rights. Enforce no smoking and no open flame near the oxygen.",
      "medication": {
        "indications": "Acute shortness of breath with wheeze and bronchospasm in a patient with a prescribed bronchodilator.",
        "contraindications": "None stated in the manual for her own prescribed inhaler.",
        "five_rights": {
          "person": "Confirm the name on the inhaler label is Eileen MacGregor's.",
          "medication": "Salbutamol metered-dose inhaler — read the label aloud; check the expiry date.",
          "dosage": "Her prescribed dose. Note she has already used it six times today and report that.",
          "route": "Inhaled. Shake three or four times, remove the cap, have her breathe out away from the inhaler, seal her lips on the mouthpiece, press once as she takes one slow full breath in, hold up to 10 seconds, exhale. Use a spacer if she has one.",
          "time": "After oxygen is applied and she is positioned; note the time.",
          "documentation": "Time, dose, route, effect, and that she had already self-administered six doses today."
        }
      }
    }
  },
  {
    "meta": {
      "category": "respiratory",
      "condition": "Acute respiratory distress syndrome (ARDS)",
      "title": "Two days after the fall",
      "patient": "48-year-old man",
      "reference": "Ch. 6 — Acute Respiratory Distress Syndrome",
      "overview": "ARDS developing two days after significant chest trauma. Tests the learner's willingness to connect a current respiratory emergency to an injury that happened days earlier, and to treat aggressive hypoxia that does not respond well to oxygen.",
      "id": "respiratory.acute_respiratory_distress"
    },
    "scen_survey": {
      "environment": "Bedroom of a rural house; patient on the edge of the bed. No hazards.",
      "mechanisms_of_injury": "No new trauma today. Two days ago he fell about 3 metres from a hay loft and struck his chest on a rail; declined assessment at the time.",
      "casualty_count": "1",
      "assistance": "EMS transport; consider air evacuation given the rural distance.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Middle-aged man sitting on the bed, breathing very fast and shallow, mottled bluish skin, unable to finish a sentence."
    },
    "primary_survey": {
      "loc": "A but becoming confused and agitated as the scenario runs.",
      "c_spine": "Consider it — the injury two days ago was a fall over 1 metre. He has been ambulatory since with no neck pain and no midline C-spine tenderness, so under the Canadian C-Spine Rule spinal motion restriction is not indicated. Say so aloud.",
      "airway": "Patent; speaking in two- to three-word phrases.",
      "breathing": "Very rapid and shallow, 40/min, marked accessory muscle use, no wheeze. Diminished air entry at both bases.",
      "circulation": "Radial pulse 126, regular, weak. Skin mottled and bluish, cool and clammy.",
      "name": "Curtis Lemay.",
      "complaint": "Cannot get enough air.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": "Large yellow-green bruise over the right lateral chest wall from the fall; tender; no paradoxical movement, no crepitus.",
        "armpits": null,
        "rib_cage": "Tender over the right fifth to eighth ribs.",
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "78% on room air (severe hypoxia). Rises only to 87% on a non-rebreather at 15 LPM — the poor response to oxygen is the point of this scenario."
      },
      "expected_transport_decision": "Rapid transport category — instability of the ABCs, severe hypoxia, multi-system trauma history."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Breathlessness getting steadily worse since yesterday afternoon, now severe. Dry cough. Chest hurts on the right when he breathes in. Exhausted.",
        "allergies": "None known.",
        "medications": "Ibuprofen for the chest pain since the fall.",
        "past_medical_history": "Nothing significant. Non-smoker.",
        "last_intake": "Half a bowl of soup last night; nothing today.",
        "last_bowel_movement": "Yesterday, normal.",
        "events_preceeding": "Fell about 3 m from a hay loft two days ago onto a rail, chest first. Refused assessment. Breathing worsening since.",
        "pain": {
          "onset": "Chest wall pain from the fall two days ago; breathlessness began yesterday afternoon",
          "provoke": "Deep breathing, coughing, lying down",
          "quality": "Sharp on the right chest wall; suffocating sensation overall",
          "region": "Right lateral chest; no radiation",
          "severity": "7/10 chest wall pain",
          "time_duration": "Two days for the pain, about 20 hours for the breathlessness"
        }
      },
      "vitals": {
        "loc": "A, becoming confused",
        "respiration": {
          "rate": "40",
          "rhythm": "Regular",
          "quality": "Very shallow, marked accessory muscle use"
        },
        "pulse": {
          "rate": "126",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "104/68",
        "sp02": "78% room air; 87% on a non-rebreather at 15 LPM",
        "skin": {
          "color": "Mottled, bluish",
          "condition": "Cool, clammy"
        },
        "temperature": "38.1 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "6.4 mmol/L",
        "glasgow_coma": "E4 V4 M6 = 14"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": "Extensive resolving bruise right lateral chest. Equal but shallow expansion. Diminished breath sounds at both bases, top and bottom, worse on the right.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Rapid transport, without delay. Reassess vitals and SpO2 every 5 minutes."
    },
    "expected_treatment": {
      "life_saving_intervention": "Sit him upright in a Fowler or Semi-Fowler position — this will be far easier for him than supine. High-concentration oxygen by non-rebreather at 15 LPM, keeping the reservoir bag full. His respiratory rate is above 30 and he is tiring: assisted ventilation with a BVM and oxygen reservoir is indicated — give one ventilation on every second inhalation to mirror his own rate. Two responders on the BVM if possible. Keep him warm, minimize exertion, do not let him walk. Transport without delay and notify the receiving facility of the chest trauma two days ago.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "respiratory",
      "condition": "Asthma",
      "title": "Cold air at the cross-country meet",
      "patient": "16-year-old girl",
      "reference": "Ch. 6 — Asthma, Metered-Dose Inhalers; Ch. 22 — Six Rights",
      "overview": "Exercise- and cold-triggered asthma attack in a patient with her own inhaler. Tests recognition of the wheeze-on-exhalation picture and correct assistance with a metered-dose inhaler.",
      "id": "respiratory.asthma"
    },
    "scen_survey": {
      "environment": "Outdoors at a cross-country finish area, 4 °C, windy. Wet grass; watch footing.",
      "mechanisms_of_injury": "No trauma. Asthma attack triggered by exertion in cold weather.",
      "casualty_count": "1",
      "assistance": "Coach to locate her inhaler and contact her parents; EMS if she does not improve.",
      "ppe": "Gloves and eye protection; N95 if a nebulizer is used.",
      "impressions": "Teenage runner sitting on the grass, leaning forward on her hands, frightened, audible wheeze on every breath out."
    },
    "primary_survey": {
      "loc": "A, frightened.",
      "c_spine": "Not indicated — no trauma; she sat down under her own control.",
      "airway": "Patent; she is speaking in three- to four-word phrases.",
      "breathing": "Laboured, 28/min, loud wheeze on exhalation, prolonged expiratory phase, chest looks over-inflated. Improves markedly about 3 minutes after the inhaler.",
      "circulation": "Radial pulse 124, regular, full. Skin flushed and moist.",
      "name": "Priya Raghunathan.",
      "complaint": "Cannot breathe out; chest is tight.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": "Hyperinflated appearance; no injury, no deformity.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "91% on room air (mild hypoxia); 96% after the inhaler and oxygen."
      },
      "expected_transport_decision": "Not rapid transport at this stage — she is alert with a patent airway and responding to her own medication. Escalate to rapid transport immediately if the wheeze disappears without improvement, she cannot speak, her level of responsiveness drops, or SpO2 falls further."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Chest tightness, wheeze, cannot get air out, anxious, mild cough.",
        "allergies": "Cats, ragweed.",
        "medications": "Salbutamol inhaler as needed; fluticasone inhaler daily. Left the salbutamol in her kit bag.",
        "past_medical_history": "Asthma since age 6, usually well controlled. Two attacks last winter, no hospital admissions.",
        "last_intake": "Banana and water about an hour before the race.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Ran a 5 km race in cold wind without pre-treating with her inhaler.",
        "pain": {
          "onset": "Gradual over the last kilometre",
          "provoke": "Exertion, cold air",
          "quality": "Tight, band-like",
          "region": "Across the chest; no radiation",
          "severity": "5/10 tightness",
          "time_duration": "About 10 minutes"
        }
      },
      "vitals": {
        "loc": "A, anxious",
        "respiration": {
          "rate": "28",
          "rhythm": "Regular",
          "quality": "Laboured, expiratory wheeze, prolonged exhalation"
        },
        "pulse": {
          "rate": "124",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "126/74",
        "sp02": "91% room air; 96% after treatment",
        "skin": {
          "color": "Flushed",
          "condition": "Warm, moist"
        },
        "temperature": "37.0 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "5.1 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": "Equal expansion; widespread expiratory wheeze on auscultation, top and bottom, both sides.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "If she returns to her baseline she may be released to a parent with advice to see a physician. If the wheeze persists, recurs, or she needs repeat doses, transport."
    },
    "expected_treatment": {
      "life_saving_intervention": "Sit her upright, loosen restrictive clothing, move her out of the wind to a warmer spot. Calm and reassure her — anxiety worsens the attack. Oxygen by nasal cannula at 1–4 LPM or a standard mask for a SpO2 of 91%. Assist with her own inhaler. Reassess breathing, SpO2 and the quality of the wheeze after treatment. A disappearing wheeze with no improvement in her work of breathing means she is moving less air, not more — escalate.",
      "medication": {
        "indications": "Acute shortness of breath and wheeze in a patient with a prescribed bronchodilator inhaler.",
        "contraindications": "None stated in the manual for her own prescribed inhaler.",
        "five_rights": {
          "person": "Confirm the name on the inhaler is Priya Raghunathan's — teammates' bags are nearby.",
          "medication": "Salbutamol metered-dose inhaler — read the label aloud; check the expiry date.",
          "dosage": "Her prescribed dose.",
          "route": "Inhaled. Shake three or four times, remove the cap, have her breathe out away from the inhaler, put the mouthpiece between her teeth and seal her lips, press the top once as she takes one slow full breath in, hold up to 10 seconds, then exhale. Use a spacer if available.",
          "time": "As soon as the inhaler is located and the Six Rights are checked.",
          "documentation": "Time, dose, route, effect; note the SpO2 and respiratory rate before and after."
        }
      }
    }
  },
  {
    "meta": {
      "category": "respiratory",
      "condition": "Pneumonia",
      "title": "Third day of the fever",
      "patient": "74-year-old man",
      "reference": "Ch. 6 — Pneumonia; Ch. 5 — Vital Signs",
      "overview": "Community-acquired pneumonia in an older adult, now hypoxic and confused. Tests recognition of the fever / productive cough / pleuritic pain triad and the significance of new confusion in an older patient.",
      "id": "respiratory.pneumonia"
    },
    "scen_survey": {
      "environment": "Apartment bedroom, curtains drawn, stuffy. Walker beside the bed. No hazards.",
      "mechanisms_of_injury": "No trauma. Three days of fever, cough and worsening breathlessness.",
      "casualty_count": "1",
      "assistance": "EMS transport; ask the neighbour who called for the medication list.",
      "ppe": "Gloves, eye protection and a mask — infectious respiratory illness.",
      "impressions": "Frail older man propped on pillows, flushed and shivering, breathing fast, coughing up thick rusty sputum. Confused about the day of the week."
    },
    "primary_survey": {
      "loc": "A but disoriented to time and place — the neighbour says this is new today.",
      "c_spine": "Not indicated — no trauma, no fall.",
      "airway": "Patent; speaking, though answers are muddled.",
      "breathing": "Rapid and shallow, 30/min. Wet cough. Winces on inhalation. Crackles at the right base.",
      "circulation": "Radial pulse 118, regular, weak. Skin flushed, hot and moist.",
      "name": "Gordon Whitfield.",
      "complaint": "Chest pain when breathing and fighting to breathe.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": "No injury. Reduced expansion on the right; he guards the right side.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "88% on room air (moderate hypoxia); 95% on a non-rebreather at 12 LPM."
      },
      "expected_transport_decision": "Rapid transport category — decreased level of responsiveness (new confusion) with moderate hypoxia and abnormal vital signs."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Fever and chills for three days, cough productive of thick rusty-green sputum, sharp right-sided chest pain that is worse on breathing in, nausea, aching all over, headache, exhausted.",
        "allergies": "Codeine — vomiting.",
        "medications": "Metoprolol, ASA 81 mg daily, tamsulosin.",
        "past_medical_history": "Atrial fibrillation, hypertension, benign prostatic hyperplasia. Ex-smoker.",
        "last_intake": "A few sips of water this morning; no solid food for two days.",
        "last_bowel_movement": "Three days ago.",
        "events_preceeding": "Head cold last week that settled into his chest; fever started three days ago.",
        "pain": {
          "onset": "Gradual, over about two days",
          "provoke": "Breathing in, coughing",
          "quality": "Sharp, stabbing",
          "region": "Right lower chest, below the nipple line; no radiation",
          "severity": "7/10 on inspiration, 2/10 at rest",
          "time_duration": "Two days, worse today"
        }
      },
      "vitals": {
        "loc": "A but disoriented to time and place",
        "respiration": {
          "rate": "30",
          "rhythm": "Regular",
          "quality": "Shallow, splinted on the right, wet cough"
        },
        "pulse": {
          "rate": "118",
          "rhythm": "Irregularly irregular (known atrial fibrillation)",
          "quality": "Weak"
        },
        "blood_pressure": "98/58",
        "sp02": "88% room air; 95% on a non-rebreather at 12 LPM",
        "skin": {
          "color": "Flushed, dusky lips",
          "condition": "Hot, moist"
        },
        "temperature": "39.2 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "3 mm"
        },
        "blood_glucose": "9.4 mmol/L",
        "glasgow_coma": "E4 V4 M6 = 14"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": "Reduced expansion on the right. Auscultation: good air entry on the left top and bottom; diminished at the right base with coarse crackles.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Rapid transport maintained; reassess vitals every 5 minutes en route."
    },
    "expected_treatment": {
      "life_saving_intervention": "Semi-Fowler or Fowler position to ease breathing. High-concentration oxygen by non-rebreather at 10–15 LPM — his SpO2 is under 95% and he is dyspneic. Nothing by mouth. Keep him covered but do not overheat him. Mask him and mask yourself. Monitor for deterioration to respiratory arrest and have a BVM ready. Report the new confusion explicitly at transfer of care — in an older adult it is a significant finding, not just 'being old'.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "respiratory",
      "condition": "Acute pulmonary edema",
      "title": "Drowning in the armchair",
      "patient": "79-year-old woman",
      "reference": "Ch. 6 — Acute Pulmonary Edema; Ch. 7 — Congestive Heart Failure",
      "overview": "Acute pulmonary edema secondary to congestive heart failure. Tests recognition of the frothy-sputum picture and the specific positioning instruction: sit her up and dangle her legs to pool fluid away from the lungs.",
      "id": "respiratory.acute_pulmonary_edema"
    },
    "scen_survey": {
      "environment": "Living room at 03:00. Patient found lying flat on the sofa. No hazards.",
      "mechanisms_of_injury": "No trauma. Sudden-onset severe shortness of breath waking her from sleep.",
      "casualty_count": "1",
      "assistance": "EMS transport; ask her son to bring her medications in the bag by the door.",
      "ppe": "Gloves and eye protection; suction on standby for frothy sputum.",
      "impressions": "Older woman struggling to breathe, terrified, coughing up pink frothy sputum, grey and sweating. Speaks one word at a time."
    },
    "primary_survey": {
      "loc": "A but severely distressed and restless.",
      "c_spine": "Not indicated — no trauma.",
      "airway": "Patent but wet — frothy pink sputum at the lips. Suction as needed; keep it clear.",
      "breathing": "Rapid and laboured, 36/min, gurgling and bubbling audible without a stethoscope. Crackles throughout both lungs to the apices.",
      "circulation": "Radial pulse 132, irregular, weak. Skin grey-cyanotic, cool and clammy.",
      "name": "Marguerite Doucet.",
      "complaint": "Drowning — cannot breathe lying down.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": "Jugular venous distension.",
        "clavicles": null,
        "sternum": null,
        "chest": "No injury; wet crackles throughout.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": "Pitting edema to mid-shin both sides.",
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "82% on room air (severe hypoxia); 90% on a non-rebreather at 15 LPM."
      },
      "expected_transport_decision": "Rapid transport category — instability of the ABCs with severe hypoxia."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Woke suddenly gasping. Cannot lie flat — has been sleeping on three pillows for two weeks and on four for the last two nights. Ankles swelling. Coughing pink froth. Exhausted and frightened.",
        "allergies": "None known.",
        "medications": "Furosemide, ramipril, bisoprolol, apixaban. Missed her furosemide for the last three days.",
        "past_medical_history": "Congestive heart failure, previous myocardial infarction 6 years ago, atrial fibrillation.",
        "last_intake": "Salty takeaway soup at dinner, about 8 hours ago.",
        "last_bowel_movement": "Yesterday, normal.",
        "events_preceeding": "Missed her water pill three days running; ankles swelled; woke tonight unable to breathe.",
        "pain": {
          "onset": "No chest pain — ask, and she denies it",
          "provoke": null,
          "quality": "Suffocating sensation rather than pain",
          "region": "Chest tightness, no radiation",
          "severity": "No pain reported",
          "time_duration": "About 30 minutes of breathlessness"
        }
      },
      "vitals": {
        "loc": "A, restless and anxious",
        "respiration": {
          "rate": "36",
          "rhythm": "Regular",
          "quality": "Laboured, gurgling, frothy pink sputum"
        },
        "pulse": {
          "rate": "132",
          "rhythm": "Irregularly irregular",
          "quality": "Weak"
        },
        "blood_pressure": "168/104",
        "sp02": "82% room air; 90% on a non-rebreather at 15 LPM",
        "skin": {
          "color": "Grey with cyanotic lips and nail beds",
          "condition": "Cool, clammy, diaphoretic"
        },
        "temperature": "36.4 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "6.8 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": "Jugular venous distension at 45 degrees.",
        "chest": "Equal expansion; coarse crackles throughout both lungs, top and bottom.",
        "abdomen": {
          "top_left": null,
          "top_right": "Full and tender under the right ribs.",
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Pitting edema to mid-shin bilaterally.",
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Rapid transport. Do not delay for further assessment; complete it en route."
    },
    "expected_treatment": {
      "life_saving_intervention": "Get her sitting fully upright and dangle her legs over the edge of the sofa — this encourages fluid to pool in the legs and away from the lungs. Never lay her flat. High-concentration oxygen by non-rebreather at 15 LPM, reservoir kept full. Suction the frothy sputum as needed to keep the airway clear. Her respiratory rate is above 30 and she is tiring — be ready to assist ventilations with a BVM plus oxygen reservoir, one ventilation on every second inhalation. Keep her calm, minimize her exertion, do not let her walk to the stretcher. Transport her sitting up.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "respiratory",
      "condition": "Pulmonary embolism",
      "title": "Off the overnight flight",
      "patient": "41-year-old woman",
      "reference": "Ch. 6 — Pulmonary Embolism; Ch. 8 — Obstructive Shock",
      "overview": "Pulmonary embolism after a long-haul flight and recent leg immobilization. Tests recognition of sudden dyspnea with hypotension, tachycardia and JVD in a clear-chested patient, and the link back to a venous clot in the leg.",
      "id": "respiratory.pulmonary_embolism"
    },
    "scen_survey": {
      "environment": "Airport arrivals hall, crowded, hard floor. Ask security to clear a space.",
      "mechanisms_of_injury": "No trauma. Sudden collapse and shortness of breath after an 11-hour flight; right lower leg was in a walking cast until nine days ago.",
      "casualty_count": "1",
      "assistance": "EMS transport; airport security for crowd control and a route to the ambulance bay.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Woman on the floor beside her suitcase, pale and sweating, breathing fast, clutching the right side of her chest. Bystanders say she fainted."
    },
    "primary_survey": {
      "loc": "A on your arrival; she reports having fainted a minute earlier.",
      "c_spine": "Consider it — she collapsed to a hard floor from standing. She was ambulatory immediately afterwards, is alert with no neck pain and no midline C-spine tenderness, so under the Canadian C-Spine Rule spinal motion restriction is not indicated. Say so aloud.",
      "airway": "Patent; speaking in short sentences.",
      "breathing": "Rapid, 34/min, shallow. Chest sounds clear on both sides — no wheeze, no crackles.",
      "circulation": "Radial pulse 134, regular, weak and thready. Skin pale, cool and clammy. Neck veins distended.",
      "name": "Sandra Oyelaran.",
      "complaint": "Cannot breathe and a sharp pain in the right chest.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": "Jugular venous distension.",
        "clavicles": null,
        "sternum": null,
        "chest": "No injury; clear breath sounds despite the severity of the distress.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": "Right calf swollen, warm, red and tender compared with the left.",
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "87% on room air (moderate hypoxia); 93% on a non-rebreather at 15 LPM."
      },
      "expected_transport_decision": "Rapid transport category — instability of the ABCs, hypotension and a decreased level of responsiveness episode (syncope)."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Sudden shortness of breath and sharp right chest pain that started as she stood up at baggage claim. Fainted briefly. Dry cough. Anxious, feels she is going to die. Right calf has been aching for two days.",
        "allergies": "None known.",
        "medications": "Combined oral contraceptive pill.",
        "past_medical_history": "Right ankle fracture 7 weeks ago, walking cast removed 9 days ago. Otherwise well. Smoker.",
        "last_intake": "Airline breakfast about 3 hours ago.",
        "last_bowel_movement": "Yesterday, normal.",
        "events_preceeding": "11-hour overnight flight in a window seat, did not get up. Symptoms began on standing at the carousel.",
        "pain": {
          "onset": "Sudden, about 10 minutes ago",
          "provoke": "Deep breathing and coughing",
          "quality": "Sharp, stabbing",
          "region": "Right side of the chest; no radiation to arm or jaw",
          "severity": "8/10 on inspiration",
          "time_duration": "10 minutes, constant"
        }
      },
      "vitals": {
        "loc": "A, anxious; reports a brief loss of responsiveness before your arrival",
        "respiration": {
          "rate": "34",
          "rhythm": "Regular",
          "quality": "Shallow, splinted, clear breath sounds"
        },
        "pulse": {
          "rate": "134",
          "rhythm": "Regular",
          "quality": "Weak, thready"
        },
        "blood_pressure": "86/54",
        "sp02": "87% room air; 93% on a non-rebreather at 15 LPM",
        "skin": {
          "color": "Pale with cyanotic lips",
          "condition": "Cool, clammy"
        },
        "temperature": "37.8 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "5 mm"
        },
        "blood_glucose": "5.7 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": "Jugular venous distension.",
        "chest": "Equal expansion; clear and equal air entry both sides, top and bottom.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Right calf 4 cm larger in circumference than the left, warm, red, tender along the deep veins. Pedal pulses present and equal. Recent cast line visible.",
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Rapid transport. Definitive care requires hospitalization and thrombolytic or heparin therapy — nothing at this level will fix it."
    },
    "expected_treatment": {
      "life_saving_intervention": "Rest her in a position of comfort — most of these patients prefer sitting up. High-concentration oxygen by non-rebreather at 15 LPM. Minimize her exertion completely: no walking, no self-transfer onto the stretcher. Keep her warm. Monitor for progression to shock and cardiac arrest. Note that the shock position is not indicated here. Nothing by mouth. Transport without delay and report the flight, the recent cast and the calf findings at handover.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "respiratory",
      "condition": "Hyperventilation",
      "title": "After the phone call",
      "patient": "19-year-old man",
      "reference": "Ch. 6 — Hyperventilation, Care for Respiratory Distress",
      "overview": "Anxiety-driven hyperventilation. Tests coached-breathing management and, more importantly, the discipline to rule out the organic causes the manual lists — head trauma, hemorrhage, fever, heart or lung disease, diabetic emergency — before settling on anxiety.",
      "id": "respiratory.hyperventilation"
    },
    "scen_survey": {
      "environment": "College residence hallway, students gathering. Ask them to give space.",
      "mechanisms_of_injury": "No trauma. Onset immediately after receiving distressing news by phone.",
      "casualty_count": "1",
      "assistance": "Campus security for privacy; EMS only if he does not settle or organic causes are suspected.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Young man sitting against the wall, breathing very fast and shallow, hands shaking, saying he cannot get enough air and is going to pass out."
    },
    "primary_survey": {
      "loc": "A, fearful and agitated, speaking in a rush.",
      "c_spine": "Not indicated — no trauma, no fall.",
      "airway": "Patent; speaking in full sentences, quickly.",
      "breathing": "Shallow and rapid, 38/min, regular. No wheeze, no crackles, equal air entry. The lack of any abnormal breath sound is the key negative finding.",
      "circulation": "Radial pulse 116, regular, full. Skin flushed and moist.",
      "name": "Ethan Mbeki.",
      "complaint": "Cannot get enough air; feels like suffocating.",
      "rapid_body_survey": {
        "head": "No injury, no bruising, no fluid from ears or nose — rule out head trauma explicitly.",
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": "No injury; equal expansion.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "99% on room air — normal, which is itself diagnostic here."
      },
      "expected_transport_decision": "Not rapid transport, provided the assessment rules out the organic causes. State that reasoning aloud rather than assuming anxiety. Escalate if the blood glucose is abnormal, there is any head trauma history, fever, or the SpO2 is anything other than normal."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Cannot get enough air, dizzy, light-headed, fingers and toes numb and tingling, hands cramping, chest tight, feels he is dying.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Two similar episodes in the last year, both during exams. No asthma, no diabetes, no heart or lung disease.",
        "last_intake": "Lunch about 4 hours ago; no alcohol or drugs.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Phone call with bad family news roughly 5 minutes before onset. No injury, no exertion, no exposure.",
        "pain": {
          "onset": "Sudden, with the phone call",
          "provoke": "Thinking about the call",
          "quality": "Tight, band-like — not sharp, not crushing",
          "region": "Across the chest; no radiation to arm, neck or jaw",
          "severity": "4/10",
          "time_duration": "About 5 minutes"
        }
      },
      "vitals": {
        "loc": "A, agitated",
        "respiration": {
          "rate": "38",
          "rhythm": "Regular",
          "quality": "Shallow and rapid; clear, equal air entry"
        },
        "pulse": {
          "rate": "116",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "138/82",
        "sp02": "99% room air",
        "skin": {
          "color": "Flushed",
          "condition": "Warm, moist"
        },
        "temperature": "36.9 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "5 mm"
        },
        "blood_glucose": "5.3 mmol/L — normal, ruling out a diabetic cause",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "No trauma, no bruising, no drainage from ears or nose.",
        "neck": null,
        "chest": "Equal expansion; clear and equal air entry, top and bottom, both sides.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": "Carpal spasm — fingers drawn together. Sensation intact, radial pulses equal, capillary refill under 2 seconds.",
        "back": null
      },
      "expected_transport_decision": "If he settles to a normal rate and the tingling resolves, he may be released to campus health or a friend with follow-up advice. Transport if he does not settle, or if anything in the assessment points to an organic cause."
    },
    "expected_treatment": {
      "life_saving_intervention": "Move him somewhere quieter and clear the onlookers. Sit him in a comfortable position and loosen restrictive clothing. Reassure him calmly — reassurance alone is often enough. Ask him to breathe along with you: breathe at a normal rate yourself, emphasizing each inhalation and exhalation, and have him match you. Do not have him breathe into a bag. Do not withhold assessment because 'it is just anxiety' — check SpO2, blood glucose, and for head trauma, fever and hemorrhage before you commit to that conclusion. Reassess as his rate slows.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "circulatory",
      "condition": "Angina pectoris",
      "title": "Shovelling the driveway",
      "patient": "66-year-old man",
      "reference": "Ch. 7 — Angina; Ch. 22 — Six Rights",
      "overview": "Stable angina following exertion, relieved by rest and his own nitroglycerin. Tests the stable-versus-unstable distinction, the nitroglycerin contraindication checks (systolic pressure and erectile-dysfunction drugs), and the rule that if you cannot tell angina from an MI, you treat for MI.",
      "id": "circulatory.angina"
    },
    "scen_survey": {
      "environment": "Suburban driveway, −8 °C, fresh snow. Icy footing; move him inside or into the ambulance.",
      "mechanisms_of_injury": "No trauma. Chest pain brought on by shovelling heavy wet snow.",
      "casualty_count": "1",
      "assistance": "EMS transport; ask his wife for his medications and his usual angina pattern.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Older man leaning on a snow shovel, hand on the centre of his chest, pale and sweating. Speaking in full sentences."
    },
    "primary_survey": {
      "loc": "A, oriented.",
      "c_spine": "Not indicated — no fall, no trauma. He is still standing.",
      "airway": "Patent; speaking in full sentences.",
      "breathing": "Slightly increased at 22/min, unlaboured, clear and equal.",
      "circulation": "Radial pulse 96, regular, full. Skin pale and moist.",
      "name": "Walter Prydz.",
      "complaint": "Pressure in the centre of his chest.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "96% on room air."
      },
      "expected_transport_decision": "Chest pain with a suspected cardiac cause puts him in the rapid transport category. The first dose of indicated medication is normally taken at scene. Do not downgrade him just because the pain settles."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Chest pressure, mild shortness of breath, sweating, slight nausea. He says 'this is my usual angina, it just took longer to come on today'.",
        "allergies": "None known.",
        "medications": "Sublingual nitroglycerin spray as needed, metoprolol, atorvastatin, ASA 81 mg daily. Ask specifically about erectile-dysfunction medication — he has not taken any.",
        "past_medical_history": "Stable angina for four years. Coronary heart disease. Hypertension. His usual episodes last about 5 minutes and settle with rest and one spray of nitroglycerin.",
        "last_intake": "Coffee and toast about 90 minutes ago.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Twenty minutes of shovelling heavy wet snow in the cold.",
        "pain": {
          "onset": "Gradual, over about a minute while shovelling",
          "provoke": "Exertion makes it worse; stopping and resting makes it better",
          "quality": "Pressure, constricting — 'like a belt tightening'",
          "region": "Centre of the chest behind the sternum, spreading a little into the left shoulder",
          "severity": "5/10, dropping to 1/10 within 5 minutes of rest and nitroglycerin",
          "time_duration": "About 6 minutes; his usual pattern is about 5 minutes"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "22",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear"
        },
        "pulse": {
          "rate": "96",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "146/88 before nitroglycerin; 124/76 five minutes after",
        "sp02": "96% room air",
        "skin": {
          "color": "Pale",
          "condition": "Cool, moist"
        },
        "temperature": "36.7 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "6.2 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": "No injury, no deformity. Equal expansion, clear and equal air entry.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Transport. He improved with rest and medication, consistent with stable angina, but the distinction from an MI cannot be made reliably in the field."
    },
    "expected_treatment": {
      "life_saving_intervention": "Stop the exertion immediately and sit him down in a position of comfort — do not let him walk. Move him out of the cold. Oxygen if his SpO2 drops below 95% or he becomes dyspneic; it is 96% here, so it is not automatically indicated. Take a blood pressure before and after nitroglycerin. Calm and reassure him. Be prepared for CPR — any cardiac event can progress to cardiac arrest. Reassess pain with OPQRST every 5 minutes.",
      "medication": {
        "indications": "Chest pain consistent with his diagnosed angina, in a patient with his own prescribed nitroglycerin. He confirms he would normally take it now.",
        "contraindications": "Low blood pressure — in general a systolic below 100 mmHg. Sildenafil or vardenafil in the previous 24 hours, or tadalafil in the previous 48 hours; the combination can cause a fatal drop in blood pressure. Ask before offering it. Neither applies here — his systolic is 146 and he takes no ED medication.",
        "five_rights": {
          "person": "Confirm the name on the nitroglycerin spray is Walter Prydz's.",
          "medication": "Nitroglycerin sublingual spray — read the label aloud; check the expiry date.",
          "dosage": "His prescribed dose. May be repeated every 5 minutes until the pain is relieved or 3 doses have been given.",
          "route": "Sublingual — under the tongue. Not to be swallowed or inhaled; nothing else by mouth until it is absorbed. He should be seated or resting when he takes it.",
          "time": "After the blood pressure is taken and the ED-drug question is asked. Record the time of each dose.",
          "documentation": "Time, dose, route and effect for each dose, plus blood pressure before and after each one, and the pain score before and after."
        }
      }
    }
  },
  {
    "meta": {
      "category": "circulatory",
      "condition": "Myocardial infarction",
      "title": "Not indigestion",
      "patient": "59-year-old woman with diabetes",
      "reference": "Ch. 7 — Myocardial Infarction, Care for Myocardial Infarctions; Ch. 22 — Six Rights",
      "overview": "An MI presenting with soft signs in a woman with diabetes — the group the manual specifically warns about for silent MI. Tests the willingness to treat for MI on an incomplete picture, correct ASA administration, and the ASA contraindications.",
      "id": "circulatory.myocardial_infarction"
    },
    "scen_survey": {
      "environment": "Office kitchenette, colleagues present. No hazards.",
      "mechanisms_of_injury": "No trauma. Gradual onset of chest discomfort, nausea and fatigue over about 40 minutes.",
      "casualty_count": "1",
      "assistance": "EMS transport; ask a colleague to bring the AED to the room and clear a path.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Woman sitting at a table, grey and sweating, hand loosely on her upper abdomen, saying she just has bad indigestion and would like to go home."
    },
    "primary_survey": {
      "loc": "A, oriented but playing the symptoms down.",
      "c_spine": "Not indicated — no trauma.",
      "airway": "Patent; speaking in full sentences.",
      "breathing": "26/min, slightly laboured, clear and equal. She admits to feeling short of breath when asked directly.",
      "circulation": "Radial pulse 108, irregular, weak. Skin pale/grey, cool and very moist.",
      "name": "Ines Barbosa.",
      "complaint": "'Indigestion.' Her chief complaint is what she says it is — record it, then assess it as chest discomfort.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "93% on room air (mild hypoxia)."
      },
      "expected_transport_decision": "Rapid transport category — chest pain with a suspected heart attack. Do not let her talk you out of it; denial is a common and dangerous reaction."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Vague, unfocused chest discomfort that keeps getting stronger, nausea, one episode of vomiting, profuse sweating, unusual fatigue, shortness of breath, 'flu-ish'. She insists it is indigestion.",
        "allergies": "None known. Ask specifically about asthma and stomach ulcers before giving ASA — she has neither.",
        "medications": "Metformin, perindopril, rosuvastatin.",
        "past_medical_history": "Type 2 diabetes for 11 years, hypertension, high cholesterol. Father died of a heart attack at 61.",
        "last_intake": "Sandwich about 2 hours ago.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Sitting at her desk; discomfort came on at rest, not with exertion.",
        "pain": {
          "onset": "Gradual over about 40 minutes, at rest",
          "provoke": "Nothing makes it better; walking to the kitchenette made it worse",
          "quality": "Heavy, aching, a squeezing weight — not sharp, not worse with a deep breath",
          "region": "Behind the sternum and into the upper abdomen; radiating into the jaw and left shoulder when asked directly",
          "severity": "6/10 and climbing",
          "time_duration": "About 40 minutes, constant, not relieved by rest or antacids"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "26",
          "rhythm": "Regular",
          "quality": "Slightly laboured, clear and equal"
        },
        "pulse": {
          "rate": "108",
          "rhythm": "Irregular",
          "quality": "Weak"
        },
        "blood_pressure": "92/58",
        "sp02": "93% room air; 97% on a standard mask at 8 LPM",
        "skin": {
          "color": "Pale grey, dusky around the mouth",
          "condition": "Cool, diaphoretic"
        },
        "temperature": "36.5 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "11.8 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": "No injury, no deformity. Equal expansion; clear and equal air entry, top and bottom.",
        "abdomen": {
          "top_left": "Soft, mildly tender, not rigid",
          "top_right": "Soft, not tender",
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Rapid transport. Most patients die within one to two hours of the first symptoms; every minute of persuasion costs her."
    },
    "expected_treatment": {
      "life_saving_intervention": "Keep her in a position of comfort and do not let her walk or exert herself. Oxygen — her SpO2 is under 95% and she is dyspneic. Apply the defibrillator pads early and leave the unit with her; be prepared to start CPR. Calm and reassure her; anxiety increases the heart's oxygen demand. Reassess vitals every 5 minutes. Nitroglycerin is not indicated here — she has none prescribed and her systolic is 92, below the 100 mmHg threshold. Transport her medications with her.",
      "medication": {
        "indications": "Any patient experiencing chest pain should chew ASA to reduce clot formation and limit damage to the heart muscle.",
        "contraindications": "Asthma, and bleeding conditions such as ulcers. Confirm neither applies before giving it. Do not substitute acetaminophen or ibuprofen — they do not have the same effect.",
        "five_rights": {
          "person": "Ines Barbosa, confirmed by name; no allergy to ASA, no asthma, no ulcer history.",
          "medication": "Acetylsalicylic acid (ASA) — read the label and confirm it is ASA, not acetaminophen or ibuprofen. Check the expiry date.",
          "dosage": "160 to 325 mg, depending on what is available. Do not repeat the dose.",
          "route": "Oral — chewed, not swallowed whole. She must be responsive and able to protect her own airway.",
          "time": "As soon as chest pain of suspected cardiac origin is recognized, at the scene.",
          "documentation": "Time, dose, route, effect. Record that ASA was given, so the receiving facility does not repeat it."
        }
      }
    }
  },
  {
    "meta": {
      "category": "circulatory",
      "condition": "Congestive heart failure — left-sided",
      "title": "Three pillows and still not enough",
      "patient": "82-year-old man",
      "reference": "Ch. 7 — Left-Sided Heart Failure; Ch. 6 — Acute Pulmonary Edema",
      "overview": "Left-sided failure backing blood up into the lungs. Tests recognition of the specific left-sided sign set — orthopnea, foamy blood-tinged sputum, wheeze, pale cool clammy skin, normal-to-high blood pressure, confusion — and the contrast with right-sided failure.",
      "id": "circulatory.congestive_heart_failure.left_side"
    },
    "scen_survey": {
      "environment": "Long-term care room, bed raised. Staff present. No hazards.",
      "mechanisms_of_injury": "No trauma. Progressive breathlessness over three days, acutely worse tonight.",
      "casualty_count": "1",
      "assistance": "EMS transport; nursing staff for the medication administration record and baseline observations.",
      "ppe": "Gloves and eye protection; suction on standby.",
      "impressions": "Frail older man bolt upright in bed, panicky and restless, pale and clammy, coughing up foamy pink-tinged sputum. Speaks two or three words at a time."
    },
    "primary_survey": {
      "loc": "A but confused and disoriented — staff confirm this is a change from his baseline.",
      "c_spine": "Not indicated — no fall, no trauma.",
      "airway": "Patent but wet; foamy blood-tinged sputum at the lips. Keep it clear with suction.",
      "breathing": "Laboured, 34/min, audible wheeze and wet crackles. Cannot tolerate lying flat at all.",
      "circulation": "Radial pulse 124, regular, weak. Skin pale, cool and clammy.",
      "name": "Arthur Penhale.",
      "complaint": "Cannot breathe.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": "No injury; wet crackles and wheeze throughout.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "85% on room air (severe hypoxia); 92% on a non-rebreather at 15 LPM."
      },
      "expected_transport_decision": "Rapid transport category — instability of the ABCs, severe hypoxia and a decreased level of responsiveness."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Severe shortness of breath that is much worse lying down and better sitting or standing. Cough with foamy, faintly blood-tinged sputum. Panicky and agitated. Confused about where he is.",
        "allergies": "Sulfa — rash.",
        "medications": "Furosemide, ramipril, carvedilol, spironolactone, warfarin.",
        "past_medical_history": "Congestive heart failure, previous large anterior myocardial infarction 9 years ago, chronic hypertension.",
        "last_intake": "Half his dinner about 5 hours ago.",
        "last_bowel_movement": "Yesterday, normal.",
        "events_preceeding": "Breathless on exertion for three days, then acutely breathless on lying down tonight.",
        "pain": {
          "onset": "No chest pain — ask and he denies it",
          "provoke": null,
          "quality": "Suffocating, not painful",
          "region": "Chest tightness, no radiation",
          "severity": "No pain reported",
          "time_duration": "Breathlessness for about 45 minutes"
        }
      },
      "vitals": {
        "loc": "A but disoriented to place and time (new)",
        "respiration": {
          "rate": "34",
          "rhythm": "Regular",
          "quality": "Laboured, wheezing, wet crackles, foamy blood-tinged sputum"
        },
        "pulse": {
          "rate": "124",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "176/98 — note that left-sided failure typically presents with normal to high blood pressure",
        "sp02": "85% room air; 92% on a non-rebreather at 15 LPM",
        "skin": {
          "color": "Pale with cyanotic lips and nail beds",
          "condition": "Cool, clammy"
        },
        "temperature": "36.2 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "3 mm"
        },
        "blood_glucose": "7.6 mmol/L",
        "glasgow_coma": "E4 V4 M6 = 14"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": "Mild jugular venous distension.",
        "chest": "Equal expansion; wheeze and coarse crackles throughout both lungs, worse at the bases.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Minimal ankle swelling — the fluid here is in the lungs, not the periphery.",
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Rapid transport; complete the assessment en route."
    },
    "expected_treatment": {
      "life_saving_intervention": "Keep him fully upright — Fowler position, legs dependent — and never lay him flat. High-concentration oxygen by non-rebreather at 15 LPM with the reservoir kept full. Suction the frothy sputum as needed. His rate is above 30 and he is tiring: be ready to assist ventilations with a BVM and oxygen reservoir. Keep him calm and minimize exertion — do not let him self-transfer. Nothing by mouth. Report the new confusion and the fact that he cannot lie flat at handover.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "circulatory",
      "condition": "Congestive heart failure — right-sided",
      "title": "Swollen ankles and up all night",
      "patient": "75-year-old woman",
      "reference": "Ch. 7 — Right-Sided Heart Failure",
      "overview": "Right-sided failure with peripheral fluid pooling. Tests the contrast with left-sided failure and the judgement call the manual states plainly: right-sided failure by itself is seldom a life-threatening emergency, so this patient does not automatically go into the rapid transport category.",
      "id": "circulatory.congestive_heart_failure.right_side"
    },
    "scen_survey": {
      "environment": "Bungalow living room, daytime. Recliner with the footrest up. No hazards.",
      "mechanisms_of_injury": "No trauma. Two weeks of worsening leg swelling, fatigue and mild breathlessness.",
      "casualty_count": "1",
      "assistance": "EMS transport for assessment; ask her son for the medication list.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Older woman in a recliner, comfortable at rest, markedly swollen ankles and feet, speaking in full sentences. Not in acute distress."
    },
    "primary_survey": {
      "loc": "A, oriented.",
      "c_spine": "Not indicated — no trauma. She has not fallen.",
      "airway": "Patent; full sentences.",
      "breathing": "20/min, unlaboured at rest, becomes short of breath walking across the room. Lungs clear at the bases.",
      "circulation": "Radial pulse 104, irregular, full. Skin normal colour, warm and dry. Neck veins visibly distended.",
      "name": "Doreen Alsop.",
      "complaint": "Legs swelling up and no energy.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": "Jugular venous distension, clearly visible sitting at about 45 degrees.",
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": "Pitting edema to just below the knees, both sides. Skin taut and shiny.",
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": "Sacral swelling from sitting in the recliner much of the day."
      },
      "shock_check": {
        "spo2": "94% on room air."
      },
      "expected_transport_decision": "Not rapid transport. Right-sided heart failure by itself is seldom a life-threatening emergency and her ABCs are stable. Transport for assessment, and say aloud why she is not in the rapid transport category. Escalate immediately if she develops orthopnea, frothy sputum, chest pain, an altered level of responsiveness, or hypoxia."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Ankles and feet swelling for two weeks and now up to her knees. Weak and tired. Getting up four or five times a night to urinate. Two brief fainting spells this week on standing. Short of breath on exertion only. Shoes no longer fit.",
        "allergies": "None known.",
        "medications": "Furosemide, digoxin, apixaban. Admits to skipping the furosemide because of the trips to the bathroom.",
        "past_medical_history": "Long-standing COPD, atrial fibrillation, right-sided heart failure diagnosed 3 years ago. Ex-smoker, 40 pack-years.",
        "last_intake": "Tea and a biscuit an hour ago.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "No acute event. Gradual worsening after stopping her diuretic.",
        "pain": {
          "onset": "No chest pain",
          "provoke": "Legs ache when they are dependent, ease when elevated",
          "quality": "Heavy, aching, tight",
          "region": "Both lower legs",
          "severity": "3/10",
          "time_duration": "Two weeks, gradually worsening"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "20",
          "rhythm": "Regular",
          "quality": "Unlaboured at rest; clear at the bases"
        },
        "pulse": {
          "rate": "104",
          "rhythm": "Irregularly irregular",
          "quality": "Full"
        },
        "blood_pressure": "132/84",
        "sp02": "94% room air",
        "skin": {
          "color": "Normal",
          "condition": "Warm, dry"
        },
        "temperature": "36.8 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "3 mm"
        },
        "blood_glucose": "5.8 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": "Jugular venous distension in the Semi-Fowler position.",
        "chest": "Equal expansion; air entry equal, clear at the bases — no crackles.",
        "abdomen": {
          "top_left": null,
          "top_right": "Full and mildly tender under the right ribs (congested liver).",
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Pitting edema to below the knees bilaterally, deep and slow to rebound. Skin taut, warm. Pedal pulses present but hard to palpate through the swelling; capillary refill about 3 seconds in the toes.",
        "arms": null,
        "back": "Sacral edema."
      },
      "expected_transport_decision": "Transport for physician assessment, not rapid transport. Note the two syncopal episodes in your report — any loss of responsiveness warrants a thorough assessment."
    },
    "expected_treatment": {
      "life_saving_intervention": "Position of comfort, sitting up. Oxygen is not automatically indicated at 94% and no distress; apply it if she becomes dyspneic or the SpO2 falls below 95%. Handle the edematous legs gently — taut, swollen skin tears easily. Do not elevate the legs above the heart without assessing her breathing first, since returning that fluid centrally can worsen it. Reassess vitals every 30 minutes as a stable patient. Report the missed diuretic doses and the syncopal episodes.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "circulatory",
      "condition": "Jugular venous distension (JVD)",
      "title": "The neck veins tell the story",
      "patient": "68-year-old man",
      "reference": "Ch. 7 — Jugular Venous Distention (JVD), Right-Sided Heart Failure",
      "overview": "A scenario built around finding and interpreting JVD. The learner must position the patient at 30–45 degrees to assess it properly, recognize what it indicates — venous return overwhelming the heart's ability to pump it out — and state the other conditions that produce it.",
      "id": "circulatory.congestive_heart_failure.jugular_distension"
    },
    "scen_survey": {
      "environment": "Community hall after a seniors' exercise class. Chairs available. No hazards.",
      "mechanisms_of_injury": "No trauma. Increasing breathlessness and neck fullness over ten days.",
      "casualty_count": "1",
      "assistance": "EMS transport; ask the class leader for a chair and some privacy.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Older man sitting on a chair, breathing a little fast, obviously full veins standing out on both sides of his neck. Alert and cooperative."
    },
    "primary_survey": {
      "loc": "A, oriented.",
      "c_spine": "Not indicated — no trauma.",
      "airway": "Patent; full sentences.",
      "breathing": "24/min, mildly laboured on exertion, clear and equal breath sounds.",
      "circulation": "Radial pulse 112, irregular, weak. Skin slightly dusky, cool and dry. Jugular veins distended bilaterally and do not flatten when he sits up.",
      "name": "Bernard Whitlock.",
      "complaint": "Neck feels full and tight, and he gets winded easily.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": "Bilateral jugular venous distension — the key finding. Assess it with him inclined 30 to 45 degrees (Semi-Fowler). It is also visible when he is supine. No tracheal deviation, no deformity, no subcutaneous crepitus.",
        "clavicles": null,
        "sternum": null,
        "chest": "No injury; equal expansion; equal air entry both sides.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": "Pitting edema to mid-shin bilaterally.",
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "93% on room air (mild hypoxia)."
      },
      "expected_transport_decision": "Transport for assessment. JVD on its own is a sign, not a diagnosis — but state the differential aloud: right-sided heart failure (most likely here), and also anything obstructing flow into the right atrium or ventricle, such as tension pneumothorax, pulmonary embolism or COPD. Escalate to rapid transport if tracheal deviation, hypotension or acute distress appear, which would point to tension pneumothorax."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Neck fullness, breathless on exertion, ankles swelling, tired, waking to urinate at night. No chest pain, no cough, no fever.",
        "allergies": "None known.",
        "medications": "Furosemide, digoxin, apixaban, salbutamol inhaler.",
        "past_medical_history": "Right-sided heart failure secondary to long-standing COPD. Atrial fibrillation.",
        "last_intake": "Water 20 minutes ago.",
        "last_bowel_movement": "Yesterday, normal.",
        "events_preceeding": "Gradual over ten days; noticed the neck veins himself while shaving.",
        "pain": {
          "onset": "No pain",
          "provoke": null,
          "quality": "Fullness and tightness in the neck rather than pain",
          "region": "Both sides of the neck",
          "severity": "No pain reported",
          "time_duration": "Ten days"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "24",
          "rhythm": "Regular",
          "quality": "Mildly laboured on exertion; clear and equal"
        },
        "pulse": {
          "rate": "112",
          "rhythm": "Irregularly irregular",
          "quality": "Weak"
        },
        "blood_pressure": "128/86 — note it is not low, which argues against tension pneumothorax",
        "sp02": "93% room air; 97% on a nasal cannula at 4 LPM",
        "skin": {
          "color": "Slightly dusky",
          "condition": "Cool, dry"
        },
        "temperature": "36.6 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "3 mm"
        },
        "blood_glucose": "6.0 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": "Marked bilateral jugular venous distension at 30 to 45 degrees. Trachea midline. No masses, no tenderness.",
        "chest": "Barrel-shaped. Equal expansion; equal air entry top and bottom, both sides — no absent or diminished side.",
        "abdomen": {
          "top_left": null,
          "top_right": "Full, mildly tender under the right ribs.",
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Pitting edema to mid-shin bilaterally; pedal pulses present and equal.",
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Transport for assessment. Reassess vitals every 30 minutes as a stable patient, and reassess the neck and breath sounds specifically for any change."
    },
    "expected_treatment": {
      "life_saving_intervention": "Sit him in the Semi-Fowler position, inclined 30 to 45 degrees — the position in which JVD is most easily assessed and also a comfortable one for him. Oxygen by nasal cannula at 1–4 LPM for a SpO2 of 93% with mild exertional dyspnea. Minimize his exertion. Re-examine the neck and both lung fields on every reassessment; a newly absent breath sound on one side with worsening distress and falling blood pressure changes this from heart failure to a tension pneumothorax and to immediate rapid transport.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "circulatory",
      "condition": "Cerebrovascular accident (stroke)",
      "title": "Left the kettle on",
      "patient": "70-year-old woman",
      "reference": "Ch. 7 — Cerebrovascular Accident, FAST, Cincinnati Pre-hospital Stroke Scale",
      "overview": "Ischemic stroke with one-sided deficits. Tests FAST and CPSS assessment, establishing and reporting the time of onset, keeping her nil by mouth, and positioning her affected side down if she must go into the recovery position.",
      "id": "circulatory.cerebrovascular_accident"
    },
    "scen_survey": {
      "environment": "Kitchen; kettle boiling dry on the stove — turn it off before assessing. Spilled tea on the floor.",
      "mechanisms_of_injury": "No trauma; she was found sitting at the table. No fall witnessed and no evidence of one.",
      "casualty_count": "1",
      "assistance": "EMS transport, ideally to a stroke centre with thrombolytic therapy. Notify the receiving facility early and include the time of onset.",
      "ppe": "Gloves and eye protection; suction on standby.",
      "impressions": "Older woman at the kitchen table, right side of her face drooping, right arm resting limp in her lap, drooling slightly, trying to speak and producing the wrong words. Frightened."
    },
    "primary_survey": {
      "loc": "A — eyes open, tracks you, follows simple commands, but cannot answer questions clearly. Do not mistake speech difficulty for a reduced level of responsiveness.",
      "c_spine": "Not indicated — no witnessed fall, no trauma found, she was seated. State the reasoning; if a fall could not be ruled out, this answer would change.",
      "airway": "At risk. She is drooling and pooling saliva on the right, and her swallow is unreliable. Keep her positioned so the airway drains and have suction ready.",
      "breathing": "18/min, regular, unlaboured, clear and equal.",
      "circulation": "Radial pulse 92, irregular, full. Skin normal colour, warm and dry.",
      "name": "Margaret Fenwick (from her daughter).",
      "complaint": "Cannot speak properly and cannot move her right arm.",
      "rapid_body_survey": {
        "head": "Right-sided facial droop. No injury, no bruising, no fluid from the ears or nose.",
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": "Right leg weak, drifts when raised. Left leg normal.",
        "arms_humerus": null,
        "arms_rest": "Right arm flaccid, no grip. Left arm normal strength.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "96% on room air."
      },
      "expected_transport_decision": "Rapid transport category — neurological deficits. Stroke patients are always in the rapid transport category and transport must not be delayed. Time is the treatment."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Sudden right-sided weakness and numbness of face, arm and leg. Difficulty producing words and understanding questions. Blurred vision on the right. Sudden headache. Confused and frightened. No incontinence.",
        "allergies": "Penicillin — hives.",
        "medications": "Amlodipine, apixaban, atorvastatin.",
        "past_medical_history": "Atrial fibrillation, hypertension, high cholesterol. A brief episode of slurred speech six weeks ago that cleared in 20 minutes — she did not seek care. That was almost certainly a TIA; report it.",
        "last_intake": "Tea and toast at 07:30 — nothing since. Give her nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Daughter spoke to her by phone at 09:05 and she was completely normal. Daughter arrived at 09:40 and found her like this. Last known well: 09:05. Report that time, not the time she was found.",
        "pain": {
          "onset": "Sudden headache at some point in the last 35 minutes",
          "provoke": "Nothing changes it",
          "quality": "Dull, heavy pressure",
          "region": "Left side of the head",
          "severity": "She indicates about 5/10 by holding up fingers",
          "time_duration": "Unknown; within the last 35 minutes"
        }
      },
      "vitals": {
        "loc": "A; expressive and receptive speech difficulty",
        "respiration": {
          "rate": "18",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "92",
          "rhythm": "Irregularly irregular",
          "quality": "Full"
        },
        "blood_pressure": "198/104",
        "sp02": "96% room air",
        "skin": {
          "color": "Normal",
          "condition": "Warm, dry"
        },
        "temperature": "36.9 °C",
        "pupils": {
          "equal": "Unequal — right 5 mm, left 3 mm",
          "reactive": "Right sluggish, left reactive",
          "size": "Right 5 mm, left 3 mm"
        },
        "blood_glucose": "6.4 mmol/L — check it; hypoglycemia mimics stroke",
        "glasgow_coma": "E4 V3 M6 = 13 — a score of 13 or lower requires rapid transport"
      },
      "head_to_toe_exam": {
        "head": "FAST — Face: right-sided droop. Arm: right arm does not move, left is normal. Speech: uses incorrect words and slurs. Time: last known well 09:05. CPSS abnormal in all three categories.",
        "neck": "No injury, no tenderness.",
        "chest": null,
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Right leg weak against resistance, left normal. Pedal pulses equal.",
        "arms": "With eyes closed and both arms held out for 10 seconds, the right arm drops immediately. Right grip absent, left grip strong. Radial pulses equal, capillary refill under 2 seconds both sides.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport to a stroke centre. Do not delay for further assessment. Notify the hospital en route with the time of symptom onset — thrombolytics are only effective in a short window."
    },
    "expected_treatment": {
      "life_saving_intervention": "Turn off the kettle. Nothing by mouth — no food, no drink, no oral medication. Position her so you can manage the airway: if she must be rolled into the recovery position, put the affected side (right) downwards. Have suction immediately available. Oxygen is not automatically indicated at 96% with no distress; apply it if the SpO2 drops below 95%. Comfort and reassure her — she is likely to understand more than she can express, so speak to her directly, not only to her daughter. Reassess the ABCs and level of responsiveness every 5 minutes as an unstable patient. Take her medications with her, and hand over the last-known-well time as the single most important piece of information.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "shock",
      "condition": "Hypovolemic (hemorrhagic) shock — decompensated",
      "title": "Black stools and a grey face",
      "patient": "64-year-old man",
      "reference": "Ch. 8 — Stages of Shock, Care for Shock; Ch. 13 — GI Bleeding",
      "overview": "Hemorrhagic shock from an upper gastrointestinal bleed, presenting well into the decompensated stage. Tests recognition of the stage (not just 'he's in shock'), the shock-position rules, and the reasoning that the underlying hemorrhage cannot be controlled in the field.",
      "id": "shock"
    },
    "scen_survey": {
      "environment": "Bathroom of a small apartment. Coffee-ground vomit in the toilet and on the floor, black tarry stool in the bowl — both are findings, not just mess. Confined space; plan the extrication route before you start.",
      "mechanisms_of_injury": "No trauma. Internal hemorrhage from the upper GI tract — three days of black tarry stools and two episodes of vomiting dark 'coffee-ground' material today.",
      "casualty_count": "1",
      "assistance": "EMS transport with a second crew for the extrication from the bathroom. He may need a blood transfusion or surgery — notify the hospital early.",
      "ppe": "Gloves, gown and eye protection — blood and vomit exposure.",
      "impressions": "Man sitting slumped against the bathtub, grey, drenched in sweat, drowsy, asking repeatedly for a drink of water. Medical, not trauma."
    },
    "primary_survey": {
      "loc": "V — opens his eyes and mumbles a reply to a loud voice but cannot stay with the conversation. Listless and confused. This is decompensated shock, not compensated.",
      "c_spine": "Not indicated — no fall, no trauma. He lowered himself to the floor.",
      "airway": "Patent but at risk — he has been vomiting. Have suction ready and be prepared to roll him.",
      "breathing": "28/min, shallow and slightly irregular. Clear and equal air entry.",
      "circulation": "Radial pulse difficult to find; carotid 136, regular, weak and thready. Skin grey-white, cold and drenched with sweat. Capillary refill 5 seconds.",
      "name": "Terrence Boland.",
      "complaint": "Weak, dizzy and desperately thirsty.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": "No distension, no bruising, no wounds.",
        "abdomen_palpation": "Soft; tender in the upper abdomen; not rigid, no pulsating mass.",
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "Reads 88% but the trace is poor — hypoperfusion and cold extremities make pulse oximetry unreliable in shock. Treat the patient, not the oximeter, and say so."
      },
      "expected_transport_decision": "Rapid transport category — internal hemorrhage plus a decreased level of responsiveness. Decide during the primary assessment. There is nothing at this level that will stop the bleeding; transport is the intervention."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Extreme weakness, dizziness on standing, extreme thirst, nausea, two episodes of vomiting dark grainy material today, black tarry stools for three days, shortness of breath, fatigue. Anxious and restless earlier, now listless.",
        "allergies": "None known.",
        "medications": "Naproxen twice daily for six months for back pain; omeprazole, taken irregularly.",
        "past_medical_history": "Peptic ulcer 4 years ago. Heavy alcohol use. Smoker.",
        "last_intake": "Sips of water this morning; nothing solid for two days. Give nothing by mouth from now on.",
        "last_bowel_movement": "Two hours ago — black and tarry. This is a key finding; ask the question and report the answer.",
        "events_preceeding": "Progressive weakness over three days; nearly fainted getting off the toilet just before the call.",
        "pain": {
          "onset": "Burning stomach pain for weeks, worse in the last three days",
          "provoke": "Worse when the stomach is empty; briefly better after food or antacids",
          "quality": "Burning, gnawing",
          "region": "Upper abdomen just below the sternum; no radiation",
          "severity": "4/10 now — he is too drowsy to rate it reliably",
          "time_duration": "Weeks, sharply worse over three days"
        }
      },
      "vitals": {
        "loc": "V — responds to voice, confused and listless",
        "respiration": {
          "rate": "28",
          "rhythm": "Slightly irregular",
          "quality": "Shallow; clear and equal air entry"
        },
        "pulse": {
          "rate": "136",
          "rhythm": "Regular",
          "quality": "Weak and thready; radial hard to palpate"
        },
        "blood_pressure": "78/P by palpation — a falling blood pressure marks the move from compensated to decompensated shock",
        "sp02": "88% with a poor trace; unreliable in hypoperfusion",
        "skin": {
          "color": "Grey-white, cyanosis around the lips and eyes",
          "condition": "Cold, drenched with sweat (diaphoretic)"
        },
        "temperature": "35.6 °C — body temperature falls in decompensated shock",
        "pupils": {
          "equal": "Equal",
          "reactive": "Sluggish",
          "size": "6 mm — dilated"
        },
        "blood_glucose": "4.6 mmol/L",
        "glasgow_coma": "E3 V4 M5 = 12"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": "Tender, soft",
          "top_right": "Tender, soft",
          "bottom_left": "Soft, non-tender",
          "bottom_right": "Soft, non-tender"
        },
        "pelvis": null,
        "legs": "Cool and mottled below the knees; pedal pulses very weak; capillary refill 5 seconds in the toes.",
        "arms": "Cool, pale; radial pulses barely palpable; capillary refill 5 seconds in the fingers.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport, immediately. Do not delay for the rest of the assessment — complete it en route. Advanced care, likely transfusion and surgery, is the only thing that will help him."
    },
    "expected_treatment": {
      "life_saving_intervention": "Recognize decompensated shock and name it. Lay him supine and elevate his feet 20 to 30 cm — the shock position is indicated here because his systolic is well under 100 mmHg and there is no trauma stressing the cardiovascular system. High-flow supplemental oxygen: hypoxia is the underlying problem in shock regardless of cause. Keep him at a normal body temperature — cover him, get him off the cold tile floor, turn off any air conditioning. Nothing to eat or drink no matter how thirsty he says he is; he may need surgery and is at risk of vomiting. Have suction ready and be prepared to roll him. Reassess ABCs every 5 minutes and vital signs every 5 minutes as an unstable patient. Watch for the progression to irreversible shock — chaotic pulse, then cardiac arrest — and be ready to start CPR.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Internal bleeding (internal hemorrhage)",
      "title": "Thrown from the motorcycle",
      "patient": "26-year-old man",
      "reference": "Ch. 9 — Internal Bleeding, Care for Internal Bleeding; Ch. 8 — Shock",
      "overview": "Internal hemorrhage with almost no external evidence. Tests the principle that you suspect internal bleeding from the mechanism of injury, not from what you can see, and the honest conclusion that there is little you can do but transport.",
      "id": "soft_tissue_injuries.internal_bleeding"
    },
    "scen_survey": {
      "environment": "Rural two-lane road, gravel shoulder, no traffic control. Motorcycle on its side 20 m away, fuel leaking. Broken glass and plastic across the road.",
      "mechanisms_of_injury": "High-speed motorcycle collision with ejection. Violent blunt force. Helmet present and badly cracked. This mechanism alone tells you to expect internal hemorrhage and a spinal injury.",
      "casualty_count": "1 — check the ditch and the far side of the road for a passenger.",
      "assistance": "Fire service for the fuel leak, law enforcement for traffic control, second crew, rapid transport.",
      "ppe": "Gloves, gown and eye protection; high-visibility clothing.",
      "impressions": "Young man supine on the gravel, pale and restless, in leathers. No obvious external bleeding — that absence is the trap."
    },
    "primary_survey": {
      "loc": "A but anxious, restless and repetitive; declines to V over the course of the scenario.",
      "c_spine": "Indicated. High-speed motor vehicle collision, ejection, and a broken helmet — three separate high-risk mechanisms. Initiate spinal motion restriction immediately with manual in-line stabilization.",
      "airway": "Patent; speaking. Manage with a jaw thrust if it needs opening, to spare the neck.",
      "breathing": "30/min, shallow, regular. Equal air entry, slightly diminished at the left base.",
      "circulation": "Radial pulse 138, regular, weak. Skin pale with a bluish tinge, cool and moist. Capillary refill 4 seconds. No external hemorrhage found.",
      "name": "Dylan Rourke.",
      "complaint": "Stomach and left side hurt; feels sick and desperately thirsty.",
      "rapid_body_survey": {
        "head": "Helmet in place and cracked — leave it on unless it compromises the airway. No blood or fluid from ears, nose or mouth.",
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": "Bruising across the left lower chest from the leathers' zip line; tender; no paradoxical movement, no crepitus.",
        "armpits": null,
        "rib_cage": "Tender over the left ninth to eleventh ribs.",
        "abdomen_view": "Distension developing over the left upper quadrant; faint bruising. No wounds. No pulsating mass.",
        "abdomen_palpation": "Rigid and exquisitely tender in the left upper quadrant; soft elsewhere at first, becoming generally rigid.",
        "pelvis": "Stable to a gentle three-plane assessment; no pain, no crepitus.",
        "legs_femurs": "No deformity, no shortening. Femoral pulses present and equal.",
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": "Assessed during a coordinated log roll onto a board: no deformity, no midline tenderness, no wounds."
      },
      "shock_check": {
        "spo2": "92% on room air with a weak trace — unreliable in hypoperfusion. Treat the patient."
      },
      "expected_transport_decision": "Rapid transport category — severe multi-system trauma, suspected internal hemorrhage, abdominal distension and tenderness. Decide it on the mechanism before you have finished the rapid body survey."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Severe left upper abdominal and lower chest pain, nausea, one episode of vomiting, extreme thirst, shortness of breath, anxiety and restlessness. He keeps asking the same questions.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant.",
        "last_intake": "Lunch about 2 hours ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Lost control on gravel at highway speed, thrown over the handlebars, landed on his left side and slid.",
        "pain": {
          "onset": "Sudden, at the moment of impact about 10 minutes ago",
          "provoke": "Breathing deeply, moving, any pressure on the abdomen",
          "quality": "Deep, tearing, constant",
          "region": "Left upper abdomen and left lower chest, radiating to the left shoulder tip",
          "severity": "9/10",
          "time_duration": "10 minutes, worsening"
        }
      },
      "vitals": {
        "loc": "A, anxious and restless; declining towards V",
        "respiration": {
          "rate": "30",
          "rhythm": "Regular",
          "quality": "Shallow, splinted; diminished at the left base"
        },
        "pulse": {
          "rate": "138",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "82/54 and falling",
        "sp02": "92% with a weak trace",
        "skin": {
          "color": "Pale, bluish at the lips",
          "condition": "Cool, moist"
        },
        "temperature": "35.8 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "6 mm"
        },
        "blood_glucose": "6.6 mmol/L",
        "glasgow_coma": "E4 V4 M6 = 14"
      },
      "head_to_toe_exam": {
        "head": "No injury to the scalp under the helmet; pupils equal and reactive.",
        "neck": "No deformity, no midline tenderness; collar applied.",
        "chest": "Bruising left lower chest; equal but shallow expansion; air entry diminished at the left base.",
        "abdomen": {
          "top_left": "Rigid, guarded, exquisitely tender, distending",
          "top_right": "Tender, becoming firm",
          "bottom_left": "Tender, becoming firm",
          "bottom_right": "Soft, mildly tender"
        },
        "pelvis": "Stable; no crepitus, no pain.",
        "legs": "Abrasions to the left thigh and knee through torn leathers. No fractures. Pedal pulses present but weak and equal.",
        "arms": "Abrasions to the left forearm. Radial pulses weak, equal. Capillary refill 4 seconds.",
        "back": "No injury; no midline tenderness."
      },
      "expected_transport_decision": "Rapid transport, immediately. He will very likely need surgery. Complete the assessment en route; do not finish it on scene."
    },
    "expected_treatment": {
      "life_saving_intervention": "Recognize that there is very little you can do to control internal hemorrhaging — transport is the intervention. Maintain spinal motion restriction throughout. High-flow supplemental oxygen. Manage shock: keep him supine, maintain a normal body temperature, and note that the shock position with elevated feet is contraindicated here because he has trauma putting stress on the cardiovascular system. Nothing to eat or drink despite the thirst — he is likely for surgery and may vomit. Immobilize on a rigid device with a coordinated roll and no twisting. Do not press on the abdomen once you have found the rigidity. Reassess ABCs and vitals every 5 minutes; watch for the progression to decompensated shock. Notify the receiving hospital of the mechanism, the abdominal findings and the trend in his vital signs.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Abrasion",
      "title": "Road rash on the bike path",
      "patient": "31-year-old woman",
      "reference": "Ch. 9 — Abrasions, Infection, Dressings and Bandages",
      "overview": "Extensive but superficial abrasions with embedded grit. Tests wound cleansing with water alone, infection prevention, tetanus questioning, and the judgement not to over-escalate a genuinely minor injury while still ruling out the serious ones.",
      "id": "soft_tissue_injuries.abrasions"
    },
    "scen_survey": {
      "environment": "Paved bike path in a park, dry, mild. Bicycle on its side. Cyclists passing — ask them to slow.",
      "mechanisms_of_injury": "Low-speed bicycle fall onto pavement; slid along the surface. No vehicle involved, no head strike, helmet intact and undamaged.",
      "casualty_count": "1",
      "assistance": "None required; she may be released or transported for assessment.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Adult woman sitting on the grass, alert and talking, holding her forearm away from her body. Large raw grazes on her right forearm, hip and knee."
    },
    "primary_survey": {
      "loc": "A, oriented.",
      "c_spine": "Not indicated. Low-speed fall from a bicycle, no head strike, helmet undamaged, she was ambulatory afterwards, no neck pain and no midline C-spine tenderness. Work through the Canadian C-Spine Rule aloud rather than skipping it.",
      "airway": "Patent; full sentences.",
      "breathing": "18/min, regular, unlaboured, clear and equal.",
      "circulation": "Radial pulse 92, regular, full. Skin normal colour, warm and dry. Oozing capillary bleeding from the grazes, no spurting, no free flow.",
      "name": "Fatima Bousaid.",
      "complaint": "Painful grazes on her arm, hip and knee.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": "Right knee: 8 x 8 cm abrasion. Right hip: 15 x 10 cm abrasion through torn clothing.",
        "arms_humerus": null,
        "arms_rest": "Right forearm: 12 x 6 cm abrasion with visible embedded grit and asphalt. Oozing only.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "99% on room air."
      },
      "expected_transport_decision": "Not rapid transport. No hemorrhage, no head or spinal injury, no impaired respiration, no suspected fractures. Say the negatives; a minor injury still earns a proper primary assessment."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Burning, stinging pain in the grazes. No numbness, no loss of movement, no headache, no nausea, no dizziness, no loss of responsiveness at any point.",
        "allergies": "Latex — contact rash. Use non-latex gloves and dressings.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Ask about tetanus: her last booster was about 12 years ago — beyond the 5-to-10-year interval, and this wound is contaminated with dirt, so she needs one.",
        "last_intake": "Water 15 minutes ago.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Front wheel caught a rut, she went down on her right side and slid a couple of metres.",
        "pain": {
          "onset": "Immediately at the fall, about 10 minutes ago",
          "provoke": "Touching the grazes, moving the arm, air moving over them",
          "quality": "Burning, stinging",
          "region": "Right forearm, right hip, right knee; no radiation",
          "severity": "6/10",
          "time_duration": "10 minutes, constant"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "18",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "92",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "124/76",
        "sp02": "99% room air",
        "skin": {
          "color": "Normal",
          "condition": "Warm, dry"
        },
        "temperature": "36.8 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "5.2 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "No injury; helmet undamaged. Pupils equal and reactive.",
        "neck": "No tenderness, full range of motion, rotates 45 degrees each way without pain.",
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Right hip and knee abrasions. No deformity, no crepitus, full range of motion in the knee though painful. Pedal pulses equal, capillary refill under 2 seconds, normal sensation and toe movement.",
        "arms": "Right forearm abrasion with embedded grit, oozing. Radial pulses equal, capillary refill under 2 seconds, full range of motion and normal sensation in the fingers. Left arm uninjured.",
        "back": null
      },
      "expected_transport_decision": "Release with wound care and follow-up advice, or transport for assessment if she prefers. She needs a tetanus booster and must watch for infection."
    },
    "expected_treatment": {
      "life_saving_intervention": "None required. Wound care: these are not hemorrhaging, so cleanse them thoroughly — this is the best defence against infection. Wash with water, preferably running water at gentle pressure, for a full 5 minutes. Use water alone; soap and alcohol damage the sensitive tissue under the skin. Wipe away from the wound, never towards it. Avoid touching the wound and use clean non-latex gloves. Cover with non-stick sterile gauze and secure with a roller bandage applied distally to proximally on the forearm, leaving the fingers uncovered so you can check sensation and circulation; recheck both after bandaging. Advise her on the signs of infection — increasing swelling, redness, warmth, throbbing pain, pus, and red streaks tracking towards the heart with flu-like symptoms, which would mean a systemic infection and a prompt physician visit. Tell her she needs a tetanus booster because the wound is dirt-contaminated and she is past 10 years.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Laceration with arterial hemorrhage",
      "title": "Through the pane of glass",
      "patient": "44-year-old man",
      "reference": "Ch. 9 — Lacerations, Care for External Bleeding, Tourniquets",
      "overview": "A deep forearm laceration with arterial hemorrhage that direct pressure will not hold. Tests the bleeding-control sequence through to a tourniquet, including documenting the time of application.",
      "id": "soft_tissue_injuries.lacerations"
    },
    "scen_survey": {
      "environment": "Residential kitchen; shattered glass across the floor and in the sink. Do not put your hands anywhere you cannot see. Blood on the floor — a slip hazard.",
      "mechanisms_of_injury": "Right forearm went through a pane of glass while carrying a window frame.",
      "casualty_count": "1",
      "assistance": "EMS transport; a second responder to maintain pressure while you bandage.",
      "ppe": "Gloves, gown, mask and eye protection — arterial bleeding is spurting.",
      "impressions": "Adult man standing at the sink, pale and frightened, bright red blood spurting in time with his pulse from a gaping wound on the inside of his right forearm."
    },
    "primary_survey": {
      "loc": "A, oriented, frightened.",
      "c_spine": "Not indicated — no fall, no blunt force, no head or trunk trauma.",
      "airway": "Patent; full sentences.",
      "breathing": "24/min, regular, unlaboured, clear and equal.",
      "circulation": "Life-threatening external hemorrhage — bright red blood spurting from the right forearm. This is the finding that stops the rest of the primary assessment until it is controlled. Radial pulse 124 (left), regular, weak. Skin pale, cool and moist.",
      "name": "Marc Delisle.",
      "complaint": "Cut his arm badly on glass and cannot stop the bleeding.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": "Right forearm, volar aspect: 9 cm gaping laceration with smooth edges, fat and muscle visible, arterial spurting. Radial pulse distal to the injury weak. Reduced sensation in the thumb and index finger, weak grip — nerves and vessels involved.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "96% on the left hand; no reading from the right."
      },
      "expected_transport_decision": "Rapid transport category — external hemorrhage. Confirmed the moment you see the spurting. Once a tourniquet is applied, the patient is always in the rapid transport category."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Pain in the forearm, weakness and pins and needles in the thumb and index finger, light-headed, nauseated, thirsty, anxious.",
        "allergies": "None known.",
        "medications": "None. Ask specifically about blood thinners — he takes none.",
        "past_medical_history": "Nothing significant. Tetanus booster 4 years ago — within the interval.",
        "last_intake": "Coffee about an hour ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Tripped while carrying a window frame; his arm went through the glass.",
        "pain": {
          "onset": "Sudden, at the moment of the cut about 4 minutes ago",
          "provoke": "Movement of the wrist and fingers; the tourniquet itself is very painful",
          "quality": "Sharp, then a deep throbbing ache; burning in the thumb",
          "region": "Inner right forearm; radiating into the thumb and index finger",
          "severity": "8/10, rising to 9/10 after the tourniquet — warn him it will hurt and explain why it is necessary",
          "time_duration": "About 4 minutes"
        }
      },
      "vitals": {
        "loc": "A, oriented, anxious",
        "respiration": {
          "rate": "24",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "124",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "96/60",
        "sp02": "96% left hand",
        "skin": {
          "color": "Pale",
          "condition": "Cool, moist"
        },
        "temperature": "36.5 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "5 mm"
        },
        "blood_glucose": "5.8 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "No injury; check the shoes and trouser cuffs for glass.",
        "arms": "Right forearm laceration as described; bleeding controlled after a tourniquet. Distal to the tourniquet: hand pale and cool, radial pulse absent (expected and intended). Sensation reduced in the thumb and index finger, grip weak. Left arm uninjured. Small superficial glass cuts on both hands — check for retained glass but do not probe.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport. Do not delay to clean the wound; a major wound is cleaned thoroughly at the hospital as a matter of routine."
    },
    "expected_treatment": {
      "life_saving_intervention": "Control the hemorrhage in sequence and do not skip steps. Sit or lay him down. Apply direct pressure with a gloved hand straight onto the wound. Apply a sterile dressing, keep firm pressure over it, then a bandage to maintain that pressure. If blood soaks through, add more dressings and another bandage on top — never remove blood-soaked dressings. Because the bleeding continues and the wound is on a limb, apply a tourniquet 5 to 10 cm above the injury and just above any joint in that range, tighten until the bleeding stops, and secure it. It will be very painful; tell him it is necessary to save his life. Continue direct pressure on the wound if you can, and use a dressing and bandage alongside the tourniquet to help clotting. Document the exact time the tourniquet went on and hand that time over verbally as well as in writing. Do not remove or loosen it. High-flow oxygen and shock management: keep him supine, maintain normal body temperature, nothing by mouth. Reassess for shock every 5 minutes.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Avulsion",
      "title": "Degloved on the fence wire",
      "patient": "52-year-old woman",
      "reference": "Ch. 9 — Avulsions, Care for External Bleeding, Dressings and Bandages",
      "overview": "A large partially avulsed skin flap on the lower leg. Tests bleeding and infection control as the twin priorities, correct handling of a flap that is still attached, and the recognition that avulsions bleed more than they look like they should.",
      "id": "soft_tissue_injuries.avulsions"
    },
    "scen_survey": {
      "environment": "Farm paddock, barbed-wire fence, muddy ground, livestock in the next field. Move her to a clean, level area.",
      "mechanisms_of_injury": "Right lower leg caught and dragged along barbed wire while climbing a fence; skin and subcutaneous tissue torn away as a flap.",
      "casualty_count": "1",
      "assistance": "EMS transport; a second person to support the leg while dressing it.",
      "ppe": "Gloves, gown and eye protection.",
      "impressions": "Adult woman sitting on the ground, calm but pale, right trouser leg soaked with blood, a large flap of skin hanging from her shin."
    },
    "primary_survey": {
      "loc": "A, oriented, remarkably composed.",
      "c_spine": "Not indicated — she climbed down under her own control, no fall, no head or trunk trauma.",
      "airway": "Patent; full sentences.",
      "breathing": "20/min, regular, unlaboured, clear and equal.",
      "circulation": "Radial pulse 106, regular, full. Skin pale, cool and moist. Steady, brisk venous flow from the wound — not spurting, but significant and continuing.",
      "name": "Glenda Ferreira.",
      "complaint": "Tore her leg open on the wire.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": "Right anterior lower leg: a 14 x 9 cm flap of skin and subcutaneous tissue avulsed and hanging downwards, still attached at its lower edge. Fat and fascia exposed. Heavy venous bleeding. Contaminated with mud and rust. Pedal pulse present, capillary refill under 2 seconds, toes move and feel normal.",
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "98% on room air."
      },
      "expected_transport_decision": "Rapid transport category — the injury involves significant, continuing bleeding. She will need surgical repair. Say that the flap's viability depends on how it is handled from here."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Deep aching pain in the shin, light-headedness on standing, nausea. Sensation and movement in the foot intact.",
        "allergies": "None known.",
        "medications": "Metformin.",
        "past_medical_history": "Type 2 diabetes — relevant, because it impairs healing and increases infection risk. Tetanus booster more than 15 years ago, and this wound is contaminated with soil and rust: she needs one urgently.",
        "last_intake": "Breakfast about 3 hours ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Climbing over a barbed-wire fence, her boot slipped and the wire dragged down her shin.",
        "pain": {
          "onset": "Sudden, at the injury about 8 minutes ago",
          "provoke": "Moving the leg or the flap; pressure on the wound",
          "quality": "Deep, throbbing ache with sharp edges",
          "region": "Front of the right lower leg; no radiation",
          "severity": "7/10",
          "time_duration": "About 8 minutes"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "20",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "106",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "108/68",
        "sp02": "98% room air",
        "skin": {
          "color": "Pale",
          "condition": "Cool, moist"
        },
        "temperature": "36.7 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "12.4 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Right lower leg avulsion flap as described, bleeding controlled with direct pressure and a pressure dressing. No deformity, no crepitus, tibia and fibula intact on palpation. Pedal pulse present, capillary refill under 2 seconds, toe movement and sensation normal — recheck after bandaging. Left leg uninjured.",
        "arms": "Superficial scratches on both forearms from the wire; minor.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport for surgical repair. Do not delay to clean a major wound."
    },
    "expected_treatment": {
      "life_saving_intervention": "Bleeding and infection control are the two priorities. Support the leg and gently lay the flap back into its normal anatomical position — do not pull on it, twist it, or cut it off. Apply direct pressure with a gloved hand over a sterile dressing, then a bandage to maintain that pressure; add dressings on top if blood soaks through, and never remove the soaked ones. Use a trauma dressing over a layer of gauze for a wound this size. Do not delay transport to clean it. Leave the fingers and toes uncovered so you can check sensation and circulation, and recheck both before and after bandaging. Immobilize and support the leg for transport. Manage shock: keep her supine, maintain normal body temperature, nothing by mouth. Report the diabetes, the soil and rust contamination and the out-of-date tetanus status at handover.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Puncture wound",
      "title": "Stepped on the nail",
      "patient": "35-year-old man",
      "reference": "Ch. 9 — Punctures, Tetanus, Stitches and Sutures",
      "overview": "A deep plantar puncture from a rusty nail — little bleeding, high infection risk. Tests the counter-intuitive lesson that a wound which barely bleeds can be more dangerous than one that bleeds a lot, and the tetanus reasoning that goes with a deep, low-oxygen wound.",
      "id": "soft_tissue_injuries.puncture"
    },
    "scen_survey": {
      "environment": "House demolition site, debris and lumber with protruding nails across the floor. Watch your own footing — the same hazard will get you.",
      "mechanisms_of_injury": "Stepped on a 10 cm rusty nail protruding from a board; it penetrated the sole of a soft work boot and entered the mid-sole of the right foot. The nail has already been pulled out by the patient.",
      "casualty_count": "1 — check whether anyone else is working in the debris.",
      "assistance": "Site supervisor to make the area safe; transport for assessment.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Adult man sitting on a stack of lumber, boot off, foot in his hands, in considerable pain. Very little blood visible."
    },
    "primary_survey": {
      "loc": "A, oriented.",
      "c_spine": "Not indicated — no fall, no head or trunk trauma.",
      "airway": "Patent; full sentences.",
      "breathing": "18/min, regular, unlaboured, clear and equal.",
      "circulation": "Radial pulse 96, regular, full. Skin normal colour, warm and dry. Minimal external bleeding from the puncture — the skin has closed around the track.",
      "name": "Owen Radcliffe.",
      "complaint": "Nail went through his foot.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": "Right foot, plantar surface, mid-sole: a single 4 mm puncture with a small amount of dark oozing. No exit wound. Surrounding tissue firm and tender. Pedal pulse present, capillary refill under 2 seconds, toes move and feel normal.",
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "99% on room air."
      },
      "expected_transport_decision": "Not rapid transport — no hemorrhage, ABCs stable, no fracture suspected. Transport for assessment, or refer him to a physician. State plainly why a wound this small still needs medical attention: a large or deep puncture is on the list of wounds that may require stitches or sutures, and the infection risk is high."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Sharp, deep pain in the sole, worse on weight-bearing. He cannot put weight on the foot. No numbness, no fever, no chills — record these negatives as a baseline for later infection.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Tetanus: he cannot remember his last booster and thinks it was 'sometime in his twenties'. A rusty-nail puncture is the textbook tetanus mechanism — deep, dirty and low in oxygen. He needs a booster; make that explicit.",
        "last_intake": "Lunch about an hour ago.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Walking across debris in soft-soled boots; stepped on a board with a nail through it and pulled his foot free himself.",
        "pain": {
          "onset": "Sudden, at the moment of the puncture about 6 minutes ago",
          "provoke": "Weight-bearing, pressure on the sole, flexing the toes",
          "quality": "Deep, sharp, throbbing",
          "region": "Mid-sole of the right foot; no radiation",
          "severity": "7/10",
          "time_duration": "About 6 minutes"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "18",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "96",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "132/80",
        "sp02": "99% room air",
        "skin": {
          "color": "Normal",
          "condition": "Warm, dry"
        },
        "temperature": "36.9 °C — record it; a rising temperature later would suggest infection",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "5.5 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": null,
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Right foot: single plantar puncture, mid-sole, minimal oozing, no exit wound, no visible foreign material at the surface. No swelling yet, no redness yet, no red streaking. Pedal pulse present and equal to the left, capillary refill under 2 seconds, toe movement and sensation normal. No deformity or crepitus in the foot or ankle. Left leg uninjured.",
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Refer to a physician or transport for assessment. Do not simply dress it and send him back to work."
    },
    "expected_treatment": {
      "life_saving_intervention": "None required. Wound care: this is not hemorrhaging, so cleanse it thoroughly — both major and minor puncture wounds should be cleaned carefully because of the infection risk. Rinse with water, ideally running water at gentle pressure, for about 5 minutes; water alone, no soap or alcohol. Do not probe the track and do not attempt to remove anything deep. Cover with a sterile dressing and bandage without pressure. Do not let him weight-bear; support and elevate the foot. Recheck sensation and circulation in the toes after bandaging. Explain why the small size is misleading: the organisms that cause infections such as tetanus prefer the low-oxygen environment deep in a puncture track, so this needs a physician and a tetanus booster. Tell him what infection looks like — swelling, redness, warmth, throbbing, pus — and that red streaks moving up the leg with flu-like symptoms means a systemic infection and immediate care.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Gunshot wound (ballistics injury)",
      "title": "Two holes, one bullet",
      "patient": "29-year-old man",
      "reference": "Ch. 9 — Ballistics Injuries, Punctures; Ch. 5 — Spinal MOI",
      "overview": "A through-and-through thigh gunshot wound. Tests the search for both entry and exit wounds, the spinal implication of a penetrating trunk-adjacent injury, hemorrhage control on a limb, and crime-scene conduct.",
      "id": "soft_tissue_injuries.gunshot_wound"
    },
    "scen_survey": {
      "environment": "Rural hunting camp clearing at dusk. This is a crime scene, or will be treated as one — do not move or handle the firearm, disturb as little as possible, and confirm law enforcement has been called and the weapon secured before you approach.",
      "mechanisms_of_injury": "Accidental discharge of a hunting rifle at close range; a single round through the left thigh. A penetrating injury near the trunk means you must also consider spinal and internal injury.",
      "casualty_count": "1 — confirm where everyone else in the party is and that all firearms are made safe.",
      "assistance": "Law enforcement, second crew, rapid transport; consider air evacuation given the remote location.",
      "ppe": "Gloves, gown, mask and eye protection.",
      "impressions": "Young man supine on the ground, pale, shouting in pain, blood pooling under his left thigh. Rifle on the ground several metres away."
    },
    "primary_survey": {
      "loc": "A, oriented, in severe pain and very agitated.",
      "c_spine": "Indicated. A gunshot wound that penetrates near the trunk is listed as a mechanism for suspecting spinal injury, and he fell backwards when hit. Initiate spinal motion restriction while managing the hemorrhage — if protecting the spine interferes with a life-saving intervention, the life comes first.",
      "airway": "Patent; shouting.",
      "breathing": "28/min, regular, unlaboured. Clear and equal air entry.",
      "circulation": "Significant external hemorrhage from the left thigh, dark red and flowing freely with intermittent bright spurting. Radial pulse 132, regular, weak. Skin pale, cool and moist. Capillary refill 4 seconds.",
      "name": "Kyle Tanaka-Reid.",
      "complaint": "Shot in the leg.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": "No wounds; check carefully — a round can track. No distension.",
        "abdomen_palpation": "Soft, non-tender, not rigid.",
        "pelvis": "Stable to a gentle three-plane assessment; no pain, no crepitus, no rectal or urethral bleeding.",
        "legs_femurs": "Left anterolateral thigh: 9 mm entry wound with powder burns and stippling on the skin, indicating close range. Posterior medial thigh: a larger, ragged 3 cm exit wound. Find both. Heavy bleeding from both. Thigh swelling and firm. No obvious angulation, but suspect a femur fracture.",
        "legs_rest": "Left pedal pulse weak compared with the right; foot cool; capillary refill 4 seconds; toe movement and sensation reduced.",
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": "Checked during a coordinated roll: no wounds, no deformity, no midline tenderness."
      },
      "shock_check": {
        "spo2": "95% on room air, weak trace."
      },
      "expected_transport_decision": "Rapid transport category — external hemorrhage, a penetrating injury, and a suspected fractured femur, each of which is independently on the immediate transport list."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Severe left thigh pain, numbness and pins and needles in the left foot, light-headedness, nausea, thirst, anxiety.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Tetanus booster 6 years ago.",
        "last_intake": "Sandwich about 3 hours ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "A companion's rifle discharged while being unloaded, about 3 m away. Record the facts as stated and leave the investigation to law enforcement.",
        "pain": {
          "onset": "Sudden, at the moment of the shot about 6 minutes ago",
          "provoke": "Any movement of the leg; pressure on the wounds",
          "quality": "Burning, tearing, deep throbbing",
          "region": "Left thigh, front and back; radiating down to the knee and foot",
          "severity": "10/10",
          "time_duration": "About 6 minutes"
        }
      },
      "vitals": {
        "loc": "A, oriented, agitated",
        "respiration": {
          "rate": "28",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "132",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "86/56",
        "sp02": "95%, weak trace",
        "skin": {
          "color": "Pale",
          "condition": "Cool, moist"
        },
        "temperature": "36.1 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "6 mm"
        },
        "blood_glucose": "6.9 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "No injury.",
        "neck": "No injury, no midline tenderness; collar applied.",
        "chest": "No wounds; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": "Soft, non-tender",
          "top_right": "Soft, non-tender",
          "bottom_left": "Soft, non-tender",
          "bottom_right": "Soft, non-tender"
        },
        "pelvis": "Stable; no crepitus; no bleeding from rectum, urethra or genitals.",
        "legs": "Left thigh entry and exit wounds as described, bleeding controlled with a tourniquet above the injury. Thigh swollen and firm — suspect femur fracture and internal hemorrhage. Distal to the tourniquet the foot is pale, cool and pulseless, which is expected. Sensation reduced over the dorsum of the foot. Right leg uninjured, pedal pulse strong.",
        "arms": "No injury; radial pulses weak but equal.",
        "back": "No wounds; no midline tenderness."
      },
      "expected_transport_decision": "Rapid transport, immediately. Notify the receiving facility of the mechanism, both wounds, the suspected femur fracture and the tourniquet time."
    },
    "expected_treatment": {
      "life_saving_intervention": "Confirm the scene is safe and the firearm secured before approaching. Control the hemorrhage first: direct pressure with a gloved hand, sterile dressing, firm pressure, bandage; if bleeding continues, apply a tourniquet 5 to 10 cm above the injury and just above any joint in that range, tighten until it stops, secure it, and document the time of application. Search for both entry and exit wounds and dress both; note the powder burns and stippling, and record what structures the track may have crossed. Maintain spinal motion restriction. Immobilize the suspected femur fracture — a long rigid splint from axilla to foot laterally and groin to foot medially, or a traction splint if it is within your scope; a fractured femur is always rapid transport because of the internal hemorrhage risk. High-flow oxygen and shock management: supine, normal body temperature, nothing by mouth; the elevated-feet shock position is contraindicated with this trauma. Follow crime-scene protocol: disturb as little as possible, keep any clothing you cut, and record who was present. Reassess ABCs and vitals every 5 minutes.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Impaled object",
      "title": "Rebar through the shoulder",
      "patient": "39-year-old man",
      "reference": "Ch. 9 — Impaled Objects, Care for External Bleeding",
      "overview": "A large impaled object that must be left in place and stabilized. Tests the leave-it-in rule and its single exception — interference with the airway or respiration — plus bulky-dressing stabilization and extrication planning.",
      "id": "soft_tissue_injuries.impaled_object"
    },
    "scen_survey": {
      "environment": "Construction site excavation. He has fallen about 2 m onto a projecting length of reinforcing bar, which is still set in concrete. Unstable trench edge; other rebar projecting nearby. Do not enter without the site's fall-protection and shoring measures in place.",
      "mechanisms_of_injury": "Fall of about 2 m onto a projecting steel bar, which has penetrated the left shoulder region. Fall over 1 m plus a penetrating injury near the trunk — both are spinal-injury mechanisms.",
      "casualty_count": "1",
      "assistance": "Fire and technical rescue to cut the bar and shore the trench; site supervisor for lock-out and access; second crew; rapid transport. He cannot be moved until the bar is cut.",
      "ppe": "Gloves, gown, eye protection and a hard hat; site-required protection.",
      "impressions": "Adult man half-standing, pinned, a 20 mm steel bar entering the front of his left shoulder and protruding from the back. Conscious, grey, breathing hard, trying not to move."
    },
    "primary_survey": {
      "loc": "A, oriented, frightened but cooperative.",
      "c_spine": "Indicated — a fall over 1 metre plus a penetrating injury near the trunk. Provide manual in-line stabilization as far as the position allows, and accept that full immobilization is impossible until the bar is cut. Say that trade-off aloud.",
      "airway": "Patent; speaking in short sentences. The bar does not interfere with the airway.",
      "breathing": "26/min, shallow and splinted on the left. Air entry slightly diminished on the left upper chest. The bar does not interfere with respiration, so it stays in.",
      "circulation": "Moderate dark bleeding around both the entry and exit sites, controlled by packing around the object rather than pressure on it. Radial pulse 122, regular, weak. Skin grey, cool and moist.",
      "name": "Andre Kowalchuk.",
      "complaint": "Impaled on the rebar; cannot move.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": "Left clavicle region distorted by the object; tender. Right clavicle intact.",
        "sternum": null,
        "chest": "Bar enters below the left clavicle and exits posteriorly below the scapula. No sucking sound, no bubbling, no subcutaneous crepitus — check specifically and record the negatives, because a penetrating chest wound would change the dressing decision.",
        "armpits": "Left axilla: check for blood tracking; a small amount present.",
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": "Left arm held immobile; he will not move it.",
        "arms_rest": "Left radial pulse present but weaker than the right; hand cool; capillary refill 3 seconds; sensation reduced over the outer arm.",
        "back_spine": "Cannot be fully assessed in this position; palpate what you can reach. No obvious deformity."
      },
      "shock_check": {
        "spo2": "93% on room air (mild hypoxia); 97% on a non-rebreather at 12 LPM."
      },
      "expected_transport_decision": "Rapid transport category — a penetrating injury near the trunk with significant bleeding and possible chest involvement. Transport is delayed by the extrication, so all the treatment happens here; make sure the receiving facility knows the expected timeline."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Severe left shoulder and upper chest pain, shortness of breath, numbness in the outer left arm and thumb, light-headedness, nausea, terror.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Tetanus booster 8 years ago.",
        "last_intake": "Coffee and a bagel about 2 hours ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Lost his footing on the trench edge and fell about 2 m onto the projecting bar.",
        "pain": {
          "onset": "Sudden, at the moment of impalement about 8 minutes ago",
          "provoke": "Any movement, and every breath",
          "quality": "Tearing, deep, boring",
          "region": "Left shoulder and upper chest, front and back; radiating down the left arm",
          "severity": "10/10",
          "time_duration": "About 8 minutes"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "26",
          "rhythm": "Regular",
          "quality": "Shallow, splinted left; air entry slightly diminished left upper"
        },
        "pulse": {
          "rate": "122",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "94/58",
        "sp02": "93% room air; 97% on a non-rebreather",
        "skin": {
          "color": "Grey, pale",
          "condition": "Cool, moist"
        },
        "temperature": "36.0 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "5 mm"
        },
        "blood_glucose": "6.3 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "No injury; no fluid from ears or nose.",
        "neck": "No deformity, tender on the left side; collar applied as far as the position allows.",
        "chest": "Entry below the left clavicle, exit below the left scapula. Bleeding controlled by packing around the object. No sucking wound, no bubbling, no crepitus. Air entry diminished at the left apex, otherwise equal.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "No injury; pedal pulses present and equal.",
        "arms": "Left arm: radial pulse present but weaker than the right, capillary refill 3 seconds, reduced sensation over the outer arm and thumb, unwilling and unable to move the shoulder. Right arm normal.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport as soon as the bar is cut. Report the object, its dimensions, the depth if known, and that a section remains in situ."
    },
    "expected_treatment": {
      "life_saving_intervention": "Leave the object in place. A large impaled object is only removed if it interferes with the airway or respiration, and this one does neither — moving it would damage internal structures and cause or worsen bleeding. Stabilize it with bulky dressings built up around it on both the entry and exit sides, then bandage those dressings in place to limit movement and control the bleeding. Do not apply pressure to the object itself, and do not push dressings down onto the wound track. Support his body weight so he is not hanging on the bar. Maintain manual in-line stabilization. High-concentration oxygen. Manage shock: keep him warm, nothing by mouth. Request technical rescue to cut the bar, leaving as long a section in place as can be transported, and shield him from sparks and heat while they cut. Reassess his chest, both distal pulses and the dressings every 5 minutes. Reassess the airway and breathing continuously — if either becomes compromised by the object, the removal decision changes.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Abscess (boil)",
      "title": "The lump in the armpit",
      "patient": "47-year-old man",
      "reference": "Ch. 9 — Abscesses, Signs of Infection",
      "overview": "A painful axillary abscess with early signs that the infection is spreading. Tests recognition of local versus systemic infection, the ban on squeezing, and the specific sites the manual says a physician should handle.",
      "id": "soft_tissue_injuries.abscess"
    },
    "scen_survey": {
      "environment": "Workplace first aid room, clean and private. No hazards.",
      "mechanisms_of_injury": "No trauma. Localized collection of pus in a hair-bearing area, developing over five days.",
      "casualty_count": "1",
      "assistance": "Transport or referral to a physician; not an emergency response.",
      "ppe": "Gloves and eye protection; hand hygiene before and after.",
      "impressions": "Adult man, alert, holding his left arm away from his body, uncomfortable and slightly flushed. Reports fever and chills."
    },
    "primary_survey": {
      "loc": "A, oriented.",
      "c_spine": "Not indicated — no trauma.",
      "airway": "Patent; full sentences.",
      "breathing": "20/min, regular, unlaboured, clear and equal.",
      "circulation": "Radial pulse 102, regular, full. Skin flushed, warm and moist.",
      "name": "Bruce Cheng.",
      "complaint": "A painful lump in his left armpit that has been growing for five days.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": "Left axilla: a 5 cm raised, red, hot, exquisitely tender fluctuant swelling with a yellow central point and a small amount of pus discharging. Faint red streaks tracking up the inner arm towards the shoulder — this is the finding that matters.",
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "97% on room air."
      },
      "expected_transport_decision": "Not rapid transport, but not a self-care problem either. The red streaks moving towards the heart plus flu-like symptoms suggest the infection is progressing to a systemic infection, which is life-threatening and usually treated with antibiotics. He should be examined by a physician as soon as possible. The site — the axilla — is also one the manual says should preferably be treated by a physician."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Throbbing pain in the armpit, swelling, redness, heat, pus discharging. Plus fever, chills, nausea and general malaise — the flu-like picture that signals systemic spread. Ask directly and record all of it.",
        "allergies": "None known.",
        "medications": "Metformin, gliclazide.",
        "past_medical_history": "Type 2 diabetes for 8 years, poorly controlled — a significant risk factor for infection and poor healing. Two previous boils in the last year.",
        "last_intake": "Lunch about 2 hours ago.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Noticed a small tender spot five days ago after shaving the area; it has grown steadily. He admits to squeezing it repeatedly — tell him why that makes it worse.",
        "pain": {
          "onset": "Gradual over five days",
          "provoke": "Lowering the arm, pressure, squeezing",
          "quality": "Throbbing, hot, pressure-like",
          "region": "Left axilla; aching up the inner arm",
          "severity": "8/10",
          "time_duration": "Five days, worse each day"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "20",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "102",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "136/84",
        "sp02": "97% room air",
        "skin": {
          "color": "Flushed",
          "condition": "Warm, moist"
        },
        "temperature": "38.4 °C — fever supports systemic involvement",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "14.2 mmol/L — poorly controlled, and infection drives it higher",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": "Left axilla abscess as described, with red streaking up the inner arm towards the shoulder. Tender enlarged nodes in the axilla. Radial pulses equal, capillary refill under 2 seconds, full range of motion though painful. Right arm normal.",
        "back": null
      },
      "expected_transport_decision": "Transport or same-day referral to a physician. He needs antibiotics, not a dressing and a shrug."
    },
    "expected_treatment": {
      "life_saving_intervention": "None required. Do not squeeze the abscess — squeezing is likely to spread the infection, and he has been doing exactly that. Do not incise it. Because the abscess involves the axilla and is very painful, and because there are signs of systemic spread, this is for a physician rather than field management. Clean the area gently, wiping away from the wound. Apply a dry dressing to absorb the discharge and change it if it becomes saturated. Hot and warm compresses applied alternately can hasten natural draining, but do not substitute that for the physician visit here. Explain the signs of worsening infection and why the red streaks and fever change the urgency. Report the poorly controlled diabetes and the blood glucose reading. Hand hygiene and glove disposal to protect yourself and others.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Subungual hematoma",
      "title": "Hammer, thumb, in that order",
      "patient": "22-year-old woman",
      "reference": "Ch. 9 — Subungual Hematomas",
      "overview": "A crush injury to the fingertip with blood trapped under the nail. Tests the trephining procedure the manual describes, and the follow-up rule: if releasing the fluid does not stop the pain, do a focused exam for a fracture.",
      "id": "soft_tissue_injuries.subungual_hematoma"
    },
    "scen_survey": {
      "environment": "Home workshop bench, well lit, clean. Tools in use — no hazards to responders.",
      "mechanisms_of_injury": "Direct crush injury: struck the left thumb with a claw hammer while driving a nail.",
      "casualty_count": "1",
      "assistance": "None required.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Young woman standing at the bench, gripping her left wrist, thumb held up, clearly in a lot of pain for a small injury. Alert and talking."
    },
    "primary_survey": {
      "loc": "A, oriented.",
      "c_spine": "Not indicated — no trauma to the head or trunk.",
      "airway": "Patent; full sentences.",
      "breathing": "20/min, regular, unlaboured, clear and equal.",
      "circulation": "Radial pulse 98, regular, full. Skin normal colour, warm and dry. No external bleeding.",
      "name": "Talia Grenier.",
      "complaint": "Hit her thumb with a hammer; the nail is throbbing unbearably.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": "Left thumb: a dark blue-black collection under the full width of the nail, tense and bulging. Nail intact and adherent. Fingertip swollen. No open wound, no deformity of the thumb. Radial pulse present, capillary refill in the unaffected fingers under 2 seconds.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "99% on room air."
      },
      "expected_transport_decision": "Not rapid transport. No hemorrhage, ABCs stable. Field management, then a physician if a fracture is suspected."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Intense throbbing pressure under the nail, out of proportion to the size of the injury. Marked relief once the blood is released. Full sensation and movement in the thumb.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Tetanus booster 3 years ago.",
        "last_intake": "Lunch about an hour ago.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Missed the nail head and struck her thumb squarely, about 15 minutes ago.",
        "pain": {
          "onset": "Immediate at the strike; the throbbing built over the following 10 minutes",
          "provoke": "Any pressure on the nail; letting the hand hang down",
          "quality": "Throbbing, pounding pressure",
          "region": "Under the left thumbnail; no radiation",
          "severity": "8/10, dropping to 2/10 immediately after the blood is released",
          "time_duration": "About 15 minutes"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "20",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "98",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "118/72",
        "sp02": "99% room air",
        "skin": {
          "color": "Normal",
          "condition": "Warm, dry"
        },
        "temperature": "36.8 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "5.4 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": null,
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": "Left thumb: subungual hematoma across the full nail bed, nail intact. After trephining, dark blood drains freely and the tension resolves. On focused exam of the digit afterwards: no point tenderness over the distal phalanx, no crepitus, full range of motion, normal sensation, capillary refill under 2 seconds. No fracture suspected. Right arm normal.",
        "back": null
      },
      "expected_transport_decision": "Release with advice. Refer to a physician if the pain persists after drainage, if the pressure rebuilds repeatedly, or if the focused exam suggests a fracture."
    },
    "expected_treatment": {
      "life_saving_intervention": "None required. Clean the area. Rest her hand on a firm surface. Use a nail drill to make a small hole in the nail directly above the fluid pocket; if no nail drill is available, heat the end of a paperclip until it is red hot and use that. There are no nerve endings in this area, so the procedure should be painless — explain that to her before you start, because it will not look painless. Let the blood drain, then clean the area and apply a dressing. Tell her that if pressure rebuilds over the next days the hole may need to be reopened. Because releasing the fluid did relieve the pain, no fracture is suspected — but perform the focused exam of the digit anyway and record the findings, because if the pain had not settled that exam is exactly what the manual calls for. Advise her to watch for signs of infection.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Myocardial contusion (cardiac contusion)",
      "title": "Steering wheel to the chest",
      "patient": "50-year-old woman",
      "reference": "Ch. 9 — Myocardial Contusions; Ch. 11 — Chest Injuries",
      "overview": "Bruising of the heart muscle from blunt chest trauma. Tests the willingness to suspect an injury that is difficult to identify and has non-specific symptoms, on the strength of the mechanism plus a racing-heart complaint.",
      "id": "soft_tissue_injuries.myocardial_contusions"
    },
    "scen_survey": {
      "environment": "Intersection, two-vehicle collision, daytime. Airbag did not deploy. Traffic moving past — get control. Fluid on the road. Vehicle stable.",
      "mechanisms_of_injury": "Blunt chest trauma: she struck the steering wheel at moderate speed with no airbag deployment. Any motor vehicle collision is also a spinal mechanism.",
      "casualty_count": "2 — the other driver is uninjured and walking. Confirm that yourself.",
      "assistance": "Law enforcement for traffic control, fire service for the fluid, EMS transport.",
      "ppe": "Gloves and eye protection; high-visibility clothing.",
      "impressions": "Woman still seated in the driver's seat, alert, hand on her sternum, saying her heart is racing and pounding. Sternal bruising visible through a torn blouse."
    },
    "primary_survey": {
      "loc": "A, oriented.",
      "c_spine": "Indicated. Any motor vehicle collision is a spinal-injury mechanism. She is seated, alert with stable vital signs, but she has immediate midline chest and upper back discomfort and has not been ambulatory — apply manual in-line stabilization and a collar.",
      "airway": "Patent; full sentences.",
      "breathing": "24/min, shallow because of the pain, regular. Equal expansion; clear and equal air entry.",
      "circulation": "Radial pulse 132, irregular with frequent skipped beats, weak. Skin pale, cool and moist. The irregular rhythm in a chest-trauma patient is the key finding.",
      "name": "Marisol Quintero.",
      "complaint": "Chest hurts where she hit the wheel, and her heart is racing.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": "Well-demarcated bruising across the sternum in the pattern of the steering wheel. Tender; no step, no crepitus, no instability.",
        "chest": "Equal expansion, no paradoxical movement, no flail segment, no subcutaneous crepitus.",
        "armpits": null,
        "rib_cage": "Tender over the third to fifth costal cartilages bilaterally; no crepitus.",
        "abdomen_view": null,
        "abdomen_palpation": "Soft, non-tender, not rigid.",
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": "Assessed on extrication: no deformity, mild midline thoracic tenderness, no wounds."
      },
      "shock_check": {
        "spo2": "95% on room air."
      },
      "expected_transport_decision": "Rapid transport category. Any patient with serious chest trauma should be rapidly transported for assessment, and myocardial contusion can cause life-threatening arrhythmias and cardiac failure. The irregular pulse makes this unambiguous."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Chest pain at the point of impact, and separately a feeling that her heart is racing and fluttering. Light-headedness, shortness of breath, nausea, anxiety. Note that the two complaints are distinct: one is the chest wall, one is the heart.",
        "allergies": "None known.",
        "medications": "Levothyroxine.",
        "past_medical_history": "Hypothyroidism. No previous heart disease, no arrhythmia — so the irregular pulse is new.",
        "last_intake": "Coffee about 90 minutes ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Struck side-on at an intersection; her chest hit the steering wheel; no airbag deployment; she was wearing a lap-sash belt.",
        "pain": {
          "onset": "Sudden, at the moment of impact about 12 minutes ago",
          "provoke": "Deep breathing, coughing, movement, pressure on the sternum",
          "quality": "Bruised, aching chest wall pain, plus a separate fluttering, pounding sensation",
          "region": "Central sternum; the fluttering is felt behind the sternum and in the throat",
          "severity": "6/10 chest wall pain",
          "time_duration": "About 12 minutes, constant"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "24",
          "rhythm": "Regular",
          "quality": "Shallow, splinted by pain; clear and equal"
        },
        "pulse": {
          "rate": "132",
          "rhythm": "Irregular, with frequent dropped beats",
          "quality": "Weak"
        },
        "blood_pressure": "98/62",
        "sp02": "95% room air; 98% on a standard mask at 8 LPM",
        "skin": {
          "color": "Pale",
          "condition": "Cool, moist"
        },
        "temperature": "36.6 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "6.1 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "No injury; no fluid from ears or nose.",
        "neck": "Mild midline tenderness; collar applied. No deformity, no jugular venous distension.",
        "chest": "Steering-wheel pattern bruising over the sternum, tender. Seatbelt bruise across the left shoulder and chest. Equal expansion; clear and equal air entry top and bottom, both sides — no diminished side, which argues against pneumothorax or hemothorax.",
        "abdomen": {
          "top_left": "Soft, non-tender",
          "top_right": "Soft, non-tender",
          "bottom_left": "Soft, non-tender; seatbelt mark across the lower abdomen",
          "bottom_right": "Soft, non-tender"
        },
        "pelvis": null,
        "legs": "No injury; pedal pulses present and equal.",
        "arms": "Radial pulses irregular and weak but equal; capillary refill 3 seconds.",
        "back": "Mild midline thoracic tenderness; no deformity."
      },
      "expected_transport_decision": "Rapid transport. Report the mechanism, the absence of airbag deployment, the sternal bruising pattern, and specifically that the irregular pulse is new."
    },
    "expected_treatment": {
      "life_saving_intervention": "Maintain spinal motion restriction from first contact and extricate her onto a rigid device without twisting. Expose the chest — a patient with chest trauma or chest pain must have the chest exposed for proper assessment. Position her to ease breathing once she is immobilized. Oxygen: her SpO2 is 95% but she is dyspneic with a suspected cardiac injury, so supplemental oxygen is appropriate. Do not strap or bind the chest in a way that restricts respiration. Apply defibrillator pads and be prepared for CPR — a myocardial contusion can cause life-threatening arrhythmias and cardiac failure. Nothing by mouth. Manage shock and maintain a normal body temperature. Reassess ABCs, pulse quality and rhythm, and vital signs every 5 minutes. Do not dismiss the 'racing heart' as anxiety; document it as a finding.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Dermatitis",
      "title": "Rash from the new degreaser",
      "patient": "33-year-old woman",
      "reference": "Ch. 9 — Dermatitis; Ch. 14 — Absorbed Poisons",
      "overview": "Contact dermatitis from an industrial chemical irritant. Tests the distinction between an irritant rash and a chemical burn, between a local reaction and anaphylaxis, and the modest scope of the actual treatment.",
      "id": "soft_tissue_injuries.dermatitis"
    },
    "scen_survey": {
      "environment": "Vehicle workshop; the degreaser container is on the bench. Read the label and the Safety Data Sheet — they detail the first aid procedure for the substance. Ensure ventilation.",
      "mechanisms_of_injury": "Repeated skin contact with a new citrus-based degreaser over three shifts, without gloves. Chemical irritant, not a caustic burn.",
      "casualty_count": "1 — ask whether anyone else using the product has a rash.",
      "assistance": "Not required; refer to a physician if it persists or worsens.",
      "ppe": "Gloves and eye protection; avoid contaminating yourself from her hands or clothing.",
      "impressions": "Adult woman, alert and comfortable, showing you both forearms, which are red, swollen and cracked. No respiratory distress, no facial swelling."
    },
    "primary_survey": {
      "loc": "A, oriented.",
      "c_spine": "Not indicated — no trauma.",
      "airway": "Patent; full sentences, normal voice. Confirm the negatives explicitly: no hoarseness, no tongue or lip swelling, no throat tightness. This is what separates dermatitis from an anaphylactic reaction.",
      "breathing": "16/min, regular, unlaboured. Clear and equal air entry, no wheeze.",
      "circulation": "Radial pulse 84, regular, full. Skin normal except locally; warm and dry. No hives elsewhere.",
      "name": "Rachelle Boudreau.",
      "complaint": "Itchy, burning rash on both forearms that keeps getting worse.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": "Both forearms and the backs of both hands: sharply demarcated redness, irritation and swelling in the pattern of exposure, with thickened, cracked skin and a few small intact blisters. No full-thickness change, no charring, no ongoing chemical on the skin. Radial pulses equal, capillary refill under 2 seconds, sensation and movement normal.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "99% on room air."
      },
      "expected_transport_decision": "Not rapid transport. This is a local skin reaction with no airway, breathing or circulatory involvement. State the negatives that rule out anaphylaxis. Escalate immediately if facial or airway swelling, wheeze, widespread hives or hypotension appear."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Itching, burning, redness, swelling, thickened and cracking skin, a few blisters. No throat tightness, no shortness of breath, no dizziness, no widespread rash, no nausea — ask each directly.",
        "allergies": "Nickel — contact rash. Ask whether she has reacted to a skin irritant before, as the manual directs: yes, to a hand sanitizer two years ago.",
        "medications": "None.",
        "past_medical_history": "Childhood eczema. No asthma.",
        "last_intake": "Coffee about an hour ago.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "The workshop switched degreaser three shifts ago. She has been washing parts bare-handed. Rash appeared after the first shift and has worsened each day.",
        "pain": {
          "onset": "Gradual over three days",
          "provoke": "Further contact with the degreaser, hot water, scratching",
          "quality": "Burning and itching",
          "region": "Both forearms and the backs of both hands, in the exposure pattern",
          "severity": "5/10 itch and burn",
          "time_duration": "Three days, progressive"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "16",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal, no wheeze"
        },
        "pulse": {
          "rate": "84",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "116/72",
        "sp02": "99% room air",
        "skin": {
          "color": "Normal except for the affected areas, which are red",
          "condition": "Warm, dry; cracked and thickened locally"
        },
        "temperature": "36.8 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "5.1 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "No facial or lip swelling — record the negative.",
        "neck": "No swelling; voice normal.",
        "chest": "Equal expansion; clear and equal air entry, no wheeze. No rash on the trunk.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": "Both forearms and dorsal hands: erythema, irritation, swelling, thickening and cracking, with small intact blisters. No red streaking, no pus, no systemic signs of infection. Pulses, capillary refill, sensation and range of motion all normal.",
        "back": null
      },
      "expected_transport_decision": "Release with advice. Refer to a physician if the irritation persists for more than three days — and it already has, so she should be seen. Also refer if it spreads or becomes infected."
    },
    "expected_treatment": {
      "life_saving_intervention": "None required. Read the product label and Safety Data Sheet and follow the first aid instructions for the substance; contact the Poison Control Centre if anything is unclear. Because this is an irritant rather than a caustic burn, wash the affected area with cool water and pat it dry, then keep it clean and dry — if it were causing burns, the care would instead be continuous flushing with large amounts of cool running water for at least 20 minutes. Protect the skin with suitably sized dressings. The most important step is to avoid further contact with the irritant: she needs gloves, or a different product. Leave the blisters intact. Advise her to see a physician, since the irritation has already persisted beyond three days. Note that dermatitis is not contagious but can spread if untreated. Report the exposure so the workplace can review the product and ask whether co-workers are affected.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Superficial burn",
      "title": "Sunburn on the lake",
      "patient": "25-year-old man",
      "reference": "Ch. 9 — Superficial Burns, Radiation Burns, Rule of Nines",
      "overview": "Extensive but superficial radiation burn. Tests the Rule of Nines even for a non-critical burn, the fact that superficial burns often need no intervention at all, and the critical-burn checklist that decides whether this one counts.",
      "id": "soft_tissue_injuries.burns.superficial"
    },
    "scen_survey": {
      "environment": "Lakeside campsite, hot and sunny, late afternoon. Shade available under an awning. No hazards.",
      "mechanisms_of_injury": "Radiation burn: about six hours of direct sun exposure on the water without sunscreen or a shirt.",
      "casualty_count": "1",
      "assistance": "None required.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Young man standing, uncomfortable, bright red across the shoulders, chest, back and face. Alert and talking normally."
    },
    "primary_survey": {
      "loc": "A, oriented.",
      "c_spine": "Not indicated — no trauma.",
      "airway": "Patent; full sentences. No burns around the mouth or nose, no singed hair or eyebrows, no soot.",
      "breathing": "18/min, regular, unlaboured, clear and equal. No hoarseness, no stridor, no cough.",
      "circulation": "Radial pulse 92, regular, full. Skin red over the burned areas; warm and dry elsewhere.",
      "name": "Josh Trenholm.",
      "complaint": "Badly sunburnt and it hurts to move.",
      "rapid_body_survey": {
        "head": "Face and ears red and dry, painful. No burns around the mouth or nose.",
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": "Anterior torso red and dry, painful, no blisters.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": "Both arms red anteriorly, spared posteriorly.",
        "back_spine": "Posterior torso red and dry, painful, no blisters."
      },
      "shock_check": {
        "spo2": "99% on room air."
      },
      "expected_transport_decision": "Not rapid transport. Work through the critical-burn checklist aloud and reject each item: no full-thickness burn of any size, no partial-thickness burn over 10% of the body, not a child or an older adult, no inhalation injury, no burns around the mouth or nose, no significant burns to head, neck, hands, feet or genitals, not caused by chemicals, explosion or electricity, and he is fully responsive. Escalate if blistering develops widely or he shows signs of shock."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Burning, tight, tender skin; mild headache; thirsty; feels hot. No nausea, no dizziness, no confusion.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Fair skin, burns easily. Nothing else significant.",
        "last_intake": "Beer and water through the afternoon; last drink 30 minutes ago.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Six hours fishing on open water with no shirt, no hat and no sunscreen; reflected glare off the water.",
        "pain": {
          "onset": "Gradual, becoming noticeable about two hours ago",
          "provoke": "Movement, clothing rubbing, warmth",
          "quality": "Burning, tight, tender",
          "region": "Face, ears, shoulders, chest, upper back, anterior arms",
          "severity": "5/10",
          "time_duration": "About two hours, still intensifying"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "18",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "92",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "126/78",
        "sp02": "99% room air",
        "skin": {
          "color": "Bright red over the burned areas; normal elsewhere",
          "condition": "Dry, hot over the burns"
        },
        "temperature": "37.3 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "3 mm"
        },
        "blood_glucose": "5.6 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "Face and ears erythematous, dry, no blisters — head and neck is 9% by the Rule of Nines, though not all of it is burned.",
        "neck": null,
        "chest": "Anterior torso red and dry, no blisters — anterior torso 18%.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Spared — he wore shorts and was sitting.",
        "arms": "Anterior surface of each arm burned, posterior spared — 4.5% per arm anteriorly, so 9% for both.",
        "back": "Posterior torso red and dry, no blisters — posterior torso 18%."
      },
      "expected_transport_decision": "Release with advice. Roughly 45 to 50% of the body surface is involved by the Rule of Nines, but all of it is superficial, which is why this is not a critical burn — depth and site matter as much as extent."
    },
    "expected_treatment": {
      "life_saving_intervention": "None required. Interventions and additional care may not be necessary for a superficial burn: these generally heal on their own in 5 to 6 days without scarring. Move him into the shade and prevent further exposure to sunlight — that is the first priority, exactly as with any burn: stop further damage. Care for it as a thermal burn: cool the areas with cool water or soaked cloth compresses, adding water regularly to keep them cool, for at least 10 minutes. Do not use ice or ice water. Do not put ointments, butter, cooking oil or commercial salves on it — they seal in heat and contaminate the skin. He may prefer a moist dressing on smaller areas if it reduces pain. Keep him hydrated. Advise him that if blistering develops the burn has become partial-thickness and he should be assessed.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Partial-thickness burn",
      "title": "Boiling pasta water",
      "patient": "6-year-old girl",
      "reference": "Ch. 9 — Partial-Thickness Burns, Identifying Critical Burns, Rule of Nines, Care for Burns",
      "overview": "A scald in a child — critical by definition. Tests the Rule of Nines, the cool-only-a-small-area-at-a-time rule for burns over 10%, and hypothermia watch during cooling, to which children are especially vulnerable.",
      "id": "soft_tissue_injuries.burns.partial_thickness"
    },
    "scen_survey": {
      "environment": "Home kitchen; pot and boiling water on the floor, stove still on. Turn it off and clear the wet floor.",
      "mechanisms_of_injury": "Thermal scald: pulled a pot of boiling pasta water off the stove onto herself. Clothing held the hot water against the skin.",
      "casualty_count": "1 — check whether a parent was splashed.",
      "assistance": "EMS transport to a facility with burn care; a second responder for cooling and dressings.",
      "ppe": "Gloves, gown and eye protection.",
      "impressions": "Child crying loudly and inconsolably in a parent's arms, wet clothing clinging to her chest and right arm, red blotchy skin with blisters forming. Crying hard is reassuring for the airway."
    },
    "primary_survey": {
      "loc": "A, crying, frightened, seeking her mother.",
      "c_spine": "Not indicated — no fall, no trauma.",
      "airway": "Patent — she is crying loudly. No facial burns, no burns around the mouth or nose, no soot, no singed hair.",
      "breathing": "34/min, regular, unlaboured. Clear and equal air entry, no hoarseness or stridor.",
      "circulation": "Radial pulse 148, regular, full. Skin red and blistered over the burns; warm and moist elsewhere.",
      "name": "Ava Lindberg (from her mother).",
      "complaint": "Burned by hot water; it hurts.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": "Anterior chest and abdomen: red, blotchy, wet-looking, with blisters weeping clear fluid. Very painful. Remove the clothing carefully once cooled; do not pull off anything stuck to the burn.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": "Right arm, anterior surface: red and blistered from shoulder to wrist. Right hand spared.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "98% on room air."
      },
      "expected_transport_decision": "Rapid transport category. This is a critical burn on two counts: a partial-thickness burn covering more than 10% of the body, and any partial- or full-thickness burn on a child. Extensive burns are on the immediate transport list."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Severe pain, crying, frightened, shivering once cooling begins. No cough, no hoarseness, no difficulty breathing.",
        "allergies": "None known (mother).",
        "medications": "None.",
        "past_medical_history": "Healthy; immunizations up to date, including tetanus.",
        "last_intake": "Juice about an hour ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Reached up for the pot handle at the front of the stove and pulled it onto herself, about 5 minutes ago.",
        "pain": {
          "onset": "Immediate, at the scald",
          "provoke": "Air movement over the burns, touching them, moving the arm",
          "quality": "Burning, stinging — she says 'hot'",
          "region": "Chest, stomach and right arm",
          "severity": "Extremely distressed; assume severe. Use her behaviour and her mother's judgement rather than a number.",
          "time_duration": "About 5 minutes"
        }
      },
      "vitals": {
        "loc": "A, crying, consolable by her mother",
        "respiration": {
          "rate": "34",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal, strong cry"
        },
        "pulse": {
          "rate": "148",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "96/56",
        "sp02": "98% room air",
        "skin": {
          "color": "Red and blotchy over the burns with blisters; normal elsewhere",
          "condition": "Burns wet and weeping; she begins to shiver during cooling — stop cooling if she does"
        },
        "temperature": "36.9 °C initially; watch it fall during cooling",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "5.0 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "No burns to the face, no burns around the mouth or nose, no singed hair or eyebrows, no soot.",
        "neck": null,
        "chest": "Anterior torso burned: red, blotchy, blistered, weeping — partial-thickness. Anterior torso is 18% by the Rule of Nines; roughly two-thirds of it is involved, so about 12%.",
        "abdomen": {
          "top_left": "Burned, tender to air but soft on gentle palpation",
          "top_right": "Burned, tender to air but soft on gentle palpation",
          "bottom_left": "Spared",
          "bottom_right": "Spared"
        },
        "pelvis": null,
        "legs": "Spared.",
        "arms": "Right arm anterior surface burned — 4.5%. Right hand and fingers spared. Radial pulse present, capillary refill under 2 seconds, moves the fingers normally. Left arm uninjured.",
        "back": "Spared."
      },
      "expected_transport_decision": "Rapid transport. Report the estimate — approximately 16 to 17% partial-thickness by the Rule of Nines — the mechanism, and the time of the burn."
    },
    "expected_treatment": {
      "life_saving_intervention": "Three steps for any burn: prevent further tissue damage, cover the burned area, and take steps to manage shock. Cool immediately with cool or cold potable water — soft tissue keeps burning for several minutes after the heat source is gone. Because the burn covers more than 10% of the body, cool only a small area at a time to avoid cold stress and hypothermia, to which children are especially susceptible. If she starts to shiver, stop cooling immediately and monitor for hypothermia and shock. Do not use ice or ice water. Remove jewellery early. Once cooled, carefully peel or cut away the wet clothing, but leave anything stuck to the burn in place. Leave the blisters intact. Cover with dry, non-stick sterile dressings, loosely bandaged with no pressure; use clean dry sheets for the large area. No ointments or oils. Manage shock and help her maintain a normal body temperature — burn patients lose heat easily. Nothing by mouth. Keep her mother with her; a calm parent is a real intervention in a burned child.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Full-thickness burn",
      "title": "Grease fire in the fryer",
      "patient": "45-year-old man",
      "reference": "Ch. 9 — Full-Thickness Burns, Identifying Critical Burns, Care for Burns; Ch. 8 — Shock",
      "overview": "Full-thickness burns from hot grease. Tests the counter-intuitive finding that the deepest area hurts least, the hypovolemic shock risk from fluid loss through open burns, and the special danger of grease.",
      "id": "soft_tissue_injuries.burns.full_thickness"
    },
    "scen_survey": {
      "environment": "Restaurant kitchen; fire suppressed, deep fryer overturned, hot grease on the floor — a slip and burn hazard for you. Ventilate; smoke still in the room.",
      "mechanisms_of_injury": "Thermal burn from hot cooking grease over the right arm, hand and thigh. Grease is slow to cool and hard to remove from skin, so it carries a high risk of critical burns.",
      "casualty_count": "1 — account for the rest of the kitchen staff.",
      "assistance": "Fire service, second crew, rapid transport to a burn-capable facility.",
      "ppe": "Gloves, gown and eye protection; non-slip footing.",
      "impressions": "Adult man sitting against a wall, pale and shocky, right arm and hand brown and leathery with white patches, surrounded by red blistered skin. Oddly calm about the worst-looking area."
    },
    "primary_survey": {
      "loc": "A, oriented, but becoming drowsy over the course of the scenario.",
      "c_spine": "Not indicated — he sat down under his own control, no fall, no blunt force.",
      "airway": "Patent; full sentences. No burns around the mouth or nose, no soot, no singed nasal hair, no hoarseness.",
      "breathing": "26/min, regular, unlaboured. Clear and equal air entry.",
      "circulation": "Radial pulse 128, regular, weak. Skin pale, cool and clammy away from the burns. Capillary refill 4 seconds.",
      "name": "Rui Almeida.",
      "complaint": "Burned by hot grease. Says the worst-looking part does not hurt much.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": "Right anterior thigh: red, blistered, weeping, very painful — partial-thickness through burnt-through trousers.",
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": "Right forearm and dorsum of the right hand: brown, charred, leathery, dry, with white tissue visible in places — full-thickness, and relatively painless. Surrounded by a rim of red, blistered, very painful partial-thickness burn.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "96% on room air, weak trace."
      },
      "expected_transport_decision": "Rapid transport category. A full-thickness burn of any size is a critical burn, and extensive burns are on the immediate transport list. Burns to the hand are independently critical."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Severe pain in the red blistered areas, and strikingly little pain in the brown leathery area — explain to him why that is the worse sign, not the better one. Light-headed, nauseated, thirsty, shivering, anxious.",
        "allergies": "None known.",
        "medications": "Amlodipine.",
        "past_medical_history": "Hypertension. Tetanus booster 7 years ago.",
        "last_intake": "Coffee about 2 hours ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "A fryer basket slipped, the fryer tipped, and hot grease went over his right side.",
        "pain": {
          "onset": "Immediate at the burn, about 7 minutes ago",
          "provoke": "Air movement and touch over the blistered areas",
          "quality": "Searing and burning at the edges; numb and dull in the centre",
          "region": "Right forearm and hand, right anterior thigh",
          "severity": "9/10 at the red edges, 2/10 over the charred centre",
          "time_duration": "About 7 minutes"
        }
      },
      "vitals": {
        "loc": "A, oriented; becoming drowsy",
        "respiration": {
          "rate": "26",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "128",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "94/58 and falling",
        "sp02": "96%, weak trace",
        "skin": {
          "color": "Pale away from the burns; brown and charred with white areas centrally, red at the margins",
          "condition": "Cool and clammy away from the burns; burns dry and leathery centrally, weeping at the margins"
        },
        "temperature": "35.9 °C — burn patients lose body heat easily",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "5 mm"
        },
        "blood_glucose": "7.1 mmol/L",
        "glasgow_coma": "E4 V5 M6 = 15, drifting to 14"
      },
      "head_to_toe_exam": {
        "head": "No burns, no soot, no singed hair or eyebrows, no burns around the mouth or nose.",
        "neck": null,
        "chest": "No burns; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Right anterior thigh partial-thickness burn, approximately 5%. Pedal pulses present and equal; capillary refill 4 seconds bilaterally. Left leg uninjured.",
        "arms": "Right forearm and dorsum of the hand: full-thickness burn, brown, charred, leathery, white tissue visible, relatively painless — approximately 4% by the Rule of Palms. Surrounding partial-thickness rim. Radial pulse present but weak; check circulation distal to the burn repeatedly, and remove all rings and his watch now, before swelling makes it impossible. Left arm uninjured.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport to a facility with advanced burn care. Report the mechanism (grease), the depth, the estimated extent, and the falling blood pressure."
    },
    "expected_treatment": {
      "life_saving_intervention": "Prevent further tissue damage, cover the burns, manage shock. Cool the areas with cool or cold potable water; grease is slow to cool and keeps burning, so cooling matters even more here. Cool only a small area at a time and stop if he shivers — he is already at 35.9 °C. Do not use ice or ice water. Remove rings and his watch immediately, before swelling sets in. Once cooled, peel or cut away loose clothing, leaving anything adherent in place. Leave blisters intact. Cover with dry, non-stick sterile dressings, loosely bandaged with no pressure; use clean dry sheets over the larger areas. No ointments or oils. Full-thickness burns are open wounds, so treat hypovolemic shock as an active threat: keep him supine, maintain a normal body temperature, high-flow oxygen, nothing by mouth. Check circulation and sensation distal to the burns before and after dressing. Reassess ABCs and vitals every 5 minutes and watch for his level of responsiveness to fall further.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Inhalation injury",
      "title": "Pulled from the basement fire",
      "patient": "36-year-old woman",
      "reference": "Ch. 9 — Inhalation Injuries, Care for Burns; Ch. 6 — Airway Management; Ch. 14 — Carbon Monoxide",
      "overview": "Airway burns from a fire in an enclosed space. Tests recognition of the inhalation-injury signs — soot, singed hair, perioral burns, hoarseness — the understanding that the airway will keep swelling, and the CO oximetry trap.",
      "id": "soft_tissue_injuries.burns.inhalation"
    },
    "scen_survey": {
      "environment": "Front lawn of a house fire; fire service operating, smoke drifting. Stay in the cold zone. Do not re-enter. Free-flowing oxygen away from the fire ground.",
      "mechanisms_of_injury": "Fire in an enclosed, confined basement — a mechanism that is likely to involve inhalation injury of the airway and lungs, plus carbon monoxide exposure.",
      "casualty_count": "1 — confirm with the incident commander that everyone is accounted for.",
      "assistance": "Second crew, rapid transport to a burn-capable facility, early hospital notification about the airway.",
      "ppe": "Gloves, gown and eye protection; suction ready.",
      "impressions": "Woman on a blanket on the lawn, soot around the mouth and nose, eyebrows and the front of her hair singed, coughing black sputum, voice hoarse. Sitting up and leaning forward."
    },
    "primary_survey": {
      "loc": "A, oriented but agitated and increasingly restless.",
      "c_spine": "Ask how she was extricated. Carried out, no fall, no structural collapse on her. Not indicated — but say that you asked.",
      "airway": "Threatened and deteriorating. Soot in the mouth and nose, hoarse voice, harsh barking cough with black sputum, and a developing stridor. This will keep swelling — the airway is the whole emergency.",
      "breathing": "32/min, laboured, with an audible upper-airway noise on inspiration. Coarse crackles at both bases.",
      "circulation": "Radial pulse 128, regular, full. Skin flushed with soot; warm and moist.",
      "name": "Deanna Fitzroy.",
      "complaint": "Cannot get her breath and her throat is closing.",
      "rapid_body_survey": {
        "head": "Soot around the mouth and nostrils, singed nasal hair, singed eyebrows and hairline, reddened blistered skin around the lips — every listed sign of an inhalation injury. Find all of them and say them out loud.",
        "jaw": null,
        "neck_spine": "No deformity; hoarse voice; no tracheal deviation.",
        "clavicles": null,
        "sternum": null,
        "chest": "Superficial and partial-thickness burns to the anterior chest; equal expansion; crackles at both bases.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": "Partial-thickness burns to both forearms; radial pulses present; remove rings and watch now.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "Reads 96% on room air — and it is not trustworthy. She has been in a smoke-filled enclosed space, so carbon monoxide is very likely, and CO saturates hemoglobin in a way the oximeter cannot distinguish. Continue high-concentration oxygen regardless of the reading."
      },
      "expected_transport_decision": "Rapid transport category — burns with signs of inhalation injury are on the immediate transport list, as are burns around the mouth and nose and any signs of smoke inhalation. Do not wait for her to get worse; the airway will close."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Throat and chest burning, hoarse voice, barking cough with black sputum, shortness of breath, headache, dizziness, nausea, sore eyes, anxiety. Note that headache, dizziness and nausea also fit carbon monoxide poisoning.",
        "allergies": "None known.",
        "medications": "Sertraline.",
        "past_medical_history": "Nothing significant. Non-smoker. Tetanus booster 5 years ago.",
        "last_intake": "Coffee about 3 hours ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Fire started in a basement workshop; she went down to fight it with an extinguisher and was in the smoke for roughly 4 minutes in a confined space before firefighters brought her out.",
        "pain": {
          "onset": "During the exposure, about 12 minutes ago",
          "provoke": "Breathing in, coughing, talking",
          "quality": "Raw, burning, scalded",
          "region": "Throat and central chest; also the burned skin of the face, chest and forearms",
          "severity": "8/10",
          "time_duration": "About 12 minutes, worsening"
        }
      },
      "vitals": {
        "loc": "A, oriented, agitated and restless",
        "respiration": {
          "rate": "32",
          "rhythm": "Regular",
          "quality": "Laboured with inspiratory stridor; hoarse; coarse crackles at both bases; black sputum"
        },
        "pulse": {
          "rate": "128",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "142/88",
        "sp02": "96% room air — unreliable in carbon monoxide exposure; disregard it",
        "skin": {
          "color": "Flushed and sooty; reddish around the lips",
          "condition": "Warm, moist; burns on face, chest and forearms"
        },
        "temperature": "37.5 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "6.5 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "Soot around the mouth and nose, singed nasal hair, singed eyebrows and hairline, partial-thickness burns to the lips and chin. Airway signs — record every one, because these are what justify the transport decision.",
        "neck": "Hoarseness, no swelling palpable yet, trachea midline. Reassess repeatedly.",
        "chest": "Superficial and partial-thickness burns anteriorly, approximately 9%. Equal expansion; coarse crackles at both bases.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Uninjured.",
        "arms": "Partial-thickness burns to both forearms, approximately 9% combined. Radial pulses present and equal; rings and watch removed.",
        "back": "Uninjured."
      },
      "expected_transport_decision": "Rapid transport without delay. Notify the receiving facility early and specifically about the airway; they need to be ready before she arrives."
    },
    "expected_treatment": {
      "life_saving_intervention": "The airway is the priority and pays no attention to how the skin looks. She is already in a well-ventilated area; keep her there. Sit her upright in the position she has chosen. High-concentration oxygen by non-rebreather at 10–15 LPM, and continue it regardless of the oximeter reading because of the likely carbon monoxide exposure. Have suction and a BVM immediately available; be prepared for assisted ventilations. Note that an airway adjunct is a poor choice into a swelling, burned upper airway, and that supraglottic airways are not indicated where there is airway edema or stridor — this needs advanced life support, so request it. Care for the skin burns second: cool them, leave blisters intact, cover with dry non-stick sterile dressings loosely bandaged, no ointments. Remove rings and jewellery early. Manage shock and body temperature. Nothing by mouth. Reassess the airway continuously — the deterioration is the expected course, not a surprise.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Chemical burn",
      "title": "Drain cleaner in the face",
      "patient": "28-year-old man",
      "reference": "Ch. 9 — Chemical Burns, Chemical Burns to the Eye; Ch. 14 — Absorbed Poisons",
      "overview": "An alkali chemical burn to the face and eye. Tests responder decontamination and self-protection, the brush-then-flush rule for powders, the 20-minute flush, and the nose-outward eye irrigation direction.",
      "id": "soft_tissue_injuries.burns.chemical"
    },
    "scen_survey": {
      "environment": "Basement utility room. Open container of crystalline drain cleaner (sodium hydroxide) on the floor, powder spilled. Poor ventilation. Do not proceed without appropriate PPE; get the Safety Data Sheet from the container label.",
      "mechanisms_of_injury": "Caustic alkali burn: crystalline drain cleaner splashed and blew back onto the face and into the left eye when water was added to a clogged drain. The chemical continues to burn as long as it is on the skin.",
      "casualty_count": "1 — ask whether anyone else was in the room and whether he touched any tools or surfaces after contamination.",
      "assistance": "Fire service or hazardous-materials team for the spill; Poison Control Centre; rapid transport.",
      "ppe": "Gloves, gown, mask and eye protection appropriate to a caustic chemical — protect yourself before touching him, and beware of contaminated run-off.",
      "impressions": "Young man on his knees at a laundry tub, hands over his face, screaming, white powder on his shirt, hair and face. Left eye clamped shut."
    },
    "primary_survey": {
      "loc": "A, oriented, in severe distress.",
      "c_spine": "Not indicated — no fall, no blunt trauma.",
      "airway": "Patent — he is shouting. Check for burns inside the mouth and for hoarseness, since caustic fumes and splash can involve the airway: none found here, but reassess.",
      "breathing": "28/min, regular, unlaboured. Clear and equal air entry, no wheeze, no stridor.",
      "circulation": "Radial pulse 124, regular, full. Skin normal away from the burns; warm and moist.",
      "name": "Devon McAllister.",
      "complaint": "Chemical in his eye and on his face; burning badly.",
      "rapid_body_survey": {
        "head": "White crystalline powder on the face, forehead, hair and beard. Skin underneath red and slippery to the touch — characteristic of an alkali. Left eye held closed, streaming, conjunctiva red and swollen. Right eye unaffected.",
        "jaw": null,
        "neck_spine": "Powder on the neck and inside the collar; skin red beneath.",
        "clavicles": null,
        "sternum": null,
        "chest": "Powder on the shirt; skin red beneath the upper chest.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "98% on room air."
      },
      "expected_transport_decision": "Rapid transport category. Burns resulting from chemicals are critical burns by definition, and a chemical burn to the eye is severe. The manual is explicit: remove the chemical as quickly as possible, then place the patient in the rapid transport category."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Intense burning of the face and left eye, vision blurred in the left eye, streaming tears, feeling of grit under the lid, panic. No throat pain, no hoarseness, no difficulty swallowing — ask, and record the negatives.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Wears contact lenses — the left one must come out.",
        "last_intake": "Lunch about 90 minutes ago.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Poured crystalline drain cleaner into a clogged sink, then added hot water; the mixture reacted and sprayed back into his face.",
        "pain": {
          "onset": "Immediate, about 3 minutes ago, and worsening because the chemical is still acting",
          "provoke": "Continued contact; nothing relieves it until it is flushed away",
          "quality": "Deep searing burn; gritty burning in the eye",
          "region": "Face, forehead, neck, upper chest and the left eye",
          "severity": "10/10",
          "time_duration": "About 3 minutes and still ongoing"
        }
      },
      "vitals": {
        "loc": "A, oriented, extremely distressed",
        "respiration": {
          "rate": "28",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal, no stridor"
        },
        "pulse": {
          "rate": "124",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "150/92",
        "sp02": "98% room air",
        "skin": {
          "color": "Red where the chemical has contacted; normal elsewhere",
          "condition": "Slippery and soapy to the touch where the alkali is present; warm and moist"
        },
        "temperature": "36.9 °C",
        "pupils": {
          "equal": "Cannot be assessed on the left because of swelling and spasm; right 4 mm",
          "reactive": "Right reactive",
          "size": "Right 4 mm"
        },
        "blood_glucose": "5.7 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "After brushing off the powder and flushing: partial-thickness burns to the forehead, both cheeks and the chin, approximately 4 to 5%. Left eye: conjunctiva injected and swollen, cornea hazy, lid spasm, blurred vision. Right eye normal. Contact lens removed from the left eye and bagged.",
        "neck": "Superficial to partial-thickness burns anteriorly. No swelling, voice normal, trachea midline.",
        "chest": "Superficial burns to the upper chest. Equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": "Superficial burns to both forearms where he wiped his face — check the hands too. Pulses and capillary refill normal.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport with irrigation continuing en route. Report the exact chemical name from the container and take a photograph of the label or the container itself if it can be done safely."
    },
    "expected_treatment": {
      "life_saving_intervention": "Protect yourself first with appropriate PPE; you cannot help him if you are contaminated. Ask whether he touched tools, surfaces or other people after contamination, and whether anyone else was exposed. Because the chemical is a powder, brush it off the skin before flushing — flushing first would dissolve and spread it. Then flush continuously with large amounts of cool running water for at least 20 minutes; the chemical keeps burning as long as it is on the skin. Have him remove contaminated clothing, including anything that got wet during flushing, and bag it. For the eye: remove the contact lens, flush the affected eye for at least 20 minutes, and direct the flow from the nose outwards, angling his head so the run-off cannot wash into the unaffected right eye or onto clean skin. Cover the burned skin with dry, non-stick sterile dressings, loosely bandaged. Contact the Poison Control Centre and follow their direction; read the Safety Data Sheet. Manage shock and body temperature. Continue irrigation during transport.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Electrical burn",
      "title": "Contact with the overhead line",
      "patient": "31-year-old man",
      "reference": "Ch. 9 — Electrical Burns; Ch. 12 — Head and Spinal MOI; Ch. 7 — Cardiac Arrest",
      "overview": "High-voltage electrical injury. Tests the absolute rule that the current must be off before you approach, the search for entry and exit wounds, and the recognition that the visible burns are the least of it — arrest and spinal injury are the real threats.",
      "id": "soft_tissue_injuries.burns.electrical"
    },
    "scen_survey": {
      "environment": "Construction site. An aluminium ladder is in contact with an overhead power line and the line is still energized. Do not approach. Wet ground. Stay well back and request the utility to de-energize and confirm; some sites have specific lock-out procedures.",
      "mechanisms_of_injury": "Contact with a high-voltage overhead line through a metal ladder; thrown approximately 3 m by the shock. Electrocution is a mechanism for both spinal injury and cardiac or respiratory arrest, and is on the immediate transport list.",
      "casualty_count": "1 — check that no one else touched the ladder or the patient while energized.",
      "assistance": "Utility to de-energize and confirm; fire service; law enforcement to hold the perimeter; second crew; rapid transport.",
      "ppe": "Gloves, gown and eye protection; hard hat; do not rely on PPE as protection from electricity.",
      "impressions": "Adult man lying supine about 3 m from the ladder, not moving, one boot blown off. Do not approach until the utility confirms the line is dead."
    },
    "primary_survey": {
      "loc": "P on your arrival, improving to V then A over about 10 minutes. Confused, no memory of the event.",
      "c_spine": "Indicated. Electrocution, including lightning strikes, is explicitly listed as a mechanism for suspecting head and spinal injury, and he was thrown 3 m. Initiate spinal motion restriction from first contact.",
      "airway": "Patent; snoring initially, clears with a jaw thrust. He accepts an OPA at first, gagging on it later as he improves.",
      "breathing": "10/min and shallow initially, improving to 22/min. Clear and equal air entry.",
      "circulation": "Carotid pulse present, 132, irregular with frequent ectopic beats, weak. Skin pale, cool and moist. The irregular rhythm after electrocution matters.",
      "name": "Jared Kilbride (from his supervisor).",
      "complaint": "Unresponsiveness after electrocution.",
      "rapid_body_survey": {
        "head": "No injury to the scalp; hard hat found nearby, intact. No fluid from ears or nose.",
        "jaw": null,
        "neck_spine": "No deformity; unable to assess tenderness while his level of responsiveness is reduced — assume injury.",
        "clavicles": null,
        "sternum": null,
        "chest": "No obvious injury; equal expansion. Apply defibrillator pads.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": "Left foot: a ragged charred wound on the sole where the boot was blown off — the exit burn. Look for two burn sites and say that you are looking.",
        "arms_humerus": null,
        "arms_rest": "Right hand: a deep, dry, charred, leathery wound across the palm — the entry burn. Full-thickness, relatively painless. Right radial pulse weak.",
        "back_spine": "Assessed on a coordinated roll onto a board: no deformity, no wounds, unable to assess tenderness reliably."
      },
      "shock_check": {
        "spo2": "89% on room air initially (moderate hypoxia); 97% on a non-rebreather at 15 LPM."
      },
      "expected_transport_decision": "Rapid transport category. Electrocution, decreased level of responsiveness, burns from electricity, and suspected spinal injury — four separate triggers."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Once responsive: confusion, no memory of the event, severe muscle aching throughout, chest tightness, palpitations, numbness in the right hand, pain in the left foot. Headache.",
        "allergies": "None known (supervisor and emergency contact card).",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Tetanus booster 2 years ago.",
        "last_intake": "Coffee about 2 hours ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Moving an aluminium extension ladder; it contacted an overhead line; witnesses saw a flash and saw him thrown about 3 m.",
        "pain": {
          "onset": "At the moment of contact, about 8 minutes ago",
          "provoke": "Any movement worsens the muscle pain",
          "quality": "Deep aching throughout the muscles; burning in the hand and foot; tightness in the chest",
          "region": "Whole body ache; right hand and left foot burns; central chest",
          "severity": "7/10 overall; the hand burn itself is oddly numb",
          "time_duration": "About 8 minutes"
        }
      },
      "vitals": {
        "loc": "P initially, improving to A but confused",
        "respiration": {
          "rate": "10, improving to 22",
          "rhythm": "Irregular initially, then regular",
          "quality": "Shallow initially; clear and equal"
        },
        "pulse": {
          "rate": "132",
          "rhythm": "Irregular with frequent ectopic beats",
          "quality": "Weak"
        },
        "blood_pressure": "98/60",
        "sp02": "89% room air; 97% on a non-rebreather",
        "skin": {
          "color": "Pale",
          "condition": "Cool, moist; charred at the entry and exit wounds"
        },
        "temperature": "36.0 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Sluggish initially, then reactive",
          "size": "5 mm"
        },
        "blood_glucose": "6.8 mmol/L",
        "glasgow_coma": "E2 V2 M4 = 8 initially; E4 V4 M6 = 14 after about 10 minutes"
      },
      "head_to_toe_exam": {
        "head": "No injury; pupils equal and reactive on recheck; no fluid from ears or nose.",
        "neck": "No deformity, no wounds; collar applied.",
        "chest": "No external injury. Equal expansion; clear and equal air entry. Defibrillator pads in place.",
        "abdomen": {
          "top_left": "Soft, non-tender",
          "top_right": "Soft, non-tender",
          "bottom_left": "Soft, non-tender",
          "bottom_right": "Soft, non-tender"
        },
        "pelvis": "Stable; no crepitus, no pain.",
        "legs": "Left sole exit burn: ragged, charred, full-thickness. Left pedal pulse present but weak; capillary refill 4 seconds. Right leg uninjured. Check both legs for fractures from the 3 m throw — none found.",
        "arms": "Right palm entry burn: full-thickness, charred, dry, relatively painless. Right radial pulse weak compared with the left; capillary refill 4 seconds in the right hand; reduced sensation in the right fingers. Remove rings and watch. Left arm uninjured.",
        "back": "No wounds; no deformity."
      },
      "expected_transport_decision": "Rapid transport. Report the voltage if the utility can supply it, the entry and exit sites, the throw distance, and the irregular pulse."
    },
    "expected_treatment": {
      "life_saving_intervention": "Do not approach until the electrical current is confirmed off — this comes before every other consideration. Suspect life-threatening conditions such as respiratory or cardiac arrest, and suspect spinal injuries and other fractures because of the forces involved. Manage the airway with a jaw thrust to spare the neck; suction ready. High-concentration oxygen. Apply defibrillator pads and leave the unit attached; be prepared to start CPR. Maintain spinal motion restriction throughout and immobilize on a rigid device. Look deliberately for both entry and exit burns and dress both — although electrical burns may look superficial, the underlying tissue can be severely damaged along the whole path of the current. Cover the burns with dry, non-stick sterile dressings, loosely bandaged; no ointments. Remove rings and jewellery. Manage shock and maintain a normal body temperature. Nothing by mouth. Reassess ABCs, pulse rhythm and distal circulation every 5 minutes.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Amputation",
      "title": "Table saw in the garage",
      "patient": "54-year-old man",
      "reference": "Ch. 9 — Amputations, Care for External Bleeding, Tourniquets",
      "overview": "Traumatic amputation of two fingers. Tests bleeding control, the surprising fact that amputations often bleed less than expected, and the exact procedure for preserving the amputated parts for reattachment.",
      "id": "soft_tissue_injuries.amputation"
    },
    "scen_survey": {
      "environment": "Home garage workshop. Table saw still running — switch it off and unplug it. Sawdust and offcuts on the floor. Locate the amputated parts before you leave.",
      "mechanisms_of_injury": "Right hand contacted a spinning table saw blade; two fingers completely severed.",
      "casualty_count": "1",
      "assistance": "EMS transport; a second person to search for and package the amputated parts while you manage the patient.",
      "ppe": "Gloves, gown and eye protection.",
      "impressions": "Adult man sitting on a stool with his right hand wrapped in a bloody shop towel, pale and shaking, oddly calm. Blood on the saw table and floor."
    },
    "primary_survey": {
      "loc": "A, oriented, shocked and shaking.",
      "c_spine": "Not indicated — no fall, no blunt force, no head or trunk trauma.",
      "airway": "Patent; full sentences.",
      "breathing": "24/min, regular, unlaboured, clear and equal.",
      "circulation": "Radial pulse 118, regular, weak. Skin pale, cool and moist. Bleeding from the stumps is moderate and controllable with direct pressure — less than you would expect, because the vessels have constricted and retracted.",
      "name": "Gary Duplessis.",
      "complaint": "Cut two fingers off on the saw.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": "Right hand: index and middle fingers amputated through the proximal phalanges. Clean-edged stumps, moderate bleeding, controlled by direct pressure with a sterile dressing. Thumb, ring and little fingers intact with normal sensation and movement. Radial pulse present.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "97% on the left hand."
      },
      "expected_transport_decision": "Rapid transport category — amputation is explicitly on the immediate transport list, and patients with amputations are usually in the rapid transport category. Reattachment is time-critical."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Severe throbbing pain in the right hand, light-headedness, nausea, shaking, thirsty, anxious.",
        "allergies": "None known.",
        "medications": "ASA 81 mg daily — a mild blood thinner; report it.",
        "past_medical_history": "Hypertension, controlled. Tetanus booster 6 years ago.",
        "last_intake": "Lunch about 2 hours ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Ripping a narrow board without a push stick; the board kicked back and his hand went into the blade.",
        "pain": {
          "onset": "Instant, about 6 minutes ago",
          "provoke": "Any movement of the hand; letting it hang down",
          "quality": "Deep throbbing with sharp edges",
          "region": "Right hand, index and middle finger stumps; aching up the forearm",
          "severity": "9/10",
          "time_duration": "About 6 minutes"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "24",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "118",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "104/64",
        "sp02": "97% left hand",
        "skin": {
          "color": "Pale",
          "condition": "Cool, moist"
        },
        "temperature": "36.3 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "5 mm"
        },
        "blood_glucose": "5.9 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "No injury.",
        "arms": "Right hand: amputation stumps of the index and middle fingers, bleeding controlled with a pressure dressing. Remaining digits pink, warm, normal sensation and movement. Radial pulse present and equal to the left; capillary refill under 2 seconds in the intact fingers. Wedding ring removed from the left hand as a precaution. Left arm uninjured.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport with both amputated parts, correctly packaged and labelled. Notify the receiving facility that there are parts for possible reattachment."
    },
    "expected_treatment": {
      "life_saving_intervention": "Switch off and unplug the saw. Control the bleeding: direct pressure with a gloved hand, sterile dressing, firm pressure, bandage. Add dressings on top if blood soaks through and do not remove the soaked ones. Bleeding here is usually controllable with direct pressure; a tourniquet is available if it is not. Package the amputated parts to give reattachment the best chance: rinse each part quickly with saline, wrap it in sterile gauze, place it in a plastic bag, place that bag inside a larger bag, and cool the outer bag with ice or chemical cold packs — the part never sits directly on ice. Label the bag clearly with the patient's name, the date and the time. Search the workshop thoroughly and account for both fingers before leaving. Elevate and support the hand. Manage shock: keep him warm, nothing by mouth, high-flow oxygen if he deteriorates. Reassess circulation and sensation in the remaining digits after bandaging.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Crush injury with crush syndrome",
      "title": "Pinned under the tractor for two hours",
      "patient": "61-year-old man",
      "reference": "Ch. 9 — Crush Injuries, Crush Syndrome; Ch. 8 — Shock",
      "overview": "Prolonged entrapment with crush syndrome. Tests the recognition that the dangerous moment is when the weight comes off, not while it is on, and the coordination required to have treatment ready before the release.",
      "id": "soft_tissue_injuries.crush_injury"
    },
    "scen_survey": {
      "environment": "Sloping farm field, wet ground, rain. Overturned tractor lying across the patient's legs, unstable and liable to shift. Diesel leaking. Do not attempt to lift it without technical rescue and cribbing.",
      "mechanisms_of_injury": "Tractor rollover; both legs pinned beneath the machine for approximately two hours before he was found. Crushing forces for more than an hour produce crush syndrome when the object is removed.",
      "casualty_count": "1 — the field was being worked alone; confirm that.",
      "assistance": "Heavy rescue with cribbing and lifting equipment; a second crew; rapid transport; notify the hospital before the release, not after.",
      "ppe": "Gloves, gown and eye protection; footing and weather protection.",
      "impressions": "Older man face-up in the mud, alert, cold, calm, legs invisible beneath the tractor. He is talking normally, which is misleading."
    },
    "primary_survey": {
      "loc": "A, oriented, cold and shivering. Deteriorates rapidly after the tractor is lifted.",
      "c_spine": "Indicated — a vehicle rollover with the patient pinned. Manual in-line stabilization now, full immobilization as part of the extrication plan.",
      "airway": "Patent; full sentences.",
      "breathing": "22/min while pinned, rising to 32/min after the release. Clear and equal air entry.",
      "circulation": "Radial pulse 104 while pinned, regular, full; rising to 140, irregular and weak within minutes of the release. Skin pale, cold and wet. No significant external bleeding.",
      "name": "Wesley Crandall.",
      "complaint": "Pinned; legs feel numb and dead rather than painful.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": "No wounds, no distension visible.",
        "abdomen_palpation": "Soft, mildly tender across the lower abdomen; not rigid.",
        "pelvis": "Cannot be assessed while pinned; assess immediately on release. Stable on assessment, no crepitus.",
        "legs_femurs": "Both thighs beneath the tractor. On release: massively swollen, hard, cold, mottled and dusky; deformity of the left femur. Femoral pulses very weak.",
        "legs_rest": "Both lower legs pale and cold with no palpable pedal pulses, capillary refill over 5 seconds, no sensation and no movement below the knees.",
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": "Assessed during the roll onto a board: no deformity, no wounds, midline lumbar tenderness."
      },
      "shock_check": {
        "spo2": "94% while pinned; falls to 88% with a weak trace after release."
      },
      "expected_transport_decision": "Rapid transport category, decided before the release. Patients with crush injuries almost always require rapid transport, and a patient with crush syndrome receives interventions for life-threatening conditions and goes into the rapid transport category. Have oxygen, the stretcher and the transport route ready before the tractor moves."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "While pinned: cold, thirsty, legs numb, surprisingly little pain, anxious. After release: sudden weakness, nausea, chest tightness, palpitations, confusion, worsening breathlessness. The change on release is the scenario.",
        "allergies": "None known.",
        "medications": "Ramipril, metformin.",
        "past_medical_history": "Type 2 diabetes, hypertension, mild chronic kidney disease — relevant, because renal failure often follows crush syndrome.",
        "last_intake": "Breakfast about 5 hours ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Tractor rolled on a wet slope about two hours ago. Establish the time of entrapment as precisely as you can and report it — over an hour is the threshold for crush syndrome.",
        "pain": {
          "onset": "At the rollover, about two hours ago",
          "provoke": "Little changes it while pinned; severe pain returns after release",
          "quality": "Heavy pressure while pinned, then numbness; burning and deep aching after release",
          "region": "Both thighs and lower legs; lower back",
          "severity": "4/10 while pinned, rising to 9/10 after release",
          "time_duration": "About two hours"
        }
      },
      "vitals": {
        "loc": "A while pinned; A but confused and drowsy after release",
        "respiration": {
          "rate": "22 pinned, 32 after release",
          "rhythm": "Regular, becoming irregular",
          "quality": "Unlaboured then shallow; clear and equal"
        },
        "pulse": {
          "rate": "104 pinned, 140 after release",
          "rhythm": "Regular, becoming irregular",
          "quality": "Full, becoming weak"
        },
        "blood_pressure": "118/74 pinned; 82/50 within minutes of release",
        "sp02": "94% pinned; 88% with a weak trace after release",
        "skin": {
          "color": "Pale, mottled and dusky on the legs",
          "condition": "Cold and wet"
        },
        "temperature": "34.8 °C — two hours in the rain; treat the hypothermia too",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "5 mm"
        },
        "blood_glucose": "8.2 mmol/L",
        "glasgow_coma": "15 while pinned; E4 V4 M6 = 14 after release"
      },
      "head_to_toe_exam": {
        "head": "No injury; no fluid from ears or nose.",
        "neck": "No deformity; collar applied.",
        "chest": "No injury; equal expansion; clear and equal air entry. Defibrillator pads applied before the release.",
        "abdomen": {
          "top_left": "Soft",
          "top_right": "Soft",
          "bottom_left": "Mildly tender, soft",
          "bottom_right": "Mildly tender, soft"
        },
        "pelvis": "Stable on assessment after release; no crepitus.",
        "legs": "Both legs massively swollen, hard, cold, mottled and dusky from mid-thigh down. Left femoral deformity. No pedal pulses, capillary refill over 5 seconds, no sensation, no movement below the knees. Skin intact — this is predominantly a closed crush injury with major internal damage.",
        "arms": "No injury; radial pulses weak but equal after release.",
        "back": "Midline lumbar tenderness; no deformity, no wounds."
      },
      "expected_transport_decision": "Rapid transport the moment he is free. Report the entrapment duration, the time of release, and that impaired heart function and renal failure often follow."
    },
    "expected_treatment": {
      "life_saving_intervention": "Request specially qualified personnel to assist with the extrication and do not attempt to lift the tractor yourself. Everything must be ready before the release: oxygen flowing, defibrillator pads on, stretcher beside him, transport route planned, hospital notified. Understand why — while he is pinned, the hypoxic tissue is producing toxins such as lactic acid, and when the crushing object is removed those toxins are carried through the body, affecting multiple systems. Maintain spinal motion restriction throughout. High-flow supplemental oxygen. Manage shock and manage his hypothermia at the same time: get him out of the rain, remove wet clothing where you can, insulate him. Nothing by mouth. Splint the deformed femur once he is free, but do not let splinting delay transport. Reassess ABCs, pulse rhythm and vital signs every 5 minutes and expect them to worsen after the release. Be prepared for cardiac arrest.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Acute compartment syndrome",
      "title": "Pain far worse than the injury",
      "patient": "19-year-old man",
      "reference": "Ch. 9 — Compartment Syndrome; Ch. 10 — Musculoskeletal Injuries",
      "overview": "Compartment syndrome developing in a splinted lower leg. Tests the classic sign — pain intensely out of proportion to the injury, worse on stretching the muscle — and the recognition that numbness means cell death has begun.",
      "id": "soft_tissue_injuries.compartment_syndrome"
    },
    "scen_survey": {
      "environment": "Rugby clubhouse treatment room. He was splinted on the field about 90 minutes ago. No hazards.",
      "mechanisms_of_injury": "Direct blow to the left lower leg from a boot during a tackle; a badly bruised muscle, and a suspected tibial fracture. Swelling and bleeding inside the muscle compartment are now compressing the capillaries and nerves.",
      "casualty_count": "1",
      "assistance": "EMS transport; a second responder to remove and reapply the splint if needed.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Young man on a treatment table, agitated and sweating, in far more distress than his 90-minute-old leg injury would suggest. The mismatch is the finding."
    },
    "primary_survey": {
      "loc": "A, oriented, distressed.",
      "c_spine": "Not indicated — the injury was to the leg, no head or trunk trauma, no loss of responsiveness.",
      "airway": "Patent; full sentences.",
      "breathing": "26/min, regular, unlaboured, clear and equal.",
      "circulation": "Radial pulse 118, regular, full. Skin pale, warm and sweating. No external bleeding. Left pedal pulse present but weaker than the right — note that a present pulse does not rule this out.",
      "name": "Callum Byrne.",
      "complaint": "The pain in his leg is unbearable and getting worse, not better.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": "Left lower leg in a padded splint. On removing the bandage: the anterior compartment is tense, hard and shiny, markedly swollen compared with the right. Exquisitely painful, and dramatically worse when the toes and foot are passively dorsiflexed — stretching the muscle. Numbness developing between the first and second toes. Pedal pulse present but weaker; capillary refill 3 seconds.",
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "98% on room air."
      },
      "expected_transport_decision": "Rapid transport category. Acute compartment syndrome is a medical emergency; unless the pressure is relieved quickly it causes permanent disability or death. The numbness means cell death has already begun."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Pain intensely out of proportion to the injury — the classic sign. Burning and tingling in the muscle. A feeling of tightness and fullness in the calf, 'like it's going to burst'. Numbness developing between the first and second toes. He says the pain has kept increasing since the splint went on, and that painkillers have done nothing.",
        "allergies": "None known.",
        "medications": "Ibuprofen 400 mg about an hour ago, with no effect.",
        "past_medical_history": "Nothing significant. No anabolic steroid use. Tetanus booster 4 years ago.",
        "last_intake": "Sports drink about 2 hours ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Direct kick to the left shin about 90 minutes ago. Splinted on the field and rested; the pain has escalated steadily since.",
        "pain": {
          "onset": "At the injury 90 minutes ago, escalating steadily and sharply in the last 30 minutes",
          "provoke": "Dramatically worse when the foot and toes are passively stretched upwards — perform this test gently and record the result. Elevation does not help. Analgesia has not helped.",
          "quality": "Deep, bursting, burning pressure",
          "region": "Front of the left lower leg; numbness between the first and second toes",
          "severity": "10/10 — and he was 5/10 when it was splinted",
          "time_duration": "90 minutes, escalating"
        }
      },
      "vitals": {
        "loc": "A, oriented, distressed",
        "respiration": {
          "rate": "26",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "118",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "144/88",
        "sp02": "98% room air",
        "skin": {
          "color": "Pale; left lower leg shiny and taut",
          "condition": "Warm, sweating"
        },
        "temperature": "37.2 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "5.5 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Left anterior compartment tense, hard, shiny and swollen; circumference markedly greater than the right. Severe pain on passive stretch. Reduced sensation between the first and second toes and over the dorsum of the foot. Weak movement of the toes. Dorsalis pedis pulse present but weaker than the right; capillary refill 3 seconds on the left, under 2 on the right. Compare the two sides directly. No open wound. Right leg normal.",
        "arms": "No injury; pulses and capillary refill normal.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport. Report the time of injury, the time the splint went on, the pain trend, and specifically the pain-on-passive-stretch finding and the new numbness."
    },
    "expected_treatment": {
      "life_saving_intervention": "Recognize it and say the name — this is limb-threatening and time-critical. Loosen or remove the splint and any circumferential bandaging immediately; anything constricting the compartment makes it worse, and the manual's splinting rule is to loosen if the patient complains of numbness or the toes turn blue or cold. Reassess circulation and sensation after loosening. Do not elevate the limb above the level of the heart — elevation reduces the pressure gradient driving blood into the compartment; keep it at heart level. Do not apply cold packs directly over the compartment. Immobilize gently for transport without any circumferential pressure. Nothing by mouth — he is likely for surgery. High-flow oxygen if he deteriorates. Reassess distal pulses, capillary refill, sensation and movement every 5 minutes and document the trend, because the trend is what the surgical team needs.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "Blast injuries",
      "title": "Grain dust explosion",
      "patient": "47-year-old man",
      "reference": "Ch. 9 — Blast Injuries; Ch. 11 — Pneumothorax; Ch. 21 — Multiple-Casualty Incidents",
      "overview": "Blast injuries with hearing loss, pulmonary and abdominal involvement, and minimal external signs. Tests the four blast mechanisms, the vulnerability of hollow organs to pressure waves, and the rule that a lack of visible injury proves nothing.",
      "id": "soft_tissue_injuries.blast_injuries"
    },
    "scen_survey": {
      "environment": "Grain elevator complex after a dust explosion. Structural damage, secondary explosion risk, dust still in the air, debris. Do not enter until the fire service declares it safe; treat in the cold zone.",
      "mechanisms_of_injury": "Blast. Four mechanisms to consider and to state: the pressure wave itself; thermal burns including inhalation burns; shrapnel thrown against the body; and the body thrown against other objects, which produces injuries like a fall from a height.",
      "casualty_count": "4 known, possibly more unaccounted for. This is a multiple-casualty incident — triage before you treat, and do not commit yourself to the first patient you reach.",
      "assistance": "Fire service, multiple crews, incident command, rapid transport, hospital pre-notification.",
      "ppe": "Gloves, gown, eye protection, hard hat and respiratory protection for the dust.",
      "impressions": "Man sitting against a wall in the cold zone, dazed, bleeding from both ears, not responding to speech. Almost no visible external injury — which is exactly why this one is dangerous."
    },
    "primary_survey": {
      "loc": "A but dazed and confused; he cannot hear you, so use gestures and writing rather than assuming a reduced LOR.",
      "c_spine": "Indicated. He was thrown by the blast against a steel bin, which produces injuries comparable to a fall from a height. Manual in-line stabilization and a collar.",
      "airway": "Patent; speaking, though loudly and without modulation because he cannot hear himself.",
      "breathing": "30/min, shallow. Air entry diminished on the right compared with the left — a pneumothorax is a recognized blast injury. Dry cough with a trace of blood.",
      "circulation": "Radial pulse 124, regular, weak. Skin pale, cool and moist. No significant external bleeding.",
      "name": "Stefan Nowicki.",
      "complaint": "Cannot hear; chest and stomach hurt.",
      "rapid_body_survey": {
        "head": "Blood trickling from both ear canals — ruptured tympanic membranes, a marker of significant blast exposure. Face soot-stained. Eyebrows singed.",
        "jaw": null,
        "neck_spine": "No deformity; no subcutaneous crepitus.",
        "clavicles": null,
        "sternum": null,
        "chest": "Superficial flash burns anteriorly. Small puncture wounds from grain and metal fragments. Equal chest wall movement but diminished air entry on the right. No paradoxical movement, no sucking wound.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": "Several small shrapnel puncture wounds; mild distension developing.",
        "abdomen_palpation": "Tender across all quadrants, becoming rigid.",
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": "Assessed during a coordinated roll: shrapnel punctures, no deformity, midline thoracic tenderness."
      },
      "shock_check": {
        "spo2": "88% on room air (moderate hypoxia); 94% on a non-rebreather at 15 LPM."
      },
      "expected_transport_decision": "Rapid transport category — any patient with suspected blast injuries should be placed in the rapid transport category, and he independently qualifies on abdominal distension and tenderness, severe or multi-system trauma, and suspected internal hemorrhage."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Deafness with ringing in both ears, chest pain, shortness of breath, abdominal pain, nausea, dizziness, confusion. Communicate by writing or gesture — do not mistake deafness for a decreased level of responsiveness.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Tetanus booster 9 years ago — overdue, and he has multiple contaminated puncture wounds.",
        "last_intake": "Lunch about 90 minutes ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Grain dust ignited in an enclosed elevator; he was about 8 m from the seat of the explosion and was thrown against a steel bin.",
        "pain": {
          "onset": "At the blast, about 10 minutes ago",
          "provoke": "Breathing in; any pressure on the abdomen",
          "quality": "Sharp in the chest; deep and diffuse in the abdomen",
          "region": "Right chest and the whole abdomen",
          "severity": "8/10",
          "time_duration": "About 10 minutes, worsening"
        }
      },
      "vitals": {
        "loc": "A but dazed and confused; deaf",
        "respiration": {
          "rate": "30",
          "rhythm": "Regular",
          "quality": "Shallow; air entry diminished on the right; dry cough with a trace of blood"
        },
        "pulse": {
          "rate": "124",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "94/58 and falling",
        "sp02": "88% room air; 94% on a non-rebreather",
        "skin": {
          "color": "Pale, soot-stained",
          "condition": "Cool, moist"
        },
        "temperature": "36.4 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "5 mm"
        },
        "blood_glucose": "6.7 mmol/L",
        "glasgow_coma": "E4 V4 M6 = 14"
      },
      "head_to_toe_exam": {
        "head": "Blood from both ear canals; soot on the face; singed eyebrows and nasal hair — check the airway for inhalation injury as well.",
        "neck": "No deformity, no crepitus; collar applied.",
        "chest": "Flash burns and shrapnel punctures anteriorly. Equal expansion; air entry clearly diminished on the right, top and bottom, compared with the left — record this specifically.",
        "abdomen": {
          "top_left": "Tender, becoming rigid; shrapnel punctures",
          "top_right": "Tender, becoming rigid",
          "bottom_left": "Tender; shrapnel punctures",
          "bottom_right": "Tender"
        },
        "pelvis": "Stable; no crepitus.",
        "legs": "Multiple small shrapnel punctures; no fractures; pedal pulses present and equal.",
        "arms": "Multiple small shrapnel punctures and flash burns; radial pulses weak but equal.",
        "back": "Shrapnel punctures; midline thoracic tenderness; no deformity."
      },
      "expected_transport_decision": "Rapid transport. Report the blast distance, the enclosed space, the ruptured eardrums, the diminished right-sided breath sounds and the developing abdominal rigidity."
    },
    "expected_treatment": {
      "life_saving_intervention": "Do not enter until the scene is declared safe; secondary explosions are the classic way responders become casualties. Triage first — this is a multiple-casualty incident. For this patient: maintain spinal motion restriction and immobilize on a rigid device. High-concentration oxygen by non-rebreather; he is hypoxic with likely pulmonary blast injury. Monitor the airway for inhalation injury given the soot and singed hair. Cover the shrapnel puncture wounds with sterile dressings; do not probe them and do not remove anything embedded. Cover the flash burns with dry non-stick sterile dressings. Cover the bleeding ears lightly without pressure. Manage shock: keep him warm, nothing by mouth, reassess every 5 minutes. Explain that the extent of blast injuries is often hard to identify because there may be no visible external injury — pressure waves damage hollow structures like the lungs, sinuses and gastrointestinal tract, and that damage may not be apparent for some time. Communicate by writing; he cannot hear you.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "soft_tissue_injuries",
      "condition": "High-pressure injection (HPI) injury",
      "title": "A pinprick from the paint gun",
      "patient": "40-year-old man",
      "reference": "Ch. 9 — High-Pressure Injection (HPI) Injuries, Punctures",
      "overview": "The classic deceptive injury: a tiny puncture concealing major internal tissue damage. Tests the willingness to escalate on mechanism alone, against the evidence of a wound that looks trivial and a patient who wants to go back to work.",
      "id": "soft_tissue_injuries.high_pressure_injection"
    },
    "scen_survey": {
      "environment": "Industrial paint shop, solvent fumes, ventilation running. Airless spray unit still pressurized — have it depressurized and locked out.",
      "mechanisms_of_injury": "High-pressure injection: an airless paint gun discharged into the left index finger at close range while he cleared a blocked tip with the trigger safety off. Paint injected under high pressure.",
      "casualty_count": "1",
      "assistance": "EMS transport; the Safety Data Sheet for the paint and solvent to send with him.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Adult man in the paint booth, alert, holding up a finger with what looks like a pinprick on it, insisting it is nothing and that he wants to finish the job."
    },
    "primary_survey": {
      "loc": "A, oriented, dismissive of the injury.",
      "c_spine": "Not indicated — no fall, no blunt force.",
      "airway": "Patent; full sentences.",
      "breathing": "18/min, regular, unlaboured, clear and equal.",
      "circulation": "Radial pulse 94, regular, full. Skin normal colour, warm and dry. Almost no external bleeding.",
      "name": "Vince Petrelli.",
      "complaint": "'Just a nick' on the left index finger from the paint gun.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": "Left index finger, palmar surface of the pad: a 1 to 2 mm puncture with a trace of white paint at the edge. The only visible sign of injury. The finger is beginning to swell and feel firm and tight along its length, and the swelling is tracking into the palm. Radial pulse present, capillary refill in the index finger 3 seconds, reduced sensation at the fingertip.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "99% on room air."
      },
      "expected_transport_decision": "Rapid transport category on the mechanism alone. If the mechanism of injury suggests a high-pressure injection, suspect additional internal injuries; immediate surgical intervention is often necessary. Do not be talked out of it by how the wound looks or by the patient's own assessment."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Initially a sharp sting and then very little pain — which he is treating as reassuring. Now a growing tightness and deep ache in the finger, spreading into the palm. Numbness at the fingertip. He is minimizing all of it.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Tetanus booster 11 years ago — overdue for a contaminated puncture.",
        "last_intake": "Coffee about an hour ago. Nothing by mouth from now on — he is likely for surgery.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Cleared a blocked spray tip with his hand in front of the nozzle and the trigger safety disengaged; the unit discharged into his fingertip. Record the pressure rating of the gun and the product name from the Safety Data Sheet — the surgical team will need both.",
        "pain": {
          "onset": "Sharp sting at the injection about 8 minutes ago, then relatively little",
          "provoke": "Bending the finger; pressure on the pad; the ache increases steadily on its own",
          "quality": "Deep, tight, bursting ache",
          "region": "Left index finger, spreading into the palm",
          "severity": "3/10 and climbing — the low initial score is not reassurance",
          "time_duration": "About 8 minutes, worsening"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "18",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "94",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "134/82",
        "sp02": "99% room air",
        "skin": {
          "color": "Normal; left index finger becoming pale and tight",
          "condition": "Warm, dry"
        },
        "temperature": "36.8 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "5.3 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": null,
        "neck": null,
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": "Left index finger: 1 to 2 mm puncture on the pad with a trace of paint. Finger swollen, firm and tense along its whole length; swelling extending into the palm. Pale and cool at the tip. Capillary refill 3 seconds in the index finger versus under 2 seconds in the others. Reduced sensation at the tip. Range of motion reduced by swelling. Rings removed from both hands before swelling progresses. Right arm normal.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport to a facility with surgical capability. Send the Safety Data Sheet or a photograph of the product label with him."
    },
    "expected_treatment": {
      "life_saving_intervention": "None immediately life-saving, but the limb is at risk and the urgency is real. Have the spray unit depressurized and locked out. Remove all rings from both hands now, before swelling makes it impossible. Do not squeeze the finger, do not attempt to express the injected material, and do not probe or incise the puncture. Cover it with a sterile dressing and bandage without any circumferential pressure. Immobilize the hand in a position of function with a roll of gauze in the palm, splint the forearm, support it in a sling, and keep it at heart level. Recheck circulation and sensation in the fingers after bandaging and every 5 minutes afterwards. Nothing by mouth. Explain to him, clearly and firmly, why a wound the size of a pinprick is a surgical emergency: the only visible sign may be a small puncture, but the damage to internal tissues can be significant and immediate surgery is often necessary. Obtain the product name and pressure rating and send them with him. Note that he is overdue for a tetanus booster.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "muskuloskeletal",
      "condition": "Musculoskeletal injuries — closed femur fracture with wrist fracture",
      "title": "Off the ladder onto the patio",
      "patient": "58-year-old woman",
      "reference": "Ch. 10 — Types of Musculoskeletal Injuries, How to Splint, RICE, Thigh Injuries, Forearm/Wrist Injuries",
      "overview": "Two musculoskeletal injuries at once: a closed mid-shaft femur fracture and a Colles-type wrist fracture from a fall on an outstretched hand. Tests the Rule of Thirds, splinting principles, the check of circulation and sensation before and after, RICE, and why a femur fracture is always rapid transport.",
      "id": "muskuloskeletal.general"
    },
    "scen_survey": {
      "environment": "Back garden, concrete patio, dry. Aluminium stepladder on its side; a paint tin spilled. Clear the ladder before you kneel down.",
      "mechanisms_of_injury": "Fall of about 2.5 m from a stepladder onto concrete, landing on her left side and breaking the fall with her right outstretched hand. A fall greater than 1 metre is also a spinal-injury mechanism.",
      "casualty_count": "1",
      "assistance": "EMS transport; a second responder to support the limbs during splinting; consider a scoop stretcher.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Woman lying on her back on the patio, alert and in severe pain, left leg obviously shortened and rotated outwards, right forearm deformed just above the wrist."
    },
    "primary_survey": {
      "loc": "A, oriented, in severe pain.",
      "c_spine": "Indicated. A fall from greater than 1 metre onto a hard surface. She is alert with stable vital signs and no acute paralysis, but the dangerous mechanism is a high-risk factor under the Canadian C-Spine Rule, so spinal motion restriction is indicated. Apply manual in-line stabilization immediately.",
      "airway": "Patent; full sentences.",
      "breathing": "26/min, regular, unlaboured. Clear and equal air entry.",
      "circulation": "Radial pulse 118 (left wrist — do not use the injured right), regular, weak. Skin pale, cool and moist. No external bleeding, but suspect internal hemorrhage into the thigh.",
      "name": "Patricia Vandenberg.",
      "complaint": "Left thigh and right wrist; the thigh is the worse of the two.",
      "rapid_body_survey": {
        "head": "No injury; no fluid from ears or nose.",
        "jaw": null,
        "neck_spine": "No deformity, no obvious wounds. Immobilized.",
        "clavicles": null,
        "sternum": null,
        "chest": "No injury; equal expansion, no crepitus.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": "Soft, non-tender, not rigid.",
        "pelvis": "Stable to a gentle three-plane assessment; no pain, no crepitus. Do not push down on the iliac crests.",
        "legs_femurs": "Left thigh: obvious mid-shaft deformity with the leg noticeably shorter than the right and turned outward. Thigh swollen and firm. Skin intact — a closed fracture. Crepitus felt on the lightest palpation; do not repeat it.",
        "legs_rest": "Left pedal pulse present but weaker than the right; capillary refill 3 seconds on the left; sensation and toe movement intact.",
        "arms_humerus": null,
        "arms_rest": "Right forearm: dinner-fork deformity just proximal to the wrist. Swollen, very tender. Skin intact. Radial pulse present on the right but weak; capillary refill 3 seconds in the right fingers; sensation intact, movement limited by pain.",
        "back_spine": "Assessed during a coordinated roll onto a scoop: no deformity, no midline tenderness, no wounds."
      },
      "shock_check": {
        "spo2": "96% on room air."
      },
      "expected_transport_decision": "Rapid transport category. A fractured femur is explicitly on the immediate transport list, and a patient with a fractured femur should always be in the rapid transport category because of the internal hemorrhage risk. She also has multiple major musculoskeletal injuries — two long bones — which is itself a rapid transport trigger."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Severe left thigh pain, severe right wrist pain, inability to move the left leg or use the right hand, light-headedness, nausea, thirst. No loss of responsiveness, no head strike, no neck or back pain.",
        "allergies": "Codeine — nausea.",
        "medications": "Alendronate, calcium and vitamin D.",
        "past_medical_history": "Osteoporosis — relevant to the fracture pattern. Otherwise well.",
        "last_intake": "Coffee and toast about 3 hours ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Reaching sideways from a stepladder to paint a fascia board; the ladder tipped and she fell about 2.5 m onto concrete.",
        "pain": {
          "onset": "Instant, at the impact about 9 minutes ago",
          "provoke": "Any movement of the leg or wrist; even light touch on the thigh",
          "quality": "Deep, grinding, sickening in the thigh; sharp and throbbing in the wrist",
          "region": "Mid left thigh; right forearm just above the wrist. No radiation.",
          "severity": "10/10 thigh, 7/10 wrist",
          "time_duration": "About 9 minutes, constant"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "26",
          "rhythm": "Regular",
          "quality": "Unlaboured; clear and equal"
        },
        "pulse": {
          "rate": "118",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "102/64",
        "sp02": "96% room air",
        "skin": {
          "color": "Pale",
          "condition": "Cool, moist"
        },
        "temperature": "36.4 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "5 mm"
        },
        "blood_glucose": "6.0 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "No injury; pupils equal and reactive on recheck.",
        "neck": "No midline tenderness, no deformity; collar applied.",
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": "Soft, non-tender",
          "top_right": "Soft, non-tender",
          "bottom_left": "Soft, non-tender",
          "bottom_right": "Soft, non-tender"
        },
        "pelvis": "Stable, no crepitus, no pain on gentle assessment.",
        "legs": "Left femur mid-shaft fracture — by the Rule of Thirds this is in the middle third, so treat it as a mid-shaft injury rather than a joint injury. Shortening and external rotation, swelling, firmness, crepitus. Skin intact. Distal circulation, sensation and movement checked before and after splinting: pedal pulse present but weak, capillary refill 3 seconds, sensation intact, toes move. Knee and ankle without deformity. Right leg uninjured.",
        "arms": "Right distal forearm fracture with dinner-fork deformity, in the lower third of the radius and ulna — by the Rule of Thirds, treat it as a joint injury. Swelling, point tenderness, no open wound. Radial pulse present but weak, capillary refill 3 seconds, sensation intact, fingers move. Rings removed. Left arm uninjured.",
        "back": "No midline tenderness; no deformity, no wounds."
      },
      "expected_transport_decision": "Rapid transport. Splint before moving her if it can be done without delay, but never let splinting hold up transport for a femur fracture."
    },
    "expected_treatment": {
      "life_saving_intervention": "Maintain spinal motion restriction from first contact. Apply RICE, in that order and with the immobilization step before the cold and elevation: Rest — leave her lying flat and move her only as much as care requires; Immobilize; Cold; Elevate. Splinting principles: use appropriate equipment, splint only if it can be done without causing further injury, immobilize the joints above and below the injury, and check circulation and sensation before and after. For the femur, apply a long rigid splint from axilla to foot on the lateral side and a second from groin to just beyond the foot on the medial side; a traction splint may be indicated if it is within your scope and you are proficient with that specific device. If speed is critical, an anatomical splint binding the injured leg to the uninjured one with a padded rolled blanket between them is acceptable, with the knees supported from behind. Do not attempt to straighten the limb — advanced care is far less than 30 minutes away and distal circulation is present. For the wrist, splint from elbow to just beyond the fingertips with a roll of gauze in the palm to hold a position of function, leave a gap to reassess the radial pulse, then support it in a sling secured to the chest. Anchor splints from stable to unstable, working towards the injury and stopping short of it. Apply cold packs around, not over, the fracture sites, wrapped, for 15 to 20 minutes. Recheck circulation and sensation after every splint and loosen if numbness, blue or cold digits, or pooling appears. Manage shock: high-flow oxygen, keep her warm, nothing by mouth. Reassess ABCs and vitals after immobilizing and every 5 minutes afterwards.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "chest_adominal_pelvic",
      "condition": "Rib fracture",
      "title": "Down the basement stairs",
      "patient": "67-year-old woman",
      "reference": "Ch. 11 — Rib Fractures, Care for Rib Fractures",
      "overview": "Simple rib fractures with painful splinted breathing. Tests the three recognition clues, the Semi-Fowler positioning, support with a bulky object rather than a constricting strap, and the escalation triggers that would make this multiple-rib picture life-threatening.",
      "id": "chest_adominal_pelvic.rib_fracture"
    },
    "scen_survey": {
      "environment": "Bottom of a carpeted basement staircase, poor lighting. Bring light; watch your own footing on the stairs.",
      "mechanisms_of_injury": "Fall down approximately 10 stairs, landing on her right side against a railing post. A fall greater than 1 metre or 5 stairs is a spinal-injury mechanism.",
      "casualty_count": "1",
      "assistance": "EMS transport; a second crew for the stair carry; plan the extrication route.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Older woman sitting at the foot of the stairs, alert, leaning towards her right side with her right arm pressed against her ribs, taking small shallow breaths."
    },
    "primary_survey": {
      "loc": "A, oriented.",
      "c_spine": "Indicated. A fall down 5 or more stairs is a dangerous mechanism under the Canadian C-Spine Rule. Manual in-line stabilization and a collar.",
      "airway": "Patent; short sentences because of the pain.",
      "breathing": "26/min, shallow and painful. She is splinting the right side. Air entry slightly diminished at the right base from shallow breathing rather than collapse. No paradoxical movement.",
      "circulation": "Radial pulse 104, regular, full. Skin pale, cool and dry.",
      "name": "Josephine Marchetti.",
      "complaint": "Right side of the chest hurts terribly when she breathes.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": "Both intact; no deformity, no tenderness.",
        "sternum": "No tenderness, no instability.",
        "chest": "Bruising over the right lateral chest wall. Point tenderness with crepitus over the right sixth and seventh ribs on the lightest palpation — do not repeat it. Equal chest wall movement, no flail segment, no paradoxical movement, no subcutaneous crepitus.",
        "armpits": null,
        "rib_cage": "Right sixth and seventh ribs, lateral: point tenderness and crepitus. Left rib cage intact.",
        "abdomen_view": "No bruising, no distension.",
        "abdomen_palpation": "Soft, non-tender in all quadrants, not rigid — check specifically, since lower ribs overlie the liver and spleen.",
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": "Assessed during a coordinated roll: no deformity, no midline tenderness, no wounds."
      },
      "shock_check": {
        "spo2": "93% on room air (mild hypoxia), from shallow splinted breathing."
      },
      "expected_transport_decision": "Transport, and state the reasoning. A simple rib fracture is rarely life-threatening unless the bone damages organs or major vessels. She is elderly with a mechanism that could injure the liver or spleen, so transport for assessment. Escalate to rapid transport if breath sounds become diminished or absent on one side, if she coughs blood, if any abdominal quadrant becomes tender or rigid, or if signs of shock appear."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Sharp right-sided chest pain on breathing in, coughing and moving. She is deliberately breathing shallowly to avoid it. No shortness of breath at rest, no coughing up blood, no abdominal pain, no dizziness.",
        "allergies": "None known.",
        "medications": "Alendronate, calcium and vitamin D, amlodipine.",
        "past_medical_history": "Osteoporosis — relevant to the fracture. Hypertension.",
        "last_intake": "Tea about 2 hours ago. Nothing by mouth for now.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Carrying a laundry basket down the stairs, missed a step, fell about 10 stairs and struck her right side on a railing post.",
        "pain": {
          "onset": "Instant, at the impact about 12 minutes ago",
          "provoke": "Deep breathing, coughing, laughing, twisting, pressure on the ribs",
          "quality": "Sharp and stabbing on movement; a dull ache at rest",
          "region": "Right lateral chest at the level of the sixth and seventh ribs; no radiation",
          "severity": "8/10 on inspiration, 3/10 at rest",
          "time_duration": "About 12 minutes, constant"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "26",
          "rhythm": "Regular",
          "quality": "Shallow and splinted on the right; air entry slightly diminished at the right base"
        },
        "pulse": {
          "rate": "104",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "148/86",
        "sp02": "93% room air; 97% on a standard mask at 8 LPM",
        "skin": {
          "color": "Pale",
          "condition": "Cool, dry"
        },
        "temperature": "36.7 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "3 mm"
        },
        "blood_glucose": "6.2 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "No injury; no fluid from ears or nose.",
        "neck": "No midline tenderness, no deformity; collar applied.",
        "chest": "Bruising and point tenderness with crepitus over the right sixth and seventh ribs laterally. Chest exposed for assessment. Equal but shallow expansion. Auscultation: good air entry on the left top and bottom; slightly diminished at the right base, clear elsewhere on the right. No absent breath sounds.",
        "abdomen": {
          "top_left": "Soft, non-tender",
          "top_right": "Soft, non-tender",
          "bottom_left": "Soft, non-tender",
          "bottom_right": "Soft, non-tender"
        },
        "pelvis": "Stable; no crepitus, no pain.",
        "legs": "Bruising to the right hip and thigh; no deformity, no crepitus; pedal pulses present and equal; full range of motion.",
        "arms": "Bruising to the right forearm; no deformity; radial pulses equal; capillary refill under 2 seconds.",
        "back": "No midline tenderness; bruising over the right posterior ribs."
      },
      "expected_transport_decision": "Transport for assessment with spinal motion restriction. Reassess breath sounds and abdominal quadrants every 5 minutes en route — this picture can convert."
    },
    "expected_treatment": {
      "life_saving_intervention": "Three steps for a suspected rib fracture. First, position her to facilitate respiration — a Semi-Fowler position is usually most comfortable, which has to be balanced against the spinal motion restriction; immobilize on a rigid device and raise the head end as protocol allows. Second, support and immobilize the injured area with a soft bulky object such as a pillow or rolled blanket held against the ribs. Do not strap or bind the chest circumferentially — that restricts respiration and makes the hypoxia worse. Third, provide interventions for respiratory distress if indicated: supplemental oxygen here for a SpO2 of 93% with painful shallow breathing, and assisted ventilations if she tires. Encourage her to breathe as deeply as she can tolerate despite the pain. Expose the chest for assessment — a patient with a chest injury or chest pain must have the chest exposed. Maintain spinal motion restriction. Plan the stair carry before you move her. Reassess ABCs and vitals every 5 minutes.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "chest_adominal_pelvic",
      "condition": "Flail chest",
      "title": "Crushed against the trailer",
      "patient": "49-year-old man",
      "reference": "Ch. 11 — Flail Chest, Care for Flail Chest, Rib Fractures",
      "overview": "A flail segment moving paradoxically. Tests recognition of paradoxical movement, the specific stabilization technique — bulky dressings at least 1.3 cm thick extending beyond the segment on all sides — and the balance between applying pressure and not impairing respiration.",
      "id": "chest_adominal_pelvic.flail_chest"
    },
    "scen_survey": {
      "environment": "Freight yard, concrete apron. A pallet load shifted and crushed him against a trailer. The load is still unstable — have it secured before you work under it.",
      "mechanisms_of_injury": "Severe blunt-force crush injury to the left chest between a shifting pallet load and a trailer wall. Multiple rib fractures with a segment broken free.",
      "casualty_count": "1",
      "assistance": "Fire service to secure the load, second crew, rapid transport, hospital pre-notification.",
      "ppe": "Gloves, gown and eye protection; hard hat.",
      "impressions": "Adult man semi-sitting against a wheel, grey, fighting for breath, with a section of his left chest visibly sucking inward as he breathes in."
    },
    "primary_survey": {
      "loc": "A, oriented, severely distressed and frightened.",
      "c_spine": "Indicated — severe blunt force to the trunk. Manual in-line stabilization and a collar, accepting that airway and breathing take priority if they conflict.",
      "airway": "Patent; two- to three-word phrases.",
      "breathing": "34/min, shallow and grossly ineffective. A palm-sized section of the left lateral chest wall moves inward on inhalation and outward on exhalation — paradoxical movement, opposite to the rest of the chest. Air entry markedly diminished on the left.",
      "circulation": "Radial pulse 136, regular, weak. Skin grey with cyanotic lips; cool and clammy.",
      "name": "Mitchell Aiono.",
      "complaint": "Cannot breathe; left chest is agony.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": "Left clavicle tender, no obvious step. Right intact.",
        "sternum": "Tender but stable; no separation — check for a flail sternum and record the negative.",
        "chest": "Left lateral chest wall: a flail segment roughly 12 x 10 cm with clear paradoxical movement. Extensive bruising. Crepitus on gentle palpation. Perform a focused exam of the ribs, palpating gently, to locate the segment boundaries — you need them to size the dressing.",
        "armpits": null,
        "rib_cage": "Left fourth to eighth ribs fractured, with the fifth to seventh free as a segment.",
        "abdomen_view": null,
        "abdomen_palpation": "Soft, mildly tender in the left upper quadrant; not rigid yet — keep rechecking.",
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": "Assessed during a coordinated roll onto a board: bruising over the left posterior ribs, no deformity, no wounds."
      },
      "shock_check": {
        "spo2": "83% on room air (severe hypoxia); 91% with assisted ventilations and high-concentration oxygen."
      },
      "expected_transport_decision": "Rapid transport category — severe chest trauma with instability of the ABCs. Any patient with a serious chest injury goes into the rapid transport category."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Severe left chest pain, worse with every breath. Air hunger. Cannot take a full breath. Coughed once and brought up a small amount of blood. Light-headed, nauseated, terrified.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Smoker.",
        "last_intake": "Coffee about 90 minutes ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "A shrink-wrapped pallet load shifted as it was being unloaded and pinned his chest against the trailer wall for a few seconds.",
        "pain": {
          "onset": "Instant, at the crush about 8 minutes ago",
          "provoke": "Every breath; any movement; any pressure on the segment",
          "quality": "Grinding, tearing, crushing",
          "region": "Left lateral chest; no radiation to the arm or jaw",
          "severity": "10/10",
          "time_duration": "About 8 minutes"
        }
      },
      "vitals": {
        "loc": "A, oriented, severely distressed",
        "respiration": {
          "rate": "34",
          "rhythm": "Regular",
          "quality": "Shallow and ineffective; paradoxical movement of a left lateral segment; air entry markedly diminished on the left"
        },
        "pulse": {
          "rate": "136",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "92/58",
        "sp02": "83% room air; 91% with assisted ventilations and high-concentration oxygen",
        "skin": {
          "color": "Grey with cyanotic lips and nail beds",
          "condition": "Cool, clammy"
        },
        "temperature": "36.1 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "5 mm"
        },
        "blood_glucose": "6.9 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "No injury; no fluid from ears or nose.",
        "neck": "No deformity, no jugular venous distension, trachea midline; collar applied.",
        "chest": "Chest exposed. Left lateral flail segment with paradoxical movement, extensive bruising, crepitus. Auscultation: good air entry on the right top and bottom; markedly diminished on the left top and bottom. No absent side, no tracheal deviation — record the negatives that argue against a tension pneumothorax for now.",
        "abdomen": {
          "top_left": "Mildly tender, soft; recheck for rigidity",
          "top_right": "Soft, non-tender",
          "bottom_left": "Soft, non-tender",
          "bottom_right": "Soft, non-tender"
        },
        "pelvis": "Stable; no crepitus.",
        "legs": "No injury; pedal pulses present but weak, equal.",
        "arms": "Bruising to the left upper arm; radial pulses weak, equal.",
        "back": "Bruising over the left posterior ribs; no midline tenderness."
      },
      "expected_transport_decision": "Rapid transport without delay. Report the flail segment, its location and size, the paradoxical movement, and the SpO2 trend."
    },
    "expected_treatment": {
      "life_saving_intervention": "Perform a focused exam of the ribs, palpating gently, to locate the flail segment. Stabilize it by placing bulky dressings at least 1.3 cm thick over the entire injured area, ensuring the dressing extends beyond the edges of the segment on all sides — that is what allows enough pressure to be applied without doing more damage. Secure the dressings with long strips of tape, taking care not to aggravate the injury or impair his respiration; do not circumferentially bind the chest. Position him to facilitate respiration, balanced against spinal motion restriction. His respiratory rate is above 30 and his breathing is ineffective, so assisted ventilation with a BVM plus oxygen reservoir at 15 LPM is indicated — two responders if possible, and just enough volume to make the chest start to rise. Manage shock: keep him warm, nothing by mouth. Reassess breath sounds on both sides, the neck veins and the trachea every 5 minutes; multiple rib fractures often cause internal hemorrhage, and a developing tension pneumothorax would show up here first.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "chest_adominal_pelvic",
      "condition": "Hemothorax",
      "title": "Kicked by the horse",
      "patient": "42-year-old woman",
      "reference": "Ch. 11 — Hemothorax, Interventions for Hemothorax; Ch. 8 — Shock",
      "overview": "Blood filling the pleural space from blunt trauma. Tests the combination of dyspnea, diminished breath sounds on one side and progressive shock, and the distinction from pneumothorax.",
      "id": "chest_adominal_pelvic.hemothorax"
    },
    "scen_survey": {
      "environment": "Stable aisle, dirt floor, poor lighting. The horse is still loose and agitated — have it secured and moved before you kneel down. Move the patient out of the stall if you safely can.",
      "mechanisms_of_injury": "Blunt trauma: kicked in the left chest by a horse. Enough force to lacerate a lung or a chest blood vessel.",
      "casualty_count": "1",
      "assistance": "Second crew, rapid transport; consider air evacuation given the rural distance.",
      "ppe": "Gloves, gown and eye protection; footwear suited to a stable floor.",
      "impressions": "Woman sitting propped against a stall wall, pale and grey, breathing fast, holding her left chest. A clear hoof-shaped bruise on the left chest wall."
    },
    "primary_survey": {
      "loc": "A, oriented, becoming drowsy as the scenario runs.",
      "c_spine": "Indicated — severe blunt force to the trunk, and she was knocked to the ground. Manual in-line stabilization and a collar.",
      "airway": "Patent; short sentences.",
      "breathing": "32/min, shallow. Air entry clearly diminished on the left, top and bottom, compared with the right. No sucking wound, no subcutaneous crepitus.",
      "circulation": "Radial pulse 132, regular, weak. Skin pale grey, cool and clammy. Capillary refill 4 seconds.",
      "name": "Erin Whitcombe.",
      "complaint": "Left chest hurts and she cannot get enough air.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": "Both intact.",
        "sternum": "No tenderness, stable.",
        "chest": "Clear hoof-shaped contusion over the left lateral chest, sixth to ninth ribs. Tender with crepitus. Skin intact — a closed chest wound. Chest wall movement equal, no flail segment, no paradoxical movement.",
        "armpits": null,
        "rib_cage": "Left sixth to ninth ribs tender with crepitus.",
        "abdomen_view": null,
        "abdomen_palpation": "Soft, tender in the left upper quadrant; not rigid.",
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": "Assessed during a coordinated roll: no deformity, no wounds, no midline tenderness."
      },
      "shock_check": {
        "spo2": "86% on room air (moderate hypoxia); 93% on a non-rebreather at 15 LPM."
      },
      "expected_transport_decision": "Rapid transport category. A patient with a hemothorax will often require emergency surgery and should be placed in the rapid transport category. She also has severe chest trauma and developing shock."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Severe left chest pain, shortness of breath getting steadily worse, light-headedness, nausea, thirst, anxiety. No coughing up blood.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Non-smoker.",
        "last_intake": "Breakfast about 3 hours ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "A horse she was leading spooked and kicked out, catching her in the left chest and knocking her to the ground about 10 minutes ago.",
        "pain": {
          "onset": "Instant, at the kick",
          "provoke": "Breathing in, coughing, movement",
          "quality": "Deep, heavy, crushing with sharp edges",
          "region": "Left lateral chest, radiating to the left shoulder tip",
          "severity": "9/10",
          "time_duration": "About 10 minutes, worsening"
        }
      },
      "vitals": {
        "loc": "A, oriented; becoming drowsy",
        "respiration": {
          "rate": "32",
          "rhythm": "Regular",
          "quality": "Shallow; air entry clearly diminished on the left top and bottom"
        },
        "pulse": {
          "rate": "132",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "84/52 and falling",
        "sp02": "86% room air; 93% on a non-rebreather at 15 LPM",
        "skin": {
          "color": "Pale grey, cyanotic lips",
          "condition": "Cool, clammy"
        },
        "temperature": "35.9 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "6 mm"
        },
        "blood_glucose": "6.4 mmol/L",
        "glasgow_coma": "E4 V5 M6 = 15, drifting to 14"
      },
      "head_to_toe_exam": {
        "head": "No injury; no fluid from ears or nose.",
        "neck": "No deformity, no jugular venous distension, trachea midline — the negatives that separate this from tension pneumothorax. Collar applied.",
        "chest": "Chest exposed. Hoof-shaped contusion over the left lateral chest wall, tender with crepitus, skin intact. Equal chest wall movement. Auscultation: good air entry on the right at the mid-clavicular line and at the fourth or fifth intercostal space on the mid-axillary line; clearly diminished on the left at both sites, worse at the base.",
        "abdomen": {
          "top_left": "Tender, soft, not rigid",
          "top_right": "Soft, non-tender",
          "bottom_left": "Soft, non-tender",
          "bottom_right": "Soft, non-tender"
        },
        "pelvis": "Stable; no crepitus.",
        "legs": "No injury; pedal pulses weak but equal.",
        "arms": "Abrasion to the left elbow; radial pulses weak, equal; capillary refill 4 seconds.",
        "back": "No injury; no midline tenderness."
      },
      "expected_transport_decision": "Rapid transport for emergency surgery. Report the mechanism, the diminished left-sided air entry, and the falling blood pressure with rising pulse."
    },
    "expected_treatment": {
      "life_saving_intervention": "Expose the chest for assessment. Provide care for respiratory distress: she is hypoxic, so high-concentration supplemental oxygen by non-rebreather at 15 LPM. Her respirations are shallow and inadequate, so assisted ventilations are usually indicated — use a BVM with an oxygen reservoir, two responders if possible. This is a closed chest wound with no penetrating injury, so no occlusive or non-occlusive wound dressing decision applies; if it had been penetrating, she might also need interventions for an open pneumothorax. Maintain spinal motion restriction and immobilize on a rigid device; if she is rolled, put the injured left side downwards. Manage shock: keep her warm, nothing by mouth, high-flow oxygen. Do not delay transport. Reassess breath sounds on both sides, the neck veins and the trachea every 5 minutes — the blood in the pleural space is creating pressure on the heart and the other lung, and her presentation will worsen.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "chest_adominal_pelvic",
      "condition": "Spontaneous pneumothorax progressing to tension pneumothorax",
      "title": "Sudden pain in the gym",
      "patient": "23-year-old man, tall and thin",
      "reference": "Ch. 11 — Pneumothorax, Spontaneous Pneumothorax, Tension Pneumothorax, Subcutaneous Emphysema",
      "overview": "A spontaneous pneumothorax in the classic demographic, deteriorating into a tension pneumothorax. Tests the tension signs — tachycardia, hypotension, tracheal deviation, jugular venous distension — and the recognition that this happened with no trauma at all.",
      "id": "chest_adominal_pelvic.pneumothorax"
    },
    "scen_survey": {
      "environment": "Gym weights room, music loud, other members crowding. Ask staff to move people back and turn the music down.",
      "mechanisms_of_injury": "No trauma. Spontaneous pneumothorax following strenuous exertion — most frequently seen in young, thin, tall males, which is exactly this patient.",
      "casualty_count": "1",
      "assistance": "EMS transport; gym staff for crowd control and a clear route to the door.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Tall thin young man sitting on a bench, leaning forward, one hand on his right chest, breathing hard and fast, frightened. No injury visible."
    },
    "primary_survey": {
      "loc": "A, oriented, anxious; becomes agitated and confused as it progresses.",
      "c_spine": "Not indicated — there was no trauma at all. Say this deliberately, because the presentation looks traumatic.",
      "airway": "Patent; short sentences, worsening to single words.",
      "breathing": "30/min at first, rising to 38. Air entry decreased then absent on the right, top and bottom. Pleuritic pain, worse on coughing and deep inhalation.",
      "circulation": "Radial pulse 116 initially, rising to 144, regular, becoming weak and thready. Skin pale, becoming cyanotic; cool and clammy.",
      "name": "Elliot Fenwick.",
      "complaint": "Sudden sharp pain in the right chest and cannot breathe.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": "Initially normal. As it progresses: jugular venous distension and the trachea deviating away from the right. These are the tension signs — check for them on every reassessment, not just once.",
        "clavicles": null,
        "sternum": null,
        "chest": "No injury, no bruising, no wound. Decreased then absent breath sounds on the right. A crackling sensation under the skin over the right upper chest and into the neck — subcutaneous emphysema, which is rarely serious in itself but here indicates serious internal trauma.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": "Soft, non-tender, not rigid.",
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "89% initially, falling to 79% (severe hypoxia); 86% on a non-rebreather at 15 LPM."
      },
      "expected_transport_decision": "Rapid transport category. A patient with a suspected tension pneumothorax should be placed in the rapid transport category. He also has instability of the ABCs and severe hypoxia. Nothing at this level of care fixes it; advanced life support and transport are the answer."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Sudden sharp right chest pain and sudden shortness of breath that began mid-set. Pain worse on coughing and breathing deeply. Now air hunger, light-headedness, agitation. No cough, no fever, no injury.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Non-smoker. No asthma. Tall and thin build.",
        "last_intake": "Protein shake about an hour ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Mid-set on a heavy overhead press, straining hard, when the pain hit. No blow, no fall, no contact with anything.",
        "pain": {
          "onset": "Sudden and sharp, about 6 minutes ago, during strenuous exertion",
          "provoke": "Coughing, deep inhalation",
          "quality": "Sharp and stabbing — pleuritic",
          "region": "Right chest, radiating to the right shoulder",
          "severity": "8/10",
          "time_duration": "About 6 minutes, worsening"
        }
      },
      "vitals": {
        "loc": "A, oriented, becoming agitated and confused",
        "respiration": {
          "rate": "30 rising to 38",
          "rhythm": "Regular",
          "quality": "Shallow and laboured; air entry decreased then absent on the right"
        },
        "pulse": {
          "rate": "116 rising to 144",
          "rhythm": "Regular",
          "quality": "Full, becoming weak and thready"
        },
        "blood_pressure": "118/74 initially, falling to 78/48 — hypotension is a tension sign",
        "sp02": "89% falling to 79%; 86% on a non-rebreather at 15 LPM",
        "skin": {
          "color": "Pale, becoming cyanotic at the lips and nail beds",
          "condition": "Cool, clammy"
        },
        "temperature": "36.8 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "6 mm"
        },
        "blood_glucose": "5.4 mmol/L",
        "glasgow_coma": "15, falling to E4 V4 M6 = 14"
      },
      "head_to_toe_exam": {
        "head": "No injury.",
        "neck": "Jugular venous distension developing. Trachea deviating to the left, away from the affected side. Subcutaneous emphysema palpable at the base of the neck. These three findings together are the tension pneumothorax.",
        "chest": "Chest exposed. No external injury. Auscultation: good air entry on the left at the mid-clavicular line and the mid-axillary line; absent on the right at both sites. Crackling under the skin over the right upper chest.",
        "abdomen": {
          "top_left": "Soft, non-tender",
          "top_right": "Soft, non-tender",
          "bottom_left": "Soft, non-tender",
          "bottom_right": "Soft, non-tender"
        },
        "pelvis": null,
        "legs": "No injury; pedal pulses weak but equal.",
        "arms": "No injury; radial pulses weak and thready but equal.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport, immediately, with advanced life support requested to meet you if possible. Report the absent right-sided breath sounds, the tracheal deviation, the jugular venous distension and the falling blood pressure — those four together are what the receiving team must hear."
    },
    "expected_treatment": {
      "life_saving_intervention": "Expose the chest and auscultate both sides at both listening points. Sit him upright in the position he finds easiest. High-concentration oxygen by non-rebreather at 15 LPM, reservoir kept full. His rate is above 30 and rising and he is tiring, so be prepared to assist ventilations with a BVM plus oxygen reservoir — but be aware that positive-pressure ventilation can worsen a tension pneumothorax, so watch his response closely and reassess after every few breaths. Request advanced life support: decompression is beyond this scope of practice. Manage shock and keep him warm. Nothing by mouth. Reassess the trachea, the neck veins, both breath sounds and the blood pressure every 5 minutes and document the trend; the rate of deterioration is the most useful thing you can hand over. Do not attribute the agitation to anxiety — it is hypoxia.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "chest_adominal_pelvic",
      "condition": "Penetrating chest wound (sucking chest wound)",
      "title": "Stabbed outside the bar",
      "patient": "27-year-old man",
      "reference": "Ch. 11 — Penetrating Chest Injuries, Care for Penetrating Chest Injuries",
      "overview": "An open chest wound with a sucking sound. Tests the counter-intuitive dressing rule: the wound must NOT be allowed to occlude, so use a non-occlusive dressing and replace it the moment it saturates, because occlusion risks a tension pneumothorax.",
      "id": "chest_adominal_pelvic.penetrating_chest_wound"
    },
    "scen_survey": {
      "environment": "Alley beside a bar, 01:30, poor lighting. This is a crime scene; the assailant may still be nearby. Confirm law enforcement is on scene and the area is secure before you approach.",
      "mechanisms_of_injury": "Single stab wound to the right anterior chest. A penetrating injury to the trunk is also a spinal-injury mechanism.",
      "casualty_count": "1 — confirm with police that there are no other casualties.",
      "assistance": "Law enforcement, second crew, rapid transport, hospital pre-notification.",
      "ppe": "Gloves, gown, mask and eye protection.",
      "impressions": "Young man sitting against a wall, pale, breathing hard. An audible sucking sound from a wound on his right chest with every breath in — the primary sign of a penetrating chest injury."
    },
    "primary_survey": {
      "loc": "A, oriented, frightened and agitated.",
      "c_spine": "Indicated — a penetrating injury to the trunk. Provide manual in-line stabilization, while accepting that the chest wound and the airway come first if they conflict.",
      "airway": "Patent; short sentences.",
      "breathing": "32/min, shallow. Audible sucking at the wound on inhalation and bubbling on exhalation. Air entry diminished on the right. No paradoxical movement.",
      "circulation": "Moderate dark bleeding from the wound. Radial pulse 130, regular, weak. Skin pale, cool and clammy.",
      "name": "Tyrone Beckett.",
      "complaint": "Stabbed in the chest; cannot breathe.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": "Both intact.",
        "sternum": "No injury.",
        "chest": "Right anterior chest, fourth intercostal space, mid-clavicular line: a 3 cm linear wound, sucking on inhalation and bubbling on exhalation. Air entry diminished on the right. Check the back and both armpits for a second wound — a single assault often produces more than one.",
        "armpits": "Right axilla: check for a second wound and for blood tracking. None found.",
        "rib_cage": null,
        "abdomen_view": "No wounds; no distension.",
        "abdomen_palpation": "Soft, non-tender, not rigid.",
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": "Assessed during a coordinated roll: no exit or second wound, no deformity, no midline tenderness."
      },
      "shock_check": {
        "spo2": "84% on room air (severe hypoxia); 92% on a non-rebreather at 15 LPM."
      },
      "expected_transport_decision": "Rapid transport category — a penetrating chest injury with instability of the ABCs, hemorrhage and severe hypoxia."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Sharp right chest pain, air hunger, light-headedness, nausea, fear. Describes the sensation of air moving in the wound.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Tetanus booster 5 years ago.",
        "last_intake": "Alcohol over the evening; last drink about 30 minutes ago. Nothing by mouth from now on.",
        "last_bowel_movement": "Yesterday, normal.",
        "events_preceeding": "Altercation outside a bar; stabbed once with what witnesses describe as a knife about 5 minutes ago. Record the facts as stated and leave the investigation to police.",
        "pain": {
          "onset": "Instant, at the stabbing about 5 minutes ago",
          "provoke": "Breathing in, coughing, movement",
          "quality": "Sharp and burning at the wound; a crushing tightness across the chest",
          "region": "Right anterior chest; radiating to the right shoulder",
          "severity": "9/10",
          "time_duration": "About 5 minutes"
        }
      },
      "vitals": {
        "loc": "A, oriented, agitated",
        "respiration": {
          "rate": "32",
          "rhythm": "Regular",
          "quality": "Shallow; audible sucking and bubbling at the wound; air entry diminished on the right"
        },
        "pulse": {
          "rate": "130",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "88/54",
        "sp02": "84% room air; 92% on a non-rebreather at 15 LPM",
        "skin": {
          "color": "Pale with cyanotic lips",
          "condition": "Cool, clammy"
        },
        "temperature": "36.0 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "6 mm"
        },
        "blood_glucose": "5.9 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "No injury.",
        "neck": "No deformity. No jugular venous distension and trachea midline at present — recheck these repeatedly for a developing tension pneumothorax. Collar applied.",
        "chest": "Chest exposed. Single 3 cm penetrating wound right anterior chest, fourth intercostal space, mid-clavicular line. Auscultation: good air entry on the left at both listening points; clearly diminished on the right at both. No subcutaneous crepitus at present.",
        "abdomen": {
          "top_left": "Soft, non-tender",
          "top_right": "Soft, non-tender",
          "bottom_left": "Soft, non-tender",
          "bottom_right": "Soft, non-tender"
        },
        "pelvis": "Stable; no wounds.",
        "legs": "No injury; pedal pulses weak, equal.",
        "arms": "Defensive cuts to both forearms, bleeding controlled with dressings; radial pulses weak, equal.",
        "back": "No wounds; no midline tenderness."
      },
      "expected_transport_decision": "Rapid transport. Report the wound location, that it is a sucking wound, the diminished right-sided air entry, and every dressing change."
    },
    "expected_treatment": {
      "life_saving_intervention": "The goal is to control the external bleeding without increasing the pressure in the chest. The wound must not become occluded — occlusion significantly increases the risk of a tension pneumothorax, so it has to be prevented. Because there is external bleeding, apply direct pressure to the chest wound with a gloved hand and a non-occlusive dressing. Monitor that dressing closely: once it saturates with blood it becomes occlusive, so replace saturated dressings immediately rather than adding layers on top. If the bleeding were minor, the wound would simply be left exposed to the air or covered with a non-occlusive dressing. He is hypoxic, so give high-concentration oxygen; assisted ventilations may also be necessary. Position him for ease of breathing, balanced against spinal motion restriction; if he must be rolled into the recovery position, put the injured right side towards the ground. Take steps to minimize shock, keep him warm, nothing by mouth. Search for a second wound including the back and axillae. Follow crime-scene protocol: disturb as little as possible and keep any clothing you cut. Reassess breath sounds, neck veins, trachea, ABCs and vitals every 5 minutes.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "chest_adominal_pelvic",
      "condition": "Blunt abdominal injury",
      "title": "Handlebars to the stomach",
      "patient": "14-year-old boy",
      "reference": "Ch. 11 — Abdominal Injuries, Signs and Symptoms of Abdominal Injury, Care for Abdominal Injuries",
      "overview": "Blunt abdominal trauma over the spleen with a deceptively mild early presentation. Tests the rule that blunt abdominal trauma may cause no external signs and may even be painless, and that the mechanism alone puts the patient in the rapid transport category.",
      "id": "chest_adominal_pelvic.abdominal_injuries"
    },
    "scen_survey": {
      "environment": "Skate park, concrete, sunny. Other riders around — ask them to stop and stand back. Bike nearby.",
      "mechanisms_of_injury": "Blunt abdominal trauma: went over the handlebars and landed with the bar end into the left upper abdomen. Violent blunt force over the spleen.",
      "casualty_count": "1",
      "assistance": "EMS transport; a bystander to contact his parents; park staff for crowd control.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Teenage boy lying curled on his side on the concrete, pale, holding his left upper abdomen, embarrassed and playing it down in front of his friends."
    },
    "primary_survey": {
      "loc": "A, oriented; becoming quiet and drowsy as the scenario progresses.",
      "c_spine": "Indicated — a fall from a bicycle at speed with a blunt force to the trunk. Manual in-line stabilization and a collar. Helmet on and undamaged, but the trunk force alone is enough.",
      "airway": "Patent; full sentences at first, shorter later.",
      "breathing": "26/min, shallow because he is guarding. Clear and equal air entry.",
      "circulation": "Radial pulse 122, regular, weak. Skin pale and moist, cool. Capillary refill 3 seconds. No external bleeding.",
      "name": "Marcus Delaney.",
      "complaint": "Winded and his stomach hurts on the left.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": "Bruising over the left lower ribs; tender; no crepitus, no paradoxical movement.",
        "armpits": null,
        "rib_cage": "Left ninth to eleventh ribs tender — the ribs that partly protect the spleen.",
        "abdomen_view": "A single handlebar-end contusion in the left upper quadrant. Very little to see. Distension develops slowly over the scenario — re-inspect, do not assume the first look holds.",
        "abdomen_palpation": "Left upper quadrant tender and guarded on light pressure, becoming rigid. Other quadrants soft at first. Apply light pressure only, avoiding areas he has indicated as painful. No pulsating mass.",
        "pelvis": "Stable; no pain, no crepitus.",
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": "Assessed during a coordinated roll: no deformity, no midline tenderness, no wounds."
      },
      "shock_check": {
        "spo2": "97% on room air early, 94% later."
      },
      "expected_transport_decision": "Rapid transport category. A patient who has experienced serious trauma to the abdomen should be in the rapid transport category even if the signs and symptoms of serious injury are absent — and abdominal distension and tenderness are independently on the immediate transport list. Do not be reassured by how well he looks in the first two minutes."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Left upper abdominal pain radiating to the left shoulder tip, nausea, one episode of vomiting, thirst, light-headedness on sitting up, feeling 'weird'. He downplays all of it in front of his friends — ask again away from them.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Immunizations up to date.",
        "last_intake": "Energy drink and chips about an hour ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Cased a jump, went over the bars, and the bar end drove into his left upper abdomen about 12 minutes ago.",
        "pain": {
          "onset": "Instant at the impact, then eased, and is now increasing again",
          "provoke": "Movement, sitting up, deep breathing, any pressure on the abdomen",
          "quality": "Deep and dull, becoming sharp and constant",
          "region": "Left upper abdomen; radiating to the left shoulder tip",
          "severity": "4/10 at first, 8/10 by ten minutes later",
          "time_duration": "About 12 minutes, worsening after an initial improvement"
        }
      },
      "vitals": {
        "loc": "A, oriented; quieter and drowsier over time",
        "respiration": {
          "rate": "26",
          "rhythm": "Regular",
          "quality": "Shallow, guarded; clear and equal"
        },
        "pulse": {
          "rate": "122 rising to 138",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "104/62 falling to 88/54",
        "sp02": "97% early, 94% later",
        "skin": {
          "color": "Pale",
          "condition": "Cool, moist"
        },
        "temperature": "36.5 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "5 mm"
        },
        "blood_glucose": "6.3 mmol/L",
        "glasgow_coma": "15, drifting to E4 V5 M6 = 15 but visibly slower"
      },
      "head_to_toe_exam": {
        "head": "No injury; helmet undamaged; no fluid from ears or nose.",
        "neck": "No midline tenderness, no deformity; collar applied.",
        "chest": "Bruising over the left lower ribs. Equal expansion; clear and equal air entry both sides, top and bottom.",
        "abdomen": {
          "top_left": "Handlebar contusion; tender, guarded, becoming rigid; distension developing",
          "top_right": "Soft, mildly tender later",
          "bottom_left": "Soft, mildly tender later",
          "bottom_right": "Soft, non-tender"
        },
        "pelvis": "Stable; no crepitus, no pain, no rectal or urethral bleeding.",
        "legs": "Abrasions to both knees; no fractures; pedal pulses weak but equal.",
        "arms": "Abrasions to both palms and the right forearm; radial pulses weak, equal; capillary refill 3 seconds.",
        "back": "No injury; no midline tenderness."
      },
      "expected_transport_decision": "Rapid transport. Report the mechanism, the handlebar contusion, the shoulder-tip radiation, and the trend in pulse, blood pressure and abdominal findings."
    },
    "expected_treatment": {
      "life_saving_intervention": "Place him supine with his knees bent slightly to let the abdominal muscles relax, using rolled blankets or pillows under the knees — but if moving his legs causes pain, leave them straight. Reconcile that with spinal motion restriction: immobilize on a rigid device with padding under the knees. There is no external bleeding, so no dressing is needed; if there had been, you would apply trauma dressings with gentle pressure only, because firm pressure on the abdomen can worsen internal injuries — and if gentle pressure did not control it, that alone would mean rapid transport. Once you have found rigidity, stop palpating. High-flow oxygen. Manage shock: keep him warm, nothing to eat or drink despite the thirst, and note that the elevated-feet shock position is contraindicated with this trauma. Reassess ABCs, vital signs and the abdomen every 5 minutes and document the trend — the deterioration is the finding. Get his parents contacted, and interview him away from his friends so he stops minimizing.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "chest_adominal_pelvic",
      "condition": "Abdominal evisceration",
      "title": "Chainsaw kickback",
      "patient": "51-year-old man",
      "reference": "Ch. 11 — Evisceration; Ch. 9 — Care for External Bleeding; Ch. 8 — Shock",
      "overview": "Protruding abdominal organs. Tests the exact dressing sequence — moist sterile dressings placed loosely, plastic wrap, then a towel or blanket for warmth — and the two absolute prohibitions: do not touch the organs and do not push them back in.",
      "id": "chest_adominal_pelvic.evisceration"
    },
    "scen_survey": {
      "environment": "Woodlot, uneven ground, cold and damp. Chainsaw on the ground, still running — have it switched off. Fallen limbs and a partly cut tree overhead; check for hangers before working underneath.",
      "mechanisms_of_injury": "Chainsaw kickback producing a large open wound across the lower abdomen with organ protrusion.",
      "casualty_count": "1",
      "assistance": "Second crew, rapid transport, hospital pre-notification; consider air evacuation given the remote location.",
      "ppe": "Gloves, gown, mask and eye protection.",
      "impressions": "Adult man supine on the forest floor, grey and shaking, hands hovering over a large abdominal wound with loops of bowel visible outside the body."
    },
    "primary_survey": {
      "loc": "A, oriented, in severe pain and profoundly frightened.",
      "c_spine": "Not indicated — no fall, no blunt force to the head or trunk. He remained standing and then lay down. Say so.",
      "airway": "Patent; short sentences.",
      "breathing": "30/min, shallow and rapid. Clear and equal air entry.",
      "circulation": "Significant bleeding from the wound margins. Radial pulse 138, regular, weak and thready. Skin grey, cold and clammy. Capillary refill 5 seconds.",
      "name": "Douglas Ferland.",
      "complaint": "Cut his stomach open with the saw.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": "A 20 cm ragged transverse wound across the lower abdomen with several loops of small bowel protruding. Do not touch the organs. Bleeding from the wound margins.",
        "abdomen_palpation": "Do not palpate the abdomen. Note that as the finding and move on — this is one of the few times you deliberately skip a step of the survey.",
        "pelvis": "Stable to gentle assessment; no crepitus. Check for further saw wounds to the thighs and groin — none found.",
        "legs_femurs": "Trousers cut but skin intact; no wounds. Femoral pulses weak but present.",
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "91% on room air with a weak trace; 96% on a non-rebreather at 15 LPM."
      },
      "expected_transport_decision": "Rapid transport category — a major open abdominal wound with evisceration, external hemorrhage and developing shock. Any serious abdominal injury goes into the rapid transport category."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Severe abdominal pain, extreme thirst, nausea, light-headedness, shaking, cold, terrified. He keeps asking whether he is going to die — answer him calmly and honestly, and keep talking to him.",
        "allergies": "None known.",
        "medications": "Metoprolol.",
        "past_medical_history": "Hypertension. Tetanus booster 8 years ago.",
        "last_intake": "Coffee and a sandwich about 2 hours ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Limbing a felled tree above waist height; the saw kicked back off a knot into his lower abdomen about 7 minutes ago.",
        "pain": {
          "onset": "Instant, at the injury",
          "provoke": "Any movement; air moving over the exposed organs",
          "quality": "Tearing, burning, deep",
          "region": "Lower abdomen across both lower quadrants",
          "severity": "10/10",
          "time_duration": "About 7 minutes"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "30",
          "rhythm": "Regular",
          "quality": "Shallow and rapid; clear and equal"
        },
        "pulse": {
          "rate": "138",
          "rhythm": "Regular",
          "quality": "Weak and thready"
        },
        "blood_pressure": "78/48",
        "sp02": "91% with a weak trace; 96% on a non-rebreather",
        "skin": {
          "color": "Grey, cyanotic lips",
          "condition": "Cold, clammy"
        },
        "temperature": "35.2 °C — the exposed organs are losing heat fast",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "6 mm"
        },
        "blood_glucose": "6.8 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "No injury.",
        "neck": "No injury, no tenderness.",
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": "Not palpated — do not palpate an eviscerated abdomen",
          "top_right": "Not palpated",
          "bottom_left": "Open wound with protruding bowel; not palpated",
          "bottom_right": "Open wound with protruding bowel; not palpated"
        },
        "pelvis": "Stable; no further wounds; no rectal or urethral bleeding.",
        "legs": "Trousers cut, skin intact, no wounds. Pedal pulses weak but present and equal; capillary refill 5 seconds.",
        "arms": "Superficial cut to the left forearm; radial pulses weak, equal.",
        "back": "No wounds; no tenderness."
      },
      "expected_transport_decision": "Rapid transport, immediately. Report the wound size, the organs involved, the time of injury and the dressings applied."
    },
    "expected_treatment": {
      "life_saving_intervention": "Switch off the saw. Place him supine with his knees bent slightly, supported on a rolled blanket, to relax the abdominal muscles; leave the legs straight if bending them hurts. Your goals are to protect the organs from damage and mitigate the effects of shock. Do not touch the exposed organs and do not attempt to force them back into place. Remove clothing from around the wound. Cover the area lightly with moist, sterile dressings placed loosely over the wound — moisten them with saline or warm tap water. Cover those dressings loosely with plastic wrap if you have it. Place a folded towel or blanket over the area to maintain warmth, secured gently with large bandages if necessary, but with no pressure on the injury. Protect the organs from extremes of heat and cold, dust and debris — they are normally protected by the body and are very susceptible. Control bleeding at the wound margins with gentle pressure only. High-flow oxygen. Manage shock and his hypothermia together: he is at 35.2 °C, so insulate him and get him out of the damp. Nothing to eat or drink. Reassess ABCs and vitals every 5 minutes. Keep talking to him.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "chest_adominal_pelvic",
      "condition": "Abdominal aortic aneurysm (AAA)",
      "title": "Not kidney stones",
      "patient": "73-year-old man",
      "reference": "Ch. 11 — Abdominal Aortic Aneurysm (AAA); Ch. 13 — Kidney Stones; Ch. 8 — Shock",
      "overview": "An expanding AAA that the patient has mistaken for renal colic — a confusion the manual explicitly warns about. Tests recognition of the pulsating mass, checking femoral and pedal pulses bilaterally, and the absolute rule against pressing on the abdomen.",
      "id": "chest_adominal_pelvic.abdominal_aortic_aneurysm"
    },
    "scen_survey": {
      "environment": "Bedroom of a two-storey house; he is on the floor beside the bed. Narrow stairs — plan the extrication early.",
      "mechanisms_of_injury": "No trauma. Expanding, possibly leaking abdominal aortic aneurysm.",
      "casualty_count": "1",
      "assistance": "Second crew for the stair carry, rapid transport, early hospital notification for vascular surgery.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Older man on the floor, grey and sweating, restless, saying his kidney stones are back. Do not accept his diagnosis."
    },
    "primary_survey": {
      "loc": "A but restless and anxious; becoming confused as the scenario runs.",
      "c_spine": "Ask about a fall. He lowered himself to the floor because of the pain; no fall, no trauma. Not indicated.",
      "airway": "Patent; short sentences.",
      "breathing": "28/min, shallow, regular. Clear and equal air entry.",
      "circulation": "Radial pulse 128, regular, weak. Skin grey, cool and clammy. Capillary refill 4 seconds. Femoral pulses diminished and equal on both sides; pedal pulses barely palpable bilaterally — check all of these and say why.",
      "name": "Harold Nkemelu.",
      "complaint": "'Kidney stones' — severe pain in the back and side.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": "A visible pulsating mass in the mid-abdomen, moving with each heartbeat. This is a life-threatening internal hemorrhage in the making and an urgent medical emergency.",
        "abdomen_palpation": "Do not put pressure on the abdomen once the pulsating mass is identified. The abdomen is rigid on the gentlest contact. Stop and record it.",
        "pelvis": "Not assessed by three-plane compression — avoid anything that transmits pressure to the abdomen. No external signs of injury.",
        "legs_femurs": "Femoral pulses diminished bilaterally.",
        "legs_rest": "Both feet cool and mottled; pedal pulses barely palpable; he reports tingling and numbness in both feet.",
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "93% on room air with a weak trace; 97% on a non-rebreather at 12 LPM."
      },
      "expected_transport_decision": "Rapid transport category. Any patient with a suspected AAA should be in the rapid transport category, and abdominal distension and tenderness are on the immediate transport list. A ruptured AAA presents with internal bleeding and shock, which is where this is heading."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Severe abdominal and lower back pain, pain in the scrotum, pulsating sensation in the abdomen, nausea and vomiting, tingling and numbness in both feet, light-headedness, extreme thirst. He insists it is the same as his kidney stones five years ago — many older adults mistake AAA for renal colic because the pain pattern is similar.",
        "allergies": "None known.",
        "medications": "Ramipril, amlodipine, atorvastatin, ASA 81 mg.",
        "past_medical_history": "Hypertension, high cholesterol, coronary heart disease, peripheral arterial disease. Long smoking history. Renal colic 5 years ago — hence his assumption.",
        "last_intake": "Tea about 2 hours ago; vomited it. Nothing by mouth from now on.",
        "last_bowel_movement": "Yesterday, normal.",
        "events_preceeding": "Sudden severe pain about 25 minutes ago while getting out of bed. No injury, no exertion, no fall.",
        "pain": {
          "onset": "Sudden and severe, about 25 minutes ago",
          "provoke": "Nothing relieves it; movement and any pressure on the abdomen worsen it",
          "quality": "Tearing and ripping, with a throbbing pulsation",
          "region": "Mid-abdomen and lower back, radiating into the scrotum and both groins",
          "severity": "10/10",
          "time_duration": "About 25 minutes, constant and unrelenting"
        }
      },
      "vitals": {
        "loc": "A, restless and anxious, becoming confused",
        "respiration": {
          "rate": "28",
          "rhythm": "Regular",
          "quality": "Shallow; clear and equal"
        },
        "pulse": {
          "rate": "128",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "84/52 and falling",
        "sp02": "93% weak trace; 97% on a non-rebreather",
        "skin": {
          "color": "Grey, mottled on the legs",
          "condition": "Cool, clammy"
        },
        "temperature": "35.7 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "6 mm"
        },
        "blood_glucose": "7.4 mmol/L",
        "glasgow_coma": "E4 V4 M6 = 14"
      },
      "head_to_toe_exam": {
        "head": "No injury.",
        "neck": null,
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": "Rigid; not palpated further after the pulsating mass was found",
          "top_right": "Rigid; not palpated further",
          "bottom_left": "Rigid; not palpated further",
          "bottom_right": "Rigid; not palpated further"
        },
        "pelvis": "No compression assessment performed, deliberately. No external injury.",
        "legs": "Both legs cool and mottled below the knees. Femoral pulses diminished bilaterally; dorsalis pedis and posterior tibialis barely palpable on both sides — bilateral diminished pulses are the pattern, not one-sided. Capillary refill over 4 seconds in the toes. Reduced sensation in both feet; toes move.",
        "arms": "Radial pulses weak but equal; capillary refill 4 seconds.",
        "back": "Severe lower back pain; no deformity, no tenderness on the spine itself."
      },
      "expected_transport_decision": "Rapid transport, immediately, with early notification so a vascular team can be ready. Correct his assumption in your handover — say suspected AAA, not 'patient reports kidney stones'."
    },
    "expected_treatment": {
      "life_saving_intervention": "Recognize that this is not renal colic and say so. If you suspect an AAA, do not put pressure on the abdomen — no deep palpation, no pelvic compression, no abdominal straps. Handle him extremely gently; move him with a scoop or clamshell stretcher rather than a log roll, and avoid anything that jolts him on the stairs. Position him supine with knees slightly supported for comfort. High-concentration oxygen. Manage shock: keep him warm, nothing to eat or drink despite the thirst — he needs surgery. High-flow oxygen is indicated because hypoxia is the underlying condition in shock. Note that the elevated-feet shock position is a judgement call here; his systolic is under 100, but any manoeuvre that stresses the cardiovascular system is unwise, so keep him flat and warm rather than tilting him. Check and document femoral and pedal pulses on both sides. Reassess ABCs and vitals every 5 minutes and watch for the sudden collapse that signals rupture. Be prepared for CPR.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "chest_adominal_pelvic",
      "condition": "Unstable pelvic fracture",
      "title": "Pinned between the forklift and the rack",
      "patient": "45-year-old man",
      "reference": "Ch. 11 — Pelvic Injuries, Care for Pelvic Injuries, Pelvic Binding",
      "overview": "An unstable pelvic fracture from a lateral crush. Tests the three-plane assessment and knowing when to stop it, the pelvic binding technique and its exclusions, and the ban on log-rolling a suspected pelvic injury.",
      "id": "chest_adominal_pelvic.pelvic_injuries"
    },
    "scen_survey": {
      "environment": "Warehouse aisle. Forklift now reversed clear; pallet racking above him is damaged and loaded — have it assessed and shored before working underneath. Hydraulic fluid on the floor.",
      "mechanisms_of_injury": "High-energy crush: pinned between a reversing forklift and steel racking. A forceful blunt compression of the pelvis — enough to lacerate pelvic organs and major vessels.",
      "casualty_count": "1 — check on the forklift operator, who is uninjured but shaken.",
      "assistance": "Fire service to make the racking safe, second crew, scoop or clamshell stretcher, rapid transport, hospital pre-notification.",
      "ppe": "Gloves, gown and eye protection; hard hat.",
      "impressions": "Adult man supine on the concrete, grey and sweating, legs slightly externally rotated, in severe pain, not moving."
    },
    "primary_survey": {
      "loc": "A, oriented, in severe pain; becoming drowsy as the scenario runs.",
      "c_spine": "Indicated — a high-energy crush to the trunk. Manual in-line stabilization and a collar. Remember the priority rule: if protecting the spine conflicted with a life-saving intervention, the life comes first.",
      "airway": "Patent; short sentences.",
      "breathing": "28/min, shallow, regular. Clear and equal air entry.",
      "circulation": "Radial pulse 136, regular, weak and thready. Skin grey, cool and clammy. Capillary refill 5 seconds. No significant external bleeding, but suspect major internal hemorrhage into the pelvis.",
      "name": "Ricardo Salgado.",
      "complaint": "Hips and groin; he cannot move his legs and says his back is broken.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": "Bruising across the lower abdomen and both flanks. Mild distension developing.",
        "abdomen_palpation": "Soft, tender in both lower quadrants; becoming firm.",
        "pelvis": "Perform a three-plane assessment with gentle pressure: inwards, then upwards, then downwards. Inward pressure produces severe pain and palpable instability with crepitus — stop the assessment immediately at that point and initiate pelvic binding. Do not push down on the iliac crests. Blood at the urethral meatus.",
        "legs_femurs": "No femoral deformity. Both legs slightly externally rotated; femoral pulses weak and equal.",
        "legs_rest": "Reduced sensation over both thighs and feet; he cannot move his legs on command. Pedal pulses weak but present; capillary refill 5 seconds.",
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": "Assessed with a scoop stretcher, NOT a log roll — a log roll must not be used where a pelvic injury is suspected. Bruising over the sacrum; midline lumbar tenderness."
      },
      "shock_check": {
        "spo2": "92% on room air with a weak trace; 96% on a non-rebreather at 15 LPM."
      },
      "expected_transport_decision": "Rapid transport category. An unstable pelvic injury is explicitly on the immediate transport list, and any patient with a serious pelvic injury goes into the rapid transport category. He also has neurological deficits and suspected internal hemorrhage."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Severe pain across the hips, groin and lower back. Cannot move his legs. Numbness in both thighs and feet. Blood at the tip of the penis. Nausea, extreme thirst, light-headedness.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Tetanus booster 6 years ago.",
        "last_intake": "Coffee about 90 minutes ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "A forklift reversed into him, pinning his pelvis against steel racking for a few seconds about 9 minutes ago.",
        "pain": {
          "onset": "Instant, at the crush",
          "provoke": "Any movement of the legs or pelvis; the three-plane assessment itself",
          "quality": "Grinding, deep, sickening",
          "region": "Across both hips, the groin and the lower back; radiating down both legs",
          "severity": "10/10",
          "time_duration": "About 9 minutes"
        }
      },
      "vitals": {
        "loc": "A, oriented; becoming drowsy",
        "respiration": {
          "rate": "28",
          "rhythm": "Regular",
          "quality": "Shallow; clear and equal"
        },
        "pulse": {
          "rate": "136",
          "rhythm": "Regular",
          "quality": "Weak and thready"
        },
        "blood_pressure": "80/50 and falling",
        "sp02": "92% weak trace; 96% on a non-rebreather",
        "skin": {
          "color": "Grey",
          "condition": "Cool, clammy"
        },
        "temperature": "35.6 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "6 mm"
        },
        "blood_glucose": "6.7 mmol/L",
        "glasgow_coma": "E4 V5 M6 = 15, drifting to 14"
      },
      "head_to_toe_exam": {
        "head": "No injury; no fluid from ears or nose.",
        "neck": "No midline tenderness, no deformity; collar applied.",
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": "Soft, mildly tender",
          "top_right": "Soft, non-tender",
          "bottom_left": "Bruised, tender, becoming firm",
          "bottom_right": "Bruised, tender, becoming firm"
        },
        "pelvis": "Instability and crepitus on gentle inward pressure — assessment stopped at that point. Bruising across both flanks and the sacrum. Blood at the urethral meatus. No rectal or genital bleeding otherwise. Binder applied.",
        "legs": "Both slightly externally rotated. No femoral or tibial deformity. Cannot move either leg on command; reduced sensation over both thighs and feet. Pedal pulses weak but present and equal; capillary refill 5 seconds. Reassess sensation and distal circulation after the binder is applied.",
        "arms": "Abrasion to the right elbow; radial pulses weak, equal.",
        "back": "Sacral bruising; midline lumbar tenderness; no step or deformity."
      },
      "expected_transport_decision": "Rapid transport. Report the mechanism, the instability found on the three-plane assessment, the urethral blood, the leg weakness and numbness, and the time the binder was applied."
    },
    "expected_treatment": {
      "life_saving_intervention": "Minimize additional damage, control external bleeding, mitigate shock. Perform the three-plane assessment with gentle pressure — inwards, then upwards, then downwards — and stop the moment it causes pain, then initiate pelvic binding. Do not push down on the iliac crests. Apply a commercial pelvic binder per the manufacturer's instructions, or improvise with a narrow folded sheet 20 to 30 cm wide across a multi-level stretcher, its width matched to the distance between his iliac crest and pubic symphysis: remove outer clothing, bring the legs together, pad between the knees and ankles and secure the legs, lift him with a scoop stretcher onto the prepared sheet, ensure the top of the sheet is level with the iliac crest, cross the ends anteriorly and apply gentle synchronized tension, then secure with clamps positioned laterally so they do not obstruct X-ray views. Tuck the loose ends away. Reassess sensation and distal circulation in both legs afterwards, and recheck the tension periodically. Apply it early, gently, and do not remove it until he reaches hospital. Note the exclusion: binders are not recommended for fractures from low-energy or lateral impacts — this was a high-energy crush, so it is appropriate. Do not log roll him; use a scoop or clamshell. Keep him supine and as still as possible. High-flow oxygen. Manage shock, keep him warm, nothing by mouth. Reassess ABCs and vitals every 5 minutes.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "head_spine",
      "condition": "Skull fracture",
      "title": "Struck by the falling scaffold plank",
      "patient": "38-year-old man",
      "reference": "Ch. 12 — Skull Fracture, Objects Impaled in the Skull, SMR; Ch. 6 — NPA contraindications",
      "overview": "A depressed skull fracture with cerebrospinal fluid leak. Tests recognition of the specific signs — raccoon eyes, Battle's sign, clear fluid from the ear — the ban on direct pressure over a suspected fracture, and the reason an NPA is contraindicated here.",
      "id": "head_spine.skull_fracture"
    },
    "scen_survey": {
      "environment": "Building site beneath scaffolding. More planks are unsecured overhead — do not work under them until the site secures the scaffold. Hard hat required.",
      "mechanisms_of_injury": "A 3 m scaffold plank fell approximately 6 m and struck him on the right side of the head. His hard hat is cracked through. Severe blunt force to the head with a broken helmet — two spinal-injury mechanisms.",
      "casualty_count": "1 — confirm no one else was struck.",
      "assistance": "Fire service to secure the scaffold, second crew, rapid transport, hospital pre-notification.",
      "ppe": "Gloves, gown, eye protection and a hard hat; suction ready.",
      "impressions": "Adult man supine on the ground, breathing noisily, not responding to shouting. Cracked hard hat beside him. Blood in his hair and clear fluid at his right ear."
    },
    "primary_survey": {
      "loc": "P — no response to voice; withdraws to a pinch on the inside of the arm.",
      "c_spine": "Indicated, unequivocally. Severe blunt force to the head, a broken helmet, and unresponsiveness. Manual in-line stabilization from first contact, then a collar and a rigid device. Note the priority rule: protect the spine, but the life comes first if they conflict.",
      "airway": "Compromised. Snoring respirations and blood pooling at the back of the throat. Open with a jaw thrust to spare the neck; if the jaw thrust fails, use a head-tilt/chin-lift keeping the neck in line with the body. An OPA is accepted without gagging. An NPA is contraindicated — suspected skull fracture, and there is facial and nasal bleeding.",
      "breathing": "Irregular and deep, 10/min. Clear and equal air entry.",
      "circulation": "Carotid pulse 52, regular, full. Skin pale, warm and dry. The slow pulse with a rising blood pressure is Cushing's response — say the name.",
      "name": "Bradley Nkosi (from his supervisor and site ID).",
      "complaint": "Unresponsiveness.",
      "rapid_body_survey": {
        "head": "Right temporoparietal region: a 6 cm scalp laceration with a palpable depression and visible deformity of the skull. Clear, faintly pink fluid draining from the right ear. Bruising developing around both eyes (raccoon eyes) and behind the right ear (Battle's sign). Blood in the nose and mouth. Right pupil larger than the left.",
        "jaw": "Slack; jaw thrust required to hold the airway.",
        "neck_spine": "No obvious deformity; tenderness cannot be assessed. Assume injury.",
        "clavicles": null,
        "sternum": null,
        "chest": "No injury; equal expansion.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": "Assessed with a scoop stretcher: no deformity, no wounds."
      },
      "shock_check": {
        "spo2": "88% on room air (moderate hypoxia); 97% with airway management and high-concentration oxygen."
      },
      "expected_transport_decision": "Rapid transport category — unresponsiveness with neurological deficits and a suspected skull fracture. Decide it immediately."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "None obtainable from the patient. From his supervisor: he was struck without warning, dropped immediately, and has not spoken or opened his eyes since. One episode of vomiting before your arrival.",
        "allergies": "None known (emergency contact card).",
        "medications": "None known.",
        "past_medical_history": "Nothing significant per the supervisor.",
        "last_intake": "Lunch about an hour ago. Nothing by mouth.",
        "last_bowel_movement": null,
        "events_preceeding": "Struck by a falling plank at approximately 13:40. Record the exact time and the fall height; both matter.",
        "pain": {
          "onset": null,
          "provoke": null,
          "quality": null,
          "region": null,
          "severity": null,
          "time_duration": null
        }
      },
      "vitals": {
        "loc": "P; unchanged or deteriorating over the scenario",
        "respiration": {
          "rate": "10",
          "rhythm": "Irregular, often deep — one of Cushing's triad",
          "quality": "Noisy with secretions until suctioned; clear and equal air entry"
        },
        "pulse": {
          "rate": "52 — bradycardia, the second of Cushing's triad",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "196/86 — a raised pressure with a widening gap between systolic and diastolic, the third of Cushing's triad",
        "sp02": "88% room air; 97% with airway management and oxygen",
        "skin": {
          "color": "Pale",
          "condition": "Warm, dry"
        },
        "temperature": "37.0 °C",
        "pupils": {
          "equal": "Unequal — right 7 mm, left 3 mm",
          "reactive": "Right non-reactive, left sluggish",
          "size": "Right 7 mm, left 3 mm"
        },
        "blood_glucose": "6.5 mmol/L",
        "glasgow_coma": "E2 V2 M4 = 8 — a score of 13 or lower requires rapid transport"
      },
      "head_to_toe_exam": {
        "head": "Visible damage to the scalp with a 6 cm laceration; palpable depression and deformity of the right skull; swelling; clear faintly pink fluid from the right ear; raccoon eyes; Battle's sign behind the right ear; blood in the nose and mouth; unequal pupils. Recheck the level of responsiveness and pupils and note every change.",
        "neck": "No deformity; collar applied. Cannot assess tenderness.",
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": "Soft",
          "top_right": "Soft",
          "bottom_left": "Soft",
          "bottom_right": "Soft"
        },
        "pelvis": "Stable; no crepitus.",
        "legs": "Left leg flaccid; right withdraws to pain. Pedal pulses equal.",
        "arms": "Left arm flaccid with no withdrawal; right withdraws to pain. Radial pulses equal.",
        "back": "No injury; no deformity."
      },
      "expected_transport_decision": "Rapid transport, immediately. Report the mechanism, the fall height, the depression, the CSF leak, the pupil inequality, the Cushing's triad and the Glasgow Coma Scale score with its components."
    },
    "expected_treatment": {
      "life_saving_intervention": "Maintain manual in-line stabilization from first contact and immobilize on a rigid device with a scoop, not a log roll if avoidable. Manage the airway with a jaw thrust; an OPA is acceptable, an NPA is not — it is contraindicated with a suspected skull fracture, active nasal bleeding or facial trauma. Suction the airway; he has vomited and there is blood in the mouth. High-concentration oxygen; his rate is 10, so be prepared to assist ventilations. Dress the scalp wound with sterile gauze but avoid putting direct pressure on the head where you suspect a fracture — allow blood to drain. Cover the draining right ear lightly with a sterile dressing without applying pressure; do not pack it. Do not attempt to stop CSF drainage. Treat the head injury before minor injuries. Reassess level of responsiveness, pupils and the ABCs every 5 minutes — a deteriorating level of responsiveness is the most important sign of a serious head injury. Keep the head end elevated only if protocol allows on the board. Nothing by mouth.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "head_spine",
      "condition": "Orbit fracture",
      "title": "Elbow to the eye socket",
      "patient": "21-year-old woman",
      "reference": "Ch. 12 — Orbit Fractures, Concussion; Ch. 9 — Care for Burns (eye dressings)",
      "overview": "A blowout fracture of the orbital floor with paralysis of upward gaze. Tests the specific findings — double vision, numbness over the cheek, eyes that cannot follow a finger upward — the supine transport position, and the association with concussion.",
      "id": "head_spine.orbito_fracture"
    },
    "scen_survey": {
      "environment": "Indoor basketball court, bright lighting. Play stopped. Teammates crowding — ask them back.",
      "mechanisms_of_injury": "Direct blunt force to the face: an opposing player's elbow struck her left eye socket while she was jumping for a rebound. Blunt force to the head is also a spinal mechanism.",
      "casualty_count": "1",
      "assistance": "EMS transport; team staff for privacy and to contact her family.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Young woman sitting on the court, hand over her left eye, dazed and tearful, swelling already visible around the eye. Nasal discharge."
    },
    "primary_survey": {
      "loc": "A but dazed, slow to answer, and asking the same question twice.",
      "c_spine": "Indicated — a severe blunt force to the head. She was momentarily stunned. Provide manual in-line stabilization and a collar; the Canadian C-Spine Rule cannot be applied confidently while she is dazed and cannot give a reliable account.",
      "airway": "Patent; full sentences.",
      "breathing": "20/min, regular, unlaboured, clear and equal.",
      "circulation": "Radial pulse 96, regular, full. Skin pale, warm and moist.",
      "name": "Amara Nzeogwu.",
      "complaint": "Left eye — she is seeing double and her cheek feels numb.",
      "rapid_body_survey": {
        "head": "Left periorbital swelling and bruising, subconjunctival hemorrhage. The eye looks slightly sunken. Numbness over the left cheek and above the left eyebrow. Copious clear discharge from the left nostril. Left eye cannot follow your finger upward — paralysis of the upward gaze, which points to a fracture of the lower orbit, the most common site.",
        "jaw": "Intact; bite normal; no malocclusion, no tenderness.",
        "neck_spine": "No midline tenderness, no deformity — but immobilize because of her mental status.",
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "99% on room air."
      },
      "expected_transport_decision": "Rapid transport category. A patient with an orbit fracture should be rapidly transported in a supine position, because surgery is usually necessary and permanent visual impairment is possible. She also has signs of concussion, which commonly accompanies an orbit fracture."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Double vision, decreased vision in the left eye, numbness above the left eyebrow and over the left cheek, nasal discharge on the left. Plus concussion features: headache, feeling foggy and stunned, dizziness, nausea, sensitivity to the gym lights, and no memory of the moment of impact. She says she does not feel 'right'.",
        "allergies": "None known.",
        "medications": "Combined oral contraceptive pill.",
        "past_medical_history": "One previous concussion 18 months ago — someone who has had one concussion is at increased risk of another. No prior eye injury.",
        "last_intake": "Sports drink about 40 minutes ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Jumped for a rebound and took an elbow to the left orbit about 6 minutes ago. She did not lose responsiveness, but a patient does not have to have lost consciousness to have a concussion.",
        "pain": {
          "onset": "Instant, at the impact",
          "provoke": "Looking up, moving the eye, pressure on the cheek, bright light",
          "quality": "Deep aching around the eye; a pressing headache across the forehead",
          "region": "Left orbit and cheek; headache frontal and diffuse",
          "severity": "7/10 around the eye, 5/10 headache",
          "time_duration": "About 6 minutes"
        }
      },
      "vitals": {
        "loc": "A but dazed, slowed reaction times, repetitive questions",
        "respiration": {
          "rate": "20",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "96",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "128/78",
        "sp02": "99% room air",
        "skin": {
          "color": "Pale",
          "condition": "Warm, moist"
        },
        "temperature": "37.1 °C",
        "pupils": {
          "equal": "Equal in size",
          "reactive": "Both reactive",
          "size": "4 mm both — pupils are normal here, which is worth recording; the deficit is in eye movement, not pupil response"
        },
        "blood_glucose": "5.2 mmol/L",
        "glasgow_coma": "E4 V5 M6 = 15 — a score of 14 can indicate minor damage, and 15 does not exclude a concussion"
      },
      "head_to_toe_exam": {
        "head": "Left periorbital swelling, bruising and subconjunctival hemorrhage. Globe slightly sunken. Numbness over the left infraorbital cheek and the left supraorbital brow. Copious clear discharge from the left nostril. Eye movements: cannot follow a finger upward on the left; horizontal movement intact. Diplopia on upward gaze. Pupils equal and reactive. No blood or clear fluid from the ears. Recheck level of responsiveness and pupils and note any change.",
        "neck": "No midline tenderness, no deformity; collar applied.",
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "No injury; movement and sensation normal; pedal pulses equal.",
        "arms": "No injury; grip equal and strong; radial pulses equal; capillary refill under 2 seconds.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport, supine, with spinal motion restriction. Report the upward-gaze paralysis, the numbness distribution, the nasal discharge and the concussion features. She must not return to play, regardless of how she feels later."
    },
    "expected_treatment": {
      "life_saving_intervention": "Maintain spinal motion restriction and transport her supine — the manual specifies a supine position for an orbit fracture. Place cold packs around the injured orbit to reduce the swelling, without putting any pressure on the fracture site; place a layer of gauze or cloth between the cold source and the skin. Do not press on the globe. Do not pack the nose or attempt to stop the discharge. If the eye needs covering, use a sterile eye dressing placed over the socket to protect it, without pressure. Dim the lights or shield her eyes; she is light-sensitive. Nothing by mouth — surgery is likely. Treat this as a concussion as well: she must cease all activity immediately, must not be left alone, must be monitored closely, and must be medically evaluated before any supervised return-to-school and then return-to-sport process. Recheck her level of responsiveness and pupils every 5 minutes; concussions are evolving injuries whose effects can intensify or change unexpectedly.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "head_spine",
      "condition": "Concussion",
      "title": "Cleared to keep playing, and shouldn't be",
      "patient": "15-year-old boy",
      "reference": "Ch. 12 — Concussion, Table 12–1 Signs and Symptoms of a Concussion",
      "overview": "A concussion with no loss of responsiveness, and a coach and player both pushing to return to play. Tests the four symptom domains, the rule that consciousness need not be lost, and the mandatory removal from activity.",
      "id": "head_spine.concussion"
    },
    "scen_survey": {
      "environment": "Soccer pitch sideline, overcast, cool. Parents and teammates gathered; the coach wants him back on.",
      "mechanisms_of_injury": "Head-to-head collision contesting a header. Impact to the head creating acceleration forces — a coup and likely contrecoup mechanism. Helmets not worn in this sport.",
      "casualty_count": "2 — the other player is also being assessed by a second responder. Do not forget him.",
      "assistance": "Second responder for the other player; transport for assessment; team staff to keep the coach away from the decision.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Teenage boy sitting on the bench, stunned and dazed, slow to answer, saying he is fine and wants to go back on. He did not lose consciousness."
    },
    "primary_survey": {
      "loc": "A — eyes open, oriented to person and place, but hazy on the score and unsure which half it is. Alert does not mean unaffected.",
      "c_spine": "Indicated. A severe blunt force to the head. He walked off the pitch, has no neck pain and no midline C-spine tenderness — but he cannot give a reliable account of the event, and the Canadian C-Spine Rule requires an alert patient who can. Apply manual stabilization and a collar, and explain why.",
      "airway": "Patent; full sentences, slightly slurred and slow.",
      "breathing": "18/min, regular, unlaboured, clear and equal.",
      "circulation": "Radial pulse 88, regular, full. Skin pale, warm and dry.",
      "name": "Nathan Okonjo.",
      "complaint": "Headache and 'not feeling right'.",
      "rapid_body_survey": {
        "head": "Tender swelling over the left frontal region. No laceration, no depression, no deformity. No blood or clear fluid from the ears, nose or mouth. Pupils equal and reactive.",
        "jaw": null,
        "neck_spine": "No midline tenderness, no deformity, no muscle spasm.",
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "99% on room air."
      },
      "expected_transport_decision": "Transport for assessment, or hand over to a parent with clear instructions to attend a physician as soon as possible. He is not rapid transport — no neurological deficit, no reduced level of responsiveness, Glasgow Coma Scale 15. But he is absolutely not going back onto the pitch. Escalate to rapid transport if his level of responsiveness drops, the pupils become unequal, he vomits repeatedly, the headache worsens sharply, or he seizes."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Work through the four domains. Thinking and remembering: confusion, foggy mindset, looks stunned and dazed, cannot recall the moment of impact, difficulty concentrating, slowed reaction times. Physical: headache and pressure in the head, neck ache, fatigue, dizziness, blurred vision and 'seeing stars' at the time, ringing in the ears, nausea, sensitivity to light and noise, not feeling 'right'. Emotional: irritable, unusually emotional, anxious — his mother says he is not himself. Sleep: not assessable yet; ask about it in the follow-up advice.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "One previous concussion two seasons ago — he is at increased risk of further concussions. Nothing else significant.",
        "last_intake": "Water and a banana at half-time about 25 minutes ago.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Head-to-head clash contesting a header about 8 minutes ago. He stayed on his feet and did not lose consciousness — make the point that a patient does not have to have lost consciousness to have a concussion.",
        "pain": {
          "onset": "Immediately at the collision, and worsening since",
          "provoke": "Bright light, noise, concentrating, bending over",
          "quality": "Pressing, band-like, with pressure behind the eyes",
          "region": "Left frontal region, spreading across the whole head; aching in the neck",
          "severity": "6/10 and rising from 3/10 at the time of injury — a worsening headache is significant",
          "time_duration": "About 8 minutes, progressive"
        }
      },
      "vitals": {
        "loc": "A; oriented to person and place, hazy on time and the game situation",
        "respiration": {
          "rate": "18",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "88",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "122/76",
        "sp02": "99% room air",
        "skin": {
          "color": "Pale",
          "condition": "Warm, dry"
        },
        "temperature": "36.9 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Both reactive",
          "size": "4 mm both"
        },
        "blood_glucose": "5.4 mmol/L",
        "glasgow_coma": "E4 V5 M6 = 15. A perfect score makes neurological damage unlikely but does not exclude a concussion — the symptom picture does the work here, not the number."
      },
      "head_to_toe_exam": {
        "head": "Tender swelling left frontal region. No depression, no deformity, no fluid from ears, nose or mouth. Pupils equal and reactive; recheck and note any change. No raccoon eyes, no Battle's sign.",
        "neck": "No midline tenderness, no deformity, no spasm; collar applied.",
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "No injury; movement and sensation normal; gait steady but he reports feeling unsteady; pedal pulses equal.",
        "arms": "No injury; grip equal and strong; sensation normal; radial pulses equal.",
        "back": null
      },
      "expected_transport_decision": "Transport for assessment, or release to a parent with explicit instructions for same-day physician review. Whichever you choose, document that he was removed from the activity and that the coach was told he cannot return."
    },
    "expected_treatment": {
      "life_saving_intervention": "No life-saving intervention required, but the management decision is the point. He must cease all activity immediately and must not be allowed to return to this game or practice — regardless of whether he has signs and symptoms, and regardless of what the coach or the player wants. Say it plainly and to the coach directly. He must not be left alone and must be monitored closely until he can be examined and evaluated by a physician. Maintain spinal motion restriction while his account is unreliable. Move him somewhere quiet and dim; he is light- and noise-sensitive. Nothing by mouth in case he vomits or needs assessment. Recheck level of responsiveness, pupils and the headache score every 5 minutes and document the trend — a worsening headache or a dropping level of responsiveness changes this to rapid transport. Explain to the parents that concussions are evolving injuries whose effects can intensify, dissipate or change unexpectedly over days and weeks, that he must complete a supervised return-to-school process before beginning return-to-sport, and that they should watch for changes in sleep, mood and concentration. Do not forget to confirm the other player has been assessed.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "head_spine",
      "condition": "Cerebral hematoma (epidural)",
      "title": "The lucid interval",
      "patient": "34-year-old woman",
      "reference": "Ch. 12 — Cerebral Hematoma, Epidural Hematoma, Injuries to the Brain; Ch. 5 — Glasgow Coma Scale",
      "overview": "The classic epidural hematoma course: brief loss of responsiveness, apparent recovery, then rapid decline. Tests the recognition that a patient who 'seems fine' after a head injury can be bleeding into the skull, and the Glasgow Coma Scale as the tool for tracking it.",
      "id": "head_spine.cerebral_hematoma"
    },
    "scen_survey": {
      "environment": "Pub car park, evening, tarmac. Bystanders present. Reasonable lighting. Ask bystanders exactly what they saw.",
      "mechanisms_of_injury": "A relatively low-velocity blow to the left side of the head — she was struck by a swinging car door and fell, striking her head on the tarmac. A low-velocity blow is the typical mechanism for an epidural hematoma.",
      "casualty_count": "1",
      "assistance": "EMS transport, rapid; hospital pre-notification for neurosurgical assessment.",
      "ppe": "Gloves, gown and eye protection; suction ready.",
      "impressions": "Adult woman sitting on the kerb, initially talking and apparently well, then over the next few minutes becoming drowsy, then unresponsive. The change is the whole scenario — do not let the learner leave before it happens."
    },
    "primary_survey": {
      "loc": "Staged, and the sequence matters. Bystanders report she was unresponsive for about 30 seconds immediately after the fall. On your arrival she is A and oriented — the lucid interval. Over the following 8 to 10 minutes she declines to V, then P, then U.",
      "c_spine": "Indicated. A blow to the head with a fall to tarmac, plus a witnessed brief loss of responsiveness. Manual in-line stabilization from first contact and a collar; the Canadian C-Spine Rule cannot be applied to a patient who lost responsiveness.",
      "airway": "Patent while she is alert. As her level of responsiveness falls: snoring, then vomit in the mouth. Jaw thrust, suction, and an OPA once she tolerates it. She gags on it early and accepts it later — reattempt as her responsiveness declines.",
      "breathing": "16/min and regular initially. Later 10/min, irregular and often deep — a change in respiration is one of Cushing's triad.",
      "circulation": "Radial pulse 84 and regular initially; later 48, regular and full. Skin pale, warm and dry. The falling pulse with a rising blood pressure is Cushing's response.",
      "name": "Siobhan Fitzgerald.",
      "complaint": "Initially: hit her head and has a headache. Later: unresponsiveness.",
      "rapid_body_survey": {
        "head": "Tender swelling and a 3 cm laceration over the left temporal region, bleeding lightly. No depression, no deformity, no fluid from the ears or nose. Pupils equal and reactive at first; the left pupil then becomes sluggish, then dilated and non-reactive.",
        "jaw": "Intact initially; slack as her responsiveness falls.",
        "neck_spine": "No midline tenderness while she can report; no deformity.",
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": "Assessed during a coordinated roll onto a board: no deformity, no wounds, no tenderness."
      },
      "shock_check": {
        "spo2": "97% on room air initially; falls to 89% as her breathing becomes irregular; 97% with airway management and high-concentration oxygen."
      },
      "expected_transport_decision": "Rapid transport category from the outset — a witnessed decreased level of responsiveness after a head injury is enough on its own. Do not wait for the decline to confirm the decision; the whole point is that the lucid interval is a trap. Once she declines, she also has neurological deficits and a Glasgow Coma Scale below 13."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "While lucid: headache over the left temple, mild nausea, no memory of the moment of impact, embarrassed and keen to go home. Then: worsening headache, vomiting, drowsiness, confusion, weakness of the right arm and leg, then unresponsiveness. Interview her fast, while you still can — the history may be unobtainable in five minutes.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Two glasses of wine over the evening — record it, but do not let it explain away the decline.",
        "last_intake": "Bar meal about 2 hours ago; two glasses of wine. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Struck on the left side of the head by a car door swinging open, fell sideways onto tarmac. Bystanders confirm she was out for roughly 30 seconds, then sat up and talked. Establish and record the time of injury.",
        "pain": {
          "onset": "At the impact, about 4 minutes before your arrival",
          "provoke": "Nothing relieves it; it worsens steadily on its own",
          "quality": "Pressing and pounding, becoming severe",
          "region": "Left temple, spreading across the whole head",
          "severity": "4/10 on arrival, 9/10 within six minutes — the trajectory is the finding",
          "time_duration": "About 10 minutes, rapidly worsening"
        }
      },
      "vitals": {
        "loc": "A and oriented on arrival; V at about 4 minutes; P at about 7 minutes; U at about 10 minutes. Record the times of each change.",
        "respiration": {
          "rate": "16 initially, 10 later",
          "rhythm": "Regular initially, then irregular",
          "quality": "Unlaboured initially; later deep and noisy with secretions; clear and equal air entry"
        },
        "pulse": {
          "rate": "84 initially, 48 later",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "124/78 initially; 188/82 later — rising, with a widening gap",
        "sp02": "97% initially; 89% as respiration deteriorates; 97% with airway management and oxygen",
        "skin": {
          "color": "Pale",
          "condition": "Warm, dry"
        },
        "temperature": "36.8 °C",
        "pupils": {
          "equal": "Equal initially; then unequal — left 7 mm, right 3 mm",
          "reactive": "Both reactive initially; left becomes sluggish, then non-reactive",
          "size": "4 mm both initially; left 7 mm, right 3 mm later"
        },
        "blood_glucose": "5.6 mmol/L — check it; it rules out hypoglycemia as the cause of the decline",
        "glasgow_coma": "E4 V5 M6 = 15 on arrival; E3 V4 M5 = 12 at 5 minutes; E2 V2 M4 = 8 at 8 minutes. Score it repeatedly and report the components and the times, not just the final number."
      },
      "head_to_toe_exam": {
        "head": "Left temporal swelling and a 3 cm laceration, bleeding lightly and controlled with a dressing. No depression, no deformity, no raccoon eyes, no Battle's sign, no fluid from ears or nose. Left pupil progressively dilates and becomes non-reactive.",
        "neck": "No deformity; collar applied.",
        "chest": "No injury; equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": "Soft",
          "top_right": "Soft",
          "bottom_left": "Soft",
          "bottom_right": "Soft"
        },
        "pelvis": "Stable; no crepitus.",
        "legs": "Right leg flaccid, left withdraws to pain. Pedal pulses equal.",
        "arms": "Right arm becomes flaccid with no withdrawal to pain while the left withdraws — motor impairment on the side opposite the injury, which fits an epidural hematoma on the left. Radial pulses equal.",
        "back": "No injury; no deformity."
      },
      "expected_transport_decision": "Rapid transport, immediately, and do not delay for anything. Report the mechanism, the initial 30-second loss of responsiveness, the lucid interval, and the serial Glasgow Coma Scale scores with times. Those serial scores are the single most useful thing you can hand over."
    },
    "expected_treatment": {
      "life_saving_intervention": "Recognize the pattern and act on it before the decline: brief loss of responsiveness, regained responsiveness, then a rapid decline is the classic epidural hematoma course, and an altered level of responsiveness is the first and most important sign of a serious head injury. Maintain spinal motion restriction from first contact and immobilize on a rigid device. Manage the airway as her responsiveness falls: jaw thrust to spare the neck, suction the vomit, reattempt an OPA as the gag reflex fades — a small change in responsiveness may let you insert it. Do not use an NPA if a skull fracture is suspected; here there is no evidence of one, but there is facial proximity, so prefer the OPA. High-concentration oxygen; her rate falls to 10, so be prepared to assist ventilations. Dress the scalp laceration; direct pressure is acceptable here because there is no depression or suspected fracture, but keep it light. Score the Glasgow Coma Scale on arrival and every 5 minutes, recording E, V and M separately with the time. Nothing by mouth. Do not accept a refusal of transport during the lucid interval — this is exactly the patient who will tell you she is fine.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "chronic_acute_illness",
      "condition": "Syncope",
      "title": "Down at the blood drive",
      "patient": "23-year-old woman",
      "reference": "Ch. 13 — Altered Mental Status, Syncope; Ch. 12 — Spinal MOI",
      "overview": "A simple faint that resolves on its own — but she struck her head on the way down. Tests the discipline of assessing a brief loss of responsiveness thoroughly rather than dismissing it, and of treating the fall separately from the faint.",
      "id": "chronic_acute_illness.syncope"
    },
    "scen_survey": {
      "environment": "Community centre blood-donation clinic, warm and crowded. Tiled floor. Ask staff to clear space.",
      "mechanisms_of_injury": "Fainted from standing and struck the back of her head on the tile floor. Standing height fall onto a hard surface — a mechanism worth taking seriously.",
      "casualty_count": "1",
      "assistance": "Clinic nurse for her donation record; EMS transport.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Young woman supine on the floor beside a donor chair, pale and sweaty, just coming round, embarrassed and trying to sit up straight away — stop her."
    },
    "primary_survey": {
      "loc": "P on your arrival, improving to V then A within about 60 seconds as she is left supine. She has no memory of falling.",
      "c_spine": "Indicated. She fell from standing onto tile, was momentarily unresponsive, and cannot recall the event. Take spinal motion restriction precautions and hold manual in-line stabilization until she can be properly assessed. Note that the Canadian C-Spine Rule cannot be applied while her level of responsiveness is reduced.",
      "airway": "Patent; she is speaking within a minute.",
      "breathing": "22/min initially, settling to 16. Unlaboured, clear and equal.",
      "circulation": "Radial pulse 58 initially, rising to 76. Regular, full. Skin pale, cool and moist.",
      "name": "Chloe Bergeron.",
      "complaint": "Fainted; now has a headache at the back of her head.",
      "rapid_body_survey": {
        "head": "Tender lump forming on the occiput. No bleeding, no depression, no fluid from the ears, nose or mouth.",
        "jaw": null,
        "neck_spine": "No midline tenderness once she is fully alert, no deformity, no step.",
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "98% on room air."
      },
      "expected_transport_decision": "Rapid transport category on arrival — she had a decreased level of responsiveness. Once she is fully alert with a normal neurological examination, this may be downgraded to transport for assessment, but the head strike and the unexplained faint both need a physician. State the reasoning for whichever you choose."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Felt hot, light-headed and nauseated, saw grey at the edges, then nothing. Now: headache at the back of the head, nausea, tingling in the fingers, embarrassed. No chest pain, no palpitations, no shortness of breath.",
        "allergies": "None known.",
        "medications": "Combined oral contraceptive pill.",
        "past_medical_history": "Two previous faints, both after standing for a long time in heat. No heart disease, no diabetes, no seizure history.",
        "last_intake": "Coffee at 07:00 and nothing since; it is now 14:20. She skipped lunch before donating. Give her nothing by mouth for now.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Donated a unit of blood, stood up from the chair after about two minutes and walked three steps before going down. Hot, crowded room.",
        "pain": {
          "onset": "Immediately after the fall",
          "provoke": "Touching the lump; moving her head",
          "quality": "Dull, throbbing",
          "region": "Back of the head, over the occiput; no radiation, no neck pain",
          "severity": "3/10",
          "time_duration": "About 5 minutes"
        }
      },
      "vitals": {
        "loc": "A and oriented once recovered; no memory of the event itself",
        "respiration": {
          "rate": "22 falling to 16",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "58 rising to 76",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "94/58 lying; do not stand her up to repeat it",
        "sp02": "98% room air",
        "skin": {
          "color": "Pale, ashen",
          "condition": "Cool, moist"
        },
        "temperature": "36.7 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "3.9 mmol/L — slightly low; she has not eaten since 07:00. Report it.",
        "glasgow_coma": "E1 V2 M4 = 7 on arrival; E4 V5 M6 = 15 within about two minutes"
      },
      "head_to_toe_exam": {
        "head": "3 cm tender hematoma over the occiput. Pupils equal and reactive, no change on recheck. No fluid from ears, nose or mouth.",
        "neck": "No midline tenderness, no deformity, no muscle spasm.",
        "chest": null,
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Full range of motion, normal movement and sensation both sides, pedal pulses equal.",
        "arms": "Full range of motion, normal grip and sensation both sides, capillary refill under 2 seconds.",
        "back": "No spinal tenderness the full length; no deformity."
      },
      "expected_transport_decision": "Transport for physician assessment. Any altered mental status can indicate a serious underlying condition, and she struck her head. Do not release her on scene just because she now feels fine."
    },
    "expected_treatment": {
      "life_saving_intervention": "Keep her supine — do not let her sit up. Manage the airway and have suction ready; she is nauseated. Loosen restrictive clothing. Maintain manual in-line stabilization until the spine can be cleared. Nothing to eat or drink, because of the vomiting risk. Gather the history quickly while she is lucid, including from the clinic staff, in case she deteriorates. Recheck her level of responsiveness and pupils on every reassessment — a syncope that does not resolve, or that resolves and then declines again, is a different and far more serious problem. Cold pack to the occipital lump, wrapped, without pressure.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "chronic_acute_illness",
      "condition": "Diabetic emergency",
      "title": "Combative in the parking lot",
      "patient": "31-year-old man with type 1 diabetes",
      "reference": "Ch. 13 — Diabetic Emergencies, Glucose Gel, Glucagon; Ch. 5 — Blood Glucose Level",
      "overview": "Hypoglycemia presenting as aggression and confusion — easily mistaken for intoxication. Tests blood glucose measurement, the principle that the treatment is the same for high and low glucose, and the airway rules that govern oral glucose versus glucose gel.",
      "id": "chronic_acute_illness.diabetic"
    },
    "scen_survey": {
      "environment": "Supermarket parking lot, daylight, moving vehicles nearby. Position the ambulance to shield the scene.",
      "mechanisms_of_injury": "No trauma reported, but he is unsteady and may have fallen — look for evidence and ask. Bystanders assumed he was drunk.",
      "casualty_count": "1",
      "assistance": "EMS transport; law enforcement standing by if he becomes a danger to himself or others.",
      "ppe": "Gloves and eye protection; suction ready if glucose gel is used.",
      "impressions": "Young man staggering between cars, sweating heavily, slurring, pushing away the people trying to help. An insulin pump is clipped to his waistband — spot it during the general impression."
    },
    "primary_survey": {
      "loc": "A but confused, aggressive and uncooperative. He can follow a simple instruction if you are calm and give him time. He is not intoxicated.",
      "c_spine": "Ask about and look for a fall. No witnessed fall and no injuries found, so not indicated — but say that you checked.",
      "airway": "Patent; he is speaking, slurred. Confirm he can swallow before offering anything by mouth.",
      "breathing": "26/min, regular, unlaboured, clear and equal.",
      "circulation": "Radial pulse 122, regular, full. Skin pale, cold and drenched with sweat.",
      "name": "Jamal Osborne — from the medical identification bracelet, which reads 'Type 1 diabetes'.",
      "complaint": "He cannot give a coherent complaint. Record it as altered mental status; the bracelet and the pump give you the direction.",
      "rapid_body_survey": {
        "head": "No injury, no bruising, no fluid from ears or nose.",
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": "Insulin pump infusion set on the left abdomen.",
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": "Medical identification bracelet on the left wrist. Fingertip callouses from glucometer testing.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "97% on room air."
      },
      "expected_transport_decision": "Rapid transport category — altered level of responsiveness. If he responds fully to glucose this may be reconsidered, but he still needs assessment; a second dose being required puts him firmly back in the rapid transport category."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Once he improves: shaky, sweaty, confused, ravenous, headache, palpitations. He has no memory of the aggression and is mortified.",
        "allergies": "None known. Ask about pork and beef sensitivity before considering glucagon — he has none.",
        "medications": "Insulin via pump, continuous. He increased the basal rate this morning before a run and did not eat afterwards.",
        "past_medical_history": "Type 1 diabetes since age 9. Three previous hypoglycemic episodes needing help. Usual reading is 5 to 8 mmol/L.",
        "last_intake": "Coffee at 06:30. Nothing since. It is now 11:15.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Increased his insulin, ran 10 km, skipped breakfast, then went shopping.",
        "pain": {
          "onset": null,
          "provoke": null,
          "quality": null,
          "region": null,
          "severity": null,
          "time_duration": null
        }
      },
      "vitals": {
        "loc": "A but confused and combative; A and oriented about 10 minutes after glucose",
        "respiration": {
          "rate": "26 settling to 16",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "122 settling to 84",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "138/86",
        "sp02": "97% room air",
        "skin": {
          "color": "Pale",
          "condition": "Cold, drenched with sweat"
        },
        "temperature": "36.4 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "6 mm — dilated"
        },
        "blood_glucose": "2.1 mmol/L on the first reading. Normal is 4 to 8 mmol/L; below 4 is hypoglycemia. Recheck after treatment: 5.4 mmol/L at 10 minutes.",
        "glasgow_coma": "E4 V4 M6 = 14, rising to 15"
      },
      "head_to_toe_exam": {
        "head": "No injury.",
        "neck": null,
        "chest": null,
        "abdomen": {
          "top_left": "Insulin pump infusion set in place, site clean, no redness.",
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "No injuries; gait steady once recovered.",
        "arms": "Medical identification bracelet; no injuries; grip equal and strong once recovered.",
        "back": null
      },
      "expected_transport_decision": "If he responds fully and can eat a complex carbohydrate, he may be transported for assessment rather than rapidly. If signs and symptoms persist 5 to 10 minutes after the first dose of glucose, he goes into the rapid transport category, gets a second dose and supplemental oxygen."
    },
    "expected_treatment": {
      "life_saving_intervention": "Approach calmly, one responder speaking, and give him space — his aggression is a symptom, not a choice. Test the blood glucose with a glucometer; wear PPE, have a sharps container ready, prick the side of the fingertip. Note that it is not necessary to distinguish hyperglycemia from hypoglycemia — the treatment is the same and giving glucose to a hyperglycemic patient causes no additional harm. Never give insulin. Recheck the glucose and the level of responsiveness 5 to 10 minutes after treatment. Once he is fully alert, additional sugar and complex carbohydrates are appropriate. Communicate at transfer of care exactly what glucose he received and when.",
      "medication": {
        "indications": "Suspected diabetic emergency: known diabetic with altered level of responsiveness, tachycardia, tachypnea and a blood glucose of 2.1 mmol/L. He can follow directions and swallow safely, so oral glucose is indicated.",
        "contraindications": "Oral glucose requires a patient who can follow directions and swallow safely — reassess this before every dose. If he could not protect his own airway, glucose gel placed inside the lower cheek in the semi-prone position, with suction ready, would be the option instead. Glucagon, if it were within scope, is contraindicated in hypersensitivity to pork or beef protein and is only for an adult with a reading below 4 mmol/L who cannot protect the airway. Never give insulin under any circumstances.",
        "five_rights": {
          "person": "Jamal Osborne, identified by his medical bracelet and confirmed once he is lucid.",
          "medication": "Oral glucose tablets. Read the label; check the expiry date. Not insulin.",
          "dosage": "2 to 5 glucose tablets, chewed. A second dose if signs and symptoms persist 5 to 10 minutes later.",
          "route": "Oral — chewed. He must be responsive and able to swallow safely.",
          "time": "Immediately after the glucometer reading. Recheck at 5 to 10 minutes.",
          "documentation": "Time, dose, route, effect; the glucose reading before and after; and hand over exactly how much glucose was given."
        }
      }
    }
  },
  {
    "meta": {
      "category": "chronic_acute_illness",
      "condition": "Generalized tonic-clonic seizure / status epilepticus",
      "title": "First one, and it will not stop",
      "patient": "28-year-old pregnant woman",
      "reference": "Ch. 13 — Seizures, Types of Seizures, Status Epilepticus, Transport Decision for Seizures",
      "overview": "A first-ever generalized seizure that runs past five minutes in a pregnant patient — three separate rapid-transport triggers at once. Tests seizure management (protect and manage the airway, nothing in the mouth), recognition of status epilepticus, and postictal care.",
      "id": "chronic_acute_illness.seizures"
    },
    "scen_survey": {
      "environment": "Office meeting room; chairs, a table corner and a floor-standing lamp close to the patient — move them first.",
      "mechanisms_of_injury": "She slid from her chair to the carpet at the onset. No significant fall and no head strike witnessed, but check for injuries sustained during the seizure.",
      "casualty_count": "1",
      "assistance": "EMS transport immediately. Ask a colleague to keep bystanders well back for her privacy and to meet the crew at the entrance.",
      "ppe": "Gloves and eye protection; suction on standby.",
      "impressions": "Visibly pregnant woman on the floor, rigid then convulsing, eyes rolled upward, drooling, breathing irregular. Colleagues say it started about four minutes ago and she has never had a seizure before."
    },
    "primary_survey": {
      "loc": "U during the seizure. Afterwards P, then V, then A over about 15 minutes as she moves through the postictal phase — confused, drowsy and wanting to sleep.",
      "c_spine": "Not indicated — she slid from a chair to a carpeted floor with no head strike and no injuries found. Say that you checked, since a seizure resulting from trauma would change both this answer and the transport decision.",
      "airway": "At risk throughout. Saliva and a little blood from a bitten tongue. Position her on her side so it drains. Put nothing in her mouth and never put your fingers in the mouth of an actively seizing patient.",
      "breathing": "Irregular during the seizure with brief pauses; 10/min and shallow immediately afterwards, settling to 18 and regular in the postictal phase.",
      "circulation": "Radial pulse 132, regular, full. Skin flushed then pale, warm and moist.",
      "name": "Rebecca Ilesanmi (from a colleague).",
      "complaint": "Seizure / unresponsiveness.",
      "rapid_body_survey": {
        "head": "No injury from the fall. Blood at the corner of the mouth from a bitten tongue.",
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": "Gravid abdomen, approximately 30 weeks by her colleague's account. No trauma.",
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": "Incontinent of urine at the end of the clonic phase — expected; manage her dignity.",
        "arms_humerus": null,
        "arms_rest": "No medical identification bracelet.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "84% during the seizure (severe hypoxia); 96% on a non-rebreather within a few minutes of it ending."
      },
      "expected_transport_decision": "Rapid transport category, on multiple grounds: an ongoing seizure, a first seizure, a seizure lasting longer than 5 minutes (status epilepticus), and a pregnant patient. Any one of these alone would be enough."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "From colleagues: she complained of a headache and blurred vision all morning and said her hands and face felt puffy. She went quiet, stared, then went rigid and began convulsing. From her, postictally: confused, headache, sore tongue, wants to sleep, no memory of the event.",
        "allergies": "None known.",
        "medications": "Prenatal vitamins only. No anticonvulsants.",
        "past_medical_history": "First pregnancy, about 30 weeks. No epilepsy, no previous seizures, no diabetes. Colleagues recall her mentioning that her blood pressure has been 'up' at recent appointments.",
        "last_intake": "Coffee and a muffin about 2 hours ago. Nothing by mouth from now on.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Headache and visual disturbance through the morning; seizure began without any warning aura she can recall.",
        "pain": {
          "onset": "Headache since early morning; tongue pain since the seizure",
          "provoke": "Bright light worsens the headache",
          "quality": "Pounding headache; sharp tongue pain",
          "region": "Frontal headache; left side of the tongue",
          "severity": "Headache 7/10 postictally",
          "time_duration": "Headache about 5 hours; tongue since the seizure"
        }
      },
      "vitals": {
        "loc": "U during the seizure; P then V then A over about 15 minutes postictally, confused throughout",
        "respiration": {
          "rate": "Irregular with pauses during the seizure; 10 immediately after, settling to 18",
          "rhythm": "Irregular during and immediately after; regular later",
          "quality": "Shallow and noisy with secretions; improves once positioned laterally and suctioned"
        },
        "pulse": {
          "rate": "132 settling to 96",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "172/108 — markedly raised; report it explicitly",
        "sp02": "84% during; 96% on a non-rebreather afterwards",
        "skin": {
          "color": "Flushed during, pale afterwards, cyanotic lips during",
          "condition": "Warm, moist"
        },
        "temperature": "37.1 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Sluggish postictally",
          "size": "5 mm"
        },
        "blood_glucose": "5.2 mmol/L — check it; hypoglycemia is a treatable cause of seizure",
        "glasgow_coma": "E1 V1 M2 = 4 during; E3 V4 M6 = 13 postictally, rising to 15"
      },
      "head_to_toe_exam": {
        "head": "Bitten left lateral tongue, bleeding stopped. No skull deformity, no bruising, no fluid from ears or nose.",
        "neck": "No tenderness, no deformity.",
        "chest": "Equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": "Gravid, firm — expected in pregnancy",
          "top_right": "Gravid, firm; tender under the right ribs",
          "bottom_left": "Gravid, firm",
          "bottom_right": "Gravid, firm"
        },
        "pelvis": null,
        "legs": "Pitting edema to mid-shin bilaterally. No injury; movement and sensation intact.",
        "arms": "Puffy hands and fingers; rings tight. No injury; grip equal once recovered.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport maintained. Report the pregnancy, the gestation, the blood pressure, the headache and visual disturbance, the swelling, and the exact duration of the seizure."
    },
    "expected_treatment": {
      "life_saving_intervention": "Two priorities during the seizure: prevent injury and manage the airway. Move the chairs, table and lamp away from her; do not restrain her. Put nothing whatsoever in her mouth. Position her on her side if you can, so saliva, blood and any vomit drain away. Time the seizure and say the duration aloud — past five minutes it is status epilepticus and a serious medical emergency that can be fatal. Once it passes, roll her onto her side and suction the airway. High-concentration oxygen. Check for injuries sustained during the seizure. Nothing by mouth. Keep bystanders well back and preserve her dignity — the incontinence is expected and she will be embarrassed. Stay with her until she is fully responsive, offer comfort and reassurance, and explain calmly what happened. Be ready for a second seizure.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "poisoning",
      "condition": "Carbon monoxide poisoning",
      "title": "The whole house has the flu",
      "patient": "45-year-old woman (three patients on scene)",
      "reference": "Ch. 14 — Inhaled Poisons, Carbon Monoxide Poisoning; Ch. 5 — Pulse Oximetry Limitations",
      "overview": "Chronic then acute CO poisoning from a leaking furnace. Tests scene safety for an inhaled poison, the multiple-patients-same-symptoms clue, and the critical rule that pulse oximetry is unreliable in CO poisoning — give high-concentration oxygen regardless of the reading.",
      "id": "poisoning.carbon_monoxide"
    },
    "scen_survey": {
      "environment": "Two-storey house, cold January morning, furnace running, all windows closed. The scene is not safe to enter without qualified personnel and equipment — request them, and get everyone out into fresh air before assessing anyone. A CO alarm is chirping in the basement.",
      "mechanisms_of_injury": "Inhaled poison. Cracked furnace exhaust venting carbon monoxide into the house over several weeks, acutely worse overnight.",
      "casualty_count": "3 — the patient, her husband and their 12-year-old son, all with headaches and nausea. The fact that everyone in the dwelling has the same 'flu' in cold weather is the diagnostic clue. Consider whether this is a multiple-casualty incident for your resources.",
      "assistance": "Fire service for atmospheric monitoring and ventilation; gas utility; additional ambulances for the other two patients.",
      "ppe": "Gloves and eye protection; do not enter without appropriate respiratory protection — leave that to qualified personnel.",
      "impressions": "Adult woman brought out to the driveway by firefighters: unsteady, confused, vomiting, complaining of a splitting headache. Skin has an unusual reddish tone to the lips and cheeks."
    },
    "primary_survey": {
      "loc": "A but confused and disoriented to time; slow to answer.",
      "c_spine": "Not indicated — no trauma; she was walked out with support.",
      "airway": "Patent; speaking, though slowly.",
      "breathing": "26/min, regular, unlaboured. Clear and equal air entry.",
      "circulation": "Radial pulse 118, irregular, full. Skin reddish at the lips and cheeks, warm and dry.",
      "name": "Karen Ashworth.",
      "complaint": "Worst headache of her life, dizzy, keeps vomiting.",
      "rapid_body_survey": {
        "head": "No injury. Reddish colour to the lips and face.",
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "Reads 98% on room air — and it is wrong. Carbon monoxide binds to hemoglobin more readily than oxygen and saturates it, so the oximeter cannot distinguish it. Continue high-concentration oxygen regardless of the reading. Say this aloud; it is the whole point of the scenario."
      },
      "expected_transport_decision": "Rapid transport category — inhaled poisoning with a decreased level of responsiveness. Any patient with suspected inhaled poisoning is in the rapid transport category because respiration is often impaired."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Severe headache, dizziness, weakness, nausea and vomiting, chest pain, confusion, blurred vision, ringing ears. Says the whole family has had headaches and felt 'fluish' for about three weeks, and that everyone feels better at work and school and worse at home.",
        "allergies": "None known.",
        "medications": "Levothyroxine.",
        "past_medical_history": "Hypothyroidism. Non-smoker.",
        "last_intake": "Tea about an hour ago; vomited it. Nothing by mouth from now on.",
        "last_bowel_movement": "Yesterday, normal.",
        "events_preceeding": "Furnace serviced badly six weeks ago. Symptoms in all three occupants for about three weeks, much worse this morning. CO alarm began chirping overnight and was ignored.",
        "pain": {
          "onset": "Gradual over weeks; acutely severe on waking this morning",
          "provoke": "Being in the house makes it worse; fresh air is already helping",
          "quality": "Pounding, band-like",
          "region": "Whole head, worst at the temples; also central chest tightness",
          "severity": "9/10 headache",
          "time_duration": "Weeks intermittently; constant and severe for about 4 hours"
        }
      },
      "vitals": {
        "loc": "A but disoriented to time; improves slowly on oxygen",
        "respiration": {
          "rate": "26",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "118",
          "rhythm": "Irregular",
          "quality": "Full"
        },
        "blood_pressure": "96/58",
        "sp02": "98% on room air — unreliable; disregard it and treat the patient",
        "skin": {
          "color": "Reddish lips and cheeks",
          "condition": "Warm, dry"
        },
        "temperature": "36.8 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "5.5 mmol/L",
        "glasgow_coma": "E4 V4 M6 = 14"
      },
      "head_to_toe_exam": {
        "head": "No injury. Reddish discolouration of the lips and cheeks.",
        "neck": null,
        "chest": "Equal expansion; clear and equal air entry, top and bottom, both sides.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Rapid transport for all three occupants. Report the shared symptoms and the source so the receiving facility and the utility both act."
    },
    "expected_treatment": {
      "life_saving_intervention": "Do not enter the house without qualified personnel and equipment — an emergency with one patient becomes an emergency with two if you are overcome. Get every occupant into fresh air. Continue high-concentration oxygen by non-rebreather at 10–15 LPM to all suspected CO patients regardless of the oximetry reading — this is an explicit exception to the usual titrate-to-SpO2 rule. Contact the Poison Control Centre and follow their direction. Nothing by mouth unless Poison Control directs otherwise. Keep the vomitus sample if the poison were unknown; here it is known. Monitor for respiratory arrest and seizures. Assess and treat the other two occupants; do not let the sickest patient absorb all your attention. Ensure the gas utility and fire service secure the source before anyone re-enters.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "poisoning",
      "condition": "Insect sting (injected poison)",
      "title": "Stung clearing the shed",
      "patient": "38-year-old man",
      "reference": "Ch. 14 — Injected Poisons, Insects; Ch. 6 — Anaphylaxis",
      "overview": "A local reaction to a honeybee sting with the stinger and venom sac still embedded. Tests correct stinger removal — scrape, never squeeze with forceps — and the ongoing monitoring for anaphylaxis that must follow every sting.",
      "id": "poisoning.insect"
    },
    "scen_survey": {
      "environment": "Backyard beside a garden shed; an active bee colony under the eaves. Move well away before treating.",
      "mechanisms_of_injury": "Honeybee sting to the right forearm approximately 5 minutes ago. Single sting.",
      "casualty_count": "1",
      "assistance": "Not required at present; EMS if any signs of a systemic reaction develop.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Adult man standing, holding his right forearm, uncomfortable but not distressed. Breathing normally, speaking in full sentences."
    },
    "primary_survey": {
      "loc": "A, oriented.",
      "c_spine": "Not indicated — no trauma, no fall.",
      "airway": "Patent; full sentences. Reassess repeatedly — airway swelling is the thing that would change this call.",
      "breathing": "18/min, regular, unlaboured, clear and equal. No wheeze.",
      "circulation": "Radial pulse 88, regular, full. Skin normal colour, warm and dry. No hives.",
      "name": "Peter Vasilenko.",
      "complaint": "Bee sting on the right forearm; burning pain and swelling.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": "Right forearm: a 2 mm stinger with the venom sac still attached, embedded in the skin. A 4 cm area of redness and local swelling around it. Radial pulse present, capillary refill under 2 seconds, sensation and movement normal.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "99% on room air."
      },
      "expected_transport_decision": "Not rapid transport — this is a local reaction, not anaphylaxis. State the negative findings that support that: no airway swelling, no hoarseness, no wheeze, no hives away from the sting, no hypotension, no dizziness. Escalate immediately to rapid transport if any of those appear."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Sharp burning pain at the sting site, local swelling and redness, mild itching around the site only. No throat tightness, no widespread itching, no rash elsewhere, no dizziness, no nausea, no difficulty breathing — ask each of these directly and record the negatives.",
        "allergies": "No known allergy to stings. He has been stung twice before with only local reactions. Note the manual's warning: a person may react mildly on one occasion and anaphylactically on another.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Tetanus booster 3 years ago.",
        "last_intake": "Lunch about an hour ago.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Moving boxes in the shed and disturbed a colony under the eaves.",
        "pain": {
          "onset": "Sudden, at the sting, about 5 minutes ago",
          "provoke": "Touching or moving the forearm",
          "quality": "Sharp burning, now a hot ache",
          "region": "Right forearm, localized around the sting site; no radiation",
          "severity": "5/10, easing to 2/10 after the stinger is removed and a cold pack applied",
          "time_duration": "About 5 minutes"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "18",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal, no wheeze"
        },
        "pulse": {
          "rate": "88",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "128/78",
        "sp02": "99% room air",
        "skin": {
          "color": "Normal except locally around the sting",
          "condition": "Warm, dry"
        },
        "temperature": "36.9 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "5.4 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "No facial or lip swelling — check specifically and record the negative.",
        "neck": "No swelling, voice normal, no hoarseness.",
        "chest": "Equal expansion; clear and equal air entry; no wheeze.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": null,
        "arms": "Right forearm sting site: stinger removed by scraping, local swelling and erythema about 5 cm across, warm. No red streaking towards the heart. Radial pulses equal, capillary refill under 2 seconds both sides, sensation and range of motion normal.",
        "back": null
      },
      "expected_transport_decision": "Release with advice, or transport for assessment if he prefers. He must be monitored for a delayed reaction — anaphylaxis usually begins within seconds to minutes but can occur 30 minutes or more after exposure. Advise him to watch for infection at the site."
    },
    "expected_treatment": {
      "life_saving_intervention": "Move him well away from the colony first. Examine the site and find the embedded stinger. Scrape it away from the skin with the edge of a plastic card — a driver's licence or credit card. Do not remove it with forceps or tweezers: squeezing the attached venom sac injects more toxin. Wash the site with water and cover it with a dressing. Apply a cold pack wrapped in a thin dry towel to reduce pain and swelling. Then keep monitoring: reassess airway, breathing, skin and blood pressure for signs of an allergic reaction, and be prepared to provide care for anaphylaxis, including epinephrine, if any develop.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "poisoning",
      "condition": "Opioid overdose",
      "title": "Behind the loading bay",
      "patient": "24-year-old man",
      "reference": "Ch. 14 — Opioid Overdose and Naloxone, Depressants; Ch. 6 — Assisted Ventilation",
      "overview": "Opioid overdose in respiratory arrest. Tests recognition of the classic triad (reduced responsiveness, pinpoint pupils, absent respiration), the priority of ventilation over everything else, needle-stick scene safety, and naloxone administration.",
      "id": "poisoning.substance_abuse.opiode"
    },
    "scen_survey": {
      "environment": "Alley behind a loading bay, dusk, cold and damp. Used syringes on the ground beside him — do not put your hands anywhere you cannot see. Ensure a sharps container is available.",
      "mechanisms_of_injury": "Injected poison — suspected opioid overdose. Drug paraphernalia at the scene: syringes, a spoon, a lighter.",
      "casualty_count": "1 — but check the alley properly for a second person; overdoses often happen in company.",
      "assistance": "EMS transport; law enforcement for scene security. Second responder for BVM ventilation.",
      "ppe": "Gloves, eye protection and a gown; take particular care with sharps. Suction on standby.",
      "impressions": "Young man slumped against a wall, blue-grey, not moving, occasional snoring gurgle. This is respiratory arrest — recognize it immediately."
    },
    "primary_survey": {
      "loc": "U — no response to voice or to a pinch on the inside of the arm.",
      "c_spine": "Ask how he got into this position. He slid down a wall; no fall from height, no evidence of trauma. Not indicated — but check the head and neck and say so.",
      "airway": "Compromised. Snoring from a relaxed tongue plus a small amount of vomit at the corner of the mouth. Clears with a head-tilt/chin-lift and suction; he accepts an OPA without gagging.",
      "breathing": "4 breaths per minute, shallow, with gurgling and snoring sounds — effectively absent. Treat as respiratory arrest and ventilate.",
      "circulation": "Carotid pulse present, 48, regular, weak. Radial barely palpable. Skin cold, pale, cyanotic at the nail beds and lips.",
      "name": "Unknown — no identification. Record as an unidentified male, approximately 24 years old.",
      "complaint": "Unresponsiveness.",
      "rapid_body_survey": {
        "head": "No injury. Vomit at the mouth. Pupils pinpoint.",
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": "Fresh injection site in the left antecubital fossa; older track marks along both forearms.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "76% on room air (severe hypoxia); rises to 94% with assisted ventilations and oxygen."
      },
      "expected_transport_decision": "Rapid transport category — unresponsiveness with absent effective respiration. Decide it the moment you find the breathing."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "None obtainable from the patient. From a bystander at the mouth of the alley: he was 'nodding off' about 20 minutes ago and then stopped moving. After naloxone he becomes agitated, confused and may try to leave.",
        "allergies": "Unknown.",
        "medications": "Unknown. Paraphernalia at scene suggests injected opioid. Naloxone has no effect on someone who is not suffering an opioid overdose, so it is safe to use even though this cannot be confirmed.",
        "past_medical_history": "Unknown. Track marks suggest ongoing injection drug use.",
        "last_intake": "Unknown.",
        "last_bowel_movement": null,
        "events_preceeding": "Unwitnessed apart from the bystander's account. Note the time he was last seen well.",
        "pain": {
          "onset": null,
          "provoke": null,
          "quality": null,
          "region": null,
          "severity": null,
          "time_duration": null
        }
      },
      "vitals": {
        "loc": "U initially; V then A but agitated and confused after naloxone",
        "respiration": {
          "rate": "4, rising to 16 after naloxone",
          "rhythm": "Irregular",
          "quality": "Shallow with gurgling and snoring; clear and adequate after airway management and naloxone"
        },
        "pulse": {
          "rate": "48, rising to 92",
          "rhythm": "Regular",
          "quality": "Weak; radial barely palpable initially"
        },
        "blood_pressure": "88/54, rising to 124/76",
        "sp02": "76% on room air; 94% with assisted ventilations and oxygen",
        "skin": {
          "color": "Pale with blue nail beds and lips",
          "condition": "Cold, dry"
        },
        "temperature": "35.4 °C — he has been outdoors; guard against hypothermia",
        "pupils": {
          "equal": "Equal",
          "reactive": "Minimally reactive",
          "size": "Pinpoint, approximately 1 mm — dilating to 4 mm after naloxone"
        },
        "blood_glucose": "4.9 mmol/L — check it; hypoglycemia is another treatable cause of unresponsiveness",
        "glasgow_coma": "E1 V1 M2 = 4; rising to E4 V4 M6 = 14 after naloxone"
      },
      "head_to_toe_exam": {
        "head": "No trauma, no bruising, no fluid from ears or nose.",
        "neck": null,
        "chest": "No injury; equal expansion once ventilated; clear and equal air entry.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "No injury; cold.",
        "arms": "Fresh and old injection sites both forearms; no active bleeding. Radial pulses weak but equal.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport maintained. Naloxone is short-acting relative to many opioids — he can slide back into respiratory arrest. He must be transported even if he wakes up and insists he is fine."
    },
    "expected_treatment": {
      "life_saving_intervention": "Scene safety first: sharps everywhere. Open the airway with a head-tilt/chin-lift and suction the vomit; insert an OPA. Ventilation is the priority and comes before naloxone — assisted ventilation with a BVM and oxygen reservoir at 15 LPM, one breath every 5 to 6 seconds, watching for the chest to just begin to rise. Two responders on the BVM if available. Monitor the carotid pulse throughout and be ready to start CPR if it is lost. After every 2 minutes of ventilation, check for spontaneous breathing and recheck the pulse. Keep him warm — he is 35.4 °C. Once he wakes he may be agitated, confused or combative; keep your distance, stay calm and withdraw if he becomes threatening. Contact the Poison Control Centre. Do not leave him, and do not accept a refusal of transport.",
      "medication": {
        "indications": "Suspected opioid overdose: severely reduced level of responsiveness, pinpoint pupils, respiration under 8 per minute, SpO2 under 92% on room air, cold blue skin, paraphernalia at the scene. Naloxone is indicated for most cases of suspected opioid overdose where scope of practice and protocol allow.",
        "contraindications": "None stated in the manual — naloxone has no effect on someone who is not suffering an opioid overdose, so it is safe to use even when the overdose cannot be confirmed. Note that it does not remove the need for ventilation or transport.",
        "five_rights": {
          "person": "Unidentified male, approximately 24 years old, presenting with the signs of opioid overdose. Record the identification problem.",
          "medication": "Naloxone — read the label and confirm the name, concentration, clarity and expiry date.",
          "dosage": "As per your local protocol and the device supplied. Repeat doses may be required as it wears off.",
          "route": "Intranasal spray, or intramuscular or subcutaneous injection. For intranasal: tilt the head back slightly, insert the tip into one nostril until your fingers touch the base of the nose, press the plunger firmly, remove immediately.",
          "time": "After the airway is opened and ventilations are under way. Record the exact time; reassess respiration and level of responsiveness continuously afterwards.",
          "documentation": "Time, dose, route, effect; respiratory rate, pupil size and level of responsiveness before and after each dose. Report every dose at transfer of care."
        }
      }
    }
  },
  {
    "meta": {
      "category": "environmental",
      "condition": "Heat stroke",
      "title": "Last kilometre of the road race",
      "patient": "34-year-old man",
      "reference": "Ch. 15 — Heat-Related Illness, Heat Stroke, Treatment for Heat-Related Illness",
      "overview": "Exertional heat stroke — the point at which sweating stops and thermoregulation fails. Tests the distinction from heat exhaustion and the aggressive cooling order of preference: immerse, then pour, then fan.",
      "id": "environmental.heat_illness"
    },
    "scen_survey": {
      "environment": "Paved road, 37 °C with 65% relative humidity — an apparent temperature around 54 °C and a serious risk of heat stress. Full sun, no shade nearby. Race traffic; get the road controlled.",
      "mechanisms_of_injury": "No trauma. Prolonged strenuous exertion in extreme heat and humidity with inadequate fluid intake.",
      "casualty_count": "1 — but scan for other runners in trouble in the same conditions.",
      "assistance": "EMS transport; race medical for ice, water and a tub or bucket; marshals for shade and traffic control.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Runner collapsed on the road, confused and combative, skin dry and hot to the touch and flushed. The dry skin in this heat is the critical finding."
    },
    "primary_survey": {
      "loc": "A but confused, aggressive and behaving bizarrely — he swings at the first person to touch him.",
      "c_spine": "Ask whether he fell. He staggered and sat down; no head strike, no injuries found. Not indicated.",
      "airway": "Patent; speaking, but the words are jumbled.",
      "breathing": "34/min, shallow, regular. Clear and equal air entry.",
      "circulation": "Radial pulse 148, regular, weak. Skin flushed, hot and dry.",
      "name": "Andres Villalobos — from his race bib and emergency contact card.",
      "complaint": "Cannot give one coherently. Record altered mental status with collapse in extreme heat.",
      "rapid_body_survey": {
        "head": "No injury; face flushed and dry.",
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "95% on room air."
      },
      "expected_transport_decision": "Rapid transport category — heat stroke, plus a decreased level of responsiveness. If transport is not yet on scene, cool aggressively while you wait, and keep cooling en route."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "From a running partner: cramping in both calves at 15 km, then weakness, then nausea and staggering, then confusion. He has stopped sweating despite the conditions. Severe headache. Refused water at the last two stations. He is too confused to give a reliable history himself.",
        "allergies": "None known (emergency contact card).",
        "medications": "None.",
        "past_medical_history": "Nothing significant. One episode of heat exhaustion at a race two summers ago — a risk factor.",
        "last_intake": "Sports drink at 10 km, about 50 minutes ago. Nothing since.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "22 km of a marathon in full sun at 37 °C and 65% humidity, in a synthetic shirt, with inadequate fluids.",
        "pain": {
          "onset": "Cramps from about 15 km; headache over the last hour",
          "provoke": "Movement worsens the cramps",
          "quality": "Cramping in the legs; pounding headache",
          "region": "Both calves and thighs; whole head",
          "severity": "He cannot rate it reliably",
          "time_duration": "About an hour"
        }
      },
      "vitals": {
        "loc": "A but confused, irritable and aggressive; behaviour is a key heat-stroke sign",
        "respiration": {
          "rate": "34",
          "rhythm": "Regular",
          "quality": "Shallow; clear and equal"
        },
        "pulse": {
          "rate": "148",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "88/50",
        "sp02": "95% room air",
        "skin": {
          "color": "Flushed, red",
          "condition": "Hot and DRY — sweating has stopped. In heat exhaustion the skin is moist; dry hot skin is heat stroke."
        },
        "temperature": "41.2 °C — above the 40 °C threshold for heat stroke",
        "pupils": {
          "equal": "Equal",
          "reactive": "Sluggish",
          "size": "5 mm"
        },
        "blood_glucose": "4.2 mmol/L",
        "glasgow_coma": "E4 V4 M6 = 14"
      },
      "head_to_toe_exam": {
        "head": "No injury. Skin hot and dry.",
        "neck": null,
        "chest": "Equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Both calves and quadriceps hard and cramping; no injury; pedal pulses present and rapid.",
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Rapid transport, cooling continuously en route. He must not resume activity today under any circumstances."
    },
    "expected_treatment": {
      "life_saving_intervention": "Remove him from the heat and get him into shade. Loosen tight clothing and remove padding from the torso. Do not dry his skin. Cool aggressively, in order of preference: immerse as much of the body as possible in cold water; if only a bucket is available, immerse hands and as much of the forearms as possible; otherwise pour water onto the torso — onto clothing or a towel over the skin, not directly onto bare skin, so it stays in contact and evaporates — and fan him. Any cool liquid will do if water is short. He is too confused to be given fluids safely by mouth; if he becomes alert, offer an electrolyte-replacement drink or water. Position him in the recovery position if he vomits and stop oral fluids. Keep cooling in the ambulance and turn the air conditioning up. Monitor closely and be ready for seizures, ventilations and CPR.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "environmental",
      "condition": "Moderate hypothermia",
      "title": "Lost off the snowshoe trail",
      "patient": "56-year-old woman",
      "reference": "Ch. 15 — Hypothermia, Treatment for Hypothermia, Hypothermia Wrap",
      "overview": "Moderate hypothermia after several hours of exposure. Tests staging the patient by shivering, mental status and motor function, the wet-clothing decision tree, and the 60-second pulse check in a cold patient.",
      "id": "environmental.hypothermia"
    },
    "scen_survey": {
      "environment": "Wooded trail, −18 °C with a 30 km/h wind — a wind chill near −33 °C. Dusk, deep snow. Seek or create shelter from the wind before doing anything else.",
      "mechanisms_of_injury": "No trauma. Approximately five hours of exposure after becoming lost; clothing wet through from sweat and a fall into a creek about two hours ago.",
      "casualty_count": "1",
      "assistance": "Search and rescue for extrication; a toboggan or sked; EMS transport. Shelter and transport are more than 30 minutes away — that changes the treatment.",
      "ppe": "Gloves and eye protection; your own cold-weather protection.",
      "impressions": "Woman sitting in the snow against a tree, not shivering much, speaking slowly and not making sense, trying to take her jacket off. Wet to the waist."
    },
    "primary_survey": {
      "loc": "V — responds slowly to voice, confused, apathetic, uncooperative. Combined with weak intermittent shivering and poor coordination, this is moderate hypothermia.",
      "c_spine": "Ask about the fall into the creek. She stepped in and sat down; no head strike, no injuries found. Not indicated.",
      "airway": "Patent; speaking slowly and slurring.",
      "breathing": "10/min, shallow, regular. Clear and equal air entry.",
      "circulation": "Carotid pulse 44, regular, weak — check for a full 60 seconds in a hypothermic patient before concluding anything. Radial pulse not palpable. Skin pale grey and ice cold.",
      "name": "Louise Cardinal.",
      "complaint": "Cannot give one coherently; says only 'I'm fine, I'm hot'.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": "Boots and trousers soaked and partly frozen; feet numb.",
        "arms_humerus": null,
        "arms_rest": "Fingers white and numb — assess separately for frostbite.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "No reliable reading — hypothermia and poor peripheral circulation make pulse oximetry unreliable. Say so and treat the patient."
      },
      "expected_transport_decision": "Rapid transport category — a patient with hypothermia of any degree, mild, moderate or severe, is in the rapid transport category."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Very slow, muddled answers. Complains of the cold at first, then stops complaining. Apathetic. Says she feels hot and keeps trying to undress — a recognized sign of worsening hypothermia. Cannot manage her own zipper or pack.",
        "allergies": "Unknown at scene.",
        "medications": "Unknown at scene.",
        "past_medical_history": "Unknown at scene; her partner reports she takes something for blood pressure.",
        "last_intake": "A granola bar and water about 5 hours ago.",
        "last_bowel_movement": null,
        "events_preceeding": "Left the trail at about 14:00, became lost, sweated heavily in her insulating layers, then stepped through the ice at a creek crossing around 16:30. Found at 19:15.",
        "pain": {
          "onset": null,
          "provoke": null,
          "quality": null,
          "region": null,
          "severity": null,
          "time_duration": null
        }
      },
      "vitals": {
        "loc": "V — confused, apathetic, uncooperative",
        "respiration": {
          "rate": "10",
          "rhythm": "Regular",
          "quality": "Shallow; clear and equal"
        },
        "pulse": {
          "rate": "44 — count for a full 60 seconds, not 15",
          "rhythm": "Regular",
          "quality": "Weak; radial absent, carotid palpable"
        },
        "blood_pressure": "92/54",
        "sp02": "No reliable reading",
        "skin": {
          "color": "Pale grey, waxy at the fingers",
          "condition": "Ice cold, damp"
        },
        "temperature": "31 °C core — moderate hypothermia (below the 35 °C threshold, above the 28 °C severe threshold)",
        "pupils": {
          "equal": "Equal",
          "reactive": "Sluggish",
          "size": "5 mm"
        },
        "blood_glucose": "3.8 mmol/L",
        "glasgow_coma": "E3 V4 M5 = 12"
      },
      "head_to_toe_exam": {
        "head": "No injury. Face pale, nose and cheeks with white waxy patches — assess for frost nip.",
        "neck": null,
        "chest": "Equal expansion; clear and equal air entry.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Soaked trousers and boots; both feet cold, white and numb.",
        "arms": "Fingertips white, waxy, hard and numb on both hands — frostbite. Do not rub them.",
        "back": null
      },
      "expected_transport_decision": "Rapid transport. Handle her extremely gently and keep her horizontal throughout; rough handling in a cold patient is dangerous."
    },
    "expected_treatment": {
      "life_saving_intervention": "Handle her gently and keep her horizontal — no standing, no walking. Her clothing is very wet and shelter and transport are more than 30 minutes away, so: seek or create shelter from the wind and wet first, then remove the wet clothing, dry her by blotting and not rubbing, then apply a hypothermia wrap. Build the wrap in order: tarp or plastic on the ground as an external vapour barrier, insulation pads, as much additional insulation as you have, an internal vapour barrier of plastic or foil, then place her in it, apply warm water bottles or heat packs to the upper torso, and close each layer. Cover her head and neck. She is confused and cannot protect her airway reliably, so do not give her a warm sugary drink yet — do that only if she becomes responsive enough to sit up and swallow safely. Do not rub the frostbitten fingers, apply snow, or attempt to thaw them here, because they could refreeze. If vital signs seem absent, check pulse and respiration for a full 60 seconds before starting CPR.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "environmental",
      "condition": "Deep frostbite",
      "title": "Bare hands on the wrench",
      "patient": "42-year-old man",
      "reference": "Ch. 15 — Frost Nip, Frostbite, Treatment for Frostbite",
      "overview": "Deep frostbite to the fingers with no core hypothermia. Tests the frost nip / superficial / deep distinction, the warm-water rewarming range, and the rule against thawing anything that might refreeze.",
      "id": "environmental.frostbite"
    },
    "scen_survey": {
      "environment": "Highway shoulder, −26 °C, light wind, night. Traffic hazard — position vehicles and use warning devices. A warm vehicle cab is available.",
      "mechanisms_of_injury": "Approximately 40 minutes changing a wheel with bare hands and no gloves, handling cold metal directly — conductive heat loss.",
      "casualty_count": "1",
      "assistance": "EMS transport; a second vehicle for a traffic block; tow truck.",
      "ppe": "Gloves and eye protection; high-visibility clothing for roadside work.",
      "impressions": "Man standing beside a jacked-up car, holding his hands out awkwardly, distressed. Fingers white and waxy. He is dressed warmly otherwise and is not shivering."
    },
    "primary_survey": {
      "loc": "A, oriented, alert.",
      "c_spine": "Not indicated — no trauma, no fall.",
      "airway": "Patent; full sentences.",
      "breathing": "18/min, regular, unlaboured, clear and equal.",
      "circulation": "Radial pulse 88, regular, full. Trunk skin warm and dry; hands ice cold.",
      "name": "Sunil Mahadeo.",
      "complaint": "Cannot feel his fingers; they have gone white and hard.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": null,
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": "Both hands: fingers from the middle knuckles out are white, waxy, cold and hard to the touch, with no sensation. Radial pulses present and equal. Nose and both ear lobes are pale and stinging — frost nip, a step less severe.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "Cannot obtain a reading from the fingers — cold-related illness and poor peripheral circulation defeat the probe. Try an earlobe or accept the limitation; the earlobe reads 97%."
      },
      "expected_transport_decision": "Not rapid transport on the frostbite alone — his ABCs are stable and there is no hypothermia. Transport for physician assessment. Escalate if he shows any signs of core hypothermia: shivering, confusion, poor coordination."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Fingers first stung and burned, then went numb about 20 minutes ago. Now no feeling at all. Nose and ears sting. He is not shivering, is not confused, and can walk and talk normally — assess for hypothermia explicitly and record the negatives.",
        "allergies": "None known.",
        "medications": "None.",
        "past_medical_history": "Nothing significant. Non-smoker, no diabetes, no circulatory disease.",
        "last_intake": "Coffee about 3 hours ago.",
        "last_bowel_movement": "This morning, normal.",
        "events_preceeding": "Flat tyre; changed the wheel with bare hands because he could not work the jack in gloves.",
        "pain": {
          "onset": "Burning and stinging about 30 minutes ago, then numbness 20 minutes ago",
          "provoke": "Nothing changes it now that the area is numb; expect severe pain on rewarming",
          "quality": "Burning and stinging, then absent sensation",
          "region": "Fingers of both hands from the middle knuckles distally; nose and ear lobes",
          "severity": "0/10 now because the area is numb — the absence of pain is the worrying part",
          "time_duration": "About 30 minutes"
        }
      },
      "vitals": {
        "loc": "A, oriented",
        "respiration": {
          "rate": "18",
          "rhythm": "Regular",
          "quality": "Unlaboured, clear and equal"
        },
        "pulse": {
          "rate": "88",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "132/80",
        "sp02": "97% from the earlobe; no reading from the fingers",
        "skin": {
          "color": "Trunk normal; fingers white and waxy; nose and ear lobes pale",
          "condition": "Trunk warm and dry; fingers cold and hard to the touch"
        },
        "temperature": "36.6 °C core — he is not hypothermic",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "5.6 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "Nose tip and both ear lobes pale with stinging pain — frost nip, tissue below the skin not frozen.",
        "neck": null,
        "chest": null,
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Warm, normal sensation, no cold injury.",
        "arms": "Both hands: distal fingers white, waxy, hard, without sensation — deep frostbite. After rewarming, dark hemorrhagic blisters develop, which marks it as deep rather than superficial and predicts tissue loss. Radial pulses present and equal.",
        "back": null
      },
      "expected_transport_decision": "Transport for physician assessment. Reassess the hands and his core status en route."
    },
    "expected_treatment": {
      "life_saving_intervention": "Get him out of the wind and into the warm vehicle or ambulance. Handle the affected areas gently. Do not rub them and do not apply snow or ice — rubbing causes further damage to frozen tissue. Only thaw the fingers if you are certain they will not refreeze; here the ambulance is warm, so rewarming is appropriate. Submerge the hands in warm water at 38 to 40 °C, checking with a thermometer, or with your own hand if none is available — it should feel warm but not uncomfortable. Keep the fingers away from the sides and bottom of the container and leave them until they redden and feel warm. Warm the frost-nipped nose and ears against warm skin. Once thawed, do not break any blisters; protect them with dry, sterile, non-adherent dressings and place dressings between the fingers. Elevate the hands above heart level if possible. He is responsive with no gastrointestinal symptoms, so rehydrate him with a warm, sugary, non-alcoholic drink, and advise an over-the-counter NSAID such as ibuprofen for the pain of thawing. He must be assessed by a physician.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "environmental",
      "condition": "Acute mountain sickness (AMS) — moderate",
      "title": "Headache at 3,400 metres",
      "patient": "29-year-old woman",
      "reference": "Ch. 15 — High-Altitude Illness, Table 15–1 (AMS)",
      "overview": "Moderate acute mountain sickness after a fast ascent. Tests recognition of the AMS picture (headache plus at least one of nausea, fatigue, lethargy, dizziness or poor sleep) and the descend-or-treat decision, plus the checks that rule out HACE and HAPE.",
      "id": "environmental.high_altitude_sickness.moderate"
    },
    "scen_survey": {
      "environment": "Mountain hut at 3,400 m, cold, late afternoon. High-altitude illness can occur as low as 2,500 m. Descent is possible on foot; a portable hyperbaric bag is on site.",
      "mechanisms_of_injury": "No trauma. Ascent from 1,200 m to 3,400 m in a single day with no acclimatization.",
      "casualty_count": "1 — ask the rest of the party about headaches; ascent illness often affects more than one.",
      "assistance": "Hut warden for the hyperbaric bag and oxygen; guides to organize a descent.",
      "ppe": "Gloves and eye protection.",
      "impressions": "Young woman lying in a bunk with her arm over her eyes, pale, has vomited once. Alert, coherent, walking unaided to the toilet."
    },
    "primary_survey": {
      "loc": "A, oriented, coherent. No ataxia — test her gait and record it.",
      "c_spine": "Not indicated — no trauma.",
      "airway": "Patent; full sentences.",
      "breathing": "22/min, regular, unlaboured. Clear and equal air entry with no crackles or wheeze.",
      "circulation": "Radial pulse 102, regular, full. Skin pale with slight cyanosis at the nail beds; cool and dry.",
      "name": "Hannah Lindqvist.",
      "complaint": "Severe headache, nausea and exhaustion since arriving at the hut.",
      "rapid_body_survey": {
        "head": "No injury. Mild puffiness around the eyes and face — peripheral edema, a listed AMS sign.",
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": "No injury; clear breath sounds — the key negative that argues against HAPE.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": null,
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "88% on room air — expected to be reduced at altitude, but note it and track the trend."
      },
      "expected_transport_decision": "Not immediate rapid transport for moderate AMS, but she must not ascend further. State the escalation triggers explicitly: ataxia, severe lethargy or an altered level of responsiveness means HACE and immediate descent; dyspnea at rest, wheeze, coughing spasms, crackles or frothy blood-tinged sputum means HAPE and immediate descent."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Headache — the defining symptom — plus nausea, one episode of vomiting, fatigue, lethargy, dizziness, and she could not sleep last night. Loss of appetite, occasional cough and chest tightness, irregular breathing at rest, and she has passed very little urine today. No difficulty with balance, no confusion, no breathlessness at rest.",
        "allergies": "None known.",
        "medications": "None. She did not take acetazolamide prophylactically.",
        "past_medical_history": "Nothing significant. First time above 2,000 m.",
        "last_intake": "About 1 L of water today and a few biscuits — well short of the 4 to 6 L per day recommended.",
        "last_bowel_movement": "Yesterday, normal.",
        "events_preceeding": "Drove from 1,200 m to a 2,900 m trailhead this morning and hiked to 3,400 m by mid-afternoon.",
        "pain": {
          "onset": "Gradual, starting about 2 hours after arriving at the hut",
          "provoke": "Bending over, coughing and exertion all worsen it; lying still helps a little",
          "quality": "Pounding, pressing",
          "region": "Frontal and behind both eyes; no radiation",
          "severity": "7/10",
          "time_duration": "About 5 hours, steadily worsening"
        }
      },
      "vitals": {
        "loc": "A, oriented; no confusion",
        "respiration": {
          "rate": "22",
          "rhythm": "Slightly irregular at rest",
          "quality": "Unlaboured; clear and equal, no crackles"
        },
        "pulse": {
          "rate": "102",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "118/74",
        "sp02": "88% room air; 94% on low-flow oxygen",
        "skin": {
          "color": "Pale with cyanosis at the nail beds and around the mouth",
          "condition": "Cool, dry"
        },
        "temperature": "36.7 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "4 mm"
        },
        "blood_glucose": "4.8 mmol/L",
        "glasgow_coma": "15"
      },
      "head_to_toe_exam": {
        "head": "Periorbital and facial puffiness. No injury.",
        "neck": null,
        "chest": "Equal expansion; clear and equal air entry top and bottom, both sides — no rales, no wheeze.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Mild ankle swelling. Heel-to-toe walking normal — no ataxia. This test distinguishes moderate AMS from HACE; perform it and record the result.",
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Descend or evacuate rather than transport in the usual sense. If she improves with rest, oxygen and hyperbaric therapy she may remain at this altitude under observation; if signs and symptoms persist she must descend at least 500 m. She must not go higher."
    },
    "expected_treatment": {
      "life_saving_intervention": "Stop the ascent immediately — this alone is the single most important intervention. Rest her and let her acclimatize. Treat her symptoms with analgesics and anti-emetics as available. This is moderate rather than mild AMS, so: provide low-flow supplemental oxygen; apply hyperbaric therapy in a portable hyperbaric pressure bag; give acetazolamide with or without dexamethasone, or descend at least 500 m — descent being the definitive treatment. Rehydrate her regularly, aiming for 4 to 6 L of fluid per day. Reassess her gait for ataxia and her chest for crackles at every reassessment; either finding converts this into HACE or HAPE, which require immediate descent or evacuation.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "environmental",
      "condition": "High-altitude cerebral edema (HACE)",
      "title": "He cannot walk a straight line",
      "patient": "45-year-old man",
      "reference": "Ch. 15 — High-Altitude Illness, Table 15–1 (HACE)",
      "overview": "HACE developing out of untreated AMS at 4,600 m. Tests the ataxia test as the hinge finding, recognition of a falling heart rate with rising blood pressure, and the single non-negotiable treatment: descend or evacuate immediately.",
      "id": "environmental.high_altitude_sickness.cerebral_edema"
    },
    "scen_survey": {
      "environment": "High camp at 4,600 m, −12 °C, wind rising, late afternoon. Descent route passable for another two hours. Portable hyperbaric bag and oxygen in camp.",
      "mechanisms_of_injury": "No trauma. Untreated moderate AMS for two days followed by a further ascent of 700 m today.",
      "casualty_count": "1 — check the rest of the party.",
      "assistance": "Expedition doctor; porters for an immediate assisted descent; helicopter evacuation if it can fly.",
      "ppe": "Gloves and eye protection; your own cold-weather protection.",
      "impressions": "Man sitting in a tent doorway, slow and vacant, taking a long time to answer, staggering when he tries to stand. Vomiting. Lips bluish."
    },
    "primary_survey": {
      "loc": "A but severely lethargic and disoriented to time and place; drifts to V if left alone. An altered level of responsiveness at altitude is HACE until proven otherwise.",
      "c_spine": "Ask about falls. He fell twice while walking to the tent but has no head strike and no injuries. Not indicated — but check and say so.",
      "airway": "Patent; speech slurred and slow. He has vomited; keep suction or a lateral position available.",
      "breathing": "24/min, deep and slightly irregular. Clear and equal air entry, no crackles.",
      "circulation": "Radial pulse 52 and falling, regular, full. Skin pale with cyanotic lips; cool and dry.",
      "name": "Trevor Ackroyd.",
      "complaint": "Cannot walk straight and has a crushing headache.",
      "rapid_body_survey": {
        "head": "No injury from the falls. No fluid from ears or nose. Puffy face.",
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": "No injury; clear breath sounds — no HAPE component at present.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": "No injury from the falls; grossly unsteady on standing.",
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "76% on room air (severe hypoxia); 87% on 2–4 LPM."
      },
      "expected_transport_decision": "Immediate descent or evacuation — this is the treatment, not merely the transport plan. He is in the rapid transport category on neurological deficits and a decreased level of responsiveness. Do not wait for improvement before starting down."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "All the moderate AMS symptoms, worse: crushing headache, repeated vomiting, no appetite, no sleep. Plus the HACE findings: ataxia, severe lethargy, altered level of responsiveness. He reports double vision and says he saw someone in the tent who was not there. Teammates report uncharacteristic irritability and poor judgement — he insisted on going higher this morning.",
        "allergies": "None known.",
        "medications": "Ibuprofen for the headache. No acetazolamide, no dexamethasone.",
        "past_medical_history": "Two previous trips above 4,000 m without problems.",
        "last_intake": "Tea this morning; vomited everything since. Severely dehydrated.",
        "last_bowel_movement": "Two days ago.",
        "events_preceeding": "Moderate AMS for two days, ignored, then ascended a further 700 m today.",
        "pain": {
          "onset": "Two days ago, dramatically worse in the last 6 hours",
          "provoke": "Everything makes it worse; nothing relieves it",
          "quality": "Crushing, relentless",
          "region": "Whole head",
          "severity": "10/10 by his teammates' account; he cannot rate it now",
          "time_duration": "Two days, unbearable for the last 6 hours"
        }
      },
      "vitals": {
        "loc": "A but severely lethargic and disoriented; drifts to V",
        "respiration": {
          "rate": "24",
          "rhythm": "Irregular",
          "quality": "Deep; clear and equal, no crackles"
        },
        "pulse": {
          "rate": "52 and decreasing",
          "rhythm": "Regular",
          "quality": "Full"
        },
        "blood_pressure": "168/98 and increasing — rising blood pressure with a falling heart rate is a HACE feature",
        "sp02": "76% room air; 87% on 2–4 LPM",
        "skin": {
          "color": "Pale with cyanotic lips and nail beds",
          "condition": "Cool, dry"
        },
        "temperature": "36.1 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Sluggish",
          "size": "5 mm"
        },
        "blood_glucose": "4.1 mmol/L",
        "glasgow_coma": "E3 V4 M5 = 12 — 13 or lower requires rapid transport"
      },
      "head_to_toe_exam": {
        "head": "Facial puffiness. No trauma. Visual disturbance reported; no nystagmus tested.",
        "neck": null,
        "chest": "Equal expansion; clear and equal air entry, no rales — rules out a HAPE component for now.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Cannot stand without support; cannot walk heel-to-toe at all; falls to the left. Gross ataxia — the hinge finding that makes this HACE and not AMS.",
        "arms": "Coordination poor; overshoots on finger-to-nose. Grip equal.",
        "back": null
      },
      "expected_transport_decision": "Descend or evacuate immediately, continuing treatment while descending. HACE is fatal if the patient stays high."
    },
    "expected_treatment": {
      "life_saving_intervention": "Begin the descent or evacuation immediately — every other intervention is done while going down. Provide supplemental oxygen at 2 to 4 LPM. Apply hyperbaric therapy in a portable hyperbaric pressure bag if descent must be delayed, and use the time in the bag to organize the descent rather than as a substitute for it. Administer dexamethasone. He cannot walk unaided and must not be allowed to try — he needs porters, a sked or a helicopter. Protect the airway: he is vomiting with a reduced level of responsiveness, so keep him lateral and have suction available. Keep him warm. Monitor for convulsions, stupor, unresponsiveness and paralysis. Reassess his chest at intervals — HACE and HAPE can coexist.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "environmental",
      "condition": "High-altitude pulmonary edema (HAPE)",
      "title": "Coughing pink at base camp",
      "patient": "37-year-old woman",
      "reference": "Ch. 15 — High-Altitude Illness, Table 15–1 (HAPE)",
      "overview": "HAPE — the most common cause of death related to high altitude. Tests recognition of dyspnea at rest with rales and frothy blood-tinged sputum, and the treatment order: minimize exertion, keep warm, descend immediately or use a hyperbaric bag, oxygen at 4–6 LPM.",
      "id": "environmental.high_altitude_sickness.pulmonary_edema"
    },
    "scen_survey": {
      "environment": "Base camp at 4,200 m, −8 °C, night, snow falling. Helicopter cannot fly until first light. Portable hyperbaric bag and oxygen available.",
      "mechanisms_of_injury": "No trauma. Rapid ascent to 4,200 m two days ago with a strenuous carry yesterday.",
      "casualty_count": "1",
      "assistance": "Expedition doctor; a team to carry her down; helicopter evacuation at first light.",
      "ppe": "Gloves and eye protection; suction on standby for frothy sputum.",
      "impressions": "Woman sitting up in a tent, unable to lie down, breathing hard at rest, coughing in spasms and producing frothy pink-tinged sputum. Lips blue."
    },
    "primary_survey": {
      "loc": "A but anxious and beginning to behave irrationally — insisting she is fine and trying to get up.",
      "c_spine": "Not indicated — no trauma.",
      "airway": "Patent but wet; frothy blood-tinged sputum. Keep it clear.",
      "breathing": "32/min, laboured at rest, audible wheeze and gurgling. Loud crackles (rales) throughout both lungs on auscultation — the defining finding.",
      "circulation": "Radial pulse 128, regular, weak — a continuous fast pulse. Skin cyanotic, cool and clammy.",
      "name": "Ingrid Solheim.",
      "complaint": "Cannot breathe, even sitting still.",
      "rapid_body_survey": {
        "head": null,
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": "No injury; loud crackles and wheeze throughout both lung fields.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": "Heel-to-toe walking is normal — no ataxia, so no HACE component at present. Test it and record it.",
        "arms_humerus": null,
        "arms_rest": null,
        "back_spine": null
      },
      "shock_check": {
        "spo2": "68% on room air (severe hypoxia); 82% on 4–6 LPM."
      },
      "expected_transport_decision": "Immediate descent — this is the treatment. Rapid transport category on instability of the ABCs and severe hypoxia. HAPE is the most common cause of death related to high altitude; do not wait for daylight if descent on foot is possible."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "Headache, breathless at rest, wheezing, could not sleep, coughing spasms with a gurgling sound, frothy blood-tinged sputum, a general ache across the chest, no appetite, extreme weakness. Confused and irrational at intervals. Ask about balance — she reports none of the HACE symptoms.",
        "allergies": "None known.",
        "medications": "Acetazolamide started two days ago. No nifedipine, sildenafil or tadalafil taken.",
        "past_medical_history": "Two previous high-altitude trips; one episode of AMS at 3,800 m three years ago.",
        "last_intake": "Soup about 6 hours ago; nothing since.",
        "last_bowel_movement": "Yesterday, normal.",
        "events_preceeding": "Ascended to 4,200 m two days ago, carried a heavy load to 4,700 m and back yesterday, symptoms began last night and are much worse tonight.",
        "pain": {
          "onset": "Chest ache began yesterday evening",
          "provoke": "Coughing and any exertion worsen it",
          "quality": "General ache and tightness, not sharp",
          "region": "Across the whole chest; no radiation to arm or jaw",
          "severity": "5/10",
          "time_duration": "About 24 hours, worsening"
        }
      },
      "vitals": {
        "loc": "A, anxious, intermittently confused and irrational",
        "respiration": {
          "rate": "32",
          "rhythm": "Regular",
          "quality": "Laboured at rest; wheeze, gurgling, loud rales throughout; frothy blood-tinged sputum"
        },
        "pulse": {
          "rate": "128, continuously fast",
          "rhythm": "Regular",
          "quality": "Weak"
        },
        "blood_pressure": "104/68",
        "sp02": "68% room air; 82% on 4–6 LPM",
        "skin": {
          "color": "Cyanotic lips, face and nail beds",
          "condition": "Cool, clammy"
        },
        "temperature": "37.4 °C",
        "pupils": {
          "equal": "Equal",
          "reactive": "Reactive",
          "size": "5 mm"
        },
        "blood_glucose": "4.5 mmol/L",
        "glasgow_coma": "E4 V4 M6 = 14"
      },
      "head_to_toe_exam": {
        "head": "Facial puffiness. No injury.",
        "neck": null,
        "chest": "Equal expansion; loud crackling and clicking rales throughout both lungs, top and bottom, with wheeze. This is the finding that separates HAPE from AMS and HACE.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Mild ankle swelling. Heel-to-toe gait normal — no ataxia.",
        "arms": null,
        "back": null
      },
      "expected_transport_decision": "Descend immediately, continuing treatment on the way. Helicopter evacuation at first light only if descent on foot is genuinely impossible."
    },
    "expected_treatment": {
      "life_saving_intervention": "Minimize her exertion completely — she must be carried, not walked, and must not be allowed to get up. Keep her warm. Start the descent immediately, or apply hyperbaric therapy in a portable hyperbaric pressure bag if descent is genuinely impossible. Provide supplemental oxygen at 4 to 6 LPM until she begins to improve, then reduce to 2 to 4 LPM. If descent and hyperbaric therapy are both unavailable, consider administering nifedipine, sildenafil or tadalafil. Sit her upright — she cannot lie down and forcing her to will make it worse. Keep the airway clear of frothy sputum. Monitor for progression to delirium and unresponsiveness, and reassess her gait for ataxia in case HACE develops alongside it.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  },
  {
    "meta": {
      "category": "environmental",
      "condition": "Arterial gas embolism (AGE)",
      "title": "Unresponsive at the surface",
      "patient": "33-year-old man, recreational diver",
      "reference": "Ch. 15 — Barotrauma of Ascent, Arterial Gas Embolism; Ch. 6 — Supplemental Oxygen",
      "overview": "AGE from a rapid breath-hold ascent. The manual's rule is the whole scenario: assume AGE in any diver who is unresponsive on surfacing or who loses responsiveness within 10 minutes of surfacing. Tests supine positioning, high-concentration oxygen, the DAN hotline, and the flight-altitude limit.",
      "id": "environmental.high_altitude_sickness.arterial_gas_embolism"
    },
    "scen_survey": {
      "environment": "Dive boat deck, choppy water, wet non-slip surface. Compressed gas cylinders and dive gear underfoot — clear a working space. Do not use free-flowing oxygen near any ignition source.",
      "mechanisms_of_injury": "Rapid emergency ascent from 24 m after an out-of-air situation, made while holding his breath. Barotrauma of ascent — expanding gas ruptured lung tissue and entered the arterial circulation.",
      "casualty_count": "1 — check on his dive buddy, who made the same ascent.",
      "assistance": "Coast guard and EMS; a hyperbaric-capable receiving facility; the Divers Alert Network diving medicine physician on 1-919-684-9111 for assessment and treatment advice.",
      "ppe": "Gloves and eye protection; suction on standby.",
      "impressions": "Diver hauled onto the deck, unresponsive, with pink froth at the mouth. Still in his wetsuit and harness. He surfaced conscious and collapsed within about two minutes."
    },
    "primary_survey": {
      "loc": "P on your arrival — grimaces to a pinch on the inside of the arm, no verbal response. He was talking at the surface and lost responsiveness within about two minutes: that timing is diagnostic.",
      "c_spine": "Consider it — he was lifted from the water and there was a possible impact against the boat. No evidence of head or neck trauma found; take reasonable precautions during the lift and say why you are not committing to full SMR.",
      "airway": "Compromised — pink froth at the mouth. Suction and manage it; he tolerates an OPA.",
      "breathing": "Irregular, 8/min, shallow, gurgling. Assisted ventilation indicated below 10 per minute.",
      "circulation": "Carotid pulse 116, irregular, weak. Skin pale and mottled, cold and wet.",
      "name": "Colin Aristead (from his dive log and buddy).",
      "complaint": "Unresponsiveness following a rapid ascent.",
      "rapid_body_survey": {
        "head": "No injury. Pink froth at the mouth and nose.",
        "jaw": null,
        "neck_spine": null,
        "clavicles": null,
        "sternum": null,
        "chest": "No injury; equal expansion; crackles at both bases.",
        "armpits": null,
        "rib_cage": null,
        "abdomen_view": null,
        "abdomen_palpation": null,
        "pelvis": null,
        "legs_femurs": null,
        "legs_rest": "Right leg flaccid; left leg withdraws to pain.",
        "arms_humerus": null,
        "arms_rest": "Right arm and leg weak/flaccid; left side moves to painful stimulus. Unilateral weakness after a dive points to gas bubbles in the cerebral circulation.",
        "back_spine": null
      },
      "shock_check": {
        "spo2": "80% on room air (severe hypoxia); 92% with assisted ventilations and high-concentration oxygen."
      },
      "expected_transport_decision": "Rapid transport category — decompression illness is listed explicitly as an immediate transport emergency, and he also has unresponsiveness and neurological deficits. Transport to a facility capable of dealing with diving injuries."
    },
    "secondary_survey": {
      "interview": {
        "signs_symptoms": "From his buddy: at the surface he complained of a sudden severe headache and said he could not see properly, then became confused, then collapsed. A brief convulsion was seen on the deck. He is now unresponsive with right-sided weakness and bloody froth from the airway.",
        "allergies": "Unknown at scene; buddy reports none.",
        "medications": "None known.",
        "past_medical_history": "Certified diver, roughly 60 logged dives. No asthma, no lung disease. Non-smoker.",
        "last_intake": "Breakfast about 4 hours ago.",
        "last_bowel_movement": null,
        "events_preceeding": "Dive to 24 m for 31 minutes. Out-of-air at depth, made a rapid ascent while holding his breath rather than exhaling continuously. Surfaced at 11:42, collapsed at 11:44. Record the depth, the bottom time, the ascent rate and the times — the receiving hyperbaric facility needs all of it.",
        "pain": {
          "onset": null,
          "provoke": null,
          "quality": null,
          "region": null,
          "severity": null,
          "time_duration": null
        }
      },
      "vitals": {
        "loc": "P — responds to painful stimulus only",
        "respiration": {
          "rate": "8",
          "rhythm": "Irregular",
          "quality": "Shallow, gurgling, pink froth; crackles at both bases"
        },
        "pulse": {
          "rate": "116",
          "rhythm": "Irregular",
          "quality": "Weak"
        },
        "blood_pressure": "96/58",
        "sp02": "80% room air; 92% with assisted ventilations and high-concentration oxygen",
        "skin": {
          "color": "Pale and mottled, cyanotic lips",
          "condition": "Cold, wet"
        },
        "temperature": "34.9 °C — he has been in cold water; guard against hypothermia",
        "pupils": {
          "equal": "Unequal — right 6 mm, left 3 mm",
          "reactive": "Right sluggish, left reactive",
          "size": "Right 6 mm, left 3 mm"
        },
        "blood_glucose": "5.1 mmol/L",
        "glasgow_coma": "E2 V2 M4 = 8"
      },
      "head_to_toe_exam": {
        "head": "No trauma. Froth at the mouth and nose. Unequal pupils.",
        "neck": "No deformity, no subcutaneous crepitus (which would suggest pneumomediastinum).",
        "chest": "Equal expansion once ventilated; crackles at both bases; no absent breath sounds.",
        "abdomen": {
          "top_left": null,
          "top_right": null,
          "bottom_left": null,
          "bottom_right": null
        },
        "pelvis": null,
        "legs": "Right leg flaccid; left withdraws to pain. Pedal pulses equal.",
        "arms": "Right arm flaccid, no withdrawal; left withdraws to pain. Radial pulses equal.",
        "back": "No injury; no deformity."
      },
      "expected_transport_decision": "Rapid transport, supine, to a hyperbaric-capable facility. If air transportation is used, the pilot must fly at 305 m (1,000 ft) or lower, or use an aircraft that can be pressurized to 1 ATM — say this aloud, because getting it wrong makes the bubbles bigger."
    },
    "expected_treatment": {
      "life_saving_intervention": "Keep him supine — this is specified for AGE. Remove the wetsuit and harness enough to assess and to prevent further cooling, then dry him and keep him warm. Manage the airway: suction the froth, insert an OPA, and provide assisted ventilation, since his rate is below 10. Provide supplemental high-concentration oxygen throughout — this is one of the situations in which high-flow oxygen is explicitly indicated, alongside decompression sickness. Keep free-flowing oxygen away from ignition sources on the boat. Contact the Divers Alert Network diving medicine physician for assessment and treatment advice. Assess and monitor his dive buddy, who made the same ascent. Record the dive profile — depth, bottom time, ascent rate, surface time, time of collapse — and hand it over. Ensure the receiving facility can manage diving injuries, and enforce the 305 m flight ceiling if flying.",
      "medication": {
        "indications": null,
        "contraindications": null,
        "five_rights": {
          "person": null,
          "medication": null,
          "dosage": null,
          "route": null,
          "time": null,
          "documentation": null
        }
      }
    }
  }
];

/* ------------------------------------------------------------------ */
/* Labels                                                             */
/* ------------------------------------------------------------------ */

const LABELS = {
  scen_survey: 'Scene Survey',
  primary_survey: 'Primary Survey',
  secondary_survey: 'Secondary Survey',
  expected_treatment: 'Expected Treatment',
  rapid_body_survey: 'Rapid Body Survey',
  shock_check: 'Shock Check',
  head_to_toe_exam: 'Head-to-Toe Exam',
  five_rights: 'Six Rights of Medication',
  loc: 'Level of responsiveness',
  c_spine: 'C-spine / SMR',
  ppe: 'PPE',
  spo2: 'SpO₂',
  sp02: 'SpO₂',
  mechanisms_of_injury: 'Mechanism of injury',
  casualty_count: 'Number of patients',
  assistance: 'Additional resources',
  impressions: 'General impression',
  complaint: 'Chief complaint',
  name: "Patient's name",
  neck_spine: 'Neck / spine',
  rib_cage: 'Rib cage',
  abdomen_view: 'Abdomen (inspect)',
  abdomen_palpation: 'Abdomen (palpate)',
  legs_femurs: 'Legs — femurs',
  legs_rest: 'Legs — lower',
  arms_humerus: 'Arms — humerus',
  arms_rest: 'Arms — lower',
  back_spine: 'Back / spine',
  expected_transport_decision: 'Expected transport decision',
  signs_symptoms: 'S — Signs and symptoms',
  allergies: 'A — Allergies',
  medications: 'M — Medications',
  past_medical_history: 'P — Past medical history',
  last_intake: 'L — Last oral intake',
  last_bowel_movement: 'L — Last bowel movement',
  events_preceeding: 'E — Events preceding',
  pain: 'Pain (OPQRST)',
  onset: 'O — Onset',
  provoke: 'P — Provocation',
  quality: 'Q — Quality',
  region: 'R — Region and radiation',
  severity: 'S — Severity',
  time_duration: 'T — Time and duration',
  blood_pressure: 'Blood pressure',
  blood_glucose: 'Blood glucose (BGL)',
  glasgow_coma: 'Glasgow Coma Scale',
  life_saving_intervention: 'Interventions',
  interview: 'Interview (SAMPLE)',
  top_left: 'Upper left quadrant',
  top_right: 'Upper right quadrant',
  bottom_left: 'Lower left quadrant',
  bottom_right: 'Lower right quadrant',
};

const CATEGORY_LABELS = {
  respiratory: 'Respiratory',
  circulatory: 'Circulatory',
  shock: 'Shock',
  soft_tissue_injuries: 'Soft tissue injuries',
  muskuloskeletal: 'Musculoskeletal',
  chest_adominal_pelvic: 'Chest, abdominal & pelvic',
  head_spine: 'Head & spine',
  chronic_acute_illness: 'Acute & chronic illness',
  poisoning: 'Poisoning',
  environmental: 'Environmental',
};

const STAGES = ['scen_survey', 'primary_survey', 'secondary_survey', 'expected_treatment'];

function label(key) {
  if (LABELS[key]) return LABELS[key];
  return key.replace(/_/g, ' ').replace(/^./, (c) => c.toUpperCase());
}

function categoryLabel(key) {
  return CATEGORY_LABELS[key] || label(key);
}

/* ------------------------------------------------------------------ */
/* Styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
:root{
  --bg:#f7f7f5; --panel:#ffffff; --panel-2:#f1f1ee; --ink:#1c1c1a; --ink-2:#5c5c56;
  --ink-3:#8a8a82; --line:#e0e0da; --accent:#8c2f39; --accent-2:#a94c56;
  --expect:#1f5c4d; --expect-bg:#e8f2ef; --blank:#b5b5ad;
  --mono:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
  --sans:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}
@media (prefers-color-scheme:dark){
  :root:not([data-theme="light"]){
    --bg:#171716; --panel:#1f1f1e; --panel-2:#262625; --ink:#eceae5; --ink-2:#a8a6a0;
    --ink-3:#7d7b75; --line:#33332f; --accent:#e08a92; --accent-2:#c9727b;
    --expect:#7fd2ba; --expect-bg:#16302a; --blank:#55554f;
  }
}
:root[data-theme="dark"]{
  --bg:#171716; --panel:#1f1f1e; --panel-2:#262625; --ink:#eceae5; --ink-2:#a8a6a0;
  --ink-3:#7d7b75; --line:#33332f; --accent:#e08a92; --accent-2:#c9727b;
  --expect:#7fd2ba; --expect-bg:#16302a; --blank:#55554f;
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.55 var(--sans);
  -webkit-text-size-adjust:100%}
a{color:var(--accent)}

#emr-top{position:sticky;top:0;z-index:20;background:var(--panel);
  border-bottom:1px solid var(--line);padding:.7rem 1rem;
  display:flex;gap:.75rem;align-items:center;flex-wrap:wrap}
#emr-top h1{font-size:1.05rem;margin:0;font-weight:650;letter-spacing:-.01em;
  white-space:nowrap}
#emr-top h1 span{color:var(--ink-3);font-weight:400}
#emr-search{flex:1 1 14rem;min-width:10rem;padding:.45rem .6rem;font:inherit;
  color:var(--ink);background:var(--bg);border:1px solid var(--line);border-radius:6px}
#emr-search:focus{outline:2px solid var(--accent);outline-offset:-1px}
.emr-btn{font:inherit;font-size:.85rem;padding:.4rem .7rem;border-radius:6px;
  border:1px solid var(--line);background:var(--bg);color:var(--ink-2);cursor:pointer;
  white-space:nowrap}
.emr-btn:hover{border-color:var(--accent);color:var(--ink)}
.emr-btn[aria-pressed="true"]{background:var(--accent);border-color:var(--accent);color:#fff}
:root[data-theme="dark"] .emr-btn[aria-pressed="true"]{color:#1a1a18}
@media (prefers-color-scheme:dark){
  :root:not([data-theme="light"]) .emr-btn[aria-pressed="true"]{color:#1a1a18}
}

#emr-wrap{display:grid;grid-template-columns:19rem minmax(0,1fr);gap:0;
  align-items:start}
@media (max-width:880px){#emr-wrap{grid-template-columns:1fr}}

#emr-nav{border-right:1px solid var(--line);background:var(--panel);
  position:sticky;top:3.6rem;max-height:calc(100vh - 3.6rem);overflow-y:auto;
  padding:.6rem .4rem 3rem}
@media (max-width:880px){#emr-nav{position:static;max-height:22rem;border-right:0;
  border-bottom:1px solid var(--line)}}
#emr-nav .cat{font-size:.7rem;text-transform:uppercase;letter-spacing:.09em;
  color:var(--ink-3);padding:.9rem .6rem .3rem;font-weight:650}
#emr-nav .cat .n{color:var(--blank);font-weight:400}
#emr-nav button{display:block;width:100%;text-align:left;border:0;background:none;
  font:inherit;font-size:.87rem;color:var(--ink-2);padding:.34rem .6rem;
  border-radius:5px;cursor:pointer;line-height:1.35}
#emr-nav button:hover{background:var(--panel-2);color:var(--ink)}
#emr-nav button[aria-current="true"]{background:var(--accent);color:#fff;font-weight:600}
#emr-nav button .sub{display:block;font-size:.75rem;opacity:.7}

#emr-main{padding:1.25rem 1.5rem 6rem;max-width:60rem}
@media (max-width:600px){#emr-main{padding:1rem .85rem 4rem}}

.hero{border:1px solid var(--line);background:var(--panel);border-radius:10px;
  padding:1.1rem 1.2rem;margin-bottom:1.4rem}
.hero .cat{font-size:.7rem;text-transform:uppercase;letter-spacing:.09em;
  color:var(--accent);font-weight:650}
.hero h2{margin:.3rem 0 .1rem;font-size:1.5rem;line-height:1.2;letter-spacing:-.02em}
.hero .cond{color:var(--ink-2);font-size:1rem;margin-bottom:.7rem}
.hero dl{display:grid;grid-template-columns:auto 1fr;gap:.2rem .7rem;margin:0 0 .8rem;
  font-size:.88rem}
.hero dt{color:var(--ink-3);white-space:nowrap}
.hero dd{margin:0}
.hero .overview{font-size:.93rem;color:var(--ink-2);border-top:1px solid var(--line);
  padding-top:.75rem;margin:0}
.hero code{font:.8rem var(--mono);color:var(--ink-3)}

section.stage{margin-bottom:1.5rem;border:1px solid var(--line);border-radius:10px;
  background:var(--panel);overflow:hidden}
section.stage > h3{margin:0;padding:.6rem 1rem;font-size:.75rem;font-weight:700;
  text-transform:uppercase;letter-spacing:.1em;color:#fff;background:var(--accent)}
:root[data-theme="dark"] section.stage > h3{color:#1a1a18}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) section.stage > h3{color:#1a1a18}}
section.stage.treat > h3{background:var(--expect)}
.grp{padding:.2rem 0}
.grp > h4{margin:.9rem 1rem .2rem;font-size:.72rem;text-transform:uppercase;
  letter-spacing:.08em;color:var(--ink-3);font-weight:650}
.grp .grp > h4{color:var(--accent-2)}
dl.rows{margin:0;display:grid;grid-template-columns:13.5rem minmax(0,1fr)}
@media (max-width:700px){dl.rows{grid-template-columns:1fr}}
dl.rows > dt{padding:.45rem 1rem;font-size:.8rem;color:var(--ink-3);
  border-top:1px solid var(--line)}
dl.rows > dd{margin:0;padding:.45rem 1rem;border-top:1px solid var(--line);
  font-size:.93rem;white-space:pre-wrap;overflow-wrap:anywhere}
@media (max-width:700px){
  dl.rows > dt{border-top:1px solid var(--line);padding-bottom:0;font-weight:650}
  dl.rows > dd{border-top:0;padding-top:.15rem}
}
dl.rows > dt.blank,dl.rows > dd.blank{color:var(--blank)}
dd.expect{background:var(--expect-bg)}
dt.expect{background:var(--expect-bg);color:var(--expect);font-weight:650}
.legend{font-size:.8rem;color:var(--ink-3);margin:0 0 1.2rem;padding:.6rem .8rem;
  border-left:3px solid var(--accent);background:var(--panel)}
mark{background:#ffe89e;color:#1c1c1a;border-radius:2px}
.empty{padding:3rem 1rem;color:var(--ink-3);text-align:center}
.count{font-size:.8rem;color:var(--ink-3);margin:.2rem 0 1rem}

@media print{
  #emr-top,#emr-nav{display:none}
  #emr-wrap{grid-template-columns:1fr}
  #emr-main{padding:0;max-width:none}
  body{background:#fff;color:#000}
  section.stage{break-inside:avoid;border-color:#999}
  section.stage > h3{background:#eee !important;color:#000 !important}
}
`;

/* ------------------------------------------------------------------ */
/* State                                                              */
/* ------------------------------------------------------------------ */

const store = {
  get(k, d) {
    try { const v = localStorage.getItem('emr.' + k); return v === null ? d : JSON.parse(v); }
    catch (e) { return d; }
  },
  set(k, v) {
    try { localStorage.setItem('emr.' + k, JSON.stringify(v)); } catch (e) { /* ignore */ }
  },
};

let showNormals = store.get('showNormals', false);
let query = '';
let currentId = null;

const byId = new Map(EMR_SCENARIOS.map((s) => [s.meta.id, s]));

/* ------------------------------------------------------------------ */
/* Search                                                             */
/* ------------------------------------------------------------------ */

function flatten(node, out) {
  if (node === null || node === undefined) return out;
  if (typeof node === 'object') {
    for (const v of Object.values(node)) flatten(v, out);
  } else {
    out.push(String(node));
  }
  return out;
}

for (const s of EMR_SCENARIOS) s._hay = flatten(s, []).join('  ').toLowerCase();

function matches(s) {
  if (!query) return true;
  return query.split(/\s+/).filter(Boolean).every((t) => s._hay.includes(t));
}

function highlight(text) {
  const frag = document.createDocumentFragment();
  const terms = query.split(/\s+/).filter((t) => t.length > 1);
  if (!terms.length) { frag.appendChild(document.createTextNode(text)); return frag; }
  const re = new RegExp('(' + terms.map(escapeRe).join('|') + ')', 'ig');
  let last = 0;
  for (const m of text.matchAll(re)) {
    if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
    const mk = document.createElement('mark');
    mk.textContent = m[0];
    frag.appendChild(mk);
    last = m.index + m[0].length;
  }
  if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
  return frag;
}

function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

/* ------------------------------------------------------------------ */
/* Rendering                                                          */
/* ------------------------------------------------------------------ */

function hasContent(node) {
  if (node === null || node === undefined) return false;
  if (typeof node !== 'object') return String(node).trim() !== '';
  return Object.values(node).some(hasContent);
}

/** Render one schema level: leaves become dt/dd rows, branches become subgroups. */
function renderLevel(schemaNode, dataNode, parent, depth) {
  let rows = null;
  const flushRows = () => { rows = null; };

  for (const key of Object.keys(schemaNode)) {
    const sub = schemaNode[key];
    const val = dataNode ? dataNode[key] : undefined;
    const isBranch = sub && typeof sub === 'object' && Object.keys(sub).length > 0;

    if (isBranch) {
      if (!showNormals && !hasContent(val)) continue;
      flushRows();
      const grp = document.createElement('div');
      grp.className = 'grp';
      const h = document.createElement('h4');
      h.textContent = label(key);
      grp.appendChild(h);
      renderLevel(sub, val || {}, grp, depth + 1);
      parent.appendChild(grp);
      continue;
    }

    const text = val === null || val === undefined ? '' : String(val).trim();
    if (!showNormals && text === '') continue;

    if (!rows) {
      rows = document.createElement('dl');
      rows.className = 'rows';
      parent.appendChild(rows);
    }
    const isExpected = key.startsWith('expected_') || key === 'life_saving_intervention';
    const dt = document.createElement('dt');
    dt.textContent = label(key);
    const dd = document.createElement('dd');
    if (text === '') {
      dt.classList.add('blank');
      dd.classList.add('blank');
      dd.textContent = '—';
    } else {
      dd.appendChild(highlight(text));
    }
    if (isExpected) { dt.classList.add('expect'); dd.classList.add('expect'); }
    rows.appendChild(dt);
    rows.appendChild(dd);
  }
}

function renderScenario(s) {
  const main = document.getElementById('emr-main');
  main.textContent = '';
  if (!s) {
    const p = document.createElement('p');
    p.className = 'empty';
    p.textContent = 'Select a scenario from the list.';
    main.appendChild(p);
    return;
  }

  const m = s.meta || {};
  const hero = document.createElement('div');
  hero.className = 'hero';

  const cat = document.createElement('div');
  cat.className = 'cat';
  cat.textContent = categoryLabel(m.category || '');
  hero.appendChild(cat);

  const h2 = document.createElement('h2');
  h2.appendChild(highlight(m.title || m.condition || m.id));
  hero.appendChild(h2);

  if (m.condition) {
    const cond = document.createElement('div');
    cond.className = 'cond';
    cond.appendChild(highlight(m.condition));
    hero.appendChild(cond);
  }

  const dl = document.createElement('dl');
  const addMeta = (k, v, mono) => {
    if (!v) return;
    const dt = document.createElement('dt'); dt.textContent = k;
    const dd = document.createElement('dd');
    if (mono) { const c = document.createElement('code'); c.textContent = v; dd.appendChild(c); }
    else dd.appendChild(highlight(v));
    dl.appendChild(dt); dl.appendChild(dd);
  };
  addMeta('Patient', m.patient);
  addMeta('Source', m.reference);
  addMeta('ID', m.id, true);
  if (dl.children.length) hero.appendChild(dl);

  if (m.overview) {
    const ov = document.createElement('p');
    ov.className = 'overview';
    ov.appendChild(highlight(m.overview));
    hero.appendChild(ov);
  }
  main.appendChild(hero);

  const legend = document.createElement('p');
  legend.className = 'legend';
  legend.textContent = showNormals
    ? 'Showing every field. A blank (—) in the assessment means expected healthy, normal or '
      + 'unremarkable; in Expected Treatment it means not applicable or not specified in the '
      + 'manual. Green rows are what the responder is expected to do or decide.'
    : 'Showing findings only — fields that are blank (expected normal / unremarkable) are '
      + 'hidden. Use "Show normals" to see the full assessment form. Green rows are what the '
      + 'responder is expected to do or decide.';
  main.appendChild(legend);

  for (const stage of STAGES) {
    const schemaNode = EMR_SCHEMA[stage];
    if (!schemaNode) continue;
    const sec = document.createElement('section');
    sec.className = 'stage' + (stage === 'expected_treatment' ? ' treat' : '');
    const h3 = document.createElement('h3');
    h3.textContent = label(stage);
    sec.appendChild(h3);
    const body = document.createElement('div');
    body.className = 'grp';
    renderLevel(schemaNode, s[stage] || {}, body, 0);
    if (!body.children.length) {
      const p = document.createElement('p');
      p.className = 'empty';
      p.textContent = 'Nothing recorded — all findings expected normal.';
      body.appendChild(p);
    }
    sec.appendChild(body);
    main.appendChild(sec);
  }

  document.title = (m.title ? m.title + ' — ' : '') + 'EMR Training Scenarios';
}

function renderNav() {
  const nav = document.getElementById('emr-nav');
  nav.textContent = '';
  const groups = new Map();
  let shown = 0;
  for (const s of EMR_SCENARIOS) {
    if (!matches(s)) continue;
    shown++;
    const c = s.meta.category || 'other';
    if (!groups.has(c)) groups.set(c, []);
    groups.get(c).push(s);
  }

  if (!shown) {
    const p = document.createElement('div');
    p.className = 'cat';
    p.textContent = 'No matches';
    nav.appendChild(p);
    return;
  }

  for (const [c, list] of groups) {
    const h = document.createElement('div');
    h.className = 'cat';
    h.appendChild(document.createTextNode(categoryLabel(c) + ' '));
    const n = document.createElement('span');
    n.className = 'n';
    n.textContent = list.length;
    h.appendChild(n);
    nav.appendChild(h);
    for (const s of list) {
      const b = document.createElement('button');
      b.type = 'button';
      b.dataset.id = s.meta.id;
      if (s.meta.id === currentId) b.setAttribute('aria-current', 'true');
      b.appendChild(document.createTextNode(s.meta.condition || s.meta.title));
      const sub = document.createElement('span');
      sub.className = 'sub';
      sub.textContent = s.meta.title || '';
      b.appendChild(sub);
      b.addEventListener('click', () => select(s.meta.id));
      nav.appendChild(b);
    }
  }
}

function select(id) {
  currentId = id;
  renderNav();
  renderScenario(byId.get(id));
  // Assigning location.hash rather than using the History API: Chrome rejects
  // pushState/replaceState on file:// origins, and this page is meant to work
  // both from GitHub Pages and from a local file.
  const hash = '#' + id;
  if (location.hash !== hash) {
    try { location.hash = hash; } catch (e) { /* non-navigable host */ }
  }
  const main = document.getElementById('emr-main');
  if (main.scrollIntoView) main.scrollIntoView({ block: 'start' });
}

/* ------------------------------------------------------------------ */
/* Shell                                                              */
/* ------------------------------------------------------------------ */

function build() {
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  const top = document.createElement('header');
  top.id = 'emr-top';
  const h1 = document.createElement('h1');
  h1.appendChild(document.createTextNode('EMR Scenarios '));
  const sp = document.createElement('span');
  sp.textContent = EMR_SCENARIOS.length;
  h1.appendChild(sp);
  top.appendChild(h1);

  const search = document.createElement('input');
  search.id = 'emr-search';
  search.type = 'search';
  search.placeholder = 'Search all fields — e.g. "tourniquet", "jvd", "pediatric"';
  search.setAttribute('aria-label', 'Search scenarios');
  search.addEventListener('input', () => {
    query = search.value.trim().toLowerCase();
    // Jump to the first hit if the open scenario is no longer one, so the search
    // terms are actually visible (highlighted) rather than filtering the list only.
    const cur = byId.get(currentId);
    if (query && cur && !matches(cur)) {
      const first = EMR_SCENARIOS.find(matches);
      if (first) { select(first.meta.id); return; }
    }
    renderNav();
    renderScenario(cur);
  });
  top.appendChild(search);

  const normBtn = document.createElement('button');
  normBtn.className = 'emr-btn';
  normBtn.type = 'button';
  normBtn.textContent = 'Show normals';
  normBtn.setAttribute('aria-pressed', String(showNormals));
  normBtn.addEventListener('click', () => {
    showNormals = !showNormals;
    store.set('showNormals', showNormals);
    normBtn.setAttribute('aria-pressed', String(showNormals));
    renderScenario(byId.get(currentId));
  });
  top.appendChild(normBtn);

  const themeBtn = document.createElement('button');
  themeBtn.className = 'emr-btn';
  themeBtn.type = 'button';
  themeBtn.textContent = 'Theme';
  themeBtn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    store.set('theme', next);
  });
  top.appendChild(themeBtn);

  const printBtn = document.createElement('button');
  printBtn.className = 'emr-btn';
  printBtn.type = 'button';
  printBtn.textContent = 'Print';
  printBtn.addEventListener('click', () => window.print());
  top.appendChild(printBtn);

  const wrap = document.createElement('div');
  wrap.id = 'emr-wrap';
  const nav = document.createElement('nav');
  nav.id = 'emr-nav';
  nav.setAttribute('aria-label', 'Scenarios');
  const main = document.createElement('main');
  main.id = 'emr-main';
  wrap.appendChild(nav);
  wrap.appendChild(main);

  document.body.appendChild(top);
  document.body.appendChild(wrap);

  const saved = store.get('theme', null);
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  const fromHash = location.hash.replace(/^#/, '');
  const start = byId.has(fromHash) ? fromHash : EMR_SCENARIOS[0].meta.id;
  select(start);

  window.addEventListener('hashchange', () => {
    const id = location.hash.replace(/^#/, '');
    if (byId.has(id) && id !== currentId) select(id);
  });

  document.addEventListener('keydown', (e) => {
    if (e.target instanceof HTMLInputElement) return;
    if (e.key !== 'j' && e.key !== 'k') return;
    const list = EMR_SCENARIOS.filter(matches);
    const i = list.findIndex((s) => s.meta.id === currentId);
    const next = e.key === 'j' ? i + 1 : i - 1;
    if (next >= 0 && next < list.length) select(list[next].meta.id);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', build);
} else {
  build();
}
