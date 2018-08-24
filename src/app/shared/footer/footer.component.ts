import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) {     
  }

  ngOnInit() {
  }
  ngAfterContentInit(){
    setTimeout((router: Router) => {
    this.loadFormScript();
    },0);
  }
  public loadFormScript(): Promise<any> {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = './assets/js/custom.js';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
   });
  }
}
