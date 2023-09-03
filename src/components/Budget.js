
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
  const { dispatch, expenses, budget, currency } = useContext(AppContext);


  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const validateBudget = (proposedBudget) => {
    if (proposedBudget < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
    } else if (proposedBudget > 20000) {
      alert("Budget cannot exceed 20k");
    } else {
      dispatch({
        type: 'SET_BUDGET',
        payload: proposedBudget
      });
    }
  }

  return (
    <div className='alert alert-secondary'>
      <label htmlFor="budget">Budget: {currency}</label>
      <input
        required='required'
        type='number'
        id='budget'
        value={budget}
        step='10'
        style={{ width: "100px", size: 10 }}
        onChange={(event) => validateBudget(event.target.value)}>
      </input>
    </div>
  );
};
export default Budget;