import { Form } from '../models/Form';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BASE_URL = 'https://happyform.azurewebsites.net/API/';
const API_FORMS = 'FormAPI/';

@Injectable({
    providedIn: 'root'
})
export class FormServiceApi {
    constructor(private http: HttpClient) { }

    getForms(): Observable<Array<Form>> {
        return this.http.get<Array<Form>>(`${API_BASE_URL}${API_FORMS}`);
    }

    getForm(idForm: number): Observable<Form> {
        return this.http.get<Form>(`${API_BASE_URL}${API_FORMS}${idForm}`);
    }

}
