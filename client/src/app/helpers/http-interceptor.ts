import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let newReq = req;
    newReq = req.clone({ url: BASE_URL + req.url });
    return next.handle(newReq);
  }
}

export const InterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
];
