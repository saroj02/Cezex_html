import { Component, OnInit, ViewEncapsulation,TemplateRef, Inject  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.document.body.classList.add('home');
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnDestroy(){
    this.document.body.classList.remove('home');
  }

}

