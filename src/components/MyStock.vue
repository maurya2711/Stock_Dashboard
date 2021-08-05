<template>
  <div class="head">
    <h1>Stock Dashboard</h1>

    <img id="icon" class="icon" src="../assets/icon.png" alt="Wallet" />
    <div>{{ $store.state.walletAmount }}</div>
  </div>
  <div>
    <button @click="$store.dispatch('addToFav', $store.state.stocklist)">
      MyStock
    </button>
  </div>
  <div class="container">
    <h2>
      My Stock List:
    </h2>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="stock in $store.state.stocklist"
        :key="stock.index"
      >
        {{ stock.symbol }}
        <span>
          <button
            class="btn-primary sm"
            @click="$store.dispatch('buyStock', stock.symbol)"
          >
            Buy Now
          </button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyStock",
};
</script>
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
