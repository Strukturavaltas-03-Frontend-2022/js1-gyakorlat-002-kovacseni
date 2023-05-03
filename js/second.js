/*
- A `js/second.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként kap egy tetszőleges 
típusú elemeket tartalmazó tömböt és egy tetszőleges primitív értéket!
- A függvény neve `checker` legyen!
- A függvény __visszatérési értéke__ egy objektum, amely a következő 
property-ket tartalmazza:
- `exists`: Értéke true/false attól függően, hogy a második paraméterként 
megadott érték megtalálható-e a tömbben
- `index`: Értéke egy szám; ha a második paraméterként megadott érték 
megtalálható a tömbben, akkor a tömbben lévő indexe, 
ha nem, akkor -1 legyen az értéke
- `allElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömb minden eleme number típusú-e vagy sem
- `someElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömbben van-e number típusú elem vagy sem
*/

'use strict';

const checker = (array, primitive) => { 
    const isPrimitiveInArray = () => array.includes(primitive);
    const indexOfPrimitiveInArray = () => array.findIndex(item => item === primitive);
    const areAllNumbers = () => array.every(item => typeof item === 'number');
    const areSomeNumbers = () => array.some(item => typeof item === 'number');

    return {
    exists: isPrimitiveInArray(),
    index: indexOfPrimitiveInArray(),
    allElementsAreNumbers: areAllNumbers(),
    someElementsAreNumbers: areSomeNumbers()
}};