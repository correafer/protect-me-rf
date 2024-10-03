"use client";

import Image from "next/image";
import React, {useState} from "react";

import { RotatingLines } from 'react-loader-spinner'


export default function Home() {
  const [loading, setLoading] = useState(false);


  const handleClick = (button) => {
    if (button === 'A') {
      setLoading(true);
      fetch('https://coherent-flounder-terribly.ngrok-free.app/api/iot/sound')
      .then((response) => response.json())
      .then(async (data) => {
        console.log('Resposta da API:', data);
        await new Promise(resolve => setTimeout(resolve, 10000));
        setLoading(false);
      })
      .catch(async (error) => {
        console.error('Erro na requisição:', error);
      });
      console.log('Botão A clicado');
    }
    if (button === 'B') {
      setLoading(true);
      fetch('https://coherent-flounder-terribly.ngrok-free.app/api/iot/soundios')
      .then((response) => response.json())
      .then(async (data) => {
        console.log('Resposta da API:', data);
        await new Promise(resolve => setTimeout(resolve, 10000));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro na requisição:', error);
        
      });
      console.log('Botão B clicado');
    }
    if (button === 'C') {
      setLoading(true);
      fetch('https://coherent-flounder-terribly.ngrok-free.app/api/iot/delete')
      .then((response) => response.json())
      .then(async (data) => {
        console.log('Resposta da API:', data);
        await new Promise(resolve => setTimeout(resolve, 10000));
        setLoading(false);  
      })
      .catch((error) => {
        console.error('Erro na requisição:', error);
      });
      console.log('Botão C clicado');
    }
    if (button === 'D') {
      console.log('Botão D clicado');
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/image.png"
          alt="Remote control transmitter"
          width={400}
          height={400}
          style={{position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)'}}
          priority
        />

      <div className="grid grid-cols-4 gap-4 w-full justify-center">
      <button onClick={() => handleClick('A')} className="button  text-black w-12 h-12" style={{position: 'absolute', top: '36%', left: '43%', transform: 'translate(-50%, -50%)'}}></button>
      <button onClick={() => handleClick('B')} className="button  text-black w-12 h-12" style={{position: 'absolute', top: '36%', left: '68%', transform: 'translate(-50%, -50%)'}}></button>
      <button onClick={() => handleClick('C')} className="button  text-black w-12 h-12" style={{position: 'absolute', top: '44.5%', left: '30.5%', transform: 'translate(-50%, -50%)'}}></button>
      <button onClick={() => handleClick('D')} className="button  text-black w-12 h-12" style={{position: 'absolute', top: '44.5%', left: '55%', transform: 'translate(-50%, -50%)'}}></button>
    </div>
      </main>

      {loading && <RotatingLines
  visible={true}
  height="50"
  width="50"
  color="grey"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />}
    </div>
  );
}
