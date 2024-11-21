import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCRComponent } from './vcr.component';

describe('VCRComponent', () => {
  let component: VCRComponent;
  let fixture: ComponentFixture<VCRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VCRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VCRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
