import './index.css';

const isCookieConsent = localStorage.getItem('isCookieConsent');

if (isCookieConsent !== 'true') {
  const cookieConsentHTML = document.querySelector('.cookie-consent');
  const cookieConsentButtonHTML = cookieConsentHTML.querySelector(
    '.cookie-consent__button'
  );
  cookieConsentHTML.classList.remove('hide');
  cookieConsentButtonHTML.addEventListener('click', () => {
    localStorage.setItem('isCookieConsent', 'true');
    cookieConsentHTML.classList.add('hide');
  });
}
