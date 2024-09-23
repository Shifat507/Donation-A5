function removeInputValue(id){
   document.getElementById(id).value = '';
    
}


document.getElementById('btn-noakhali').
    addEventListener('click', function () {

        const totalBalance = parseFloat(document.getElementById('total-balance').innerText);

        const donationAmountNoakhali = parseFloat(document.getElementById('donation-amount-noakhali').value);
      
        if(donationAmountNoakhali <= totalBalance){
             
            const remainingBalance = totalBalance - donationAmountNoakhali;
            // update balance 
            document.getElementById('total-balance').innerText = remainingBalance;
            
            // set total donation
            const donationAmountField =  parseFloat(document.getElementById('total-donation-noakhali').innerText);

            document.getElementById('total-donation-noakhali').innerText = donationAmountField + donationAmountNoakhali;
            removeInputValue('donation-amount-noakhali');
            document.getElementById('my_modal_5').showModal();
        }
        else{
            alert('Sorry!! Do not have sufficient balance');
            removeInputValue('donation-amount-noakhali');
        }
    })


document.getElementById('btn-feni').
    addEventListener('click',function(){
        const totalBalance = parseFloat(document.getElementById('total-balance').innerText);

        const donationAmountFeni = parseFloat(document.getElementById('donation-amount-feni').value);
      
        if(donationAmountFeni <= totalBalance){
             
            const remainingBalance = totalBalance - donationAmountFeni;
            // update balance 
            document.getElementById('total-balance').innerText = remainingBalance;
            
            // set total donation
            const donationAmountField =  parseFloat(document.getElementById('total-donation-feni').innerText);

            document.getElementById('total-donation-feni').innerText = donationAmountField + donationAmountFeni;
            removeInputValue('donation-amount-feni');
            document.getElementById('my_modal_5').showModal();
        }
        else{
            alert('Sorry!! Do not have sufficient balance');
            removeInputValue('donation-amount-feni');
        }
})


document.getElementById('btn-movement').
    addEventListener('click',function(){
        const totalBalance = parseFloat(document.getElementById('total-balance').innerText);

        const donationAmountMovement = parseFloat(document.getElementById('donation-amount-movement').value);
      
        if(donationAmountMovement <= totalBalance){
             
            const remainingBalance = totalBalance - donationAmountMovement;
            // update balance 
            document.getElementById('total-balance').innerText = remainingBalance;
            
            // set total donation
            const donationAmountField =  parseFloat(document.getElementById('total-donation-movement').innerText);

            document.getElementById('total-donation-movement').innerText = donationAmountField + donationAmountMovement;
            removeInputValue('donation-amount-movement');
            document.getElementById('my_modal_5').showModal();
        }
        else{
            alert('Sorry!! Do not have sufficient balance');
            removeInputValue('donation-amount-movement');
        }
})