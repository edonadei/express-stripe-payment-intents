import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);

export const getPaymentIntent = async price => {
  try {
    return (paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "eur"
    }));
  } catch (err) {
    throw err;
  }
};
