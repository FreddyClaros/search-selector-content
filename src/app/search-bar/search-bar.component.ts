import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators, NgSelectOption } from '@angular/forms';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  info: any;

  title = 'Search Selector Content';
  name = new FormControl('');
  public tableVisible: boolean;
  public field = new FormControl('');
  public select = new FormControl('all');
  public tableResults = new FormControl('');
  
  public urlItunes: string;
  public searchText: string;
  public searchEntity: string;
  public searchAux: string;
  public url: string;

  constructor(public searchService: SearchService) { 
    this.tableVisible = false;
    this.urlItunes = "https://itunes.apple.com/search?term=";
    this.searchText = "";
    this.searchEntity = "";
    this.searchAux = "&limit=25";
    this.url = "";
  }

  public newForm = new FormGroup({

  })

  ngOnInit() {
    
  }

  clickSearch(){
    if(this.select.value!='all'){
      this.searchEntity = "&entity="+this.select.value;
    }
    this.searchText = this.field.value;
    this.searchText = this.searchText.toLowerCase().trim();
    this.url = this.urlItunes + this.searchText.replace(/\s/g,"+") + this.searchEntity + this.searchAux;
    console.log(this.url);

    console.log(this.info);
    this.tableVisible = true;

    this.searchService.getInfo(this.url).subscribe(results =>{
      this.info = results; 
      console.log(this.info);
    });
  }

}
