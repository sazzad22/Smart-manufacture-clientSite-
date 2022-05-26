import React from "react";

const Blogs = () => {
  return (
    <div className="min-h-screen  py-32 ">
          <div className="mx-10 lg:mx-32 lg:p-20 p-5">
          <div >
        <h2 className="text-2xl font-semibold ">How will you improve the performance of a React Application? </h2>
                  <p className="text-2xl">1 - React apps might take much time while loading high quality images. Optimizing the image can help the app load faster
                    
                      <br />
                      2 - Lazy Loading - Instead of loading all the content at once, one can use lazy loading to load some content first , then the rest to improve performance
                  
                      <br />
                      3 - while updating content with useState, its best to use it locally , withing it's component
                      Node.js
                      <br />4 - Memoizing - It is technique where the code caches a component's loading operation, saves the result in memory, and returns the cached result for the same input.
                      <br />
                      5 - Not using recursive functions and using better algorithem make the app perform better.
        </p>
          </div>
          <div  className="my-5">
        <h2 className="text-2xl font-semibold ">What are the different ways to manage a state in a React application? </h2>
                  <p className="text-2xl">Redux - Its is one of the most popular ways to manage the states of react
                    
                      <br />
                      Recoil - It is alternative for Redux. It is a state management library for reacte
                      <br />
                      Jotai - is also another open source state management library and it is used to manage reate states
                      <br />
                      Zustand - another way to manage states in react.It is a library widely used before Redux .
        </p>
          </div>
          <div className="mb-5" >
        <h2 className="text-2xl font-semibold ">How does prototypical inheritance work?</h2>
                  <p className="text-2xl">In javascript everything is an object.
                      <br />
                      When declaring an object any new method it is inherited from the original Object.
                      <br />
                      Upon adding new key word the resulting object shares methods that are part of the original objects prototype.These are not methods that exist within it's closure, but methods that are attached to its prototype. 
                      <br />
                      One can assign the same prototype to 10 different child objects. You can define the generic properties within the prototype object and the specific properties on the child objects. Therefore, within any child object, one have access to all properties of prototype object. This is how prototypical inheritance works</p>             
                      
          </div>
          <div className="mb-5" >
        <h2 className="text-2xl font-semibold ">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                  <p className="text-2xl">To search and find out the product using it's name ,first we need to apply  map method to the array of products. 
                      <br />
                      Then for every product apply include() method
                      <br />
                      In the include method we set the key press event value as a condition to be matched with the individual product's key word and for this case it is 'name'.
                      <br />
                      Thus we match the value of name with the input value and search the matched products. </p>             
                      
              </div>
              
              <div className="mb-5" >
        <h2 className="text-2xl font-semibold ">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                  <p className="text-2xl">Unit test is basically testing a software's code for measuring it's workability. 
                      <br />
                      During development, a software developer may code and set the criteria to get the best results,but into the unit test the application's correctness is verified.
                      <br />
                      For this, the most commonly used approach is test - function - expected value.
                      <br />
                      Why should one write unit tests? <br />
                      Unit tests are run to ensure a program's quality and stability
                      <br />

                      The main goal of unit testing is to isolate each part of the program and show that the individual parts are correct. <br />The testing enables developers to improve and write better and more efficient code </p>             
                      
          </div>
          
      </div>
    </div>
  );
};

export default Blogs;
