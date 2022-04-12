import { Component, OnInit } from '@angular/core';
import { LangTranslationService } from './services/globalpipes/langpipe/lang-translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'lova-angui-spa';

  constructor(private languageTranslationService:LangTranslationService){}
  ngOnInit(): void {
    
    this.languageTranslationService.getData();
  }
}
