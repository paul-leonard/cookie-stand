'use strict';

/* ***** Project Layout *****
Assumptions:
This assignment so far is only written for a single day.  I imagine we will extend this across days later.

*** Global Variables ***
  Array of hourly bucket names

*** Object Structure ***
Each store will be its own object.

  Object properties will include:
  Minimum hourly customers
  Maximum hourly customers
  Average cookies per customer
  Array of hourly customer count
  Array of hourly cookies sold count
  Total daily cookies sold

  Object methods will include:
  Generate random number of customers per hour
  Calculate hourly cookie sales
  Calculate total daily cookie sales

*** Format ***
The sales data will then be displayed in an unordered list that is generated by this JS script per the format specified at:
https://codefellows.github.io/code-201-guide/curriculum/class-06/lab/

*** Calculations within Methods ***
math.random() will be used to generate the random customer visits per hour.  I did not know much about this function, so much information was learned and used from:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Calculate Hourly Cookie Sales will take the random number of customers and multiply it by the given location's average cookies per customer sale rate.

Calculate Total Daily Sales by summing all hourly sales.
*/





//  *****66666*****  HISTORICAL LAB06 AREA TO DOCUMENT SOURCES AND HELP RECEIVED DURING LAB06 WORK THAT IS NOW NOT A PART OF LAB07  *****66666*****

// var seattleObject = {
//   minimumHourlyCustomers: 23,
//   maximumHourlyCustomers: 65,
//   averageCookiesPerCustomer: 6.3,
//   hourlyCustomerCount: [],
//   hourlyCookieCount: [],
//   totalDailyCookieSales: 0,
//   calcRandomCustomers: function() {
//     //calculates a number of customers that come in for a given hour bucket and fills array
//     var min = Math.ceil(this.minimumHourlyCustomers);
//     var max = Math.floor(this.maximumHourlyCustomers);
//     for (var k = 0; k < hourBuckets.length; k++) {
//       this.hourlyCustomerCount[k] = Math.floor(Math.random() * (max - min +1)) + min;
//     }
//     // The above three lines will return a random integer within the specified range, inclusive of both the min and max
//     // Thanks to MDN web docs for the help with it.  Info at:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//     return;
//   },
//   calcHourlyCookieSales: function() {
//     for (var m = 0; m < hourBuckets.length; m++) {
//       this.hourlyCookieCount[m] = Math.round(this.averageCookiesPerCustomer * this.hourlyCustomerCount[m]);
//       // console.log('avg type', typeof(this.averageCookiesPerCustomer));
//       // console.log('this.hourlyCookieCount[m] type', typeof(this.hourlyCookieCount[m]));
//       // console.log('type of randomCustomers', typeof(this.calcRandomCustomers[m]));  <-- I called the method instead of the property... oops!
//     }
//     // Thanks again to MDN for help with the rounding function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
//     return;
//   },
//   calcTotalDailyCount: function() {
//     for (var j = 0; j < hourBuckets.length; j++) {
//       this.totalDailyCookieSales += this.hourlyCookieCount[j];
//     }
//     return;
//   },
//   printSalesData: function() {
//     //Print out the hourly cookie sales
//     for (var i = 0; i<hourBuckets.length; i++) {
//       var seattleDisplayEL = document.getElementById('SeattleSales');
//       var linePrintEL = document.createElement('li');
//       linePrintEL.textContent = hourBuckets[i] + ': ' + this.hourlyCookieCount[i] + ' cookies';
//       seattleDisplayEL.appendChild(linePrintEL);
//     }

//     //Display total cookies for the location
//     seattleDisplayEL = document.getElementById('SeattleSales');
//     linePrintEL = document.createElement('li');
//     linePrintEL.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
//     seattleDisplayEL.appendChild(linePrintEL);
//   }
// };

//Thanks to Skylar for the hint to pay attention to types by adding the suffix "EL" to anything that is an HTML element.

// These method calls were here when I completed the first city (Seattle), but now they moved to a different section.
// seattleObject.calcRandomCustomers();
// seattleObject.calcHourlyCookieSales();
// seattleObject.calcTotalDailyCount();
// seattleObject.printSalesData();

// console.log('hourBuckets', hourBuckets);
// console.log('seattleObject', seattleObject);
// console.log('seattleObject.calcRandomCustomers', seattleObject.calcRandomCustomers);
// console.log('seattleObject.calcHourlyCookieSales', seattleObject.calcHourlyCookieSales);
// console.log('seattleObject.calcTotalDailyCount', seattleObject.calcTotalDailyCount);

// And then for other cities, it is the same and internal things can keep using 'this'
// I bet we will learn a way tomorrow to put all of these objects... in a higher object?
// All comments and sources removed, refer to the seattle object definition

//  *****66666*****  -END- HISTORICAL LAB06 AREA TO DOCUMENT SOURCES AND HELP RECEIVED DURING LAB06 WORK THAT IS NOW NOT A PART OF LAB07 -END-  *****66666*****






// ********** Lab07 CODE AREA FOLLOWS  ******************

//  *****  GLOBAL VARIABLES  *****
var hourBuckets = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
// Defining arrays to contain city given information
// cityGivens = [minimumHourlyCustomers, maximumHourlyCustomers, averageCookiesPerCustomer]
var seattleGivens = [23, 65, 6.3, 'SeattleSales'];
var tokyoGivens = [3, 24, 1.2, 'TokyoSales'];
var dubaiGivens = [11, 38, 3.7, 'DubaiSales'];
var parisGivens = [20, 38, 2.3, 'ParisSales'];
var limaGivens = [2, 16, 4.6, 'LimaSales'];

