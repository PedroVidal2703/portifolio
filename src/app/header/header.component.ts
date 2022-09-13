import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pills = [
    {"pillName": "Sobre Mim"},
    {"pillName": "Projetos"},
    {"pillName": "Experiência"},
    {"pillName": "Formação"}
  ];
  activePage: string = "Sobre Mim";

  clickedPill(pill: any){
    console.log(pill)
    this.activePage = pill.pillName;
    console.log(pill)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
