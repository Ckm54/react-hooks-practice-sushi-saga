import React from "react";

function Sushi({ sushiItem }) {
  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ null}>
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
