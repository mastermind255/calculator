
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
let arrDisplay = [];
let arrDuplicate = [];
let btnPlusSub = document.getElementById('btnPlusSub');
let btnOk = document.getElementById('btnOk');
let btnClear = document.getElementById('btnClear');
let btnCancel = document.getElementById('btnCancel');
let btnPercent = document.getElementById('btnPercent');
let flage = true;
let btnsqrt = document.getElementById('btnsqrt');
let btncos = document.getElementById('btncos');
let btnsin = document.getElementById('btnsin');
let btntan = document.getElementById('btntan');
let btnExp = document.getElementById('btnExp');
let btnln = document.getElementById('btnln');
let btnsq = document.getElementById('btnsq');


// dispaly.innerText = 'This is calculator';
// console.log(dispaly.innerText);

function updateDisplay() {
    for (let i in arrDisplay) {
        if (arrDisplay[i] === '*') {
            arrDuplicate.push('X');
        }
        else if (arrDisplay[i] === '/') {
            arrDuplicate.push('÷');
        }
        else if (arrDisplay[i] === '%') {
            arrDuplicate.push('%');
            arrDisplay.pop();
            arrDisplay.push('*0.01');
        }
        else {
            arrDuplicate.push(arrDisplay[i]);
        }
    }
    // console.log(arrDisplay);
    // console.log(arrDuplicate);
    let dis = arrDuplicate.join('');
    arrDuplicate = [];
    dispaly.innerText = dis;
}

function sqrtFunction() {
    let startIndex;
    let endIndex;
    let countElement = 0;
    let demoList = [];
    // console.log(arrDisplay);
    for (i in arrDisplay) {
        if (arrDisplay[i] === '√(') {
            startIndex = i;
            countElement++;
        }
        else if (arrDisplay[i] === ')') {
            endIndex = i;
            countElement++;
            break;
        }
        else {
            countElement++;
            demoList.push(arrDisplay[i]);
        }
    }

    let dis = demoList.join('');
    // console.log(eval(dis))
    let sqrtResult = eval(dis);

    // console.log(sqrtResult);
    sqrtResult = Math.sqrt(sqrtResult);
    // console.log(sqrtResult);

    arrDisplay.splice(startIndex, countElement, sqrtResult);
    // console.log(arrDisplay);

}

function cosFunction() {
    let startIndex;
    let endIndex;
    let countElement = 0;
    let demoList = [];
    // console.log(arrDisplay);
    for (i in arrDisplay) {
        if (arrDisplay[i] === 'cos(') {
            startIndex = i;
            countElement++;
        }
        else if (arrDisplay[i] === ')') {
            endIndex = i;
            countElement++;
            break;
        }
        else {
            countElement++;
            demoList.push(arrDisplay[i]);
        }
    }

    let dis = demoList.join('');
    // console.log(eval(dis))
    let sqrtResult = eval(dis);

    // console.log(sqrtResult);
    sqrtResult = Math.cos(sqrtResult);
    // console.log(sqrtResult);

    arrDisplay.splice(startIndex, countElement, sqrtResult);
    // console.log(arrDisplay);

}


function sinFunction() {
    let startIndex;
    let endIndex;
    let countElement = 0;
    let demoList = [];
    // console.log(arrDisplay);
    for (i in arrDisplay) {
        if (arrDisplay[i] === 'sin(') {
            startIndex = i;
            countElement++;
        }
        else if (arrDisplay[i] === ')') {
            endIndex = i;
            countElement++;
            break;
        }
        else {
            countElement++;
            demoList.push(arrDisplay[i]);
        }
    }

    let dis = demoList.join('');
    // console.log(eval(dis))
    let sqrtResult = eval(dis);

    // console.log(sqrtResult);
    sqrtResult = Math.sin(sqrtResult);
    // console.log(sqrtResult);

    arrDisplay.splice(startIndex, countElement, sqrtResult);
    // console.log(arrDisplay);

}

function tanFunction() {
    let startIndex;
    let endIndex;
    let countElement = 0;
    let demoList = [];
    // console.log(arrDisplay);
    for (i in arrDisplay) {
        if (arrDisplay[i] === 'tan(') {
            startIndex = i;
            countElement++;
        }
        else if (arrDisplay[i] === ')') {
            endIndex = i;
            countElement++;
            break;
        }
        else {
            countElement++;
            demoList.push(arrDisplay[i]);
        }
    }

    let dis = demoList.join('');
    // console.log(eval(dis))
    let sqrtResult = eval(dis);

    // console.log(sqrtResult);
    sqrtResult = Math.tan(sqrtResult);
    // console.log(sqrtResult);

    arrDisplay.splice(startIndex, countElement, sqrtResult);
    // console.log(arrDisplay);

}


function expFunction() {
    let startIndex;
    let countElement = 0;
    // console.log(arrDisplay);
    for (i in arrDisplay) {
        if (arrDisplay[i] === 'e') {
            startIndex = i;
            countElement++;
            break;
        }
    }

    arrDisplay.splice(startIndex, countElement, Math.E);

}

