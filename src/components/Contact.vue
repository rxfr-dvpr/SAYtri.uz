<template>
    <section class="contact__section">
        <div class="container">
            <div class="row">
                <span class="contact-icon"><i class="fab fa-telegram-plane"></i></span>

                <h3 class="contact-title">{{ store.title }}</h3>

                <form action="" class="contact__form">
                    <input type="text" class="contact__form-inp" v-model="store.inp.val" 
                    :placeholder="store.inp.plc">

                    <button class="contact__form-btn all-btn dark">{{ store.btnTxt }}</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { contactStore } from "@/stores/contactStore.js";

export default {
    name: 'Contact Section',
    data() {
        return {
            store: contactStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.contact__section {
    width: 100%;

    .row {
        justify-content: space-between;
        gap: 20px;
        align-items: center;
    }

    .contact-icon {
        font-size: 50px;

        i {
            color: var(--main-blue);
        }
    }

    .contact-title {
        color: var(--main-blue);
        font-size: 32px;
        font-weight: 400;
    }

    .contact__form {
        max-width: 680px;
        width: 100%;
        display: flex;
        gap: 25px;

        &-inp {
            max-width: 375px;
            width: 100%;
            background: transparent;
            border: 0;
            border-bottom: 1px solid #000;
            outline: none;
            font-size: 15px;
            font-weight: 500;
            color: var(--main-red);

            &::placeholder {
                font-size: 14px;
                color: #CDCDCD;
            }
        }

        &-btn {
            max-width: 280px;
            width: 100%;
        }
    }
}

</style>