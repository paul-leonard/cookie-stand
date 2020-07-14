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

//  *****  GLOBAL VARIABLES  *****
var hourBuckets = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//  *****  DEFINE ALL OF THE OBJECTS  *****

var seattleObject = {
  minimumHourlyCustomers: 23,
  maximumHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  hourlyCustomerCount: [],
  hourlyCookieCount: [],
  totalDailyCookieSales: 0,
  calcRandomCustomers: function() {
    //calculates a number of customers that come in for a given hour bucket and fills array
    var min = Math.ceil(this.minimumHourlyCustomers);
    var max = Math.floor(this.maximumHourlyCustomers);
    for (var k = 0; k < hourBuckets.length; k++) {
      this.hourlyCustomerCount[k] = Math.floor(Math.random() * (max - min +1)) + min;
    }
    // The above three lines will return a random integer within the specified range, inclusive of both the min and max
    // Thanks to MDN web docs for the help with it.  Info at:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return;
  },
  calcHourlyCookieSales: function() {
    for (var m = 0; m < hourBuckets.length; m++) {
      this.hourlyCookieCount[m] = Math.round(this.averageCookiesPerCustomer * this.hourlyCustomerCount[m]);
      // console.log('avg type', typeof(this.averageCookiesPerCustomer));
      // console.log('this.hourlyCookieCount[m] type', typeof(this.hourlyCookieCount[m]));
      // console.log('type of randomCustomers', typeof(this.calcRandomCustomers[m]));  <-- I called the method instead of the property... oops!
    }
    // Thanks again to MDN for help with the rounding function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
    return;
  },
  calcTotalDailyCount: function() {
    for (var j = 0; j < hourBuckets.length; j++) {
      this.totalDailyCookieSales += this.hourlyCookieCount[j];
    }
    return;
  },
  printSalesData: function() {
    //Print out the hourly cookie sales
    for (var i = 0; i<hourBuckets.length; i++) {
      var seattleDisplayEL = document.getElementById('SeattleSales');
      var linePrintEL = document.createElement('li');
      linePrintEL.textContent = hourBuckets[i] + ': ' + this.hourlyCookieCount[i] + ' cookies';
      seattleDisplayEL.appendChild(linePrintEL);
    }

    //Display total cookies for the location
    seattleDisplayEL = document.getElementById('SeattleSales');
    linePrintEL = document.createElement('li');
    linePrintEL.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
    seattleDisplayEL.appendChild(linePrintEL);
  }
};

seattleObject.calcRandomCustomers();
seattleObject.calcHourlyCookieSales();
seattleObject.calcTotalDailyCount();
seattleObject.printSalesData();

// console.log('hourBuckets', hourBuckets);
// console.log('seattleObject', seattleObject);
// console.log('seattleObject.CalcRandomCustomers', seattleObject.CalcRandomCustomers);
// console.log('seattleObject.CalcHourlyCookieSales', seattleObject.CalcHourlyCookieSales);
// console.log('seattleObject.CalcTotalDailyCount', seattleObject.CalcTotalDailyCount);

// And then for other cities, it is the same and internal things can keep using 'this'
// I bet we will learn a way tomorrow to put all of these objects... in a higher object?
