// window.addEventListener("submit", (e)=>{
//     // let ping = []
//     // if (names.value === "" || names.value == null){
//     //     ping.push("Name required.")
//     // }

//     // if (ping.length > 0){
//     //     
//     //     error.innerText = ping.join(", ")
//     // }  
//     e.preventDefault();
//     console.log(names.value);
//     if (names.value === "" || names.value == null){
//         alert("Name required.")
//         return false;
//     }
// });



// Dropdown options func
// function dropdown() {
//     let dropdown = document.querySelector("#dropbutton");
//     let options = "";
//     let i;
//     for (i = 0; i < dropdown.length; i++) {
//         options = options + " " + options.options[i].text;
//     }
//     document.getElementById("dropbutton").innterHTML = options;
// }

// //
// let date = document.querySelector("#date")
// date.value = ""

// let date = new Date(Date.UTC(2021, 12, 20, 21, 16, 0));
// console.log(date.toLocaleDateString());

// document.getElementById('date').value = new Date();

// Date func works
// function getDate() {
//     var today = new Date();
//     var dd = today.getDate();
//     var mm = today.getMonth()+1; //January is 0!
//     var yyyy = today.getFullYear();
  
//     if(dd<10) {
//         dd = '0'+dd
//     } 
  
//     if(mm<10) {
//         mm = '0'+mm
//     } 
  
//     today = yyyy + '-' + mm + '-' + dd;
//     document.getElementById("date").value = today;
//   }
  
//   window.onload = function() {
//     getDate();
//   };




// //Web Storage (cache)
// // Stop the form from submitting when a button is pressed
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//   });

//   // run function when the submit button is clicked
// submitBtn.addEventListener('click', function() {
//     // store the entered name in web storage
//     localStorage.setItem('name', names.value);
//     // run nameDisplayCheck() to sort out displaying the
//     // personalized greetings and updating the form display
//     nameDisplayCheck();
//   });

//   // run function when the 'Forget' button is clicked
// forgetBtn.addEventListener('click', function() {
//     // Remove the stored name from web storage
//     localStorage.removeItem('name');
//     // run nameDisplayCheck() to sort out displaying the
//     // generic greeting again and updating the form display
//     nameDisplayCheck();
//   });

// // define the nameDisplayCheck() function
// function nameDisplayCheck() {
//     // check whether the 'name' data item is stored in web Storage
//     if(localStorage.getItem('name')) {
//       // If it is, display personalized greeting
//       let name = localStorage.getItem('name');
//       h1.textContent = 'Welcome, ' + name;
//       personalGreeting.textContent = 'Welcome to our website, ' + name + '! We hope you have fun while you are here.';
//       // hide the 'remember' part of the form and show the 'forget' part
//       forgetDiv.style.display = 'block';
//       rememberDiv.style.display = 'none';
//     } else {
//       // if not, display generic greeting
//       h1.textContent = 'Welcome to our website ';
//       personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
//       // hide the 'forget' part of the form and show the 'remember' part
//       forgetDiv.style.display = 'none';
//       rememberDiv.style.display = 'block';
//     }
//   }

// document.body.onload = nameDisplayCheck;

// //Creating database
// let db;
// window.onload = function() {
//     let request = window.indexedDB.open('notes_db', 1);
//     // onerror handler signifies that the database didn't open successfully
//     request.onerror = function() {
//         console.log('Database failed to open');
//     };
  
//     // onsuccess handler signifies that the database opened successfully
//     request.onsuccess = function() {
//         console.log('Database opened successfully');
  
//     // Store the opened database object in the db variable.
//     db = request.result;
  
//     // Run the displayData() function to display the notes already in the IDB
//     displayData();
//   };
//     form.onsubmit = addData;
//     function addData(e) {
//         // prevent default - we don't want the form to submit in the conventional way
//         e.preventDefault();
    
//         // grab the values entered into the form fields and store them in an object ready for being inserted into the DB
//         let newItem = { title: titleInput.value, body: bodyInput.value };
    
