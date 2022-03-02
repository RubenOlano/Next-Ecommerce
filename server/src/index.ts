import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import { Stripe } from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET as string, {
  apiVersion: "2020-08-27",
});
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post("/payment", async (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "USD",
  };
  const response = await stripe.charges.create(body);
  if (response.status === "failed") {
    return res.status(500).send({ errror: response });
  }
  return res.status(200).send({ success: response });
});
