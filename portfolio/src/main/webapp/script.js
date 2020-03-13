// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random fact to the page.
 */
function addRandomFacts() {
  const facts = 
    ["Serena is Running for Congress in 2024.", "She has received a Key to West Valley City in Utah.", "She loves cheese.",
    "Serena has a Youtube Channel.", "Serena does aerial Acrobatics.", "Serena is a firm believer in UFO Space aliens."]

  // Pick a random fact.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}
console.log("in js");
/**
 * Fetches a random quote from the sedsdfswefsdfasdfasdfasdfasdfasdfdssdsfsfsfsr and adds it to the DOM.
 */
function getWelcomeMessage() {
      console.log('Fetching a welcome message.');

  fetch('/data')  // sends a request to /my-data-url
.then(response => response.json()) // parses the response as JSON
.then((messages) => { // now we can reference the fields in myObject!
  console.log(messages.message1);
  console.log(messages.message2);
  console.log(messages.message3);
});
}

/** Adds a random quote to the DOM. */
function addQuoteToDom(quote) {
  console.log('Adding quote to dom: ' + quote);

  const quoteContainer = document.getElementById('message-container');
  quoteContainer.innerText = quote;
}

/**
 * Handles response by converting it to text and passing the result to
 * addQuoteToDom().
 */
function handleResponse(response) {
  console.log('Handling the response.');

  // response.text() returns a Promise, because the response is a stream of
  // content and not a simple variable.
  const textPromise = response.text();

  // When the response is converted to text, pass the result into the
  // addQuoteToDom() function.
  textPromise.then(addQuoteToDom);
}


/**
 * Another way to use fetch is by using the async and await keywords. This
 * allows you to use the return values directly instead of going through
 * Promises.
 */
async function getRandomQuoteUsingAsyncAwait() {
  const response = await fetch('/data');
  const quote = await response.text();
  document.getElementById('message-container').innerText = quote;
}

function commentDate(){
  fetch('/server')  // sends a request to /my-data-url
.then(response => response.json()) // parses the response as JSON
.then((myObject) => { // now we can reference the fields in myObject!
  console.log(myObject.x);
});  
}
