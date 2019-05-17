import Vue from 'vue'
import {
  HOME_CASUAL,
  CATEGORY_LIST,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  GOODS_DETAIL,
  GOODS_COMMENT,
  USER_INFO,
  RESET_USER_INFO,
  CART_GOODS_LIST,
  CHANGE_GOODS_COUNT,
  SELECTED_ALL_GOODS,
  SELECTED_SINGLE_GOODS,
  DEL_SINGLE_GOODS,
  DEL_ALL_GOODS
} from './mutation-types'

export default {
  [HOME_CASUAL](state, {homecasual}) {
    state.homecasual = homecasual;
  },

  [CATEGORY_LIST](state,{categoryList}){
	  state.categoryList = categoryList;
  },

  [HOME_SHOP_LIST](state, {homeshoplist}) {
    state.homeshoplist = state.homeshoplist.concat(homeshoplist);
  },

  [RECOMMEND_SHOP_LIST](state, {recommendshoplist}) {
    state.recommendshoplist = recommendshoplist;
  },

  [GOODS_DETAIL](state, {goodsDetail}) {
    state.goodsDetail = goodsDetail;
  },

  [GOODS_COMMENT](state, {goodsComment}) {
    state.goodsComment = goodsComment;
  },

  [USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo;
  },

  [RESET_USER_INFO](state) {
    state.userInfo = {};
  },

  [CART_GOODS_LIST](state, {cartgoods}) {
    state.cartgoods = cartgoods;
  },

  [CHANGE_GOODS_COUNT](state, {goods,count}) {
    const index = state.cartgoods.indexOf(goods);
    state.cartgoods[index].buy_count = count;
  },

  [SELECTED_ALL_GOODS](state, {isSelectedAll}){
    state.cartgoods.forEach((goods)=>{
      goods.checked = !isSelectedAll;
      console.log(goods.checked);
      /*if(goods.checked){
        // 该属性存在
        goods.checked = !isSelected;
      }else{
        Vue.set(goods, 'checked', !isSelected);
      }*/
    });
  },

  [SELECTED_SINGLE_GOODS](state, {goods}){
    const index = state.cartgoods.indexOf(goods);
    if(!goods.checked){
      //Vue.set(goods, 'checked', true);
      state.cartgoods[index].checked = true;
    }else{
      state.cartgoods[index].checked = !state.cartgoods[index].checked;
    }
  },

  [DEL_SINGLE_GOODS](state, {goods}){
    goods.buy_count = 0;
    const index = state.cartgoods.indexOf(goods);
    state.cartgoods.splice(index, 1);
  },

  [DEL_ALL_GOODS](state){
    state.cartgoods = [];
  },
}
