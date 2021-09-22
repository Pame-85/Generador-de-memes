//Modo claro / Oscuro//


const lightBtn = document.getElementById('light -theme- button'); 
const darkBtn = document. getElementById ('dark -theme- button'); 
// atencion a los espacios, estas dejando muchos de mas 
// darkBtn.addEventListener('click', () => {
darkBtn.addEventListener( 'click', ()  => {
    // separa con un espacio el = 
    // darkBtn.style.display = 'none';
    darkBtn.style.display='none';
    lightBtn.style.display='inline';
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    body.style.backgroundImage= 'none';
});

lightBtn.addEventListener( 'click', ()  => {
    lightBtn.style.display='none';
    darkBtn.style.display='inline';
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    body.style.backgroundImage= 'none';
}); 


//cambio de paneles//

const closeResponsive = document.getElementById ('closeResposive');
const textBtn  = document.getElementById('panel-text-button'); 
const imageBtn = document.getElementById ('panel-img-button');
const asideImage = document.getElementById('panel-img');
const asideText = document.getElementById('panel-text');

textBtn.addEventListener('click', () =>{
    asideImage.style.display = 'none';
    asideText.style.display = 'block';
    
});

imageBtn.addEventListener('click',() => {
    asideImage.style.display='block';
    asideText.style.display='none';
    
});


//Panel imagen//


// URL//
// no dejes espacio entre el metodo y los parametros
// const url = document.getElementById('url')
const url = document.getElementById ('url')
const center = document.getElementById ('center-text')

// ojo con los espacios
// url.addEventListener('keyup', (e) => {
url.addEventListener('keyup',(e)=>{
    center.style.backgroundImage= `url(${e.target.value})`
    center.style.backgroundPosition='center'
    center.style.backgroundRepeat='no-repeat'
    center.style.backgroundSize='cover'

});

const colorForImage = document.getElementById('blend-mode-color-input'); 
const valueOfColor = document.getElementById('blend-mode-color'); 
const imageOptions = document.getElementById('blend-mode-select');

colorForImage.addEventListener('input', (e) => {
    // no es necesaria la interpolacion aca
    // center.style.backgroundColor = e.target.value;
    // valueOfColor.innerText = e.target.value;
    center.style.backgroundColor = `${e.target.value}`;
    valueOfColor.innerText = `${e.target.value}`;
});
imageOptions.addEventListener('change', (e) => {
    // no esta mal esta function, pero la podrias hacer mucho mas sencilla 
    // no necesitas el if porque toda la info que necesitas esta en la variable "valor"
    // imageOptions.addEventListener('change', (e) => {
    //     const valor = e.target.value;
    //     center.style.backgroundBlendMode = valor
    // }

    const valor = e.target.value;
    if (valor === 'lighten') {
        center.style.backgroundBlendMode = 'lighten';
    } else if (valor === 'darken') {
        center.style.backgroundBlendMode = 'darken';
    } else if (valor === 'difference') {
        center.style.backgroundBlendMode = 'difference';
    } else if (valor === 'luminosity') {
        center.style.backgroundBlendMode = 'luminosity';
    } else if (valor === 'multiply') {
        center.style.backgroundBlendMode = 'multiply';
    } else {
        center.style.backgroundBlendMode = 'normal';
    }
});

// Filtros//

const brightnessFilter = document.getElementById('brightness-slider'); 
const opacityFilter = document.getElementById('opacity-slider');
const contrastFilter = document.getElementById('contrast-slider');
const blurFilter = document.getElementById('blur-slider');
const grayScaleFilter = document.getElementById('grayscale-slider');
const sepiaaFilter = document.getElementById('sepia-slider');
const hueFilter = document.getElementById('hue-slider');
const saturedFilter = document.getElementById('saturate-slider');
const negativeFilter= document.getElementById('invert-slider');
const resetButton = document.getElementById ('default-filters-button');


