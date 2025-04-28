// 語言管理模組
const LocaleManager = {
  currentLocale: 'zh',
  supportedLocales: ['zh', 'en', 'ja', 'th'],
  
  init() {
    // 檢查localStorage是否已有語言設定
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && this.supportedLocales.includes(savedLocale)) {
      this.currentLocale = savedLocale;
    } else {
      // 檢查瀏覽器語言
      const browserLang = navigator.language.split('-')[0];
      if (this.supportedLocales.includes(browserLang)) {
        this.currentLocale = browserLang;
      }
    }
    
    // 更新HTML lang屬性
    document.documentElement.lang = this.currentLocale;
    
    // 初始載入文字
    this.updateAllTexts();
    
    // 添加語言選擇器到頁面
    this.addLanguageSelector();
  },
  
  setLocale(locale) {
    if (this.supportedLocales.includes(locale)) {
      const previousLocale = this.currentLocale;
      this.currentLocale = locale;
      localStorage.setItem('locale', locale);
      document.documentElement.lang = locale;
      this.updateAllTexts();
      
      // 跟踪语言切换事件
      if (window.Analytics && previousLocale !== locale) {
        Analytics.trackEvent('language_change', {
          'from': previousLocale,
          'to': locale
        });
      }
      
      return true;
    }
    return false;
  },
  
  getText(key, section = null) {
    const i18nData = window.i18n[this.currentLocale];
    
    if (!i18nData) return key;
    
    if (section) {
      const sections = section.split('.');
      let value = i18nData;
      
      for (const s of sections) {
        if (value && value[s]) {
          value = value[s];
        } else {
          return key;
        }
      }
      
      return value && value[key] ? value[key] : key;
    }
    
    return i18nData[key] || key;
  },
  
  getItemText(category, itemKey, field) {
    return this.getText(field, `items.${category}.${itemKey}`);
  },
  
  updateAllTexts() {
    // 檢查是否是主頁還是landing頁面
    const isLandingPage = document.querySelector('.landing-container') !== null;
    
    if (isLandingPage) {
      this.updateLandingTexts();
    } else {
      this.updateMainPageTexts();
    }
  },
  
  updateMainPageTexts() {
    // 更新頁面標題
    document.title = this.getText('app_title');
    
    // 更新主頁元素
    this.updateElementText('.sip-title', 'sip_title');
    this.updateElementText('.center-content h1', 'home_title');
    this.updateElementText('.description', 'home_description');
    this.updateElementText('.beta-link', 'beta_tag');
    this.updateElementText('.total-progress-text', 'total_progress');
    
    // 更新各區塊標題
    window.appData.categories.forEach(category => {
      const blockSelector = `.${category.key}-block`;
      const titleSelector = `${blockSelector} .title`;
      const categorySelector = `${blockSelector} .category`;
      
      this.updateElementText(titleSelector, 'title', `categories.${category.key}`);
      this.updateElementText(categorySelector, 'category', `categories.${category.key}`);
    });
    
    // 更新詳情頁面
    this.updateDetailPages();
    
    // 更新按鈕文字
    this.updateButtonTexts();
  },
  
  updateLandingTexts() {
    // 更新頁面標題
    document.title = this.getText('app_title');
    
    // 更新主標題
    this.updateElementText('.main-title', 'main_title', 'landing');
    
    // 更新按鈕文字
    const buttonTitles = document.querySelectorAll('.button-title');
    const buttonSubtitles = document.querySelectorAll('.button-subtitle');
    const comingSoonTexts = document.querySelectorAll('.coming-soon');
    
    if (buttonTitles.length >= 4) {
      buttonTitles[0].textContent = this.getText('sip_button_title', 'landing');
      buttonSubtitles[0].textContent = this.getText('sip_button_subtitle', 'landing');
      
      buttonTitles[1].textContent = this.getText('edc_button_title', 'landing');
      buttonSubtitles[1].textContent = this.getText('edc_button_subtitle', 'landing');
      
      buttonTitles[2].textContent = this.getText('ghb_button_title', 'landing');
      buttonSubtitles[2].textContent = this.getText('ghb_button_subtitle', 'landing');
      
      buttonTitles[3].textContent = this.getText('bob_button_title', 'landing');
      buttonSubtitles[3].textContent = this.getText('bob_button_subtitle', 'landing');
    }
    
    comingSoonTexts.forEach(text => {
      text.textContent = this.getText('coming_soon', 'landing');
    });
  },
  
  updateElementText(selector, key, section = null) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.textContent = this.getText(key, section);
    });
  },
  
  updateElementHTML(selector, key, section = null) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.innerHTML = this.getText(key, section);
    });
  },
  
  updateDetailPages() {
    // 更新各詳情頁面的文字
    window.appData.categories.forEach(category => {
      const detailPage = document.getElementById(category.detailPageId);
      if (!detailPage) return;
      
      // 更新標題
      this.updateElementText(`#${category.detailPageId} .detail-title`, 'title', `categories.${category.key}`);
      this.updateElementText(`#${category.detailPageId} .detail-category`, 'category', `categories.${category.key}`);
      
      // 更新描述 (使用HTML)
      this.updateElementHTML(`#${category.detailPageId} .detail-description`, 'description', `categories.${category.key}`);
      
      // 更新進度文字
      this.updateElementText(`#${category.detailPageId} .progress-text`, 'progress', 'common');
      
      // 更新清單表頭
      this.updateElementText(`#${category.detailPageId} .col-item`, 'item', 'common');
      this.updateElementText(`#${category.detailPageId} .col-per-person`, 'per_person', 'common');
      this.updateElementText(`#${category.detailPageId} .col-people`, 'people', 'common');
      this.updateElementText(`#${category.detailPageId} .col-days`, 'days', 'common');
      this.updateElementText(`#${category.detailPageId} .col-total`, 'total', 'common');
    });
  },
  
  updateButtonTexts() {
    // 更新人數和天數按鈕
    const peopleSettings = document.querySelectorAll('.people-setting span:first-child');
    peopleSettings.forEach(el => {
      el.textContent = this.getText('people', 'common');
    });
    
    const daysSettings = document.querySelectorAll('.days-setting span:first-child');
    daysSettings.forEach(el => {
      el.textContent = this.getText('days', 'common');
    });
    
    // 更新人數顯示格式
    this.updatePeopleAndDaysFormat();
  },
  
  updatePeopleAndDaysFormat() {
    // 更新人數顯示
    const peopleSettings = document.querySelectorAll('.people-setting span:last-child');
    peopleSettings.forEach(el => {
      const currentPeople = window.globalSettings.people;
      el.textContent = `${currentPeople}`;
    });
    
    // 更新天數顯示
    const daysSettings = document.querySelectorAll('.days-setting span:last-child');
    daysSettings.forEach(el => {
      const currentDays = window.globalSettings.days;
      el.textContent = `${currentDays}`;
    });
    
    // 更新項目中的人數和天數
    const itemPeople = document.querySelectorAll('.item-people');
    itemPeople.forEach(el => {
      const currentPeople = window.globalSettings.people;
      el.textContent = `${currentPeople}`;
    });
    
    const itemDays = document.querySelectorAll('.item-days');
    itemDays.forEach(el => {
      const currentDays = window.globalSettings.days;
      el.textContent = `${currentDays}`;
    });
  },
  
  addLanguageSelector() {
    // 如果已經存在語言選擇器，不再添加
    if (document.querySelector('.language-selector')) return;
    
    // 檢查是否是主頁還是landing頁面
    const isLandingPage = document.querySelector('.landing-container') !== null;
    
    // 創建語言選擇器
    const selectorDiv = this.createLanguageSelector();
    
    // 添加語言選擇器到頁面
    this.addSelectorToPage(selectorDiv, isLandingPage);
    
    // 如果是landing頁面，添加語言圖標和相關事件
    if (isLandingPage) {
      this.addIconAndEventListeners(selectorDiv);
    }
  },
  
  // 創建語言選擇器基本DOM結構
  createLanguageSelector() {
    const selectorDiv = document.createElement('div');
    selectorDiv.className = 'language-selector';
    
    this.supportedLocales.forEach(locale => {
      const button = document.createElement('button');
      button.setAttribute('data-locale', locale);
      
      // 根據語言設置按鈕文字
      let buttonText = '';
      switch(locale) {
        case 'zh':
          buttonText = '中文';
          break;
        case 'en':
          buttonText = 'English';
          break;
        case 'ja':
          buttonText = '日本語';
          break;
        case 'th':
          buttonText = 'ไทย';
          break;
        default:
          buttonText = locale;
      }
      
      button.textContent = buttonText;
      button.className = locale === this.currentLocale ? 'active' : '';
      
      button.addEventListener('click', () => {
        this.setLocale(locale);
        // 更新按鈕樣式
        document.querySelectorAll('.language-selector button').forEach(btn => {
          btn.className = btn.getAttribute('data-locale') === locale ? 'active' : '';
        });
        
        // 在手機版點擊後隱藏選單
        if (window.innerWidth <= 768) {
          selectorDiv.classList.remove('visible');
        }
      });
      
      selectorDiv.appendChild(button);
    });
    
    return selectorDiv;
  },
  
  // 將選擇器添加到頁面中的適當位置
  addSelectorToPage(selectorDiv, isLandingPage) {
    if (isLandingPage) {
      const landingContainer = document.querySelector('.landing-container');
      if (landingContainer) {
        landingContainer.appendChild(selectorDiv);
      }
    } else {
      const centerBottom = document.querySelector('.center-bottom');
      if (centerBottom) {
        centerBottom.prepend(selectorDiv);
      }
    }
  },
  
  // 添加語言圖標和相關事件處理
  addIconAndEventListeners(selectorDiv) {
    // 只在landing頁面添加語言圖標
    const languageIcon = document.createElement('div');
    languageIcon.className = 'language-icon';
    document.body.appendChild(languageIcon);
    
    // 為圖標添加點擊事件
    languageIcon.addEventListener('click', (e) => {
      e.stopPropagation(); // 阻止事件冒泡
      selectorDiv.classList.toggle('visible');
    });
    
    // 點擊頁面其他地方時隱藏選單
    document.addEventListener('click', (e) => {
      if (!selectorDiv.contains(e.target) && e.target !== languageIcon) {
        selectorDiv.classList.remove('visible');
      }
    });
  },
  
  updateChecklistItems() {
    // 當生成項目清單後，更新各項目的文字
    window.appData.categories.forEach(category => {
      const items = window.appData.items[category.key];
      if (!items) return;
      
      items.forEach(item => {
        // 查找對應的清單項
        const itemElements = document.querySelectorAll(`#${category.detailPageId} .checklist-item`);
        itemElements.forEach(el => {
          const itemNameEl = el.querySelector('.item-name');
          if (!itemNameEl) return;
          
          // 尋找對應的項目
          const currentItemKey = this.findItemKeyByName(itemNameEl.textContent, category.key);
          if (currentItemKey === item.key) {
            // 更新項目名稱
            itemNameEl.textContent = this.getItemText(category.key, item.key, 'name');
            
            // 更新詳細信息
            const detailsEl = el.nextElementSibling;
            if (detailsEl && detailsEl.classList.contains('item-details')) {
              const descEl = detailsEl.querySelector('.item-description');
              const noteEl = detailsEl.querySelector('.item-note');
              
              if (descEl) descEl.textContent = this.getItemText(category.key, item.key, 'description');
              if (noteEl) noteEl.textContent = this.getItemText(category.key, item.key, 'note');
              
              // 更新"去準備"按鈕
              const prepareBtn = detailsEl.querySelector('.prepare-button');
              if (prepareBtn) {
                prepareBtn.textContent = this.getText('prepare', 'common');
              }
            }
          }
        });
      });
    });
  },
  
  findItemKeyByName(name, categoryKey) {
    // 通過名稱反向查找項目的key
    const items = window.appData.items[categoryKey];
    if (!items) return null;
    
    for (const item of items) {
      const itemName = this.getItemText(categoryKey, item.key, 'name');
      if (itemName === name || name.includes(itemName) || itemName.includes(name)) {
        return item.key;
      }
    }
    
    return null;
  },
  
  // 取得單位量詞的翻譯
  getUnitText(unit) {
    // 如果單位本身已經是多語言的(如 L, ml 等)，直接返回
    const universalUnits = ['L', 'ml', 'kg', 'g'];
    if (universalUnits.includes(unit)) {
      return unit;
    }
    
    // 檢查是否有專門的單位翻譯
    const unitTranslations = {
      zh: {
        '個': '個',
        '台': '台',
        '條': '條',
        '顆': '顆',
        '份': '份',
        '包': '包',
        '瓶': '瓶',
        '套': '套',
        '組': '組',
        '把': '把',
        '塊': '塊'
      },
      en: {
        '個': 'pc',
        '台': 'unit',
        '條': 'pc',
        '顆': 'pc',
        '份': 'set',
        '包': 'pack',
        '瓶': 'bottle',
        '套': 'set',
        '組': 'set',
        '把': 'pc',
        '塊': 'pc'
      },
      ja: {
        '個': '個',
        '台': '台',
        '條': '本',
        '顆': '個',
        '份': '組',
        '包': 'パック',
        '瓶': '本',
        '套': 'セット',
        '組': 'セット',
        '把': '本',
        '塊': '個'
      },
      th: {
        '個': 'ชิ้น',
        '台': 'เครื่อง',
        '條': 'อัน',
        '顆': 'เม็ด',
        '份': 'ชุด',
        '包': 'แพ็ค',
        '瓶': 'ขวด',
        '套': 'ชุด',
        '組': 'ชุด',
        '把': 'อัน',
        '塊': 'ชิ้น'
      }
    };
    
    const translations = unitTranslations[this.currentLocale];
    if (translations && translations[unit]) {
      return translations[unit];
    }
    
    // 如果沒有找到翻譯，返回原始單位
    return unit;
  }
};

// 導出語言管理器
window.LocaleManager = LocaleManager; 