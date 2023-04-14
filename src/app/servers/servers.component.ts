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
  serverCreated = false;
  servers = ['TestServer 01', 'TestServer 02']


  constructor() {
    setTimeout(() => { this.allowNewServer = true; }, 2000);
  }

  ngOnInit() { }

  OnCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  OnUpdateServerName(name: any) {
    this.serverName = name.target.value;
  }

}
