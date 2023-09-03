import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    });

  }

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'RED_EXPENSE',
      payload: expense
    });

  }

  return (
    <tr>
      <td>{props.name}</td>
      <td>{currency}{props.cost}</td>
      <td><div className='green circle'><FaPlus size='1.5em' style={{ color: "white" }} onClick={event => increaseAllocation(props.name)}></FaPlus></div></td>
      <td><div className='red circle'><FaMinus size='1.5em' style={{ color: "white" }} onClick={event => decreaseAllocation(props.name)}></FaMinus></div></td>
      <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
    </tr>
  );
};

export default ExpenseItem;