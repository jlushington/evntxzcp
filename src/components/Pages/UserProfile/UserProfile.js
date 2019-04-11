import React, {Component} from 'react';

export default class UserProfile extends Component{

    render(){
        return(
            <div class="container p-t-100">
            <form>
                <div class="row p-b-10">
                    <div class="col-8 font-regular">
                        <h3> Profile- Personal Info</h3>
                    </div>
                </div>
                
                <div class="row p-b-20 font-regular form-section bg-grey font-regular font-75 color-lightgrey">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Firstname</label>
                                    <input type="text" id="firstname" aria-describedby="firstname" placeholder="firstname" />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Lastname</label>
                                    <input type="text" id="lastname" aria-describedby="lastname" placeholder="lastname" />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">DOB</label>
                                    <input type="text" id="dob" aria-describedby="dob" placeholder="dob" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="text" id="email" aria-describedby="email" placeholder="email" />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Gender</label>
                                    <select class="form-control" id="exampleFormControlSelect2">
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Profile PicS</label>
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row p-b-10 p-t-20">
                    <div class="col-8 font-regular">
                        <h3> Profile - Address Info</h3>
                    </div>
                </div>
                <div class="row p-b-20 font-regular form-section bg-grey font-regular font-75 color-lightgrey">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Address 1</label>
                                    <input type="text" id="Address1" aria-describedby="Address1" placeholder="Address1" />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Address 2</label>
                                    <input type="text" id="Address2" aria-describedby="Address2" placeholder="Address1" />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">City</label>
                                    <input type="text" id="City" aria-describedby="City" placeholder="City" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Province</label>
                                    <input type="text" id="province" aria-describedby="province" placeholder="province" />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Country</label>
                                    <input type="text" id="country" aria-describedby="country" placeholder="country" />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Postal Code</label>
                                    <input type="text" id="postalcode" aria-describedby="postalcode" placeholder="postalcode" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row p-b-10 p-t-20">
                    <div class="col-8 font-regular">
                        <h3> Profile - Contact Info</h3>
                    </div>
                </div>
                <div class="row p-b-20 font-regular form-section bg-grey font-regular font-75 color-lightgrey">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Telephone #</label>
                                    <input type="text" id="Address1" aria-describedby="Address1" placeholder="Address1" />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Mobile</label>
                                    <input type="text" id="Address2" aria-describedby="Address2" placeholder="Address1" />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Fax</label>
                                    <input type="text" id="City" aria-describedby="City" placeholder="City" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row p-b-20 p-t-20 justify-content-end">
                    <div class="col-2 font-regular justify-content-end">
                    <button type="submit" class="p-t-20">Save</button>
                    </div>
                </div>
                
            </form>
        </div>
        );
    }
}