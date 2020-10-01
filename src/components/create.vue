<template>
  <div class="create">
    <h1 class="titulo">Adcionar Livro</h1>

    <b-card bg-variant="dark" id="cardForm">
      <b-form @submit="createBook">
        <b-form-group class="label" id="imageUrlGroup" label="Imagem" :label-for="book.imageUrl">
          <b-form-input
            id="image-url"
            v-model.trim.lazy="book.imageUrl"
            type="text"
            name="imageUrl"
            required
            placeholder="Imagem"
          ></b-form-input>
        </b-form-group>

        <b-form-group
            class="label"
          id="authorGroup"
          label="Autor"
          :label-for="book.author"
          
        >
          <b-form-input
            id="author"
            v-model.trim.lazy="book.author"
            type="text"
            name="author"
            required
            placeholder="Autor"
          ></b-form-input>
        </b-form-group>

        <b-form-group
        class="label"
          id="titleGroup"
          label="Título"
          :label-for="book.title"
          
        >
          <b-form-input
            id="title"
            v-model.trim.lazy="book.title"
            type="text"
            name="title"
            required
            placeholder="Título"
          ></b-form-input>
        </b-form-group>

        <b-form-group
        class="label"
          id="selectTheme"
          label="Tema"
          :label-for="book.theme"
          
        >
          <b-form-select id="theme" v-model="book.theme" name="theme" :options="themes" required></b-form-select>
        </b-form-group>

        <b-form-group
        class="label"
          id="descriptionGroup"
          v-model.trim.lazy="book.description"
          label="Descrição"
          :label-for="book.description"
         
        >
          <b-form-textarea
            id="description"
            v-model.lazy="book.description"
            name="description"
            required
            placeholder="Descrição"
          ></b-form-textarea>
        </b-form-group>

        <b-row>
          <b-col class="text-center">
            <b-button type="submit" variant="outline-success" class="mt-4">adcionar</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import {mapActions } from "vuex";
import router from '../router'

export default {
  name: "create",
  data() {
    return {
      book: {
        imageUrl: "",
        author: "",
        title: "",        
        theme: null,
        description: "",  
      },
      themes: [
        { valor: null, text: "Selecione uma opção" },
        { value: "Romance", text: "Romance" },
        { value: "Suspense", text: "Suspense" },
        { value: "Ação", text: "Ação" },
        { value: "Ficção", text: "Ficção" },
        { value: "Outros", text: "Outros" },
        { value: "Fantasia", text: "Fantasia" },
        { value: "Comedia", text: "Comedia" },
        { value: "Aventura", text: "Aventura" },
      ],
    };
  },

   methods: {
    ...mapActions(["addBook"]),
    createBook(e) {
      e.preventDefault();
      const book = {
        imageUrl: this.book.imageUrl,
        author: this.book.author,
        title: this.book.title,
        slug: this.book.slug,
        theme: this.book.theme,
        description: this.book.description,
        createdAt: this.book.createdAt,
      }

      this.addBook(book)
      router.push({name: 'home'})
    },
  },

};
</script>

<style>
#cardForm{
    margin-left: 15%;
    margin-right: 15%;    
}
.titulo{
    margin-left: 45%;
}
.label{
    color: white;
    margin: auto;
    text-align: center;
}
</style>