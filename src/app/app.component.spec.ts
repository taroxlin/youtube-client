import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture: any = TestBed.createComponent(AppComponent);
    const app: void = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'youtube-client'`, () => {
    const fixture: any = TestBed.createComponent(AppComponent);
    const app: any = fixture.componentInstance;
    expect(app.title).toEqual('youtube-client');
  });

  it('should have the Header component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).not.toBe(null);
  }));

  it('should have the Results component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-search-results')).not.toBe(null);
  }));
});
