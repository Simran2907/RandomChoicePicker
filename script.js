const tgs = document.getElementById('tags')
const txt = document.getElementById('textarea')

txt.focus()

txt.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        },10)
        randomSelect()
    }
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim()!=='').map(tag=>tag.trim())
    tgs.innerHTML = ''
    tags.forEach(tag => {
        const tgel = document.createElement('span')
        tgel.classList.add('tag')
        tgel.innerText =tag
        tgs.appendChild(tgel)
    })
}

function randomSelect(){
    const times = 30
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag);
        setTimeout(() => {
            unhighlightTag(randomTag)
        },100)
    },100)
    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        },100)
    },times*100
    )
}
 
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}
function highlightTag(tag){
    tag.classList.add('highlight')
}
function unhighlightTag(tag){
    tag.classList.remove('highlight')
}


