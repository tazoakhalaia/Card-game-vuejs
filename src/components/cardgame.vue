<template>
    <main>
     <div class="gamedesk">
         <div class="computer">
            <div class="username">
        <h1>{{username}} |</h1>
        <h3>Balance: {{balance}}</h3>
    </div>
    <div class="computerbot">
        <h1 v-if="Congrats" class="result">Congratulations You are Winner</h1>
        <h1 v-if="Push" class="result">Push</h1>
        <h1 v-if="Lose" class="result">haha You are Loser</h1>
        <div class="cardvaluesymbol">
            <div class="middle">
            <div v-if="cardOpen" class="firstcard">
            <h2>{{computerRendom}}</h2>
            <h2 
            :class="[computerRendomSymbols === cardSymbols[0] || 
            computerRendomSymbols === cardSymbols[2]  ? 
            changeColor : changecolor2]">
            {{computerRendomSymbols}}
        </h2>
        </div>
        <h1 class="computerscore" v-if="computerScoreOpen">{{computerScore}}</h1>
        <div v-if="cardOpen" class="secondcard">
            <h2>{{computerRendomSec}}</h2>
            <h2 
            :class="[computerRendomSymbols === cardSymbols[0] || 
            computerRendomSymbols === cardSymbols[2]  ? 
            changeColor : changecolor2]">
            {{computerRendomSymbolsec}}
        </h2>
        </div>
    </div>
        </div>
    </div>
</div>
<!--//////////////-->
<div class="player">
   <div class="playerdesk">
        <button class="dealnow" v-if="isClose" :disabled="dealnowDisabled" @click="click">Deal Now</button>
    <div class="placebets">
        <button :disabled="isDisabled" v-if="isClose" @click="minus" class="minus"></button>
        <button @click="plus" v-if="isClose" class="plus"></button>
    </div>
    <div v-if="isClose" class="betcoins">
        <img :src="[bet > 0 ? chip[1] : chip[0]]">
    </div>
    <h1 v-if="isClose" class="bet">{{bet}}</h1>
        <div class="cardvaluesymbol">
            <div class="middle">
            <div v-if="cardOpen" class="firstcard">
            <h2>{{rendomi}}</h2>
            <h2 
            :class="[rendomisymbols === cardSymbols[0] || 
            rendomisymbols === cardSymbols[2]  ? 
            changeColor : changecolor2]">
            {{rendomisymbols}}
        </h2>
        </div>
        <h1 class="computerscore" v-if="playerScoreOpen">{{playerScore}}</h1>
        <div v-if="cardOpen" class="secondcard">
            <h2>{{rendomiSec}}</h2>
            <h2 
            :class="[rendomisymbolSec === cardSymbols[0] || 
            rendomisymbolSec === cardSymbols[2]  ? 
            changeColor : changecolor2]">
            {{rendomisymbolSec}}
        </h2>
        </div>
    </div>
        </div>
    </div>
</div>
</div>
</main>
</template>

