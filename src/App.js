import './App.css';
import TransactionsList from './components/TransactionsList';


function App() {

  return (
    <div className="App">

      <div className='Heading'>
        <h1>Flatiron Bank</h1>
      </div>
      
      <searchBar />
      <TransactionsList />
    </div>
  );
}

export default App;