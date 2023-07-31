import React, { useState } from "react";

import Header from "../header/header";
import HomeDashboard from "../home-dashboard/home-dashboard";
import HomeTransactions from "../home-transactions/home-transactions";
import FooterNavbar from "../footer-navbar/footer-navbar";
import AddTransaction from "../Add-expense/Add-transaction";

import "./App.css";

import { getFromLocalStorage, updateLocalStorage } from "../../utils/data-utils";

const App = () => {
    const [showAddTransaction, setShowAddTransaction] = useState(false);
    const [showDashboardNumbers, setShowDashboardNumbers] = useState(false);
    
    const transactionData = getFromLocalStorage("expense-tracker") || { data: [], summary: { balance: 0, totalIncome: 0, totalExpense: 0 } };
    console.log("transaction", transactionData);

    const updateTransaction = (transactionData) => {
        updateLocalStorage("expense-tracker", transactionData);
        setShowAddTransaction(false);
    }

    return(
        <div className="expense-tracker-container">
            {
            showAddTransaction 
            ? 
               <AddTransaction updateTransaction={updateTransaction} setShowAddTransaction={setShowAddTransaction}/>
            :
                <React.Fragment>
                    <Header />
                    <HomeDashboard transactionSummary={transactionData.summary} showNumbers={showDashboardNumbers} setShowNumbers={setShowDashboardNumbers} />
                    <HomeTransactions transactionsData={transactionData.data}/>
                    <FooterNavbar showAddTransaction={setShowAddTransaction} />
                </React.Fragment>
            }
        </div>
    )
}

export default App;