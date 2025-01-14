function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
  
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0].toLowerCase() === sParam.toLowerCase()) {
        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
    return false;
  }
  
  window.addEventListener('load', (event) => {
    var beanId = getUrlParameter('qr');
    if (beanId) {
      window.location.href = 'https://beanconqueror.com/app/roaster/bean.html?id=' + beanId;
    }
  
    var shareUserBean = getUrlParameter('shareUserBean0');
    if (shareUserBean) {
      var searchingURL = window.location.search.substring(1);
      var userBeanJSON = '';
      var regex = /((shareUserBean)[0-9]+(?=\=))/gi;
      var foundJSONParams = searchingURL.match(regex);
      for (const param of foundJSONParams) {
        userBeanJSON += userBeanJSON ? '&' : '?';
        userBeanJSON += param + "=" + getUrlParameter(param);
      }
      window.location.replace('https://beanconqueror.com/app/roaster/userBean.html' + userBeanJSON);
    }
  
    var shareVisualizer = getUrlParameter('visualizerShare');
    if (shareVisualizer) {
      var visualizerCode = '?visualizerShare=' + shareVisualizer;
      window.location.replace('https://beanconqueror.com/app/visualizer/importVisualizer.html' + visualizerCode);
    }
  
    // Für die weitergeleitete Seite
    var importBeanId = getUrlParameter('id');
    if (importBeanId) {
      var importButton = document.getElementById('importButton');
      if (importButton) {
        importButton.href = "beanconqueror://ADD_BEAN_ONLINE?id=" + importBeanId;
      }
    }
  });
  