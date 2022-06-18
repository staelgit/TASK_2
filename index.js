import './index.css';

const isCookieConsent = localStorage.getItem('isCookieConsent');
const cookieConsentHTML = document.querySelector('.cookie-consent');
const cookieConsentButtonHTML =
  cookieConsentHTML.querySelector('.cookie-consent__button');

if (isCookieConsent !== 'true') {
  cookieConsentButtonHTML.addEventListener('click', () => {
    localStorage.setItem('isCookieConsent', 'true');
    cookieConsentHTML.classList.add('hide');
  });
} else {
  cookieConsentHTML.classList.add('hide');
}
