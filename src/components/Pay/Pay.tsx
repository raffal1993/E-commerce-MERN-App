import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StripeCheckout, { Token } from 'react-stripe-checkout';

const Pay = () => {
  const [stripeToken, setStripeToken] = useState<Token | null>(null);
  const navigate = useNavigate();

  const onToken = (token: Token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        if (!stripeToken) throw Error();
        await axios.post('http://localhost:5000/api/checkout/payment', {
          tokenId: stripeToken.id,
          amount: 2000,
        });
        navigate('/success');
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [stripeToken, navigate]);

  return stripeToken ? (
    <span>Processing. Please wait...</span>
  ) : (
    <StripeCheckout
      name="Company name"
      image="https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png"
      billingAddress
      shippingAddress
      description="Your total is $20"
      amount={2000}
      token={onToken}
      stripeKey={process.env.REACT_APP_STRIPE_KEY!}
    ></StripeCheckout>
  );
};

export default Pay;
