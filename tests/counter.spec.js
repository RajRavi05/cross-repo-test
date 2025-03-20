const { test, expect } = require('@playwright/test')

test.describe('Counter App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle('Simple Counter App')
  })

  test('counter starts at 0', async ({ page }) => {
    const counter = page.locator('#counter')
    await expect(counter).toHaveText('0')
  })

  test('increment button increases counter', async ({ page }) => {
    const counter = page.locator('#counter')
    const incrementButton = page.locator('#increment')

    await incrementButton.click()
    await expect(counter).toHaveText('1')

    await incrementButton.click()
    await expect(counter).toHaveText('2')
  })

  test('decrement button decreases counter', async ({ page }) => {
    const counter = page.locator('#counter')
    const decrementButton = page.locator('#decrement')

    await decrementButton.click()
    await expect(counter).toHaveText('-1')

    await decrementButton.click()
    await expect(counter).toHaveText('-2')
  })

  test('reset button resets counter to 0', async ({ page }) => {
    const counter = page.locator('#counter')
    const incrementButton = page.locator('#increment')
    const resetButton = page.locator('#reset')

    await incrementButton.click()
    await incrementButton.click()
    await expect(counter).toHaveText('2')

    await resetButton.click()
    await expect(counter).toHaveText('0')
  })
})
