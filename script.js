let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let currentDate = new Date();

createMonth();
function createMonth() {
    document.querySelector('.month .dates').innerHTML = '';
    let allMonthDates = 0;
    let week = 0;

    document.querySelector('#calendarTitle').textContent = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    do {
        allMonthDates++;
    }
    while (new Date(currentDate.getFullYear(), currentDate.getMonth(), allMonthDates+1).getMonth() == currentDate.getMonth());
    
    let documentFragment = document.createDocumentFragment();
    for (let i = 1; i < allMonthDates+1; i++) {
        let item = document.createElement('div');
        item.classList.add('item');
        let weekDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), i).getDay();
        if (weekDay == 0) {
            weekDay = 7;
        }
        item.style.gridColumn = weekDay;
        item.innerText = i;
        if (new Date(currentDate.getFullYear(), currentDate.getMonth(), i).getDay() == 6) {
            week++;
        }
        if (currentDate.getFullYear() == new Date().getFullYear() && currentDate.getMonth() == new Date().getMonth() && i == new Date().getDate()) {
            item.classList.add('today');
        }
        documentFragment.appendChild(item);
    }
    document.querySelector('.month .dates').appendChild(documentFragment);   
}

document.querySelector('#prevMonth').addEventListener('click', ()=> {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth()-1);
    createMonth();
});
document.querySelector('#laterMonth').addEventListener('click', ()=> {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth()+1);
    createMonth();
});

document.querySelector('#today').addEventListener('click', ()=> {
    currentDate = new Date();
    createMonth();
});