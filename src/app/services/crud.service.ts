import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CrudService<T extends { id: number | string }> {

    constructor(
        protected http: HttpClient,
        @Inject(String) private API_URL: string
    ) { }

    list(): Observable<T[]> {
        return this.http.get<T[]>(this.API_URL);
    }

    getById(id:number | string): Observable<T> {
        return this.http.get<T>(`${this.API_URL}/${id}`);
    }

    private create(record: T) {
        return this.http.post(this.API_URL, record); 
    }

    private update(record: T) {
        return this.http.put(`${this.API_URL}/${record['id']}`, record); //.pipe(take(1));
    }

    save(record: T) {
        if (record['id']) {
            return this.update(record);
        }
        return this.create(record);
    }

    delete(id: number): Observable<T> {
        return this.http.delete<T>(`${this.API_URL}/${id}`); //.pipe(take(1));
    }

}
