<template>
  <div class="hello">
    <h1>Message : {{ hello }}</h1>
    <hr />
    <h1>Message Hello name : {{ helloWithName }}</h1>
  </div>
</template>

<script>
import { gql } from "@apollo/client/core";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      hello: "",
      helloWithName: "",
    };
  },
  apollo: {
    hello: gql`
      query hello {
        hello
      }
    `,
    helloWithName: {
      query: gql`
        query helloUser($username: String!) {
          helloWithName(name: $username)
        }
      `,
      variables: {
        username: "Mohamed anfossi",
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
