import React, { useState } from 'react';
import './menustyle.css';

const Menu = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      image: '/img/bp.png',
      text: '미니 붕어빵',
      pricetext: '2,500₩',
      contenttext:'제품설명1',
    },
    {
      id: 2,
      image: '/img/dm.png',
      text: '델리만쥬',
      pricetext: '2000₩',
      contenttext:'제품설명1',
    },
    {
      id: 3,
      image: '/img/hc.png',
      text: '핫초코',
      pricetext: '1000₩',
      contenttext:'제품설명1',
    }
  ]);

  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="menu-container">
      <div>
        <img src="/img/previous.png" alt="뒤로가기" className="previous-image" />
        <div className="headertxt">부스 상세보기</div>
        <img src="/img/bar.png" alt="bar" className="bar-image" />
      </div>
      
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
  );
}

export default Menu;
