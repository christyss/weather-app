import React from 'react';
import Cities from '../../data/cities.json';
import { useDispatch } from 'react-redux';
import { selectCityId } from '../../feature/cityId';
import './Dropdown.scss';

function Dropdown() {
    const dispatch = useDispatch();

    function handleChange(e){
        dispatch(selectCityId(e.target.value));
    }

    return (
        <select className='dropdown' onChange={handleChange}>
            <option value='0' hidden>Select City</option>
            {Cities.map((city) => {
                return <option key={city.id} value={city.id}>{city.name}</option>
            })}
        </select>
    )
}

export default Dropdown
