import { Component } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

export default class App extends Component {
  initialExpenses = [
    { id: 1, charge: '렌트비', amount: 1600 },
    { id: 2, charge: '교통비', amount: 400 },
    { id: 3, charge: '식비', amount: 1200 },
  ];

  render() {
    return (
      <main>
        <h1>예산 계산기</h1>
        <div
          style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}
        >
          <ExpenseForm />
        </div>

        <div
          style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}
        >
          <ExpenseList />
        </div>

        <div>
          <p>
            총 지출: <span>원</span>
          </p>
        </div>
      </main>
    );
  }
}
