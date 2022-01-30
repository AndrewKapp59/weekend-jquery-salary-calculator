$(document).ready(readyNow);

console.log('JS Working');

const maxEmployees = 10;
employeeSalaries = []

function readyNow(){
$('#submitButton').on('click', NewEmployee);
$('#submitButton').on('click', totalMonthly);
$('#newEmployee').on('click', '#getRid', getRid);
}


function NewEmployee() {  
  
  // Takes input from user, turns them into values to be added to an object  
  let addFirst = $('#firstName').val();
  let addLast = $('#lastName').val();
  let addID = $('#id').val();
  let addTitle = $('#title').val();
  let addAnnualSalary = $('#annualSalary').val();
  
  //creates a new employee object i.e. neo
  const neo = {
    firstName: addFirst,
    lastName: addLast,
    id: addID,
    title: addTitle,
    annualSalary: addAnnualSalary
  }

  //pushes annual salary to an array for total monthly 
  employeeSalaries.push(neo.annualSalary)

  //appends neo info to DOM
  $('#newEmployee').append(
    `<tr>
      <td>${neo.firstName}</td>
      <td>${neo.lastName}</td>
      <td>${neo.id}</td>
      <td>${neo.title}</td>
      <td>${neo.annualSalary}</td>
      <td><button id='getRid'>Delete</button></td>
     </tr>`);
}

// does the math to figure out the total monthly and appends it to the DOM
// adds a red background if total is > 20000
function totalMonthly() {
  let total = 0;
  for (let i of employeeSalaries) {
    total += Number(i);
  }
  if (total < 20000) {
    let el = $('#mt');
    el.empty();
    el.append(`<h4> Total Monthly: $` + Math.round(total/12) + `</h4>`)
    $('.mt').addClass('white')
  }
  if (total >= 20000) {
    let el = $('#mt');
    el.empty();
    el.append(`<h4> Total Monthly: $` + Math.round(total/12) + `</h4>`)
    $('.mt').addClass('red')
  }
  console.log('Total Monthly working');
}

// Deletes the row of the button you click
function getRid() {
  ($(this).parent().parent().remove());
  console.log('this is', $(this).parent());
  console.log('Get Rid is running');
}




