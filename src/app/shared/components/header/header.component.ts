import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() toggleSideBar = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  
  headerCalling(){
    this.toggleSideBar.emit();
    
    // the code for charts dynamically sits in the page as the sidebar toggles.
    setTimeout(()=>{
       window.dispatchEvent(
          new Event('resize')
      );
  }, 300);
  }
}
