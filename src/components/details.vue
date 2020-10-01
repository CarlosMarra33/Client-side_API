<template>
  <div class="details">

      <b-card
    
    :title="getBook.title"
    :sub-title="getBook.theme"
    :img-src="getBook.imageUrl"
    :img-alt="getBook.title"
    img-height="200px"
    class="card"
  >
    Autor: {{ getBook.author }}
    <b-card-text>{{ getBook.description }}</b-card-text>
    Data de postagem: {{ getBook.date }}
    {{getBook._id}}
    
    <b-card-text class="mt-2">
      <router-link class="btn-link" :to="{ name: 'home' }">
        <b-button block variant="outline-info">Voltar</b-button>
      </router-link>
    </b-card-text>
  </b-card>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "details",
    data() {
    return {
      title: this.$route.params.title
    };
  },
  computed: mapGetters(["getBook"]),
  methods: {
    ...mapActions(["getBookByTitle"]),
  },
  created() {
    this.getBookByTitle(this.title)
  }
};

</script>

<style>
.details{
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 50px;
}
</style>