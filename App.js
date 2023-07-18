import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {Title}
    <h1 className="heading">Namaste React functional component</h1>
  </div>
);

root.render(<HeadingComponent />);
