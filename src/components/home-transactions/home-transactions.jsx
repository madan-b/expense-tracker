import "./home-transactions.css";
import ExpenseIcon from '../../assets/expense-icon.svg';
import IncomeIcon from '../../assets/income-icon.svg';

// {
    //         isExpense: true,
    //         title: "Dinner expense",
    //         time: "26 July 2023, 4:35 pm",
    //         amount: 500
    //     }

const HomeTransactions = ({ transactionsData = [] }) => {
    return(
        <div className="transactions-container">
            { transactionsData.length === 0 ? <div className="no-transactions">No transactions found</div> :
                transactionsData.reverse().map((transaction) => {
                    return (
                        <div className="transaction-container" key={transaction.id}>
                            <div className="transaction-icon-detail">
                                <div className={ `transaction-icon-container ${transaction.type === "expense" ? "expense-bg" : "income-bg" }`}>
                                    {transaction.type === "expense" ? <img alt="Expense" className="expense-icon" src={ExpenseIcon} /> : <img src={IncomeIcon} className="income-icon" alt="Income" />}
                                </div>
                                <div className="transaction-details-container">
                                    <div className="transaction-title">{transaction.description}</div>
                                    <div className="transaction-time">{transaction.time}</div>
                                </div>
                            </div>
                            <div className="transaction-amount">&#8377; {transaction.amount}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomeTransactions;