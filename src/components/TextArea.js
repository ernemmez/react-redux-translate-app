import React from 'react';
import '../scss/text-area.scss';
import TextField from '@mui/material/TextField';
import { useSelector,useDispatch } from 'react-redux';
import { setInput,setOutput } from '../redux/inputOutput/inOutSlice';
import axios from 'axios';
import Button from '@mui/material/Button';



const TextArea = () => {
    const dispatch = useDispatch();
    const input = useSelector((state) => state.inOut.input);
    const output = useSelector((state) => state.inOut.output);
    const from = useSelector((state) => state.from.from);
    const to = useSelector((state) => state.to.to);

    

    const handleInput = (e) => {
        dispatch(setInput(e.target.value));
    }
    
    const translate = () => {
        // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

        const params = new URLSearchParams();
        params.append('q', input);
        params.append('source', from);
        params.append('target', to);
        params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
        axios.post('https://libretranslate.de/translate',params, {
            headers: {
              'accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }).then(res=>{
            dispatch(setOutput(res.data.translatedText));
          }).catch(err => {
              dispatch(setOutput(err));
          });
    }


  return (
    <section className='text-areas'>
        {/* <textarea name="from" id="from" placeholder='Enter text to be translated...'></textarea>
        <textarea name="from" id="from" placeholder='Translation'></textarea> */}
            <TextField
            className='text-area'
            id="from"
            name="from"
            label="Enter text to be translated..."
            multiline
            rows={10}
            onInput={handleInput}
            />

            <TextField
            className='text-area'
            id="to"
            name="to"
            label="Translation"
            multiline
            rows={10}
            value={output}
            />
            <Button className='btn' variant="outlined" onClick={translate}>Translate</Button>
    </section>
  )
}
export default TextArea;