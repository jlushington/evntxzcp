import React, {Component} from 'react';

export default class ProductAdd extends Component{

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
                        <h3> Event- Info</h3>
                    </div>
                </div>
                
                <div class="row p-b-20 font-regular form-section bg-grey font-regular font-75 color-lightgrey">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-6">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Event Name</label>
                                        <input type="text" id="eventName" aria-describedby="eventName" name="eventName" placeholder="Event Name" onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Ages</label>
                                    <select class="form-control" id="age" name="age" onChange={this.handleChange}>
                                        <option>All Ages</option>
                                        <option>18+</option>
                                        <option>21+</option>
                                    </select>
                                </div>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Location</label>
                                    <select class="form-control" id="locationID" name="locationID" onChange={this.handleChange}>
                                        <option>5c8d4016d610e332945e7612</option>
                                        <option>Location 2</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Event Description</label>
                                    <textarea class="form-control" id="eventDescription" name="eventDescription" rows="5" onChange={this.handleChange}></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Event Start Date</label>
                                    <input type="text" id="eventStartDate" aria-describedby="eventStartDate" name="eventStartDate" placeholder="Event Start Date" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Event End Date</label>
                                    <input type="text" id="eventEndDate" aria-describedby="eventEndDate" name="eventEndDate" placeholder="Event End Date" onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row p-b-10 p-t-20">
                    <div class="col-8 font-regular">
                        <h3> Event - Ticket Price </h3>
                    </div>
                </div>
                <div class="row p-b-20 font-regular form-section bg-grey font-regular font-75 color-lightgrey">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Ticket Name</label>
                                    <input type="text" id="ticketPricingTitle" aria-describedby="ticketPricingTitle" name="ticketPricingTitle" placeholder="Ticket Pricing Title" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Ticket Description</label>
                                    <textarea class="form-control" id="ticketPricingDescription" name="ticketPricingDescription" rows="5" onChange={this.handleChange}></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-2">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Ticket Currency</label>
                                    <select class="form-control" id="ticketPricingCurrency" name="ticketPricingCurrency" onChange={this.handleChange}>
                                        <option>CND</option>
                                        <option>USD</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Amount</label>
                                    <input type="text" id="ticketPricingAmount" aria-describedby="ticketPricingAmount" name="ticketPricingAmount" placeholder="Ticket Pricing Amount" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Ticket Number</label>
                                    <select class="form-control" id="locationCountry" name="locationCountry" onChange={this.handleChange}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Max Ticket Purchase</label>
                                    <select class="form-control" id="locationCountry" name="locationCountry" onChange={this.handleChange}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Taxes</label>
                                    <select class="form-control" id="taxesID" name="taxesID" onChange={this.handleChange}>
                                        <option>5c8d4016d610e332945e7612</option>
                                      
                                    </select>
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