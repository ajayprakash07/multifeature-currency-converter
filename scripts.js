import { countryList } from './curr.js';

const URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

  const dropdown = document.querySelectorAll('.dropdown select');
  const button = document.querySelector("form button");
  const fromCurr= document.querySelector(".from select");
  const toCurr= document.querySelector(".to select");

  //for dropdown to have all 160 country
  for(let select of dropdown){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        select.append(newOption);
    }
  }

  button.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    if(amount.value===0 || amount.value<0){
        amount.value=1;
        alert("Only Numeric values");
    }
    console.log(amount.value);

    const URLbase = `${URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

    let response = await fetch(URLbase);
    console.log(response);
  });
