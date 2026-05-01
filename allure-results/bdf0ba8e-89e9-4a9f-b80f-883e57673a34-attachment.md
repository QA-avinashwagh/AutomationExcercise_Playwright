# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart\Cartpage.spec.js >> @regression @cart should displayed message when there is no product
- Location: tests\Cart\Cartpage.spec.js:11:1

# Error details

```
Error: locator.click: Error: Role must not be empty
    at Object.queryAll (<anonymous>:4974:15)
    at InjectedScript._queryEngineAll (<anonymous>:6645:49)
    at InjectedScript.querySelectorAll (<anonymous>:6632:30)
    at eval (eval at evaluate (:302:30), <anonymous>:2:35)
    at UtilityScript.evaluate (<anonymous>:304:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
Call log:
  - waiting for getByRole('', { href: 'view_cart' }).first()

```