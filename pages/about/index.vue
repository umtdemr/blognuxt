<template>
    <div class="page-content">
        <h2 class="page-content__title">Hakkımda</h2>
        <div class="main_hr"></div>
    </div>
</template>

<script>
export default {
    asyncData(context, callback) {
        setTimeout(() => {
            callback(null, {
                loadedPosts: [
                    { id: '1', title: 'Tech istanbul', previewText: 'This is our first istanbul', thumbnail: 'https://egirisim.com/wp-content/uploads/2020/02/tech-istanbul-696x392.jpeg'},
                    { id: '2', title: 'Tech istanbul 2', previewText: 'This is our second istanbul', thumbnail: 'https://egirisim.com/wp-content/uploads/2020/02/tech-istanbul-696x392.jpeg'},
                ]
            })
        }, 1500)
    },
}
</script>