
export default function ObjectProp({list,object}){
    return(
        <>
            <h1>list:{list.join(',')}</h1>
            <h1>Object:name:{object.name},age:{object.name},gender:{object.gender}</h1>
        </>
    );
}