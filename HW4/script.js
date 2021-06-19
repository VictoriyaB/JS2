'use strict';
// 1. регулярное выражение заменяет одинарные кавычки на двойные
 let text1 = document.querySelector('.text').textContent;
const newText1 = text1.replace(/'/gm, '"');
console.log(newText1);


// 2. регулярное выражение заменяет одинарные кавычки на двойные, исключая апострофы
let text2 = document.querySelector('.text').textContent;
const newText2 = text2.replace(/\B'/gm, '"');
console.log(newText2);


// 3. Форма обратной связи
const regexp = {
    name: /^[a-zа-яё ]+$/gi,
    phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
    email: /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
    message: /[a-zа-яё0-9]/
}

const errorText = {
    name: 'Имя должно содержать только буквы',
    phone: 'Введите телефон в формате +7(000)000-0000',
    email: 'Введите email в формате mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru',
    message: 'Введите сообщение'
}

class ValidForm {

    constructor(selector, params, errors) {
        this.form = document.querySelector(selector);
        this.params = params;
        this.errors = errors;
        this.values = {};
        this.valid = false;
        this._init();   
    }

    _init() {
        this.form.addEventListener('submit', e => {
            this._getValues();
            this._checkForm();
            if (!this.valid) {
                e.preventDefault();
            }
        });
    }        

    _getValues() {
        const {form} = document.forms;
        const formData = new FormData(form);
        this.values = Object.fromEntries(formData.entries());
        console.log(this.values);  
    }


    _checkForm() {
        let errors = [...document.querySelectorAll('.input_invalide')];
        for (let error of errors) {
            error.className.remove('.input_invalide');
        }
        
        for (let value in this.values) {
            this.checkInput(value);
        }

        if(![...document.querySelectorAll('.input_invalide')].length) {
            this.valid = true;
        }

    }

    checkInput(value) {
        if (this.params[value].test(this.values[value])) {
            console.log('OK');
        } else {
            document.getElementById(value).textContent = this.errors[value];
            document.querySelector(`[name = ${value}]`).className = 'input_invalide';
        }
    }   
}




window.onload = () => {
    new ValidForm('#form', regexp, errorText);
};
