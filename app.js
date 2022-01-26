import { contents } from './contents.js';
import video from './video.js';
import { createContentDOM } from './utils.js'

const Player= new shaka.Player( video.element );


async function playContent( content ){
    await Player.unload();
    console.log( content.source );
    await Player.load( content.source );
    video.show();
    video.play();
}


const contentsDiv= document.querySelector('.contents');
const closer=document.querySelector('.closer');

closer.addEventListener('click',function(){
    video.hide();
    Player.unload();
})

contents.forEach( content => {
    let contentDOM = createContentDOM( content );
    contentDOM.querySelector('.play-icon').addEventListener('click', () => playContent( content ) );
    contentsDiv.append( contentDOM );
})


