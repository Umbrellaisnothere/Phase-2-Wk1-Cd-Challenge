import React from 'react';
import './App.css';
import TransactionsList from './components/TransactionsList';
import SearchBar from './components/SearchBar';


function App() {

  return (
    <div className="App">

      <div className='Heading'>
        <h1>Flatiron Bank</h1>
      </div>

      <SearchBar />
      
      <TransactionsList />
    </div>
  );
}

export default App;