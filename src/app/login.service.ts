import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login, Folder } from './login';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Url: string = 'http://localhost:3000/User'; 
  url: string = 'http://localhost:3000/Folder';
  id : number = 1; 
  data : any;
  fold : any;
  id1 : number;
  pushValue: any = [];
 
  currentUser: Login = {
    id:0,
    username: '',
    password: ''  }

  currentFolder: Folder = {
    id:null,
    name: '',
    Files :[ ]
  }

  constructor(private http: HttpClient) { }
   
  getAllUser(): Observable<Login[]> {
    return this.http.get<Login[]>(this.Url , headerOption);
  }

  /*Used in login*/
  createUser(login : Login): Observable<Login> {
    return this.http.post<Login>(this.Url, login, headerOption);
  } 

  /*used in adfolder*/
  getFolder():Observable<Folder[]>
  {
    return this.http.get<Folder[]>(this.url, headerOption);
  }

  /*used in adfolder*/
  createFolder(folder : Folder): Observable<Folder> {
    return this.http.post<Folder>(this.url, folder, headerOption);
  }
  
  /*used in adfolder*/
  deleteEmployee(id : number): Observable<Folder>
  { 
    return this.http.delete<Folder>(this.url + '/' + id, headerOption);    
  } 

 /*used in adfolder*/
 setIdNumber(id: number)
 {
   this.id1 = id;
   console.log(this.id1);
 }

 getIdNumber()
 {
   return this.id1;
 }

 getArrayData(id : number): Observable<any>
 {
   let a = this.http.get(this.url + '/' + id);
   console.log(a);
   return a;
 }

 uniqueId = uuid.v4();

 patchFiles(a, name, id : number)
 {
   //this.pushValue.push(name);
   a.push({"key": this.uniqueId, "value": /*this.pushValue*/ name});
   let n = 0;
   n++;
   //console.log(this.id1);
   return this.http.patch(this.url + '/' + id , {Files : a /*{"key" : n, "value" : name}*/ } );
 }

 patchDeletedFile(id: number,ar ) 
 {
  return this.http.patch(this.url + '/' + id , {Files : ar/*{"key" : n, "value" : name}*/ } );
 }

 deletePatchedFile(id: number, a)
 {
   return this.http.delete(this.url + '/' + id, a )
 }

 getSpecificData(id : number): Observable<any> 
 {
   return this.http.get(this.url + '/' + id, headerOption);
 }

 /*setData(data:any)
 {
   this.data = data;
 }

  getData(): any{
    console.log(this.data);  
    return this.data;
  }*/

  increment()
  {
    this.id++ ;
  }

  /*used in adfolder*/setFolder(data:any)
  {
    this.fold = data;
    console.log(this.fold);
  }

  /*used in file-upload*/getFoldr():any{
    return this.fold;
  }
  
}
