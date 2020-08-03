import React from 'react';

const data: Array<string[] | undefined[]> = [];
data[0] = ['6:00', '10:00', '14:00', '18:00', '22:00', '02:00'];
data[1] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const make2DArray = (cols: any, rows: any) => {
    let arr = new Array(cols);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }

    return arr;
}

const new2DArray = make2DArray(data[1], data[0]);

console.log('new2DArray = ', new2DArray);


const WeekTable: React.FC = () => {
    return <div className="week-table__container">
        { new2DArray.map((dataPiece: any, index: number) => {
            return <div className="m-1" key={index}>
                <p>{dataPiece}</p>
            </div>
        })}
    </div>
};

export default WeekTable;