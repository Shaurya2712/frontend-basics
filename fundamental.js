/* Javascript(JS) is an object oriented programing language(OOPs)
 * standardization of JS is ECMA or ES6
 


-------------------Datatypes are of two types---------------------------

-> primitive                      -> Non primitive

  1. number                         1. Arrays
  2. string                         2. objects
  3. boolean                        3. Array of Objects
  4. null                           4. JSON
  5. undefiened
  6. symbol




------------------Methods of printing messages in JS------------------------

1. console.error( 'its a error' );
2. console.warn( 'its a warning' );
3. console.log( ' its a log' );



-----------------Array(non primitive) making in JS   '[ ]'------------------------------------
 
const myarray = [ 2,3,4,5,6,'hi',true, null ];

* array is an object in JS. it can store any datatype both primitive and non primitive
* an array can store array inside it as everthing in JS is objects
* array is a collection of objects and objects are stored in CONTIGUOUS nature
* if we give const myarray = [5] then JS make an array with space of 5 elements 

-> methods for updation in array by the CRUD

myarray.push(27);    = it pushes the '27' after the last index of array 

myarray.pop(27);     = it pops the '27' after the last index of array

myarray.splice(3,1); = it removes the 1 object at the 3rd index 


------------------copying of array in JS--------------

->given 
       const myarray = [1,2,3,4,5,6];
       const myarray2 = myarray;

       then myarray2 works as a pointer for myarray where if any 
       changes made will also be reflected in myarray

->now if we do according to to ES6 
       
       const myarray = [1,2,3,4,5,6];
       const myarray2 = [...myarray];

       now the array will be copied exactly and any changes 
       will be reflected independently

------------------Functions in JS-------------------------*/





//consitional statement  ==  && ===
const1 = 1
const2 =true




// ARROW FUNCTION ( => )--------------
//when executing 1 line of code we donot need to use curly bracket and 'return' is not needed
  const sum=(a,b)=> (a+b)  

//voting system
//M-> >=21
//f-> >=
const votesystem = (gender, age)=> {
    if(gender === 'M' && age >= 21 ){
        console.log('you can vote');
    }
    else if(gender ==='F' && age >= 18){
        console.log('you can vote');
    }
    else {
        console.log('underage');
    }
}

votesystem('M', 22);


//ANONYMOUS FUNCTIONS ( which has to be called one time only)

setTimeout()



//OBJECTS------------------------------------------
// key:value  pair

//1.OBJECT CONSTRUCTOR
const myObject = new Object()

myObject.name='sa';
myObject.number=23;
myObject.hobby='drawing';
console.log(myObject);

//2. use{ }
const student ={
    //key value
    rno: 0010,
    name: 'student name',
    age: 12,
    hobbies:[]

}


//3. ARRAY OF OBJECTS used to store large amt in form of aray containg objects
const stundents info =[{},{},{},{}]

//JSON javascript object notation  TEXT BASED(string type data)+----------------------------------

//advantages 
//-lightweight
//-follow separtation 
//-globally access


//DOM (document object model)----------------



//setTimeout 

//EVENTS
// identifier.addEventListner('eventName', () => {...})
document.querySelector('#submit-btn').addEventListener



//back ticks
//string values making
// " "  (double quotes)
// ' '  (single quotes)
// ` `  (back ticks )


//relationships------
//1 parent
//2 children
//3 sibling    previous / next element
//parent
console.log( document.querySelector('#heading').parentElement)
//children
console.log(document.get);
//sibling
//->  previousElementSibling
//-> nextElementSibling  


// create html
// create element using dom
const myImg = document