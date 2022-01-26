const element=document.querySelector('video');
const video={
    element: element,
    parent: element.parentElement,
    show:function(){
        this.parent.classList.add('show');
    },
    hide:function(){
        this.parent.classList.remove('show');
    },
    play:function(){
        this.element.play();
    }
}

export default video;