import React from 'react';

import Box from '@mui/material/Box';

import imgBlogCard from '../../../assets/imgBlog/imgBlogCard_1.svg';
import Header from '../../../components/Header';
import LeadCapture from '../../../components/LeadCapture';
import Contentcard from './components/ContentCard';
import { Container } from './style';

const HomeBlog = () => (
  <>
    <Header />
    <Container>
      <div>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: 1280,
            p: 0,
            m: 0,
          }}
        >
          <Contentcard
            title="Título"
            time="00 de Mês de 0000"
            img={imgBlogCard}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra."
            autor="Fulano de Tal"
          />
          <Contentcard
            title="Título"
            time="00 de Mês de 0000"
            img={imgBlogCard}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra."
            autor="Fulano de Tal"
          />
          <Contentcard
            title="Título"
            time="00 de Mês de 0000"
            img={imgBlogCard}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra."
            autor="Fulano de Tal"
          />
        </Box>
        <LeadCapture />
      </div>
    </Container>
  </>
);

export default HomeBlog;
