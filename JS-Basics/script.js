/*
    Messages
    var name='Marcos';
    var age=20;

    alert(name + ' '+age);  
    var input = prompt('What\'s your last name?');
    console.log(input);
*/

/*
    Operators
    
    var a,b;
    a=10;
    b=11;

    var max = a<b;

    console.log(typeof max);
*/
/*
var now = 2020;

var born=1999;

var fullAge = (now-born)>21;

console.log(fullAge);

var x,y;

x=y=5;
console.log(x,y)

*/

/*

Code challenge 1

var johnMass = 60;
var markMass = 70;

var johnHeig = 1.69;
var markHeig = 1.70;


johnBMI = johnMass/(johnHeig^2);

markBMI = markMass/(markHeig^2);

var boolVal = markBMI>johnHeig;

console.log('Is mark\'s BMI higher than John\'s '+boolVal);

*/

/*
var firstName ='Marcos';
var age=9;

if(age>=18){
    console.log(firstName+' adult');
}else if(age<18 && age>9){
    console.log(firstName+' young');
}else{
    console.log(firstName+' child');
}
*/

/*
ternary operator
var age=17;

var drunk = (age>=18)?true:false;

console.log(drunk);

*/

/*
//switch statement
var job='nurse';

switch(job){
    case 'doctor':
    case 'nurse':
            console.log('Girls are '+job);
        break;
    case 'engineer':
            console.log('Guys are '+job);
        break;
    default:
        console.log('Job is missing');
}

*/
/*
//functions

function calculateAge(birthYear){
    return 2020-birthYear;
}

console.log(calculateAge(1999));

//function expressions

var calculateAge = function(birthYear){
    return 2020-birthYear;
}

console.log(calculateAge(1999));

*/
/*
//arrays

var names = ['Marcos','Marisol','Jony'];
var years = new Array(1999,1998,1997);

console.log(names[0]);
console.log(names);
console.log(names.length);

names[2]='Yamilette';

console.log(names);


var person = ['Marcos',20,true,1.78];

console.log(person);

person.push('white');//push adds an element to the end of the array
console.log(person);

person.unshift('Leon');//it adds an element to the beginning of the array
console.log(person);

person.pop();//pop removes last element of the array
console.log(person);

person.shift();//it removes first element
console.log(person);

console.log(person.indexOf(1.78)); //looks weather the argument of the function is on the array

*/

/*
//tipCalculator
function tipCalculator(value){

    if(value<50) return value*0.2;
    else if(value>=50 && value<=200) return value*0.15;
    else return value*0.1;
}

var arrValues=[124,48,268];
var arrTips=[],arrFinal=[];

for(i=0;i<3;i++){
    arrTips.push(tipCalculator(arrValues[i]));
    arrFinal.push(arrValues[i]+arrTips[i]);
}

console.log(arrTips,arrFinal);
*/

//Objects and attributes
/*
//in order to acces any attibute you simply have to use dot notation , e. person.name
//object literal
var person={
    name: 'Marcos',
    age: 20,
    email: 'marcosleonrs@gmail.com',
    friends: ['Jony','Humbert','Ariel']
};

console.log(person.email);
console.log(person['name']);

person.age=21;
person['email']='marcosleonr03@gmail.com';

console.log(person); 

//new Object syntax
var child = new Object();
child.name='Jaun';
child.birthYear=1999;
child.favColor='red';
child['sport']='soccer'; 
console.log(child);
*/
//objects and methods
/*
var person={
    //attributes
    name: 'Marcos',
    birthYear:1999,
    email: 'marcosleonrs@gmail.com',
    friends: ['Jony','Humbert','Ariel'],

    //methods
    calcAge: function(){
        //return 2020-this.birthYear;
        this.age=2020-this.birthYear;
    }

};

//person.age=person.calcAge();
person.calcAge();
console.log(person);
*/

//coding challenge 4

/*

var person1={
    name: 'Mark',
    mass: 110,
    height: 1.95,

    calcBMI: function(){
        return this.mass/(this.height*this.height);
    }
};

person1.BMI=person1.calcBMI();

var person2={
    name: 'John',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        return this.mass/(this.height*this.height);
    }
};

person2.BMI=person2.calcBMI();

//
if(person1.calcBMI()>person2.calcBMI()){
if(person1.BMI>person2.BMI){
    console.log(person1.name+' '+person1.BMI);
}else if(person2.BMI>person1.BMI){
    console.log(person2.name+' '+person2.BMI);
}else{
    console.log(person1.name+' '+person1.BMI+' '+person2.name+' '+person2.BMI);
}

*/

//loops

//continue word skips the current iteration but keeps inside of the loop
//break word skips the current iteration and also gets out of the loop

var johnObj={
    bills:[124,48,268,180,42],
    tips:[],
    totals:[],
    johnAv:0,

    tipCalculator:function(){
        for(var i=0;i<this.bills.length;i++){
          
            var tip=0,cbill=this.bills[i];  
            if(cbill<50)tip=cbill*0.2;
            else if(cbill>=50 && cbill<=200)tip=cbill*0.15;
            else tip=cbill*0.1;

            this.johnAv+=tip;
            this.tips.push(tip);
            this.totals.push(cbill+tip);
        }
        this.johnAv/=this.bills.length;
    }
}

johnObj.tipCalculator();

console.log(johnObj.tips,johnObj.totals,johnObj.johnAv);

function tipCalcMark(arr){
    var acum=0;
    for(var i=0;i<arr.length;i++){
        var cbill=arr[i],tip=0;
        if(cbill<100)tip=cbill*0.2;
        else if(cbill>=100 && cbill<300)tip=cbill*0.1;
        else tip=cbill*0.25;
        
        acum+=tip;
    }
    return acum/arr.length;
}

var mbills=[77,5,110,45];

markAv=tipCalcMark(mbills);

console.log(markAv);
if(johnObj.johnAv>markAv)console.log('John');
else if(johnObj.johnAv<markAv)console.log('Mark');
else console.log('draw');
















