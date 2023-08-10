const inputField = document.getElementById('input-field');
console.log(inputField);
const searchBtn = document.getElementById('search-btn');
console.log(searchBtn);
const errorSection = document.getElementById('error-section');
console.log(errorSection);
const mainSection = document.getElementById('main-section');
console.log(mainSection);


const loadPhones = () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputField.value}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data));
};


const displayPhones = (phones) => {
    console.log(phones);
    mainSection.textContent = ``;

    phones.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.className = "col";
        div.innerHTML = `
            <div class="card h-100">
                <h2>${phone.phone_name}</h2>
                <h4  class="card-title">${phone.brand}</h4>

                <img src="${phone.image}" class="card-img-top w-25 m-auto" alt="..." width="">

                <div class="card-body">
                    <button class="btn btn-primary">Details</button>
                </div>
            </div>
        `;
        mainSection.appendChild(div);
    });
}


