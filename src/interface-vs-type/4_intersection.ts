/*
    - Intersection
    [1, 2, 3]
    [1, 2, 3, 4, 5]
    [-1, 0, 1, 2, 3]
    - Base class
    - Force type casting with 'as'
*/
type Base = {
    id: number,
}
interface Diet extends Base {
    name: string,
    calories: number,
    description: { id: number }
}

type Training = {
    name: string,
    calories: number,
    notes: string[],
} & Base;

type Comment = {
    userId: number,
    content: string,
} & Base;

const comments: Comment[] = [{ id: 1, userId: 2, content: 'content' }];
const trainings: Training[] = [{ id: 1, name: 'train', calories: 200, notes: [] }]; 

const show = (param: { id: number }[]) => {
    console.log(param.forEach(item => item.id));
};

export const returnData = (): Diet[] => {
    return [{ id: 1, calories: 200, name: 'first1', description: { id: 1 } }] 
}

const type1 = returnData();
const type2 = [<Diet>undefined, <Diet>{ calories: 500, name: 'first1', description: { id: 7 }} ]; // Missing props
const type3 = [{name: 'first3', invalid: 'string' }, null as Diet ] as Diet[]; // Unknown props


show([...type1, ...type2, ...type3, ...comments, ...trainings]);