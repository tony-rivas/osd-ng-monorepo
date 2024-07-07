import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
/* RouterTestingModule deprecated see fix below
https://github.com/angular/angular-cli/pull/27851 */

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HomeComponent, RouterTestingModule],
    }).compileComponents();
  });

  it(`should have main app title 'one-stop'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('one-stop');
  });

  it('should have home title', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome to One Stop Desktop'
    );
  });
});
