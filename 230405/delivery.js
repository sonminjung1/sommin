let check = document.querySelector('#shippingInfo')

check.addEventListener("click", function() {
  if(check.checked == true) {
    document.querySelector('#shippingName').value = document.querySelector('#billngName').value;
    document.querySelector('#shippingTel').value = document.querySelector('#billngTel').value;
    document.querySelector('#shippingAddr').value = document.querySelector('#billngAddr').value;
  } else {
    document.querySelector('#shippingName').value = "";
    document.querySelector('#shippingTel').value = "";
    document.querySelector('#shippingAddr').value = "";
  }
});