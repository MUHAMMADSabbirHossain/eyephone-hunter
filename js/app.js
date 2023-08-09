const inputField = document.getElementById('input-field');
console.log(inputField);
const searchBtn = document.getElementById('search-btn');
console.log(searchBtn);
const errorSection = document.getElementById('error-section');
console.log(errorSection);
const mainSection = document.getElementById('main-section');
console.log(mainSection);


const loadPhones = () => {
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => displayPhones(data.data));
};


const displayPhones = (phones) => {
    console.log(phones);

    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.innerHTML = `
        
        `;
    });
}