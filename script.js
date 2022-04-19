/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 * 
 * List of Currency Codes (ISO 4217 Standard)
 * @link https://www.techonthenet.com/js/currency_codes.php
 */

 const amount = document.querySelector('#amount').value; // Amount input value
 const percent = document.querySelector('#percentage').value; // percent input value
 const button = document.querySelector('.result'); // button
 //const tag = document.getElementsByTagName('option').value; // Option tag
 const CC = document.getElementsByTagName('option').innerHTML; //Country Code
 var lang = document.getElementById('language');
 var tag= lang.options[lang.selectedIndex].text;


 const formatter = (locale = "en-US", currency = "USD", value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  
    return formattedValue;
  };
  
  const tipCalculator = (sum, percentage, locale, currency) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
  
    console.log(`
      Sum before tip: ${formatter(locale, currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(locale, currency, tip)}
      Total:          ${formatter(locale, currency, total)}
    `);
  };

  button.addEventListener("click", () =>{
    console.log(amount);
    console.log(percent);
    console.log(CC);
    console.log(tag);
    //tipCalculator(amount, percent, CC, tag);
    //tipCalculator(100,10,'en','USD');
    //console.log();
  }, false);
  
  