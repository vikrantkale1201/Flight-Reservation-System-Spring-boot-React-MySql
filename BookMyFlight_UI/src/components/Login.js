import React, { Component } from 'react';
import UserService from '../services/UserService';
import planeBG from "../assets/images/planebg1.jpg";
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

/** 
 * @author Vikrant
 * This component will render Login page for the app 
 * UserService: Service for authenticating user
*/
export default class Login extends Component{

    constructor(props){
        super(props);
        this.service=new UserService();
        this.state={
            username:"",
            password:"",
            errormsg:"",
            flag:false,
            btn:false,
            isAdmin:0
        }
    }

    /**
     * this method interacts with service to authenticate user
     * Store user data in local storage
     * Redirects to Admin/Booking component based on condition
     */
    validateUser=()=>{

        if(this.state.username!==''&& this.state.password!==''){
        this.service.validateUser(this.state.username,this.state.password).then(response=>{
                if(response.status===200){
                    localStorage.setItem('user',JSON.stringify(response.data));
                    if(response.data.isadmin===0)
                        this.props.history.push('/booking');
                    else
                        this.props.history.push('/admin');
                }
        }).catch(error=>{
            console.log(error);
            this.setState({errormsg:'Invalid username or password.',
            password:"",
            flag:true
        });
        });
     }else{
         alert('All fields are required');
     }
    }

    render(){
    return (
        <div class='pt-5'>
            <Header />
                <div class="py-5" style={{backgroundImage: `url(${planeBG})`,overflow: 'hidden', height: '600px'}}>
				<div class="row mb-4">
					<div class="col-lg-8 mx-auto text-center">
					<h1 class="display-6" style={{color:'white', fontWeight:'50pt'}}>Login</h1>
					</div>
                    
				</div> 
               
				<div class="row">
				<div class="col-md-6 mx-auto">
					<div class="card ">
					<div class="card-header">
                    <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                       
                    <div class="tab-content">
                        <div class="tab-pane fade show active pt-3">
                            <form >
                           
                                <div class="form-group"> 
									<h6><span class="form-label">Username</span></h6>
										<input type="text" name="username"  value={this.state.username} onChange={e=>this.setState({username:e.target.value})} class="form-control" />
								</div>
                                <div class="form-group"> 
									<h6><span class="form-label">Password</span></h6>
										<input type="password" name="password" value={this.state.password} onChange={e=>this.setState({password:e.target.value,flag:false,btn:true})} class="form-control" />
								</div>
								
                                <div class="card-footer" > <button type="button" disabled={!this.state.btn} onClick={this.validateUser} class="subscribe btn btn-primary btn-block shadow-sm">Login</button></div>
                            </form>
                        </div>
                        <br />{
                                this.state.flag&&<div style={{textAlign:'center'}} className="alert alert-danger"> {this.state.errormsg} </div>
                            }
                    </div>
                   </div>
                   <div classNameName="form-group" > 
				
                       <div ><Link className="card-link" to="/register"><button  type="button" className="btn  btn-link btn-block">New User? Register Now!</button></Link>  </div> 
                    </div>
                </div>
            </div>
        </div>
		</div>
	</div> 
    <Footer />
            </div>
    );
    }
 
}