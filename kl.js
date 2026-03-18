    // extraction of elements 
    
    const usernameEle = document.getElementById("user");
        const passEle = document.getElementById("password");
        const buttEle = document.getElementById("btn");
        const forgotPassEle = document.getElementById("forgot_password");
        const settingsEle = document.getElementById("settings_btn");
        const themeEle = document.querySelector(".theme_div");
        const overlayEle = document.querySelector(".overlay");
        const themeCloseEle = document.getElementById("theme_close_button");
        const blankEle = document.getElementById("blank_username");
        const searchBarELe = document.getElementById("search-bar");




        function login(){
            if(usernameEle.value === "2510030020" && passEle.value === "2510030020"  ){
               sessionStorage.setItem("loggedIn","true");
                usernameEle.style.borderRadius = "10px";
                window.location.href = "main.html"; 
                incorrectMessage.style.display = "none";

            }
            else{
                usernameEle.style.borderColor = "red";
                passEle.style.borderColor = "red";
                const incorrectMessage = document.getElementById("incorret");
                incorrectMessage.style.display = "block";

            }
        }
        usernameEle.addEventListener("input",(event)=>{
            if(usernameEle.value == ""){
          
                blankEle.style.display = "block";
                usernameEle.style.borderColor = "red";
            }
            else{
                blankEle.style.display = "none"
                 usernameEle.style.borderColor = "green";
            }

        });
        passEle.addEventListener("input",(event)=>{
            if(!passEle == ""){
                passEle.style.borderColor = "green";
            }
        });
