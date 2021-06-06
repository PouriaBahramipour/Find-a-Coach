import { createRouter, createWebHistory } from 'vue-router';

import CoacheDetails from  './pages/Coaches/CoacheDetails.vue';
import CoachesList from './pages/Coaches/CoachesList.vue';
import CoacheRegistration from './pages/Coaches/CoacheRegistration.vue';
import ContactCoache from './pages/Requests/ContactCoache.vue';
import RequestReceived from './pages/Requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/', redirect:'/coaches' },
        { path:'/coaches', component: CoachesList },
        { path:'/coaches/:id', component: CoacheDetails, 
            children:[
                { path: 'contact', component: ContactCoache }  
            ]            
        },
        { path: '/register', component: CoacheRegistration },
        { path: '/requests', component: RequestReceived },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router