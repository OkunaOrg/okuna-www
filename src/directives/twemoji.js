import twemoji from 'twemoji';

export default {
    bind(element) {
        element.innerHTML = twemoji.parse(element.innerText,{
            folder: 'svg',
            ext: '.svg',
            base: '/'
        });
    }
}
