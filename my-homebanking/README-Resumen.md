# Readme

Este readme se divide en dos partes `Resultado` y `Proceso`.  
El resultado basicamente muestra el resultado final del proceso de investigacion,colaboracion y trabajo.

Este readme fue construido entre ambos miembros del equipo de Front End.

Luiggy: `Resultado`  
Eze: `Proceso`

# Resultado

## Aspectos generales

- Freamework/libreria principal: React
- Libreria para manejar el estado: Redux
- Libreria de estilos: StyledComponent

## Estructura Final

Actualmente esta es la estructura que disponemos con la informacion que se nos facilito

```
src
|__ components
|   |__ common
|   |__ views
|      |__ login
|         |__ loginView.js //contiene la vista del componente
|         |__ login.js //contiene la logica
|         |__ ....
|__ router
|__ assests
|__ redux
|  |__ actions
|  |__ reducers
|  |__ types
|  |__ store
|__ hooks
|__ consts
|__ services
|__ theme

```

**common**: Contiene todos los componentes reutilizables.  
**router**: Contendrá las rutas protegidas  
**views**: Esta carpeta contendra sub carpeta por componente, los cuales contendran su lógica, vista y demas archivos  
**assests**: Destinada a guardar imagenes, logos, etc  
**redux**: Contiene todo lo relacionado a redux  
**hooks**: Para alamacenar hooks personalizados.  
**consts**: Guarda las constantes de la web  
**services**: Funcionalidades que se van a usar en distintos lugares de la web  
**theme**: Contiene todos los estilos globales (colores, encabezados, etc) de la aplicacion.

# Guia de Estilos

Nota: Esta guia de estilos aun no esta completa, faltan estilos de los botones, inputs y quizas alguna otra cosa que se use de forma global.

## index.css

Estos estilos son los unicos que de momento van puramente en css

```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap'); // importamos la letra "Inter"

*{
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  font-style: normal;
}
```

Nuestra carpeta theme tendra los archivos de estilos globales necesarios para la app

## Color

```javascript
const neutralColor = {
    neutral50 : " #fafafb"
    neutral100 :" #f4f5f8"
    neutral200 :" #E3E7EC"
    neutral300 :" #d3d8e1"
    neutral400 :" #c3c9d6"
    neutral500 :" #919db4"
    neutral600 :" #65748f"
    neutral700 :" #424c61"
    neutral800 :" #212630"
    neutral900 :" #101318"

};

const primaryColor = {
    primary50 : "#F0FFFC"
    primary100 : "#E1FFF9"
    primary200 : "#A8FAEA"
    primary300 : "#60EBD0"
    primary400 : "#19D7B1"
    primary500 : "#0FB398"
    primary600 : "#137263"
    primary700 : "#137263"
    primary800 : "#145C51"
    primary900 : "#10473E"
}

const secundaryColor = {
    secondary50 : "#FFFCF0"
    secondary100 :"#FFF6DB"
    secondary200 :"#FFE8A3"
    secondary300 :"#FFD56B"
    secondary400 :"#FFC042"
    secondary500 :"#FFA50A"
    secondary600 :"#D57901"
    secondary700 :"#A25402"
    secondary800 :"#7D3A03"
    secondary900 :"#5E2903"
}

const successColor ={
    success50 : "#F7FEE7"
    success100 :"#ECFCCB"
    success200 :"#D9F99D"
    success300 :"#BEF264"
    success400 :"#A3E635"
    success500 :"#84CC16"
    success600 :"#65A30D"
    success700 :"#4D7C0F"
    success800 :"#3F6212"
    success900 :"#365314"
}

const infoColor ={
    info50 : "#F0F9FF"
    info100 : "#E0F2FE"
    info200 : "#BAE6FD"
    info300 : "#7DD3FC"
    info400 : "#38BDF8"
    info500 : "#0EA5E9"
    info600 : "#0284C7"
    info700 : "#0369A1"
    info800 : "#075985"
    info900 : "#0C4A6E"
}

const errorColor = {
    error50 : "#FEF2F2"
    error100 : "#FEE2E2"
    error200 : "#FECACA"
    error300 : "#FCA5A5"
    error400 : "#F87171"
    error500 : "#EF4444"
    error600 : "#DC2626"
    error700 : "#B91C1C"
    error800 : "#991B1B"
    error900 : "#7F1D1D"
}

const warningColor = {
    warning50 : "#FFF7ED"
    warning100 : "#FFEDD5"
    warning200 : "#FED7AA"
    warning300 : "#FDBA74"
    warning400 : "#FB923C"
    warning500 : "#F97316"
    warning600 : "#EA580C"
    warning700 : "#C2410C"
    warning800 : "#9A3412"
    warning900 : "#7C2D12"
}

export {
    neutralColor,
    primaryColor,
    secondaryColor,
    successColor,
    infoColor,
    errorColor,
    warningColor
}
```

