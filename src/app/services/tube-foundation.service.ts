import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { TubeFoundation } from '../models/tube-foundation';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TubeFoundationService extends CrudService<TubeFoundation> {
    
    constructor(protected override http: HttpClient) {
        super(http, `${environment.API}tubeFoundations`);
    }
    
}
