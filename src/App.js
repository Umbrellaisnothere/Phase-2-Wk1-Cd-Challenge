import React from 'react';
import './App.css';
import Form from './Form';
import TransactionsList from './components/TransactionsList';


function App() {

  return (
    <div className="App">

      <div className='Heading'>
        <h1 className='Heading-text'>Flatiron Bank</h1>
      </div>

      <Form />

      <TransactionsList />
    </div>
  );
}

export default App;