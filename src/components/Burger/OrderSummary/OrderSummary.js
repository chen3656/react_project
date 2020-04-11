import React from 'react'

import Aux from "../../../hoc/Auxiliary";

const orderSummary = (props) => {
    const ingrdientSummary = Object.keys(props.ingredients)
        .map(igKey => {
        return ( 
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        )});
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicius burger with following ingredients</p>
            <ul>
                {ingrdientSummary}
            </ul>
            <p>Continue to Checkout ?</p>
        </Aux>
    )

};

export default orderSummary;