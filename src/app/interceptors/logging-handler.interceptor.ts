import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';

@Injectable()
export class LoggingHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime = Date.now();
    let status: string;

    return next.handle(request).pipe(
        tap(
          event => {
            status = '';
            if (event instanceof HttpResponse) {
              status = 'succeeded';
            }
          },
          error => status = 'failed'
        ),
        finalize(() => {
          const elapsedTime = Date.now() - startTime;
          const message = request.method + " " + request.urlWithParams +" "+ status 
          + " in " + elapsedTime + "ms";
          
          // console.log(message);
        })
    );
  }
}

export const LoggingInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoggingHandlerInterceptor,
  multi: true
}
