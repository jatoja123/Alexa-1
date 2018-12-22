let voices = [];
const msg = new SpeechSynthesisUtterance();
// const slow = new SpeechSynthesisUtterance();
// const eminem = new SpeechSynthesisUtterance();
const skille = [
    {
        prefix: 'kolor niebieski',
        skill: function(){
            document.body.style.backgroundColor = 'blue'
        }
    },
    {
        prefix: 'hello alexa',
        skill: function(){
            msg.text = "Witaj, podróżniku"
            console.log(msg.text)
            window.speechSynthesis.speak(msg)
        }
    },
    {
        prefix: 'aleksa jest głupia',
        skill: function(){
            msg.text = "Już nie żyjesz"
            window.speechSynthesis.speak(msg)
        }
    }
  /*{
        prefix: 'idź na całość',
        skill: function(){
            msg.text = "Venom I got that Adrenaline momentum venom Not knowing with em ever gonna slow up in em Ready to snap any moment-um Thinking its time to go get em They aint gonna know what hit em When they get bitten with the Venom I got that Adrenaline momentum venom Not knowing with em Never gonna slow up in em Ready to snap any moment-um Thinking its time to go get em They aint gonna know what hit em When they get bit with the"
            window.speechSynthesis.speak(msg)
        }
    },
    {
        prefix: 'jesteś Bogiem',
        skill: function(){
            msg.text = "Uh "
            eminem.text = "sama lamaa duma lamaa you assuming Im a human What I gotta do to get it through to you Im superhuman Innovative and Im made of rubber so that anything you saying Ricocheting off of me and itll glue to you Im never stating more than never demonstrating How to give a motherfuckin audience a feeling like its levitating Never fading and I know that the haters are forever waiting For the day that they can say I fell off theyd be celebrating Cause I know the way to get em motivated I make elevating music you make elevator music"
            window.speechSynthesis.speak(slow)
            window.speechSynthesis.speak(eminem)
        }
    }*/
];


function execute(command){
    const run = skille.find( (skill)=> command.includes(skill.prefix) );
    run.skill()
}


window.speechSynthesis.addEventListener('voiceschanged', (e)=>{
    voices = window.speechSynthesis.getVoices();
    //ustawiam jezyk mowy na polski
    msg.voice = voice[5];
})