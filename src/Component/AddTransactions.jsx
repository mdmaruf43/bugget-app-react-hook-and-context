import React, {useState, useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import {GlobalContext} from '../Context/GlobalState';

const AddTransactions = () => {
    const {addIncome, addExpense} = useContext(GlobalContext);

    const [income, setIncome] = useState({
        incomeText: '',
        incomeAmount: 0,
    })

    const [expense, setExpense] = useState({
        expenseText: '',
        expenseAmount: 0,
    })

    const {expenseText, expenseAmount} = expense;

    const {incomeText, incomeAmount} = income;

    const changeHandlerIncome = e => {
        setIncome({
            ...income, [e.target.name]: e.target.value
        })
    }

    const changeHandlerExpense = e => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value,
        })

        console.log(expense);
    }

    const onSubmitIncome = e => {
        e.preventDefault();

        const newIncomeTransaction = {
            id: uuidv4(),
            incomeText,
            incomeAmount: incomeAmount * 1,
        }
        addIncome(newIncomeTransaction);
        
        setIncome({
            incomeAmount: 0,
            incomeText: '',
        })
    }

    const onSubmitExpense = e => {
        e.preventDefault();

        const newExpenseTransaction = {
            id: uuidv4(),
            expenseText,
            expenseAmount: expenseAmount * 1,
        }

        addExpense(newExpenseTransaction);

        setExpense({
            expenseText: '',
            expenseAmount: 0,
        })
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input 
                        type="text" 
                        value={incomeText}
                        name="incomeText" 
                        placeholder='Add Income...' 
                        autoComplete='off' 
                        onChange={changeHandlerIncome}
                    />
                    <input 
                        type="number" 
                        value={incomeAmount}
                        name="incomeAmount" 
                        placeholder='Amount' 
                        autoComplete='off'
                        onChange={changeHandlerIncome}    
                    />
                    
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                    <input 
                        type="text" 
                        name="expenseText" 
                        value={expenseText}
                        placeholder='Add Expense...' 
                        autoComplete='off'
                        onChange={changeHandlerExpense}
                    />
                    <input 
                        type="number" 
                        name="expenseAmount" 
                        value={expenseAmount}
                        placeholder='Amount' 
                        autoComplete='off'
                        onChange={changeHandlerExpense}
                    />
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default AddTransactions
