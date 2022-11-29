import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionObjectComponent } from './union-object.component';

describe('UnionObjectComponent', () => {
  let component: UnionObjectComponent;
  let fixture: ComponentFixture<UnionObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnionObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnionObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
