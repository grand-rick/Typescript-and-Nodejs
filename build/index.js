"use strict";
var person;
// eslint-disable-next-line prefer-const
person = 'Rory';
var buildPerson = function (person) {
    return "Your person is ".concat(person);
};
console.log(buildPerson(person));
