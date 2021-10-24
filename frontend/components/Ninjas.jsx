import React, { Component } from "react";

const Ninjas = ({ ninjas }) => {
    // const ninjaList = ninjas.map(ninja => { 
    //     return (
    //         <div className="ninja" key={ninja.id}>
    //             <div>Name: { ninja.name }</div>  
    //             <div>Age: { ninja.age }</div>  
    //             <div>Belt: { ninja.belt }</div>  
    //         </div>
    //     )
    //     })
    const ninjaList = ninjas.map(ninja => {
       return ninja.age > 20 ? (
        <div className="ninja" key={ninja.id}>
            <div>Name: { ninja.name }</div>
            <div>Age: { ninja.age }</div>  
            <div>Belt: { ninja.belt }</div>  
        </div>
       ) : null; 
    });
    return (
        <div className="nina-list">
            { ninjaList }
        </div>
    )

} 

export default Ninjas;