import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answercomponent } from './answercomponent';

describe('Answercomponent', () => {
  let component: Answercomponent;
  let fixture: ComponentFixture<Answercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Answercomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Answercomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
