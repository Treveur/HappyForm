import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { UserResponse } from '../models/UserResponse';

const API_BASE_URL = 'https://happyform.azurewebsites.net/API/';
const API_FORMS = 'UserResponseAPI/';

@Injectable({
    providedIn: 'root'
})
export class UserResponseService {

    constructor(private http: HttpClient) { }

    getUserResponse(): Observable<Array<UserResponse>> {
        return this.http.get<Array<UserResponse>>(`${API_BASE_URL}${API_FORMS}`)
            /*.map(response => {
                const userResps = response.json();
                return userResps.map(userResp => new UserResponse(userResp.Id, userResp.Input, userResp.ResponseId));
            })*/;
    }

    postUserResponse(userResp: UserResponse): Observable<UserResponse> {
        return this.http.post<UserResponse>(`${API_BASE_URL}${API_FORMS}`, userResp);
    }
}
