import {Store} from './store';

export const Target: Store = {
  currency: '$',
  labels: {
    inStock: [
      {
        container: '[data-test="preorderButton"]',
        text: ['Preorder now'],
      },
      {
        container: '[data-test="shipItButton"]',
        text: ['Ship it'],
      },
    ],
    maxPrice: {
      container: '[data-test="product-price"]',
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
<<<<<<< Updated upstream
      url: 'https://www.target.com/p/playstation-5-console/-/A-81114595',
=======
<<<<<<< Updated upstream
      url: 'https://www.target.com/p/playstation-5-console/-/A-87716467',
=======
      url: 'https://www.target.com/p/playstation-5-console/-/A-81114595',
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.target.com/p/playstation-5-digital-edition-console/-/A-81114596',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.target.com/p/xbox-series-x-console/-/A-80790841',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.target.com/p/xbox-series-s-console/-/A-80790842',
    },
  ],
  name: 'target',
};
