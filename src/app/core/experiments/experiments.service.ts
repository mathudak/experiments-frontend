import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiments } from '../interfaces';
import { map } from 'rxjs/operators';
import { API } from 'app/shared/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ExperimentsService {
  constructor(private httpCLient: HttpClient) {}

  getExperiments(): Observable<Array<Experiments>> {
    return this.httpCLient.get(`${API}/experiments`).pipe(
      map((result: any) => {
        return result && result.data ? result.data : [];
      }),
    );
  }
}
