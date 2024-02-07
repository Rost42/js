
function niceOutput (result){
    let len = result.toString().length
    let divider = ''
    for (let i = 0; i < len + 11; i++) {
        divider += '-'
    
    }
    
    console.log(divider);
    console.log(`Результат: ${result}`);
    console.log(divider);

}
let anyString = ' я могу ';
let newStr = anyString
niceOutput(anyString.replace('могу', 'не').trim().substring(0, 10).toUpperCase())

niceOutput(anyString)

niceOutput(anyString.toLowerCase())
niceOutput(anyString.trim)
niceOutput(anyString.substring(0, 9))
niceOutput(anyString.endsWith(' yy'))
niceOutput(anyString.endsWith('dd'))

niceOutput(anyString.split(''))