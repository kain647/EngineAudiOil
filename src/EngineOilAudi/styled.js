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

// 1. Анимация вращения ВСЕХ шкивов вправо (по часовой стрелке)
const spinClockwise = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

// 2. Анимация бегущей цепи/ремня вправо (по часовой стрелке за счет отрицательного смещения)
const beltRun = keyframes`
    from { stroke-dashoffset: 0; }
    to { stroke-dashoffset: -40; } /* Минус запускает движение цепи вправо */
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 140px;
    margin: 10px auto 15px auto;
    -webkit-tap-highlight-color: transparent;

    svg {
        width: 100%;
        height: auto;
    }

    /* Магия оживления при наведении мыши или тапе */
    &:hover, &:active {
        /* Теперь ВСЕ ролики (и большие, и маленькие) крутятся только вправо */
        .pulley-spin, .pulley-spin-reverse {
            transform-origin: center;
            transform-box: fill-box; /* Гарантирует точную центровку шкивов в React */
            animation: ${spinClockwise} 2s linear infinite;
        }

        /* Натяжной ролик крутится чуть быстрее, так как он меньше диаметром */
        .pulley-spin-reverse {
            animation-duration: 0.8s;
        }

        /* Цепь бежит вправо вслед за шкивами */
        .belt-move {
            animation: ${beltRun} 0.4s linear infinite;
        }
    }
`;