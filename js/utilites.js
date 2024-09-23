function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueByID(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    document.getElementById('show-donation').classList.add('hidden');
    document.getElementById('show-history').classList.add('hidden');
    //Show the Button
    document.getElementById(id).classList.remove('hidden');
    
}

// function displayDate(){
//      document.getElementById('showDate').innerText = new Date();   
// }

function displayDate(){
    const currentDate = Date();
    const formattedDate = currentDate.toLocaleString();
    document.getElementById('showDate').textContent = formattedDate;
}

