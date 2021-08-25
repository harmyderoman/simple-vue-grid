# simple-vue-grid

Only Vue 3 for now!
This plugin includes containers that will help you to build excellent layout for your app.

## How to use

### simple-grid-container

Just put all your items inside this container and tell him minimum width of columns. It will do all the hard work. The container is elastic and will adapt to all screen sizes, depending on how many columns with this width will fit on the display.

For example:

```
  <simple-grid-container class="my-class" columnWidth="400px">
    <div v-for="item in library" :key="item.id">
      <h1>{{ item.id }}</h1>
    </div>
  </simple-grid-container>
```

Also you can set follow props:

- `gap` - for gap between your items.`default: none`. Add gap both to rows and columns.
- `elastic-columns` - for `minmax(columnWidth, 1fr)` style. `default: true`. In most cases just don't change it.
- `inline` - for `inline-grid` css rule, default: false
- `class` - because container is just `div` tag. You can apply all css styles, as well as to all containers in this plugin. Also you can add grid rules like `row-gap` and `column-gap`.

### simple-layout-container

This container will help you in more complex situations. You can tell to `cols` prop how to build your layout. For example:

- `cols="200px 300px 100px"`
- `cols="1fr 50px 1fr 1fr"`
- `:cols="colsSchema"` - dinamic layout
- `lg-cols"repeat(5, 1fr)"` - add `lg-` to `cols` for `lg` breakpoint schema. `lg` is `992px` by default.

For more variants see [link](https://css-tricks.com/snippets/css/complete-guide-grid/#grid-template-columnsgrid-template-rows)

Props:

- `gap` - same as `simple-grid-container`
- `inline` - for inline container. default: false
- `cols` - cols Schema
- `rows` - rows Schema
- `'breakpoint'-cols` - set cols Schema for specific breakpoint
- `'breakpoint'-rows` - set rows Schema for specific breakpoint

### simple-layout-item

Grid item container help you locate your item on layout that you built in `simple-layout-container`. The location can be changed depending on the width of the screen.

Props:

- `tag` - html tag of item container. `default: "div"`
- `startColumn` - start column of item
- `columnSpan` - the number of columns it occupies
- `startRow` - start row of item
- `rowSpan` - the number of rows it occupies

Full example:

```
  <simple-layout-container
    cols="repeat(5, 1fr)"
    lg-cols="repeat(4, 1fr)"
    rows="90px 150px 90px"
    gap="5px"
  >
    <simple-grid-item
      tag="span"
      class="el"
      startColumn="2"
      columnSpan="2"
      startRow="2"
      row-span="2"
      md-col="1"
      sm-col="1"
      xs-col="0"
    >
      <h1>Grid Item</h1>
    </simple-grid-item>
    <div v-for="item in library" :key="item.id" class="el">
      <h1>{{ item.id }}</h1>
    </div>
  </simple-layout-container>
```

## Installation

### NPM

```
npm i simple-vue-grid
```

```
// main.js
import { createApp } from "vue"
import App from "./App.vue"
import SimpleVueGrid from "simple-vue-grid"

// optional. If you want to change all default breakpoints or part of them.
const options = {
  breakpoints: {
    xl: 1400,
    xxl: "1920px"
  }
}

createApp(App)
  .use(SimpleVueGrid, options)
  .mount("#app")
```

## Default breakpoints:

```
{
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}
```

## Contributing and Issues

Contribution is welcome! This documentation also needs some improvement. For bugs and issues please open new issue [here](https://github.com/harmyderoman/simple-vue-grid/issues).

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

This command will run example folder

```
npm run serve
```

### Run your unit tests

```
npm run test:unit
```

### Build package

```
npm run build-library
```
