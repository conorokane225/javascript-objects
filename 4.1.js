//Task 1
let user = {};
   user.name="john";
user.surname="smith";
user.name="pete";
delete user.name;

//Task 2
let schedule = {};

alert( isEmpty(schedule) ); 

schedule["8:30"] = "get up";

alert( isEmpty(schedule) );


function isEmpty(obj) {
for (let key in obj) {
    return false;
} return true;
}

//Task 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum=0;
  for (let key in salaries) {
    sum += salaries[key];
    }
    alert(sum);