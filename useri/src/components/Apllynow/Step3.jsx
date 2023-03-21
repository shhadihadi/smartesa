import React from 'react';

function Step3({ prevStep, handleSubmit, formData }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Credit Card Number:
        <input type="text" name="creditCard" value={formData.creditCard || ''} />
      </label>
      <br></br>
      <button type="submit">Next</button>
      </form>
  )}
  export default Step3