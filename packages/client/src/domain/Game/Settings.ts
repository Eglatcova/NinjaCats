export default class Settings {
  private static instance: Settings
  private width = 0
  private height = 0
  public static getInstance() {
    if (!Settings.instance) {
      Settings.instance = new Settings()
    }
    return Settings.instance
  }

  setSize(width: number, height: number) {
    this.width = width
    this.height = height
  }

  getSize() {
    return {
      width: this.width,
      height: this.height,
    }
  }
}
