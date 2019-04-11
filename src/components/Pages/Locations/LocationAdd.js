import React, {Component} from 'react';

export default class LocationAdd extends Component{

    constructor() {
        super();
        this.state={
            locationName:'',
            locationDescription:'',
            locationAddress1:'', 
            locationAddress2:'', 
            locationProvinceState:'', 
            locationCity:'', 
            locationPostalCodeZip:'', 
            locationCountry:'', 
            locationTel:'', 
            locationEmail:'', 
            LocationTypeID:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        const headers= new Headers();
        headers.append('Content-Type', 'application/json');
      }


    handleChange = (e)=>{
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        const data = {
            locationName:this.state.locationName, 
            locationDescription:this.state.locationDescription,
            locationAddress1:this.state.locationAddress1,
            locationAddress2:this.state.locationAddress2,
            locationProvinceState:this.state.locationProvinceState,
            locationCity:this.state.locationCity,
            locationPostalCodeZip:this.state.locationPostalCodeZip,
            locationCountry:this.state.locationCountry,
            locationTel:this.state.locationTel,
            locationEmail:this.state.locationEmail,
            LocationTypeID:this.state.LocationTypeID
        };

        fetch('http://localhost:8000/api/location/addlocation', {
            method: 'POST',
            crossDomain:true,
            mode:"cors",
            headers: { 'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
            body:  JSON.stringify(data)
          }).then(response => {
              return response.json();
            }).then( data=>{
                console.info(data);
            }).catch((error) => {
                console.log("error");
            });
      }


    render(){
        return(
            <div class="container p-t-100">
            <form onSubmit={this.handleSubmit}>
                <div class="row p-b-10">
                    <div class="col-8 font-regular">
                        <h3> Location- Info</h3>
                    </div>
                </div>
                
                <div class="row p-b-20 font-regular form-section bg-grey font-regular font-75 color-lightgrey">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4">
                            <div class="row">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Location Name</label>
                                    <input type="text" id="locationName" aria-describedby="locationName" name="locationName" placeholder="Location Name" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Location Type</label>
                                    <input type="text" id="LocationTypeID" aria-describedby="LocationTypeID" name="LocationTypeID" placeholder="Location Type ID" onChange={this.handleChange} />
                                </div>
                            </div>
                            </div>
                            <div class="col-8">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Location Description</label>
                                    <textarea class="form-control" id="locationDescription" name="locationDescription" rows="5" onChange={this.handleChange}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row p-b-10 p-t-20">
                    <div class="col-8 font-regular">
                        <h3> Location - Address Info</h3>
                    </div>
                </div>
                <div class="row p-b-20 font-regular form-section bg-grey font-regular font-75 color-lightgrey">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Address 1</label>
                                    <input type="text" id="locationAddress1" aria-describedby="locationAddress1" name="locationAddress1" placeholder="Location Address 1" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Address 2</label>
                                    <input type="text" id="locationAddress2" name="locationlocationAddress2Address1" aria-describedby="locationAddress2" placeholder="Location Address 2" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">City</label>
                                    <input type="text" id="locationCity" name="locationCity" aria-describedby="locationCity" placeholder="Location City" onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Province</label>
                                    <input type="text" id="locationProvinceState" name="locationProvinceState" aria-describedby="locationProvinceState" placeholder="Location Province/State" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Country</label>
                                    <select class="form-control" id="locationCountry" name="locationCountry" onChange={this.handleChange}>
                                        <option>Canada</option>
                                        <option>USA</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Postal Code</label>
                                    <input type="text" id="locationPostalCodeZip" name="locationPostalCodeZip" aria-describedby="locationPostalCodeZip" placeholder="Location PostalCode/Zip" onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row p-b-10 p-t-20">
                    <div class="col-8 font-regular">
                        <h3> Location - Contact Info</h3>
                    </div>
                </div>
                <div class="row p-b-20 font-regular form-section bg-grey font-regular font-75 color-lightgrey">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Telephone #</label>
                                    <input type="text" id="locationTel" name="locationTel" aria-describedby="locationTel" placeholder="Location Telephone #" onChange={this.handleChange}/>
                                </div>
                            </div>
                            
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="text" id="locationEmail" name="locationEmail" aria-describedby="locationEmail" placeholder="Email" onChange={this.handleChange}/>
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