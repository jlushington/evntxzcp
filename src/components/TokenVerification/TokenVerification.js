
export default class TokenVerification{

    constructor(settoken) {
        const token=settoken;
        const tokenAuth=false;
      }

      
     verifyToken(){
      const jwt = require('jsonwebtoken');
      
       console.info("TokenVerification->verifyToken");
       //CHECK IF AUTH
       this.tokenAuth=localStorage.getItem("isAuth");
       this.token=localStorage.getItem("authtoken");

       console.info(this.tokenAuth);
       console.info(this.token);

       if(this.tokenAuth){
        const decodedToken = jwt.decode(this.token);
        console.info(decodedToken);

        const tokenExpireDate=decodedToken.payload.iat;
        const currentDate = (new Date).getTime();

        if(tokenExpireDate>currentDate){
          localStorage.removeItem('authtoken');
          localStorage.removeItem('isAuth');
         // window.location.replace("http://localhost:8080/");
        }

       }else{
        //window.location.replace("http://localhost:8080/");
       }
      
     }
}