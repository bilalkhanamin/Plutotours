const stripe = require('stripe')('sk_test_51JeQP5Ix4VhC2sXNH66ho23RLKTaEuVztJA4MpQmSGimTxk6jjhTve6zs7UOef6NQdp71vE7OSW3RyVrizFTBnpG00MEDxNU4T');
const express = require('express');
const router = express.Router();
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000/checkout';

router.post('/', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // TODO: replace this with the `price` of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url)
});


module.exports  = router;