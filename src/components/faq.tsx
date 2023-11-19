import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/shadcn/ui/accordion';

export default function FAQs() {
	const FAQ_QUESTIONS = [
		{
			id: Math.random() * 2000 + ' faq ',
			question: 'Is <strong>ujjwal</strong> open for work or colloboration?',
			answer: "Yes, I'm open for work.",
		},
		{
			id: Math.random() * 2000 + ' faq ',
			question: 'Technology I use',
			answer:
				'Next.js, Nodejs, NestJs, Prisma, MongoDB, SCSS, Tailwind, Shadcn-ui',
		},
		{
			id: Math.random() * 2000 + ' faq ',
			question: 'Current education level?',
			answer:
				'Bachlor in Computer Science and Information Technology. (5th sem running)',
		},
	];
	return (
		<div className='faqs'>
			<h3 className='faqs--heading'>Frequently Asked Questions!</h3>
			<div>
				{FAQ_QUESTIONS.map(({ id, question, answer }) => (
					<FAQAccordion key={id} question={question} answer={answer} />
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
	<Accordion type='single' collapsible>
		<AccordionItem value='item-1'>
			<AccordionTrigger>
				<div dangerouslySetInnerHTML={{ __html: question }} />
			</AccordionTrigger>
			<AccordionContent>{answer}</AccordionContent>
		</AccordionItem>
	</Accordion>
);
