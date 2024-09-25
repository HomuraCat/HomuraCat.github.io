import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'
import fs from 'fs';
import path from 'path';

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',

  appearance: true,

  social: [
    { icon: 'github', link: 'https://github.com/HomuraCat' },
    { 
      icon: { 
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 168"><path d="M84 0C37.496 0 0 37.497 0 84c0 46.503 37.496 84 84 84s84-37.497 84-84c0-46.503-37.496-84-84-84zm38.842 121.353c-1.31 2.162-4.12 2.868-6.283 1.558-17.24-10.46-38.94-12.804-64.544-6.947-2.42.57-4.63-1.045-5.202-3.27-.57-2.225 1.045-4.63 3.27-5.203 27.717-6.492 52.394-3.944 72.272 7.396 2.162 1.31 2.868 4.12 1.558 6.283zm8.367-19.398c-1.617 2.482-5.06 3.29-7.54 1.675-19.745-12.832-49.955-16.568-73.222-8.987-2.798.864-5.798-.62-6.663-3.42-.865-2.798.62-5.798 3.42-6.662 26.607-8.21 60.538-4.16 82.15 10.235 2.483 1.615 3.292 5.057 1.675 7.54zm.987-19.776c-23.243-14.054-61.692-15.358-84.587-8.314-3.184.987-6.578-.793-7.564-3.976-.987-3.184.793-6.577 3.976-7.564 25.828-7.852 67.746-6.362 93.783 9.322 2.876 1.74 3.78 5.492 2.04 8.367-1.738 2.876-5.49 3.78-8.367 2.04z"/></svg>' 
      }, 
      link: 'https://open.spotify.com/user/31673gcahyoylojifxagcyn7va5m'
    },
    {
      icon: {
        svg: fs.readFileSync(path.resolve(__dirname, './public/icons/netease-cloud-music.svg'), 'utf8')
      },
      link: 'https://music.163.com/#/user/home?id=504345692'
    },
    { icon: 'bilibili', link: 'https://space.bilibili.com/282588214' },
    { icon: 'zhihu', link: 'https://www.zhihu.com/people/miao-miao-miao-51-49' },
  ],

  locales: {
    '/': {
      profile: {
        avatar: '/images/Avatar.jpg',
        name: 'HomuraCat',
        circle: true,
        layout: 'right',
      },

      navbar: zhNavbar,
      notes: zhNotes,
    },
    '/en/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'HomuraCat\'s blog',
        description: '',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,
    },
  },
})
