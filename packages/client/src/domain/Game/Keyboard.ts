enum ENABLED_KEYS {
  LEFT = 'left',
  RIGHT = 'right',
}
export default class Keyboard {
  static KEYS = ENABLED_KEYS
  private pressedKeys: Partial<Record<ENABLED_KEYS, boolean>> = {}

  constructor() {
    this.registerKeyboardListeners()
    this.registerGamepad()
  }

  private registerKeyboardListeners() {
    const setTrue = (e: KeyboardEvent) => {
      this.setKey(e, true)
    }

    const setFalse = (e: KeyboardEvent) => {
      this.setKey(e, false)
    }

    const blur = () => {
      this.pressedKeys = {}
    }

    window.addEventListener('keydown', setTrue)
    window.addEventListener('keyup', setFalse)
    window.addEventListener('blur', blur)
    window.addEventListener(
      'unload',
      () => {
        window.removeEventListener('keydown', setTrue)
        window.removeEventListener('keyup', setFalse)
        window.removeEventListener('blur', blur)
      },
      { once: true }
    )
  }

  private registerGamepad() {
    const update = () => {
      const gamepad = navigator.getGamepads()[0]
      if (!gamepad) return
      this.setAxes(gamepad)
      window.requestAnimationFrame(update)
    }

    window.addEventListener('gamepadconnected', update)
    window.addEventListener(
      'unload',
      () => {
        window.removeEventListener('gamepadconnected', update)
      },
      { once: true }
    )
  }

  private setAxes(gamepad: Gamepad) {
    const axis = gamepad.axes[0] || 0
    let leftArrow
    let rightArrow
    if (gamepad.axes.length === 7) {
      const axis6 = gamepad.axes[6] || 0
      leftArrow = axis6 === 0.7142857142857142 || false
      rightArrow = axis6 === -0.4285714285714286 || false
    } else {
      leftArrow = gamepad.buttons[14].pressed || false
      rightArrow = gamepad.buttons[15].pressed || false
    }
    if (axis >= 0.1 || rightArrow) {
      this.pressedKeys[Keyboard.KEYS.RIGHT] = true
      this.pressedKeys[Keyboard.KEYS.LEFT] = false
    } else if (axis <= -0.1 || leftArrow) {
      this.pressedKeys[Keyboard.KEYS.RIGHT] = false
      this.pressedKeys[Keyboard.KEYS.LEFT] = true
    } else {
      this.pressedKeys[Keyboard.KEYS.RIGHT] = false
      this.pressedKeys[Keyboard.KEYS.LEFT] = false
    }
  }

  private setKey(event: KeyboardEvent, isPressed: boolean) {
    let key
    switch (event.key) {
      case 'd':
      case 'ArrowRight':
        key = Keyboard.KEYS.RIGHT
        break
      case 'a':
      case 'ArrowLeft':
        key = Keyboard.KEYS.LEFT
        break
      default:
        break
    }

    if (!key) return
    this.pressedKeys[key] = isPressed
  }

  public isPressed(key: ENABLED_KEYS) {
    return this.pressedKeys[key]
  }
}
