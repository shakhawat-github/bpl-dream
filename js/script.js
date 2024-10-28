// claim free credit start
let coinballance = document.querySelector(".coinballance");
let claimbtn = document.querySelector(".claimbtn");
let claimamount = 2500000;
claimbtn.addEventListener("click", () => {
  coinball = Number(coinballance.innerHTML);
  coinballance.innerHTML = coinball + claimamount;
  return coinballance.innerHTML;
});

console.log(coinballance.innerHTML);

// claim free credit end

let chooseButtons = document.querySelectorAll(".choose");
let rate = 1500000;

chooseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    coinballance.innerHTML = Number(coinballance.innerHTML) - rate;
    if (coinballance.innerHTML < rate) {
      coinballance.innerHTML = null;
      alert("Insufficient Balance");
    }
  });
});

// palyerbox start
let playeravailable = document.querySelector(".playeravailable");
let playerselected = document.querySelector(".playerselected");
let playerbox = document.querySelector('.playerbox');
let selectionbox = document.querySelector('.selectionbox')

playerselected.addEventListener('click' , ()=>{
    playerbox.style.display = 'none';
    selectionbox.style.display = 'block';
    playeravailable.classList.remove('active');
    playerselected.classList.add('active')
})
playeravailable.addEventListener('click' , ()=>{
    playerselected.classList.remove('active')
    playeravailable.classList.add('active');
    selectionbox.style.display = 'none';
    playerbox.style.display = 'grid';
    
})
// palyerbox end