function lnFunction() {
    let startIndex;
    let endIndex;
    let countElement = 0;
    let demoList = [];
    // console.log(arrDisplay);
    for (i in arrDisplay) {
        if (arrDisplay[i] === 'ln(') {
            startIndex = i;
            countElement++;
        }
        else if (arrDisplay[i] === ')') {
            endIndex = i;
            countElement++;
            break;
        }
        else {
            countElement++;
            demoList.push(arrDisplay[i]);
        }
    }

    let dis = demoList.join('');
    // console.log(eval(dis))
    let sqrtResult = eval(dis);

    // console.log(sqrtResult);
    sqrtResult = Math.log(sqrtResult);
    // console.log(sqrtResult);

    arrDisplay.splice(startIndex, countElement, sqrtResult);
    // console.log(arrDisplay);

}



function sqFunction() {
    let startIndex;
    let countElement = 0;

    for (i in arrDisplay) {
        if (arrDisplay[i] === '^(2)') {
            startIndex = i;
            countElement++;
            break;
        }
    }

    let startInt = startIndex - 1;
    let endInt;

    let intArry = [];

    if (Number.isInteger(arrDisplay[startInt])) {
        if (startInt === 0) {
            intArry.push(arrDisplay[startInt]);
        }
        else if (Number.isInteger(arrDisplay[startInt])) {
            while (Number.isInteger(arrDisplay[startInt])) {
                intArry.push(arrDisplay[startInt]);
                if (startInt === 0) {
                    break;
                }
                countElement++;
                endInt = startInt;
                startInt--;
            }
            startInt++;
        }
    }
    else if (arrDisplay[startInt] === ')') {
        while (!(arrDisplay[startInt] === '(')) {
            intArry.push(arrDisplay[startInt]);
            countElement++;
            startInt--;
        }
        intArry.reverse().pop();
        intArry.reverse();
    }
    

    // let preElement = parseInt(intArry.reverse().join(''));
    let preElement = intArry.reverse().join('');
    preElement = eval(preElement);

    arrDisplay.splice(startInt, countElement + 1, Math.pow(preElement, 2));
}

