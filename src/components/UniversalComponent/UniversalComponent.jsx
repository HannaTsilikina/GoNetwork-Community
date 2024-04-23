import React from 'react';
import '../UniversalComponent/UniversalComponent.scss';


function UniversalComponent(props) {

    return (
        <div className='title'>
            <h1>{dataType === 'company' ? 'Компании' : 'Направления'}</h1>
            <ul>
                {dataToShow.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );


}

export default UniversalComponent;