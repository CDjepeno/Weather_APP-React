import React from 'react'

export interface FormProps {
    handleSubmit: any
    location : string
    setLocation : any
}
 
const Form: React.FC<FormProps> = ({handleSubmit, location, setLocation}) => {
    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                className="searchbar transparent"
                id="search"
                placeholder="Entrez votre ville, pays"
                value={location}
                onChange={e => setLocation(e.target.value)}
            />
            <input type="submit" id="button" value="voir" className="button"/>
        </form>
     );
}
 
export default Form;