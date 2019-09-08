import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login, Folder } from './login';
import { Observable } from 'rxjs';

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

 getArrayData(): Observable<any>
 {
   let a = this.http.get(this.url + '/' + this.id1);
   console.log(a);
   return a;
 }

 patchFiles(a, name)
 {
   a.push(name);
  //console.log(this.id1);
  return this.http.patch(this.url + '/' + this.id1 , {Files : a} );
 }

 getSpecificData(): Observable<any> 
 {
   return this.http.get(this.url + '/' + this.id1, headerOption);
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
