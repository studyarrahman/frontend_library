import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import updateBuku from '../views/Dashboard/updateBuku.vue';
import updateKategori from '../views/Dashboard/updateKategori.vue';
import dashboardAdmin from '../views/Dashboard/dashboardAdmin.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboardAdmin,
    },
    {
      path: '/updateBuku/:kode',
      name: 'updateBuku',
      component: updateBuku,
    },
    {
      path: '/updateKategori/:kode',
      name: 'updateKategori',
      component: updateKategori,
    },
  ],
});

export default router;
