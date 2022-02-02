// import React from 'react';
// import { useEffect } from 'react'
// import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"

// const Checkout = () => {
//     const amount = "2"
//     const currency = "USD"
//     const style = { "layout": "vertical" }
//      const ButtonWrapper = ({ currency, showSpinner }) => {
//     // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
//     // This is the main reason to wrap the PayPalButtons in a new component
//     const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

//     useEffect(() => {
//         dispatch({
//             type: "resetOptions",
//             value: {
//                 ...options,
//                 currency: currency,
//             },
//         });
//     }, [currency, showSpinner]);


//     return (<>
//             { (showSpinner && isPending) && <div className="spinner" /> }
//             <PayPalButtons
//                 style={style}
//                 disabled={false}
//                 forceReRender={[amount, currency, style]}
//                 fundingSource={undefined}
//                 createOrder={(data, actions) => {
//                     return actions.order
//                         .create({
//                             purchase_units: [
//                                 {
//                                     amount: {
//                                         currency_code: currency,
//                                         value: amount,
//                                     },
//                                 },
//                             ],
//                         })
//                         .then((orderId) => {
//                             // Your code here after create the order
//                             return orderId;
//                         });
//                 }}
//                 onApprove={function (data, actions) {
//                     return actions.order.capture().then(function () {
//                         // Your code here after capture the order
//                     });
//                 }}
//             />
//         </>
//     );
// }
//     return (
//         <div className="flex flex-col">
//             <p className="text-sm text-blue-500">Checkout Page</p>
//                 <PayPalScriptProvider
//                     options={{
//                         "client-id": "AXnJUTu3Zs_H9FsnEbArVcFWnUZMQPyU7-x1KdO77-tv6-ELtQVDkplTYTNl3nY1OA8_Rj1y6Ihkd_XM",
//                         components: "buttons",
//                         currency: "USD",
//                         // disable-funding: "disabled, credit, card, p24"
//                     }}
//                 >
// 				<ButtonWrapper
//                     currency={currency}
//                     showSpinner={false}
//                 />
// 			</PayPalScriptProvider>
//     </div >
        
//     )
// };

// export default Checkout;
