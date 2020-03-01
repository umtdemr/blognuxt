<template>
    <div class="leave_comment">
        <h2 class="leave_comment__title"> Düşünceni paylaş </h2>
            <transition-group name="fade" mode="out-in">
                <template v-if="!isPosted">
                    <form class="leave_comment__form" key="form">
                        <div class="form__group">
                            <label for="fullname">Ad Soyad</label>
                            <input 
                                type="text" 
                                id="fullname" 
                                placeholder="ad soyad" required>
                        </div>
                        <div class="form__group">
                            <label for="email">Email</label>
                            <input 
                                placeholder="email" 
                                type="email" 
                                id="email">
                        </div>
                        <div class="form__group">
                            <label for="comment">Yorum</label>
                            <textarea 
                                id="comment"
                                rows="5"
                                placeholder="Yorumunuz"></textarea>
                        </div>
                        <div class="form__group">
                            <button @click.prevent="isPosted = true" class="form__submit">Gönder</button>
                        </div>
                    </form>
                </template>
                <template v-if="isPosted">
                    <div class="comment_alert success" key="alert">
                        Yorum gönderildi. Onaylandıktan sonra yayına alınacaktır.
                    </div>
                </template>
            </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isPosted: false
        }
    }
}
</script>

<style scoped>
.fade-move{
    transition: transform .5s;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-leave-active{
    position: absolute;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>