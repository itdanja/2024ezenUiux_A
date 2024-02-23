/* 
    // p.74
        조건문 : 조건에 따라서 코드를 실행하거나 실행하지 않을때 사용.
        형태
            1. 참일때 실행
                if( 조건식 ){ 조건식결과가true일때 }
            2. 참일때 실행 , 거짓일때 실행 
                if( 조건식 ){ 조건결과가true일떄 }
                else{ 조건결과가false일때; }
            3. 조건이 다수일때
                if( 조건식1 ){ 조건식1 참이면 }
                else if( 조건식2 ){ 조건식2 참이면 }
                else if( 조건식3 ){ 조건식3 참이면 }
                else{ 그외 }
            4. 중첩가능. 
                if( ){
                    if( ){ }
                    else{ }
                }else{
                    if( ){ }
                    else{ }
                }
*/

//1. ex1
if( 5 > 3 ){ document.write('<div> ex1] true </div>'); }
//2. ex2
if( true ){ document.write('<div> ex2] true </div>'); }
//3. ex3
if( false ){ document.write('<div> ex3] true </div>'); }

//4. ex4 만약에 점수가 80점이상이면 합격 아니면 (80미만이면) 불합격 
let 점수 = 82;
if( 점수>=80 ){ document.write('<div> ex4] 합격 </div>'); }
if( 점수<80 ){ document.write('<div> ex4] 불합격 </div>'); }

//5. ex4를 if else 변경 
if( 점수 >=80 ){ document.write('<div> ex5] 합격 </div>'); }
else{ document.write('<div> ex5] 불합격 </div>'); }

//6. 만약에 성별이 남자 이면서 총점수가 80점이상 '남자우수' 아니면 '남자장려'
    // 성별이 여자 이면서 총점수가 80점이상 '여자우수' 아니면 '여자장려'
let 성별 = '여자';
let 총점수 =  85;
if( 성별 == '남자'){ // 성별이 남자이면 
    if( 총점수 >= 80 ){ document.write('<div> ex6] 남자우수'); }
    else{ document.write('<div> ex6] 남자장려'); }
}else{ // 아니면 ( 여자 )
    if( 총점수 >= 80 ){ document.write('<div> ex6] 여자우수'); }
    else{ document.write('<div> ex6] 여자장려'); }
}

// 7. 월이 3~5[봄] , 6~8[여름] , 9~11[가을] , 12~2[겨울] 출력하시오.
let 월 = 2 ;
if( 월>=3 && 월<=5 ){ document.write('<div> ex7] 봄'); }
else if( 월>=6 && 월<=8 ){ document.write('<div> ex7] 여름'); }
else if( 월>=9 && 월<=11 ){ document.write('<div> ex7] 가을'); }
else { document.write('<div> ex7] 겨울'); }

// 활용1) prompt함수로 국어,영어,수학 점수 입력받아 각 변수에 저장.
//          총점 과 평균 계산해서 출력하기, 평균이 90점 이상이면 '우수학생' 출력하기
    // 1. [입력] -> 추후에 계산하기 위해 (변수) 저장
let 국어 = parseInt( prompt('국어점수 입력') ) ; // prompt 이용한 숫자 입력받을경우 문자
let 영어 = parseInt( prompt('영어점수 입력') ) ; // 숫자10 vs 문자"10" 다르다.
let 수학 = parseInt( prompt('수학점수 입력') ) ; // prompt는 문자입력 만 가능.
// prompt에서 숫자 입력받고 싶어. 해결방안 형변환p73. 
// 문자 "10" -----> 숫자 10  
    // prompt()                 : 문자 입력       // parseInt( prompt( ) )    : 숫자 입력 
    // 2. [처리]
let 총점 = 국어+영어+수학;  // 더하기 
let 평균 = 총점/3;          // 총점/과목수3
    // 3. [출력]    * 변수는 문자처리 안됨. 문자연결 
document.write('<div> 활용1] 총점:'+총점+'  평균:'+평균+'</div>');
                // '문자' + 변수 + '문자' + 변수 + '문자'
if( 평균>=90 ){ document.write('<div> 활용1] 우수학생'); } 

// 활용2) prompt함수로 정수 입력받아 홀수이면 '홀수' 짝수이면 '짝수' 출력하시오.
let 정수 = prompt('정수 입력해주세요');
    // 홀수/짝수 찾는법 : 특정 값에 나누기 2를 했을때 나머지가 0 이면 짝수 1이면 홀수 
    // 짝수 공식 : 값 % 2 == 0 , 홀수 공식 : 값 % 2 == 1
if( 정수 % 2 == 0 ){ document.write('<div> 활용2] 짝수'); }
else{ document.write('<div> 활용2] 홀수'); }


    

