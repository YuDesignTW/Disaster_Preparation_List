// 統一的資料檔案 - 使用語言無關的鍵值結構
window.appData = {
  // 基本配置
  config: {
    defaultPeople: 1,
    defaultDays: 3,
    peopleOptions: [1, 2, 3, 4, 5],
    daysOptions: [3, 5, 7, 14, 30]
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
      key: "tool",
      number: "02",
      iconSrc: "images/02.png",
      detailPageId: "detail-02"
    },
    {
      key: "communication",
      number: "03",
      iconSrc: "images/03.png",
      detailPageId: "detail-03"
    },
  ],
  
  // 各類別物品
  items: {
    // 食物項目
    food: [
      {
        key: "water",
        quantity: 1,
        unit: "L",
        scaling: "people_days",
        link: "https://s.shopee.tw/LaFhgSfLi"
      },
      {
        key: "filter",
        quantity: 1,
        unit: "份",
        scaling: "none",
        link: "https://s.shopee.tw/2LLK5PJDnM"
      },
      {
        key: "hydration_bladder",
        quantity: 1,
        unit: "個",
        scaling: "none",
        link: "https://s.shopee.tw/4Amv3HXCrJ"
      },
      {
        key: "energy_bar",
        quantity: 1,
        unit: "份",
        scaling: "people_days",
        link: "https://s.shopee.tw/1VmD5kzVjx"
      },
    ],
    
    // 求生工具項目 
    tool: [
      {
        key: "foil_blanket",
        quantity: 1,
        unit: "條",
        scaling: "people",
        link: "https://s.shopee.tw/8pYkbgSPOt"
      },
      {
        key: "emergency_tent",
        quantity: 1,
        unit: "頂",
        scaling: "none",
        link: "https://s.shopee.tw/xM5gXMOR"
      },
      {
        key: "medical_kit",
        quantity: 1,
        unit: "套",
        scaling: "none",
        link: "https://s.shopee.tw/9KV1D1GD0b"
      },
      {
        key: "fire_starter",
        quantity: 2,
        unit: "個",
        scaling: "none",
        link: "https://s.shopee.tw/5AfVSkwghV"
      },
      {
        key: "knife",
        quantity: 1,
        unit: "把",
        scaling: "none",
        link: "https://s.shopee.tw/5KyY6xg9Ja"
      },
      {
        key: "flashlight",
        quantity: 1,
        unit: "支",
        scaling: "none",
        link: "https://s.shopee.tw/2LLGseu2tf"
      },
      {
        key: "gloves",
        quantity: 1,
        unit: "雙",
        scaling: "people",
        link: "https://s.shopee.tw/8KcXEWPZRv"
      },
      {
        key: "sun_hat_or_towel",
        quantity: 1,
        unit: "頂",
        scaling: "people",
        link: "https://s.shopee.tw/30b0snLmtm"
      },
      {
        key: "rope",
        quantity: 1,
        unit: "捆",
        scaling: "none",
        link: "https://s.shopee.tw/4AmyGc3QUI"
      }
    ],
    
    // 通信與移動用品
    communication:[
      {
        "key": "mobile_phone",
        "quantity": 2,
        "unit": "個",
        "scaling": "none",
      },
      {
        "key": "walkie_talkie",
        "quantity": 1,
        "unit": "個",
        "scaling": "none",
        "link": "https://s.shopee.tw/3fqhg3idL3"
      },
      {
        "key": "map",
        "quantity": 1,
        "unit": "個",
        "scaling": "none",
        "link": "https://s.shopee.tw/2VekHvzs0X"
      },
      {
        "key": "id_documents",
        "quantity": 1,
        "unit": "個",
        "scaling": "none",
      },
      {
        "key": "cash",
        "quantity": 1,
        "unit": "個",
        "scaling": "none",
        "link": "https://s.shopee.tw/3qA7sLe0GN"
      },
      {
        "key": "whistle",
        "quantity": 1,
        "unit": "個",
        "scaling": "none",
        "link": "https://s.shopee.tw/10pwVCvYq2"
      },
      {
        "key": "radio",
        "quantity": 1,
        "unit": "個",
        "scaling": "none",
        "link": "https://s.shopee.tw/AKNbVi4d7q"
      },
      {
        "key": "power_bank",
        "quantity": 1,
        "unit": "個",
        "scaling": "none",
        "link": "https://s.shopee.tw/7fMqR3pDVM"
      },
      {
        "key": "backpack",
        "quantity": 1,
        "unit": "個",
        "scaling": "none",
        "link": "https://s.shopee.tw/6AY2el5tFw"
      },
      {
        "key": "mask",
        "quantity": 3,
        "unit": "個",
        "scaling": "none",
        "link": "https://s.shopee.tw/7zzgq9cRqW"
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