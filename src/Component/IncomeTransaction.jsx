import React, {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';

const IncomeTransaction = ({incomeTransactions}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <div>
            <li className="transaction">
                <sapn className="transaction-text">{incomeTransactions.incomeText}</sapn>
                <sapn className="transaction-amount">${incomeTransactions.incomeAmount}</sapn>
                <button 
                    className="delete-btn"
                    onClick={() => deleteTransaction(incomeTransactions.id)}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        </div>
    )
}

export default IncomeTransaction
