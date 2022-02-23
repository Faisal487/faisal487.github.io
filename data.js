
function showEmployees(val){
  var strEmployeeTable = ""; 
  
  strEmployeeTable = '<table class="table table-hover table-bordered">';
  strEmployeeTable = strEmployeeTable + '<thead class="thead-dark">';
  strEmployeeTable =
    strEmployeeTable +
    '<tr><th scope="col">Employee No.</th><th scope="col">First</th><th scope="col">City</th><th scope="col">State</th></tr>';
  strEmployeeTable = strEmployeeTable + '<thead>';
  
  strEmployeeTable = strEmployeeTable + '<tbody>';
  if (val == 1) {
    for (var i = 0; i < employeeData.length; i = i+2) {
      strEmployeeTable = strEmployeeTable + '<tr class="bg-info"><th scope="row">' +[i + 101] +"</th><td> " +employeeData[i].First +"</td><td> " +employeeData[i].Place +"</td><td> " + employeeData[i].State + "</td><tr>";
    }
  }else if(val==2){
     for (var i = 1; i < employeeData.length; i = i + 2) {
       strEmployeeTable =strEmployeeTable +'<tr class="bg-info"><th scope="row">' +[i + 101] +"</th><td> " +
         employeeData[i].First +
         "</td><td> " +
         employeeData[i].Place +
         "</td><td> " +
         employeeData[i].State +
         "</td><tr>";
     }
  }else {
    for (var i = 0; i < employeeData.length; i++) {
      strEmployeeTable =
        strEmployeeTable +
        '<tr class="bg-info"><th scope="row">' +
        [i + 101] +
        "</th><td> " +
        employeeData[i].First +
        "</td><td> " +
        employeeData[i].Place +
        "</td><td> " +
        employeeData[i].State +
        "</td><tr>";
    }
  }
  
  strEmployeeTable = strEmployeeTable + '</tbody>';
  strEmployeeTable = strEmployeeTable + '</table>';

document.getElementById('place').innerHTML = strEmployeeTable;
}

function clear1() {
   document.getElementById("place").innerHTML = "";
}

function getValue() {
  const val = document.getElementById('search').value;
  console.log(val);
  var strEmployeeTable = ""; 
  strEmployeeTable = '<table class="table table-hover table-bordered">';
  strEmployeeTable = strEmployeeTable + '<thead class="thead-dark">';
  strEmployeeTable = strEmployeeTable + '<tr><th scope="col">Employee No.</th><th scope="col">First</th><th scope="col">City</th><th scope="col">State</th></tr>';
  strEmployeeTable = strEmployeeTable + "<thead>";

  strEmployeeTable = strEmployeeTable + "<tbody>";
  strEmployeeTable =
    strEmployeeTable +
    '<tr class="bg-info"><th scope="row">' +
    [val] +
    "</th><td> " +
    employeeData[val - 101].First +
    "</td><td> " +
    employeeData[val-101].Place +
    "</td><td> " +
    employeeData[val-101].State +
    "</td><tr>";
  
  strEmployeeTable = strEmployeeTable + "</tbody>";
  strEmployeeTable = strEmployeeTable + "</table>";

  document.getElementById("place").innerHTML = strEmployeeTable;
}

var employeeData;

employeeData = [
  {
    First: "Ankit",
    Last: "Gupta",
    Place: "Firozabad",
    State: "Uttar Pradesh"
  },
  {
    First: "Jyotilakshmi",
    Last: "V",
    Place: "Rajapalayam",
    State: "Tamil Nadu"
  },
  {
    First: "Udhay",
    Last: "Kumar",
    Place: "Bangalore",
    State: "Karnataka"
  },
  {
    First: "Harsh",
    Last: "Singh",
    Place: "New Delhi",
    State: "Delhi"
  },
  {
    First: "Prajwal",
    Last: "Karki",
    Place: "Kolkata",
    State: "West Bengal"
  },
  {
    First: "Ramesh",
    Last: "Sagar",
    Place: "Chennai",
    State: "Tamil Nadu"
  },
  {
	First: "Himanshu",
    Last: "Kumar",
    Place: "Indore",
    State: "Madhya Pradesh"  
  },
  {
	First: "Ghanshyam",
    Last: "Bhatt",
    Place: "Lucknow",
    State: "Uttar Pradesh"   
  },
  {
	First: "Abhishek",
    Last: "Kumar",
    Place: "Bhopal",
    State: "Madhya Pradesh"   
  },
  {
	First: "Shreya",
    Last: "Chopra",
    Place: "Mumbai",
    State: "Maharashtra"   
  }
];






// let newElement = document.createElement('h6');
    // document.body.appendChild(newElement);
    // newElement.innerText = emp.First + " , " + emp.Place;
		// const heading = document.createElement("h6");
    //     heading.innerText = emp.First + " , " emp.Place;
    //     document.body.appendChild(heading);