import './css/app.css';
import Quill from './js/quill';

new Quill('#editor', {
  modules: {
    toolbar: [
      [ { font: ['sans', 'serif'] }],
      [ { header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'link']
    ],
    history: {
      delay: 2000,
      maxStack: 500,
      userOnly: false
    }
  },
  theme: 'snow'
});

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') {
  module.hot.accept(); // eslint-disable-line no-undef
}



