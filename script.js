document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有區塊和詳情頁面
    const blocks = document.querySelectorAll('.food-block, .tools-block, .info-block, .medical-block, .living-block');
    const detailPages = document.querySelectorAll('.detail-page');
    const backButtons = document.querySelectorAll('.back-button');
    const checkboxes = document.querySelectorAll('.checkbox');
    const progressCounts = document.querySelectorAll('.progress-count');

    // 加載各類數據
    let foodData = null;
    let medicalData = null;
    let livingData = null;
    let infoData = null;
    let toolsData = null;
    
    // 全局設定，所有頁面共享
    let globalSettings = {
        people: 1,
        days: 14
    };
    
    // 將通用的加載數據邏輯抽象為一個函數
    function loadData(dataType, generateFunction) {
        try {
            // 從全局變量獲取數據
            let data = null;
            switch(dataType) {
                case 'food':
                    data = window.foodDataEmbedded;
                    break;
                case 'medical':
                    data = window.medicalDataEmbedded;
                    break;
                case 'living':
                    data = window.livingDataEmbedded;
                    break;
                case 'info':
                    data = window.infoDataEmbedded;
                    break;
                case 'tools':
                    data = window.toolsDataEmbedded;
                    break;
            }
            
            if (!data) {
                console.error(`${dataType}數據未加載，請確保${dataType}-data.js已經正確引入`);
                return null;
            }
            
            // 生成清單項目
            generateFunction(data);
            
            // 確保數據加載後立即更新數量
            setTimeout(updateQuantities, 100);
            
            return data;
        } catch (error) {
            console.error(`加載${dataType}數據失敗: ${error.message}`);
            return null;
        }
    }

    function loadFoodData() {
        foodData = loadData('food', generateFoodItems);
    }

    function loadMedicalData() {
        medicalData = loadData('medical', generateMedicalItems);
    }
    
    function loadLivingData() {
        livingData = loadData('living', generateLivingItems);
    }
    
    function loadInfoData() {
        infoData = loadData('info', generateInfoItems);
    }
    
    function loadToolsData() {
        toolsData = loadData('tools', generateToolsItems);
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
        const existingItems = checklist.querySelectorAll('.checklist-item, .item-details');
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
            
            // 檢查之前是否有保存的選中狀態
            const isChecked = localStorage.getItem(`${category}-${item.name}`) === 'true';
            
            // 基本項目信息
            checklistItem.innerHTML = `
                <input type="checkbox" class="checkbox" ${isChecked ? 'checked' : ''}>
                <span class="item-name">${item.name}</span>
                <span class="item-per-person">${item.quantity}${item.unit}</span>
                <span class="item-people">${globalSettings.people}人</span>
                <span class="item-days">${globalSettings.days}天</span>
                <span class="item-total">-</span>
            `;
            
            // 如果已選中，添加selected類別
            if (isChecked) {
                checklistItem.classList.add('selected');
            }
            
            // 詳細信息區塊
            const itemDetails = document.createElement('div');
            itemDetails.className = 'item-details';
            itemDetails.innerHTML = `
                <div class="item-description">${item.description || ''}</div>
                <div class="item-note">${item.note || ''}</div>
            `;
            
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
        switch(pageId) {
            case 'detail-01': return '食物';
            case 'detail-02': return '醫療衛生';
            case 'detail-03': return '生活用品';
            case 'detail-04': return '電子通訊';
            case 'detail-05': return '工具類';
            default: return '未知類別';
        }
    }
    
    // 從頁面ID獲取類別，用於本地存儲
    function getCategoryByPageId(pageId) {
        switch(pageId) {
            case 'detail-01': return 'food';
            case 'detail-02': return 'medical';
            case 'detail-03': return 'living';
            case 'detail-04': return 'info';
            case 'detail-05': return 'tools';
            default: return '';
        }
    }

    // 簡化的生成函數，調用公共邏輯
    function generateFoodItems(data) {
        generateItems(data || foodData, 'detail-01');
    }

    function generateMedicalItems(data) {
        generateItems(data || medicalData, 'detail-02');
    }
    
    function generateLivingItems(data) {
        generateItems(data || livingData, 'detail-03');
    }
    
    function generateInfoItems(data) {
        generateItems(data || infoData, 'detail-04');
    }
    
    function generateToolsItems(data) {
        generateItems(data || toolsData, 'detail-05');
    }

    // 為新添加的複選框綁定事件
    function bindCheckboxEvents() {
        const newCheckboxes = document.querySelectorAll('.checkbox:not([data-bound])');
        newCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                updateProgress();
                
                // 添加或移除selected類別
                const checklist_item = this.closest('.checklist-item');
                if (checklist_item) {
                    if (this.checked) {
                        checklist_item.classList.add('selected');
                    } else {
                        checklist_item.classList.remove('selected');
                    }
                    
                    // 保存選中狀態到localStorage
                    const itemName = checklist_item.querySelector('.item-name').textContent;
                    const detailPage = this.closest('.detail-page');
                    const category = getCategoryByPageId(detailPage.id);
                    localStorage.setItem(`${category}-${itemName}`, this.checked);
                }
                
                // 更新總進度
                updateTotalProgress();
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
                    progressText.textContent = "已完成 ";
                } else {
                    progressText.textContent = "準備進度 ";
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
            button.querySelector('span:last-child').textContent = `${globalSettings.people}人`;
        });
        
        daysSettings.forEach(button => {
            button.querySelector('span:last-child').textContent = `${globalSettings.days}天`;
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
                cell.textContent = `${globalSettings.people}人`;
            });
            
            page.querySelectorAll('.item-days').forEach(cell => {
                cell.textContent = `${globalSettings.days}天`;
            });
            
            // 獲取相應的數據集
            const category = getCategoryByPageId(page.id);
            let currentData = null;
            
            switch(category) {
                case 'food': currentData = foodData; break;
                case 'medical': currentData = medicalData; break;
                case 'living': currentData = livingData; break;
                case 'info': currentData = infoData; break;
                case 'tools': currentData = toolsData; break;
            }
            
            if (currentData && currentData.items) {
                currentData.items.forEach((item, index) => {
                    if (index < checklistItems.length) {
                        const checklistItem = checklistItems[index];
                        const itemName = checklistItem.querySelector('.item-name');
                        const itemPerPerson = checklistItem.querySelector('.item-per-person');
                        const itemTotal = checklistItem.querySelector('.item-total');
                        
                        if (!itemPerPerson || !itemTotal || !itemName) {
                            return;
                        }
                        
                        // 確保項目名稱與數據匹配
                        if (itemName.textContent !== item.name) {
                            // 修正不匹配的項目名稱
                            itemName.textContent = item.name;
                        }
                        
                        // 更新每人所需
                        itemPerPerson.textContent = `${item.quantity}${item.unit}`;
                        
                        // 根據不同的縮放類型計算總數量
                        let totalQuantity = calculateTotalQuantity(item);
                        
                        // 更新總計
                        itemTotal.textContent = `${totalQuantity}${item.unit}`;
                    }
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
                updateProgress();
                
                // 添加或移除selected類別
                const checklist_item = this.closest('.checklist-item');
                if (checklist_item) {
                    if (this.checked) {
                        checklist_item.classList.add('selected');
                    } else {
                        checklist_item.classList.remove('selected');
                    }
                    
                    // 保存選中狀態到localStorage
                    const itemName = checklist_item.querySelector('.item-name').textContent;
                    const detailPage = this.closest('.detail-page');
                    const category = getCategoryByPageId(detailPage.id);
                    localStorage.setItem(`${category}-${itemName}`, this.checked);
                }
                
                // 更新總進度
                updateTotalProgress();
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
                    newPeople = 4;
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
    initializeEventListeners();
    loadFoodData();
    loadMedicalData();
    loadLivingData();
    loadInfoData();
    loadToolsData();
    updateProgress();
    updateTotalProgress();
}); 