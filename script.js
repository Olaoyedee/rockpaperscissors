const rules = document.querySelector('.rules')
const closemodal = document.querySelector('.close')
const rock = document.querySelector('.rock')
const scissors = document.querySelector('.scissors')
const paper = document.querySelector('.paper')
const modal = document.querySelector('.modal')
const stepTwo = document.querySelector('.step-two')
const cominnerCircle = document.querySelector('.cominnerCircle')
const innerCircle = document.querySelector('.innerCircle')
const userinnerCircle = document.querySelector('.userinnerCircle')
const gameContainer = document.querySelector('.game-container')
const gamedecider = document.querySelector('.gamedecider')
const comBiggestCircle = document.querySelector('.com-biggest-circle')
const biggestCircle = document.querySelector('.biggest-circle')
const comBigCircle = document.querySelector('.com-big-circle')
const comSmallCircle = document.querySelector('.com-small-circle')
const BigCircle = document.querySelector('.big-circle')
const smallCircle = document.querySelector('.small-circle')
const winLose = document.querySelector('.win_lose')
const score = document.querySelector('.score')
const continueGame = document.querySelector('.continue')

rules.addEventListener('click', openModal)
closemodal.addEventListener('click', closesModal)
scissors.addEventListener('click', openStepTwo)
paper.addEventListener('click', openStepTwo)
rock.addEventListener('click', openStepTwo)
continueGame.addEventListener('click', gameON)

function openModal(){
    modal.style.scale="1"
}
function closesModal(){
    modal.style.scale="0"
}

function openStepTwo(e){
    comBiggestCircle.classList.remove('circle-bg')
    comBigCircle.classList.remove('circle-bg')
    comSmallCircle.classList.remove('circle-bg')
    BigCircle.classList.remove('circle-bg')
    smallCircle.classList.remove('circle-bg')
    biggestCircle.classList.remove('circle-bg')
    // inner.classList.remove(userpickColor.className)
    // imageColor.classList.remove(computernnextpageColor)
   
    gameContainer.style.display='none'
    stepTwo.style.display ='block'
    let handDemonstration = e.target
    let userpickBg = handDemonstration.parentElement
    let userpickColor = userpickBg.parentElement
    console.log(userpickColor.className)
    let inner=userinnerCircle.parentElement
    console.log(inner)
    inner.classList.add(userpickColor.className)
    cominnerCircle.style.borderTop ='none'
    userinnerCircle.firstElementChild.src = handDemonstration.src
    
    console.log (handDemonstration.src)
    setTimeout(revealComputerChoice, 2500)
    function revealComputerChoice(){
        let computerOptions = [rock, paper, scissors]
        let random = Math.floor(Math.random() * computerOptions.length)
        let randomFunction=computerOptions[random].className
        let computeroption = computerOptions[random].parentElement
        console.log(computerOptions[random].src)
        computerColorchoice=computeroption.parentElement
        computernnextpageColor= computerColorchoice.className
        let imageColor= cominnerCircle.parentElement
        let imageComputerPicks=cominnerCircle.firstElementChild
        cominnerCircle.style.backgroundColor = 'whitesmoke'
        cominnerCircle.style.borderTop ='outset 5px wheat'
        imageComputerPicks.src=computerOptions[random].src
        imageColor.classList.add(computernnextpageColor)


        if(handDemonstration.className=='paper' && randomFunction =='scissors'){
            console.log('computer wins')
            gamedecider.style.display ='block'
            winLose.textContent ='YOU LOSE'
            comBiggestCircle.classList.add('circle-bg')
            comBigCircle.classList.add('circle-bg')
            comSmallCircle.classList.add('circle-bg')
            score.textContent=parseInt(score.textContent)-1
        }
       else if(handDemonstration.className=='paper' && randomFunction =='rock'){
            
            gamedecider.style.display ='block'
            winLose.textContent ='YOU WIN'
            BigCircle.classList.add('circle-bg')
            smallCircle.classList.add('circle-bg')
            biggestCircle.classList.add('circle-bg')
            score.textContent=parseInt(score.textContent)+1
        }
        else if(handDemonstration.className=='scissors' && randomFunction =='rock'){
            
            gamedecider.style.display ='block'
            winLose.textContent ='YOU LOSE'
            comBiggestCircle.classList.add('circle-bg')
            comBigCircle.classList.add('circle-bg')
            comSmallCircle.classList.add('circle-bg')
            score.textContent=parseInt(score.textContent)-1
        }
        else if(handDemonstration.className=='scissors' && randomFunction == 'paper'){
          
            gamedecider.style.display ='block'
            winLose.textContent ='YOU WIN'
            BigCircle.classList.add('circle-bg')
            smallCircle.classList.add('circle-bg')
            biggestCircle.classList.add('circle-bg')
            score.textContent=parseInt(score.textContent)+1
        }
        else if(handDemonstration.className=='rock' && randomFunction =='paper'){
            
            gamedecider.style.display ='block'
            winLose.textContent ='YOU LOSE'
            comBiggestCircle.classList.add('circle-bg')
            comBigCircle.classList.add('circle-bg')
            comSmallCircle.classList.add('circle-bg')
            score.textContent=parseInt(score.textContent)-1
        }
        else if(handDemonstration.className=='rock' && randomFunction == 'scissors'){
           
            gamedecider.style.display ='block'
            winLose.textContent ='YOU WIN'
            BigCircle.classList.add('circle-bg')
            smallCircle.classList.add('circle-bg')
            biggestCircle.classList.add('circle-bg')
            score.textContent=parseInt(score.textContent)+1
        }
        else{
            
            gamedecider.style.display ='block'
            winLose.textContent ='DRAW'
           
            comBiggestCircle.classList.add('circle-bg')
            comBigCircle.classList.add('circle-bg')
            comSmallCircle.classList.add('circle-bg')
            BigCircle.classList.add('circle-bg')
            smallCircle.classList.add('circle-bg')
            biggestCircle.classList.add('circle-bg')
            // score.textContent=parseInt(score.textContent)


        }


        
       
      
        
        


    
    
    
    }

    
   

}
function gameON(){
    location.reload()
    // if(score.textContent==0){
    //     winLose.textContent ='NO MORE LIVES'
    //     setTimeout(reload, 1000)
    //     function reload(){
    //         location.reload()
    //     }
      
    // }
    // else{
    //     stepTwo.style.display='none'
    //     gameContainer.style.display='block'
    //     inner.classList.remove(userpickColor.className)
    //     imageColor.classList.remove(computernnextpageColor)
    // }
}



