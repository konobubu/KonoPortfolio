<template>
    <div class="work-item">
        <h3>{{name}}</h3>
        <p class="work-text">{{text}}</p>
        <p class="work-lang">{{lang}}</p>
        <a v-bind:href="link">{{linkname}}</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        name: String,
        text: String,
        lang: String,
        link: String,
        linkname: String,
    }
}
</script>

<style scoped lang="scss">
@media screen and (max-width:479px) { //sp
    .work-item{
        width: 85%;
        margin: 0 auto;
        margin-bottom: 12px;
        overflow: auto;
        text-align: center;
        height: 250px;
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
        padding: 12px 14px;

        .work-text{
            line-height: 20px;
        }
    }
}

@media screen and (min-width:480px) { //pc
    .work-item{
        width: 35%;
        overflow: auto;
        text-align: center;
        height: 250px;
        box-sizing: border-box;
        margin: 0 8px 16px 8px;
        background-color: #fff;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
        padding: 12px 14px;

        .work-text{
            line-height: 20px;
        }
    }
}
</style>