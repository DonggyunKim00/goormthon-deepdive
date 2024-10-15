import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';

export default class ExpenseList extends Component {
  render() {
    return (
      <>
        <ul>
          <ExpenseItem />
          <ExpenseItem />
          <ExpenseItem />
        </ul>
        <button>목록 지우기</button>
      </>
    );
  }
}
