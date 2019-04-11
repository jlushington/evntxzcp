import React, {Component} from 'react';

export default class LocationsList extends Component{

    constructor() {
        super();
    
        this.state = {
            locations: []
        };
      }

      componentDidMount() {
        console.info("this is that");
        fetch('http://localhost:8000/api/location/getalllocation')
        .then(response=>{
            return response.json();
        }).then(data=>{
            console.info("data->success");
            console.info(data);
            this.setState({locations: data});
        }).catch((error) => {
            console.log("error");
        });
      }


    render(){
        const rtnlocs = this.state.locations;

        return(
            <div class="container p-t-100">

                <div class="row p-b-20">
                    <div class="col-8 font-regular">
                        <h1> Location Listing</h1>
                    </div>

                    <div class="col-4 text-right color-white font-light">
                        <a href="/locationadd" className="button">Add Location</a>
                    </div>
                </div>

                <div class="row">
                    <table id="example" class="table table-striped table-bordered font-regular font-75">
                        <thead>
                            <tr className="bg-grey font-bold">
                                <th>Location Type</th>
                                <th>Location Name</th>
                                <th>Address</th>
                                <th>Tel</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rtnlocs.map(rtnloc => 
                            <tr>
                                <td>{rtnloc.LocationTypeID}</td>
                                <td>{rtnloc.locationName}</td>
                                <td>{rtnloc.locationAddress1} {rtnloc.locationAddress2}, {rtnloc.locationCity} {rtnloc.locationProvinceState}, {rtnloc.locationPostalCodeZip}</td>
                                <td>{rtnloc.locationTel}</td>
                                <td>{rtnloc.locationEmail}</td>
                                <td>Edit</td>
                            </tr>
                            )}
                           
                        </tbody>
                    </table>
                </div>
            </div>
           
        );
    }
}