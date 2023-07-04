import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') isShow: boolean = false;
  @Output() onBtnClicked = new EventEmitter<boolean>();

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isShow = !this.isShow;
    this.onBtnClicked.emit(this.isShow);
  }
}