## Heading

Aca tendriamos todos los H1,H2, etc y sus modificaciones. Basicamente todos los que terminan en "Medium" es el componente base que contiene casi todas las propiedades y despues los "SemiBold" y "Bold" son componentes que modifican una propiedad en especifico (font-weight). Tambien incluyo el SubHeading

```javascript
const HeadingMedium1 = styled.h1`
	font-size: 48px;
	line-height: 120%;
	letter-spacing: -0.02em;
	font-weight: 600;
	color: ${neutralColor.neutral900};
`;

const HeadingSemiBold1 = styled(HeadingMedium1)`
	font-weight: bold;
`;

const HeadingBold1 = styled(HeadingMedium1)`
	font-weight: 800;
`;

// H2 y sus modificaciones

const HeadingMedium2 = styled.h2`
    font-size: 36px
    line-height: 120%;
    letter-spacing: -0.02em;
    font-weight: 600;
    color: ${neutralColor.neutral900};
`;

const HeadingSemiBold2 = styled(HeadingMedium2)`
	font-weight: bold;
`;

const HeadingBold2 = styled(HeadingMedium2)`
	font-weight: 800;
`;

// H3 y sus modificaciones

const HeadingMedium3 = styled.h3`
    font-size: 30px
    line-height: 120%;
    letter-spacing: -0.01em;
    font-weight: 600;
    color: ${neutralColor.neutral900};
`;

const HeadingSemiBold3 = styled(HeadingMedium3)`
	font-weight: bold;
`;

const HeadingBold3 = styled(HeadingMedium3)`
	font-weight: 800;
`;

// H4 y sus modificaciones

const HeadingMedium4 = styled.h4`
    font-size: 24px
    line-height: 130%;
    letter-spacing: -0.01em;
    font-weight: 600;
    color: ${neutralColor.neutral900};
`;

const HeadingSemiBold4 = styled(HeadingMedium4)`
	font-weight: bold;
`;

const HeadingBold4 = styled(HeadingMedium4)`
	font-weight: 800;
`;

// H5 y sus modificaciones

const HeadingMedium5 = styled.h5`
    font-size: 20px
    line-height: 130%;
    font-weight: 600;
    color: ${neutralColor.neutral900};
`;

const HeadingSemiBold5 = styled(HeadingMedium5)`
	font-weight: bold;
`;

const HeadingBold5 = styled(HeadingMedium5)`
	font-weight: 800;
`;

// H6 y sus modificaciones

const HeadingMedium6 = styled.h6`
    font-size: 18px
    line-height: 130%;
    font-weight: 600;
    color: ${neutralColor.neutral900};
`;

const HeadingSemiBold6 = styled(HeadingMedium6)`
	font-weight: bold;
`;

const HeadingBold6 = styled(HeadingMedium6)`
	font-weight: 800;
`;

// Subheading

const SubHeadingMedium = styled.h3`
	font-size: 20px;
	font-weight: normal;
	line-height: 28px;
	color: ${neutralColor.neutral900};
`;

const SubHeadingSemiBold = styled(SubHeadingMedium)`
	font-weight: 600;
`;

const SubHeadingUnderline = styled(SubHeadingMedium)`
	text-decoration-line: underline;
`;

export {
	HeadingMedium1,
	HeadingSemiBold1,
	HeadingBold1,
	HeadingMedium2,
	HeadingSemiBold2,
	HeadingBold2,
	HeadingMedium3,
	HeadingSemiBold3,
	HeadingBold3,
	HeadingMedium4,
	HeadingSemiBold4,
	HeadingBold4,
	HeadingMedium5,
	HeadingSemiBold5,
	HeadingBold5,
	HeadingMedium6,
	HeadingSemiBold6,
	HeadingBold6,
	SubHeadingMedium,
	SubHeadingSemiBold,
	SubHeadingUnderline,
};
```

## Paragraph

```javascript
const ParagraphMedium1 = styled.p`
	font-size: 18px;
	line-height: 22px;
	font-weight: normal;
	color: ${neutralColor.neutral900};
`;

const ParagraphSemibold1 = styled(ParagraphMedium1)`
	font-weight: 600;
