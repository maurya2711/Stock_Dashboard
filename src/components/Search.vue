<template>
  <div class="container">
    <!-- <h1>Search Componenet</h1> -->

    <div class="head">
      <h1>Stock Dashboard</h1>

      <img id="icon" class="icon" src="../assets/icon.png" alt="Wallet" />
      <div>{{ $store.state.walletAmount }}</div>
    </div>

    <form @submit.prevent="this.stockPrice(stock)">
      <input
        type="search"
        placeholder="Search for Stocks"
        :name="typing"
        v-model="typing"
        autocomplete="off"
        v-on:input="$store.dispatch('setSymbol', newValue)"
      />
      <input type="submit" />

      <div>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="item in $store.state.symbol"
            :key="item.index"
          >
            {{ item["1. symbol"] }}
            <span>
              ><button
                :name="item['1. symbol']"
                @click="this.stockPrice(item['1. symbol'], $event)"
              >
                View
              </button>
            </span>
          </li>
          <div class="card" v-show="$store.state.showStockList">
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">{{ $store.state.info.name }}</li>
                <li class="list-group-item">{{ $store.state.info.type }}</li>
                <li class="list-group-item">
                  {{ $store.state.info.exchange }}
                </li>
                <li class="list-group-item">{{ $store.state.info.country }}</li>
                <li class="list-group-item">
                  {{ $store.state.info.currency }}
                </li>
                <li class="list-group-item">{{ $store.state.info.profit }}</li>
                <li class="list-group-item">
                  {{ $store.state.info.description }}
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </form>
    <div class=" container" v-show="$store.state.showStockList">
      <button
        class="btn btn-primary"
        type="submit"
        @click="$store.dispatch('addToFav', $store.state.info)"
      >
        Add
      </button>
    </div>

    <!-- <form @submit.prevent="stockPrice(symbol)">
      <input
        class="form-control basicAutoComplete"
        type="text"
        id="input"
        :name="$store.state.symbol"
        v-model="$store.state.symbol"
        placeholder="Enter the Stock Name"
        v-on:input="handleChange($event)"
        autocomplete="off"
      />
      <input
        type="submit"
        class="btn-primary m-2"
        @click="stockPrice(symbol)"
      />
      <div>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="item in result"
            :key="item.index"
            @click="stockPrice(item['1. symbol'], $event)"
            v-show="showdiv"
          >
            {{ item["1. symbol"] }}
          </li>
          <div class="card" v-show="showStockList">
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">{{ info.name }}</li>
                <li class="list-group-item">{{ info.type }}</li>
                <li class="list-group-item">{{ info.exchange }}</li>
                <li class="list-group-item">{{ info.country }}</li>
                <li class="list-group-item">{{ info.currency }}</li>
                <li class="list-group-item">{{ info.profit }}</li>
                <li class="list-group-item">{{ info.description }}</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </form> -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Search",

  methods: {
    ...mapActions({
      stockPrice: "stockPrice",
    }),
    ...mapState({
      information: "info",
      getInfo(state) {
        return state.info;
      },
    }),
  },
  computed: {
    typing: {
      get() {
        return this.$store.state.symbol;
      },
      set(newValue) {
        this.$store.dispatch("setSymbol", newValue);
        console.log(newValue);
      },
    },
  },
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
