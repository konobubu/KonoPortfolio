<template>
    <div class="contact">
        <h1>勉強会やイベントなど、お気軽にご連絡ください！</h1>
        <form v-bind:action="action">
            <div class="contact-form">
                <div class="contact-name-wrapper">
                    <div class="contact-label">
                        <label for="name">お名前</label>
                    </div>
                    <input id="name" class="input-content" type="text" v-bind:name=name
                    required/>
                </div>
                <div class="contact-mail-wrapper">
                    <div class="contact-label">
                        <label for="email">メールアドレス</label>
                    </div>
                    <input id="email" class="input-content" type="text" v-bind:name=email
                    required/>
                </div>

                <div class="contact-msg-wrapper">
                    <div class="contact-label">
                        <label for="msg">お問い合わせ内容</label>
                    </div>
                    <textarea id="msg" class="txtarea-content" v-bind:name=msg
                    required></textarea>
                </div>

                <button value="送信" class="contact-btn">送信</button>             
            </div>
        </form>
    </div>
</template>

<script>
//     import { extend, ValidationProvider, ValidationObserver } from 'vee-validate';
//     import { required, email } from 'vee-validate/dist/rules';
// // バリデーションルール
//     extend('required', required);
//     extend('email', email);
//     // vee-validateの日本語
//     import { localize } from 'vee-validate';
//     import ja from 'vee-validate/dist/locale/ja.json';
//     localize({ja});

    export default {
//         components: {
//             ValidationProvider,
//             ValidationObserver
//         },
//         inject: ['$validator'],
        data() {
            return {
                action: "https://docs.google.com/forms/d/e/1FAIpQLSd7ijE551XtnN__81ixUDyouLW3nHR_IN5u_QS9tYq3kKsfiQ/viewform?usp=sf_link",
                name: "entry.2005620554",
                email: "entry.1045781291",
                msg: "entry.839337160",
                submitted: false
            }
        },
        // methods: {
        //     gf_submit: function() {
        //     this.$validator.validate().then(result => {
        //         if (!result) {
        //         return false;
        //         }
        //         document.gf_form.submit();
        //         this.submitted = true;  
        //     });
        //     }
        // },
        // mounted: function() {
        //     var iframe = document.createElement("iframe");
        //     iframe.setAttribute('name','hidden_iframe');
        //     iframe.setAttribute('style','display: none');
        //     document.body.appendChild(iframe);
        // }
    }
</script>

<style scoped lang="scss">
@media screen and (max-width:479px) { //sp
    $contact-height: calc(100% - 100px);

    .contact{
        height: $contact-height;

        h1{
            width: 80%;
            margin: 0 auto;
            font-weight: normal;
            padding-bottom: 16px;
            font-family: AlfaSlabOne-Regular,sans-serif;
            font-size: 20px;
            padding-top: 3rem;
            padding-bottom: 40px;
        }
    }

    .contact-form{
        width: 60%;
        margin: 0 auto;

        .contact-label{
            text-align: left;
        }

        .input-content{
            width: 100%;
            border-radius: 3px;
            padding: 8px 12px;
            border: 1px solid #ddd;
            box-sizing: border-box;
            margin-bottom: 24px;
        }

        .input-content:focus {
            box-shadow: 0 0 5px 0 rgba(255,153,0,1);
            border: 2px solid #FFF !important;
            outline: 0;
        }

        .txtarea-content{
            width: 100%;
            border-radius: 3%;
            border: 1px solid #ddd;
            box-sizing: border-box;
            height: 100px;
            margin-bottom: 24px;
        }

        .contact-btn{
            padding: 8px 16px;
            background: #41B888;
            color: #fff;
        }
    }
}

@media screen and (min-width:480px) { //pc
    $contact-height: calc(100vh - 110px);

    .contact{
        height: $contact-height;

        h1{
            width: 80%;
            margin: 0 auto;
            font-weight: normal;
            padding-bottom: 16px;
            font-family: AlfaSlabOne-Regular,sans-serif;
            font-size: 20px;
            padding-bottom: 40px;
        }
    }

    .contact-form{
        width: 25%;
        margin: 0 auto;

        .contact-label{
            text-align: left;
        }

        .input-content{
            width: 100%;
            border-radius: 3px;
            padding: 8px 12px;
            border: 1px solid #ddd;
            box-sizing: border-box;
            margin-bottom: 24px;
        }

        .input-content:focus {
            box-shadow: 0 0 5px 0 rgba(255,153,0,1);
            border: 2px solid #FFF !important;
            outline: 0;
        }

        .txtarea-content{
            width: 100%;
            border-radius: 3%;
            border: 1px solid #ddd;
            box-sizing: border-box;
            height: 100px;
            margin-bottom: 24px;
        }

        .contact-btn{
            padding: 8px 16px;
            background: #41B888;
            color: #fff;
        }
    }
}

</style>