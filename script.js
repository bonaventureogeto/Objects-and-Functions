// Function constructor
var john = {
  name: "John",
  yearOfBirth: 2000,
  job: "teacher",
};

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

  this.calculateAge = function () {
    console.log(2020 - this.yearOfBirth);
  };
};

Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

var john = new Person("John", 2000, "Techer");

john.calculateAge();

var jane = new Person("Ogeto", 1960, "Retired");

jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);

//Object.create

var personProto = {
  calculateAge: function () {
    console.log(2020 - this.yearOfBirth);
  },
};

var john = Object.create(personProto);

john.name = "John";
john.yearOfBirth = 2000;
john.job = "Teacher";

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 2000 },
  job: { value: "Designer" },
});

// /*
// // Primitives vs Objects

// //Primitives
var a = 20;
var b = a;

a = 100;

console.log(a);
console.log(b);

//Objects
var obj1 = {
  name: "JOhn",
  age: 20,
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//Functiions

var age = 29;
var obj = {
  name: "Ogeto",
  citu: "Nairobi",
};

function change(a, b) {
  a = 30;
  b.city = "Venice";
}

change(age, obj);

console.log(age);
console.log(obj.city);

// */

// //

// //

// ////////////////////////////////////
// //Passing Functions as arguments

// /*
var years = [1990, 1997, 1995, 2000, 2005];

function arrayCalc(arr, fn) {
  result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

function calculateAge(el) {
  return 2020 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);

console.log(fullAges);

console.log(rates);

// */

// //

// //

// //////////////////////////////////////
// // Functions returning functions

// /*
function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what UX design is? ");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log(name + ", what subject do you teach? ");
    };
  } else if (job === "Software Developer") {
    return function (name) {
      console.log("Which programming language do you use", name);
    };
  } else {
    return function (name) {
      console.log("Hello " + name + ", what do you do? ");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");
var elseQuestion = interviewQuestion("Pilot");

teacherQuestion("Ogeto");
designerQuestion("Ogeto");
elseQuestion("Ogeto");

interviewQuestion("Software Developer")("CodeBonaventure");

// */

// //

// //

// ///////////////////////////////////////////////
// //Immediately Invoked Function Expressions (IIFE)

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game();

(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// //

// //

// //

// /////////////////////////

// // Closures

function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function (yearOfBirth) {
    var age = 2020 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(60);
var retirementGermany = retirement(65);
var retirementKenya = retirement(60);

retirementUS(2000);
retirementGermany(2000);
retirementKenya(2000);

retirement(30)(2000);

function interviewQuestion(job) {
  return function (name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX design is? ");
    } else if (job === "teacher") {
      console.log(name + ", what subject do you teach? ");
    } else if (job === "Software Developer") {
      console.log("Which programming language do you use,", name);
    } else {
      console.log("Hello " + name + ", what do you do? ");
    }
  };
}

interviewQuestion("Software Developer")("CodeBonaventure");

//

// //

// //

// //

// //

// //////////////////////////////
// // Bind, Call and Apply

var john = {
  name: "John",
  age: 20,
  job: "Developer",
  presentation: function (style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          " ladies and gentlemen! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old."
      );
    } else if (style === "Friendly") {
      console.log(
        "Hey! What's up? I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay +
          "."
      );
    }
  },
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer",
};

john.presentation("formal", "morning");

john.presentation.call(emily, "Friendly", "afternoon");
// john.presentation.apply(emily, ["Friendly", "afternoon"]);

var johnFriendly = john.presentation.bind(emily, "Friendly");

johnFriendly("Morning");
johnFriendly("night");
