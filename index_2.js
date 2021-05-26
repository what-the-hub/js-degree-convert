

// Написать функцию (рекурсия), которая считает сумму всех чисел от 1 до n, где n - это параметр функции.


function recursion_sum (n){
    if(n === 1) {
        return n;
    }
    else{
        return n + recursion_sum (n - 1);
    }
}

let input_n = prompt("Enter n");
input_n = parseInt (input_n); // проверяем число, преобразовываем в целое (на всякий случай)
alert (recursion_sum (input_n));

