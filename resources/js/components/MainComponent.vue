<template>
    <main  class="container mt-3">
        <ul>
            <li v-for="(post) in datiPost" :key="post.id">
                {{post.title}}
                <a href="#" @click="getDetail(post.slug)">vedi dettaglio</a>
                <span v-if="datiPost">
                    {{datiPost.slug}}
                </span>
            </li>
        </ul>
    </main>
</template>
<script>
import Axios from 'axios'

export default {
    name: 'MainComponent',
    data(){
        return{
            datiPost: [],
            detailPost: null
        } 
    },
    created(){
        Axios.get('/api/posts').then((response) =>{
            console.log(response.data)
            this.datiPost = response.data
        })
    },
    methods: {
        getDetail(slug){
            Axios.get('/api/posts/'+slug).then((response) =>{
            console.log(response.data)
            this.detailPost = response.data.slug
        })
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
