<template>
  <layout-container
    cols="repeat(5, 1fr)"
    md-cols="repeat(3, 1fr)"
    sm-cols="repeat(2, 1fr)"
    lg-cols="repeat(4, 1fr)"
    rows="90px 150px 90px"
    gap="5px"
  >
    <grid-item
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
    </grid-item>
    <div v-for="item in library" :key="item.id" class="el">
      <h1>{{ item.id }}</h1>
    </div>
  </layout-container>
</template>

<script>
  let test_library = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 }
  ]

  export default {
    name: "App",
    components: {},
    data() {
      return {
        toggleColumn: true,
        library: test_library
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .el {
    color: white;
    background-color: rgb(88, 96, 112);
    border: 5px rgb(169, 169, 169) solid;
  }
  .my-padding {
    padding: 10px;
  }
</style>
