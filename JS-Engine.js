"use strict";

/*                 1. A High-Level overview of JavaScript:

---> JS Definition: JavaScript is: 
                                  High-Level : Human Readable code.
                                  
                                  
                                  #


                                  Garbage-Collected : JS engine(like googles V8) has the ability to cleanup and optimize the code by collecting the unused and unneccessary objects etc.


                                  #




                                  Interpreted or JIT Compilation.



                                  #




                                  Multi-Paradigm: Paradigm means , an approach and mindset of structuring code which will direct your coding style and technique.

                                  There are 3 kinds of paradigm:
                                  1. Procedural prog:  simple and linear code.(no funcs and objects used.)
                                  2. OOP.(we make objects by defining clasess.)


                                  #




                                  3.Functional prog (where DRY coding starts, we use functions as variables and can return functions from functions most of the time.).
                                  we can pass a function into another function as an argument just like we did before , when we added an addEventListener function and then used 'click' and other func as an argument.




                                  #




                                  Prototype-Based object-oriented: prototype is like a template that we can call , like when we create an array , and used .push method, this .push method is basically defined in array prototype .



                                  #


                                  Dynamic: JS is also a dynamic language, because we don't have to define the data type of a variable,
                                  It becomes known at runtime.
                                  
                                  Here's also a twist , if we initializes a variable with integer value, but later when we change it to string or other value , it automatically changed , we don't need to define the data type like int or boolean or string in c c++ or other languages.
                                  

                                  But but but .... There is a controversy about this dynamically typed language , because some developers want js to be strognly-typed language as well because of the bugs and other problems.

                                  If You want to use strongly typed language , you can always look into TypeScript.

                                  

                                  #




                                  Single-Threaded & the Non-blocking event loop concurrency model:
                                  At the first , we need to know what thread is ? so basically the thread in computing is a set of instructions(our code etc) which is executed inside the cpu . 

                                  and in Mathematics the concurrency word is refered to a point at which three or more lines meet.

                                  so, we know that what the logic is here : How the JS engine handles multiple tasks happening at the same time.

                                  and why do we need that :

                                  actually JS is a single thread, so it can only do one thing at a time,
                                  
                                  So , what about a long-running task?

                                  Sounds like it would block the single thread . However , we want non-blocking behaviour!

                                  How do we acheive that?

                                  Simply by using an event loop : which takes long running tasks , executes them in the "background" , and puts them back in the main thread once they are finished.
*/

/*                2. The JavaScript Engine and RunTime:


---> JS Engine and How it works:

                                   JS Engine: JS is a program , that executes javascript code.

                                   JS has different engines , but the most useful and famous is googles V-8 engine , that is used in chrome for client side app and also for server side , there is node js.
                                   
                                   
                                   #



                                   Components of JS-Engine: basically the js engine contains , a CALL STACK and a HEAP.
                                   so , what actually they are?

                                   The Call Stack is the component where our code is executed.


                                   The Heap is the component , where objects are stored . 
                                   
                                   which objects?
                                   The objects we created in our code.

                                   The call stack stores the local primitive variables , and refrence variables to objects(which are in heap space.)

                                   
                                   
                                   #




                                   JavaScript RunTime in the browser:

                                   So , we talked about the js engine and the components of it , now let's talk about the runtime of js .

                                   we can say that , without the engine , there is no runtime and basically no js and execution at all.

                                   let's come to the main piece:

                                   basically the js runtime contains ,
                                   a) WEB API's (DOM , TIMERS , Fetch API ....)

                                   b) CALLBACK QUENE:
                                   The callback quene is , where the event funtions takes place , like click on button can call a function the we have written , it contain data , timer etc.


                                   and how the callback quene works?
                                   
                                   so let suppose we clicked on button and it shows some reaction,

                                   so basically when we click on a button , the button onclick event was already  executed in the background (in this case the callback quene) , so this onclick function then send to the call stack for further execution using event loop.


                                   and I think this is the practicle example of non-blocking concurrency model of the Js.
*/

