<template>
<div>
  <b-container class="mt-5">
    <div>
        <h3>filtro</h3>
      <b-form-select name="theme" v-model="book.theme" :options="themes" @change="teste(book.theme)" ></b-form-select>
    </div>
       

    <b-row>      
        <b-card
          :key="book._id"
          v-for="book in allBooks"
          :title="book.title"
          :sub-title="book.theme"
          :img-src="book.imageUrl"
          :img-alt="book.title"
          img-height="200px"
          class="card"
        >            
            <b-card-text>{{book.description}}</b-card-text>   

          <b-card-text>
            adcionado em: {{ book.date }} <br>
            Autor: {{ book.author }}
          </b-card-text> 

          <router-link :to="{ name: 'details', params: { title: book.title } }">
                <b-button class="btn"  variant="outline-secondary">Detalhes</b-button>
            </router-link>         
            <router-link :to="{ name: 'edit', params: { book } }">
              <b-button class="btn" variant="outline-secondary">Editar</b-button>
            </router-link>
            <b-button class="btn" variant="outline-secondary" @click="deleteBook(book._id)">Apagar</b-button>
        </b-card>      
    </b-row>
  </b-container>
 </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
  name: "Home",
  components: {
  },
  data() {
    return {
        book:{
            theme: null
        },
        themes: [
        { valor: null, text: "selecione um filtro" },
        { value: "Todos", text: "Todos" },
        { value: "Romance", text: "Romance" },
        { value: "Suspense", text: "Suspense" },
        { value: "Ação", text: "Ação" },
        { value: "Ficção", text: "Ficção" },
        { value: "Outros", text: "Outros" },
        { value: "Fantasia", text: "Fantasia" },
        { value: "Comedia", text: "Comedia" },
        { value: "Aventura", text: "Aventura" },
      ]
    };
  },
  methods: {
    ...mapActions(["fetchBooks", "deleteBook", "filterBook"]),
    teste(d){
      console.log(d)
      this.filterBook(d)
    }
  },
  computed: mapGetters(["allBooks"]),
 
  created() {
    this.fetchBooks();    
  },
};
</script>

<style scoped>
.card{
    display: flex;
    justify-content: space-around;
    align-items: center;
     margin: 10px;
     min-width: 24rem;
     max-width: 45%;
}
.btn{
    margin: 10px;
}
</style>