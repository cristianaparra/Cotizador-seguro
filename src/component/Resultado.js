import React from 'react';
import styled from '@emotion/styled'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Mensaje = styled.p`
background-color: rgb(127, 224, 237);
margin-top: 2rem;
padding: 1rem;
text-align:center;
`;

const ResultadoCotizacion = styled.div`
background-color: rgb(127, 224, 237);
margin-top: 1rem;
border: 1px solid #26c6da;
padding: 0.5rem;
text-align:center;
position: relativee;
`;

const TextoCotizacion = styled.div`
color: #00838f;
margin: 0;
padding: 1rem;
text-transform: uppercase;
font-weight: bold
`;

const Resultado = ({ cotizacion }) => {

    return (
        (cotizacion === 0)
            ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
            : (
                <ResultadoCotizacion>
                    <TransitionGroup
                        component='div'
                        className='resultado'
                    >
                        <CSSTransition
                            classNames='resultado'
                            key={cotizacion}
                            timeout={{ enter: 500, exit: 500 }}
                        >
                            <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotizacion>
            )

    );
}

export default Resultado;