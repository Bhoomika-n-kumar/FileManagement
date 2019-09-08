import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharingService } from '../sharing.service';
import { Login, Folder } from '../login';
import { FormControlDirective } from '@angular/forms';

@Component({
  selector: 'app-adfolder',
  templateUrl: './adfolder.component.html',
  styleUrls: ['./adfolder.component.css'],
  providers: [SharingService]
})
export class AdfolderComponent implements OnInit {
  
  allUser : Login [];
  getUser:any;
  txt: any;  /*loginmodel;txt1: any;*/
  public array = [];
  set1 = new Set([]);
  number: any;
  uname:any
  allFolder : Folder [];
  yes:boolean;
  folder: any;

  constructor(private logSer : LoginService, private router: Router, private share: SharingService, private route: ActivatedRoute) { }

  ngOnInit() 
  {
    /*old this.loginmodel = this.logSer.getData(); old*///.subscribe(data => {this.loginmodel = data});
    //this.getAllUser();
    //this.getDataCom();
    this.initial();
    this.uname=this.route.snapshot.params['username'];
    //console.log(this.uname);
    this.getFolderNames();

  }

  create(name: Folder)
  {
    this.logSer.createFolder(name).subscribe();
  }

  /* not needed getDataCom()
  {
    this.getUser = this.logSer.getData();
    console.log(this.getUser);
  }*/

  /* not needed */
  getAllUser()
  {
    this.logSer.getAllUser().subscribe(
      (data: Login[]) => {
        this.allUser = data;
        console.table(this.allUser);
      });
  } /* not needed */

  getFolderNames()
  {
    this.logSer.getFolder().subscribe(
      (data: Folder[]) => {
        this.allFolder = data,
        console.table(this.allFolder);
      });
  }

  setIdnumber(id: number)
  {
    this.logSer.setIdNumber(id);
  }

   deleteEmployee(id : number)
  {
    console.log(id);
    this.logSer.deleteEmployee(id).subscribe(
    (data : Folder) =>
    {
      this.getFolderNames();
    });
  }

initial()
{
  document.getElementById('div2').setAttribute('style','border-style: dotted; width:90px; margin-left:20px;height:67px; margin-top:10px;float:left;'); 
}

setFolder(data:any)
{
  this.logSer.setFolder(data)
  console.log(data);
  /*this.folder = data;
  console.log(this.folder);*/
}

  yes1()
  {
    document.getElementById('folder').innerHTML = '';
  }

  display()
  {
    this.yes = true;
  }

myFunction1() 
{
  if(this.number == 1)
  {
    this.listView();
  }
  if(this.number == 2)
  {
    this.gridView();
  }
  if(this.number == 3)
  {
    this.originalView();
  }
  let person:any = prompt("Please enter folder name:");
  this.txt =  person ;
  if ( person == "" || person == null )
  {
    alert("Folder name is required");
  }
  else
  {
    for(let set of this.set1)
    {
      if(set == person )
      {
        alert('Folder exists. Enter a unique name');
      }
    }
    this.set1.add(person);
    document.getElementById('folder').innerHTML = '';
    //this.create(person);
    /* for (var i = 0; i <= this.array1.length; i++)
    {
      if(this.array1[i] == this.txt)
      {
        this.num = true;
        alert('Folder exists');
      }
      else{
        this.char = true;
      }
    }
    if(this.char == true )
    {
      this.dummy = true;
      this.array1.push(person);
      this.textchange();  
    }
    if(this.num == true)
    {
      this.dummy = false;
      let person1:string = prompt("Please enter folder name:");
      //txt1 =  person1 ;
      this.array2.push(person1); 
    }*/
  }
}


  
listView() 
{
  this.number = 1;
  var elements = document.getElementsByClassName("route1");
  var i;
  for (i = 0; i < elements.length; i++) 
  {
    elements[i].setAttribute('style','outline:none; border:none; cursr: pointer; margin-left:20px; margin-top:10px; height :30px ; display:block; background-color:#d1dade;width:1000px;text-align:left; padding:5px;');
  }
}

gridView() 
{
  this.number = 2;
  var elements = document.getElementsByClassName("route1");
  var i;
  for (i = 0; i < elements.length; i++) 
  {
    elements[i].setAttribute('style','outline:none; border:none; cursr: pointer; margin-left:20px; margin-top:10px; height :67px ; display:block;float:left; background-color:#d1dade;width:90px;text-align:center; padding:5px;');
  }
}       

originalView()
{
  this.number = 3;
  var elements = document.getElementsByClassName("route1");
  var i;
  for (i = 0; i < elements.length; i++) 
  {
    elements[i].setAttribute('style','outline:none; border:none; cursor: pointer; margin-top:20px; margin-left:20px; height :30px ;  width:90px; background-color:#d1dade;"');
  }
 }

 myFunction() 
 {
  //console.log(this.loginmodel);
  //this.message1 = this.loginmodel.username;
  //let txt:string;
  let person:string = prompt("Please enter folder name:");
  this.txt =  person ;
  if (person == null || person == "") 
  {
    alert("Folder name is required");
  } 
  else 
  {
    //let text1;
    for (var i = 0; i <= this.array.length; i++)
    {
      if(this.array[i] == this.txt)
      {
        alert('Folder exists.');
        
      }
    }
    this.array.push(person);
    //this.textchange();
    //this.text1 = txt;
    let button = document.createElement('button');
    let b = document.createTextNode(this.txt + ' ');
    button.setAttribute('style','outline:none; border:none; cursr: pointer; margin-left:20px; margin-top:20px; height :30px ; display:block; width:90px; background-color:#d1dade;');
    let css = "button:hover { background-color: #989fab} ";
    button.setAttribute('class','route1');
    var router = document.getElementById("route");
    router.appendChild(button);
    button.appendChild(b);    
    button.addEventListener("click", () => {this.share.setFolder (person);});
  }  
} 
}
