/* Union 
    - primitive values and custom unions, 
    - group unions, 
    - unions in interface as param
    - extend type and interface at same time
    - mix different types with the same values
*/

type Vehicles = 'Bus' | 'Truck' | 'Plane' | 'Bike' | 'Walk' | 'Snowboard';
const motor: Vehicles = 'Bike';
type Motor = 'Bus' | 'Truck' | 'Plane';
type Eco = 'Bike' | 'Walk' | 'Snowboard';
type Transport = Motor | Eco;

const vehicle: Eco = 'Bike';
const getTransport = (param: Transport) => {
    console.log(param);
}
//getTransport(motor);

// Combined usage with interface and type
interface Bus {
    param: 'Bus' | 'Truck' | 'Plane' | 'Bike' | 'Walk' | 'Snowboard'
};
interface Car {};
interface Bike {};
interface Walk {};

type T2 = Bus | Car | Bike | Walk;

// type extend
type T3 = Car & Bike & Bus & { param: 'Bus' | 'Truck' | 'Plane' | 'Bike' | 'Walk' | 'Snowboard' };

// interface extend
interface T4 extends Bus, Car, Bike, Walk {};