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
2. Replace app.component.html

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

### Step 3 - Add features to HomeComponent

1. <https://angular.io/tutorial/first-app/first-app-lesson-02#step-3---add-features-to-homecomponent>
2. update template in `home.component.ts`

```html
template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
`,
```

1. Style home.component.css

```css
.results {
  display: grid;
  column-gap: 14px;
  row-gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
  margin-top: 50px;
  justify-content: space-around;
}

input[type="text"] {
  border: solid 1px var(--primary-color);
  padding: 10px;
  border-radius: 8px;
  margin-right: 4px;
  display: inline-block;
  width: 30%;
}

button {
  padding: 10px;
  border: solid 1px var(--primary-color);
  background: var(--primary-color);
  color: white;
  border-radius: 8px;
}

@media (min-width: 500px) and (max-width: 768px) {
  .results {
      grid-template-columns: repeat(2, 1fr);
  }
  input[type="text"] {
      width: 70%;
  }   
}

@media (max-width: 499px) {
  .results {
      grid-template-columns: 1fr;
  }    
}
```

### Lesson 3: Create the application’s HousingLocation component

1. run `ng generate component housingLocation --inline-template --skip-tests`
2. Add component home.location to home component

3 setps:

1. add to imports `HousingLocationComponent`
2. add component:

```html
template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <!--HERE-->
  <section class="results">
    <app-housing-location></app-housing-location>
  </section>
  `,
```
