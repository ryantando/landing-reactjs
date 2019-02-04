import React, { Component } from 'react';
import bg from '../assets/img/free-head-bg.jpeg'
import bg2 from '../assets/img/free-head-bg-2.jpeg'
import { Modal } from 'react-bootstrap';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            phone:'',
            email:'',
            amount:'',
            term:'',
            modalShow: false,
            alert:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmitModal = this.handleSubmitModal.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });    
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ modalShow: true })
    }

    handleSubmitModal = () => {
        let idEnd = this.props.data.filter(x => x.phone === this.state.phone ).length
        let data = {
            id: this.state.phone + this.state.amount + this.state.term + idEnd,
            name:this.state.name,
            phone:this.state.phone,
            email:this.state.email,
            amount:this.state.amount,
            term:this.state.term,
        }
        setTimeout(this.props.addData(data), 1000);
        alert('Request has been added, your Lend ID is ' + this.state.phone + this.state.amount + this.state.term + idEnd)
    }


    render() { 
        let modalClose = () => this.setState({ modalShow: false });
        return ( 
        <div>
            <div className="view" style={{ backgroundImage: 'url('+ bg + ')', backgroundRepeat: 'no-repeat', 
                                            backgroundSize: 'cover', backgroundPosition: 'center',
                                            paddingTop:50 }}>
                
                <div className="mask rgba-gradient align-items-center">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-6 mb-5 mt-md-0 mt-5 white-text text-center text-md-left" style={{paddingTop:'150px'}}>
                                <h1 className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Sign up right now! </h1>
                                <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s"></hr>
                                <h6 className="mb-3 wow fadeInLeft" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga
                                nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea
                                dolor molestiae, quisquam iste, maiores. Nulla.</h6>
                                <button className="btn btn-outline-white btn-lg btn-warning animated bounce delay-3s" data-wow-delay="0.3s" onClick={() => this.setState({ modalShow: true })}>
                                    <strong>Learn more</strong>
                                </button>
                            </div>
                            <div className="col-md-6 col-xl-5 mb-4">
                                <div className="card wow fadeInRight" data-wow-delay="0.3s" style={{backgroundColor:'#ffffffb0'}}>
                                    <form action="#" onSubmit={this.handleSubmit}>
                                        <div className="card-body">
                                            <div className="container my-1">
                                            <h2>Lend Money Now</h2>
                                                <hr className="pb-3"></hr>
                                                <div className="row">
                                                    <div className="col-md-12 mx-auto">
                                                        <div className="form-group pb-3">
                                                            <input type="text" id="name" name="name" className="form-control" required value={this.state.name} onChange={this.handleChange}></input>
                                                            <label className="form-control-placeholder" htmlFor="name"><i className="fas fa-user prefix white-text active pr-2"></i> Full Name</label>
                                                        </div>
                                                        <div className="form-group pb-3">
                                                            <input type="number" id="phone" name="phone" className="form-control" value={this.state.phone} onChange={this.handleChange} required></input>
                                                            <label className="form-control-placeholder" htmlFor="phone"><i className="fas fa-phone prefix white-text active pr-2"></i> Phone Number</label>
                                                        </div>
                                                        <div className="form-group pb-3">
                                                            <input type="email" id="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} required></input>
                                                            <label className="form-control-placeholder" htmlFor="email"><i className="fas fa-envelope-square prefix white-text active pr-2"></i> Email</label>
                                                        </div>
                                                        <div className="form-group pb-3">
                                                            <input type="number" id="amount" name="amount" className="form-control" value={this.state.amount} onChange={this.handleChange} required></input>
                                                            <label className="form-control-placeholder" htmlFor="amount"><i className="fas fa-money-bill prefix white-text active pr-2"></i> Amount Required</label>
                                                        </div>
                                                        <div className="form-group pb-3">
                                                            <input type="number" id="term" name="term" className="form-control" value={this.state.term} onChange={this.handleChange} required></input>
                                                            <label className="form-control-placeholder" htmlFor="term"><i className="fas fa-calendar prefix white-text active pr-2"></i> Loan Term (month)</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Modal show={this.state.modalShow} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                                                <Modal.Header>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                    Are you sure the data is correct?
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                Name:
                                                            </div>
                                                            <div className="col-md-8">
                                                                {this.state.name}
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                Phone Number: 
                                                            </div>
                                                            <div className="col-md-8">
                                                                {this.state.phone}
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                Email: 
                                                            </div>
                                                            <div className="col-md-8">
                                                                {this.state.phone}
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                Amount: 
                                                            </div>
                                                            <div className="col-md-8">
                                                                {this.state.amount}
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                Loan Term: 
                                                            </div>
                                                            <div className="col-md-8">
                                                                {this.state.term} Month
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-md btn-primary btn-full" onClick={this.handleSubmitModal}>Ok, Request Now</button>
                                                    <button className="btn btn-md btn-danger btn-full" onClick={modalClose}>Close</button>
                                                </Modal.Footer>
                                            </Modal>
                                            <div className="text-center m1-4">
                                                <button className="btn btn-indigo btn-block"   type="submit" style={{backgroundColor:'#27A4DD', color:'#fff'}}>Request</button>
                                                    <hr className="hr-light mb-3 mt-4"></hr>
                                                <div className="inline-ul text-center">
                                                    <i className="fab fa-twitter white-text"></i>
                                                    <i className="fab fa-linkedin-in white-text"> </i>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
            </div>
            <section className="overview-wrap mt-5 mb-5" id="overview" >
                <div className="container">
                    <div className="contenedor">
                        <h2 className="title-overview wow fadeInUp">How it Works?</h2>
                        <p className="subtitle-overview wow fadeInUp mb-4">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus</p>
                        <div className="row">
                            <div className="col-md-4 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                                <div className="overview-box mx-auto">
                                    <div className="features-icons-icon d-flex mb-3">
                                        <i className="fab fa-wpforms fa-5x html5 m-auto" style={{color:'#27A4DD'}}></i>
                                    </div>
                                    <h5>1. Fill the form</h5>
                                    <p className=" mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo ornare!</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                                <div className="overview-box mx-auto">
                                    <div className="features-icons-icon d-flex mb-3">
                                        <i className="fas fa-upload fa-5x css3 m-auto" style={{color:'#27A4DD'}}></i>
                                    </div>
                                    <h5>2. Upload your documents</h5>
                                    <p className=" mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo ornare!</p>
                                </div>
                            </div>
                        <div className="col-md-4 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                                <div className="overview-box mx-auto">
                                    <div className="features-icons-icon d-flex mb-3">
                                        <i className="fas fa-handshake fa-5x android m-auto" style={{color:'#27A4DD'}}></i>
                                    </div>
                                    <h5>Sign a contract</h5>
                                    <p className=" mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo ornare!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonials-wrap" id="testimonials" style={{ backgroundImage: 'url('+ bg2 + ')', backgroundRepeat: 'no-repeat', 
                                            backgroundSize: 'cover', backgroundPosition: 'center',
                                            paddingTop:50 }}>
                <div className="container">
                    <div className="contenedor">
                        <h2 className="title-testimonials wow fadeInUp">Happy Clients</h2>
                        <div className="slide-one">
                            <div id="demo" className="carousel slide" data-ride="carousel">
                                <ul className="carousel-indicators">
                                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                                    <li data-target="#demo" data-slide-to="1"></li>
                                    <li data-target="#demo" data-slide-to="2"></li>
                                </ul>
                                <div className="carousel-inner">
                                    <div className="carousel-item active ">
                                        <div className="banner-slide">
                                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="test"></img>
                                            <h5>Lorem Ipsum -</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                        <div className="banner-slide">
                                            <img src="https://images.pexels.com/photos/903661/pexels-photo-903661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt="test" className="img-fluid"></img>
                                            <h5>Lorem Ipsum -</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="banner-slide">
                                            <img src="https://images.pexels.com/photos/713520/pexels-photo-713520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt="test" className="img-fluid"></img>
                                            <h5>Lorem Ipsum -</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.</p>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev " href="#demo" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-next" href="#demo" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="overview-wrap mt-5 mb-5" id="overview" >
                <div className="container">
                   <h3>Get started now</h3>
                   <h4>Have working capital tomorrow</h4>
                </div>
                <button className="btn btn-indigo btn-lg btn-primary pr-5 pl-5 mt-3"  style={{backgroundColor:'#27A4DD', color:'#fff'}}>Request Now</button>
            </section>
        </div>
         );
    }
}
 
export default HomeScreen;