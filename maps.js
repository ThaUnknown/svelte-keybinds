// Risky as objects dont guarantee order
export const keys = {
  Escape: {
    dark: true,
    name: 'Escape'
  },
  Digit1: {
    name: 'Digit1'
  },
  Digit2: {
    name: 'Digit2'
  },
  Digit3: {
    name: 'Digit3'
  },
  Digit4: {
    name: 'Digit4'
  },
  Digit5: {
    name: 'Digit5'
  },
  Digit6: {
    name: 'Digit6'
  },
  Digit7: {
    name: 'Digit7'
  },
  Digit8: {
    name: 'Digit8'
  },
  Digit9: {
    name: 'Digit9'
  },
  Digit0: {
    name: 'Digit0'
  },
  Minus: {
    name: 'Minus'
  },
  Equal: {
    name: 'Equal'
  },
  Backspace: {
    dark: true,
    size: 100,
    name: 'Backspace'
  },
  Delete: {
    dark: true,
    name: 'Delete'
  },
  Tab: {
    dark: true,
    size: 75,
    name: 'Tab'
  },
  KeyQ: {
    name: 'KeyQ'
  },
  KeyW: {
    name: 'KeyW'
  },
  KeyE: {
    name: 'KeyE'
  },
  KeyR: {
    name: 'KeyR'
  },
  KeyT: {
    name: 'KeyT'
  },
  KeyY: {
    name: 'KeyY'
  },
  KeyU: {
    name: 'KeyU'
  },
  KeyI: {
    name: 'KeyI'
  },
  KeyO: {
    name: 'KeyO'
  },
  KeyP: {
    name: 'KeyP'
  },
  BracketLeft: {
    name: 'BracketLeft'
  },
  BracketRight: {
    name: 'BracketRight'
  },
  Backslash: {
    dark: true,
    size: 75,
    name: 'Backslash'
  },
  Home: {
    dark: true,
    name: 'Home'
  },
  CapsLock: {
    dark: true,
    size: 90,
    name: 'CapsLock'
  },
  KeyA: {
    name: 'KeyA'
  },
  KeyS: {
    name: 'KeyS'
  },
  KeyD: {
    name: 'KeyD'
  },
  KeyF: {
    name: 'KeyF'
  },
  KeyG: {
    name: 'KeyG'
  },
  KeyH: {
    name: 'KeyH'
  },
  KeyJ: {
    name: 'KeyJ'
  },
  KeyK: {
    name: 'KeyK'
  },
  KeyL: {
    name: 'KeyL'
  },
  Semicolon: {
    name: 'Semicolon'
  },
  Quote: {
    name: 'Quote'
  },
  Enter: {
    dark: true,
    size: 110,
    name: 'Enter'
  },
  PageUp: {
    dark: true,
    name: 'PageUp'
  },
  ShiftLeft: {
    dark: true,
    size: 115,
    name: 'ShiftLeft'
  },
  KeyZ: {
    name: 'KeyZ'
  },
  KeyX: {
    name: 'KeyX'
  },
  KeyC: {
    name: 'KeyC'
  },
  KeyV: {
    name: 'KeyV'
  },
  KeyB: {
    name: 'KeyB'
  },
  KeyN: {
    name: 'KeyN'
  },
  KeyM: {
    name: 'KeyM'
  },
  Comma: {
    name: 'Comma'
  },
  Period: {
    name: 'Period'
  },
  Slash: {
    name: 'Slash'
  },
  ShiftRight: {
    dark: true,
    size: 85,
    name: 'ShiftRight'
  },
  ArrowUp: {
    dark: true,
    name: 'ArrowUp'
  },
  PageDown: {
    dark: true,
    name: 'PageDown'
  },
  ControlLeft: {
    dark: true,
    size: 75,
    name: 'ControlLeft'
  },
  MetaLeft: {
    dark: true,
    name: 'MetaLeft'
  },
  AltLeft: {
    dark: true,
    size: 75,
    name: 'AltLeft'
  },
  Space: {
    dark: true,
    size: 300,
    name: 'Space'
  },
  AltRight: {
    dark: true,
    size: 75,
    name: 'AltRight'
  },
  ContextMenu: {
    dark: true,
    size: 75,
    name: 'ContextMenu'
  },
  ArrowLeft: {
    dark: true,
    name: 'ArrowLeft'
  },
  ArrowDown: {
    dark: true,
    name: 'ArrowDown'
  },
  ArrowRight: {
    dark: true,
    name: 'ArrowRight'
  }
}
// char => code for navigator.keyboard API
const codeMap = {
  0: 'Digit0',
  1: 'Digit1',
  2: 'Digit2',
  3: 'Digit3',
  4: 'Digit4',
  5: 'Digit5',
  6: 'Digit6',
  7: 'Digit7',
  8: 'Digit8',
  9: 'Digit9',
  e: 'KeyE',
  d: 'KeyD',
  '-': 'Minus',
  h: 'KeyH',
  z: 'KeyZ',
  '=': 'Equal',
  n: 'KeyN',
  p: 'KeyP',
  ']': 'BracketRight',
  '[': 'BracketLeft',
  s: 'KeyS',
  ';': 'Semicolon',
  q: 'KeyQ',
  o: 'KeyO',
  '.': 'Period',
  v: 'KeyV',
  l: 'KeyL',
  '`': 'Backquote',
  g: 'KeyG',
  j: 'KeyJ',
  t: 'KeyT',
  "'": 'Quote',
  y: 'KeyY',
  '\\': 'Backslash',
  r: 'KeyR',
  u: 'KeyU',
  k: 'KeyK',
  '/': 'Slash',
  f: 'KeyF',
  i: 'KeyI',
  x: 'KeyX',
  a: 'KeyA',
  m: 'KeyM',
  w: 'KeyW',
  b: 'KeyB',
  c: 'KeyC',
  ',': 'Comma'
}
export const layout = {}
if (navigator.keyboard) {
  navigator.keyboard.getLayoutMap().then((map) => {
    for (const [key, value] of map.entries()) {
      layout[key] = codeMap[value]
    }
  })
}
