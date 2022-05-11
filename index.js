// getname() {
//     inquirer.prompt([
//       {
//         type: "input",
//         message: "Type an employee's full name here.",
//         name: "employeeName",
//         // validate will ensure that required sections must be answered by the user
//         validate(answer) {
//           if (!answer || answer.split("").indexOf(" ") !== -1) {
//             return "You must type the employee's first and last name in this field.";
//           }
//           return true;
//         },
//       },
//     ]);
//   }
//   getID() {
//     inquirer.prompt([
//       {
//         type: "input",
//         message: "Type an employee's ID here.",
//         name: "employeeID",
//         // validate will ensure that required sections must be answered by the user
//         validate(answer) {
//           if (!answer || answer.length !== parseInt(answer).length||answer.length !== 7) {
//             return "You must type a numeric, 7-digit ID in this field.";
//           }
//           return true;
//         },
//       },
//     ]);
//   }
//   getEmail() {
//     inquirer.prompt([
//       {
//         type: "input",
//         message: "Type an employee's email here.",
//         name: "employeeName",
//         // validate will ensure that required sections must be answered by the user
//         validate(answer) {
//           if (!answer || answer.split("").indexOf("@") !== -1) {
//             return "You must type an email in this field.";
//           }
//           return true;
//         },
//       },
//     ]);
//   }
//   getRole() {
//     inquirer.prompt([
//       {
//         type: "input",
//         message: "Type an employee's role here.",
//         name: "employeeName",
//         // validate will ensure that required sections must be answered by the user
//         validate(answer) {
//           if (!answer) {
//             return "You must type a role in this field.";
//           }
//           return true;
//         },
//       },
//     ]);
//   }
