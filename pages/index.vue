<template>
      <div class="page-content">
          <h2 class="page-content__title">Blog</h2>
          <div class="main_hr"></div>
          <div class="post__filters">
              <div class="post__category">
                  <v-select multiple v-model="selectedCategory" :options="['Genel (230)','Film', 'Yazılım']"></v-select>
                </div>
            <div class="post__filter">
                <v-select v-model="selectedFilter" :options="['En yeni','En çok okunan', 'En eski']"></v-select>
            </div>
          </div>
          <div class="posts">
              <SinglePost v-for="post in posts" :post="post" :key="post.slug"/>
          </div>
      </div>
</template>

<script>
import 'vue-select/dist/vue-select.css';
import SinglePost from '@/components/posts/SinglePost'
import vSelect from 'vue-select'

export default {
    components: {
        SinglePost,
        vSelect
    },
    data() {
        return {
            posts: [
                {
                    slug: 'vue-js-nedir',
                    title: 'Vue js nedir',
                    date: '04 04 2020',
                    thumbnail: 'https://www.breakthroughcollaborative.org/wp-content/uploads/400x400.png',
                    previewText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident totam nam ex dolores. Tenetur amet autem nostrum, molestias adipisci soluta ipsum consectetur. Necessitatibus porro odio quidem quaerat error nostrum! Quidem! Veritatis a placeat incidunt ipsum laudantium eveniet et architecto fuga, hic repellendus fugit temporibus, voluptas at cupiditate dolor sapiente in, id maiores sunt molestiae doloremque dolorem nostrum minus debitis! Amet. Quis repudiandae cumque illum aut veritatis optio accusamus expedita officia ipsum nam ducimus magni vel fugiat ratione, quas dicta deserunt ad reiciendis obcaecati tempora consectetur magnam natus exercitationem iusto? Maiores.'
                    
                },
            ],
            selectedCategory: ['Genel (230)'],
            selectedFilter: 'En yeni'
        }
    }
}

</script>