/*                3. Execution Context and The Call Stack:


---> EXECUTION CONTEXT:

                                Execution Context in JS:
                                execution context is basically an enviroment , where the executon of the code takes place , and this execution is done with the correct way and this become the CALL STACK.

                                So , what did I mean about the correct way of execution of the code ?

                                When the compilation is done , means the code is converted into machine code.
                                now it is time to execute that machine code.

                                There are some steps involved:

                                step1:

                                Creation of the global execution context(for top-level code), the code which is not inside a function.

                                step2:

                                Execution of top-level code (inside Ex context)


                                step3:

                                Execution of functions and waiting for callbacks.
                                In this step , the callstack is waiting for the callbacks to execute the functions further , and the callback functions are then come through event loop , like we said it before.


                                so we understand what an execution context is:

                                Now , let's dive deep into , what is inside of execution context or what execution context is made up of?



---> What's Inside of Execution Context:
                                        We now know that how the execution context works.
                                        Now what we are thinking is about what is actually an execution context and what's inside of it:
                                        
                                        1: Variable Context: The variable context or enviroment is made up of let , const and var declarations, Functions , arguments object(it's the arguments of a funtion that is the part of that execution context).

                                        2:Scope Chain: The execution context also have the Scope chain , which is basically a refrence to variable , which is located outside of a function.

                                        3: It also contain the this keyword and this is generated during creation phase before execution.


                                        Note: There is a point to remember , that the arraw function execution context doesn't have the argument object and the this keyword.we will see it later.
                                        
                                        So these are the phases or components that make execution context for functions as well as the code n the top level.
                


                                        Note: I have shared some screenshots , you can check it .
                                        */

