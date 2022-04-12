import { AfterViewInit, OnInit, Pipe, PipeTransform } from '@angular/core';
import { async } from '@angular/core/testing';
import { AuthService } from '../../globalserv/auth.service';
import { LanguageModel } from '../../models/LanguageModel';
import { LanguageWeb } from '../../models/LanguageWeb';

import { LangTranslationService } from './lang-translation.service';

@Pipe({
  name: 'langTrans',
})
export  class LangTransPipe implements PipeTransform {
    constructor(
    private languageTranslationService: LangTranslationService,
    private authService: AuthService
  ) {
   
  }

 

  transform(val: string, defaultLangVal?: string): string {
    let retVal: string = '';
    let token_ ="tr";

    token_ = 'tr';

    if (token_) token_ = 'es';
    else token_ = 'en';
  

    return this.languageTranslationService.translate(token_, val, defaultLangVal);
  }



 
}
