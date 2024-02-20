/*




1. A High-Level overview of JavaScript:

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






                            


2. The JavaScript Engine and RunTime:






*/
