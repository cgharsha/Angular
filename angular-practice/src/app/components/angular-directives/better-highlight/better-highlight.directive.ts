import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor?: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = this.defaultColor;
  }
  @Input() defaultColor: string = 'transparent';
  // @Input() highlightColor: string = 'blue';
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  @HostListener('mouseenter') mouseover(evenData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(evenData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'backgroundColor',
    //   'transparent'
    // );
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
