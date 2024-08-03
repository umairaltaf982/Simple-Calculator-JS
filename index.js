let display = document.querySelector('.input-box');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';
for (let i = 0; i < buttonsArray.length; i++) {
    buttonsArray[i].addEventListener('click', function (event) {
        if (event.target.innerHTML == 'x') {
            string += '*';
            display.value = string;
        }
        else if (event.target.innerHTML == 'CE') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }
        else if (event.target.innerHTML == 'C') {
            string = '';
            display.value = string;
        }
        else if (event.target.innerHTML == '=') {
            let ans = eval(string);
            console.log(string);
            display.value = ans;
        }
        else {
            string += event.target.innerHTML;
            display.value = string;
        }
    }
    );
};
