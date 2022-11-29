import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndsWithComponent } from './ends-with.component';

describe('EndsWithComponent', () => {
  let component: EndsWithComponent;
  let fixture: ComponentFixture<EndsWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndsWithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndsWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
