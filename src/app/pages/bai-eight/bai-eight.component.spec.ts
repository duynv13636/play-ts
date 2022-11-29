import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiEightComponent } from './bai-eight.component';

describe('BaiEightComponent', () => {
  let component: BaiEightComponent;
  let fixture: ComponentFixture<BaiEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
