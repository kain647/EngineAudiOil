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

// 1. Анимация вращения шкивов вправо (по часовой стрелке)
const spinClockwise = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

// 2. Анимация бегущей цепи/ремня вправо (по часовой стрелке)
const beltRun = keyframes`
    from { stroke-dashoffset: 0; }
    to { stroke-dashoffset: -40; }
`;

// 3. Подача масла по каналам смазки (снизу вверх)
const oilFlow = keyframes`
    from { stroke-dashoffset: 50; }
    to { stroke-dashoffset: 0; }
`;

// 4. Колыхание уровня свежего масла в поддоне картера
const oilSplash = keyframes`
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.15); }
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 140px; /* Оптимальный размер под заголовок h1 */
    margin: 10px auto 15px auto;
    -webkit-tap-highlight-color: transparent;

    svg {
        width: 100%;
        height: auto;
    }

    /* Когда мотор "заводится" (наведение мыши или удержание пальца на экране) */
    &:hover, &:active {
        /* Все шкивы начинают синхронно вращаться в правую сторону */
        .pulley-spin, .pulley-spin-reverse {
            transform-origin: center;
            transform-box: fill-box; /* Важно для точного центрования осей в SVG */
            animation: ${spinClockwise} 2s linear infinite;
        }
        
        /* Натяжной ролик крутится в ту же сторону, но быстрее из-за меньшего диаметра */
        .pulley-spin-reverse {
            animation-duration: 0.8s; 
        }

        /* Цепь ГРМ бежит вправо вслед за шкивами */
        .belt-move {
            animation: ${beltRun} 0.4s linear infinite;
        }

        /* Каналы смазки загораются золотым цветом, имитируя давление масла */
        .oil-channel {
            stroke: #fbbf24; /* Цвет чистого свежего масла */
            opacity: 1;
            animation: ${oilFlow} 0.8s linear infinite;
        }

        /* Масло в поддоне начинает активно циркулировать */
        .oil-level {
            fill: #f59e0b;
            transform-origin: bottom center;
            transform-box: fill-box;
            animation: ${oilSplash} 0.6s ease-in-out infinite;
        }
    }
`;