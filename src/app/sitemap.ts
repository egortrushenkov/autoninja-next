import { MetadataRoute } from 'next';

async function fetchCars() {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbyIxKvBUAIufdDs9VZegCyjllZXYDXR-0mXdmNzYObPeZyDqpf59sOiXiGgz2WFJLJf/exec',
      { cache: 'force-cache', next: { revalidate: 3600 } }
    );
    const data = await response.json();
    return data['users'] || [];
  } catch (error) {
    console.error('Error fetching cars for sitemap:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cars = await fetchCars();
  const baseUrl = 'https://автонинзя.рф';

  const carRoutes = cars.map((car: { Slug: string }) => ({
    url: `${baseUrl}/catalog/${car.Slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/catalog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/online-form`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...carRoutes,
  ];
}
