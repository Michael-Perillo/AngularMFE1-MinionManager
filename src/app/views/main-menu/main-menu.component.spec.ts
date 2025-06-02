import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainMenuComponent } from './main-menu.component';

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMenuComponent], // Import standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Hello World" in an h1 tag', () => {
    const fixture = TestBed.createComponent(MainMenuComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello World');
  });
});
