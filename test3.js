


// function q12 (q13) {
//     console.log (q13);
//     q13.style.background="blue";
//     q13.style.transition="3s";
//     q13.style.width="200px";
//     q13.style["border-radius"] = "100%";
//     q13.style["margin-left"] = "200px";
//     q13.style.transform="rotate(720deg)";
// }
    
    // включить add, переключатель toggle
    // q13.classList.add("q14");

    // паузы включения классов
    // q13.classList.add("q14");
    // setTimeout(function(){
    //     //код, который выполнится через паузу
    //     q13.classList.add("q15");
    //     //блабла
    // },3000/*время паузы*/ */);
// }









/*

function myClick () {
    console.log ('click');
}

document.querySelector('.one2').onclick = myClick;

===

function myClick () {
    console.log ('click');
}

document.querySelector('#one').onclick = myClick;

===

// работает лкм по классу
var block = document.querySelector('.one2');
block.onclick = function () {
    this.style.background = 'green';
}
или
document.querySelector('.one2').onclick = function () {
    this.style.background = 'green';
}
===




var block = document.getElementById('one2');


block.onclick = function () {
    this.style.background = 'green';
}



===

//ЛКМ
block.onclick = function () {
    this.style.background = 'green';
}



//начинается все с этого
var block = document.getElementById('one');

//ЛКМ
block.onclick = function () {
    this.style.background = 'green';
// не дает снова применить событие
    this.onclick = null;
}

//двойной клик
block.ondblclick = function () {
    this.style.background = 'blue';

}

//ПКМ
block.oncontextmenu = function () {
    this.style.background = 'black';
//запрещает вызов контекстного меню на элементе
    return false;
}

//запретить на сайте вызов контекстного меню
document.oncontextmenu = function (){
    return false;
}

//наведение мыши
block.onmouseenter = function () {
    this.style.background = 'gold';
// в f12 пишет сколько раз навели мышкой на обьект
    console.log ('навел мышь');
}

//мышь уходит с элемента
block.onmouseleave = function () {
    this.style.background = 'orange';
}

//движение мышью___меняет размер элемента при движении мышью в нем
var a=0
block.onmousemove = function () {
    a++;
    this.style.width = 100 + a+ 'px';
}

//нажимаем и держим кнопку мыши (любую)
var a=0
block.onmousedown = function () {
    this.style.background = 'cyan';
}

//записывает клики в лог
    console.log ('тест');

*/







