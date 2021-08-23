# simple-vue-grid

This plugin include containers that will help you to build excellent layout for your app.

## How to use

### simple-grid-container

Just put all your items inside this container and tell him minimum width of column. It will do all the hard work.

For example:

```
  <simple-grid-container class="my-class" columnWidth="400px">
    <div v-for="item in library" :key="item.id">
      <h1>{{ item.id }}</h1>
    </div>
  </simple-grid-container>
```

Also you can set follow props:

- `gap` - for gap between your items.
- `elasticColumns` - for `minmax(${this.columnWidth}, 1fr)` style
- `inline` - for `inline-grid` rule default: false
- `class` - because it is just `div` tag. You can apply all css styles, as well as to all containers in this plugin.

### simple-layout-container

This container will help you in more complex situations. You can tell to it how to build your layout. For example:

- `"200px 300px 100px"`
- `"1fr 50px 1fr 1fr"`
- `"repeat(5, 1fr)"`

For more variants see [link](https://css-tricks.com/snippets/css/complete-guide-grid/#grid-template-columnsgrid-template-rows)

### simple-layout-item

Grid item container help you locate your item on layout that you built in `simple-layout-container`. The location can be changed depending on the width of the screen.

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

## Instalation

### NPM

```
vue add simple-vue-grid
```

```
// main.js
import { createApp } from "vue"
import App from "./App.vue"
import SimpleVueGrid from "simple-vue-grid"

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
