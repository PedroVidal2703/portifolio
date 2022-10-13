import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pills = [
    {"pillName": "Sobre Mim", "pillId": "about"},
    {"pillName": "Projetos", "pillId": "projects"},
    {"pillName": "Stacks", "pillId": "stacks"},
    {"pillName": "Formação", "pillId": "scholarity"}
  ];
  activePage: string = "Sobre Mim";

  clickedPill(pill: any){
    this.activePage = pill.pillName;
    console.log(`scrolling to ${pill.pillId}`);
    let el = document.getElementById(pill.pillId);
    console.log(document.getElementById(pill.pillId))
    // Provavel função assincrona, transformar depois e ver o resultado
    setTimeout(function () {
      if(el != null) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
      });
      }
 }, 100);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
