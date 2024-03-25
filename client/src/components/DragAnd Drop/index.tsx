import { Box, Stack } from '@mui/material'
import React from 'react'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import TypographyText from '../Typography';

interface DragProps {
    file: any
}
function DragAndDrap(props: DragProps) {
    return (
        <Stack p={0} gap={1} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'} sx={{ border: '1px dotted ' }} >
            <ImageOutlinedIcon sx={{ fontSize: '50px' }} />
            <Stack alignItems={'center'}>
                <TypographyText text1={'Drop your images here, or browse'} text2={'Jpeg, png are allowed'} />
                {/* <TypographyText text1={'Jpeg, png are allowed'} text2={""}/> */}
            </Stack>

        </Stack>
    )
}
export default DragAndDrap