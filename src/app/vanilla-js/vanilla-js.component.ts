import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../core/mock-data.service';
import { Person } from '../shared/person.model';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-vanilla-js',
  templateUrl: './vanilla-js.component.html',
  styleUrls: ['./vanilla-js.component.sass']
})
export class VanillaJsComponent implements OnInit {

  persons: Person[] = [];

  constructor(
    private mockDataService: MockDataService
  ) { }

  ngOnInit(): void {
    this.mockDataService.getData().pipe(
      take(1)
    ).subscribe(
      (persons: Person[]) => 
      this.persons = persons
    );

    console.log(this.persons, "persons before")
    let map = this.persons.filter(person => person.id === 2);
    console.log(map, "persons after")
  }

  
}
