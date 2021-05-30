//Modo claro / Oscuro//


const lightBtn = document.getElementById('light -theme- button'); 
const darkBtn = document. getElementById ('dark -theme- button'); 

darkBtn.addEventListener( 'click', ()  => {
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
const url = document.getElementById ('url')
const center = document.getElementById ('center-text')

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
    center.style.backgroundColor = `${e.target.value}`;
    valueOfColor.innerText = `${e.target.value}`;
});
imageOptions.addEventListener('change', (e) => {
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












//Button Download//

const resultImage = document.getElementById ('panel-img')
const buttonDownload = document.getElementById ('button-download')


buttonDownload.addEventListener('click',() => {
    console.log("soy yo")
    descargarImagen()
})

const descargarImagen = () => {
    domtoimage.toBlob(document.getElementById('resultImage'))
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
    });
}





