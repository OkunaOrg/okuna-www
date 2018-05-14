import twemoji from 'twemoji';

export default {
    bind(element) {
        element.innerHTML = twemoji.parse(element.innerHTML,{
            folder: 'svg',
            ext: '.svg'
        });
    }
}
