import React, {Component} from 'react';

export default class UserOrdersList extends Component{

    render(){
        return(
            <div class="container p-t-100">

            <div class="row p-b-20">
                <div class="col-8 font-regular">
                    <h1>Purchase Order</h1>
                </div>
            </div>

            <div class="row">
                <table id="example" class="table table-striped table-bordered font-regular font-75">
                    <thead>
                        <tr className="bg-grey font-bold">
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td>
                        </tr>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}