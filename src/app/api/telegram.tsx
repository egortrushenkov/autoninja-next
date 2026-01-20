'use client'
import axios from 'axios'

const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
const CHAT_ID = "-1002047663617";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;


export const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);
        const success = document.getElementById("success");
        let checked_fuel = document.querySelector('input[name="fuel"]:checked') as HTMLInputElement;
        let checked_budget = document.querySelector('input[name="budget"]:checked') as HTMLInputElement;
        let checked_rule = document.querySelector('input[name="rule"]:checked') as HTMLInputElement;
        let checked_body = document.querySelector('input[name="body-auto"]:checked') as HTMLInputElement;
        let nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
        let phoneInput = document.querySelector('input[name="phone"]') as HTMLInputElement;
        
        let message = `<b>Заявка. Онлайн подбор! Главная страница!</b>\n`;
        message += `<b>Имя: </b> ${nameInput?.value}\n`;
        message += `<b>Телефон: </b> ${phoneInput?.value}\n`;
        message+=`<b>Тип топлива: </b> ${checked_fuel.value}\n`;
        message+=`<b>Бюджет: </b> ${checked_budget.value}\n`;
        message+=`<b>Вид авто: </b> ${checked_body.value}\n`;
        message+=`<b>Тип руля: </b> ${checked_rule.value}\n`;
    
        let formData = new FormData(this);
        for (var value of Array.from(formData.values())) {
            if (!(value instanceof File) && value.length === 0) {
                e.preventDefault(); // если нет полей - то остонавливаем выполнение события
            }
        }
        
        axios.post(URI_API, {
            chat_id:CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            nameInput.value = "";
            phoneInput.value = "";
            if (typeof window !== 'undefined' && window.ym) {
                window.ym(94235766, 'reachGoal', 'send_form');
            }

            if (success) {
                success.innerHTML = "Сообщение отправлено!";
                success.style.display = "block";
            }
        })
        .catch((err) =>{
            console.warn(err);
        })
        .finally(() => {
            //
        })

        
        return true;
};

export const submitFormPopUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = document.getElementById("success-popup");
    let nameInput = document.querySelector('input[id="name-popup"]') as HTMLInputElement;
    let phoneInput = document.querySelector('input[id="phone-popup"]') as HTMLInputElement;


    let message = `<b>Заявка. Главная страница поп-ап.</b>\n`;
    message += `<b>Имя: </b> ${nameInput?.value}\n`;
    message += `<b>Телефон: </b> ${phoneInput?.value}\n`;

    let formData = new FormData(this);
    for (var value of Array.from(formData.values())) {
        if (!(value instanceof File) && value.length === 0) {
            e.preventDefault(); // если нет полей - то остонавливаем выполнение события
        }
    }
    axios.post(URI_API, {
        chat_id:CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        nameInput.value = "";
        phoneInput.value = "";
        if (typeof window !== 'undefined' && window.ym) {
            window.ym(94235766, 'reachGoal', 'send_form');
        }
        if (success) {
            success.innerHTML = "Сообщение отправлено!";
            success.style.display = "block";
        }
    })
    .catch((err) =>{
        console.warn(err);
    })
    .finally(() => {
        //
    })

    
    return true;
};

export const submitFormCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = document.getElementById("success-popup") as HTMLInputElement;
    let nameInput = document.querySelector('input[name="name-formNotCar"]') as HTMLInputElement;
    let phoneInput = document.querySelector('input[name="phone-formNotCar"]') as HTMLInputElement;


    let message = `<b>Заявка. Не нашли подходящий авто.</b>\n`;
    message += `<b>Имя: </b> ${nameInput?.value}\n`;
    message += `<b>Телефон: </b> ${phoneInput?.value}\n`;


    let formData = new FormData(this);
    for (var value of Array.from(formData.values())) {
        if (!(value instanceof File) && value.length === 0) {
            e.preventDefault(); // если нет полей - то остонавливаем выполнение события
        }
    }
    
    axios.post(URI_API, {
        chat_id:CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        
        if (success) {
            nameInput.value = "";
            phoneInput.value = "";
            if (typeof window !== 'undefined' && window.ym) {
                window.ym(94235766, 'reachGoal', 'send_form');
            }
            success.innerHTML = "Сообщение отправлено!";
            success.style.display = "block";
        }
    })
    .catch((err) =>{
        console.warn(err);
    })
    .finally(() => {
        
    })

    
    return true;
};

export const submitFormPopupCard = (nameCar: string, priceCar: string, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = document.getElementById("success-popup-card");
    let nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
    let phoneInput = document.querySelector('input[name="phone"]') as HTMLInputElement;

    let message = `<b>Заявка на авто!</b>\n`;
    message+=`<b>Авто: </b> ${nameCar}\n`;
    message+=`<b>Стоимость: </b> ${priceCar}\n`;
    message += `<b>Имя: </b> ${nameInput?.value}\n`;
    message += `<b>Телефон: </b> ${phoneInput?.value}\n`;

    let formData = new FormData(this);
    for (var value of Array.from(formData.values())) {
        if (!(value instanceof File) && value.length === 0) {
            e.preventDefault(); // если нет полей - то остонавливаем выполнение события
        }
    }
    
    axios.post(URI_API, {
        chat_id:CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        nameInput.value = "";
        phoneInput.value = "";
        if (typeof window !== 'undefined' && window.ym) {
            window.ym(94235766, 'reachGoal', 'send_form');
        }
        if (success) {
            success.innerHTML = "Сообщение отправлено!";
            success.style.display = "block";
        }
    })
    .catch((err) =>{
        console.warn(err);
    })
    .finally(() => {
        //
    })

    
    return true;
};