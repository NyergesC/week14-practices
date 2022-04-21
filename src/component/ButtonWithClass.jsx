import React, { Component } from 'react'


class ButtonWithClass extends Component {
    constructor(){
        // super() köti össze a construktoron belüli dolgokat a class-ok között (mivel extends használunk)
        super() //ha extendelunk egy class egy masikkal akkor ezzel hivjuk meg az o constructorat, tehat mindenkeppen kell
        this.state = {
            key1: 'This is the default state of Class Component',
            key2: 0,
            title: {
                main: "main title",
                sub: 'sub title'
            },
            countries: []
        }
        console.log('1')
    };

    componentDidMount(){

        console.log('3')
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
                .then(countriesData => this.setState(
                    () => {
                        return {countries: countriesData}
                    },
                    () => {
                        console.log(this.state)
                    }
                ))
    }
    // a setSate egy asszinkron methodus!!!!
    render() {
        console.log('2')
        return (
            <>
            <div>{this.state.key1}</div> 
            <button onClick={() => this.setState({key1: 'This is the default state of Class Component CLICKED'})}>CLICK</button>
           {/*  <button onClick={() =>{
               this.state.key2=1
               console.log(this.state) //azert kell {}ba rakni mert uj objektumot hoz letre a lentebb levo sorban aminek a kulcsat adjuk meg
            }}>{this.state.key2}</button>   */}
{/*             <button onClick={() => this.setState({key2:1})}></button> */}  
{/*              <button onClick={() =>{
             this.setState({
                 title: {
                    main:'h1',
                    sub:'string'                 
            })
                console.log(this.state)
            }}>{this.state.title.main}</button> */}
             <button onClick={() =>{
             this.setState(
                () => {
                    return {
                        title: {
                            main:'h1',
                            sub:'string'                 
                }}
                },         
                () => {
                    console.log(this.state)
                },         
             )
             console.log(this.state)
            }}>{this.state.title.main}</button>

            <div className='countries'>
                {this.state.countries.map((country, index) => <div key={index}>{country.name.common}</div>)}
            </div>
            </>
        );
    };
};

export default ButtonWithClass
