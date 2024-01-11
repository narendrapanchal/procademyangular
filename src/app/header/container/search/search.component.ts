import { Component } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchText:string="Mens wear";
updateSearchText(e:any){
  this.searchText=e.target.value
}
}
