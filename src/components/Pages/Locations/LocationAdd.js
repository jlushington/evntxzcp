import React, {Component} from 'react';

export default class LocationAdd extends Component{

    render(){
        return(
            <div class="container p-t-100">
                <form>
                    <div class="row p-b-10">
                        <div class="col-8 font-regular">
                            <h3> Location Add</h3>
                        </div>
                    </div>
                    
                    <div class="row p-b-20">
                        <div class="col-10 font-regular form-section bg-grey font-regular font-75 color-lightgrey">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text color-lightgrey">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button type="submit" >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}