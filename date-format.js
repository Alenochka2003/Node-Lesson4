const moment = require('moment');

const currentDate = moment();

console.log("Текущая дата в формате DD-MM-YYYY:", currentDate.format('DD-MM-YYYY'));
console.log("Текущая дата в формате MMM Do YY:", currentDate.format('MMM Do YY'));
console.log("День недели:", currentDate.format('dddd'));
