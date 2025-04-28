// Google Analytics 集成
const Analytics = {
  // GA4 测量ID - 这里需要替换为您从Google Analytics获取的实际ID
  measurementId: 'G-XXXXXXXXXX', // 请替换为您的真实GA4测量ID，格式如G-XXXXXXXX
  
  // 初始化GA
  init() {
    // 添加GA4脚本
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
    document.head.appendChild(script);
    
    // 初始化gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', this.measurementId);
    
    // 绑定事件跟踪
    this.bindEvents();
    
    console.log('Google Analytics 已初始化');
  },
  
  // 跟踪页面浏览
  pageView(pagePath, pageTitle) {
    if (!window.gtag) return;
    
    const pageInfo = {
      page_path: pagePath || window.location.pathname,
      page_title: pageTitle || document.title
    };
    
    gtag('event', 'page_view', pageInfo);
    console.log('跟踪页面浏览:', pageInfo);
  },
  
  // 跟踪事件
  trackEvent(eventName, parameters = {}) {
    if (!window.gtag) return;
    
    gtag('event', eventName, parameters);
    console.log('跟踪事件:', eventName, parameters);
  },
  
  // 绑定特定事件
  bindEvents() {
    // 跟踪语言切换
    document.addEventListener('click', (e) => {
      if (e.target.closest('.language-selector button')) {
        const locale = e.target.getAttribute('data-locale');
        if (locale) {
          this.trackEvent('language_change', { 'language': locale });
        }
      }
    });
    
    // 跟踪清单项目选择
    document.addEventListener('change', (e) => {
      if (e.target.classList.contains('checkbox')) {
        const item = e.target.closest('.checklist-item');
        if (item) {
          const itemKey = item.getAttribute('data-item-key');
          const isChecked = e.target.checked;
          this.trackEvent('item_checked', { 
            'item_key': itemKey,
            'checked': isChecked ? 'yes' : 'no',
            'category': this.getCurrentCategory()
          });
        }
      }
    });
    
    // 跟踪详情页面打开
    document.addEventListener('click', (e) => {
      const block = e.target.closest('.food-block, .tools-block, .info-block, .medical-block, .living-block');
      if (block) {
        const category = block.getAttribute('data-category');
        const title = block.getAttribute('data-title');
        if (category) {
          this.trackEvent('detail_page_open', { 'category': category, 'title': title });
        }
      }
    });
    
    // 跟踪人数和天数设置更改
    document.addEventListener('click', (e) => {
      if (e.target.closest('.people-setting')) {
        setTimeout(() => {
          const people = window.globalSettings?.people;
          if (people) {
            this.trackEvent('people_setting_change', { 'value': people });
          }
        }, 100);
      }
      
      if (e.target.closest('.days-setting')) {
        setTimeout(() => {
          const days = window.globalSettings?.days;
          if (days) {
            this.trackEvent('days_setting_change', { 'value': days });
          }
        }, 100);
      }
    });
  },
  
  // 获取当前分类
  getCurrentCategory() {
    const detailPage = document.querySelector('.detail-page.active');
    if (!detailPage) return 'unknown';
    
    const id = detailPage.id;
    const category = window.appData?.categories.find(cat => cat.detailPageId === id);
    return category ? category.key : 'unknown';
  }
};

// 导出模块
window.Analytics = Analytics; 