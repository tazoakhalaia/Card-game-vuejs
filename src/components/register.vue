<template>
  <section v-if="mainVisible">
    <div class="register">
        <input @keyup="enter" type="text" v-model="userName">
        <button @click="remove">Submit</button>
    </div>
  </section>
  <div class="card">
  <CardGame :username="userName"/>
</div>
</template>

<script>
import CardGame from '../components/cardgame.vue'

export default {
    components: {
        CardGame,
    },
    data() {
        return {
            mainVisible: true,
            userName: "",
        }
    },
    methods: {
        enter(e) {
            const key = e.key;
            if(key === "Enter"){
                this.mainVisible = false
                if(this.userName === ""){
                    this.mainVisible = true
                }
                if(this.userName.length < 3){
                this.mainVisible = true
                alert("More than 3 symbols")
            }
            }
            if(this.userName.length > 20){
                this.mainVisible = true
                alert("Less than 20 symbols")
            }
        },
        remove() {
            this.mainVisible = false
            if(this.userName === ""){
                    this.mainVisible = true
                }
                if(this.userName.length < 3){
                this.mainVisible = true
                alert("More than 3 symbols")
            }
        }
    }
  
}

</script>

<style scoped>

.register {
    position: fixed;
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(to right, purple,aqua);
    top: 0;
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    width: 25%;
    height: 30px;
    border-bottom-right-radius: 5px;
    outline: none;
    border: none;
    background-color: rgb(224, 220, 220);
    opacity: .7;
    color: rgb(38, 31, 31);
}

button {
    margin-left: 10px;
    height: 30px;
    border-bottom-right-radius: 5px;
    outline: none;
    background-color: rgb(224, 220, 220);
    border: none;
    cursor: pointer;
}




</style>