import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faqs } from '../faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  constructor(private http: HttpClient) {}

  getFaqs(): Observable<Faqs> {
    return this.http.get<Faqs>('/faqs');
  }
}

