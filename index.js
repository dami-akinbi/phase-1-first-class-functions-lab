// Code your solution in this file!

// let scubersDrivers = ["A", "B", "C", "D", "E", "F", "G", "H"];
// console.log(scubersDrivers.slice(scubersDrivers.length - 2));

// task 1
const returnFirstTwoDrivers = (scubersDrivers) => {
  return scubersDrivers.slice(0, 2);
};

// task 2
const returnLastTwoDrivers = (scubersDrivers) => {
  return scubersDrivers.slice(scubersDrivers.length - 2);
};

// task 3
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// task 4
function createFareMultiplier(num) {
  return function (someFare) {
    return num * someFare;
  };
}

// task 5
const fareDoubler = (num) => createFareMultiplier(2)(num);

// task 6
const fareTripler = (num) => createFareMultiplier(3)(num);

// task 7
function selectDifferentDrivers(scubersDrivers, aFunction) {
  return aFunction(scubersDrivers);
}
