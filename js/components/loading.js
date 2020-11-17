var loadingEl =
  '<div id="logo_loader">\
  <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">\
      <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>\
  </svg>\
</div>';

document.write(loadingEl);
document.onreadystatechange = completeLoading;

function completeLoading() {
  if (document.readyState == 'complete') {

    var loadingMask = document.getElementById('logo_loader');
    loadingMask.parentNode.removeChild(loadingMask);

  }
}