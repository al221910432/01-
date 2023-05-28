import React from "react";

const EverydayTypes = () => {

    let username: string = 'Hector';
    const age: number = 22;
    const average: number = 7;
    const arrayVariable1: Array<string | number> = ['Hector', 22, 7];
    const myarr: string[] = [];
    const arrayVariable2: Array<bigint> = [BigInt(221910432)];
    let big1 = BigInt(221910432);

    myarr.push(username);
    myarr.push(age.toString());
    myarr.push(average.toString());

    return (
        <div>
            <ul>
                <li>string: {username}</li>
                <li>number: {age}</li>
                <li>number: {average}</li>
                <li>Array: {arrayVariable1.join(',')}</li>
                <li>Array: {arrayVariable2.join(',')}</li>
            </ul>
        </div>
    )
}

export default EverydayTypes