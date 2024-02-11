// task 1
// Есть массив d1, кнопка b-1, input i-1. 
// Напишите функцию f1, которая при нажатии читает i-1 и добавляем его в массив. 
// После чего выводит массив в .out-1. 
// Поскольку мы будем выводить массив d1 неоднократно, то давайте вывод массива сделаем отдельной функцией.


const taskArray = [33,'best', 66, 'best'];
const task1Button = document.querySelector(".btn1");
const task1Input = document.querySelector(".input1");

function task1(value) {
    taskArray[taskArray.length] = value;
}

function task1_2() {
    document.querySelector(".div1").innerHTML = `<p>` + taskArray.join(` <br>`) + `</p>`; 
}

task1Button.addEventListener("click", () => {
    const inputValue = task1Input.value;
    task1(inputValue);
    task1_2();
    task1Input.value = "";
})

// task 2
// Напишите функцию f2, которая применяет метод pop к массиву d1, а затем выводит его (showArr) в .out-2

let taskArrayPop = [];
const task2Button = document.querySelector(".btn2");

function task2() {
    taskArrayPop = taskArray.pop();
}

function task2_2() {
    document.querySelector(".div2").innerHTML = `<p>` + `method pop; <br>` + taskArrayPop + `</p>`; 
}

task2Button.addEventListener("click", () => {
    task2();
    task2_2();
})

// task 3 
// Напишите функцию f3, которая применяет метод shift к массиву d1, а затем выводит его (showArr) в .out-3

let taskArrayShift = [];
const task3Button = document.querySelector(".btn3");

function task3() {
    taskArrayShift = taskArray.shift();
}

function task3_2() {
    document.querySelector(".div3").innerHTML = `<p>` + `method shift; <br>` + taskArrayShift + `</p>`; 
}

task3Button.addEventListener("click", () => {
    task3();
    task3_2();
})

// task 4 
// Напишите функцию f4, которая применяет метод push к массиву d1, 
// данные для массива берите из i-4, а затем выводит его (showArr) в .out-4


const task4Input = document.querySelector(".input4")
const task4Button = document.querySelector(".btn4");

function task4() {
    const inputValue = task4Input.value;
    taskArray.push(inputValue);
}

function task4_2() {
    document.querySelector(".div4").innerHTML = `<p>` + `method push; <br>` + taskArray.join(" ") + `</p>`; 
}

task4Button.addEventListener("click", () => {
    task4();
    task4_2();
    task4Input.value = "";
})

// task 5 
// Напишите функцию f5, которая применяет метод unshift к массиву d1,
// данные для массива берите из i-5, а затем выводит его (showArr) в .out-5


const task5Input = document.querySelector(".input5")
const task5Button = document.querySelector(".btn5");

function task5() {
    const inputValue = task5Input.value;
    taskArray.unshift(inputValue);
    task4Input.value = "";
}

function task5_2() {
    document.querySelector(".div5").innerHTML = `<p>` + `method unshift; <br>` + taskArray.join(" ") + `</p>`; 
}

task5Button.addEventListener("click", () => {
    task5();
    task5_2();
    task5Input.value = ""
})

// task 6
// Напишите функцию f6, которая эмулирует работу метода push применительно к массиву d6. 
// Т.е. добавляет значение из i-6 как последний элемент в массив d6.
// Повторный запуск функции должен также приводить к добавлению элемента.


const taskArray6 = ['test', 5, 12];
const task6Input = document.querySelector(".input6");
const task6Button = document.querySelector(".btn6");

function task6(value) {
    taskArray6[taskArray6.length -1] = value;
}

function task6_2() {
    document.querySelector(".div6").innerHTML = `<p>` + `emulate method push; <br>` + taskArray6.join(` `) + `</p>`;
}

task6Button.addEventListener("click", () => {
    const inputValue = task6Input.value;
    task6(inputValue);
    task6_2()
    task6Input.value = "";
})

// task 7 
// Напишите функцию f7, которая эмулирует метод pop, т.е. удаляет последний элемент массива d7.
// Функция может быть вызвана много раз, при этом каждый раз должен удаляться последний элемент d7.

const taskArray7 = ['china', 'india', 'brazil', 'japan', 'moscow'];
const task7Button = document.querySelector(".btn7");

function task7() {
    taskArray7.length = taskArray7.length -1;
}

function task7_2() {
    document.querySelector(".div7").innerHTML = `<p>` + `emulate method pop; <br>` + taskArray7.join(' <br>') + `</p>`;
}

task7Button.addEventListener("click", () => {
    task7()
    task7_2()
})

// task 8
// Напишите функцию f8, которая эмулирует работу метода unShift - добавляем значение из i-8 в начало массива d8.

const taskArray8 = [2, '4', 12, 67, 'hello'];
const task8Input = document.querySelector(".input8");
const task8Button = document.querySelector(".btn8");

function task8(value) {
    taskArray8.splice(0, 0, value); 
}

