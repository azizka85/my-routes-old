import { DefaultLayout } from "./default-layout";

describe('DefaultLayout test', () => {
  test('Should get single instance of DefaultLayout', () => {
    const instance = DefaultLayout.instance;
    
    expect(instance).toBeTruthy();
    expect(instance).toBeInstanceOf(DefaultLayout);
    expect(instance).toBe(DefaultLayout.instance);
  });
});
