"use strict";

function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
    var colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
    var hesh = {};// для сохранения цветов
    console.log('цветов: ' + colorsCount);
    for (var i = 1; i <= colorsCount; i++) {
        var n = randomDiap(1, 7);// генерируем рандомное число от 1 до 7
        var colorName = colors[n];
        if (colorName in hesh) { // если цвет в хэше уже есть
            i--;                // смещаемся на одну итерацию назад 
        } else {
            hesh[colorName]=true;// если цвета в хэше нет записываем этот цвет в хэш
            console.log(colorName);// выводим цвет
        }
    }
}

mood(3);