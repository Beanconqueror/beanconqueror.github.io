// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest('.nav-item').classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  var hostURL= location.origin;
  if (hostURL.endsWith("/") === false) {
    hostURL = hostURL + "/";
  }
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0].toLowerCase() === sParam.toLowerCase()) {
        return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
    return false;
  };
  window.addEventListener('load', (event) => {

    var beanId = getUrlParameter('qr');
    if (beanId !== null && beanId !== undefined && beanId !== "" && beanId !== false) {

      if (window.location.pathname === '/') {
        window.location.replace( hostURL + 'app/bean?qr=' + beanId);
      } else if (window.location.pathname.indexOf('app/bean')) {
        document.getElementById('importButton').href = "beanconqueror://ADD_BEAN_ONLINE?id=" + beanId;
      }

    }
    var shareUserBean = getUrlParameter('shareUserBean0');
    if (shareUserBean !== null && shareUserBean !== undefined && shareUserBean !== "" && shareUserBean !== false) {

      var searchingURL = window.location.search.substring(1);
      var userBeanJSON = '';

      var regex = /((shareUserBean)[0-9]+(?=\=))/gi;
      var foundJSONParams = searchingURL.match(regex);
      for (const param of foundJSONParams) {
        if (userBeanJSON === '') {
          userBeanJSON += '?' + param+"=" +getUrlParameter(param);
        } else {
          userBeanJSON += '&' + param+"=" +getUrlParameter(param);
        }
      }


      if (window.location.pathname === '/') {
        window.location.replace(hostURL + 'app/userBean' + userBeanJSON);
      } else if (window.location.pathname.indexOf('app/userBean')) {
        if (userBeanJSON !== '') {
          document.getElementById('importButton').href = "beanconqueror://ADD_USER_BEAN" + userBeanJSON;
        } else {
          document.getElementById('importButton').href = "beanconqueror://ADD_USER_BEAN?shareUserBean0=";
        }
      }

    }

    var shareVisualizer = getUrlParameter('visualizerShare');
    if (shareVisualizer !== null && shareVisualizer !== undefined && shareVisualizer !== "" && shareVisualizer !== false) {

      var searchingURL = window.location.search.substring(1);
      var visualizerCode = '';

      var regex = /((visualizerShare)(?=\=))/gi;
      var foundJSONParams = searchingURL.match(regex);

      for (const param of foundJSONParams) {
        if (visualizerCode === '') {
          visualizerCode += '?' + param+"=" +getUrlParameter(param);
        }
      }

      if (window.location.pathname === '/') {
        window.location.replace(hostURL + 'app/importVisualizer' + visualizerCode);
      } else if (window.location.pathname.indexOf('app/importVisualizer')) {
        var visualizerImportCode = getUrlParameter('visualizerShare');
        document.getElementById('importButton').href = "beanconqueror://VISUALIZER_SHARE?code=" + visualizerImportCode;
      }






      //window.location.href =
    }
  });
})();
