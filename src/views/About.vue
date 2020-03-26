<template>
  <div class="about">
    <Profile/>
    <div class="skill-wrapper">
      <div class="skill">
        <span
          v-for="(value,key) in skillText"
          v-bind:key="key"
          class="skill-txt"
          :style="{animationDelay: key*100+100+'ms'}">
          {{value}}
        </span>
        <Skill v-bind:skills="mySkill"/> <!-- skill.vueにmySkillの配列データを渡しています -->
      </div>
      <div class="study">
        <span
          v-for="(value,key) in studyText"
          v-bind:key="key"
          class="study-txt"
          :style="{animationDelay: (count-key)*100+400+'ms'}">
          {{value}}
        </span>
        <Skill v-bind:studies="StudyNow"/>
      </div>
    </div>
  </div>
</template>

<script>
import Skill from '@/components/Skill.vue'
import Profile from '@/components/Profile.vue'

export default {
  components: {
    Skill,
    Profile
  },
  data() {
    return {
      skillText: "MySkill",
      studyText: "Study",
      count: '',
      mySkill: [
          {id: 0, lang: 'HTML', star: 40},
          {id: 1, lang: 'CSS', star: 40},
          {id: 2, lang: 'Ruby(Ruby on Rails)', star: 25},
          {id: 3, lang: 'PHP', star: 30},
          {id: 4, lang: 'WordPress', star: 30}
      ],
      StudyNow: [
          {id: 0, lang: 'JavaScript', star: 45},
          {id: 1, lang: 'Vue.js', star: 45},
      ]
    }
  },
  created: function(){
    this.count = this.studyText.length;
  }
}
</script>


<style scoped lang="scss">

.about{
  height: 825px;

  .skill-wrapper{
    display: flex;
    justify-content: space-between;
    width: 65%;
    margin: 0 auto;

    .skill{
      margin: 88px 0 36px 0;
      width: 65%;
    }

    .study{
      margin: 88px 0 30px 0;
      width: 48%;
    }
  }
}

@keyframes text-in {
  0% {
    transform: translate(0, -100px);
    opacity: 0;
  }
}

.skill-txt {
  display: inline-block;
  width: 18px;
  padding: 8px;
  border-radius: 50%;
  background-color: #2bb1a8;
  font-weight: bold;
  color: #fff;
  margin-right: 5px;
  font-size: 15px;
  font-family: AlfaSlabOne-Regular, sans-serif;
  -webkit-animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 10s backwards;
  animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 10s backwards;
  margin-bottom: 12px;
}

.study-txt{
  display: inline-block;
  width: 18px;
  padding: 8px;
  color: #fff;
  border-radius: 50%;
  background-color: #a9a9a9;
  margin-right: 5px;
  font-size: 15px;
  font-weight: bold;
  font-family: AlfaSlabOne-Regular, sans-serif;
  -webkit-animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 10s backwards;
  animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 10s backwards;
  margin-bottom: -10px;
}
</style>
