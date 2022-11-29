import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversDataComponent } from './revers-data.component';

describe('ReversDataComponent', () => {
  let component: ReversDataComponent;
  let fixture: ComponentFixture<ReversDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReversDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReversDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
