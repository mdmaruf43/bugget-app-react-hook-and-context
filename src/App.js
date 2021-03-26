import './App.css';
import AddTransactions from './Component/AddTransactions';
import Blance from './Component/Blance';
import ExpanseList from './Component/ExpanseList';
import Header from './Component/Header';
import IncomeList from './Component/IncomeList';
import {GlobalContextProvider} from './Context/GlobalState';

function App() {
  return (
    <GlobalContextProvider >
      <div className="container">
        <div className="app-wrapper"> 
            <Header />
            <Blance />
            <AddTransactions />
            <IncomeList />
            <ExpanseList />
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
