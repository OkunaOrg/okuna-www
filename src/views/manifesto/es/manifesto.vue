<template>
    <div class="animated fadeIn">
        <section class="hero is-medium has-border-bottom-gray">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column has-padding-top-2x-mobile">
                            <div class="columns is-centered">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light has-text-centered-mobile">
                                        Manifesto
                                    </h1>
                                    <h2 class="title is-size-2 manifesto-text has-text-centered-mobile">
                                        El problema, la solución.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="column manifesto-gif">
                            <div class="columns is-centered is-vcentered is-mobile">
                                <div class="column is-narrow">
                                    <svg class="book-shelf" xmlns="http://www.w3.org/2000/svg"
                                         preserveAspectRatio="xMidYMid" viewBox="0 0 84 94" height="200" width="420">
                                        <path fill="none"
                                              d="M37.612 92.805L4.487 73.71c-2.75-1.587-4.45-4.52-4.45-7.687L.008 27.877c-.003-3.154 1.676-6.063 4.405-7.634L37.558 1.167c2.73-1.57 6.096-1.566 8.835.013l33.124 19.096c2.75 1.586 4.45 4.518 4.45 7.686l.028 38.146c.002 3.154-1.677 6.063-4.406 7.634L46.445 92.818c-2.73 1.57-6.096 1.566-8.834-.013z"/>
                                        <g class="book-shelf__book book-shelf__book--one" fill-rule="evenodd">
                                            <path fill="#5199fc"
                                                  d="M31 29h4c1.105 0 2 .895 2 2v29c0 1.105-.895 2-2 2h-4c-1.105 0-2-.895-2-2V31c0-1.105.895-2 2-2z"/>
                                            <path fill="#afd7fb"
                                                  d="M34 36h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1zm-2 1h2c.552 0 1 .448 1 1s-.448 1-1 1h-2c-.552 0-1-.448-1-1s.448-1 1-1z"/>
                                        </g>
                                        <g class="book-shelf__book book-shelf__book--two" fill-rule="evenodd">
                                            <path fill="#ff9868"
                                                  d="M39 34h6c1.105 0 2 .895 2 2v24c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2V36c0-1.105.895-2 2-2z"/>
                                            <path fill="#d06061"
                                                  d="M42 38c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"/>
                                        </g>
                                        <g class="book-shelf__book book-shelf__book--three" fill-rule="evenodd">
                                            <path fill="#ff5068"
                                                  d="M49 32h2c1.105 0 2 .86 2 1.92v25.906c0 1.06-.895 1.92-2 1.92h-2c-1.105 0-2-.86-2-1.92V33.92c0-1.06.895-1.92 2-1.92z"/>
                                            <path fill="#d93368"
                                                  d="M50 35c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1s-1-.448-1-1v-2c0-.552.448-1 1-1z"/>
                                        </g>
                                        <g fill-rule="evenodd">
                                            <path class="book-shelf__shelf" fill="#ae8280"
                                                  d="M21 60h40c1.105 0 2 .895 2 2s-.895 2-2 2H21c-1.105 0-2-.895-2-2s.895-2 2-2z"/>
                                            <path fill="#855f6d"
                                                  d="M51.5 67c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5zm-21 0c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5z"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-footer">
                <div class="box is-shadowless">
                    <p class="has-text-centered">
                        <span class="tag is-rainbow">Tiempo de lectura</span> &nbsp;&nbsp; 6 minutos
                    </p>
                </div>
            </div>
        </section>
        <section class="section" id="TOC">
            <div class="small-container">
                <div class="content is-medium">
                    <div class="has-text-centered">
                        <h2 class="title is-3 is-spaced is-margin-top-small">Tabla de contenidos</h2>
                    </div>
                    <br/>
                    <ul>
                        <li>
                            <a href="#why" v-scroll-to="'#why'">
                                ¿Por qué?
                            </a>
                        </li>
                        <li>
                            <a href="#how" v-scroll-to="'#how'">
                                ¿Como?
                            </a>
                            <ul>
                                <li>
                                    <a href="#honest" v-scroll-to="'#honest'">
                                        1. Honestidad.
                                    </a>
                                </li>
                                <li>
                                    <a href="#personal" v-scroll-to="'#personal'">
                                        2. Personalización.
                                    </a>
                                </li>
                                <li>
                                    <a href="#privacyfriendly" v-scroll-to="'#privacyfriendly'">
                                        3. Privacidad y seguridad.
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#explicitconsent" v-scroll-to="'#explicitconsent'">
                                                Permiso explícito e informado
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#safeapps" v-scroll-to="'#safeapps'">
                                                Aplicaciones seguras
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#privacydefault" v-scroll-to="'#privacydefault'">
                                                Privacidad por defecto
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#easy" v-scroll-to="'#easy'">
                                        4. Fácil de migrar.
                                    </a>
                                </li>
                                <li>
                                    <a href="#fun" v-scroll-to="'#fun'">
                                        5. Diversión.
                                    </a>
                                </li>
                                <li>
                                    <a href="#revenue" v-scroll-to="'#revenue'">
                                        6. Nuestros ingresos.
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section" id="why">
            <div class="small-container">
                <div class="content is-medium">
                    <div class="has-text-centered">
                        <div>
                            <span class="icon is-large" v-twemoji>🤔</span>
                        </div>
                        <h2 class="title is-3 is-spaced is-margin-top-small">¿Por qué?</h2>
                        <h4 class="subtitle is-5">La razón por la que estamos construyendo otra red social.</h4>
                    </div>
                    <br/>
                    <p>
                        <strong>Las redes sociales son increíbles</strong>
                    </p>
                    <p>
                        Nos conectan, nos ayudan a compartir momentos especiales con nuestros seres queridos y nos proporcionan videos de gatos graciosos.
                    </p>
                    <p>
                        Lamentablemente, hoy en día las redes sociales no se enfocan mucho conectar a las personas, sino en tratar de hacer tanto dinero como sea posible de las personas, sin importar las consecuencias. Por ejemplo, la pérdida de privacidad.
                    </p>
                    <p>
                        Queremos hacer un mejor trabajo, por eso en Openbook estamos haciendo las cosas de manera diferente.
                    </p>
                    <p>
                        Openbook tendrá las cosas geniales que esperarías de una red social: chats, publicaciones, grupos y eventos.
                        Pero aparte de eso tambien será, <strong class="has-text-primary">honesta, personal, amiga de tu privacidad, segura y divertida ;-).</strong>.
                    </p>
                </div>
            </div>
        </section>
        <section class="section" id="how">
            <div class="small-container">
                <div class="content is-medium">
                    <div class="has-text-centered">
                        <div>
                            <span class="icon is-large" v-twemoji>💡</span>
                        </div>
                        <h2 class="title is-3 is-spaced is-margin-top-small">¿Como?</h2>
                        <h4 class="subtitle is-5">Como crearemos una herramienta para bien?</h4>
                    </div>
                    <h3 id="honest">1. Honestidad.</h3>
                    <p>
                        Todo el codigo de la red social esta abierto, como quien dice, es gratis para que cualquiera lo vea, modifique o reproduzca.
                        Somos completamente transparentes sobre cómo funciona la red social.
                    </p>
                    <p>

                        Además, en asociación con FoundersPledge, <strong>usaremos el 30% de nuestros ingresos para hacer del mundo un lugar mejor</strong>. Por ejemplo, apoyaremos proyectos de educación, prevención del cambio climático, salud mental y saneamiento.
                        Ya es hora de que las compañías tecnológicas beneficien a todos.
                    </p>
                    <h3 id="personal">
                        2. Personalización.
                    </h3>
                    <p>
                        ¡Todos somos diferentes y eso hace que cada uno de nosotros sea único y hermoso! ¡En Openbook, celebramos esto!</p>
                    <p>
                        ¡En Openbook no solo podrás personalizar tú perfil, sino toda la red social! Desde cambiar el color de tu página de inicio hasta agregar widgets a tu perfil, haz de la red social unica como tú.
                    </p>
                    <p>
                        Y si hay algo que crees que falta en Openbook, cuentanos. Queremos construir Openbook juntos. Crearemos un grupo especial donde esperamos nuestros usuarios nos ayuden a decidir qué construiremos a continuación o qué deberíamos mejorar. ¡Construyamos la mejor red social de todos los tiempos juntos!
                    </p>
                    <h3 id="privacyfriendly">
                        3. Privacidad y seguridad
                    </h3>
                    <p>
                        Esto es lo que nos llevó a construir Openbook. Por ello, la privacidad y seguridad de nuestros usuarios siempre estarán en el centro de todo lo que hacemos. No rastreamos nada de lo que haces, ni monetizamos tu información ni compartimos tu información sin tu permiso explícito e informado.
                    </p>
                    <p>
                        ¿Cómo se traduce esto a un escenario de la vida real?
                    </p>
                    <h5>Ejemplo</h5>
                    <p>
                        Asi es como compartir información tradicionalmente funciona:
                    </p>
                    <p>
                        Digamos que quiere conectarte a un punto de acceso de WiFi público, Tradicionalmente, una ventana como la siguiente aparece en tu computadora con lo siguiente:
                    </p>
                    <p>
                        <i>(Adelante, haz clic como lo harías normalmente)</i>
                    </p>
                    <ob-generic-data-sharing></ob-generic-data-sharing>
                    <p>
                        Felicidades! ¡Acabas de compartir tu información personal con un punto de acceso Wi-Fi!
                    </p>
                    <h5>¿Sabes qué datos acabas de compartir con la aplicación?</h5>
                    <p>
                        Si pasaste el cursor sobre el ícono "i", habras notado que dice:
                    </p>
                    <p>
                        <i>"Tu perfil público incluye nombre, foto de perfil, rango de edad, sexo, idioma, país <strong>y otra información pública.</strong>"</i>
                    </p>
                    <p>
                        ¿Qué califica como <i>"otra información pública"</i>? ¿Y por qué un punto de acceso WiFi quiere toda esta información? ¿Te servirá Wi-Fi más rápido según tu sexo o tu edad? ¿Y qué va a pasar con tus datos una vez que lo compartas?
                    </p>
                    <p>
                        Las personas comparten más información de la que son inicialmente conscientes y una vez que comparten los datos, no hay vuelta atrás.
                    </p>
                    <p>
                        Así es como lo hacemos nosotros:
                    </p>
                    <p>
                        Digamos que ahora descargó la increíble aplicación de música que todo el mundo le ha recomendado. Tan pronto como abras la aplicación, aparecerá el siguiente cuadro.
                    </p>
                    <p>
                        <i>(Adelante, haz clic como lo harías normalmente)</i>
                    </p>
                    <ob-openbook-data-sharing></ob-openbook-data-sharing>
                    <p>
                        Viste las diferencias?
                    </p>
                    <p>
                        Aquí están las más importantes.
                    </p>
                    <h5 id="explicitconsent">Permiso explícito e informado</h5>
                    <p>
                        Nos aseguramos de que siempre quede claro lo que se comparte, por lo que no hay ventanas emergentes ni descripciones vagas. También puede inspeccionar la información tu mismo.
                    </p>
                    <h5 id="safeapps">Aplicaciones seguras</h5>
                    <p>
                        Todas las aplicaciones serán revisadas por nosotros. Nos aseguraremos de que:
                    </p>
                    <ul>
                        <li>
                            solo pidan información <strong>realmente necesaria</strong>
                        </li>
                        <li>
                            tengan la ubicación <strong> exacta </strong> de sus datos disponibles <strong>
                            en todo momento </strong>
                        </li>
                        <li>
                            eliminen <strong>toda</strong> tu información si revocas el permiso
                        </li>
                        <li>
                            tengan un <strong> plan de emergencia </strong>
                            en caso de una fuga de datos y que nos notifiquen inmediatamente para poder notificarte a ti tambien y tambien ayudar a controlar los daños causados.
                        </li>
                    </ul>
                    <p>
                        Una vez que cumplan con estas estrictas pautas, tendrán una insignia debajo de su logotipo. En tu panel de control personal, podrás ver las ubicaciones exactas de tus datos compartidos, revocar el acceso de las aplicaciónes y lo mejor de todo, solicitar la eliminación de tus datos.
                    </p>
                    <h5 id="privacydefault">Privacidad por defecto</h5>
                    <p>
                        Todo el intercambio de datos opcionales estara desactivado de manera predeterminada, depende completamente de ti darle más datos de los requeridos a las aplicaciones.
                    </p>
                    <p>
                        Continuamente investigaremos y desarrollaremos nuevas formas de mejorar tu privacidad y seguridad.                    </p>
                    <p>
                        Algunos ejemplos de la tecnología que investigaremos y desarrollaremos:
                    </p>
                    <ul>
                        <li>
                            Políticas de intercambio de datos aplicadas criptográficamente
                        </li>
                        <li>
                            Cifrado de extremo a extremo, incluso en el navegador
                        </li>
                        <li>
                            Criptografía de clave pública en el navegador
                        </li>
                        <li>
                            Algoritmos y protocolos de criptografía post-cuántica
                        </li>
                    </ul>
                    <p>
                        <strong>En general, cuanto menos sepamos de ti y cuanto más sepas de nosotros, mejor.</strong>
                    </p>
                    <h3 id="easy">4. Fácil de migrar.</h3>
                    <p>
                        Probablemente haz dedicado una gran cantidad de tu tiempo a tus redes sociales existentes. Lo entendemos. No queremos que pierdas ningúna amistad, recuerdo o evento.
                    </p>
                    <p>
                        Por eso, la migración a Openbook será fácil, con nuestro sencillo sistema de arrastrar y soltar. Simplemente descargua tus datos de tu antigua red social, arrastralos a Openbook y Shazam! Bienvenido a Openbook.
                    </p>
                    <h3 id="fun">5. Diversión.</h3>
                    <p>
                        ¡No dejemos este punto fuera! Queremos devolverle el significado a las interacciones con tus amigos. Piensa en tener niveles de adoración y poder mostrar tu entusiasmo más de una sola vez por publicación.
                        Y dado que no rastreamos sus datos, no solo navegaras libre de anuncios, sino que tampoco te serviremos contenido que creemos te gustaría ver. ¡Dile adios a los algoritmos de abracadabra!
                    </p>
                    <h3 id="revenue">
                        6. Nuestros ingresos
                    </h3>
                    <p>
                        Nuestro modelo de ingresos no es ni nunca será la publicidad.
                    </p>
                    <p>
                        En vez de esto, nuestro modelo de ingresos estara basado en una moneda digital llamada <strong>Tip</strong>. Esta moneda podrá ser usada para comprar y vender bienes y servicios físicos y digitales, apoyar a los creadores de contenido, subscribirte a publicaciones y demás!
                    </p>
                    <p>
                        Puedes leer más de esto <a href="https://medium.com/openbook-org/so-how-will-openbook-make-money-daf99589643d" rel="noreferrer noopener">en este artículo (En inglés y 6 minutos de lectura aproximadamente.)</a>
                    </p>
                    <span class="is-size-7">
                        [1] Con la nueva regulación GDPR, las redes sociales deben permitir que sus usuarios descarguen su información.
                    </span>
                </div>
            </div>
        </section>
        <section class="hero is-white">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                Todavía tienes preguntas?
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="faq" class="button is-rainbow is-rounded is-medium">
                                Visita nuestras preguntas
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">

    $generic-social-media-color: #4f6398;
    $generic-social-media-color-invert: white;
    $open-book-primary-color: #690ddc;
    $open-book-primary-color-invert: white;

    .manifesto-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .manifesto-gif {
        @media(max-width: 768px) {
            margin-top: 1rem;
        }
    }

    .is-generic-social-media {
        border: none !important;
        color: $generic-social-media-color-invert !important;

        background-color: $generic-social-media-color !important;

        &:hover, &:focus {
            background-color: $generic-social-media-color !important;
            color: $generic-social-media-color-invert;
        }
    }

    .is-primary-background {
        background-color: $open-book-primary-color !important;
    }

    .is-primary-color {
        color: $open-book-primary-color !important;
    }

    .is-generic-social-media-background {
        background-color: $generic-social-media-color !important;
    }

    // Bookshelf courtesy to the amazing Ryan
    // https://codepen.io/ryanmclaughlin/pen/XJopVe
    @keyframes book-bounce {
        0% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        80% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes shelf-lift {
        0% {
            transform: translateY(0) rotate(0);
        }
        20% {
            transform: translateY(-4px) rotate(10deg);
        }
        40% {
            transform: translateY(-4px) rotate(0);
        }
        40% {
            transform: translateY(-4px) rotate(-10deg);
        }
        80% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(0);
        }
    }

    .book-shelf:hover {
        cursor: pointer;

        .book-shelf__book {
            animation: book-bounce 0.4s ease;
            animation-iteration-count: 1;
        }

        .book-shelf__book--two {
            animation-delay: 0.04s;
        }

        .book-shelf__book--three {
            animation-delay: 0.08s;
        }

        .book-shelf__shelf {
            animation: shelf-lift 0.4s ease;
            animation-iteration-count: 1;
            transform-origin: 50% 50%;
        }
    }


</style>

<script>
    import obGenericDataSharing from './components/generic-data-sharing.vue';
    import obOpenbookDataSharing from './components/openbook-data-sharing.vue';
    import memeImg from './assets/meme.jpg';

    export default {
        name: 'ob-es-manifesto',
        components: {
            obGenericDataSharing,
            obOpenbookDataSharing
        },
        data() {
            return {
                memeImg
            }
        }
    }
</script>
