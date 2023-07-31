import "./home-dashboard.css";
import VisibleEyeIcon from '../../assets/visible-eye-icon.svg';
import HiddenEyeIcon from '../../assets/hidden-eye-icon.svg';
import { useState } from "react";


const HomeDashboard = ({ transactionSummary, showNumbers, setShowNumbers }) => {
    return(
        <div className="dashboard-container">
            <div className="dashboard__top-container">
                <div className="dashboard__balance-container">
                    <div className="text-light">Total balance</div>
                    <div className="total-bal mb-4">&#8377; { showNumbers ? transactionSummary.balance : "******" }</div>
                </div>
                <div className="show-hide-container" onClick={() => setShowNumbers(!showNumbers)}>
                    <img src={showNumbers ? VisibleEyeIcon : HiddenEyeIcon} className="eye-icon" alt="Show/Hide numbers" />
                    <div>{showNumbers ? "Hide" : "Show"}</div>
                </div>
            </div>
            <div className="dashboard__bottom-container">
                <div className="dashboard__total-income-container">
                    <div className="text-light">Income</div>
                    <div className="income-amount mb-4">&#8377; {showNumbers ? transactionSummary.totalIncome : "******"}</div>
                </div>
                <div className="dashboard__total-expense-container">
                    <div className="text-light">Expense</div>
                    <div className="expense-amount mb-4">&#8377; {showNumbers ? transactionSummary.totalExpense : "*****"}</div>
                </div>
            </div>
        </div>
    )
}

export default HomeDashboard;