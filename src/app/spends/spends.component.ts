import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CategoriesComponent} from "../categories/categories.component";

@Component({
  selector: 'spends',
  templateUrl: './spends.component.html',
  styleUrls: ['./spends.component.css']
})
export class SpendsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCategories() {
    this.dialog.open(CategoriesComponent);
  }

}
