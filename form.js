const container = createElement('div', 'container mt-3');
const row = createElement('div', 'row');
const rowCol = createElement('div', 'offset-md-3 col-md-6 col-12');

const card = createElement('div', 'card card-outline-secondary');
const cardHeader = createElement('div', 'card-header');
const h3 = createElement('h2', 'mb-0');
const h3Text = document.createTextNode('table');
h3.append(h3Text);
h3.style.textAlign='center';
cardHeader.append(h3);
card.append(cardHeader);

const cardBody = createElement('div', 'card-body');
cardBody.style.backgroundColor = 'light blue';
//form elements
const form = createElement('form', 'form');
form.setAttribute('role', 'form'); 
form.setAttribute('onsubmit', 'submitForm()');

const divFirstName = createElement('div', 'form-group row');
const labelFirstName = createElement('label', 'col-lg-4 col-form-label form-control-label');
const labelFirstNameText = document.createTextNode('First Name');
labelFirstName.append(labelFirstNameText);
divFirstName.append(labelFirstName);
const inputFirstNameDiv = createElement('div', 'col-lg-8');
const inputFirstName = createElement('input', 'form-control', 'firstName');
inputFirstName.setAttribute('type', 'text');
inputFirstName.setAttribute('required', 'true');
inputFirstName.setAttribute('placeholder', 'first name');
inputFirstNameDiv.append(inputFirstName);
divFirstName.append(inputFirstNameDiv);
form.append(divFirstName);

const divLastName = createElement('div', 'form-group row');
const labelLastName = createElement('label', 'col-lg-4 col-form-label form-control-label');
const labelLastNameText = document.createTextNode('Last Name');
labelLastName.append(labelLastNameText);
divLastName.append(labelLastName);
const inputLastNameDiv = createElement('div', 'col-lg-8');
const inputLastName = createElement('input', 'form-control', 'lastName');
inputLastName.setAttribute('type', 'text');
inputLastName.setAttribute('required', 'true');
inputLastName.setAttribute('placeholder', 'last name');
inputLastNameDiv.append(inputLastName);
divLastName.append(inputLastNameDiv);
form.append(divLastName);

const divAddress1 = createElement('div', 'form-group row');
const labelAddress = createElement('label', 'col-lg-4 col-form-label form-control-label');
const labelAddressText = document.createTextNode('Address Line 1');
labelAddress.append(labelAddressText);
divAddress1.append(labelAddress);
const inputAddressDiv = createElement('div', 'col-lg-8');
const inputAddress = createElement('input', 'form-control', 'address1');
inputAddress.setAttribute('type', 'text');
inputAddress.setAttribute('required', 'true');
inputAddress.setAttribute('placeholder', 'address line 1');
inputAddressDiv.append(inputAddress);
divAddress1.append(inputAddressDiv);
form.append(divAddress1);

const divAddress2 = createElement('div', 'form-group row');
const labelAddress2 = createElement('label', 'col-lg-4 col-form-label form-control-label');
const labelAddressText2 = document.createTextNode('Address Line 2');
labelAddress2.append(labelAddressText2);
divAddress2.append(labelAddress2);
const inputAddressDiv2 = createElement('div', 'col-lg-8');
const inputAddress2 = createElement('input', 'form-control', 'address2');
inputAddress2.setAttribute('type', 'text');
inputAddress2.setAttribute('required', 'true');
inputAddress2.setAttribute('placeholder', 'address line 2');
inputAddressDiv2.append(inputAddress2);
divAddress2.append(inputAddressDiv2);
form.append(divAddress2);


const divPincode = createElement('div', 'form-group row');
const labelPincode = createElement('label', 'col-lg-4 col-form-label form-control-label');
const labelPincodeText = document.createTextNode('Pincode');
labelPincode.append(labelPincodeText);
divPincode.append(labelPincode);
const inputPincodeDiv = createElement('div', 'col-lg-8');
const inputPincode = createElement('input', 'form-control', 'pincode');
inputPincode.setAttribute('type', 'number');
inputPincode.setAttribute('required', 'true');

const divGender = createElement('div', 'form-group row');
const labelGender = createElement('label', 'col-lg-4 col-form-label form-control-label');
const labelGenderText = document.createTextNode('Gender');
labelGender.append(labelGenderText);
divGender.append(labelGender);
const inputGenderDiv = createElement('div', 'col-lg-8');

const inputGenderDivMale = createElement('div', 'form-check form-check-inline');
const labelGenderMale = createElement('label','form-check-label');
const labelGenderMaleText = document.createTextNode('Male')
const inputGenderMale = createElement('input', 'form-check-input', 'male');
inputGenderMale.setAttribute('required', 'true');
inputGenderMale.setAttribute('type', 'radio');
inputGenderMale.setAttribute('name', 'gender');
inputGenderMale.setAttribute('value', 'male');
labelGenderMale.append(inputGenderMale, labelGenderMaleText);
inputGenderDivMale.append(labelGenderMale);

