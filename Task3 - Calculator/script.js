const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const result = eval(display.value);
        if (result === undefined || isNaN(result)) {
            display.value = 'Error';
        } else {
            display.value = formatResult(result);
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function formatResult(result) {
    return result.toLocaleString(undefined, { maximumFractionDigits: 10 });
}

function backspace() {
    display.value = display.value.slice(0, -1);
}
