
import { default as VueLayout } from './Layout';
import { default as Menu } from './Menu';

const components=[
  VueLayout,
  Menu
];


const install = function(Vue) {
  components.map(component => {
    Vue.use(component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export {
  install,
  VueLayout,
  Menu,
};

export default {
  install,
};
