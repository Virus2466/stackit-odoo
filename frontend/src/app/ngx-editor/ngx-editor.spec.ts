import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditor } from './ngx-editor';

describe('NgxEditor', () => {
  let component: NgxEditor;
  let fixture: ComponentFixture<NgxEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
