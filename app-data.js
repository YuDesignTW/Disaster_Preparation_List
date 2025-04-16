// 統一的資料檔案 - 使用語言無關的鍵值結構
window.appData = {
  // 基本配置
  config: {
    defaultPeople: 1,
    defaultDays: 14,
    peopleOptions: [1, 2, 3, 4, 5],
    daysOptions: [3, 7, 14, 30]
  },
  
  // 所有類別
  categories: [
    {
      key: "food",
      number: "01",
      iconSrc: "images/01.png",
      detailPageId: "detail-01"
    },
    {
      key: "medical",
      number: "02",
      iconSrc: "images/02.png",
      detailPageId: "detail-02"
    },
    {
      key: "living",
      number: "03",
      iconSrc: "images/03.png",
      detailPageId: "detail-03"
    },
    {
      key: "info",
      number: "04",
      iconSrc: "images/04.png",
      detailPageId: "detail-04"
    },
    {
      key: "tools",
      number: "05",
      iconSrc: "images/05.png",
      detailPageId: "detail-05"
    }
  ],
  
  // 各類別物品
  items: {
    // 食物項目
    food: [
      {
        key: "water",
        quantity: 3,
        unit: "L",
        scaling: "people_days",
        link: "https://s.shopee.tw/LZsATh8Rc"
      },
      {
        key: "instant_food",
        quantity: 2,
        unit: "份",
        scaling: "people_days",
        link: "https://s.shopee.tw/5KyY6xg9Ja"
      },
      {
        key: "protein_can",
        quantity: 1,
        unit: "份",
        scaling: "people_days",
        link: "https://s.shopee.tw/7zzJI2IcK5"
      },
      {
        key: "energy_bar",
        quantity: 1,
        unit: "份",
        scaling: "people_days",
        link: "https://s.shopee.tw/9KUgsdW2eP"
      },
      {
        key: "electrolyte",
        quantity: 1,
        unit: "包",
        scaling: "people_days",
        link: "https://s.shopee.tw/4q2HWRgTjA"
      },
      {
        key: "vitamin",
        quantity: 1,
        unit: "顆",
        scaling: "people_days"
      }
    ],
    
    // 醫療項目 
    medical: [
      {
        key: "personal_med",
        quantity: 1,
        unit: "份",
        scaling: "none"
      },
      {
        key: "first_aid",
        quantity: 1,
        unit: "套",
        scaling: "people"
      },
      {
        key: "common_med",
        quantity: 1,
        unit: "組",
        scaling: "none"
      },
      {
        key: "mask",
        quantity: 1,
        unit: "個",
        scaling: "people_days"
      },
      {
        key: "tissue",
        quantity: 1,
        unit: "包",
        scaling: "people_days_divided",
        scaling_factor: 5
      },
      {
        key: "pad",
        quantity: 1,
        unit: "組",
        scaling: "people_days_divided",
        scaling_factor: 30
      },
      {
        key: "alcohol",
        quantity: 1,
        unit: "瓶",
        scaling: "none"
      }
    ],
    
    // 生活用品
    living: [
      {
        "key": "blanket",
        "quantity": 1,
        "unit": "個",
        "scaling": "people"
      },
      {
        "key": "clothes",
        "quantity": 1,
        "unit": "套",
        "scaling": "people"
      },
      {
        "key": "toilet",
        "quantity": 1,
        "unit": "組",
        "scaling": "people_days_divided",
        "scaling_factor": 3,
        "link": "https://s.shopee.tw/4firKdLW48"
      },
      {
        "key": "gel_pad",
        "quantity": 1,
        "unit": "組",
        "scaling": "people_days_divided",
        "scaling_factor": 1,
        "link": "https://s.shopee.tw/AUgeHsv3Me"
      },
      {
        "key": "trash_bag",
        "quantity": 2,
        "unit": "個",
        "scaling": "people_days_divided",
        "scaling_factor": 3
      },
      {
        "key": "soap_sanitizer",
        "quantity": 1,
        "unit": "瓶",
        "scaling": "people_days_divided",
        "scaling_factor": 30
      },
      {
        "key": "wet_wipes",
        "quantity": 1,
        "unit": "包",
        "scaling": "people_days_divided",
        "scaling_factor": 7
      },
      {
        "key": "tarp_raincoat",
        "quantity": 1,
        "unit": "塊",
        "scaling": "none"
      },
      {
        "key": "water_bucket",
        "quantity": 1,
        "unit": "組",
        "scaling": "none"
      },
      {
        "key": "water_filter",
        "quantity": 1,
        "unit": "組",
        "scaling": "none",
        "link": "https://s.shopee.tw/9pQxUkQABX"
      },
      {
        "key": "ziplock_bag",
        "quantity": 1,
        "unit": "組",
        "scaling": "none"
      }
    ] 
    ,
    
    // 電子通訊
    info: [
      {
        "key": "power_bank",
        "quantity": 1,
        "unit": "個",
        "scaling": "people",
        "link": "https://s.shopee.tw/AUgeJuSQgm"
      },
      {
        "key": "radio",
        "quantity": 1,
        "unit": "台",
        "scaling": "none",
        "link": "https://s.shopee.tw/AUgeJuSQgm"
      },
      {
        "key": "generator",
        "quantity": 1,
        "unit": "台",
        "scaling": "none",
        "link": "https://s.shopee.tw/60EExqM1UF"
      },
      {
        "key": "spare_phone",
        "quantity": 1,
        "unit": "台",
        "scaling": "none"
      },
      {
        "key": "charging_cable",
        "quantity": 2,
        "unit": "條",
        "scaling": "none"
      },
      {
        "key": "whistle",
        "quantity": 1,
        "unit": "個",
        "scaling": "people",
        "link": "https://s.shopee.tw/2LKwZctkhO"
      },
      {
        "key": "contact_card",
        "quantity": 1,
        "unit": "個",
        "scaling": "people"
      },
      {
        "key": "spare_battery",
        "quantity": 4,
        "unit": "顆",
        "scaling": "none"
      }
    ],
    
    // 工具類
    tools: [
      {
        "key": "multi_tool",
        "quantity": 1,
        "unit": "把",
        "scaling": "none",
        "link": "https://s.shopee.tw/gCibVKwMQ"
      },
      {
        "key": "headlamp",
        "quantity": 1,
        "unit": "個",
        "scaling": "people",
        "link": "https://s.shopee.tw/1VlpbDuZ7K"
      },
      {
        "key": "lighter",
        "quantity": 1,
        "unit": "個",
        "scaling": "none",
        "link": "https://s.shopee.tw/3VWtxwTXlA"
      },
      {
        "key": "gas_stove",
        "quantity": 1,
        "unit": "個",
        "scaling": "none",
        "link": "https://s.shopee.tw/2qHDANn9pS"
      },
      {
        "key": "gas_can",
        "quantity": 1,
        "unit": "個",
        "scaling": "people_days_divided",
        "scaling_factor": 3,
        "link": "https://s.shopee.tw/8UvZubj57K"
      },
      {
        "key": "flashlight",
        "quantity": 1,
        "unit": "個",
        "scaling": "none",
        "link": "https://s.shopee.tw/8fF07a1dIm"
      },
      {
        "key": "compass",
        "quantity": 1,
        "unit": "個",
        "scaling": "none",
        "link": "https://s.shopee.tw/2LKwZctkhO"
      },
      {
        "key": "waterproof_map",
        "quantity": 1,
        "unit": "份",
        "scaling": "none"
      },
      {
        "key": "gloves",
        "quantity": 1,
        "unit": "份",
        "scaling": "none",
        "link": "https://s.shopee.tw/9zkNi8yTNa"
      }
    ]
  },
  
  // 額外備註
  additional_notes: {
    food: [
      "long_storage_note",
      "nutrition_note",
      "portion_adjustment_note"
    ],
    medical: [
      "medication_check_note",
      "first_aid_knowledge_note",
      "hygiene_note"
    ],
    living: [
      "personal_hygiene_note",
      "waste_management_note",
      "comfort_note"
    ],
    info: [
      "battery_saving_note",
      "communication_plan_note",
      "info_verification_note"
    ],
    tools: [
      "tool_location_note",
      "safety_precaution_note",
      "multi_purpose_note"
    ]
  }
}; 