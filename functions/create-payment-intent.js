// require('dotenv').config();

// const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

// exports.handler = async (event, context) => {
//   if (event.body) {
//     const { shipping_fee, total_amount } = JSON.parse(event.body);

//     const calculateOrderAmount = () => {
//       // this is where normally I would call my backend to calculate the total amount
//       return shipping_fee + total_amount;
//     };

//     try {
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: calculateOrderAmount(),
//         currency: 'usd',
//       });
//       return {
//         statusCode: 200,
//         body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
//       };
//     } catch (error) {
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ msg: error.message }),
//       };
//     }
//   }
//   return {
//     statusCode: 200,
//     body: 'Create Payment Intent',
//   };
// };

require('dotenv').config();

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  if (event.body) {
    const { shipping_fee, total_amount } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
      // this is where normally I would call my backend to calculate the total amount
      return shipping_fee + total_amount;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'usd',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: 'Create Payment Intent',
  };
};
