export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5e545c18a4ffd98a2e2e28e6',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-jvwrk12w',
                  apiId: '741be62b-3a9a-44c2-a6c9-abf01f00ff26'
                },
                {
                  buildHookId: '5e545c19d404c492340b7597',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-9z63gtbx',
                  apiId: '4a7326d5-f858-47e9-9596-03eff5f4e7a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-9z63gtbx.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
