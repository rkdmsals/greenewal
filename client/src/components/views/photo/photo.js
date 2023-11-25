import React, { useState } from 'react';
import './photostyle.css';

const Photo = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      image: '/img/photo/greenpt.png',
      text: '그린네컷',
      pricetext: '5000₩',
      contenttext: (
        <div style={{ whiteSpace: 'pre-line' }}>
          이화여자대학교를 대표하는 고유 색, 이화그린! <br />
          이화그린과 배꽃이 어우러진 기본 프레임입니다.
        </div>
      ),
    },
    {
      id: 2,
      image: '/img/photo/pmpppt.png',
      text: '뽐뽑네컷',
      pricetext: '5000₩',
      contenttext: (
        <div style={{ whiteSpace: 'pre-line' }}>
          이화여자대학교 수선실의 귀여운 강아지, 뽀미뽀삐!<br />이화인들의 사랑을 한 몸에 받고 있는<br />뽀미뽀삐 프레임입니다.
        </div>
      ),
    },
    {
      id: 3,
      image: '/img/photo/cjpt.png',
      text: '총장네컷',
      pricetext: '5000₩',
      contenttext: (
        <div style={{ whiteSpace: 'pre-line' }}>
          이화여자대학교 김은미 총장님과<br />그리뉴얼에서의 추억을!   김은미 총장님과 <br />다양한 포즈를 취할 수 있는 프레임입니다.
        </div>
      ),
    }
  ]);

  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>

    <div className="photo-container">
      <div className="titletext">
        4-Cut<br></br>Photo Booth
      </div>
      <img src="/img/photo/title.png" alt="반짝이" className="pt-title-image" />
      
      <div className='button-m'>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            className="photo-item-button"
          >
            <div>{item.text}</div>
          </button>
        ))}
      </div>
      <div className="p-selected-item">
        <img src={selectedItem.image} alt={selectedItem.text} className="selected-item-img" />
        <div className="items">
          <span className="p-selected-item-text">{selectedItem.text}</span> 
          <span className="p-selected-item-pricetext">{selectedItem.pricetext}</span>
        </div>
        <div className="p-selected-item-contenttext">{selectedItem.contenttext}</div>
            
      </div>
    </div>
    </div>
  );
}

export default Photo;
