/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
"use strict";

function isNatural(n) {
    return (n^0);
};

function pow (m, n) {

    if (! isNatural(n))
        alert ("Введите натуральне число в качестве степени, пожалуйста.");

    let i = 1;
    let res = 1;
    while (i <= n) {
        res *= m;
        i++;
    };

    return res;
};