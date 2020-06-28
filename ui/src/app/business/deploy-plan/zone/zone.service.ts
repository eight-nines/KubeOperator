import {Injectable} from '@angular/core';
import {BaseModelService} from '../../../shared/class/BaseModelService';
import {HttpClient} from '@angular/common/http';
import {CloudZoneRequest, Zone} from './zone';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ZoneService extends BaseModelService<Zone> {

    baseUrl = '/api/v1/zones';

    constructor(http: HttpClient) {
        super(http);
    }

    listClusters(item: CloudZoneRequest): Observable<any> {
        const itemUrl = `${this.baseUrl}/clusters/`;
        return this.http.post<any>(itemUrl, item);
    }
}
