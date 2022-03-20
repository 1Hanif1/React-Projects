import './ExpenseForm.css';

const ExpenseForm = (props) => {


    // const [userInput, setInput] = useState({
    //     enteredAmount: '',
    //     enteredTitle: '',
    //     enteredDate: '',
    // })


    // const titleChangeHandler = (e) => {
    //     if (!e.target.value) return;
    //     setInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredTitle: e.target.value,
    //         }
    //     })
    // }

    // const amountChangeHandler = (e) => {
    //     if (!e.target.value) return;
    //     setInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredAmount: e.target.value,
    //         }
    //     })
    // }

    // const dateChangeHandler = (e) => {
    //     if (!e.target.value) return;
    //     setInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredDate: e.target.value,
    //         }
    //     })
    // }


    const formSubmitHandler = (e) => {
        e.preventDefault();
        const expenseTitle = document.querySelector("input.title")
        const expenseAmount = document.querySelector("input.amount")
        const expenseDate = document.querySelector("input.date")
        const data = [expenseTitle, expenseAmount, expenseDate]
        if (data.some(input => input.value === '')) return;

        const expenseData = {
            title: expenseTitle.value,
            amount: +expenseAmount.value,
            date: new Date(expenseDate.value),
        }

        props.onSubmitExpense(expenseData);
        data.forEach(data => data.value = '')
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input className='title' type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' className='amount' min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" className='date' placeholder='dd-mm-yyyy' min="2000-01-01" />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.visibilityHandler}>Cancel</button>
                <button >Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm