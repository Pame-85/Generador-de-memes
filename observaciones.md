# Observaciones

Pame, felicitaciones por su trabajo. Estoy muy contenta recorriendo tu TP. El funcionamiento es prácticamente impecable, y se nota muchísimo la atención al detalle en el código. Todo es claro, fácil de leer y entender. Las funciones están muy bien resueltas y es evidente que hubo mucho esfuerzo en hacer código claro y comprensible. 

Como consejo para futuras entregas, te diria de no olvidar nunca el responsive y ser mas cuidadosa con la prolijidad de tu codigo. Es realmente muy importante para el lector!

## Estructura correcta de documento HTML

Cumplido, te dejé algunas notas en el archivo. 

## Respeta el diseño dado

Cumplido. 

## Respeta el funcionamiento

Cumplido. 

## Responsive funciona correctamente

No cumplido, y no puedo enfatizar lo suficiente lo importante que es esto. Nuestra web no está completa si no se puede navegar desde celulares: la inmensa mayoría de nuestros usuarios van a entrar a nuestra web desde dispositivos móviles. El responsive no es un opcional, ni un agregado: es un requisito ineludible de toda web. Esto es lo que más afecta tu nota final. 

## Buena estructura de proyecto

Cumplido. 

## Código bien indentado

No cumplido en CSS; esta realmente muy desprolijo y dificil de leer. El tabulado es muy importante. Si tenes dudas sobre eso escribime. 

Tu JS esta bien indentado pero desprolijo. Tus espacios son inconsistentes, dejas 
a veces todo pegado entre si o a veces agregas espacios de mas. Te dejé varios comentarios al respecto. 

## Comentarios que permiten mejorar la legibilidad del código

Cumplido. 

## Uso correcto de etiquetas semánticas

Cumplido a medias. Hay algunas decisiones incorrectas, como tus `article`. Sobre ese tema te dejo una lectura: https://www.smashingmagazine.com/2020/01/html5-article-section/

Ocasionalmente reemplazas los `label` por `h3`. Entiendo el por que en el sentido de estilado, pero si un texto describe un elemento de formulario, es un `label` y no un titulo. Tampoco usas la etiqueta `form` que es muy importante para accesibilidad. 

## Buenos nombres de clases

Cumplido

## Buenos nombres de funciones y variables

Cumplido

## Reutilización de estilos

Tenes muchos estilos innecesarios, muchisimos. Te comenté los que vi. Alguna tarde tomate el ejercicio de volver a tu css y ver cuales de tus estilos son innecesarios - te vas a sorprender! Noto mucho css agregado "por las dudas", tipo margin 0, width 100%, justify-content center, cosas que no se aplican o que son innecesarias, o que vienen por defecto. 

Usas la etiqueta style en HTML para estilar. Usarla viola uno de los principios básicos de programación: la separación de responsabilidades. Los estilos se dan con css, la estructura se da con html. 

## Funciones pequeñas

Cumplido, aunque se puede mejorar, y te dejé algunos comentarios al respecto

## Accesibilidad

No cumplido, hay muchas decisiones aquí que impactan muy negativamente en la accesibilidad de tu sitio. 

- Le diste "outline: none" a todos tus inputs, urls y botones. No puedo insistir lo suficiente en lo pernicioso que es esto: le quitaste a tus usuarios la posibilidad de navegar tu web por teclado. Cualquier persona que por dificultades motrices no pueda usar el mouse, no va a poder navegar tu web. No quiero ser dramática, pero es nuestro deber y responsabilidad como desarrolladoras web permitir que todos puedan usar nuestros sitios. Quitar el outline que viene por defecto es como comprar un edificio que tiene rampas para sillas de ruedas y reemplazarlas a todas por escaleras. Nunca, nunca, nunca quitamos el outline **a menos** que lo reemplacemos con una alternativa clara toda vez que un elemento está en foco. Ante la duda, mejor dejar el outline que viene por defecto. 

- Usas aria-hidden innecesariamente en tus íconos. Tus íconos no lo necesitan, ya que el lector de pantalla los ignora por defecto. 

- Usas h3 donde corresponden labels. 

## Commits con mensajes adecuados

Cumplido


# Nota final: 8
