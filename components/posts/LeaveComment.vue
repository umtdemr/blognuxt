<template>
    <div class="leave_comment">
        <template v-if="!isPosted">
            <h2 class="leave_comment__title"> Düşünceni paylaş </h2>
            <form class="leave_comment__form">
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
        <transition name="fade">
            <template v-if="isPosted">
                <div class="comment_alert success">
                    Yorum gönderildi. Onaylandıktan sonra yayına alınacaktır.
                </div>
            </template>
        </transition>
        
        
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>