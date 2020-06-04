import  styled  from 'styled-components';

export const Container = styled.section`
    width: 90vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

    @media (max-width: 768px) {
        margin-top: 90px
    }

    .interruptor{
        margin-top: 10px;

        @media (max-width: 768px) {
            margin-top: 110px;
            width: 230px;
            height: 230px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        input[type=range] {
            -webkit-appearance: none;
            /* width: 100%; */
            margin: 13.8px 0;
        }
        input[type=range]:focus {
            outline: none;
        }
        input[type=range]::-webkit-slider-runnable-track {
            /* width: 100%; */
            height: 8.4px;
        cursor: pointer;
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
            background: #222;
            border-radius: 1.3px;
            border: 0.2px solid #010101;
        }
        input[type=range]::-webkit-slider-thumb {
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
            border: 1px solid #000000;
            height: 36px;
            width: 16px;
            border-radius: 3px;
            background: #333;
        cursor: pointer;
            -webkit-appearance: none;
            margin-top: -14px;
        }
        input[type=range]:focus::-webkit-slider-runnable-track {
            background: #222;
        }
        input[type=range]::-moz-range-track {
            width: 100%;
            height: 8.4px;
        cursor: pointer;
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
            background: #222;
            border-radius: 1.3px;
            border: 0.2px solid #010101;
        }
        input[type=range]::-moz-range-thumb {
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
            border: 1px solid #000000;
            height: 36px;
            width: 16px;
            border-radius: 3px;
            background: #333;
        cursor: pointer;
        }
        input[type=range]::-ms-track {
            width: 100%;
            height: 8.4px;
        cursor: pointer;
            background: transparent;
            border-color: transparent;
            color: transparent;
        }
        input[type=range]::-ms-fill-lower {
            background: #222;
            border: 0.2px solid #010101;
            border-radius: 2.6px;
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        }
        input[type=range]::-ms-fill-upper {
            background: #222;
            border: 0.2px solid #010101;
            border-radius: 2.6px;
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        }
        input[type=range]::-ms-thumb {
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
            border: 1px solid #000000;
            height: 36px;
            width: 16px;
            border-radius: 3px;
            background: #333;
        cursor: pointer;
            height: 8.4px;
        }
        input[type=range]:focus::-ms-fill-lower {
            background: #222;
        }
        input[type=range]:focus::-ms-fill-upper {
            background: #222;
        }
    }
`;

export const Circle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 550px;
    height: 550px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow:
        inset 0 0 50px #fff,
        inset 20px 0 80px #fff,
        inset -20px 0 80px #fff,
        inset 20px 0 300px #fff,
        inset -20px 0 300px #fff,
        0 0 50px #fff,
        -10px 0 ${props => props.val + `px`} #fff,
        10px 0 ${props => props.val + `px`} #fff;

    @media (max-width: 768px) {
        width: 330px;
        height: 330px;
    }
`;

export const MiddleCircle = styled.span`
    width: 450px;
    height: 450px;
    background-color: #000;
    border: none;
    border-radius: 50%;
    display: inline-block;
    box-shadow:
      inset 0 0 20px #fff,
      inset 0 0 ${props => props.c + `px`} #fff,
      0 0 0px #fff,
      -10px 0 ${props => props.c + `px`} #fff,
      10px 0 ${props => props.c + `px`} #fff;

    @media (max-width: 768px) {
        width: 230px;
        height: 230px;
    }

`;


