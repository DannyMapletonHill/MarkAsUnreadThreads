import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MessageVM } from 'app/message-section/message.vm';

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // unchanged if not changed
})
export class ChatMessageComponent {

  @Input()
  message:MessageVM;


}
