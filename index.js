let finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
];

// Challenge one - identify the total number of months being analysed in the above data group.

// Process :
// 1) understand the data set we have been provide.
//               This is a array of arrays titled 'finances' with string and number elements.
//               The string element is the month the data has been collected from and the number element 
//               is the money made or loss that month.

// This project was initiated for us by the instructor provided for loop :
//  for (let i = 0; i < finances.length; i++) {
//  const [date, amount] = finances[i];
// }
//console.log(date);
//console.log(amount);

//  This can be explained by understanding that the for loop has four main parts
//a) for which is the initiation command of the loop
//b) (let i =0; which is the condition)
//c) 1<finances.length; which is the test the loop complies to, if it resolves to true it will keep running, if it resolves to false it will close the loop.
//d) i++ this gives the instruction to repeat the loop in increments of 1 from 0 (i=0) to in this case 86 ( i < finances.length)-

// an obvious way of resolving this challenge given the presentation of the data is to use the length of the array to achieve the answer
// and do the following:
arrayLength = finances.length;
console.log(" length of finances array =", finances.length);

// this resolves to the correct answer of 86 even though the result it is giving us is not the number of Months in the data set
// but the number of mini arrays within the main array/ For this reason i was not happy with this solution as it would not fit a different array
// that had uneven data sets.

// i then did further research in an attempt to resolve this and fell down a huge rabbit hole. This led me to trying the following:

let elements = 0;
const month = (finances) => {

    for (let i in finances) {

        if (Array.isArray(finances[i])) {
            month(finances[i]);
        } else {
            elements++;
        }
    }
};

month(finances);
console.log("Number of elements in the array", elements);

// This did not resolve the challenge but did provide me with the information of how many total elements reside within a nested array.
// I then went back to the fundamentals and the first lesson where we are taught about type of to identify the number of a particular 
// data type in an array and in discussion with my tutor came to under stand the following:

// to just use the 'typeof' command with a variable on its own would not work - see below

let numberOfMonthsFail = 0;
typeof finances === "string"
console.log("numberOfMonths - Fail", numberOfMonthsFail)

// this resolves to 0 as the string data we wish to count sits within a nested array - an array within an array.
// therefore the above attempt cannot see the "string" data. I need to create a for loop to calculate the type of data as it works through all arrays
// see below

let numberOfMonths = 0

for (let i = 0; i < finances.length; i++) {
    const [date, amount] = finances[i];


    if (typeof date === "string") {
        numberOfMonths++
    }
}
console.log("Number of Months", numberOfMonths);

// Here i have created a global variable and set it to equal 0
// i have then used the for loop that we were provided to seperate the two sets of data we are being asked to analyse
// then added into the loop an if statement that asks how many "string" sets of data are included within
// the date variable i created which incorporates the first piece of information in each array.
// The if statement must conclude to true for the count to go up and i followed that with the global variable 
//'numberOfMonths' with +++ (the +++ alows the value of the global vatiable to increase incrementally as the if satement resolves to true)

// This for loop resolves to 86 in the console log, the correct answer. To check that this is counting the number of string data to
//give the correct answer I deleted a months data set and this then resolved the console log to 85 proving this for loop is
//working as hoped.

// End result : he total number of months being analysed =86

//Challenge 2
//Find the net total amount of Profit/Losses over the entire period.
// For this i need to create a for loop to again split the data sets then use the sum function to add
// up the numbers in the nested arrays - see below

    let sum=0
    
    
for (let i = 0; i < finances.length; i++) {
    const [date, amount] = finances[i];


   let  sum = [amount].reduce(function (a, b) {
        return a + b;
      }, 0);


      
      
      const array_amount1 = [sum]; 
      function sumArray(amount1) {
        
        let sum1 = 0;
      
        for (let i = 0; i < amount1.length; i += 1) {
          sum1 += amount1[i];
        }
        
        return sum1;
        
      }
      
      console.log(sumArray);
}