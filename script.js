$(document).ready(readyNow);

console.log('JS Working');

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
  $('#firstName').val('');
  $('#lastName').val('');
  $('#id').val('');
  $('#title').val('');
  $('#annualSalary').val('');
  if (addFirst === '' || addLast === '' || addID === '' || addTitle === '' || addAnnualSalary === '' ) {
      console.log('Error. Missing an Input');
      alert('Missing Input')
  }
  //creates a new employee object i.e. neo
  const neo = {
    firstName: addFirst,
    lastName: addLast,
    id: addID,
    title: addTitle,
    annualSalary: addAnnualSalary
  }
  console.log('New employee added');
  
  //stores annual salary in an array for total monthly 
  employeeSalaries.push(neo.annualSalary)

  //appends neo info to DOM
  $('#newEmployee').append(
    `<tr>
      <td>${neo.firstName}</td>
      <td>${neo.lastName}</td>
      <td>${neo.id}</td>
      <td>${neo.title}</td>
      <td>${neo.annualSalary}</td>
      <td><button id='getRid' class = 'getRid'>Delete</button></td>
     </tr>`);
}

// does the math to figure out the total monthly and appends it to the DOM
// adds a red background if total is > 20000
function totalMonthly() {
  let total = 0;
  for (let i of employeeSalaries) {
    total += Number(i);
  }

  //this if statements breaks sometimes. Some sort of bug
  //it'll work initially and then after two dozen page refreshes it stops
  //if I comment it out and then back in that fixes it for some reason
  if (total >= 20000) {
    let el = $('#mt');
    el.empty();
    el.append(`<h4> Total Monthly: $` + Math.round(total/12) + `!</h4>`)
    $('.mt').addClass('red')
  }
  console.log('Total Monthly working');
}

// Deletes the row of the button you click
function getRid() {
  ($(this).parent().parent().remove());
  console.log('Get Rid is running');
  console.log($(this).parent().parent(), 'has been deleted');
}
