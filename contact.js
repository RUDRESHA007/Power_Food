

    const log2 = document.querySelector(".contact");
    const blink = document.querySelector(".entrence");
    const validation2 = () => {

        const bor1 = document.getElementById("user2")
        const bor2 = document.getElementById("email");
        const bor3 = document.getElementById("frstpassword");
        const bor4 = document.getElementById("cimpassword");
        const bt2 = document.querySelector("#button2");
        bt2.disabled = true;



        const personname = document.getElementById("user2").value;
        const alphabate = /^[A-Z a-z]+$/
        const len2 = /^.{3,20}$/;

        const validA = alphabate.test(personname);
        const validB = len2.test(personname);

        if (validA && validB) {

            document.querySelector(".error1").innerHTML = "";
            bor1.style.borderBottom = "4px solid green"
            bt2.disabled = false;
            bor2.disabled = false;
        }
        else {

            document.querySelector(".error1").innerHTML =
                "<li>user name not contain special charecters and numbers" + "<br>" + "<li>charectors should be greater than and less than 15";
            bor1.style.borderBottom = "4px solid red"
            bt2.disabled = true;

            bor2.disabled = true;

        }
        // email validation
        const email = document.getElementById("email").value;
        const validmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const vmail = validmail.test(email);
        if (vmail) {

            document.querySelector(".error2").innerHTML = "";
            bor2.style.borderBottom = "4px solid green";
            bt2.disabled = false;
            bor3.disabled = false;
            document.querySelector(".error4").innerHTML = "";

        }
        else {
            document.querySelector(".error2").innerHTML = "<li>wrong email address";
            bor2.style.borderBottom = "4px solid red"
            bt2.disabled = true;
            bor3.disabled = true;
            document.querySelector(".error4").innerHTML = "";

        }


        // possword values

        const firstpasword = document.getElementById("frstpassword").value;



        const spaces = /^(?=.*\s)/;
        const capi = /^(?=.*[A-Z])/;
        const smal = /^(?=.*[a-z])/;
        const numb = /^(?=.*[0-9])/;
        const symb = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
        const lent = /^.{8,16}$/;

        //   const regex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;

        //password vlidation


        if (firstpasword == "") {
            document.querySelector(".error3").innerHTML = "<li>password is empty!";
            bor3.style.borderBottom = "4px solid red"
            bt2.disabled = true;
            bor4.disabled = true;


        }

        else if (spaces.test(firstpasword)) {
            document.querySelector(".error3").innerHTML = "<li>Password must not contain Whitespaces.";
            bor3.style.borderBottom = "4px solid red"
            bt2.disabled = true;
            bor4.disabled = true;


        }

        else if (!capi.test(firstpasword)) {
            document.querySelector(".error3").innerHTML = "<li>Password must have at least one Uppercase Character.";
            bor3.style.borderBottom = "4px solid red"
            bt2.disabled = true;
            bor4.disabled = true;


        }


        else if (!smal.test(firstpasword)) {
            document.querySelector(".error3").innerHTML = "<li>Password must have at least one Lowercase Character.";
            bor3.style.borderBottom = "4px solid red"
            bt2.disabled = true;
            bor4.disabled = true;



        }


        else if (!numb.test(firstpasword)) {
            document.querySelector(".error3").innerHTML = "<li>Password must contain at least one Digit.";
            bor3.style.borderBottom = "4px solid red"
            bt2.disabled = true;
            bor4.disabled = true;



        }

        else if (!symb.test(firstpasword)) {
            document.querySelector(".error3").innerHTML = "<li>Password must contain at least one Special Symbol.";
            bor3.style.borderBottom = "4px solid red"
            bt2.disabled = true;
            bor4.disabled = true;



        }

        else if (!lent.test(firstpasword)) {
            document.querySelector(".error3").innerHTML = "Password must be 10-16 Characters Long.";
            bor3.style.borderBottom = "4px solid red"
            bt2.disabled = true;
            bor4.disabled = true;



        }
        else {
            document.querySelector(".error3").innerHTML = "";
            bor3.style.borderBottom = "4px solid green"
            bt2.disabled = false;
            bor4.disabled = false;


        }

        // comfirm password validdater

        const cimpassword = document.getElementById("cimpassword").value;

        if (firstpasword === cimpassword && cimpassword.length > 0) {
            document.querySelector(".error4").innerHTML = "";
            bor4.style.borderBottom = "4px solid green"

        }
        else {
            document.querySelector(".error4").innerHTML = "<li>password not mached";

            bor4.style.borderBottom = "4px solid red"
            bt2.disabled = true;
        }


//unable the button and close the validate form using display none property

        bt2.addEventListener("click", () => {
            log2.style.display = "none";

        });
    }


    //entrence time interwal (6 second delay to display the form)


    // function tmdelay() {
    //     log2.style.display = "flex";
    //     blink.style.display = "none";
    // }
    // const delay = setInterval(tmdelay, 6000);




