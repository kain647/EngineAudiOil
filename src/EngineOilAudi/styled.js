import styled, { keyframes } from 'styled-components';
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
	}
`;

// Анимация хода поршня вверх-вниз
const pistonMotion = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
    100% { transform: translateY(0px); }
`;

// Анимация качания шатуна (в противофазе поршню)
const rodMotion = keyframes`
    0% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-6px) rotate(4deg); }
    50% { transform: translateY(-12px) rotate(0deg); }
    75% { transform: translateY(-6px) rotate(-4deg); }
    100% { transform: translateY(0px) rotate(0deg); }
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 130px; /* Идеальный размер под h1 */
    margin: 10px auto 15px auto;
    -webkit-tap-highlight-color: transparent;

    svg {
        width: 100%;
        height: auto;
    }

    /* В обычном состоянии ДВС заглушен. При наведении или тапе — мотор заводится! */
    &:hover, &:active {
        .piston-head {
            animation: ${pistonMotion} 0.25s linear infinite;
        }
        .piston-rod {
            transform-origin: 65px 75px;
            animation: ${rodMotion} 0.25s linear infinite;
        }
    }
`;