/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
"use strict";

function showSalary(data, age) {

    let filtered = data.filter( function(person) {
            return person.age <= age;
        }
    );

    let mapNameBalance = filtered.map( function(item) {
            return `${item.name}, ${item.balance}`;
        }

    );

    let res = mapNameBalance.join("\n");

    return res;

}


