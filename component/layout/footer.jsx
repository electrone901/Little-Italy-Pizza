import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
require('../../styles/footer.css');

var Footer = React.createClass({
	render: function () {
		return (
			<footer className="page-footer">
				<div className="container text-center">
				  <div className="row social-footer">
				    <div className="text-center py-3">
				      <div className="mb-12 flex-center">                                                    
					  	<a className="fb-ic">
				          <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
				        </a>
				        <a className="tw-ic">
				          <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
				        </a>
				        <a className="gplus-ic">
				          <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
				        </a>
				        <a className="ins-ic">
				          <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
				        </a>
				        <a className="pin-ic">
				          <i className="fa fa-pinterest fa-lg white-text fa-2x"> </i>
				        </a>
				      </div>
				    </div>
				  </div>
				  <p className="social-footer">
				  	© Copyright &copy;{new Date().getFullYear()} LittleItalyPizza.com
				  </p>
				</div>
			</footer>
		)
	}
});

export default Footer;