function displayResult() {
    flage = false;


    // sqrt
    let countSqrt = 0;
    for (let i of arrDisplay) {
        if (i === '√(') {
            countSqrt++;
        }
    }
    for (let i = 0; i < countSqrt; i++) {
        sqrtFunction();
    }

    // cos
    let countCos = 0;
    for (let i of arrDisplay) {
        if (i === 'cos(') {
            countCos++;
        }
    }
    for (let i = 0; i < countCos; i++) {
        cosFunction();
    }

    // sin
    let countSin = 0;
    for (let i of arrDisplay) {
        if (i === 'sin(') {
            countSin++;
        }
    }
    for (let i = 0; i < countSin; i++) {
        sinFunction();
    }


    // tan
    let countTan = 0;
    for (let i of arrDisplay) {
        if (i === 'tan(') {
            countTan++;
        }
    }
    for (let i = 0; i < countTan; i++) {
        tanFunction();
    }

    // exp
    let countExp = 0;
    for (let i of arrDisplay) {
        if (i === 'e') {
            countExp++;
        }
    }
    for (let i = 0; i < countExp; i++) {
        expFunction();
    }

    // ln
    let countLn = 0;
    for (let i of arrDisplay) {
        if (i === 'ln(') {
            countLn++;
        }
    }
    for (let i = 0; i < countLn; i++) {
        lnFunction();
    }

    // sq 
    let countSq = 0;
    for (let i of arrDisplay) {
        if (i === '^(2)') {
            countSq++;
        }
    }
    for (let i = 0; i < countSq; i++) {
        sqFunction();
    }



    let dis = arrDisplay.join('');
    // console.log(dis);
    let result;
    try {
        result = eval(dis);
        dispaly.innerText = result;
        arrDisplay = [];
        arrDisplay.push(result);
    }
    catch (e) {
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
btn7.addEventListener('click', () => {
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
    // arrDisplay.push('(');
    if (arrDisplay[arrDisplay.length - 1] === '*' || arrDisplay[arrDisplay.length - 1] === '-' || arrDisplay[arrDisplay.length - 1] === '+' || arrDisplay[arrDisplay.length - 1] === '/') {
        arrDisplay.push('(');
    }
    else if (arrDisplay.length === 0) {
        arrDisplay.push('(');
    }
    else {
        arrDisplay.push('*');
        arrDisplay.push('(');
    }
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
    if (arrDisplay[arrDisplay.length - 1] === '*' || arrDisplay[arrDisplay.length - 1] === '-' || arrDisplay[arrDisplay.length - 1] === '+' || arrDisplay[arrDisplay.length - 1] === '/') {
        arrDisplay.push('(-');
    }
    else if (arrDisplay.length === 0) {
        arrDisplay.push('(-');
    }
    else {
        arrDisplay.push('*');
        arrDisplay.push('(-');
    }
    updateDisplay();
});

btnsqrt.addEventListener('click', () => {

    // arrDisplay.push('√(');
    if (arrDisplay[arrDisplay.length - 1] === '*' || arrDisplay[arrDisplay.length - 1] === '-' || arrDisplay[arrDisplay.length - 1] === '+' || arrDisplay[arrDisplay.length - 1] === '/') {
        arrDisplay.push('√(');
    }
    else if (arrDisplay.length === 0) {
        arrDisplay.push('√(');
    }
    else {
        arrDisplay.push('*');
        arrDisplay.push('√(');
    }
    updateDisplay();
})

btncos.addEventListener('click', () => {
    // arrDisplay.push('cos(');
    if (arrDisplay[arrDisplay.length - 1] === '*' || arrDisplay[arrDisplay.length - 1] === '-' || arrDisplay[arrDisplay.length - 1] === '+' || arrDisplay[arrDisplay.length - 1] === '/') {
        arrDisplay.push('cos(');
    }
    else if (arrDisplay.length === 0) {
        arrDisplay.push('cos(');
    }
    else {
        arrDisplay.push('*');
        arrDisplay.push('cos(');
    }
    updateDisplay();
})


btnsin.addEventListener('click', () => {
    // arrDisplay.push('sin(');
    if (arrDisplay[arrDisplay.length - 1] === '*' || arrDisplay[arrDisplay.length - 1] === '-' || arrDisplay[arrDisplay.length - 1] === '+' || arrDisplay[arrDisplay.length - 1] === '/') {
        arrDisplay.push('sin(');
    }
    else if (arrDisplay.length === 0) {
        arrDisplay.push('sin(');
    }
    else {
        arrDisplay.push('*');
        arrDisplay.push('sin(');
    }
    updateDisplay();
})

btntan.addEventListener('click', () => {
    // arrDisplay.push('tan(');
    if (arrDisplay[arrDisplay.length - 1] === '*' || arrDisplay[arrDisplay.length - 1] === '-' || arrDisplay[arrDisplay.length - 1] === '+' || arrDisplay[arrDisplay.length - 1] === '/') {
        arrDisplay.push('tan(');
    }
    else if (arrDisplay.length === 0) {
        arrDisplay.push('tan(');
    }
    else {
        arrDisplay.push('*');
        arrDisplay.push('tan(');
    }
    updateDisplay();

})

btnExp.addEventListener('click', () => {
    // arrDisplay.push('e');
    if (arrDisplay[arrDisplay.length - 1] === '*' || arrDisplay[arrDisplay.length - 1] === '-' || arrDisplay[arrDisplay.length - 1] === '+' || arrDisplay[arrDisplay.length - 1] === '/') {
        arrDisplay.push('e');
    }
    else if (arrDisplay.length === 0) {
        arrDisplay.push('e');
    }
    else {
        arrDisplay.push('*');
        arrDisplay.push('e');
    }
    updateDisplay();

})

btnln.addEventListener('click', () => {
    // arrDisplay.push('ln(');
    if (arrDisplay[arrDisplay.length - 1] === '*' || arrDisplay[arrDisplay.length - 1] === '-' || arrDisplay[arrDisplay.length - 1] === '+' || arrDisplay[arrDisplay.length - 1] === '/') {
        arrDisplay.push('ln(');
    }
    else if (arrDisplay.length === 0) {
        arrDisplay.push('ln(');
    }
    else {
        arrDisplay.push('*');
        arrDisplay.push('ln(');
    }
    updateDisplay();

})

btnsq.addEventListener('click', () => {
    if (arrDisplay[arrDisplay.length - 1] === '*' || arrDisplay[arrDisplay.length - 1] === '-' || arrDisplay[arrDisplay.length - 1] === '+' || arrDisplay[arrDisplay.length - 1] === '/') {
        // arrDisplay.push('ln(');
        alert('Invalid Format');
    }
    else if (arrDisplay.length === 0) {
        // arrDisplay.push('ln');
        alert('Invalid Format');
    }
    else if (Number.isInteger(arrDisplay[arrDisplay.length - 1])) {
        arrDisplay.push('^(2)');
    }
    else if (arrDisplay[arrDisplay.length - 1] === ')') {
        arrDisplay.push('^(2)');
    }
    updateDisplay();

})


btnClear.addEventListener('click', () => {
    if (flage) {
        arrDisplay.pop();
        arrDuplicate.pop();
        updateDisplay();
    }
    else {
        flage = true;
        arrDisplay = [];
        arrDuplicate = [];
        let dis = dispaly.innerText.split('');
        dis.pop();
        
        // dis = dis.join('');
        // arrDisplay.push(dis);
        // dispaly.innerText = '';

        for(let i of dis){
            arrDisplay.push(i);
        }
        updateDisplay();
    }
});





