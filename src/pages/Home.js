import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <StyleHome>
            <h1>Home</h1>
        </StyleHome>
    )
}

const StyleHome = styled(motion.div)`
    background: black;
    color: #fff;
`

export default Home;