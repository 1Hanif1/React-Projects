import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [visible, setVisibility] = useState(false)
    const submitExpenseHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    const addNewExpenseHandler = () => {
        setVisibility(true);
    }
    const setVisibilityFalse = () => {
        setVisibility(false);
    }
    return (
        <div className="new-expense">
            {visible === true ? <ExpenseForm onSubmitExpense={submitExpenseHandler} visibilityHandler={setVisibilityFalse} /> : <button onClick={addNewExpenseHandler}>Add New Expense</button>}
        </div>
    )
}
export default NewExpense