function task8_1() {
    document.querySelector(".div8").innerHTML = `<p>` + `emulate method unshift; <br>` + taskArray8.join(" ") + '</p>';
}

task8Button.addEventListener("click", () => {
    const inputValue = task8Input.value;
    task8(inputValue);
    task8_1();
    task8Input.value = "";
})

// task 9
// Напишите функцию f8, которая эмулирует работу метода shift - на примере массива d9.

const taskArray9 = [100, 200, 300, 400, 700, 121];
const task9Button = document.querySelector(".btn9");

function task9() {
    taskArray9.splice(0, 1);
}

function task9_2() {
    document.querySelector(".div9").innerHTML += `<p>${taskArray9.join(" ")}</p>`;
}

task9Button.addEventListener("click", () => {
    task9();
    task9_2();
})

// task 10
// Напишите функцию f10, которая применяет к массиву d10 метод reverse и выводит полученный массив в out-10

const taskArray10 = [3,14,15,92,6];
const task10Button = document.querySelector(".btn10");

function task10() {
    taskArray10.reverse()
}

function task10_2() {
    document.querySelector(".div10").innerHTML += `<p>${taskArray10.join(" ")}</p>`;
}

task10Button.addEventListener("click", () => {
    task10();
    task10_2();
})

// task 11 
// Напишите функцию, которая получает число из input i-11, переводит в число
// и с помощью метода indexOf проверяет наличие в массиве d11. 
// Функция выводит в out-11 -1 если такого числа нет в массиве, либо его индекс в массиве.


const taskArray11 = [2,3,4,5,6,7];
const task11Input = document.querySelector(".input11");
const task11Button = document.querySelector(".btn11");
const task11Div = document.querySelector(".div11")

function task11_parseInt() {
    let inputValue = parseInt(task11Input.value);
    return inputValue;
}

task11Button.addEventListener("click", () => {
    let inputValue = task11_parseInt();
    let index = taskArray11.indexOf(inputValue);

    if (index !== -1) {
        task11Div.innerHTML = `<p>${index}</p>`
    } else {
        task11Div.innerHTML = `<p> -1 </p>`
    }
    task11Input.value = ""
});

// task 12
// Напишите функцию f12, которая эмулирует работу метода indexOf
// ищет введенное число в массиве d12 (перебором). Если числа нет - выводит -1, если есть - его позицию в массиве.

const taskArray12 = d12 = [6, 62, 60, 70, 1, 5];
const task12Input = document.querySelector(".input12");
const task12Button = document.querySelector(".btn12");
const task12Div = document.querySelector(".div12");

function task12_parseInt() {
    let inputValue = parseInt(task12Input.value);
    return inputValue;
}

task12Button.addEventListener("click", () => {
    let inputValue = task12_parseInt();
    let index = 0;

    for (let i = 0; i < taskArray12.length; i++) {
        if (inputValue === taskArray12[i]) {
            index = i;
            task12Div.innerHTML = `<p>${i}</p>`;
            break;
        } else {
            task12Div.innerHTML = `<p>-1</p>`;
        }
    }

    task12Input.value = ""
})

// task 13
// Напишите функцию f13, которая эмулирует работу метода reverse. 
// Т.е. создает новый массив на основе d13 с обратным порядком элементов и выводит в out-13.

const taskArray13 = [6, 0, 22, 1, 4, 76];
const task13Button = document.querySelector(".btn13");
const task13Div = document.querySelector(".div13")
const reversedTaskArray13 = [];

function task13() {
    // reversedTaskArray13.push(taskArray13.pop());
    for (let i = taskArray13.length -1; i >= 0; i--) {
        reversedTaskArray13.push(taskArray13[i]);
    }
}

function task13_2() {
    task13Div.innerHTML += `<p>${reversedTaskArray13.join(" ")}</p>`;
}

task13Button.addEventListener("click", () => {
    task13();
    task13_2();
})

// task 14
// Напишите функцию, которая получает i-14, переводит в число, 
// а потом заполняет массив d14 так, что количество элементов равно введенному числу, и каждый элемент равен 1.
// Т.е. пользователь ввел 5, массив будет [1,1,1,1,1]. Выведите массив в out-14.

const taskArray14 = [];
const task14Button = document.querySelector(".btn14");
const task14Input = document.querySelector(".input14");
const task14Div = document.querySelector(".div14");

function task14() {
    let inputValue = task14Input.value;
    let numberValue = parseInt(inputValue);

    for (let i = 0; i < numberValue; i++) {
        taskArray14.push(1);
    }
}

function task14_2() {
    task14Div.innerHTML += `<p>${taskArray14.join(", ")}</p>`
}

task14Button.addEventListener("click", () => {
    task14();
    task14_2();
    task14Input.value = ""
})

// task 15
// Напишите функцию f15, которая вначале проверяет
// есть ли элемент из i-15 в массиве d15 (переводим в число), а потом - если нет - добавляет его в массив.

