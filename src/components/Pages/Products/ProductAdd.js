import React, {Component} from 'react';
import FileBase64 from 'react-file-base64';
import "antd/dist/antd.css";
import {DatePicker, TimePicker} from 'antd';
import {properties} from '../../../properties';

export default class ProductAdd extends Component{

    constructor() {
        super();
        this.state={
            locations:[],
            taxes:[],
            eventName:'',
            eventDescription:'',
            locationID:'', 
            age:'', 
            eventStartDate:'', 
            eventEndDate:'',
            eventPricing:[
                {
                    ticketPricingTitle:'',
                    ticketPricingDescription:'',
                    ticketPricingCurrency: '',
                    ticketPricingAmount: '',
                    ticketPricingNumber:'',
                    maxTicket:'',
                    taxesID:''
                }
            ],
            eventImage:[
                
            ]
       
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileupdateHandler=this.fileupdateHandler.bind(this);
        const headers= new Headers();
        headers.append('Content-Type', 'application/json');
      }

      componentDidMount() {
        //LOCATION
        fetch(properties.locationserviceurl+'/api/location/getalllocation')
        .then(response=>{
            return response.json();
        }).then(data=>{
            this.setState({locations: data});
        }).catch((error) => {
            console.log(error);
        });

        //TAXES
        fetch(properties.productserviceurl+'/api/tax/getalltaxes')
        .then(response=>{
            return response.json();
        }).then(data=>{
            this.setState({taxes: data});
        }).catch((error) => {
            console.log(error);
        });

      }


    fileupdateHandler (files){
        this.setState(
            {
                eventImage:files
            }
        )
    }

    handleChange = (e)=>{
        this.setState({ [e.target.name]: e.target.value });
    }

    handleChangeDate = (name, date, dateString)=>{
       this.setState({ [name]: dateString });
    }

    handleSubmit(event){
        event.preventDefault();
        console.info("hangle submit")
        console.info(this.state.eventImage[0].imageBase64)
        const data = {
            eventName:this.state.eventName, 
            eventDescription:this.state.eventDescription,
            locationID:this.state.locationID,
            age:this.state.age,
            eventStartDate:this.state.eventStartDate,
            eventEndDate:this.state.eventEndDate,
            eventPricing:[
                {
                    ticketPricingTitle:this.state.eventEticketPricingTitlendDate,
                    ticketPricingDescription:this.state.ticketPricingDescription,
                    ticketPricingCurrency: this.state.ticketPricingCurrency,
                    ticketPricingAmount: this.state.ticketPricingAmount,
                    ticketPricingNumber:this.state.ticketPricingNumber,
                    maxTicket:this.state.maxTicket,
                    taxesID:this.state.taxesID,
                }
            ],
            eventImage:this.state.eventImage

            
        };

        fetch(properties.productserviceurl+'/api/product/addproduct', {
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
        const locs = this.state.locations;
        const taxes = this.state.taxes;
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
                                    {
                                        locs.map(loc => 
                                        <option>{loc.locationName}</option>
                                        )
                                    }

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
                                    <DatePicker id="eventStartDate" aria-describedby="eventStartDate" name="eventStartDate" placeholder="Event Start Date" onChange={(date, dateString)=>this.handleChangeDate("eventStartDate", date, dateString)} />
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Event End Date</label>
                                    <DatePicker id="eventEndDate" aria-describedby="eventEndDate" name="eventEndDate" placeholder="Event End Date" onChange={(date, dateString)=>this.handleChangeDate("eventEndDate", date, dateString)} />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Event Image </label>
                                    <FileBase64 multiple={ true } onDone={ this.fileupdateHandler.bind(this) } />
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
                                    {
                                        taxes.map(tax => 
                                        <option>{tax.taxName}</option>
                                        )
                                    }
                                      
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