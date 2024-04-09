/* 
    Optional params
    - Extend interface/type
    - Intersection merge with type, error with interface
    - Export common params in base interface
*/

// db?.user?.id

type Parent1 = {
    id: string;
    name?: string;
    number?: number | boolean;
};

type Parent2 = {
    id?: string;
    name: string;
    number: number | boolean | string;
    test: string;
};

//interface Child extends Parent1, Parent2 {} 

type Child = Parent1 & Parent2;

const child: Child = {
    id: '123',
    name: '',
    number: true,
    test: '123'
}