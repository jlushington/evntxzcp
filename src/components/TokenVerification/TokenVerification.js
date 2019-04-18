
export default class TokenVerification{

    constructor(settoken) {
        const token=settoken;
        const tokenAuth=false;
      }

      
     verifyToken(){
      const jwt = require('jsonwebtoken');
      
       console.info("TokenVerification->verifyToken");
       //CHECK IF AUTH
       if(this.tokenAuth){
        const decodedToken = jwt.decode(this.token);
        console.info(decodedToken);

        const tokenExpireDate=decodedToken.payload.iat;
        const currentDate = (new Date).getTime();

        if(tokenExpireDate>currentDate){
          localStorage.removeItem('authtoken');
          localStorage.removeItem('isAuth');
          window.location.replace("http://evntxzweb.jx-staging.35.231.104.48.nip.io/");
        }

       }else{
        window.location.replace("http://evntxzweb.jx-staging.35.231.104.48.nip.io/");
       }
      
     }
}