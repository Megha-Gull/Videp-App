function createContentDOM( content ){
    const wrapper= document.createElement('div');
    wrapper.classList.add('content-wrapper');

    wrapper.innerHTML = `
        <div class='img-wrapper'>   
         <img src='${content.imagePath}' alt='video image'/>
         <img class='play-icon' src='./assets/icons/play.svg' alt='play'>
        </div>
        <div class='details'>
            <div class='title'> ${ content.title }</div>
            <div class = 'description'> ${ content.description }</div>    
        </div>
    `;

    return wrapper;
}

export {
    createContentDOM
}