/*                4. Scope and the Scope Chain:

----> SCOPING : scoping actually and simply means , how the variables are organized in the code , how we  can access variables etc.

----> Lexical Scoping : lexical scoping simply means that the scoping(The access and organization of Variables) is controlled by placement of functions and blocks in the code.

It means that we can access a global scope variable inside the function and also  inner function can acccess thier parent function variables , but we can't access the function variables outside the function block.

----> SCOPE: scope is a space or enviroment in which certain variable is declared (variable enviroment in case of functions) . 


There is three scope in js:

1. Global Scope.
2. Function Scope.
3. Block scope.

Here's The Example:
let a = 20;

let func = function()
{
    let b = 30;
    console.log("a and b is accessible (outer):", a  , b); // we can acess the global scope varibale inside the function;

    var innerFunc = function()
    {
        var c = 40;
        console.log("a and b and c is accessible ( inner):", a , b , c);
        // We can also access global scope variable,and the parent function variable inside inner or child function.
        }
    innerFunc();
    return;
}
func();
console.log("only a is accessible (global):" , a );


--->Scope of a variable:
                        Now we know about the scoping , lexical scope , and scope . lets's move on the next topic , which is scope of a variable.
                        The name itself means that , the region or space of our code where a certain variable is accessed.


                        Note: The difference between in scope and scope of a variable : 
                        In scope , we actually declare a variable in enviroment or space.

                        and In scope of a variable means , that the region or piece of code , where a variable can be accessed.





                        ---> Three 3 Types of Scope :

                        1.Global Scope: 

                                      Example: 
                                             const me = "Abuzar";
                                             const job = "Student";
                                             const year = "2002";

                       Explanation:
                                   Outside of any function or block.

                                   variables declared in global scope are accessible everywhere.
                        

                        2.Function Scope:

                                         Example:
                                                 function calcAge(birthYear)
                                                 {
                                                    const now = 2037;
                                                    const age  = now - birthYear;

                                                    return age;
                                                 }
                                        console.log(now) // Reference error.

                        Explanation:
                                    Variables are accessible only inside function , Not outside.

                                    Also called local scope.
                        

                    3. Block Scope(ES6):
                                       
                                          Example:
                                                  if(year >= 2002 && year <= 2000)
                                                  {
                                                    const millenial = true;
                                                    const food = 'Avocado toast';

                                                  }
                        Explanation:
                                     Variables are accessible only inside block(block scoped);

                                     However , this only applies to let and const variables .
                                     It means that we can access variables outside the block if have a var decalaration.


                                     --> Block scoped were introduced in ES6 , before that , only function and global scope were existed 
                        




--> The Scope Chain:
                      let's see an example first :
                       
                       -> CODE:
                               const myName = 'Abuzar';

                               function first()
                               {
                                const age =30;

                                if(age >= 30)
                                {
                                  const decade = 3;
                                  var millenial = true;
                                }


                                function second()
                                {
                                  const job = 'teacher';

                                  console.log(`${myName} is a ${age} old ${job}`)
                                }

                                second();
                               }
                            
                               first();


                      --> Explanation:
                                      Now we have a code to represent how the scope chain works.


                          1st step:
                                   In the first step, The global scope will make execution context (also called global execution context) first ;

                                                Global Scope
                                                  myName = 'Abuzar'

                          2nd step:
                                    Then first() function will make execution context.

                                    and it will make nested structure.

                          3rd step: 
                                   Then in the first() function , the second() function should make execution context

                          These all takes place in the Call Stack.


                Now the concept here is : This process is called Variable lookup in scope chain.

                Because , In the second() function , we can see that , 
                we have access , the "myName" varaible , which is a global scope variable , also the "age"  variable which is local or function scope. So , it will work perfectly , because of the concept of scope chain.


                In scope chain , we can access all the variables present in the parent context.

                Like in the previous code:

                we accessed the "age" variable , which was initialized in first() function, and also the global scope variable.


                Conclusion:
                           We can simply say that: The inner scope has access to variables from all outer scopes.

                Note: The child scope has access to thier parent scope , but the parent doesn't have access to the child scope.

                       
--> Important to note:
                      The decade variable in the if block , is actually a block scoped variable , and in the ES6 , the let and const are treated is as block scoped . 

                      So , it will create thier own scope in the execution context.
                      and the  millenial is not a block scoped and is local scoped because of var delaration and therefore , it is the variable of first() function.

                      and therefore , it means that it has also access for the second or child function.

                      Scope chain also applies to block scope variables , and therefore , it has the access of the outer scoped variables but does not have access to child scope like second() function and also the second() function  doesn't have access to the block scope.

                      Why is that :
                                  it is because of the lexical scoping concept in Js.
                                  and that's because , these both are siblings to each other , and childs pf one function , ad one is not written inside the other one.

                                  noe of these scopes are written inside of one another.

                                  and that's the rule of lexical scoping.  



                      

                ---> Important Things Explained:
                          
                -> The scope chain has nothing to do with the order in which functions were called  "or" with the order of the execution contexts in th call stack.
                              
                -> The Scope chain does get the variable enviroment from the execution cotext.








--> WHAT WE HAVE LEARNED: 
                         ->Scoping ask the question , " Where do variables live?" or " Where can we access a certain variable , and where not ?";


                         ->There are 3 Types of scope in JavaScript: The global scope, scopes defined by functions , and scopes defined by blocks;

                         
                         ->Only let and const variables are blocked-scoped. Variables declared whith var end up in the closest function scope;


                         ->In JavaScript , we have lexical scoping. so the rules of where we can access variables are based on exactly where in the code functions and blocks are written;


                         ->Every scope always has access to all the variables from all it's outer scopes.This is the Scope chain.


                         ->When a variable is not in the current , the engine looks up in the scope chain until it finds the variable it's looking for. This is called variable lookup;


                         ->The scope chain is a one-way street: a scope will never , ever has access to the variables of an inner scope;


                         ->The scope chain in a certian scope is equal to adding together all the variable enviroments of the all parent scopes;


                         ->The scope chain has nothing to do with the order in which functions were called . It doesn't affect the scope chain at all.
                 */

/*                   5. Variable Enviroment :Hoisting and the TDZ(Temporal Dead Zone):



-----> Variable Enviroment: 
                           We are now able to know about Scope chain , that how it works. Now going forward to deep dive into variable enviroment. How it works behind the scenes .


----> Hoisting: The 1st topic in the variable enviroment is Hoisting , basically  it makes some types of variables accessible/usable in the code before they are actually declared.
                                    Like if I log "a" into the console, before  declaring or initializing it.

Some people say that : " Variables lifted to the top of thier scope."
                         It actually means that, Variables and function declarations are moved to the top of thier containing scope during the compile or creation phase.
                        
  

The real thing is :  Before Execution , code is scanned for variable declarations , and for each variable , a new property is created in the variable enviroment object.


------> Hoisting for different declarations:
      

                             HOISTED             INITIAL VALUE      SCOPE
-> function declaration        YES                Actual function   BLOCK
                    
-> var variables               YES                   undefined   function
  
-> let and const variables     NO            <uninitialized>, TDZ  block

-> function expression 
    and arrow function         depends on usinf var ,let,const
 

*/

