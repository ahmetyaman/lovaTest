import { Injectable } from '@angular/core';
import { ErrorHandling } from '../../localserv/errorHandling';
import { ServConfig } from '../../servconfig';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { AlertifyService } from '../../globalserv/alertify.service';
import { LanguageModel } from '../../models/LanguageModel';
import { LanguageWeb } from '../../models/LanguageWeb';

@Injectable()
export class LangTranslationService extends ErrorHandling {
  path = ServConfig.ApiPath + '/languages';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization':'Token'
    }),
  };

  constructor(
    private http: HttpClient,
    private alertifyService: AlertifyService
  ) {
    super();
  }

  getLanguages(): Observable<LanguageWeb[]> {
    return this.http.get<LanguageWeb[]>(this.path, this.httpOptions).pipe(
      tap((data) => {
        return this.tapIntercepter(data);
      }),
      catchError(this.handleError)
    );
  }

  getData () { 

    this.getLanguages ().subscribe(data=>{
      this._langWeb =data;
    })
  }
   private _langWeb :LanguageWeb[];
  translate(langType: string,langKey: string,defaultVal?: string): string {
    let retVal: string = '';

    if( this._langWeb==undefined || this._langWeb.length==0)
         this.getData();

    let selectedLangWeb: LanguageWeb = this._langWeb?.filter(
      (lang) => lang.lang_type.toLocaleLowerCase().indexOf(langType) !== -1
    )[0];

    let selectedWords: LanguageModel[] = selectedLangWeb?.words;

    let findWord: LanguageModel = selectedWords?.filter(
      (w) =>
        w.txt_name.toLocaleLowerCase().indexOf(langKey.toLocaleLowerCase()) !==
        -1
    )[0];

    if (findWord != undefined && findWord != null) retVal = findWord.txt_lang;

    if (retVal == '') {
      if (defaultVal) {
        /**
         * defaultLangVal  degeri  örneğin tr   default dil olsun  servisten dönen deger
         * boş olduğundan  bu degeri içeri yazalım :)
         */

        let word: LanguageModel = { txt_lang: defaultVal, txt_name: langKey };
        this.addWord(word, 'tr');
        this.addWord(word, 'es');

        this.addWord(word, 'en');
        this.addWord(word, 'ch');

        retVal = defaultVal;
      }
    }

    return retVal;
  }



  addWord(word: LanguageModel, langType: string) {
    let wordString: string = langType + ':' + JSON.stringify(word);
    this.alertifyService.success(' addedd word  :   ' + wordString);
  }
}
