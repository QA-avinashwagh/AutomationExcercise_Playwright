# 🧪 Playwright Automation Framework – AutomationExercise

This project is a **scalable end-to-end test automation framework** built using **Playwright (JavaScript)**.
It covers UI testing across **Product, Cart, Checkout, Auth, and API modules** with a focus on **real-world test design and stability**.

---

## 🚀 Tech Stack

* **Playwright**
* **JavaScript (Node.js)**
* **Page Object Model (POM)**
* **Fixtures (Custom)**
* **JSON Test Data**
* **Allure & HTML Reports**

---

## 📁 Project Structure

```
├── tests/
│   ├── Auth/
│   ├── Product/
│   ├── Cart/
│   ├── Checkout/
│   ├── API/
│
├── pages/
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│
├── fixtures/
│   └── fixture.js
│
├── test-data/
│   ├── userData.json
│   ├── productData.json
│   ├── paymentData.json
│
├── utils/
│   └── api/
│
├── playwright.config.js
├── package.json
```

---

## 🧠 Framework Design Highlights

### ✔ Page Object Model

* Clean separation of UI logic
* Reusable and maintainable components

### ✔ Fixtures

* Centralized test setup
* Injected dependencies like `homePage`, `cartPage`, etc.

### ✔ Data-Driven Testing

* Test data stored in JSON
* Easy maintenance and scalability

---

## ⚙️ Test Execution

### ▶ Run all tests

```
npm run test
```

### ▶ Run specific module

```
npm run test:product
npm run test:cart
npm run test:checkout
npm run test:api
```

### ▶ Run by tag

```
npm run test:smoke
npm run test:regression
```

### ▶ Run headed mode

```
npm run test:headed
```

---

## 🏷️ Tag Strategy

* `@smoke` → Critical flows
* `@regression` → Full suite
* `@cart`, `@checkout`, `@product`, `@api`

---

## 📊 Reporting

### HTML Report

```
npx playwright show-report
```

### Allure Report

```
allure generate allure-results --clean -o allure-report
allure open allure-report
```

---

## 🧪 Covered Scenarios

### 🔐 Auth Module

* User registration
* Login / Logout
* Invalid login validation

### 🛍 Product Module

* Product listing
* Search functionality
* Product detail validation
* Add to cart

### 🛒 Cart Module

* Empty cart validation
* Add/remove products
* Multiple product validation
* Price consistency

### 💳 Checkout Module

* Single & multiple product checkout
* Price validation across pages
* Quantity-based total validation
* Order placement

### 🔗 API Module

* Login API validation
* Response verification

---

## ⚠️ Important Design Decisions

### 🔹 Test Isolation

* Cart state is reset before each test
* Prevents flaky tests caused by shared state

### 🔹 No Hard Dependency Between Tests

* Each test is independent
* Can run in parallel safely

### 🔹 Storage State Usage

* Used for faster login
* Combined with test-level cleanup for stability

---

## 🔥 Best Practices Followed

* No hard-coded test data
* Locator stability using scoped selectors
* Avoided global waits (`waitForTimeout`)
* Assertions placed strategically
* Clean naming conventions

---

## 🧠 Learnings from This Project

* Handling **shared state issues (cart conflicts)**
* Designing **stable parallel execution**
* Structuring **real-world automation frameworks**
* Balancing **speed vs reliability**

---

## 📌 Future Enhancements

* Multi-user execution (worker-based storage state)
* CI/CD integration (GitHub Actions / Jenkins)
* Visual testing integration
* API + UI hybrid flows

