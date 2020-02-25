import React from 'react';
import { Link } from 'react-router-dom';

export const CartSummary = (props) => {

    console.log(props);

    /*
    const getSummary = () => {
        if (cartItems.length > 0) {
            return <span>{ cartItems } item(s), £{ cartPrice.toFixed(2) } </span>
        } else {
            return <span>Your cart: (empty)</span>
        }
    };

    const getLinkClasses = () =>  {
        return `btn btn-sm bg-dark text-white ${cartItems === 0 ? "disabled" : ""}`;
    };

    return (
        <div className='float-right'>
            <small>
                { getSummary() }
                <Link className={ getLinkClasses() } to='/shop/cart'>
                    <i className='fa fa-shopping-cart'></i>
                </Link>
            </small>
        </div>
    );
    */

    return(<></>);
};

export default CartSummary;