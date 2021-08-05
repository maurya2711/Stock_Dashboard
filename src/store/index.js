import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    walletAmount: 10000,
    symbol: "",
    result: "",
    stocklist: [],
    info: {
      symbol: "",
      name: "",
      type: "",
      exchange: "",
      country: "",
      currency: "",
      profit: null,
      price: 0,
      description: "",
    },
    showdiv: false,
    showStockList: false,
    showFavList: false,
    url: "",
    ownedShare: 0,
  },
  mutations: {
    setSymbol(state, newValue) {
      state.symbol = newValue;
      state.showdiv = true;
    },
    stockPrice(state, data) {
      state.showStockList = true;
      state.showdiv = false;
      console.log("information before update", state.info);
      state.info.symbol = data.Symbol;
      state.info.name = data.Name;
      state.info.type = data.AssetType;
      state.info.exchange = data.Exchange;
      state.info.country = data.Country;
      state.info.currency = data.Currency;
      state.info.profit = data.ProfitMargin;
      state.info.price = data.AnalystTargetPrice;
      state.info.description = data.Description;
      // state.info.name = data.Name;
      // console.log("Stock Name", state.info.name);
      console.log("information after update", state.info);
    },
    addToFav(state, info) {
      console.log("mutation called");
      state.stocklist.push(state.info);
      console.log("added stocklist is", state.stocklist);
    },
    viewStock(state, info) {
      console.log("view Stock Button is clicked(muatation)");
      state.showStockList = false;
      state.showFavList = true;
      console.log("my Stoccks are", state.stocklist);
    },
    buyStock(state, stock) {
      console.log("buy Stock button is clicked(mutation)");
      // let target;
      // state.stocklist.map((data) => {
      //   target : data.price;
      // });

      state.ownedShare = Number(prompt("Enter the Number of Stocks "));
      state.walletAmount =
        state.walletAmount -
        state.ownedShare * parseInt(state.stocklist[0].price);
      console.log("type od stocklist", state.stocklist);
      console.log("stocklist Name", state.stocklist[0].name);
      console.log("stocklist Price", state.stocklist[0].price);

      alert("Congratulation you sucessfully purchase");
    },
  },
  actions: {
    setSymbol({ commit }, newValue) {
      let key = "6ZHH1SV65RNOBNP0";

      console.log("state.url", newValue);
      if (newValue.length >= 3) {
        axios
          .get(
            `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${newValue}&apikey=${key}`
          )
          .then((res) => {
            commit("setSymbol", res.data.bestMatches);
            // state.result = res.data.bestMatches;
            console.log("result is", res.data.bestMatches);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    stockPrice({ commit }, stock) {
      console.log("stockPrice Action  called");

      console.log(stock);
      let key = "6ZHH1SV65RNOBNP0";

      axios
        .get(
          `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stock}&apikey=${key}`
        )
        .then((res) => {
          commit("stockPrice", res.data);
          console.log("data", res.data);

          // state.stockprice = res.data;
          // console.log(state.stockprice);
        })

        .catch((err) => console.log(err));
      // this.currentstock = $event.target.stock.name;
      // console.log("sssssssssssssssssssss", this.currentstock);
    },
    addToFav({ commit }, state) {
      console.log("Add Button Clicked(Action)");

      commit("addToFav", state.info);
    },
    viewStock({ commit }) {
      console.log("View Stock button is clicked");
      commit("viewStock", state.stocklist);
    },
    buyStock({ commit, state }) {
      console.log("Buy Stock button is clicked(action)");
      console.log("stocklist name", state.stocklist);
      commit("buyStock", state.stocklist.symbol);
    },
  },
  getters: {},
});
