import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @HostBinding('style.background') private background = '#eee';

  constructor() { }

  @HostListener('dragover', ['$event']) onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
    //do some stuff
    this.background = '#eee';

  }

  @HostListener('drop', ['$event']) public onDrop(evt){
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;
    if(files.length > 0){
      //do some stuff
      this.background = '#eee';
    }
  }

}
