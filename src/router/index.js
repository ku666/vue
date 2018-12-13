import Vue from 'vue'
import Router from 'vue-router'
import ArrFind from '@/components/ArrFind'
import StringFun from '@/components/StringFun'
import Tpl from '@/components/Template'
import Anonymous from '@/components/Anonymous'
import Tab from '@/components/Tab'
import Bind from '@/components/Bind'
import PrototypeES5 from '@/components/PrototypeES5'
import PrototypeES6 from '@/components/PrototypeES6'
import Jquery from '@/components/Jquery'
import TemplateUp from '@/components/TemplateUp'
import ForOfSetMap from '@/components/ForOfSetMap'
import Promise from '@/components/Promise'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/arrFind',
      name: 'ArrFind',
      component: ArrFind
    },
    {
      path: '/stringFun',
      name: 'StringFun',
      component: StringFun
    },
    {
      path: '/tpl',
      name: 'Tpl',
      component: Tpl
    },
    {
      path: '/anonymous',
      name: 'anonymous',
      component: Anonymous
    },
    {
      path: '/tab',
      name: 'tab',
      component: Tab
    },
    {
      path: '/bind',
      name: 'bind',
      component: Bind
    },
    {
      path: '/prototypeES5',
      name: 'prototypees5',
      component: PrototypeES5
    },
    {
      path: '/prototypeES6',
      name: 'prototypees6',
      component: PrototypeES6
    },
    {
      path: '/Jquery',
      name: 'Jquery',
      component: Jquery
    },
    {
      path: '/TemplateUp',
      name: 'TemplateUp',
      component: TemplateUp
    },
    {
      path: '/ForOfSetMap',
      name: 'ForOfSetMap',
      component: ForOfSetMap
    },
    {
      path: '/Promise',
      name: 'Promise',
      component: Promise
    },
    {
      path: '/',
      redirect: '/stringFun'
    }
  ],
  mode: "history"
})
