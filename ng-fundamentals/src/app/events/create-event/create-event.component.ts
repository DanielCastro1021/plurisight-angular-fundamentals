import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancel() {
    this.router.navigate(['/events']);
  }
}
