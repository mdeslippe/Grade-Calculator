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

        if(grade.match("[0-9]+\/[0-9]+")) {
            let divisorIndex = grade.indexOf("/");
            let numerator = parseFloat(grade.substr(0, divisorIndex));
            let denominator = parseFloat(grade.substr(divisorIndex + 1, grade.length - 1));

            totalGrade = totalGrade + weight * 100 * numerator / denominator;
        } else if(grade.match("[0-9]+")) {
            totalGrade = totalGrade + weight * grade;
        }

        index = index + 1;
        row = document.getElementById("row" + index);
    }

    totalGrade == NaN ? alert("Hmm.. there seems to be an error in your input. Please try again.") : alert("Your total grade is: " + totalGrade + "%");
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
    table.rows[index].cells[1].innerHTML = `<input type="text" name="weight${index}" id="weight${index}">`;
    table.rows[index].cells[2].innerHTML = `<input type="text" name="grade${index}" id="grade${index}">`;
}
