import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartnshort-jscode',
  templateUrl: './smartnshort-jscode.component.html',
  styleUrls: ['./smartnshort-jscode.component.scss']
})
export class SmartnshortJscodeComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
    this.foo();
  }

  foo(){
    // #1-Null, Undefined, Empty checks
    
    let productName;
    // Longhand version
    // if(productName !== undefined || productName !== "" || productName !== null){
    //   console.log(productName)
    // }

    // Shorthand version
    if(productName){
      console.log(productName)
    }

    // #2-Multiple conditions

    //longhand
    let x:any;
    if (x === 'orange' || x === 'red' || x === 'gray') {
      // do something'
      console.log("If multi ||");
    }

    //shorthand
    if (['orange', 'red', 'gray'].includes(x)) {
      // do something
      console.log("If multi || check with includes");
    }


    // #3-Loops
    let productsList = ["Prod 1", "Prod 2", "Prod 3", "Prod 4"]
    //longhand
    for (var i = 0; i < productsList.length; i++){
      // do things
      console.log(i);
    }

    //shorthand (to access the index)
    for (let i in productsList){
      // do things
      console.log(i);
    }
    // or (to access productsList's elements)
    for (let i of productsList){
      // do things
      console.log(i);
    }

    // or with foreach
    productsList.forEach(element => {
      // do things
      console.log(element);
    });

    // #4-Implicit return

    //longhand
    let quantity = 2, productPrice = 3;
    function getProductPrice() {
      return quantity * productPrice;
    }

    console.log(getProductPrice());

    //shorthand 
    let getProductPriceValue = () => quantity * productPrice;
    console.log(getProductPriceValue());

    // #5-Spread Operator

    const team = ['John', 'Adam', 'Yan'];

    //longhand 
    //- joining
    const group = ['Sam', 'Chris', 'Sarah'].concat(team);
    //- cloning
    const newGroup = team.slice();


    //shorthand 
    //- joining
    const group1 = ['Sam', 'Chris', 'Sarah', ...team];
    //- cloning
    const newGroup1 = [...team];

    // #6-Arrow Function

    //longhand
    function welcomeMessage(name:any) {
      console.log('Welcome ', name);
    }

    welcomeMessage("Harsha")

    //shorthand
    var welcomeMessageArrowFunc = (name:any) => console.log(name);
    welcomeMessageArrowFunc("Harsha");

    // #7-Template Literals
    let winnerName ="Harsha",gift="Nothing";
    // longhand
    const winnerMsg = 'Congrats to the winner: ' + winnerName + ', you got a ' + gift;
    console.log(winnerMsg);
    // shorthand
    const winnerMsgAlt = `Congrats to the winner: ${winnerName}, you got a ${gift}`;
    console.log(winnerMsgAlt);

    // #8-Multi-line String

    // Longhand
    const msg = 'Working in conjunction with humanitarian aid agencies,\n\t'
    + 'we have supported programmes to help alleviate human suffering. \n\t';

    //Shorthand
    const msgAlt = `Working in conjunction with humanitarian aid agencies,
    we have supported programmes to help alleviate human suffering.`;

    // #9-Array.find

    //Longhand
    const animals = [
      { name: 'octopus', animalClass: 'invertebrates' },
      { name: 'shark', animalClass: 'fish' },
      { name: 'toad', animalClass: 'amphibians' },
      { name: 'snake', animalClass: 'reptiles' }
    ];

    // let findReptileVal = function findReptile(name:any){
    //   for(let i=0; i < animals.length; ++i){
    //       if(animals[i].animalClass === 'reptiles' && animals[i].name === name){
    //       return animals[i]
    //       }
    //   }
    // }

    // Shorthand
    let findReptileAlt = (name:any='', animalClass:any = '') => (
      animals.find(animal => animal.animalClass === animalClass || animal.name === name)
    );
    
    console.log(findReptileAlt("snake"))
  }

}
