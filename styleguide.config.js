module.exports = {
  webpackConfig: require('./styleguide.webpack.config.js'),
  template: 'styleguide/index.html',
  // Show or hide example code initially.
  // It can be toggled in the UI by clicking the Code button after each example.
  showCode: true,
  // Show or hide props and methods documentation initially.
  // It can be toggled in the UI by clicking the Props & methods button after each component description.
  showUsage: true,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'Installation',
      content: 'docs/installation.md',
    },
    {
      name: 'Usage',
      content: 'docs/usage.md'
    },
    {
      name: 'Full page example',
      content: 'docs/full-page-example.md'
    },
    {
      name: 'Responsiveness',
      content: 'docs/responsiveness.md'
    },
    {
      name: 'How to use *Link components',
      content: 'docs/how-to-use-link-components.md'
    },
    {
      name: 'Components by group',
      sections: [
        {
          name: 'Button',
          components: 'src/components/Button/**/*.js',
        },
        {
          name: 'ContentCanvas',
          components: 'src/components/ContentCanvas/**/*.js',
        },
        {
          name: 'Detail',
          components: 'src/components/Detail/**/*.js',
        },
        {
          name: 'Icon',
          components: 'src/components/Icon/**/*.js',
        },
        {
          name: 'Input',
          components: 'src/components/Input/**/*.js',
        },
        {
          name: 'Main',
          components: 'src/components/Main/**/*.js',
        },
        {
          name: 'Modal',
          components: 'src/components/Modal/**/*.js',
        },
        {
          name: 'Page',
          components: 'src/components/Page/**/*.js',
        },
        {
          name: 'Pagination',
          components: 'src/components/Pagination/**/*.js',
        },
        {
          name: 'SideNav',
          components: 'src/components/SideNav/**/*.js',
        },
        {
          name: 'Table',
          components: 'src/components/Table/**/*.js',
        },
        {
          name: 'Toast',
          components: 'src/components/Toast/**/*.js',
        },
        {
          name: 'Toggle',
          components: 'src/components/Toggle/**/*.js',
        },
      ]
    },
    // {
    //   name: 'All components',
    //   components: 'src/components/**/*.js'
    // },
  ]
};
