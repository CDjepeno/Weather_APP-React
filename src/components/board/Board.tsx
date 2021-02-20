import React from 'react'
import Weather from '../weather/Weather';


export interface BoardProps {
    weather: any;
    forecast?: any;
}
 
const Board: React.FC<BoardProps> = ({weather}) => {
    return (<>
        <Weather weather={weather} />
    </>);
}
 
export default Board;