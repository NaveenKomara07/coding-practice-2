const addDays = require("date-fns/addDays");

const getAfterXdays = (days) => {
  const startDate = new Date(2020, 7, 22);
  const newDate = addDays(startDate, 10);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

module.exports = getAfterXdays;
