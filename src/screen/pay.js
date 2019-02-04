import React, { Component } from 'react';
import bg from '../assets/img/free-pay-bg.jpeg'
class PayLendScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:'',
            alert:false,
            show:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.checkStatus = this.checkStatus.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });    
    }

    checkStatus(){
        let data = this.props.data.filter(x => x.id === this.state.id)
        if(data.length>0){
            this.setState({show:true})
            console.log(this.props.data.filter(x => x.id === this.state.id ))
        }else{
            this.setState({alert:true})
        }
    }

    render() { 
        return ( 
            <div>
            <div className="view" style={{ backgroundImage: 'url('+ bg + ')', backgroundRepeat: 'no-repeat', 
                                            backgroundSize: 'cover', backgroundPosition: 'center',
                                            paddingTop:50 }}>
                <div className="mask rgba-gradient align-items-center">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-8 col-xl-8 mb-4">
                                <div className="card wow fadeInRight" data-wow-delay="0.3s" style={{backgroundColor:'#ffffffb0'}}>
                                    <div className="card-body">
                                        {this.state.alert === true && <div className="alert alert-danger" role="alert">
                                            No data with that ID
                                            <button className="btn btn-danger btn-block" onClick={() => this.setState({alert:false})}>Close</button>
                                        </div>
                                        }
                                        <div className="container my-1">
                                        <h2>Check your Request Status</h2>
                                            <hr className="pb-3"></hr>
                                            <div className="row">
                                                <div className="col-md-12 mx-auto">
                                                    <div className="form-group pb-3">
                                                    <div className="row">
                                                        <div className="col-md-6 col-lg-8">
                                                            <input type="text" id="id" name="id" className="form-control" required value={this.state.id} onChange={this.handleChange}></input>
                                                            <label className="form-control-placeholder" htmlFor="id" style={{left: '15px'}}><i className="fas fa-user prefix white-text active pr-2"></i> Lend ID</label>
                                                        </div>
                                                        <div className="col-md-6 col-lg-4">
                                                            <button className="btn btn-indigo btn-block"  type="submit" style={{backgroundColor:'#27A4DD', color:'#fff'}} onClick={this.checkStatus}>Check</button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {this.state.show === true && <div className="form-group pb-3">
                                                        <input type="text" id="bank" className="form-control" required></input>
                                                        <label className="form-control-placeholder" htmlFor="bank"><i className="fas fa-envelope-square prefix white-text active pr-2"></i> Bank</label>
                                                    </div>}
                                                    {this.state.show === true && <div className="form-group pb-3">
                                                        <input type="number" id="amount" className="form-control" required></input>
                                                        <label className="form-control-placeholder" htmlFor="amount"><i className="fas fa-money-bill prefix white-text active pr-2"></i> Amount Transferred</label>
                                                    </div>}
                                                    {this.state.show === true && <div className="form-group pb-3">
                                                        <input type="text" id="term" className="form-control" required></input>
                                                        <label className="form-control-placeholder" htmlFor="term"><i className="fas fa-calendar prefix white-text active pr-2"></i> Loan Term</label>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                    <div className="text-center m1-4">
                                        {this.state.show === true && 
                                        <button className="btn btn-indigo btn-block"  type="submit" style={{backgroundColor:'#27A4DD', color:'#fff'}}>
                                            Pay
                                        </button>
                                        }
                                            <hr className="hr-light mb-3 mt-4"></hr>
                                        <div className="inline-ul text-center">
                                            <i className="fab fa-twitter white-text"></i>
                                            <i className="fab fa-linkedin-in white-text"> </i>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xl-4 mb-5 mt-md-0 mt-5 text-light text-right" style={{paddingTop:'70px'}}>
                                <h1 className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s" 
                                style={{backgroundColor:'rgba(29, 28, 28, 0.61)', borderRadius:'10px', padding:'5px'}}>Pay the lend is easy now! </h1>
                                <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s"></hr>
                                <h6 className="mb-3 wow fadeInLeft" data-wow-delay="0.3s"
                                style={{backgroundColor:'rgba(29, 28, 28, 0.61)', borderRadius:'10px', padding:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga
                                nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea
                                dolor molestiae, quisquam iste, maiores. Nulla.</h6>
                                <button className="btn btn-outline-white btn-lg btn-warning animated bounce delay-3s" data-wow-delay="0.3s">
                                    <strong>Learn more</strong>
                                </button>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default PayLendScreen;