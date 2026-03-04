import Breadcrumb from '../common/Breadcrumb';

export default function PageHeader({ title }) {
  return (
    <section className='bg-pearl-violet py-10 px-4 text-center relative'>
      <h1 className='text-4xl text-near-black font-semibold mb-3 capitalize'>
        {title}
      </h1>

      <Breadcrumb />
    </section>
  );
}
