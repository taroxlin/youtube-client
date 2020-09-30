import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderColorDirective]'
})
export class BorderColorDirective implements OnInit {
  @Input() public date: Date;

  constructor(private elem: ElementRef,
              private render: Renderer2) { }

  public ngOnInit(): void {
    const el: ElementRef = this.elem.nativeElement;
    const actualDate: number = new Date().getTime();
    const publishDate: number = new Date(this.date).getTime();
    const daysAgo: number = (actualDate - publishDate) / (24 * 60 * 60000);
    const borderWide: String = '4px solid ';
    if (daysAgo < 7) {
      this.render.setStyle(el, 'border-bottom',  borderWide + 'blue');
    }
    if (daysAgo < 30 && daysAgo >= 7) {
      this.render.setStyle(el, 'border-bottom',  borderWide + 'green');
    }
    if (daysAgo < 180 && daysAgo >= 30) {
      this.render.setStyle(el, 'border-bottom', borderWide + 'yellow');
    }
    if (daysAgo >= 180) {
      this.render.setStyle(el, 'border-bottom', borderWide + 'red');
    }
  }
}
