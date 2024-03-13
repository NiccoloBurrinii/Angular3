import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {
  input = "";
  id = "";

  clickButton = (id: string) => {
    this.input += id;
  }
  cancel = () => {
    this.input = "";
  }

  result = () => {
    let numbers: string[] = [];
    let resultInt = 0;


    this.input = eval(this.input);

  }
}