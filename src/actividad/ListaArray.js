import React from 'react';
import Lista from './Lista';

export default function ListaArray() {
    const cantidad=10;
    const array= ['Hacking with React',
    'React Native Express',
    'Mastering Modular JavaScript',
    'Practical Modern JavaScript',
    'U&I with React',
    'Developing with Angular',
    'The Road to learn React',
    'React.js for the Visual Learner',
    'Recipes with Angular.js',
    'Exploring ES6',
    'What You Need to Know about JavaScript',
    'Object-Oriented JavaScript – Second Edition',
    'The JavaScript Way',
    'Thinking in JavaScript',
    'What You Need To Know About Node.js',
    'Angular 2 Succinctly'];

    

    return (
        <>
            <h1 className='text-center'>Lista de libros </h1>
            <div>
            <Lista cantidad={cantidad} array={array}/>
            </div>
        </>
    )
}
