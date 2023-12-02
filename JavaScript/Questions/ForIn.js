// Object par loop ke liye hota hai for-in loop

let user = {
  name: "Anuj",
  age: "21",
  city: "Prayagraj",
  state: "UP",
};

for (var key in user) {
  console.log(key, user[key]);
}
