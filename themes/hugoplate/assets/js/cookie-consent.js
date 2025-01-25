function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
  }
  
  function setCookieConsent(type) {
    setCookie('cookie-consent', type, cookieExpireDays);
    if (type === 'all' || type === 'analytics') {
      _paq.push(['rememberCookieConsentGiven']);
      _paq.push(['setCookieConsentGiven']);
    } else {
      _paq.push(['forgetCookieConsentGiven']);
    }
    document.getElementById('cookieConsentBanner').style.display = 'none';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    if (!getCookie('cookie-consent')) {
      document.getElementById('cookieConsentBanner').style.display = 'block';
    }
  
    document.getElementById('cookieAcceptAll').addEventListener('click', function() {
      setCookieConsent('all');
    });
  
    document.getElementById('cookieRejectAll').addEventListener('click', function() {
      setCookieConsent('necessary');
    });
  
    document.getElementById('cookiePreferences').addEventListener('click', function() {
      // Implementieren Sie hier die Logik für detaillierte Cookie-Einstellungen
      console.log('Cookie preferences clicked');
    });
  
    document.getElementById('cookieClose').addEventListener('click', function() {
      setCookieConsent('necessary');
    });
  
    document.getElementById('cookieChoose').addEventListener('click', function(e) {
      e.preventDefault();
      // Implementieren Sie hier die Logik für detaillierte Cookie-Einstellungen
      console.log('More information clicked');
    });
  });
