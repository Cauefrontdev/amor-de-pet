import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LostPets from '../views/LostPets.vue';
import Adoption from '../views/Adoption.vue';
import Contacts from '../views/Contacts.vue';
import Donations from '../views/Donations.vue';

const router = createRouter({
  history: createWebHistory(), 
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lost-pets',
      name: 'lost-pets',
      component: LostPets
    },
    {
      path: '/adoption',
      name: 'adoption',
      component: Adoption
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/donations',
      name: 'donations',
      component: Donations
    }
  ]
});

export default router;
