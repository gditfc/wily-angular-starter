import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {BaseDataService} from 'wily-angular-commons';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/index';

@Injectable()
export class HomeDataService extends BaseDataService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  protected getBaseUrl(): string {
    return environment.baseUrl;
  }

  getThings(): Observable<Array<any>> {
    return this.handleGetList('/things');
  }

}
