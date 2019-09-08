import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  /*private folderName = new Subject<string>();
  folder$ = this.folderName.asObservable();*/

  public Folder:string;
  /*private data:any;

  constructor() { }

  setData(data:any)
  {
    this.data = data;
  }

  getData():any{
    return this.data;
  } */

  setFolder(folder:any)
  {
    this.Folder = folder;
    console.log(this.Folder);
  }

  getFolder():any
  {
    console.log(this.Folder);
    return this.Folder;
  }


}

