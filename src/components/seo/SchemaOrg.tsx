export function SchemaOrgProductPage({ car }: { car: any }) {
  const schema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: car.Name,
    description: `${car.Name} ${car.Year} - ${car.Engine}, ${car.Drive}. Доставка по России.`,
    image: car.Main_photo,
    brand: {
      '@type': 'Brand',
      name: car.Name.split(' ')[0],
    },
    offers: {
      '@type': 'Offer',
      url: `https://автонинзя.рф/catalog/${car.Slug}`,
      priceCurrency: 'RUB',
      price: car.Price.replace(/\D/g, ''),
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SchemaOrgBreadcrumbs({ carName, slug }: { carName: string; slug: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: 'https://автонинзя.рф',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Каталог',
        item: 'https://автонинзя.рф/catalog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: carName,
        item: `https://автонинзя.рф/catalog/${slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SchemaOrgOrganization() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AUTONINJA',
    url: 'https://автонинзя.рф',
    logo: 'https://автонинзя.рф/images/logo.webp',
    description:
      'Доставка автомобилей из Японии, Кореи и Китая по всей России за 10 дней',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'ru',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
