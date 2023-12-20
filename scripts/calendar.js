// скрыть и показать календарь
function showDataInput() {
    const dateInput = document.querySelector('#date')
    dateInput.classList.remove('none')
    const dateLabel = document.querySelector('#datapickerLabel')
    dateLabel.classList.add('none')
}