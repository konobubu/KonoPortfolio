<template>
    <div class="work-wrapper">
        <Workitem v-for="item in content" v-bind:key="item.id"
            v-bind:name="item.name"
            v-bind:text="item.text"
            v-bind:lang="item.lang"
            v-bind:link="item.link"
            v-bind:linkname="item.linkname"
        >
        </Workitem>
    </div>
</template>

<script>
import Workitem from '@/components/Workitem.vue'

export default {
    components: {
        Workitem
    },
    data() {
        return {
            content: [
                {
                    id: 1,
                    name: "ポートフォリオサイト",
                    text: "このページのことです。 自分自身のポートフォリオです。SPA対応の簡易ポートフォリオサイトを作りたいと思い、JavaScriptフレームワーク「Vue.js」を用いて作成しました。",
                    lang: "JavaScript(Vue.js) / HTML / CSS",
                    link: "https://github.com/konobubu/KonoPortfolio",
                    linkname: "github"
                },
                {
                    id: 2,
                    name: "Boy.",
                    text: "アルバイト先で運営しているサイトです。フォームの作成やページの作成などを行っています。また、どこに配置したらクリック数が多くなるかを、GoogleAnalyticsなどの数値もみながらPDCAを回しています。",
                    lang: "PHP(WordPress) / HTML / CSS / JS",
                    link: "https://b-o-y.me/",
                    linkname: "Boy."
                },
                {
                    id: 3,
                    name: "音調整エフェクト",
                    text: "三年次のゼミで作成したものです。手の高さに応じて、音量とエフェクトを調節することができます",
                    lang: "TouchDesighner",
                    link: "https://www.youtube.com/watch?v=RAMrbmTYt0I",
                    linkname: "YouTube"
                },
                {
                    id: 4,
                    name: "easy-css",
                    text: "HTMLやCSSを書きたいけど分からない..... そういった方でも安心して使っていただけるようなHTML&CSSのコピペサイト",
                    lang: "JavaScript(Vue.js) / HTML / CSS",
                    link: "https://konobubu.github.io/easy-css/",
                    linkname: "github page"
                },
                {
                    id: 5,
                    name: "スライダー",
                    text: "主にスマホで使うことを想定した縦スライダー。cssもsp用のみです",
                    lang: "JavaScript(JQuery) / HTML / CSS",
                    link: "https://konobubu.github.io/tateSlider/",
                    linkname: "github page"
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

@media screen and (max-width:479px) { //sp
    .work-wrapper{
        width: 100%;
        margin: 0 auto;
        height: auto;
        padding-bottom: 60px;
    }
}

@media screen and (min-width:480px) { //pc
    .work-wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 70%;
        margin: 0 auto;
        height: auto;
        padding-bottom: 60px;
    }
}

</style>