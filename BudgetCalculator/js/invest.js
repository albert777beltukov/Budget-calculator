//доходы
const job1Income = document.getElementById('job№1-income')
const job2Income = document.getElementById('job№2-income')
const investIncome = document.getElementById('invest-income')
const propertyIncome = document.getElementById('property-income')
const otherIncome = document.getElementById('other-income')

//расходы
const rentSpend = document.getElementById('rent-spend')
const eatSpend = document.getElementById('eat-spend')
const transportSpend = document.getElementById('transport-spend')
const thingsSpend = document.getElementById('things-spend')
const otherSpend = document.getElementById('other-spend')



const inputs = document.querySelectorAll('.input')
for (input of inputs) {
    input.addEventListener('input', () => {
        countTotalIncome();
        
    })
}

const strToNum = str => str.value ? parseInt(str.value) : 0;



const countTotalIncome = () => {
    const totalIncomeMonth = strToNum(job1Income) + strToNum(job2Income) + strToNum(investIncome) + strToNum(propertyIncome) + strToNum(otherIncome);
    const totalIncome = document.getElementById('total-income')
    totalIncome.innerHTML = totalIncomeMonth;

    const totalSpendMounth = strToNum(rentSpend) + strToNum(eatSpend) + strToNum(transportSpend) + strToNum(otherSpend) + strToNum(thingsSpend);
    const totalSpend = document.getElementById('total-spend')
    totalSpend.innerHTML = totalSpendMounth;
    
    const savingsYear = document.getElementById('savings-year');
    const savingsMonth = document.getElementById('savings-month');
    savingsMonth.innerHTML = totalIncomeMonth - totalSpendMounth;
    savingsYear.innerHTML = (totalIncomeMonth - totalSpendMounth) * 12;
   
}



