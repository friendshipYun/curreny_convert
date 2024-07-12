//환율정보 들고오기
let currencyRatio = {
    //객체타입(여러개의 data를 담고싶을 때)
    USD: {
        USD: 1,
        KRW: 1379.21,
        JPY: 159.15,
        unit: '달러',
    },
    KRW: {
        USD: 0.00073,
        KRW: 1,
        JPY: 0.12,
        unit: '원',
    },
    JPY: {
        USD: 0.0063,
        KRW: 8.66,
        JPY: 1,
        unit: '엔',
    },
}
//currencyRatio.JPY.unit;
//currencyRatio['USD']['unit']
let fromCurrency = 'USD';
let toCurrency = 'KRW';
let fromCurrencyUnit = '달러';
let toCurrencyUnit = '원';

//console.log(currencyRatio['USD']['unit'])

//1. 버튼을 가져온다
//2. 버튼에 값을 바꾼다
//3. 선택된 currency값을 저장해준다
/* from_currency box */
document.querySelectorAll('#from_currency_list a').forEach((menu) => menu.addEventListener('click', function () {
    document.getElementById('from_button').textContent = this.textContent;
    fromCurrency = this.textContent;
    reConvert();
    changeUnit();
}));

/* to_currency box */
document.querySelectorAll('#to_currency_list a').forEach((menu) => menu.addEventListener('click', function () {
    document.getElementById('to_button').textContent = this.textContent;
    toCurrency = this.textContent;
    convert();
    changeUnit();
}));

//value값이 입력 된 순간
function convert() {
    // 돈 * 환율 = 환전금액
    let amount = document.getElementById('from_input').value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    document.getElementById('to_input').value = convertedAmount;
}
function reConvert() {
    // 돈 * 환율 = 환전금액
    let amount = document.getElementById('to_input').value;
    let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
    document.getElementById('from_input').value = convertedAmount;
}

function changeUnit() {
    let fromDefaultUnit = document.getElementById('from_button').innerText;
    let toDefaultUnit = document.getElementById('to_button').innerText;
    let showUnitFrom = `${fromDefaultUnit}`;
    let showUnitTo = `${toDefaultUnit}`;
    document.getElementById('from_currency_unit').innerHTML = showUnitFrom;
    document.getElementById('to_currency_unit').innerHTML = showUnitTo;
}