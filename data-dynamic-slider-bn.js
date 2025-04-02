// 需要複製請連著"{},"整個區塊複製
// 是價格的話請用price，會加上$符號，不是價格請用'text'，不會加上$符號
// 區塊： 精選活動
var dataDynamicSliderBn = [
  // 1
  [
    {
      name: '保健',
      imgSrc: 'slider-bn-1.jpg',
      webLink: 'https://www.etmall.com.tw/p/241990',
      mobileLink: 'https://m.etmall.com.tw/p/241990',
      appLink: 'etmall://open?pgid=53&eid=241990',    
      text: '保健',
    },
    {
      productNumber: 3382334, 
      name: '日本味王 30:6:6高濃度金盞花葉黃素晶亮膠囊30粒X5盒',
      price: 2512,
    },
    {
      productNumber: 2206356, 
      name: '日本味王 維生素B群加強錠男、女用任選(60粒/盒)共計4盒',
      price: 1112, 
    },
  ],
  // 2
  [
    {
      name: '餐廚',
      imgSrc: 'slider-bn-2.jpg',
      webLink: 'https://media.etmall.com.tw/sp/26340/m/index.html',
      mobileLink: 'https://media.etmall.com.tw/sp/26340/m/index.html',
      appLink: 'etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F26340%2Fm%2Fapp.html&t=%E9%8D%8B%E5%AF%B6%E5%B9%B4%E7%B5%82%E5%A4%A7%E8%B3%9E%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2',   
      text: '餐廚',
    },
    {
      productNumber: 3306445, 
      name: '【CookPower 鍋寶】金鑽不沾雙鍋四件組(32深炒鍋+28煎鍋+32蓋+鏟)-兩色可選',
      price: 990, 
    },
    {
      productNumber: 3867040, 
      name: '【CookPower 鍋寶】可微波分隔不鏽鋼保鮮盒3件組(1200ml+880mlX2)',
      price: 699, 
    },
    
  ],
  // 3
  [
    {
      name: '清潔',
      imgSrc: 'slider-bn-3.jpg',
      webLink: 'https://www.etmall.com.tw/gp/197077',
      mobileLink: 'https://m.etmall.com.tw/gp/197077',
      appLink: 'etmall://open?pgid=65&eid=197077',    
      text: '清潔',
    },
    {
      productNumber: 4755571, 
      name: '舒酸定 長效抗敏牙膏-牙齦護理120gX6入+贈大耳狗保鮮瀝水盒2個',
      price: 599, 
    },
    {
      productNumber: 7294142, 
      name: '牙周適牙齦專業護理漱口水-極淨清新500mlX6入',
      price: 798, 
    },
    
  ],
  // 4
  [
    {
      name: '3C',
      imgSrc: 'slider-bn-4.jpg',
      webLink: 'https://media.etmall.com.tw/sp/13058/m/index.html',
      mobileLink: 'https://media.etmall.com.tw/sp/13058/m/index.html',
      appLink: 'etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F13058%2Fm%2Fapp.html&t=%E9%81%8A%E6%88%B2%E9%99%AA%E4%BD%A0%E5%97%A8%E7%BF%BB%E5%A4%A9%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2',    
      text: '3C',
    },
    {
      productNumber: 7218367, 
      name: 'SONY PS5 Marvels Spider-Man 2 蜘蛛人 2 限量版同捆組主機+副廠外出攜帶包【送PS炫光手持風扇】',
      price: 20780, 
    },
    {
      productNumber: 2271816, 
      name: '任天堂 Switch Labo實驗室 Toy-Con 04 VR 組合套裝(日本原裝進口)支援中文',
      price: 712, 
    },
    
  ],
  // 5
  [
    {
      name: '家電',
      imgSrc: 'slider-bn-5.jpg',
      webLink: 'https://media.etmall.com.tw/sp/10591/m/index.html',
      mobileLink: 'https://media.etmall.com.tw/sp/10591/m/index.html',
      appLink: 'etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F10591%2Fm%2Fapp.html&t=LG%E5%AE%B6%E9%9B%BB%E9%9B%9911%E7%9B%9B%E6%83%A0%E2%98%85%E7%99%BB%E8%A8%98%E6%9C%80%E9%AB%98%E9%80%816%25%E7%84%A1%E4%B8%8A%E9%99%90%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2',     
      text: '家電',
    },
    {
      productNumber: 4399419, 
      name: 'LG樂金 15公斤 蒸氣滾筒洗衣機 (蒸洗脫烘) (冰磁白) WD-S15TBD',
      price: 36999, 
    },
    {
      productNumber: 6836748, 
      name: '樂金LG PuriCare 超淨化大白空氣清淨機 AS601HWG0',
      price: 8378, 
    },
  ],
  // 6
  [
    {
      name: '3C',
      imgSrc: 'slider-bn-6.jpg',
      webLink: 'https://media.etmall.com.tw/sp/13058/m/index.html',
      mobileLink: 'https://media.etmall.com.tw/sp/13058/m/index.html',
      appLink: 'etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F13058%2Fm%2Fapp.html&t=%E9%81%8A%E6%88%B2%E9%99%AA%E4%BD%A0%E5%97%A8%E7%BF%BB%E5%A4%A9%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2',    
      text: '3C',
    },
    {
      productNumber: 7218367, 
      name: 'SONY PS5 Marvels Spider-Man 2 蜘蛛人 2 限量版同捆組主機+副廠外出攜帶包【送PS炫光手持風扇】',
      price: 20780, 
    },
    {
      productNumber: 2271816, 
      name: '任天堂 Switch Labo實驗室 Toy-Con 04 VR 組合套裝(日本原裝進口)支援中文',
      price: 712, 
    },
    
  ],
  // 7
  [
    {
      name: '家電',
      imgSrc: 'slider-bn-7.jpg',
      webLink: 'https://media.etmall.com.tw/sp/10591/m/index.html',
      mobileLink: 'https://media.etmall.com.tw/sp/10591/m/index.html',
      appLink: 'etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F10591%2Fm%2Fapp.html&t=LG%E5%AE%B6%E9%9B%BB%E9%9B%9911%E7%9B%9B%E6%83%A0%E2%98%85%E7%99%BB%E8%A8%98%E6%9C%80%E9%AB%98%E9%80%816%25%E7%84%A1%E4%B8%8A%E9%99%90%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2',     
      text: '家電',
    },
    {
      productNumber: 4399419, 
      name: 'LG樂金 15公斤 蒸氣滾筒洗衣機 (蒸洗脫烘) (冰磁白) WD-S15TBD',
      price: 36999, 
    },
    {
      productNumber: 6836748, 
      name: '樂金LG PuriCare 超淨化大白空氣清淨機 AS601HWG0',
      price: 8378, 
    },
  ],
];