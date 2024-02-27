/*
    제어문
        - 조건문 : if문
            - 흐름에 제어   : 상황(T/F)에 코드의 실행여부 판단
  
        - 반복문 : for문
            - 특정코드 반복 : 상황(T/F)에 코드를 실행 반복여부 판단 
*/
// 1. 복습1
if( true ){ document.write( '<p>day08복습</p>'); }
// 2. 복습2
if( 3 > 2 ){ document.write( '<p>true</p>'); }
else{ document.write( '<p>false</p>'); }
// 3. 복습3 
if( 10 > 9 ){ document.write('<p> 10 > 9 true </p>') }
else if( 10 > 6 ){ document.write('<p> 10 > 6 true </p>'); }
else if( 10 > 3 ){ document.write('<p> 10 > 3 true </p>'); }
else{ document.write('<p> 그외 false </p>'); }
// 4. 복습 활용1 : 아래 점수 변수의 값이 
    // 90점이상이면 '합격' 70이상이면 '재시험' 그외 '탈락' HTML 출력 
let 점수 = 75;
if( 점수 >= 90 ){ document.write('<p>합격</p>'); }
else if( 점수 >= 70 ){ document.write('<p>재시험</p>'); }
else{ document.write('<p>탈락</p>'); }
// 5. 복습4
for( let i = 1 ; i <= 5 ; i++ ){    // i는 1부터 5이하 까지 1씩증가, i가 6일때 종료
    document.write(`<p>${ i }</p>`); // ` : 키보드 왼쪽tab키 위에 `키
} // for end 
for( let i = 5 ; i >= 1 ; i-- ){    // i는 5부터 1이상 까지 1씩증가, i가 0일때 종료 
    document.write(`<p>${ i }</p>`);
}
// 6. 복습 활용2 : 아래 합계 변수의 1~10까지 누적합계를 구하는 for를 작성하시오.
let 합계 = 0;
// 1 더하기  // 복합연산자  , 합계 = 합계 + 1 ; 
// 합계 += 1;  합계 += 2;합계 += 3;합계 += 4;합계 += 5;합계 += 6;
// 합계 += 7;합계 += 8;합계 += 9;합계 += 10;
for( let i = 1 ; i<=10 ; i++ ){
    합계 += i;
}
document.write(`<p>${ 합계 }</p>`);

// 7. 복습5 : (2단) 구구단 출력 
    // 1. 반복문 없을떄. : 곱이 1부터 9까지 1씩증가 패턴.
document.write(`<p> 2 x 1 = 2 </p>`);
document.write(`<p> 2 x 2 = 4 </p>`);
document.write(`<p> 2 x 3 = 6 </p>`);
document.write(`<p> 2 x 4 = 8 </p>`);
document.write(`<p> 2 x 5 = 10 </p>`);
document.write(`<p> 2 x 6 = 12 </p>`);
document.write(`<p> 2 x 7 = 14 </p>`);
document.write(`<p> 2 x 8 = 16 </p>`);
document.write(`<p> 2 x 9 = 18 </p>`);
    // 2. 반복문 사용했을때.
for( let 곱 = 1 ; 곱 <= 9; 곱++ ){
    document.write(`<p> 2 x ${ 곱 } = ${ 2*곱 } </p>`);
}
// 8. 복습 활용3 : 2~9단 구구단 출력.
    // 1. 2~9 단 출력 ( 단 : 2부터 9까지 1씩 증가 패턴 )
for( let 단 = 2 ; 단 <= 9 ; 단++ ){
    document.write(`<p> ${ 단 } </p>`);
}
    // 2. 1~9 곱 출력 ( 곱 : 1부터 9까지 1씩 증가 패턴 )
for( let 곱 = 1 ; 곱 <= 9 ; 곱++ ){
    document.write(`<p> ${ 곱 } </p>`);
}
    // 1,2 합치기 ( 단 마다 곱 실행 , 곱 마다 단 실행 X  )
// 1. [X]
// for( let 곱 = 1 ; 곱 <= 9 ; 곱++ ){
//     document.write(`<p> ${ 곱 } </p>`);
//     for( let 단 = 2 ; 단 <= 9 ; 단++ ){
//         document.write(`<p> ${ 단 } </p>`);
//     }
// }
// 2. 단 FOR문이 1회전 할때마다 곱은 9회전 => 72회전 
for( let 단 = 2 ; 단 <= 9 ; 단++ ){         // 8회전 
    // for문 안에 for문 : for 중첩 ( 중첩일때는 위에 for문이 1회 할때마다 아래 for문은 모두 회전 )
    for( let 곱 = 1 ; 곱 <= 9 ; 곱++ ){     // 9회전 
        document.write(`${단} X ${곱} = ${ 단*곱 } , `); // 총 회전수 : 72회전 
    } // 단 마다 곱 끝

    document.write('<br/>');

} // 단 끝 