`;

const ParagraphUnderline1 = styled(ParagraphMedium1)`
	text-decoration-line: underline;
`;

const ParagraphMedium2 = styled.p`
	font-size: 16px;
	line-height: 24px;
	font-weight: normal;
	color: ${neutralColor.neutral900};
`;

const ParagraphSemibold2 = styled(ParagraphMedium2)`
	font-weight: 600;
`;

const ParagraphUnderline2 = styled(ParagraphMedium2)`
	text-decoration-line: underline;
`;

const ParagraphMedium3 = styled.p`
	font-size: 14px;
	line-height: 17px;
	font-weight: normal;
	color: ${neutralColor.neutral900};
`;

const ParagraphSemibold3 = styled(ParagraphMedium3)`
	font-weight: 600;
`;
const ParagraphUnderline3 = styled(ParagraphMedium3)`
	text-decoration-line: underline;
`;

export {
	ParagraphMedium1,
	ParagraphSemibold1,
	ParagraphUnderline1,
	ParagraphMedium2,
	ParagraphSemibold2,
	ParagraphUnderline2,
	ParagraphMedium3,
	ParagraphSemibold3,
	ParagraphUnderline3,
};
```

## Shadow

```javascript
const shadownXS = `0px 4px 8px rgba(16,19,24,0.09)`;
const shadownSM = `0px 6px 16px -1px rgba(16,19,24,0.11)`;
const shadownMD = `0px 9px 20px -2px rgba(16,19,24,0.13)`;
const shadownLG = `0px 12px 37px -2px rgba(16,19,24,0.18)`;
const shadownXL = `0px 18px 56px -2px rgba(16,19,24,0.24)`;

export { shadownXS, shadownXL, shadownSM, shadownMD, shadownLG };
```

## Caption

```javascript
const CaptionMedium = styled.caption`
	font-weight: normal;
	font-size: 12px;
	line-height: 18px;
	color: ${neutralColor.neutral900};
`;

const CaptionSemiBold = styled(CaptionMedium)`
	font-weight: 600;
`;

const CaptionBold = styled(CaptionMedium)`
	font-weight: 600;
	letter-spacing: 0.08em;
	text-transform: uppercase;
`;

export { CaptionMedium, CaptionSemiBold, CaptionBold };
```

# Proceso

En el proceso se muestra la forma que se fueron obteniendo resultados.

Nota: las "semanas" son solo una medida de tiempo, sin exactitud para no complicarse con fechas.

## Semana 1

### Definimos la estructura de la carpeta.

Eze: Propuso una estructura basica.
Luggy: Sugirio agregar las distintas partes de Redux (Actions, reducers, etc)
en un carpeta que contenga todos estos.

- Hablamos sobre StyleComponent y definimos usarlo. Tambien definimos usar redux.

Resultado de esa semana:

```
src
|_assests
|_components
   |_ Login
   |_ Ver saldo
   |_ Historial de transacciones
   |_ Nuevas transaccion
   |_ confirmar transaccion
   |_ Pagina de sesion cerrada
|_ Routes
|_ helpers
|_ Redux
    |_ actions
    |_ reducers
    |_ types
    |_ Store

```

## Semana 2

### Re-diseño de la estructura

Despues que la estructura inicial no fuera aceptada, la rediseñamos, pero ademas de eso, se definieron los siguientes temas:

- No se va a realizar una PWA, al menos no de inicio.
- Usaremos JavaScript Vainilla y no TypeScript, por una cuestion de que estamos mas acostumbrados y ademas, usar TypeScript, seria algo mas que aprender o afinar, y en lo personal (Eze) no dispongo de ese tiempo.

### Estructura:

Eze: Propuso una version inicial mejorada
Luggy: Ayudo a establecer el lugar correcto donde irian algunas carpetas como `router` o `view`

```
src
|__ components
|   |__ common
|   |__ views
|      |__ login
|         |__ loginView.js //contiene la vista del componente
|         |__ login.js //contiene la logica
|         |__ ....
|__ router
|__ assests
|__ redux
|  |__ actions
|  |__ reducers
|  |__ types
|  |__ store
|__ hooks
|__ consts
|__ services

```

Tambien Agregamos las descripciones de cada carpeta:

**common**: Contiene todos los componentes reutilizables.  
**router**: Contendrá las rutas protegidas  
**views**: Esta carpeta contendra sub carpeta por componente, los cuales contendran su lógica, vista y demas archivos  
**assests**: Destinada a guardar imagenes, logos, etc  
**redux**: Contiene todo lo relacionado a redux  
**hooks**: Para alamacenar hooks personalizados.  
**consts**: Guarda las constantes de la web  
**services**: Funcionalidades que se van a usar en distintos lugares de la web

