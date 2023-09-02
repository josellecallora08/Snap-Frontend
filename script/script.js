const menubtn = document.querySelector('.menu-btn');
// Features Nav
const features = document.querySelector('.features')
const features_icon = features.querySelector('img')
const features_span = features.querySelector('span')
const features_innernav = document.querySelector('.features-nav')

// Features Nav
const company = document.querySelector('.company')
const company_icon = company.querySelector('img')
const company_span = company.querySelector('span')
const company_innernav = document.querySelector('.company-nav')



const nav = document.querySelector('nav')
const image = menubtn.querySelector('img')
const bg = document.querySelector('.nav-bg')
function showMenu() {
    nav.classList.toggle('active')
    bg.classList.toggle('active')
}
function showFeatures(){
    features_innernav.classList.toggle('active')
    features_span.classList.toggle('active')
    features_icon.classList.toggle('active')
    if(features_icon.classList.contains('active')){
        features_icon.src = `./images/icon-arrow-up.svg`
    } else{
        features_icon.src = `./images/icon-arrow-down.svg`
    }
}

function showCompanies(){
    company_innernav.classList.toggle('active')
    company_span.classList.toggle('active')
    company_icon.classList.toggle('active')
    if(company_icon.classList.contains('active')){
        company_icon.src = `./images/icon-arrow-up.svg`
    } else{
        company_icon.src = `./images/icon-arrow-down.svg`
    }
}