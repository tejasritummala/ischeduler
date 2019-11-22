import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-pricing-tab',
  templateUrl: './pricing-tab.component.html',
  styleUrls: ['./pricing-tab.component.css']
})
export class PricingTabComponent implements OnInit {
  message: string;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }
  ngOnInit() {
  }
  sendMessage(evt) {
    if (evt.target.text.includes('Product')) {
      this.messageEvent.emit('Product');
    } else {
      this.messageEvent.emit(evt.target.text);
    }

  }
}
