<template lang="html">
  <div class="modal" :class="{'is-active' : isShowModal}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">添加试卷</p>
        <button @click="switchModal()" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="box-item">
          <label>试卷标题</label>
          <input v-model="examinationPaperData.title" class="input" type="text">
        </div>

        <div class="box-item">
          <label>总分</label>
          <input v-model="examinationPaperData.score" class="input" type="text">
        </div>
        <div class="box-item">
          <label>最小值</label>
          <input v-model="examinationPaperData.min" class="input" type="text">
        </div>
        <div class="box-item">
          <label>描述</label>
          <input v-model="examinationPaperData.describe" class="input" type="text">
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">确认</button>
        <button  @click="switchModal()" class="button">取消</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowModal: false,
      examinationPaperData: {
        title: null,
        score: null,
        min: null,
        describe: null
      },
      token: null,
    }
  },
  components: {
  },
  methods: {
    switchModal: function () {
      const that = this;
      that.isShowModal = !that.isShowModal;
    },
    addQuestion: function () {
      const that = this;
      axios({
        method: 'post',
        url: `${this.GLOBAL.localDomain}/api/v1/questions/`,
        headers: {
          'Accept': 'application/json',
          'Authorization': that.token
        },
        body: {
          question_type: that.examinationPaperData.question_type,
          level_type: that.examinationPaperData.level_type,
          title: that.examinationPaperData.title,
          body: that.examinationPaperData.body,
          answer: that.examinationPaperData.answer,
          answer_comment: that.examinationPaperData.answer_comment
        }
      }).then(res => {
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
</style>
