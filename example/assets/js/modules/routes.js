const steps = [
  'assets/js/modules/step01',
  'assets/js/modules/step02',
  'assets/js/modules/step03'
]


define(steps, function(Step01, Step02, Step03) {
  return [
    { path: '/mock/step01', name: 'step01', component: Step01 },
    { path: '/mock/step02', name: 'step02', component: Step02 },
    { path: '/mock/step03', name: 'step03', component: Step03 },
    { path: '/mock/step04', name: 'step04', component: Step03 },
    { path: '/mock/step05', name: 'step05', component: Step03 },
    { path: '/mock/step06', name: 'step06', component: Step03 },
    { path: '/mock/step07', name: 'step07', component: Step03 },
    { path: '/mock/step08', name: 'step08', component: Step03 },
    { path: '/mock/step09', name: 'step09', component: Step03 },
    { path: '/mock/step10', name: 'step10', component: Step03 },
    { path: '/mock/step11', name: 'step11', component: Step03 },
    { path: '/mock/step12', name: 'step12', component: Step03 },
    { path: '/mock/step13', name: 'step13', component: Step03 },
    { path: '/mock/step14', name: 'step14', component: Step03 },
    { path: '/mock/step15', name: 'step15', component: Step03 },
    { path: '/mock/step16', name: 'step16', component: Step03 },
    { path: '/mock/step17', name: 'step17', component: Step03 },
    { path: '/mock/step18', name: 'step18', component: Step03 },
    { path: '/mock/step19', name: 'step19', component: Step03 },
    { path: '/mock/step20', name: 'step20', component: Step03 },
  ]
})
