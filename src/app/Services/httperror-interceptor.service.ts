import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, concatMap, of, retryWhen, throwError } from "rxjs";
import { AlertifyService } from "./alertify.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class HttpErrorInterceptorService implements HttpInterceptor{


  constructor(private alertify: AlertifyService){}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
      console.log("HTTP Request Started");
      return next.handle(request)
        .pipe(
          retryWhen(error =>
            error.pipe(
              concatMap((checkErr: HttpErrorResponse, count: number) => {
                if(checkErr.status === 0) {
                  return of(checkErr);
                }
                return throwError(checkErr);
              })
            )

          ),
          catchError((error: HttpErrorResponse) => {
            const errorMessage = this.setError(error);
            console.log(error);
            this.alertify.error(errorMessage);
            return throwError(errorMessage);
          })
        );
  }



  setError(error: HttpErrorResponse) :string{
    let errorMessage = 'Unknown error occured';
    if (error.error instanceof ErrorEvent){
      //client side error
      errorMessage = error.error.message;
    }else{
      //Server side error
      if(error.status!==0){
        errorMessage = error.error.errorMessage;
      }
    }
    return errorMessage;
  }
}
// function retrywhen(): import("rxjs").OperatorFunction<HttpEvent<any>, unknown> {
//   throw new Error("Function not implemented.");
// }

