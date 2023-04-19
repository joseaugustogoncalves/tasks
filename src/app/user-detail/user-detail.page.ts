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
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class UserDetailPage implements OnInit, OnDestroy {
  constructor(private router: Router) {}
  showTextFlag: boolean = true;

  ngOnInit() {
    console.log('oninit');
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
}
