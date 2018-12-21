import React from 'react';
import ReactDOM from 'react-dom';

// components
import NavBar from './component/layout/NavBar.jsx';
import Menu from './component/menu/Menu.jsx';
import Footer from './component/layout/footer.jsx';

var App = React.createClass({
  render: function() {
    return (
      <div>
          <NavBar />
          	<Menu />
          <Footer />
            
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

