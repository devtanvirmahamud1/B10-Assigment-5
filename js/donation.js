// Noakhali-donation Function
document.getElementById('btn-noakhali-donate')
    .addEventListener('click', function (event) {
        event.preventDefault();
        
      

        const addMoney = getInputFieldValueById('noakhali-donation');
        const noakhaliTitle = document.getElementById('noakhali-title').innerText;
        if(isNaN(addMoney)){
            alert('Failed to Donate');
            return;
        }

        const balance = getTextFieldValueByID('noakhali-balance');
        const newBalance = balance + addMoney;
        document.getElementById('noakhali-balance').innerText = newBalance;
        // add to history
        const div = document.createElement('div');
        div.classList.add('border', 'p-10', 'rounded-lg', 'mt-5');
        div.innerHTML = `
            <h4 class="text-xl">${addMoney} Taka is ${noakhaliTitle}</h4>
            <h4 id="timeDisplay"></h4>
            
        `;
       
        document.getElementById('history-container').appendChild(div);

        // should be add a common function

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
        const feniTitle = document.getElementById('feni-title').innerText;
        if(isNaN(addMoney)){
            alert('Failed to Donate');
            return;
        }

        const balance = getTextFieldValueByID('feni-balance');
        const newBalance = balance + addMoney;
        document.getElementById('feni-balance').innerText = newBalance;
        // add to history
        const div = document.createElement('div');
        div.classList.add('border', 'p-10', 'rounded-lg', 'mt-5');
        div.innerHTML = `
            <h4 class="text-xl">${addMoney} Taka is ${feniTitle}</h4>
             
        `;
       
        document.getElementById('history-container').appendChild(div);

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
        const quetaTitle = document.getElementById('queta-title').innerText;
        if(isNaN(addMoney)){
            alert('Failed to Donate');
            return;
        }

        const balance = getTextFieldValueByID('queta-balance');
        const newBalance = balance + addMoney;
        document.getElementById('queta-balance').innerText = newBalance;
        // add to history
        const div = document.createElement('div');
        div.classList.add('border', 'p-10', 'rounded-lg', 'mt-5');
        div.innerHTML = `
            <h4 class="text-xl">${addMoney} Taka is ${quetaTitle}</h4>
            <h4 id="timeDisplay"></h4>
            
        `;
       
        document.getElementById('history-container').appendChild(div);
        
        const accountBalance = getTextFieldValueByID('account-balance');
        const accountNewBalacne = accountBalance - addMoney;
        if(addMoney > accountBalance){
            alert('Insuficient Balance');
            return;
        }

        

        document.getElementById('account-balance').innerText = accountNewBalacne;

    })

