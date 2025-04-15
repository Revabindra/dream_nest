import React, { useState } from 'react';

const MockPayment = ({ totalAmount, onSuccess, onClose }) => {
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      onSuccess({
        id: 'mock_payment_' + Math.random().toString(36).substring(2, 9),
        amount: totalAmount,
        status: 'succeeded'
      });
      setLoading(false);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="payment-modal">
      <div className="payment-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h3>Dream Nest Payment Gateway</h3>
        <p>Total Amount: ${totalAmount}</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              name="number"
              value={cardDetails.number}
              onChange={handleChange}
              placeholder="4242 4242 4242 4242"
              pattern="[0-9\s]{13,19}"
              required
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="text"
                name="expiry"
                value={cardDetails.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                pattern="\d{2}/\d{2}"
                required
              />
            </div>
            
            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleChange}
                placeholder="XXX"
                pattern="\d{3}"
                required
              />
            </div>
          </div>
          
          <button type="submit" disabled={loading} className="pay-button">
            {/* {loading ? 'Processing...' : Pay $${totalAmount}} */}
            {/* {loading ? 'Processing...' : Pay $${totalAmount}} */}
            {loading ? 'Processing...' : `Pay $${totalAmount}`}


          </button>
          
          <div className="mock-note">
            <p>This is a Dream Nest payment gateway. No real transactions will occur.</p>
            <p>Use any test values to proceed.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MockPayment;


