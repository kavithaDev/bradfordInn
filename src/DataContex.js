import React, { Component } from 'react'
import items from './data'


const SuitesData = React.createContext();

class SuitesProvider extends Component {

    state = {
        rooms: [],
        featuredRooms: [],
        filteredRooms: [],
        loading: true,
        type: "all",
        guests: 1,
        minSize: 0, maxSize: 0,
        price: 0, maxPrice: 0,
        pets: false,
        breakfast: false
    };

    componentDidMount(){
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter( room => room.featured===true );
        // get max Price, size from data
        let maxSize = Math.max(...rooms.map( room => room.size ))
        let minSize = Math.min(...rooms.map(room => room.size ))
        let maxPrice = Math.max(...rooms.map( room => room.price ))
        this.setState({
            rooms,
            featuredRooms,
            filteredRooms: rooms,
            loading: false,
            price: maxPrice,
            maxSize,
            minSize,
            maxPrice
        });
    }
    
    formatData = (items)=>{
        let tempItems = items.map(item=>{
            const id = item.sys.id;
            const images = item.fields.images.map( image => {
                return image.fields.file.url
            });
            const room = { ...item.fields, images:images, id };
            return room;
        });
        return tempItems;
    }

    findRoom = (slug)=>{
        const temp = this.state.rooms;
        let selectedRoom = temp.find( room => room.slug === slug )
        return selectedRoom;
    }

    onFilterChange = (e) => {
        let value = (e.target.type === 'checkbox'? e.target.checked : e.target.value)
        console.log(value);
        
        this.setState({
            [e.target.name]: value
        }, this.sort)
    }

    sort = ()=> { 
        const { rooms, pets, breakfast, type, guests, price, maxPrice, minSize, maxSize } = this.state
        let filteredRooms = rooms;

        if(type !== 'all')
            filteredRooms = filteredRooms.filter(val => val.type === type )
        if(guests !== 1)
            filteredRooms = filteredRooms.filter(val => val.capacity >= guests)
        if(price !== maxPrice) 
            filteredRooms = filteredRooms.filter(val => val.price <= price)
        if(breakfast)
            filteredRooms = filteredRooms.filter(val => val.breakfast === true)
        if(pets)
            filteredRooms = filteredRooms.filter(val => val.pets === true)

        filteredRooms = filteredRooms.filter(val => (val.size <= maxSize && val.size >= minSize))

        this.setState({
            filteredRooms
        })
    }

    render() {
        return (
            <>
                <SuitesData.Provider 
                    value={{ ...this.state, findRoom:this.findRoom, onFilterChange:this.onFilterChange }}>
                        {this.props.children}
                </SuitesData.Provider>
            </>
        );
    }
}

export { SuitesData, SuitesProvider };