//         // open a read/write db transaction, ready for adding the data
//         let transaction = db.transaction(['notes_os'], 'readwrite');
    
//         // call an object store that's already been added to the database
//         let objectStore = transaction.objectStore('notes_os');
    
//         // Make a request to add our newItem object to the object store
//         let request = objectStore.add(newItem);
//         request.onsuccess = function() {
//         // Clear the form, ready for adding the next entry
//         titleInput.value = '';
//         bodyInput.value = '';
//         };
    
//         // Report on the success of the transaction completing, when everything is done
//         transaction.oncomplete = function() {
//         console.log('Transaction completed: database modification finished.');
    
//         // update the display of data to show the newly added item, by running displayData() again.
//         displayData();
//         };
    
//         transaction.onerror = function() {
//         console.log('Transaction not opened due to error');
//         };
//     }
//     // Define the displayData() function
// function displayData() {
//     // Here we empty the contents of the list element each time the display is updated
//     // If you didn't do this, you'd get duplicates listed each time a new note is added
//     while (list.firstChild) {
//       list.removeChild(list.firstChild);
//     }
  
//     // Open our object store and then get a cursor - which iterates through all the
//     // different data items in the store
//     let objectStore = db.transaction('notes_os').objectStore('notes_os');
//     objectStore.openCursor().onsuccess = function(e) {
//       // Get a reference to the cursor
//       let cursor = e.target.result;
  
//       // If there is still another data item to iterate through, keep running this code
//       if(cursor) {
//         // Create a list item, h3, and p to put each data item inside when displaying it
//         // structure the HTML fragment, and append it inside the list
//         const listItem = document.createElement('li');
//         const h3 = document.createElement('h3');
//         const para = document.createElement('p');
  
//         listItem.appendChild(h3);
//         listItem.appendChild(para);
//         list.appendChild(listItem);
  
//         // Put the data from the cursor inside the h3 and para
//         h3.textContent = cursor.value.title;
//         para.textContent = cursor.value.body;
  
//         // Store the ID of the data item inside an attribute on the listItem, so we know
//         // which item it corresponds to. This will be useful later when we want to delete items
//         listItem.setAttribute('data-note-id', cursor.value.id);
  
//         // Create a button and place it inside each listItem
//         const deleteBtn = document.createElement('button');
//         listItem.appendChild(deleteBtn);
//         deleteBtn.textContent = 'Delete';
  
//         // Set an event handler so that when the button is clicked, the deleteItem()
//         // function is run
//         deleteBtn.onclick = deleteItem;
  
//         // Iterate to the next item in the cursor
//         cursor.continue();
//       } else {
//         // Again, if list item is empty, display a 'No notes stored' message
//         if(!list.firstChild) {
//           const listItem = document.createElement('li');
//           listItem.textContent = 'No notes stored.';
//           list.appendChild(listItem);
//         }
//         // if there are no more cursor items to iterate through, say so
//         console.log('Notes all displayed');
//       }
//     };
//   }
// };

// // Setup the database tables if this has not already been done
// request.onupgradeneeded = function(e) {
//     // Grab a reference to the opened database
//     let db = e.target.result;
  
//     // Create an objectStore to store our notes in (basically like a single table)
//     // including a auto-incrementing key
//     let objectStore = db.createObjectStore('notes_os', { keyPath: 'id', autoIncrement:true });
  
//     // Define what data items the objectStore will contain
//     objectStore.createIndex('body', 'body', { unique: false });
  
//     console.log('Database setup complete');
//   };

// // Import Export Data
// {/* <script type="module">
// let form = "";
// import {appendData} from '/data.js'; // Or it could be simply `hello.js`
// appendData(form);
// </script> */}

// // hello.mjs -- or it could be simply `hello.js`
// export function appendData(form) {
//     const data = document.createElement('data');
//     data.textContent = `Your submissions: ${form}`;
//     document.body.appendChild(data);
//   }
