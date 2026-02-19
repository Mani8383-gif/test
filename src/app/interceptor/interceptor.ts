   
   import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
   let token=localStorage.getItem('token')
        
        
        
        if(!token){
            return next(req);
        }
        
        let authreq=req.clone({
            setHeaders:{
                 Authorization: `${token}`
            }
        })
        return next(authreq);

};

   
   
   
   
   
   
   
