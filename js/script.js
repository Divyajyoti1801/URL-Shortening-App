//Fetching AIP
const encodedParams = new URLSearchParams();

const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '30370d72a6msh16495dbf858e05bp13b9dbjsn193c3dbe7436',
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com',
    },
    body: encodedParams
};










//Mobile-Navigation
const mobile_nav = document.querySelector('.header__mobile-navigation');

const navigation = document.querySelector('.header__navigation');

mobile_nav.addEventListener('click', (e) => {
    e.preventDefault();
    if (navigation.style.display == 'flex') {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'flex';
    }
})

//Input Error
const function__input = document.querySelector('.function__input--input-text');
const function__btn = document.querySelector('.function__input--cta');
const function__error = document.querySelector('.function__input--error-text');
const function__results = document.querySelector('.function__results');

function__btn.addEventListener('click', async(e) => {
    e.preventDefault();
    if (function__input.value === '') {
        function__input.classList.add('function__input--input-text-error');
        function__error.style.display = 'block';
    } else if (!checkPattern(function__input.value)) {
        function__input.classList.add('function__input--input-text-error');
        function__error.textContent = "Wrong link please put proper format";
        function__error.style.display = 'block';
    }
    else {
        if (!function__input.value === '') {
            function__input.classList.remove('function__input--input-text-error');
            function__error.style.display = 'none';
        } else if (checkPattern(function__input.value)) {
            function__input.classList.remove('function__input--input-text-error');
            function__error.style.display = 'none';
        }
        
        encodedParams.append("url", function__input.value);
        const {result_url} = await fetch('https://url-shortener-service.p.rapidapi.com/shorten', options).then(response => response.json()).then(data => data);
        function__results.innerHTML = generateHTML(function__input.value, result_url);
        function__input.value = '';
    }
});

function checkPattern(input) {
    let regex = /https:\/\/www\./i;
    return regex.test(input);
}

//Generate result HTML
const generateHTML = (title,url) => {
    return `
    <div class="function__results--result">
        <p class="function__results--result--link">${title}</p>
        <div class="function__results--result--cta">
          <p class="function__results--result--cta--shorten-link">${url}</p>
          <button class="function__results--result--cta--btn">Copy</button>
        </div>
      </div>
    
    `
}