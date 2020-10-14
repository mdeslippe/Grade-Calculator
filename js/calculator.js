function calc() {

    let form = document.getElementById("inputs");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    let index = 1;
    let totalGrade = 0;

    let row = document.getElementById("row" + index);

    while(row) {

        let weight = (document.getElementById("weight" + index).value)/100;
        let grade = document.getElementById("grade" + index).value;
        totalGrade = totalGrade + weight * grade

        index = index + 1;
        row = document.getElementById("row" + index);
    }

    alert("Your total grade is: " + totalGrade + "%");
}



function addRow() {
    
    let index = 1;
    let row = document.getElementById("row" + index);

    while(row) {
        index = index + 1;
        row = document.getElementById("row" + index);
    }

    let table = document.getElementById("values");
    let newRow = table.insertRow(index);

    newRow.setAttribute("id","row" + index);
    newRow.insertCell(0);
    newRow.insertCell(1);
    newRow.insertCell(2);

    table.rows[index].cells[0].innerHTML = `<input type="text" name="name${index}" id="name${index}">`;
    table.rows[index].cells[1].innerHTML = `<input type="number" name="weight${index}" id="weight${index}">`;
    table.rows[index].cells[2].innerHTML = `<input type="number" name="grade${index}" id="grade${index}">`;
}