/*                       6. Hoisting and TDZ in Practice:

      // Hoisting for Variables:
      console.log(me)  undefined
      console.log(job) can't access before initialization.
                        // It is because of the TDZ (Temporal Dead Zone)
                        // and the TDZ starts from the first line of scope and ends to that variable where actually is initialized.
      console.log(year) likewise job.


      var me = 'Abuzar';

      let job = 'student';

      const year = 2002;


  // Functions:
  console.log(addDec(1,2,3));
  console.log(addArrow(2,3));
  console.log(addExpr(2,3))

  --> The first function will work fine.
  --> The addArrow() , will be the same as for the const and let variable
  //and for the var , the variable will be undefined , so when we log it to the console, it will get an error saying that , undefine is not a function.

  Simply because it will be treated as variables , with var .
  and if we want to log it to show undefined , you should only write the name of the variable , and it will get undefined.


--> Let's demonstrate with an example that we should never use var most of the time:
  
if (!numProducts) deleteShoppingCart();

// here the numProduct value is unndefined beacuse of hoisting of var,
// The logic is if numProduct is not equal to undefined, calll the function . and we know that the value of numProducts has been changed to undefined after hoisting . so it will call the function.  


var numProducts = 10;

function deleteShoppingCart() {
  console.log("All Products deleted");
}





--> another difference between var,let and const:

 var x = 10;
 let y = 2;
 const z = 3;


 console.log(x=== window.x) // true
 console.log(y=== window.y) // false
 console.log(z=== window.z) // false

 -> window is a global object in js , and it also ceate a property for the var variable.
*/

/*                         7. The "this" keyword:

--> The "this" keyword or variable is a special variable that is created for every execution context (every function).

--> It takes the value of (points to) the "owner" of the function in which the "this" keyword is used.

--> "this" is not static. It depends on how the function is called , and it's value is only assigned when the function is actually called.


------>  
      1) Method -> this = <Object that is calling the method>.

       2) Simple function call -> this = undefined. // in strict mode , otherwise window object(in the browser).

       3) Arrow functions -> this = <this of the sorrounding function(lexical this)> 
       // Arrow functions doesn't get thier own this keyword, instead if you used the this keyword inside it , It will be the this of the sorrounding function , means parent function. and in technical terms,this is called the 'lexical this keyword,'because it simply gets picked up from the outer lexical scope of the arrow function.
       
       
       4) Event listener -> this = <DOM element that the handler is attached to >

       new,call ,apply,bind <later in the course>.




       Note: this does not point to the function itself , and also not in the variable enviroment.

*/

/*                    8. this keyword in practice:


                           
// console.log(this); // points to the global window object.

// Simple function
function calcAge(birthYear) {
  console.log(2024 - birthYear);
  console.log(this); // undefined in simple function.(but in strict mode)
}
calcAge(2003);

//Arrow function
const calcAgeArrow = (birthYear) => {
  console.log(2024 - birthYear);
  console.log(this); // here , the "this" is window object this, because arrow doesn't have thier own this keyword , instead "this" here is the lexical this keyword , because it is simply gets picked up from the outer lexical scope of the arrow function.
};
// calcAgeArrow(2003);

const abuzar = {
  year: 2003,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};
// abuzar.calcAge();

const $2ndObj = {
  year: 2010,
};

$2ndObj.calcAge = abuzar.calcAge;
// $2ndObj.calcAge(); // now we can see here, that that this keyword , in the calcAge method is point to $2ndObj (this.year)
// It proved that the this keyword always points to the object , that is calling the method.So in this scenario , the "this" is point to $2ndObj even the method is written inside the abuzar object. it will still pointing to $2ndObj . If it is $2ndObj , who is calling the method.

// Now going further :

//  let's create a f variable and assign it the object function , which is the buzar.calcAge here.

const f = abuzar.calcAge; // we copied the method here not copied.
// we assign it the calcAge method , beacuase we know that the function is just a value. so we assign the value to the f variable.

// lets call it.
f(); //undefined (if it is called without strict mode , it will be the window object which will be refered by the this keyword.)

*/

