// window.addEventListener('scroll',function(){
//      if(window.scrollY > header.scrollY){
//           header.classList.add('fixed')
// }})

// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 0) {
//     navbar.classList.add('fixed');
//   } else {
//     navbar.classList.remove('fixed');
//   }
// });
// const navbar = document.querySelector('.navbar');
// window.addEventListener('scroll',function(){
//      if(this.window.scrollY>0){
//      navbar.classList.add('fixed')

     
// }
// else{
//      navbar.classList.remove('fixed')
// }
// })

function donationNumber (id) {
    let value= document.getElementById(id).value;
    const amount = parseFloat(value);
    return amount;  
}
function balance(id) {
     let value = document.getElementById(id).innerText;
     let amount= parseFloat(value);
     return amount;
}

let date= new Date()
let donationTime=(date.toString());
//history btn click
document.getElementById('history-btn').addEventListener('click',function(){
     document.getElementById('menu-section').classList.add('hidden')
     document.getElementById('history-section').classList.remove('hidden')
     document.getElementById('donation-menu-btn').classList.remove('bg-lime-300','hover:bg-lime-400')
     document.getElementById('history-btn').classList.add('bg-lime-300','hover:bg-lime-400')
})

//donation menu btn click
document.getElementById('donation-menu-btn').addEventListener('click',function(){
     document.getElementById('menu-section').classList.remove('hidden')
     document.getElementById('history-section').classList.add('hidden')
     document.getElementById('history-btn').classList.remove('bg-lime-300','hover:bg-lime-400')
     document.getElementById('donation-menu-btn').classList.add('bg-lime-300','hover:bg-lime-400')
})


