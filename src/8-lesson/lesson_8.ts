// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {

    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    return a === b && b === c ? '10' : a + b > c && c + b > a && a + c > b ? a === b || b === c || c === a ? '01' : '11' : '00'
    // В return стоит "заглушка", чтоб typescript не ругался
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    const result = String(number).split('').map(s => Number(s)).reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    // В return стоит "заглушка", чтоб typescript не ругался
    return result
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    const sumNumEven = arr.reduce((prValue, curValue, index) => {
        if (index % 2 === 0) {
            prValue += curValue
        }
        return prValue
    }, 0)

    const sumNumOdd = arr.reduce((prValue, curValue, index) => {
        if (index % 2 !== 0) {
            prValue += curValue
        }
        return prValue
    }, 0)

    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return sumNumEven > sumNumOdd
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    const positiveIntegers = array.filter(n => Number.isInteger(n) && n > 0)
    // В return стоит "заглушка", чтоб typescript не ругался
    return positiveIntegers.map(n => n ** 2)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    let sum = 0;
    for (let i = 0; i <= N; i++) {
        sum = i + sum;
    }
    return sum;
    // В return стоит "заглушка", чтоб typescript не ругался
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    const result = [];
    if (amountOfMoney > 0) {
        for (let i = 0; i < banknotes.length; i++) {
            while (amountOfMoney - banknotes[i] >= 0) {
                amountOfMoney = amountOfMoney - banknotes[i];
                result.push(banknotes[i]);
            }
        }

    }

    // В return стоит "заглушка", чтоб typescript не ругался
    return result;
}