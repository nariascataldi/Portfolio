import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProyects } from "../app/actions";
import { ParticlesContainer } from "./Particles";

export default function ProyectList() {
  const dispatch = useDispatch();
  // const [proyect, setProyect] = useState([]);
  const allProyects = useSelector((state) => state.rootReducer.proyects)
  console.log(allProyects);
  useEffect(() => {
    dispatch(getAllProyects())
  }, [dispatch])


  return (
    <>
      <ParticlesContainer id="tsparticles"/>
      <header>
        <h1>
          Hola
        </h1>
      </header>
      {allProyects?.map((proyect) => {
        return (
          <div key={proyect.id}>
            <h2>{proyect.name}</h2>
          </div>
        )
      }
      )}

    </>
  )
}