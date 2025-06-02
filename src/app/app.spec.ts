import { TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';

// Basic test to ensure AppModule bootstraps without error

describe('AppModule', () => {
  it('should create the AppModule', () => {
    expect(() => TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents()).not.toThrow();
  });
});
