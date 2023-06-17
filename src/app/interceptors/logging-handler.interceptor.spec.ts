import { TestBed } from '@angular/core/testing';

import { LoggingHandlerInterceptor } from './logging-handler.interceptor';

describe('LoggingHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoggingHandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoggingHandlerInterceptor = TestBed.inject(LoggingHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
