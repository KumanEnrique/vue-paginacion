<template>
  <div>
    <div class="container my-4">
      <div class="row my-4">
        <div class="col-md-4" v-for="article in displayedArticles" :key="article._id">
          <div class="card">
            <div class="card-header">
              <img v-bind:src="article.imageURL" alt="" class="img-fluid">
            </div>
            <div class="card-body">
              <h4>{{article.title}}</h4>
              <p>{{article.description}}</p>
              <h4>{{article.num}}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" 
          class="btn btn-outline-primary"
          v-if="page !=1"
          @click="page--">Before</button>
          <button type="button" class="btn btn-outline-primary" @click="page = pageNumber" v-for="pageNumber in pages.slice(page-1,page+5)" :key="pageNumber">{{pageNumber}}</button>
          <button type="button" 
          class="btn btn-outline-primary"
          v-if="page < pages.length"
          @click="page++">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      articles:[],
      baseURL:'http://localhost:3000',
      page:1,
      perPage:10,
      pages:[]
    }
  },
  created(){
    this.getArticles()
  },
  methods:{
    async getArticles(){
      const res = await this.axios.get(`${this.baseURL}/articles`)
      this.articles = res.data
      console.log(res);
    },
    paginate(articles){
      let page = this.page
      let perPage = this.perPage
      let from = (page * perPage) - perPage
      let to = (page * perPage)
      return articles.slice(from,to)
    },
    setArticles(){
      let numberOfPages = Math.ceil(this.articles.length / this.perPage)
      for(let i = 1;i <= numberOfPages;i++){
        this.pages.push(i)
      }
    }
  },
  computed:{
    displayedArticles(){
      return this.paginate(this.articles)
    }
  },
  watch:{
    articles(){
      this.setArticles()
    }
  }
}
</script>