const filter = () => {
    // cuando el texto es muy largo, deja un salto de linea
    // asi el lector no tiene que hacer scroll horizontal 
    // center.style.filter = `
    //     brightness(${brightnessFilter.value}) opacity(${opacityFilter.value}) 
    //     contrast(${contrastFilter.value}%) blur(${blurFilter.value}px) 
    //     grayscale(${grayScaleFilter.value}%) sepia(${sepiaaFilter.value}%) 
    //     hue-rotate(${hueFilter.value}deg) saturate(${saturedFilter.value}%) 
    //     invert(${negativeFilter.value})
    //     `;
    center.style.filter = `brightness(${brightnessFilter.value}) opacity(${opacityFilter.value}) contrast(${contrastFilter.value}%) blur(${blurFilter.value}px) grayscale(${grayScaleFilter.value}%) sepia(${sepiaaFilter.value}%) hue-rotate(${hueFilter.value}deg) saturate(${saturedFilter.value}%) invert(${negativeFilter.value})`;
};

brightnessFilter.addEventListener('change', filter);

opacityFilter.addEventListener('change', filter);

contrastFilter.addEventListener('change', filter);

blurFilter.addEventListener('change', filter);

grayScaleFilter.addEventListener('change', filter);

sepiaaFilter.addEventListener('change', filter);

hueFilter.addEventListener('change', filter);

saturedFilter.addEventListener('change', filter);

negativeFilter.addEventListener('change', filter);
// Button Reset ////

resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    brightnessFilter.value = 1;
    opacityFilter.value = 1;
    contrastFilter.value = 100;
    blurFilter.value = 0;
    grayScaleFilter.value = 0;
    sepiaaFilter.value = 0;
    hueFilter.value = 0;
    saturedFilter.value = 100;
    negativeFilter.value = 0;
    filter();
});

//Panel Texto//

const memeTopText= document.getElementById('first-text'); 
const memeBottomText= document.getElementById('second-text'); 

const topTextArea = document.getElementById('top-text-input'); 
const borrarTopText = document.getElementById('no-top-text-checkbox');
const BottomtextArea= document.getElementById('bottom-text-input');
const borrarBottomText = document.getElementById('no-bottom-text-checkbox');

// Escritura //

topTextArea.addEventListener('keydown', (e) => {
    memeTopText.innerText = e.target.value;
});

BottomtextArea.addEventListener('keydown',(e) => {
    memeBottomText.innerText= e.target.value;
});

// Borrar Escritura //

borrarTopText.addEventListener('change', () => {
    // no necesitas comparar contra booleanos, es lo mismo decir:
    // if (borrarTopText.checked) {
    if (borrarTopText.checked === true) {
        memeTopText.style.display = 'none';
    } else {
        memeTopText.style.display = 'block';
    }
});

borrarBottomText.addEventListener('change', () => {
    if (borrarBottomText.checked === true) {
        memeBottomText.style.display = 'none';
    } else {
        memeBottomText.style.display = 'block';
    }
});

//Cambio de fuentes//

const fontSelection = document.getElementById ('text-font-select'); 
const fontSize = document.getElementById('text-size-input'); 

fontSelection.addEventListener('change', (e) => {
    // Mismo comentario aqui que en imageOptions.addEventListener
    // esta funcion podria ser muchisimo mas breve 
    const fontValue = e.target.value;
    if (fontValue === 'Arial') {
        memeTopText.style.fontFamily = `Arial`;
        memeBottomText.style.fontFamily = `Arial`;
    } else if (fontValue === 'Arial Black') {
        memeTopText.style.fontFamily = `Arial Black`;
        memeBottomText.style.fontFamily = `Arial Black`;
    } else if (fontValue === 'American Typewriter') {
        memeTopText.style.fontFamily = `American Typewriter`;
        memeBottomText.style.fontFamily = `American Typewriter`;
    } else if (fontValue === 'Andale Mono') {
        memeTopText.style.fontFamily = `Andale Mono`;
        memeBottomText.style.fontFamily = `Andale Mono`;
    } else if (fontValue === 'Comic Sans MS') {
        memeTopText.style.fontFamily = `Comic Sans MS`;
        memeBottomText.style.fontFamily = `Comic Sans MS`;
    } else if (fontValue === 'Helvetica') {
        memeTopText.style.fontFamily = `Helvetica`;
        memeBottomText.style.fontFamily = `Helvetica`;
    } else if (fontValue === 'Impact') {
        memeTopText.style.fontFamily = `Impact`;
        memeBottomText.style.fontFamily = `Impact`;
    } else if(fontValue=== 'Verdana'){
        memeTopText.style.fontFamily='Verdana';
        memeBottomText.style.fontFamily='Verdana';
    }
      else {
        memeTopText.style.fontFamily = `Times New Roman`;
        memeBottomText.style.fontFamily = `Times New Roman`;
    }
});