### Fuentes:

1- https://reboot.studio/blog/folder-structures-to-organize-react-project/  
2- https://latteandcode.medium.com/reactjs-la-estructura-de-carpetas-con-la-que-me-siento-mas-comodo-2a8783ad6d45  
3- https://es.survivejs.com/react/advanced-techniques/structuring-react-projects/

## Semana 3

### Agregamos una carpeta mas a la estructura.

Con el fin de almacenar los estilos globales agregamos la carpeta `theme`, quedando la estructura de la siguiente manera:

Luggy: Tuvo la idea de agregar una carpeta para contener los estilos globales y sugiria un par de nombres
Eze: Sugirio usar el nombre `theme` tal como sale en la fuente citada abajo (casi a lo ultimo)

```
src
|__ components
|   |__ common
|   |__ views
|      |__ login
|         |__ loginView.js //contiene la vista del componente
|         |__ login.js //contiene la logica
|         |__ ....
|__ router
|__ assests
|__ redux
|  |__ actions
|  |__ reducers
|  |__ types
|  |__ store
|__ hooks
|__ consts
|__ services
|__ theme

```

Descripciones de cada carpeta:

**common**: Contiene todos los componentes reutilizables.  
**router**: Contendrá las rutas protegidas  
**views**: Esta carpeta contendra sub carpeta por componente, los cuales contendran su lógica, vista y demas archivos  
**assests**: Destinada a guardar imagenes, logos, etc  
**redux**: Contiene todo lo relacionado a redux  
**hooks**: Para alamacenar hooks personalizados.  
**consts**: Guarda las constantes de la web  
**services**: Funcionalidades que se van a usar en distintos lugares de la web  
**theme**: Contiene todos los estilos globales (colores, encabezados, etc) de la aplicacion.

### Fuente

1- https://latteandcode.medium.com/reactjs-la-estructura-de-carpetas-con-la-que-me-siento-mas-comodo-2a8783ad6d45

---

### Creamos una parte de la guia de estilo, estas son las cosas que incluimos:

Eze: Presento un borrador con algunas ideas
Luggy: Le parecio correcta la estructura y tambien completo algunas propiedades faltantes

Nota1: Esta guia de estilos aun no esta completa, faltan completar algunas cosas como ciertos colores, agregar los estilos de los botones, etc.

Nota 2: Todos los estilos fueron sacados del archivo de `Figma` creado por Jhan.

- Colores
- Encabezados
- Parafos y otros tipos de textos como los caption
- Sombras
- El tipo de letra a usar
- Algunos componentes de estilos vacios para agregar futuros estilos.

Para no incluir 50 lineas de codigo, resaltere los puntos mas importantes de la guia de estilos:

### Un objeto por color

Los colores seran contenidos, cada uno, en un objeto, que a su vez tendra
como propiedades las distintos grados/variantes de estos colores.

```
const neutralColor = {

    neutral50: "#FAFAFB",
    neutral100: "#F4F5F8",
    neutral200: "#E3E7EC",
    neutral300: "#D3D8E1",
    ...
    ...
}
```

### Componente base y sobre escritura de alguna propiedad de este.

Para las cabezeras, parrafos y algunas otras cosas, usamos una caracteristicas de `StyledComponent` que permite tener un component base y despues sobre escribir alguna propiedad de este, creando un nuevo componente.

```

// Componente base
// Este componente contiene todas las propiedades base
// Se utiliza cuando queremos un texto con "font-weight:600"

const HeadingMedium1 = styled.h1`
    font-size: 48px;
    line-height: 120%;
    letter-spacing: -0.02em;
    font-weight: 600;
    color: ${neutralColor.neutral900};

`;

// Componente sobreescribido
// Contiene todas las propiedades del componente base
// Pero sobreescribe la propiedad "font-weight"

const HeadingSemiBold1 = styled(HeadingMedium1)`
    font-weight: bold;
`;

// Componente sobreescribido
// Mismo que el anterior

const HeadingBold1 = styled(HeadingMedium1)`
    font-weight: 800;
`;

///

<HeadingMedium1></HeadingMedium1>
<HeadingSemiBold1></HeadingSemiBold1>
<HeadingBold1></HeadingBold1>

```

### Fuentes

1- https://styled-components.com/docs/basics#extending-styles
EZ
xz
