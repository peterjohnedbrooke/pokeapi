import React from 'react'
import axios from "axios";
import styles from "./Dashboard.module.scss";
import {useState, useEffect} from "react";

const Dashboard = () => {
const [pokemon, setPokemon] = useState("pikachu");
const [pokemonData, setPokemonData] = useState([]);
const [pokemonType, setPokemonType] = useState("")
  // const [click, setClick] = useState(false)
  // let result;
  // let finished = 0;
  // const progress = document.getElementById("progress")
  // const loading = document.getElementById("loading")
  

  useEffect(() => {
    getPokemon();
  }, [0]);


  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray)
      console.log(res) 
      return;
    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = (e) => {
      setPokemon(e.target.value.toLowerCase())
      e.preventDefault();
  }
  

  // const progressIncrease = () => {
  //   setInterval(() => {
  //     if (progress.value >= 100) {
  //       clearInterval(progressIncrease);
  //       progress.value = 1;
  //       result = "Success"
  //       loading.innerHTML = result;
  //       setClick(true)
  //     } if (progress.value < 100 && finished < 100) {
  //         result = "Loading...";
  //         loading.innerHTML = result;
  //         progress.value = 1 + finished;
  //         finished +=1 
  //     } if ( finished === 100) {
  //       clearInterval(progressIncrease);
  //       setClick(false)
  //     } 
  //   } 
  //   , 15)
  // }

  

  //if progress.value == 0 then reset
  // if progress.value == 100 {
  //   progress.innerHTML("Success")
  // }
  

  const handleSubmit = (e) => {
    // progressIncrease()
    getPokemon();
    // setClick(true)
    e.preventDefault(); 
  }

  return <>
            <div className={styles.main}> 
              {pokemonData.map((data) => {
                return (
                    <div className={styles.container}>
                      <div className={styles.logo}></div>
                      <div className={styles.searchContainer} onSubmit={handleSubmit}>
                          <label htmlFor="">
                            <input className={styles.searchBar} placeholder="enter search" type="text" onChange={handleChange} />
                          </label>
                          <button onClick={handleSubmit}>Search</button>
                          
                    </div>
                    <div className={styles.imageContainer}>
                      <img src={data.sprites["front_default"]} alt="" />
                        
                    </div>
                    <div className={styles.titleList}>
                          <ul>
                            <li>{(data.name)}</li>
                            <li>  # {(data.order)}</li>
                          </ul>  
                        </div> 
                    <div className={styles.table}>
                      <ul>
                        <li className="divTableCell">Type -  {pokemonType} </li>
                        {/* { data.types[1].type.name === null ? " " : <div>{data.types[1].type.name}</div>} */}
                        <li className="divTableCell">Height -  {Math.round(data.height * 3.9)} "</li>
                        <li className="divTableCell"> Weight - {Math.round(data.weight /4.3)} lbs</li>
                        <li className="divTableCell"> Move - {(data.moves[0].move.name)}</li>
                        <li className="divTableCell"> Ability - {(data.abilities[0].ability.name)}</li>
                      </ul>  
                    </div>
                    {/* <div className={styles.loading}>
                        <p id="loading"></p>
                        <progress id="progress" value="1" max="100"></progress>
                    </div>    */}
                  </div>
                )
              })}
            </div>
        </>;
}


export default Dashboard