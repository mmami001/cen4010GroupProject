import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {addToCart, removeFromCart} from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        // delete action
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    };
    let newCartItems = [];
    let saveForLater = [];
    cartItems.forEach(item => {
        item.saveForLater ? saveForLater.push(item) : newCartItems.push(item);
    });
    return (
        <div>
            <div className="row top">
                <div className="col-2">
                    <h1>Shopping Cart</h1>
                    {newCartItems.length === 0 ? (
                        <MessageBox>
                            Cart is empty. <Link to="/">Go Shopping</Link>
                        </MessageBox>
                    ) : (
                        <ul>
                            {newCartItems.map((item) => (
                                <li key={item.product}>
                                    <div className="row">
                                        <div>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="small"
                                            ></img>
                                        </div>
                                        <div className="min-30">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>
                                        <div>
                                            <select
                                                value={item.qty}
                                                onChange={(e) =>
                                                    dispatch(
                                                        addToCart(item.product, Number(e.target.value))
                                                    )
                                                }
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>${item.price}</div>
                                        <div>
                                            <button
                                                type="button"
                                                onClick={(e) =>
                                                    dispatch(
                                                        addToCart(item.product, Number(e.target.value), true)
                                                    )}
                                            >
                                                Save For Later
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >Delete
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2>
                                    Subtotal ({newCartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                                    {newCartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                                </h2>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={checkoutHandler}
                                    className="primary block"
                                    disabled={cartItems.length === 0}
                                >
                                    Proceed to Checkout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h1>Saved for Later</h1>
                {saveForLater.length === 0 ? (
                    <MessageBox>
                        No item
                    </MessageBox>
                ) : (
                    <ul>
                        {saveForLater.map((item) => (
                            <li key={item.product}>
                                <div className="row">
                                    <div>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="small"
                                        ></img>
                                    </div>
                                    <div className="min-30">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div>${item.price}</div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={(e) =>
                                                dispatch(
                                                    addToCart(item.product, 1)
                                                )}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => removeFromCartHandler(item.product)}
                                        >Delete
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
