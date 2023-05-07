var timeOut;

function showLoader() {
  timeOut = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("webPage").style.display = "block";
}