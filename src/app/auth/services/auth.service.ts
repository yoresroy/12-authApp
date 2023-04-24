import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl : string = environment.baseUrl;
  private _usuario! : Usuario;


  get usuario() {
    return { ...this._usuario };
  }

  constructor(
    private http : HttpClient
  ) { }



  login( email: string, password: string) {
    
    const url = `${ this.baseUrl }/auth`;    
    const body = { email, password};

    return this.http.post<AuthResponse>(url, body)
    .pipe(
      tap( resp => { 
        if ( resp ) {
          this._usuario = {
            name : resp.name!,
            uid : resp.uid!
          }
        }
      }),
      map( resp => resp.ok ),
      catchError( err => of(false) )
    );
  }


}
