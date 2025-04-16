// 中文語言資源檔案
window.i18n = window.i18n || {};
window.i18n.zh = {
  app_title: "防災避難準備清冊",
  sip_title: "SIP (Shelter-In-Place)",
  home_title: "居家避難包",
  home_description: "目標是在家中自給自足維持基本安全與生存，通常以7~14天長期為主",
  beta_tag: "逃難路徑規劃 (BETA) ->",
  total_progress: "總進度",
  
  // landing页面
  landing: {
    main_title: "防災避難準備清冊",
    sip_button_title: "居家避難 SIP",
    sip_button_subtitle: "Shelter-in-Place",
    edc_button_title: "日常隨身 EDC",
    edc_button_subtitle: "Everyday Carry",
    ghb_button_title: "安全返家 GHB",
    ghb_button_subtitle: "Get Home Bag",
    bob_button_title: "緊急撤離 BOB",
    bob_button_subtitle: "Bug Out Bag",
    coming_soon: "Coming Soon"
  },
  
  common: {
    progress: "準備進度",
    completed: "已完成",
    people: "人數",
    days: "天數",
    person: "人",
    day: "天",
    total: "總計",
    per_person: "每人所需",
    item: "項目",
    back: "返回",
    prepare: "去準備"
  },
  
  categories: {
    food: {
      title: "糧食",
      category: "FOOD",
      description: "食物準備的三大原則：不需烹煮、營養價值高熱量夠支撐體力、可存放時間長。<p>災難發生時可能無電、無瓦斯、無時間煮食，選擇即食/冷食可用為主。食物需適量蛋白質、碳水、脂肪、維生素，須備高密度熱量食物才能維持身體與情緒穩定。</p><p>範例食物品項：罐頭、即食麵類、自熱飯、能量棒、堅果、運動飲料粉</p>"
    },
    medical: {
      title: "醫療衛生",
      category: "MEDICAL",
      description: "<p>以自救與互救核心：災難發生後可能無法立即就醫。</p><li>基本急救用品 : 對應外傷、跌倒、出血等狀況，具備初步處理能力</li><li>常見病症 : 例如割傷、燒燙傷、腹瀉、感冒</li><li>慢性病藥物 : 例如高血壓、糖尿病、氣喘等患者</li><p>*記得定期檢查藥物有效期，避免藥物存放在潮濕或高溫環境。</p>"
    },
    living: {
      title: "生活用品",
      category: "LIVING",
      description: "<p>日常用品類常常是最容易忽略、但最容易造成生活不便與心理壓力的部分。良好的準備能大幅提升避難時的清潔、舒適感，尤其在缺水、斷電的狀況下病菌更容易滋生。</p><p>選擇多功能、輕便且耐用的物品，以清潔、收納、生理替代品。</p><p>備註 : 可為每人準備「個人清潔包」、乾濕物品分袋／分類放置。</p>"
    },
    info: {
      title: "電子通訊",
      category: "INFORMATION",
      description: "<p>保持資訊連結與基本通訊能力，獲取外界資訊與求救。</p><p>災時掌握正確資訊和保持通訊能力至關重要。確保設備具備多種供電方式，減少對單一電源的依賴。</p><p>設置省電模式，僅在必要時使用電子設備，延長電力供應時間。</p>"
    },
    tools: {
      title: "工具類",
      category: "TOOLS",
      description: "<p>災難發生後，基本工具可能成為救命物資，並協助適應惡劣環境。</p><p>優先考慮多功能、耐用性與便攜性，可從修理、切割、加熱、指引、照明、安全防護等6種方向切入</p><p>工具預先存放在方便取用的位置，確保所有家庭成員了解其位置與基本使用方法。</p><p>備註 : 可為每人準備「個人工具包」、工具分袋／分類放置。</p>"
    }
  },
  
  items: {
    food: {
      water: {
        name: "水",
        description: "每人每天3公升水，適當補充身體水分",
        note: "災難時每人每天需要2-3公升飲用水，夏季或高溫環境可能需要更多"
      },
      instant_food: {
        name: "即食飯、餅乾、泡麵",
        description: "主食提供碳水化合物能量來源",
        note: "選擇不需烹煮或簡易加熱的主食，提供基礎熱量"
      },
      protein_can: {
        name: "蛋白質罐頭(鮪魚/雞肉)",
        description: "補充蛋白質，維持肌肉",
        note: "罐頭保存期長，每日至少一份蛋白質食物維持體力"
      },
      energy_bar: {
        name: "高熱量(能量棒/巧克力)",
        description: "高熱量食物補充脂肪與快速能量",
        note: "能量密度高，提供快速能量及心理滿足感"
      },
      electrolyte: {
        name: "電解質粉",
        description: "補充電解質維持體液平衡與精神",
        note: "避免脫水及維持電解質平衡，特別是腹瀉或大量出汗狀況"
      },
      vitamin: {
        name: "綜合維他命",
        description: "補充各類微量元素",
        note: "維持營養均衡，長期災難狀況下更為重要"
      }
    },
    medical: {
      personal_med: {
        name: "個人藥物",
        description: "個人處方藥、慢性病用藥",
        note: "請根據個人情況準備，確保足夠用藥量"
      },
      first_aid: {
        name: "急救包",
        description: "需包含繃帶、紗布、膠帶、藥膏、消毒液等",
        note: "每人一套基本急救用品"
      },
      common_med: {
        name: "常見藥物",
        description: "感冒退燒藥、胃乳片胃藥、止吐暈車、止痛消炎藥、發泡錠、眼藥水、萬用藥膏、蚊蟲叮咬藥膏",
        note: "各式成藥，準備一組即可，須注意過期時間"
      },
      mask: {
        name: "口罩/N95口罩",
        description: "防灰塵、煙塵、部分有毒氣體",
        note: "每人每天至少1個，可重複使用類型可相應減少"
      },
      tissue: {
        name: "衛生紙",
        description: "基本衛生清潔用品",
        note: "每人每5天約需1包"
      },
      pad: {
        name: "衛生棉",
        description: "女性週期生理必需品",
        note: "每人每30天約需1組，緊急時可充當繃帶用途"
      },
      alcohol: {
        name: "酒精/消毒液",
        description: "表面和傷口消毒",
        note: "通常一瓶即可，注意安全存放"
      }
    },
    living:  {
      "blanket": {
        "name": "毯子",
        "description": "提供基本保暖與睡眠環境",
        "note": "選擇便於收納且輕便的款式，冬季需考慮保暖度"
      },
      "clothes": {
        "name": "個人衣物",
        "description": "換洗衣物與保暖層",
        "note": "建議準備薄厚適中、乾爽、不易起皺的衣物"
      },
      "toilet": {
        "name": "行動馬桶／便盆",
        "description": "可折疊式行動馬桶",
        "note": "適合高樓或無水狀況者使用，如廁後所需衛生紙已於醫療用品中統計，如需要可增加需求數量"
      },
      "gel_pad": {
        "name": "凝膠包／吸收墊",
        "description": "攪拌後可凝固排泄物，無臭、安全",
        "note": "當無水的時候，可以處理排泄物，若沒有凝膠包與吸收墊則改用垃圾袋處理"
      },
      "trash_bag": {
        "name": "垃圾袋",
        "description": "廚餘／排泄物／廢棄物分袋處理與臨時防水",
        "note": "大型黑色垃圾袋，可作廢棄物處理、防水套、臨時儲水等，可加厚黑袋作為簡易馬桶內袋使用"
      },
      "soap_sanitizer": {
        "name": "肥皂/乾洗手",
        "description": "清潔用品",
        "note": "乾洗手可用於手部消毒、而肥皂則用於簡易器具清潔"
      },
      "wet_wipes": {
        "name": "濕紙巾",
        "description": "基本清潔與衛生用途",
        "note": "無水情況下可用於基本清潔，選擇厚一點的規格"
      },
      "tarp_raincoat": {
        "name": "防水帆布/雨衣",
        "description": "多功能用途：雨具、遮蔽",
        "note": "可用於防雨、地墊、臨時遮蔽等多種用途"
      },
      "water_bucket": {
        "name": "水桶 / 集水袋",
        "description": "作為儲水用途",
        "note": "用於收集雨水，作為緊急用水，或是政府發放的救災物資可作為承接"
      },
      "water_filter": {
        "name": "便攜濾水器",
        "description": "作為濾水用途",
        "note": "用於濾水，可過濾水中的雜質，提供乾淨的飲用水"
      },
      "ziplock_bag": {
        "name": "夾鏈袋、食物用耐熱袋",
        "description": "作為食物保存、分裝用途",
        "note": "用於食物保存、分裝，可避免食物變質，如果必要時刻，可作為烹調用具隔水加熱烹煮食材"
      }
    },

    info:  {
    "power_bank": {
      "name": "行動電源",
      "description": "隨身電子設備充電",
      "note": "建議容量20000mAh以上，可支援多次手機充電"
    },
    "radio": {
      "name": "收音機",
      "description": "接收災害廣播與官方通知",
      "note": "災害時廣播常是最穩定的官方訊息來源，選擇多種供電方式"
    },
    "generator": {
      "name": "手搖/太陽能發電機",
      "description": "接收災害廣播與官方通知",
      "note": "作為發電機使用，可發電給收音機、手機等設備，通常與收音機或行動電源一起使用"
    },
    "spare_phone": {
      "name": "備用手機",
      "description": "緊急通話與資訊接收，離線地圖存放",
      "note": "可準備舊手機並預存重要聯絡人，確保有基本通話功能，可以先下載離線地圖、綁定AIR TAG確保家人定位(蘋果用戶)"
    },
    "charging_cable": {
      "name": "充電線/轉接頭",
      "description": "各類設備充電連接",
      "note": "準備各種設備所需的充電線，確認相容性"
    },
    "whistle": {
      "name": "哨子/求救器",
      "description": "非電子求救信號發送",
      "note": "聲音信號可在通訊中斷時發出求救，攜帶方便"
    },
    "contact_card": {
      "name": "紙本聯絡卡、白板／留言區",
      "description": "每人一份，與身分證件放一起",
      "note": "留言給其他家庭成員、外出時做行蹤紀錄，聯絡卡可寫上緊急聯絡人、家屬電話、血型、慢性病等資訊"
    },
    "spare_battery": {
      "name": "備用電池",
      "description": "AA/AAA電池供一般設備使用",
      "note": "確保收音機、手電筒等設備可持續使用"
    }
  },
  
    tools: {
      "multi_tool": {
        "name": "多功能工具刀",
        "description": "可執行切割、鉗夾、開罐等功能",
        "note": "災難情境中最實用的工具之一，選擇含常用功能的品牌工具"
      },
      "headlamp": {
        "name": "頭燈",
        "description": "夜間與停電時照明",
        "note": "選擇續航力長、亮度適中的LED燈具，建議一人一個"
      },
      "lighter": {
        "name": "打火機/防水火柴",
        "description": "生火、照明、烹煮",
        "note": "防水打火機可在惡劣環境下使用，保持乾燥，作為卡式爐無法使用的備用品"
      },
      "gas_stove": {
        "name": "卡式爐",
        "description": "烹煮、加熱食物",
        "note": "簡易收納即可使用瓦斯罐"
      },
      "gas_can": {
        "name": "瓦斯罐",
        "description": "燃料用途",
        "note": "使用技巧，盡量將該日食物一起烹煮煮熟，避免能源浪費，大約一人三天會用完一罐"
      },
      "flashlight": {
        "name": "手電筒/露營燈",
        "description": "照明用途",
        "note": "可準備充電式、手搖式的手電筒，或是戶外家用兩用露營燈"
      },
      "compass": {
        "name": "指南針",
        "description": "定位、導航",
        "note": "盡量選擇多功能，而非單一用途的指南針，例如繩子、哨子等結合的工具"
      },
      "waterproof_map": {
        "name": "防水地圖",
        "description": "疏散路線與資源位置",
        "note": "包含居住地周邊和可能避難的區域，標記重要位置"
      },
      "gloves": {
        "name": "厚防割手套",
        "description": "耐磨材質、防滑設計",
        "note": "處理碎物、修繕或清理時保護雙手"
      }
    }
  }
}; 