// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  timeout : 30*1000,
  expect :{
    timeout : 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  retries: 1,
  workers: process.env.CI ? 2 : undefined,
    reporter:  [
    ['html', {open : 'never'}],
    ['list'],
    [ 'json', { outputFile :'test-results/results.json'}]
  ],
  use: {
    baseURL: 'https://automationexercise.com/',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    //video : 'only-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    
    //1. SETUP PROJECT
    {
      name :'setup',
      testMatch : /.*login\.setup\.js/,
    },

    //2.Auth test (No storage state)
    {
      name: 'auth test',
      testMatch : /.*Auth\/.*\.spec\.js/,
      use: { ...devices['Desktop Chrome'] },
    },
    
    
    //3. APP TEST (Use storage state + depends on set up )
    {
      name: 'app',
      testIgnore : /.*Auth\/.*\.spec\.js/,
      use: { ...devices['Desktop Chrome'],
      storageState : 'playwright/.auth/user.json',
      },
      dependencies : ['setup'],
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],

});

