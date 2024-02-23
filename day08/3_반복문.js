/*
    p.76 반복문 
        - 특정 조건을 충족할때 반복 작업
        - 필수는 아니다. 효율적인 코드로 변경 가능.
        - 형태 
            for( 초기값 ; 조건문 ; 증감식 ){ true일때 반복실행문; }
            for( 어디서부터 ; 어디까지 ; 몇씩증가/감소 ){ true일때 반복실행문; }
            for( let i = 1 ; i<=10 ; i++ ){ true일때 반복실행문; }
*/
// ex1) 반복문 없이 출력 10번 하기.
document.write('<p> 자바스크립트 공부 </p>');   // 코드 중복.
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');

// ex2) 반복문을 이용한 출력 10번 하기 
for( let i = 1 ; i<=10 ; i++ ){
    // i변수는 1 부터 10 이하까지 1씩증가 반복처리 뜻 
    document.write('<p> FOR자바스크립트 공부 </p>');
} // end 

// ex3 ) 엘레베이터가 1층 부터 5층 까지 1층씩 증가. [ 총 5번 반복 ]
for( let 층 = 1 ; 층<=5 ; 층++ ){
    // document.write( "<p>현재층 : "+층+"  올라가는중</p>" );
    document.write( `<p>현재층 : ${ 층 } 올라가는중</p>` );
}// end 

/*
    // for 실행 흐름 
    1. for 초기값이 실행된다.   let 층 = 1 
        2. for 조건문이 실행된다. 층 <= 5   [true]
            3. 조건결과 true이면 { } 안으로 들어감.( 반복처리)
                4. 실행문처리 
                    5. for 증감식 실행된다. 층++ , 층 = 2 
        2. for 조건문이 실행된다. 층 <= 5   [true]
            3. 조건결과 true이면 { } 안으로 들어감.( 반복처리)
                4. 실행문처리 
                    5. for 증감식 실행된다. 층++ , 층 = 2 
            3. 조건결과 false이면 { } 밖으로 나감. ( for 끝 )
    // for 순서도

    층      층<=5   반복처리         층++
    1       true    {}처리          층=2
    2       true    {}처리          층=3
    3       true    {}처리          층=4
    4       true    {}처리          층=5
    5       true    {}처리          층=6
    6       false   반복문종료.

*/

// ex5 ) 엘레베이터가 5층부터 1층까지 1층씩 감소 [ 총 5번 반복 ]
for( let 층 = 5 ; 층>=1 ; 층-- ){
    document.write( `<p>현재층 : ${ 층 } 내려가는중</p>` );
}// end 

// ex6 ) 2단 구구단 ( 반복문없이 )
document.write( `<p> 2 X 1 = 2 </p>`);  // 곱은 1부터 [ 1.초기값 ]
document.write( `<p> 2 X 2 = 4 </p>`);
document.write( `<p> 2 X 3 = 6 </p>`);
document.write( `<p> 2 X 4 = 8 </p>`);
document.write( `<p> 2 X 5 = 10 </p>`);     // 곱은 1씩증가. [ 3.증감식 ]
document.write( `<p> 2 X 6 = 12 </p>`);
document.write( `<p> 2 X 7 = 14 </p>`);
document.write( `<p> 2 X 8 = 16 </p>`);
document.write( `<p> 2 X 9 = 18 </p>`); // 곱은 9 까지 [ 2.조건문 ]

// ex7 ) 2단 구구단 ( for 사용 )
for( let 곱 = 1 ; 곱<=9 ; 곱++ ){
    document.write( `<p> 2 X ${ 곱 } = ${ 곱*2 } </p>`);
}// for end 




// ` : 키보드에서 tab키 위에 `(백틱) 이용한 문자처리 가능.
// 문자처리 : " " 또는 ' ' 또는 ` `
// 문자 안에 변수 또는 데이터 연결할떄
let 데이터 = 10;
    // 1. " " 또는 ' ' : + 연결연산자
document.write( '<p> 변수/데이터 출력 : ' + 데이터 + ' </p>' );
// 2_조건문 예제: document.write('<div> 활용1] 총점:'+총점+'  평균:'+평균+'</div>');
    // 2. ` ` : ${ }
document.write( `<p> 변수/데이터 출력 : ${ 데이터 } </p>`)
// 2_조건문 예제: document.write(`<div> 활용1] 총점:${ 총점 }  평균:${ 평균 }</div>`);


    


