<<<<<<< HEAD

=======
>>>>>>> bd40c8494d5523d878896ee4cc6a516674313ce0
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.Vue = require('vue');

import App from './views/App';

 const app = new Vue({
	el: '#root',
	render: h => h(App), // renderizziamo App all'avvio di Vue
});
