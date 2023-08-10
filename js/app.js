const inputField = document.getElementById('input-field');
console.log(inputField);
const searchBtn = document.getElementById('search-btn');
console.log(searchBtn);
const errorSection = document.getElementById('error-section');
console.log(errorSection);
const phoneDetailsDiv = document.getElementById('phone-details');
console.log(phoneDetailsDiv);
const mainSection = document.getElementById('main-section');
console.log(mainSection);


const loadPhones = () => {
    if (inputField.value == "") {
        const div = document.createElement('div');
        div.innerHTML = `
        <h4 style="color: red;">Please Enter the Search keyword, Try Again.</h4>
        `;
        errorSection.appendChild(div);
        return 0;
    }
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputField.value}`
    inputField.value = "";
    mainSection.textContent = ``;
    phoneDetailsDiv.textContent = ``;
    errorSection.textContent = ``;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data));
};


const displayPhones = (phones) => {
    console.log(phones);
    if (phones == "") {
        const div = document.createElement('div');
        div.innerHTML = `
        <h4 style="color: red;">No Phone Found. Please, Try Again.</h4>
        `;
        errorSection.appendChild(div);
        return 0;
    }

    phones.forEach(phone => {
        console.log(phone.slug);
        const div = document.createElement('div');
        div.className = "col";
        div.innerHTML = `
            <div class="card h-100">
                <h2>${phone.phone_name}</h2>
                <h4  class="card-title">${phone.brand}</h4>
                <img src="${phone.image}" class="card-img-top w-25 m-auto" alt="..." width="">

                <div class="card-body">
                    <button class="btn btn-primary" onclick="loadPhoneDetails('${phone.slug}')">Details</button>
                </div>
            </div>
        `;
        mainSection.appendChild(div);
    });
};


const loadPhoneDetails = phoneSlug => {
    console.log(phoneSlug);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneSlug}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data));
};


const displayPhoneDetails = phoneDetails => {
    console.log(phoneDetails);
    const div = document.createElement('div');
    div.innerHTML = `
            <div class="card h-100 w-25 m-auto my-5">
                <h2>${phoneDetails.name}</h2>
                <h4 class="card-title">${phoneDetails.brand}</h4>
                <h6> ${phoneDetails.releaseDate ? phoneDetails.releaseDate : "No relase date found"}</h6>

                <img src="${phoneDetails.image}" class="card-img-top w-50 m-auto" alt="..." width="">

                <div class="card-body">
                    <h6>Main Features: </h6>
                    <p>Chip Set: ${phoneDetails.mainFeatures.chipSet}</p>
                    <p>Display Size: ${phoneDetails.mainFeatures.displaySize}</p>
                    <p>Memory: ${phoneDetails.mainFeatures.memory}</p>
                    <p>Sensors: ${phoneDetails.mainFeatures.sensors}</p>

                    <h6>Other Features: </h6>
                    <p>Bluetooth: ${phoneDetails.others.Bluetooth}<p>
                    <p>GPS: ${phoneDetails.others.GPS}<p>
                    <p>NFC: ${phoneDetails.others.NFC}<p>
                    <p>Radio: ${phoneDetails.others.Radio}<p>
                    <p>USB: ${phoneDetails.others.USB}<p>
                    <p>WLAN: ${phoneDetails.others.WLAN}<p>
                </div>
            </div>
        `;
    phoneDetailsDiv.appendChild(div);
    console.log(phoneDetailsDiv);

};

