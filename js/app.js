// Test systemu :)

const header = document.querySelector('.calc h2');
header.style.backgroundColor = 'green'; 

// Produkty i zamówienia do podsumowania: 

const productsInputElem = document.querySelector('#products');
const productsSummaryElems = document.querySelectorAll('.calc__summary .list__item')[0];

const orderInputElem = document.querySelector('#orders');
const orderSummaryElems = document.querySelectorAll('.calc__summary .list__item')[1];

function calculateInput(inputElem, summaryList, n) {
    inputElem.addEventListener('change', function(event){
        summaryList.children[1].innerText = `${this.value} * $${n}`;
        summaryList.children[2].innerText = `$ ${this.value * n}`;
    })
}

calculateInput(productsInputElem, productsSummaryElems, 0.5);
calculateInput(orderInputElem, orderSummaryElems, 0.25);

// Wybór package:

const choosePackageElem = document.querySelector('.select__input');
const selectDropdown = document.querySelector('.select__dropdown');
const orderPackageElems = document.querySelectorAll('.calc__summary .list__item')[2];
console.log(orderPackageElems)

choosePackageElem.addEventListener('click', function(event){
    selectDropdown.classList.toggle('dnone')
})

selectDropdown.addEventListener('click', function(event){

    if(event.target.dataset.value === 'basic') {
        orderPackageElems.children[2].innerText = '$5'
    }
    if(event.target.dataset.value === 'professional') {
        orderPackageElems.children[2].innerText = '$10'
    }
    if(event.target.dataset.value === 'premium') {
        orderPackageElems.children[2].innerText = '$15'
    }
    orderPackageElems.children[1].innerText = event.target.dataset.value
})

// Dodaj accounting lub terminal

const checkboxAccounting = document.querySelector('#accounting');
const checkboxTerminal = document.querySelector('#terminal');
const orderAccountingElem = document.querySelectorAll('.calc__summary .list__item')[3];
const orderTerminalElem = document.querySelectorAll('.calc__summary .list__item')[4];


checkboxAccounting.addEventListener('click', function(event){
    if(checkboxAccounting.checked === true) {
        orderAccountingElem.classList.remove('dnone')
    }
    else {
        orderAccountingElem.classList.add('dnone')
    }
});

checkboxTerminal.addEventListener('click', function(event){
    if(checkboxTerminal.checked === true) {
        orderTerminalElem.classList.remove('dnone')
    }
    else {
        orderTerminalElem.classList.add('dnone')
    }
})

// Cena total AAA!!!??

const totalPrice = document.querySelector('.total__price');

const itemPriceElems = Array.from(document.querySelectorAll('.item__price'))
console.log(itemPriceElems)

itemPriceElems.forEach(function(element){
    console.log(element.innerText)

})



