import { tap } from 'rxjs/operators';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType,
} from '@angular/common/http';
export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("Outgoing Request");
    console.log(req.url);
    console.log(req.headers)
    return next.handle(req).pipe(tap(event => {
      if(event.type === HttpEventType.Response){
        console.log("Incoming Response");
        console.log(event.body);
      }
    }));
  }
}
