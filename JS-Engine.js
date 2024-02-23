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
                


                                    
                                        */
