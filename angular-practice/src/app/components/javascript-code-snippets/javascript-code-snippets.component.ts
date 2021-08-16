import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-code-snippets',
  templateUrl: './javascript-code-snippets.component.html',
  styleUrls: ['./javascript-code-snippets.component.scss']
})
export class JavascriptCodeSnippetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Loop through an object

    // Simple way
    const person = { name: "Harsha", Age: 32, Gender: "Male" };
    for (const property in person) {
      if(person.hasOwnProperty(property)){
        // console.log(person[property])
      }
      // console.log({property}:person[property])
      // console.log(`${property}: ${person[property]}`);
    }

    // Another way
    const anotherPerson = {
      Name: 'Harsha',
      Age: 32,
      Gender:"Male"
    };

    for (const [key, value] of Object.entries(anotherPerson)) {
      console.log(`${key}: ${value}`);
    }

    // Find in an array of objects.

    const students = [
      {name: 'Harsha', roll: 2},
      {name: 'Deepika', roll: 10},
      {name: 'Vicky', roll: 5}
    ];
    
    function search(student:any) {
      return student.name=== "Deepika";
    }
    
    console.log(students.find(search));
    // { name: 'Deepika', roll: 10 }

    // Sorting an array

    // sort alphabetically
    const name = ['Som', 'Deepika', 'Nach', 'Harsha'];
    const arr = [1, 30, 4, 21, 100000];
    name.sort();
    console.log(name);

    // sort numerically
    arr.sort(function(a, b) {
      return a - b;
    });

    console.log(arr);

    // String reverse

    // reverse using basic functions
    function reverseBasicFunc(string:any) {
      return string.split("").reverse().join("");
    }
    console.log(reverseBasicFunc('Harsha'));

    // reverse using loop
    function reverseUsingLoop(string:any) {
      var newString = "";
      for (var i = string.length - 1; i >= 0; i--) {
          newString += string[i];
      }
      return newString;
    }
    console.log(reverseUsingLoop('Harsha'));

    // reverse using recursion function
    function reverseUsingRecursion(string:any) {
    if (string === "")
      return "";
    else
      return reverseBasicFunc(string.substr(1)) + string.charAt(0);
    }
    console.log(reverseUsingRecursion('Harsha'));

    // Find the largest number of an array.

    const array1 = [1, 3, 2];
    console.log(Math.max(...array1));
    // expected output: 3

    // Merge arrays

    let arrOne = [1,3,5];
    let arrTwo = [2,4,6];
    // first way
    let combine = arrOne.concat(arrTwo) ;
    console.log(combine);
    // second way
    combine = [...arrOne,...arrTwo];
    console.log(combine);

    // Error handling

    try {
      // try_statements
    }
    catch (exception_var) {
      // catch_statements
    }
    finally {
      // finally_statements
    }

    // Most repeated no in an array.

    function mostRepeated(array:any){
        return array.sort((a:any,b:any) =>
              array.filter((v:any) => v===a).length
            - array.filter((v:any) => v===b).length
        ).pop();
    }

    console.log(mostRepeated(['Harsha', 'Deepika', 'Nach', 'Soms'])); // Soms

    // Function chaining

    var object = {
      res: 0,
      add: function(a:any, b:any) {
        this.res = a + b; 
        return this;
      },
    
      multiply: function(c:any) {
        this.res = this.res * c;
        return this;
      } 
    };
    
    object.add(5, 10).multiply(10)
    console.log(object.res)

    // Shallow Copy

    const user = {
      name: "Harsha",
      info: {
        father: "Gopalkrishna",
        age: 32,
        email: "harshacg@yahoo.co.in"
      },
    };

    const userAlt = {
      name: "Harsha",
      info: {
        father: "Gopalkrishna",
        age: 32,
        email: "harshacg@yahoo.co.in"
      },
    };
    
    var copy = { ...user };
    copy.info.father = "GK";
    
    console.log("original: ", user.info);
    console.log("copy:", copy.info);

    // with Object.assign

    var copyAlt = Object.assign({}, userAlt);
    copyAlt.info.father = "GK";

    console.log("original: ", userAlt.info);
    console.log("copy:", copyAlt.info);

    // JavaScript Hoisting

    var userName = "Harsha";
    var age = 26

    var info = function () {
      // console.log(userName);
      console.log(age);
      var userName = 20;
    };

    info();

    var userNameAlt = "Harsha";
    var ageAlt = 26

    var infoAlt = function () {
      var userNameAlt;
      console.log(userNameAlt);
      console.log(ageAlt);
      userNameAlt = 20;
    };

    infoAlt();

    // Value Assignment
    var numOne, numTwo = 10;
    function assign() {
    numOne = numTwo = 10;
    }
    
    const assignFunc = () => {
      numOne = numTwo = 10;
    };

    console.log(typeof assignFunc === 'undefined')
    
    console.log('numTwo', typeof numTwo === 'undefined');
    console.log('numOne', typeof numOne === 'undefined');

    // JavaScript this

    var obj = {
      name: "Harsha",
      func: function() {
          var self = this;
          console.log("outer function:  this.name = " + this.name);
          console.log("outer function:  self.name = " + self.name);
          // const someFunc = () => {
          //   console.log("inner function:  this.name = " + this.name);
          //   console.log("inner function:  self.name = " + self.name);
          // }
          // someFunc();
          (function() {
              // console.log("inner function:  this.name = " + this.name);
              // console.log("inner function:  self.name = " + self.name);
          }());
      }
      };
      obj.func();


      // Merging Objects and Arrays

      const persons = {
        firstName: "Harsha",
        lastName: "C G",
        
      };
      const job = {
        role:'Developer',
        level:'Lead'
        
      };
      let myPerson  = {
        ...persons,
        ...job
      };
      console.log(myPerson);

      // if there exists the same key in two or more objects?

      const person1 = {
        firstName: "Harsha",
        lastName: "C G",
        
      };
      const person2 = {
       firstName: "Deepika",
        lastName: "K B",
        
      };
      let myPersonAlt  = {
        ...person1,
        ...person2
      };
      console.log(myPersonAlt); // => {firstName: "Smith",lastName: "Doe"}

      // Merge Arrays

      const person3 = ["Harsha", "Acc"];
      const job3 = ["Developer"];
      const mergedArray = [...person3, ...job3];
      console.log(mergedArray); // => ["John", "Felix", "Accountant"]


      // Utilising the console object properly

      const person4 = ['Harsha', 'C G'];
      const job4 = ['Lead', 'Developer'];
      const mergeThings = function () {
        const mergedArray = [...person4, ...job4];
      };
      mergeThings();
      console.timeEnd('mytime'); // => mytime: 1ms

      // Destructuring

      const person5 = {
        name: 'Harsha',
        job: {
          role: 'Developer',
          position: { level: 'Lead', experience: '11 yrs' },
        },
      };
      const {experience}=person5.job.position
      console.log(experience) // => "11 yrs"

      const userInfo = {
        firstName: "Harsha",
        lastName: "C G",
      };
      const { firstName, lastName } = userInfo;
      console.log(firstName, lastName); // => "Harsha C G"

      // function getHobby({ hobby }) {
      //   return hobby;
      // }
      // const userInfo1 = {
      //   firstName: "Kevin",
      //   lastName: "Smith",
      //   hobby: "Football",
      // };
      // console.log(getHobby(userInfo1)); // => "Football"

      // Ternary Operator

      let day = 'Monday';
      if (day == 'Monday') {
        console.log('It is Monday');
      } else console.log('It is not Monday'); 

      day=='Monday' ? console.log('It is Monday'):console.log('It is not Monday');

      // Converting to String

      // Converting to String
      var num= 1 + "";
      console.log(num); // => "1"
      console.log(typeof num); // => "string"

      // Converting to Integer
      var num1:any = "1";
      num1 = +num1;
      console.log(num1); // => 1
      console.log(typeof num1);// => "number"

      // Converting to Boolean
      const mTrue  = !0; //true
      const mFalse = !1; //false
      const qFalse = !!0; // false














  }

}
