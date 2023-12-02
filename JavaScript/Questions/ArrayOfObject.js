// Question: Ek Array of object banao or then usme filteration karo based on the condition uske baad jo filter data mile usse ek new array of object create karke print karo

let students = [
  { name: "Anuj", age: 21, class: "10th", scored: "75%", rollno: "12345" },
  { name: "Rahul", age: 21, class: "10th", scored: "65%", rollno: "45345" },
  { name: "Ramesh", age: 21, class: "10th", scored: "85%", rollno: "87568" },
  { name: "Nihel", age: 21, class: "10th", scored: "95%", rollno: "53656" },
  { name: "Viky", age: 21, class: "10th", scored: "74%", rollno: "25435" },
];

let filterData = [];
students.forEach((val) => {
  if (val.scored >= "75%") {
    filterData.push(val);
  }
});

let newObj = [];
filterData.forEach((val) => {
  newObj.push({
    name: val.name,
    rollno: val.rollno,
    scored: val.scored,
  });
});

// console.log("New Object", newObj);

// iife -> Immediately function expression

// var ans = (() => {
//   let priveteVal = 12;
//   return {
//     getter: () => {
//       console.log("Private Value", priveteVal);
//     },
//     setter: (val) => {
//       priveteVal = val;
//     },
//   };
// })();

// console.log(ans);
// ans.getter();
// ans.setter(10);
// ans.getter();
