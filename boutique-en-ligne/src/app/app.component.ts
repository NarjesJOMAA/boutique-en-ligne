import { Component } from '@angular/core';

import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import {faGem} from '@fortawesome/free-solid-svg-icons';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';

import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'boutique-en-ligne';
  faMoneyBillAlt = faMoneyBillAlt;
  faTruck = faTruck;
  faGem = faGem;
  faShoppingBag = faShoppingBag;
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  videoShow: boolean;
  contactShow: boolean;

  constructor() {
  }

  onAffiche(nom) {

    if (nom === 'home'){
      this.videoShow = true;
    }else{
      this.videoShow = false;
    }

    if (nom === 'contact'){
      this.contactShow = false;
    }else{
      this.contactShow = true;
    }


  };


}



