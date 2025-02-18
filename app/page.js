'use client'
import React, { useState } from 'react'
import Image from 'next/image';

export default function Page() {

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [resposta, setResposta] = useState();



    function Calcular() {

        const imc = (peso / (altura * altura));
        const imcArredondado = (parseFloat(imc.toFixed(2)));
        //setResposta(peso / (altura * altura));
        let classificacao = "";

        if (imc < 18.5) {

            classificacao = "Abaixo do peso"

        } else if (imc >= 18.5 && imc <= 24.9) {

            classificacao = "Peso Normal"
        } else if (imc >= 25.0 && imc <= 29.9) {
            classificacao = "Sobrepeso I"
        } else if (imc >= 30.0 && imc <= 39.0) {
            classificacao = "Obesidade II"
        } else {
            classificacao = "Obesidade grave III"
        }

        setResposta(`${imcArredondado} \n ${classificacao}`)

    }

    function Limpar() {
        setAltura("");
        setPeso("");
        setResposta("");
    }





    return (
        <div className='bg-gradient-to-r from-gray-300 from-20% via-sky-500 via-40% to-emerald-500 to-90% flex justify-center items-center rounded-lg  sm:w-[400px] h-[500px] w-[90vw]'>

            <div className='flex flex-col'>
                <div className='flex flex-col justify-center items-center'>
                    <Image
                        src='/imc.png'
                        alt='imc imagem'
                        width={90}
                        height={50}
                        className='flex justify-center items-center'

                    />
                    <h1 className='text-black font-bold text-center m-5'>Calculadora IMC</h1>

                </div>

                <div className='space-y-10 flex-col h-[300px] w-[300px] rounded-lg text-center flex justify-center items-center'>
                    <input type='number'
                        className='w-[250px] h-[50px] rounded-lg text-black p-2'
                        placeholder='Digite seu peso em kg'
                        value={peso}
                        onChange={(e) => setPeso(parseFloat(e.target.value))}
                        autoFocus
                    ></input>
                    <input type='number'
                        className='w-[250px] h-[50px] rounded-lg text-black p-2'
                        placeholder='Digite sua altura em cm'
                        value={altura}
                        onChange={(e) => setAltura(parseFloat(e.target.value))}
                    ></input>
                    <span className='text-black font-bold' >{resposta}</span>

                    <div className='flex flex-col space-y-5'>
                        <button className='font-bold bg-black w-[120px] h-[50px] rounded-lg hover:scale-110 hover:bg-green-400 hover:cursor-pointer hover:opacity-100'
                            onClick={Calcular} >Calcular IMC</button>

                        <button className='font-bold bg-black w-[120px] h-[50px] rounded-lg hover:scale-110 hover:bg-red-500 hover:cursor-pointer hover:opacity-100'
                            onClick={Limpar} >Limpar</button>


                    </div>



                </div>
            </div>


        </div>
    )
}
