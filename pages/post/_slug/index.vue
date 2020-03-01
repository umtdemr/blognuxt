<template>
    <div class="page-content single_post">
          <h2 class="page-content__title">Buraya post başlığı gelecek</h2>
          <div class="main_hr"></div>
          <div class="single_post__summary">
                <span class="single_post__summary--date">
                  {{ loadedPost.date }}
                </span>
          </div>
          <div class="single_post__content"> 
              <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt in ullam error. Odit itaque ducimus obcaecati autem labore maiores necessitatibus aperiam temporibus quod beatae earum cum, asperiores nemo reiciendis voluptate.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque minus reiciendis amet officia unde suscipit accusantium laborum ipsa facere? Ad itaque veritatis placeat, nostrum possimus obcaecati aliquam cum consectetur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deserunt architecto earum illo ab esse quaerat sint voluptate nostrum repellat dolorem, voluptatum, similique odit officiis officia sit recusandae. Veniam, quisquam!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ex officia sit nesciunt libero in natus? Vero ea aliquid ducimus, repudiandae dolore eveniet blanditiis deleniti natus in nam sit ab!
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore veniam laboriosam harum facere. Nostrum pariatur fugiat fuga labore dolorum velit, ipsam incidunt unde eaque architecto, mollitia, illo voluptatem. Nesciunt, corporis.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil pariatur doloribus, voluptatibus libero inventore placeat error quaerat incidunt itaque sed quisquam officia, quia cupiditate quidem non? Amet, asperiores exercitationem?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quis velit quae praesentium facere quod ipsum tempora beatae, fuga enim quaerat rerum dignissimos, omnis iusto animi. Minima quam commodi architecto?
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptatum ipsam recusandae consectetur nemo blanditiis minus hic voluptatem minima cum error dolor at doloremque. Debitis architecto accusamus similique nemo ipsam.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam laborum mollitia hic aperiam blanditiis aspernatur dicta enim, autem vel tempora ipsum delectus architecto necessitatibus, recusandae, minima velit cumque non quod!
                   </p>
          </div>
          <LeaveComment />
    </div>
</template>

<script>
import LeaveComment from '@/components/posts/LeaveComment'
export default {
    components: {
        LeaveComment
    },
    data() {
        return {
            loadedPost: {
                slug: 'vue-js-nedir',
                title: 'Vue js nedir',
                date: '04 04 2020',
                thumbnail: 'https://www.breakthroughcollaborative.org/wp-content/uploads/400x400.png',
                previewText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident totam nam ex dolores. Tenetur amet autem nostrum, molestias adipisci soluta ipsum consectetur. Necessitatibus porro odio quidem quaerat error nostrum! Quidem! Veritatis a placeat incidunt ipsum laudantium eveniet et architecto fuga, hic repellendus fugit temporibus, voluptas at cupiditate dolor sapiente in, id maiores sunt molestiae doloremque dolorem nostrum minus debitis! Amet. Quis repudiandae cumque illum aut veritatis optio accusamus expedita officia ipsum nam ducimus magni vel fugiat ratione, quas dicta deserunt ad reiciendis obcaecati tempora consectetur magnam natus exercitationem iusto? Maiores.'
            }
        }
    },
    head() {
        return {
            title: this.loadedPost.title
        }
    }
}
</script>