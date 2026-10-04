export class ThemeSwitcher {
  selectors = {
    switchThemeButton: '[data-js-switch-theme-button]',
  }

  storageKey = 'theme'

  switchThemeButton: Element | null

  constructor() {
    this.switchThemeButton = document.querySelector(
      this.selectors.switchThemeButton,
    )

    this.setInitialTheme()
    this.bindEvents()
  }

  setInitialTheme() {
    const savedTheme = localStorage.getItem(this.storageKey)

    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark')
      return
    }


    document.documentElement.classList.add('dark')
  }

  bindEvents() {
    this.switchThemeButton?.addEventListener('click', this.onClick)
  }

  onClick = () => {
    const isDark = document.documentElement.classList.toggle('dark')

    localStorage.setItem(
      this.storageKey,
      isDark ? 'dark' : 'light',
    )
  }

  destroy() {
    this.switchThemeButton?.removeEventListener('click', this.onClick)
  }
}