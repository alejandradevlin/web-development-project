function validateForm() { //code made with W3 Javascript Form Validation Module https://www.w3schools.com/js/js_validation.asp
    let x = document.forms["comment"]["fname"].value;
    if (x == "") {
      alert("The field is blank. Please Type something!");
      return false;
        } else {
        alert("Thanks!")
      }

  } 