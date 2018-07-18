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
  <van-col span="8"><a v-bind:href="url" v-bind:target="target"><img src="http://img.wabaogu.cn/adv/top1.png" @click="sorry"><div>我要贷款</div></a></van-col>
  <van-col span="8"><img src="http://img.wabaogu.cn/adv/top2.png" @click="sorry"><div>现场购车</div></van-col>
  <van-col span="8"><img src="http://img.wabaogu.cn/adv/top3.png"><div>全部车型</div></van-col>
</van-row>

  <van-notice-bar
  text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
  left-icon="http://img.wabaogu.cn/adv/notice.png"
/>
    
    <van-row class="goods-info"  style="text-align:center">
     <van-col span="12" ><img src="http://img.wabaogu.cn/adv/car1.jpg" ><div class="goods-title" style="text-align:left">荣威RX3 2018款 1.6L CVT旗舰版</div>

           <van-row class="goods-price">
             <van-col span="24" style="text-align:left;padding:10px 0;"><van-tag plain type="success">大气好车</van-tag></van-col>
             <van-col span="12" style="font-size:14px;text-align:left;color:#ff7414" >首付1.5万</van-col> <van-col span="12" style="font-size:14px;color:#8d91ac">月供2487元</van-col>
           </van-row>
    </van-col>
     <van-col span="12" ><img src="http://img.wabaogu.cn/adv/car2.jpg" ><div class="goods-title" style="text-align:left">荣威RX3 2018款 1.6L CVT旗舰版</div>
           <van-row class="goods-price">
               <van-col span="24" style="text-align:left;padding:10px 0;"><van-tag plain type="success">独家直供</van-tag></van-col>
             <van-col span="12" style="font-size:14px;text-align:left;color:#ff7414">首付1.5万</van-col> <van-col span="12" style="font-size:14px;color:#8d91ac">月供2497元</van-col>
           </van-row>
      </van-col>
     </van-row>
 
    <van-collapse v-model="activeNames">
    <van-collapse-item title="汽车商城" name="1">
      提供多样店铺模板，快速搭建网上商城
    </van-collapse-item>
    <van-collapse-item title="汽车零售" name="2">
      网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
    </van-collapse-item>
    <van-collapse-item title="汽车美业" name="3">
      线上拓客，随时预约，贴心顺手的开单收银
    </van-collapse-item>
</van-collapse>

<van-card title="荣威RX3 2018款 1.6L CVT旗舰版" desc="荣威RX3 2018款 1.6L CVT旗舰版"  num="2" price="19.8万"  thumb="http://img.wabaogu.cn/adv/car2.jpg">
</van-card>
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
          <span class="van-cell-text">汽车的店</span>
          <van-tag type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>
  <van-tabbar v-model="active">
  <van-tabbar-item icon="home">精选</van-tabbar-item>
  <van-tabbar-item icon="gift" dot>分类</van-tabbar-item>
  <van-tabbar-item icon="cart" info="5">购物车</van-tabbar-item>
  <van-tabbar-item icon="contact" info="20">我的</van-tabbar-item>
</van-tabbar>
   
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


  data() {
    return {
      active: 2,
      activeNames: ['1'],
       url: 'http://wx.wabaogu.cn/dist/',
    target:'_blank',
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
          'http://img.wabaogu.cn/adv/adv2.png',
          'http://img.wabaogu.cn/adv/adv3.png'
          
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
.goods {padding-bottom:50px; 
 
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
     
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    font-size: 16px;
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
    font-size:16px;
    text-align: center;
    background-color: #fff;

   img {
      width: 0.8rem;
      height:0.8rem;
     
    }
  }
}
</style>
