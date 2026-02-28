import Accordion from './Accordion';
import Heading from './Heading';

export default function Faq() {
  const faqData = [
    {
      question: 'What types of furniture do you offer?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      question: 'Can I track my furniture delivery?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      question: 'What materials are used in your furniture?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      question: 'Are there any discounts or promotions available?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ];

  return (
    <section className='py-10 px-16 font-sans'>
      <Heading title='FAQs' subtitle='Question? Look Here' />

      <Accordion items={faqData} />
    </section>
  );
}
