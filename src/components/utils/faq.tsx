import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

import { sanitizeHtml } from '@/utils/sanitize-html';
import { FAQ_QUESTIONS } from '@/constants/landing-page.constants';

export default function FAQs() {
  return (
    <div className='faqs'>
      <h3 className='faqs--heading'>Frequently Asked Questions!</h3>
      <div>
        {FAQ_QUESTIONS.map(({ id, question, answer }) => (
          <FAQAccordion
            key={id}
            question={question}
            answer={answer}
          />
        ))}
      </div>
    </div>
  );
}

const FAQAccordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <Accordion
    type='single'
    collapsible
  >
    <AccordionItem value='item-1'>
      <AccordionTrigger>
        <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(question) }} />
      </AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  </Accordion>
);
