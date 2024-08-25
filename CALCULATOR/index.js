let dispaly = document.getElementById('display');
let btn9 = document.getElementById('btn9');
let btn8 = document.getElementById('btn8');
let btn7 = document.getElementById('btn7');
let btn6 = document.getElementById('btn6');
let btn5 = document.getElementById('btn5');
let btn4 = document.getElementById('btn4');
let btn3 = document.getElementById('btn3');
let btn2 = document.getElementById('btn2');
let btn1 = document.getElementById('btn1');
let btn0 = document.getElementById('btn0');
let btnDot = document.getElementById('btn.');
let btnPlush = document.getElementById('btn+');
let btnDiv = document.getElementById('btn/');
let btnMul = document.getElementById('btn*');
let btnSub = document.getElementById('btn-');
let btnParan1 = document.getElementById('btn(');
let btnParan2 = document.getElementById('btn)');
let arrDisplay =[];
let arrDuplicate=[];
let btnPlusSub = document.getElementById('btnPlusSub');
let btnOk = document.getElementById('btnOk');
let btnClear = document.getElementById('btnClear');
let btnCancel = document.getElementById('btnCancel');
let btnPercent = document.getElementById('btnPercent');
let flage = true;

// dispaly.innerText = 'This is calculator';
// console.log(dispaly.innerText);

function updateDisplay(){
    for(let i in arrDisplay){
        if(arrDisplay[i] === '*'){
            arrDuplicate.push('X');
        }
        else if(arrDisplay[i] === '/'){
            arrDuplicate.push('÷');
        }
        else if(arrDisplay[i] === '%'){
            arrDuplicate.push('%');
            arrDisplay.pop();
            arrDisplay.push('*0.01');
        }
        else{
            arrDuplicate.push(arrDisplay[i]);
        }
    }
    // console.log(arrDisplay);
    // console.log(arrDuplicate);
    let dis = arrDuplicate.join('');
    arrDuplicate = [];
    dispaly.innerText = dis;
}

function displayResult(){
    flage = false;
    let dis = arrDisplay.join('');
    // console.log(dis);
    let result;
    try{
        result = eval(dis);
        dispaly.innerText = result;
    }
    catch(e){
        dispaly.innerText = 'Error Occured';
    }
}

btnDot.addEventListener('click', () => {
    arrDisplay.push('.');
    updateDisplay();
});
btn9.addEventListener('click', () => {
    arrDisplay.push(9);
    updateDisplay();
});
btn8.addEventListener('click', () => {
    arrDisplay.push(8);
    updateDisplay();
});
btn7.addEventListener('click',() => {
    arrDisplay.push(7);
    updateDisplay();
});
btn6.addEventListener('click', () => {
    arrDisplay.push(6);
    updateDisplay();
});
btn5.addEventListener('click', () => {
    arrDisplay.push(5);
    updateDisplay();
});
btn4.addEventListener('click', () => {
    arrDisplay.push(4);
    updateDisplay();
});
btn3.addEventListener('click', () => {
    arrDisplay.push(3);
    updateDisplay();
});
btn2.addEventListener('click', () => {
    arrDisplay.push(2);
    updateDisplay();
});
btn1.addEventListener('click', () => {
    arrDisplay.push(1);
    updateDisplay();
});
btn0.addEventListener('click', () => {
    arrDisplay.push(0);
    updateDisplay();
});
btnPlush.addEventListener('click', () => {
    arrDisplay.push('+');
    updateDisplay();
});
btnDiv.addEventListener('click', () => {
    arrDisplay.push('/');
    updateDisplay();
});
btnMul.addEventListener('click', () => {
    arrDisplay.push('*');
    updateDisplay();
});
btnSub.addEventListener('click', () => {
    arrDisplay.push('-');
    updateDisplay();
});
btnParan1.addEventListener('click', () => {
    arrDisplay.push('(');
    updateDisplay();
});
btnParan2.addEventListener('click', () => {
    arrDisplay.push(')');
    updateDisplay();
});


btnOk.addEventListener('click', () => {
    displayResult();
})

btnCancel.addEventListener('click', () => {
    arrDisplay = [];
    arrDuplicate = [];
    updateDisplay();
});

btnPercent.addEventListener('click', () => {
    arrDisplay.push('%');
    updateDisplay();
})


btnPlusSub.addEventListener('click', () => {
    if(arrDisplay[arrDisplay.length-1] === '*' || arrDisplay[arrDisplay.length-1] === '-' || arrDisplay[arrDisplay.length-1] === '+' || arrDisplay[arrDisplay.length-1] === '/'){
        arrDisplay.push('(-');
    }
    else if(arrDisplay.length === 0){
        arrDisplay.push('(-');
    }
    else{
        arrDisplay.push('*');
        arrDisplay.push('(-');
    }
    updateDisplay();
});


btnClear.addEventListener('click',() => {
    if(flage){
        arrDisplay.pop();
        arrDuplicate.pop();
        updateDisplay();
    }
    else{
        flage = true;
        arrDisplay = [];
        arrDuplicate = [];
        let dis = dispaly.innerText.split('');
        dis.pop();
        dis = dis.join('');
        arrDisplay.push(dis);
        dispaly.innerText = '';
        updateDisplay();
    }
});





