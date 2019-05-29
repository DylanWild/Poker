let cards = []
let repeatedLetters = []
let firstLetterArray = []
const deck = {

    ace: "A Ace",
    king: 'B King',
    queen: "C Queen",
    jack: "D Jack",
    ten: "E Ten",
    nine: "F Nine",
    eight: "G Eight",
    seven: "H Seven",
    six: "I Six",
    five: "J Five",
    four: "K Four",
    three: "L Three",
    two: "M Two",
    hearts: "of Hearts",
    diamonds: "of Diamonds",
    spades: "of Spades",
    clubs: "of Clubs",


    getCard() {
        return `${deck.randomValueCard()} ${deck.randomSuit()}`
    },

    randomSuit() {
        var keys = Object.keys(deck)
        return deck[keys[Math.floor(Math.random() * 4) + 13]];

        //13 14 15 16
    },

    randomValueCard() {
        var keys = Object.keys(deck)
        return deck[keys[Math.floor(Math.random() * 4) + 0]];
    },
   
    selectFiveCards() {
        i = 0
        while (i < 5) {
            let checkCards = deck.getCard()
            if (cards.includes(checkCards) == false) {
                cards.push(checkCards)
                i++
            } else {
                cards.pop()
                i--
            }
        }
      
        deck.sortCards()
console.log(cards)
     
       deck.checkWin()
    },

    sortCards() {
        cards.sort()
        
    },

    checkWin() {
        if (deck.flushCheck() == true)
         { console.log("Its a flsuh but which fluhs")
            deck.whichFlush()
        } else if (deck.flushCheck() == false) {
            deck.twoOfAKind()
        } else if (deck.ofAKind()) {

        } else {
            return "High Card"
        }
    },

    whichFlush() {
        if (royalFlushCheck()) {
            console.log("Royal Flush")
        } else if (straightFlushCheck()) {
            console.log("Straight Flush")
        } else {
            console.log("Flush")
        }
    },

    flushCheck() {
        let diamondFlush = 0
        let spadeFlush = 0
        let clubFlush = 0
        let heartFlush = 0
        for (i = 0; i < 5; i++) {
            let secondLastLetterValue = cards[i].length - 2;
            let secondLastLetter = cards[i].charAt(secondLastLetterValue)

            if (secondLastLetter == "d") {
                diamondFlush++
             
            } else if (secondLastLetter == "b") {
                clubFlush++
           
            } else if (secondLastLetter == "e") {
                spadeFlush++
             
            } else if (secondLastLetter == "t") {
                heartFlush++
            
            }
        }
        if (heartFlush == 5 || spadeFlush == 5 || diamondFlush == 5 || clubFlush == 5) {
            return true
        } else {
           
            return false
        }
    },

    royalFlushCheck() {
        let royalFlushValue = 0;
        for (i = 0; i < 5; i++) {
            let firstLetterValue = cards[i].charAt(0);
            if (firstLetterValue == 'A' || firstLetterValue == 'B' || firstLetterValue == 'C' || firstLetterValue == 'D' || firstLetterValue == 'E') {
                royalFlushValue++
            } else {
                return false
            }
        }
        if (royalFlushValue == 5) {
            return true
        }
    },

    straightFlushCheck() {
        let firstCardFirstLetter = cards[0].charAt(0);
        let lastCardFirstLetter = cards[4].charAt(0);
        if ((firstCardFirstLetter == 'B' && lastCardFirstLetter == 'F') ||
            (firstCardFirstLetter == 'C' && lastCardFirstLetter == 'G') ||
            (firstCardFirstLetter == 'D' && lastCardFirstLetter == 'H') ||
            (firstCardFirstLetter == 'E' && lastCardFirstLetter == 'I') ||
            (firstCardFirstLetter == 'F' && lastCardFirstLetter == 'J') ||
            (firstCardFirstLetter == 'G' && lastCardFirstLetter == 'K') ||
            (firstCardFirstLetter == 'H' && lastCardFirstLetter == 'L') ||
            (firstCardFirstLetter == 'I' && lastCardFirstLetter == 'M')) {
            return true

        } else {
            return false
        }
    },

    twoOfAKind() {
        
       
        let sameValueCards = 0
        let indexTwo = 0


        for (i = 0; i < 5; i++) {
            firstLetterArray.push(cards[i].charAt(0))
        }
      //  console.log(firstLetterArray)

        while (indexTwo < 5) {
            firstLetterValuetwo = cards[indexTwo].charAt(0)
            if (repeatedLetters.includes(firstLetterValuetwo) == true) {
                indexTwo++
                sameValueCards++
            } else {
               // console.log(firstLetterValuetwo)
                repeatedLetters.push(cards[indexTwo].charAt(0))
                indexTwo++
                
            }
        }
        if (sameValueCards == 1) {
            console.log("Two of a Kind")
            return true
        } else {
            deck.ofAKind()
        }
    },

    ofAKind() {
       let indexThree = 0;
       let firstRepeatedLetter = 0;
       let secondRepeatedLetter = 0;
      let  thirdRepeatedLetter = 0;

        while (indexThree < 5) {
            if (repeatedLetters[0] == firstLetterArray[indexThree]) {
                firstRepeatedLetter++
                indexThree++
            } else if (repeatedLetters[1] == firstLetterArray[indexThree]) {
                secondRepeatedLetter++
                indexThree++
            } else if (repeatedLetters[2] == firstLetterArray[indexThree]) {
                thirdRepeatedLetter++
                indexThree++
            } else {
                indexThree++
            }
        }
        if (firstRepeatedLetter == 4 || secondRepeatedLetter == 4 || thirdRepeatedLetter == 4) {
            console.log("Four of a Kind")
            return true
        } else if ((firstRepeatedLetter == 3 || secondRepeatedLetter == 3 || thirdRepeatedLetter == 3) && repeatedLetters.length == 2) {
            console.log("Full House")
            return true
        } else if ((firstRepeatedLetter == 3 || secondRepeatedLetter == 3 || thirdRepeatedLetter == 3) && repeatedLetters.length == 3) {
            console.log("Three of a Kind")
            return true
        } else if (firstRepeatedLetter == 2 || secondRepeatedLetter == 2 || thirdRepeatedLetter == 2) {
            console.log("Two Pair")
            return true
        } else {
            // console.log("High Card")
            console.log("High Card")
        }
    }






}

deck.selectFiveCards()