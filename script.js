let button = document.getElementById('button');
let Days = document.getElementById('DaysI');
let Months = document.getElementById('MonthsI');
let years = document.getElementById('yearsI');

let YearsCalc = document.getElementById('YearsCalc');
let MonthsCalc = document.getElementById('MonthsCalc');
let DaysCalc = document.getElementById('DaysCalc');

let Dnaw = new Date().getDate();
let Mnaw = new Date().getMonth() +1; // JavaScript months are 0-11
let Ynaw = new Date().getFullYear();

Days.value=''
Months.value=''
years.value=''

button.addEventListener('click',function(){
    let birthDay = parseInt(Days.value);
    let birthMonth = parseInt(Months.value);
    let birthYear = parseInt(years.value);

    if(birthDay > 0 && birthDay <= 31){
        let D = Dnaw >= birthDay ? Dnaw - birthDay : Dnaw + (30 - birthDay) + 1;
        DaysCalc.innerHTML = D;
        Days.style.border = '1px solid hsl(0, 0%, 86%)';
    } else {
        DaysCalc.innerHTML = '--';
        Days.style.border = '1px solid red';
    }

    if(birthMonth > 0 && birthMonth <= 12){
        let M = Mnaw >= birthMonth ? Mnaw - birthMonth : Mnaw + (12 - birthMonth) + 1;
        MonthsCalc.innerHTML = M;
        Months.style.border = '1px solid hsl(0, 0%, 86%)';
    } else {
        MonthsCalc.innerHTML = '--';
        Months.style.border = '1px solid red';
    }

    if(birthYear > 0 && birthYear <= Ynaw){
        let Y = Ynaw - birthYear;
        if (Mnaw < birthMonth || (Mnaw == birthMonth && Dnaw < birthDay)) {
            Y--;
        }
        YearsCalc.innerHTML = Y;
        years.style.border = '1px solid hsl(0, 0%, 86%)';
    } else {
        YearsCalc.innerHTML = '--';
        years.style.border = '1px solid red';

    }
})
