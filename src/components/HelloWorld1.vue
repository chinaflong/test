<template>
   
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img v-lazy="thumb" >
      </van-swipe-item>
    </van-swipe>
   
   <!--  <van-row type="flex" justify="center">
    <van-col span="6" offset="2"><van-icon name="close" color="red" /></van-col>
    <van-col span="6" style="font-size:30px;text-align:center"><van-icon name="chat" color="red" /></van-col>
    <van-col span="8" ></van-col>
    </van-row>-->
     <van-row class="user-links" >
   
  <van-col span="8"><img src="http://img.wabaogu.cn/adv/top1.png"></van-col>
  <van-col span="8"><img src="http://img.wabaogu.cn/adv/top2.png"></van-col>
  <van-col span="8"><img src="http://img.wabaogu.cn/adv/top3.png"></van-col>
</van-row>
<van-row style="text-align:center">
  <van-col span="8">待付款</van-col>
  <van-col span="8">待接单</van-col>
  <van-col span="8">待发货</van-col>
</van-row>
  
    
    <van-row class="goods-info" type="flex" justify="center">
     <van-col span="12" ><img src="http://img.wabaogu.cn/adv/car1.jpg" >
     <div class="goods-title">荣威RX3 2018款 1.6L CVT旗舰版</div>
        <div class="goods-price">首付1.5万</div>
     </van-col>
     <van-col span="12" ><img src="http://img.wabaogu.cn/adv/car2.jpg" ><div class="goods-title">荣威RX3 2018款 1.6L CVT旗舰版</div>
        <div class="goods-price">¥129.00</div></van-col>
     
     </van-row>

    
    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ goods.express }}</van-col>
        <van-col span="14">剩余：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>

   
  </div>
</template>

<script>
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },
  data() {
    return {
      active: 2,
      imageList: [
         'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
         'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
      ],
      goods: {
        title: '美国伽力果（约680g/3个）',
        price: 2680,
        express: '免运费',
        remain: 19,
        thumb: [
          'http://img.wabaogu.cn/adv/adv1.png',
          'http://img.wabaogu.cn/adv/adv2.png'
        ]
      }
    };
  },
  methods: {
    formatPrice() {
      return '¥' + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push('cart');
    },
    sorry() {
      Toast('暂无后续逻辑~');
    }
  }
};
</script>
<style lang="less">
.goods {
 
  &-swipe {
    img {
      width: 7.5rem;
      height: 2.4rem;
      display: block;
    }
  }
    &-info {
    img {
      width: 3.6rem;
      height: 2.4rem;
      padding:0.1rem;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
}

.user {

  &-links {
    padding: 15px 2px;
    font-size:0.3rem;
    text-align: center;
    background-color: #fff;

   img {
      width: 1rem;
      height:1rem;
     
    }
  }
}
</style>
