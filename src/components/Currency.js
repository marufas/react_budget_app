
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
  const { dispatch, currency } = useContext(AppContext);

  const setCurrency = (value) => {
    console.log(value)
    dispatch({
      type: 'CHG_CURRENCY',
      payload: value,
    });
  }

  return (
    <div className="alert alert-success">
      <label htmlFor="currency">Currency</label>
      <select
        name="currency"
        id="currency"
        defaultValue={currency}
        onChange={(event) => setCurrency(event.target.selectedOptions[0].value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>
    </div >
  );
};

export default ExpenseList;