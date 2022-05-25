import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Q.1 : How will you improve the performance of React Application?</h2>
            <p>Ans:React enables web applications to update their user interfaces (UIs) quickly, but that does not mean your medium or large React application will perform efficiently.
                i.Keeping component state local where necessary.
                ii.Memoizing React components to prevent unnecessary re-renders.
                iii.Code-splitting in React using dynamic import()
                iv.Windowing or list virtualization in React.
                v.Lazy loading images in React.
            </p>
        </div>
    );
};

export default Blogs;