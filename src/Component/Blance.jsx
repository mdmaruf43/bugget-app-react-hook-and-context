import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

const Blance = () => {
    const {incomeTransactions, expenseTransactions} = useContext(GlobalContext);

    const allIncomeAmounts = incomeTransactions.map(
        incomeTransactions => incomeTransactions.incomeAmount
    )

    const allExpenseAmounts = expenseTransactions.map(
        expenseTransactions => expenseTransactions.expenseAmount
    )
    

    const totalIncome = allIncomeAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const totalExpense = allExpenseAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


    return (
        <div className='balance'>
            <h2>Your Balance</h2>
            <h3>${(totalIncome - totalExpense).toFixed(2)}</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>Income</h3>
                    <p>+${totalIncome}</p>
                </div>
                <div className="minus">
                    <h3>Expenses</h3>
                    <p>-${totalExpense}</p>
                </div>
            </div>
        </div>
    )
}

export default Blance
