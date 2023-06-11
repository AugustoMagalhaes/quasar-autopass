import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import IndexPage from '../pages/IndexPage.vue';
import ProdutosPage from '../pages/Produtos.vue';
import CompraPage from '../pages/Compra.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [{ path: '', component: IndexPage }],
  },
  {
    path: '/produtos',
    component: MainLayout,
    children: [{ path: '', component: ProdutosPage }],
  },
  {
    path: '/compra/:tipoPagamento',
    name: 'compra',
    component: MainLayout,
    children: [
      {
        path: '',
        component: CompraPage,
        props: (route) => ({
          tipoPagamento: route.params.tipoPagamento,
        }),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
