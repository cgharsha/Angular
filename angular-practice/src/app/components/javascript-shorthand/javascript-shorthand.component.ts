import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-shorthand',
  templateUrl: './javascript-shorthand.component.html',
  styleUrls: ['./javascript-shorthand.component.scss']
})
export class JavascriptShorthandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Swap two variables
    let numOne = 1, numTwo = 2;

    // Normal form
    const temp = numOne;
    numOne = numTwo;
    numTwo = temp;
    console.log(numOne, numTwo);

    // Short form
    [numOne, numTwo] = [numTwo, numOne]
    console.log(numOne, numTwo)

    // Ternary operator
    const maxSpeed = 120;
    let speed = 118;
    
    // Normal form
    if(speed > maxSpeed){
      console.log("Over Speed")
    }
    else{
      console.log("Normal Speed")
    }

    // Short form
    speed > maxSpeed ? console.log("Over Speed") : console.log("Normal Speed");

    // Variable declaration

    // Normal form
    let numbOne;
    let numbTwo = 1;

    // Short form
    let numbrOne, numbrTwo = 1;

    // Assign values to multiple variable

    // Normal form
    let numberOne = 1;
    let numberTwo = 2;
    let numberThree = 3;

    // Short form
    let [numbeOne, numbeTwo, numbeThree] = [1, 2, 3];

    // Default value

    // Normal form
    let finalName;
    let name = '';
    if(name !== null && name !== undefined && name !== '')
    {
      finalName = name;
    }
    else { finalName = 'Harsha'}
    console.log(finalName);

    // Short form
    let resName = '';
    let resFinalName = resName || 'Harsha';
    console.log(resFinalName);

    // Template literals
    let myName = 'Harsha';

    // Normal form
    console.log("Hello "+myName+". How are you?");

    // Short form
    console.log(`Hello ${myName}. How are you?`);

    // Arrow function
    let randomNumber = 10;

    //  Normal form
    function isOdd(num: number){
      return num%2 == 1;
    }
    console.log(isOdd(randomNumber));

    // Short form
    const oddNumb = (numb: number) => {return numb%2 == 1};
    console.log(oddNumb(randomNumber));

    // Multiline string
    let str;

    // Normal form
    str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n"+ "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n"+ "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    console.log(str);

    // Short form
    str = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    console.log(str);

    // Multiple conditions

    // Normal form
    let valueCheck:any = 1;
    if(valueCheck === 1 || valueCheck === 'one' || valueCheck === 2 || valueCheck === 'two' )
    {
      console.log("True");
    }

    // Short form
    if([1, 'one', 2, 'two'].indexOf(valueCheck) >= 0){
      console.log("True");
    }

    // Short form
    if([1, 'one', 2, 'two'].includes(valueCheck)){
      console.log("True");
    }

    // String to number conversion

    //  Normal form
    let total = parseInt('10');
    let sum = parseFloat('21.6');

    // Short form
    let shortTotal = +'10';
    let shortSum = +'21.6';

    // Object property assignment
    let newName = 'Harsha';
    let newAge = 32;

    // Normal form
    let normalObj = {newName:newName, newAge: newAge}
    console.log(normalObj);

    // Short form
    let shortObj = {newName, newAge};
    console.log(shortObj);

    // Maximum and minimum number of an array
    const arr = [12, 80, 5, 24]; 

    // Normal form

    let min = arr[0];
    for(let i=0; i<arr.length; i++)
    {
      if(min>arr[i])
      {
        min = arr[i];
      }
    }
    console.log(min);

    let max = arr[0];
    for(let j=0; j<arr.length; j++)
    {
      if(max<arr[j])
      {
        max = arr[j];
      }
    }
    console.log(max);

    // Short form
    let shortMin = Math.min(...arr);
    console.log(shortMin);

    let shortMax = Math.max(...arr);
    console.log(shortMin);

    // Exponent power

    //  Normal form
    const power = Math.pow(4, 2);
    console.log(power);

    // Short form
    const shortPower = 4**2;
    console.log(shortPower);

    // Double not

    // Normal form
    const floor = Math.floor(7.8)
    console.log(floor);

    // Short form
    const shortFloor = ~~7.8;
    console.log(shortFloor);

    //  String repeat
    let strRepeat = '';

    // Normal form
    for(let i=0; i<5; i++)
    {
      strRepeat += 'Harsha';
    }
    console.log(strRepeat);

    // Short form
    console.log('Harsha'.repeat(5));

    // For Loop
    let loopArr = [1, 2, 3, 4];

    // Normal form
    for(let i = 0; i < arr.length; i++)
    {
      console.log(loopArr[i]);
    }

    // Short form
    for(const val of loopArr){
      console.log(val);
    }

    for(const index in loopArr)
    {
      console.log(loopArr[index]);
    }

    // Get character from string
    let char = 'Harsha';

    // Normal form
    let charTemp = char.charAt(1);
    console.log(charTemp);
    
    // Short form
    let shortCharTemp = char[1];
    console.log(shortCharTemp);

    // Merge array
    let mergeArr = [1, 2, 3, 4];

    // Normal form
    let mergeArrNor = mergeArr.concat([10, 20]);
    console.log(mergeArrNor);

    // Short form
    let mergeArrSho = [...mergeArr, 10,20, ...[100, 200]];
    console.log(mergeArrSho);

    // If true
    let active = true;

    // Normal form
    if(active == true)
    {
      console.log(active);
    }

    // Short form
    if(active){
      console.log(active);
    }

    // Decimal base exponents
    for(let i = 0; i < 1000; i++){
      // console.log(i);
    }

    // Short form
    for(let i = 0; i < 1e0; i++){
      // console.log(i);
    }

    // Some evaluations

    // 1e0 === 1;
    // 1e1 === 10;
    // 1e2 === 100;
    // 1e3 === 1000;
    // 1e4 === 10000;
    // 1e5 === 100000;
    
    // Default parameter value

    // let l = 1;

    // Noemal form
    function volume(l:any, w:any, h:any){
      if(w === undefined) w = 3;
      if(h === undefined) h = 4;
      return l * w * h;
    }

    console.log(volume(2, undefined, undefined));

    // Short form
    let volumeSho = (l:any, w = 3, h =4 ) => l * w * h;
    console.log(volumeSho(2));

    // Object entries
    const person = {name: 'Harsha', age: 32, email: 'harshacg@yahoo.co.in'};
    const objEntriesArr = Object.entries(person);
    console.log(objEntriesArr);

    


  }

}
