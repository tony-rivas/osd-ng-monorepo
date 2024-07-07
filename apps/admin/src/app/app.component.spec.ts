import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin-home.component';
import { RouterTestingModule } from '@angular/router/testing';
/* RouterTestingModule deprecated see fix below
https://github.com/angular/angular-cli/pull/27851 */

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, AdminHomeComponent, RouterTestingModule],
    }).compileComponents();
  });

  it(`should have main app title 'admin'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('admin');
  });

  it('should have admin home title', () => {
    const fixture = TestBed.createComponent(AdminHomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome Admin Users'
    );
  });
});
