# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).

## Table of contents

- [Frontend Mentor - Time tracking dashboard solution](#frontend-mentor---time-tracking-dashboard-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
      - [Typescript](#typescript)
      - [SASS/SCSS](#sassscss)
  - [Project setup](#project-setup)
    - [Install dependencies](#install-dependencies)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Recommended IDE Setup](#recommended-ide-setup)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![screenshot of the solution site](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- [Live Site](https://time-tracking-dashboard.vercel.app)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Pug](https://pugjs.org/) - HTML preprocessor
- [Sass/Scss](https://sass-lang.com) - CSS preprocessor
- [Vue3](https://v3.vuejs.org/) - JS framework
- [Typescript](www.typescriptlang.org) - JS Preprocessor
- [Vite](https://vitejs.dev/) - Build tool

### What I learned

- To get the number of the children of an element, `childElementCount` property can be used.

```html
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

```js
const ulElement = document.querySelector("ul");
console.log(ul.childElementCount); //  3
```

#### Typescript

- To create an interface/type that have another interface's types and some additional types, `extends` can be used

```ts
interface X {
  name: string;
}

interface Y extends X {
  age: number;
}

// interface Y will be equivalent to:
interface XY {
  name: string;
  age: number;
}
```

- For this same purpose, type aliases with intersection(&) can be used as well.

```ts
type Y = X & { age: number };
```

#### SASS/SCSS

- If there are no parameters in a sass mixin, the parentheses can be omitted.

<!-- prettier-ignore -->
```scss
@mixin foo() {
  // ...
}

@mixin foo { // 👈 no parentheses
  // ...
}

@include foo; // it can be omitted when calling the mixin too
```

## Project setup

### Install dependencies

```
yarn
```

### Compiles and hot-reloads for development

```
yarn dev
```

### Compiles and minifies for production

```
yarn build
```

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- The Vite template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Continued development

I find that when writing asynchronous code in the composition api, I'm running into a lot of problems. So, my next focus will be to read the composition api docs well. And I'm also planning to create some vanilla js, typescript projects.

## Useful resources

- [Vue 3 docs](https://v3.vuejs.org/) - Vue's official doc is great!

## Author

- Frontend Mentor - [@farispalayi](https://www.frontendmentor.io/profile/farispalayi)
- Twitter - [@farispalayi](https://www.twitter.com/farispalayi)
