// =============================================
// js/export.js - 數易命盤計算器 v2.0
// PDF匯出 / 分享功能
// =============================================

// 匯出PDF (使用 html2canvas + jsPDF)
function exportToPDF() {
  if (!window.calcResults) {
    alert('請先進行計算');
    return;
  }
  
  alert('PDF匯出功能將在完整版本中實現\n需要引入 html2canvas.js 和 jsPDF.js');
  // TODO: 實現 PDF 生成邏輯
  // const element = document.getElementById('resultsArea');
  // html2canvas(element).then(canvas => {
  //   const imgData = canvas.toDataURL('image/png');
  //   const pdf = new jsPDF();
  //   pdf.addImage(imgData, 'PNG', 10, 10);
  //   pdf.save('shuyi_calc_result.pdf');
  // });
}

// 分享URL
function shareLink() {
  if (!window.calcResults) {
    alert('請先進行計算');
    return;
  }
  
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({
      title: '數易命盤計算結果',
      text: '查看我的數易命盤分析',
      url: url
    });
  } else {
    navigator.clipboard.writeText(url);
    alert('連結已複製到剪貼簿');
  }
}

// 分享圖片
function shareImage() {
  alert('圖片分享功能將在完整版本中實現');
  // TODO: 實現截圖分享
}
