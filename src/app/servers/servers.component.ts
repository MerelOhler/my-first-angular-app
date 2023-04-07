import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';

  constructor(){
    setTimeout(() => {this.allowNewServer = true;},2000);
  }

  ngOnInit() {}

  OnCreateServer() {
    this.serverCreationStatus = `Server was created! It's name is: ` + this.serverName;
  }
  OnUpdateServerName(name: any){
    this.serverName = name.target.value;
  }

}