/*            9. Regular Functions vs Arrow Functions

// var firstName = "Shahid";

const abuzar = {
  firstName: "Abuzar",
  year: 2003,
  calcAge: function () {
    // console.log(this);
    console.log(2030 - this.year);

    // First solution
    // we can create a variable outside of this function. and assign it "this".  and through the scope chain , self will be equal to this , "this" will be refered to the object itslef.
    // So this is a way , in which we can preserve the this keyword. we can also use that.
    // and then  we can use that variable inside the function.
    //This was the kind of pre ES6 solution.
    // const self = this;
    // function inside the method.
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981);

    //   // Here , we have created a function inside method , and this function will act as the simple function , the function which is outside of any object.so in the result , it will get undefined to the this keyword.
    //   // some people call it a bug in js, but it's not.
    //   //  Now there are 2 solutions to this problem
    // };
    // isMillenial();

    //  The 2nd and Modern Solution:

    // we can use arrow function instead of createing a variable outside the function.
    // because we said that , arrow function doesn't get thier own this keyword, it will simple use the parent this keyword.
    // So in this case , the this keyword , in arrow function will point to the calcAge method which is the parent of this arrow function, and then the this in the calcage method is the abuzar object.

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981);
    };
    isMillenial(); // Now here , this worked , because this arrow function uses the "this" keyword from its parent scope.
    // so basicall the arrow function inherits the this keyword from the parent scope.
  },

  greet: () => {
    console.log(this); // this refers to the global object which is window.
    console.log(this.firstName); // this.firstName refers to the global scope firstName (which is defined using var) .

    // Note : this is why we shouldn't use the arrow functions as methods even if it is not about the this keyowrd,beacuse it will create bugs and also var.
  },
};
// abuzar.calcAge();
// abuzar.greet();

// ---> The arguments keyword:

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(1, 3);
addExpr(3, 4, 13, 1, 3);
//  it's legal to add more arguments than given paramenters, It is also useful when we want to use loop.

// It doesn't get the arguments keyword
let addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(1, 2); */

/*           10. Primitives vs. Objects (Primitive vs. Reference Types)

         // we will see , how primitives and objects are stored in memory.

let age = 30;
let oldAge = age; //30
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

const me = {
  name: "abuzar",
  age: 20,
};

const friend = me;
friend.age = 30;

console.log(me); // age : 30
console.log(friend); // age : 30



              -->   Primitives Vs Objects in Practice:


              ---> We have learned that , JS engine store Primitive Types in Call Stack or in the execution cotext of a function in the call stack.

              ---> We also learned that , The objects are stores in the Memory Heap.

              -> PRIMITIVES:
                           The primitives or primitive types , contain 
                           Number,Strinf,Boolean,Undefined,Null,Symbol,BigInt.

              -> OBJECTS:
                         The Objects or Reference Types Contains 
                         Object literal(objects),
                         Arrays
                         Functions
                         Many More.

    Important Explanation: 
                          We wrote a code in this lecture , we initialized age variable with value 30;
                          then oldAge = age;
                          and then we reassigned the age value to 31;

                          and as we logged it , the value of age was updated, and the oldaAge was 30;

                          and then for the object , we created a me object 
                          with the 2 keyvalues inside it.

                          Then we created a friend variable and assigned it the me object .

                          Then I changed the value of the age key inside the friend object.

                          but when logged the friend and me objects to the console.
                          It gave me the updated value of the key age in both objects.

                          Now what happend inside the JS engine to give me the different value.
                          
                          Let's dive deep into the memory management.


   -----> Memory Management for the Primitives:

   -> When I initialized a variable age with value 30 
     Inside the call stack , an identifier will be created as age , for that age variable , the specific will be assign to that variable and then that value, like this:

     Identifier      Address    Value

     age              0001       30

     -> point to be noted that , when we initialize a variable . The variable will store by thier address.
     -> Now when we assign the age to the oldAge variable . It will point the address of that age variable not the , and remember that the value of the address is immutable, we can't change it.

     So when the oldAge variable is get assigned by the age variable.
     it will point to the address of that variable. and the value f that address will be stored as well.
     
      
     Identifier      Address    Value

     age              0001       30
     oldAge           0001       30

     It will just point out , but we can't do this here in vs code.


     -> Now the next point to be noted here is  , when I then reassign the value to the age , which is 31 actually. what happens is the new address will be created for that value and the age will now get pointed to that particular address.

     and that is how the memory management works for the Primitives or Primitive Types.





     -----> Memory Management for the Objects:



     code :
     const me = {
                   name: "abuzar",
                   age: 20,
                };

                 const friend = me;
                friend.age = 30;

                   console.log(me); // age : 30
                   console.log(friend); // age : 30

     -> When I created an object me with the two key values.
       --> The address for the value of that object will be created in the Memory Heap.

       -> and me will be the identifier also will get thier own address
        and now here is the twist :
                                   -> The value of the me or object name will be the address of that object , which  is created in the Memory Heap

      -> That's why it is called the  the Reference Values.

      -> The value of the object in the Call Stack , will be a refernce to the address in the Memory Heap.



      So when I assign the me object to the Friend variable.
      -> the Friend will also pointing to that same address which was created before for the me object. Now when the friend object thier own key age value to 27 fro 30,

      -> Since the friend is pointing to the address and that address value is the adress memory heap and the address value in the memory heap now changed the value to 27.

      -> So , the value didn't changed in the call stack .
       -> The value only changed inside the Memory Heap.


       Call Stack:

                    
                   identifier      Address     Value

                   me              0003        D30F


      Memory Heap:

                    Address        Value

                    D30F            {
                                        name : abuzar;
                                        age: 27  (not 30 now)
                                         }

--> So the value of the me object in the call stack, is the reference to address of that object in the Memry Heap.


*/

