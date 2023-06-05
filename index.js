let addDays = require("date-fns/addDays");

function days(d) {
  let date = addDays(new Date(2020, 7, 22), d);
  console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);
}

days(2);
