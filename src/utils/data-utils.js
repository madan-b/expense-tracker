const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

const updateLocalStorage = (key, data) => {
    const existingData = getFromLocalStorage(key);

    if(existingData && existingData.dataName === "expense-tracker"){
        existingData.data?.push(data);
        if(data.type === "expense"){
            existingData.summary.totalExpense += data.amount;
            existingData.summary.balance -= data.amount;
        }else{
            existingData.summary.totalIncome += data.amount;
            existingData.summary.balance += data.amount;
        }

        setLocalStorage(key, existingData);
        return;
    }
    
    const newData = { dataName: "expense-tracker", data : [ data ] };
    if(data.type === "income"){
        newData.summary = {
            totalIncome: data.amount,
            balance: data.amount,
            totalExpense: 0
        }
    }

    setLocalStorage(key, newData);
}

export {
    getFromLocalStorage,
    setLocalStorage,
    updateLocalStorage
}