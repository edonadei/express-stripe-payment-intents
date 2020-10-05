const express = require("express");
const app = express();
const port = 3000;
import { getPaymentIntent } from "./payment_intent";

app.post("/api/payment-intent", (req, res) => {
  if (req.method === "POST") {
    try {
      const { amount } = req.body;
      const paymentIntent = getPaymentIntent(amount);
      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
