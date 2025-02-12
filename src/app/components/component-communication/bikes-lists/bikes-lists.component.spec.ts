import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesListsComponent } from './bikes-lists.component';

describe('BikesListsComponent', () => {
  let component: BikesListsComponent;
  let fixture: ComponentFixture<BikesListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BikesListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BikesListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
