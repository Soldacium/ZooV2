import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {



  currentPage = 0;
  totalPages: number[] = [];

  @Input()
  pageSize = 0;

  @Input()
  totalSize = 0;

  @Output() page:
  EventEmitter<{pageIndex: string}> = new EventEmitter<{pageIndex: string}>();

  ngOnInit(): void {
    this.setPages();
  }

  pageEvent(): void {
    this.page.emit();
  }

  setPages(): void {
    const pages = Math.floor(this.totalSize / this.pageSize) + 1;
    this.totalPages = [];
    for (let i = 0; i < pages; i++){
      this.totalPages.push(i);
    }
  }

  nextPage(): void {
    this.currentPage < this.totalPages.length ? this.currentPage += 1 : console.log('no');
  }

  prevPage(): void {
    this.currentPage > 0 ? this.currentPage -= 1 : console.log('no');
  }

  getAbsolute(page: number): number{
    return Math.abs(page - this.currentPage);
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }


}
