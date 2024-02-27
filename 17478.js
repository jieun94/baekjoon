//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const underline = "____";
let result = '';

function repeat(count) {
    const qes = '"재귀함수가 뭔가요?"\n';
    const ans1 = '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n'
    const ans1_1 = '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n'
    const ans1_2 = '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."\n';
    const ans2 = '"재귀함수는 자기 자신을 호출하는 함수라네"\n';
    const temp = concatUnderline(count)

    if(count !== N) {
        result = result.concat(temp).concat(qes)
        result = result.concat(temp).concat(ans1).concat(temp).concat(ans1_1).concat(temp).concat(ans1_2)
        return repeat(count+1)
    } else {
        result = result.concat(temp).concat(qes)
        result = result.concat(temp).concat(ans2)
        return result;
    }
}
function repeatAns(count) {
    if(count >= 0) {
        result = result.concat(concatUnderline(count)).concat("라고 답변하였지.\n");
        return repeatAns(count-1)
    } else {
        return;
    }
}

function concatUnderline(count) {
    let result = ''
    for (let i = 1; i <= count; i++) {
        result = result.concat(underline)
    }
    return result
}

console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
repeat(0)
repeatAns(N)
console.log(result)