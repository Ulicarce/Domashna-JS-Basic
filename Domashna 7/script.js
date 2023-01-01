console.log("Hello");
document.getElementById('myTable');

function createTable(rows, columns) {
 const table = document.createElement("table");
 for(let i= 0; i < rows;i++){
  const row = document.createElement("tr");
 for(let j = 0; j < columns; j++){
  const cell = document.createElement("td");
  const text = document.createTextNode('Red-'+(i+1)+ 'Kolona-' + (j+1));
  cell.appendChild(text);
  row.appendChild(cell);
 }
 table.appendChild(row);
}
 return table;
}
const tableContainer = document.getElementById("myTable");
const table = createTable(4,3);
tableContainer.appendChild(table);