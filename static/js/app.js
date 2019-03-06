// from data.js
var tableData = data;

// YOUR CODE HERE!
function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
  var tbl = document.getElementsByTagName("table")[0];
  var tblbody = document.getElementsByTagName("tbody")[0];

  // creating all cells
  for (var i = 0; i < tableData.length; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell in row "+i+", column "+j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}


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




console.log("===== Loop over each object in an array =====")
// Loop through array of objects then each object
tableData.forEach((record) => {
  console.log(record);

  // Get the entries for each object in the array
  Object.entries(record).forEach(([key, value]) => {
    // Log the key and value
    console.log(`Key: ${key} and Value ${value}`);
  });
}); 