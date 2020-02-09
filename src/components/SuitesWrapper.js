import React from 'react'
import Loading from '../components/Loading'
import Filter from '../components/Filter'
import SuitesList from '../components/SuitesList'
import { SuitesData } from '../DataContex'

class SuitesWrapper extends React.Component {
    
    static contextType = SuitesData;

    render(){
        const {loading, rooms, filteredRooms } = this.context;
        return (
            <>
            { loading ? <Loading /> : <><Filter suites={rooms} /><SuitesList rooms={filteredRooms} /></> } 
            </>
        )
    }
}

export default SuitesWrapper


