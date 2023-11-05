import React from 'react';
import './menustyle.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <img src="/img/bar.png" alt="bar" className="bar-image" />
      <div className="title">
        <div className="text">
          <div>먹거리</div>
          <div>부스</div>
        </div>
        
      </div>
      <div className="images">
        <img src="/img/bp.png" alt="1" className="food-image" />
        <img src="/img/dm.png" alt="2" className="food-image" />
        <img src="/img/hc.png" alt="3" className="food-image" />
      </div>
      <div className="bptx">
        미니 붕어빵
      </div>
      <div className="dmtx">
        델리만쥬
      </div>
      <div className="hctx">
        핫초코
      </div>
      <div className="bpp">
        2500₩ (5알)
      </div>
      <div className="dmp">
        2000₩ (5알)
      </div>
      <div className="hcp">
        1000₩
      </div>
      <div>.</div>
    </div>
  );
}

export default Menu;

