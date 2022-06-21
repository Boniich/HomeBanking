export const getAccountNumberFromStorage = () =>{
    const accountNumber = localStorage.getItem("accNumber");
    return accountNumber;
}