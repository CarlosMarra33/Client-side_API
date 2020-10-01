import axios from "axios";

const state = {
    book: null,
    books: []

};

const getters = {
    allBooks: state => state.books,
    getBook: state => state.book    
};

const actions = {
    async fetchBooks({ commit }) {
        const response = await axios.get("http://localhost:3333")
        commit('setBooks', response.data)
    },
    async  filterBook({ commit }, theme) { 
        console.log(theme) 
            
        if (theme == "Todos") {
            const response = await axios.get(`http://localhost:3333`)
            commit("setBooks", response.data);
        }else{
            const response = await axios.get(`http://localhost:3333/theme?theme=${theme}`)
            commit("setBooks", response.data);
    
        }
    },
    async getBookByTitle({ commit }, title) {
        const response = await axios.get(`http://localhost:3333/${title}`)
        commit("getBookByTitle", response.data)
    },    
    async addBook({ commit }, book) {
        
        const response = await axios.post(`http://localhost:3333`, book)     
        commit('newBook', response.data)
    },
    async updateBook({ commit }, bookUpdate) {
        const response = await axios.put(`http://localhost:3333/${bookUpdate.id}`, bookUpdate)
           
        commit('updateBook', response.data)
    },
    async deleteBook({ commit }, id) {
        await axios.delete(`http://localhost:3333/${id}`)
        commit("deleteBook", id)                
           
    }
};
const mutations = {
    setBooks: (state, books) => (state.books = books), 
    getBookByTitle: (state, data) => (state.book = data),   
    newBook: (state, data) => state.books.unshift(data),
    bookUpdate: (state, book) => state.books.unshift(book),
    updateBook: (state, bookUpdate) => {
        let index = state.books.findIndex(book => book.id === bookUpdate.id);
        if (index >= 0) {
            state.books.splice(index, 1, bookUpdate);
        }
    },
    deleteBook: (state, id) => (state.books = state.books.filter(book => book._id !== id)),
    
};

export default {
    state,
    getters,
    actions,
    mutations,
};