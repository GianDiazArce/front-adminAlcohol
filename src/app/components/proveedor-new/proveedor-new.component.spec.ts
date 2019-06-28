import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorNewComponent } from './proveedor-new.component';

describe('ProveedorNewComponent', () => {
  let component: ProveedorNewComponent;
  let fixture: ComponentFixture<ProveedorNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
