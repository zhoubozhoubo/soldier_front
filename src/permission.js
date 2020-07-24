import router from './router'
import { Dialog } from 'vant'

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title || '军人e家'
  next()
})

router.afterEach(() => {})
