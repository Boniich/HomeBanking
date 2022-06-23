export const getDate = () =>{
    const newDate = new Date().toLocaleDateString();
    return newDate;
}

export const transformDateToHumanDate = (date) =>{
    const newDate = new Date(date).toLocaleDateString();
    return newDate;
}