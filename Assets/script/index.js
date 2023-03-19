`use strict`;

// Connecting HTML elements with JavaScript
const input = document.querySelector('input').value;
const button = document.querySelector('button');
const msg = document.querySelector('.msg');
const grid = document.querySelector('.grid');
const savedContacts = document.querySelector('.saved');



// Contact class
class Contact {
  #name;
  #city;
  #email;

  constructor(name, city, email) {
    this.#name = name;
    this.#city = city;
    this.#email = email;
  }

  get name() { return this.#name; };
  get city() { return this.#city; };
  get email() { return this.#email; };

}

// function to add details to div created
function listContacts(contactCreated, contactDiv) {
  let par1 = document.createElement('p');
  let par2 = document.createElement('p');
  let par3 = document.createElement('p');

  par1.innerHTML = `Name: ${ contactCreated.name }`;
  par2.innerHTML = `City: ${ contactCreated.city }`;
  par3.innerHTML = `Email: ${ contactCreated.email }`;

  contactDiv.appendChild(par1);
  contactDiv.appendChild(par2);
  contactDiv.appendChild(par3);
}

const contacts = [];
var contactCount = 0;
button.addEventListener('click', function() {

  var input = document.querySelector('input').value;
  input = input.split(',');

  
  // Checking if input has 3 protions
  if (input.length != 3) {
    msg.innerHTML = 'Your input should contain 3 sections.'
    setTimeout(msg.innerHTML = '', 7000);
  };
  
  // separating the input
  const name = input[0]; console.log(name)
  const city = input[1];console.log(city)
  const email = input[2];console.log(email)

  const expression = /^.*@.*\.([a-z]{2}|[a-z]{3})$/;

  if(!expression.test(email)) {
    msg.innerText = 'Please enter valid input!';
    setTimeout(function() { msg.innerText = ''}, 7000);
    return;
  };

  // creating new contact
  const contactCreated = new Contact(name, city, email);
  contacts.push(contactCreated);

  // creating new contact div
  const contactDiv = document.createElement('div');
  contactCount++;
  // styling the div created
  contactDiv.classList.add('contact');

  // adding the remove function to the div created
  contactDiv.addEventListener('click', function() {
  // removing div from grid
  contactDiv.parentNode.removeChild(contactDiv);
  // reducing contact count
  contactCount--;
  savedContacts.innerHTML = `Saved Contacts: ${contactCount}`;
  });
  var input = document.querySelector('input').value;


  listContacts(contactCreated, contactDiv);

  grid.insertBefore(contactDiv, grid.firstChild);


  savedContacts.innerHTML = `Saved Contacts: ${contactCount}`;
  document.querySelector('input').value = '';
});

