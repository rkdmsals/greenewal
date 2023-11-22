import React, { useState } from 'react';
import './menustyle.css';
import Header from "../../Others/Header"

const Menu = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      image: '/img/bp.png',
      text: '미니 붕어빵 5알',
      pricetext: '2,500₩',
      contenttext:'겨울엔 붕어빵! 따뜻한 미니 붕어빵 든든하게 먹고 수업 들으러~',
    },
    {
      id: 2,
      image: '/img/dm.png',
      text: '델리만쥬 5알',
      pricetext: '2500₩',
      contenttext:'휴게소, 지하철에서의 추억이 새록새록~ 커스타드 크림이 들어있는 따뜻한 델리만쥬!',
    },
    {
      id: 3,
      image: '/img/hc.png',
      text: '핫초코',
      pricetext: '2500₩',
      contenttext:'추운 겨울, 따뜻한 핫초코 한 잔으로 몸을 따뜻하게!',
    }
  ]);

  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
    <div className="menu-container">
      <div className="titletext">Food Booth</div>
      <img src="/img/title.png" alt="bar" className="title-image" />
      
      <div>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            className="menu-item-button"
          >
            <div>{item.text}</div>
          </button>
        ))}
      </div>
      <div className="selected-item">
        <img src={selectedItem.image} alt={selectedItem.text} className="selected-item-img" />
        <div className="selected-item-text">{selectedItem.text}</div>
        <div className="selected-item-pricetext">{selectedItem.pricetext}</div>
        <div className="selected-item-contenttext">{selectedItem.contenttext}</div>
      </div>
    </div>
    </div>
  );
}

export default Menu;
