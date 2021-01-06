export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff5f7f73095f008fb3aff34',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-jan-2021-studio',
                  apiId: '173b4146-abe3-4f80-a2a8-0c5651926598'
                },
                {
                  buildHookId: '5ff5f7f7163be208b34fdbbc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-jan-2021',
                  apiId: 'ace9cef9-f02b-48c1-8bb9-9feb3fa6ec7f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/runeb/sanity-nextjs-landing-pages-jan2021',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-jan-2021.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
