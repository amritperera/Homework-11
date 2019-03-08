// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbl = document.getElementsByTagName("table")[0];
var tblbody = document.getElementsByTagName("tbody")[0];

// creating all cells
tableData.forEach((record) => {

	var row = document.createElement("tr");

	Object.entries(record).forEach(([key, value]) => {

    	var cell = document.createElement("td");
    	var cellText = document.createTextNode(`${value}`);
		cell.appendChild(cellText);
      	row.appendChild(cell);
  	});

      	tblbody.appendChild(row);		


});

function generate_table() {

	var Table = document.getElementById("ufo-table-body");
	Table.innerHTML = "";

	if (document.getElementById('datetime').value == '') {
		var userDate = tableData;
	} else {
		var userDate = tableData.filter(filterDate);

	}

	// creating all cells
	userDate.forEach((record) => {

	var row = document.createElement("tr");

	Object.entries(record).forEach(([key, value]) => {

    	var cell = document.createElement("td");
    	var cellText = document.createTextNode(`${value}`);
		cell.appendChild(cellText);
      	row.appendChild(cell);
  	});

      	tblbody.appendChild(row);		


	});
}


// Get the input field
var input = document.getElementById("datetime");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keypress", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("filter-btn").click();
  }
});


// Create a custom filtering function
function filterDate(date) {
  return date.datetime == document.getElementById('datetime').value;
;
}

// filter() uses the custom function as its argument
var userDate = tableData.filter(filterDate);

// Test
console.log(userDate);