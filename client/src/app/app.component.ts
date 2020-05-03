import { Component, OnInit } from '@angular/core';
import { FaqsService } from './services/faqs.service';
import { Results } from './faq.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit  {

  constructor(private faqService: FaqsService){}
  public results: Results[];
  public updated: string;

  ngOnInit() {
    this.faqService.getFaqs().subscribe((data)=> {
      this.results = data.results;
      this.updated = data.updated;
    });
  }

}
