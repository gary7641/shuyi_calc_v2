// =============================================
// js/render.js - 數易命盤計算器 v2.0
// 畫面渲染: 圖表/卡片/聯合碼展示
// =============================================

// 主渲染函數
function renderResults(data) {
  document.getElementById('resultsArea').classList.add('show');
  renderBasicInfo(data);
  renderTriangleChart(data.mainChar);
  renderElements(data.elements);
  render13Groups(data.mainChar);
  renderFlowPeriods(data);
  window.scrollTo({ top: document.getElementById('resultsArea').offsetTop - 20, behavior: 'smooth' });
}

// 渲染基本資訊
function renderBasicInfo(data) {
  const container = document.getElementById('basicInfoContainer');
  container.innerHTML = `
    <div class="profile-grid">
      <div class="profile-card"><div class="label">出生年</div><div class="value">${data.birth.year}</div></div>
      <div class="profile-card"><div class="label">月</div><div class="value">${data.birth.month}</div></div>
      <div class="profile-card"><div class="label">日</div><div class="value">${data.birth.day}</div></div>
      <div class="profile-card"><div class="label">主格</div><div class="value num-${ElementMapping[data.mainChar[0]]}">${data.mainChar[0]}</div></div>
      <div class="profile-card"><div class="label">副格</div><div class="value num-${ElementMapping[data.mainChar[1]]}">${data.mainChar[1]}</div></div>
    </div>
  `;
}

// 渲染三角圖
function renderTriangleChart(mainChar) {
  const container = document.getElementById('triangleChartContainer');
  container.innerHTML = `
    <div class="triangle-chart">
      <div class="tri-row"><div class="tri-cell num-${ElementMapping[mainChar[0]]}">${mainChar[0]}</div></div>
      <div class="tri-row">
        <div class="tri-cell num-${ElementMapping[mainChar[1]]}">${mainChar[1]}</div>
        <div class="tri-cell num-${ElementMapping[mainChar[2]]}">${mainChar[2]}</div>
      </div>
      <div class="tri-row">
        <div class="tri-cell num-${ElementMapping[mainChar[3]]}">${mainChar[3]}</div>
        <div class="tri-cell num-${ElementMapping[mainChar[4]]}">${mainChar[4]}</div>
        <div class="tri-cell num-${ElementMapping[mainChar[5]]}">${mainChar[5]}</div>
      </div>
    </div>
  `;
}

// 渲染五行分佈
function renderElements(elements) {
  const container = document.getElementById('elementsContainer');
  const total = Object.values(elements).reduce((a,b) => a+b, 0);
  let html = '<div class="elements-bar">';
  for (const [key, count] of Object.entries(elements)) {
    const percent = total > 0 ? (count / total * 100) : 0;
    html += `
      <div class="element-row">
        <div class="element-label">${ElementNames[key]}</div>
        <div class="element-bar-wrap"><div class="element-bar-fill ${key}" style="width: ${percent}%"></div></div>
        <div class="element-count">${count}</div>
      </div>
    `;
  }
  html += '</div>';
  container.innerHTML = html;
}

// 渲染13組聯合碼
function render13Groups(mainChar) {
  const container = document.getElementById('groupsContainer');
  container.innerHTML = '<div class="groups-container" id="groupCards"></div>';
  // ... (TODO: 完整實現13組展開優化)
}

// 渲染流年/流月/流日
function renderFlowPeriods(data) {
  // ... (TODO: 完整實現流年/流月/流日卡片渲染)
}
