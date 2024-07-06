'use client'

import { IAthlete } from "@/models/Athlete";
import { ChangeEvent, FormEvent, ReactElement, useEffect, useState } from "react";

export default function RegisterPage(): ReactElement {
  const [athletes, setAthletes] = useState([]);
  const [athlete, setAthlete] = useState({
    username: "",
    name: "",
    surname: "",
    age: "",
  });

  const loadAthletes = async () => {
    const res = await fetch('/api/athletes')
    const data = await res.json()
    return data
  }

  // const loadChallenges = async () => {
  //   const res = await fetch('/api/challenges')
  //   const data = await res.json()
  //   return data
  // }
  
  useEffect(() => {
    loadAthletes()
    .then(res => setAthletes(res))
    .catch(err => console.log(err))

    // loadChallenges()
    // .then(res => setAthletes(res))
    // .catch(err => console.log(err))
  }, [])

  const handleSubmitAthlete = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/athletes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(athlete),
      });
    } catch (error: any) {
      console.log(error);
    }
  }

  const handleChangeAthlete = (e: ChangeEvent<HTMLInputElement>) => {
    setAthlete({
      ...athlete,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <p>ATLETAS</p>
      <form className="flex flex-col" onSubmit={handleSubmitAthlete}>
        Usuario:
        <input type="text" placeholder="Username" name="username" onChange={handleChangeAthlete} style={{ color: "black" }}/>
        Name:
        <input type="text" placeholder="Nombre" name="name" onChange={handleChangeAthlete} style={{ color: "black" }}/>
        Apellidos:
        <input type="text" placeholder="Apellido" name="surname" onChange={handleChangeAthlete} style={{ color: "black" }}/>
        Edad:
        <input type="text" placeholder="Edad" name="age" onChange={handleChangeAthlete} style={{ color: "black" }}/>
        <input type="submit" value="Enviar" />
      </form>
      {athletes.map((athlete: IAthlete) => (
        <p key={athlete._id}>
          {athlete.username} -- {athlete.age} -- {athlete._id}
        </p>
      ))}
    </>
  )
}
