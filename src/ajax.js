'use strict';

var sent = false;
document.getElementById('contact-form').addEventListener('submit', function (e) {
  if (sent) {
    return;
  }
  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (req != undefined) {
    try {
      req.open("POST", "/contact.php", true);
    } catch (err) {
      document.getElementsByClassName('fail')[0].style.visibility = 'visible';
    }

    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send('email=' + this.email.value + '&name=' + this.name.value + '&message=' + this.message.value);

    req.onload = function () {
      if (req.readyState == 4) {
        if (req.status == 200) {
          document.getElementsByClassName('success')[0].style.visibility = 'visible';
        } else {
          document.getElementsByClassName('fail')[0].style.visibility = 'visible';
        }
      }
    };
    req.onerror = function () {
      document.getElementsByClassName('fail')[0].style.visibility = 'visible';
    };
    sent = true;
  }
  e.preventDefault();
});