const inputGenderDivFemale = createElement('div', 'form-check form-check-inline');
const labelGenderFemale = createElement('label','form-check-label');
const labelGenderFemaleText = document.createTextNode('Female')
const inputGenderFemale = createElement('input', 'form-check-input', 'female');
inputGenderFemale.setAttribute('required', 'true');
inputGenderFemale.setAttribute('type', 'radio');
inputGenderFemale.setAttribute('name', 'gender');
inputGenderFemale.setAttribute('value', 'male');
labelGenderFemale.append(inputGenderFemale, labelGenderFemaleText);
inputGenderDivFemale.append(labelGenderFemale);

inputGenderDiv.append(inputGenderDivMale, inputGenderDivFemale);
divGender.append(inputGenderDiv);
form.append(divGender);

const divChoiceOfFood = createElement('div', 'form-group row');
const labelChoiceOfFood = createElement('label', 'col-lg-4 col-form-label form-control-label');
const labelChoiceOfFoodText = document.createTextNode('Choice Of Food');
labelChoiceOfFood.append(labelChoiceOfFoodText);
divChoiceOfFood.append(labelChoiceOfFood);

const selectBoxCoFDiv = createElement('div','col-lg-8');
const selectBoxCoFInput = createElement('SELECT','form-control', 'choiceOfFood');
selectBoxCoFInput.setAttribute('required','true');
selectBoxCoFInput.setAttribute('multiple','true');
selectBoxCoFInput.setAttribute('size','3');
selectBoxCoFInput.setAttribute('onchange','getSelectedOptions(this)');

const optionL1 = createElement('option');
const optionL1Text = document.createTextNode('Cookies');
optionL1.setAttribute('value', '01');
optionL1.append(optionL1Text);

const optionL2 = createElement('option');
const optionL2Text = document.createTextNode('Biriyani');
optionL2.setAttribute('value', '02');
optionL2.append(optionL2Text);

const optionL3 = createElement('option');
const optionL3Text = document.createTextNode('Mango Juice');
optionL3.setAttribute('value', '03');
optionL3.append(optionL3Text);

const optionL4 = createElement('option');
const optionL4Text = document.createTextNode('shawarma');
optionL4.setAttribute('value', '04');
optionL4.append(optionL4Text);

const optionL5 = createElement('option');
const optionL5Text = document.createTextNode('sandwich');
optionL5.setAttribute('value', '05');
optionL5.append(optionL5Text);

selectBoxCoFInput.append(optionL1);
selectBoxCoFInput.append(optionL2);
selectBoxCoFInput.append(optionL3);
selectBoxCoFInput.append(optionL4);
selectBoxCoFInput.append(optionL5);

selectBoxCoFDiv.append(selectBoxCoFInput);

const Note = createElement('p','small', 'foodCondition');
const NoteText = document.createTextNode('Must select at least 2 choices*');
Note.append(NoteText);
selectBoxCoFDiv.append(Note);
divChoiceOfFood.append(selectBoxCoFDiv);
form.append(divChoiceOfFood);


const divState = createElement('div', 'form-group row');
const labelState = createElement('label', 'col-lg-4 col-form-label form-control-label');
const labelStateText = document.createTextNode('State');
labelState.append(labelStateText);
divState.append(labelState);

const divStateSelectBox = createElement('div', 'col-lg-8');
const selectBoxStateInput = createElement('select','form-control', 'state');
selectBoxStateInput.setAttribute('required','true');
selectBoxStateInput.setAttribute('multiple','true');
selectBoxStateInput.setAttribute('size','3');

const optionStateEmpty = createElement('option');
const optionStateEmptyText = document.createTextNode('Select State');
optionStateEmpty.setAttribute('value', '');
optionStateEmpty.append(optionStateEmptyText);

const optionState1 = createElement('option');
const optionState1Text = document.createTextNode('Tamil Nadu');
optionState1.setAttribute('value', '01');
optionState1.append(optionState1Text);

const optionState2 = createElement('option');
const optionState2Text = document.createTextNode('Kerala');
optionState2.setAttribute('value', '02');
optionState2.append(optionState2Text);

const optionState3 = createElement('option');
const optionState3Text = document.createTextNode('Andhra pradesh');
optionState3.setAttribute('value', '03');
optionState3.append(optionState3Text);

const optionState4 = createElement('option');
const optionState4Text = document.createTextNode('Karnataka');
optionState4.setAttribute('value', '04');
optionState4.append(optionState4Text);

const optionState5 = createElement('option');
const optionState5Text = document.createTextNode('Goa');
optionState5.setAttribute('value', '05');
optionState5.append(optionState5Text);

selectBoxStateInput.append(optionStateEmpty);
selectBoxStateInput.append(optionState1);
selectBoxStateInput.append(optionState2);
selectBoxStateInput.append(optionState3);
selectBoxStateInput.append(optionState4);
selectBoxStateInput.append(optionState5);

divStateSelectBox.append(selectBoxStateInput);
divState.append(divStateSelectBox);
form.append(divState);

const divCountry = createElement('div', 'form-group row');
const labelCountry = createElement('label', 'col-lg-4 col-form-label form-control-label');
const labelCountryText = document.createTextNode('Country');
labelCountry.append(labelCountryText);
divCountry.append(labelCountry);

