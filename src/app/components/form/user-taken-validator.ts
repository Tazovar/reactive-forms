import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UniqueNicknameValidator implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate(control: AbstractControl<string | null>): Observable<ValidationErrors | null> {
    if (!control.value) {
      return of(null); 
    }
    return this.http.get<unknown[]>(`https://jsonplaceholder.typicode.com/users?username=${control.value}`).pipe(
      map(users =>
        users.length === 0
          ? null
          : { uniqueName: { isTaken: true, user: control.value } }
      )
    );
  }
}
