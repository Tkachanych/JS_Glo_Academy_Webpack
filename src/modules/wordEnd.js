const wordEnd = (num, arr) => {

    let result;
    if ([0,5,6,7,8,9].includes(num % 10) || [11,12,13,14].includes(num % 100)) result = arr[0];
    else if (num % 10 === 1) result = arr[1];
    else result = arr[2];
    return result;

}
export default wordEnd;