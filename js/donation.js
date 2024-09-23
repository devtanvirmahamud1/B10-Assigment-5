// Noakhali-donation Function
document.getElementById('btn-noakhali-donate')
    .addEventListener('click', function (event) {
        event.preventDefault();
        
      

        const addMoney = getInputFieldValueById('noakhali-donation');
        if(isNaN(addMoney)){
            alert('Failed to Donate');
            return;
        }

        const balance = getTextFieldValueByID('noakhali-balance');
        const newBalance = balance + addMoney;
        document.getElementById('noakhali-balance').innerText = newBalance;

        const accountBalance = getTextFieldValueByID('account-balance');
        const accountNewBalacne = accountBalance - addMoney;
        if(addMoney > accountBalance){
            alert('Insuficient Balance');
            return;
        }
        document.getElementById('account-balance').innerText = accountNewBalacne;
       

    })

// Feni Donation Function
document.getElementById('btn-feni-donate')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('feni-donation');
        if(isNaN(addMoney)){
            alert('Failed to Donate');
            return;
        }

        const balance = getTextFieldValueByID('feni-balance');
        const newBalance = balance + addMoney;
        document.getElementById('feni-balance').innerText = newBalance;

        const accountBalance = getTextFieldValueByID('account-balance');
        const accountNewBalacne = accountBalance - addMoney;
        if(addMoney > accountBalance){
            alert('Insuficient Balance');
            return;
        }
        document.getElementById('account-balance').innerText = accountNewBalacne;

    })

// Queta Donation Function

document.getElementById('btn-queta-donate')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('queta-donation');
        if(isNaN(addMoney)){
            alert('Failed to Donate');
            return;
        }

        const balance = getTextFieldValueByID('queta-balance');
        const newBalance = balance + addMoney;
        document.getElementById('queta-balance').innerText = newBalance;

        const accountBalance = getTextFieldValueByID('account-balance');
        const accountNewBalacne = accountBalance - addMoney;
        if(addMoney > accountBalance){
            alert('Insuficient Balance');
            return;
        }
        document.getElementById('account-balance').innerText = accountNewBalacne;

    })
