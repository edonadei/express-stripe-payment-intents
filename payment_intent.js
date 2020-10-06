import Stripe from "stripe";
require("dotenv").config();

const stripe = new Stripe(process.env.STRIPE_SECRET);

export const getPaymentIntent = async amount => {
  try {
    let paymentIntent = null;
    return (paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "eur"
    }));
  } catch (err) {
    throw err;
  }
};
