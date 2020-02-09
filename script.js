"use strict";

function f1() {
    let div = document.querySelector('#one');
    div.innerHTML += ' Hello';
}
f1();

function f2() {
    let div = document.querySelector('#two');
    div.innerHTML += ' Hello';
}
f2();


//-----------------------------

let c = document.querySelector('#three');

function f3() {
    c.innerHTML += ' Hello';
}

f3();


c = document.querySelector('#four');

f3(); 
//-------------------------------------------

function f4(zzz) {
    //zzz - id элемента
    let d = document.querySelector('#'+zzz);
    d.innerHTML += ' Это работает ';
}

f4('one');
f4('two');
f4('three');
f4('four');

//----------------------------------------------



function summa(a, b) {
   /* if (b) {
        b = b;
    }
    else {
        b = 1;
    }*/
    (b) ? b = b : b = 1;
    return a*b;
}
alert(summa(3, 4));
