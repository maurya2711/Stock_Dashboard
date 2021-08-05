<template>
  <div class="head">
    <h1>Stock Dashboard</h1>

    <img id="icon" class="icon" src="../assets/icon.png" alt="Wallet" />
    <div>{{ $store.state.walletAmount }}</div>
    <div>
      <button @click="$store.dispatch('addToFav', $store.state.stocklist)">
        MyStock
      </button>
    </div>
  </div>
  <Search />
</template>

<script>
import Search from "./Search.vue";
export default {
  name: "LandingPage",
  component: {
    Search,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  display: flex;
}
.icon {
  height: 20px;
  width: 20px;
  margin-left: 900px;
}
</style>
