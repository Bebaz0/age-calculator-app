console.log("Hello")


var day
var month
var year
let valid = true

let daybox = document.getElementById("day")
let monthbox = document.getElementById("MONTH")
let yearbox = document.getElementById("YEAR")

function getvars(){
    valid=true
    console.log("Help")
    day = (document.getElementById("day")).value;
    console.log((day));
    month = (document.getElementById("MONTH")).value;
    console.log((month));
    year = (document.getElementById("YEAR")).value;
    console.log((year));



    verify();
}

function verify(){

     // Validate month
  if (month < 1 || month > 12) {
    if (month == ""){
        document.getElementById('month-error').textContent = 'This field is required'
    }
    else{
        document.getElementById('month-error').textContent = 'Must be a valid month';
    }
    valid = false;
  }

  // Validate day
  if (day < 1 || day > 31) {
    if (day == ""){
        document.getElementById('day-error').textContent = 'This field is required'
    }
    else{
        document.getElementById('day-error').textContent = 'Must be a valid day';
    }
    valid = false;
  }

  // Validate year (you can adjust the past year condition as needed)
  const currentYear = new Date().getFullYear();

  if (year == ""){
    document.getElementById('year-error').textContent = 'This field is required';
    valid = false;
  }
  else  if (year > currentYear) {
    document.getElementById('year-error').textContent = 'Must be in the past';
    valid = false;
  }


  if (valid) {
    // Calculate age
    const today = new Date();
    let ageYears = today.getFullYear() - year;
    let ageMonths = today.getMonth() - (month - 1);
    let ageDays = today.getDate() - day;

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    document.getElementById("totaldays").textContent = ageDays
    document.getElementById("totalmonths").textContent = ageMonths
    document.getElementById("totalyears").textContent = ageYears
  }
  else{
    daybox.style.borderColor = "red";
    monthbox.style.borderColor = "red";
    yearbox.style.borderColor = "red";
    (document.getElementsByClassName("labels")[0]).style.color = "red";
  }
}