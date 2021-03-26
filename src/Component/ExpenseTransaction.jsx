import React, {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';

const ExpenseTransaction = ({expenseTransactions}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <div>
            <li className="transaction">
                <sapn className="transaction-text">{expenseTransactions.expenseText}</sapn>
                <sapn className="transaction-amount">${expenseTransactions.expenseAmount}</sapn>
                <button className="delete-btn"
                    onClick={() => deleteTransaction(expenseTransactions.id)}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        </div>
    )
}

export default ExpenseTransaction
