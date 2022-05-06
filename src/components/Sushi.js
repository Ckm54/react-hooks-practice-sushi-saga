import React from "react";

function Sushi({ sushiItem, handleEatSushi }) {
  function eatSushi() {
    handleEatSushi(sushiItem)
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={ eatSushi }>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={sushiItem['img_url']}
            alt={sushiItem.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushiItem.name} - ${sushiItem.price}
      </h4>
    </div>
  );
}

export default Sushi;
