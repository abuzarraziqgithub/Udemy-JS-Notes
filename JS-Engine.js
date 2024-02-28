/*                 1. A High-Level overview of JavaScript:

---> JS Definition: JavaScript is: 
                                  High-Level : Human Readale code.
                                  
                                  
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

                                   JS has different engines , but the most usefull and famous is googles V-8 engine , that is used in chrome for client side app and also for server side , there is node js.
                                   
                                   
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

                                   So , we talk about the js engine and the components of it , now let's talk about the runtime of js .

                                   we can say that , without the engine , there is no runtime and basically no js and execution at all.

                                   let's come to the main peice:

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
                        The name itself means that , the region or space of our code where a certain can be accessed.


                        Note: The difference between in scope and scope of a variable : 
                        In scope , we actually declare a variable in enviroment or space.

                        and In scope of a variable means , that the region or piece of code , where a variable can be accessed.





                        ---> Three 3 Types of Functions:

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
