// Homework pt1:
// Create a class that represents anything you like
// Create a class that extends the first class
// Create a class that extends the second class

class Food {
  constructor(meal) {
    this.meal1 = meal;
  }

  meal() {
    return this.meal1;
  }
}

class Meat extends Food {
  constructor(meal, sideOrder) {
    super(meal);
    this.sideOrder = sideOrder;
  }

  sides() {
    return this.sideOrder;
  }
}

class Animal extends Meat {
  constuctor(meal, sideOrder, typeOfMeat) {
    // super(meal, sideOrder); <-- for some reason, it crashes here
    this.typeOfMeat = typeOfMeat;
  }

  range() {
    return this.typeOfMeat;
  }
}

// Create an instance of the final class
const _finalMeal = new Animal("Dinner", "Green Beans", "Beef");
console.log(
  "Meal:",
  _finalMeal.meal() + ", " + "Side Order:",
  _finalMeal.sides() + ", " + "Type of Meat:",
  _finalMeal.range()
);

// Modify the classes above to use get/set

//  -------------------------------------------------------------------------------------

// Homework pt2:
// 1. Create a function in a second file, use export to export it
// The name of the file is : demo-export.js & hw-import.html

// 2. In your main file import and execute the function
import { math } from "./demo-export.js";
console.log(math(4, 5, 6));

// 3. Write out a fat arrow function using the same line to return (as in no return keyword).
const multiply = (x, y, z) => x * y * z;

// 4. Add default parameters to the above function
const multiply1 = (x = 3, y = 4, z = 5) => x * y * z;
console.log(multiply1());

// 5. Create an object that has a child object, that itself has a child object (3 levels).
const obj = {
  name: "Khes",
  placesLived: ["The Bahamas", "USA", "United Kingdom", "France"],
  location: {
    country: "France",
    city: {
      north: "Lille",
      east: "Strasbourg",
      south: "Marseille",
      west: "Nantes",
    },
  },
};

// 6. Use object destructuring to pull out the parts at level 3
// 7. Add a default value to the above destructuring
const { north, east, south, west, central = "Paris" } = obj.location.city;
console.log(
  `I would like to visit ${north}, ${east}, ${south} & ${west}. At the moment, I live in ${central}!`
);

// 8. Destructure an array
const [place1, place2, place3, place4] = obj.placesLived;
console.log(`I lived in ${place1} for most of my life.`);

// 9. Create two objects. Add more than two keys/values to both objects.
// Copy all the items from the first object into the second object. Use the spread operator.
const obj1 = {
  activity: "Mountain-climbing",
  site: "Chichen Itza",
};

const obj2 = {
  food: "Tacos",
  country: "Mexico",
};

const copy1 = { ...obj1, ...obj2 };
console.log(copy1);

// 10. Send 5 arguments to a function and use the rest operator to group them

const doTheMath = (...numbers) => {
  console.log(numbers);
};

doTheMath(10, 20, 30, 40, 50);

// 11. Add a function to one of the objects, use the object method shorthand.

const objNew = {
  name: "Khes",
  age: 25,
  monthOfBirth: "October",
  person() {
    return this.name + this.age + this.monthOfBirth;
  },
};
