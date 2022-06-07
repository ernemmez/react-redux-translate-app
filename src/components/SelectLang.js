import React, {useEffect} from 'react'
import '../scss/select-lang.scss'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {HiOutlineTranslate} from 'react-icons/hi'
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { setLangs } from '../redux/langs/langsSlice';
import { setFrom } from '../redux/from/fromSlice';
import { setTo } from '../redux/to/toSlice';



const SelectLang = () => {
    const options = useSelector((state) => state.langs.langs);
    const dispatch = useDispatch();

    useEffect(() => {
        axios
          .get('https://libretranslate.de/languages', {
            headers: { accept: 'application/json' },
          })
          .then((res) => {
            dispatch(setLangs(res.data));
          });
      }, [dispatch]);
  return (
    <section className='select-lang grid-row'>
        <div className='item'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">From</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="From"
                    name='from'
                    onChange={(e) => dispatch(setFrom(e.target.value))}
                    >
                    {options.map((opt) => (
                        <MenuItem key={opt.code} value={opt.code}>
                        {opt.name}
                        </MenuItem>
                    ))}
                    
                </Select>
            </FormControl>
        </div>
        <span className='icon'>
            <HiOutlineTranslate/>
        </span>
        <div className='item'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">To</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="To"
                    name='to'
                    onChange={(e) => dispatch(setTo(e.target.value))}
                    >
                    {options.map((opt) => (
                        <MenuItem key={opt.code} value={opt.code}>
                        {opt.name}
                        </MenuItem>
                    ))}
                    
                </Select>
            </FormControl>
        </div>
    </section>
  )
}
export default SelectLang;
