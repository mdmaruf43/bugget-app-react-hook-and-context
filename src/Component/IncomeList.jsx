import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';
import IncomeTransaction from './IncomeTransaction';

const IncomeList = () => {
    const {incomeTransactions} = useContext(GlobalContext);

    return (
        <div className='transactions transactions-income'>
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {
                    incomeTransactions.map(incomeTransactions => (
                        <IncomeTransaction 
                            key={incomeTransactions.id}
                            incomeTransactions={incomeTransactions}
                        />
                    ))
                }
                
            </ul>
        </div>
    )
}

export default IncomeList
