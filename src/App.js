import './App.css';
import TransactionsList from './components/TransactionsList';
// import searchBar from './components/searchBar';


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