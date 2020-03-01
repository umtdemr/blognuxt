<template>
    <div class="comment_list">
        <h3 class="comment_list--title">Yorumlar (3)</h3>
        <div class="comment_list__wrapper">
            <SingleComment v-for="comment in comments" :comment="comment" :key="comment.id"/>
        </div>
        
       
        <a class="comment_list__more">Tüm yorumlar <i class="fa fa-chevron-right"></i></a>
    </div>
</template>

<script>
import SingleComment from './comments/SingleComment'
export default {
    components: {
        SingleComment
    },
    data() {
        return {
            comments: [
                {
                    id: 1,
                    thumbnail: 'https://www.breakthroughcollaborative.org/wp-content/uploads/400x400.png',
                    name: 'Ümit Demir',
                    date: '14.02.2020',
                    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui veniam, eaque ducimus modi numquam impedit temporibus quibusdam eveniet. Molestiae fugit pariatur atque aperiam, laborum similique aliquam neque consequatur tempore. Esse!'
                },
                {
                    id: 2,
                    thumbnail: 'https://www.breakthroughcollaborative.org/wp-content/uploads/400x400.png',
                    name: 'Murat Gültekin',
                    date: '14.02.2020',
                    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui veniam, eaque ducimus modi numquam impedit temporibus quibusdam eveniet. Molestiae fugit pariatur atque aperiam, laborum similique aliquam neque consequatur tempore. Esse! orem ipsum dolor, sit amet consectetur adipisicing elit. Qui veniam, eaque ducimus modi numquam impedit temporibus quibusdam eveniet. Molestiae fugit pariatur atque aperiam, laborum similique aliquam neque consequatur tempore. Esse! orem ipsum dolor, sit amet consectetur adipisicing elit. Qui veniam, eaque ducimus modi numquam impedit temporibus quibusdam eveniet. Molestiae fugit pariatur atque aperiam, laborum similique aliquam neque consequatur tempore. Esse! orem ipsum dolor, sit amet consectetur adipisicing elit. Qui veniam, eaque ducimus modi numquam impedit temporibus quibusdam eveniet. Molestiae fugit pariatur atque aperiam, laborum similique aliquam neque consequatur tempore. Esse!'
                }
            ]
        }
    }
}
</script>