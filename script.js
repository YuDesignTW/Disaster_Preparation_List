document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有區塊和詳情頁面
    const blocks = document.querySelectorAll('.food-block, .tools-block, .info-block, .medical-block, .living-block');
    const detailPages = document.querySelectorAll('.detail-page');
    const backButtons = document.querySelectorAll('.back-button');
    const checkboxes = document.querySelectorAll('.checkbox');
    const progressCounts = document.querySelectorAll('.progress-count');

    // 全局設定，所有頁面共享
    window.globalSettings = {
        people: window.appData.config.defaultPeople,
        days: window.appData.config.defaultDays
    };
    
    // 將通用的加載數據邏輯抽象為一個函數
    function loadData(categoryKey, generateFunction) {
        try {
            // 從統一資料源獲取數據
            const data = window.appData.items[categoryKey];
            
            if (!data) {
                console.error(`${categoryKey}數據未找到`);
                return null;
            }
            
            // 生成清單項目
            generateFunction({category: categoryKey, items: data});
            
            // 確保數據加載後立即更新數量
            setTimeout(updateQuantities, 100);
            
            return {category: categoryKey, items: data};
        } catch (error) {
            console.error(`加載${categoryKey}數據失敗: ${error.message}`);
            return null;
        }
    }

    function loadFoodData() {
        return loadData('food', generateFoodItems);
    }

    function loadMedicalData() {
        return loadData('medical', generateMedicalItems);
    }
    
    function loadLivingData() {
        return loadData('living', generateLivingItems);
    }
    
    function loadInfoData() {
        return loadData('info', generateInfoItems);
    }
    
    function loadToolsData() {
        return loadData('tools', generateToolsItems);
    }

    // 抽象出公共的generateItems函數
    function generateItems(data, pageId) {
        if (!data || !data.items || !data.items.length) {
            console.error(`${getCategoryNameByPageId(pageId)}數據格式不正確`);
            return;
        }
        
        const page = document.getElementById(pageId);
        if (!page) {
            console.error(`找不到${getCategoryNameByPageId(pageId)}詳情頁面`);
            return;
        }
        
        const checklist = page.querySelector('.checklist');
        if (!checklist) {
            console.error(`找不到${getCategoryNameByPageId(pageId)}清單容器`);
            return;
        }
        
        // 獲取標題行後的分隔線元素
        const divider = checklist.querySelector('.checklist-divider');
        
        // 清除現有的清單項目（如果有的話）
        const existingItems = checklist.querySelectorAll('.item-container');
        existingItems.forEach(item => item.remove());
        
        // 確定類別
        const category = getCategoryByPageId(pageId);
        
        // 創建並添加新的清單項目（反轉數據順序，使顯示順序與數據一致）
        const items = [...data.items].reverse();
        
        items.forEach(item => {
            const itemContainer = document.createElement('div');
            itemContainer.className = 'item-container';
            
            const checklistItem = document.createElement('div');
            checklistItem.className = 'checklist-item';
            checklistItem.setAttribute('data-item-key', item.key);
            
            // 檢查之前是否有保存的選中狀態
            const isChecked = localStorage.getItem(`${category}-${item.key}`) === 'true';
            
            // 獲取本地化的項目名稱
            const itemName = LocaleManager.getItemText(category, item.key, 'name');
            
            // 基本項目信息
            checklistItem.innerHTML = `
                <input type="checkbox" class="checkbox" ${isChecked ? 'checked' : ''}>
                <span class="item-name">${itemName}</span>
                <span class="item-per-person">${item.quantity}${LocaleManager.getUnitText(item.unit)}</span>
                <span class="item-people">${globalSettings.people}</span>
                <span class="item-days">${globalSettings.days}</span>
                <span class="item-total">-</span>
            `;
            
            // 如果已選中，添加selected類別
            if (isChecked) {
                checklistItem.classList.add('selected');
            }
            
            // 詳細信息區塊
            const itemDetails = document.createElement('div');
            itemDetails.className = 'item-details';
            
            // 獲取本地化的描述和備註
            const itemDesc = LocaleManager.getItemText(category, item.key, 'description');
            const itemNote = LocaleManager.getItemText(category, item.key, 'note');
            
            // 準備詳細信息的HTML內容
            let detailsHTML = `
                <div class="item-description">${itemDesc || ''}</div>
                <div class="item-note">${itemNote || ''}</div>
            `;
            
            // 如果有連結，添加"去準備"按鈕
            if (item.link) {
                detailsHTML += `
                    <div class="details-actions">
                        <a href="${item.link}" target="_blank" class="prepare-button">${LocaleManager.getText('prepare', 'common')}</a>
                    </div>
                `;
            }
            
            itemDetails.innerHTML = detailsHTML;
            
            // 添加項目和詳細信息到容器
            itemContainer.appendChild(checklistItem);
            itemContainer.appendChild(itemDetails);
            
            // 將新項目插入到分隔線之後
            divider.insertAdjacentElement('afterend', itemContainer);
            
            // 綁定點擊展開/收合事件
            checklistItem.addEventListener('click', function(e) {
                // 阻止事件傳播到複選框，使複選框可以正常點擊
                if (e.target.classList.contains('checkbox')) {
                    e.stopPropagation();
                    return;
                }
                
                this.classList.toggle('expanded');
                
                // 切換詳細信息的顯示
                const details = this.nextElementSibling;
                if (details && details.classList.contains('item-details')) {
                    if (this.classList.contains('expanded')) {
                        details.style.display = 'block';
                    } else {
                        details.style.display = 'none';
                    }
                }
            });
        });
        
        // 更新進度計數和重新綁定事件
        updateProgress();
        bindCheckboxEvents();
    }
    
    // 從頁面ID獲取類別名稱，用於錯誤消息
    function getCategoryNameByPageId(pageId) {
        const category = window.appData.categories.find(cat => cat.detailPageId === pageId);
        return category ? LocaleManager.getText('title', `categories.${category.key}`) : '未知類別';
    }
    
    // 從頁面ID獲取類別，用於本地存儲
    function getCategoryByPageId(pageId) {
        const category = window.appData.categories.find(cat => cat.detailPageId === pageId);
        return category ? category.key : '';
    }

    // 簡化的生成函數，調用公共邏輯
    function generateFoodItems(data) {
        generateItems(data, 'detail-01');
    }

    function generateMedicalItems(data) {
        generateItems(data, 'detail-02');
    }
    
    function generateLivingItems(data) {
        generateItems(data, 'detail-03');
    }
    
    function generateInfoItems(data) {
        generateItems(data, 'detail-04');
    }
    
    function generateToolsItems(data) {
        generateItems(data, 'detail-05');
    }

    // 處理複選框變化的通用函數
    function handleCheckboxChange(checkbox) {
        updateProgress();
        
        // 添加或移除selected類別
        const checklist_item = checkbox.closest('.checklist-item');
        if (checklist_item) {
            if (checkbox.checked) {
                checklist_item.classList.add('selected');
            } else {
                checklist_item.classList.remove('selected');
            }
            
            // 保存選中狀態到localStorage
            const itemKey = checklist_item.getAttribute('data-item-key');
            const detailPage = checkbox.closest('.detail-page');
            const category = getCategoryByPageId(detailPage.id);
            localStorage.setItem(`${category}-${itemKey}`, checkbox.checked);
        }
        
        // 更新總進度
        updateTotalProgress();
    }

    // 為新添加的複選框綁定事件
    function bindCheckboxEvents() {
        const newCheckboxes = document.querySelectorAll('.checkbox:not([data-bound])');
        newCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                handleCheckboxChange(this);
            });
            checkbox.setAttribute('data-bound', 'true');
        });
    }

    // 更新總進度
    function updateTotalProgress() {
        // 獲取所有類別的進度
        const detailPages = document.querySelectorAll('.detail-page');
        let totalChecked = 0;
        let totalItems = 0;
        
        // 計算總項目數和已完成項目數
        detailPages.forEach(page => {
            const checkedBoxes = page.querySelectorAll('.checkbox:checked').length;
            const totalBoxes = page.querySelectorAll('.checkbox').length;
            
            totalChecked += checkedBoxes;
            totalItems += totalBoxes;
        });
        
        // 計算總百分比
        const totalPercentage = totalItems > 0 ? Math.round((totalChecked / totalItems) * 100) : 0;
        
        // 更新進度圓圈
        const progressCircle = document.querySelector('.total-progress-circle-fill');
        const progressText = document.querySelector('.total-progress-percentage');
        
        if (progressCircle && progressText) {
            // 圓的周長 = 2 * π * r = 2 * 3.14 * 54 ≈ 339.2
            const circumference = 2 * Math.PI * 54;
            // 計算進度條填充部分
            const offset = circumference - (totalPercentage / 100) * circumference;
            
            // 更新圓圈填充
            progressCircle.style.strokeDashoffset = offset;
            // 更新百分比文字
            progressText.textContent = `${totalPercentage}%`;
        }
    }

    // 修改updateProgress函數，添加對總進度的更新
    function updateProgress() {
        progressCounts.forEach(counter => {
            const detailPage = counter.closest('.detail-page');
            const checkedBoxes = detailPage.querySelectorAll('.checkbox:checked').length;
            const totalBoxes = detailPage.querySelectorAll('.checkbox').length;
            counter.textContent = `${checkedBoxes} / ${totalBoxes}`;
            
            // 更新進度條填充寬度
            const progressFill = detailPage.querySelector('.progress-fill');
            if (progressFill) {
                const progressPercentage = totalBoxes > 0 ? (checkedBoxes / totalBoxes) * 100 : 0;
                progressFill.style.width = `${progressPercentage}%`;
            }
            
            // 當全部準備好時，更新文本為"已完成"
            const progressText = detailPage.querySelector('.progress-text');
            if (progressText) {
                if (checkedBoxes === totalBoxes && totalBoxes > 0) {
                    progressText.textContent = LocaleManager.getText('completed', 'common');
                } else {
                    progressText.textContent = LocaleManager.getText('progress', 'common');
                }
            }
        });
        
        // 更新總進度
        updateTotalProgress();
    }

    // 更新所有頁面的人數和天數設定
    function updateAllPagesSettings() {
        // 更新所有頁面上的人數和天數按鈕顯示
        const peopleSettings = document.querySelectorAll('.people-setting');
        const daysSettings = document.querySelectorAll('.days-setting');
        
        peopleSettings.forEach(button => {
            button.querySelector('span:last-child').textContent = 
                `${globalSettings.people}${LocaleManager.getText('person', 'common')}`;
        });
        
        daysSettings.forEach(button => {
            button.querySelector('span:last-child').textContent = 
                `${globalSettings.days}${LocaleManager.getText('day', 'common')}`;
        });
        
        // 更新所有物品的數量
        updateQuantities();
    }

    // 更新物品數量
    function updateQuantities() {
        const detailPages = document.querySelectorAll('.detail-page');
        if (detailPages.length === 0) {
            return;
        }
        
        detailPages.forEach(page => {
            // 更新所有物品的數量
            const checklistItems = page.querySelectorAll('.checklist-item');
            if (checklistItems.length === 0) {
                return;
            }
            
            // 更新人數和天數顯示
            page.querySelectorAll('.item-people').forEach(cell => {
                cell.textContent = `${globalSettings.people}`;
            });
            
            page.querySelectorAll('.item-days').forEach(cell => {
                cell.textContent = `${globalSettings.days}`;
            });
            
            // 獲取相應的數據集
            const category = getCategoryByPageId(page.id);
            const categoryData = window.appData.items[category];
            
            if (categoryData) {
                checklistItems.forEach(checklistItem => {
                    const itemKey = checklistItem.getAttribute('data-item-key');
                    if (!itemKey) return;
                    
                    // 找到對應的數據項目
                    const dataItem = categoryData.find(item => item.key === itemKey);
                    if (!dataItem) return;
                    
                    const itemPerPerson = checklistItem.querySelector('.item-per-person');
                    const itemTotal = checklistItem.querySelector('.item-total');
                    
                    if (!itemPerPerson || !itemTotal) {
                        return;
                    }
                    
                    // 更新每人所需
                    itemPerPerson.textContent = `${dataItem.quantity}${LocaleManager.getUnitText(dataItem.unit)}`;
                    
                    // 根據不同的縮放類型計算總數量
                    let totalQuantity = calculateTotalQuantity(dataItem);
                    
                    // 更新總計
                    itemTotal.textContent = `${totalQuantity}${LocaleManager.getUnitText(dataItem.unit)}`;
                });
            }
        });
    }

    // 單獨的函數用於計算總數量
    function calculateTotalQuantity(item) {
        switch (item.scaling) {
            case 'none': // 不隨人數和天數變化
                return item.quantity;
                
            case 'people': // 僅隨人數變化
                return item.quantity * globalSettings.people;
                
            case 'people_days': // 隨人數和天數變化
                return item.quantity * globalSettings.people * globalSettings.days;
                
            case 'people_days_divided': // 隨人數和天數變化但有除數
                const factor = item.scaling_factor || 1;
                return Math.ceil((item.quantity * globalSettings.people * globalSettings.days) / factor);
                
            default:
                return item.quantity;
        }
    }

    // 初始化事件監聽器
    function initializeEventListeners() {
        // BETA標籤點擊事件
        const betaLink = document.querySelector('.beta-link');
        if (betaLink) {
            betaLink.addEventListener('click', function(e) {
                // 如果想要在新標籤頁打開，取消下面的註釋
                // e.preventDefault();
                // window.open('evacuation-map/evacuate.html', '_blank');
            });
        }
        
        // 为每个区块添加点击事件
        blocks.forEach(block => {
            block.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                const detailPage = document.getElementById(`detail-${category}`);
                
                if (detailPage) {
                    detailPage.classList.add('active');
                    document.body.style.overflow = 'hidden'; // 阻止背景滚动
                }
            });
        });

        // 为返回按钮添加点击事件
        backButtons.forEach(button => {
            button.addEventListener('click', function() {
                const detailPage = this.closest('.detail-page');
                detailPage.classList.remove('active');
                document.body.style.overflow = ''; // 恢复背景滚动
            });
        });

        // 为复选框添加点击事件
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                handleCheckboxChange(this);
            });
            checkbox.setAttribute('data-bound', 'true');
        });

        // 为人数和天数选择器添加点击事件
        const peopleSettings = document.querySelectorAll('.people-setting');
        const daysSettings = document.querySelectorAll('.days-setting');

        peopleSettings.forEach(button => {
            button.addEventListener('click', function() {
                const currentPeople = globalSettings.people;
                let newPeople;
                
                if (currentPeople === 1) {
                    newPeople = 2;
                } else if (currentPeople === 2) {
                    newPeople = 3;
                } else if (currentPeople === 3) {
                    newPeople = 4;
                } else if (currentPeople === 4) {
                    newPeople = 5;
                } else {
                    newPeople = 1;
                }
                
                // 更新全局設定
                globalSettings.people = newPeople;
                
                // 更新所有頁面的設定
                updateAllPagesSettings();
            });
        });

        daysSettings.forEach(button => {
            button.addEventListener('click', function() {
                const currentDays = globalSettings.days;
                let newDays;
                
                if (currentDays === 3) {
                    newDays = 7;
                } else if (currentDays === 7) {
                    newDays = 14;
                } else if (currentDays === 14) {
                    newDays = 30;
                } else {
                    newDays = 3;
                }
                
                // 更新全局設定
                globalSettings.days = newDays;
                
                // 更新所有頁面的設定
                updateAllPagesSettings();
            });
        });
    }

    // 初始化應用
    LocaleManager.init(); // 首先初始化語言管理器
    initializeEventListeners();
    loadFoodData();
    loadMedicalData();
    loadLivingData();
    loadInfoData();
    loadToolsData();
    updateProgress();
    updateTotalProgress();
    
    // 語言切換後需要更新清單項目
    setTimeout(() => {
        LocaleManager.updateChecklistItems();
    }, 500);
}); 