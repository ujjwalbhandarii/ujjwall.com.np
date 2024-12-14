type EmailTemplateProps = {
	name: string;
	email: string;
	message: string;
	subject: string;
};

export const EmailTemplate = ({
	email,
	message,
	name,
	subject,
}: EmailTemplateProps) => (
	<div>
		<h1>Message from {name}</h1>
		<h2>email account: {email}</h2>
		<span>subject: {subject}</span>
		<p>message: {message}</p>
	</div>
);
