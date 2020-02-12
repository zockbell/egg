<template>
    <div>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <van-cell v-for="(item,index) in list" 
            :key="index" 
            @click="handleClick(item.id)"
            >

            <div class="list">
                <div class="left">
                    <img :src="item.img" alt="">
                </div>
                <div class="right">
                    <div class="title">{{item.title}}</div>
                    <div class="time">{{item.createTime}}</div>
                </div>
            </div>

            </van-cell>
        </van-list>
    </div>
</template>

<script>
import { List, Cell, Toast } from 'vant';
import moment from 'moment';

export default {
  name: 'app',
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    handleClick(id) {
        this.$router.push({
            path: '/detail/'+id,
            parames: {
                id
            }
        });
    },
    onLoad() {
      fetch('/article/list')
        .then(res => res.json())
        .then(res => {
            if(res.status == 200) {
                this.loading = false;
                this.finished = true;
                this.list = res.data.map(item => {
                    if(item.createTime) {
                        item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm:ss');
                    }
                    return item;
                });
            }else{
                Toast.fail(res.errMsg);
            }
        })


      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      /*
      setTimeout(() => {
        // 加载状态结束
        this.loading = false;
        this.finished = true;
        this.list = [
            {
                "id": 1,
                "title": "约基奇30+21+10掘金送爵士五连败 穆雷31分",
                "img": "https://inews.gtimg.com/newsapp_bt/0/11292950545/641",
                "summary": "腾讯体育2月6日讯 掘金98-95击败爵士，完成15分大逆转，送给爵士五连败。掘金伤兵满营，加上马里克-比斯利等人被交易，今天一共只有7人作战，2名替补球员还不是常规轮换球员。",
                "content": "本场之星：尼科拉-约基奇\n掘金完完全全是一个残阵，面对兵强马壮且主场作战的爵士，总体天赋差距很大。从纸面上看，掘金对爵士没有多少胜算，但约老师和穆雷两名球员却完成了对爵士的天赋碾压。\n约老师今天面对同样是全明星中锋的戈贝尔，完完全全统治比赛。他展现出了稳定的中距离投篮能力、强势的内线进攻和卓越的组织策应能力，左右和主宰了今天的比赛。",
                "createTime": "2020-02-06"
            },
            {
                "id": 2,
                "title": "湖人在行动！格林库兹马或被打包交易 还曾询价施罗德丁威迪",
                "img": "https://inews.gtimg.com/newsapp_bt/0/11292095895/1000",
                "summary": "距离交易截止日还有一天的时间，湖人副总裁佩林卡在交易谈判上相当积极。北京时间2月6日，尼克斯和湖人继续商讨关于库兹马和马库斯-莫里斯的交易，快船也对马库斯-莫里斯感兴趣，他们同样和尼克斯保持接触。湖人跟队记者布拉德-特纳更新了交易谈判的最新进展。",
                "content": "快船想要送出莫-哈克利斯，但尼克斯想要兰德里-沙梅特，而这是快船目前不愿意放弃的球员。距离交易截止日只剩一天，湖人和快船的竞争越来越激烈。有消息称，除了尼克斯的马库斯-莫里斯，两队还对他的双胞胎兄弟马基夫-莫里斯感兴趣。目前，马基夫-莫里斯效力于活塞。除了快船和湖人，雄鹿、76人、凯尔特人也有意马基夫-莫里斯。",
                "createTime": "2020-02-06"
            },
            {
                "id": 3,
                "title": "瓦妮莎连发两条动态，6个词形容科比令人泪目",
                "img": "https://inews.gtimg.com/newsapp_bt/0/11268119081/1000",
                "summary": "科比去世10天了，但他的家人依然沉浸在深深的悲痛中。北京时间2月6日，科比遗孀瓦妮莎在社交平台上连发两条动态，对他的丈夫表达了思念之情。",
                "content": "瓦妮莎的第一条动态，是一张科比的特写照片。照片上的科比，露出灿烂的微笑。瓦妮莎配文写道：“#最好的朋友#最好的爸爸，好想你。#帅气#甜蜜#幽默#傻乎乎的#一直爱着的丈夫，想念你每天对我说。‘早安，我的公主/女王’。”科比生前经常在他的社交平台配文中添加一个标签，标签名为——#queenmamba（曼巴女王），指代的就是爱妻瓦妮莎。",
                "createTime": "2020-02-06"
            },
        ];
      }, 1000);
      */

    }
  }
}
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: row;
}
.left, img {
    width: 150px;
    height: 100px;
    border-radius: 5px;
}
.left, .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 15px;
}
.left {
    margin-left: 0;
}
.right .title {
    font-size: 16px;
}
.right .time {
    color: #666;
    font-size: 12px;
}
</style>