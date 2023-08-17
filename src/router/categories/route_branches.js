const modules = [
  {
    path: 'muhammadqobil',
    name: 'muhammadqobil',
    component: () => import('pages/MyProject/PageBranches.vue'),
    meta: {
      icon: 'mdi-order-bool-ascending-variant',
      title: 'Filiallar',
      description: 'Filiallar',
    }
  }
]

const branches = {
  path: '/branches',
  name: 'branches',
  component: () => import('layouts/BaseLayout.vue'),
  meta: {
    title: 'Monitoring',
    description: 'Monitoring',
    icon: 'mdi-bank',
    dd: null
  },
  children: modules
}

export default branches;
