import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingPanelComponent } from './sorting-panel.component';

describe('SortingPanelComponent', () => {
  let component: SortingPanelComponent;
  let fixture: ComponentFixture<SortingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
