
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
    <div className="container">
      <select
        name="currency"
        className="select-field"
        id="currency-select"
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