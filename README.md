# HomeKata1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1.

## Introduction

1. This is a kata project demostrating standalone components

### Lesson 2: Create Home component

1. Ref <https://angular.io/tutorial/first-app/first-app-lesson-02#lesson-2-create-home-component>

``` text
    selector: to describe how Angular refers to the component in templates.
    standalone: to describe whether the component requires a NgModule.
    imports: to describe the component's dependencies.
    template: to describe the component's HTML markup and layout.
    styleUrls: to list the URLs of the CSS files that the component uses in an array.
```

1. Run `ng generate component home --inline-template --skip-tests`

### Step 2 - Add the new component to your app's layout

1. Add to home.component - `imports: [HomeComponent]`
2. Replace app.component

```typescript
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>

```

1. Ref: <https://www.svgrepo.com/vectors/home/> for icons

### Task add Bootstrap

1. run `npm i bootstrap-icons`
2. add to `angular.json`
3. run `npm i bootstrap@5.3.2`

```json
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css"
            ],
```
