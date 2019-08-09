import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';
@Directive({
  selector: "[modal-trigger]"
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId: string;

  constructor(@Inject(ElementRef) eleemntRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = eleemntRef.nativeElement;
  }

  ngOnInit(): void {
    console.log('Inside modalTrigger directive: ngOnInit');
    console.log(this.el);
    this.el.addEventListener('click', el => {
      this.$(`#${this.modalId}`).modal('show');

    });
  }

}
