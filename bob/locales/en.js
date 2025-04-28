// 中文語言資源檔案
window.i18n = window.i18n || {};
window.i18n.en = {
  app_title: "Disaster Preparedness Checklist",
  sip_title: "BOB (Bug Out Bag)",
  home_title: "Emergency Evacuation Bag",
  home_description: "The design goal of the BOB is to help you survive for at least 72 hours (3 days) by carrying the most essential survival supplies in an emergency situation.",
  beta_tag: "Evacuation Route Planning (BETA)",
  total_progress: "Total Progress",
  
  
  common: {
    progress: "Preparation Progress",
    completed: "Completed",
    people: "Number of People",
    days: "Number of Days",
    person: "Person",
    day: "Day",
    total: "Total",
    per_person: "Per Person",
    item: "Item",
    back: "Back",
    prepare: "Prepare"
  },
  
  categories: {
    food: {
      title: "Emergency Food",
      category: "FOOD",
      description: "<p>Due to the goal of the BOB is to help you survive for at least 72 hours (3 days) by carrying the most essential survival supplies in an emergency situation, it is the shortest preparation of 3 days.</p>"
    },
    tool: {
      title: "Survival Tools",
      category: "TOOL",
      description: "<p> Everything is prioritized to ensure survival. The tool is not for comfort, but for survival in extreme environments. </p>"
    },
    communication: {
      title: "Communication & Mobility",
      category: "COMMUNICATION",
      description: "<p>The key to survival is the ability to obtain and contact information during evacuation or movement. It must be set in advance: communication channels, meeting points, and shelter markers.</p><li>Do not wait until the disaster occurs to set up communication channels or routes</li><li>Do not forget identity identification, so that others can know your identity, blood type, etc. in case of emergency</li><li>Do not ignore waterproof measures, must be \"over-prepared\": plastic bags, dry bags, waterproof backpacks</li>"
    }
  },
  
  items: {
    food: {
      water: {
        name: "Water",
        description: "3 liters of water, as a source of initial emergency water needs",
        note: "Each person averages two liters of water per day, but can be reduced to one liter in an emergency, and the three-day backpack must carry three liters of clean water."
      },

      filter: {
        name: "Water Filter",
        description: "With a water filter and water purification tablets, you can obtain safe drinking water from natural sources (streams, stagnant water).",
        note: "Prepared water will always be consumed, so you still need a water filter and water purification equipment. You can buy it at an outdoor equipment store. All outdoor water filters on the market can filter bacteria and protozoa."
      },

      hydration_bladder: {
        name: "Hydration Bladder",
        description: "The hydration bladder is an additional water storage tool. Once the original backup water is consumed, it can be used as a water storage item.",
        note: "It is recommended to use a three-liter hydration bladder, which is more compact, but it is recommended to replace the drinking water and clean the hydration bladder every week to avoid bacterial growth."
      },

      energy_bar: {
        name: "Energy Bar",
        description: "Carry high-calorie, no cooking food: such as military rations, energy bars, nuts. ",
        note: "At least 2000 calories per day, prepare three days' worth. Choose lightweight, pressure-resistant, and heat-resistant packaging."
      }
    },

    tool: {
      foil_blanket: {
        name: "Foil Blanket",
        description: "Lightweight, reflective body temperature emergency blanket, used for cold protection, heat preservation, and thermal insulation.",
        note: "Body temperature drop is one of the main causes of death in wilderness survival. Foil Blanket can prevent hypothermia and provide basic survival protection when encountering rain, strong winds or cold environments. It is recommended to have at least one per person."
      },
      
      emergency_tent: {
        name: "Emergency Tent",
        description: "Lightweight, foldable small tent, used for quick setup of temporary shelter. ",
        note: "After a disaster, it may not be possible to enter a formal shelter. The emergency tent can provide basic survival protection against rain, wind, and cold. It is recommended to use it with a ground mat or plastic sheet to increase warmth."
      },
      
      medical_kit: {
        name: "Medical Kit",
        description: "Small medical kit containing first aid supplies and personal medicines to deal with minor or serious injuries and common diseases.",
        note: "Basic medical kit should include bandages, disinfectant, and personal medication. At least prepare three days' worth, and check the expiration date every six months."
      },
      
      fire_starter: {
        name: "Fire Starter",
        description: "Includes waterproof matches, lighters, and magnesium rods, used for lighting, heating food, or lighting. ",
        note: "Fire starter should be prepared with at least two types (lighters + magnesium rods), and it can be used for heating, boiling water, or sending out SOS signals. It is recommended to prepare at least two types of fire starters as backup, and include dry fire starters, such as cotton balls or fire starter sheets."
      },
      
      knife: {
        name: "Knife",
        description: "Multi-purpose survival knife or tool knife, used for cutting, opening cans, repairing, and self-defense. ",
        note: "Knife is a survival essential. It is recommended to choose a fixed blade or folding knife, and carry it with a sheath for safe carrying. Familiarize yourself with the basic operation to avoid self-injury."
      },
      
      flashlight: {
        name: "Flashlight",
        description: "Small high-brightness flashlight, with spare batteries, used for night lighting or searching. ",
        note: "Lighting should have a flashlight + glow stick, and it is essential for night movement or operation. It is recommended to use waterproof and impact-resistant models. You can also prepare a headlamp to free your hands and improve survival operation efficiency."
      },
      
      gloves: {
        name: "Gloves",
        description: "Thick protective gloves, used to protect your hands when dealing with rubble, wood, or building materials. ",
        note: "In case of injury after a disaster,thick gloves can effectively prevent cutting, wear, and burns. It is recommended to choose slip-resistant and durable materials."
      },
      
      sun_hat_or_towel: {
        name: "Sun Hat or Towel",
        description: "Sun hat or headband, used for sun protection, cooling, and temporary bandaging. ",
        note: "Sun exposure容易中暑或脫水。Sun hat can effectively reduce head heat, and the headband can also be used as a temporary bandage and dust mask."
      },
      
      rope: {
        name: "Rope",
        description: "Lightweight, durable rope, used for building shelters, repairing, and pulling items. ",
        note: "Rope is a versatile tool. It is recommended to carry 5-10 meters of heavy-duty climbing rope. It can also be used with straps to increase flexibility in tying and securing."
      }
    },
    communication: {
      mobile_phone: {
        name: "Mobile Phone",
        description: "It is recommended to charge the phone and put it in a zip-lock bag in case of emergency. ",
        note: "The main phone is responsible for daily communication, and the backup phone is used to prevent the main phone from malfunctioning or not being charged. It can also be used with a power bank."
      },
      
      walkie_talkie: {
        name: "Walkie Talkie",
        description: "In the case of a communication outage, use the amateur radio frequency to communicate with friends, suitable for short-distance communication. ",
        note: "The general radio can be used within a range of 3-10 kilometers, depending on the terrain and obstacles. It is recommended to test the settings and channels with partners in advance."
      },
      
      map: {
        name: "Map",
        description: "In the case of a communication outage, use the amateur radio frequency to communicate with friends, suitable for short-distance communication. ",
        note: "The general radio can be used within a range of 3-10 kilometers, depending on the terrain and obstacles. It is recommended to test the settings and channels with partners in advance."
      },
      
      id_documents: {
        name: "ID Documents",
        description: "Passport, ID card, important documents. ",
        note: "Use a waterproof bag to ensure that you can present your identity, blood type, allergies, and special diseases in any situation, which is beneficial for medical and rescue registration."
      },
      
      cash: {
        name: "Cash",
        description: "Carry a small amount of cash and coins to deal with power outages when you cannot pay with credit cards or when the ATM is not functioning.",
        note: "It is recommended to carry paper bills (50-100 yuan) and coins, and disperse storage to avoid losing all of them."
      },
      
      whistle: {
        name: "Whistle",
        description: "In an emergency, send out a distress signal, which should be placed on the outside of the backpack for quick use.",
        note: "It is more effective and less labor-intensive than shouting for help. It is recommended to choose a survival whistle that has high penetration, is waterproof and drop-proof."
      },
      
      radio: {
        name: "Radio",
        description: "Battery-powered or hand-cranked radio.",
        note: "It is recommended to note down the local emergency channel (such as the Central Weather Bureau, local disaster prevention radio station) in advance and preset the radio to that channel. Police radio station - FM104.9 in the north and south; FM105.1 in the central part; FM101.3 in the northern area of ​​Hualien County and Taitung County; FM106.5 in the southern area of ​​Hualien County (Wuhe)"
      },
      
      power_bank: {
        name: "Power Bank",
        description: "In an emergency, send out a distress signal, which should be placed on the outside of the backpack for quick use.",
        note: "It is more effective and less labor-intensive than shouting for help. It is recommended to choose a survival whistle that has high penetration, is waterproof and drop-proof."
      },
      
      backpack: {
        name: "Waterproof Backpack",
        description: "Choose a waterproof material backpack, and pair it with a plastic bag or waterproof cloth to strengthen internal item protection. ",
        note: "In rainy or flood conditions, avoid equipment soaking, and important items (documents, electronic devices) are recommended to be double-layer waterproof packaged."
      },
      
      mask: {
        name: "N95 Mask",
        description: "Prepare N95-level masks, protect your respiratory system during dust, fire, or epidemic outbreaks. ",
        note: "It is recommended to prepare 2-3 masks for each person, and store them separately in a dry zip-lock bag to prevent moisture from affecting protection."
      }
    }
  }
}; 