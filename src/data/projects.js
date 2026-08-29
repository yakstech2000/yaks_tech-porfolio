// Edit this file to change what shows in the Projects section.
// - `image`: path under /public (e.g. '/projects/dr-apple-cover.svg') or an
//   imported image. Leave the placeholder path until you add real photos —
//   see the README for exactly where to drop them.
// - `demoUrl` / `codeUrl`: leave as '' to hide that button on the card.
// - `featured: true` renders the project full-width with the larger layout.

const projects = [
  {
    id: 'dr-apple',
    featured: true,
    name: 'Dr Apple E-commerce Platform',
    description:
      'An independently developed e-commerce platform concept created for Dr Apple, a phone and technology retail business. The system demonstrates how a modern online store could manage products, customers, orders, and digital commerce.',
    stack: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'Railway'],
    features: [
      'Product catalogue & product details',
      'Shopping cart & wishlist',
      'Checkout & order management',
      'Customer accounts',
      'Admin dashboard',
      'Order status tracking',
      'Payment integration-ready architecture',
    ],
    image: '/projects/dr-apple-cover.svg',
    demoUrl: '',
    codeUrl: '',
  },

  // To add another project, copy the object above (without `featured: true`
  // — keep that on at most one project) and fill in your own name,
  // description, stack, features, and image. The Projects section fills
  // any remaining space up to 3 cards with an "Add a project" prompt, so
  // real projects always replace those automatically as you add them.
]

export default projects
