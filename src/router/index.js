import {createRouter,createWebHistory} from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Car from '../views/Car.vue'
import Dealer from '../views/Dealer.vue'
import Manu from '../views/Manu.vue'
import NotFound from '../views/NotFound.vue'


const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
        },
        {
            path:'/about',
            name:'about',
            component:About,
        },
        {
            path:'/car/:id',
            name:'car',
            component:Car,
            children:[
                {
                    path:'dealer',
                    component:Dealer
                },
                {
                    path:'manu',
                    component:Manu
                }
            ]
        },
        {
            path:'/:pathMatch(.*)*',
            name:'notFound',
            component:NotFound,
        }
    ]
})

export default router