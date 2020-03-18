<template>
    <div class="profile-wrapper">
        <div class="profile">
            <div class="profile-img">
                <figure><img src="../assets/tin.jpg"></figure>
            </div>
            <div class="profile-txt">
                <h2>Profile</h2>
                <p>はじめまして。1998年生まれの向野佑基と申します。気軽にこのっちなんて呼んでください。
                    学校は近畿大学産業理工学部。2021年卒予定です。
                    ベンチャー企業での長期インターンを通して、サイトを運営していくうちに自分で作った機能が実装されたり、
                    新しい技術に挑戦するのが楽しくなりwebエンジニアとしての就活を始めることを決意しました。</p>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">

.profile-wrapper{
    width: 53%;
    margin: 0 auto;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.25);
    padding: 24px 32px 32px 32px;
    background-color: #fff;
}

.profile{
    display: flex;
    justify-content: space-between;
    margin-left: -70px;

    .profile-img{
        width: 30%;
        position: relative;

        img{
            width: 140px;
            height: 140px;
            border-radius: 50%;
            position: absolute;
            left: 90px;
            top: 73px;
        }
    }

    .profile-txt{
        width: 68%;
        text-align: left;
        position: relative;

        h2{
            font-family: AlfaSlabOne-Regular,sans-serif;
            font-size: 4rem;
            margin: 0;
            // position: absolute;
            // top: 0;
            // left: 20px;
        }

        p{
            padding-top: 4px;
            line-height: 28px;
            width: 100%;
            margin: 0 auto;
        }
    }
}


</style>