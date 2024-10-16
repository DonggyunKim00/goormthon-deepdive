import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ ...props }) => {
  return (
    <>
      <ul>
        {props.initialExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={props.handleDelete}
              handleEdit={props.handleEdit}
            />
          );
        })}
      </ul>
      <button>목록 지우기</button>
    </>
  );
};

export default ExpenseList;
