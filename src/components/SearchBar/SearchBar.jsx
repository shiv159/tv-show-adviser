import s from "./style.module.css"
import { Search as SearchIcon } from "react-bootstrap-icons";
import { useState } from "react";
export function SearchBar({OnSubmit}){
    const [value,setValue]=useState("");
    function submit(event){
            if(event.key==="Enter" && event.target.value.trim()!=="")
          {  OnSubmit(event.target.value);
            setValue("");
          }
    }
    function handleChange(event){
            setValue(event.target.value);
    }
    return(
        < >
        <SearchIcon size={25} className={s.icon}></SearchIcon>
        <input onKeyUp={submit} 
        className={s.input} 
        type="text"
        onChange={handleChange}
         value={value}
         placeholder={"Search for the TV show.."}
        ></input>
        </>
    );

} 