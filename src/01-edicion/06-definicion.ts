//*
//*    Objetivo:
//*        Ir a la definición de la función saludar rápidamente
//*
//*    Tips:
//*        Ojear definición   ⌥ F12
//*        Ir a la definición F12
//*
//*        Ojear definición   Alt + F12
//*        Ir a la definición F12
//*

import { saludar } from './extra/funciones';

const saludo = saludar( 'Thanos' );

console.log(saludo);


/*OJEAR: Si nos paramos en la función nos aparece información
pero si se ubica el cursor en algún lado del archivo y
se da clic y seguido crtl y se ubicar el cursor de nuevo 
en la función se puede saber más información

IR: clic en cualquier parte + crtl presionado + click en 
la función (ejemplo "saludar") nos llevará al archivo. Una
vista mejor es  ALT+f12 y aparecerá en la parte inferior 
sin ir a la ubicación del archivo y para salir clic en ESC

BONUS: Para cerrar un nuevo archivo: Ctrl+W, volverlo abrir
Ctrl+Shift+T

*/
