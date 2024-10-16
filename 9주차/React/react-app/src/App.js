import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState('');

  const [expenses, setExpenses] = useState([
    { id: 1, charge: '렌트비', amount: 1600 },
    { id: 2, charge: '교통비', amount: 400 },
    { id: 3, charge: '식비', amount: 1200 },
    { id: 4, charge: '카드비', amount: 300 },
  ]);

  const handleEdit = (id) => {
    setIsEditing(true);
    setId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      const newExpense = {
        id: crypto.randomUUID(),
        charge: charge,
        amount: amount,
      };

      // expense state 불변성
      setExpenses((prev) => [...prev, newExpense]);
      setCharge('');
      setAmount(0);
    } else {
      console.error('error');
    }
  };

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  };

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
  };

  return (
    <main>
      <h1>예산 계산기</h1>
      <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
        <ExpenseForm
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
      </div>

      <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
        <ExpenseList
          initialExpenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>

      <div>
        <p>
          총 지출:
          <span>{expenses.reduce((prev, cur) => prev + cur.amount, 0)}원</span>
        </p>
      </div>
    </main>
  );
};

export default App;
