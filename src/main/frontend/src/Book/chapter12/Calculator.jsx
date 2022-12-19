
/* 1.임포트 */
import React , { useState } from 'react';
import TemperatureInput from './TemperatureInput';
/*-------*/

/* 2.전역변수 */

// 1. p.338 매개변수[props]의 온도가 100 이상이면 렌더링 아니면 렌더링 하는 컴포넌트
function BoilingVerdict( props ){
    if( props.celsius >= 100 ){ return <p> 물이 끓습니다 </p>; }
    return <p> 물이 끓지 않습니다. </p>;
}
// 2. 매개변수 화씨 -> 섭씨 변환 하는 계산 함수
function toCelsius( fahrenheit ){
    return (( fahrenheit - 32 ) * 5 / 9 );      // 변환 계산식
}
// 3. 매개변수 섭씨 -> 화씨 변환 하는 계산 함수
function toFahrenheit( celsius ){
    return ( celsius * 9 ) / 5 + 32;            // 변환 계산식
}

// 4.
function tryConvert( temperature , convert ){
    const input = parseFloat( temperature );    // 매개변수 temperature 실수형 형변환
    if( Number.isNaN( input ) ){ return ""; }   // 만약에 매개변수가 숫자가 아니면 공백 리턴

    const output = convert(input);              // 매개변수를 convert 함수에 대입
    const rounded = Math.round( output * 1000 ) / 1000; // 반올림
    return rounded.toString();  // 결과를 문자열로 반환
}
/*--------- */

// 3. p.339 컴포넌트[함수] 만들기
export default function Calculator( props ){

    /* ------------ 4.js , react[ 함수 , 지역변수]  -------------------*/
    const [ temperature , setTemperature ] = useState(""); // 온도 메모리
    const [ scale , setScale ] = useState("c");
    /* ------------------------------------------ */

    // 1. 온도 업데이트 함수
    const handleCelsiusChange = ( t ) => {   setTemperature(t);     setScale("c"); }
    const handleFahrenheitChange = ( t ) => { setTemperature(t);     setScale("f"); }

    // 2. 온도 표시하는 함수 [ 형변환 ]
    const fahrenheit = scale == "c" ? tryConvert( temperature , toCelsius ) : temperature;
    const celsius = scale == "f" ? tryConvert( temperature , toFahrenheit ) : temperature;

    /* ------------ 5. html or jsx표현식 { }------------------*/
    return(
        <div>
            { /*섭 씨 입력 */ }
            <TemperatureInput
               scale = "c"
               temperature = { celsius }
               onTemperatureChange = {handleCelsiusChange}
            />
             { /*화 씨 입력 */ }
            <TemperatureInput
               scale = "f"
               temperature = { fahrenheit }
               onTemperatureChange = {handleFahrenheitChange}
            />
            <BoilingVerdict celsius = { parseFloat(celsius ) } />
        </div>
    )
    /* -------------------------------------------*/
}

