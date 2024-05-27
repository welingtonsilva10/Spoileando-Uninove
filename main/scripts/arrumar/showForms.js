let callForm1 = document.getElementById('formImage');
callForm1.style.display = 'none';
let callForm2 = document.getElementById('formPassword');
callForm2.style.display = 'none';
let callForm3 = document.getElementById('formMail');
callForm3.style.display = 'none';
let callForm4 = document.getElementById('formUser');
callForm4.style.display = 'none';
let callForm5 = document.getElementById('formPhone');
callForm5.style.display = 'none';

function form1() {
    if (callForm1.style.display === 'none') {
        callForm2.style.display = 'none';
        callForm3.style.display = 'none';
        callForm4.style.display = 'none';
        callForm5.style.display = 'none';
        callForm1.style.display = 'flex';
    } else {
        callForm1.style.display = 'none';
    }
}
function form2() {
    if (callForm2.style.display === 'none') {
        callForm1.style.display = 'none';
        callForm3.style.display = 'none';
        callForm4.style.display = 'none';
        callForm5.style.display = 'none';
        callForm2.style.display = 'flex';
    } else {
        callForm2.style.display = 'none';
    }
}   
function form3() {
    if (callForm3.style.display === 'none') {
        callForm1.style.display = 'none';
        callForm2.style.display = 'none';
        callForm4.style.display = 'none';
        callForm5.style.display = 'none';
        callForm3.style.display = 'flex';
    } else {
        callForm3.style.display = 'none';
    }
}
function form4() {
    if (callForm4.style.display === 'none') {
        callForm1.style.display = 'none';
        callForm2.style.display = 'none';
        callForm3.style.display = 'none';
        callForm5.style.display = 'none';
        callForm4.style.display = 'flex';
    } else {
        callForm4.style.display = 'none';
    }
}
function form5() {
    if (callForm5.style.display === 'none') {
        callForm1.style.display = 'none';
        callForm2.style.display = 'none';
        callForm3.style.display = 'none';
        callForm4.style.display = 'none';
        callForm5.style.display = 'flex';
    } else {
        callForm5.style.display = 'none';
    }
}