let changeMoney = document.querySelector('#change');
let done1 = document.querySelector('#done');
let usd1Text = document.querySelector("#usd");
let uzs1Text = document.querySelector("#uzs");
let inpUsd = document.querySelector('#inpusd');
let inpUzs = document.querySelector('#inpuzs');
let warNing = document.querySelector('#warning')
let historyList = document.querySelector(".main__history-list")
let newList = document.querySelector("#list")
let clearHistory = document.querySelector("#clear");
let inputUsdValue;
let summ = 11400;
let count = 1;
let numberUsd;
let newLi;
let newEl1;
let newEl2;

changeMoney.addEventListener('click', (e) => {
  
  if (count == 1){
    usd1Text.textContent = "UZS";
    uzs1Text.textContent = "USD";
    count ++;
    inputUsdValue = inpUsd.value;
    inpUsd.value = inpUzs.value;
    inpUzs.value = inputUsdValue;
  }

  else {
    uzs1Text.textContent = "UZS";
    usd1Text.textContent = "USD";
    inputUsdValue = inpUsd.value;
    inpUsd.value = inpUzs.value;
    inpUzs.value = inputUsdValue;
    count = 1;
  }
})

done1.addEventListener('click', (e) => {
  inputUsdValue = inpUsd.value * summ;
  inpUzs.value = inputUsdValue;
  numberUsd = Number(inpUsd.value) 
  if(isNaN(numberUsd)){
    inpUsd.style.borderColor = "red"
    inpUsd.value = ""
    warNing.style.display = 'block';
    return
  }

  else {
    inpUsd.style.borderColor = "black"
    warNing.style.display = 'none';
  }

  newLi = document.createElement("li")
  newEl1 = document.createElement("span")
  newEl2 = document.createElement("span")
  newEl1 = inputUsdValue;
  newEl2 = inpUsd.value;
  newLi.append(newEl2,"$   => ", newEl1, " so'm");
  newList.appendChild(newLi)
})

clearHistory.addEventListener('click', (e) => {
  newList.innerHTML = null  
})