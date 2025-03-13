'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Hero from '@/components/Hero';
import LogoCollection from '@/components/LogoCollection';
import Features from '@/components/Features';
import { Divider } from '@mui/material';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Highlights from '@/components/Highlights';
import Testimonials from '@/components/Testimonials';
import type{} from '@mui/material/themeCssVarsAugmentation';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}

      /*To migrate over the contents of the Marketing.tsx file, we can copy over all of its features
      , ideally in the correct order so that errors can be fixed one at a time. 
      Each time we add one of its features, we can use VSCode's built-in features to automatically 
      add the appropriate import at the top of the program. This can be done using the autocomplete
      feature as you type. */
    >  
      <Hero />
      <div>
      <LogoCollection/>
      <Features />
      <Divider />
      <Testimonials />
      <Divider />
      <Highlights />
      <Divider />
      <Pricing />
      <Divider />
      <FAQ />
      <Divider />
      <Footer />
      </div>
      </Box>
    </Container>
  );
}
