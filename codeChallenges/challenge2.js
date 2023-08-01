var goodDrivingRecord = true;
var age = 24;

if (goodDrivingRecord && age>25){
  console.log("they should get a discount on the car rental")
} else if (goodDrivingRecord || age>25){
  console.log("they should pay full price")
} else if (!goodDrivingRecord && age<=25){
  console.log("They need to have a cosigner for a rental")
} else {
  console.log("Tell them to leave")
}