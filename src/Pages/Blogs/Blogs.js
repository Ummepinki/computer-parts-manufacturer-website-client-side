import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-2'>
            <h2>Q.1 : How will you improve the performance of React Application?</h2>
            <p>Ans:React enables web applications to update their user interfaces (UIs) quickly, but that does not mean your medium or large React application will perform efficiently.
                i.Keeping component state local where necessary.
                ii.Memoizing React components to prevent unnecessary re-renders.
                iii.Code-splitting in React using dynamic import()
                iv.Windowing or list virtualization in React.
                v.Lazy loading images in React.
            </p><br />
            <h2>What are the different ways to manage a state in a React Application?</h2>
            <p>Ans:There are four main types of state you need to properly manage in  React apps:
                Local state,Global state,Server state,URL state
                Local (UI) state:Local state is data we manage in one or another component.
                Local state is most often managed in React using the useState hook.
                Global (UI) state : Global state is data we manage across multiple components.
                Server state : Data that comes from an external server that must be integrated with our UI state.
                URL state : Data that exists on our URLs, including the pathname and query parameters.
            </p>
            <br />
        </div>
    );
};

export default Blogs;