const test =document.getElementById("test");
const searchEle = document.getElementById("search_button");
const coursesHeaderEle = document.getElementById("courses_header");
const displayTableEle = document.getElementById("overflow_holder_div");
const optionEle = document.getElementsByTagName("option");
const resetLoaderEle = document.getElementById("reset_loader_div");
resetLoaderEle.style.display = "none";
const resetELe = document.getElementById("reset_button");

 coursesHeaderEle.style.display = "none";
 displayTableEle.style.display = "none";
function hi(){
    const semesterELe = document.getElementById("even_value").value;
    const correctELe = document.getElementById("correct_value").value
    if(correctELe === "2025-2026" && semesterELe === "even"){
        test.style.display = "none";
        coursesHeaderEle.style.display = "block";
        displayTableEle.style.display = "block";
        resetLoaderEle.style.display = "none";
       
    }
    else if(correctELe === "" || semesterELe === ""){
       const semesterELeStyle = document.getElementById("even_value").style.borderColor = "red";
       const correctEleStyle = document.getElementById("correct_value").style.borderColor = "red";
       searchEle.style.backgroundColor = "#0d6efd";
    }
    else{
        test.style.display = "block";
         searchEle.setAttribute("type","submit");     
    }
   
}
resetELe.addEventListener("click",(event)=>{
    resetLoaderEle.style.display = "block";
});