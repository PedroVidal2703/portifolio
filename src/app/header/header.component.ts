import { Component, OnInit, ViewChild, HostListener, ElementRef} from '@angular/core';

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
  activePage: string = "about";
  activePageIndex: number = 1;
  scrollDebounce: boolean = true;
  box: any = document.querySelector('#about');

  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

  clickedPill(pill: any){
    this.activePage = pill.pillId;
    this.activePageIndex = pill.indexOf;
    let el = document.getElementById(pill.pillId);
      if(el != null) {
        el.scrollIntoView(true);
      }
  }

  @HostListener('window:scroll', ['$event'])
  // Temporary solution, it may be CPU intensive
  onScroll(event: any) {
    if(this.scrollDebounce) {
      this.scrollDebounce = false;
      this.box = document.querySelector('#' + this.activePage);
      var result = this.isInViewport(this.box);

      if(!result) {
        this.pills.forEach(
          (pill) => {
            var isInView = this.isInViewport(document.querySelector('#' + pill.pillId));
            if(isInView) {
              this.activePage = pill.pillId;
            }
          }
        )
      }
      setTimeout(() => {
        this.scrollDebounce = true;
      }, 10)
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
