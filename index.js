// Code your solution in this file!
const drivers=[`Antonia`,`Nuru`,`Amari`,`Mo`]
const returnFirstTwoDrivers = function(){return [drivers[0],drivers[1]]}

const returnLastTwoDrivers = function(){return [drivers[drivers.length-2],drivers[drivers.length-1]]}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){return fare * multiplier};
}

const fareDoubler = createFareMultiplier(2)
// function fareDoubler(fare){
//     return fare*2;
// }

const fareTripler = createFareMultiplier(3)
// function fareTripler(fare){
//     return fare*3;
// }

const selectDifferentDrivers = function(drivers,option){
    return option(drivers);
}