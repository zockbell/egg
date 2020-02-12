<template>
    <div>
        <van-uploader
            v-model="fileList"
            :max-count="1"
            :after-read="afterRead"
        />
        <van-cell-group>
            <van-field label="文章标题" placeholder="文章标题" v-model="title" />
            <van-field label="文章简介" placeholder="文章简介" v-model="summary" />
            <van-field label="文章内容" placeholder="文章内容" v-model="content" />
        </van-cell-group>

        <van-button type="primary" @click="handelAdd" class="add-button">提交</van-button>

    </div>
</template>

<script>
import { Uploader, CellGroup, Field, Button, Toast } from 'vant';

export default {
  name: 'app',
  components: {
      [Uploader.name]: Uploader,
      [CellGroup.name]: CellGroup,
      [Field.name]: Field,
      [Button.name]: Button
  },
  data() {
      return {
          fileList: [],
          title: '',
          summary: '',
          content: '',
          img: ''
      }
  },
  methods: {
      afterRead(info) {
          window.console.log(info);
          this.img = info.content;
      },
      handelAdd() {
          const data = {
              title: this.title,
              summary: this.summary,
              content: this.content,
              img: this.img
          };
          window.console.log(data);
          
          // 保存数据
          fetch('/article/add',{
              method: 'post',
              headers: {
                  'Content-type': 'application/json'
              },
              body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(res => {
              if(res.status == 200){
                  Toast.success('文章发布成功！');
                  this.$router.push('/');
              }else{
                  Toast.fail(res.errMeg);
              }
          })
      }
  },
}
</script>

<style scoped>
.add-button {
    position: relative;
    display: block;
    top: 30px;
    left: 0;
    width: 100%;
}
</style>