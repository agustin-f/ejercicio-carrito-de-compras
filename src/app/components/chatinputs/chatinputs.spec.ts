import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chatinputs } from './chatinputs';

describe('Chatinputs', () => {
  let component: Chatinputs;
  let fixture: ComponentFixture<Chatinputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chatinputs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chatinputs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
