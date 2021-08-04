import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanillaJsComponent } from './vanilla-js.component';

describe('VanillaJsComponent', () => {
  let component: VanillaJsComponent;
  let fixture: ComponentFixture<VanillaJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanillaJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanillaJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
