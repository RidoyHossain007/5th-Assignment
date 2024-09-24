document.getElementById('donate-1').addEventListener('click',function (event) {
     event.preventDefault();


     let totalBalance= balance('main-balance')
     let donation= donationNumber('noakhali-input');
     let inputs = document.getElementById('noakhali-input').value;
     for (const number of inputs ) {
          if (isNaN(number)) {
               alert('Invalid Donation Amount')
               document.getElementById('noakhali-input').value=''
              return
          }
     }
          
    
    
    if (donation<=0) {
          alert('Invalid Donation Amount')
        
    
          
     } 
  

     
     else if (totalBalance<=0 || donation>totalBalance ) {
          alert('Insufficient Balance')
     }
     
     
    else {
     let noakhaliDonations=balance('noakhali-donation')
     let totalDonation = noakhaliDonations + donation;
     document.getElementById('noakhali-donation').innerText=totalDonation;
     
    
          onclick=my_modal_5.showModal()
          
          let newBalance=totalBalance-donation;
          document.getElementById('main-balance').innerText=newBalance;
            //adding to transaction history
            const div= document.createElement('div');
            div.classList.add('border-2', 'p-4', 'rounded-xl', 'shadow-sm', 'mb-3')
            div.innerHTML= `
                 <h4 class="text-xl font-bold mb-2">${donation} Taka is Donated for Flood Relief at Noakhali, Bangladesh.</h4>
            
            <p class="text-sm"> ${donationTime}</p>
            `
            document.getElementById('history-section').appendChild(div);
    }
    document.getElementById('noakhali-input').value=''
})
// donation 2
document.getElementById('donate-2').addEventListener('click',function (event) {
     event.preventDefault();
     
          
     let totalBalance= balance('main-balance')
     let donation= donationNumber('feni-input');
     let inputs = document.getElementById('feni-input').value;
     for (const number of inputs ) {
          if (isNaN(number)) {
               alert('Invalid Donation Amount')
               document.getElementById('feni-input').value=''
              return
          }
     }



     if ( donation<=0) {
          alert('Invalid Donation Amount')
        
    
          
     } 
     else if (totalBalance<=0 || donation>totalBalance ) {
          alert('Insufficient Balance')
     }
     
     
    else{
     let feniDonations=balance('feni-donation')
     let totalDonation = feniDonations + donation;
     document.getElementById('feni-donation').innerText=totalDonation;
     
    
          onclick=my_modal_5.showModal()
          
          let newBalance=totalBalance-donation;
          document.getElementById('main-balance').innerText=newBalance;
            //adding to transaction history
            const div= document.createElement('div');
            div.classList.add('border-2', 'p-4', 'rounded-xl', 'shadow-sm', 'mb-3')
            div.innerHTML= `
                 <h4 class="text-xl font-bold mb-2">${donation} Taka is Donated for Flood Relief at Feni, Bangladesh.</h4>
            
            <p class="text-sm"> ${donationTime}</p>
            `
            document.getElementById('history-section').appendChild(div);
    }
    document.getElementById('feni-input').value=''
})
// donation 3
document.getElementById('donate-3').addEventListener('click',function (event) {
     event.preventDefault();
     
          
     let totalBalance= balance('main-balance')
     let donation= donationNumber('quota-input');

     let inputs = document.getElementById('quota-input').value;
     for (const number of inputs ) {
          if (isNaN(number)) {
               alert('Invalid Donation Amount')
               document.getElementById('quota-input').value=''
              return
          }
     }


     if (donation<=0) {
          alert('Invalid Donation Amount')
        
    
          
     } 
     else if (totalBalance<=0 || donation>totalBalance ) {
          alert('Insufficient Balance')
     }
     
     
    else{
     let quotaDonations=balance('quota-donation')
     let totalDonation = quotaDonations + donation;
     document.getElementById('quota-donation').innerText=totalDonation;
     
    
          onclick=my_modal_5.showModal()
          
          let newBalance=totalBalance-donation;
          document.getElementById('main-balance').innerText=newBalance;

          //adding to transaction history
          const div= document.createElement('div');
          div.classList.add('border-2', 'p-4', 'rounded-xl', 'shadow-sm', 'mb-3')
          div.innerHTML= `
               <h4 class="text-xl font-bold mb-2">${donation} Taka is Donated for Aid for Injured in the Quota Movement.</h4>
          
          <p class="text-sm"> ${donationTime}</p>
          `
          document.getElementById('history-section').appendChild(div);
     }
    document.getElementById('quota-input').value=''
})

