// =============================================
// js/data.js - 數易命盤計算器 v2.0
// 81組聯合數解說 / 本源夢想碼資料
// =============================================

// 81組聯合碼資料庫 (示範數組)
const GroupData = {
  "11": {
    name: "財運砂",
    positive: "財運亨通、賢能謀生、努力累積財富。",
    negative: "過分追求財富可能失去生活平衡、一生勞礙。",
    traits: "論號性格穩重、務實、重視物質基礎。"
  },
  "12": {
    name: "意志薄弱",
    positive: "營業地組多逢貴人相助、可們靠他人。",
    negative: "意志力不足、家庭不富裕、家道中落。",
    traits: "性格柔弱、缺乏主見、依賴他人。"
  },
  "13": {
    name: "才藝聯合",
    positive: "才華出眾、藝術天份、學識湾博、職業成就高。",
    negative: "反應過度、情緒起伏大、有時傲慢。",
    traits: "才華橫溢、有美感、善於表達。"
  },
  "14": {
    name: "失意破財",
    positive: "若多努力、可獨立發展、讀書有成。",
    negative: "破財負債、疾病纏身、家族縁薄。",
    traits: "性格堅強、但容易遭遇挫折。"
  }
  // ... (其餘 77 組留待完整資料)
};

// 本源夢想碼 (81組全表)
const DreamCodes = {
  1: { code: 48, name: "元宰首員", desc: "具領導才能、負責任、適合管理工作。" },
  2: { code: 57, name: "財運亨通", desc: "財富運勢良好、善於理財管理。" },
  3: { code: 14, name: "失意破財", desc: "易破財、需謹慎理財、複雜事物。" },
  4: { code: 23, name: "事業有成", desc: "事業有成、力争上游、適合創業。" },
  5: { code: 81, name: "還本源始", desc: "一生實現理想、恢復本源。" },
  6: { code: 19, name: "防破家山", desc: "多阻礙、需謹慎行事。" },
  7: { code: 27, name: "霧中開花", desc: "先苦後甜、啜伏極泰。" },
  8: { code: 61, name: "優愚等分", desc: "智愚共存、需謹慎判斷。" },
  9: { code: 72, name: "放長線鹽", desc: "長遠規劃、耗時但有成果。" }
  // ... (其餘留待完整資料)
};

// 13組聯合碼對應關係
const GroupMapping = [
  { name: "生命聯合碼", desc: "本命(主格) + 命(第3位)", calc: (d) => [d.mainChar[0], d.mainChar[2]] },
  { name: "生業聯合碼", desc: "本命(主格) + 業(第4位)", calc: (d) => [d.mainChar[0], d.mainChar[3]] },
  { name: "人際聯合碼", desc: "本命(主格) + 際(第5位)", calc: (d) => [d.mainChar[0], d.mainChar[4]] },
  { name: "命業聯合碼", desc: "命 + 業", calc: (d) => [d.mainChar[2], d.mainChar[3]] },
  { name: "命際聯合碼", desc: "命 + 際", calc: (d) => [d.mainChar[2], d.mainChar[4]] },
  { name: "業際聯合碼", desc: "業 + 際", calc: (d) => [d.mainChar[3], d.mainChar[4]] },
  { name: "本源夢想碼", desc: "出生年月日總和的聯合", calc: (d) => null }, // 特殊運算
  { name: "命家聯合碼", desc: "命 + 家(第6位)", calc: (d) => [d.mainChar[2], d.mainChar[5]] },
  { name: "業家聯合碼", desc: "業 + 家", calc: (d) => [d.mainChar[3], d.mainChar[5]] },
  { name: "際家聯合碼", desc: "際 + 家", calc: (d) => [d.mainChar[4], d.mainChar[5]] },
  { name: "家外聯合碼", desc: "家 + 外(第7位)", calc: (d) => [d.mainChar[5], d.mainChar[6]] },
  { name: "雄心聯合碼", desc: "本命 + 外", calc: (d) => [d.mainChar[0], d.mainChar[6]] },
  { name: "結果聯合碼", desc: "命 + 家", calc: (d) => [d.mainChar[2], d.mainChar[5]] }
];

// 五行屬性對應 (1-9)
const ElementMapping = {
  1: "wood", 2: "wood",
  3: "fire", 4: "fire",
  5: "earth", 6: "earth",
  7: "metal", 8: "metal",
  9: "water", 0: "water"
};

const ElementNames = {
  wood: "木", fire: "火", earth: "土", metal: "金", water: "水"
};
