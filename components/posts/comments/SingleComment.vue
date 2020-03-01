<template>
    <div class="comment_list__item">
        <div class="item__img">
            <img :src="comment.thumbnail" alt="Ziyaretçi avatarı">
        </div>
        <div class="item__summary">
            <span class="item__title">{{ comment.name }} </span>
            <span class="item__date">{{ comment.date }}</span>
            <p class="item__comment">
                {{ comment.comment }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        comment: {
            type: Object,
            required: true
        }
    }
}
</script>