const bill = document.getElementById('bill');
const people = document.getElementById('people');
const custom = document.getElementById('custom');
const tips = document.querySelectorAll('.tip');
const errorPeople = document.querySelector('.people-error');
const amount = document.getElementById('amount');
const total = document.getElementById('total');
const reset = document.getElementById('reset');



let billValue = 0.0;
let tipValue = 0.15;
let peopleValue = 1;

bill.addEventListener('keyup', handleBillValue);


people.addEventListener('input', handlePeople)
custom.addEventListener('input', handleCustom)
tips.forEach(tip => { tip.addEventListener('click', handleClickvalue) })
reset.addEventListener('click', clearValues)
function handleBillValue() {

    billValue = parseFloat(bill.value);
    if (billValue < 0) {
        evalute()
    }



}
function handleClickvalue(e) {
    tips.forEach(tip => {
        tip.classList.remove('active');
        if (e.target.innerHTML == tip.innerHTML) {
            tip.classList.add('active')
            tipValue = parseFloat(tip.innerHTML) / 100
        };

    }
    )
    custom.value = ''
    evalute()

    console.log(tipValue)

}
function handleCustom() {
    tipValue = parseFloat(custom.value) / 100
    tips.forEach(tip => tip.classList.remove('active'))
    evalute()
}
function handlePeople() {
    peopleValue = parseFloat(people.value)
    if (peopleValue <= 0) {
        errorPeople.style.opacity = '1'
    }
    else if (peopleValue > 0) {
        errorPeople.style.opacity = '0'
    }

    evalute()
}


function evalute() {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let tipTotal = billValue + (tipValue * 100) / peopleValue
        amount.innerHTML = tipAmount.toFixed(2);
        total.innerHTML = tipTotal.toFixed(2);
    }
}
function clearValues() {
    bill.value = '';
    people.value = '';
    custom.value = '';
    tips.forEach(tip => tip.classList.remove('active'))
    amount.innerHTML = '0.00';
    total.innerHTML = '0.00';




}