import React from 'react'
import { Box } from '@mui/material';
import Body from './components/pc/indexsdsd'
import Mobile from './components/mobile'
import Layout from  '../../components/layout'
import { themedata } from '../../data/themedata';
import { frontdata } from '@/data/frontdata';

function Index() {

  return (
    <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`}}>
    <Box sx={{display:{sm:"none",xs:'none',md:'flex'}}}>   
      <Layout containerheight="auto" templaterow="0fr auto 0fr" templateareas="'nav' 'content1' 'footer'" 
      mtemplaterow="0fr auto 0fr" mtemplateareas="'nav' 'content1' 'footer'"
      Content1={<Box><Body/></Box>}/>
    </Box>
    <Box sx={{display:{xs:'flex',md:'none',sm:"flex"}}}>
      <Layout containerheight="100vh" templaterow="0fr auto 0fr" templateareas="'nav' 'content1' 'footer'" 
      mtemplaterow="0fr auto 0fr" mtemplateareas="'nav' 'content1' 'footer'"
        Content1={<Box>
          {/* <Mobile/> */}
          <Box sx={{textAlign:"center",position:"absolute",height:"auto",top:"50%",left:"50%",transform:"translate(-50%,-50%)",display:"flex",alignItems:"center",fontFamily:frontdata[0].font,fontWeight:500,fontSize:"30px"}}>Under development or work in progress...</Box>
        </Box>}/>
    </Box>
    </Box>
  )
}
export default Index