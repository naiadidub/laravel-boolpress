<template>
    <section>
        <div v-if="post">
            <h1 >{{post.title}}</h1>
            <p>{{post.content}}</p>
            <ul v-if="post.tags">
                <li v-for="tag in post.tags" :key="tag.id">{{tag.name}}</li>
            </ul>
            <img :src="`/storage/${post.image}`" alt="">

            <div v-if="(post.comments.length > 0)">
                <div v-for="(comment,index) in post.comments" :key="index">
                    {{comment.content}}
                </div>
            </div>
            <div>
                <form @submit.prevent="addComment()" action="">
                <label for="username"></label>
                <input type="text" v-model="commento.username">
                <label for="content"></label>
                <input type="text" v-model="commento.content">

                <button type="submit">invia</button>
                </form>
            </div>
        </div>

    </section>
</template>
<script>
export default {
    name: 'SinglePostComponent',
    data(){
        return{
            post: null,
            commento: {
                'username': '',
                'content': '',
                'post_id': ''
            }
        }
    },
    methods:{
        addComment(){
            axios.post('/api/comments', this.commento).then((response)=>{
                this.commento.push()
            })
        }
    },
    mounted(){
        const slug = this.$route.params.slug;
        axios.get(`/api/posts/${slug}`).then((response) => {
            this.post = response.data;
            this.commento.post_id = this.post_id 
        }).catch(()=> {
            return this.$router.push({name: 'page404'})
            }     
        )
    }
}
</script>
<style lang="scss">

</style>
