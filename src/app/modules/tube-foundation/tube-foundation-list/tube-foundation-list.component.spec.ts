import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TubeFoundationListComponent } from './tube-foundation-list.component';

describe('TubeFoundationListComponent', () => {
  let component: TubeFoundationListComponent;
  let fixture: ComponentFixture<TubeFoundationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TubeFoundationListComponent]
    });
    fixture = TestBed.createComponent(TubeFoundationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
