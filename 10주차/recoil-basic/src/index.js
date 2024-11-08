import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

// Atom => state의 일부를 나타냄, 어떠한 컴포넌트에서 읽고 쓸 수 있음

// 1. RecoilRoot 로 감싼다 => Provider 역할
// 2. Atom 만들기
// 3. Selector => atom 과 다른 selector의 상태를 받아서 함수를 return
//             => atom의 상태가 바뀔때마다 해당 atom을 쓰고있던 컴포넌트를 리렌더링 함
