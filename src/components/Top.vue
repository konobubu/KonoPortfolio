<template>
  <div class="portfolio-ttl">
    <!-- {{$data}} -->
    <vue-typer
      text='This is Kono Portfolio'
      :repeat=0
      :type-delay='80'
    ></vue-typer>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  components: {
    VueTyper
  },
  data() {
    return {
      text: "This is Kono Portfolio",
      textCount: '',
      txt: [],
      index: [1,2,3,4,5,6,7,8,9,10],
      array: {
        ind: '',
        tx: "This is Kono Portfolio",
      }
    }
  },
  methods: {
    addArray: function(){
      this.textCount = this.text.length
      for(var i=0; i<this.textCount; i++){
        this.txt = this.text.split('')
        this.index.push(i)
      }
    },
    shuffle: function(){
      for(var i = this.array.length - 1; i > 0; i--){
          var r = Math.floor(Math.random() * (i + 1));
          var tmp = this.array[i];
          this.array[i] = this.array[r];
          this.array[r] = tmp;
      }
    }
  },
  created: function(){
    this.array.ind = this.index
    this.addArray()
    this.shuffle()
  }
}
</script>

<style scoped lang="scss">
@media screen and (max-width:479px) { //sp
  .top{
    background-color: darkgrey;
  }

  .vue-typer{
    min-width: 0.3em;
    font-size: 2rem;
  }
}

@media screen and (min-width:480px) { //pc
  .top{
    background-color: darkgrey;
  }

  .vue-typer{
    min-width: 0.3em;
    font-size: 4rem;
  }
}

</style>