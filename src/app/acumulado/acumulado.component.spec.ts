import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcumuladoComponent } from './acumulado.component';

describe('AcumuladoComponent', () => {
  let component: AcumuladoComponent;
  let fixture: ComponentFixture<AcumuladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcumuladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcumuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
