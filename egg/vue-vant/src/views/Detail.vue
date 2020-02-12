<template>
    <div>
        <div class="detail">
            <div class="title">{{detail.title}}</div>
            <div class="summary">{{detail.summary}}</div>
            <div class="img"><img :src="detail.img" :alt="detail.title"></div>
            <div class="content">{{detail.content}}</div>
            <div class="create-time">{{detail.createTime}}</div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
import moment from 'moment';

export default {
    data() {
        return {
            id: this.$route.params.id,
            detail: {
                // "id": 1,
                // "title": "约基奇30+21+10掘金送爵士五连败 穆雷31分",
                // "img": "https://inews.gtimg.com/newsapp_bt/0/11292950545/641",
                // "summary": "腾讯体育2月6日讯 掘金98-95击败爵士，完成15分大逆转，送给爵士五连败。掘金伤兵满营，加上马里克-比斯利等人被交易，今天一共只有7人作战，2名替补球员还不是常规轮换球员。",
                // "content": "本场之星：尼科拉-约基奇\n掘金完完全全是一个残阵，面对兵强马壮且主场作战的爵士，总体天赋差距很大。从纸面上看，掘金对爵士没有多少胜算，但约老师和穆雷两名球员却完成了对爵士的天赋碾压。\n约老师今天面对同样是全明星中锋的戈贝尔，完完全全统治比赛。他展现出了稳定的中距离投篮能力、强势的内线进攻和卓越的组织策应能力，左右和主宰了今天的比赛。",
                // "createTime": "2020-02-06"
            }
        }
    },
    created() {
        fetch('/article/detail/' + this.id)
        .then(res => res.json())
        .then(res => {
            if(res.status == 200) {
                this.detail = res.data;
                this.detail.createTime = res.data.createTime ? moment(res.data.createTime).format('YYYY-MM-DD HH:mm:ss') : undefined;
            }else{
                Toast.fail(res.errMeg);
            }
        })
    }
}
</script>

<style scoped>
.detail {
    padding: 20px;
    text-align: left;
}
.detail .title {
    font-size: 20px;
    padding-bottom: 20px;
}
.detail .img img {
    width: 100%;
}
.detail .summary {
    padding: 20px;
    margin-bottom: 20px;
    background: #f1f1f1;
}
.detail .content {
    text-indent: 2em;
    line-height: 2;
    padding: 0 10px;
}
.detail .create-time {
    color: #666;
    text-align: right;
}
</style>