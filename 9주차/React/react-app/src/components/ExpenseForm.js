import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  render() {
    return (
      <form>
        <div>
          <div>
            <label htmlFor="charge">지출 항목</label>
            <input
              type="text"
              id="charge"
              name="charge"
              placeholder="예) 렌트비"
            />
          </div>
          <div>
            <label htmlFor="amount">비용</label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="예) 100"
            />
          </div>
        </div>
        <button type="submit">제출</button>
      </form>
    );
  }
}
