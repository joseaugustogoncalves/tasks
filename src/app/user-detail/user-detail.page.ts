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
  numeroUm = 200;
  numeroDois = 440;

  numeroUmT2 = "Beragaaaaa!!!";
  numeroDoisT2 = 0;


  resultado = "Sem nada!!!";
  resultadoT2 = "Fcp Campião!!! ó murcum!!!"; 


  userName: String = 'jarg';
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

  mostrarEsconder() {
    console.log("mostrarEsconder()");
    console.log(this.showTextFlag);
    
    let temp = ! this.showTextFlag;
    this.showTextFlag = temp;

    this.userName = this.userName + " Fcp campião";
  }

  // Implementar a funçºao do btn Soma versão final
  somaFinal() {
    console.log("SomaFinal");
    console.log("num1", this.numeroUm);
    console.log("num2", this.numeroDois);

    this.resultado = "" + 
    this.numeroUm + this.numeroDois;
  }

  concatenarT2() {
    this.resultadoT2 = this.numeroUmT2 + " " + this.numeroDoisT2;
  }

}
