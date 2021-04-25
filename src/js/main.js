Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    navbarMenu: [
      {
        name: 'Home',
        url: '',
      },
      {
        name: 'About Us',
        url: '',
      },
      {
        name: 'Feature',
        url: '',
      },{
        name: 'Testimonials',
        url: '',
      },{
        name: 'Contact US',
        url: '',
      },
    ],
    footerLinks: [
      {
      title: 'Menu',
      links: [
          {
          name: 'About Us',
          url: ''
          },
          {
          name: 'Theme',
          url: ''
          },
          {
          name: 'Features',
          url: ''
          },
          {
          name: 'Pricing',
          url: ''
          },
          {
          name: 'Blog',
          url: ''
          },
        ],
      },
      {
        title: 'About Us',
        links: [
          {
            name: 'About Sofbox',
            url: ''
          },
          {
            name: 'Roadmap',
            url: ''
          },
          {
            name: 'How it Work',
            url: ''
          },
          {
            name: 'Team',
            url: ''
          },
          {
            name: 'News',
            url: ''
          },
        ],
      },
      {
        title: 'Quick Links',
        links: [
          {
          name: 'About Us',
          url: ''
          },
          {
          name: 'Theme',
          url: ''
          },
          {
          name: 'Features',
          url: ''
          },
          {
          name: 'Pricing',
          url: ''
          },
          {
          name: 'Blog',
          url: ''
          },
        ],
      }
      ],
  },
});
