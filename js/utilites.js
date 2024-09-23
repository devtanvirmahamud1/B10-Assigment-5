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

    document.getElementById('btn-donation').classList.add('bg-[#B4F461]');
    document.getElementById('btn-history').classList.add('bg-[#B4F461]');
    
    //Show the Button

    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.remove('bg-[#B4F461');
    
}