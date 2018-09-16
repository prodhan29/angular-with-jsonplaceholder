import { PaitentModule } from './paitent.module';

describe('PaitentModule', () => {
  let paitentModule: PaitentModule;

  beforeEach(() => {
    paitentModule = new PaitentModule();
  });

  it('should create an instance', () => {
    expect(paitentModule).toBeTruthy();
  });
});
