<template>
    <div class="skill-table">
        <table class="myskill-table">
            <tbody>
                <tr v-for="skill in skills" v-bind:key="skill.id">
                    <td class="skill-lang">{{skill.lang}}</td>
                    <td class="teble-conect">・・・・</td> <!-- Aboutのskills.starからの参照 -->
                    <td class="skill-star"><span class="star-rating" v-bind:style="{width: skill.star + '%'}">{{star}}</span></td>
                </tr>
            </tbody>
        </table>
        <table class="study-table">
            <tbody>
                <tr v-for="study in studies" v-bind:key="study.id">
                    <td class="skill-lang">{{study.lang}}</td>
                    <td class="teble-conect">・・・・</td>
                    <td class="skill-star"><span class="star-rating" v-bind:style="{width: study.star + '%'}">{{star}}</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Skill',
    props: { //About.vueからデータを受け取る
        skills: Array, 
        studies: Array,
    },
    data: ()=> {
        return {
            star: "★★★★★",
            // skills: [
            //     {id: 0, lang: 'HTML', star: 40},
            //     {id: 1, lang: 'CSS', star: 40},
            //     {id: 2, lang: 'Ruby(Ruby on Rails)', star: 25},
            //     {id: 3, lang: 'PHP', star: 30},
            //     {id: 4, lang: 'WordPress', star: 30}
            // ],
            // studies: [
            //     {id: 0, lang: 'JavaScript', star: 30},
            //     {id: 1, lang: 'Vue.js', star: 20},
            // ]
        }
    }
}
</script>

<style scoped>

.skill-table{
    height: 300px;
    width: 100%;
    margin: 0 auto;
}

table{
    border-style: none;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    border-collapse: separate;
    border-spacing: 40px 20px;
}

.table-conect{
    width: 10%;
}

.star-rating{
    position: relative;
    display: inline-block;
    overflow: hidden;
    color: #ffcc33;
}

.skill-lang{
    width: 45%;
}

.skill-star{
    width: 45%;
}

/* .skill-star::before{
    content: "・・・・";
    text-align: left;
} */
/* .star-rating .star-rating-item{
    position: absolute;
    
} */
</style>