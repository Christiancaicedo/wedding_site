const home = document.getElementById('#home')



const travel = document.getElementById('#travel')


const thingsToDo = document.getElementById('#thingsToDo')


const photos = document.getElementById('#photos')


const weddingParty = document.getElementById('#weddingParty')


const registry = document.getElementById('#registry')


const rsvp = document.getElementById('#rsvp')

home.onclick = function() {
    this.scrollIntoView({ behavior: 'smooth' });
}

function scrollToStory() {
    const ourStory = document.getElementById('ourStory')
    const ourStoryScroll = document.getElementById('ourStoryScroll')

    ourStory.onclick = ()=> {
        ourStoryScroll.scrollIntoView();
    }
}