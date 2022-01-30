$(document).ready(readyNow);

console.log('JS Working');

const maxEmployees = 10;
employeeSalaries = []

function readyNow(){
$('#submitButton').on('click', grabEmployeeInfo);
// $('#submitButton').on('click', addNewEmployee);
$('#submitButton').on('click', totalMonthly);
$('#newEmployee').on('click', '#getRid', getRid);
}

// Takes input from user, turns them into values to be added to an object
function grabEmployeeInfo() {  
  let addFirst = $('#firstName').val();
  let addLast = $('#lastName').val();
  let addID = $('#id').val();
  let addTitle = $('#title').val();
  let addAnnualSalary = $('#annualSalary').val();
 
  //creates object
  const nep = {
    firstName: addFirst,
    lastName: addLast,
    id: addID,
    title: addTitle,
    annualSalary: addAnnualSalary
  }

  employeeSalaries.push(nep.annualSalary)

  //appends object info to DOM
  $('#newEmployee').append(
    `<tr>
      <td>${nep.firstName}</td>
      <td>${nep.lastName}</td>
      <td>${nep.id}</td>
      <td>${nep.title}</td>
      <td>${nep.annualSalary}</td>
      <td><button id='getRid'>Delete</button></td>
     </tr>`);
}

function totalMonthly() {
  let total = 0;
  for (let i of employeeSalaries) {
    total += Number(i);
  }
  if (total < 20000) {
    let el = $('#mt');
    el.empty();
    el.append(`<h4> Total Monthly: ` + Math.round(total/12) + `</h4>`)
    $('.mt').addClass('white')
  }
  if (total >= 20000) {
    let el = $('#mt');
    el.empty();
    el.append(`<h4> Total Monthly: ` + Math.round(total/12) + `</h4>`)
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

// Adds those values to an object and inputs them into the addNewEmployee function
// function newEmployee(addFirst, addLast, addID, addTitle, addAnnualSalary){
//   console.log('New Employee Info:', addFirst, addLast, addID, addTitle, addAnnualSalary );
//   const nep = {
//     firstName: addFirst,
//     lastName: addLast,
//     id: addID,
//     title: addTitle,
//     annualSalary: addAnnualSalary
//   }
//  addNewEmployee(nep.firstName, nep.lastName, nep.id, nep.title, nep.annualSalary)
// }

// function addNewEmployee(first, last, id, title, salary) {
//   $('#newEmployee').append(
//     `<tr>
//       <td>${first}</td>
//       <td>${last}</td>
//       <td>${id}</td>
//       <td>${title}</td>
//       <td>${salary}</td>
//       <td><button id='getRid'>Delete</button></td>
//      </tr>`);
//   console.log('Append is working');
// }

// Pulls the info from the objects in the employeeArray and appends them to the table body

// function addNewEmployee() {
//   let el = $('#newEmployee')
//   el.empty();
//   for ( i of employeeArray) {
//     $('#newEmployee').append(
//    `<tr>
//      <td>${i.firstName}</td>
//      <td>${i.lastName}</td>
//      <td>${i.id}</td>
//      <td>${i.title}</td>
//      <td>${i.annualSalary}</td>
//      <td><button id='getRid'>Delete</button></td>
//     </tr>`);
//   }
//   console.log('Append is working');
// }



// Adds those values to an object and pushes the object to an array of objects
// function newEmployee(addFirst, addLast, addID, addTitle, addAnnualSalary){
//   console.log('New Employee Info:', addFirst, addLast, addID, addTitle, addAnnualSalary );
//   const newEmployeeObject = {
//     firstName: addFirst,
//     lastName: addLast,
//     id: addID,
//     title: addTitle,
//     annualSalary: addAnnualSalary
//   }
//   employeeArray.push(newEmployeeObject)
//   console.log(employeeArray);
// }

// // Pulls the info from the objects in the employeeArray and appends them to the table body

// function addNewEmployee() {
//   let el = $('#newEmployee')
//   el.empty();
//   for ( i of employeeArray) {
//     $('#newEmployee').append(
//    `<tr>
//      <td>${i.firstName}</td>
//      <td>${i.lastName}</td>
//      <td>${i.id}</td>
//      <td>${i.title}</td>
//      <td>${i.annualSalary}</td>
//      <td><button id='getRid'>Delete</button></td>
//     </tr>`);
//   }
//   console.log('Append is working');
// }

// function addNewEmployee() {
//   let el = $('#newEmployee')
//   el.empty();
//   for ( i of employeeArray) {
//     el.append([
//       `<tr class = 'bloc'>`,
//        `<td>` + i.firstName + `</td>`,
//        `<td>` + i.lastName + `</td>`,
//        `<td>` + i.id + `</td>`,
//        `<td>` + i.title + `</td>`,
//        `<td>` + i.annualSalary + `</td>`,
//        `<button id = 'getRid'>Delete</button>`,
//       `</tr>`
//     ])
//   }
//   console.log('Append is working');
// }
 
// loop through the array and add up all the annualSalaries and appends them to the Dom
// also the if monthly total if > 20,000 and appends monthly totals class and turns it's 
// background red

// function totalMonthly() {
//   let total = 0;
//   for (let i of employeeArray) {
//     total += Number(i.annualSalary);
//   }
//   if (total < 20000) {
//     let el = $('#mt');
//     el.empty();
//     el.append(`<h4> Total Monthly: ` + Math.round(total/12) + `</h4>`)
//     $('.mt').addClass('white')
//   }
//   if (total >= 20000) {
//     let el = $('#mt');
//     el.empty();
//     el.append(`<h4> Total Monthly: ` + Math.round(total/12) + `</h4>`)
//     $('.mt').addClass('red')
//   }
//   console.log('Total Monthly working');
// }



