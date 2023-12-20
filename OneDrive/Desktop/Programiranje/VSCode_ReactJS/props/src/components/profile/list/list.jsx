export default function List(props) {
  return (
    <>
      <ul>
        {props.colors.map((color) => (
          <li key={color.id}>{color.name}</li>
        ))}
      </ul>
    </>
  );
}
//ova komponenta će bit lista boja
//iteriramo putem map-a kroz listu
//map nam za svaki item vrati list item koji u sebi sadrži ime boje
//postavili smo key, atribut unutar Reacta, da React lakše razazna kad se neki el promijenio
//key treba bit unikatan - id na svaku boju
