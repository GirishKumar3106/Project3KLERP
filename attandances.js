
const searchEle = document.getElementById("search_button");
const tableDivEle = document.getElementById("table_div_holder");
const tablePEle = document.getElementById("table_p_tag");
tablePEle.style.display = "none";

function search(){


    const attandanceEle = document.getElementById("attandance_select").value;
const semesterELe = document.getElementById("semseter_attandance_select").value;
    if(attandanceEle == "2025-2026" && semesterELe === "even"){
        tableDivEle.style.display = "block";
        tablePEle.style.display = "block";
    }
    else{
        tablePEle.style.display = "none";
        tableDivEle.style.display = "none";
        searchEle.setAttribute("type","submit")
    }
}