import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu:[
        { title: 'Main', url: '/'},
        { title: 'ProgressBar', url: 'progress'},
        { title: 'Graficas', url: 'graph1'},
        { title: 'Promesas', url: 'promises'},
        { title: 'RxJs', url: 'rxjs'}
      ]
    }
  ];

  constructor() { }
}
