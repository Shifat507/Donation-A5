function removeInputValue(id) {
    document.getElementById(id).value = '';

}

function totalMainBalance(id) {
    const balance = parseFloat(document.getElementById(id).innerText)
    return balance;
}

// Noakhali: 
document.getElementById('btn-noakhali').
    addEventListener('click', function () {

        const totalBalance = totalMainBalance('total-balance');

        const donationAmountNoakhali = parseFloat(document.getElementById('donation-amount-noakhali').value);

        if(donationAmountNoakhali <= 0 || isNaN(donationAmountNoakhali)){
            alert('Invalid Input Please Try Again');
            removeInputValue('donation-amount-noakhali');
            return;
        }

        if (donationAmountNoakhali <= totalBalance) {

            const title = document.getElementById('title-noakhali').innerText;

            const remainingBalance = totalBalance - donationAmountNoakhali;
            // update balance 
            document.getElementById('total-balance').innerText = remainingBalance;

            // set total donation
            const donationAmountField = parseFloat(document.getElementById('total-donation-noakhali').innerText);

            document.getElementById('total-donation-noakhali').innerText = donationAmountField + donationAmountNoakhali;
            removeInputValue('donation-amount-noakhali');
            document.getElementById('my_modal_5').showModal();

            // History List : 
            const historyItem = document.createElement('div');
            historyItem.className = "border-2 border-gray-500 lg:w-2/4 my-2 p-5 rounded-lg";
            historyItem.innerHTML = `
                <h2 class="text-lg font-bold">${donationAmountNoakhali} Taka is ${title}</h2>
             <p class="text-md text-gray-400">Date : ${new Date().toLocaleDateString()} and Time : ${new Date().toLocaleTimeString()}</p>
            `
            const historyItemListSection = document.getElementById('history-item-lists');
            historyItemListSection.appendChild(historyItem);
        }
        else {
            alert('Sorry!! Do not have sufficient balance');
            removeInputValue('donation-amount-noakhali');
        }
    })


document.getElementById('btn-feni').
    addEventListener('click', function () {
        const totalBalance = totalMainBalance('total-balance');

        const donationAmountFeni = parseFloat(document.getElementById('donation-amount-feni').value);

        if(donationAmountFeni <= 0 || isNaN(donationAmountFeni)){
            alert('Invalid Input Please Try Again');
            removeInputValue('donation-amount-feni');
            return;
        }

        if (donationAmountFeni <= totalBalance) {

            const title = document.getElementById('title-feni').innerText;

            const remainingBalance = totalBalance - donationAmountFeni;
            // update balance 
            document.getElementById('total-balance').innerText = remainingBalance;

            // set total donation
            const donationAmountField = parseFloat(document.getElementById('total-donation-feni').innerText);

            document.getElementById('total-donation-feni').innerText = donationAmountField + donationAmountFeni;
            removeInputValue('donation-amount-feni');
            document.getElementById('my_modal_5').showModal();

            // History List : 
            const historyItem = document.createElement('div');
            historyItem.className = "border-2 border-gray-500 lg:w-2/4 my-2 p-5 rounded-lg";
            historyItem.innerHTML = `
                <h2 class="text-lg font-bold">${donationAmountFeni} Taka is ${title}</h2>
             <p class="text-md text-gray-400">Date : ${new Date().toLocaleDateString()} and Time : ${new Date().toLocaleTimeString()}</p>
            `
            const historyItemListSection = document.getElementById('history-item-lists');
            historyItemListSection.appendChild(historyItem);
        }
        else {
            alert('Sorry!! Do not have sufficient balance');
            removeInputValue('donation-amount-feni');
        }
    })


document.getElementById('btn-movement').
    addEventListener('click', function () {
        const totalBalance = totalMainBalance('total-balance');

        const donationAmountMovement = parseFloat(document.getElementById('donation-amount-movement').value);

        if(donationAmountMovement <= 0 || isNaN(donationAmountMovement)){
            alert('Invalid Input Please Try Again');
            removeInputValue('donation-amount-movement');
            return;
        }

        if (donationAmountMovement <= totalBalance) {

            const title = document.getElementById('title-movement').innerText;

            const remainingBalance = totalBalance - donationAmountMovement;
            // update balance 
            document.getElementById('total-balance').innerText = remainingBalance;

            // set total donation
            const donationAmountField = parseFloat(document.getElementById('total-donation-movement').innerText);

            document.getElementById('total-donation-movement').innerText = donationAmountField + donationAmountMovement;
            removeInputValue('donation-amount-movement');
            document.getElementById('my_modal_5').showModal();

            // History List : 
            const historyItem = document.createElement('div');
            historyItem.className = "border-2 border-gray-500 lg:w-2/4 my-2 p-5 rounded-lg";
            historyItem.innerHTML = `
                <h2 class="text-lg font-bold">${donationAmountMovement} Taka is ${title}</h2>
             <p class="text-md text-gray-400">Date : ${new Date().toLocaleDateString()} and Time : ${new Date().toLocaleTimeString()}</p>
            `
            const historyItemListSection = document.getElementById('history-item-lists');
            historyItemListSection.appendChild(historyItem);
        }
        else {
            alert('Sorry!! Do not have sufficient balance');
            removeInputValue('donation-amount-movement');
        }
    })

// Toggling Button
// History-btn
document.getElementById('btn-history').addEventListener('click', function () {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('btn-history').classList.add('bg-gradient-to-r', 'from-indigo-500', 'to-purple-600', 'border-2', 'border-gray-700', 'text-white', 'font-bold', 'py-2', 'px-5', 'rounded');
    document.getElementById('btn-donation').classList.remove('bg-gradient-to-r', 'from-indigo-500', 'to-purple-600', 'border-2', 'border-gray-700', 'text-white', 'font-bold', 'py-2', 'px-5', 'rounded');
    document.getElementById('btn-donation').classList.add('bg-indigo-950', 'border-2', 'border-gray-700', 'text-white', 'font-bold', 'py-2', 'px-5', 'rounded');

    document.getElementById('history-section').classList.remove('hidden');


})

// Donation Section
document.getElementById('btn-donation').addEventListener('click', function () {
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('btn-donation').classList.add('bg-gradient-to-r', 'from-indigo-500', 'to-purple-600', 'border-2', 'border-gray-700', 'text-white', 'font-bold', 'py-2', 'px-5', 'rounded');
    document.getElementById('btn-history').classList.remove('bg-gradient-to-r', 'from-indigo-500', 'to-purple-600', 'border-2', 'border-gray-700', 'text-white', 'font-bold', 'py-2', 'px-5', 'rounded');
    document.getElementById('btn-history').classList.add('bg-indigo-950', 'border-2', 'border-gray-700', 'text-white', 'font-bold', 'py-2', 'px-5', 'rounded');

    document.getElementById('donation-section').classList.remove('hidden')
})

document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href="/blog.html";
})