const taskArray15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const task15Button = document.querySelector(".btn15");
const task15Input = document.querySelector(".input15");
const task15Div = document.querySelector(".div15");

function task15() {
    let inputValue = task15Input.value;
    let numberValue = parseInt(inputValue);
    let valueFound = false;

    for (let i = 0; i < taskArray15.length; i++) {
        if (numberValue === taskArray15[i]) {
            task15Div.innerHTML = `<p>Вот искомое значение; ${numberValue} <br> Вот сам массив; ${taskArray15.join(" ")}</p>`
            valueFound = true;
            break
        }
    }

    if(!valueFound) {
        taskArray15.push(numberValue);
        task15Div.innerHTML = `<p>Вот добавленое значение; ${taskArray15.join(" ")}</p>`
    }
}

task15Button.addEventListener("click", () => {
    task15();
    task15Input.value = ""
})

// task 16
// Даны два массива d161 и d162
// используя метод concat - добавьте в массив d16 результат применения concat между массивом d161 и d162.

let taskArray16 = [];
let taskArray16_2 = [5,6,7,8,9]; 
let taskArray16_3 = [23,24,56,87];
const task16Button = document.querySelector(".btn16");
const task16Div = document.querySelector(".div16");

function task16() {
    taskArray16 = taskArray16_2.concat(taskArray16_3);
}

function task16_2() {
    task16Div.innerHTML += `<p>${taskArray16.join(" ")}</p>`
}

task16Button.addEventListener("click", () => {
    task16();
    task16_2();
})

// task 17
// Напишите функцию f17, которая эмулирует работу метода concat. 
// Функция должна объедиять массивы d171 и d172 и записывать результат в d17. Для эмуляции используйт цикл.

const taskArray17 = []; 
const taskArray17_1 = ['a', 'b', 'c', 'd']; 
const taskArray17_2 = [1,2,3,4,5];
const task17Button = document.querySelector(".btn17");
const task17Div = document.querySelector(".div17");

function task17() {
    for (let i = 0; i < Math.max(taskArray17_1.length); i++) {
        if (i < taskArray17_1.length) {
            taskArray17.push(taskArray17_1[i]);
        }
    }
}

function task17_2() {
    for (let i = 0; i < Math.max(taskArray17_2.length); i++) {
        if (i < taskArray17_2.length) {
            taskArray17.push(taskArray17_2[i]);
            }
        }
}

function task17_3() {
    task17Div.innerHTML = `<p>${taskArray17.join(" ")}</p>`;
}

task17Button.addEventListener("click", () => {
    task17();
    task17_2();
    task17_3();
})

// task 18 
// Напишите функцию f18, которая получает значение из i-18 
// и проверяет есть ли такое значение в массиве d18 c использованием метода includes. 
// Результат применения метода - выводится в .out-18.

const taskArray18 = ['b', 'c', '45', 'e', 'z', 'y'];
const task18Input = document.querySelector(".input18");
const task18Button = document.querySelector(".btn18");
const task18Div = document.querySelector(".div18");

function task18() {
    let inputValue = task18Input.value;
    const copyOfTaskArray18 = taskArray18.includes(inputValue);
    return copyOfTaskArray18;
}

function task18_2() {
    const found = task18();

    task18Div.innerHTML = `<p>Искомое значение; ${task18Input.value} <br> Значение в массиве ${found} </p>`
}

task18Button.addEventListener("click", () => {
    task18_2()
})

// task 19
// Напишите фукнцию f19, которая выводит самую длинную строку maxString из массива d19 в out-19.

const taskArray19 = ['Your','payment','method','will','automatically','be','charged','in','advance','every'];
const task19Button = document.querySelector(".btn19");
const task19Div = document.querySelector(".div19");

function task19() {
    let maxLength = 0;
    let maxString = '';

    for (let i = 0; i < taskArray19.length; i++) {
            if (taskArray19[i].length > maxLength) {
                maxLength = taskArray19[i].length;
                maxString = taskArray19[i];
            }
    }

    return maxString;
}

function task19_2() {
    let max = task19();

    task19Div.innerHTML = `<p>Максимальное значение в массиве; ${max}</p>`
}

task19Button.addEventListener("click", () => {
    task19_2()
})

// task 20 
// Напишите функцию f20, которая применяет к массиву d20 метод 
// join с параметрами и соединяет элементы массива в одну строку. 
// Результат выводит в .out-20. Укажите мето так d20.join(''). Обратите внимание - между апострофами нет пробела!!!.

const taskArray20 = [4,5,6,7,8,9,10];
const task20Button = document.querySelector(".btn20")
const task20Div = document.querySelector(".div20");

function task20(array) {
    array.join("");

    return array;
}

function task20_2() {
    task20Div.innerHTML = `<p>${task20(taskArray20)}</p>`
}

task20Button.addEventListener("click", () => {
    task20_2();
})