var selectedRow = null;
function onFormSubmit(){
    event.preventDefault();
    var formData = readData();
    if(selectedRow === null){
        insert(formData);
    }else{
        update(formData);
    }
}
function readData(){
    var formData = {};
    formData["Hoten"] = document.getElementById("Hoten").value;
    formData["NamSinh"] = document.getElementById("NamSinh").value;
    formData["Quequan"] = document.getElementById("Quequan").value;
    return formData;
}
function insert(data){
    var table = document.getElementById("ListItem").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Hoten;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.NamSinh;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Quequan;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="edit(this)">Edit</a> <a onClick="Delete(this)">Delete</a>`;
}
function edit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Hoten").value = selectedRow.cells[0].innerHTML;
    document.getElementById("NamSinh").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Quequan").value = selectedRow.cells[2].innerHTML;
}
function update(formData) {
    selectedRow.cells[0].innerHTML = formData.Hoten;
    selectedRow.cells[1].innerHTML = formData.NamSinh;
    selectedRow.cells[2].innerHTML = formData.Quequan; 
}
function Delete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("ListItem").deleteRow(row.rowIndex);
       
    }
}