import React, {Component} from 'react';
import {properties} from '../../properties';

export default class AuthCallback extends Component{

    constructor(props) {
        super(props);
      }

    componentDidMount() {

        const values= this.props.match.params;

        const payload={
            randomToken: values.authID
        }
        
        fetch(properties.userserviceurl+'/api/auth/tokenaccess', 
        {method: 'POST',crossDomain:true, mode:"cors",
         headers: { 'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json','Access-Control-Allow-Origin':'*'},
             body:  JSON.stringify(payload)
           }).then(response => {
               return response.json();
           }).then( data=>{
               if(data.MessageTypeID ===0){
                   console.info("error");
               }else{
                   localStorage.setItem("authToken", data.Message);
                   localStorage.setItem("isAuth", true);

                   // var t = new TokenVerification(authtoken);
                   // t.verifyToken();
                   
                   window.location.replace(properties.cpurl+"/userprofile");
               }
   }).catch((error) => {
       console.log(error);
   });


    

      }

    render(){
        return(
            <div class="container p-t-100">
            </div>
            );
        }
    }