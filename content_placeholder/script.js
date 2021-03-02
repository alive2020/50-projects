const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')


const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500)

function getData() {
    header.innerHTML= ' <img src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGxhcHRvcHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quo.'
    profile_img.innerHTML = ' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'Oct 08, 2020'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))

}