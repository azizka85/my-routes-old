export interface Page {
  get elem(): HTMLElement | null;

  init(parent: HTMLElement | null, firstTime: boolean): Promise<HTMLElement>;

  mount?(): Promise<void>;
  unmount?(): Promise<void>;
}

export interface Layout {
  replaceContent(content: Page): Promise<void>;
}
