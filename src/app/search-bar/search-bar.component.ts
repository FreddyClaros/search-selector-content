import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators, NgSelectOption } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  title = 'Search Selector Content';
  name = new FormControl('');
  public tableVisible: boolean;

  constructor() { 
    this.tableVisible = false;
  }

  public field = new FormControl('');
  public select = new FormControl('all');
  public tableResults = new FormControl('');
  
  public newForm = new FormGroup({

  })

  ngOnInit(): void {
  }

  clickSearch(){
    this.tableVisible = true;
  }
  updateName() {
    this.name.setValue('Nancy');
  }

}
