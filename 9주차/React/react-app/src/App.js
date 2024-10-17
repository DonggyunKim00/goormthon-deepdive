import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';

const App = () => {
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState(0);

  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState('');

  const [alert, setAlert] = useState({ show: false });

  const [expenses, setExpenses] = useState([
    { id: 1, charge: '렌트비', amount: 1600 },
    { id: 2, charge: '교통비', amount: 400 },
    { id: 3, charge: '식비', amount: 1200 },
    { id: 4, charge: '카드비', amount: 300 },
  ]);

  const handleEdit = (id) => {
    const expense = expenses.find((item) => item.id === id);
    const { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setIsEditing(true);
    setId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      if (isEditing) {
        const newExpense = expenses.map((item) => {
          return item.id === id
            ? { ...item, charge: charge, amount: amount }
            : item;
        });
        // expense state 불변성
        setExpenses((prev) => [...prev, newExpense]);
        setIsEditing(false);
      } else {
        const newExpense = {
          id: crypto.randomUUID(),
          charge: charge,
          amount: amount,
        };
        // expense state 불변성
        setExpenses((prev) => [...prev, newExpense]);
      }
      handleAlert({ type: 'success', text: '아이템이 생성되었습니다.' });
      setCharge('');
      setAmount(0);
    } else {
      console.error('error');
      handleAlert({
        type: 'danger',
        text: 'charge는 빈 값일 수 없으며, amount는 0보다 커야합니다.',
      });
    }
  };

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  };

  const clearItems = (e) => {
    setExpenses([]);
    handleAlert({
      type: 'danger',
      text: '아이템이 모두 삭제되었습니다.',
    });
  };

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
    handleAlert({
      type: 'danger',
      text: '아이템이 삭제되었습니다.',
    });
  };

  const handleAlert = ({ type, text }) => {
    let a;
    clearTimeout(a);
    setAlert({ show: true, type: type, text: text });
    a = setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  return (
    <main>
      {alert.show ? <Alert text={alert.text} type={alert.type} /> : null}
      <h1>예산 계산기</h1>
      <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
        <ExpenseForm
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          handleEdit={handleEdit}
          isEditing={isEditing}
        />
      </div>

      <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
        <ExpenseList
          initialExpenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
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
