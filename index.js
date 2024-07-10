let display = document.querySelector('.input-box');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';
buttonsArray.forEach(function (butn) {
    butn.addEventListener('click', function (event) {
        if (event.target.innerHTML == 'CE') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }
        else if (event.target.innerHTML == 'C') {
            string = '';
            display.value = string;
        }
        else if (event.target.innerHTML == '=') {
            string = eval(string);
            display.value = string;
        }
        else {
            string += event.target.innerHTML;
            display.value = string;
        }

    });
});
