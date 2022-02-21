import React, { FC } from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";
import { StripeProps } from "../../types/types";

const StripeButton: FC<StripeProps> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KUzVCDzPe6ONc7iNtQ8NVK3PwS3nCE6ZcEb4Xkck1FCvPWtDtjlR2Dt5XZ9iBIh0eJbWS2N1PKFwU1MJ2ofSpAG00t15nQLOv";

  const onToken = (token: Token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing"
      billingAddress
      shippingAddress
      description={`Your total price is: $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
