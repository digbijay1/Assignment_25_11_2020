function getSelectedOptions(sel) {
    let opts = [], opt;
  
    for (let i = 0, len = sel.options.length; i < len; i++) {
      opt = sel.options[i];
    if (opt.selected) {
  
        opts.push(opt);
      }
    }
    if (opts.length < 2) {
      document.getElementById('submitButton').disabled = true;
    } else {
      document.getElementById('submitButton').disabled = false;
    }
    choicesOfFood = opts.map(eachOption => eachOption.text);
  }
  
  function GenderValue() {
    var heigh = document.getElementsByName('gender');
    for (i = 0; i < heigh.length; i++) {
      if (heigh[i].checked) {
        return heigh[i].value;
      }
    }
  }
  
  function submitForm() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address1 = document.getElementById('address1').value;
    let address2 = document.getElementById('address2').value;
    let pincode = document.getElementById('pincode').value;
    let gender = GenderValue();
    let stateSelectElement = document.getElementById('state');
    let state = stateSelectElement.options[stateSelectElement.options['selectedIndex']].text;
    let countrySelectElement = document.getElementById('country');
    let country = countrySelectElement.options[countrySelectElement.options['selectedIndex']].text;
    populateTable(firstName, lastName, address1, address2, pincode, gender, choicesOfFood.join(), state, country);
    event.preventDefault();
  }
  
  function populateTable(firstName, lastName, address1, address2, pincode, gender, choiceOfFood, state, country) {
    document.getElementById('firstNameTable').innerHTML = firstName;
    document.getElementById('lastNameTable').innerHTML = lastName;
    document.getElementById('addressTable').innerHTML = address1, address2;
    document.getElementById('pinCodeTable').innerHTML = pincode;
    document.getElementById('genderTable').innerHTML = gender;
    document.getElementById('choiceOfFoodTable').innerHTML = choiceOfFood;
    document.getElementById('stateTable').innerHTML = state;
    document.getElementById('countryTable').innerHTML = country;
  }