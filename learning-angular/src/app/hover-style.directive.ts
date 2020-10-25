import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

  constructor(private elm: ElementRef) {}

  @HostListener('mouseenter') onEnter(): void{
    if (this.elm.nativeElement.id === 'tags') {
      this.elm.nativeElement.style.fontWeight = 'bold';
    }
    else if (this.elm.nativeElement.id === 'title') {
      this.elm.nativeElement.style.textDecoration = 'underline';
    }
  }

  @HostListener('mouseleave') onExit(): void{
    if (this.elm.nativeElement.id === 'tags') {
      this.elm.nativeElement.style.fontWeight = 'normal';
    }
    else if (this.elm.nativeElement.id === 'title') {
      this.elm.nativeElement.style.textDecoration = 'none';
    }
  }
}
