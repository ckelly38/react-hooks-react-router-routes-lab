import React from "react";

function MainComponent({data, type})
{
    let listkey = "";
    let namekey = "";
    if (type === "Movies")
    {
        listkey = "genres";
        namekey = "title";
    }
    else if (type === "Actors" || type === "Directors")
    {
        listkey = "movies";
        namekey = "name";
    }
    else throw new Error("invalid type! Type not handled! No way to get the list key!");
    let mycapslistkey = "";
    if (listkey === undefined || listkey === null || listkey.length < 1);
    else
    {
        mycapslistkey = listkey.charAt(0).toUpperCase();
        if (listkey.length < 2);
        else mycapslistkey += listkey.substring(1);
    }
    
    const movieobjs = data.map((dataitem) => {
    const genres = dataitem[listkey].map((genre) => <li key={genre}>{genre}</li>);
    return (
        <div key={dataitem[namekey]}>
        <h2>Name: {dataitem[namekey]}</h2>
        {(type === "Movies") ? <p>Time: {dataitem.time}</p> : null}
        <p>{mycapslistkey}:</p>
        <ul>
            {genres}
        </ul>
        </div>
    );
    });

    return (
        <div>
            <h1>{type} Page</h1>
            {movieobjs}
        </div>
    );
}

export default MainComponent;
