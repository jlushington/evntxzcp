import React, {Component} from 'react';

export default class ProductsList extends Component{

    constructor() {
        super();
    
        this.state = {
            products: []
        };
      }

      componentDidMount() {
        console.info("this is that");
        fetch('http://locationservices.jx-staging.35.231.104.48.nip.io/api/location/getalllocation')
        .then(response=>{
            return response.json();
        }).then(data=>{
            console.info("data->success");
            console.info(data);
            this.setState({products: data});
        }).catch((error) => {
            console.log("error");
        });
      }



    render(){
        const prods = this.state.products;

        return(
            <div class="container p-t-100">

            <div class="row p-b-20">
                <div class="col-8 font-regular">
                    <h1> Product Listing</h1>
                </div>

                <div class="col-4 text-right color-white font-light pt-3">
                        <a class="linkbutton font-regular font-75" href="/productadd">Add Event</a>
                    </div>
            </div>

            <div class="row">
                <table id="example" class="table table-striped table-bordered font-regular font-75">
                    <thead>
                        <tr className="bg-grey font-bold">
                            <th>Event Name</th>
                            <th>Event Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Action</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                    {
                                prods.map(prod => 
                            <tr>
                                <td>{prod.eventName}</td>
                                <td>{prod.eventDescription}</td>
                                <td>{prod.eventStartDate}</td>
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