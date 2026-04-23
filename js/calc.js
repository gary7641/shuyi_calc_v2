// =============================================
// js/calc.js - 數易命盤計算器 v2.0
// 計算核心邏輯: 本命/流年/流月/流日
// =============================================

// 計算本命甲子
function calculateMainChar(year, month, day) {
  const ySum = year.toString().split('').reduce((a,b) => a + parseInt(b), 0);
  const mSum = month;
  const dSum = day;
  const total = ySum + mSum + dSum;
  
  const mainChar = [];
  mainChar[0] = total % 10 || 10; // 主格
  mainChar[1] = Math.floor(total / 10) + (total % 10 || 10); // 副格
  mainChar[1] = mainChar[1] > 9 ? mainChar[1] - 9 : mainChar[1];
  mainChar[2] = (mainChar[0] + mainChar[1]) % 10 || 10; // 命
  mainChar[3] = (mainChar[0] + mainChar[2]) % 10 || 10; // 業
  mainChar[4] = (mainChar[0] + mainChar[3]) % 10 || 10; // 際
  mainChar[5] = (mainChar[0] + mainChar[4]) % 10 || 10; // 家
  mainChar[6] = (mainChar[0] + mainChar[5]) % 10 || 10; // 外
  
  return mainChar;
}

// 計算流年甲子
function calculateFlowYear(mainChar, year) {
  const ySum = year.toString().split('').reduce((a,b) => a + parseInt(b), 0);
  const flowYear = [];
  flowYear[0] = (mainChar[0] + ySum) % 10 || 10;
  flowYear[1] = (mainChar[1] + ySum) % 10 || 10;
  flowYear[2] = (flowYear[0] + flowYear[1]) % 10 || 10;
  flowYear[3] = (flowYear[0] + flowYear[2]) % 10 || 10;
  return flowYear;
}

// 計算流月甲子
function calculateFlowMonth(flowYear, month) {
  const flowMonth = [];
  flowMonth[0] = (flowYear[0] + month) % 10 || 10;
  flowMonth[1] = (flowYear[1] + month) % 10 || 10;
  flowMonth[2] = (flowMonth[0] + flowMonth[1]) % 10 || 10;
  return flowMonth;
}

// 計算流日甲子
function calculateFlowDay(flowMonth, day) {
  const flowDay = [];
  flowDay[0] = (flowMonth[0] + day) % 10 || 10;
  flowDay[1] = (flowMonth[1] + day) % 10 || 10;
  flowDay[2] = (flowDay[0] + flowDay[1]) % 10 || 10;
  return flowDay;
}

// 五行統計
function countElements(numbers) {
  const count = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
  numbers.forEach(n => {
    const el = ElementMapping[n % 10];
    if (el) count[el]++;
  });
  return count;
}

// 主函數: 執行全部計算
function performCalculation() {
      alert('起盤按鈕已點擊!');
  const year = parseInt(document.getElementById('birthYear').value);
  const month = parseInt(document.getElementById('birthMonth').value);
  const day = parseInt(document.getElementById('birthDay').value);
  
  if (!year || !month || !day) {
    alert('請填寫完整出生日期');
    return;
  }
  
  const mainChar = calculateMainChar(year, month, day);
  const flowYear = calculateFlowYear(mainChar, new Date().getFullYear());
  const flowMonth = calculateFlowMonth(flowYear, new Date().getMonth() + 1);
  const flowDay = calculateFlowDay(flowMonth, new Date().getDate());
  
  const elements = countElements(mainChar);
  
  // 儲存結果到全域變數
  window.calcResults = {
    birth: { year, month, day },
    mainChar, flowYear, flowMonth, flowDay, elements
  };
  
  // 調用渲染函數
  renderResults(window.calcResults);
}
