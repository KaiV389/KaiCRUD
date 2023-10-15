var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nombre"] = document.getElementById("nombre").value;
    formData["materia"] = document.getElementById("materia").value;
    formData["actividad"] = document.getElementById("actividad").value;
    formData["fecha"] = document.getElementById("fecha").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.materia;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.actividad;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fecha;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("materia").value = "";
    document.getElementById("actividad").value = "";
    document.getElementById("fecha").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("materia").value = selectedRow.cells[1].innerHTML;
    document.getElementById("actividad").value = selectedRow.cells[2].innerHTML;
    document.getElementById("fecha").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombre;
    selectedRow.cells[1].innerHTML = formData.materia;
    selectedRow.cells[2].innerHTML = formData.actividad;
    selectedRow.cells[3].innerHTML = formData.fecha;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nombre").value == "") {
        isValid = false;
        document.getElementById("nombreValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nombreValidationError").classList.contains("hide"))
            document.getElementById("nombreValidationError").classList.add("hide");
    }
    return isValid;
}


//HAndling
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
//Nuevo Registro

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.materia;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.actividad;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fecha;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

//edit and delete

function resetForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("materia").value = "";
    document.getElementById("actividad").value = "";
    document.getElementById("fecha").value = "";
    selectedRow = null;
}

//edit

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("materia").value = selectedRow.cells[1].innerHTML;
    document.getElementById("actividad").value = selectedRow.cells[2].innerHTML;
    document.getElementById("fecha").value = selectedRow.cells[3].innerHTML;
}

//update

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombre;
    selectedRow.cells[1].innerHTML = formData.materia;
    selectedRow.cells[2].innerHTML = formData.actividad;
    selectedRow.cells[3].innerHTML = formData.fecha;
}

//delete
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

//validation
function validate() {
    isValid = true;
    if (document.getElementById("nombre").value == "") {
        isValid = false;
        document.getElementById("nombreValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nombreValidationError").classList.contains("hide"))
            document.getElementById("nombreValidationError").classList.add("hide");
    }
    return isValid;
}