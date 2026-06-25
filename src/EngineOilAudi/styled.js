import styled, { keyframes } from 'styled-components';

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
    max-width: 140px;
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
            transform-box: fill-box;
            animation: ${spinClockwise} 2s linear infinite;
        }

        /* Натяжной ролик крутится в ту же сторону, но быстрее */
        .pulley-spin-reverse {
            animation-duration: 0.8s;
        }

        /* Цепь ГРМ бежит вправо вслед за шкивами */
        .belt-move {
            animation: ${beltRun} 0.4s linear infinite;
        }

        /* Каналы смазки загораются золотым цветом, имитируя давление масла */
        .oil-channel {
            stroke: #fbbf24;
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

export const Footer = styled.footer`
    text-align: center;
    padding: 20px;
    font-size: 14px;
    color: #64748b;
    border-top: 1px solid #e2e8f0;
    margin-top: 40px;

    a {
        color: #2563eb;
        text-decoration: none;
        margin-left: 5px;
        font-weight: 500;

        &:hover {
            text-decoration: underline;
        }
    }
`;