/*   11. PRIMITIVES VS. OBJECTS IN PRACTICE:

code : 
 let lastName = "Williams";

let oldLastName = lastName;

lastName = "Davis";

console.log(lastName, oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
// It looks like we just copied the jessica object to marriedJessca object.
// but actually we didn't , In fact , in the JavaScript engine , the marriedJessica identifier is pointed to the actuall jessica object , and nothing changed , The value of the that memory address inside the execution context of the Call Stack is just the address of the object inside Memory Heap.
// So we just pointed the marriedJessica variable to that refrence value and address.

marriedJessica.lastName = "Davis";
console.log("Before marriage :", jessica); // Davis
console.log("After marriage :", marriedJessica); // Davis

// Now the output will be the same for both , and will be the updated value(Davis).
//  Now the concept here is , when we reassigned the value to the lastName key . It didn't changed inside the Call Stack and in fact nothing changed inside the function execution context in the Call Stack .
// Only the value changed in the memory heap. but the address in the memory heap is still the same and also in the Call Stack.



---> Will const and let affect the value in the memory heap?

-> In our code , we decalred jessica object with const , and then we reassigned the jessica to the marriedJessica and nothing happend.

-> Then we also changed the value of the lastName key and nothing happend.

Why is that?

-> It's because the value of the object is saved in the memory heap , and the memory heap is nothing to do with the const and let keywords.

-> we can change the value of any key object
const me = {
  firstName: "Abuzar",
  lastName: "RaziQ",
};

me.firstName = "Shafqat";

console.log(me);

-> Here , the value of firstName is changed to Shafqat.


-> What we actually can't is reassign a whole new object to the me ;


// we can't reassign the whole new object to me.

me = {
  age: 20,
};

console.log(me); // It will give a Type error,

-> This is because we are creting a whole new object inside the memory/
-> And what it actually means is creating a new reference in the call stack and new address in the Memory Heap.
 
-> and for the let , we can actually change the value.


// Copying Objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const jessicaCopy = Object.assign({ color: "White" }, jessica2);
jessicaCopy.lastName = "Davis";
// what actually did here , is the Object.assign function here is used to merge the new object with  the current object.

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);


--> In the first, the jessica2 will be the actual object.
--> In the last, the jessicaCopy which in which we used the Object.assign function to merge into the current object and created the whole new object with key value of current object.
 
--> So , when we changed the lastName of jessica copy object , it is actualy changed in the new object and not in the old object.





const obj = {
  color: "red",
  name: "car",

  obj2: {
    obj2key: "inner Obj",
  },
};

const copyObj = Object.assign({}, obj);
console.log(copyObj);

copyObj.color = "black";

copyObj.obj2.obj2key = "innerObjKey changed";
console.log(copyObj);
console.log(obj);

// Here, the copyObj object will reassign the value inside the nested object in the obj object or copyObj object as well.
// but the problem here is , it will then assign that new value of the nested object to all objects like copyObj object and obj object.
// and it doesn't do shallow deep copy but shallow copy.

// In essence both the objects , obj and copyObj have a property , called obj2(nested object) , which points the same object in the memory heap. and that object is obj2(nested object)



*/