const divCountrySelectBox = createElement('div', 'col-lg-8');
const selectBoxCountryInput = createElement('select','form-control', 'country');
selectBoxCountryInput.setAttribute('required','true');
selectBoxCountryInput.setAttribute('multiple','true');
selectBoxCountryInput.setAttribute('size','2');

const optionCountryEmpty = createElement('option');
const optionCountryEmptyText = document.createTextNode('Select Country');
optionCountryEmpty.setAttribute('value', '');
optionCountryEmpty.append(optionCountryEmptyText);

const optionCountry1 = createElement('option');
const optionCountry1Text = document.createTextNode('India');
optionCountry1.setAttribute('value', '01');
optionCountry1.append(optionCountry1Text);

const optionCountry2= createElement('option');
const optionCountry2Text = document.createTextNode('Other');
optionCountry2.setAttribute('value', '02');
optionCountry2.append(optionCountry2Text);


selectBoxCountryInput.append(optionCountryEmpty);
selectBoxCountryInput.append(optionCountry1);
selectBoxCountryInput.append(optionCountry2);


divCountrySelectBox.append(selectBoxCountryInput);
divCountry.append(divCountrySelectBox);
form.append(divCountry);
//Country Select Box End

//Submit Button
const submitButtonDiv = createElement('div', 'form-group row');
const submitButtonLabel = createElement('label', 'col-lg-4 col-form-label form-control-label');
const submitButtonInputDiv = createElement('div', 'col-lg-8');
const submitButtonInput = createElement('input', 'btn btn-primary', 'submitButton');
submitButtonInput.setAttribute('type', 'submit');
submitButtonInput.setAttribute('value', 'Save Changes');
submitButtonInputDiv.append(submitButtonInput);
submitButtonDiv.append(submitButtonLabel, submitButtonInputDiv);
form.append(submitButtonDiv);
//Submit Button End

//form end
cardBody.append(form);
card.append(cardBody);

const containerTable = createElement('div', 'container mt-3');
const rowTable = createElement('div', 'row');
const colTable = createElement('div', 'col-md-6 offset-md-3 col-12');
const table = createElement('table', 'table table-striped table-inverse');
const tbody = createElement('tbody');

const tr1 = createElement('tr');
const tr1td1 = createElement('td');
const tr1td1Text = document.createTextNode('First Name');
tr1td1.append(tr1td1Text);
const tr1td2 = createElement('td', '', 'firstNameTable');
tr1.append(tr1td1, tr1td2);

const tr2 = createElement('tr');
const tr2td1 = createElement('td');
const tr2td1Text = document.createTextNode('Last Name');
tr2td1.append(tr2td1Text);
const tr2td2 = createElement('td', '', 'lastNameTable');
tr2.append(tr2td1, tr2td2);

const tr3 = createElement('tr');
const tr3td1 = createElement('td');
const tr3td1Text = document.createTextNode('Address');
tr3td1.append(tr3td1Text);
const tr3td2 = createElement('td', '', 'addressTable');
tr3.append(tr3td1, tr3td2);

const tr4 = createElement('tr');
const tr4td1 = createElement('td');
const tr4td1Text = document.createTextNode('Pincode');
tr4td1.append(tr4td1Text);
const tr4td2 = createElement('td', '', 'pinCodeTable');
tr4.append(tr4td1, tr4td2);

const tr5 = createElement('tr');
const tr5td1 = createElement('td');
const tr5td1Text = document.createTextNode('Gender');
tr5td1.append(tr5td1Text);
const tr5td2 = createElement('td', '', 'genderTable');
tr5.append(tr5td1, tr5td2);

const tr6 = createElement('tr');
const tr6td1 = createElement('td');
const tr6td1Text = document.createTextNode('Choice of Food');
tr6td1.append(tr6td1Text);
const tr6td2 = createElement('td', '', 'choiceOfFoodTable');
tr6.append(tr6td1, tr6td2);

const tr7 = createElement('tr');
const tr7td1 = createElement('td');
const tr7td1Text = document.createTextNode('State');
tr7td1.append(tr7td1Text);
const tr7td2 = createElement('td', '', 'stateTable');
tr7.append(tr7td1, tr7td2);

const tr8 = createElement('tr');
const tr8td1 = createElement('td');
const tr8td1Text = document.createTextNode('Country');
tr8td1.append(tr8td1Text);
const tr8td2 = createElement('td', '', 'countryTable');
tr8.append(tr8td1, tr8td2);


tbody.append(tr1);
tbody.append(tr2);
tbody.append(tr3);
tbody.append(tr4);
tbody.append(tr5);
tbody.append(tr6);
tbody.append(tr7);
tbody.append(tr8);

table.append(tbody);
colTable.append(table);
rowTable.append(colTable);
containerTable.append(rowTable);

//table start end
rowCol.append(card);
row.append(rowCol);
container.append(row);
document.body.append(container);
document.body.append(containerTable);

let choicesOfFood = [];
function createElement(ele, eleClass='', eleId=''){
  const element = document.createElement(ele);
  element.setAttribute('class', eleClass);
  element.setAttribute('id', eleId); 
  return element;
}