<script>
import Chip from '../img/chip2.png'
import Nothing from '../img/nothing.jpg'
export default {
    props: {
        username: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            Congrats: false,
            Push: false,
            Lose: false,
            isDisabled: false,
            dealnowDisabled: true,
            isClose: true,
            changeColor: "symbols2",
            changecolor2: "symbols",
            balance: 1000,
            cardOpen: false,
            cardValue: [1,2,3,4,5,6,7,8,9,10,10,10,10,10,11],
            cardSymbols: ["♠","♥","♣","♦"],
            cardIndex: 0,
            rendomi: "",
            rendomisymbols: "",
            rendomiSec: "",
            rendomisymbolSec: "",
            num: 10,
            chip: [Nothing,Chip],
            bet: 0,
            computerRendom: "",
            computerRendomSymbols: "",
            computerRendomSymbolsec: "",
            computerRendomSec: "",
            computerScore: "",
            computerScoreOpen: false,
            playerScore: "",
            playerScoreOpen: false
        }
    },
    methods: {
        click(){
            this.rendomi = this.cardValue[Math.floor(Math.random() * this.cardValue.length)]
            this.rendomisymbols = this.cardSymbols[Math.floor(Math.random() * this.cardSymbols.length)]
            this.rendomiSec = this.cardValue[Math.floor(Math.random() * this.cardValue.length)]
            this.computerRendom = this.cardValue[Math.floor(Math.random() * this.cardValue.length)]
            this.computerRendomSec = this.cardValue[Math.floor(Math.random() * this.cardValue.length)]
            this.rendomisymbolSec = this.cardSymbols[Math.floor(Math.random() * this.cardSymbols.length)]
            this.computerRendomSymbols = this.cardSymbols[Math.floor(Math.random() * this.cardSymbols.length)]
             this.computerRendomSymbolsec = this.cardSymbols[Math.floor(Math.random() * this.cardSymbols.length)]
            this.cardOpen = true
            this.isClose = false
            this.computerScore = this.computerRendom + this.computerRendomSec
            this.playerScore = this.rendomi + this.rendomiSec
            this.playerScoreOpen = true
            this.computerScoreOpen = true
            if(this.rendomi + this.rendomiSec > this.computerRendom + this.computerRendomSec){
                setTimeout(() => {
                    // alert("You are Winner")
                    this.cardOpen = false
                    this.isClose = true
                    this.bet = 0
                    this.dealnowDisabled = true
                    this.balance += 50
                    this.Congrats = true
                    this.computerScoreOpen = false
                    this.playerScoreOpen = false
                    if(this.balance > 1000){
                           this.balance = 1000
                        }
                }, 5000);
            }else if(this.rendomi + this.rendomiSec === this.computerRendom + this.computerRendomSec){
                setTimeout(() => {
                    // alert("Push")
                    this.cardOpen = false
                    this.isClose = true
                    this.bet = 0
                    this.dealnowDisabled = true
                    this.balance += this.bet
                    this.Push = true
                    this.computerScoreOpen = true
                    this.computerScoreOpen = false
                    this.playerScoreOpen = false
                    if(this.balance > 1000){
                           this.balance = 1000
                        }
                }, 5000);
            }else{
                setTimeout(() => {
                    // alert("You are Loser")
                    this.cardOpen = false
                    this.isClose = true
                    this.bet = 0
                    this.dealnowDisabled = true
                    this.Lose = true
                    this.computerScoreOpen = true
                    this.computerScoreOpen = false
                    this.playerScoreOpen = false
                     if(this.balance > 1000){
                           this.balance = 1000
                        }
                }, 5000);
            }
            console.log(this.rendomi + this.rendomiSec);
        },
        minus(){
            if(this.balance < 1000){
                this.balance++
                this.bet--
            }
            if(this.bet <= 0){
                this.dealnowDisabled = true
                this.bet = 0
            }
        },
        plus(){
            this.balance--
            this.bet++
            if(this.balance < 1000){
                this.dealnowDisabled = false
            }
            if(this.bet > 0){
                this.Congrats = false
                this.Push = false
                this.Lose = false
            }
        }
    },
}

</script>

<style scoped>
@font-face{
    font-family: "BebasNeue";
    src: url('../fonts/BebasNeue-Regular.ttf');
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.imgs {
    width: 100px;
}

main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
  
}

.result {
    margin-top: 20px;
    width: 450px;
    background: linear-gradient(to right, aqua, yellow);
    text-align: center;

}
.gamedesk {
    min-width: 100%;
    min-height: 100%;
    background: linear-gradient(to right, purple,aqua);
}
.computer {
    height: 75%;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
}

.player {
   position: relative;
   height: 25%;
}

.playerdesk {
    width: 30%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

}

.cardvaluesymbol {
    /* display: flex;   
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); */
}

.middle {
    display: flex;   
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.firstcard,
.secondcard {
    display: flex;
}

.firstcard {
    background-color: transparent;
    width: 100px;
    height: 150px;
    border-radius: 10px;
    border: 2px solid black;
    position: relative;
}

.secondcard {
    background-color: transparent;
    width: 100px;
    height: 150px;
    border-radius: 10px;
    border: 2px solid black;
    position: relative;
    margin-left: 5px;
}

.dealnow {
    position: absolute;
    top: -15%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 200px;
    cursor: pointer;
    height: 30px;
    border-radius: 5px;
}

.placebets {
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 200px;
    cursor: pointer;
    height: 30px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
}

.bet {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.betcoins {
    position: absolute;
    top: -75%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 2px solid black;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.minus {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: url('../img/minus.png');
    background-size: 25px 25px;
    background-repeat: no-repeat;
    background-position: center center;
    border: none;
    cursor: pointer;
}

.plus {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: url('../img/plus.png');
    background-size: 25px 25px;
    background-repeat: no-repeat;
    background-position: center center;
    border: none;
    cursor: pointer;
}

.betcoins img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

h2 {
    margin: auto;
    color: rgb(235, 235, 244);
}

.symbols {
    color: rgb(214, 33, 33);
    font-size: 40px;
}

.symbols2 {
    color: black;
    font-size: 40px;
}

.username h1,h3 {
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 1.5px;
}

.username h3 {
    margin-left: 30px;
}

.username {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    width: 350px;
    height: 30px;
    border: 1px solid #FFFFFF;
    border-bottom-right-radius: 5px;
    text-transform: uppercase;
    font-family: "BebasNeue";
}

.computerbot h1 {
    font-size: 20px;
}

.computerscore {
    margin-top: -40px;
    color: #FFFFFF;
    animation: changecolor 2s ;
    font-size: 20px;
}


@keyframes changecolor {
    50% {
        color: red
    }
    90% {
       color: #FFFFFF
    }
}

</style>