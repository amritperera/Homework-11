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

	var userDate = tableData.filter(filterDate);

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


// Create a custom filtering function
function filterDate(date) {
  return date.datetime == '1/11/2010';
}

// filter() uses the custom function as its argument
var userDate = tableData.filter(filterDate);

// Test
console.log(userDate);