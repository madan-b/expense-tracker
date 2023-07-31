import "./Add-transaction.css";
import CloseIcon from '../../assets/close-icon.svg';
import { useState } from "react";

const AddTransaction = ({ updateTransaction, setShowAddTransaction}) => {
    const [selectedTab, setSelectedTab] = useState('expense-transaction');
    const currentTimeNdate = new Date().toLocaleString();

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [notes, setNotes] = useState('');

    const handleChange = (event, type) => {
        switch(type){
            case "amount":
                setAmount(Number(event.target.value));
                break;
            case "description":
                setDescription(event.target.value);
                break;
            case "notes":
                setNotes(event.target.value);
                break;
        }
    }

    const handleTransactionSubmit = () => {
        const transactionData = {
            amount,
            description,
            notes,
            time: currentTimeNdate,
            type: selectedTab === "expense-transaction" ? "expense" : "income"
        }
        updateTransaction(transactionData);
    }

    const handleClose = () => {
        setShowAddTransaction(false);
    }

    return(
        <div className="add-transaction-container">
            <div className="add-transaction-header">
                <div className="add-transaction">Add Transaction</div>
                <div>
                    <img src={CloseIcon} className="add-transaction-close" alt="Close icon" onClick={() => handleClose()} />
                </div>
            </div>
            <div className="transaction-type-container">
                <div className={`${selectedTab === 'income-transaction' ? 'selected-tab' : ''} income-transaction`} onClick={() => setSelectedTab('income-transaction')}>
                    <img />
                    <span>Income</span>
                </div>
                <div className={`${selectedTab === 'expense-transaction' ? 'selected-tab' : ''} expense-transaction`} onClick={() => setSelectedTab('expense-transaction')}>
                    <img />
                    <span>Expense</span>
                </div>
            </div>

            <div className="transaction-form-container">
                <div className="transaction-amount">
                    <div>Amount</div>
                    <input type="number" id="transaction-amount" value={amount} onChange={(event) => handleChange(event, "amount")}/>
                </div>
                <div className="transaction-description">
                    <div>Description</div>
                    <textarea id="transaction-description" value={description} onChange={(event) => handleChange(event, "description")}></textarea>
                </div>
                <div className="transaction-time">
                    <div>Date & Time</div>
                    <input type="text" disabled value={currentTimeNdate}/> 
                </div>
                <div className="transaction-notes">
                    <div>Notes</div>
                    <textarea id="transaction-notes" value={notes} onChange={(event) => handleChange(event, "notes")}></textarea>
                </div>

                <div className="transaction-submit-btn" onClick={handleTransactionSubmit}>
                    Submit
                </div>
            </div>
        </div>
    )
}

export default AddTransaction;