import React, { Component } from 'react';
class FooterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <footer className="footer bg-dark pt-3" style={{height:'200px'}}>
            <div className="container">
                <div className="row">               
                    <div className="col-lg-4 text-left my-auto text-light">    
                        <h1>Aspire</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga
                        nesciunt dolorum nulla magnam veniam sapiente, fugiat!</p>              
                    </div>   
                    <div className="col-lg-4 text-left my-auto text-light">    
                        <p>Rem repellendus quasi fuga
                        nesciunt dolorum nulla magnam veniam sapiente, fugiat!</p>       
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Integer molestie lorem at massa</li>
                        </ul>
                    </div>    
                    <div className="col-lg-4 text-center my-auto">    
                       <h2 className="text-warning">Contact us</h2>
                       <h1 className="text-primary">+12 1231 123</h1>
                    </div>                 
                </div>
            </div>
        </footer>
         );
    }
}
 
export default FooterScreen;