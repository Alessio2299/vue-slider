
const app = new Vue({
  el: '#app',
  data: {
    items: [
      {
        url:'img/01.jpg',
        name:'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
      },
      {
        url:'img/02.jpg',
        name:'Svizzera',
        text:'Lorem ipsum'
      },
      {
        url:'img/03.jpg',
        name:'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        url:'img/04.jpg',
        name:'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
      },
      {
        url:'img/05.jpg',
        name:'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
      }
    ],
    current: 0,
    play: null
  },
  methods:{
    previous(){
      if(this.current == 0){
        this.current = this.items.length - 1;
      } else {
        this.current--
      }
    },
    next(){
      if(this.current == this.items.length - 1){
        this.current = 0
      } else {
        this.current++
      }
    },
    selectImg(indice){
      this.current = indice;
    },
    autoPlay(){
      this.play = setInterval(() => {
        console.log(this.current)
        if(this.current == this.items.length - 1){
          this.current = 0
        } else {
          this.current++
        }
      }, 3000);
    },
    stopAutoPlay(){
      clearInterval(this.play);
    }
  },
  mounted(){
    this.autoPlay()
  }
})

