import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-2 text-center'>
            <h2 className='font-bold'>Q.1 : How will you improve the performance of React Application?</h2>
            <p>Ans:React enables web applications to update their user interfaces (UIs) quickly, but that does not mean your medium or large React application will perform efficiently.
                i.Keeping component state local where necessary.
                ii.Memoizing React components to prevent unnecessary re-renders.
                iii.Code-splitting in React using dynamic import()
                iv.Windowing or list virtualization in React.
                v.Lazy loading images in React.
            </p><br />
            <h2 className='font-bold'>Q.2:What are the different ways to manage a state in a React Application?</h2>
            <p>Ans:There are four main types of state you need to properly manage in  React apps:
                Local state,Global state,Server state,URL state.
                Local (UI) state:Local state is data we manage in one or another component.
                Local state is most often managed in React using the useState hook.
                Global (UI) state : Global state is data we manage across multiple components.
                Server state : Data that comes from an external server that must be integrated with our UI state.
                URL state : Data that exists on our URLs, including the pathname and query parameters.
            </p>
            <br />
            <h2 className='font-bold'>Q.3: How does prototypical inheritance work?</h2>
            <p>Ans:When a function is created in JavaScript, the JavaScript engine adds a prototype property to the function. This prototype property is an object (called a prototype object) that has a constructor property by default. The constructor property points back to the function on which prototype object is a property.
            </p>
            <br />
            <h2 className='font-bold'>Q.4: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            <p>Ans: i. create an empty variable. ( product)
                ii. Initialize it with 1.
                iii. In a loop traverse through each element (or get each element from user) multiply each element to product.
                iv. Print the product.</p>
            <br />
            <h2 className='font-bold'>Q.5:What is unit test? Why should write units test?</h2>
            <p>Ans:Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.<br />
                Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future. Sometimes developers write unit tests first, then write the code. This approach is also known as test-driven development.

            </p>
        </div>
    );
};

export default Blogs;