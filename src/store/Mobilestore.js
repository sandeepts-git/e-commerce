import React, { useEffect, useReducer, useState } from 'react';


const Mobilestore = () => {
    const INITIAL_STATE = {
        mobiles: [],
        isApiLoaded: false,
        latestmobiles: [],
        bestseller: [],
        mobile: {},
        totalprice: 0,
        cart: [],
        ProfileName: "",
        Total: {}

    }
    const reducer = (state, action) => {

        let { type, data } = action

        switch (type) {
            case "UPDATE_DATA": {
                return {
                    ...state,
                    ...data
                }
            }

        }
    }


    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    let { cart, mobiles, totalprice } = state;
    useEffect(() => {
        fetch("https://jsonblob.com/api/dc88c196-8610-11ea-b90c-9f0129df8859").then(response => response.json()).then(json => {
            dispatch({
                type: "UPDATE_DATA",
                data: {
                    mobiles: [...json], latestmobiles: [...json.filter(mobile => mobile.product == "latest")],
                    bestseller: [...json.filter(mobile => mobile.product == "Bestseller")]
                }
            })
        })

    }, [])
    useEffect(() => {
        (cart.length > 0) ? (
            dispatch({
                type: "UPDATE_DATA",
                data: { totalprice: cart.reduce((a, b) => a + (Number(b.price) * Number(b.quantity)), 0) }
            })) : (
                dispatch({
                    type: "UPDATE_DATA",
                    data: { totalprice: 0 }
                })
            )
    }, [cart])

    const handleMobileDetails = (item) => {

        dispatch({
            type: "UPDATE_DATA",
            data: { mobile: { ...item } }
        })
    }

    const handleCart = (item) => {
        item.incart = true

        let dupcart = []
        dupcart.push(item)
        dispatch({
            type: "UPDATE_DATA",
            data: {
                cart: [...cart, ...dupcart], mobiles: [...mobiles.map(a => {
                    if (a.name == item.name) { a.incart = true }
                    return (a)
                })]
            }
        })
        console.log(cart)
    }

    const decrementCounter = (index) => {
        cart[index].quantity--

        dispatch({
            type: "UPDATE_DATA",
            data: { cart: [...cart] }
        })
    }
    const incrementCounter = (index) => {
        cart[index].quantity++
        dispatch({
            type: "UPDATE_DATA",
            data: { cart: [...cart] }
        })
    }
    const deleteItem = (index) => {
        let name = cart[index].name
        cart = cart.filter((a, i) => i != index)

        dispatch({
            type: "UPDATE_DATA",
            data: {
                cart: [...cart], mobiles: [...mobiles.map(a => {
                    if (a.name == name) { a.incart = false }
                    return (a)
                })]
            }
        })
    }

    const passDetailsToNav = (x) => {
        dispatch({
            type: "UPDATE_DATA",
            data: { ProfileName: x.user.displayName, Total: { ...x } },
        });
    };

    const changeProfileState = () => {
        dispatch({
            type: "UPDATE_DATA",
            data: { ProfileName: "" },
        });
    };



    return {
        state,
        handleMobileDetails,
        decrementCounter,
        incrementCounter,
        deleteItem,
        handleCart,
        passDetailsToNav,
        changeProfileState
    }
}

export default Mobilestore;
