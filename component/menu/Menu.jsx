import React, {Component} from 'react';
import data from '../../dataPizza.js'; 
require('../../styles/menu.css');

export default class Menu extends Component {
    constructor(){
        super();
        this.state = {
            data: data
        };
    }

    render() {
        return(
            <div className="container">
                <h1 className="title text-center" id="content">Value Menu</h1><hr />
                {
                    this.state.data.gallery.map((ele, idx) => {
                        return (
                            <div key={idx}>
                                <div className="row no-gutters m-1" >
                                    <div className="col-md-5">
                                        <img src={require(ele.img)} id="images" className="img-responsive mr-1" alt="Pizza Image" /> 
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-block px-2">
                                            <h1 className="pizza-name">{ele.name}</h1>
                                            <h1 className="price">${ele.price}</h1>
                                            <h1 className="font-weight-bold calories">{ele.calories}</h1>
                                            <button type="button" className="btn btn-success" id="order-button">Order Now</button>
                                        </div>
                                    </div>
                                </div><hr/>
                            </div>
                        )
                    })
                 }
                 <div>
                     <footer>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <p className="text-center">Home</p>
                            </div>
                            <div className="col-md-4">
                                <p class="text-center">About</p>
                            </div>
                            <div className="col-md-4">
                                <p className="text-center">Careers</p>
                            </div>
                        </div>
                    </footer>
                 </div>
            </div>
        );
    }
};






