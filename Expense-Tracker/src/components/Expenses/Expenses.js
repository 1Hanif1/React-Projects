import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpensesList";
import Card from '../UI/Card';
import './Expenses.css'
import { useState } from "react";

function Expenses(props) {
    const [selectedDate, setDate] = useState(`${new Date().getFullYear()}`)

    const filteredExpenses = props.items.filter(
        element =>
            element.date.getFullYear().toString() === selectedDate
    )
    const dateSelectHandler = (date) => {
        setDate(date)
    }

    return (

        <Card className="expenses">
            <ExpensesFilter selectedFilter={selectedDate} onDateSelect={dateSelectHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList expenses={filteredExpenses} />
        </Card>

    )
}

export default Expenses