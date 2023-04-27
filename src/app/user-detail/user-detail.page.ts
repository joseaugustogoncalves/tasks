import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit, OnDestroy {
  
  showTextFlag: boolean = true;
  teste = "ttttt";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  toggleShowText() {
    console.log('toggleShowText');
    console.log(this.showTextFlag);
    this.showTextFlag = !this.showTextFlag;
    console.log(this.showTextFlag);
  }

  navigate() {
    this.router.navigate(['/tabs'], { replaceUrl: true });
  }

}
