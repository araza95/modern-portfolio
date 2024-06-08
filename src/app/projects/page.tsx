// React Imports
import Link from 'next/link';
import { FC, Fragment } from 'react';

interface IProjectPageProps {}

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description 3',
    price: 300,
  },
];
const ProjectPage: FC<IProjectPageProps> = ({}) => {
  return (
    <Fragment>
      <h1>Projects</h1>
      <Link href={'/'}>New Project</Link>
      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-blue-100 p-4 rounded-md h-screen w-[70%] m-auto overflow-y-auto
      '
      >
        {products.map((product, idx) => (
          <div
            key={product.id}
            className='border border-gray-300 p-4 my-2 bg-gray-100 rounded-md h-[400px]'
          >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ProjectPage;
