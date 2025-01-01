import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export const fetchProducts = async () => {
  const query = `*[_type == "product"]{
    _id,
    title,
    images[] {
      asset-> {
        _id,
        url
      },
      alt
    }
  }`;

  const products = await client.fetch(query);
  return products;
};