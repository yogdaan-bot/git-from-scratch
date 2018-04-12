import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommunicateService } from '../communicate.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  commands = this.comm.getCommands();
  cli = '';

  constructor(private renderer: Renderer2, private comm: CommunicateService) { }

  ngOnInit() {
    const element = this.renderer.selectRootElement('#input-cli');
    setTimeout(() => element.focus(), 0);
  }

  executeCommand($event) {
    if ($event.which === 13) {
      this.comm.addCommand(this.cli);
      this.cli = '';
    }
  }

}
