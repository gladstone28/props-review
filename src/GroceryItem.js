// GroceryItem.js

import React from 'react';

function GroceryItem({ name }) {
    const addToCart = () => {
        alert(`${name} has been added to the cart!`);
    };

    return (
        <button onClick={addToCart}>{name}</button>
    );
}

export default GroceryItem;
