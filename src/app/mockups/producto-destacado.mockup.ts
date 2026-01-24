import { ProductoDest } from '../models/producto-destacado.model';

export const PRODUCTS: ProductoDest[] = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/11035543/pexels-photo-11035543.jpeg',
    name: 'Curso Angular',
    description: 'Aprendé las bases del framework Angular y los fundamentos de TypeScript.',
    precio: 25000,
    offer: 'Oferta',
    tags: ['angular', 'typescript', 'frontend'],
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
    name: 'Curso UX/UI',
    description: 'Diseño centrado en el usuario, wireframes, prototipos y pruebas de usabilidad.',
    precio: 18000,
    offer: 'Sin stock',
    tags: ['ux', 'ui', 'diseño'],
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg',
    name: 'Curso JavaScript Avanzado',
    description: 'Domina closures, promesas, async/await y patrones modernos de JavaScript.',
    precio: 22000,
    offer: 'Oferta',
    tags: ['javascript', 'programación', 'web'],
  },
  {
    id: 4,
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    name: 'Curso HTML & CSS',
    description: 'Maquetación moderna, Flexbox, Grid y buenas prácticas para la web.',
    precio: 15000,
    offer: 'Oferta imperdible',
    tags: ['html', 'css', 'web'],
  },
  {
    id: 5,
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    name: 'Curso Git & GitHub',
    description: 'Control de versiones, flujos de trabajo y colaboración en equipo.',
    precio: 12000,
    offer: 'Sin stock',
    tags: ['git', 'github', 'versiones'],
  },
];
