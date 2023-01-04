import { Component, Input } from '@angular/core';

@Component({
  selector: 'the-choice9ja-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text = "";
  @Input() to = false;
}
