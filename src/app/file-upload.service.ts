import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }


}




