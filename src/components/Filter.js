import React, { useContext } from 'react'
import Title from './Title'
import { SuitesData } from '../DataContex'

const Filter = ({suites}) => {
    const value = useContext(SuitesData);
    const { onFilterChange, type, guest, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = value;

    // get values for categoies option box
    let categoies = getOptionBox_values(suites, "type");
    categoies = ["all", ...categoies];
    categoies = categoies.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
    ));

    // get values for Guests option box
    let guests = getOptionBox_values(suites, "capacity");
    guests = guests.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
));

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Category</label>
                    <select
                        name="type"
                        id="type"
                        onChange={onFilterChange}
                        className="form-control"
                        value={type}>
                        {categoies}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="guests">Guests</label>
                    <select
                        name="guests"
                        id="guests"
                        onChange={onFilterChange}
                        className="form-control"
                        value={guest}>
                        {guests}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={onFilterChange}
                        className="form-control"/>
                </div>
 
                <div className="form-group">
                    <label htmlFor="price">Size </label>
                    <div className="size-inputs">
                        <input
                        type="number"
                        name="minSize"
                        value={minSize}
                        onChange={onFilterChange}
                        className="size-input"/>
                        <input
                        type="number"
                        name="maxSize"
                        value={maxSize}
                        onChange={onFilterChange}
                        className="size-input"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="breakfast"
                        id="breakfast"
                        checked={breakfast}
                        onChange={onFilterChange}/>
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="pets"
                        checked={pets}
                        onChange={onFilterChange}/>
                        <label htmlFor="breakfast">Pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}

function getOptionBox_values(array, match){
    return [ ...new Set(array.map(val => val[match])) ]
}

export default Filter

