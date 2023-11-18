/*Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. 
Все це із замиканнями, наприклад:
sum(3) = 3 
sum(5) = 8
sum(20) = 28
*/



function lockFunc () {
    let firstNum = 0;

    return function (secNum) {
        firstNum += secNum
        return console.log (firstNum);
    }
    
}

const result = lockFunc ();
result (3);
result (7);
result (29);