// Tamaño de Fuentes //

fontSize.addEventListener('change', (e) => {
    memeTopText.style.fontSize = `${e.target.value}px`;
    memeBottomText.style.fontSize = `${e.target.value}px`;
});

//Alineación de Fuentes //

const alignLeft= document.getElementById('text-left-align-button');
const alignCenter=document.getElementById('text-center-align-button');
const alignRight= document.getElementById('text-right-align-button');

alignLeft.addEventListener('click', () => {
    memeTopText.style.textAlign = 'left';
    memeBottomText.style.textAlign = 'left';
});

alignCenter.addEventListener('click', () => {
    memeTopText.style.textAlign='center';
    memeBottomText.style.textAlign='center';
})
alignRight.addEventListener('click', () => {
    memeTopText.style.textAlign= 'right';
    memeBottomText.style.textAlign='right';
})

// Color y Fondo//

const fontColor =document.getElementById('text-color-input'); 
const fontColorValue= document.getElementById('text-color'); 
const textBackColor =document.getElementById('text-background-color-input'); 
const backColorValue = document.getElementById('text-background-color')

fontColor.addEventListener('input', (e) => {
    memeTopText.style.color = e.target.value;
    memeBottomText.style.color = e.target.value;
    // no es necesario interpolar aqui
    fontColorValue.innerText = `${e.target.value}`;
});

textBackColor.addEventListener('input', (e) => {
    memeTopText.style.backgroundColor = e.target.value;
    memeBottomText.style.backgroundColor = e.target.value;
    // no es necesario interpolar aqui
    backColorValue.innerText = `${e.target.value}`;
});

// Fondo Transparente //

const transparentBack =document.getElementById('text-no-background-checkbox');

transparentBack.addEventListener('change', () => {
    if (transparentBack.checked) {
        memeTopText.style.backgroundColor = 'black';
        memeBottomText.style.backgroundColor = 'black';

    } else {
        memeTopText.style.backgroundColor = 'transparent';
        memeTopText.style.zIndex='2';
        memeBottomText.style.backgroundColor = 'transparent';
        memeBottomText.style.marginTop='-1px';
    }
})
//Contorno//

const noContour = document.getElementById('no-outline-button'); 
const lightContour = document.getElementById('light-outline-button'); 
const darkContour = document.getElementById ('dark-outline-button')

noContour.addEventListener('click', (e) => {
    e.preventDefault();
    memeTopText.classList.remove('light-outline-button');
    memeTopText.classList.remove('dark-outline-button');
    memeBottomText.classList.remove('light-outline-button');
    memeBottomText.classList.remove('dark-outline-button');
});

lightContour.addEventListener('click',(e)=> {
    e.preventDefault();
    memeTopText.classList.add('light-outline-button');
    memeBottomText.classList.add('light-outline-button');
    memeTopText.classList.remove('dark-outline-button');
    memeBottomText.classList.remove('dark-outline-button');
})

darkContour.addEventListener('click',(e)=> {
    e.preventDefault();
    memeTopText.classList.add('dark-outline-button');
    memeBottomText.classList.add('dark-outline-button');
    memeTopText.classList.remove('light-outline-button');
    memeBottomText.classList.remove('light-outline-button');
})

// Padding//

const fontSpacing =document.getElementById ('padding-input')

fontSpacing.addEventListener('change', (e) => {
    memeTopText.style.padding = `${e.target.value}px 15px`;
    memeBottomText.style.padding = `${e.target.value}px 15px`;
    memeBottomText.style.marginTop = '0';
});

//Interlineado//

const intFont = document.getElementById('line-height-input');
intFont.addEventListener('change', (e) => {
    // no es necesario interpolar aqui
    memeTopText.style.lineHeight = `${e.target.value}`;
    memeBottomText.style.lineHeight = `${e.target.value}`;
    memeBottomText.style.marginTop = '0';
});


//Button Download//

const download = document.getElementById ('button-download');

const resultImage = document.getElementById ('panelCanvas')



const downloadImage = () => {
    domtoimage.toBlob(panelCanvas)
        .then(function (blob) {
            saveAs(blob, 'my-meme.png');
        });
};


download.addEventListener('click', () => {
    downloadImage();
    center.style.width= '100%'
   
});






