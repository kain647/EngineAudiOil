import styled  from "styled-components";

export const Footer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: column;
	color: #94a3b8;
	font-size: 0.875rem;
	margin-top: auto;
	padding: 30px 0;
	width: 100%;

	a {
		display: flex;
		color: #6366f1; /* Ссылки теперь красивого фиолетового цвета */
		text-decoration: none;
		font-weight: 600;
		transition: color 0.2s ease;

		&:hover {
			color: #4f46e5; /* Потемнение при наведении */
			text-decoration: underline;
		}
	} /* Исправлена закрывающая скобка */
`;
