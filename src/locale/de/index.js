import about from './about';
import angel from './angel';
import common from './common';
import contact from './contact';
import faq from './faq';
import home from './home';
import jobs from './jobs';
import manifesto from './manifesto';
import press from './press';
import team from './team';

export const messages = {
  de: {
    ...common,
    ...home,
    ...about,
    ...faq,
    ...team,
    ...jobs,
    ...angel,
    ...press,
    ...contact,
    ...manifesto
  }
};
