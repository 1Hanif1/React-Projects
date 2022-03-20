import ExpenseItem from "./ExpenseItem"

const ExpenseList = (props) => {

    if (props.expenses.length === 0) return (<p className="message">No Expenses found</p>)

    return props.expenses.map(expense => {
        return <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    })
}

export default ExpenseList