import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgnularTestingComponent } from './agnular-testing.component';

describe('AgnularTestingComponent', () => {
  let component: AgnularTestingComponent;
  let fixture: ComponentFixture<AgnularTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgnularTestingComponent]
    });
    fixture = TestBed.createComponent(AgnularTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
