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
        .then(data => console.log(data.data));
};