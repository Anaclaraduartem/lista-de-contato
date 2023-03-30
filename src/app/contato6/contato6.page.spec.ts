import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contato6Page } from './contato6.page';

describe('Contato6Page', () => {
  let component: Contato6Page;
  let fixture: ComponentFixture<Contato6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Contato6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
