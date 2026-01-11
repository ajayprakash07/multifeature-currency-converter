import { countryList } from './curr.js';

const URL =
  "https://latest.currency-api.pages.dev/v1/currencies/eur.json";

  const dropdown = document.querySelectorAll('.dropdown select');
  const button = document.querySelector("form button");
  let fromCurr= document.querySelector(".from select");
  let toCurr= document.querySelector(".to select");
  const img = document.querySelector("#swapicon");

  //for dropdown to have all 160 country
  for(let select of dropdown){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        select.append(newOption);
    }
  }
  
  //function when button is clicked
  button.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    if(amount.value===0 || amount.value<0){
        amount.value=1;
        alert("Only Numeric values");
    }

    //calling API
    let response = await fetch(`https://latest.currency-api.pages.dev/v1/currencies/${fromCurr.value.toLowerCase()}.json`);
    let amt = await response.json();

    let exchange = amt[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

    console.log(exchange);

    document.querySelector('.msg').innerText=  `${amount.value} ${fromCurr.value} = ${exchange * amount.value} ${toCurr.value}`;
  });
