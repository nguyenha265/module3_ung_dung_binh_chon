import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  point: number = 0;
  color1: string = "";
  color2: string = "";
  color3: string = "";
  color4: string = "";
  color5: string = "";
  color6: string = "";
  color7: string = "";
  color8: string = "";
  color9: string = "";
  color10: string = "";


  click1(value) {
    this.color1 = "#4CAF50";
    this.point = value;
  }

  click2(value) {
    this.color2 = "#4CAF50";
    this.point = value;
    this.click1(value)
  }

  click3(value) {
    this.color3 = "#4CAF50";
    this.point = value;
    this.click2(value)
  }

  click4(value) {
    this.color4 = "#4CAF50";
    this.point = value;
    this.click3(value)
  }

  click5(value) {
    this.color5 = "#4CAF50";
    this.point = value;
    this.click4(value)
  }
  click6(value) {
    this.color6 = "#4CAF50";
    this.point = value;
    this.click5(value)
  }click7(value) {
    this.color7 = "#4CAF50";
    this.point = value;
    this.click6(value)
  }click8(value) {
    this.color8 = "#4CAF50";
    this.point = value;
    this.click7(value)
  }click9(value) {
    this.color9 = "#4CAF50";
    this.point = value;
    this.click8(value)
  }
  click10(value) {
    this.color10 = "#4CAF50";
    this.point = value;
    this.click9(value)
  }
  reset(){
    this.point = 0;
    this.color1 = "";
    this.color2 = "";
    this.color3 = "";
    this.color4 = "";
    this.color5 = "";
    this.color6 = "";
    this.color7 = "";
    this.color8 = "";
    this.color9 = "";
    this.color10 = "";
  }
  constructor() {
  }

  ngOnInit() {
  }

}