//  *****  CONSTRUCTOR  *****
// Constructor for creating objects of object type Store
function Store(minimumHourlyCustomers, maximumHourlyCustomers, averageCookiesPerCustomer,targetEL) {
  this.minimumHourlyCustomers = minimumHourlyCustomers;
  this.maximumHourlyCustomers = maximumHourlyCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.targetEL = targetEL;
  this.hourlyCustomerCount = [];
  this.hourlyCookieCount = [];
  this.totalDailyCookieSales = 0;
  this.calcRandomCustomers = function() {
    var min = Math.ceil(this.minimumHourlyCustomers);
    var max = Math.floor(this.maximumHourlyCustomers);
    for (var k = 0; k < hourBuckets.length; k++) {
      this.hourlyCustomerCount.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
  };
  this.calcHourlyCookieSales = function() {
    for (var m = 0; m < hourBuckets.length; m++) {
      this.hourlyCookieCount.push(Math.round(this.averageCookiesPerCustomer * this.hourlyCustomerCount[m]));
    }
  };
  this.calcTotalDailyCount = function() {
    for (var j = 0; j < hourBuckets.length; j++) {
      this.totalDailyCookieSales += this.hourlyCookieCount[j];
    }
  };
  this.printSalesData = function() {
    for (var i = 0; i < hourBuckets.length; i++) {
      var cityDisplayEL = document.getElementById(targetEL);
      var linePrintEL = document.createElement('li');
      linePrintEL.textContent = hourBuckets[i] + ': ' + this.hourlyCookieCount[i] + ' cooies';
      cityDisplayEL.appendChild(linePrintEL);
    }
    cityDisplayEL = document.getElementById(targetEL);
    linePrintEL = document.createElement('li');
    linePrintEL.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
    cityDisplayEL.appendChild(linePrintEL);
  };
  this.calculateAndRenderLocation = function() {
    this.calcRandomCustomers();
    this.calcHourlyCookieSales();
    this.calcTotalDailyCount();
    this.printSalesData();
  };
}

//  *****  USE PROTOTYPE FUNCTION OF OBJECTS TO ADD A TABLE RENDERING FUNCTION  *****
Store.prototype.tableRender = function() {
  this.calcRandomCustomers();
  this.calcHourlyCookieSales();
  this.calcTotalDailyCount();
  //Make table
  //1 identify element
  //2 create element
  //2.5 fill content
  //2.5 goes deeper
      //1
      //2
      //2.5
      //3
  //3
};



//  *****  CREATING OBJECTS FOR EACH STORE  *****
var seattleObject = new Store(...seattleGivens);
var tokyoObject = new Store(...tokyoGivens);
var dubaiObject = new Store(...dubaiGivens);
var parisObject = new Store(...parisGivens);
var limaObject = new Store(...limaGivens);
// Thanks to this website for preventing me from typing out these arrays in their entirety:  https://www.samanthaming.com/tidbits/48-passing-arrays-as-function-arguments/


//  ***** FUNCTION DECLARATIONS  *****
function makeTableHeader(arrayOfHours) {
  console.log(arrayOfHours);
  console.log('in makeTableHeader');
  // 1. find the target
  var table = document.getElementById('salesDataTable');
  // 2. create new element
  var row = document.createElement('tr');
  // 2.5 give it content
  // content for a row is a cell
  // do the full 3 step process for a cell
  // cell: 1. find parent... DONE, because 'var row' is the parent
  // cell: 2. make element
  var tableHeadCell = document.createElement('th');
  // cell: 2.5. give it content
  // content for the cell is timeBucket
  tableHeadCell.textContent = 'City';
  // cell: 3 append cell to parent (which is the row)
  row.appendChild(tableHeadCell);
  // Same parent (row) for all of the hourly time buckets... so run a for loop to fill it in containingsteps 2, 2.5, and 3.
  for (var p = 0; p < arrayOfHours.length; p++) {
    tableHeadCell = document.createElement('th');
    tableHeadCell.textContent = arrayOfHours[p];
    row.appendChild(tableHeadCell);
  }
  //and one more column for Daily totals
  tableHeadCell = document.createElement('th');
  tableHeadCell.textContent = 'Daily Location Total';
  row.appendChild(tableHeadCell);
  // 3 row needs to be appended to its parent (the table)
  table.appendChild(row);
}

function makeTableFooter() {
  console.log('mystery so far');
  // will need for loops calling each city's hourly total and adding them together to create this total
  // adding it to the table will be similar to the other rows
  // this will be the last thing to be worked on
}


//  *****  FUNCTION AND METHOD CALLS  *****

// Old method calls for generating data and putting in lists:
// seattleObject.calculateAndRenderLocation();
// tokyoObject.calculateAndRenderLocation();
// dubaiObject.calculateAndRenderLocation();
// parisObject.calculateAndRenderLocation();
// limaObject.calculateAndRenderLocation();

// New function and method calls for generating data and putting in table:
makeTableHeader(hourBuckets);

seattleObject.tableRender();
tokyoObject.tableRender();
dubaiObject.tableRender();
parisObject.tableRender();
limaObject.tableRender();

makeTableFooter();
