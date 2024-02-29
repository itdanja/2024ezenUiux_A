
// * 배열객체 : (인덱스=0번시작) 저장순서대로 여러개 데이터 저장 
let 입력데이터배열 = [  ];
// 1. 내용을 입력 받는 함수
    // 등록버튼을 클릭할때마다 실행되는 함수(재사용).
    // 지역변수 : { } 안에서 선언된 변수 vs 전역변수 : { } 밖에서 선언된 변수
function 등록함수(){ // 함수 정의/만들기 
    // 1. input에 입력된 값(value) 호출
    let 입력데이터 = document.querySelector('#content').value;
        // 확인
    console.log( 입력데이터 ); // 크롬 개발자도구(f12) console탭에 출력하는 함수.
    // 2. 입력받은 변수( 지역변수=함수가 실행되고 종료되면 초기화 )를 배열(전역변수=JS종료될때까지 누적저장) 에 저장
        // P.87 배열에 데이터 추가함수 , 배열명.push( 새로운데이터 );
    입력데이터배열.push( 입력데이터 );
        // 확인 
    console.log( 입력데이터배열 );
    // 3.
    출력함수();
    // 4. 입력상자를 초기화 
    document.querySelector('#content').value = ''
} // f end 
// 2. 삭제 함수 ( 무엇을 삭제할껀지?? 증거 필요 )
function 삭제함수 ( 인덱스 ) {
    // p.87 배열내 데이터 삭제 , 배열명.splice( 삭제할인덱스 , 삭제개수 );
    입력데이터배열.splice( 인덱스 , 1 );
    // 삭제후 배열상태를 재 출력
    출력함수();
} // f end 
// 3. 출력 함수 ( 삭제 또는 등록시 할일목록 출력해주는 함수 )
function 출력함수(){
    // 3. ( 배열내 데이터들을 ) 출력 
    let html = ``;
        // 1. 배열에 있는 데이터 총개수( 배열명.length )만큼 반복횟수   
            // - 인덱스 0부터 마지막인덱스( 배열길이-1 )까지 1씩 증가
    for( let 인덱스 = 0 ; 인덱스 < 입력데이터배열.length ; 인덱스++ ){
        // 배열내 데이터 개수만큼 todo div 생성.
        html += `<div class="todo">
                    <div class="content"> ${ 입력데이터배열[인덱스] } </div>
                    <div class="btnBox">
                        <button type="button" onclick="삭제함수( ${ 인덱스 } )" > 삭제 </button>   
                    </div>
                </div>`
    } // for end 
        // 2. 어디에 출력
    document.querySelector('#todoBottom').innerHTML = html;
}