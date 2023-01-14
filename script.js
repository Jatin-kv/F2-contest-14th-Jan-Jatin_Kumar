function adding_user() {
    let name_value = document.getElementById("fname").value
    let profession_value = document.getElementById("profession").value
    let age_value = document.getElementById("age").value
  
    if (name_value==="" || profession_value==="" || age_value==="") {
        document.getElementById("success").style.display = "none"; 
        document.getElementById("error").innerHTML ="Error : Please Make sure All the fields are filled before adding in an employee !"
        return  document.getElementById("error")
    }
    else{
        let  table = document.getElementById("myTable")
        let  row = table.insertRow(1)
        let  cell1 = row.insertCell(0)
        let  cell2 = row.insertCell(1)
        let  cell3 = row.insertCell(2)
        let  cell4 = row.insertCell(3)
        cell1.innerHTML ="Name:  "+name_value
        cell2.innerHTML ="Profession:  " +profession_value
        cell3.innerHTML ="Age:  "+age_value
        cell4.innerHTML =`<button id="delbtn" type="button"onclick="delRow(this)">Delete User</button>`
    
        document.getElementById("error").style.display="none";
        document.getElementById("success").style.display="block"
        return document.getElementById("success").innerHTML = "Success : Employee Added!"
    }
}


// function for deleting row
function delRow(del) {
        let row = del.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(row);
    }

