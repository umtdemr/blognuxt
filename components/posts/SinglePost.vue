<template>
    <div class="post__item">
        <div class="post__image">
            <img :src="post.thumbnail" alt="400x400">
        </div>
        <div class="post__summary">
            <div class="post__head">
                <nuxt-link :to="{name: 'post-slug', params: { slug:post.slug }}">
                    <a href="#">
                        <h2 class="post__title">{{ post.title }}</h2>
                    </a>
                </nuxt-link>
       
                <span class="post__date">{{ post.date }}</span>
            </div>
            <div class="post__content">
                <p>{{ post.previewText }}</p>
                <a href = "#" class="post__content--read_more">devamını oku</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            required: true,
            type: Object
        }
    }
}
</script>