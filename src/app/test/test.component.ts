import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatSelectModule, MatButtonModule, MatDividerModule, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
  

  
export class TestComponent {

}
